import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Credit Repair Results Arizona | State 48 Credit',
  description: 'See real credit repair results from real Arizona clients. State 48 Credit has removed 15,892 negative items and raised scores 150+ points since 2010.',
};

export default function ResultsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-hero-gradient z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-8">
            Credit Repair Results From Real Arizona Clients — <span className="text-copper-default">Real People, Real Proof.</span>
          </h1>
          <p className="text-lg text-text-lifted font-sans leading-relaxed max-w-3xl mx-auto mb-10">We do not ask you to take our word for it. Everything on this page represents a real Arizona resident who decided to do something about their credit and watched it change.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { val: '2,041', label: 'Clients Helped', emoji: '👥' },
              { val: '15,892', label: 'Items Deleted', emoji: '🗑️' },
              { val: '4.9 ⭐', label: '312 Google Reviews', emoji: '' },
              { val: '14 Days', label: 'Results as Fast as', emoji: '⏱️' },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-card border border-copper-default/10 rounded-2xl text-center">
                <span className="text-2xl font-display font-extrabold text-copper-default tracking-tight drop-shadow-[0_0_12px_rgba(196,98,45,0.15)]">{s.val}</span>
                <p className="text-xs font-sans text-text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-16 text-center">From Where They Were — <span className="text-copper-default">To Where They Are Now.</span></h2>

          {[
            { name: 'Marcus D.', loc: 'Phoenix, AZ', goal: 'FHA Home Loan', startScore: '498', before: 'Denied for an FHA mortgage — twice. 18 negative items across all three bureaus: 9 collections, 2 charge-offs, and 7 late payments. Spent 6 months trying to dispute on his own. Removed zero.', after: 'In 74 days, State 48 Credit removed 16 of 18 negative items. Score climbed from 498 to 661 — a 163-point increase. FHA pre-approval came through at $285,000. Closed on his home in Chandler 60 days later.', time: '74 days' },
            { name: 'Sofia R.', loc: 'Mesa, AZ', goal: 'Remove Fraudulent Accounts', startScore: '511', before: 'Victim of identity theft. 14 fraudulent accounts opened in her name over 18 months. Already tried two other credit repair companies — combined, they charged her over $800 in monthly fees and removed zero items.', after: 'State 48 challenged all 14 fraudulent accounts using FCRA Section 605B. All 14 were removed. Score went from 511 to 729 — a 218-point recovery.', time: '61 days' },
            { name: 'James & Angela T.', loc: 'Scottsdale, AZ', goal: 'Conventional Mortgage', startScore: '534 & 551', before: '24 combined negative items — 17 of them medical collections from a 2021 hospitalization. Needed both reports clean for a conventional mortgage.', after: 'State 48 removed 21 of 24 combined negative items. James reached 688. Angela reached 702. Approved for a conventional mortgage and closed on their Scottsdale home.', time: '89 days' },
          ].map((cs, i) => (
            <div key={i} className="glass-panel rounded-[24px] p-8 md:p-12 mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h3 className="text-2xl font-display font-bold">{cs.name}</h3>
                <span className="text-sm font-sans text-text-muted">{cs.loc}</span>
                <span className="px-3 py-1 bg-copper-default/10 border border-copper-default/20 rounded-full text-xs font-sans font-bold text-copper-default">Goal: {cs.goal}</span>
                <span className="px-3 py-1 bg-turquoise-default/10 border border-turquoise-default/20 rounded-full text-xs font-sans font-bold text-turquoise-default">Starting Score: {cs.startScore}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-display font-bold text-status-error uppercase tracking-wider mb-3">Before</h4>
                  <p className="text-base text-text-secondary font-sans leading-[1.75]">{cs.before}</p>
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-status-success uppercase tracking-wider mb-3">After</h4>
                  <p className="text-base text-text-secondary font-sans leading-[1.75]">{cs.after}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border-default">
                <span className="text-sm font-sans font-semibold text-copper-default">⏱️ Timeframe: {cs.time} from enrollment to final removal</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-alt-bg">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-4 text-center">Do Not Take Our Word For It.</h2>
          <p className="text-base text-text-secondary font-sans text-center mb-12">We carry a 4.9-star average across 312 Google Reviews. Independent, unfiltered, publicly verifiable.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I was denied for a car loan three times. State 48 removed everything dragging my score down. I drove off the lot two months later.", name: "Carlos V.", loc: "Glendale, AZ" },
              { quote: "After my divorce my credit was destroyed. Robert was honest with me from day one and delivered on every single promise he made. My score is now 711.", name: "Priya N.", loc: "Scottsdale, AZ" },
              { quote: "I tried fixing my credit myself for almost a year. State 48 did in 58 days what I couldn't do in 12 months. I wish I had called them first.", name: "David R.", loc: "Mesa, AZ" },
            ].map((r, i) => (
              <div key={i} className="glass-panel rounded-[20px] p-8 flex flex-col">
                <span className="text-sm mb-4">⭐⭐⭐⭐⭐</span>
                <p className="text-base text-text-body font-sans leading-[1.7] mb-6 flex-grow italic">&ldquo;{r.quote}&rdquo;</p>
                <p className="text-sm font-display font-bold text-text-headline">— {r.name} · {r.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-text-muted font-sans leading-relaxed italic">Individual results vary based on each client&apos;s specific credit file, starting point, number and type of negative items, and bureau response to disputes. The results shown on this page represent real outcomes achieved by real State 48 Credit clients. Results are not guaranteed. State 48 Credit operates in full compliance with the Credit Repair Organizations Act (CROA).</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden noise-overlay">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-8">Ready to Write Your Own Success Story?</h2>
          <p className="text-lg text-text-lifted font-sans leading-relaxed mb-12 max-w-2xl mx-auto">Every client on this page was exactly where you are right now. They made one decision. Their scores are on this page. Yours could be next.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-6">
            <Link href="/get-started" className="btn-primary text-lg">Get My Free Credit Analysis ↗</Link>
            <a href="tel:+16023776626" className="btn-secondary text-lg">📞 Call (602) 377-6626</a>
          </div>
          <p className="text-xs font-sans text-text-muted">Free consultation · No monthly billing · 100% money-back guarantee · Serving all of Arizona</p>
        </div>
      </section>
    </div>
  );
}
