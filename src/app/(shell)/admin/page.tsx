export default function AdminPage() {
  return (
    <div className="flex h-full flex-col gap-4">
      <header>
        <h1 className="text-base font-semibold text-slate-50">Admin Console</h1>
        <p className="text-sm text-slate-400">
          Future home for workforce management, quality dashboards, and policy controls.
        </p>
      </header>

      <section className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-950/40">
        <p className="max-w-md text-center text-sm text-slate-400">
          The Admin Console will centralize annotator onboarding, guideline distribution, and model
          governance for national data assets.
        </p>
      </section>
    </div>
  );
}

