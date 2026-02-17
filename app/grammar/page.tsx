
"use client";

import React, { useMemo, useState } from "react";
import { grammarLessons } from "../data/grammer"; // اگر مسیر شما app/data/grammer.ts است همین درست است
import type { GrammarItem, Level } from "../data/grammer";
import { speak, stopSpeak } from "../lib/speak"; // اگر فایل را جای دیگر ساختی مسیرش را عوض کن

type LevelOrAll = Level | "ALL";

export default function GrammarPage() {
  const [level, setLevel] = useState<LevelOrAll>("ALL");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const list = level === "ALL" ? grammarLessons : grammarLessons.filter((g) => g.level === level);

    // همیشه Alphabet اول باشد، بعد grammar
    return [...list].sort((a, b) => {
      const ak = a.kind === "alphabet" ? 0 : 1;
      const bk = b.kind === "alphabet" ? 0 : 1;
      if (ak !== bk) return ak - bk;
      return 0;
    });
  }, [level]);

  const openItem = useMemo(() => filtered.find((x) => x.id === openId) ?? null, [filtered, openId]);

  const box: React.CSSProperties = {
    padding: 18,
    maxWidth: 980,
    margin: "0 auto",
  };

  const card: React.CSSProperties = {
    border: "1px solid #444",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    cursor: "pointer",
  };

  const chip: React.CSSProperties = {
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: 999,
    border: "1px solid #555",
    fontSize: 12,
    opacity: 0.9,
  };

  const rtl: React.CSSProperties = { direction: "rtl", textAlign: "right" };
  const ltr: React.CSSProperties = { direction: "ltr", textAlign: "left" };

  return (
    <div style={box}>
      <h1 style={{ margin: 0 }}>گرامر 🇷🇺</h1>
      <div style={{ marginTop: 8, ...rtl, opacity: 0.85 }}>
  تعداد درس‌ها: <b>{filtered.length}</b> / {grammarLessons.length}
</div>
      <div style={{ opacity: 0.8, marginTop: 6, ...rtl }}>
        روی هر مورد کلیک کن تا تعریف، توضیح، مثال و تلفظ 🔊 را ببینی.
      </div>

      {/* Filter */}
      <div style={{ marginTop: 14, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ ...rtl }}>سطح:</div>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as LevelOrAll)}
          style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #444", background: "transparent" }}
        >
          <option value="ALL">همه</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
        </select>

        <button
          onClick={() => stopSpeak()}
          style={{
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #444",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          ⏹️ Stop
        </button>
      </div>

      {/* LIST */}
      <div style={{ 
         marginTop: 16 }}>
        {filtered.map((g) => (
          <div
            key={g.id}
            style={{
              ...card,
              background: openId === g.id ? "rgba(255,255,255,0.04)" : "transparent",
            }}
            onClick={() => setOpenId(openId === g.id ? null : g.id)
             

            }
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <div style={{ fontWeight: 800, ...rtl }}>
                {g.kind === "alphabet" ? "🔤 " : "📘 "}
                {g.title_fa}
              </div>
              <div style={chip}>{g.level}</div>
            </div>

            <div style={{ marginTop: 6, ...ltr, opacity: 0.9 }}>{g.title_ru}</div>

            {/* DETAILS */}
            {openId === g.id && (
              <div style={{ marginTop: 12 }}>
                {/* Definitions */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>


<button
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(g.title_ru, "ru-RU");
                    }}
                    style={{
                      padding: "8px 10px",
                      borderRadius: 10,
                      border: "1px solid #444",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    🔊 عنوان روسی
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (g.definition_ru) speak(g.definition_ru, "ru-RU");
                    }}
                    style={{
                      padding: "8px 10px",
                      borderRadius: 10,
                      border: "1px solid #444",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    🔊 تعریف روسی
                  </button>
                </div>

                <div style={{ marginTop: 10, ...rtl }}>
                  <div style={{ fontWeight: 800, marginBottom: 6 }}>تعریف (فارسی)</div>
                  <div style={{ opacity: 0.9 }}>{g.definition_fa}</div>
                </div>

                <div style={{ marginTop: 10, ...ltr }}>
                  <div style={{ fontWeight: 800, marginBottom: 6 }}>Определение (RU)</div>
                  <div style={{ opacity: 0.9 }}>{g.definition_ru}</div>
                </div>

                {g.explanation_fa && (
                  <div style={{ marginTop: 12, ...rtl }}>
                    <div style={{ fontWeight: 800, marginBottom: 6 }}>توضیحات</div>
                    <div style={{ opacity: 0.9 }}>{g.explanation_fa}</div>
                  </div>
                )}

                {g.explanation_ru && (
                  <div style={{ marginTop: 12, ...ltr }}>
                    <div style={{ fontWeight: 800, marginBottom: 6 }}>Пояснение</div>
                    <div style={{ opacity: 0.9 }}>{g.explanation_ru}</div>
                  </div>
                )}

                {/* ALPHABET */}
                {g.kind === "alphabet" && g.alphabet?.length ? (
                  <div style={{ marginTop: 14 }}>
                    <div style={{ fontWeight: 800, marginBottom: 8, ...rtl }}>حروف روسی (۳۳ حرف)</div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                      {g.alphabet.map((ch, i) => (
                        <div
                          key={i}
                          style={{
                            border: "1px solid #333",
                            borderRadius: 12,
                            padding: 12,
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 12,
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <div style={{ fontSize: 22, fontWeight: 900 }}>
                              {ch.upper} / {ch.lower}
                            </div>
                            <div style={{ marginTop: 6, ...rtl, opacity: 0.9 }}>
                              تلفظ (تقریبی): <b>{ch.sound_fa}</b>
                            </div>
                            <div style={{ marginTop: 6, opacity: 0.9 }}>
                              مثال: <b>{ch.example_ru}</b> — <span style={{ ...rtl }}>{ch.example_fa}</span>
                            </div>
                          </div>

                          <div style={{ display: "grid", gap: 8 }}>


<button
                              onClick={(e) => {
                                e.stopPropagation();
                                speak(ch.upper, "ru-RU");
                              }}
                              style={{
                                padding: "8px 10px",
                                borderRadius: 10,
                                border: "1px solid #444",
                                background: "transparent",
                                cursor: "pointer",
                              }}
                            >
                              🔊 حرف
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                speak(ch.example_ru, "ru-RU");
                              }}
                              style={{
                                padding: "8px 10px",
                                borderRadius: 10,
                                border: "1px solid #444",
                                background: "transparent",
                                cursor: "pointer",
                              }}
                            >
                              🔊 مثال
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* GRAMMAR EXAMPLES */}
                {g.kind === "grammar" && g.examples?.length ? (
                  <div style={{ marginTop: 14 }}>
                    <div style={{ fontWeight: 800, marginBottom: 8, ...rtl }}>مثال‌ها</div>

                    <div style={{ display: "grid", gap: 8 }}>
                      {g.examples.map((ex, i) => (
                        <div
                          key={i}
                          style={{
                            border: "1px solid #333",
                            borderRadius: 10,
                            padding: 10,
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 12,
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 800, ...ltr }}>{ex.ru}</div>
                            <div style={{ opacity: 0.85, ...rtl }}>{ex.fa}</div>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speak(ex.ru, "ru-RU");
                            }}
                            style={{
                              padding: "8px 10px",
                              borderRadius: 10,
                              border: "1px solid #444",
                              background: "transparent",
                              cursor: "pointer",
                              whiteSpace: "nowrap",
                            }}
                          >
                            🔊 تلفظ
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick view */}
      {openItem && (
        <div style={{ marginTop: 14, opacity: 0.75, ...rtl }}>
          باز شد: <b>{openItem.title_fa}</b>
        </div>
      )}
    </div>
  );
}