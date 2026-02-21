"use client"
import Link from "next/link";

function Card({
  href,
  title,
  fa,
  ru,
  cta,
}: {
  href: string;
  title: string;
  fa: string;
  ru: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.06)",
          borderRadius: 20,
          padding: 26,
          minHeight: 210,
          boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
          transition: "transform 160ms ease, border-color 160ms ease, background 160ms ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(-4px)";
          el.style.borderColor = "rgba(255,255,255,0.22)";
          el.style.background = "rgba(255,255,255,0.08)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(0px)";
          el.style.borderColor = "rgba(255,255,255,0.12)";
          el.style.background = "rgba(255,255,255,0.06)";
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: "white" }}>
            {title}
          </div>

          <div
            style={{
              direction: "rtl",
              fontSize: 14,
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {fa}
          </div>

          <div
            style={{
              fontSize: 14,
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {ru}
          </div>

          <div
            style={{
              marginTop: 12,
              fontWeight: 800,
              color: "#57f287",
            }}
          >
            {cta} →
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 90px)",
        background:
          "radial-gradient(1200px 600px at 50% 20%, rgba(70,120,255,0.14), transparent 60%), #0b0f19",
        padding: "64px 18px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              color: "white",
              fontSize: 54,
              fontWeight: 950,
              letterSpacing: "-1px",
              lineHeight: 1.05,
            }}
          >
            N-Russian-Lab 
          </div>

          <div
            style={{
              marginTop: 14,
              maxWidth: 820,
              marginInline: "auto",
              color: "rgba(255,255,255,0.72)",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            یک پلتفرم ساده و کاربردی برای فارسی‌زبان‌ها جهت یادگیری زبان روسی —
            لغت، گرامر و تمرین. <br />
            Простая платформа для изучения русского: слова, грамматика и практика.
          </div>
        </div>

        {/* Cards */}
        <section
          style={{
            display: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 22,
          }}
        >
           
                         <Card
            href="/words"
            title="📚 لغت / Словарь"
            fa="لغات و عبارات پرکاربرد روسی را دسته‌بندی‌شده یاد بگیر."
            ru="Изучай популярные слова и выражения по темам."
            cta="رفتن به لغت"
          />
          
            <Card
            href="/grammar"
            title="🧠 گرامر / Грамматика"
            fa="قواعد مهم را مرحله‌به‌مرحله، کوتاه و قابل فهم یاد بگیر."
            ru="Изучай ключевые правила грамматики пошагово."
            cta="رفتن به گرامر"
        
                    />

           <Card
            href="/quiz"
            title="✅ کوییز / Викторина"
            fa="دانش خودت را امتحان کن و پیشرفتت را ببین."
            ru="Проверь знания и следи за прогрессом."
            cta="رفتن به کوییز"
          />
      
        
          

    
        </section>

        {/* Responsive note (no CSS file needed) */}
        <div style={{ height: 22 }} />
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 12,
            textAlign: "center",
          }}
        >
        </div>
      </div>

      {/* Small responsive CSS */}
     <section
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 22,
  }}
>
  {/* کارت‌ها اینجا */}
</section>
    </main>
  );
}