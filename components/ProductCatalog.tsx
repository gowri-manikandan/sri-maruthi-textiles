"use client";

import { useId, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  X,
  SlidersHorizontal,
  Check,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Truck,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  Product,
  PRODUCT_CATEGORIES,
  PRODUCTS_CATALOG,
} from "@/lib/products-data";
import { contact, whatsappHref } from "@/lib/site";

type GsmFilter = "all" | "light" | "medium" | "heavy";

/**
 * Maps color names from product data into accurate, tactile textile swatches
 */
function getSwatchColor(colorName: string): string {
  const lower = colorName.toLowerCase().trim();

  if (
    lower.includes("pure optical white") ||
    lower.includes("natural white") ||
    lower.includes("white")
  ) {
    if (lower.includes("navy")) return "linear-gradient(135deg, #1F2E40 50%, #FFFFFF 50%)";
    if (lower.includes("golden") || lower.includes("ochre"))
      return "linear-gradient(135deg, #C49746 50%, #FFFFFF 50%)";
    if (lower.includes("emerald")) return "linear-gradient(135deg, #2D5A3D 50%, #FFFFFF 50%)";
    return "#FFFFFF";
  }
  if (lower.includes("ivory") && lower.includes("olive")) {
    return "linear-gradient(135deg, #26351C 50%, #F5F1E8 50%)";
  }
  if (lower.includes("terracotta") && (lower.includes("cream") || lower.includes("natural"))) {
    return "linear-gradient(135deg, #A95738 50%, #F5F1E8 50%)";
  }
  if (lower.includes("warm mustard") && lower.includes("khaki")) {
    return "linear-gradient(135deg, #C49746 50%, #A89B7E 50%)";
  }
  if (lower.includes("warm ivory")) return "#F5F1E8";
  if (
    lower.includes("natural beige") ||
    lower.includes("almond beige") ||
    lower.includes("desert sand") ||
    lower.includes("natural sand")
  )
    return "#E8DFCF";
  if (
    lower.includes("deep olive") ||
    lower.includes("forest olive") ||
    lower.includes("deep forest") ||
    lower.includes("olive green")
  )
    return "#26351C";
  if (lower.includes("sage olive") || lower.includes("sage green")) return "#7A8B6E";
  if (lower.includes("terracotta") || lower.includes("brick red")) return "#A95738";
  if (lower.includes("azure blue") || lower.includes("sky blue")) return "#5B88B2";
  if (lower.includes("storm blue")) return "#4E6B82";
  if (lower.includes("deep navy") || lower.includes("navy blue")) return "#1B2A3D";
  if (
    lower.includes("golden ochre") ||
    lower.includes("brass ochre") ||
    lower.includes("warm mustard")
  )
    return "#C9963B";
  if (lower.includes("stone grey") || lower.includes("heather taupe")) return "#8A8379";
  if (lower.includes("dark charcoal")) return "#3A3835";
  if (lower.includes("chestnut brown")) return "#5C3A21";
  if (lower.includes("mint")) return "#A8C3B1";
  if (lower.includes("kora") || lower.includes("oatmeal")) return "#ECE6D8";
  if (lower.includes("pantone") || lower.includes("lab-dipped")) {
    return "linear-gradient(135deg, #A95738 0%, #40572D 50%, #C9963B 100%)";
  }

  return "#D5CDC0";
}

function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function formatBlendForCard(blend: string): string {
  if (!blend) return "As per need";
  const lower = blend.toLowerCase();
  if (lower.includes("custom") || lower.includes("client ratio")) return "Custom Blend";
  if (blend.includes("80% Cotton") || blend.includes("80% Ring-Spun")) return "80% Cotton\n20% Poly";
  if (blend.includes("85%")) return "85% Cotton\n15% Poly";
  if (blend.includes("75%")) return "75% Cotton\n25% Poly";
  if (blend.includes("90%")) return "90% Cotton\n10% Poly";
  if (blend.includes("100%")) return "100% Cotton";
  return blend.replace(" Blend", "").replace("Polyester", "Poly");
}

