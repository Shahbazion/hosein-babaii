"use client";

import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const params = useSearchParams();

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    const query = new URLSearchParams(params.toString());
    query.set("page", page.toString());
    router.push(`?${query.toString()}`);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-12">

      {/* Prev */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          px-3 py-2 rounded-lg text-sm
          bg-[var(--bg-elevated)]/60 border border-[var(--border)]
          hover:bg-[var(--bg)] transition
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        قبلی
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`
            px-3 py-2 rounded-lg text-sm transition
            border border-[var(--border)]
            ${
              page === currentPage
                ? "bg-[var(--brand)] text-white border-[var(--brand)]"
                : "bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg)] text-[var(--text)]"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          px-3 py-2 rounded-lg text-sm
          bg-[var(--bg-elevated)]/60 border border-[var(--border)]
          hover:bg-[var(--bg)] transition
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        بعدی
      </button>
    </div>
  );
}
