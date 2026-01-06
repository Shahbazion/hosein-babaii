"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("لطفاً همهٔ فیلدها را پر کنید.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "خطا در ارسال پیام.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("خطا در ارسال؛ دوباره تلاش کنید.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl mx-auto space-y-6 bg-[var(--bg-elevated)] p-8 rounded-xl border border-[var(--border)] shadow-lg transition"
    >
      {/* Success Message */}
      {status === "success" && (
        <div className="p-3 rounded-lg bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 transition">
          پیام با موفقیت ارسال شد — به زودی پاسخ می‌دهم.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-3 rounded-lg bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 transition">
          {error}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--text)]">
          نام
        </label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          className="
            w-full p-3 rounded-lg border border-[var(--border)]
            bg-[var(--bg-elevated)] text-[var(--text)]
            focus:ring-2 focus:ring-[var(--brand)] focus:border-[var(--brand)]
            transition
          "
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--text)]">
          ایمیل
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          className="
            w-full p-3 rounded-lg border border-[var(--border)]
            bg-[var(--bg-elevated)] text-[var(--text)]
            focus:ring-2 focus:ring-[var(--brand)] focus:border-[var(--brand)]
            transition
          "
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[var(--text)]">
          پیام
        </label>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={onChange}
          className="
            w-full p-3 rounded-lg border border-[var(--border)]
            bg-[var(--bg-elevated)] text-[var(--text)]
            focus:ring-2 focus:ring-[var(--brand)] focus:border-[var(--brand)]
            transition
          "
        />
      </div>

      {/* Submit + WhatsApp */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="
            px-6 py-3 rounded-lg bg-[var(--brand)] text-white font-medium
            hover:bg-[var(--brand-hover)] active:scale-95
            transition disabled:opacity-50
          "
        >
          {status === "loading" ? "در حال ارسال..." : "ارسال پیام"}
        </button>

        <div className="text-sm text-[var(--text-muted)]">
          یا پیام در واتساپ:{" "}
          <a
            href="https://wa.me/989199570188"
            className="underline text-[var(--brand)] hover:text-[var(--brand-hover)]"
          >
            09199570188
          </a>
        </div>
      </div>
    </form>
  );
}
