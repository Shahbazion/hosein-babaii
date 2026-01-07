"use client";

import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string; // مثال: "/blog" یا "/portfolio"
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const pageLink = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <div className="flex items-center justify-center gap-2 mt-16">

      {/* Prev */}
      <Link
        href={currentPage > 1 ? pageLink(currentPage - 1) : "#"}
        className={`
          px-3 py-2 rounded-lg border border-[var(--border)]
          bg-[var(--bg-elevated)] text-sm
          transition
          ${
            currentPage === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[var(--bg)]"
          }
        `}
      >
        قبلی
      </Link>

      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={pageLink(page)}
          className={`
            px-3 py-2 rounded-lg border text-sm transition
            ${
              page === currentPage
                ? "bg-[var(--brand)] text-white border-[var(--brand)]"
                : "bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--bg)]"
            }
          `}
        >
          {page}
        </Link>
      ))}

      {/* Next */}
      <Link
        href={currentPage < totalPages ? pageLink(currentPage + 1) : "#"}
        className={`
          px-3 py-2 rounded-lg border border-[var(--border)]
          bg-[var(--bg-elevated)] text-sm
          transition
          ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[var(--bg)]"
          }
        `}
      >
        بعدی
      </Link>
    </div>
  );
}
