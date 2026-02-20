"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useScroll, useTransform } from "framer-motion";

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

import { useSession, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // ... (transform logic same as before)
  const height = useTransform(scrollY, [0, 50], ["5rem", "4rem"]);
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]);
  const backdropBlur = useTransform(scrollY, [0, 50], ["12px", "24px"]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0.05, 0.15]);
  const boxShadow = useTransform(scrollY, [0, 50], ["0 0 0 0 rgba(0,0,0,0)", "0 10px 30px -10px rgba(0,0,0,0.5)"]);

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  const isLoading = status === "loading";

  return (
    <motion.header
      className="sticky top-0 z-40 border-b"
      style={{
        height,
        backgroundColor,
        backdropFilter: `blur(${backdropBlur})`,
        borderBottomColor: `rgba(255, 255, 255, ${borderOpacity})`,
        boxShadow,
      }}
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
          {!session && !isLoading && (
            <div className="hidden items-center gap-4 sm:flex">
              <Magnetic>
                <Link
                  href="/login"
                  className="px-6 py-2.5 text-base font-semibold text-white border border-white/40 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Login
                  </motion.span>
                </Link>
              </Magnetic>

              <Magnetic>
                <Link
                  href="/signup"
                  className="px-6 py-2.5 text-base font-bold text-black bg-gold-gradient rounded-full shadow-[0_4px_20px_-5px_rgba(178,130,40,0.5)] hover:shadow-[0_8px_30px_-5px_rgba(255,224,2,0.6)] transition-all duration-300"
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Sign Up
                  </motion.span>
                </Link>
              </Magnetic>
            </div>
          )}

          {/* User Profile / Dashboard Access */}
          {session && (
            <div className="relative">
              <Magnetic>
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/50 text-sm font-semibold text-white hover:border-gold-mid/50 transition-colors overflow-hidden"
                >
                  {session.user?.image ? (
                    <img src={session.user.image} alt={session.user.name || "User"} className="h-full w-full object-cover" />
                  ) : (
                    session.user?.name?.[0]?.toUpperCase() || "U"
                  )}
                </button>
              </Magnetic>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-2 text-sm text-white shadow-2xl ring-1 ring-white/5"
                >
                  <div className="px-4 py-3 border-b border-white/5 mb-2">
                    <p className="font-bold text-white truncate">{session.user?.name}</p>
                    <p className="text-[10px] text-zinc-500 truncate">{session.user?.email}</p>
                  </div>
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
                      signOut({ callbackUrl: "/" });
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-400 hover:bg-red-950/20 transition-colors"
                  >
                    <span>🚪</span>
                    <span className="font-medium">Log Out</span>
                  </button>
                </motion.div>
              )}
            </div>
          )}

          {isLoading && (
            <div className="h-11 w-11 rounded-full border border-white/5 bg-white/5 animate-pulse" />
          )}
        </div>
      </div>
    </motion.header>
  );
}

