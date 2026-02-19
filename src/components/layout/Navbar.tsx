"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight text-white">EthioAI</span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium text-white md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-zinc-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-zinc-900 text-xs font-medium text-white"
          >
            U
          </button>
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
    </header>
  );
}

