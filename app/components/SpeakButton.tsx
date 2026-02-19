"use client";

import { speak, stopSpeak } from "../lib/speak"; // <-- اگر فایل تو app/lib/speak.ts است
// import { speak, stopSpeak } from "@/lib/speak"; // <-- اگر فایل تو lib/speak.ts است
// import { speak, stopSpeak } from "../../lib/speak"; // <-- اگر alias کار نکرد و فایل lib/speak.ts است

export function Speak({
  text,
  lang = "ru-RU",
}: {
  text: string;
  lang?: string;
}) {
  if (!text) return null;

  return (
    <button
      onClick={() => speak(text, lang)}
      style={{
        padding: "6px 10px",
        borderRadius: 8,
        border: "1px solid #444",
        cursor: "pointer",
        background: "transparent",
      }}
    >
      🔊
    </button>
  );
}

export function StopSpeak() {
  return (
    <button
      onClick={() => stopSpeak()}
      style={{
        padding: "6px 10px",
        borderRadius: 8,
        border: "1px solid #444",
        cursor: "pointer",
        background: "transparent",
      }}
    >
      ⏹️
    </button>
  );
}