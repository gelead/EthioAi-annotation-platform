export default function DashboardPage() {
  return (
    <div className="flex h-full flex-col gap-6">
      <section className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
        <h1 className="text-base font-semibold text-slate-50">National Annotation Overview</h1>
        <p className="mt-1 text-sm text-slate-400">
          High-level view of EthioAI labeling throughput, coverage across Amharic and Afaan Oromo,
          and modality balance (text, image, audio).
        </p>
        <div className="mt-4 grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <p className="text-[11px] text-slate-400">Active Projects</p>
            <p className="mt-1 text-xl font-semibold text-slate-50">3</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <p className="text-[11px] text-slate-400">Daily Labels (mock)</p>
            <p className="mt-1 text-xl font-semibold text-slate-50">1,240</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <p className="text-[11px] text-slate-400">Offline Sessions</p>
            <p className="mt-1 text-xl font-semibold text-slate-50">16</p>
          </div>
        </div>
      </section>
    </div>
  );
}

