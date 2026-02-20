"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getActiveMissions } from "@/app/actions";
import { Project, TaskType } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Leaf, AudioLines, Type, Activity, ChevronRight, ChevronLeft } from "lucide-react";

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 70,
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

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -10,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="relative group min-w-[320px] md:min-w-[360px] h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex-shrink-0"
        >
            {/* Project Image - Absolute Background */}
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                {mission.image ? (
                    <img
                        src={mission.image}
                        alt={mission.name}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-40" />
                )}
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col p-8 z-10">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-auto">
                    <div className="backdrop-blur-3xl bg-white/5 border border-white/10 p-3.5 rounded-2xl shadow-2xl">
                        <MissionIcon type={mission.type} />
                    </div>
                    <div className="px-3.5 py-1 rounded-full backdrop-blur-3xl bg-gold-mid/10 border border-gold-mid/20 text-[9px] text-gold-mid font-black tracking-[0.2em] uppercase">
                        {mission.type}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-gold-mid transition-colors duration-300">
                        {mission.name}
                    </h3>

                    <p className="text-[14px] text-zinc-400 font-medium leading-relaxed line-clamp-3 opacity-75">
                        {mission.description}
                    </p>

                    {/* Progress with Glow */}
                    <div className="space-y-3 pt-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Maturity</span>
                            <span className="text-sm font-black text-gold-mid">{mission.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${mission.progress}%` }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid shadow-[0_0_20px_rgba(255,224,2,0.3)]"
                            />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-6 mt-4 border-t border-white/5">
                        <div className="space-y-1">
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-500">Yield</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-black text-white px-2 py-0.5 rounded bg-white/5">${mission.rewardPerTask.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="text-right space-y-1">
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-500">Nodes</p>
                            <p className="text-lg font-black text-white">{mission.contributors.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1] bg-[#050505]">
                    <Link
                        href={session ? "/dashboard" : "/signup"}
                        className="w-full py-4 rounded-[1.25rem] bg-gold-mid text-black text-[12px] font-black tracking-widest flex items-center justify-center gap-2 hover:bg-gold-light transition-all shadow-[0_15px_30px_rgba(255,224,2,0.15)] uppercase"
                    >
                        Initiate <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </Link>
                </div>
            </div>

            {/* Premium Border Highlight on Hover */}
            <div className="absolute inset-0 border-[2px] border-gold-mid/0 group-hover:border-gold-mid/10 rounded-[2rem] transition-all duration-500 pointer-events-none" />
        </motion.div>
    );
};

/* ─── Main Section ─────────────────────────────────────────── */

export const ActiveMissions = () => {
    const [missions, setMissions] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

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

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.offsetWidth * 0.7;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    if (loading) return (
        <div className="py-24 flex items-center justify-center bg-[#050505]">
            <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-gold-mid/20 border-t-gold-mid rounded-full animate-spin" />
                <div className="animate-pulse text-gold-mid font-black tracking-[0.4em] text-[9px] uppercase">Deciphering Protocols...</div>
            </div>
        </div>
    );

    if (missions.length === 0) return null;

    return (
        <section className="relative py-24 overflow-hidden bg-[#050505]">
            {/* Background Ambience */}
            <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-gold-mid/5 rounded-full blur-[150px] pointer-events-none opacity-30" />
            <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-gold-mid/5 rounded-full blur-[120px] pointer-events-none opacity-20" />

            <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    {/* Section Heading */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-4">
                            <motion.div variants={cardVariants} className="flex items-center gap-3">
                                <div className="h-px w-8 bg-gold-mid/30" />
                                <p className="text-premium-label uppercase tracking-[0.4em] text-[9px] font-black opacity-60">
                                    Strategy
                                </p>
                            </motion.div>
                            <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-black heading-gold tracking-tighter lowercase">
                                <span className="text-white">active</span> missions<span className="text-gold-mid">.</span>
                            </motion.h2>
                            <motion.p variants={cardVariants} className="text-silver-gradient text-lg max-w-2xl opacity-75 font-medium leading-relaxed">
                                Join the network. Scaling Ethiopia&apos;s digital sovereignty.
                            </motion.p>
                        </div>

                        {/* Slider Controls */}
                        {missions.length > 3 && (
                            <div className="flex items-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 224, 2, 0.08)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scroll('left')}
                                    className="p-4 rounded-full border border-white/10 bg-white/5 hover:border-gold-mid/30 transition-all text-white hover:text-gold-mid"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 224, 2, 0.08)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scroll('right')}
                                    className="p-4 rounded-full border border-white/10 bg-white/5 hover:border-gold-mid/30 transition-all text-white hover:text-gold-mid"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </motion.button>
                            </div>
                        )}
                    </div>

                    {/* Slider Container */}
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar scroll-smooth"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {missions.map((mission) => (
                                <div key={mission.id} style={{ scrollSnapAlign: 'start' }} className="flex-shrink-0">
                                    <MissionCard mission={mission} />
                                </div>
                            ))}
                        </div>

                        {/* Fade Edges */}
                        <div className="absolute top-0 right-0 bottom-12 w-24 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none hidden lg:block z-20" />
                        <div className="absolute top-0 left-0 bottom-12 w-24 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none hidden lg:block z-20" />
                    </div>

                    {/* Mobile Footer */}
                    <motion.div variants={cardVariants} className="flex justify-center pt-4">
                        <Link href="/projects" className="group flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-zinc-600 hover:text-gold-mid transition-all uppercase">
                            Archive
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};
