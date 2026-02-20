"use client";

import { motion } from "framer-motion";

export function AIDataCard() {
    return (
        <div className="relative group perspective-1000">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl backdrop-blur-3xl"
            >
                {/* Glowing Edge */}
                <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold-mid/5 via-transparent to-transparent opacity-50" />

                {/* Background Image Container */}
                <div className="relative h-[480px] w-full bg-zinc-950 overflow-hidden">
                    {/* Abstract Ethiopian Landscape Mockup */}
                    <div className="absolute inset-0 opacity-40">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                        <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                            {/* Abstract SVG or Pattern */}
                            <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 450L150 300L350 500L550 200L800 400V600H0V450Z" fill="#111" />
                                <path d="M200 450L400 250L600 500H200V450Z" fill="#151515" />
                                <circle cx="650" cy="150" r="40" fill="#222" />
                            </svg>
                        </div>
                    </div>

                    {/* Real-time Labeling Animation */}
                    <motion.div
                        className="absolute z-20"
                        animate={{
                            x: [100, 400, 300, 100],
                            y: [150, 100, 300, 150],
                            width: [120, 180, 140, 120],
                            height: [100, 120, 180, 100],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="h-full w-full border-2 border-gold-mid/60 bg-gold-mid/5 rounded-sm relative">
                            <span className="absolute -top-6 -left-0.5 bg-gold-mid text-black text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">
                                Person: 98.2%
                            </span>
                            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-gold-mid" />
                            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-gold-mid" />
                            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-gold-mid" />
                            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-gold-mid" />
                        </div>
                    </motion.div>

                    {/* Secondary Labels */}
                    <motion.div
                        className="absolute border border-emerald-500/40 bg-emerald-500/5 rounded-sm z-10"
                        initial={{ left: 500, top: 350, width: 80, height: 60 }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <span className="absolute -top-4 left-0 text-[8px] font-bold text-emerald-400 uppercase">Tree</span>
                    </motion.div>

                    {/* Status Overlays */}
                    <div className="absolute top-8 right-8 z-30 flex flex-col gap-3">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="px-3 py-1.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest heading-premium">Status: Processing...</span>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 z-30">
                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] heading-premium">Verification Progress</span>
                                <span className="text-[10px] font-bold text-gold-mid">85%</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                    className="h-full bg-gold-gradient"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Background Decorative Glow */}
            <div className="absolute -inset-4 bg-gold-mid/5 blur-[80px] rounded-full opacity-50 pointer-events-none" />
        </div>
    );
}
