import Image from "next/image";
import { ENQUIRY_HREF, images } from "@/lib/site";

/**
 * Premium Hero Section — Sri Maruthi Textiles
 *
 * Designed as an editorial showcase of handloom textile craftsmanship:
 * - High-resolution editorial photography of folded handloom cotton towels with authentic loom context
 * - Cinematic Ken Burns subtle zoom-out (scale 1.08 -> 1) over 9 seconds
 * - Left-to-right editorial scrim ensuring AAA typographic contrast on the left while preserving
 *   the beauty, sunlight, and handloom towels on the right
 * - Line-by-line staggered typography entrance for the Fraunces display serif heading
 * - Refined CTA pairing with directional micro-interaction
 * - Subtle craft badge at bottom right & slow floating scroll indicator
 * - Full prefers-reduced-motion support
 */
export default function Hero() {
  return (
    <section
      id="top"
      data-hero
      className="relative isolate flex min-h-[660px] md:min-h-[650px] lg:min-h-[720px] lg:h-[750px] w-full overflow-hidden items-center justify-between"
    >
      {/* Background Image Layer with Cinematic Ken Burns Ease */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={images.hero ?? "/images/hero-handloom.jpg"}
          alt="Authentic handloom cotton towels stacked in weaving mill workshop"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="animate-hero-image object-cover object-[75%_center] sm:object-[70%_center] lg:object-[right_center] pointer-events-none select-none"
        />
      </div>

      {/* Editorial Left-to-Right Scrim Overlay */}
      <div
        aria-hidden="true"
        className="hero-editorial-scrim absolute inset-0 -z-10"
      />

      {/* Main Content Layout */}
      <div className="container-page relative z-10 w-full pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 flex items-center justify-between">
        <div className="max-w-[650px] flex flex-col items-start">
          {/* Eyebrow with Decorative Line */}
          <div className="hero-anim-eyebrow flex items-center gap-3">
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-[#E8DFCF]">
              HANDLOOM COTTON TEXTILES
            </span>
            <span
              className="h-px w-10 sm:w-16 bg-[#E8DFCF]/40"
              aria-hidden="true"
            />
          </div>

          {/* Main Heading — Line-by-Line Reveal */}
          <h1 className="mt-4 sm:mt-5 text-[#F5F1E8] font-display font-normal text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.65rem] leading-[0.98] sm:leading-[1.0] tracking-[-0.015em]">
            <span className="block hero-anim-line-1">Cotton Towels,</span>
            <span className="block hero-anim-line-2">Made for Business</span>
            <span className="block hero-anim-line-3">That Lasts</span>
          </h1>

          {/* Description */}
          <p className="hero-anim-desc mt-5 sm:mt-6 max-w-[500px] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-[#F5F1E8]/90 font-normal">
            High-quality handloom cotton towels, crafted with care and consistency for hotels, resorts, retailers and businesses worldwide.
          </p>

          {/* Action Buttons */}
          <div className="hero-anim-buttons mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
              href={ENQUIRY_HREF}
              className="group inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-6 min-w-[165px] rounded-md bg-[#40572D] hover:bg-[#4d6936] text-[#F5F1E8] text-[15px] font-medium tracking-wide transition-all duration-250 shadow-sm border border-[#40572D]"
            >
              <span>Request Enquiry</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-250 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center h-[48px] sm:h-[50px] px-6 min-w-[145px] rounded-md border border-[#F5F1E8]/50 hover:border-[#F5F1E8] hover:bg-[#F5F1E8]/15 text-[#F5F1E8] text-[15px] font-medium tracking-wide transition-all duration-300"
            >
              View Products
            </a>
          </div>
        </div>

        {/* Subtle Bottom-Right Detail Label */}
        <div
          aria-hidden="true"
          className="hero-anim-bottom-label hidden xl:flex flex-col items-end gap-1.5 self-end pb-2 text-right text-[10.5px] tracking-[0.22em] font-medium uppercase text-[#E8DFCF]/60 pointer-events-none select-none"
        >
          <span>Pure Cotton</span>
          <span className="w-8 h-px bg-[#E8DFCF]/25" />
          <span>Handloom Craft</span>
          <span className="w-8 h-px bg-[#E8DFCF]/25" />
          <span>Made for Business</span>
        </div>
      </div>

      {/* Elegant Bottom Scroll Indicator */}
      <div
        aria-hidden="true"
        className="hero-anim-scroll-indicator absolute bottom-4 sm:bottom-6 inset-x-0 flex flex-col items-center justify-center gap-1.5 text-center pointer-events-none z-10"
      >
        <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-[#E8DFCF]/75 font-sans">
          Scroll to Explore
        </span>
        <span className="hero-scroll-arrow text-[14px] text-[#E8DFCF]/80 leading-none">
          ↓
        </span>
      </div>
    </section>
  );
}
