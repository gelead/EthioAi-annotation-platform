"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface ModernButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    useSpringAnimation?: boolean;
    className?: string;
}

export const ModernButton = ({
    children,
    onClick,
    variant = "primary",
    useSpringAnimation = false,
    className = "",
}: ModernButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs
    const springConfig = useSpringAnimation
        ? { stiffness: 400, damping: 30 }
        : { stiffness: 150, damping: 15 };

    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Calculate distance from center (max 10px pull)
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Threshold and mapping
        x.set(distanceX * 0.15); // max pull roughly 10px depending on button size
        y.set(distanceY * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden";

    const variants = {
        primary: "bg-gold-start text-black hover:bg-gold-mid",
        secondary: "bg-white/5 text-white border border-white/10 hover:border-gold-mid/50 hover:text-gold-mid",
        outline: "bg-transparent text-gold-mid border-2 border-gold-mid/40 hover:border-gold-mid",
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
            }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {/* Glossy overlay effect for primary */}
            {variant === "primary" && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%]"
                    animate={{
                        translateX: isHovered ? "150%" : "-150%",
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                />
            )}

            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};
