// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "حسین بابایی | طراح سایت و وب اپلیکیشن",
  description:
    "طراحی سایت، توسعه وب اپلیکیشن و تولید محتوای معنوی توسط حسین بابایی. نمونه‌کارها، خدمات و مسیر فکری.",
  metadataBase: new URL("https://hoseinbabaii.ir"),
  openGraph: {
    title: "حسین بابایی | طراح سایت و وب اپلیکیشن",
    description:
      "نمونه‌کارها، خدمات و مسیر فکری حسین بابایی؛ طراحی سایت، توسعه وب اپلیکیشن و محتوای معنوی.",
    url: "https://hoseinbabaii.ir",
    siteName: "Hosein Babaii",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Hosein Babaii Personal Website",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased flex flex-col min-h-screen transition">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Contact Buttons */}
        <div className="floating-contact">

          {/* WhatsApp */}
          <a
            href="https://wa.me/989199570188"
            target="_blank"
            rel="noreferrer"
            className="floating-contact__button"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
            />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/persianam"
            target="_blank"
            rel="noreferrer"
            className="floating-contact__button"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="Telegram"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/pershian_am"
            target="_blank"
            rel="noreferrer"
            className="floating-contact__button"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
          </a>

          {/* Phone */}
          <a href="tel:+989199570188" className="floating-contact__button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Phone"
            />
          </a>

        </div>

        {/* ================================
            Highlight.js (CDN)
        ================================= */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
          strategy="afterInteractive"
        />
        <Script id="hljs-init" strategy="afterInteractive">
          {`window.hljs && window.hljs.highlightAll();`}
        </Script>

      </body>
    </html>
  );
}
