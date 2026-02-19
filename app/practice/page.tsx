"use client";

import { useState } from "react";
import { exercises } from "../data/exercises";
import {
  gradeAnswer,
  Exercise,
  GradeResult,
} from "../lib/grader";

export default function PracticePage() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] =
    useState<GradeResult | null>(null);

  const exercise: Exercise = exercises[index];

  function handleCheck() {
    const res = gradeAnswer(exercise, answer);
    setResult(res);
  }

  function nextExercise() {
    setAnswer("");
    setResult(null);
    setIndex((i) =>
      i + 1 < exercises.length ? i + 1 : 0
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Practice</h2>

      <div>
        <strong>Level:</strong> {exercise.level}
      </div>

      <p style={{ marginTop: 20 }}>
        {exercise.prompt_fa}
      </p>

      <input
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
        style={{
          padding: 8,
          width: "100%",
          marginTop: 10,
        }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={handleCheck}>
          Check
        </button>

        <button
          onClick={nextExercise}
          style={{ marginLeft: 10 }}
        >
          Next
        </button>
      </div>

      {result && (
        <div style={{ marginTop: 20 }}>
          <p>
            Verdict: {result.verdict}
          </p>
          <p>Score: {result.score}</p>

          {result.verdict === "wrong" && (
            <p>
              Correct answer:{" "}
              {result.missingText}
            </p>
          )}
        </div>
      )}
    </div>
  );
}