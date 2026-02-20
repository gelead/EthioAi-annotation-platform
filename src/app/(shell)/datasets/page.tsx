"use client";

import { motion } from "framer-motion";
import { Sprout, Languages, HeartPulse, ChevronRight } from "lucide-react";

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

const datasets = [
    {
        title: "Agriculture",
        icon: Sprout,
        count: "1.4k tasks",
        description: "Multi-spectral imaging for crop health and disease detection in the Rift Valley.",
        color: "emerald"
    },
    {
        title: "Language",
        icon: Languages,
        count: "2.8k tasks",
        description: "Sentiment analysis and NER for Amharic, Afaan Oromo, and Tigrinya dialects.",
        color: "gold"
    },
    {
        title: "Health",
        icon: HeartPulse,
        count: "840 tasks",
        description: "Medical imaging annotation for diagnostic support in regional clinics.",
        color: "sky"
    }
];

export default function DatasetsPage() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
        >
            <motion.div variants={fadeInUp}>
                <h1 className="text-2xl font-bold text-white heading-premium tracking-tight">Available Datasets</h1>
                <p className="text-sm text-zinc-500 mt-1 font-medium">Contribute your expertise to national AI initiatives.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
                {datasets.map((dataset) => {
                    const Icon = dataset.icon;
                    return (
                        <motion.div
                            key={dataset.title}
                            variants={fadeInUp}
                            whileHover={{ y: -4 }}
                            className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-8 flex flex-col h-full transition-colors hover:bg-white/[0.02]"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 
                ${dataset.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                                    dataset.color === 'gold' ? 'bg-gold-mid/10 text-gold-mid' :
                                        'bg-sky-500/10 text-sky-400'}`}>
                                <Icon size={24} />
                            </div>

                            <div className="flex-1 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-white heading-premium">{dataset.title}</h3>
                                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{dataset.count}</span>
                                </div>
                                <p className="text-sm text-zinc-500 font-medium leading-relaxed font-body">
                                    {dataset.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <button className="w-full h-10 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                    Contribute <ChevronRight size={14} />
                                </button>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold-mid/0 to-transparent group-hover:via-gold-mid/40 transition-all duration-500" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Placeholder for more datasets */}
            <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-dashed border-white/5 p-12 flex flex-col items-center justify-center text-center space-y-4"
            >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-600">
                    +
                </div>
                <div>
                    <p className="text-sm font-bold text-zinc-400 heading-premium">New Sectors Incoming</p>
                    <p className="text-xs text-zinc-600 font-medium mt-1">Satellite, Logistics, and Governance datasets are in preparation.</p>
                </div>
            </motion.div>
        </motion.div>
    );
}
