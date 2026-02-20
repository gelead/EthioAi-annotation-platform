"use client";

import React from "react";
import { motion } from "framer-motion";
import { ModernButton } from "@/components/ui/ModernButton";

const services = [
    {
        id: "image",
        title: "Image & Video Labeling",
        description: "High-precision computer vision datasets including object detection, semantic segmentation, and medical imaging annotation.",
        features: [
            "Bounding boxes & Polygons",
            "Semantic & Instance Segmentation",
            "Keypoint & Landmark Detection",
            "Video Object Tracking",
        ],
        icon: (
            <svg className="w-12 h-12 text-gold-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: "text",
        title: "Text & Language Processing",
        description: "Specialized datasets for LLMs, including sentiment analysis, NER, and multi-language translation specifically for Ethiopian languages.",
        features: [
            "Amharic & Afaan Oromo NER",
            "Sentiment & Intent Classification",
            "Dialogue & Chatbot Tuning",
            "Ethiopic Script Transliteration",
        ],
        icon: (
            <svg className="w-12 h-12 text-gold-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: "audio",
        title: "Audio & Speech Recognition",
        description: "Crystal clear audio datasets for speech-to-text and intent recognition, covering diverse dialects and recording conditions.",
        features: [
            "Speech-to-Text Transcription",
            "Phonetic & Dialect Labeling",
            "Audio Classification & Tagging",
            "Speaker Diarization",
        ],
        icon: (
            <svg className="w-12 h-12 text-gold-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-32 overflow-hidden">
            {/* Background patterns */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-start/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-mid/5 blur-[120px] rounded-full" />
            </div>

            <div className="container-ethio relative z-10">
                <header className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-mid text-sm font-bold tracking-widest uppercase mb-4"
                    >
                        Our Expertise
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl heading-premium font-bold mb-8 text-gold-gradient"
                    >
                        Precision Labeling Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg leading-relaxed"
                    >
                        Empowering sovereign AI with high-quality, ethically sourced data annotations
                        tailored for Ethiopian context and languages.
                    </motion.p>
                </header>

                <section className="space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } gap-16 items-center`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-gold-mid/20 flex items-center justify-center shadow-2xl shadow-gold-mid/5">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl heading-premium font-bold text-white">
                                        {service.title}
                                    </h2>
                                </div>

                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-zinc-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gold-mid shadow-gold-glow" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <ModernButton useSpringAnimation variant="primary">
                                        Start Annotating
                                    </ModernButton>
                                </div>
                            </div>

                            {/* Visual Side / Card Side */}
                            <div className="flex-1 w-full max-w-[500px]">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="group relative h-[400px] bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:border-gold-mid transition-all duration-500 overflow-hidden shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold-start/5 to-transparent pointer-events-none" />

                                    {/* Decorative Elements inside card */}
                                    <div className="absolute top-8 left-8 text-zinc-500 font-mono text-xs uppercase tracking-widest">
                                        Service ID: {service.id}-00{index + 1}
                                    </div>

                                    <div className="flex items-center justify-center h-full">
                                        <div className="w-32 h-32 rounded-full border border-gold-mid/10 animate-pulse flex items-center justify-center">
                                            <div className="w-24 h-24 rounded-full border border-gold-mid/30 animate-pulse flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full border border-gold-mid animate-pulse" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner Label */}
                                    <div className="absolute bottom-8 right-8 text-gold-mid/50 font-display italic">
                                        Precision Engineered
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </div>
        </div>
    );
}
