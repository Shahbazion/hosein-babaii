"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/portfolio", label: "نمونه‌کارها" },
  { href: "/services", label: "خدمات" },
  { href: "/blog", label: "بلاگ" },
  { href: "/about", label: "درباره من" },
  { href: "/contact", label: "تماس" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Dark Mode State
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  if (!mounted) return null;

  const toggleDark = () => {
    const newMode = !dark;
    setDark(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-[var(--text)]">حسین بابایی</span>
            <span className="text-[11px] text-[var(--text-muted)]">طراح سایت و وب‌اپلیکیشن</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-[var(--text)] font-semibold"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Dark Mode */}
        <div className="hidden md:flex items-center gap-4">

          {/* WhatsApp */}
          <Link
            href="https://wa.me/989199570188"
            target="_blank"
            className="flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-green-500 transition"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
            واتساپ
          </Link>

          {/* Telegram */}
          <Link
            href="https://t.me/persianam"
            target="_blank"
            className="flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-blue-500 transition"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-5 h-5" />
            تلگرام
          </Link>

          {/* Contact CTA */}
          <Link
            href="/contact"
            className="px-4 py-2 bg-[var(--brand)] text-white rounded-md text-[14px] hover:bg-[var(--brand-hover)] transition"
          >
            رزرو پروژه
          </Link>

          {/* 🌗 Animated Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="
              w-10 h-10 flex items-center justify-center rounded-full
              bg-[var(--bg-elevated)] border border-[var(--border)]
              hover:scale-105 transition-all duration-300
              relative overflow-hidden
            "
          >
            <div
              className={`
                absolute inset-0 flex items-center justify-center
                transition-all duration-500
                ${dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}
              `}
            >
              {/* ☀️ Sun */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            </div>

            <div
              className={`
                absolute inset-0 flex items-center justify-center
                transition-all duration-500
                ${dark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}
              `}
            >
              {/* 🌙 Moon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 dark:text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--text)] hover:bg-[var(--bg-elevated)] transition"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-[var(--text)]" />
            <span className="block h-0.5 w-5 bg-[var(--text)]" />
            <span className="block h-0.5 w-5 bg-[var(--text)]" />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-elevated)] transition">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 ${
                  isActive(item.href)
                    ? "text-[var(--text)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-[var(--border)] pt-3 flex flex-col gap-4">

              {/* WhatsApp Mobile */}
              <Link
                href="https://wa.me/989199570188"
                target="_blank"
                className="flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-green-500"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
                واتساپ: 0919 957 0188
              </Link>

              {/* Telegram Mobile */}
              <Link
                href="https://t.me/persianam"
                target="_blank"
                className="flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-blue-500"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-5 h-5" />
                تلگرام
              </Link>

              {/* Contact CTA */}
              <Link
                href="/contact"
                className="px-4 py-2 bg-[var(--brand)] text-white rounded-md text-center text-[14px] hover:bg-[var(--brand-hover)] transition"
              >
                رزرو پروژه
              </Link>

              {/* Dark Mode Toggle Mobile */}
              <button
                onClick={toggleDark}
                className="mt-2 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] hover:scale-105 transition relative overflow-hidden"
              >
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-500
                    ${dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}
                  `}
                >
                  {/* Sun */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                    />
                  </svg>
                </div>

                <div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-500
                    ${dark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}
                  `}
                >
                  {/* Moon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700 dark:text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                </div>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
