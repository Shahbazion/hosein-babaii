import Image from "next/image";

export type BlogHeaderProps = {
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  readingTime?: string;
  tags?: string[];
};

export default function BlogHeader({
  title,
  excerpt,
  cover,
  date,
  readingTime = "۵ دقیقه",
  tags = [],
}: BlogHeaderProps) {
  return (
    <header className="max-w-4xl mx-auto mt-10 mb-16">

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                px-2 py-1 rounded-md bg-[var(--bg-elevated)]
                border border-[var(--border)]
                text-[var(--text-muted)]
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] leading-snug mb-4">
        {title}
      </h1>

      {/* Excerpt */}
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
        {excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-10">
        <span>{date}</span>
        <span>•</span>
        <span>{readingTime}</span>
      </div>

      {/* Cover Image */}
      <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </header>
  );
}
