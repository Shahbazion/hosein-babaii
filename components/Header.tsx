"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

// این فقط وقتی Auth اضافه شود فعال می‌شود
let useSession: any = null;
let signIn: any = null;
let signOut: any = null;

try {
  // اگر next-auth نصب باشد، این‌ها لود می‌شوند
  const auth = require("next-auth/react");
  useSession = auth.useSession;
  signIn = auth.signIn;
  signOut = auth.signOut;
} catch (e) {
  // اگر Auth نصب نباشد، مشکلی نیست
}

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
  const [mounted, setMounted] = useState(false);

  // اگر Auth نصب باشد، session واقعی می‌آید
  const session = useSession ? useSession() : { data: null };

  const user = session?.data?.user || null;
  const role = session?.data?.user?.role || "user";

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
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

          {/* Admin Panel */}
          {user && role === "admin" && (
            <Link
              href="/admin"
              className="text-[var(--brand)] font-semibold hover:opacity-80 transition"
            >
              مدیریت
            </Link>
          )}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {/* Socials */}
          <Link
            href="https://wa.me/989199570188"
            target="_blank"
            className="flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-green-500 transition"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
            واتساپ
          </Link>

          <Link
            href="https://t.me/persianam"
            target="_blank"
            className="flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-blue-500 transition"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-5 h-5" />
            تلگرام
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            className="px-4 py-2 bg-[var(--brand)] text-white rounded-md text-[14px] hover:bg-[var(--brand-hover)] transition"
          >
            رزرو پروژه
          </Link>

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* User Menu */}
          {user ? (
            <div className="flex items-center gap-3">

              <Link
                href="/dashboard"
                className="text-[var(--text)] hover:text-[var(--brand)] transition"
              >
                داشبورد
              </Link>

              <button
                onClick={() => signOut && signOut()}
                className="text-[var(--text-muted)] hover:text-red-500 transition"
              >
                خروج
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn && signIn()}
              className="text-[var(--text-muted)] hover:text-[var(--text)] transition"
            >
              ورود
            </button>
          )}
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

            {/* Admin Panel */}
            {user && role === "admin" && (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="py-2 text-[var(--brand)] font-semibold"
              >
                مدیریت
              </Link>
            )}

            {/* Socials */}
            <div className="mt-3 border-t border-[var(--border)] pt-3 flex flex-col gap-4">
              <Link
                href="https://wa.me/989199570188"
                target="_blank"
                className="flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-green-500"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-5 h-5" />
                واتساپ: 0919 957 0188
              </Link>

              <Link
                href="https://t.me/persianam"
                target="_blank"
                className="flex items-center gap-2 text-[14px] text-[var(--text-muted)] hover:text-blue-500"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-5 h-5" />
                تلگرام
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 bg-[var(--brand)] text-white rounded-md text-center text-[14px] hover:bg-[var(--brand-hover)] transition"
              >
                رزرو پروژه
              </Link>

              {/* Theme Switcher */}
              <ThemeSwitcher />

              {/* User Menu */}
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-[var(--text)] hover:text-[var(--brand)] transition"
                  >
                    داشبورد
                  </Link>

                  <button
                    onClick={() => signOut && signOut()}
                    className="text-[var(--text-muted)] hover:text-red-500 transition"
                  >
                    خروج
                  </button>
                </>
              ) : (
                <button
                  onClick={() => signIn && signIn()}
                  className="text-[var(--text-muted)] hover:text-[var(--text)] transition"
                >
                  ورود
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
