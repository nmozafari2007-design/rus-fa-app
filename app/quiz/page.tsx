"use client";

import { useMemo, useState } from "react";
import { quizzes } from "../data/quizzes";

type QuizRunState = {
  index: number; // سوال فعلی
  picked?: number; // گزینه انتخاب شده
  status?: "correct" | "wrong"; // نتیجه
  score: number;
  xp: number;
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export default function QuizPage() {
  const list = useMemo(() => quizzes, []);

  // کدام کارت باز است
  const [openQuizId, setOpenQuizId] = useState<string | null>(list[0]?.id ?? null);

  // وضعیت هر کویز جداگانه
  const [runs, setRuns] = useState<Record<string, QuizRunState>>(() => {
    const init: Record<string, QuizRunState> = {};
    for (const q of list) {
      init[q.id] = { index: 0, score: 0, xp: 0 };
    }
    return init;
  });

  const toggle = (id: string) => {
    setOpenQuizId((prev) => (prev === id ? null : id));
  };

  const resetQuiz = (id: string) => {
    setRuns((prev) => ({
      ...prev,
      [id]: { index: 0, score: 0, xp: 0 },
    }));
  };

  const pickOption = (quizId: string, optionIndex: number) => {
    const quiz = list.find((x) => x.id === quizId);
    if (!quiz) return;

    const run = runs[quizId] ?? { index: 0, score: 0, xp: 0 };
    const q = quiz.questions[run.index];
    if (!q) return;

    // اگر همین سوال قبلاً جواب داده شده، دوباره اجازه نده
    if (run.status) return;

    const isCorrect = optionIndex === q.answerIndex;

    setRuns((prev) => {
      const current = prev[quizId] ?? { index: 0, score: 0, xp: 0 };
      const newScore = isCorrect ? current.score + 1 : current.score;
      const newXp = current.xp + (isCorrect ? 10 : 2);

      return {
        ...prev,
        [quizId]: {
          ...current,
          picked: optionIndex,
          status: isCorrect ? "correct" : "wrong",
          score: newScore,
          xp: newXp,
        },
      };
    });

    // سوال بعدی خودکار (بعد 650ms)
    setTimeout(() => {
      setRuns((prev) => {
        const current = prev[quizId] ?? { index: 0, score: 0, xp: 0 };
        const nextIndex = clamp(current.index + 1, 0, quiz.questions.length); // length یعنی تمام شد

        // اگر تمام شد، همانجا نگه دار
        if (current.index >= quiz.questions.length - 1) {
          return {
            ...prev,
            [quizId]: {
              ...current,
              picked: current.picked,
              status: current.status,
            },
          };
        }

        return {
          ...prev,
          [quizId]: {
            ...current,
            index: nextIndex,
            picked: undefined,
            status: undefined,
          },
        };
      });
    }, 650);
  };

  return (
    <main style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#fff", fontSize: 28, fontWeight: 900 }}>
        ✅ کویزها
      </h1>
      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.75)", marginTop: 8 }}>
        روی هر عنوان بزن تا همان‌جا باز شود (سوال‌ها زیر خودش).
      </p>

      {/* GRID */}
      <div
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
        }}
      >
        {list.map((quiz) => {
          const isOpen = openQuizId === quiz.id;
          const run = runs[quiz.id] ?? { index: 0, score: 0, xp: 0 };
          const total = quiz.questions.length;
          const done = run.index >= total - 1 && !!run.status; // آخرین سوال هم جواب داده شده
          const progress = total === 0 ? 0 : Math.round(((run.index + (run.status ? 1 : 0)) / total) * 100);

          const currentQ = quiz.questions[run.index];

          return (
            <section
              key={quiz.id}
              style={{

border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 16,
                padding: 14,
                background: "rgba(255,255,255,0.05)",
              }}
            >
              {/* Header clickable */}
              <div
                onClick={() => toggle(quiz.id)}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                  <div style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>
                    {quiz.title_fa} <span style={{ opacity: 0.7 }}>({quiz.level})</span>
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>
                    {quiz.questions.length} سوال
                  </div>
                </div>

                <div style={{ marginTop: 6, color: "rgba(255,255,255,0.75)", fontSize: 12 }}>
                  {quiz.title_ru} — {quiz.kind}
                </div>

                {/* Progress bar */}
<div
  style={{
    marginTop: 10,
    height: 8,
    borderRadius: 999,
    background: "rgba(255,255,255,0.12)",
    overflow: "hidden",
  }}
>
  <div
    style={{
      width:'${progress}%',
      height: "100%",
      background: "rgba(255,255,255,0.6)",
      transition: "width 300ms ease",
    }}
  />
</div>

                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 12,
                  }}
                >
                  <span>امتیاز: {run.score}/{total}</span>
                  <span>XP: {run.xp}</span>
                </div>
              </div>

              {/* Body */}
              {isOpen && (
                <div style={{ marginTop: 12 }}>
                  {/* Actions */}
                  <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                    <button
                      onClick={() => resetQuiz(quiz.id)}
                      style={{
                        padding: "8px 10px",
                        borderRadius: 10,
                        border: "1px solid rgba(255,255,255,0.18)",
                        background: "rgba(0,0,0,0.25)",
                        color: "#fff",
                        cursor: "pointer",
                        fontWeight: 800,
                      }}
                    >
                      ریست
                    </button>
                  </div>

                  {/* Finished */}
                  {done && (
                    <div
                      style={{
                        marginTop: 12,
                        padding: 12,
                        borderRadius: 12,
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "rgba(0,0,0,0.25)",
                        color: "#fff",
                      }}
                    >
                      🎉 تمام شد! امتیاز نهایی: <b>{run.score}</b> از <b>{total}</b> — XP: <b>{run.xp}</b>
                    </div>
                  )}

                  {/* Current question */}
                  {!done && currentQ && (
                    <div
                      style={{
                        marginTop: 12,
                        padding: 12,
                        borderRadius: 12,
                        border: "1px solid rgba(255,255,255,0.15)",

background: "rgba(0,0,0,0.25)",
                      }}
                    >
                      <div style={{ color: "#fff", fontWeight: 900 }}>
                        سوال {run.index + 1} از {total}
                      </div>

                      <div style={{ marginTop: 8, color: "#fff", fontWeight: 800 }}>
                        {currentQ.q}
                      </div>

                      <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
                        {currentQ.options.map((opt, oi) => {
                          const picked = run.picked === oi;
                          const isCorrect = run.status === "correct" && picked;
                          const isWrong = run.status === "wrong" && picked;

                          // اگر جواب داده شده: جواب درست را هم کمی هایلایت کن
                          const showCorrect = run.status && oi === currentQ.answerIndex;

                          const bg = isCorrect
                            ? "rgba(0,255,0,0.22)"
                            : isWrong
                            ? "rgba(255,0,0,0.22)"
                            : showCorrect
                            ? "rgba(0,255,0,0.12)"
                            : "rgba(255,255,255,0.06)";

                          return (
                            <button
                              key={oi}
                              onClick={() => pickOption(quiz.id, oi)}
                              style={{
                                textAlign: "right",
                                padding: "10px 12px",
                                borderRadius: 12,
                                border: "1px solid rgba(255,255,255,0.14)",
                                background: bg,
                                color: "#fff",
                                cursor: run.status ? "default" : "pointer",
                                fontWeight: 800,
                              }}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback */}
                      {run.status && (
                        <div style={{ marginTop: 10, color: "#fff" }}>
                          {run.status === "correct" ? "✅ درست!" : "❌ غلط!"}
                          {currentQ.explain_fa ? (
                            <div style={{ marginTop: 6, opacity: 0.85, fontSize: 13 }}>
                              💡 {currentQ.explain_fa}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}