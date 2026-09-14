import { site } from "@/lib/site";

/**
 * Customer Voices — DESIGN_BRIEF.md §4.8.
 *
 * Copy block on cols 1–4, testimonial cards on cols 6–12.
 *
 * DEVIATION: §4.8 asks for the `surface` ground, but Product Range directly
 * above it already landed on `surface`, and §3.6 rule 7 (alternate grounds) is
 * declared binding at the same level as the colour tokens. Two adjacent surface
 * bands read as one long beige run and the page rhythm collapses, so this sits
 * on `bg`. The rule wins over the section note.
 *
 * The quote glyph is typographic rather than a lucide icon: §3.5 lists exactly
 * where icons may appear and testimonials are not among them.
 */
export default function CustomerVoices() {
  const { eyebrow, heading, line, quotes } = site.testimonials;

  return (
    <section id="customers" className="section-y">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-4">
          <div className="lg:col-span-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 text-h2 text-ink">{heading}</h2>
            <p className="mt-3 text-body text-muted">{line}</p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-start-6 lg:col-span-7">
            {quotes.map((q) => (
              <li key={q.id} className="rounded border border-border p-4">
                {/* figcaption is only valid inside figure, hence the wrapper. */}
                <figure className="flex h-full flex-col">
                  {/* Ghosted display glyph — the §4.9 numeral treatment. */}
                  <span aria-hidden="true" className="numeral-ghost text-h2">
                    &ldquo;
                  </span>

                  <blockquote className="mt-1 grow text-body text-ink">
                    {q.quote}
                  </blockquote>

                  <figcaption className="mt-3 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="size-6 shrink-0 rounded-full border border-border bg-surface"
                    />
                    <span className="text-small text-muted">
                      <span className="block font-semibold text-ink">
                        {q.name}
                      </span>
                      {q.business}, {q.city}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
