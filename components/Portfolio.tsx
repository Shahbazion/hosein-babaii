'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "وب‌اپ فروشگاهی",
    description: "یک فروشگاه آنلاین با Next.js و Tailwind CSS، با پنل مدیریت حرفه‌ای.",
    image: "/images/hero.webp",
    link: "#"
  },
  {
    title: "سایت شرکتی",
    description: "طراحی سایت شرکتی با ظاهر مدرن و ریسپانسیو کامل.",
    image: "/images/avatar.webp",
    link: "#"
  },
  {
    title: "پروژه شخصی",
    description: "وب‌اپ شخصی با تمرکز بر تجربه کاربری و سرعت بالا.",
    image: "/images/og-image.webp",
    link: "#"
  }
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="relative py-24 overflow-hidden bg-[var(--bg)] transition"
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2
          id="portfolio-heading"
          className={`
            text-3xl md:text-4xl font-extrabold text-center mb-14
            text-[var(--text)]
            transition-all duration-700
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          نمونه‌کارها
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`
                group relative rounded-2xl overflow-hidden
                backdrop-blur-xl bg-[var(--bg-elevated)]/60
                border border-[var(--border)]
                shadow-xl transition-all duration-500
                hover:scale-[1.03] hover:shadow-2xl
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* تصویر */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* متن */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-[var(--text)]">
                  {project.title}
                </h3>

                <p className="mt-2 text-[var(--text-muted)] text-sm leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="
                    mt-4 inline-block text-[var(--brand)]
                    hover:text-[var(--brand-hover)]
                    text-sm font-medium transition
                  "
                >
                  مشاهده پروژه →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
