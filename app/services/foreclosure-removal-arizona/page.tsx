import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, CheckCircle2, FileText, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Foreclosure Removal Arizona | State 48 Credit',
  description: 'Remove foreclosures from your credit report. We use aggressive compliance audits to delete inaccurate foreclosure records and help you qualify for a home again.',
};

export default async function ForeclosureRemovalPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-copper-default/10 rounded-full mb-6">
            <Home className="text-copper-default" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Foreclosure <span className="text-copper-default">Removal</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            A foreclosure is the single most damaging mark you can have on your credit report. We specialize in finding the reporting errors that force bureaus to delete them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Free Foreclosure Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-headline mb-6">
                The Heavy Burden of a Foreclosure
              </h2>
              <div className="space-y-6 text-text-body leading-relaxed">
                <p>
                  Losing a home is devastating. But the punishment continues long after you&apos;ve moved out. A foreclosure stays on your credit report for seven years, signaling massive risk to any future lender.
                </p>
                <p>
                  It can drop your score by up to 160 points. It makes renting an apartment incredibly difficult, as landlords view foreclosures as a major red flag. And it typically requires a waiting period of 3 to 7 years before you can qualify for another conventional mortgage.
                </p>
                <p className="text-text-lifted font-medium border-l-4 border-copper-default pl-4">
                  However, the mortgage industry is notorious for reporting errors, especially during the complex transfer of servicing rights and the foreclosure process itself.
                </p>
                <p>
                  If the bank, the servicer, or the credit bureaus cannot verify every single detail of the foreclosure with 100% accuracy, the Fair Credit Reporting Act dictates that the item must be removed.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="mt-1 bg-sunken p-3 rounded-xl h-fit">
                  <FileText className="text-copper-default" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-headline mb-2">Robo-Signing & Paperwork Errors</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">Banks process thousands of foreclosures. Missing signatures, incorrect dates, and lost promissory notes are incredibly common and can invalidate the reporting.</p>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="mt-1 bg-sunken p-3 rounded-xl h-fit">
                  <ShieldCheck className="text-turquoise-default" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-headline mb-2">Servicer Transfers</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">When your mortgage is sold from one servicer to another, data is often lost or corrupted. This creates discrepancies across the three credit bureaus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-headline mb-6">How We Attack Foreclosures</h2>
            <p className="text-text-secondary text-lg">
              We conduct a forensic review of how the foreclosure is reporting across all three bureaus to find the fatal flaws.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Cross-Bureau Audit",
                desc: "We meticulously compare how Equifax, Experian, and TransUnion are reporting the foreclosure. Any discrepancy in dates, balances, or status is a violation."
              },
              {
                step: "02",
                title: "Verification Demands",
                desc: "We demand the bureaus verify the physical documentation of the foreclosure. If the bank cannot produce the original note or proof of proper procedure, it cannot be reported."
              },
              {
                step: "03",
                title: "Aggressive Disputes",
                desc: "We use advanced factual disputing tactics based on the FCRA and Metro 2 compliance standards to force the deletion of the inaccurate foreclosure record."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 font-bold text-6xl text-copper-default group-hover:scale-110 transition-transform duration-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-text-headline mb-4 relative z-10">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-alt-bg text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">Ready to Own a Home Again?</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            A foreclosure doesn&apos;t have to be a 7-year sentence. Let us review your credit report for free to see if we can get it removed.
          </p>
          <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
            Start My Free Analysis <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
