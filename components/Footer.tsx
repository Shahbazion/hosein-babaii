import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      href: "tel:+989199570188",
      label: "+98 919 957 0188",
      icon: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
      external: false,
      dir: "ltr",
    },
    {
      href: "https://wa.me/989199570188",
      label: "WhatsApp",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      external: true,
    },
    {
      href: "https://t.me/persianam",
      label: "Telegram",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
      external: true,
    },
    {
      href: "https://instagram.com/pershian_am",
      label: "Instagram",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      external: true,
    },
  ];

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/portfolio", label: "نمونه‌کارها" },
    { href: "/services", label: "خدمات" },
    { href: "/blog", label: "بلاگ" },
    { href: "/about", label: "درباره من" },
    { href: "/contact", label: "تماس" },
  ];

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
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[var(--text)] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* شبکه‌های اجتماعی + تماس */}
        <div>
          <h3 className="text-[var(--text)] font-semibold mb-4 text-sm tracking-wide">
            ارتباط با من
          </h3>

          <div className="flex flex-col gap-4 text-sm">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="flex items-center gap-3 hover:text-[var(--text)] transition"
              >
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                <span dir={item.dir || "auto"} className="font-medium">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <p className="text-center text-[var(--text-muted)] mt-10 text-xs">
        © {year} Hosein Babaii — All rights reserved.
      </p>
    </footer>
  );
}
