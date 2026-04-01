import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle2, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credit Repair Phoenix AZ | State 48 Credit',
  description: 'Phoenix\'s top-rated credit repair company. We help Valley residents remove collections, repossessions, and improve their credit scores to buy homes and cars.',
};

export default async function PhoenixLocationPage() {
  "use cache";
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-copper-default/10 rounded-full mb-6">
            <MapPin className="text-copper-default" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Credit Repair in <span className="text-copper-default">Phoenix, AZ</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            Helping Valley residents overcome bad credit, remove collections, and qualify for the homes and vehicles they deserve. Local expertise, proven results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Get Your Free Phoenix Credit Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-headline mb-6">
                Navigating the Phoenix Housing Market with Bad Credit
              </h2>
              <div className="space-y-6 text-text-body leading-relaxed">
                <p>
                  The Phoenix real estate market is competitive. Whether you&apos;re trying to buy a home in Arcadia, rent an apartment in Downtown Phoenix, or secure an auto loan for your commute on the I-10, your credit score is the gatekeeper.
                </p>
                <p>
                  We understand the unique financial challenges faced by Maricopa County residents. From medical collections to repossessions, negative items on your credit report can cost you thousands in higher interest rates or lead to flat-out denials.
                </p>
                <p className="text-text-lifted font-medium border-l-4 border-copper-default pl-4">
                  State 48 Credit isn&apos;t an out-of-state call center. We are Arizona locals who understand the local market and the specific needs of Phoenix residents.
                </p>
                <p>
                  We use aggressive, legally-backed strategies under the Fair Credit Reporting Act to challenge and remove inaccurate, unverifiable, and unfair negative items from your Equifax, Experian, and TransUnion reports.
                </p>
              </div>
            </div>
            
            {/* Local Business Schema & Info */}
            <div className="glass-panel p-8 rounded-2xl border-turquoise-default/30">
              <h3 className="text-2xl font-bold text-text-headline mb-6">State 48 Credit - Phoenix</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-copper-default mt-1" size={20} />
                  <div>
                    <p className="font-medium text-text-headline">Headquarters</p>
                    <p className="text-text-secondary">1234 N Central Ave, Suite 500<br />Phoenix, AZ 85004</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-turquoise-default mt-1" size={20} />
                  <div>
                    <p className="font-medium text-text-headline">Service Areas</p>
                    <p className="text-text-secondary">Phoenix, Scottsdale, Tempe, Glendale, Peoria, and the entire Valley.</p>
                  </div>
                </div>
              </div>

              <div className="bg-sunken p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-copper-default">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="font-bold text-text-headline">5.0 Rating</span>
                </div>
                <p className="text-sm text-text-secondary italic">
                  &quot;State 48 Credit helped me remove three collections that were keeping me from getting a mortgage in Phoenix. Within 4 months, I was pre-approved.&quot;
                </p>
                <p className="text-xs text-text-muted mt-2">- Sarah M., Phoenix Resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">Ready to Improve Your Credit in Phoenix?</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            Don&apos;t let bad credit hold you back from your goals in the Valley. Contact our local team today for a free, no-obligation consultation.
          </p>
          <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
            Start Your Free Analysis <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* JSON-LD LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "State 48 Credit",
            "image": "https://state48credit.com/logo.png",
            "@id": "https://state48credit.com/locations/phoenix",
            "url": "https://state48credit.com/locations/phoenix",
            "telephone": "+16025550198",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 N Central Ave, Suite 500",
              "addressLocality": "Phoenix",
              "addressRegion": "AZ",
              "postalCode": "85004",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.4608,
              "longitude": -112.0738
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/state48credit",
              "https://www.instagram.com/state48credit"
            ]
          })
        }}
      />
    </div>
  );
}
