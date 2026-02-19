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
      </main>
    </div>
  );
}
