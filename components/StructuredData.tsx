import { contact, site, SITE_URL } from "@/lib/site";

/**
 * LocalBusiness JSON-LD — DESIGN_BRIEF.md §6.
 *
 * Verified facts:
 *   - `name`, `url`, `description`, `telephone`, `email`
 *   - `address`: 1/37, Pallagoundanpalayam, Uttukuli (Tk), Tiruppur (Dt) - 638056
 *   - `taxID` / `vatID`: GSTIN 33BNZPM4235L2ZC
 *   - `areaServed`: Kerala and Tamil Nadu
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
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: "Uttukuli",
      addressRegion: "Tamil Nadu",
      postalCode: site.address.pincode,
      addressCountry: "IN",
    },
    taxID: site.gstin,
    vatID: site.gstin,
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
