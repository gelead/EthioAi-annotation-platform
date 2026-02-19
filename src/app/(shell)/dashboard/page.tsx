export default function DashboardPage() {
  // In a real app, these would come from the backend / analytics.
  const name = "Abebe";

  const activeProjects = [
    {
      name: "Amharic Medical Text",
      progress: 0.64,
    },
    {
      name: "Crop Disease Detection",
      progress: 0.41,
    },
    {
      name: "Call Center Transcription",
      progress: 0.78,
    },
  ];

  const recentActivity = [
    { id: "T-1024", project: "Amharic Medical Text", status: "Verified", minutes: 6 },
    { id: "T-1023", project: "Crop Disease Detection", status: "Verified", minutes: 4 },
    { id: "T-1022", project: "Call Center Transcription", status: "Pending Review", minutes: 8 },
    { id: "T-1021", project: "Amharic Medical Text", status: "Verified", minutes: 5 },
    { id: "T-1020", project: "Crop Disease Detection", status: "Verified", minutes: 7 },
  ];

  return (
    <div className="relative flex h-full flex-col gap-6">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="network-grid h-full w-full" />
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Header + Quick Stats */}
        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-lg font-semibold text-slate-50">
                Welcome back, <span className="text-[#ff8c00]">{name}</span>
              </h1>
              <p className="text-xs text-slate-400">
                Track your progress and jump back into your active labeling projects.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-[#ff8c00]/10 px-4 py-1.5 text-xs font-semibold text-[#ff8c00] ring-1 ring-[#ff8c00]/70"
            >
              View full history
            </button>
          </div>

          <div className="mt-2 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <p className="text-[11px] text-slate-400">Total Annotations</p>
              <p className="mt-1 text-xl font-semibold text-slate-50">3,248</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <p className="text-[11px] text-slate-400">Quality Score</p>
              <p className="mt-1 text-xl font-semibold text-emerald-300">98%</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <p className="text-[11px] text-slate-400">Earnings / Points</p>
              <p className="mt-1 text-xl font-semibold text-slate-50">12,450 pts</p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
          {/* Active Projects */}
          <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-50">Active Projects</h2>
              <p className="text-[11px] text-slate-400">
                Assigned to you • Resume where you left off
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {activeProjects.map((project) => (
                <div
                  key={project.name}
                  className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
                >
                  <div className="relative h-14 w-14">
                    <svg viewBox="0 0 36 36" className="h-full w-full">
                      <path
                        className="stroke-slate-800"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 3a15 15 0 1 1 0 30 15 15 0 0 1 0-30z"
                      />
                      <path
                        className="stroke-[#ff8c00]"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={`${project.progress * 94} 94`}
                        d="M18 3a15 15 0 1 1 0 30 15 15 0 0 1 0-30z"
                      />
                    </svg>
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-50">
                      {Math.round(project.progress * 100)}%
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-50">{project.name}</h3>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Continue from your last saved task in this project.
                    </p>
                    <button
                      type="button"
                      className="mt-3 inline-flex items-center rounded-full bg-[#ff8c00] px-3 py-1 text-[11px] font-semibold text-black shadow-[0_0_18px_rgba(255,140,0,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(255,140,0,1)]"
                    >
                      Resume Labeling
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-50">Recent Activity</h2>
              <p className="text-[11px] text-slate-400">Last 5 tasks you completed</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
              <table className="min-w-full border-collapse text-xs">
                <thead className="bg-slate-900/80 text-[11px] uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium">Task ID</th>
                    <th className="px-3 py-2 text-left font-medium">Project</th>
                    <th className="px-3 py-2 text-left font-medium">Status</th>
                    <th className="px-3 py-2 text-right font-medium">Time Spent</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((row, idx) => (
                    <tr
                      key={row.id}
                      className={idx % 2 === 0 ? "bg-slate-900/40" : "bg-slate-950/40"}
                    >
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-200">{row.id}</td>
                      <td className="px-3 py-2 text-slate-200">{row.project}</td>
                      <td className="px-3 py-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] ${
                            row.status === "Verified"
                              ? "bg-emerald-500/10 text-emerald-300"
                              : "bg-amber-500/10 text-amber-300"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-right text-slate-300">{row.minutes} min</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

