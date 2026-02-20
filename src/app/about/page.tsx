"use client";

import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  const timeline = [
    {
      year: "2023",
      title: "The Spark",
      description: "Identifying the lack of local, high-quality data for Ethiopian AI systems.",
    },
    {
      year: "2024",
      title: "Development",
      description: "Nile Academy begins building the EthioAI core platform and annotation tools.",
    },
    {
      year: "2025",
      title: "Deployment",
      description: "Launching the first multi-modal labeling tools across text, image, and audio.",
    },
    {
      year: "The Future",
      title: "National Impact",
      description:
        "Partnering with MinT and institutions to power AI initiatives with sovereign data assets.",
    },
  ];

  const team = [
    { name: "Founding Member 1", title: "Co-Founder", group: "Founding Team" },
    { name: "Founding Member 2", title: "Co-Founder", group: "Founding Team" },
    { name: "Founding Member 3", title: "Product Lead", group: "Founding Team" },
    { name: "Founding Member 4", title: "Operations Lead", group: "Founding Team" },
    { name: "Core Dev 1", title: "Full-Stack Engineer", group: "Core Developers" },
    { name: "Core Dev 2", title: "ML Engineer", group: "Core Developers" },
    { name: "Core Dev 3", title: "Frontend Engineer", group: "Core Developers" },
    { name: "Core Dev 4", title: "Infra Engineer", group: "Core Developers" },
  ];

  return (
    <motion.div 
      className="relative overflow-hidden bg-[#0a0a0a] text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 md:px-6 md:py-16">
        {/* Hero */}
        <motion.section 
          variants={fadeInUp}
          className="grid gap-8 md:grid-cols-[1.4fr_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl heading-premium">
              Sovereign Data for a <span className="text-gold-gradient">Digital Ethiopia</span>
            </h1>
            <p className="max-w-xl text-[1.0625rem] leading-[1.6] text-zinc-400">
              EthioAI is built to ensure that Ethiopia owns the data infrastructure behind its
              emerging AI ecosystem — from research labs to national institutions.
            </p>
          </div>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-transparent to-amber-300/30 blur-3xl" />
            <div className="relative flex h-52 items-end overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl">
              <div className="absolute inset-0 flex items-end justify-center bg-[radial-gradient(circle_at_50%_0,#fbbf24_0,transparent_55%)] opacity-40" />
              <div className="relative z-10 flex w-full items-end justify-between px-5 pb-4 text-xs text-zinc-300">
                <div>
                  <p className="font-semibold text-white">Addis Ababa Skyline</p>
                  <p className="text-[11px] text-zinc-500">
                    Placeholder for a future photo capturing Ethiopia&apos;s digital future.
                  </p>
                </div>
                <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] text-amber-400 ring-1 ring-amber-500/30">
                  Image Placeholder
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section 
          variants={fadeInUp}
          className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl heading-premium">
              Our <span className="text-gold-gradient">Journey</span>
            </h2>
            <p className="mt-2 text-[1.0625rem] leading-[1.6] text-zinc-400 md:max-w-xl">
              From the first conversations at Nile Academy to national-scale deployments, EthioAI
              has been designed as a bridge between local expertise and world-class AI tooling.
            </p>

            <div className="mt-6 relative">
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-amber-400 via-zinc-700 to-zinc-800" />
              <motion.div 
                className="space-y-6 pl-10"
                variants={containerVariants}
              >
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={item.year} 
                    variants={fadeInUp}
                    className="relative"
                  >
                    <div className="absolute left-[-22px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0a0a0a]">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                    </div>
                    <motion.div 
                      whileHover={{ 
                        borderColor: "rgba(251, 191, 36, 0.3)",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                      }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl border border-white/10 bg-black/60 p-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                        {item.year}
                      </p>
                      <h3 className="mt-1 text-sm font-semibold text-white heading-premium">{item.title}</h3>
                      <p className="mt-1 text-xs text-zinc-400">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white heading-premium">Nile Academy in Action</h3>
            <p className="text-xs text-zinc-400">
              Future photos will highlight the teams designing guidelines, annotating complex data,
              and validating quality at every step of the pipeline.
            </p>
            <motion.div 
              className="grid gap-4 sm:grid-cols-2"
              variants={containerVariants}
            >
              {[1, 2, 3, 4].map((idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ 
                    borderColor: "rgba(251, 191, 36, 0.2)",
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex h-28 items-end overflow-hidden rounded-xl border border-white/10 bg-black/60"
                >
                  <div className="flex w-full items-end justify-between px-3 pb-3 text-[11px] text-zinc-300">
                    <span>Nile Academy • Team {idx}</span>
                    <span className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-amber-400 ring-1 ring-amber-500/20">
                      Photo Placeholder
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl heading-premium">
              The <span className="text-gold-gradient">Team</span> Behind EthioAI
            </h2>
            <p className="text-[1.0625rem] leading-[1.6] text-zinc-400">
              A blend of researchers, engineers, and operators committed to Ethiopia&apos;s digital
              future.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white heading-premium">Founding Team</h3>
              <motion.div 
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
              >
                {team
                  .filter((member) => member.group === "Founding Team")
                  .map((member, idx) => (
                    <motion.div
                      key={member.name}
                      variants={fadeInUp}
                      whileHover={{ 
                        borderColor: "rgba(251, 191, 36, 0.3)",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        y: -4,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4"
                    >
                      <div className="group relative h-32 overflow-hidden rounded-xl bg-zinc-800">
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-700 to-zinc-500 grayscale transition group-hover:grayscale-0" />
                        <div className="relative z-10 flex h-full items-end justify-between px-3 pb-2 text-[10px] text-zinc-300">
                          <span>Profile Photo</span>
                          <span className="rounded-full bg-black/60 px-2 py-0.5 text-amber-400 ring-1 ring-amber-500/20">
                            Placeholder
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-white">{member.name}</p>
                          <p className="text-[11px] text-zinc-400">{member.title}</p>
                        </div>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black text-[13px] text-zinc-300 transition hover:border-amber-400 hover:text-amber-400"
                          aria-label="LinkedIn profile"
                        >
                          in
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white heading-premium">Core Developers</h3>
              <motion.div 
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
              >
                {team
                  .filter((member) => member.group === "Core Developers")
                  .map((member, idx) => (
                    <motion.div
                      key={member.name}
                      variants={fadeInUp}
                      whileHover={{ 
                        borderColor: "rgba(251, 191, 36, 0.3)",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        y: -4,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-4"
                    >
                      <div className="group relative h-32 overflow-hidden rounded-xl bg-zinc-800">
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-700 to-zinc-500 grayscale transition group-hover:grayscale-0" />
                        <div className="relative z-10 flex h-full items-end justify-between px-3 pb-2 text-[10px] text-zinc-300">
                          <span>Profile Photo</span>
                          <span className="rounded-full bg-black/60 px-2 py-0.5 text-amber-400 ring-1 ring-amber-500/20">
                            Placeholder
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-white">{member.name}</p>
                          <p className="text-[11px] text-zinc-400">{member.title}</p>
                        </div>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black text-[13px] text-zinc-300 transition hover:border-amber-400 hover:text-amber-400"
                          aria-label="LinkedIn profile"
                        >
                          in
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </div>

          <motion.div 
            variants={fadeIn}
            className="mt-6 border-t border-white/10 pt-6 text-center"
          >
            <p className="mx-auto max-w-3xl text-lg font-medium text-white heading-premium">
              &quot;Building the foundational data that allows Ethiopia to <span className="text-gold-gradient">own its AI future.</span>&quot;
            </p>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}

