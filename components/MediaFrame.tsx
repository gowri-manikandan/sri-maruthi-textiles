import Image from "next/image";

/**
 * Every image slot on the page — DESIGN_BRIEF.md §7, §10, Phase 14.
 *
 * One component with two states. Given a `src` it renders `next/image`; given
 * none it renders the marked placeholder that has stood in until now. That
 * makes the Phase 14 image swap a data edit in `lib/site.ts` rather than a
 * rewrite of four components, and it means the §7 performance rules —
 * `priority` on the hero, lazy everywhere else, a real `sizes` string on each
 * slot — are settled once, here, instead of being re-argued per image.
 *
 * `alt` is required rather than optional so nobody can add an image without
 * deciding what it says. Pass `alt=""` deliberately for decorative images:
 * the hero photograph is decorative because the headline already carries the
 * meaning, so announcing it again would just be noise (§6).
 */
type MediaFrameProps = {
  /** Path under /public, e.g. "/images/hero.jpg". Undefined renders the placeholder. */
  src?: string;
  /** Required. Empty string means deliberately decorative. */
  alt: string;
  /** Shown in the placeholder: what photograph belongs here, and at what ratio. */
  label: string;
  /** Ratio and sizing come from the caller — this component is layout-agnostic. */
  className?: string;
  /** Real `sizes` string; wrong values here are a silent bandwidth cost on mobile. */
  sizes: string;
  /** Only the hero sets this. Everything else stays lazy (§7). */
  priority?: boolean;
  /** Placeholder styling for dark grounds, e.g. inside the hero. */
  tone?: "light" | "dark";
};

export default function MediaFrame({
  src,
  alt,
  label,
  className = "",
  sizes,
  priority = false,
  tone = "light",
}: MediaFrameProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const dark = tone === "dark";

  return (
    <div
      className={`flex items-center justify-center border border-dashed p-3 text-center ${
        dark ? "border-bg/25 bg-ink-deep" : "border-border bg-bg"
      } ${className}`}
    >
      <p className={`max-w-[34ch] text-small ${dark ? "text-bg/55" : "text-muted"}`}>
        {label}
      </p>
    </div>
  );
}
