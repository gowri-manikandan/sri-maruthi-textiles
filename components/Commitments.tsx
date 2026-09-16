import { site } from "@/lib/site";

/**
 * Commitments — occupies the slot DESIGN_BRIEF.md §4.8 reserved for Customer
 * Voices.
 *
 * DEVIATION, and why. §4.8 specifies testimonials, and the brief is explicit
 * that no quote, name, business or city may be invented. No real permissioned
 * quotes exist yet, and writing plausible ones would put false endorsements in
 * front of prospective buyers. So the slot keeps its position, its ground and
 * its layout, but states commitments the company can stand behind instead of
 * praise nobody gave.
 *
 * Every line is a fact the client supplied. Nothing here is written to
 * impress; the specifics do that on their own.
 *
 * When real quotes exist, swap this back — a named wholesaler vouching for the
 * mill beats any self-description, which is exactly why §4.8 asked for it.
 */
export default function Commitments() {
  const { eyebrow, heading, line, items } = site.commitments;

  return (
    <section id="commitments" className="section-y">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-4">
          <div className="lg:col-span-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 text-h2 text-ink">{heading}</h2>
            <p className="mt-3 text-body text-muted">{line}</p>
          </div>

          <ul data-stagger className="grid gap-3 sm:grid-cols-2 lg:col-start-6 lg:col-span-7">
            {items.map((item) => (
              <li key={item.id} className="rounded border border-border p-4">
                <h3 className="text-h3 text-ink">{item.title}</h3>
                <p className="mt-1 text-body text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
