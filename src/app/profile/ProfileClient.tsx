"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { updateUserProfile } from "@/app/actions";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  bio: string;
  image: string | null;
  joinDate: string;
  totalAnnotations: number;
  qualityScore: number;
  points: number;
  expertise: string[];
}

interface ActivityItem {
  id: string;
  project: string;
  status: string;
  date: string;
}

interface ProfileClientProps {
  user: UserData;
  recentActivity: ActivityItem[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export function ProfileClient({ user, recentActivity }: ProfileClientProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    bio: user.bio,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage("");

    const result = await updateUserProfile(user.id, {
      name: formData.name,
      bio: formData.bio,
    });

    setIsSaving(false);
    if (result.success) {
      setSaveMessage("Profile updated successfully!");
      setIsEditing(false);
    } else {
      setSaveMessage("Failed to update profile. Please try again.");
    }
  };

  return (
    <motion.div
      className="relative min-h-screen bg-[#0a0a0a] text-white"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <main className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <motion.div variants={fadeInUp} className="mb-10">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span>/</span>
            <span className="text-zinc-400">Profile</span>
          </div>
          <h1 className="text-3xl font-semibold text-white heading-premium">
            Your <span className="text-gold-gradient">Profile</span>
          </h1>
          <p className="mt-2 text-[1.0625rem] leading-[1.6] text-zinc-400">
            Manage your account settings and view your annotation statistics.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar - User Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Profile Card */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-24 w-24 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-amber-500 to-amber-300 flex items-center justify-center text-2xl font-bold text-black">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-emerald-500 border-2 border-black" />
                </div>
                <h2 className="text-lg font-semibold text-white">{user.name}</h2>
                <p className="text-sm text-zinc-400">{user.email}</p>
                <span className="mt-2 inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 ring-1 ring-amber-500/30">
                  {user.role}
                </span>
                <p className="mt-3 text-xs text-zinc-500">Member since {user.joinDate}</p>
                {user.bio && (
                  <p className="mt-3 text-xs text-zinc-400 line-clamp-3">{user.bio}</p>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-300 px-4 py-2 text-sm font-semibold text-black transition"
                >
                  {isEditing ? "Cancel Editing" : "Edit Profile"}
                </motion.button>
              </div>
            </div>

            {/* Expertise */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
              <h3 className="text-sm font-semibold text-white mb-3">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {user.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
              <h3 className="text-sm font-semibold text-white mb-3">Quick Links</h3>
              <nav className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Dashboard
                </Link>
                <Link
                  href="/workspace"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Workspace
                </Link>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Edit Profile Form */}
            {isEditing && (
              <motion.div variants={fadeInUp}>
                <h2 className="text-lg font-semibold text-white mb-4 heading-premium">Edit Profile</h2>
                <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-black/60 p-6 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-amber-400/50 transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bio" className="block text-sm font-medium text-zinc-300">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={3}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-amber-400/50 transition resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSaving}
                      className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-300 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50 transition"
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </motion.button>
                    {saveMessage && (
                      <span className={`text-sm ${saveMessage.includes("success") ? "text-emerald-400" : "text-red-400"}`}>
                        {saveMessage}
                      </span>
                    )}
                  </div>
                </form>
              </motion.div>
            )}

            {/* Stats Grid */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-white mb-4 heading-premium">Statistics</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Total Annotations", value: user.totalAnnotations.toLocaleString(), color: "white" },
                  { label: "Quality Score", value: `${user.qualityScore}%`, color: "emerald" },
                  { label: "Points Earned", value: user.points.toLocaleString(), color: "amber" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{
                      borderColor: "rgba(251, 191, 36, 0.4)",
                      boxShadow: "0 0 20px rgba(251, 191, 36, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-white/10 bg-black/60 p-4"
                  >
                    <p className="text-[11px] text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                    <p className={`mt-1 text-2xl font-semibold ${
                      stat.color === "emerald" ? "text-emerald-400" : 
                      stat.color === "amber" ? "text-amber-400" : "text-white"
                    }`}>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-white mb-4 heading-premium">Recent Activity</h2>
              <div className="rounded-xl border border-white/10 bg-black/60 overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white/5 text-[11px] uppercase tracking-wide text-zinc-500">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">Task</th>
                      <th className="px-4 py-3 text-left font-medium">Project</th>
                      <th className="px-4 py-3 text-left font-medium">Status</th>
                      <th className="px-4 py-3 text-right font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentActivity.map((activity, idx) => (
                      <tr key={activity.id} className={idx % 2 === 0 ? "bg-white/2" : ""}>
                        <td className="px-4 py-3 font-mono text-[11px] text-zinc-300">{activity.id}</td>
                        <td className="px-4 py-3 text-sm text-zinc-300">{activity.project}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                              activity.status === "Verified"
                                ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30"
                                : "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30"
                            }`}
                          >
                            {activity.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right text-xs text-zinc-500">{activity.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Account Settings */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-white mb-4 heading-premium">Account Settings</h2>
              <div className="rounded-xl border border-white/10 bg-black/60 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Email Notifications</p>
                    <p className="text-xs text-zinc-500">Receive updates about your tasks and projects</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="h-5 w-9 rounded-full bg-zinc-700 peer-focus:ring-1 peer-focus:ring-amber-400/30 peer-checked:bg-amber-500 after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:left-4.5" />
                  </label>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Two-Factor Authentication</p>
                    <p className="text-xs text-zinc-500">Add an extra layer of security to your account</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    Enable
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
