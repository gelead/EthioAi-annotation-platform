"use client";

import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const leaders = [
    { rank: 1, name: "Abebe Kebede", impact: "42,840", level: "Expert" },
    { rank: 2, name: "Sara Mohammed", impact: "38,120", level: "Senior" },
    { rank: 3, name: "Dawit Tekle", impact: "31,450", level: "Senior" },
    { rank: 4, name: "Meryem Ali", impact: "28,900", level: "Expert" },
    { rank: 5, name: "Yonas Assefa", impact: "22,340", level: "Intermediate" },
    { rank: 6, name: "Fatima Ahmed", impact: "19,800", level: "Senior" },
    { rank: 7, name: "Samuel Gebre", impact: "15,420", level: "Intermediate" }
];

export default function LeaderboardPage() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
        >
            <motion.div variants={fadeInUp}>
                <h1 className="text-2xl font-bold text-white heading-premium tracking-tight">Leaderboard</h1>
                <p className="text-sm text-zinc-500 mt-1 font-medium">Top contributors driving national AI excellence.</p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[1fr_2.5fr]">
                <motion.section
                    variants={fadeInUp}
                    className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 flex flex-col items-center justify-center text-center space-y-6"
                >
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-gold-gradient p-0.5">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                <Trophy size={40} className="text-gold-mid" />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">
                            #1
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white heading-premium">Current Champion</h3>
                        <p className="text-sm text-gold-mid font-bold mt-1">Abebe Kebede</p>
                    </div>
                    <div className="w-full pt-6 border-t border-white/5 space-y-4">
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                            <span>Monthly Growth</span>
                            <span className="text-emerald-400">+14.2%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-gold-gradient" />
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    variants={fadeInUp}
                    className="rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden"
                >
                    <div className="px-8 py-6 border-b border-white/5">
                        <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] heading-premium">Universal Standing</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-none">
                            <thead className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest bg-white/[0.02]">
                                <tr>
                                    <th className="px-8 py-4 text-left font-bold">Rank</th>
                                    <th className="px-8 py-4 text-left font-bold">Contributor</th>
                                    <th className="px-8 py-4 text-center font-bold">Badge</th>
                                    <th className="px-8 py-4 text-right font-bold">Impact Score</th>
                                </tr>
                            </thead>
                            <tbody className="text-[12px] font-medium text-white/80">
                                {leaders.map((leader, idx) => (
                                    <motion.tr
                                        key={leader.rank}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group border-b border-white/5 last:border-none hover:bg-white/[0.02] transition-colors"
                                    >
                                        <td className="px-8 py-4">
                                            {leader.rank === 1 ? <Medal size={18} className="text-gold-mid" /> :
                                                leader.rank === 2 ? <Medal size={18} className="text-zinc-400" /> :
                                                    leader.rank === 3 ? <Medal size={18} className="text-amber-700/60" /> :
                                                        <span className="font-mono text-zinc-500">{leader.rank}</span>}
                                        </td>
                                        <td className="px-8 py-4 font-bold text-white heading-premium">
                                            {leader.name}
                                        </td>
                                        <td className="px-8 py-4 text-center">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-tight uppercase
                        ${leader.level === 'Expert' ? 'bg-gold-mid/10 text-gold-mid' :
                                                    leader.level === 'Senior' ? 'bg-emerald-400/10 text-emerald-400' :
                                                        'bg-zinc-800 text-zinc-500'}`}>
                                                {leader.level}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 text-right font-bold text-white font-body">
                                            {leader.impact}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
}
