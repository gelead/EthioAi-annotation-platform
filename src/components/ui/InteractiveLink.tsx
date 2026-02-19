"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";

interface InteractiveLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
}

export const InteractiveLink = ({
    children,
    className = "",
    ...props
}: InteractiveLinkProps) => {
    return (
        <Link
            {...props}
            className={`relative inline-block group transition-colors duration-300 ${className}`}
        >
            <span className="relative z-10">{children}</span>
            <motion.span
                className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gold-mid group-hover:w-full group-hover:left-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                aria-hidden="true"
                initial={false}
            />
        </Link>
    );
};
