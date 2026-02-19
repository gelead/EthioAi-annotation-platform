interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full overflow-hidden rounded-full bg-slate-800/80">
      <div
        className="h-1.5 rounded-full bg-sky-500 transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

