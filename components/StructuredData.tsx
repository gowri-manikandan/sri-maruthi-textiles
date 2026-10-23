import { contact, site, SITE_URL } from "@/lib/site";

/**
 * Organization and LocalBusiness JSON-LD — DESIGN_BRIEF.md §6.
 *
 * Verified facts:
 *   - `name`, `url`, `description`, `telephone`, `email`
 *   - `address`: 1/37, Gandhi Nagar, Pallagoundenpalayam, Tamil Nadu 638056
 *   - `taxID`: GSTIN 33BNZPM4235L2ZC
 *   - `areaServed`: Kerala and Tamil Nadu
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-full.png`,
    image: `${SITE_URL}/images/hero.jpg`,
    description: site.seo.description,
    telephone: contact.phone.e164,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.area,
      addressRegion: site.address.state,
      postalCode: site.address.pincode,
      addressCountry: "IN",
    },
    taxID: site.gstin,
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
