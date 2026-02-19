"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#ff8c00] shadow-[0_0_18px_rgba(255,140,0,0.7)]">
            <span className="text-xl leading-none text-black">⚡</span>
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-50">
              EthioAI
            </span>
            <span className="text-[11px] text-slate-400">Precision Data Labeling</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-full border border-[#ff8c00]/70 px-4 py-1.5 text-xs font-semibold text-[#ff8c00] transition hover:border-[#ff8c00] hover:bg-[#ff8c00]/10 md:inline-flex"
          >
            Login
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-[#ff8c00] px-4 py-1.5 text-xs font-semibold text-black shadow-[0_0_25px_rgba(255,140,0,0.85)] transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,140,0,0.9)]"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

