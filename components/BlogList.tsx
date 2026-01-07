"use client";

import BlogCard, { BlogCardProps } from "./BlogCard";

type BlogListProps = {
  posts: BlogCardProps[]; // آینده‌نگر: این از دیتابیس یا CMS میاد
  title?: string;
  showPagination?: boolean;
};

export default function BlogList({
  posts,
  title = "آخرین مقالات",
  showPagination = false,
}: BlogListProps) {
  return (
    <section className="mt-16">
      {/* Title */}
      {title && (
        <h2 className="text-2xl font-bold text-[var(--text)] mb-8">
          {title}
        </h2>
      )}

      {/* Posts Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post.slug} {...post} />)
        ) : (
          <p className="text-[var(--text-muted)] text-sm">
            هیچ مقاله‌ای یافت نشد.
          </p>
        )}
      </div>

      {/* Pagination (آماده برای آینده) */}
      {showPagination && (
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            className="
              px-4 py-2 rounded-lg border border-[var(--border)]
              bg-[var(--bg-elevated)] text-[var(--text-muted)]
              hover:text-[var(--text)] hover:bg-[var(--bg)]
              transition
            "
          >
            قبلی
          </button>

          <button
            className="
              px-4 py-2 rounded-lg border border-[var(--border)]
              bg-[var(--bg-elevated)] text-[var(--text-muted)]
              hover:text-[var(--text)] hover:bg-[var(--bg)]
              transition
            "
          >
            بعدی
          </button>
        </div>
      )}
    </section>
  );
}
