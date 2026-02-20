"use client";

import React from "react";
import {
  motion,
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

import { AIDataCard } from "@/components/ui/AIDataCard";

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="relative bg-[#050505] text-white">
      {/* Animated grid overlay */}
      <div className="network-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col gap-64 py-32 mx-auto max-w-[1440px] px-8 md:px-12 md:py-64">

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
            {/* Premium Label */}
            <motion.p
              variants={slideUp}
              className="text-premium-label mb-2"
            >
              Precision Intelligence for Ethiopia
            </motion.p>

            {/* Huge Hero Heading */}
            <motion.h1
              variants={slideUp}
              className="text-hero-huge mb-6"
            >
              <span className="text-gold-gradient block">Bridging the Gap:</span>
              <span className="text-white block mt-2">Powering AI with</span>
              <span className="text-gold-gradient block mt-1">Local Context.</span>
            </motion.h1>

            {/* Body copy - Silver Gradient */}
            <motion.p
              variants={slideUp}
              className="max-w-3xl text-xl leading-relaxed text-silver-gradient body-premium mb-8"
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,224,2,0.9), 0 0 100px rgba(178,130,40,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold-primary rounded-full px-10 py-4 shadow-xl"
              >
                Get Started →
              </motion.button>

              {/* Secondary — transparent with gold border that fills */}
              <div className="flex px-10 py-4 items-center justify-center border-2 border-gold-mid text-gold-mid rounded-full font-bold hover:bg-gold-mid hover:text-black transition-all cursor-pointer">
                Learn More
              </div>
            </motion.div>

            {/* Amharic tagline */}
            <motion.p
              variants={slideUp}
              className="body-premium-xs opacity-40 italic"
            >
              ከሰፊ የአማርኛ እና Afaan Oromo መረጃ ጋር የታመቀ መድረክ።
            </motion.p>
          </motion.div>

          {/* Right: Interactive AI Data Card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[560px]">
              <AIDataCard />
            </div>
          </div>
        </section>

        {/* ── Services ────────────────────────────────────────── */}
        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-premium-label">Scalable Solutions</p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl heading-gold">
              Our Comprehensive Services
            </h2>
            <p className="text-xl leading-relaxed text-silver-gradient md:max-w-3xl body-premium">
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
                <h3 className="text-xl font-bold text-white heading-premium">
                  {service.title}
                </h3>
                <p className="text-base text-silver-gradient body-premium">{service.description}</p>

                {/* Hover glow underline */}
                <div
                  className="mt-auto h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: "var(--gold-gradient)" }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Dashboard Quick Access ──────────────────────────── */}
        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-premium-label">Productive Workflows</p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl heading-gold">
              The Professional Dashboard
            </h2>
            <p className="text-xl leading-relaxed text-silver-gradient md:max-w-3xl body-premium">
              Real-time collaboration tools designed for thousands of annotators.
              Manage tasks, review quality, and track rewards with ease.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                href: "/dashboard",
                title: "Dashboard",
                desc: "View projects and analytics",
                icon: "📊"
              },
              {
                href: "/workspace",
                title: "Workspace",
                desc: "Start annotating data",
                icon: "🎯"
              },
              {
                href: "/projects",
                title: "Projects",
                desc: "Manage your datasets",
                icon: "📁"
              },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-5 border bg-[#0a0a0a] hover:bg-[#111] transition-colors group"
                style={{ borderColor: "rgba(255,224,2,0.15)" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white heading-premium group-hover:text-gold-mid transition-colors">
                    {item.title}
                  </h3>
                  <p className="body-premium-sm opacity-60">{item.desc}</p>
                </div>
                <span className="text-gold-mid opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── Why EthioAI ─────────────────────────────────────── */}
        <section className="space-y-8 pb-10">
          <div className="space-y-3">
            <p className="text-premium-label">The EthioAI Advantage</p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl heading-gold">
              Why Choose EthioAI?
            </h2>
            <p className="text-xl leading-relaxed text-silver-gradient md:max-w-3xl body-premium">
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
                <h3 className="text-base font-semibold text-slate-50 heading-premium">
                  {title}
                </h3>
                <p className="body-premium-sm text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Verification Loop (Workflow) ───────────────── */}
        <section className="relative overflow-hidden py-16">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-center">
            <div className="space-y-6">
              <p className="text-premium-label">The Quality Standard</p>
              <h2 className="text-3xl font-extrabold md:text-5xl heading-gold leading-tight">
                The Triple-Layer <span className="text-white">Validation Loop</span>
              </h2>
              <p className="text-lg leading-relaxed text-silver-gradient body-premium">
                We believe raw data isn&apos;t enough. Our proprietary workflow ensures
                every label is cross-referenced by local experts and validated by secondary
                quality assurance nodes.
              </p>

              <div className="space-y-6 pt-4">
                {[
                  { title: "Distributed Sourcing", desc: "Datasets are split across independent verification nodes to eliminate bias." },
                  { title: "Linguistic Calibration", desc: "Expert linguists verify sentiment and intent for 5+ Ethiopian languages." },
                  { title: "Final Consensus", desc: "Our engine triggers multi-user consensus for high-uncertainty samples." }
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-mid/30 bg-gold-mid/5 heading-premium text-gold-mid">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white body-premium-sm">{step.title}</h4>
                      <p className="body-premium-xs opacity-60 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual breakdown of the loop */}
            <div className="relative rounded-3xl border border-white/5 bg-[#0a0a0a] p-1 shadow-2xl">
              <div className="grid grid-cols-2 gap-px bg-white/5 overflow-hidden rounded-3xl">
                {[
                  { label: "Linguists", val: "240+", icon: "✍️" },
                  { label: "SMEs", val: "85", icon: "🔬" },
                  { label: "Latency", val: "< 200ms", icon: "⚡" },
                  { label: "Accuracy", val: "99.8%", icon: "🎯" }
                ].map((item) => (
                  <div key={item.label} className="bg-[#0a0a0a] p-8 text-center">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <p className="heading-premium text-2xl text-white">{item.val}</p>
                    <p className="text-premium-label text-[9px] mt-1 opacity-50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Industrial Impact (Metrics) ───────────────────── */}
        <section className="space-y-12 py-16">
          <div className="text-center space-y-3">
            <p className="text-premium-label">Industrial Impact</p>
            <h2 className="text-3xl font-extrabold md:text-5xl heading-gold mx-auto max-w-2xl leading-tight">
              Sovereign Infrastructure for <span className="text-white">National Growth</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Labeled Tokens", val: "4.2B", desc: "Amharic & Afaan Oromo" },
              { label: "Active Nodes", val: "15k+", desc: "Annotator Network" },
              { label: "Sector Focus", val: "12", desc: "Targeted Industries" },
              { label: "Data Uptime", val: "99.9%", desc: "Enterprise SLA" }
            ].map((stat) => (
              <div key={stat.label} className="group relative rounded-2xl border border-white/5 bg-[#0d0d0d] p-8 transition-all hover:border-gold-mid/30">
                <p className="text-premium-label text-[10px] opacity-60 mb-1">{stat.label}</p>
                <p className="heading-premium text-4xl text-white group-hover:text-gold-mid transition-colors">{stat.val}</p>
                <p className="body-premium-xs mt-3 opacity-40">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact Section ─────────────────────────────────── */}
        <section className="space-y-10">
          <div
            className="grid gap-8 border p-6 backdrop-blur md:grid-cols-2 md:p-8"
            style={{ borderColor: "rgba(255,224,2,0.12)", background: "rgba(10,10,10,0.6)" }}
          >
            <div className="space-y-4">
              <p className="text-premium-label">Get Started</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-white heading-premium">
                Ready to build the future?
              </h2>
              <p className="text-xl leading-relaxed text-silver-gradient body-premium">
                Tell us about your data needs — from pilots to nationwide deployments,
                we&apos;re here to help you build reliable AI systems.
              </p>
              <form className="space-y-3 text-sm text-slate-200">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="space-y-1.5">
                    <label htmlFor={id} className="block body-premium-xs text-zinc-500 mb-1.5">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      className="w-full border bg-black/40 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-600 focus:border-yellow-400"
                      style={{ borderColor: "rgba(255,224,2,0.2)" }}
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block body-premium-xs text-zinc-500 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border bg-black/40 px-3 py-2 text-sm leading-relaxed outline-none transition placeholder:text-zinc-600 focus:border-yellow-400"
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
        </section>
      </div>
    </div>
  );
}
