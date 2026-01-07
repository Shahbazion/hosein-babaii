import Link from "next/link";

export type BlogSidebarProps = {
  relatedPosts?: {
    slug: string;
    title: string;
  }[];
  latestPosts?: {
    slug: string;
    title: string;
  }[];
  categories?: string[];
  tags?: string[];
};

export default function BlogSidebar({
  relatedPosts = [],
  latestPosts = [],
  categories = [],
  tags = [],
}: BlogSidebarProps) {
  return (
    <aside
      className="
        sticky top-24 p-6 rounded-xl
        backdrop-blur-xl bg-[var(--bg-elevated)]/60
        border border-[var(--border)]
        shadow-md space-y-10
        hidden xl:block w-72
      "
    >
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div>
          <h3 className="font-semibold text-[var(--text)] mb-3 text-sm">
            پست‌های مرتبط
          </h3>
          <ul className="space-y-2 text-sm">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[var(--text-muted)] hover:text-[var(--brand)] transition"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <div>
          <h3 className="font-semibold text-[var(--text)] mb-3 text-sm">
            آخرین مقالات
          </h3>
          <ul className="space-y-2 text-sm">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[var(--text-muted)] hover:text-[var(--brand)] transition"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <div>
          <h3 className="font-semibold text-[var(--text)] mb-3 text-sm">
            دسته‌بندی‌ها
          </h3>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/blog/category/${cat}`}
                  className="text-[var(--text-muted)] hover:text-[var(--brand)] transition"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div>
          <h3 className="font-semibold text-[var(--text)] mb-3 text-sm">
            تگ‌ها
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="
                  px-2 py-1 rounded-md bg-[var(--bg)]
                  border border-[var(--border)]
                  text-[var(--text-muted)] hover:text-[var(--brand)]
                  transition
                "
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="pt-4 border-t border-[var(--border)]">
        <Link
          href="/contact"
          className="
            block w-full text-center py-2 rounded-md
            bg-[var(--brand)] text-white text-sm
            hover:bg-[var(--brand-hover)] transition
          "
        >
          رزرو پروژه
        </Link>
      </div>
    </aside>
  );
}
