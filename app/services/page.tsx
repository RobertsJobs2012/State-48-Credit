import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Credit Repair Services Phoenix AZ | State 48 Credit',
  description: 'State 48 Credit removes collections, late payments, charge-offs, bankruptcies & more from Arizona credit reports. Flat-fee packages. Free consultation.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-hero-gradient z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-8">
            Credit Repair Services in Phoenix AZ — <span className="text-copper-default">Which Solution Fits Your Situation?</span>
          </h1>
          <p className="text-lg text-text-lifted font-sans leading-relaxed max-w-3xl mx-auto mb-4">
            Every credit situation is different. Every person&apos;s path forward is different, too. Tell us where you are — and we will show you exactly which solution fits your specific situation, your specific items, and your specific goal.
          </p>
          <p className="text-base text-text-secondary font-sans leading-relaxed max-w-3xl mx-auto">
            State 48 Credit offers targeted credit repair services for Arizona residents at every stage — from removing a single collection to a complete, full-spectrum restoration across all three bureaus, ChexSystems, Innovis, and beyond.
          </p>
        </div>
      </section>

      {/* Solution Selector */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-12 text-center">Find Your Solution in One Click.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🏠', title: 'I want to buy a home — and my credit is in the way.', desc: 'You have a goal. Bad credit is the one thing standing between you and that front door. Let\'s remove it.', href: '#home-buyers' },
              { emoji: '📋', title: 'I have negative items on my report I need removed.', desc: 'Collections, late payments, charge-offs, medical debt, repossessions, bankruptcies — you know what is on your report.', href: '#negative-items' },
              { emoji: '🔒', title: 'I need complete credit restoration — all of it, gone.', desc: 'You want a clean slate. Every negative item. Every bureau. Every secondary reporting system. Fast and thoroughly.', href: '#full-restoration' },
            ].map((card, i) => (
              <a key={i} href={card.href} className="group block">
                <div className="glass-panel rounded-[20px] p-8 h-full hover:border-copper-default/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-6">{card.emoji}</div>
                  <h3 className="text-lg font-display font-bold tracking-tight mb-3">{card.title}</h3>
                  <p className="text-base text-text-secondary font-sans leading-relaxed mb-6">{card.desc}</p>
                  <span className="text-sm font-sans font-semibold text-copper-default">This Is My Situation →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Blocks */}
      <section className="py-20 bg-alt-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-16 text-center">Credit Repair Services We Offer — <span className="text-copper-default">And Exactly Who Each One Is Built For.</span></h2>

          {/* Solution A: Home Buyers */}
          <div id="home-buyers" className="mb-20 scroll-mt-32">
            <div className="glass-panel rounded-[24px] p-8 md:p-12">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-2xl font-display font-bold tracking-tight mb-6">Credit Repair for Home Buyers &amp; Mortgage Seekers</h3>
              <p className="text-base text-text-body font-sans leading-[1.75] mb-6">If you are trying to buy a home in Arizona — and your credit score, your collections, or your negative items keep getting in the way — you already know what the cost of waiting feels like. Every month your credit stays where it is, your home purchase gets further away — not closer.</p>
              <p className="text-base text-text-body font-sans leading-[1.75] mb-6">A 100-point credit score improvement can lower your mortgage rate by 1.5% or more — that is <strong className="text-copper-default">$47,000 saved</strong> on a 30-year mortgage.</p>
              <p className="text-base text-text-secondary font-sans leading-[1.75] mb-8">Our mortgage-focused credit repair service helps Arizona home buyers remove the specific items blocking loan approval, raise scores to qualifying thresholds, and get pre-approved for FHA, VA, conventional, and first-time buyer programs — as fast as 30 to 90 days.</p>
              <p className="text-sm text-text-muted font-sans mb-6"><strong className="text-text-secondary">Best For:</strong> Arizona residents actively working toward a home purchase, FHA or VA loan applicants, and first-time home buyers.</p>
              <Link href="/get-started" className="btn-primary">Start My Mortgage Credit Repair → Free Consultation</Link>
            </div>
          </div>

          {/* Solution B: Negative Item Removal */}
          <div id="negative-items" className="mb-20 scroll-mt-32">
            <div className="glass-panel rounded-[24px] p-8 md:p-12">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-2xl font-display font-bold tracking-tight mb-6">Targeted Negative Item Removal</h3>
              <p className="text-base text-text-body font-sans leading-[1.75] mb-6">Collections, late payments, charge-offs — every loan you do not qualify for, every higher interest rate you are forced to accept, every apartment you get turned down for. Negative items are actively costing you money and opportunities every single day they remain.</p>
              <p className="text-base text-text-body font-sans leading-[1.75] mb-6"><strong className="text-text-headline">What We Remove:</strong> Collections (medical, personal, utility) · Late payments · Charge-offs · Bankruptcies (Ch. 7 &amp; Ch. 13) · Foreclosures · Repossessions · Medical debt · Student loan derogatory marks · Errors of any kind</p>
              <p className="text-sm text-text-muted font-sans mb-6"><strong className="text-text-secondary">Best For:</strong> Anyone with derogatory items that are inaccurate, unverifiable, or legally disputable.</p>
              <Link href="/get-started" className="btn-primary">Start Removing Negative Items → Free Consultation</Link>
            </div>
          </div>

          {/* Solution C: Identity Theft */}
          <div className="mb-20">
            <div className="glass-panel rounded-[24px] p-8 md:p-12">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-2xl font-display font-bold tracking-tight mb-6">Identity Theft &amp; Fraud Recovery</h3>
              <p className="text-base text-text-body font-sans leading-[1.75] mb-6">If you are struggling with accounts you never opened, debts you never created, and a credit report that does not reflect your actual financial history — someone else made those choices, and you are carrying the entire weight of them.</p>
              <p className="text-base text-text-body font-sans leading-[1.75] mb-8">Our identity theft recovery service removes every fraudulent account, unauthorized hard inquiry, and inaccurate entry — leveraging FCRA Section 605B, FACTA fraud alert provisions, and full FDCPA protections.</p>
              <p className="text-sm text-text-muted font-sans mb-6"><strong className="text-text-secondary">Best For:</strong> Victims of identity theft, individuals whose information was compromised in a data breach, and anyone who discovered unauthorized activity on their report.</p>
              <Link href="/get-started" className="btn-primary">Start My Fraud Recovery → Free Consultation</Link>
            </div>
          </div>

          {/* Solution D: ChexSystems */}
          <div className="mb-20">
            <div className="glass-panel rounded-[24px] p-8 md:p-12">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-2xl font-display font-bold tracking-tight mb-6">ChexSystems &amp; Banking Access Restoration</h3>
              <p className="text-base text-text-body font-sans leading-[1.75] mb-8">If you have been denied for a checking account, a savings account, or any standard banking product — it is likely ChexSystems. Our ChexSystems removal service challenges negative entries to restore your access to mainstream banking.</p>
              <p className="text-sm text-text-muted font-sans mb-6"><strong className="text-text-secondary">Best For:</strong> Anyone denied a checking or savings account, or currently unbanked due to ChexSystems reporting.</p>
              <Link href="/get-started" className="btn-primary">Remove My ChexSystems Entry → Free Consultation</Link>
            </div>
          </div>

          {/* Solution E: Hard Inquiries */}
          <div id="full-restoration" className="mb-20 scroll-mt-32">
            <div className="glass-panel rounded-[24px] p-8 md:p-12">
              <div className="text-3xl mb-4">📉</div>
              <h3 className="text-2xl font-display font-bold tracking-tight mb-6">Hard Inquiry Removal</h3>
              <p className="text-base text-text-body font-sans leading-[1.75] mb-8">Hard inquiries chip away at your score. Our hard inquiry removal service challenges every unauthorized or disputable hard inquiry across all three credit bureaus — recovering the score points that aggressive lender activity has taken from you.</p>
              <p className="text-sm text-text-muted font-sans mb-6"><strong className="text-text-secondary">Best For:</strong> Anyone with multiple hard inquiries, unauthorized credit pulls, or anyone in final credit optimization before a major loan application.</p>
              <Link href="/get-started" className="btn-primary">Remove My Hard Inquiries → Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold tracking-tight text-center mb-10">Add-Ons — <span className="text-turquoise-default">Enhance Any Package</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Inquiry Removal', price: '$149', desc: 'Removes unauthorized hard inquiries from all 3 bureaus' },
              { name: 'ChexSystems Removal', price: '$199', desc: 'Removes entries blocking banking access' },
              { name: 'Innovis Removal', price: '$79', desc: 'Clears Innovis report entries' },
              { name: '24-Hour Rush', price: '$99', desc: 'Disputes drafted and submitted within 24 hours' },
            ].map((a, i) => (
              <div key={i} className="rounded-2xl p-6 bg-card border border-border-default hover:border-turquoise-default/30 transition-all">
                <div className="text-xl font-display font-bold text-turquoise-default mb-1">{a.price}</div>
                <h4 className="text-base font-display font-semibold text-text-headline mb-2">{a.name}</h4>
                <p className="text-sm font-sans text-text-muted leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-20 bg-sunken">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-10 text-center">DIY Credit Repair vs Professional Credit Repair</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-[20px] p-8">
              <h3 className="text-xl font-display font-bold mb-4 text-turquoise-default">What You Can Do Alone</h3>
              <p className="text-base text-text-secondary font-sans leading-[1.75]">Disputing items on your own is your legal right under the FCRA. For simple cases — a single obvious error, an account that clearly does not belong to you — a DIY dispute can work. We have no interest in selling you a service you do not need.</p>
            </div>
            <div className="glass-panel rounded-[20px] p-8">
              <h3 className="text-xl font-display font-bold mb-4 text-copper-default">Where Professional Help Wins</h3>
              <p className="text-base text-text-secondary font-sans leading-[1.75]">Professional credit repair works because we know the difference between a dispute that gets rubber-stamped and one that legally compels a real investigation. Most clients who come to us tried DIY first. Average time on their own: 8.3 months. Average items removed: zero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden noise-overlay">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-8">Ready to Get Started?</h2>
          <p className="text-lg text-text-lifted font-sans leading-relaxed mb-12 max-w-2xl mx-auto">Every credit situation in Arizona is different. The path is just different. Both walk away with clean credit.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-6">
            <Link href="/get-started" className="btn-primary text-lg">Get My Free Credit Analysis ↗</Link>
            <a href="tel:+16023776626" className="btn-secondary text-lg">📞 Call (602) 377-6626</a>
          </div>
          <p className="text-xs font-sans text-text-muted">Free consultation · Flat-fee pricing — no monthly billing · 100% money-back guarantee · Serving all of Arizona</p>
        </div>
      </section>
    </div>
  );
}
