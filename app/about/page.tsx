"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
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
        {/* Main Section */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div
              className="
                w-56 h-56 rounded-2xl overflow-hidden
                shadow-xl ring-1 ring-black/5 dark:ring-white/10
                backdrop-blur-xl bg-[var(--bg-elevated)]/60
                border border-[var(--border)]
              "
            >
              <Image
                src="/images/avatar.webp"
                alt="حسین بابایی"
                width={560}
                height={560}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--text)]">
              حسین بابایی
            </h1>

            <p className="text-[var(--text-muted)] leading-relaxed mb-4 text-[15px]">
              من طراح وب و توسعه‌دهنده وب‌اپلیکیشن هستم؛ با تمرکز بر تجربه کاربری،
              سرعت، سئو و ساختارهای مدرن. پروژه‌ها را از مرحله ایده تا طراحی، توسعه،
              تحویل و پشتیبانی همراهی می‌کنم.
            </p>

            <p className="text-[var(--text-muted)] leading-relaxed mb-4 text-[15px]">
              در کنار کار فنی، سال‌هاست که به موضوعات معنوی، فلسفی و مسیر رشد درونی
              علاقه‌مندم و دربارهٔ آن‌ها می‌نویسم. ترکیب «طراحی زیبا» و «محتوای
              معنی‌دار» را امضای کاری خودم می‌دانم.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/contact"
                className="
                  inline-block px-6 py-3 rounded-lg
                  bg-[var(--brand)] text-white text-sm font-medium
                  hover:bg-[var(--brand-hover)] transition
                "
              >
                تماس بگیر
              </Link>

              <Link
                href="/portfolio"
                className="
                  inline-block px-6 py-3 rounded-lg
                  border border-[var(--border)]
                  text-sm font-medium text-[var(--text)]
                  hover:border-[var(--text)] transition
                "
              >
                نمونه‌کارها
              </Link>

              <a
                href="/images/avatar.webp"
                download
                className="
                  inline-block px-6 py-3 rounded-lg
                  bg-[var(--bg-elevated)] text-[var(--text)]
                  border border-[var(--border)]
                  text-sm font-medium hover:bg-[var(--bg)] transition
                "
              >
                دانلود عکس (Avatar)
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-sm text-[var(--text-muted)] space-y-3">
              <div className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" className="w-5 h-5" />
                <a href="tel:+989199570188" className="underline font-medium" dir="ltr">
                  +98 919 957 0188
                </a>
              </div>

              <div className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
                <a href="https://wa.me/989199570188" target="_blank" rel="noreferrer" className="underline font-medium">
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5" />
                <a href="https://instagram.com/pershian_am" target="_blank" rel="noreferrer" className="underline font-medium">
                  pershian_am
                </a>
              </div>

              <div className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-5 h-5" />
                <a href="https://t.me/persianam" target="_blank" rel="noreferrer" className="underline font-medium">
                  @persianam
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[var(--text)]">
            مهارت‌ها و تجربه
          </h2>

          <ul className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              "Next.js / React",
              "TypeScript / JavaScript",
              "Tailwind CSS / UI Design",
              "SEO & Performance",
              "Backend basics (Node.js, APIs)",
              "مشاوره محتوا و برند شخصی",
            ].map((skill, idx) => (
              <li
                key={idx}
                className="
                  p-4 rounded-lg
                  backdrop-blur-xl bg-[var(--bg-elevated)]/60
                  border border-[var(--border)]
                  text-[var(--text)]
                  shadow-sm hover:shadow-md transition
                "
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
