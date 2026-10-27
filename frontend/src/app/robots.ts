import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo.config";

const isIndexable = process.env.VERCEL_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api"],
    },
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
  };
}
