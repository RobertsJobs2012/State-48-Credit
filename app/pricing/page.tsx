import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credit Repair Pricing Arizona | Flat-Rate Plans | State 48 Credit',
  description: 'Transparent, flat-rate credit repair pricing with no monthly fees. See what it costs to remove negative items in Phoenix, Tucson & all of Arizona.',
};

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Value Frame */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Before We Talk About What We Cost, Let&apos;s Talk About What Bad Credit Is <span className="text-copper-default">Already Costing You.</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-8 font-light">
            Most people think of credit repair as an expense. By the time you finish reading this page, you will understand why it is the opposite.
          </p>
          <div className="text-left text-text-body space-y-4 max-w-3xl mx-auto bg-sunken p-8 rounded-2xl border border-border-default">
            <p>
              The average home price in the Phoenix metro area is $425,000. On a 30-year fixed mortgage, the difference between a 580 credit score and a 720 credit score is roughly 1.5 percentage points in interest rate. That does not sound like much. Run the numbers and it is <strong>$142,000 in additional interest paid</strong> over the life of that loan. One hundred and forty-two thousand dollars. Paid to a lender. Because of a number on a screen that did not have to stay where it was.
            </p>
            <p>
              That is <strong>$394 every single month</strong> — every month, for 30 years — that goes directly to the bank instead of your family.
            </p>
            <p className="text-turquoise-default font-medium mt-4">
              The average State 48 Credit client saves a minimum of $47,000 in mortgage interest alone over the life of their home loan as a direct result of their score increase. Our most comprehensive package is $849. That is a 55-to-1 return on investment.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-4">Simple, Flat-Rate Pricing. No Monthly Fees.</h2>
            <p className="text-xl text-text-secondary">Every plan is a one-time investment. You pay once. We work until the job is done.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tier 3 */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col">
              <h3 className="text-2xl font-bold text-text-headline mb-2">One and Done</h3>
              <p className="text-text-secondary text-sm mb-6">Targeted removal on one bureau. For clients with a contained, single-bureau issue.</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-copper-default">$299</span>
                <span className="text-text-muted ml-2">one-time</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Single-bureau dispute and removal — your choice of Equifax, Experian, or TransUnion',
                  'Unlimited negative item disputes on the selected bureau',
                  'Custom dispute letters for every item on that bureau',
                  'Direct bureau communication handled by us',
                  'Dedicated credit specialist assigned to your file',
                  '90-Day Money-Back Guarantee'
                ].map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-body">
                    <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/get-started" className="w-full py-4 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-center">
                Start One and Done
              </Link>
            </div>

            {/* Tier 1 - Featured */}
            <div className="bg-elevated p-8 rounded-3xl flex flex-col border-2 border-copper-default shadow-[0_0_40px_rgba(196,98,45,0.15)] relative transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-copper-default text-background px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-text-headline mb-2">Total Freedom</h3>
              <p className="text-text-secondary text-sm mb-6">The complete credit restoration. Every bureau. Every database. Everything included.</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-copper-default">$849</span>
                <span className="text-text-muted ml-2">one-time</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Full 3-bureau dispute and removal — Equifax, Experian, and TransUnion',
                  'Unlimited negative item disputes — collections, late payments, charge-offs, repossessions, foreclosures, bankruptcies',
                  'Inquiry removal across all three bureaus',
                  'ChexSystems removal — banking record cleared',
                  'Innovis removal — secondary database cleared',
                  'Dedicated credit specialist assigned to your file',
                  'Custom dispute letters for every single item — zero templates',
                  'Direct bureau and creditor communication handled entirely by us',
                  '90-Day Money-Back Guarantee'
                ].map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-body">
                    <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/get-started" className="w-full py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-center">
                Start Total Freedom
              </Link>
            </div>

            {/* Tier 2 */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col">
              <h3 className="text-2xl font-bold text-text-headline mb-2">Full Sweep</h3>
              <p className="text-text-secondary text-sm mb-6">Complete 3-bureau removal. No secondary databases. No inquiry removal.</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-copper-default">$599</span>
                <span className="text-text-muted ml-2">one-time</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Full 3-bureau dispute and removal — Equifax, Experian, and TransUnion',
                  'Unlimited negative item disputes — collections, late payments, charge-offs, repossessions, foreclosures, bankruptcies',
                  'Custom dispute letters for every item — zero templates',
                  'Direct bureau and creditor communication handled entirely by us',
                  'Dedicated credit specialist assigned to your file',
                  '90-Day Money-Back Guarantee'
                ].map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-body">
                    <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/get-started" className="w-full py-4 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-center">
                Start Full Sweep
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">Not Sure Which Plan Fits Your Situation? Let Us Tell You — For Free.</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            Every consultation is free. We look at your report, tell you exactly which items are removable, recommend the right plan for your specific situation, and give you a realistic timeline — all before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Get My Free Credit Analysis
            </Link>
            <a href="tel:602-377-6626" className="inline-flex items-center justify-center px-8 py-4 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-lg">
              Call Us Directly: 602-377-6626
            </a>
          </div>
          <p className="text-sm text-text-muted">One flat fee. No monthly charges. No contracts. No pressure. 90-day money-back guarantee on every single plan.</p>
        </div>
      </section>
    </div>
  );
}
