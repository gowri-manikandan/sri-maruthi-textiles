import {
  contact,
  ENQUIRY_HREF,
  site,
  telHref,
  whatsappHref,
} from "@/lib/site";

/**
 * Action band — DESIGN_BRIEF.md §4.3.
 *
 * Sits directly under the hero with no gap: the one strip that converts a
 * wholesaler who is still only browsing. Pale indigo is the only place
 * `accent-soft` is permitted (§3.1 accent budget).
 *
 * No icons here. §3.5 lists exactly where icons may appear and this band is
 * not one of those places, so the contact links are plain text — which also
 * sidesteps the fact that lucide has no WhatsApp mark.
 */
export default function ActionBand() {
  return (
    <section aria-label="Samples and direct contact" className="bg-accent-soft">
      <div className="container-page flex flex-col gap-2 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-2">
        {/* DOM order reads correctly for screen readers and search engines;
            §4.3 asks for the contact links first on mobile, which is a visual
            reordering only. */}
        <p className="order-2 text-body text-ink lg:order-none">
          {site.actionBand.line}
        </p>

        <div className="order-1 flex flex-col gap-1 lg:order-none lg:flex-row lg:items-center lg:gap-3">
          <a
            href={telHref(contact.phone.e164)}
            className="inline-flex min-h-6 items-center text-body font-semibold text-accent underline underline-offset-4"
          >
            Call {contact.phone.display}
          </a>
          <a
            href={whatsappHref(contact.whatsapp.e164)}
            className="inline-flex min-h-6 items-center text-body font-semibold text-accent underline underline-offset-4"
          >
            WhatsApp {contact.whatsapp.display}
          </a>
        </div>

        <a
          href={ENQUIRY_HREF}
          className="btn btn-primary order-3 w-full lg:order-none lg:w-auto lg:shrink-0"
        >
          {site.actionBand.cta}
        </a>
      </div>
    </section>
  );
}
