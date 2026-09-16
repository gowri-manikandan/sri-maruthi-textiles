import { contact, site, telHref, whatsappHref } from "@/lib/site";

/**
 * Footer — DESIGN_BRIEF.md §4.13.
 *
 * Full-bleed on `ink-deep`, wordmark and one line left, three link columns
 * right, hairline above the copyright row.
 *
 * Colour note: `--color-muted` is only 3.09:1 against `ink-deep`, below AA for
 * body text, so secondary copy here is `bg/70` (8.9:1) rather than the muted
 * token used on the light grounds. The hairline is `bg/15`, which is
 * decorative and exempt.
 */
const PAGE_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Why us", href: "#why-us" },
  { label: "Our story", href: "#story" },
  { label: "How it works", href: "#how-it-works" },
];

const PRODUCT_LINKS = [
  { label: "Our range", href: "#products" },
  { label: "Our commitments", href: "#commitments" },
  { label: "Questions", href: "#faq" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-ink-deep">
      <div className="container-page section-y">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-4">
          {/* Identity */}
          <div className="lg:col-span-4">
            <p className="font-display text-h3 text-bg">{site.name}</p>
            <p className="mt-2 max-w-[36ch] text-small text-bg/70">
              {site.footer.line}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-start-6 lg:col-span-3">
            <h2 className="eyebrow eyebrow-light">Pages</h2>
            <ul className="mt-2 flex flex-col gap-1">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-small text-bg/70 hover:text-bg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow eyebrow-light">Products</h2>
            <ul className="mt-2 flex flex-col gap-1">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-small text-bg/70 hover:text-bg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow eyebrow-light">Contact</h2>
            <ul className="mt-2 flex flex-col gap-1 text-small text-bg/70">
              <li>
                <a
                  href={telHref(contact.phone.e164)}
                  className="inline-flex min-h-6 items-center hover:text-bg"
                >
                  {contact.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref(contact.whatsapp.e164)}
                  className="inline-flex min-h-6 items-center hover:text-bg"
                >
                  WhatsApp {contact.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.footer.email}`}
                  className="inline-flex min-h-6 items-center hover:text-bg"
                >
                  {site.footer.email}
                </a>
              </li>
              <li className="mt-1">{site.footer.address}</li>
              <li>Serving {site.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-bg/15 pt-3">
          <p className="text-small text-bg/70">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
