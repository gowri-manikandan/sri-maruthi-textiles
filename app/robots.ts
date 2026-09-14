import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** DESIGN_BRIEF.md §6. Served at /robots.txt by Next convention. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /* The enquiry endpoint is POST-only and has nothing to index. */
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
