
import type { Level } from "../data/grammer";
import { grammarLessons } from "../data/grammer";

export type Question = {
  q: string;
  options: string[];
  answerIndex: number;
  explain_fa?: string;
};

export type LessonQuiz = {
  id: string; // MUST match GrammarItem.id
  kind: "alphabet" | "grammar";
  level: Level;
  title_fa: string;
  title_ru: string;
  questions: Question[];
};

const titleOf = (id: string) => {
  const lesson = grammarLessons.find((x) => x.id === id);
  return lesson
    ? { kind: lesson.kind, level: lesson.level, title_fa: lesson.title_fa, title_ru: lesson.title_ru }
    : { kind: "grammar" as const, level: "A1" as Level, title_fa: id, title_ru: id };
};

export const quizzes: LessonQuiz[] = [
  // =========================
  // ALPHABET
  // =========================
  (() => {
    const meta = titleOf("alphabet-33");
    return {
      id: "alphabet-33",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        {
          q: "کدام حرف روسی معمولاً «صدا ندارد» و فقط تلفظ را تغییر می‌دهد؟",
          options: ["Ь", "Р", "О", "Б"],
          answerIndex: 0,
          explain_fa: "Ь (نرم‌کن) و Ъ (سخت‌کن) خودِ صدا ندارند و روی حرف قبل/بعد اثر می‌گذارند.",
        },
        {
          q: "کدام گزینه صدای تقریبی حرف «Ж» است؟",
          options: ["چ", "ژ", "ش", "ز"],
          answerIndex: 1,
        },
        {
          q: "کدام حرف معمولاً صدای «یا» می‌دهد؟",
          options: ["Ю", "Я", "Э", "Ё"],
          answerIndex: 1,
        },
      ],
    };
  })(),

  // =========================
  // A1 (10)
  // =========================
  (() => {
    const meta = titleOf("a1-01-pronouns");
    return {
      id: "a1-01-pronouns",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Я» در روسی یعنی کدام؟", options: ["من", "تو", "او (مذکر)", "آنها"], answerIndex: 0 },
        { q: "«Она» به چه معنی است؟", options: ["او (مونث)", "او (مذکر)", "ما", "شما"], answerIndex: 0 },
        { q: "کدام ضمیر معمولاً «شما (رسمی/جمع)» است؟", options: ["ты", "вы", "они", "мы"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a1-02-to-be-present");
    return {
      id: "a1-02-to-be-present",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        {
          q: "در زمان حال روسی، فعل «بودن» معمولاً چه می‌شود؟",
          options: ["حذف می‌شود", "همیشه نوشته می‌شود", "به آخر جمله می‌رود", "به صورت «был» می‌آید"],
          answerIndex: 0,
        },
        { q: "کدام جمله درست‌تر است؟", options: ["Я есть врач.", "Я врач.", "Я был врач.", "Я буду врач."], answerIndex: 1 },
        {
          q: "«Это мой друг.» در فارسی یعنی:",
          options: ["این دوست من است.", "این دوست تو است.", "او دوست من است.", "این خانه من است."],
          answerIndex: 0,
        },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a1-03-gender-nouns");
    return {
      id: "a1-03-gender-nouns",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«книга» از نظر جنسیت کدام است؟", options: ["مذکر", "مونث", "خنثی", "جمع"], answerIndex: 1 },
        { q: "«окно» از نظر جنسیت کدام است؟", options: ["مذکر", "مونث", "خنثی", "جمع"], answerIndex: 2 },
        {
          q: "جنسیت اسم‌ها روی کدام مورد اثر می‌گذارد؟",
          options: ["فقط تلفظ", "فقط املاء", "صفت/ضمیر و بعضی پایان‌ها", "هیچ چیز"],
          answerIndex: 2,
        },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a1-04-plural");
    return {
      id: "a1-04-plural",

kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "جمع «книга» کدام است؟", options: ["книги", "книгаа", "книгаы", "книго"], answerIndex: 0 },
        { q: "جمع «стол» کدام است؟", options: ["стола", "столы", "столи", "столу"], answerIndex: 1 },
        { q: "در روسی جمع بستن معمولاً با چه چیزی انجام می‌شود؟", options: ["فقط افزودن s", "تغییر پایان کلمه", "تغییر اول کلمه", "تغییر داخل کلمه همیشه"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a1-05-basic-word-order");
    return {
      id: "a1-05-basic-word-order",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "ترتیب رایج جمله ساده SVO یعنی:", options: ["فعل-فاعل-مفعول", "فاعل-فعل-مفعول", "مفعول-فاعل-فعل", "صفت-اسم-فعل"], answerIndex: 1 },
        { q: "«Я читаю книгу.» یعنی:", options: ["من کتاب می‌خوانم.", "من کتاب می‌نویسم.", "او کتاب می‌خواند.", "ما کتاب می‌خوانیم."], answerIndex: 0 },
        { q: "در روسی ترتیب کلمات:", options: ["کاملاً ثابت است", "کمی انعطاف دارد", "هیچ قانونی ندارد", "فقط در سوال‌ها عوض می‌شود"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a1-06-negation");
    return {
      id: "a1-06-negation",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "برای منفی کردن در روسی معمولاً از چه کلمه‌ای استفاده می‌شود؟", options: ["да", "не", "и", "ли"], answerIndex: 1 },
        { q: "«Я не знаю.» یعنی:", options: ["من می‌دانم.", "من نمی‌دانم.", "من می‌خواهم.", "من می‌روم."], answerIndex: 1 },
        { q: "«Это не дом.» یعنی:", options: ["این خانه است.", "این خانه نیست.", "آن خانه است.", "آن خانه نیست."], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a1-07-questions");
    return {
      id: "a1-07-questions",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Где?» یعنی:", options: ["چه؟", "کجا؟", "کی؟", "چرا؟"], answerIndex: 1 },
        { q: "«Что это?» یعنی:", options: ["این چیست؟", "این کجاست؟", "این کیست؟", "این چند است؟"], answerIndex: 0 },
        { q: "سوال در روسی می‌تواند با چه چیزی ساخته شود؟", options: ["فقط کلمه پرسشی", "فقط علامت ؟", "لحن (intonation) و/یا کلمات پرسشی", "فقط با فعل کمکی"], answerIndex: 2 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a1-08-numbers");
    return {
      id: "a1-08-numbers",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Мне 20 лет.» یعنی:", options: ["من ۲۰ ساله‌ام.", "من ۲۰ روزه‌ام.", "من ۲۰ کتاب دارم.", "من ۲۰ کار می‌کنم."], answerIndex: 0 },
        { q: "«Два кофе, пожалуйста.» یعنی:", options: ["دو قهوه لطفاً.", "یک قهوه لطفاً.", "دو چای لطفاً.", "قهوه کجاست؟"], answerIndex: 0 },
        { q: "اعداد بیشتر در کدام موقعیت کاربرد دارند؟", options: ["فقط سلام و احوال‌پرسی", "خرید/سن/زمان", "فقط شعر", "فقط در گذشته"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a1-09-prep-v-na");
    return {
      id: "a1-09-prep-v-na",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«в» معمولاً معنی کدام دارد؟", options: ["روی سطح", "داخل/در", "بدون", "با"], answerIndex: 1 },
        { q: "«на» معمولاً برای چه استفاده می‌شود؟", options: ["داخل", "سطح/جاهای خاص", "مالکیت", "زمان گذشته"], answerIndex: 1 },
        { q: "کدام جمله درست است؟", options: ["Я в работе.", "Я на работе.", "Я на Москва.", "Я в стол."], answerIndex: 1 },
      ],
    };
  })(),

(() => {
    const meta = titleOf("a1-10-present-tense");
    return {
      id: "a1-10-present-tense",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "در زمان حال، فعل‌ها در روسی بر اساس چه چیزی تغییر می‌کنند؟", options: ["فقط زمان", "شخص (من/تو/او…)", "فقط مکان", "فقط صفت"], answerIndex: 1 },
        { q: "کدام نمونه نشان‌دهنده صرف است؟", options: ["Я работаю. Ты работаешь.", "Я работа. Ты работа.", "Я работал. Ты работал.", "Я буду работать."], answerIndex: 0 },
        { q: "«Он говорит.» یعنی:", options: ["او صحبت می‌کند.", "او صحبت کرد.", "او صحبت خواهد کرد.", "او صحبت نکرد."], answerIndex: 0 },
      ],
    };
  })(),

  // =========================
  // A2 (10)
  // =========================
  (() => {
    const meta = titleOf("a2-01-accusative-intro");
    return {
      id: "a2-01-accusative-intro",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "حالت مفعولی بیشتر برای کدام استفاده می‌شود؟", options: ["فاعل", "مفعول مستقیم", "قید زمان", "حروف اضافه"], answerIndex: 1 },
        { q: "در جمله «Я вижу маму.» کلمه «маму» نقش:", options: ["فاعل", "مفعول", "صفت", "قید"], answerIndex: 1 },
        { q: "«Я читаю книгу.» در این جمله «книгу» یعنی:", options: ["کتاب را", "کتابِ", "با کتاب", "برای کتاب"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-02-prepositional");
    return {
      id: "a2-02-prepositional",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "حالت «Предложный» معمولاً بعد از کدام می‌آید؟", options: ["о", "без", "для", "через"], answerIndex: 0 },
        { q: "«Я думаю о работе.» یعنی:", options: ["من کار می‌کنم.", "من درباره کار فکر می‌کنم.", "من کار ندارم.", "من به کار می‌روم."], answerIndex: 1 },
        { q: "هدف این حالت بیشتر چیست؟", options: ["درباره چیزی/در برخی مکان‌ها", "مالکیت", "ابزار", "مفعول مستقیم"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-03-genitive-intro");
    return {
      id: "a2-03-genitive-intro",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "کدام جمله نمونه حالت اضافی است؟", options: ["Я читаю книгу.", "У меня нет времени.", "Я в школе.", "Он работает."], answerIndex: 1 },
        { q: "«У меня нет времени.» یعنی:", options: ["من وقت دارم.", "من وقت ندارم.", "من زمان می‌خرم.", "من دیر رسیدم."], answerIndex: 1 },
        { q: "حالت Родительный معمولاً برای کدام کاربرد دارد؟", options: ["نداشتن/مالکیت/مقدار", "فقط سوال", "فقط آینده", "فقط جمع"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-04-past-tense");
    return {
      id: "a2-04-past-tense",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "در گذشته روسی، فعل بر اساس چه چیزی تغییر می‌کند؟", options: ["فقط شخص", "جنسیت/تعداد", "فقط مکان", "فقط حرف اضافه"], answerIndex: 1 },
        { q: "«Он был дома.» یعنی:", options: ["او (مرد) خانه بود.", "او (زن) خانه بود.", "او خانه نیست.", "او فردا خانه است."], answerIndex: 0 },
        { q: "«Она была дома.» یعنی:", options: ["او (مرد) خانه بود.", "او (زن) خانه بود.", "او خانه خواهد بود.", "او خانه نیست."], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-05-future-simple");
    return {
      id: "a2-05-future-simple",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "فرمول آینده ساده معمولاً چیست؟", options: ["был + فعل", "буду + مصدر", "есть + فعل", "не + فعل"], answerIndex: 1 },

{ q: "«Я буду учиться.» یعنی:", options: ["من درس می‌خوانم.", "من درس خواندم.", "من درس خواهم خواند.", "من درس نمی‌خوانم."], answerIndex: 2 },
        { q: "«Мы будем работать.» یعنی:", options: ["ما کار کردیم.", "ما کار خواهیم کرد.", "ما کار نمی‌کنیم.", "ما کار می‌کنیم."], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-06-imperative");
    return {
      id: "a2-06-imperative",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Откройте дверь.» یعنی:", options: ["در را ببندید.", "در را باز کنید.", "در کجاست؟", "در باز است."], answerIndex: 1 },
        { q: "امر بیشتر برای چه استفاده می‌شود؟", options: ["توصیف گذشته", "درخواست/دستور", "مالکیت", "مقایسه"], answerIndex: 1 },
        { q: "«Скажи, пожалуйста.» یعنی:", options: ["لطفاً بگو.", "لطفاً برو.", "لطفاً بیا.", "لطفاً بخواب."], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-07-adjectives-agreement");
    return {
      id: "a2-07-adjectives-agreement",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "صفت در روسی با چه چیزی هماهنگ می‌شود؟", options: ["فقط زمان", "فقط مکان", "جنسیت/تعداد/حالت اسم", "فقط تلفظ"], answerIndex: 2 },
        { q: "کدام ترکیب درست است؟", options: ["большой книга", "большая книга", "большое книга", "большие книга"], answerIndex: 1 },
        { q: "«большой дом» یعنی:", options: ["خانه بزرگ (مذکر)", "کتاب بزرگ", "خانه کوچک", "پنجره بزرگ"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-08-comparative");
    return {
      id: "a2-08-comparative",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "برای گفتن «بیشتر … از …» چه ساختاری داریم؟", options: ["не …", "более … чем …", "буду …", "о …"], answerIndex: 1 },
        { q: "«Москва больше, чем Казань.» یعنی:", options: ["قازان بزرگ‌تر است", "مسکو بزرگ‌تر از قازان است", "قازان کوچک نیست", "مسکو در قازان است"], answerIndex: 1 },
        { q: "«Это более интересно.» یعنی:", options: ["این جالب‌تر است.", "این خسته‌کننده است.", "این قدیمی است.", "این تمام شد."], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-09-time-expressions");
    return {
      id: "a2-09-time-expressions",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«вчера» یعنی:", options: ["امروز", "فردا", "دیروز", "پس‌فردا"], answerIndex: 2 },
        { q: "«завтра» یعنی:", options: ["دیروز", "امروز", "فردا", "همین حالا"], answerIndex: 2 },
        { q: "«Вчера я работал.» یعنی:", options: ["دیروز کار کردم.", "فردا کار می‌کنم.", "امروز کار می‌کنم.", "کار نمی‌کنم."], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("a2-10-verb-of-motion-intro");
    return {
      id: "a2-10-verb-of-motion-intro",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«идти» معمولاً یعنی:", options: ["با وسیله رفتن", "پیاده رفتن", "نوشتن", "خوردن"], answerIndex: 1 },
        { q: "«ехать» معمولاً یعنی:", options: ["پیاده رفتن", "با وسیله رفتن", "نشستن", "خواندن"], answerIndex: 1 },
        { q: "«Я иду домой.» یعنی:", options: ["من پیاده به خانه می‌روم.", "من با موتر به خانه می‌روم.", "من خانه هستم.", "من خانه را دوست دارم."], answerIndex: 0 },
      ],
    };
  })(),

  // =========================
  // B1 (10)
  // =========================
  (() => {
    const meta = titleOf("b1-01-aspect-intro");
    return {
      id: "b1-01-aspect-intro",

kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "Aspect در روسی یعنی تفاوت بین:", options: ["زمان حال/گذشته", "کامل/ناقص", "مذکر/مونث", "مفرد/جمع"], answerIndex: 1 },
        { q: "ناقص (несов.) بیشتر برای:", options: ["نتیجه و تمام شدن", "روند/تکرار", "فقط آینده", "فقط دستور"], answerIndex: 1 },
        { q: "کامل (сов.) بیشتر برای:", options: ["روند طولانی", "یک‌بار/نتیجه", "حالت اضافی", "حروف اضافه"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b1-02-cases-dative");
    return {
      id: "b1-02-cases-dative",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "Дательный معمولاً جواب کدام سوال است؟", options: ["кого/что?", "кому?", "где?", "когда?"], answerIndex: 1 },
        { q: "«Я даю другу книгу.» یعنی:", options: ["من از دوست کتاب می‌گیرم.", "من به دوست کتاب می‌دهم.", "من کتاب می‌خوانم.", "من دوست را می‌بینم."], answerIndex: 1 },
        { q: "«Мне нравится музыка.» یعنی:", options: ["من موسیقی را دوست دارم.", "موسیقی مرا دوست دارد.", "من موسیقی ندارم.", "من موسیقی می‌نوازم."], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b1-03-instrumental");
    return {
      id: "b1-03-instrumental",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "Творительный اغلب معنی:", options: ["بدون", "با/به‌عنوان", "داخل", "از"], answerIndex: 1 },
        { q: "«Я говорю с другом.» یعنی:", options: ["من با دوست صحبت می‌کنم.", "من دوست ندارم.", "من دوست را می‌بینم.", "من به دوست کتاب می‌دهم."], answerIndex: 0 },
        { q: "«Он был студентом.» یعنی:", options: ["او دانشجو است.", "او دانشجو بود.", "او دانشجو خواهد بود.", "او دانشجو نیست."], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b1-04-reflexive-verbs");
    return {
      id: "b1-04-reflexive-verbs",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "پسوند «-ся» معمولاً نشان‌دهنده:", options: ["آینده", "بازگشتی/حالت", "جمع", "مقایسه"], answerIndex: 1 },
        { q: "«Я учусь.» یعنی:", options: ["من درس می‌خوانم.", "من درس نمی‌خوانم.", "من درس خواندم.", "من درس خواهم خواند."], answerIndex: 0 },
        { q: "«Он улыбается.» یعنی:", options: ["او گریه می‌کند.", "او لبخند می‌زند.", "او می‌خوابد.", "او می‌رود."], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b1-05-verbs-of-motion-prefixes");
    return {
      id: "b1-05-verbs-of-motion-prefixes",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "پیشوندها در افعال حرکت چه می‌کنند؟", options: ["هیچ", "معنی حرکت را دقیق‌تر می‌کنند", "فعل را منفی می‌کنند", "فعل را جمع می‌کنند"], answerIndex: 1 },
        { q: "«прийти» نزدیک‌ترین معنی:", options: ["رفتن از اینجا", "رسیدن/آمدن", "نشستن", "خوابیدن"], answerIndex: 1 },
        { q: "«уйти» نزدیک‌ترین معنی:", options: ["آمدن", "رفتن (از اینجا)", "خواندن", "نوشتن"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b1-06-conditional");
    return {
      id: "b1-06-conditional",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "برای ساخت شرطی/فرضی معمولاً از چه ذره‌ای استفاده می‌شود؟", options: ["не", "бы", "ли", "о"], answerIndex: 1 },
        { q: "«Я бы поехал, если бы мог.» یعنی:", options: ["اگر می‌توانستم می‌رفتم.", "من می‌روم.", "من رفتم.", "من نمی‌روم."], answerIndex: 0 },
        { q: "«Она бы купила это.» یعنی:", options: ["او می‌خرد.", "او می‌خرید (فرضی).", "او نخرید.", "او خرید."], answerIndex: 1 },
      ],
    };
  })(),

(() => {
    const meta = titleOf("b1-07-relative-clauses");
    return {
      id: "b1-07-relative-clauses",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«который» معمولاً نقش:", options: ["حرف اضافه", "موصولی (که...)", "منفی‌کننده", "قید زمان"], answerIndex: 1 },
        { q: "«Это книга, которая мне нравится.» یعنی:", options: ["این کتابی است که دوست دارم.", "این کتاب را دوست ندارم.", "این کتاب مال من است.", "این کتاب تازه است."], answerIndex: 0 },
        { q: "کاربرد اصلی جمله‌واره موصولی:", options: ["پرسیدن", "توصیف اسم", "زمان آینده", "منفی کردن"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b1-08-participles-intro");
    return {
      id: "b1-08-participles-intro",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "Причастие بیشتر شبیه چیست؟", options: ["اسم", "صفت (از فعل)", "قید", "حرف اضافه"], answerIndex: 1 },
        { q: "«прочитанная книга» یعنی:", options: ["کتابی که می‌خواند", "کتابِ خوانده‌شده", "کتابِ نخوانده", "کتابِ بزرگ"], answerIndex: 1 },
        { q: "«читающий студент» یعنی:", options: ["دانشجویی که می‌خواند", "دانشجویی که خوانده شد", "دانشجو نیست", "دانشجوی دیروز"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b1-09-adverbs");
    return {
      id: "b1-09-adverbs",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«очень» یعنی:", options: ["کم", "خیلی", "هرگز", "فقط"], answerIndex: 1 },
        { q: "«уже» نزدیک‌ترین معنی:", options: ["هنوز", "دیگر/از قبل", "فردا", "کجا"], answerIndex: 1 },
        { q: "«слишком» یعنی:", options: ["کافی", "زیادی/بیش از حد", "کم", "سریع"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b1-10-reported-speech-intro");
    return {
      id: "b1-10-reported-speech-intro",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Он сказал, что…» یعنی:", options: ["او پرسید که…", "او گفت که…", "او رفت که…", "او دید که…"], answerIndex: 1 },
        { q: "«Она сказала, что устала.» یعنی:", options: ["او گفت که خسته است.", "او گفت که خوشحال است.", "او گفت که می‌آید.", "او گفت که نمی‌داند."], answerIndex: 0 },
        { q: "کوسوِنایا رِچ (косвенная речь) یعنی:", options: ["سوال مستقیم", "نقل غیرمستقیم", "زمان حال", "مقایسه"], answerIndex: 1 },
      ],
    };
  })(),

  // =========================
  // B2 (10)
  // =========================
  (() => {
    const meta = titleOf("b2-01-aspect-advanced");
    return {
      id: "b2-01-aspect-advanced",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "در جمله «Я писал ему каждый день.» تاکید روی چیست؟", options: ["نتیجه", "تکرار/عادت", "آینده", "مالکیت"], answerIndex: 1 },
        { q: "در جمله «Я написал ему вчера.» تاکید روی چیست؟", options: ["نتیجه/تمام شدن", "روند طولانی", "عادت", "ابزار"], answerIndex: 0 },
        { q: "انتخاب وجه فعل در B2 بیشتر برای:", options: ["فقط زیبایی", "دقیق کردن معنی و لحن", "جمع بستن", "حروف اضافه"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b2-02-verb-government");
    return {
      id: "b2-02-verb-government",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«управление глаголов» یعنی:", options: ["سرعت فعل", "این‌که فعل کدام حالت می‌خواهد", "زمان فعل", "جمع فعل"], answerIndex: 1 },
        { q: "«помогать кому» مربوط به کدام حالت است؟", options: ["داتیو (Д.п.)", "اکوزاتیو", "پِرِدلاژنی", "ابزاری"], answerIndex: 0 },
        { q: "«ждать кого/что» معمولاً با کدام حالت می‌آید؟", options: ["Р.п. (родительный)", "Д.п.", "Т.п.", "П.п."], answerIndex: 0 },
      ],
    };
  })(),

(() => {
    const meta = titleOf("b2-03-participles-advanced");
    return {
      id: "b2-03-participles-advanced",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "Причастия در کدام سبک بیشتر دیده می‌شود؟", options: ["فقط گفتاری", "نوشتاری/رسمی", "فقط طنز", "فقط کودکانه"], answerIndex: 1 },
        { q: "«сделанная работа» یعنی:", options: ["کارِ انجام‌شده", "کارِ درحال انجام", "کارِ انجام نمی‌شود", "کارِ فردا"], answerIndex: 0 },
        { q: "«работающий человек» یعنی:", options: ["فردِ شاغل", "فردِ خوابیده", "فردِ خسته", "فردِ بی‌کار"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b2-04-gerunds");
    return {
      id: "b2-04-gerunds",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "Деепричастие معمولاً چه چیزی را نشان می‌دهد؟", options: ["عمل اضافی/همزمان", "فقط آینده", "فقط جمع", "مالکیت"], answerIndex: 0 },
        { q: "«Придя домой, он уснул.» یعنی:", options: ["قبل از آمدن خوابید", "وقتی به خانه آمد، خوابید", "فردا می‌خوابد", "خانه نیست"], answerIndex: 1 },
        { q: "«Читая, я учусь.» یعنی:", options: ["من با خواندن یاد می‌گیرم.", "من خواندم و یاد گرفتم.", "من نمی‌خوانم.", "من می‌روم."], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b2-05-complex-sentences");
    return {
      id: "b2-05-complex-sentences",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«потому что» یعنی:", options: ["اگر", "چون/به‌خاطر اینکه", "با اینکه", "وقتی که"], answerIndex: 1 },
        { q: "«хотя» یعنی:", options: ["چون", "با اینکه", "اگر", "بنابراین"], answerIndex: 1 },
        { q: "«если» یعنی:", options: ["وقتی", "اگر", "چون", "که"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b2-06-style-register");
    return {
      id: "b2-06-style-register",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Здравствуйте» بیشتر کدام سبک است؟", options: ["رسمی", "خیلی خودمانی", "طنز", "کودکانه"], answerIndex: 0 },
        { q: "«Привет» بیشتر کدام سبک است؟", options: ["خیلی رسمی", "گفتاری/خودمانی", "فقط نوشتاری", "حقوقی"], answerIndex: 1 },
        { q: "چرا دانستن Register مهم است؟", options: ["مهم نیست", "برای انتخاب واژه مناسب موقعیت", "برای جمع بستن", "برای تلفظ"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b2-07-negation-double");
    return {
      id: "b2-07-negation-double",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "منفی دوگانه در روسی:", options: ["اشتباه است", "طبیعی و رایج است", "فقط در شعر است", "فقط در آینده"], answerIndex: 1 },
        { q: "«Я никого не видел.» یعنی:", options: ["من کسی را دیدم", "من هیچ‌کس را ندیدم", "من همه را دیدم", "من نمی‌دانم"], answerIndex: 1 },
        { q: "«Она ничего не сказала.» یعنی:", options: ["او همه چیز گفت", "او چیزی نگفت", "او گفت که می‌آید", "او گفت که خسته نیست"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b2-08-modal-words");
    return {
      id: "b2-08-modal-words",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«наверное» نزدیک‌ترین معنی:", options: ["حتماً", "احتمالاً", "هرگز", "کجا"], answerIndex: 1 },
        { q: "«конечно» یعنی:", options: ["البته/حتماً", "شاید", "نه", "دیروز"], answerIndex: 0 },
        { q: "کلمات مدال چه چیزی را نشان می‌دهند؟", options: ["نظر/قطعیت/احتمال گوینده", "جمع بستن", "زمان فعل", "حروف اضافه"], answerIndex: 0 },
      ],
    };
  })(),

(() => {
    const meta = titleOf("b2-09-punctuation-intro");
    return {
      id: "b2-09-punctuation-intro",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "در جمله‌های مرکب، «کاما» معمولاً برای:", options: ["زیبایی", "جدا کردن بخش‌ها و روشن شدن معنی", "منفی کردن", "جمع کردن"], answerIndex: 1 },
        { q: "کدام جمله کاما دارد و درست است؟", options: ["Я знаю что ты прав.", "Я знаю, что ты прав.", "Я знаю что, ты прав.", "Я, знаю что ты прав."], answerIndex: 1 },
        { q: "علائم نگارشی بیشتر در کدام سطح مهم می‌شود؟", options: ["A1", "A2", "B2 و بالاتر", "فقط Alphabet"], answerIndex: 2 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("b2-10-idioms-intro");
    return {
      id: "b2-10-idioms-intro",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "ویژگی اصلی «идиомы» چیست؟", options: ["ترجمه تحت‌اللفظی همیشه درست است", "معنی مستقیم ندارند", "فقط فعل هستند", "فقط اسم هستند"], answerIndex: 1 },
        { q: "«дело в шляпе» یعنی:", options: ["کار تمام شد/حل شد", "کار شروع شد", "کلاه جدید", "کار بد شد"], answerIndex: 0 },
        { q: "«ни пуха ни пера» معمولاً برای:", options: ["بدشانسی", "آرزوی موفقیت", "تعریف غذا", "تعریف لباس"], answerIndex: 1 },
      ],
    };
  })(),

  // =========================
  // C1 (20)
  // =========================
  (() => {
    const meta = titleOf("c1-01-stylistics");
    return {
      id: "c1-01-stylistics",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "در C1 مهم‌ترین مهارت سبک‌شناسی چیست؟", options: ["فقط حفظ لغت", "انتخاب ساختار مناسب موقعیت", "فقط نوشتن اعداد", "جمع بستن ساده"], answerIndex: 1 },
        { q: "کدام جمله رسمی‌تر است؟", options: ["Привет!", "В связи с этим сообщаем…", "Ну да.", "Ладно."], answerIndex: 1 },
        { q: "«Как бы то ни было…» نزدیک‌ترین معنی:", options: ["به هر حال…", "دیروز", "اگر", "چون"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-02-complex-connectors");
    return {
      id: "c1-02-complex-connectors",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "کدام گزینه پیوند رسمی/تحلیلی است؟", options: ["и", "ввиду", "а", "но"], answerIndex: 1 },
        { q: "«Ввиду погоды…» یعنی:", options: ["به‌خاطر هوا…", "با اینکه…", "اگر…", "وقتی…"], answerIndex: 0 },
        { q: "«поскольку» نزدیک‌ترین معنی:", options: ["چون/از آنجا که", "اما", "پس", "کجا"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-03-participles-style");
    return {
      id: "c1-03-participles-style",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "در متن رسمی، «причастия/деепричастия» باعث چه می‌شوند؟", options: ["متن شل و کودکانه", "متن فشرده‌تر و رسمی‌تر", "متن کوتاه‌تر از حد", "هیچ"], answerIndex: 1 },
        { q: "«Лица, участвующие в проекте…» یعنی:", options: ["افرادی که در پروژه شرکت دارند…", "افرادی که پروژه ندارند…", "پروژه تمام شد", "افراد خوابیده"], answerIndex: 0 },
        { q: "«Подписав документ, он ушёл.» یعنی:", options: ["قبل از امضا رفت", "پس از امضا رفت", "امضا نکرد", "فردا امضا می‌کند"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-04-nuances-aspect");
    return {
      id: "c1-04-nuances-aspect",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "در روایت، وجه فعل بیشتر روی چه اثر می‌گذارد؟", options: ["رنگ صفحه", "ریتم/دینامیک متن و تاکید", "جمع اسامی", "حروف الفبا"], answerIndex: 1 },

{ q: "«Он читал и вдруг понял…» بیشتر حس:", options: ["روند + ناگهان نتیجه", "فقط نتیجه", "فقط آینده", "منفی کردن"], answerIndex: 0 },
        { q: "«Он прочитал и сразу ответил.» بیشتر حس:", options: ["روند طولانی", "نتیجه و سپس واکنش", "نامشخص", "جمع"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-05-passive-voice");
    return {
      id: "c1-05-passive-voice",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "در سبک رسمی، مجهول بیشتر برای چه استفاده می‌شود؟", options: ["شوخی", "بیان رسمی بدون تاکید روی فاعل", "جمع کردن", "پرسش"], answerIndex: 1 },
        { q: "«Решение было принято.» یعنی:", options: ["تصمیم گرفته شد.", "تصمیم نگرفتند.", "تصمیم می‌گیرند.", "تصمیم من است."], answerIndex: 0 },
        { q: "«Проверка проводится завтра.» یعنی:", options: ["بررسی فردا انجام می‌شود.", "بررسی دیروز بود.", "هیچ بررسی نیست.", "بررسی را من می‌کنم."], answerIndex: 0 },
      ],
    };
  })(),

  // --- c1-06 .. c1-20
  (() => {
    const meta = titleOf("c1-06-ellipsis");
    return {
      id: "c1-06-ellipsis",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Эллипсис» یعنی:", options: ["تکرار زیاد", "حذف بخش‌های معلوم برای ایجاز", "فقط سوال", "فقط مجهول"], answerIndex: 1 },
        { q: "«Я — домой, а ты?» یعنی:", options: ["من می‌روم خانه، تو چی؟", "من خانه‌ام، تو خانه‌ای؟", "من خانه را دوست دارم", "تو خانه نیستی"], answerIndex: 0 },
        { q: "ایجاز بیشتر در کدام موقعیت کاربرد دارد؟", options: ["فقط امتحان", "گفتار سریع/دیالوگ/سبک", "فقط الفبا", "فقط اعداد"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-07-emphasis-word-order");
    return {
      id: "c1-07-emphasis-word-order",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "جابجایی ترتیب کلمات در C1 بیشتر برای:", options: ["اشتباه گرفتن", "تاکید و تمرکز جمله", "جمع بستن", "نفی"], answerIndex: 1 },
        { q: "«Книгу я уже прочитал.» تاکید روی:", options: ["کتاب", "من", "دیروز", "هیچ"], answerIndex: 0 },
        { q: "«Именно он это сделал.» یعنی:", options: ["شاید او کرد", "دقیقاً او این کار را کرد", "او نکرد", "آنها کردند"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-08-concession");
    return {
      id: "c1-08-concession",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Несмотря на…» یعنی:", options: ["به‌خاطر…", "با وجود…", "اگر…", "چون…"], answerIndex: 1 },
        { q: "«Даже если…» یعنی:", options: ["حتی اگر…", "چون…", "در حالی که…", "از آنجا که…"], answerIndex: 0 },
        { q: "این ساختارها چه مفهومی می‌دهند؟", options: ["دلیل", "شرط/تضاد (با وجود)", "مالکیت", "ابزار"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-09-causative");
    return {
      id: "c1-09-causative",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«следовательно» یعنی:", options: ["شاید", "بنابراین", "اما", "کجا"], answerIndex: 1 },
        { q: "«Это привело к изменениям.» یعنی:", options: ["این باعث تغییرات شد.", "این تغییرات را دوست دارم.", "تغییرات نبود.", "این می‌آید."], answerIndex: 0 },
        { q: "پیوندهای علّی برای چه مهم‌اند؟", options: ["برای رنگ‌ها", "برای بیان رابطه علت/معلول", "برای الفبا", "برای جمع"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-10-official-phrases");
    return {
      id: "c1-10-official-phrases",

kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "канцелярит یعنی:", options: ["زبان کودکانه", "سبک اداری/رسمی", "شوخی", "ترانه"], answerIndex: 1 },
        { q: "«Просим предоставить…» یعنی:", options: ["لطفاً ارائه نمایید…", "می‌خواهم بخورم", "کجا هستی", "این چیست"], answerIndex: 0 },
        { q: "«Настоящим подтверждаем…» یعنی:", options: ["بدینوسیله تایید می‌کنیم…", "ما نمی‌دانیم", "فردا می‌آییم", "سلام"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-11-indirect-questions");
    return {
      id: "c1-11-indirect-questions",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«придёт ли он» معنی کلی:", options: ["آیا او می‌آید یا نه", "او نمی‌آید", "او آمد", "او می‌رود"], answerIndex: 0 },
        { q: "«Я не знаю, придёт ли он.» یعنی:", options: ["من می‌دانم می‌آید", "نمی‌دانم آیا می‌آید یا نه", "او آمد", "من نمی‌خواهم"], answerIndex: 1 },
        { q: "سوال غیرمستقیم یعنی:", options: ["سوال با ؟", "سوال داخل یک جمله خبری", "فقط با کلمه где", "فقط زمان گذشته"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-12-subjunctive-nuance");
    return {
      id: "c1-12-subjunctive-nuance",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Тебе бы отдохнуть.» بیشتر حس:", options: ["دستور خشک", "پیشنهاد/نصیحت نرم", "خبر گذشته", "سوال"], answerIndex: 1 },
        { q: "«Я бы на твоём месте…» یعنی:", options: ["من جای تو هستم", "اگر جای تو بودم…", "تو جای منی", "من نمی‌دانم"], answerIndex: 1 },
        { q: "«бы» می‌تواند چه لحن‌هایی بدهد؟", options: ["آرزو/پیشنهاد/انتقاد ملایم", "فقط آینده", "فقط منفی", "فقط جمع"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-13-paraphrase");
    return {
      id: "c1-13-paraphrase",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "پارا فریز یعنی:", options: ["تکرار عین جمله", "گفتن یک معنا با ساختار دیگر", "حذف جمله", "جمع بستن"], answerIndex: 1 },
        { q: "کدام دو جمله نزدیک به هم‌معنی‌اند؟", options: ["Это важно / Это имеет значение", "Я дома / Я не дома", "Он пришёл / Он ушёл", "да / нет"], answerIndex: 0 },
        { q: "هدف پارافریز در C1:", options: ["زیباتر و دقیق‌تر نوشتن/گفتن", "فقط کوتاه کردن", "فقط بلند کردن", "هیچ"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-14-argumentation");
    return {
      id: "c1-14-argumentation",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Во-первых… во-вторых…» برای:", options: ["شوخی", "ساختار دادن استدلال", "نفی", "سوال"], answerIndex: 1 },
        { q: "«Таким образом…» یعنی:", options: ["در نتیجه…", "به هر حال…", "دیروز…", "اگر…"], answerIndex: 0 },
        { q: "در C1 چه مهم است؟", options: ["فقط لغت", "منطق: тезис/دلیل/نتیجه", "فقط الفبا", "فقط فونت"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-15-partial-negation");
    return {
      id: "c1-15-partial-negation",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«не совсем» یعنی:", options: ["کاملاً", "نه کاملاً", "هرگز", "فقط"], answerIndex: 1 },
        { q: "«Это не совсем верно.» یعنی:", options: ["این کاملاً درست است", "این کاملاً درست نیست", "این غلط است همیشه", "این درست نیست هرگز"], answerIndex: 1 },
        { q: "«не всегда» یعنی:", options: ["همیشه", "نه همیشه", "هرگز", "اکثر وقت"], answerIndex: 1 },
      ],
    };
  })(),

(() => {
    const meta = titleOf("c1-16-introductory-words");
    return {
      id: "c1-16-introductory-words",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«К сожалению…» یعنی:", options: ["خوشبختانه", "متأسفانه", "بنابراین", "در حالی که"], answerIndex: 1 },
        { q: "«По-моему…» یعنی:", options: ["به نظر من…", "به خاطر تو…", "به جای تو…", "به داخل…"], answerIndex: 0 },
        { q: "کلمات вводные چه چیزی را نشان می‌دهند؟", options: ["نظر/احساس گوینده", "زمان گذشته", "جمع", "ابزار"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-17-quotation");
    return {
      id: "c1-17-quotation",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Как сказано в отчёте…» یعنی:", options: ["همانطور که در گزارش آمده…", "گزارش کجاست؟", "من گزارش می‌نویسم", "گزارش را دوست دارم"], answerIndex: 0 },
        { q: "در متن علمی/رسمی نقل قول برای:", options: ["تزیین", "استناد و اعتبار", "شوخی", "فقط طولانی کردن"], answerIndex: 1 },
        { q: "«Автор отмечает, что…» یعنی:", options: ["نویسنده اشاره می‌کند که…", "نویسنده نمی‌داند", "نویسنده آمد", "نویسنده رفت"], answerIndex: 0 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-18-reformulation");
    return {
      id: "c1-18-reformulation",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«то есть» یعنی:", options: ["مثلاً", "یعنی", "چون", "اما"], answerIndex: 1 },
        { q: "«иначе говоря» یعنی:", options: ["به عبارت دیگر", "در نهایت", "دیروز", "کجا"], answerIndex: 0 },
        { q: "هدف переформулировка:", options: ["مبهم کردن", "روشن‌تر کردن معنی", "منفی کردن", "جمع کردن"], answerIndex: 1 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-19-contrast-structures");
    return {
      id: "c1-19-contrast-structures",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«тогда как / в то время как» بیشتر برای:", options: ["علت", "تضاد/مقایسه دو وضعیت", "مالکیت", "ابزار"], answerIndex: 1 },
        { q: "«Он любит чай, тогда как я — кофе.» یعنی:", options: ["هر دو چای دوست دارند", "او چای دوست دارد، ولی من قهوه", "من چای دوست دارم", "هیچ"], answerIndex: 1 },
        { q: "این ساختارها در کدام سطح بیشتر می‌آیند؟", options: ["A1", "A2", "C1", "Alphabet"], answerIndex: 2 },
      ],
    };
  })(),

  (() => {
    const meta = titleOf("c1-20-text-cohesion");
    return {
      id: "c1-20-text-cohesion",
      kind: meta.kind,
      level: meta.level,
      title_fa: meta.title_fa,
      title_ru: meta.title_ru,
      questions: [
        { q: "«Кроме того…» یعنی:", options: ["به هر حال", "علاوه بر آن", "چون", "اگر"], answerIndex: 1 },
        { q: "«С одной стороны… с другой стороны…» یعنی:", options: ["از یک طرف… از طرف دیگر…", "دیروز… فردا…", "همیشه… هرگز…", "اینجا… آنجا…"], answerIndex: 0 },
        { q: "انسجام متن یعنی:", options: ["پراکندگی", "پیوند منطقی پاراگراف‌ها", "فقط املا", "فقط فونت"], answerIndex: 1 },
      ],
    };
  })(),
];