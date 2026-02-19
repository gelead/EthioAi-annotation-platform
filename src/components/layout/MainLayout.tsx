"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { SyncStatus } from "@/components/ui/SyncStatus";

interface MainLayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Project Explorer" },
  { href: "/workspace", label: "Annotation Workspace" },
  { href: "/admin", label: "Admin Console" },
];

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-950/95 px-4 py-5 md:flex">
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500 text-xs font-bold text-slate-950">
            EA
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-wide text-slate-50">
              EthioAI Labeling
            </span>
            <span className="text-[11px] text-slate-400">National Data Asset</span>
          </div>
        </div>

        <nav className="mt-6 flex flex-1 flex-col gap-1 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium ${
                  active
                    ? "bg-slate-900 text-slate-50 ring-1 ring-sky-500/40"
                    : "text-slate-300 hover:bg-slate-900/70 hover:text-slate-50"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-4 border-t border-slate-800 pt-3 text-[11px] text-slate-500">
          <p>Optimized for low-connectivity field work and sovereign data hosting.</p>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-between gap-4 border-b border-slate-800 bg-slate-950/90 px-4 py-3 backdrop-blur md:px-6">
          <div className="flex flex-col gap-0.5">
            <p className="text-xs font-semibold text-slate-100">EthioAI Annotation Platform</p>
            <p className="text-[11px] text-slate-400">
              Secure, offline-first labeling for Ethiopian languages and datasets.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <SyncStatus />
          </div>
        </header>

        <main className="flex-1 bg-slate-950/90 px-4 py-4 md:px-6 md:py-6">
          <div className="mx-auto flex h-full max-w-6xl flex-col">{children}</div>
        </main>
      </div>
    </div>
  );
}

