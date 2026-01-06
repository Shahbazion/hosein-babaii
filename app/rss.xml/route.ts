// app/rss.xml/route.ts

import { NextResponse } from "next/server";
import { posts } from "../blog/posts";

export async function GET() {
  const baseUrl = "https://your-domain.com";

  const items = posts
    .map((post) => {
      return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/blog/${post.slug}</link>
        <description><![CDATA[${post.excerpt}]]></description>
        <guid>${baseUrl}/blog/${post.slug}</guid>
      </item>
    `;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>بلاگ</title>
      <link>${baseUrl}/blog</link>
      <description>آخرین نوشته‌ها</description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
