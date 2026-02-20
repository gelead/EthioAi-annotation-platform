"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { SyncStatus } from "@/components/ui/SyncStatus";
import { Footer } from "@/components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

import {
  LayoutDashboard,
  BarChart3,
  Database,
  Trophy,
  ClipboardList,
  Monitor,
  User,
  HelpCircle
} from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/datasets", label: "Datasets", icon: Database },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/projects", label: "My Tasks", icon: ClipboardList },
  { href: "/workspace", label: "Workspace", icon: Monitor },
  { href: "/admin", label: "Profile", icon: User },
  { href: "/help", label: "Help Center", icon: HelpCircle },
];

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#050505] font-body text-white">
      {/* Rich Sidebar */}
      <aside className="hidden w-64 flex-col border-r-[0.5px] border-white/10 bg-transparent px-4 py-8 md:flex">
        <div className="flex items-center gap-3 px-3 mb-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient text-sm font-bold text-black shadow-lg shadow-gold-mid/10">
            EA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white heading-premium">
              EthioAI
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gold-mid/80 font-semibold">
              Platform
            </span>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1.5 px-1">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${active
                  ? "bg-white/[0.03] text-white"
                  : "text-zinc-500 hover:bg-white/[0.02] hover:text-zinc-200"
                  }`}
              >
                <div className={`relative transition-colors ${active ? "text-gold-mid" : "text-zinc-500 group-hover:text-zinc-400"}`}>
                  <Icon size={18} strokeWidth={active ? 2 : 1.5} />
                  {active && (
                    <div className="absolute inset-0 blur-md bg-gold-mid/40 opacity-50" aria-hidden="true" />
                  )}
                </div>
                <span className={active ? "font-semibold" : ""}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto px-4 py-4 border-t border-white/5">
          <div className="flex items-center gap-3 rounded-2xl bg-white/[0.02] p-3 border border-white/5">
            <div className="h-8 w-8 rounded-full bg-zinc-800" />
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-semibold text-white truncate">User Account</span>
              <span className="text-[10px] text-zinc-500">Free Tier</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-20 items-center justify-between gap-4 border-b border-white/10 bg-transparent px-6 py-3 backdrop-blur-md">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-sm font-bold text-white heading-premium tracking-tight uppercase">Dashboard</h2>
            <p className="text-[10px] text-zinc-500 font-medium">
              National data infrastructure • {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <SyncStatus />
            <div className="h-8 w-px bg-white/5" />
            <button className="h-9 rounded-full bg-white text-black px-4 text-xs font-bold hover:bg-zinc-200 transition-colors">
              New Project
            </button>
          </div>
        </header>

        <main className="flex-1 px-8 py-8">
          <div className="mx-auto flex h-full max-w-7xl flex-col">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
