"use client";

import { useState } from "react";
import { TextTagger } from "@/components/annotation/TextTagger";
import { ImageCanvasPlaceholder } from "@/components/annotation/ImageCanvasPlaceholder";
import { AudioTranscription } from "@/components/annotation/AudioTranscription";

type Mode = "TEXT" | "IMAGE" | "AUDIO";

export default function WorkspacePage() {
  const [mode, setMode] = useState<Mode>("TEXT");

  return (
    <div className="flex h-full flex-col gap-4">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-base font-semibold text-slate-50">Annotation Workspace</h1>
          <p className="text-sm text-slate-400">
            Unified labeling surface for NER, bounding boxes, and speech transcription.
          </p>
        </div>
        <div className="inline-flex rounded-full border border-slate-800 bg-slate-950/60 p-1 text-xs">
          {[
            { id: "TEXT" as Mode, label: "Text NER" },
            { id: "IMAGE" as Mode, label: "Image" },
            { id: "AUDIO" as Mode, label: "Audio" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMode(item.id)}
              className={`rounded-full px-3 py-1 ${
                mode === item.id
                  ? "bg-sky-500 text-slate-950"
                  : "text-slate-300 hover:bg-slate-900/70"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <section className="flex min-h-[380px] flex-1 flex-col">
        {mode === "TEXT" && <TextTagger />}
        {mode === "IMAGE" && <ImageCanvasPlaceholder />}
        {mode === "AUDIO" && <AudioTranscription />}
      </section>
    </div>
  );
}

