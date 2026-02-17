import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            اپ آموزش روسی (فارسی ↔ روسی)
          </h1>
          <p className="mt-3 text-slate-300">
            لغات، گرامر و کویز — ساده، سریع و کاربردی
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <Card
            title="لغات (Dictionary)"
            desc="جستجو فارسی↔روسی، سطح‌بندی A1 تا C1"
            href="/words"
          />
          <Card
            title="گرامر (Grammar)"
            desc="قواعد اصلی + مثال فارسی و روسی"
            href="/grammar"
          />
          <Card
            title="کوییز (Quiz)"
            desc="تمرین لغت و گرامر با امتیاز"
            href="/quiz"
          />
        </section>

        <footer className="mt-12 text-sm text-slate-400">
        
        </footer>
      </div>
    </main>
  );
}

function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-sm transition hover:border-slate-600 hover:bg-slate-900/60"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-slate-400 transition group-hover:translate-x-1">
          →
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
    </Link>
  );
}