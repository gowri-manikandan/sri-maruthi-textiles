import { site } from "@/lib/site";

/**
 * FAQ — DESIGN_BRIEF.md §4.11.
 *
 * Native <details>/<summary>. Keyboard operation, focus handling and the
 * expanded/collapsed state announced to screen readers are all the browser's
 * job this way, which is strictly better than re-implementing them. Single
 * column, capped at 720px, left-aligned.
 */
export default function Faq() {
  const { eyebrow, heading, items } = site.faq;

  return (
    <section id="faq" className="section-y">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-h2 text-ink">{heading}</h2>

        <div data-stagger className="mt-6 max-w-[720px] border-t border-border">
          {items.map((item) => (
            <details key={item.q} className="border-b border-border">
              <summary className="faq-summary text-h3 text-ink">
                {item.q}
              </summary>
              <p className="pb-2 text-body text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
