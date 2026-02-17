// app/lib/speak.ts
export type SpeakLang = "ru-RU" | "fa-IR";

export function speak(text: string, lang: SpeakLang = "ru-RU") {
  if (typeof window === "undefined") return;
  const synth = window.speechSynthesis;
  if (!synth) return;

  // stop previous
  synth.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.95;   // کمی آهسته‌تر
  u.pitch = 1;

  synth.speak(u);
}

export function stopSpeak() {
  if (typeof window === "undefined") return;
  window.speechSynthesis?.cancel();
}