import { ImageIcon } from "lucide-react";
import { ENQUIRY_HREF, site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="section-y">
      <div className="container-page">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-3">
          {/* Copy column */}
          <div className="lg:col-span-6">
            <p className="text-small font-semibold tracking-wide text-accent">
              {site.hero.label}
            </p>

            <h1 className="mt-2 text-display text-ink">{site.hero.headline}</h1>

            <p className="mt-3 max-w-prose text-body text-muted">
              {site.hero.subtext}
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a href={ENQUIRY_HREF} className="btn btn-primary">
                Enquire Now
              </a>
              <a href="#products" className="btn btn-secondary">
                View Products
              </a>
            </div>
          </div>

          {/* Visual column — deliberately an empty marked placeholder.
              Phase 14 replaces this with a real next/image of towel stock or
              the production floor. No stock photo stands in for real work. */}
          <div className="lg:col-start-8 lg:col-span-5">
            <div className="flex aspect-4/3 flex-col items-center justify-center gap-1 rounded border border-dashed border-muted bg-surface p-3 text-center lg:aspect-4/5">
              <ImageIcon aria-hidden="true" className="size-4 text-muted" />
              <p className="text-body font-semibold text-ink">
                Hero image placeholder
              </p>
              <p className="max-w-prose text-small text-muted">
                Replace with a real photo of your towel stock or production
                floor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
