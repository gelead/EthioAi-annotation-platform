export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-slate-50">
      <div className="network-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-6xl flex-col gap-24 px-4 py-12 md:px-6 md:py-16">
        {/* Hero */}
        <section className="grid items-center gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-orange-300">
              Sovereign Data • Built for Ethiopia
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              Power Your AI with
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                PrecisionData
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              EthioAI makes data labeling effortless, helping businesses and national institutions
              create accurate AI models faster with expert-curated image, text, and audio datasets.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center rounded-full bg-[#ff8c00] px-6 py-2 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,140,0,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,140,0,1)]"
              >
                Get to Know Us
              </button>
              <p className="text-xs text-slate-400">
                ከሰፊ የአማርኛ እና Afaan Oromo መረጃ ጋር የታመቀ መድረክ።
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -rotate-6 bg-gradient-to-br from-[#ff8c00]/40 via-transparent to-sky-500/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/90 p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold">Live Labeling Overview</span>
                <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-orange-300">
                  Low-Bandwidth Optimized
                </span>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Image Annotation</span>
                  <span className="text-orange-300">82% capacity</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Text Annotation</span>
                  <span className="text-slate-300">Amharic &amp; Afaan Oromo</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Audio Annotation</span>
                  <span className="text-slate-300">Studio-grade quality</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              Our Comprehensive Services
            </h2>
            <p className="text-sm text-slate-400 md:max-w-2xl">
              From satellite imagery to call-center audio, EthioAI provides end-to-end labeling
              workflows tuned for local languages, domains, and infrastructure realities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Image Annotation",
                description:
                  "For object detection, crop disease monitoring, and medical image diagnostics across hospitals and research labs.",
              },
              {
                title: "Text Annotation",
                description:
                  "For Amharic and Afaan Oromo sentiment analysis, NER, intent classification, and document understanding.",
              },
              {
                title: "Audio Annotation",
                description:
                  "For high-quality speech-to-text datasets, dialect coverage, and voice assistant training.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-3 rounded-2xl border border-transparent bg-[#161616] p-5 shadow-sm transition hover:border-[#ff8c00] hover:shadow-[0_0_30px_rgba(255,140,0,0.6)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff8c00]/10 text-[#ff8c00] shadow-[0_0_18px_rgba(255,140,0,0.7)]">
                  <span className="text-lg">◆</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-50">{service.title}</h3>
                <p className="text-xs text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose EthioAI */}
        <section className="space-y-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              Why Choose EthioAI?
            </h2>
            <p className="text-sm text-slate-400 md:max-w-2xl">
              Purpose-built for Ethiopia&apos;s languages, infrastructure, and institutional needs,
              from national labs to fast-moving startups.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-[#161616] p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff8c00]/10 text-[#ff8c00]">
                <span className="text-lg">👥</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-50">Expert Team</h3>
              <p className="text-xs text-slate-300">
                Annotation specialists and domain experts who understand local languages, sectors,
                and regulatory requirements.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-[#161616] p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff8c00]/10 text-[#ff8c00]">
                <span className="text-lg">✨</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-50">Intuitive Interface</h3>
              <p className="text-xs text-slate-300">
                A clean, low-friction UI tailored for large labeling teams, with clear workflows for
                image, text, and audio tasks.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-[#161616] p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff8c00]/10 text-[#ff8c00]">
                <span className="text-lg">🛡️</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-50">Data Security</h3>
              <p className="text-xs text-slate-300">
                National data sovereignty by design, with encrypted storage and deployment options
                that keep sensitive assets within trusted borders.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Footer */}
        <section className="space-y-10">
          {/* Contact */}
          <div className="grid gap-8 rounded-3xl border border-white/5 bg-black/40 p-6 backdrop-blur md:grid-cols-2 md:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50">Get in Touch</h2>
              <p className="text-sm text-slate-400">
                Tell us about your data needs — from pilots to nationwide deployments, we&apos;re
                here to help you build reliable AI systems.
              </p>
              <form className="space-y-3 text-xs text-slate-200">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-[11px] font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-xl border border-slate-700 bg-black/40 px-3 py-2 text-xs outline-none ring-0 ring-[#ff8c00]/40 placeholder:text-slate-500 focus:border-[#ff8c00] focus:ring-2"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[11px] font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-slate-700 bg-black/40 px-3 py-2 text-xs outline-none ring-0 ring-[#ff8c00]/40 placeholder:text-slate-500 focus:border-[#ff8c00] focus:ring-2"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-medium text-slate-300"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-xl border border-slate-700 bg-black/40 px-3 py-2 text-xs leading-relaxed outline-none ring-0 ring-[#ff8c00]/40 placeholder:text-slate-500 focus:border-[#ff8c00] focus:ring-2"
                    placeholder="What kind of data do you need labeled? Timelines, modalities, scale..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-[#ff8c00] px-5 py-2 text-xs font-semibold text-black shadow-[0_0_24px_rgba(255,140,0,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,140,0,1)]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
              <iframe
                title="EthioAI - Addis Ababa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.077531766721!2d38.746799!3d8.980603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b9e8e4c6c9%3A0x4b4d2b969b5f364!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[260px] w-full"
              />
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-white/5 pt-8 text-xs text-slate-400">
            <div className="grid gap-8 md:grid-cols-[1.4fr_repeat(2,minmax(0,1fr))]">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#ff8c00] text-black shadow-[0_0_18px_rgba(255,140,0,0.8)]">
                    ⚡
                  </span>
                  <span className="text-sm font-semibold text-slate-50">EthioAI</span>
                </div>
                <p className="max-w-sm text-xs text-slate-400">
                  Empowering AI initiatives with high-quality data annotation for Ethiopia and the
                  region.
                </p>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                  Quick Links
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {["Home", "Services", "About", "Contact"].map((item) => (
                    <li key={item}>
                      <a href="#" className="transition hover:text-[#ff8c00]">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                  Contact
                </h3>
                <ul className="mt-3 space-y-1.5">
                  <li>
                    <span className="text-slate-300">Email:</span> support@ethioai.com
                  </li>
                  <li>
                    <span className="text-slate-300">Phone:</span> +251 (0)11 000 0000
                  </li>
                  <li>
                    <span className="text-slate-300">Address:</span> Addis Ababa, Ethiopia
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-4 text-[11px] text-slate-500 md:flex-row">
              <span>© {new Date().getFullYear()} EthioAI. All rights reserved.</span>
              <div className="flex items-center gap-3">
                <a href="#" className="rounded-full bg-slate-900 px-2 py-1 hover:text-[#ff8c00]">
                  X
                </a>
                <a href="#" className="rounded-full bg-slate-900 px-2 py-1 hover:text-[#ff8c00]">
                  in
                </a>
                <a href="#" className="rounded-full bg-slate-900 px-2 py-1 hover:text-[#ff8c00]">
                  TG
                </a>
                <a href="#" className="rounded-full bg-slate-900 px-2 py-1 hover:text-[#ff8c00]">
                  GH
                </a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
