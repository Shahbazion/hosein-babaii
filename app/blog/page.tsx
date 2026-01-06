// app/blog/page.tsx
import Link from "next/link";
import { posts } from "./posts";
import React from "react";

export const metadata = {
  title: "بلاگ | نوشته‌ها، تجربه‌ها و بینش‌ها",
  description:
    "نوشته‌هایی درباره طراحی وب، توسعه، تجربه کاربری، معنویت، فلسفه و رشد فردی. ترکیبی از تکنولوژی و معنا.",
};

type SearchParamsType = {
  q?: string;
  category?: string;
};

// مهم: props.searchParams ممکنه Promise باشه — بنابراین props رو کامل بگیر و await کن.
export default async function BlogPage(
  props: { searchParams?: Promise<SearchParamsType> }
) {
  const searchParams = props.searchParams ? await props.searchParams : {};
  const q = searchParams.q ? String(searchParams.q).toLowerCase().trim() : "";
  const category = searchParams.category ? String(searchParams.category).trim() : "";

  const categories = [
    {
      title: "طراحی وب",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
    {
      title: "معنویت و فلسفه",
      icon: "https://cdn-icons-png.flaticon.com/512/4329/4329445.png",
    },
    {
      title: "توسعه وب",
      icon: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    },
    {
      title: "رشد فردی",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesQuery =
      !q ||
      post.title.toLowerCase().includes(q) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(q));
    const matchesCategory = !category || post.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <section className="relative overflow-hidden py-24 bg-[var(--bg)] transition fade-in">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* عنوان صفحه */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--text)]">
          بلاگ
        </h1>

        <p className="text-[var(--text-muted)] mb-8 max-w-2xl leading-relaxed">
          نوشته‌هایی درباره طراحی وب، توسعه، تجربه کاربری، معنویت، فلسفه و مسیر رشد.
        </p>

        {/* سرچ */}
        <form className="mb-10" action="/blog" method="get">
          <input
            name="q"
            defaultValue={q}
            placeholder="جستجو در میان نوشته‌ها..."
            className="
              w-full md:w-1/2 px-4 py-2 text-sm rounded-lg
              backdrop-blur-xl bg-[var(--bg-elevated)]/60
              border border-[var(--border)]
              text-[var(--text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--brand)]
              transition
            "
          />
        </form>

        {/* دسته‌بندی‌ها */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, index) => {
            const isActive = category === cat.title;
            return (
              <Link
                key={index}
                href={isActive ? "/blog" : `/blog?category=${encodeURIComponent(cat.title)}`}
                className={`p-5 rounded-xl flex flex-col items-center text-center backdrop-blur-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-500 ${isActive ? "border-[var(--brand)]" : ""}`}
              >
                <img src={cat.icon} alt={cat.title} className="w-10 h-10 mb-3" />
                <span className="text-sm font-medium text-[var(--text)]">{cat.title}</span>
              </Link>
            );
          })}
        </div>

        {/* پست‌ها */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredPosts.length === 0 && (
            <p className="text-[var(--text-muted)] text-sm">هیچ پستی با این فیلتر پیدا نشد.</p>
          )}

          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl overflow-hidden backdrop-blur-xl bg-[var(--bg-elevated)]/60 border border-[var(--border)] shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.icon && <img src={post.icon} alt="icon" className="w-6 h-6" />}
                  <span className="text-xs text-[var(--text-muted)]">{post.category}</span>
                </div>

                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{post.title}</h3>

                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">{post.excerpt}</p>

                <span className="text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-hover)] transition">ادامه مطلب →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA نهایی */}
        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block px-8 py-3 rounded-lg bg-[var(--brand)] text-white text-sm font-medium hover:bg-[var(--brand-hover)] transition">
            درخواست همکاری / مشاوره
          </Link>
        </div>
      </div>
    </section>
  );
}
