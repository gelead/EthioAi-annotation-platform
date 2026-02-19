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
    <div className="relative overflow-hidden bg-[#0a0a0a] text-slate-50">
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 md:px-6 md:py-16">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[1.4fr_minmax(0,1fr)]">
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Sovereign Data for a Digital Ethiopia
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              EthioAI is built to ensure that Ethiopia owns the data infrastructure behind its
              emerging AI ecosystem — from research labs to national institutions.
            </p>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#ff8c00]/30 via-transparent to-sky-500/30 blur-3xl" />
            <div className="relative flex h-52 items-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-t from-black via-slate-900 to-slate-800 shadow-2xl">
              <div className="absolute inset-0 flex items-end justify-center bg-[radial-gradient(circle_at_50%_0,#f97316_0,transparent_55%)] opacity-40" />
              <div className="relative z-10 flex w-full items-end justify-between px-5 pb-4 text-xs text-slate-200">
                <div>
                  <p className="font-semibold text-slate-50">Addis Ababa Skyline</p>
                  <p className="text-[11px] text-slate-400">
                    Placeholder for a future photo capturing Ethiopia&apos;s digital future.
                  </p>
                </div>
                <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] text-orange-300">
                  Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              Our Journey
            </h2>
            <p className="mt-2 text-sm text-slate-400 md:max-w-xl">
              From the first conversations at Nile Academy to national-scale deployments, EthioAI
              has been designed as a bridge between local expertise and world-class AI tooling.
            </p>

            <div className="mt-6 relative">
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#ff8c00] via-slate-700 to-slate-800" />
              <div className="space-y-6 pl-10">
                {timeline.map((item, idx) => (
                  <div key={item.year} className="relative">
                    <div className="absolute left-[-22px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0a0a0a]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff8c00] shadow-[0_0_12px_rgba(255,140,0,0.9)]" />
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300">
                        {item.year}
                      </p>
                      <h3 className="mt-1 text-sm font-semibold text-slate-50">{item.title}</h3>
                      <p className="mt-1 text-xs text-slate-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-50">Nile Academy in Action</h3>
            <p className="text-xs text-slate-300">
              Future photos will highlight the teams designing guidelines, annotating complex data,
              and validating quality at every step of the pipeline.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((idx) => (
                <div
                  key={idx}
                  className="flex h-28 items-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-t from-black via-slate-900 to-slate-800"
                >
                  <div className="flex w-full items-end justify-between px-3 pb-3 text-[11px] text-slate-200">
                    <span>Nile Academy • Team {idx}</span>
                    <span className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-orange-300">
                      Photo Placeholder
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              The Team Behind EthioAI
            </h2>
            <p className="text-sm text-slate-400">
              A blend of researchers, engineers, and operators committed to Ethiopia&apos;s digital
              future.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-100">Founding Team</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {team
                  .filter((member) => member.group === "Founding Team")
                  .map((member) => (
                    <div
                      key={member.name}
                      className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
                    >
                      <div className="group relative h-32 overflow-hidden rounded-xl bg-slate-800">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-500 grayscale transition group-hover:grayscale-0" />
                        <div className="relative z-10 flex h-full items-end justify-between px-3 pb-2 text-[10px] text-slate-200">
                          <span>Profile Photo</span>
                          <span className="rounded-full bg-black/60 px-2 py-0.5 text-orange-300">
                            Placeholder
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-slate-50">{member.name}</p>
                          <p className="text-[11px] text-slate-400">{member.title}</p>
                        </div>
                        <button
                          type="button"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-[13px] text-slate-300 transition hover:border-[#0a66c2] hover:text-[#0a66c2]"
                          aria-label="LinkedIn profile"
                        >
                          in
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-100">Core Developers</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {team
                  .filter((member) => member.group === "Core Developers")
                  .map((member) => (
                    <div
                      key={member.name}
                      className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
                    >
                      <div className="group relative h-32 overflow-hidden rounded-xl bg-slate-800">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-500 grayscale transition group-hover:grayscale-0" />
                        <div className="relative z-10 flex h-full items-end justify-between px-3 pb-2 text-[10px] text-slate-200">
                          <span>Profile Photo</span>
                          <span className="rounded-full bg-black/60 px-2 py-0.5 text-orange-300">
                            Placeholder
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-slate-50">{member.name}</p>
                          <p className="text-[11px] text-slate-400">{member.title}</p>
                        </div>
                        <button
                          type="button"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-[13px] text-slate-300 transition hover:border-[#0a66c2] hover:text-[#0a66c2]"
                          aria-label="LinkedIn profile"
                        >
                          in
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-6 text-center">
            <p className="mx-auto max-w-3xl text-base font-semibold text-slate-100 md:text-lg">
              &quot;Building the foundational data that allows Ethiopia to own its AI future.&quot;
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

