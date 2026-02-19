import Link from "next/link";
import InstallButton from "./components/InstallButton";
export default function HomePage() {
  return (
    <div
      style={{
        paddingTop: 10,
        paddingInline: 16,
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          margin: "10px 0 22px",
          fontSize: 34,
          fontWeight: 900,
          color: "#ffffff",
        }}
      >
        آموزش زبان روسی برای فارسی زبان ها
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}
      >
        <InstallButton />
      </div>
      {/* Cards container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 16,
          alignItems: "stretch",
        }}
      >
        <Card
          title="لغات (Words)"
          desc="لغات، کلمات و کدهای مهم + معنی و کاربردی"
          href="words"
        />
        <Card
          title="گرامر (Grammar)"
          desc="ساختارها، قواعد، مثال و تمرین برای مبتدی تا C1"
          href="/grammar"
        />
        <Card
          title="کوییز (Quiz)"
          desc="تمرینِ سریع و امتیازگیری + سوال بعدی خودکار"
          href="/quiz"
        />
      </div>
    </div>
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
      style={{
        textDecoration: "none",
        outline: "none",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 16,
          padding: 18,
          background: "rgba(255,255,255,0.04)",
          minHeight: 140,
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 10,
            borderBottom: "1px solid rgba(255,255,255,0.18)",
            paddingBottom: 10,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          {desc}
        </div>
      </div>
    </Link>
  );
}
