import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Credit Repair Works in Arizona | State 48 Credit',
  description: 'See exactly how State 48 Credit removes negative items from your report — step by step. No surprises, no confusion. Serving all of Arizona since 2010.',
};

export default function HowItWorksPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-hero-gradient z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-8">
            How Credit Repair Works in Arizona — <span className="text-copper-default">Simple Process, Real Results, No Surprises.</span>
          </h1>
          <p className="text-lg text-text-lifted font-sans leading-relaxed max-w-3xl mx-auto mb-4">We know the unknown is the scariest part. So here is exactly what happens — from the moment you reach out to the moment your score starts climbing. No confusion. No guesswork. No fine print.</p>
          <p className="text-base text-text-secondary font-sans mb-10">State 48 Credit has guided 2,041 Arizona residents through this exact process since 2010.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn-primary text-lg">See If I Qualify — Free Consultation ↗</Link>
            <a href="tel:+16023776626" className="btn-secondary text-lg">📞 Call (602) 377-6626</a>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-6 text-center">Here Is Exactly What Happens When You Work With Us.</h2>
          <p className="text-base text-text-secondary font-sans text-center mb-16">Four steps. Clear roles. Honest timelines. This is the complete picture.</p>

          <div className="space-y-12">
            {[
              { num: '01', badge: 'YOU', badgeColor: 'turquoise', emoji: '📞', title: 'Book Your Free Consultation', time: 'Day 1 · Your time: 15 minutes', body: 'You reach out — by phone, by form, or by booking online. We pull your credit reports together and review every item across all three bureaus. We walk through what is on your report, explain what each item means, and tell you honestly which items can be challenged and which cannot. If we do not believe we can help, we will tell you — before you spend a single dollar.' },
              { num: '02', badge: 'WE', badgeColor: 'copper', emoji: '🔍', title: 'Build Your Custom Strategy and Begin Disputes', time: 'Within 24 hours of enrollment', body: 'We conduct a forensic review of your full credit file, categorizing every negative item by type, bureau, age, and legal basis. We build custom dispute letters — not templates — that cite the exact federal statutes applicable to each item. The FCRA, FDCPA, FACTA, and Metro 2 compliance provisions are not interchangeable — and we know precisely which law applies to which item. We submit directly to Equifax, Experian, and TransUnion on your behalf.' },
              { num: '03', badge: 'WE', badgeColor: 'copper', emoji: '📊', title: 'Monitor, Follow Up, and Escalate When Necessary', time: 'Weeks 2 through 8+', body: 'Once disputes are submitted, the bureaus have 30 days to investigate and respond under the FCRA. We track every submission, monitor response windows, and prepare escalation challenges for any bureau that responds with an incorrect verification or fails to act within the legal timeframe. When a bureau\'s "verified" response itself is a violation, we use it as leverage.' },
              { num: '04', badge: 'YOU', badgeColor: 'turquoise', emoji: '📈', title: 'Watch Your Score Rise — Then Go Do What You Came Here to Do', time: '30 to 90 days for most clients', body: 'As items are removed, your credit score begins to rise. For most clients, the first removals happen within 30 to 45 days. Scores typically climb 150 or more points. Imagine your loan officer calling to say you qualify. Imagine signing the papers on a home you thought was years away. That is what 2,041 Arizona residents have already experienced.' },
            ].map((step, i) => (
              <div key={i} className="glass-panel rounded-[24px] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-4 right-6 text-[72px] font-display font-extrabold text-white/[0.02] pointer-events-none select-none">{step.num}</div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{step.emoji}</span>
                  <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${step.badgeColor === 'turquoise' ? 'bg-turquoise-default/15 border border-turquoise-default/30 text-turquoise-default' : 'bg-copper-default/15 border border-copper-default/30 text-copper-default'}`}>{step.badge}</span>
                  <span className={`text-xs font-sans font-bold uppercase tracking-[0.15em] ${step.badgeColor === 'turquoise' ? 'text-turquoise-default' : 'text-copper-default'}`}>Step {step.num}</span>
                </div>
                <h3 className="text-2xl font-display font-bold tracking-tight mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted font-sans mb-4">{step.time}</p>
                <p className="text-base text-text-secondary font-sans leading-[1.75]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-sunken noise-overlay">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-12 text-center">How Long Does Credit Repair Take in Arizona?</h2>
          <div className="space-y-4">
            {[
              { time: '📅 Day 1', desc: 'Free consultation completed. Reports reviewed. Removable items identified.' },
              { time: '📅 Within 24 Hours', desc: 'Custom dispute letters drafted. Direct submissions initiated.' },
              { time: '📅 Week 2–4', desc: 'Bureaus begin investigation. Some clients see first removals in this window.' },
              { time: '📅 Week 4–6', desc: 'Bureau responses begin arriving. Most clients see meaningful score movement.' },
              { time: '📅 Week 6–10', desc: 'Escalation disputes submitted. Score improvement accelerates.' },
              { time: '📅 Week 10–12+', desc: 'Final removals confirmed. Post-removal credit strategy delivered.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-card/50 border border-border-default">
                <span className="text-sm font-display font-bold text-copper-default whitespace-nowrap min-w-[140px]">{item.time}</span>
                <p className="text-base text-text-secondary font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Could Go Wrong */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-12 text-center">We Are Going to Tell You Something Most Credit Repair Companies Never Will.</h2>
          <div className="space-y-6">
            {[
              { title: 'A Bureau Responds That an Item Has Been "Verified"', body: 'When a bureau says an item has been "verified," it does not necessarily mean the item was properly investigated. Under the FCRA, bureaus are required to conduct a reasonable investigation. When that standard is not met, the verification response itself becomes a legal violation — and we use it as leverage.' },
              { title: 'A Creditor Re-Reports a Removed Item', body: 'Occasionally, a creditor will re-report an item after it has been successfully removed — a practice that is a direct violation of the FCRA and the FDCPA. We monitor for re-insertion events and respond immediately.' },
              { title: 'Complex or High-Volume Files Take Longer', body: 'We identify complex files during the free consultation and set honest timelines upfront. We build multi-stage dispute strategies and see the process through every round.' },
            ].map((item, i) => (
              <div key={i} className="glass-panel rounded-[20px] p-8">
                <h3 className="text-xl font-display font-bold mb-4">⚠️ {item.title}</h3>
                <p className="text-base text-text-secondary font-sans leading-[1.75]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Outcomes */}
      <section className="py-20 bg-alt-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-12 text-center">What You Can Realistically Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-[20px] p-8 text-center">
              <h3 className="text-lg font-display font-bold mb-4 text-text-headline">Typical Outcome</h3>
              <p className="text-base text-text-secondary font-sans leading-relaxed">Score increase of 100–200 points. 60–80% of disputed items removed. First results in 30–45 days. Full process 60–90 days.</p>
            </div>
            <div className="glass-panel rounded-[20px] p-8 text-center border-copper-default/20">
              <h3 className="text-lg font-display font-bold mb-4 text-copper-default">Best Case</h3>
              <p className="text-base text-text-secondary font-sans leading-relaxed">Score increase of 200–300+ points. Full removal. Results as early as 14–21 days. Complete in 30–60 days.</p>
            </div>
            <div className="glass-panel rounded-[20px] p-8 text-center">
              <h3 className="text-lg font-display font-bold mb-4 text-turquoise-default">Guaranteed Minimum</h3>
              <p className="text-base text-text-secondary font-sans leading-relaxed">At least one item removed in 90 days. Full 100% money-back refund if not met. No monthly billing — ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden noise-overlay">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-8">The Process Is Simple. The Results Are Real. <span className="text-copper-default">The First Step Is Free.</span></h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-6">
            <Link href="/get-started" className="btn-primary text-lg">Get My Free Credit Analysis ↗</Link>
            <a href="tel:+16023776626" className="btn-secondary text-lg">📞 Call (602) 377-6626</a>
          </div>
          <p className="text-xs font-sans text-text-muted">Free consultation · Flat-fee pricing · No monthly billing · 100% money-back guarantee · Results as fast as 14 days</p>
        </div>
      </section>
    </div>
  );
}
