import type { Exercise } from "../lib/grader";

export const exercises: Exercise[] = [
  {
    id: "ex-1",
    type: "sentence",
    level: "A1",
    prompt_fa: "این جمله را به روسی بنویس: من دانشجو هستم",
    answers_ru: ["я студент"],
  },

  {
    id: "ex-2",
    type: "vocab",
    level: "A1",
    prompt_fa: "کلمه «کتاب» به روسی چیست؟",
    answers_ru: ["книга"],
  },

  {
    id: "ex-3",
    type: "sentence",
    level: "A1",
    prompt_fa: "او کار می‌کند",
    answers_ru: ["он работает"],
  },

  {
    id: "ex-4",
    type: "missingText",
    level: "A2",
    prompt_fa: "جای خالی را پر کن: Я ___ студент",
    answers_ru: ["есть"],
  },
];