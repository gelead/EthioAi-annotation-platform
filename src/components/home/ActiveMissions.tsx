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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
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
            className="relative group w-[320px] md:w-[360px] h-[460px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] shadow-xl flex-shrink-0"
        >
            {/* Project Image - Absolute Background */}
            <div className="absolute inset-0">
                {mission.image ? (
                    <img
                        src={mission.image}
                        alt={mission.name}
                        className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black opacity-30" />
                )}
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col p-7 z-10">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-auto">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-3 rounded-xl">
                        <MissionIcon type={mission.type} />
                    </div>
                    <div className="px-3 py-1 rounded-full backdrop-blur-xl bg-gold-mid/10 border border-gold-mid/20 text-[8px] text-gold-mid font-black tracking-widest uppercase">
                        {mission.type}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-gold-mid transition-colors duration-300">
                        {mission.name}
                    </h3>

                    <p className="text-[13px] text-zinc-400 font-medium leading-relaxed line-clamp-3 opacity-80">
                        {mission.description}
                    </p>

                    {/* Progress with Glow */}
                    <div className="space-y-3 pt-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Status</span>
                            <span className="text-xs font-black text-gold-mid">{mission.progress}%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${mission.progress}%` }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="h-full bg-gold-mid"
                            />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-5 mt-4 border-t border-white/5">
                        <div>
                            <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Yield</p>
                            <p className="text-base font-black text-white">${mission.rewardPerTask.toFixed(2)}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Contributors</p>
                            <p className="text-base font-black text-white">{mission.contributors.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-x-0 bottom-0 p-7 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#050505]">
                    <Link
                        href={session ? "/dashboard" : "/signup"}
                        className="w-full py-4 rounded-xl bg-gold-mid text-black text-[11px] font-black tracking-widest flex items-center justify-center gap-2 hover:bg-gold-light transition-all uppercase"
                    >
                        Initiate <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
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
            const scrollAmount = 380; // card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    if (loading) return (
        <div className="py-20 flex items-center justify-center bg-[#050505]">
            <div className="animate-pulse text-gold-mid font-black tracking-widest text-[9px] uppercase">Loading Missions...</div>
        </div>
    );

    if (missions.length === 0) return null;

    return (
        <section className="relative py-20 overflow-hidden bg-[#050505]">
            {/* Background Ambience */}
            <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-gold-mid/5 rounded-full blur-[150px] pointer-events-none opacity-30" />
            <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-gold-mid/5 rounded-full blur-[120px] pointer-events-none opacity-20" />

            <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="space-y-10"
                >
                    {/* Simplified Heading & Slider Controls */}
                    <div className="flex items-center justify-between">
                        <motion.h2 variants={cardVariants} className="text-3xl md:text-4xl font-black heading-gold tracking-tight lowercase">
                            <span className="text-white">active</span> missions<span className="text-gold-mid">.</span>
                        </motion.h2>

                        {/* Slider Icons ONLY */}
                        {missions.length > 3 && (
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => scroll('left')}
                                    className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-gold-mid/30 transition-all text-white hover:text-gold-mid"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-gold-mid/30 transition-all text-white hover:text-gold-mid"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Slider Container */}
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar scroll-smooth"
                        >
                            {missions.map((mission) => (
                                <div key={mission.id} className="flex-shrink-0">
                                    <MissionCard mission={mission} />
                                </div>
                            ))}
                        </div>
                    </div>
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
