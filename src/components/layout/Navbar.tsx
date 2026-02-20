"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// Magnetic button component
const MagneticButton = ({ children, className, ...props }: any) => {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Magnetic link component
const MagneticLink = ({ href, children, className, isActive, ...props }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        className={`${className} ${isActive ? 'nav-link-active' : 'gold-underline-hover'}`}
        {...props}
      >
        {children}
      </Link>
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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur h-24">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-8 h-full">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-white heading-premium">EthioAI</span>
        </Link>

        <nav className="hidden items-center gap-8 text-base font-semibold text-white md:flex">
          {navLinks.map((link) => (
            <MagneticLink
              key={link.href}
              href={link.href}
              isActive={pathname === link.href}
              className="transition hover:text-zinc-400"
            >
              {link.label}
            </MagneticLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton>
            <Link
              href="/login"
              className="px-4 py-2 text-base font-semibold text-white border border-white/20 rounded-md hover:bg-white/10 transition-colors block"
            >
              Login
            </Link>
          </MagneticButton>
          
          <MagneticButton>
            <Link
              href="/signup"
              className="px-4 py-2 text-base font-semibold text-black bg-gold-gradient rounded-md hover:scale-105 transition-transform block"
            >
              Sign Up
            </Link>
          </MagneticButton>
          
          <div className="relative">
            <MagneticButton
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-zinc-900 text-xs font-medium text-white"
            >
              U
            </MagneticButton>
            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-sm border border-white/10 bg-zinc-900/95 p-1 text-xs text-white shadow-lg">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left hover:bg-zinc-800"
                >
                  <span>📊 Dashboard</span>
                </button>
                <button
                  type="button"
                  className="mt-0.5 flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left hover:bg-zinc-800"
                >
                  <span>⚙️ Edit Profile</span>
                </button>
                <button
                  type="button"
                  className="mt-0.5 flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left text-red-400 hover:bg-red-950/40"
                >
                  <span>🚪 Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

