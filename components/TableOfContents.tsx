"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
};

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    // Select headings inside the article
    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2, article h3")
    );

    if (!headings.length) return;

    const mapped = headings.map((h) => {
      const text = h.textContent?.trim() || "";
      const id = h.id || text.replace(/\s+/g, "-");

      // Assign ID if missing
      if (!h.id) h.id = id;

      return { id, text };
    });

    setItems(mapped);
  }, []);

  if (!items.length) return null;

  return (
    <aside
      className="
        sticky top-24 p-5 rounded-xl
        backdrop-blur-xl bg-[var(--bg-elevated)]/60
        border border-[var(--border)]
        shadow-md hidden lg:block
      "
    >
      <h3 className="font-semibold mb-3 text-[var(--text)]">فهرست مطالب</h3>

      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="
                text-[var(--text-muted)]
                hover:text-[var(--brand)]
                transition
              "
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
