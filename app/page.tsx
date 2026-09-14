import ActionBand from "@/components/ActionBand";
import ContactSection from "@/components/ContactSection";
import CustomerVoices from "@/components/CustomerVoices";
import Differentiators from "@/components/Differentiators";
import Faq from "@/components/Faq";
import FoilCta from "@/components/FoilCta";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MillStory from "@/components/MillStory";
import ProductRange from "@/components/ProductRange";
import StructuredData from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <ActionBand />
      <Differentiators />
      <MillStory />
      <HowItWorks />
      <ProductRange />
      <CustomerVoices />
      {/* Phase 8 (The Numbers) is skipped for now — it needs three figures the
          client has not supplied yet. It belongs here, above the foil CTA. */}
      <FoilCta />
      <Faq />
      <ContactSection />
    </>
  );
}
