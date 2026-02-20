import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { SyncStatus } from "@/components/ui/SyncStatus";

interface MainLayoutProps {
  children: ReactNode;
}

const navItems = [
  { 
    href: "/dashboard", 
    label: "Overview",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  { 
    href: "/projects", 
    label: "My Tasks",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  { 
    href: "/workspace", 
    label: "Workspace",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    href: "/admin", 
    label: "Profile",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
];

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <aside className="hidden w-64 flex-col border-r border-white/10 bg-black/95 px-4 py-5 md:flex">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-300 text-sm font-bold text-black">
            EA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white">
              EthioAI
            </span>
            <span className="text-xs text-zinc-400">Dashboard</span>
          </div>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-white/5 text-amber-400 border-l-2 border-amber-400"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent"
                }`}
              >
                <span className={active ? "text-amber-400" : "text-zinc-500 group-hover:text-zinc-400"}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-4 border-t border-white/10 pt-4 text-xs text-zinc-500">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            System Operational
          </p>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/90 px-4 py-3 backdrop-blur md:px-6">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold text-white">EthioAI Platform</p>
            <p className="text-xs text-zinc-400">
              National data annotation for Ethiopian AI
            </p>
          </div>
          <div className="flex items-center gap-3">
            <SyncStatus />
          </div>
        </header>

        <main className="flex-1 bg-[#0a0a0a]/90 px-4 py-4 md:px-6 md:py-6">
          <div className="mx-auto flex h-full max-w-6xl flex-col">{children}</div>
        </main>
      </div>
    </div>
  );
}

