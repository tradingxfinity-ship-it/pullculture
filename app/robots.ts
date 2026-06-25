import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pullculture.io/sitemap.xml",
    host: "https://pullculture.io",
  };
}
