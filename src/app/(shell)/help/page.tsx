"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle, BookOpen } from "lucide-react";

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

const faqs = [
    {
        question: "How are my earnings calculated?",
        answer: "Earnings are based on the complexity of the task and your historical accuracy rate. High-quality contributors receive premium rates for multi-modal tasks."
    },
    {
        question: "What languages does EthioAI support?",
        answer: "Currently, we focus on Amharic, Afaan Oromo, Tigrinya, and Somali. We are expanding to more national languages through 2026."
    },
    {
        question: "How long does verification take?",
        answer: "Most tasks are verified within 24-48 hours through our triple-layer validation loop involving SME consensus."
    },
    {
        question: "How can I join as an institutional partner?",
        answer: "Institutions can reach out via the 'Partner' subject in the support portal to discuss data sovereignty and bulk annotation needs."
    }
];

export default function HelpCenterPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
        >
            <motion.div variants={fadeInUp}>
                <h1 className="text-2xl font-bold text-white heading-premium tracking-tight">Help Center</h1>
                <p className="text-sm text-zinc-500 mt-1 font-medium">Resources and support for your annotation journey.</p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                <motion.section variants={fadeInUp} className="space-y-4">
                    <div className="px-2 mb-6">
                        <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] heading-premium">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-white/[0.02] border-white/10' : 'bg-transparent'}`}
                            >
                                <button
                                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    className="w-full px-6 py-5 flex items-center justify-between group"
                                >
                                    <span className={`text-sm font-semibold transition-colors ${openIdx === idx ? 'text-gold-mid' : 'text-zinc-300 group-hover:text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown size={14} className={`text-zinc-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-gold-mid' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openIdx === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-sm text-zinc-500 font-medium leading-relaxed font-body">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section variants={fadeInUp} className="space-y-6">
                    <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 space-y-6">
                        <div className="w-10 h-10 rounded-xl bg-gold-mid/10 text-gold-mid flex items-center justify-center">
                            <MessageCircle size={20} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold text-white heading-premium uppercase tracking-widest">Support Portal</h3>
                            <p className="text-xs text-zinc-500 font-medium font-body leading-relaxed">
                                Can&apos;t find what you&apos;re looking for? Our team is available 24/7.
                            </p>
                        </div>
                        <button className="w-full h-10 rounded-xl border border-white/10 text-white text-xs font-bold hover:bg-white/5 transition-colors">
                            Contact Support
                        </button>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 space-y-6">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                            <BookOpen size={20} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold text-white heading-premium uppercase tracking-widest">Guide Book</h3>
                            <p className="text-xs text-zinc-500 font-medium font-body leading-relaxed">
                                Learn about labeling guidelines and quality standards.
                            </p>
                        </div>
                        <button className="w-full h-10 rounded-xl border border-white/10 text-white text-xs font-bold hover:bg-white/5 transition-colors">
                            Read Documentation
                        </button>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
}
