import {
  ClipboardList,
  MessageSquare,
  PackageCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/lib/site";

/**
 * How It Works — DESIGN_BRIEF.md §4.6.
 *
 * Four steps, horizontal on desktop with a hairline connector, stacked on
 * mobile. The connector is a single 1px rule running across the row at the
 * vertical centre of the icon chips; the chips sit above it on z-10 with their
 * own opaque fill, so the line reads as connecting them rather than crossing
 * them. It is hidden below `lg`, where the steps are a vertical stack and a
 * horizontal rule would mean nothing.
 */
const ICONS: Record<string, LucideIcon> = {
  enquire: MessageSquare,
  sample: ClipboardList,
  confirm: PackageCheck,
  deliver: Truck,
};

export default function HowItWorks() {
  const { eyebrow, heading, steps } = site.process;

  return (
    <section id="how-it-works" className="section-y">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 max-w-[20ch] text-h2 text-ink">{heading}</h2>

        <ol data-stagger className="relative mt-6 grid gap-4 lg:grid-cols-4 lg:gap-3">
          {/* Connector — sits at 24px, the centre of a 48px chip. */}
          <li
            aria-hidden="true"
            className="pointer-events-none absolute top-3 right-0 left-0 hidden h-px bg-border lg:block"
          />

          {steps.map((step, i) => {
            const Icon = ICONS[step.id];
            return (
              <li key={step.id} className="relative">
                <span className="icon-chip relative z-10">
                  <Icon aria-hidden="true" className="size-3" strokeWidth={1.5} />
                </span>

                <p className="numeral-step mt-2 text-h2">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-1 text-h3 text-ink">{step.title}</h3>
                <p className="mt-1 text-body text-muted">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
