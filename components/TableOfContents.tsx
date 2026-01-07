"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: number; // 2 یا 3
};

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2, article h3")
    );

    if (!headings.length) return;

    const mapped = headings.map((h) => {
      const text = h.textContent?.trim() || "";
      const id = h.id || text.replace(/\s+/g, "-");
      const level = Number(h.tagName.replace("H", ""));

      if (!h.id) h.id = id;

      return { id, text, level };
    });

    setItems(mapped);

    // Scroll Spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, []);

  if (!items.length) return null;

  return (
    <aside
      className="
        sticky top-24 p-5 rounded-xl
        backdrop-blur-xl bg-[var(--bg-elevated)]/60
        border border-[var(--border)]
        shadow-md hidden xl:block w-64
      "
    >
      <h3 className="font-semibold mb-4 text-[var(--text)] text-sm">
        فهرست مطالب
      </h3>

      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={`
              transition-all
              ${item.level === 3 ? "ml-4" : ""}
            `}
          >
            <a
              href={`#${item.id}`}
              className={`
                block py-1
                ${
                  activeId === item.id
                    ? "text-[var(--brand)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }
                transition
              `}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
