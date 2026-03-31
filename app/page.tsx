import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { SocialProofTicker } from '@/components/home/SocialProofTicker';
import { HowItWorksCompressed } from '@/components/home/HowItWorksCompressed';
import { ServicesBento } from '@/components/home/ServicesBento';
import { AnimatedStats } from '@/components/home/AnimatedStats';
import { TestimonialSlider } from '@/components/home/TestimonialSlider';
import { PricingSection } from '@/components/home/PricingSection';
import { FaqSection } from '@/components/home/FaqSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Credit Repair Phoenix AZ | State 48 Credit | Free Consultation',
  description: 'Arizona\'s top credit repair company. We remove collections, repossessions, bankruptcies & more. 2,041 clients helped. 15,892 items deleted. Free consultation.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofTicker />
      <ServicesBento />
      <AnimatedStats />
      <HowItWorksCompressed />
      <TestimonialSlider />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
