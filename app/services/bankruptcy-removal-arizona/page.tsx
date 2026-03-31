import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bankruptcy Removal Arizona | Delete Chapter 7 & 13 | State 48 Credit',
  description: 'Remove Chapter 7 and Chapter 13 bankruptcies from your credit report in Arizona. State 48 Credit uses advanced legal strategies to force deletions.',
};

export default function BankruptcyRemovalPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            A Bankruptcy Does Not Have to Haunt You for 10 Years. <span className="text-copper-default">We Can Remove It.</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            You were told a Chapter 7 bankruptcy stays on your report for 10 years, and a Chapter 13 stays for 7 years. That is only true if the bureaus report it with 100% accuracy. They rarely do. We use advanced legal strategies to force deletions years before they are scheduled to fall off.
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
            <h2 className="text-3xl font-bold text-text-headline mb-6">How We Remove Bankruptcies</h2>
            <div className="space-y-6 text-text-body leading-relaxed mb-8">
              <p>
                Removing a bankruptcy is the most complex process in credit repair, but it is entirely possible when you understand how the bureaus actually verify public records.
              </p>
              <p>
                Equifax, Experian, and TransUnion do not send employees to the federal courthouse to verify your bankruptcy. Instead, they buy data from third-party aggregators (like LexisNexis or Innovis). This creates a massive legal vulnerability for the bureaus.
              </p>
              <p className="text-text-lifted font-medium">
                Under the Fair Credit Reporting Act (FCRA), the bureaus must verify the accuracy of the public record directly with the source (the court). Because courts do not verify information with credit bureaus, the bureaus rely on third-party data — which often contains errors, missing dockets, or incorrect filing dates. When we challenge the verification procedure itself, the bureaus are legally forced to delete the bankruptcy entirely.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-text-headline mb-4">What We Target:</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Chapter 7 Bankruptcies',
                'Chapter 13 Bankruptcies',
                'Dismissed Bankruptcies',
                'Discharged Bankruptcies',
                'Accounts Included in Bankruptcy (IIB)'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-secondary">
                  <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-copper-default">
            <h3 className="text-2xl font-bold text-text-headline mb-6">The &quot;Included in Bankruptcy&quot; Strategy</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Even if the public record of the bankruptcy is difficult to remove immediately, the individual accounts included in the bankruptcy are often highly vulnerable.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Creditors frequently report IIB accounts incorrectly — showing balances owed, late payments after the filing date, or incorrect statuses. We aggressively dispute these individual accounts. Removing the negative accounts associated with the bankruptcy often provides a massive score increase, even while we continue fighting the public record itself.
            </p>
            <Link href="/get-started" className="block w-full py-4 text-center bg-sunken border border-copper-default text-copper-default hover:bg-copper-default hover:text-background font-semibold rounded-xl transition-all duration-200">
              Let Us Review Your Bankruptcy Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
