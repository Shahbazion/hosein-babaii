"use client";

import { useState } from "react";

type CategoryFilterProps = {
  categories: string[];
  onChange: (category: string | null) => void;
  defaultCategory?: string | null;
};

export default function CategoryFilter({
  categories,
  onChange,
  defaultCategory = null,
}: CategoryFilterProps) {
  const [active, setActive] = useState<string | null>(defaultCategory);

  const handleClick = (cat: string | null) => {
    setActive(cat);
    onChange(cat);
  };

  return (
    <div className="flex flex-wrap gap-3 mt-6 mb-10">

      {/* All */}
      <button
        onClick={() => handleClick(null)}
        className={`
          px-4 py-2 rounded-lg text-sm transition border
          ${
            active === null
              ? "bg-[var(--brand)] text-white border-[var(--brand)]"
              : "bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--bg)]"
          }
        `}
      >
        همه
      </button>

      {/* Categories */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`
            px-4 py-2 rounded-lg text-sm transition border
            ${
              active === cat
                ? "bg-[var(--brand)] text-white border-[var(--brand)]"
                : "bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--bg)]"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
