import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Credit Repair Results Arizona | Real Clients, Real Scores | State 48 Credit',
  description: 'See real credit repair results from Arizona clients. Collections removed, scores up 150–300 points. Serving Phoenix, Tucson, Mesa & all of Arizona.',
};

export default function ResultsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Real Results. Real Arizona Residents. <span className="text-copper-default">Real Proof.</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            We don&apos;t ask you to take our word for it. We show you the numbers, the names, and the stories of people who were exactly where you are right now — and where they are today because they made one call.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium text-text-secondary">
            <div className="p-4 bg-sunken border border-border-default rounded-xl">
              <span className="block text-2xl font-bold text-text-headline mb-1">2,041</span>
              Arizona Clients Helped Since 2010
            </div>
            <div className="p-4 bg-sunken border border-border-default rounded-xl">
              <span className="block text-2xl font-bold text-text-headline mb-1">15,892</span>
              Negative Items Deleted Across All Three Bureaus
            </div>
            <div className="p-4 bg-sunken border border-border-default rounded-xl">
              <span className="block text-2xl font-bold text-text-headline mb-1">$20M+</span>
              in Total Debt Removed
            </div>
            <div className="p-4 bg-sunken border border-border-default rounded-xl">
              <span className="block text-2xl font-bold text-text-headline mb-1">150+</span>
              Average Score Increase
            </div>
            <div className="p-4 bg-sunken border border-border-default rounded-xl">
              <span className="block text-2xl font-bold text-text-headline mb-1">14-30</span>
              Days Until First Results Often Appear
            </div>
            <div className="p-4 bg-sunken border border-border-default rounded-xl">
              <span className="block text-2xl font-bold text-text-headline mb-1">4.9</span>
              Stars | 847 Verified Google Reviews
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-headline mb-16 text-center">Their Stories. Their Numbers. Their New Lives.</h2>
          
          <div className="space-y-16">
            {/* Case Study 1 */}
            <div className="glass-panel p-8 md:p-12 rounded-3xl grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-text-headline mb-2">Marcus T. | Phoenix, AZ</h3>
                <p className="text-turquoise-default font-medium mb-6">First-Time Homebuyer</p>
                <p className="text-text-body leading-relaxed mb-6">
                  Marcus wasn&apos;t careless with his money. A job loss followed by a medical expense followed by a repossession created a domino effect that took his credit score from manageable to catastrophic. By the time he found State 48 Credit, he had been denied for a mortgage three times. He almost stopped trying.
                </p>
                <blockquote className="border-l-4 border-copper-default pl-4 text-lg text-text-lifted italic">
                  &quot;I had a 512 credit score and three mortgage denials when I found State 48 Credit. Sixty-seven days later I was at 674 and got pre-approved. I closed on my first home shortly after. I cannot put into words what that felt like.&quot;
                </blockquote>
              </div>
              <div className="bg-sunken p-8 rounded-2xl border border-border-default">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-border-default">
                  <div>
                    <p className="text-sm text-text-muted uppercase tracking-wider mb-1">Before</p>
                    <p className="text-3xl font-bold text-status-error">512</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-muted uppercase tracking-wider mb-1">After</p>
                    <p className="text-3xl font-bold text-status-success">674</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li><strong className="text-text-headline">Result:</strong> +162 Points</li>
                  <li><strong className="text-text-headline">Items Removed:</strong> 7 (1 repossession, 4 collections, 2 late payments)</li>
                  <li><strong className="text-text-headline">Timeframe:</strong> 67 days to mortgage pre-approval</li>
                  <li><strong className="text-text-headline">Outcome:</strong> Mortgage Closed</li>
                </ul>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="glass-panel p-8 md:p-12 rounded-3xl grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-sunken p-8 rounded-2xl border border-border-default">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-border-default">
                  <div>
                    <p className="text-sm text-text-muted uppercase tracking-wider mb-1">Before</p>
                    <p className="text-3xl font-bold text-status-error">541</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-muted uppercase tracking-wider mb-1">After</p>
                    <p className="text-3xl font-bold text-status-success">730</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li><strong className="text-text-headline">Result:</strong> +189 Points</li>
                  <li><strong className="text-text-headline">Items Removed:</strong> 6 Fraudulent Accounts + ChexSystems</li>
                  <li><strong className="text-text-headline">Timeframe:</strong> 81 days to full resolution</li>
                  <li><strong className="text-text-headline">Outcome:</strong> Banking Restored, Apartment Approved</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-text-headline mb-2">Vanessa R. | Tucson, AZ</h3>
                <p className="text-turquoise-default font-medium mb-6">Identity Theft Victim</p>
                <p className="text-text-body leading-relaxed mb-6">
                  Vanessa did everything right. She paid her bills, monitored her accounts, and built her credit carefully. Then someone stole her identity. Six fraudulent accounts appeared across her credit reports, and her score collapsed from 701 to 541 in a matter of months. She had no idea where to start or who to trust.
                </p>
                <blockquote className="border-l-4 border-copper-default pl-4 text-lg text-text-lifted italic">
                  &quot;Someone stole my identity and opened six accounts in my name. I had no idea where to start. State 48 Credit removed every single one across all three bureaus and ChexSystems. Robert answered every call personally. I have never experienced service like that from any company.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">Ready to Write Your Own Success Story?</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            Every case study on this page started with one free phone call. Every score increase started with someone who was exactly where you are right now — skeptical, tired of being denied, not sure if it would actually work for them. It worked for them. Here is where it starts for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Get My Free Credit Analysis Today
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-lg">
              See How the Process Works →
            </Link>
          </div>
          <p className="text-sm text-text-muted">Free to start. No commitment. No monthly fees. If we can&apos;t help you, we&apos;ll tell you that on the first call — before you spend a dollar.</p>
        </div>
      </section>
    </div>
  );
}
