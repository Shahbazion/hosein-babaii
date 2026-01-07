"use client";

import { useEffect, useState } from "react";

export default function ServicesPage() {
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
          max-w-6xl mx-auto px-6 relative z-10
          transition-all duration-700
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--text)]">
          خدمات من
        </h1>

        <p className="text-[var(--text-muted)] max-w-2xl leading-relaxed mb-12">
          من مجموعه‌ای از خدمات تخصصی در حوزه طراحی سایت، توسعه وب‌اپلیکیشن،
          سئو، سرعت، پشتیبانی و همچنین مشاوره‌های معنوی و فلسفی ارائه می‌دهم.
          هر پروژه یا جلسه را با دقت، تجربه و نگاه انسانی مدیریت می‌کنم.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Web Design */}
          <div className="p-7 rounded-xl backdrop-blur-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" className="w-12 h-12 mb-4" />
            <h3 className="font-semibold text-xl mb-3 text-[var(--text)]">طراحی وب‌سایت</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              طراحی سایت‌های شرکتی، شخصی، فروشگاهی و برندینگ با تمرکز بر تجربه کاربری،
              سرعت و سئو. استفاده از Next.js و Tailwind برای ساختار مدرن و قابل توسعه.
            </p>
            <ul className="text-sm text-[var(--text-muted)] space-y-1">
              <li>✔ طراحی UI/UX حرفه‌ای</li>
              <li>✔ صفحات بهینه برای سئو</li>
              <li>✔ ریسپانسیو کامل</li>
            </ul>
          </div>

          {/* Web App */}
          <div className="p-7 rounded-xl backdrop-blur-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" className="w-12 h-12 mb-4" />
            <h3 className="font-semibold text-xl mb-3 text-[var(--text)]">وب‌اپلیکیشن & SPA</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              ساخت وب‌اپلیکیشن‌های سریع، امن و مقیاس‌پذیر با Next.js و APIهای استاندارد.
              مناسب استارتاپ‌ها، پنل‌های مدیریتی و سیستم‌های تعاملی.
            </p>
            <ul className="text-sm text-[var(--text-muted)] space-y-1">
              <li>✔ معماری ماژولار</li>
              <li>✔ PWA و پشتیبانی آفلاین</li>
              <li>✔ اتصال به دیتابیس و سرویس‌ها</li>
            </ul>
          </div>

          {/* SEO */}
          <div className="p-7 rounded-xl backdrop-blur-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" className="w-12 h-12 mb-4" />
            <h3 className="font-semibold text-xl mb-3 text-[var(--text)]">سئو، سرعت و نگهداری</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              بهینه‌سازی Core Web Vitals، افزایش سرعت، بهبود سئو و پشتیبانی فنی برای رشد بلندمدت سایت.
            </p>
            <ul className="text-sm text-[var(--text-muted)] space-y-1">
              <li>✔ بهینه‌سازی تصاویر و لود</li>
              <li>✔ استراتژی محتوا و سئو</li>
              <li>✔ نگهداری و آپدیت‌های منظم</li>
            </ul>
          </div>

          {/* Spiritual Guidance */}
          <div className="p-7 rounded-xl backdrop-blur-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 md:col-span-3">
            <div className="flex items-start gap-6">
              <img src="https://cdn-icons-png.flaticon.com/512/4329/4329445.png" className="w-14 h-14" />

              <div>
                <h3 className="font-semibold text-xl mb-3 text-[var(--text)]">
                  مشاوره معنوی، فلسفی و عرفانی
                </h3>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  جلسات گفت‌وگو و همراهی برای افرادی که به دنبال معنا، آرامش،
                  شناخت خود و مسیر درونی هستند. این جلسات درمان پزشکی نیستند؛
                  بلکه فضایی امن برای گفتگو و رشد شخصی فراهم می‌کنند.
                </p>

                <ul className="text-sm text-[var(--text-muted)] space-y-1">
                  <li>✔ گفت‌وگو درباره مسیر شخصی و درونی</li>
                  <li>✔ پرسش‌های فلسفی و معنایی</li>
                  <li>✔ همراهی در مسیر رشد و شناخت</li>
                  <li>✔ جلسات آنلاین و خصوصی</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="
              inline-block px-8 py-3 rounded-lg
              bg-[var(--brand)] text-white text-sm font-medium
              hover:bg-[var(--brand-hover)] transition
            "
          >
            درخواست خدمات / مشاوره
          </a>
        </div>
      </div>
    </section>
  );
}
