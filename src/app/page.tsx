"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

/* ─── Animation Variants ─────────────────────────────────────── */
const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: EASE_OUT,
    },
  },
};

/* ─── Gold Outline Button ─────────────────────────────────────── */
function GoldOutlineButton({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.button
      type="button"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ boxShadow: "0 0 20px rgba(255,224,2,0.6)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.75rem 2rem",
        fontSize: "0.875rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: hovered ? "#0a0a0a" : "#ffe002",
        background: "transparent",
        border: "2px solid #ffe002",
        cursor: "pointer",
        transition: "color 0.35s ease",
      }}
    >
      {/* Fill layer */}
      <motion.span
        aria-hidden
        initial={{ x: "-100%" }}
        animate={{ x: hovered ? "0%" : "-100%" }}
        transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, #b28228 0%, #ffe002 50%, #b28228 100%)",
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </motion.button>
  );
}

/* ─── Magnetic Image Card ─────────────────────────────────────── */

function MagneticCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 180,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 180,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.94, y: 32 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.5 }}
      className="gold-glow-border relative w-full overflow-hidden bg-[#0a0a0a] p-6 md:p-7"
    >
      {/* Gold shimmer top bar */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--gold-gradient)" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", color: "#ffe002" }}
          >
            Live Labeling Overview
          </span>
        </div>
        <span
          className="border px-2 py-0.5 text-[10px] tracking-wider"
          style={{ borderColor: "rgba(255,224,2,0.35)", color: "rgba(255,224,2,0.7)" }}
        >
          Low-Bandwidth
        </span>
      </div>

      {/* Stats */}
      <div className="space-y-5 text-xs">
        {[
          { label: "Image Annotation", sub: "82% capacity", pct: "82%" },
          { label: "Text Annotation", sub: "Amharic & Afaan Oromo", pct: "74%" },
          { label: "Audio Annotation", sub: "Studio-grade quality", pct: "66%" },
        ].map(({ label, sub, pct }) => (
          <div key={label} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-zinc-300">{label}</span>
              <span style={{ color: "rgba(255,224,2,0.85)" }}>{sub}</span>
            </div>
            <div className="h-1.5 overflow-hidden bg-zinc-900">
              <motion.div
                className="h-full"
                style={{ background: "var(--gold-gradient)" }}
                initial={{ width: 0 }}
                animate={{ width: pct }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="mt-6 flex items-center gap-2 border-t pt-4" style={{ borderColor: "rgba(255,224,2,0.12)" }}>
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,224,2,0.45)" }}>
          Powered by EthioAI · Addis Ababa
        </span>
      </div>

      {/* Corner glow accent */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,224,2,0.18) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-[#050505] text-white">
      {/* Animated grid overlay */}
      <div className="network-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <main className="container-ethio relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col gap-28 py-14 md:py-20">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">

          {/* Left: staggered text entrance */}
          <motion.div
            className="space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtitle */}
            <motion.p
              variants={slideUp}
              className="text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "#ffe002" }}
            >
              Welcome to EthioAI
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={slideUp}
              className="text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display, 'Playfair Display', Georgia, serif)" }}
            >
              <span className="text-gold-gradient">
                Bridging the Gap:
              </span>
              <br />
              <span className="text-white">
                Powering AI with{" "}
              </span>
              <span className="text-gold-gradient">
                Local Context.
              </span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
              variants={slideUp}
              className="max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base"
            >
              EthioAI makes data labeling effortless — helping businesses and national
              institutions create accurate AI models faster with expert-curated image,
              text, and audio datasets built for Ethiopia&apos;s languages and context.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={slideUp} className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary — solid gold gradient */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(255,224,2,0.9), 0 0 70px rgba(178,130,40,0.55)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "linear-gradient(90deg, #b28228 0%, #ffe002 50%, #b28228 100%)",
                  backgroundSize: "200% auto",
                  color: "#0a0a0a",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  letterSpacing: "0.04em",
                  padding: "0.75rem 2rem",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Get Started →
              </motion.button>

              {/* Secondary — transparent with gold border that fills */}
              <GoldOutlineButton>Learn More</GoldOutlineButton>
            </motion.div>

            {/* Amharic tagline */}
            <motion.p
              variants={slideUp}
              className="text-xs"
              style={{ color: "rgba(255,224,2,0.4)" }}
            >
              ከሰፊ የአማርኛ እና Afaan Oromo መረጃ ጋር የታመቀ መድረክ።
            </motion.p>
          </motion.div>

          {/* Right: Magnetic card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[480px]">
              <MagneticCard />
            </div>
          </div>
        </section>

        {/* ── Services ────────────────────────────────────────── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2
              className="text-2xl font-bold tracking-tight md:text-3xl"
              style={{ fontFamily: "var(--font-display, 'Playfair Display', Georgia, serif)" }}
            >
              <span className="text-gold-gradient">Our Comprehensive Services</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 md:max-w-2xl">
              From satellite imagery to call-center audio, EthioAI provides end-to-end
              labeling workflows tuned for local languages, domains, and infrastructure realities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "◈",
                title: "Image Annotation",
                description:
                  "For object detection, crop disease monitoring, and medical image diagnostics across hospitals and research labs.",
              },
              {
                icon: "◉",
                title: "Text Annotation",
                description:
                  "For Amharic and Afaan Oromo sentiment analysis, NER, intent classification, and document understanding.",
              },
              {
                icon: "◎",
                title: "Audio Annotation",
                description:
                  "For high-quality speech-to-text datasets, dialect coverage, and voice assistant training.",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col gap-4 border bg-[#0a0a0a] p-6 text-sm"
                style={{ borderColor: "rgba(255,224,2,0.18)" }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center border text-base"
                  style={{ borderColor: "rgba(255,224,2,0.4)", color: "#ffe002" }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
                >
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400">{service.description}</p>

                {/* Hover glow underline */}
                <div
                  className="mt-auto h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: "var(--gold-gradient)" }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Why EthioAI ─────────────────────────────────────── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2
              className="text-2xl font-bold tracking-tight md:text-3xl"
              style={{ fontFamily: "var(--font-display, 'Playfair Display', Georgia, serif)" }}
            >
              Why Choose{" "}
              <span className="text-gold-gradient">EthioAI?</span>
            </h2>
            <p className="text-sm text-zinc-400 md:max-w-2xl">
              Purpose-built for Ethiopia&apos;s languages, infrastructure, and institutional
              needs — from national labs to fast-moving startups.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: "👥", title: "Expert Team", body: "Annotation specialists and domain experts who understand local languages, sectors, and regulatory requirements." },
              { icon: "✨", title: "Intuitive Interface", body: "A clean, low-friction UI tailored for large labeling teams, with clear workflows for image, text, and audio tasks." },
              { icon: "🛡️", title: "Data Security", body: "National data sovereignty by design, with encrypted storage and deployment options that keep sensitive assets within trusted borders." },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-3 border bg-[#0d0d0d] p-6 shadow-sm"
                style={{ borderColor: "rgba(255,224,2,0.1)" }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-lg"
                  style={{ background: "rgba(178,130,40,0.12)" }}
                >
                  {icon}
                </div>
                <h3
                  className="text-sm font-semibold text-slate-50"
                  style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
                >
                  {title}
                </h3>
                <p className="text-xs text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact & Footer ─────────────────────────────────── */}
        <section className="space-y-10">
          <div
            className="grid gap-8 border p-6 backdrop-blur md:grid-cols-2 md:p-8"
            style={{ borderColor: "rgba(255,224,2,0.12)", background: "rgba(10,10,10,0.6)" }}
          >
            <div className="space-y-4">
              <h2
                className="text-2xl font-bold tracking-tight text-slate-50"
                style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
              >
                Get in Touch
              </h2>
              <p className="text-sm text-zinc-400">
                Tell us about your data needs — from pilots to nationwide deployments,
                we&apos;re here to help you build reliable AI systems.
              </p>
              <form className="space-y-3 text-xs text-slate-200">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="space-y-1.5">
                    <label htmlFor={id} className="block text-[11px] font-medium text-zinc-400">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      className="w-full border bg-black/40 px-3 py-2 text-xs outline-none transition placeholder:text-zinc-600 focus:border-yellow-400"
                      style={{ borderColor: "rgba(255,224,2,0.2)" }}
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-[11px] font-medium text-zinc-400">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border bg-black/40 px-3 py-2 text-xs leading-relaxed outline-none transition placeholder:text-zinc-600 focus:border-yellow-400"
                    style={{ borderColor: "rgba(255,224,2,0.2)" }}
                    placeholder="What kind of data do you need labeled?"
                  />
                </div>
                <button type="submit" className="btn-gold-primary">
                  Send Message
                </button>
              </form>
            </div>

            <div className="overflow-hidden border" style={{ borderColor: "rgba(255,224,2,0.15)" }}>
              <iframe
                title="EthioAI - Addis Ababa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.077531766721!2d38.746799!3d8.980603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b9e8e4c6c9%3A0x4b4d2b969b5f364!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[260px] w-full grayscale"
              />
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t pt-8 text-xs text-zinc-500" style={{ borderColor: "rgba(255,224,2,0.1)" }}>
            <div className="grid gap-8 md:grid-cols-[1.4fr_repeat(2,minmax(0,1fr))]">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 items-center justify-center text-black text-sm font-bold"
                    style={{ background: "var(--gold-gradient)" }}
                  >
                    ⚡
                  </span>
                  <span className="text-sm font-semibold text-white">EthioAI</span>
                </div>
                <p className="max-w-sm text-zinc-500">
                  Empowering AI initiatives with high-quality data annotation for Ethiopia and the region.
                </p>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "rgba(255,224,2,0.7)" }}>
                  Quick Links
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {["Home", "Services", "About", "Contact"].map((item) => (
                    <li key={item}>
                      <a href="#" className="transition hover:text-yellow-400">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "rgba(255,224,2,0.7)" }}>
                  Contact
                </h3>
                <ul className="mt-3 space-y-1.5">
                  <li><span className="text-zinc-400">Email:</span> support@ethioai.com</li>
                  <li><span className="text-zinc-400">Phone:</span> +251 (0)11 000 0000</li>
                  <li><span className="text-zinc-400">Address:</span> Addis Ababa, Ethiopia</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t pt-4 text-[11px] md:flex-row" style={{ borderColor: "rgba(255,224,2,0.08)" }}>
              <span>© {new Date().getFullYear()} EthioAI. All rights reserved.</span>
              <div className="flex items-center gap-3">
                {["X", "in", "TG", "GH"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="border px-2 py-1 transition hover:text-yellow-400"
                    style={{ borderColor: "rgba(255,224,2,0.15)", borderRadius: "9999px" }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
