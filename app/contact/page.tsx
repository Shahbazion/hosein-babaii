"use client";

import ContactForm from "../../components/ContactForm";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-[var(--bg)] transition">

      {/* Luxury Gradient Background */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-gradient-to-br
          from-[rgba(99,102,241,0.15)]
          via-[rgba(37,99,235,0.12)]
          to-[rgba(14,165,233,0.10)]
          dark:from-[rgba(99,102,241,0.25)]
          dark:via-[rgba(37,99,235,0.20)]
          dark:to-[rgba(14,165,233,0.15)]
          blur-3xl opacity-70
        "
      />

      <div
        className={`
          max-w-5xl mx-auto px-6 relative z-10
          transition-all duration-700
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >

        {/* عنوان صفحه */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--text)]">
          تماس با من
        </h1>

        <p className="text-[var(--text-muted)] mb-10 max-w-2xl leading-relaxed">
          برای همکاری، مشاوره یا پرسش‌های تخصصی می‌توانید فرم زیر را پر کنید
          یا از طریق راه‌های ارتباطی دیگر با من در تماس باشید.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* فرم تماس */}
          <div>
            <ContactForm />
          </div>

          {/* کارت تماس */}
          <aside
            className="
              p-8 rounded-xl
              backdrop-blur-xl bg-[var(--bg-elevated)]/60
              border border-[var(--border)]
              shadow-xl transition
            "
          >
            <h3 className="font-semibold text-lg mb-4 text-[var(--text)]">
              راه‌های ارتباطی مستقیم
            </h3>

            <ul className="text-[var(--text-muted)] space-y-4 text-sm">

              {/* تماس تلفنی */}
              <li className="flex items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                  alt="Phone"
                  className="w-6 h-6"
                />
                <a
                  href="tel:+989199570188"
                  className="font-medium hover:text-[var(--text)] transition inline-block text-left"
                  dir="ltr"
                >
                  +98 919 957 0188
                </a>
              </li>

              {/* واتساپ */}
              <li className="flex items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                <a
                  href="https://wa.me/989199570188"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-[var(--text)] transition"
                >
                  WhatsApp
                </a>
              </li>

              {/* تلگرام */}
              <li className="flex items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                  alt="Telegram"
                  className="w-6 h-6"
                />
                <a
                  href="https://t.me/persianam"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-[var(--text)] transition"
                >
                  @persianam
                </a>
              </li>

              {/* اینستاگرام */}
              <li className="flex items-center gap-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
                <a
                  href="https://instagram.com/pershian_am"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-[var(--text)] transition"
                >
                  pershian_am
                </a>
              </li>
            </ul>

            {/* آدرس */}
            <div className="mt-8 text-sm text-[var(--text-muted)] leading-relaxed">
              <span className="font-semibold text-[var(--text)]">آدرس:</span>
              <br />
              تهران — (در صورت نیاز آدرس دقیق اضافه خواهد شد)
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
