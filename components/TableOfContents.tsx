"use client";

import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("article h2, article h3"));
    const mapped = headings.map((h) => ({
      id: h.id || h.textContent!.replace(/\s+/g, "-"),
      text: h.textContent || "",
    }));

    // Add IDs if missing
    headings.forEach((h, i) => {
      if (!h.id) h.id = mapped[i].id;
    });

    setItems(mapped);
  }, []);

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
              className="text-[var(--text-muted)] hover:text-[var(--brand)] transition"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
