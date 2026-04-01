import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credit Repair Services Arizona | Remove Collections, Bankruptcies & More',
  description: 'State 48 Credit removes collections, repossessions, foreclosures, bankruptcies & inquiries across Arizona. Find the right solution for your exact situation.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Which Situation <span className="text-copper-default">Describes You?</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            Every credit situation is different. Tell us what you&apos;re dealing with and we&apos;ll match you to the exact solution that gets you to where you want to be — whether that&apos;s buying a home in Phoenix, getting approved for a car, or just finally having a clean report again.
          </p>
          
          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-text-secondary">
            <span className="px-5 py-2.5 bg-card border border-copper-default/20 rounded-full text-text-lifted font-semibold"><span className="text-copper-default font-extrabold">15,892</span> Negative Items Removed Across Arizona</span>
            <span className="px-5 py-2.5 bg-card border border-turquoise-default/15 rounded-full text-text-secondary">Collections · Repossessions · Bankruptcies · Foreclosures · Inquiries · Identity Theft</span>
            <span className="px-5 py-2.5 bg-card border border-turquoise-default/15 rounded-full text-text-secondary">Serving Phoenix · Tucson · Mesa · Chandler · Gilbert · Yuma · Glendale and All of Arizona</span>
            <span className="px-5 py-2.5 bg-card border border-copper-default/20 rounded-full text-text-lifted font-semibold">100% Money-Back Guarantee if Nothing Is Removed in 90 Days</span>
          </div>
        </div>
      </section>

      {/* Solution Selector */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-headline mb-12 text-center">Tell Us What You Want to Accomplish</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-panel p-8 rounded-2xl flex flex-col">
              <h3 className="text-xl font-semibold text-text-headline mb-4">I want to buy a home.</h3>
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                My credit score is too low to qualify for a mortgage right now. I need to remove the negative items that are standing between me and a pre-approval letter.
              </p>
              <Link href="/services/collections-removal-arizona" className="inline-flex items-center text-turquoise-default font-semibold hover:text-turquoise-hover transition-colors">
                This Is Me <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl flex flex-col border-copper-default/30">
              <h3 className="text-xl font-semibold text-text-headline mb-4">I want to clean up everything.</h3>
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                My report is a mess. There are multiple derogatory items across all three bureaus and I need someone to go through everything and wipe the slate clean.
              </p>
              <Link href="/get-started" className="inline-flex items-center text-copper-default font-semibold hover:text-copper-hover transition-colors">
                This Is Me <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl flex flex-col">
              <h3 className="text-xl font-semibold text-text-headline mb-4">I was a victim of identity theft.</h3>
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                Someone opened accounts in my name and now my credit is destroyed through no fault of my own. I need someone to fight back and get those fraudulent accounts off my report.
              </p>
              <Link href="/services/identity-theft-restoration-arizona" className="inline-flex items-center text-turquoise-default font-semibold hover:text-turquoise-hover transition-colors">
                This Is Me <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-text-muted mb-4">Not sure which fits your situation?</p>
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200">
              Take the 2-Minute Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* Individual Solution Blocks */}
      <section className="py-24 bg-background space-y-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Service Block 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-headline mb-6">Full Credit Restoration — All 3 Bureaus</h2>
              <div className="space-y-6 text-text-body leading-relaxed mb-8">
                <p>
                  If you&apos;re dealing with collections dragging your score into the 400s or 500s, late payments that won&apos;t age off fast enough, and a credit report that seems to get worse every time you check it — you already know what&apos;s at stake.
                </p>
                <p>
                  On the surface, your score is low and you keep getting denied. In reality, that denial costs you every single day — higher interest rates, bigger down payments, insurance premiums that punish you for a number on a screen. And underneath all of that is a feeling that&apos;s harder to name: like everyone else is moving forward and you&apos;re stuck. Like the financial system was designed to keep you exactly where you are.
                </p>
                <p className="text-text-lifted font-medium">
                  Every month your negative items stay on your report, lenders are charging you more, landlords are passing you over, and the home you&apos;re working toward gets further away — not closer.
                </p>
                <p>
                  Our Full Credit Restoration service removes negative items across all three bureaus — Equifax, Experian, and TransUnion — using the full power of the FCRA, FDCPA, FACTA, and Metro 2 compliance standards, so your score climbs fast and stays there.
                </p>
              </div>
              <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper">
                Start My Full Restoration — Free Consultation
              </Link>
            </div>
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-text-headline mb-6">What&apos;s Included:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Complete audit of all three credit bureaus — every item identified and evaluated',
                  'Custom dispute letters written for every negative item — not templates, not recycled letters',
                  'Direct communication with Equifax, Experian, and TransUnion handled entirely by us',
                  'Removal of collections, late payments, charge-offs, repossessions, and foreclosures',
                  'Dedicated specialist assigned to your file — one person, one point of contact, always available',
                  'Speed-first approach — we move as fast as legally possible because your timeline matters'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary text-sm">
                    <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border-default">
                <p className="text-sm text-text-body"><strong className="text-text-headline">Best For:</strong> Arizona residents with multiple negative items across all three bureaus who want the most comprehensive, aggressive removal strategy available.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Routing CTA Block */}
      <section className="py-24 bg-alt-bg text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">Ready to Find Out Exactly What We Can Remove?</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            Every consultation is free. Every analysis is honest. And every strategy is built specifically for your report — not a template, not a one-size-fits-all approach. Over 2,041 Arizona residents have started exactly where you are right now. Most of them wish they had called sooner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Get My Free Credit Analysis Today
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-lg">
              See How the Process Works First →
            </Link>
          </div>
          <p className="text-sm text-text-muted">No monthly fees. No contracts. No pressure. If we can&apos;t help you, we&apos;ll tell you that upfront — for free.</p>
        </div>
      </section>
    </div>
  );
}
