"use client";

import { useState } from "react";

type CommentFormProps = {
  postId: string;
};

export default function CommentForm({ postId }: CommentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim() || !isValidEmail(email)) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ name, email, comment, postId }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setComment("");
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
        w-full p-6 rounded-2xl mt-12
        bg-[var(--bg-elevated)]/60 backdrop-blur-xl
        border border-[var(--border)]
        shadow-sm flex flex-col gap-4
      "
    >
      <h3 className="text-lg font-semibold text-[var(--text)]">
        ارسال دیدگاه
      </h3>

      {/* Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="نام شما"
        className="
          px-4 py-2 rounded-lg bg-transparent
          border border-[var(--border)]
          text-[var(--text)] placeholder-[var(--text-muted)]
          outline-none focus:border-[var(--brand)]
          transition
        "
      />

      {/* Email */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ایمیل شما"
        className="
          px-4 py-2 rounded-lg bg-transparent
          border border-[var(--border)]
          text-[var(--text)] placeholder-[var(--text-muted)]
          outline-none focus:border-[var(--brand)]
          transition
        "
      />

      {/* Comment */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="متن دیدگاه..."
        rows={5}
        className="
          px-4 py-3 rounded-lg bg-transparent
          border border-[var(--border)]
          text-[var(--text)] placeholder-[var(--text-muted)]
          outline-none focus:border-[var(--brand)]
          transition resize-none
        "
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="
          px-4 py-2 rounded-lg text-sm text-white
          bg-[var(--brand)] hover:bg-[var(--brand-hover)]
          transition disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        {loading ? "در حال ارسال..." : "ارسال دیدگاه"}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-sm text-green-500">دیدگاه شما ثبت شد.</p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-500">
          لطفاً اطلاعات را درست وارد کنید یا دوباره تلاش کنید.
        </p>
      )}
    </form>
  );
}
