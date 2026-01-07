type BlogContentProps = {
  html: string; // محتوای HTML که از CMS یا Markdown Parser میاد
};

export default function BlogContent({ html }: BlogContentProps) {
  return (
    <article
      className="
        prose prose-neutral dark:prose-invert max-w-4xl mx-auto
        prose-headings:text-[var(--text)]
        prose-p:text-[var(--text-muted)]
        prose-a:text-[var(--brand)] prose-a:no-underline hover:prose-a:opacity-80
        prose-strong:text-[var(--text)]
        prose-blockquote:border-[var(--border)]
        prose-blockquote:text-[var(--text-muted)]
        prose-img:rounded-xl prose-img:shadow-lg
        prose-code:text-[var(--brand)]
        prose-pre:bg-[var(--bg-elevated)]
        prose-pre:border prose-pre:border-[var(--border)]
        prose-pre:rounded-xl prose-pre:p-4
        leading-relaxed
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
