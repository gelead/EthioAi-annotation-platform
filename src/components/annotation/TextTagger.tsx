"use client";

import { useState } from "react";
import { useProjectContext } from "@/lib/project-context";

type NerLabel = "PERSON" | "LOCATION" | "DATE";

const LABELS: { id: NerLabel; name: string; color: string; geez: string }[] = [
  { id: "PERSON", name: "Person", color: "bg-emerald-500/20 text-emerald-200", geez: "ሰው" },
  { id: "LOCATION", name: "Location", color: "bg-sky-500/20 text-sky-200", geez: "ቦታ" },
  { id: "DATE", name: "Date", color: "bg-amber-500/20 text-amber-100", geez: "ቀን" },
];

interface SpanAnnotation {
  start: number;
  end: number;
  label: NerLabel;
}

export function TextTagger() {
  const { currentTask, submitAnnotationAndNext } = useProjectContext();
  const [selectedLabel, setSelectedLabel] = useState<NerLabel | null>("PERSON");
  const [annotations, setAnnotations] = useState<SpanAnnotation[]>([]);

  const handleMouseUp = () => {
    if (!currentTask || !selectedLabel) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const textContainer = document.getElementById("ner-text");
    if (!textContainer || !textContainer.contains(range.commonAncestorContainer)) {
      return;
    }

    const fullText = currentTask.rawDataUrl;
    const selectedText = selection.toString();
    if (!selectedText.trim()) return;

    const start = fullText.indexOf(selectedText);
    if (start === -1) return;

    const end = start + selectedText.length;

    setAnnotations((prev) => [...prev, { start, end, label: selectedLabel }]);
    selection.removeAllRanges();
  };

  const handleSubmit = () => {
    // Here we would persist annotations; for now we just advance.
    submitAnnotationAndNext();
    setAnnotations([]);
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {LABELS.map((label) => (
            <button
              key={label.id}
              type="button"
              onClick={() => setSelectedLabel(label.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
                selectedLabel === label.id
                  ? `${label.color} border-transparent`
                  : "border-slate-700 bg-slate-900 text-slate-200"
              }`}
            >
              <span className="text-[11px] uppercase tracking-wide">{label.name}</span>
              <span className="text-slate-300">{label.geez}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          disabled={!currentTask}
        >
          Save & Next Task
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-medium">Text Tagging (NER)</span>
          <span className="font-mono text-[11px]">
            {currentTask ? `Task: ${currentTask.id}` : "No active task"}
          </span>
        </div>
        <p className="text-[11px] text-slate-400">
          የሰው ስም፣ ቦታ እና ቀን ያመለክቱ ቃላትን ይምረጡ እና መለያ ይያዙ።
        </p>
        <div
          id="ner-text"
          onMouseUp={handleMouseUp}
          className="mt-1 flex-1 cursor-text whitespace-pre-wrap rounded-xl bg-slate-900/80 p-4 text-sm leading-relaxed text-slate-50"
        >
          {currentTask?.rawDataUrl ?? "የሚሰሩት ተግባር የለም። ከፕሮጀክት ዝርዝር ውስጥ ፕሮጀክት ይምረጡ።"}
        </div>
      </div>

      {annotations.length > 0 && (
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-300">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-semibold text-slate-100">Current labels</span>
            <span className="text-[11px]">{annotations.length} spans</span>
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {annotations.map((ann, idx) => {
              const text = currentTask?.rawDataUrl.slice(ann.start, ann.end) ?? "";
              const meta = LABELS.find((l) => l.id === ann.label)!;
              return (
                <li
                  key={`${ann.start}-${ann.end}-${idx}`}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-1"
                >
                  <span className="max-w-[160px] truncate text-[11px] text-slate-100">{text}</span>
                  <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${meta.color}`}>
                    {meta.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

