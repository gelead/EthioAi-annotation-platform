export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-stretch bg-[#0a0a0a] text-slate-50">
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden border-r border-white/10 bg-gradient-to-br from-black via-slate-900 to-slate-950 px-8 py-10 md:flex">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="network-grid h-full w-full" />
        </div>
        <div className="relative z-10 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff8c00] text-black shadow-[0_0_20px_rgba(255,140,0,0.9)]">
            ⚡
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide">EthioAI</span>
            <span className="text-[11px] text-slate-400">Precision Data Labeling</span>
          </div>
        </div>
        <div className="relative z-10 space-y-4">
          <p className="max-w-md text-lg font-semibold text-slate-50">
            &quot;Data sovereignty is the foundation for Ethiopia&apos;s AI future.&quot;
          </p>
          <p className="max-w-md text-xs text-slate-300">
            EthioAI keeps your labeled datasets local, secure, and tailored to the realities of
            Ethiopian institutions and businesses.
          </p>
        </div>
        <div className="relative z-10 text-[11px] text-slate-500">
          © {new Date().getFullYear()} EthioAI
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-slate-950 px-4 py-10 md:w-1/2 md:px-10">
        <div className="w-full max-w-sm rounded-2xl bg-slate-900/80 p-6 shadow-xl ring-1 ring-white/5">
          <h1 className="text-lg font-semibold text-slate-50">Login to EthioAI</h1>
          <p className="mt-1 text-xs text-slate-400">
            Access your annotation dashboard and continue contributing to Ethiopia&apos;s AI
            ecosystem.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-black/60 px-4 py-2 text-xs font-medium text-slate-100 shadow-sm shadow-black/40 transition hover:border-white/60 hover:bg-black"
          >
            <span className="h-4 w-4 rounded-full bg-white" />
            <span>Continue with Google</span>
          </button>

          <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-500">
            <span className="h-px flex-1 bg-slate-800" />
            <span>or use email</span>
            <span className="h-px flex-1 bg-slate-800" />
          </div>

          <form className="mt-4 space-y-3 text-xs text-slate-200">
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
              <label htmlFor="password" className="block text-[11px] font-medium text-slate-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-xl border border-slate-700 bg-black/40 px-3 py-2 text-xs outline-none ring-0 ring-[#ff8c00]/40 placeholder:text-slate-500 focus:border-[#ff8c00] focus:ring-2"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-[#ff8c00] px-4 py-2 text-xs font-semibold text-black shadow-[0_0_24px_rgba(255,140,0,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,140,0,1)]"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-[11px] text-slate-500">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-[#ff8c00]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

