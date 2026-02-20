"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

/**
 * Magnetic Component for smooth "pull" effect
 */
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      x.set(middleX * 0.35);
      y.set(middleY * 0.35);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-md h-20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-8 h-full">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white heading-premium group-hover:text-gold-mid transition-colors">
            EthioAI
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Magnetic key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-base font-medium tracking-wide transition-colors py-2 ${isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-gold-gradient"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </Magnetic>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-4 sm:flex">
            <Magnetic>
              <Link
                href="/login"
                className="px-6 py-2.5 text-base font-semibold text-white border border-white/40 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Login
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="/signup"
                className="px-6 py-2.5 text-base font-bold text-black bg-gold-gradient rounded-full shadow-[0_4px_20px_-5px_rgba(178,130,40,0.5)] hover:shadow-[0_8px_30px_-5px_rgba(255,224,2,0.6)] transition-all duration-300"
              >
                Sign Up
              </Link>
            </Magnetic>
          </div>

          {/* User Profile / Dashboard Access */}
          <div className="relative">
            <Magnetic>
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/50 text-sm font-semibold text-white hover:border-gold-mid/50 transition-colors"
              >
                U
              </button>
            </Magnetic>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-2 text-sm text-white shadow-2xl ring-1 ring-white/5"
              >
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="text-amber-400">📊</span>
                  <span className="font-medium">Dashboard</span>
                </Link>
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="text-amber-400">⚙️</span>
                  <span className="font-medium">Edit Profile</span>
                </Link>
                <div className="my-2 h-px bg-white/5 mx-2" />
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    console.log("Logging out...");
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-400 hover:bg-red-950/20 transition-colors"
                >
                  <span>🚪</span>
                  <span className="font-medium">Log Out</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

