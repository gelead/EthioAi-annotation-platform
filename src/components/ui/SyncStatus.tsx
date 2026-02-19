"use client";

import { useEffect, useState } from "react";

type SyncState = "online" | "syncing" | "offline";

export function SyncStatus() {
  const [state, setState] = useState<SyncState>("online");

  useEffect(() => {
    const handleOnline = () => setState("online");
    const handleOffline = () => setState("offline");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const label =
    state === "online" ? "Online" : state === "offline" ? "Offline (local only)" : "Syncing…";

  const colorClasses =
    state === "online"
      ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40"
      : state === "offline"
      ? "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/40"
      : "bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/40";

  return (
    <button
      type="button"
      onClick={() => setState((prev) => (prev === "syncing" ? "online" : "syncing"))}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-colors ${colorClasses}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          state === "online"
            ? "bg-emerald-400"
            : state === "offline"
            ? "bg-amber-400"
            : "bg-sky-400"
        }`}
      />
      <span>Sync: {label}</span>
    </button>
  );
}

