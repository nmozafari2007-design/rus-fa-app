// data/quizzes.ts

export type QuizType = "mcq" | "typing";

export type QuizQuestion = {
  id: string;
  type: QuizType;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  prompt_fa: string;

  // برای mcq
  choices?: string[];
  correct?: string;

  // برای typing
  answer_ru?: string;
};

export const quizA1: QuizQuestion[] = [
  {
    id: "q1",
    type: "mcq",
    level: "A1",
    prompt_fa: "کلمه «کتاب» به روسی کدام است؟",
    choices: ["дом", "книга", "школа", "мама"],
    correct: "книга",
  },
  {
    id: "q2",
    type: "typing",
    level: "A1",
    prompt_fa: "به روسی بنویس: من دانشجو هستم",
    answer_ru: "я студент",
  },
  {
    id: "q3",
    type: "mcq",
    level: "A1",
    prompt_fa: "کدام جمله درست است؟",
    choices: ["Я студент.", "Я студента.", "Я студенту.", "Я студенты."],
    correct: "Я студент.",
  },
  {
    id: "q4",
    type: "typing",
    level: "A1",
    prompt_fa: "به روسی بنویس: این کتاب است",
    answer_ru: "это книга",
  },
  {
    id: "q5",
    type: "mcq",
    level: "A1",
    prompt_fa: "معنی «Спасибо» چیست؟",
    choices: ["سلام", "خداحافظ", "تشکر", "لطفاً"],
    correct: "تشکر",
  },
];