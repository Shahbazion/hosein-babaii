"use client";

import Link from "next/link";
import Image from "next/image";

export type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  readingTime?: string;
  tags?: string[];
};

export default function BlogCard({
  slug,
  title,
  excerpt,
  cover,
  date,
  readingTime = "۵ دقیقه",
  tags = [],
}: BlogCardProps) {
  return (
    <article
      className="
        group rounded-2xl overflow-hidden border border-[var(--border)]
        bg-[var(--bg-elevated)]/60 backdrop-blur-xl shadow-sm
        hover:shadow-xl hover:-translate-y-1 transition-all duration-300
      "
    >
      {/* Cover Image */}
      <Link href={`/blog/${slug}`} className="block relative h-52 w-full overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-2 py-1 rounded-md bg-[var(--bg)] border border-[var(--border)]
                  text-[var(--text-muted)] hover:text-[var(--text)] transition
                "
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h2
            className="
              text-lg font-bold text-[var(--text)]
              group-hover:text-[var(--brand)] transition
            "
          >
            {title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mt-2">
          <span>{date}</span>
          <span>{readingTime}</span>
        </div>

        {/* Read More */}
        <Link
          href={`/blog/${slug}`}
          className="
            mt-3 inline-block text-[var(--brand)] text-sm font-medium
            hover:opacity-80 transition
          "
        >
          ادامه مطلب →
        </Link>
      </div>
    </article>
  );
}
