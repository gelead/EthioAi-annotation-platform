"use client";

import { motion, Variants } from "framer-motion";

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

const fadeInUp: Variants = {
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

const fadeIn: Variants = {
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
      className="relative bg-[#050505] text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-16 px-6 py-16 md:px-12 md:py-24">
        {/* Hero */}
        <motion.section
          variants={fadeInUp}
          className="grid gap-12 md:grid-cols-[1.4fr_minmax(0,1fr)] items-center"
        >
          <div className="space-y-6">
            <p className="text-premium-label">Our Philosophy</p>
            <h1 className="text-hero-huge">
              Sovereign Data for a <span className="text-gold-gradient">Digital Ethiopia</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-silver-gradient body-premium">
              EthioAI is built to ensure that Ethiopia owns the data infrastructure behind its
              emerging AI ecosystem — from research labs to national institutions.
            </p>
          </div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-300/20 blur-3xl opacity-50" />
            <div className="relative flex h-64 items-end overflow-hidden rounded-3xl border border-white/5 bg-black/40 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 flex items-end justify-center bg-[radial-gradient(circle_at_50%_0,#fbbf24_0,transparent_55%)] opacity-20" />
              <div className="relative z-10 flex w-full items-end justify-between px-6 pb-6 text-xs text-zinc-300">
                <div>
                  <p className="font-bold text-white body-premium-sm">Addis Ababa Skyline</p>
                  <p className="body-premium-xs opacity-50 mt-1">
                    Future photo capturing Ethiopia&apos;s digital landscape.
                  </p>
                </div>
                <span className="rounded-full bg-black/60 px-4 py-1.5 text-[10px] text-amber-400 ring-1 ring-amber-500/30 uppercase tracking-widest font-bold">
                  Image
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section
          variants={fadeInUp}
          className="grid gap-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        >
          <div>
            <p className="text-premium-label">The Evolution</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl heading-gold">
              Our Journey
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-silver-gradient md:max-w-2xl body-premium">
              From the first conversations at Nile Academy to national-scale deployments, EthioAI
              has been designed as a bridge between local expertise and world-class AI tooling.
            </p>

            <div className="mt-12 relative">
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-amber-400 via-zinc-800 to-transparent" />
              <motion.div
                className="space-y-8 pl-10"
                variants={containerVariants}
              >
                {timeline.map((item) => (
                  <motion.div
                    key={item.year}
                    variants={fadeInUp}
                    className="relative"
                  >
                    <div className="absolute left-[-22px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#050505] ring-1 ring-white/10">
                      <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.9)]" />
                    </div>
                    <motion.div
                      whileHover={{
                        borderColor: "rgba(251, 191, 36, 0.4)",
                        backgroundColor: "rgba(10, 10, 10, 0.8)",
                        x: 10,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="rounded-2xl border border-white/5 bg-black/40 p-6 backdrop-blur-sm"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                        {item.year}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-white heading-premium">{item.title}</h3>
                      <p className="mt-2 text-base text-silver-gradient leading-relaxed body-premium">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-base font-bold text-white heading-premium uppercase tracking-widest text-amber-500/80">Nile Academy in Action</h3>
            <p className="body-premium-sm opacity-60">
              Future photos will highlight the teams designing guidelines, annotating complex data,
              and validating quality at every step of the pipeline.
            </p>
            <motion.div
              className="grid gap-6 sm:grid-cols-2"
              variants={containerVariants}
            >
              {[1, 2, 3, 4].map((idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{
                    borderColor: "rgba(251, 191, 36, 0.3)",
                    scale: 1.05,
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex h-36 items-end overflow-hidden rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm group"
                >
                  <div className="flex w-full items-end justify-between px-4 pb-4 body-premium-xs font-bold uppercase tracking-wider">
                    <span className="opacity-60">Team {idx}</span>
                    <span className="rounded-full bg-black/50 px-2.5 py-1 body-premium-xs text-zinc-500 ring-1 ring-white/10 group-hover:text-amber-400 group-hover:ring-amber-400/30 transition-all">
                      Placeholder
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
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <p className="text-premium-label">The Workforce</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl heading-gold">
              The Team Behind EthioAI
            </h2>
            <p className="text-xl text-silver-gradient body-premium">
              A blend of researchers, engineers, and operators committed to Ethiopia&apos;s digital
              future.
            </p>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white heading-premium text-center sm:text-left">Founding Team</h3>
              <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
              >
                {team
                  .filter((member) => member.group === "Founding Team")
                  .map((member) => (
                    <motion.div
                      key={member.name}
                      variants={fadeInUp}
                      whileHover={{
                        borderColor: "rgba(251, 191, 36, 0.5)",
                        backgroundColor: "rgba(15, 15, 15, 0.8)",
                        y: -8,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-black/40 p-5 backdrop-blur-sm"
                    >
                      <div className="group relative h-40 overflow-hidden rounded-xl bg-zinc-900">
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-800 to-zinc-600 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" />
                        <div className="relative z-10 flex h-full items-end justify-between px-4 pb-3 text-[10px] text-zinc-300 font-bold uppercase tracking-widest">
                          <span>Profile</span>
                          <span className="rounded-full bg-black/60 px-3 py-1 text-amber-400 ring-1 ring-amber-500/20">
                            EA-Aero
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-base font-bold text-white heading-premium">{member.name}</p>
                          <p className="body-premium-xs font-medium text-zinc-500 mt-1">{member.title}</p>
                        </div>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(178, 130, 40, 0.1)" }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[14px] text-zinc-400 transition hover:border-amber-400 hover:text-amber-400"
                          aria-label="LinkedIn profile"
                        >
                          in
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white heading-premium text-center sm:text-left">Core Developers</h3>
              <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
              >
                {team
                  .filter((member) => member.group === "Core Developers")
                  .map((member) => (
                    <motion.div
                      key={member.name}
                      variants={fadeInUp}
                      whileHover={{
                        borderColor: "rgba(251, 191, 36, 0.5)",
                        backgroundColor: "rgba(15, 15, 15, 0.8)",
                        y: -8,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-black/40 p-5 backdrop-blur-sm"
                    >
                      <div className="group relative h-40 overflow-hidden rounded-xl bg-zinc-900">
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-800 to-zinc-600 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" />
                        <div className="relative z-10 flex h-full items-end justify-between px-4 pb-3 text-[10px] text-zinc-300 font-bold uppercase tracking-widest">
                          <span>Developer</span>
                          <span className="rounded-full bg-black/60 px-3 py-1 text-amber-400 ring-1 ring-amber-500/20">
                            EA-Core
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-base font-bold text-white heading-premium">{member.name}</p>
                          <p className="body-premium-xs font-medium text-zinc-500 mt-1">{member.title}</p>
                        </div>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(178, 130, 40, 0.1)" }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[14px] text-zinc-400 transition hover:border-amber-400 hover:text-amber-400"
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
            className="mt-12 border-t border-white/5 pt-12 text-center"
          >
            <p className="mx-auto max-w-4xl text-3xl font-extrabold text-white heading-premium leading-relaxed">
              &quot;Building the foundational data that allows Ethiopia to <span className="text-gold-gradient">own its AI future.</span>&quot;
            </p>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}

