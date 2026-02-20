"use client";

import { motion } from "framer-motion";

interface DashboardData {
  name: string;
  userId: string;
  stats: {
    completedTasks: string;
    totalRewards: string;
    totalTasks: string;
  };
  tasks: {
    id: string;
    title: string;
    status: string;
    type: string;
    reward: number;
  }[];
  recentActivity: {
    id: string;
    category: string;
    status: "Verified" | "Pending" | "Rejected";
    earnings: string;
    date: string;
  }[];
}

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
      ease: "easeOut" as const,
    },
  },
};

interface DashboardClientProps {
  data: DashboardData;
}

export function DashboardClient({ data }: DashboardClientProps) {
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

  return (
    <motion.div
      className="relative flex h-full flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <div className="network-grid h-full w-full" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col gap-8"
        variants={containerVariants}
      >
        {/* Header + Quick Stats */}
        <motion.section
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white heading-premium tracking-tight">
                Welcome back, <span className="text-gold-mid">{data.name}</span>
              </h1>
              <p className="text-sm text-zinc-500 mt-1 font-medium">
                Your performance is up <span className="text-emerald-400">+12.4%</span> since last week.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="h-10 rounded-xl px-4 text-xs font-bold text-zinc-400 border border-white/5 hover:bg-white/[0.02] transition-colors">
                Download Report
              </button>
              <button className="h-10 rounded-xl px-4 text-xs font-bold text-black bg-gold-gradient shadow-lg shadow-gold-mid/10">
                Start Labeling
              </button>
            </div>
          </div>

          <motion.div
            className="grid gap-8 sm:grid-cols-3"
            variants={containerVariants}
          >
            {[
              { label: "Completed Tasks", value: data.stats.completedTasks, desc: "Tasks verified" },
              { label: "Success Rate", value: "99.8%", desc: "Verification yield" },
              { label: "Total Earnings", value: data.stats.totalRewards, desc: "Estimated payout" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 hover:bg-white/[0.02] transition-colors"
                whileHover={{ y: -2 }}
              >
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                <div className="flex items-baseline gap-2 mt-4">
                  <p className="text-3xl font-bold text-white heading-premium tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-medium text-zinc-500">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Analytics & Distribution Sections */}
        <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
          <motion.section
            variants={fadeInUp}
            className="rounded-2xl border border-white/5 bg-white/[0.01] p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-bold text-white heading-premium uppercase tracking-widest">Earnings Velocity</h3>
              <select className="bg-transparent text-[10px] font-bold text-zinc-500 uppercase tracking-widest outline-none border-none cursor-pointer">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>

            <div className="h-48 w-full flex items-end gap-2 px-2">
              {/* Simple CSS Area Chart Mockup */}
              {[30, 45, 38, 52, 60, 48, 70].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full relative h-[140px] flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className="w-full bg-gold-mid/20 border-t border-gold-mid/60 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-gold-mid/0 to-gold-mid/10" />
                    </motion.div>
                  </div>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase transition-colors group-hover:text-zinc-400">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            className="rounded-2xl border border-white/5 bg-white/[0.01] p-6"
          >
            <h3 className="text-sm font-bold text-white heading-premium uppercase tracking-widest mb-8">Task Distribution</h3>
            <div className="flex flex-col items-center justify-center h-48">
              <div className="relative h-32 w-32">
                <svg viewBox="0 0 36 36" className="h-full w-full">
                  <path className="stroke-white/5" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="stroke-gold-mid" strokeWidth="3" strokeDasharray="40, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="stroke-emerald-400" strokeWidth="3" strokeDasharray="30, 100" strokeDashoffset="-40" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="stroke-sky-400" strokeWidth="3" strokeDasharray="30, 100" strokeDashoffset="-70" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-white">4.2k</span>
                  <span className="text-[8px] text-zinc-500 uppercase tracking-widest">Tasks</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-6 w-full">
                <div className="flex flex-col items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-mid mb-1"></span>
                  <span className="text-[10px] text-zinc-500 font-bold">Image</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mb-1"></span>
                  <span className="text-[10px] text-zinc-500 font-bold">Text</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mb-1"></span>
                  <span className="text-[10px] text-zinc-500 font-bold">Audio</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
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
              {activeProjects.map((project) => (
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
                  <div className="relative h-14 w-14 shrink-0">
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

          {/* Modern Data Table */}
          <motion.section
            variants={fadeInUp}
            className="rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-sm font-bold text-white heading-premium uppercase tracking-widest">Recent Tasks</h3>
              <button className="text-[10px] font-bold text-gold-mid uppercase tracking-widest hover:opacity-80 transition-opacity">
                View All Tasks
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-none">
                <thead className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-white/[0.02]">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Task ID</th>
                    <th className="px-6 py-4 text-left font-bold">Category</th>
                    <th className="px-6 py-4 text-left font-bold text-right">Earnings</th>
                    <th className="px-6 py-4 text-left font-bold">Status</th>
                    <th className="px-6 py-4 text-left font-bold text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="text-[12px] font-medium text-white/80">
                  {data.recentActivity.map((task, idx) => (
                    <motion.tr
                      key={task.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="group border-b border-white/5 last:border-none hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-6 py-4 font-mono text-[11px] text-zinc-500">
                        T-{task.id}
                      </td>
                      <td className="px-6 py-4 font-semibold text-zinc-200">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${task.category.includes("Text") ? "bg-emerald-400" :
                            task.category.includes("Image") ? "bg-gold-mid" : "bg-sky-400"
                            }`} />
                          {task.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-white">
                        {task.earnings}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-tight ${task.status === "Verified" ? "bg-emerald-400/10 text-emerald-400" :
                          task.status === "Pending" ? "bg-amber-400/10 text-amber-400" :
                            "bg-red-400/10 text-red-400"
                          }`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-zinc-500 font-bold">
                        {task.date}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </motion.div>
  );
}
