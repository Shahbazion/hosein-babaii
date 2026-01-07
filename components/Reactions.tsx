"use client";

import { useEffect, useState } from "react";

type ReactionType = "likes" | "dislikes" | "loves";

type ReactionData = {
  likes: number;
  dislikes: number;
  loves: number;
};

export default function Reactions({ slug }: { slug: string }) {
  const [data, setData] = useState<ReactionData>({
    likes: 0,
    dislikes: 0,
    loves: 0,
  });

  const [userReaction, setUserReaction] = useState<ReactionType | null>(null);
  const [floatHearts, setFloatHearts] = useState<number[]>([]);
  const [floatEmojis, setFloatEmojis] = useState<{ id: number; emoji: string }[]>([]);

  const emojis = ["🔥", "😍", "👏", "🤯", "💡", "✨"];

  /* ============================================================
     1) Load initial data — API-Ready (DB later)
  ============================================================ */
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/reactions/${slug}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch {
        // fallback for no DB yet
        setData({ likes: 0, dislikes: 0, loves: 0 });
      }
    };

    load();

    const saved = localStorage.getItem(`reaction-${slug}`);
    if (saved) setUserReaction(saved as ReactionType);
  }, [slug]);

  /* ============================================================
     2) Save user reaction locally (until DB user system exists)
  ============================================================ */
  const saveUserReaction = (reaction: ReactionType | null) => {
    if (reaction) localStorage.setItem(`reaction-${slug}`, reaction);
    else localStorage.removeItem(`reaction-${slug}`);
  };

  /* ============================================================
     3) Floating animations
  ============================================================ */
  const animateHeart = () => {
    const id = Date.now();
    setFloatHearts((prev) => [...prev, id]);
    setTimeout(() => {
      setFloatHearts((prev) => prev.filter((x) => x !== id));
    }, 1200);
  };

  const animateEmoji = () => {
    const id = Date.now();
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    setFloatEmojis((prev) => [...prev, { id, emoji }]);
    setTimeout(() => {
      setFloatEmojis((prev) => prev.filter((x) => x.id !== id));
    }, 1200);
  };

  /* ============================================================
     4) Update Reaction — API-Ready (DB later)
  ============================================================ */
  const update = async (field: ReactionType) => {
    if (userReaction === field) return;

    const newData: ReactionData = {
      likes: field === "likes" ? data.likes + 1 : data.likes,
      dislikes: field === "dislikes" ? data.dislikes + 1 : data.dislikes,
      loves: field === "loves" ? data.loves + 1 : data.loves,
    };

    setData(newData);
    setUserReaction(field);
    saveUserReaction(field);

    // API call — this will automatically connect to DB later
    try {
      await fetch(`/api/reactions/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reaction: field }),
      });
    } catch {
      // ignore for now (DB not ready)
    }

    if (field === "loves") animateHeart();
    animateEmoji();
  };

  return (
    <div className="relative">
      {/* Floating animations */}
      <div className="absolute inset-0 pointer-events-none">
        {floatHearts.map((id) => (
          <div key={id} className="absolute left-1/2 animate-float-heart text-pink-500 text-2xl">
            ❤️
          </div>
        ))}

        {floatEmojis.map((item) => (
          <div key={item.id} className="absolute left-1/2 animate-float-heart text-xl">
            {item.emoji}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div
        className="
          flex items-center gap-6 mb-10
          backdrop-blur-xl bg-[var(--bg-elevated)]/60
          border border-[var(--border)]
          px-4 py-3 rounded-xl shadow-sm
        "
      >
        <button
          onClick={() => update("likes")}
          className={`flex items-center gap-2 transition ${
            userReaction === "likes"
              ? "text-blue-500"
              : "text-[var(--text-muted)] hover:text-[var(--text)]"
          }`}
        >
          👍 <span className="text-sm">{data.likes}</span>
        </button>

        <button
          onClick={() => update("dislikes")}
          className={`flex items-center gap-2 transition ${
            userReaction === "dislikes"
              ? "text-red-500"
              : "text-[var(--text-muted)] hover:text-[var(--text)]"
          }`}
        >
          👎 <span className="text-sm">{data.dislikes}</span>
        </button>

        <button
          onClick={() => update("loves")}
          className={`flex items-center gap-2 transition ${
            userReaction === "loves"
              ? "text-pink-500"
              : "text-[var(--text-muted)] hover:text-red-500"
          }`}
        >
          ❤️ <span className="text-sm">{data.loves}</span>
        </button>
      </div>
    </div>
  );
}
