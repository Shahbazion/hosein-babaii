"use client";

import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  url: string;
};

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-3 mt-10">

      {/* Telegram */}
      <a
        href={shareLinks.telegram}
        target="_blank"
        className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--bg)] transition"
      >
        <img src="/icons/telegram.svg" alt="telegram" className="w-5 h-5" />
      </a>

      {/* WhatsApp */}
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--bg)] transition"
      >
        <img src="/icons/whatsapp.svg" alt="whatsapp" className="w-5 h-5" />
      </a>

      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--bg)] transition"
      >
        <img src="/icons/twitter.svg" alt="twitter" className="w-5 h-5" />
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--bg)] transition"
      >
        <img src="/icons/linkedin.svg" alt="linkedin" className="w-5 h-5" />
      </a>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--bg)] transition"
      >
        <img src="/icons/link.svg" alt="copy link" className="w-5 h-5" />
      </button>

      {copied && (
        <span className="text-sm text-[var(--brand)]">کپی شد!</span>
      )}
    </div>
  );
}
