"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getActiveMissions } from "@/app/actions";
import { Project, TaskType } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Leaf, AudioLines, Type, Activity, ChevronRight } from "lucide-react";

/* ─── Animation Variants ─────────────────────────────────────── */

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 15,
        },
    },
};

/* ─── Helper Components ─────────────────────────────────────── */

const MissionIcon = ({ type }: { type: TaskType }) => {
    switch (type) {
        case TaskType.Image:
            return <Leaf className="w-5 h-5 text-green-400" />;
        case TaskType.Audio:
            return <AudioLines className="w-5 h-5 text-blue-400" />;
        case TaskType.Text:
            return <Type className="w-5 h-5 text-amber-400" />;
        default:
            return <Activity className="w-5 h-5 text-gold-mid" />;
    }
};

const MissionCard = ({ mission }: { mission: Project }) => {
    const { data: session } = useSession();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                scale: 1.03,
                borderColor: "rgba(255, 224, 2, 0.4)",
                boxShadow: "0 0 20px rgba(255, 224, 2, 0.1)"
            }}
            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 flex flex-col h-full transition-colors duration-300"
        >
            {/* Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-gold-mid/0 via-gold-mid/0 to-gold-mid/0 group-hover:via-gold-mid/10 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,224,2,0.1)] group-hover:shadow-[0_0_20px_rgba(255,224,2,0.2)] transition-all">
                    <MissionIcon type={mission.type} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-geist-mono">
                    ID: {mission.id.slice(-6)}
                </span>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 font-urbanist group-hover:text-gold-mid transition-colors">
                    {mission.name}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-6 font-urbanist leading-relaxed">
                    {mission.description}
                </p>

                {/* Progress Section */}
                <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-[11px] font-geist-mono text-zinc-500">
                        <span>Progress</span>
                        <span className="text-gold-mid">{mission.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${mission.progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-gold-mid to-gold-light shadow-[0_0_8px_rgba(255,224,2,0.5)]"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div className="space-y-1">
                        <p className="text-[9px] uppercase tracking-tighter text-zinc-500 font-geist-mono">Reward / Task</p>
                        <p className="text-sm font-bold text-white font-geist-mono">${mission.rewardPerTask.toFixed(2)}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[9px] uppercase tracking-tighter text-zinc-500 font-geist-mono">Contributors</p>
                        <p className="text-sm font-bold text-white font-geist-mono">{mission.contributors}</p>
                    </div>
                </div>
            </div>

            {/* Participate Button Overlay */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        className="absolute bottom-6 left-6 right-6"
                    >
                        <Link
                            href={session ? "/dashboard" : "/signup"}
                            className="w-full py-3 rounded-xl bg-gold-mid text-black text-sm font-bold flex items-center justify-center gap-2 hover:bg-gold-light transition-colors shadow-lg"
                        >
                            Participate <ChevronRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ─── Main Section ─────────────────────────────────────────── */

export const ActiveMissions = () => {
    const [missions, setMissions] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMissions = async () => {
            const result = await getActiveMissions();
            if (result.success && result.projects) {
                setMissions(result.projects);
            }
            setLoading(false);
        };
        fetchMissions();
    }, []);

    if (loading) return (
        <div className="py-20 flex items-center justify-center">
            <div className="animate-pulse text-gold-mid font-geist-mono tracking-tighter">Loading Active Missions...</div>
        </div>
    );

    if (missions.length === 0) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-mid/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    {/* Section Heading */}
                    <div className="space-y-3">
                        <motion.p variants={cardVariants} className="text-premium-label uppercase tracking-[0.2em] text-[10px]">
                            Available Opportunities
                        </motion.p>
                        <div className="flex items-end justify-between">
                            <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-black heading-gold tracking-tight">
                                Active <span className="text-white">Missions</span>
                            </motion.h2>
                            <motion.div variants={cardVariants} className="hidden md:block">
                                <Link href="/projects" className="text-sm text-zinc-500 hover:text-gold-mid transition-colors flex items-center gap-2 font-geist-mono">
                                    Browse All Projects <ChevronRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                        <motion.p variants={cardVariants} className="text-silver-gradient body-premium max-w-2xl">
                            Real-world tasks contributing to Ethiopia&apos;s digital transformation. Choose a mission and start earning.
                        </motion.p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {missions.map((mission) => (
                            <MissionCard key={mission.id} mission={mission} />
                        ))}
                    </div>

                    {/* Mobile view all link */}
                    <motion.div variants={cardVariants} className="md:hidden pt-4">
                        <Link href="/projects" className="w-full py-4 border border-white/10 rounded-xl text-center text-sm font-geist-mono text-zinc-400">
                            View All Projects
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
