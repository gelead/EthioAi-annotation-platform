"use client";

import { useState } from "react";
import { useProjectContext } from "@/lib/project-context";

export function AudioTranscription() {
  const { currentTask, submitAnnotationAndNext } = useProjectContext();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    // In a real system, transcription would be saved with timestamps.
    submitAnnotationAndNext();
    setText("");
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div className="space-y-0.5">
          <p className="font-medium text-slate-100">Audio Transcription</p>
          <p className="text-[11px] text-slate-400">
            Designed for low-latency speech-to-text labeling in Amharic and Afaan Oromo.
          </p>
        </div>
        <span className="font-mono text-[11px]">
          {currentTask ? `Task: ${currentTask.id}` : "No active task"}
        </span>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
        <div className="flex flex-col gap-2 rounded-xl bg-slate-900/80 p-3">
          <audio
            className="w-full"
            controls
            src={typeof currentTask?.rawDataUrl === "string" ? currentTask.rawDataUrl : undefined}
          />
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Playback controls optimized for short clips.</span>
            <span className="rounded-full bg-slate-800 px-2 py-0.5 font-mono">
              1.0x • 00:00 / 00:00
            </span>
          </div>
        </div>

        <label className="flex flex-1 flex-col gap-2 text-xs text-slate-200">
          <span className="flex items-center justify-between">
            <span>Transcription</span>
            <span className="text-[11px] text-slate-400">
              Use native script where possible (e.g., አማርኛ, Afaan Oromo).
            </span>
          </span>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            className="min-h-[140px] rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs leading-relaxed text-slate-50 outline-none ring-0 ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2"
            placeholder="የንግግሩን ትክክለኛ ጽሑፍ ይጻፉ፣ ልዩ ድምጾችን እና ቋንቋዊ ልዩነቶችን በግልጽ ሁኔታ ይያዙ።"
          />
        </label>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => setText("")}
            className="rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-900"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!currentTask}
            className="inline-flex items-center rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          >
            Save & Next Task
          </button>
        </div>
      </div>
    </div>
  );
}

