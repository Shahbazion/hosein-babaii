"use client";

import { useState, useEffect } from "react";

type SearchBarProps = {
  onSearch: (value: string) => void; // برای اتصال به API یا فیلتر
  placeholder?: string;
  delay?: number; // زمان debounce
};

export default function SearchBar({
  onSearch,
  placeholder = "جستجو...",
  delay = 400,
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const [debounced, setDebounced] = useState("");

  // Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  // Trigger search
  useEffect(() => {
    onSearch(debounced);
  }, [debounced, onSearch]);

  return (
    <div
      className="
        w-full flex items-center gap-3 px-4 py-3 rounded-xl
        bg-[var(--bg-elevated)]/60 backdrop-blur-xl
        border border-[var(--border)]
        shadow-sm transition
        focus-within:border-[var(--brand)]
      "
    >
      {/* Icon */}
      <svg
        className="w-5 h-5 text-[var(--text-muted)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
        />
      </svg>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="
          flex-1 bg-transparent outline-none text-[var(--text)]
          placeholder-[var(--text-muted)]
        "
      />
    </div>
  );
}
