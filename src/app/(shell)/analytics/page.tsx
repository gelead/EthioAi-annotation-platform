"use client";

import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function AnalyticsPage() {
    const chartData = [
        { label: "Task Completion Trend", data: [40, 60, 45, 80, 55, 90, 75], unit: "tasks" },
        { label: "Accuracy Rate", data: [94, 96, 95, 98, 97, 99, 98.5], unit: "%" },
        { label: "Daily Earnings", data: [12, 18, 15, 25, 20, 30, 22], unit: "$" }
    ];

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
        >
            <motion.div variants={fadeInUp}>
                <h1 className="text-2xl font-bold text-white heading-premium tracking-tight">Analytics</h1>
                <p className="text-sm text-zinc-500 mt-1 font-medium">Performance insights and earnings velocity.</p>
            </motion.div>

            <div className="grid gap-6">
                {chartData.map((chart, idx) => (
                    <motion.section
                        key={chart.label}
                        variants={fadeInUp}
                        className="rounded-2xl border border-white/5 bg-white/[0.01] p-8"
                    >
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-xs font-bold text-white heading-premium uppercase tracking-[0.2em]">{chart.label}</h3>
                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Last 7 Days</span>
                        </div>

                        <div className="relative h-48 w-full">
                            {/* Simplified SVG Line Chart */}
                            <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#FFE002" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#FFE002" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Horizontal Guide Lines */}
                                <line x1="0" y1="0" x2="700" y2="0" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
                                <line x1="0" y1="100" x2="700" y2="100" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
                                <line x1="0" y1="200" x2="700" y2="200" stroke="white" strokeOpacity="0.03" strokeWidth="1" />

                                {/* The Area */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, delay: idx * 0.2 }}
                                    d={`M ${chart.data.map((val, i) => `${i * 115} ${200 - (val / Math.max(...chart.data)) * 150}`).join(' L ')} V 200 H 0 Z`}
                                    fill={`url(#grad-${idx})`}
                                />

                                {/* The Line */}
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: idx * 0.2 }}
                                    d={`M ${chart.data.map((val, i) => `${i * 115} ${200 - (val / Math.max(...chart.data)) * 150}`).join(' L ')}`}
                                    fill="none"
                                    stroke="#FFE002"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                {/* Data Points */}
                                {chart.data.map((val, i) => (
                                    <motion.circle
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 2 + i * 0.1 }}
                                        cx={i * 115}
                                        cy={200 - (val / Math.max(...chart.data)) * 150}
                                        r="3"
                                        fill="#050505"
                                        stroke="#FFE002"
                                        strokeWidth="2"
                                    />
                                ))}
                            </svg>

                            {/* X-Axis Labels */}
                            <div className="flex justify-between mt-6 px-1">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                    <span key={day} className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest font-body">{day}</span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-6 border-t border-white/5 flex items-center gap-6">
                            <div>
                                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Peak</p>
                                <p className="text-lg font-bold text-white heading-premium">{Math.max(...chart.data)}{chart.unit}</p>
                            </div>
                            <div className="w-px h-8 bg-white/5" />
                            <div>
                                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Average</p>
                                <p className="text-lg font-bold text-white heading-premium">{(chart.data.reduce((a, b) => a + b, 0) / 7).toFixed(1)}{chart.unit}</p>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>
        </motion.div>
    );
}
