"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AIDataCard() {
    return (
        <div className="relative group perspective-1000">
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.9)]"
            >
                {/* Image Container */}
                <div className="relative h-[560px] w-full overflow-hidden">
                    <Image
                        src="/assets/images/ethio_ai_multimodal_annotation.png"
                        alt="EthioAI Multimodal Data Annotation"
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                        priority
                    />

                    {/* Subtle Overlay Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/20 via-transparent to-transparent" />

                    {/* Minimalist Floating Tag */}
                    <div className="absolute bottom-8 left-8">
                        <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-mid shadow-[0_0_8px_rgba(255,224,2,0.5)]" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] heading-premium">Multimodal Infrastructure</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Background Decorative Glow */}
            <div className="absolute -inset-10 bg-gold-mid/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />
        </div>
    );
}
