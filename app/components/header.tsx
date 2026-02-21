"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#0b0f19",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 28px", // ✅ فاصله از کناره‌ها
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ===== LEFT : BRAND ===== */}
        <Link
          href="/"
          style={{
            color: "#ffffff", // ✅ سفید
            fontWeight: 800,
            fontSize: "18px",
            textDecoration: "none",
            letterSpacing: "0.5px",
          }}
        >
         🇷🇺  N-Russian-Lab 
        </Link>

        {/* ===== RIGHT : MENU ===== */}
        <nav style={{ display: "flex", alignItems: "center" }}>
          <Link
            href="/about"
            style={{
              color: "#fff",
              textDecoration: "none",
              margin: "0 16px",
              padding: "6px 10px",
              transition: "0.2s",
            }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}