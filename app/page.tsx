// app/page.tsx
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold mb-10 text-[var(--text)] tracking-tight">
          خدمات من
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="card border border-[var(--border)]">
            <h3 className="font-semibold text-[var(--text)] text-lg">
              طراحی وب‌سایت
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              طراحی سایت‌های شرکتی، شخصی و فروشگاهی با تمرکز بر تجربه کاربری و برندینگ.
            </p>
          </div>

          {/* Service 2 */}
          <div className="card border border-[var(--border)]">
            <h3 className="font-semibold text-[var(--text)] text-lg">
              وب‌اپلیکیشن
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              ساخت وب‌اپ‌های مدرن، سریع و مقیاس‌پذیر با Next.js و معماری حرفه‌ای.
            </p>
          </div>

          {/* Service 3 */}
          <div className="card border border-[var(--border)]">
            <h3 className="font-semibold text-[var(--text)] text-lg">
              سئو و سرعت
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              بهینه‌سازی سرعت، ساختار، محتوا و رتبه در گوگل برای رشد واقعی کسب‌وکار.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
