import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CarFront, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Repossession Removal Arizona | State 48 Credit',
  description: 'Remove vehicle repossessions from your credit report. State 48 Credit uses advanced compliance audits to delete inaccurate repossession records in Arizona.',
};

export default async function RepossessionRemovalPage() {
  "use cache";
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-copper-default/10 rounded-full mb-6">
            <CarFront className="text-copper-default" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Vehicle Repossession <span className="text-copper-default">Removal</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            A repossession is one of the most damaging items on a credit report. We audit the strict legal requirements lenders must follow to force the removal of inaccurate repossession records.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Free Repossession Analysis
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
                The Devastating Impact of a Repossession
              </h2>
              <div className="space-y-6 text-text-body leading-relaxed">
                <p>
                  Having a vehicle repossessed is traumatic enough. But the financial damage lingers for up to seven years. A repossession signals to future lenders that you defaulted on a major secured loan.
                </p>
                <p>
                  It can drop your credit score by 100 points or more instantly. It makes getting another vehicle incredibly expensive, often forcing you into predatory loans with 20%+ interest rates. It can even prevent you from getting approved for an apartment or a mortgage.
                </p>
                <p className="text-text-lifted font-medium border-l-4 border-copper-default pl-4">
                  However, auto lenders are notoriously sloppy with paperwork. The legal process for repossessing and selling a vehicle is highly regulated, and mistakes are common.
                </p>
                <p>
                  If the lender violated your rights under the Uniform Commercial Code (UCC) or state laws during the repossession or subsequent sale of the vehicle, the reporting of that repossession may be invalid.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="mt-1 bg-sunken p-3 rounded-xl h-fit">
                  <AlertTriangle className="text-copper-default" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-headline mb-2">The Deficiency Balance</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">After repossession, lenders sell the car at auction (often for pennies on the dollar) and charge you the difference. This &quot;deficiency balance&quot; is frequently calculated incorrectly.</p>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="mt-1 bg-sunken p-3 rounded-xl h-fit">
                  <Scale className="text-turquoise-default" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-headline mb-2">Strict Compliance Required</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">Lenders must send specific notices before and after the sale. Failure to provide proper &quot;Notice of Intent to Sell&quot; or &quot;Deficiency Notice&quot; can invalidate the debt and the reporting.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-text-headline mb-6">How We Attack Repossessions</h2>
            <p className="text-text-secondary text-lg">
              We don&apos;t just ask the bureaus to verify the account. We demand proof of compliance from the lender.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "UCC Compliance Audit",
                desc: "We demand proof that the lender complied with all Uniform Commercial Code requirements regarding the notice of sale and the commercial reasonableness of the auction."
              },
              {
                step: "02",
                title: "Deficiency Verification",
                desc: "We challenge the accounting of the deficiency balance. If they cannot provide an accurate, itemized accounting of the sale and fees, the balance is invalid."
              },
              {
                step: "03",
                title: "Bureau Disputes",
                desc: "We leverage any violations or lack of documentation to force the credit bureaus to delete the repossession entirely under the FCRA."
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
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">Ready to Drive Forward?</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            A repossession doesn&apos;t have to ruin your credit for seven years. Let us review your case for free to see if we can get it removed.
          </p>
          <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
            Start My Free Analysis <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
