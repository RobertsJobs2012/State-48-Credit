import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, CheckCircle2, Lock, FileWarning } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Identity Theft Restoration Arizona | State 48 Credit',
  description: 'Victim of identity theft in Arizona? We help remove fraudulent accounts, hard inquiries, and collections from your credit report fast.',
};

export default async function IdentityTheftRestorationPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-full mb-6">
            <ShieldAlert className="text-red-500" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Identity Theft <span className="text-copper-default">Restoration</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            Someone stole your identity, and now your credit is destroyed. We aggressively remove fraudulent accounts, inquiries, and collections so you can get your life back.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Start Your Restoration
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
                The Nightmare of Identity Theft
              </h2>
              <div className="space-y-6 text-text-body leading-relaxed">
                <p>
                  Identity theft is one of the most stressful financial events you can experience. Not only is your personal information compromised, but you are suddenly held responsible for debts you never authorized.
                </p>
                <p>
                  You might discover it when you&apos;re denied a loan, when collection agencies start calling for accounts you don&apos;t recognize, or when you check your credit report and see a massive drop in your score.
                </p>
                <p className="text-text-lifted font-medium border-l-4 border-copper-default pl-4">
                  The credit bureaus make it incredibly difficult to prove you are a victim. They often treat you like a debtor trying to avoid payment, rather than a victim of a crime.
                </p>
                <p>
                  Navigating police reports, FTC affidavits, and the complex dispute processes of Equifax, Experian, and TransUnion is exhausting. You need an advocate who knows the law and how to force the bureaus to comply.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="mt-1 bg-sunken p-3 rounded-xl h-fit">
                  <FileWarning className="text-copper-default" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-headline mb-2">Fraudulent Accounts</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">Credit cards, loans, or utility accounts opened in your name without your permission, often carrying high balances and late payments.</p>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex gap-4">
                <div className="mt-1 bg-sunken p-3 rounded-xl h-fit">
                  <Lock className="text-turquoise-default" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-headline mb-2">Unauthorized Inquiries</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">Hard inquiries from lenders checking your credit because the identity thief applied for new lines of credit.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-text-headline mb-6">How We Restore Your Credit</h2>
            <p className="text-text-secondary text-lg">
              Identity theft requires a specific, aggressive legal approach under the Fair Credit Reporting Act (FCRA). We handle the heavy lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Document Preparation",
                desc: "We guide you through obtaining the necessary police reports and FTC Identity Theft Affidavits required to legally prove fraud."
              },
              {
                step: "02",
                title: "Aggressive Blocking",
                desc: "Under FCRA Section 605B, bureaus must block fraudulent information within 4 business days of receiving proper documentation. We enforce this."
              },
              {
                step: "03",
                title: "Creditor Notification",
                desc: "We notify the furnishers (creditors and collection agencies) that the accounts are fraudulent, demanding they cease collection efforts and reporting."
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
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">Don&apos;t Pay for Someone Else&apos;s Crime</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            If you are a victim of identity theft, time is critical. Let us help you clear your name and restore your credit score.
          </p>
          <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
            Get Immediate Help <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
