import EnquiryForm from "@/components/EnquiryForm";
import { contact, site, telHref, whatsappHref } from "@/lib/site";

/**
 * Final CTA + enquiry form — DESIGN_BRIEF.md §4.12.
 *
 * §4.12 is explicit that phone and WhatsApp must not be visually subordinate
 * to the form: for this audience they convert better. So they are two
 * full-width buttons at the top of the left column, above the fold of this
 * section on mobile, and the form sits beside them rather than above them.
 */
export default function ContactSection() {
  const { eyebrow, heading, line } = site.contactSection;

  return (
    <section id="contact" className="section-y bg-surface">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-4">
          {/* Direct contact — first in DOM so it is first on mobile too. */}
          <div className="lg:col-span-5">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 text-h2 text-ink">{heading}</h2>
            <p className="mt-3 max-w-[48ch] text-body text-muted">{line}</p>

            <div className="mt-4 grid gap-2">
              <a
                href={telHref(contact.phone.e164)}
                className="btn btn-primary w-full"
              >
                Call {contact.phone.display}
              </a>
              <a
                href={whatsappHref(contact.whatsapp.e164)}
                className="btn btn-secondary w-full"
              >
                WhatsApp {contact.whatsapp.display}
              </a>
            </div>
          </div>

          <div className="lg:col-start-7 lg:col-span-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