function formatWeaveForCard(weave: string): string {
  if (!weave) return "As per need";
  const lower = weave.toLowerCase();
  if (lower.includes("custom jacquard")) return "Jacquard Weave";
  if (lower.includes("client specification") || lower.includes("custom")) return "Custom Weave";
  if (lower.includes("velour")) return "Velour Terry";
  if (lower.includes("twill basket")) return "Twill Basket";
  if (lower.includes("herringbone")) return "Herringbone";
  if (lower.includes("plaid")) return "Plaid Check";
  if (lower.includes("gingham")) return "Gingham Check";
  if (lower.includes("handloom check")) return "Handloom Check";
  if (lower.includes("waffle") || lower.includes("honeycomb")) return "Waffle Weave";
  if (lower.includes("stripe")) return "Stripe Terry";
  if (lower.includes("ribbed")) return "Terry Weave";
  if (lower.includes("high pile terry") || lower.includes("dual-sided")) return "Pile Terry";
  if (lower.includes("ring-spun loop") || lower.includes("open-loop") || lower.includes("looped terry")) return "Loop Terry";
  if (lower.includes("ring-spun white")) return "Ring-Spun";
  if (lower.includes("terry")) return "Terry Weave";
  return weave.split(" ").slice(0, 2).join(" ");
}

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [gsmFilter, setGsmFilter] = useState<GsmFilter>("all");

  // Selected product for modals
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [specProduct, setSpecProduct] = useState<Product | null>(null);

  // Sync category param from URL
  useEffect(() => {
    if (categoryParam) {
      const match = PRODUCT_CATEGORIES.find((c) => c.id === categoryParam);
      if (match) {
        setActiveCategory(match.id);
      }
    }
  }, [categoryParam]);

  // Handle escape key to close modals
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setEnquiryProduct(null);
        setSpecProduct(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // GSM filter
      if (gsmFilter === "light" && item.gsmValue >= 350) return false;
      if (
        gsmFilter === "medium" &&
        (item.gsmValue < 350 || item.gsmValue > 440)
      )
        return false;
      if (gsmFilter === "heavy" && item.gsmValue <= 440) return false;

      // Search query (name, SKU/code, description, blend, weave, colors)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const searchableText = `${item.name} ${item.code} ${item.shortDescription} ${item.fullDescription} ${item.blend} ${item.weaveType} ${item.colors.join(" ")}`.toLowerCase();
        return searchableText.includes(q);
      }

      return true;
    });
  }, [activeCategory, gsmFilter, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PRODUCTS_CATALOG.length,
    };
    PRODUCT_CATEGORIES.forEach((cat) => {
      if (cat.id !== "all") {
        counts[cat.id] = PRODUCTS_CATALOG.filter(
          (p) => p.category === cat.id
        ).length;
      }
    });
    return counts;
  }, []);

  const clearAllFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setGsmFilter("all");
  };

  const hasActiveFilters =
    activeCategory !== "all" || searchQuery !== "" || gsmFilter !== "all";

  return (
    <div className="relative">
      {/* =========================================================================
          3. COMPACT PRODUCT FILTER AREA
          Sticky bar synced smoothly with main navbar scroll behavior
          ========================================================================= */}
      <section className="sticky-catalogue-filter sticky z-30 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#E8DFCF] shadow-xs">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
            {/* Search field: "Search products by name, SKU..." */}
            <div className="relative w-full md:w-[320px] lg:w-[360px] shrink-0">
              <label htmlFor="product-search" className="sr-only">
                Search products by name, SKU
              </label>
              <Search
                aria-hidden="true"
                className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#6B615A]"
              />
              <input
                id="product-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, SKU..."
                className="w-full h-8.5 sm:h-9 pl-8.5 pr-8 rounded-sm border border-[#E8DFCF] bg-white text-[13px] text-[#29251F] placeholder:text-[#6B615A]/70 focus:outline-none focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#6B615A] hover:text-[#29251F]"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Quick GSM Weight Toggle */}
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5 md:pb-0 scrollbar-none shrink-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B615A] whitespace-nowrap flex items-center gap-1 pl-0.5">
                <SlidersHorizontal className="size-3 text-[#40572D]" />
                GSM:
              </span>
              {(
                [
                  { id: "all", label: "All" },
                  { id: "light", label: "<350" },
                  { id: "medium", label: "350–440" },
                  { id: "heavy", label: "450+" },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setGsmFilter(f.id)}
                  className={`text-[11px] font-medium px-2 py-0.5 rounded-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    gsmFilter === f.id
                      ? "bg-[#26351C] text-[#F5F1E8]"
                      : "bg-[#E8DFCF]/60 text-[#29251F] hover:bg-[#E8DFCF]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills: Compact, Ivory/Beige with Deep Olive Active State */}
          <div className="mt-2 pt-1.5 border-t border-[#E8DFCF]/60 flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
            {PRODUCT_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] ?? 0;
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[12px] sm:text-[12.5px] font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#26351C] text-[#F5F1E8] shadow-xs"
                      : "bg-[#E8DFCF]/50 text-[#29251F] border border-[#E8DFCF]/70 hover:border-[#40572D]/50 hover:bg-[#E8DFCF]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                      isSelected
                        ? "bg-white/20 text-[#F5F1E8]"
                        : "bg-black/5 text-[#6B615A]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ACTIVE FILTERS & RESULTS BAR
          ========================================================================= */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[13px] text-[#6B615A]">
          <div>
            Showing{" "}
            <span className="font-semibold text-[#29251F]">
              {filteredProducts.length}
            </span>{" "}
            products
            {activeCategory !== "all" && (
              <span>
                {" "}
                in{" "}
                <span className="font-semibold text-[#40572D]">
                  {
                    PRODUCT_CATEGORIES.find((c) => c.id === activeCategory)
                      ?.label
                  }
                </span>
              </span>
            )}
            {searchQuery && (
              <span>
                {" "}
                matching &ldquo;
                <span className="font-semibold text-[#29251F]">
                  {searchQuery}
                </span>
                &rdquo;
              </span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#A95738] hover:text-[#883e24] underline underline-offset-2 transition-colors cursor-pointer"
            >
              <X className="size-3.5" />
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* =========================================================================
          4 & 5. PRODUCT CATALOGUE GRID
          Editorial Cards: Image → Category/SKU → Name → Description → Specifications → Colours → View Details
          ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {filteredProducts.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[#E8DFCF] bg-[#FAF7F2] p-12 text-center my-6">
            <Layers className="size-10 text-[#6B615A]/60 mx-auto mb-3" />
            <h3 className="font-display text-[22px] text-[#29251F]">
              No products found
            </h3>
            <p className="mt-2 text-[15px] text-[#6B615A] max-w-[460px] mx-auto">
              We couldn&apos;t find any products matching your specific
              criteria. Try broadening your search or resetting active filters.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#40572D] text-white text-[14px] font-medium hover:bg-[#344724] transition-colors cursor-pointer"
            >
              Show all products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5.5">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="@container group flex flex-col h-full rounded-[4px] border border-[#E8DFCF] bg-white transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-[#40572D]/40 hover:shadow-sm animate-card-fade overflow-hidden motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
              >
                {/* 1. PRODUCT IMAGE (Consistent aspect ratio ~4:3, subtle border, editorial photography, badges) */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSpecProduct(product)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSpecProduct(product);
                    }
                  }}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8DFCF] border-b border-[#E8DFCF] cursor-pointer"
                  aria-label={`View full details for ${product.name}`}
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1536px) 33vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={85}
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
                  />

                  {/* Top Badge (Only displayed when supported by product data) */}
                  {product.badge && (
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <span className="font-sans text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-[3px] bg-[#A95738] text-white shadow-2xs">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* 2-7. PRODUCT INFORMATION, SPECIFICATIONS, SWATCHES & ACTIONS */}
                <div className="p-3 sm:p-3.5 flex flex-col flex-1">
                  {/* 2. CATEGORY / SKU (Small uppercase typography with letter spacing) */}
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#40572D]">
                    {product.categoryLabel.toUpperCase()} · SKU: {product.code}
                  </div>

                  {/* 3. PRODUCT NAME (Elegant serif typography) */}
                  <h3 className="mt-1.5 font-display text-[20px] sm:text-[22px] font-normal leading-[1.2] text-[#29251F]">
                    <button
                      type="button"
                      onClick={() => setSpecProduct(product)}
                      className="text-left hover:text-[#40572D] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#40572D]"
                    >
                      {product.name}
                    </button>
                  </h3>

                  {/* 4. SHORT DESCRIPTION (2-3 lines for visual alignment) */}
                  <p className="mt-1.5 text-[12.5px] sm:text-[13px] leading-[1.5] text-[#6B615A] line-clamp-2 min-h-[36px]">
                    {product.shortDescription}
                  </p>

                  {/* 5. SPECIFICATION PANEL (Compact 4-column panel, 2-column on mobile) */}
                  <div className="mt-3 rounded-[3px] border border-[#E8DFCF] bg-[#FAF7F2] overflow-hidden">
                    <div className="grid grid-cols-2 sm:grid-cols-4 text-left">
                      <div className="p-1.5 sm:p-2 flex flex-col justify-start border-r border-b sm:border-b-0 border-[#E8DFCF]">
                        <span className="text-[8.5px] sm:text-[9px] uppercase font-semibold text-[#73685C] tracking-normal leading-tight block">
                          Fabric GSM
                        </span>
                        <span className="mt-1 text-[10.5px] sm:text-[11px] font-semibold text-[#29251F] leading-tight">
                          {product.gsm || "As per need"}
                        </span>
                      </div>

                      <div className="p-1.5 sm:p-2 flex flex-col justify-start sm:border-r border-b sm:border-b-0 border-[#E8DFCF]">
                        <span className="text-[8.5px] sm:text-[9px] uppercase font-semibold text-[#73685C] tracking-normal leading-tight block">
                          Dimensions
                        </span>
                        <span className="mt-1 text-[10.5px] sm:text-[11px] font-semibold text-[#29251F] leading-tight">
                          {product.dimensions || "As per need"}
                        </span>
                      </div>

                      <div className="p-1.5 sm:p-2 flex flex-col justify-start border-r border-[#E8DFCF]">
                        <span className="text-[8.5px] sm:text-[9px] uppercase font-semibold text-[#73685C] tracking-normal leading-tight block">
                          Yarn Blend
                        </span>
                        <span className="mt-1 text-[10.5px] sm:text-[11px] font-semibold text-[#29251F] leading-tight whitespace-pre-line">
                          {formatBlendForCard(product.blend)}
                        </span>
                      </div>

                      <div className="p-1.5 sm:p-2 flex flex-col justify-start">
                        <span className="text-[8.5px] sm:text-[9px] uppercase font-semibold text-[#73685C] tracking-normal leading-tight block">
                          Weave Type
                        </span>
                        <span className="mt-1 text-[10.5px] sm:text-[11px] font-semibold text-[#29251F] leading-tight">
                          {formatWeaveForCard(product.weaveType)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 6. COLOUR SWATCHES (Circular swatches below specification panel) */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="mt-2.5 sm:mt-3 flex items-center gap-1.5 flex-wrap" aria-label="Available Colours">
                      {product.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="size-4 sm:size-[17px] rounded-full border border-black/15 shadow-2xs shrink-0 cursor-help transition-transform hover:scale-110 motion-reduce:hover:scale-100"
                          style={{ background: getSwatchColor(color) }}
                          title={color}
                          aria-label={color}
                        />
                      ))}
                    </div>
                  )}

                  {/* 7. BOTTOM ACTION BUTTONS (Aligned to bottom of card via margin-top: auto) */}
                  <div className="mt-auto pt-3 border-t border-[#E8DFCF] flex flex-col min-[340px]:flex-row @[290px]:flex-row items-stretch gap-1.5">
                    {/* BUTTON 1: WhatsApp */}
                    <a
                      href={whatsappHref(
                        contact.whatsapp.e164,
                        `Hi, I am interested in ${product.name} (SKU: ${product.code}). I would like to know more about this product.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/wa flex-[1] min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-[3px] bg-white hover:bg-[#FAF7F2] border border-[#E8DFCF] hover:border-[#40572D]/60 text-[#29251F] text-[10.5px] sm:text-[11px] font-medium tracking-tight min-h-[42px] sm:min-h-[44px] transition-all duration-200 shadow-2xs text-center"
                      aria-label={`Chat on WhatsApp about ${product.name}`}
                    >
                      <WhatsAppIcon className="size-3.5 sm:size-4 shrink-0 fill-[#40572D] transition-transform duration-200 group-hover/wa:scale-110 motion-reduce:group-hover/wa:scale-100" />
                      <span className="whitespace-nowrap">Chat on WhatsApp</span>
                    </a>

                    {/* BUTTON 2: Request Sample & Pricing */}
                    <button
                      type="button"
                      onClick={() => setEnquiryProduct(product)}
                      className="group/sample flex-[1.3] min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-2.5 rounded-[3px] bg-[#40572D] hover:bg-[#344724] text-[#F5F1E8] text-[10.5px] sm:text-[11px] font-medium tracking-tight min-h-[42px] sm:min-h-[44px] transition-all duration-200 shadow-xs cursor-pointer text-center"
                      aria-label={`Request sample and pricing for ${product.name}`}
                    >
                      <span className="whitespace-nowrap">Request Sample &amp; Pricing</span>
                      <ArrowRight className="size-3 sm:size-3.5 shrink-0 transition-transform duration-200 group-hover/sample:translate-x-[2px] motion-reduce:group-hover/sample:translate-x-0" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          WHOLESALE COMMITMENTS STRIP
          ========================================================================= */}
      <section className="bg-[#FAF7F2] border-y border-[#E8DFCF] py-12">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-md bg-[#40572D]/10 text-[#40572D] shrink-0">
                <Truck className="size-5" />
              </div>
              <div>
                <h4 className="font-sans text-[15px] font-semibold text-[#29251F]">
                  1 to 2 Day Dispatch
                </h4>
                <p className="mt-1 text-[13.5px] text-[#6B615A] leading-relaxed">
                  Committed dispatch date confirmed at the time of order across
                  Kerala &amp; Tamil Nadu.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-md bg-[#40572D]/10 text-[#40572D] shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h4 className="font-sans text-[15px] font-semibold text-[#29251F]">
                  10-Piece MOQ Trial
                </h4>
                <p className="mt-1 text-[13.5px] text-[#6B615A] leading-relaxed">
                  Start with a trial order from just 10 pieces to inspect weight,
                  pile, and finish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-md bg-[#40572D]/10 text-[#40572D] shrink-0">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h4 className="font-sans text-[15px] font-semibold text-[#29251F]">
                  Direct Mill Pricing
                </h4>
                <p className="mt-1 text-[13.5px] text-[#6B615A] leading-relaxed">
                  Buy straight from our Pallagoundanpalayam looms with no
                  middleman agency margin.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-md bg-[#40572D]/10 text-[#40572D] shrink-0">
                <Layers className="size-5" />
              </div>
              <div>
                <h4 className="font-sans text-[15px] font-semibold text-[#29251F]">
                  Custom Weaves (1,000+ pcs)
                </h4>
                <p className="mt-1 text-[13.5px] text-[#6B615A] leading-relaxed">
                  Custom GSM, dimensions, logo borders and yarn blends tailored
                  to your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PRODUCT DETAILS MODAL
          Opens on "View Details →" with Product image, specs, swatches & actions
          ========================================================================= */}
      {specProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="spec-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-[820px] max-h-[92vh] overflow-y-auto rounded-lg bg-white border border-[#E8DFCF] p-5 sm:p-8 shadow-2xl animate-card-fade">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSpecProduct(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-md text-[#6B615A] hover:text-[#29251F] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
              aria-label="Close specifications"
            >
              <X className="size-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Product Image & Badge */}
              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="relative aspect-[4/3] md:aspect-square w-full rounded-md overflow-hidden bg-[#E8DFCF] border border-[#E8DFCF]">
                  <Image
                    src={specProduct.image}
                    alt={specProduct.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 350px, 100vw"
                  />
                  {specProduct.badge && (
                    <span className="absolute top-3 left-3 font-sans text-[10.5px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm bg-[#A95738] text-white shadow-xs">
                      {specProduct.badge}
                    </span>
                  )}
                </div>

                {/* Colour Swatches in modal */}
                {specProduct.colors && specProduct.colors.length > 0 && (
                  <div className="p-3 bg-[#FAF7F2] rounded-md border border-[#E8DFCF]">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B615A]">
                      Available Colours ({specProduct.colors.length})
                    </span>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {specProduct.colors.map((color, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-sm bg-white border border-[#E8DFCF] text-[11.5px] text-[#29251F]"
                        >
                          <span
                            className="size-3 rounded-full border border-black/15 shadow-2xs"
                            style={{ background: getSwatchColor(color) }}
                          />
                          <span>{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Product Information & Technical Specs */}
              <div className="md:col-span-7 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-wider text-[#40572D]">
                  <span>{specProduct.categoryLabel}</span>
                  <span>•</span>
                  <span>SKU: {specProduct.code}</span>
                </div>

                <h3
                  id="spec-modal-title"
                  className="mt-1 font-display text-[26px] sm:text-[30px] font-normal text-[#29251F] leading-tight"
                >
                  {specProduct.name}
                </h3>

                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#6B615A]">
                  {specProduct.fullDescription || specProduct.shortDescription}
                </p>

                {/* Specification Table */}
                <div className="mt-5 border border-[#E8DFCF] rounded-md overflow-hidden text-[13.5px]">
                  <div className="grid grid-cols-2 divide-x divide-[#E8DFCF] border-b border-[#E8DFCF] bg-[#FAF7F2]">
                    <div className="p-2.5 sm:p-3 font-medium text-[#6B615A]">
                      Fabric Grammage (GSM)
                    </div>
                    <div className="p-2.5 sm:p-3 font-semibold text-[#29251F]">
                      {specProduct.gsm || "As per requirement"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-[#E8DFCF] border-b border-[#E8DFCF]">
                    <div className="p-2.5 sm:p-3 font-medium text-[#6B615A]">Dimensions</div>
                    <div className="p-2.5 sm:p-3 font-semibold text-[#29251F]">
                      {specProduct.dimensions || "As per requirement"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-[#E8DFCF] border-b border-[#E8DFCF] bg-[#FAF7F2]">
                    <div className="p-2.5 sm:p-3 font-medium text-[#6B615A]">Yarn Blend</div>
                    <div className="p-2.5 sm:p-3 font-semibold text-[#29251F]">
                      {specProduct.blend || "As per requirement"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-[#E8DFCF] border-b border-[#E8DFCF]">
                    <div className="p-2.5 sm:p-3 font-medium text-[#6B615A]">Weave Type</div>
                    <div className="p-2.5 sm:p-3 font-semibold text-[#29251F]">
                      {specProduct.weaveType || "As per requirement"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-[#E8DFCF] border-b border-[#E8DFCF] bg-[#FAF7F2]">
                    <div className="p-2.5 sm:p-3 font-medium text-[#6B615A]">
                      Minimum Order (MOQ)
                    </div>
                    <div className="p-2.5 sm:p-3 font-semibold text-[#40572D]">
                      {specProduct.moq || "As per requirement"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-[#E8DFCF]">
                    <div className="p-2.5 sm:p-3 font-medium text-[#6B615A]">
                      Standard Dispatch
                    </div>
                    <div className="p-2.5 sm:p-3 font-semibold text-[#29251F]">
                      {specProduct.dispatchTime || "1 to 2 days"}
                    </div>
                  </div>
                </div>

                {/* Textile & Performance Features */}
                {specProduct.features && specProduct.features.length > 0 && (
                  <div className="mt-5">
                    <h4 className="text-[12.5px] font-semibold uppercase tracking-wider text-[#29251F]">
                      Textile &amp; Performance Features
                    </h4>
                    <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#6B615A]">
                      {specProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="size-4 text-[#40572D] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-6 pt-5 border-t border-[#E8DFCF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={whatsappHref(
                  contact.whatsapp.e164,
                  `Hello Sri Maruthi Textiles, I am reviewing ${specProduct.name} (${specProduct.code}) on your catalogue and would like to request wholesale rates.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#E8DFCF] hover:border-[#40572D] hover:bg-[#FAF7F2] text-[#29251F] text-[13.5px] font-medium transition-colors"
              >
                <MessageCircle className="size-4 text-[#40572D]" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex items-center gap-2.5 justify-end">
                <button
                  type="button"
                  onClick={() => setSpecProduct(null)}
                  className="px-4 py-2.5 rounded-md border border-[#E8DFCF] text-[#29251F] text-[13.5px] font-medium hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const target = specProduct;
                    setSpecProduct(null);
                    setEnquiryProduct(target);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#40572D] hover:bg-[#344724] text-white text-[13.5px] font-medium transition-colors cursor-pointer shadow-xs"
                >
                  <span>Request Sample &amp; Pricing</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PRODUCT QUICK ENQUIRY MODAL (Connected to /api/enquiry)
          ========================================================================= */}
      {enquiryProduct && (
        <ProductEnquiryModal
          product={enquiryProduct}
          onClose={() => setEnquiryProduct(null)}
        />
      )}
    </div>
  );
}

/**
 * Dedicated Product Enquiry Modal connected directly to /api/enquiry
 */
function ProductEnquiryModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const formId = useId();
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "",
    quantity: "50 pieces",
    requirement: `${product.name} (${product.code})`,
    message: `Hi, I would like to request wholesale pricing and sample details for ${product.name} (GSM: ${product.gsm}, Size: ${product.dimensions}).`,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your contact phone or WhatsApp number.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          result.error ??
            "Something went wrong. Please connect with us directly via phone or WhatsApp."
        );
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Could not submit enquiry right now. Please call or WhatsApp us directly."
      );
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-[560px] max-h-[92vh] overflow-y-auto rounded-lg bg-white border border-[#E8DFCF] p-6 sm:p-8 shadow-2xl animate-card-fade">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-md text-[#6B615A] hover:text-[#29251F] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          aria-label="Close enquiry form"
        >
          <X className="size-5" />
        </button>

        {status === "sent" ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#40572D]/10 text-[#40572D] mb-4">
              <Check className="size-7" />
            </div>
            <h3 className="font-display text-[26px] text-[#29251F]">
              Enquiry Received
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#6B615A] max-w-[420px] mx-auto">
              Thank you, <strong className="text-[#29251F]">{formData.name}</strong>.
              We have received your enquiry for{" "}
              <strong className="text-[#29251F]">{product.name}</strong> and
              will respond with pricing and sample availability shortly.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappHref(
                  contact.whatsapp.e164,
                  `Hello, I just sent an enquiry on your website for ${product.name} (${product.code}). Following up here!`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#40572D] text-white text-[14px] font-medium hover:bg-[#344724] transition-colors"
              >
                <MessageCircle className="size-4" />
                Follow up on WhatsApp
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-md border border-[#E8DFCF] text-[#29251F] text-[14px] font-medium hover:bg-[#FAF7F2] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header info */}
            <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-wider text-[#40572D]">
              <span>Direct Mill Wholesale Enquiry</span>
            </div>

            <h3
              id="enquiry-modal-title"
              className="mt-1 font-display text-[24px] sm:text-[27px] font-normal text-[#29251F]"
            >
              Enquire: {product.name}
            </h3>

            {/* Selected Product Summary Box */}
            <div className="mt-3.5 p-3 rounded-md bg-[#FAF7F2] border border-[#E8DFCF] flex items-center gap-3">
              <div className="relative size-12 rounded overflow-hidden shrink-0 border border-[#E8DFCF]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-mono text-[11px] text-[#40572D]">
                  {product.code}
                </span>
                <span className="block text-[13.5px] font-medium text-[#29251F] truncate">
                  {product.gsm} · {product.dimensions}
                </span>
                <span className="block text-[12px] text-[#6B615A] truncate">
                  MOQ: {product.moq}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              {errorMessage && (
                <div
                  role="alert"
                  className="p-3 rounded-md bg-red-50 border border-red-200 text-red-800 text-[13.5px]"
                >
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor={`${formId}-name`}
                    className="block text-[12.5px] font-medium text-[#29251F] mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Rajesh Kumar"
                    className="w-full h-10 px-3 rounded-md border border-[#E8DFCF] bg-white text-[14px] text-[#29251F] focus:outline-none focus:border-[#40572D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-business`}
                    className="block text-[12.5px] font-medium text-[#29251F] mb-1"
                  >
                    Business / Hotel Name
                  </label>
                  <input
                    id={`${formId}-business`}
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="e.g., Surya Residency / Retail"
                    className="w-full h-10 px-3 rounded-md border border-[#E8DFCF] bg-white text-[14px] text-[#29251F] focus:outline-none focus:border-[#40572D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor={`${formId}-phone`}
                    className="block text-[12.5px] font-medium text-[#29251F] mb-1"
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., 98421 54321"
                    className="w-full h-10 px-3 rounded-md border border-[#E8DFCF] bg-white text-[14px] text-[#29251F] focus:outline-none focus:border-[#40572D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="block text-[12.5px] font-medium text-[#29251F] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., contact@business.com"
                    className="w-full h-10 px-3 rounded-md border border-[#E8DFCF] bg-white text-[14px] text-[#29251F] focus:outline-none focus:border-[#40572D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor={`${formId}-city`}
                    className="block text-[12.5px] font-medium text-[#29251F] mb-1"
                  >
                    Destination City / State
                  </label>
                  <input
                    id={`${formId}-city`}
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g., Kochi / Coimbatore"
                    className="w-full h-10 px-3 rounded-md border border-[#E8DFCF] bg-white text-[14px] text-[#29251F] focus:outline-none focus:border-[#40572D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-quantity`}
                    className="block text-[12.5px] font-medium text-[#29251F] mb-1"
                  >
                    Expected Order Quantity
                  </label>
                  <select
                    id={`${formId}-quantity`}
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-[#E8DFCF] bg-white text-[14px] text-[#29251F] focus:outline-none focus:border-[#40572D]"
                  >
                    <option value="10 to 25 pieces (Trial)">
                      10 to 25 pieces (Trial Pack)
                    </option>
                    <option value="50 pieces">50 pieces</option>
                    <option value="100 pieces">100 pieces</option>
                    <option value="250 pieces">250 pieces</option>
                    <option value="500 pieces">500 pieces</option>
                    <option value="1,000+ pieces (Custom run)">
                      1,000+ pieces (Custom Mill Run)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor={`${formId}-message`}
                  className="block text-[12.5px] font-medium text-[#29251F] mb-1"
                >
                  Notes or Specific Requirements
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-[#E8DFCF] bg-white text-[14px] text-[#29251F] focus:outline-none focus:border-[#40572D]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-md border border-[#E8DFCF] text-[#29251F] text-[14px] font-medium hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-[#40572D] hover:bg-[#344724] text-white text-[14px] font-medium transition-colors cursor-pointer disabled:opacity-50 shadow-xs"
                >
                  {status === "sending" ? (
                    <>
                      <div className="size-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Wholesale Enquiry</span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
