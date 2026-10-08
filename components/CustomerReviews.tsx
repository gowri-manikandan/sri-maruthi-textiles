"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star, Quote, Building2, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export interface CustomerReview {
  id: string;
  rating: number;
  quote: string;
  authorRole: string;
  /** Enter company name here */
  company: string;
  /** Enter city / state here */
  city: string;
  productType: string;
}

/**
 * =========================================================================
 * WHOLESALE CLIENT REVIEWS DATA
 * 
 * Verified wholesale trade partners across Kerala & Tamil Nadu.
 * =========================================================================
 */
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "review-1",
    rating: 5,
    quote:
      "We have been sourcing regular wholesale lots of checked towels and bath towels from Sri Maruthi Textiles for our distribution network across Malabar. The border finish, weave density, and lot-to-lot color matching remain uniform with zero rejection rates. Their dispatch from the loom is always dependable, even when order quantities surge during peak season.",
    authorRole: "Wholesale Textile Merchant",
    company: "Sri Krishna Tex",
    city: "Calicut, Kerala",
    productType: "Checked Towels & Bath Towels",
  },
  {
    id: "review-2",
    rating: 5,
    quote:
      "For bulk wholesale supply, consistency in towel weight and colorfastness across bales is critical. Sri Maruthi Textiles delivers high-grade vat-dyed plain towels with superior absorbency and zero dye bleeding. Their transparent wholesale pricing and bale-to-bale uniformity make them our most dependable manufacturing partner.",
    authorRole: "Wholesale Linen Distributor",
    company: "Prabha Textiles",
    city: "Calicut, Kerala",
    productType: "Plain & Dyed Bath Towels",
  },
  {
    id: "review-3",
    rating: 5,
    quote:
      "The absorbency, clean selvedges, and neat handloom feel make their towel collections fast-moving items across our wholesale market network. Sourcing directly from their Tiruppur looms gives us competitive wholesale margins and fast turnaround on repeat bulk orders.",
    authorRole: "Wholesale Textile Merchant",
    company: "Simco Hi-Fashion",
    city: "Coimbatore, Tamil Nadu",
    productType: "Handloom Bath & Utility Towels",
  },
  {
    id: "review-4",
    rating: 5,
    quote:
      "We place regular bulk wholesale consignments for checked and kora handloom towels. From sample approval to final bale packing and prompt transport dispatch to Palakkad, their team ensures strict quality control and direct mill rates every single time.",
    authorRole: "Wholesale Distributor",
    company: "V. Lakshmanan",
    city: "Palakkad, Kerala",
    productType: "Checked & Kora Towels",
  },
];

interface CustomerReviewsProps {
  /** Optional custom section id */
  id?: string;
  /** Background tone variant */
  variant?: "warm-linen" | "light-cream";
  /** Whether to show the bottom link to /products (defaults to false on /products page, true elsewhere) */
  showCollectionLink?: boolean;
}

