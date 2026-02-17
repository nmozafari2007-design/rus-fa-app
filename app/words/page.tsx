"use client";

import { useMemo, useState } from "react";
import { words } from "@/app/data/word";

type WordItem = {
  ru: string;
  fa: string;
  example_ru?: string;
  example_fa?: string;
};

function speakRussian(text: string) {
  if (typeof window === "undefined") return;

  const synth = window.speechSynthesis;
  if (!synth) return;

  synth.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ru-RU";
  utter.rate = 0.95;
  utter.pitch = 1;

  synth.speak(utter);
}

export default function WordsPage() {
  const [search, setSearch] = useState("");

  // حذف لغات تکراری
  const uniqueWords = useMemo(() => {
    const map = new Map<string, WordItem>();
    words.forEach((w) => {
      map.set(w.ru.toLowerCase(), w);
    });
    return Array.from(map.values());
  }, []);

  // فیلتر جستجو
  const filtered = uniqueWords.filter(
    (w) =>
      w.ru.toLowerCase().includes(search.toLowerCase()) ||
      w.fa.includes(search)
  );

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h1 style={{ margin: 0 }}>Russian - Persian Words</h1>

        {/* تعداد لغات */}
        <div style={{ opacity: 0.7 }}>
          Total: <b>{filtered.length}</b>
        </div>
      </div>

      {/* SEARCH */}
      <input
        placeholder="جستجو..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 8,
          border: "1px solid #444",
          marginBottom: 16,
          background: "transparent",
          color: "white",
        }}
      />

      {/* WORD LIST */}
      {filtered.map((word, index) => (
        <div
          key={index}
          style={{
            padding: 12,
            marginBottom: 8,
            border: "1px solid #444",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <b>{word.ru}</b> — {word.fa}
            </div>

            {/* BUTTON SPEAK */}
            <button
              onClick={() => speakRussian(word.ru)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              🔊
            </button>
          </div>

          {/* EXAMPLE */}
          {word.example_ru && (
            <div style={{ marginTop: 6, fontSize: 14, opacity: 0.8 }}>
              {word.example_ru}
              <br />
              {word.example_fa}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}