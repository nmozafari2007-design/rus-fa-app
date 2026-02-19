

/* ================================
   TYPE
================================ */

export type Level = "A1" | "A2" | "B1" | "B2";

export type ExerciseType =
  | "vocab"
  | "sentence"
  | "missingText";

export interface Exercise {
  id: string;
  type: ExerciseType;
  level: Level;

  prompt_fa: string;
  answers_ru: string[];
}

export interface GradeResult {
  verdict: "correct" | "wrong";
  score: number;
  missingText?: string;
}

/* ================================
   HELPERS
================================ */

function normalize(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.,!?]/g, "");
}

function hasVerbLike(words: string[]): boolean {
  return words.some(
    (w) =>
      w.endsWith("ть") ||
      w.endsWith("тся") ||
      w.endsWith("ться")
  );
}

/* ================================
   MAIN GRADER
================================ */

export function gradeAnswer(
  exercise: Exercise,
  userAnswer: string
): GradeResult {

  const ua = normalize(userAnswer);
  const userWords = ua.split(" ");

  const correct = exercise.answers_ru.some(
    (ans) => normalize(ans) === ua
  );

  let score = 0;

  if (correct) {
    score = 100;
  } else {
    // partial scoring example
    const expectedWords =
      normalize(exercise.answers_ru[0]).split(" ");

    const matched = userWords.filter((w) =>
      expectedWords.includes(w)
    ).length;

    score = Math.round(
      (matched / expectedWords.length) * 100
    );
  }

  // bonus example
  if (hasVerbLike(userWords)) {
    score = Math.min(100, score + 5);
  }

  return {
    verdict: correct ? "correct" : "wrong",
    score,
    missingText: correct
      ? ""
      : exercise.answers_ru[0],
  };
}