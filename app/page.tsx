import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { SocialProofTicker } from '@/components/home/SocialProofTicker';
import dynamic from 'next/dynamic';

// Lazy-load below-fold sections — they don't need to be in the initial bundle
const ServicesBento = dynamic(() => import('@/components/home/ServicesBento').then(m => ({ default: m.ServicesBento })));
const AnimatedStats = dynamic(() => import('@/components/home/AnimatedStats').then(m => ({ default: m.AnimatedStats })));
const HowItWorksCompressed = dynamic(() => import('@/components/home/HowItWorksCompressed').then(m => ({ default: m.HowItWorksCompressed })));
const TestimonialSlider = dynamic(() => import('@/components/home/TestimonialSlider').then(m => ({ default: m.TestimonialSlider })));
const PricingSection = dynamic(() => import('@/components/home/PricingSection').then(m => ({ default: m.PricingSection })));
const FaqSection = dynamic(() => import('@/components/home/FaqSection').then(m => ({ default: m.FaqSection })));
const FinalCtaSection = dynamic(() => import('@/components/home/FinalCtaSection').then(m => ({ default: m.FinalCtaSection })));

export const metadata: Metadata = {
  title: 'Credit Repair Phoenix AZ | State 48 Credit | Free Consultation',
  description: 'Arizona\'s top credit repair company. We remove collections, repossessions, bankruptcies & more. 2,041 clients helped. 15,892 items deleted. Free consultation.',
  alternates: {
    canonical: 'https://state48credit.com',
  },
};

// JSON-LD structured data for Google rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'State 48 Credit',
  description: 'Arizona\'s premier credit repair company. 15 years experience, 2,041 clients served, 15,892 negative items deleted.',
  url: 'https://state48credit.com',
  telephone: '+1-602-377-6626',
  email: 'State48Credit@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'State',
    name: 'Arizona',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '847',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '$299–$849',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      {/* Schema markup for Google rich results (star ratings in search) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Above the fold — loaded eagerly */}
      <HeroSection />
      <SocialProofTicker />

      {/* Below the fold — code-split and lazy-loaded */}
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
