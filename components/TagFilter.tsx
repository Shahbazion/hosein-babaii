"use client";

import { useState } from "react";

type TagFilterProps = {
  tags: string[];
  onChange: (tag: string | null) => void;
  defaultTag?: string | null;
};

export default function TagFilter({
  tags,
  onChange,
  defaultTag = null,
}: TagFilterProps) {
  const [active, setActive] = useState<string | null>(defaultTag);

  const handleClick = (tag: string | null) => {
    setActive(tag);
    onChange(tag);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-8">

      {/* All */}
      <button
        onClick={() => handleClick(null)}
        className={`
          px-3 py-1.5 rounded-md text-xs transition border
          ${
            active === null
              ? "bg-[var(--brand)] text-white border-[var(--brand)]"
              : "bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--bg)]"
          }
        `}
      >
        همه تگ‌ها
      </button>

      {/* Tags */}
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          className={`
            px-3 py-1.5 rounded-md text-xs transition border
            ${
              active === tag
                ? "bg-[var(--brand)] text-white border-[var(--brand)]"
                : "bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--bg)]"
            }
          `}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
