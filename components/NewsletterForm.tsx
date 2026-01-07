"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full max-w-md flex flex-col gap-3
        p-5 rounded-xl backdrop-blur-xl
        bg-[var(--bg-elevated)]/60 border border-[var(--border)]
        shadow-sm
      "
    >
      <label className="text-sm text-[var(--text)] font-medium">
        عضویت در خبرنامه
      </label>

      <div className="flex items-center gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل شما..."
          className="
            flex-1 px-4 py-2 rounded-lg bg-transparent
            border border-[var(--border)]
            text-[var(--text)] placeholder-[var(--text-muted)]
            outline-none focus:border-[var(--brand)]
            transition
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            px-4 py-2 rounded-lg text-sm text-white
            bg-[var(--brand)] hover:bg-[var(--brand-hover)]
            transition disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          {loading ? "در حال ارسال..." : "ارسال"}
        </button>
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-sm text-green-500">با موفقیت ثبت شد!</p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-500">ایمیل معتبر نیست یا خطایی رخ داد.</p>
      )}
    </form>
  );
}
