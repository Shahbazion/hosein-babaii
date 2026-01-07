// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hoseinbabaii.ir";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
