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

const MissionCard = ({ mission }: { mission: any }) => {
    const { data: session } = useSession();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={cardVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                y: -10,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="relative group h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-2xl"
        >
            {/* Project Image - Absolute Background */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                {mission.image ? (
                    <img
                        src={mission.image}
                        alt={mission.name}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-50" />
                )}
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col p-8 z-10">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-auto">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-3 rounded-2xl shadow-xl">
                        <MissionIcon type={mission.type} />
                    </div>
                    <div className="px-3 py-1 rounded-full backdrop-blur-xl bg-gold-mid/10 border border-gold-mid/20 text-[10px] text-gold-mid font-black tracking-widest uppercase">
                        {mission.type}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white tracking-tight leading-none group-hover:text-gold-mid transition-colors duration-300">
                        {mission.name}
                    </h3>

                    <p className="text-sm text-zinc-400 font-medium leading-relaxed line-clamp-3">
                        {mission.description}
                    </p>

                    {/* Progress with Glow */}
                    <div className="space-y-3 pt-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Milestone</span>
                            <span className="text-sm font-black text-gold-mid">{mission.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${mission.progress}%` }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid shadow-[0_0_20px_rgba(255,224,2,0.6)]"
                            />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10">
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-1">Incentive</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-black text-white">${mission.rewardPerTask.toFixed(2)}</span>
                                <span className="text-[10px] text-zinc-500 font-bold">/task</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-1">Network</p>
                            <p className="text-lg font-black text-white">{mission.contributors.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#050505] to-transparent">
                    <Link
                        href={session ? "/dashboard" : "/signup"}
                        className="w-full py-4 rounded-2xl bg-gold-mid text-black text-[13px] font-black flex items-center justify-center gap-2 hover:bg-gold-light transition-all shadow-[0_0_30px_rgba(255,224,2,0.3)] hover:scale-[1.02]"
                    >
                        START MISSION <ChevronRight className="w-5 h-5 stroke-[3]" />
                    </Link>
                </div>
            </div>

            {/* Premium Border Highlight on Hover */}
            <div className="absolute inset-0 border-2 border-gold-mid/0 group-hover:border-gold-mid/30 rounded-[2rem] transition-all duration-500 pointer-events-none" />
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
