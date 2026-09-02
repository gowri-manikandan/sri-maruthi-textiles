import ActionBand from "@/components/ActionBand";
import Differentiators from "@/components/Differentiators";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ActionBand />
      <Differentiators />
      {/* Remaining sections are built one phase at a time — DESIGN_BRIEF.md §8. */}
    </>
  );
}
