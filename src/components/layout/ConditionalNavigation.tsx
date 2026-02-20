"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface ConditionalNavigationProps {
    children: React.ReactNode;
}

export function ConditionalNavigation({ children }: ConditionalNavigationProps) {
    const pathname = usePathname();

    // Routes where we want the landing Navbar and Footer
    const isLandingPage = pathname === "/" || pathname === "/about" || pathname === "/contact";

    return (
        <>
            {isLandingPage && <Navbar />}
            <main>{children}</main>
            {isLandingPage && <Footer />}
        </>
    );
}
