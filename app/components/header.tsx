import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#0b0f19",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 16px 12px",
        }}
      >
        {/* Title centered */}
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 22,
            fontWeight: 900,
            marginBottom: 12,
          }}
        >
          اپ آموزشی زبان روسی (برای فارسی‌زبان‌ها)
        </div>

        {/* Main menu - horizontal */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <HeaderLink href="/words" label="📚 لغت" />
          <HeaderLink href="/grammar" label="🧠 گرامر" />
          <HeaderLink href="/quiz" label="✅ کویز" />
        </nav>

        {/* Contact - separate, bottom-left */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 10,
          }}
        >
          <HeaderLink href="/about" label="🙋‍♂️About Me" />
        </div>
      </div>
    </header>
  );
}

function HeaderLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        padding: "10px 14px",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.06)",
        color: "white",
        fontWeight: 800,
        fontSize: 14,
        textDecoration: "none",
        outline: "none", // ✅ جلوگیری از outline زرد
      }}
    >
      {label}
    </Link>
  );
}