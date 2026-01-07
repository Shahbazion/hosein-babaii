"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[var(--bg)] transition"
    >
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
          max-w-6xl mx-auto px-6 py-24
          grid md:grid-cols-2 gap-14 items-center
          transition-all duration-700
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Glass Card */}
        <div
          className="
            backdrop-blur-xl bg-[var(--bg-elevated)]/60
            border border-[var(--border)]
            rounded-2xl p-8 shadow-xl
          "
        >
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl font-extrabold leading-tight text-[var(--text)]"
          >
            حسین بابایی
            <span className="block text-base md:text-lg font-normal mt-3 text-[var(--text-muted)]">
              طراح وب و وب‌اپلیکیشن — همراه با نگاه معنوی، فلسفی و انسانی
            </span>
          </h1>

          <p className="mt-6 text-[var(--text-muted)] max-w-xl leading-relaxed text-[15px]">
            من برای کسب‌وکارها و افراد، سایت‌ها و وب‌اپلیکیشن‌هایی می‌سازم که
            هم سریع‌اند، هم زیبا و هم مشتری‌پسند.  
            اگر می‌خواهی حضور آنلاین حرفه‌ای داشته باشی یا محصولت را آنلاین بفروشی،
            با هم پروژه‌ات را به نتیجه می‌رسانیم.
          </p>

          <p className="mt-4 text-[var(--text-muted)] max-w-xl leading-relaxed text-[15px]">
            در کنار کار فنی، سال‌هاست که به مسیر درونی، معنا، فلسفه و عرفان علاقه‌مندم.
            باور دارم طراحی خوب فقط ظاهر نیست؛ بلکه باید با عمق انسان، تجربه و نگاه او هماهنگ باشد.
            این ترکیب «فناوری + معنا» امضای کاری من است.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="
                inline-block px-7 py-3 rounded-lg
                bg-[var(--brand)] text-white text-sm font-medium
                hover:bg-[var(--brand-hover)] transition
              "
            >
              شروع همکاری
            </Link>

            <Link
              href="/portfolio"
              className="
                inline-block px-7 py-3 rounded-lg
                border border-[var(--border)]
                text-sm font-medium text-[var(--text)]
                hover:border-[var(--text)] transition
              "
            >
              مشاهده نمونه‌کارها
            </Link>
          </div>

          {/* Contact Links */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-[var(--text-muted)]">
            <a
              href="tel:+989199570188"
              className="flex items-center gap-2 hover:text-[var(--text)] transition"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" className="w-5 h-5" />
              <span dir="ltr" className="font-medium">+98 919 957 0188</span>
            </a>

            <a
              href="https://wa.me/989199570188"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[var(--text)] transition"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/pershian_am"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[var(--text)] transition"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`
            flex justify-center md:justify-end
            transition-all duration-700 delay-150
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src="/images/hero.webp"
              alt="Hero — حسین بابایی — طراحی وب"
              width={1200}
              height={800}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border)] bg-[var(--bg-elevated)] mt-10 transition">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <div>فریلنسر در حوزه طراحی سایت، وب‌اپ و همراهی در مسیر رشد و حضور آنلاین.</div>

          <div className="flex gap-6">
            <a
              href="https://t.me/persianam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[var(--text)] transition"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-5 h-5" />
              Telegram
            </a>

            <a
              href="https://instagram.com/pershian_am"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[var(--text)] transition"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
