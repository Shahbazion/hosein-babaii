// app/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { posts } from "../posts";
import Reactions from "../../../components/Reactions";
import ScrollProgress from "../../../components/ScrollProgress";
import TableOfContents from "../../../components/TableOfContents";
import React from "react";
import type { Metadata } from "next";

/* ================================
   Props Type
================================ */
type BlogPageProps = {
  params: {
    slug: string;
  };
};

/* ================================
   PARSE ARTICLE CONTENT (Highlight.js)
================================ */
function renderContent(raw: string) {
  const lines = raw.split("\n");
  const blocks: React.ReactNode[] = [];

  let inCode = false;
  let lang = "ts";
  let buffer: string[] = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("```") && !inCode) {
      inCode = true;
      lang = trimmed.replace(/```/g, "").trim() || "ts";
      buffer = [];
      return;
    }

    if (trimmed.startsWith("```") && inCode) {
      inCode = false;
      blocks.push(
        <pre key={`code-${i}`}>
          <code className={`language-${lang}`}>{buffer.join("\n")}</code>
        </pre>
      );
      return;
    }

    if (inCode) {
      buffer.push(line);
      return;
    }

    if (trimmed) {
      blocks.push(<p key={`p-${i}`}>{trimmed}</p>);
    }
  });

  return blocks;
}

/* ================================
   METADATA (SERVER COMPONENT)
   — صریحاً Promise<Metadata>
================================ */
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "پست پیدا نشد",
      description: "این پست وجود ندارد.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://hoseinbabaii.ir/blog/${post.slug}`,
    },
  };
}

/* ================================
   PAGE COMPONENT (SERVER)
================================ */
export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center text-[var(--text-muted)] fade-in">
        پست مورد نظر پیدا نشد.
      </div>
    );
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <section className="relative overflow-hidden py-24 bg-[var(--bg)] fade-in">
      <ScrollProgress />

      <div
        className="
          absolute inset-0 pointer-events-none
          bg-gradient-to-br
          from-[rgba(99,102,241,0.15)]
          via-[rgba(37,99,235,0.12)]
          to-[rgba(14,165,233,0.10)]
          dark:from-[rgba(99,102,241,0.25)]
          dark:via-[rgba(37,99,235,0.20)]
          dark:to-[rgba(14,165,233,0.15)]
          blur-3xl opacity-70
        "
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_260px] gap-12">
          <div>
            <Link
              href="/blog"
              className="
                inline-flex items-center gap-2 mb-6
                px-4 py-2 rounded-lg
                backdrop-blur-xl bg-[var(--bg-elevated)]/60
                border border-[var(--border)]
                text-[var(--text)]
                shadow-sm hover:shadow-md hover:scale-[1.02]
                transition-all duration-300
              "
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                alt="back"
                className="w-4 h-4 opacity-70"
              />
              <span className="text-sm font-medium">بازگشت</span>
            </Link>

            <nav
              className="
                text-sm mb-6 flex gap-1 items-center
                backdrop-blur-xl bg-[var(--bg-elevated)]/60
                border border-[var(--border)]
                px-4 py-2 rounded-lg shadow-sm
              "
            >
              <Link href="/" className="hover:text-[var(--text)] text-[var(--text-muted)]">
                خانه
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[var(--text)] text-[var(--text-muted)]">
                بلاگ
              </Link>
              <span>/</span>
              <span className="text-[var(--text)] truncate max-w-[60%]">
                {post.title}
              </span>
            </nav>

            <div
              className="
                rounded-2xl overflow-hidden shadow-xl mb-10
                backdrop-blur-xl bg-[var(--bg-elevated)]/60
                border border-[var(--border)]
              "
            >
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <img src={post.icon} alt="icon" className="w-6 h-6" />
                <span className="text-sm text-[var(--text-muted)]">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-4">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>
            </div>

            <Reactions slug={post.slug} />

            <article
              className="
                prose prose-lg max-w-none mb-16
                prose-headings:text-[var(--text)]
                prose-p:text-[var(--text-muted)]
                prose-strong:text-[var(--text)]
                prose-a:text-[var(--brand)]
                prose-img:rounded-xl
                dark:prose-invert
              "
            >
              {renderContent(post.content)}
            </article>

            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-xl font-bold mb-6 text-[var(--text)]">
                  پست‌های مرتبط
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((item, index) => (
                    <Link
                      key={index}
                      href={`/blog/${item.slug}`}
                      className="
                        p-5 rounded-xl flex items-center gap-3
                        backdrop-blur-xl bg-[var(--bg-elevated)]/60
                        border border-[var(--border)]
                        shadow-md hover:shadow-xl hover:scale-[1.02]
                        transition-all duration-300
                      "
                    >
                      <img src={item.icon} alt="icon" className="w-7 h-7" />
                      <span className="text-sm font-medium text-[var(--text)]">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 border-t border-[var(--border)] pt-10">
              <h2 className="text-lg font-semibold mb-4 text-[var(--text)]">
                نظر شما درباره این نوشته چیه؟
              </h2>

              <textarea
                className="
                  w-full px-4 py-3 text-sm mb-4 rounded-lg
                  border border-[var(--border)]
                  bg-[var(--bg-elevated)]
                  text-[var(--text)]
                  focus:outline-none focus:ring-2 focus:ring-[var(--brand)]
                "
                placeholder="نظرت رو اینجا بنویس..."
                rows={4}
              />

              <button
                className="
                  px-6 py-2 rounded-lg
                  bg-[var(--brand)] text-white text-sm font-medium
                  hover:bg-[var(--brand-hover)] transition
                "
              >
                ثبت نظر (غیرفعال)
              </button>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="
                  inline-block px-8 py-3 rounded-lg
                  bg-[var(--brand)] text-white text-sm font-medium
                  hover:bg-[var(--brand-hover)] transition
                "
              >
                نیاز به مشاوره یا همکاری داری؟
              </Link>
            </div>
          </div>

          <TableOfContents />
        </div>
      </div>
    </section>
  );
}
