import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "اپ آموزش روسی (برای فارسی زبان ها)",
  description: "آموزش روسی برای فارسی زبان ها: لغات، گرامر، کویز",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
      
        style={{
        
          margin: 0,
          minHeight: "100vh",
          background: "#0b0f19",
          color: "#e8eefc",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
      
        }}
      >
        <Header />

        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
          {children}
        </main>

        {/* contact پایینِ چپ */}
        <footer
          style={{
            position: "fixed",
            left: 16,
            bottom: 12,
            opacity: 0.8,
            fontSize: 12,
          }}
        >
        
        </footer>
      </body>
    </html>
  );
}