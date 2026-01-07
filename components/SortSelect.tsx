"use client";

import { useState } from "react";

type SortOption = {
  label: string;
  value: string;
};

type SortSelectProps = {
  options: SortOption[];
  defaultValue?: string;
  onChange: (value: string) => void;
};

export default function SortSelect({
  options,
  defaultValue = "",
  onChange,
}: SortSelectProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (val: string) => {
    setValue(val);
    onChange(val);
  };

  return (
    <div
      className="
        inline-flex items-center gap-3 px-4 py-2 rounded-xl
        bg-[var(--bg-elevated)]/60 backdrop-blur-xl
        border border-[var(--border)]
        shadow-sm transition
      "
    >
      <span className="text-sm text-[var(--text-muted)]">مرتب‌سازی:</span>

      <select
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="
          bg-transparent text-[var(--text)] text-sm outline-none
          cursor-pointer
        "
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-[var(--bg)] text-[var(--text)]"
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
