import { ClipboardCheck, Factory, Truck, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";

/**
 * What Makes Us Different — DESIGN_BRIEF.md §4.4.
 *
 * Exactly three flat cards. §3.6 rule 4 is binding here: hairline border,
 * 4px radius, no shadow, no hover lift. The cards are not interactive, so
 * they get no hover state at all rather than one that implies they are.
 *
 * Copy lives in lib/site.ts; only the icon mapping lives here, since icons
 * are components and site.ts is plain data.
 */
const ICONS: Record<string, LucideIcon> = {
  mill: Factory,
  quality: ClipboardCheck,
  delivery: Truck,
};

export default function Differentiators() {
  const { eyebrow, heading, cards } = site.differentiators;

  return (
    <section id="why-us" className="section-y">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 max-w-[18ch] text-h2 text-ink">{heading}</h2>

        <ul className="mt-6 grid gap-3 lg:grid-cols-3 lg:gap-4">
          {cards.map((card) => {
            const Icon = ICONS[card.id];
            return (
              <li
                key={card.id}
                className="rounded border border-border p-4"
              >
                <span className="icon-chip">
                  <Icon aria-hidden="true" className="size-3" strokeWidth={1.5} />
                </span>
                <h3 className="mt-3 text-h3 text-ink">{card.title}</h3>
                <p className="mt-1 text-body text-muted">{card.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
