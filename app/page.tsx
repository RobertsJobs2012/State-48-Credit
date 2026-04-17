import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { PressStrip } from "@/components/layout/PressStrip";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ResultsProof } from "@/components/sections/ResultsProof";
import { PricingSection } from "@/components/sections/PricingSection";
import { FounderStory } from "@/components/sections/FounderStory";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, serviceSchema, howToSchema, reviewsSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "State 48 Credit — Arizona's Most Trusted Credit Repair Company",
  description:
    "Flat-fee credit repair in Phoenix, Arizona. 15,892 items removed, 2,041 clients served, 4.9★ (412 reviews). Founded 2010 by identity-theft survivor Robert Garcia.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqSchema(), serviceSchema(), howToSchema(), reviewsSchema()]} />
      <Hero />
      <PressStrip />
      <TrustBar />
      <HowItWorksSection />
      <ServicesOverview />
      <ResultsProof />
      <PricingSection />
      <FounderStory />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
