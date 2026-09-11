import ActionBand from "@/components/ActionBand";
import Differentiators from "@/components/Differentiators";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MillStory from "@/components/MillStory";
import ProductRange from "@/components/ProductRange";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ActionBand />
      <Differentiators />
      <MillStory />
      <HowItWorks />
      <ProductRange />
      {/* Remaining sections are built one phase at a time — DESIGN_BRIEF.md §8. */}
    </>
  );
}
