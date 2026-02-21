import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-4 py-16 text-white flex items-center">
      <section className="mx-auto w-full max-w-6xl rounded-3xl border border-black bg-[#0f1b2d] p-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-wide">
Najibullah Mozafari          </h1>
          <p className="mt-4 text-lg text-white/80">
Software Developer | AI Enthusiast          </p>
        </div>

        <div className="my-10 h-px w-full bg-black" />

        {/* Content Card */}
        <div
          className="rounded-2xl border border-black bg-white p-10 text-black space-y-10 text-right"
          dir="rtl"
        >

          {/* درباره من */}
          <div>
            <h2 className="text-2xl font-bold">درباره من</h2>
            <p className="mt-4 leading-8 text-black/80">
              من علاقه‌مند به برنامه‌نویسی و هوش مصنوعی هستم و اشتیاق زیادی
              به ساخت پروژه‌های کاربردی دارم. هدف من این است که با استفاده از
              تکنولوژی، ابزارهایی بسازم که واقعاً به دیگران کمک کند و یادگیری
              را ساده‌تر و مؤثرتر نماید
            </p>
          </div>

          {/* مسیر من */}
          <div>
            <h2 className="text-2xl font-bold">مسیر من</h2>
            <p className="mt-4 leading-8 text-black/80">
              این اولین پروژه و اولین اپلیکیشنی است که ساخته‌ام
              این پروژه برای من فقط یک اپ نیست، بلکه شروع مسیر جدی من
              در دنیای توسعه نرم‌افزار و ساخت محصولات واقعی است
            </p>
          </div>

          {/* درباره پروژه */}
          <div>
            <h2 className="text-2xl font-bold">درباره پروژه</h2>
            <p className="mt-4 leading-8 text-black/80">
              این اپ برای یادگیری زبان روسی طراحی شده و شامل
              بخش‌های لغت، گرامر، تمرین و کوییز می‌باشد
              هدف آن ایجاد یک مسیر یادگیری منظم و مرحله‌به‌مرحله است
              تا کاربران بتوانند بدون سردرگمی پیشرفت کنند
            </p>
          </div>

          {/* هدف من */}
          <div>
            <h2 className="text-2xl font-bold">هدف من</h2>
            <p className="mt-4 leading-8 text-black/80">
              هدف من توسعه این اپ و اضافه کردن قابلیت‌های هوشمند
              مانند داشبورد پیشرفت کاربران و استفاده از هوش مصنوعی
              برای بهبود تجربه یادگیری است
            </p>
          </div>

          {/* ارتباط با من */}
          <div>
            <h2 className="text-2xl font-bold">ارتباط با من</h2>
            <p className="mt-4 leading-8 text-black/80">
              اگر پیشنهاد یا نظری درباره این اپ دارید،
              خوشحال می‌شوم از طریق ایمیل یا تلگرام با من در تماس باشید
            </p>

            <div className="mt-6 space-y-3 text-sm">

              <p>
                📧 ایمیل:
                <a
                  href="mailto:your@email.com"
                  className="mr-2 font-semibold underline hover:text-blue-600"
                >
                  nmozafari2007@gmail.com
                </a>
              </p>

              <p>
                📩 تلگرام:
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  className="mr-2 font-semibold underline hover:text-blue-600"
                >
                  @NajibullahM313
                </a>
              </p>

            </div>
          </div>

        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block rounded-xl border border-black bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white transition"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>

        <p className="mt-10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} — Najibullah Mozafari
        </p>

      </section>
    </main>
  );
}