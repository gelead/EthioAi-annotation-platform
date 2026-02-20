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
          <h1 className="text-xl font-extrabold text-white heading-premium tracking-tight">
            Annotation <span className="text-gold-gradient">Workspace</span>
          </h1>
          <p className="body-premium-sm opacity-60">
            Unified labeling surface for NER, bounding boxes, and transcription.
          </p>
        </div>
        <div className="inline-flex rounded-full border border-white/10 bg-black/60 p-1 text-xs">
          {[
            { id: "TEXT" as Mode, label: "Text NER" },
            { id: "IMAGE" as Mode, label: "Image" },
            { id: "AUDIO" as Mode, label: "Audio" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMode(item.id)}
              className={`rounded-full px-4 py-1 transition-all duration-300 ${mode === item.id
                  ? "bg-gold-gradient text-black font-bold shadow-lg shadow-gold-mid/20"
                  : "text-zinc-400 hover:text-white"
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

