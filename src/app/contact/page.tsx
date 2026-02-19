export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] text-slate-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 md:px-6 md:py-16">
        {/* Top cards */}
        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "General Inquiries",
              description: "Questions about EthioAI, our mission, or how we work.",
              email: "hello@ethioai.com",
            },
            {
              title: "Technical Support",
              description: "Issues with the platform, accounts, or annotation tools.",
              email: "support@ethioai.com",
            },
            {
              title: "Partnerships",
              description: "Collaborations with government, universities, and businesses.",
              email: "partners@ethioai.com",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm"
            >
              <h2 className="text-sm font-semibold text-slate-50">{card.title}</h2>
              <p className="text-xs text-slate-300">{card.description}</p>
              <p className="text-xs text-[#ff8c00]">{card.email}</p>
            </div>
          ))}
        </section>

        {/* Form + Map */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-white/5 bg-black/40 p-6 shadow-sm backdrop-blur md:p-8">
            <h1 className="text-xl font-semibold text-slate-50">Contact EthioAI</h1>
            <p className="mt-1 text-xs text-slate-400">
              Share your needs and we&apos;ll connect you with the right team, whether you&apos;re
              an annotator, researcher, or institution.
            </p>

            <form className="mt-4 space-y-3 text-xs text-slate-200">
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
                <label htmlFor="subject" className="block text-[11px] font-medium text-slate-300">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-slate-700 bg-black/40 px-3 py-2 text-xs outline-none ring-0 ring-[#ff8c00]/40 focus:border-[#ff8c00] focus:ring-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  <option value="annotator">Join as Annotator</option>
                  <option value="government">Government Partnership</option>
                  <option value="business">Business Inquiry</option>
                </option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-[11px] font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-700 bg-black/40 px-3 py-2 text-xs leading-relaxed outline-none ring-0 ring-[#ff8c00]/40 placeholder:text-slate-500 focus:border-[#ff8c00] focus:ring-2"
                  placeholder="Tell us how we can help. Please include timelines, data types, and any key constraints."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-[#ff8c00] px-5 py-2 text-xs font-semibold text-black shadow-[0_0_24px_rgba(255,140,0,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,140,0,1)]"
              >
                Submit
              </button>
              <p className="text-[11px] text-slate-500">
                Our team typically responds within 24 business hours.
              </p>
            </form>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
            <div className="flex h-10 items-center border-b border-slate-800 bg-black/40 px-4 text-[11px] text-slate-400">
              <span className="text-xs font-medium text-slate-200">Nile Academy Office</span>
              <span className="ml-2 text-slate-500">Addis Ababa • Map Placeholder</span>
            </div>
            <div className="h-[260px] w-full bg-[radial-gradient(circle_at_50%_0,#f97316_0,transparent_55%)]" />
          </div>
        </section>
      </main>
    </div>
  );
}

