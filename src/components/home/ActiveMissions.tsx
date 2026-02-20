"use client";

import React, { useEffect, useState } from "react";
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
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="relative group min-w-[340px] md:min-w-[420px] h-[540px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#0a0a0a] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex-shrink-0"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col p-10 z-10">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-auto">
                    <div className="backdrop-blur-3xl bg-white/5 border border-white/10 p-4 rounded-2xl shadow-2xl">
                        <MissionIcon type={mission.type} />
                    </div>
                    <div className="px-4 py-1.5 rounded-full backdrop-blur-3xl bg-gold-mid/10 border border-gold-mid/20 text-[10px] text-gold-mid font-black tracking-[0.3em] uppercase">
                        {mission.type}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-5">
                    <h3 className="text-4xl font-black text-white tracking-tighter leading-none group-hover:text-gold-mid transition-colors duration-400">
                        {mission.name}
                    </h3>

                    <p className="text-[15px] text-zinc-400 font-medium leading-relaxed line-clamp-3 opacity-70">
                        {mission.description}
                    </p>

                    {/* Progress with Glow */}
                    <div className="space-y-4 pt-6">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Protocol Status</span>
                            <span className="text-sm font-black text-gold-mid">{mission.progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${mission.progress}%` }}
                                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid shadow-[0_0_30px_rgba(255,224,2,0.4)]"
                            />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 pt-10 mt-8 border-t border-white/5">
                        <div className="space-y-2">
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Resource Yield</p>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl font-black text-white">${mission.rewardPerTask.toFixed(2)}</span>
                                <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest whitespace-nowrap">/ task</span>
                            </div>
                        </div>
                        <div className="text-right space-y-2">
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Active Nodes</p>
                            <p className="text-2xl font-black text-white">{mission.contributors.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-x-0 bottom-0 p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[0.16, 1, 0.3, 1] bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent">
                    <Link
                        href={session ? "/dashboard" : "/signup"}
                        className="w-full py-5 rounded-[2rem] bg-gold-mid text-black text-[13px] font-black tracking-[0.1em] flex items-center justify-center gap-3 hover:bg-gold-light transition-all shadow-[0_25px_50px_rgba(255,224,2,0.2)]"
                    >
                        INITIATE MISSION <ChevronRight className="w-5 h-5 stroke-[3]" />
                    </Link>
                </div>
            </div>

            {/* Premium Border Highlight on Hover */}
            <div className="absolute inset-0 border-[3px] border-gold-mid/0 group-hover:border-gold-mid/10 rounded-[3rem] transition-all duration-700 pointer-events-none" />
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
            const scrollAmount = current.offsetWidth * 0.8;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    if (loading) return (
        <div className="py-32 flex items-center justify-center bg-[#050505]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-gold-mid/20 border-t-gold-mid rounded-full animate-spin" />
                <div className="animate-pulse text-gold-mid font-black tracking-[0.5em] text-[10px] uppercase">Deciphering Mission Protocols...</div>
            </div>
        </div>
    );

    if (missions.length === 0) return null;

    return (
        <section className="relative py-40 overflow-hidden bg-[#050505]">
            {/* Background Ambience */}
            <div className="absolute top-[20%] right-[10%] w-[800px] h-[800px] bg-gold-mid/5 rounded-full blur-[200px] pointer-events-none opacity-40" />
            <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-gold-mid/5 rounded-full blur-[180px] pointer-events-none opacity-30" />

            <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="space-y-20"
                >
                    {/* Section Heading */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div className="space-y-6">
                            <motion.div variants={cardVariants} className="flex items-center gap-3">
                                <div className="h-px w-12 bg-gold-mid/30" />
                                <p className="text-premium-label uppercase tracking-[0.5em] text-[10px] font-black opacity-60">
                                    Operation Overview
                                </p>
                            </motion.div>
                            <motion.h2 variants={cardVariants} className="text-6xl md:text-8xl font-black heading-gold tracking-tighter lowercase">
                                <span className="text-white">active</span> missions<span className="text-gold-mid">.</span>
                            </motion.h2>
                            <motion.p variants={cardVariants} className="text-silver-gradient text-xl max-w-3xl opacity-80 leading-relaxed font-medium">
                                Join the network. Contribute to the foundational datasets scaling Ethiopia&apos;s digital sovereignty.
                            </motion.p>
                        </div>

                        {/* Slider Controls */}
                        {missions.length > 3 && (
                            <div className="flex items-center gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 224, 2, 0.1)" }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => scroll('left')}
                                    className="p-6 rounded-full border border-white/10 bg-white/5 hover:border-gold-mid/40 transition-all text-white hover:text-gold-mid shadow-2xl"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 224, 2, 0.1)" }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => scroll('right')}
                                    className="p-6 rounded-full border border-white/10 bg-white/5 hover:border-gold-mid/40 transition-all text-white hover:text-gold-mid shadow-2xl"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </motion.button>
                            </div>
                        )}
                    </div>

                    {/* Slider Container */}
                    <div className="relative -mx-8 md:-mx-12 px-8 md:px-12">
                        <div
                            ref={scrollRef}
                            className="flex gap-10 overflow-x-auto pb-20 hide-scrollbar scroll-smooth"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {missions.map((mission) => (
                                <div key={mission.id} style={{ scrollSnapAlign: 'start' }} className="first:pl-0 last:pr-12">
                                    <MissionCard mission={mission} />
                                </div>
                            ))}
                        </div>

                        {/* Fade Edges */}
                        <div className="absolute top-0 right-0 bottom-20 w-40 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none hidden lg:block z-20" />
                        <div className="absolute top-0 left-0 bottom-20 w-40 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none hidden lg:block z-20" />
                    </div>

                    {/* Mobile Footer */}
                    <motion.div variants={cardVariants} className="flex justify-center pt-10">
                        <Link href="/projects" className="group flex items-center gap-4 text-xs font-black tracking-[0.5em] text-zinc-600 hover:text-gold-mid transition-all uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-mid/40 animate-pulse" />
                            Launch Mission Archive
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
