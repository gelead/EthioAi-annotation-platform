"use client";

import { motion } from "framer-motion";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
    <motion.div 
      className="relative flex h-full flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <div className="network-grid h-full w-full" />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col gap-6"
        variants={containerVariants}
      >
        {/* Header + Quick Stats */}
        <motion.section 
          variants={fadeInUp}
          className="space-y-4 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-lg font-semibold text-white heading-premium">
                Welcome back, <span className="text-amber-400">{name}</span>
              </h1>
              <p className="text-xs text-zinc-400 mt-1">
                Track your progress and jump back into your active labeling projects.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/50 hover:bg-amber-500/20 transition-all"
            >
              View full history
            </button>
          </div>

          <motion.div 
            className="mt-2 grid gap-3 sm:grid-cols-3"
            variants={containerVariants}
          >
            {[
              { label: "Total Annotations", value: "3,248", color: "white" },
              { label: "Quality Score", value: "98%", color: "emerald" },
              { label: "Earnings / Points", value: "12,450 pts", color: "white" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ 
                  borderColor: "rgba(251, 191, 36, 0.4)",
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.1)",
                }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-white/10 bg-black/60 p-4 cursor-default"
              >
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                <p className={`mt-1 text-2xl font-semibold ${stat.color === "emerald" ? "text-emerald-400" : "text-white"}`}>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
          {/* Active Projects */}
          <motion.section 
            variants={fadeInUp}
            className="space-y-4 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-white heading-premium">Active Projects</h2>
              <p className="text-[11px] text-zinc-400">
                Assigned to you • Resume where you left off
              </p>
            </div>

            <motion.div 
              className="grid gap-4 md:grid-cols-2"
              variants={containerVariants}
            >
              {activeProjects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  variants={fadeInUp}
                  whileHover={{ 
                    borderColor: "rgba(251, 191, 36, 0.3)",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/60 p-4"
                >
                  <div className="relative h-14 w-14 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <path
                        className="stroke-zinc-800"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 3a15 15 0 1 1 0 30 15 15 0 0 1 0-30z"
                      />
                      <path
                        className="stroke-amber-400"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={`${project.progress * 94} 94`}
                        d="M18 3a15 15 0 1 1 0 30 15 15 0 0 1 0-30z"
                      />
                    </svg>
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                      {Math.round(project.progress * 100)}%
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white truncate">{project.name}</h3>
                    <p className="mt-1 text-[11px] text-zinc-500">
                      Continue from your last saved task
                    </p>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-3 inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-amber-300 px-3 py-1.5 text-[11px] font-semibold text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-shadow"
                    >
                      Resume Labeling
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Recent Activity */}
          <motion.section 
            variants={fadeInUp}
            className="space-y-4 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-white heading-premium">Recent Activity</h2>
              <p className="text-[11px] text-zinc-400">Last 5 tasks</p>
            </div>

            <motion.div 
              variants={fadeIn}
              className="overflow-hidden rounded-xl border border-white/10 bg-black/60"
            >
              <table className="min-w-full border-collapse text-xs">
                <thead className="bg-white/5 text-[11px] uppercase tracking-wide text-zinc-500">
                  <tr>
                    <th className="px-3 py-3 text-left font-medium">Task ID</th>
                    <th className="px-3 py-3 text-left font-medium">Project</th>
                    <th className="px-3 py-3 text-left font-medium">Status</th>
                    <th className="px-3 py-3 text-right font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((row, idx) => (
                    <motion.tr
                      key={row.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.3 }}
                      className={idx % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}
                    >
                      <td className="px-3 py-3 font-mono text-[11px] text-zinc-300">{row.id}</td>
                      <td className="px-3 py-3 text-zinc-300 truncate max-w-[120px]">{row.project}</td>
                      <td className="px-3 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                            row.status === "Verified"
                              ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30"
                              : "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right text-zinc-400">{row.minutes}m</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.section>
        </div>
      </motion.div>
    </motion.div>
  );
}

