"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      // جلوگیری از نمایش خودکار پنجره نصب
      e.preventDefault();

      // ذخیره event برای وقتی که کاربر روی دکمه "نصب" کلیک می‌کند
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const onInstall = async () => {
    if (!deferredPrompt) return;

    // نمایش پنجره نصب
    await deferredPrompt.prompt();

    // فقط منتظر می‌مانیم تا کاربر انتخاب کند
    await deferredPrompt.userChoice;

    // بعد از یک بار استفاده، event را پاک می‌کنیم
    setDeferredPrompt(null);
  };

  // اگر نصب در دسترس نبود، دکمه را نشان نده
  if (!deferredPrompt) return null;

  return (
    <button
      onClick={onInstall}
      style={{
        padding: "8px 12px",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.25)",
        background: "rgba(255,255,255,0.08)",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 700,
      }}
      aria-label="Install App"
      title="نصب برنامه"
    >
      📲 نصب برنامه
    </button>
  );
}