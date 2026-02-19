import type { Project } from "@/types";
import { ProgressBar } from "./ProgressBar";

interface ProjectCardProps {
  project: Project;
  onSelect?: () => void;
}

const TYPE_LABEL: Record<Project["type"], string> = {
  TEXT: "Text",
  IMAGE: "Image",
  AUDIO: "Audio",
};

const LANGUAGE_LABEL: Record<Project["language"], string> = {
  AMHARIC: "አማርኛ",
  AFAAN_OROMO: "Afaan Oromo",
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex w-full flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 text-left shadow-sm ring-1 ring-slate-900/80 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:ring-sky-500/40"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-50">{project.name}</h3>
        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-200">
          {TYPE_LABEL[project.type]}
        </span>
      </div>
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="font-medium">{LANGUAGE_LABEL[project.language]}</span>
        <span>{project.progress.toFixed(0)}%</span>
      </div>
      <ProgressBar value={project.progress} />
    </button>
  );
}

