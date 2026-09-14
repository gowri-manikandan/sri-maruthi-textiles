import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * DESIGN_BRIEF.md §6. Served at /sitemap.xml by Next convention.
 *
 * One entry, because this is a single-page site — the nav targets are in-page
 * anchors, not routes. Listing `#products` and friends here would be wrong:
 * fragments are not separate URLs and Google ignores them in a sitemap.
 * Add real entries if the catalogue ever becomes its own page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
