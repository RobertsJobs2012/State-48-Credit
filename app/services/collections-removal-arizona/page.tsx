import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Collections Removal Arizona | Delete Medical & Credit Card Debt | State 48 Credit',
  description: 'Remove collections from your credit report in Arizona. State 48 Credit disputes medical, credit card, and utility collections to raise your score. Free consultation.',
};

export default function CollectionsRemovalPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Collections Are Destroying Your Score. <span className="text-copper-default">Let&apos;s Remove Them.</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            A single collection account can drop your credit score by 100 points or more. Paying it off doesn&apos;t remove it — it just changes the status to &quot;Paid Collection,&quot; and the damage stays for seven years. We use federal law to force the bureaus to delete them entirely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Get My Free Credit Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-headline mb-6">The Truth About Collections</h2>
            <div className="space-y-6 text-text-body leading-relaxed mb-8">
              <p>
                When a debt goes to collections, the original creditor sells it to a third-party agency. That agency then reports the collection to Equifax, Experian, and TransUnion. This is where the system breaks down — and where we step in.
              </p>
              <p>
                Under the Fair Credit Reporting Act (FCRA) and the Fair Debt Collection Practices Act (FDCPA), collection agencies must be able to prove they have the legal right to collect the debt, and the bureaus must verify that every single piece of information they are reporting is 100% accurate.
              </p>
              <p className="text-text-lifted font-medium">
                In our 15 years of experience, we have found that the vast majority of collection accounts contain errors, lack proper documentation, or violate reporting standards. When we expose those violations, the bureaus are legally required to delete the account from your report.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-text-headline mb-4">What We Remove:</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Medical Collections (Even paid ones)',
                'Credit Card Collections',
                'Utility and Cell Phone Collections',
                'Apartment / Lease Break Collections',
                'Payday Loan Collections'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-secondary">
                  <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-copper-default">
            <h3 className="text-2xl font-bold text-text-headline mb-6">Why Paying a Collection Is Usually a Mistake</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Most people think paying a collection will fix their credit. It won&apos;t. Paying a collection updates the &quot;Date of Last Activity,&quot; which can actually cause your score to drop further, and the &quot;Paid Collection&quot; mark remains on your report for seven years.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Before you pay a collection agency a single dollar, let us audit the account. If we can force a deletion, the account disappears from your report completely — as if it never existed — resulting in an immediate and significant score increase.
            </p>
            <Link href="/get-started" className="block w-full py-4 text-center bg-sunken border border-copper-default text-copper-default hover:bg-copper-default hover:text-background font-semibold rounded-xl transition-all duration-200">
              Let Us Review Your Collections Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
