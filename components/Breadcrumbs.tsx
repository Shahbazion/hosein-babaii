"use client";

import Link from "next/link";

type Crumb = {
  label: string;
  href?: string; // آخرین آیتم لینک ندارد
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {/* Link or Text */}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[var(--brand)] transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text)] font-medium">
                {item.label}
              </span>
            )}

            {/* Separator */}
            {!isLast && (
              <span className="text-[var(--border)] select-none">/</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
