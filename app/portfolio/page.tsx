"use client";

import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "وب‌سایت فروشگاهی",
      description:
        "یک فروشگاه آنلاین با Next.js و Tailwind، طراحی مدرن، سرعت بالا و تجربه کاربری عالی در موبایل.",
      image: "/images/hero.webp",
      icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
    },
    {
      title: "سایت شرکتی",
      description:
        "سایت شرکتی مدرن با صفحات خدمات، نمونه‌کارها و بلاگ. طراحی واکنش‌گرا و ساختار سئو محور.",
      image: "/images/avatar.webp",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "وب‌اپلیکیشن SPA",
      description:
        "یک اپلیکیشن تک‌صفحه‌ای با رندر سریع، مدیریت state پیشرفته و معماری ماژولار.",
      image: "/images/og-image.webp",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    },
  ];

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

        {/* عنوان صفحه */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--text)]">
          نمونه‌کارها
        </h1>

        <p className="text-[var(--text-muted)] mb-12 max-w-2xl leading-relaxed">
          بخشی از پروژه‌هایی که طراحی و توسعه داده‌ام.  
          هر پروژه با توجه به نیاز مشتری، تجربه کاربری، سرعت و سئو ساخته شده است.
        </p>

        {/* کارت‌های پروژه */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                rounded-2xl overflow-hidden
                backdrop-blur-xl bg-[var(--bg-elevated)]/60
                border border-[var(--border)]
                shadow-xl hover:shadow-2xl hover:scale-[1.03]
                transition-all duration-500
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={project.icon}
                    alt="icon"
                    className="w-7 h-7"
                  />
                  <h3 className="text-xl font-semibold text-[var(--text)]">
                    {project.title}
                  </h3>
                </div>

                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <a
                  href="/contact"
                  className="
                    inline-block text-sm font-medium
                    text-[var(--brand)] hover:text-[var(--brand-hover)]
                    transition
                  "
                >
                  درخواست پروژه مشابه →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA نهایی */}
        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="
              inline-block px-8 py-3 rounded-lg
              bg-[var(--brand)] text-white text-sm font-medium
              hover:bg-[var(--brand-hover)] transition
            "
          >
            ثبت سفارش پروژه جدید
          </a>
        </div>
      </div>
    </section>
  );
}
