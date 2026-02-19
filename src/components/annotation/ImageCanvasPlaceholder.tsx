import { useProjectContext } from "@/lib/project-context";

export function ImageCanvasPlaceholder() {
  const { currentTask } = useProjectContext();

  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium">Image Annotation Canvas</span>
        <span className="font-mono text-[11px]">
          {currentTask ? `Task: ${currentTask.id}` : "No active task"}
        </span>
      </div>
      <p className="text-[11px] text-slate-400">
        Placeholder for bounding-box tools (e.g., crop disease detection, X-ray findings).
      </p>
      <div className="relative mt-1 flex flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/80">
        <div className="text-center text-xs text-slate-400">
          <p className="font-semibold text-slate-100">Canvas coming soon</p>
          <p className="mt-1 max-w-xs text-xs text-slate-400">
            This area will host zoom, pan, and bounding-box tools for high-precision agricultural and
            medical image labeling.
          </p>
        </div>
      </div>
    </div>
  );
}

