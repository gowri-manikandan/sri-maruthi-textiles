import { contact, site, SITE_URL } from "@/lib/site";

/**
 * LocalBusiness JSON-LD — DESIGN_BRIEF.md §6.
 *
 * Only verified facts go in. Deliberately ABSENT:
 *   - `address`      no street address has been supplied yet
 *   - `foundingDate` "20+ years" is not a year
 *   - `geo`, `openingHours`, `aggregateRating`, `priceRange`
 * Structured data is a machine-readable claim to a search engine; inventing
 * any of the above would be a fabricated claim, not a placeholder.
 *
 * Phase 14 must add `address` — Google will not show a local rich result for a
 * LocalBusiness without a postal address, so this is currently valid markup
 * that simply will not earn the local card yet.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    url: SITE_URL,
    description: site.seo.description,
    telephone: contact.phone.e164,
    areaServed: [
      { "@type": "State", name: "Kerala" },
      { "@type": "State", name: "Tamil Nadu" },
    ],
    knowsLanguage: ["en", "ta", "ml"],
  };

  return (
    <script
      type="application/ld+json"
      /* Serialised with JSON.stringify, so nothing here can break out of the
         script tag; the `<` escape guards against a stray `</script>` if any
         of these fields ever comes from user-editable content. */
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
