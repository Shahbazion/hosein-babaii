import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--footer-bg)] text-[var(--text-muted)] transition">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 pt-14 pb-10">

        {/* لوگو + توضیح */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Logo" width={42} height={42} />
            <span className="font-bold text-xl tracking-tight text-[var(--text)]">
              حسین بابایی
            </span>
          </div>

          <p className="text-[var(--text-muted)] text-sm leading-relaxed">
            طراح سایت و توسعه‌دهنده وب‌اپلیکیشن — با تمرکز بر تجربه کاربری،
            برندینگ شخصی و ساخت محصولات دیجیتال باکیفیت.
          </p>
        </div>

        {/* لینک‌های مهم */}
        <div>
          <h3 className="text-[var(--text)] font-semibold mb-4 text-sm tracking-wide">
            صفحات مهم
          </h3>

          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/" className="hover:text-[var(--text)] transition">خانه</Link>
            <Link href="/portfolio" className="hover:text-[var(--text)] transition">نمونه‌کارها</Link>
            <Link href="/services" className="hover:text-[var(--text)] transition">خدمات</Link>
            <Link href="/blog" className="hover:text-[var(--text)] transition">بلاگ</Link>
            <Link href="/about" className="hover:text-[var(--text)] transition">درباره من</Link>
            <Link href="/contact" className="hover:text-[var(--text)] transition">تماس</Link>
          </nav>
        </div>

        {/* شبکه‌های اجتماعی + تماس */}
        <div>
          <h3 className="text-[var(--text)] font-semibold mb-4 text-sm tracking-wide">
            ارتباط با من
          </h3>

          <div className="flex flex-col gap-4 text-sm">

            {/* تلفن */}
            <a
              href="tel:+989199570188"
              className="flex items-center gap-3 hover:text-[var(--text)] transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Phone"
                className="w-5 h-5"
              />
              <span dir="ltr" className="font-medium">
                +98 919 957 0188
              </span>
            </a>

            {/* واتساپ */}
            <a
              href="https://wa.me/989199570188"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[var(--text)] transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              WhatsApp
            </a>

            {/* تلگرام */}
            <a
              href="https://t.me/persianam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[var(--text)] transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                alt="Telegram"
                className="w-5 h-5"
              />
              Telegram
            </a>

            {/* اینستاگرام */}
            <a
              href="https://instagram.com/pershian_am"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[var(--text)] transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-5 h-5"
              />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <p className="text-center text-[var(--text-muted)] mt-10 text-xs">
        © {new Date().getFullYear()} Hosein Babaii — All rights reserved.
      </p>
    </footer>
  );
}
