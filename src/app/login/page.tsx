"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function LoginPage() {
  return (
    <motion.div
      className="flex min-h-[calc(100vh-3.5rem)] items-stretch bg-[#0a0a0a] text-white"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Left Panel - Branding */}
      <motion.div
        variants={fadeIn}
        className="relative hidden w-1/2 flex-col justify-between overflow-hidden border-r border-white/10 bg-black/80 px-8 py-10 md:flex"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="network-grid h-full w-full" />
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-300 text-black shadow-lg shadow-amber-500/30">
            <span className="text-lg font-bold">EA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white">EthioAI</span>
            <span className="text-xs text-zinc-400">Precision Data Labeling</span>
          </div>
        </div>

        <motion.div variants={fadeInUp} className="relative z-10 space-y-4">
          <h2 className="max-w-md text-3xl font-extrabold text-white heading-premium tracking-tighter leading-tight">
            &quot;Data sovereignty is the foundation for Ethiopia&apos;s{" "}
            <span className="text-gold-gradient">AI future.</span>&quot;
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-silver-gradient body-premium">
            EthioAI keeps your labeled datasets local, secure, and tailored to the realities of
            Ethiopian institutions and businesses.
          </p>
        </motion.div>

        <div className="relative z-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} EthioAI • Nile Academy Initiative
        </div>
      </motion.div>

      {/* Right Panel - Login Form */}
      <div className="flex w-full items-center justify-center bg-[#0a0a0a] px-4 py-10 md:w-1/2 md:px-10">
        <motion.div
          variants={fadeInUp}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h1 className="text-2xl font-extrabold text-white heading-premium">
              Login to <span className="text-gold-gradient">EthioAI</span>
            </h1>
            <p className="body-premium-sm opacity-60">
              Access your annotation dashboard and continue contributing to Ethiopia&apos;s AI ecosystem.
            </p>
          </div>

          <motion.button
            type="button"
            whileHover={{ borderColor: "rgba(251, 191, 36, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/40 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continue with Google</span>
          </motion.button>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-zinc-500">or use email</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <form className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-premium-label text-[10px] opacity-70">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-zinc-600 focus:border-gold-mid/50 focus:ring-1 focus:ring-gold-mid/20 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-premium-label text-[10px] opacity-70">
                Security Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-zinc-600 focus:border-gold-mid/50 focus:ring-1 focus:ring-gold-mid/20 transition-all"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-zinc-400 cursor-pointer">
                <input type="checkbox" className="rounded border-white/20 bg-black/40 text-amber-400 focus:ring-amber-400/30" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-amber-400 hover:text-amber-300 transition">
                Forgot password?
              </Link>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-300 px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition"
            >
              Login
            </motion.button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-amber-400 hover:text-amber-300 transition">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