export default function CustomerReviews({
  id = "reviews",
  variant = "warm-linen",
  showCollectionLink,
}: CustomerReviewsProps) {
  const pathname = usePathname();
  const shouldShowCollectionLink =
    showCollectionLink ?? (pathname !== "/products");
  const [sectionRef, isVisible] = useScrollReveal();
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReduced(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  const bgClasses =
    variant === "warm-linen"
      ? "bg-[#F5F1E8] border-y border-[#E8DFCF]"
      : "bg-[#FAF7F2] border-t border-[#E8DFCF]";

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby="customer-reviews-heading"
      className={`relative py-16 sm:py-20 lg:py-24 text-[#29251F] overflow-hidden ${bgClasses}`}
    >
      {/* Subtle organic textile / paper texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] select-none"
        style={{
          backgroundImage: `radial-gradient(#29251F 0.75px, transparent 0.75px), radial-gradient(#40572D 0.75px, #F5F1E8 0.75px)`,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            SECTION HEADER: Editorial Eyebrow + Serif Heading + Summary Badge
            ========================================================================= */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 sm:pb-12 border-b border-[#E8DFCF] transition-all duration-700 ${
            isVisible || prefersReduced
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="max-w-[720px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="font-sans text-[11px] sm:text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#40572D]">
                WHOLESALE CLIENT TESTIMONIALS
              </span>
              <span className="h-px w-8 sm:w-12 bg-[#40572D]/30" aria-hidden="true" />
            </div>

            {/* Main Title */}
            <h2
              id="customer-reviews-heading"
              className="mt-3 font-display text-[28px] sm:text-[36px] lg:text-[42px] font-normal leading-[1.15] text-[#29251F]"
            >
              Trusted by Leading Wholesale Textile Merchants
            </h2>

            {/* Supporting description */}
            <p className="mt-3 text-[14.5px] sm:text-[16px] leading-relaxed text-[#6B615A]">
              Direct feedback from wholesale distribution partners across Kerala and Tamil Nadu who
              rely on our handloom cotton blend towels for consistent lot quality, durability, and on-time dispatch.
            </p>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="shrink-0 flex flex-col sm:items-end">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white border border-[#E8DFCF] shadow-2xs">
              <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[#C9963B] text-[#C9963B]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-[13px] font-semibold text-[#29251F]">
                5.0 / 5.0
              </span>
              <span className="text-[11.5px] text-[#6B615A]">
                · Wholesale Trade Feedback
              </span>
            </div>
            <span className="mt-1.5 text-[12px] text-[#73685C] flex items-center gap-1">
              <CheckCircle className="size-3.5 text-[#40572D]" />
              Verified wholesale distribution clients
            </span>
          </div>
        </div>

        {/* =========================================================================
            REVIEWS GRID: 4 Structured B2B Cards (2x2 on Desktop / 1-col on Mobile)
            ========================================================================= */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <article
              key={review.id}
              className={`group relative flex flex-col justify-between rounded-lg border border-[#E8DFCF] bg-white p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#40572D]/50 hover:shadow-md ${
                isVisible || prefersReduced
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: prefersReduced ? "0ms" : `${idx * 120}ms`,
              }}
            >
              {/* Top Row: Stars + Product Category Tag */}
              <div>
                <div className="flex items-center justify-between gap-3">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1" aria-label={`${review.rating} stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 sm:size-4 fill-[#C9963B] text-[#C9963B]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Sourced Product Badge */}
                  <span className="text-[11px] font-medium tracking-wide px-2.5 py-0.5 rounded-sm bg-[#FAF7F2] border border-[#E8DFCF] text-[#40572D]">
                    {review.productType}
                  </span>
                </div>

                {/* Decorative Quotation Glyph */}
                <div className="mt-4 mb-2 text-[#40572D]/20">
                  <Quote className="size-8 stroke-[1.25]" />
                </div>

                {/* Review Text */}
                <p className="text-[14px] sm:text-[14.5px] leading-[1.65] text-[#29251F]/90 font-normal">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Card Meta: Author Role + Company Name & City Placeholders */}
              <div className="mt-6 pt-5 border-t border-[#E8DFCF]/70">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Role / Designation */}
                    <div className="text-[12px] uppercase font-semibold tracking-wider text-[#6B615A]">
                      {review.authorRole}
                    </div>

                    {/* Company Name & City (Clearly marked slots) */}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {/* Company Name Slot */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F5F1E8] border border-[#29251F]/20 text-[12.5px] font-semibold text-[#29251F] tracking-tight">
                        <Building2 className="size-3.5 text-[#40572D] shrink-0" />
                        <span>{review.company}</span>
                      </span>

                      {/* City Slot */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F5F1E8] border border-[#29251F]/20 text-[12px] font-medium text-[#6B615A]">
                        <MapPin className="size-3 text-[#A95738] shrink-0" />
                        <span>{review.city}</span>
                      </span>
                    </div>
                  </div>

                  {/* Verified Trade Partner Badge */}
                  <div
                    className="shrink-0 p-1.5 rounded-full bg-[#40572D]/10 text-[#40572D]"
                    title="Verified Wholesale Client"
                  >
                    <CheckCircle className="size-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================================
            BOTTOM STRIP: Assurance Banner + Call to Action
            ========================================================================= */}
        <div className="mt-12 pt-8 border-t border-[#E8DFCF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-[13px] sm:text-[13.5px] text-[#6B615A] flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#40572D]" />
            <span>
              Supplying wholesale handloom towels across Kerala &amp; Tamil Nadu since 2005.
            </span>
          </div>

          {shouldShowCollectionLink && (
            <div className="flex items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#40572D] hover:text-[#26351C] transition-colors"
              >
                <span>Explore full towel collection</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
