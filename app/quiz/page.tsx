
"use client";

import { useMemo, useState } from "react";
import { quizA1, type QuizQuestion } from "../data/quizzes";

function normalizeRu(s: string) {
  return (s ?? "")
    .trim()
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[.,!?;:"“”'()[\]{}<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function QuizPage() {
  const questions = useMemo<QuizQuestion[]>(() => quizA1, []);

  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);

  const [selected, setSelected] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [checked, setChecked] = useState<null | boolean>(null);

  const q = questions[i];

  function resetInputs() {
    setSelected(null);
    setTyped("");
    setChecked(null);
  }

  function checkAnswer() {
    if (!q) return;

    let ok = false;

    if (q.type === "mcq") {
      ok = selected !== null && selected === q.correct;
    } else {
      ok = normalizeRu(typed) === normalizeRu(q.answer_ru || "");
    }

    setChecked(ok);
    if (ok) setScore((s) => s + 1);
  }

  function next() {
    if (i + 1 >= questions.length) return;
    setI((x) => x + 1);
    resetInputs();
  }

  function restart() {
    setI(0);
    setScore(0);
    resetInputs();
  }

  if (!q) {
    return (
      <div style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
        <h2>Quiz تمام شد 🎉</h2>
        <p>
          نمره: <b>{score}</b> از <b>{questions.length}</b>
        </p>
        <button onClick={restart}>دوباره شروع کن</button>
      </div>
    );
  }

  const total = questions.length;
  const progress = Math.round(((i + 1) / total) * 100);

  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "0 auto", direction: "rtl" }}>
      <h2 style={{ marginBottom: 8 }}>Quiz (A1)</h2>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, opacity: 0.8 }}>
        <div>سوال {i + 1} از {total}</div>
        <div>Score: {score}</div>
      </div>

<div
  style={{
    height: 10,
    background: "#eee",
    borderRadius: 10,
    overflow: "hidden"
  }}
>
  <div
    style={{
      width: progress + "%",
      height: "100%",
      background: "#2563eb",
      borderRadius: 10,
      transition: "0.3s"
    }}
  />
</div>

      <div style={{ border: "1px solid rgba(0,0,0,0.12)", borderRadius: 12, padding: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{q.prompt_fa}</div>

        {q.type === "mcq" ? (
          <div style={{ display: "grid", gap: 10 }}>
            {q.choices?.map((c) => (
              <button
                key={c}
                onClick={() => setSelected(c)}
                disabled={checked !== null}
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid rgba(0,0,0,0.18)",
                  background: selected === c ? "rgba(37,99,235,0.10)" : "white",
                  cursor: "pointer",
                  textAlign: "right",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        ) : (
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            disabled={checked !== null}
            placeholder="جواب را به روسی بنویس…"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.18)",
              outline: "none",
            }}
          />
        )}

        <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
          {checked === null ? (
            <button
              onClick={checkAnswer}
              disabled={q.type === "mcq" ? !selected : !typed.trim()}
              style={{ padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}
            >
              Check
            </button>
          ) : (
            <button onClick={next} style={{ padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}>
              Next
            </button>
          )}

<button onClick={restart} style={{ padding: "10px 14px", borderRadius: 10, cursor: "pointer", opacity: 0.8 }}>
            Restart
          </button>
        </div>

        {checked !== null && (
          <div style={{ marginTop: 12, fontWeight: 700, color: checked ? "green" : "crimson" }}>
            {checked ? "✅ درست" : "❌ غلط"}
            {!checked && q.type === "typing" && q.answer_ru ? (
              <div style={{ marginTop: 6, fontWeight: 500, color: "black", opacity: 0.8 }}>
                جواب درست: <b>{q.answer_ru}</b>
              </div>
            ) : null}
            {!checked && q.type === "mcq" && q.correct ? (
              <div style={{ marginTop: 6, fontWeight: 500, color: "black", opacity: 0.8 }}>
                جواب درست: <b>{q.correct}</b>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}