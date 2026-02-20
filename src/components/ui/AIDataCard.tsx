"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, ShieldCheck, Zap, Database } from "lucide-react";

export function AIDataCard() {
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 150,
        damping: 25,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 150,
        damping: 25,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div className="relative group perspective-2000">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 1200,
                    transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] backdrop-blur-3xl"
            >
                {/* ── Background: Neural Net Infrastructure ── */}
                <div className="relative h-[560px] w-full overflow-hidden bg-zinc-950">
                    <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                            <motion.path
                                d="M 100 100 Q 400 300 700 100"
                                stroke="url(#line-grad)"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                            <defs>
                                <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#FFE002" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#FFE002" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#FFE002" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* ── High-Impact Central Visualization ── */}
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="relative w-full h-full border border-white/5 rounded-3xl bg-black/40 overflow-hidden">
                            {/* Animated Scanner Effect */}
                            <motion.div
                                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-mid to-transparent z-30"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Active Labeling Nodes */}
                            {[
                                { x: "20%", y: "30%", val: "94.2%", color: "gold" },
                                { x: "65%", y: "45%", val: "98.8%", color: "emerald" },
                                { x: "40%", y: "70%", val: "89.5%", color: "sky" }
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    style={{ left: node.x, top: node.y }}
                                    className="absolute z-20 flex flex-col gap-1 items-start"
                                    animate={{
                                        scale: [0.95, 1.05, 0.95],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                >
                                    <div className={`text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-tighter shadow-xl
                                        ${node.color === 'gold' ? 'bg-gold-mid text-black' :
                                            node.color === 'emerald' ? 'bg-emerald-500 text-white' :
                                                'bg-sky-500 text-white'}`}>
                                        Object: {node.val}
                                    </div>
                                    <div className={`w-12 h-12 border-2 rounded-sm ${node.color === 'gold' ? 'border-gold-mid/40 bg-gold-mid/5' :
                                        node.color === 'emerald' ? 'border-emerald-500/40 bg-emerald-500/5' :
                                            'border-sky-500/40 bg-sky-500/5'}`} />
                                </motion.div>
                            ))}

                            {/* Center Streaming Data */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                                <Activity size={80} className="text-zinc-900 absolute opacity-20 animate-pulse" />
                                <div className="space-y-1 text-center">
                                    <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">Validation Stream</p>
                                    <div className="flex gap-2">
                                        <div className="h-0.5 w-12 bg-white/5" />
                                        <div className="h-0.5 w-12 bg-gold-mid/40" />
                                        <div className="h-0.5 w-12 bg-white/5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Status HUD Elements ── */}
                    <div className="absolute top-8 left-8 right-8 z-30 flex justify-between items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full"
                        >
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            </div>
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest heading-premium">Neural_Link: Active</span>
                        </motion.div>

                        <div className="flex gap-2">
                            {[ShieldCheck, Zap, Database].map((Icon, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                                    <Icon size={14} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Lower HUD: Progress & Metrics ── */}
                    <div className="absolute bottom-8 left-8 right-8 z-40 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Confidence</span>
                                    <span className="text-[11px] font-bold text-emerald-400">99.4%</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "99.4%" }}
                                        transition={{ duration: 2 }}
                                        className="h-full bg-emerald-500"
                                    />
                                </div>
                            </div>
                            <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Compute</span>
                                    <span className="text-[11px] font-bold text-gold-mid">P-80</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "80%" }}
                                        transition={{ duration: 2, delay: 0.3 }}
                                        className="h-full bg-gold-gradient"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] heading-premium mb-1">Current Batch</span>
                                <span className="text-xs font-bold text-white">Amh_Med_v4.annotated</span>
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[10px] font-bold text-zinc-400">
                                R-102
                            </div>
                        </div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-20" />
                </div>
            </motion.div>

            {/* Global Decorative Glow */}
            <div className="absolute -inset-10 bg-gold-mid/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />
        </div>
    );
}
