import ContactSection from "@/components/ContactSection";
import Commitments from "@/components/Commitments";
import CustomerReviews from "@/components/CustomerReviews";
import Faq from "@/components/Faq";
import FoilCta from "@/components/FoilCta";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MillStory from "@/components/MillStory";
import ProductRange from "@/components/ProductRange";
import QualitySection from "@/components/QualitySection";
import StructuredData from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      {/* Section 1: Hero */}
      <Hero />
      {/* Section 2: Quality You Can Count On */}
      <QualitySection />
      {/* Subsequent sections */}
      <MillStory />
      <HowItWorks />
      <ProductRange />
      <Commitments />
      {/* Customer Reviews & Wholesale Voices */}
      <CustomerReviews />
      {/* Phase 8 (The Numbers) is skipped for now — it needs three figures the
          client has not supplied yet. It belongs here, above the foil CTA. */}
      <FoilCta />
      <Faq />
      <ContactSection />
    </>
  );
}
