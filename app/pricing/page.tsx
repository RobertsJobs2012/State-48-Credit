import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Credit Repair Pricing Arizona | Flat-Rate Plans | State 48 Credit',
  description: 'Transparent, flat-rate credit repair pricing with no monthly fees. See what it costs to remove negative items in Phoenix, Tucson & all of Arizona.',
};

export default function PricingPage() {
  return (
    <>
      {/* ═══ SECTION 1: VALUE FRAME ═══ */}
      <section className="py-28 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[11px] font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">The Real Cost</span>
            <h1 className="text-4xl md:text-[3.4rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-8">
              Before We Talk About What We Cost,<br className="hidden md:block" /> Let&apos;s Talk About What Bad Credit Is <span className="text-copper-default">Already Costing You.</span>
            </h1>
          </div>

          <div className="space-y-6 text-lg text-text-body font-sans leading-[1.75] max-w-3xl mx-auto">
            <p>Most people think of credit repair as an expense. By the time you finish reading this page, you will understand why it is the opposite.</p>
            <p>The average home price in the Phoenix metro area is <strong className="text-text-headline">$425,000</strong>. On a 30-year fixed mortgage, the difference between a 580 credit score and a 720 credit score is roughly 1.5 percentage points in interest rate. Run the numbers and it is <strong className="text-copper-default">$142,000 in additional interest</strong> paid over the life of that loan.</p>
            <p>That is <strong className="text-text-headline">$394 every single month</strong> — for 30 years — that goes directly to the bank instead of your family.</p>
            <p className="text-text-secondary">Add it up over five years. The cost of doing nothing about your credit is not zero. It is conservatively <strong className="text-text-headline">$30,000 to $50,000</strong> in real money — money that leaves your household and does not come back.</p>
          </div>

          {/* ROI Highlight */}
          <div className="mt-16 glass-panel rounded-[24px] p-10 md:p-12 border border-copper-default/20 max-w-3xl mx-auto">
            <p className="text-lg text-text-body font-sans leading-[1.75] mb-6">The average State 48 Credit client saves a minimum of <strong className="text-copper-default">$47,000 in mortgage interest alone</strong> over the life of their home loan as a direct result of their score increase.</p>
            <p className="text-lg text-text-body font-sans leading-[1.75] mb-6">Our most comprehensive package is <strong className="text-text-headline text-2xl font-display">$849</strong>.</p>
            <p className="text-xl text-text-headline font-display font-bold">That is a <span className="text-copper-default">55-to-1 return on investment.</span></p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: PRICING TIERS ═══ */}
      <section className="py-28 relative overflow-hidden noise-overlay">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-copper-default/[0.04] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-[11px] font-sans font-semibold text-turquoise-default uppercase tracking-[0.15em] mb-4 block">Pricing Plans</span>
            <h2 className="text-4xl md:text-[3.2rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-6">Simple, Flat-Rate Pricing. <span className="text-turquoise-default">No Monthly Fees.</span></h2>
            <p className="text-lg text-text-lifted font-sans">Every plan is a one-time investment. You pay once. We work until the job is done.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto items-start mt-16">
            {/* TIER 1 — TOTAL FREEDOM */}
            <div className="lg:-mt-6 lg:mb-[-24px] relative z-10 lg:col-start-2">
              <div className="absolute -inset-4 bg-copper-default/[0.08] blur-[40px] rounded-[40px] pointer-events-none" />
              <div className="absolute -inset-[2px] rounded-[28px] bg-gradient-to-b from-copper-default via-copper-hover/60 to-copper-default/20 z-0" />
              <div className="relative rounded-[26px] p-8 flex flex-col z-10 bg-gradient-to-b from-[#201812] via-[#1A1410] to-[#141210] shadow-[0_0_60px_rgba(196,98,45,0.12)]">
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-copper-default/15 border border-copper-default/30 rounded-full">
                    👑
                    <span className="text-[11px] font-sans font-bold text-copper-default uppercase tracking-wider">Most Popular</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-turquoise-default/10 border border-turquoise-default/20 rounded-full">
                    ✨
                    <span className="text-[10px] font-sans font-bold text-turquoise-default uppercase tracking-wider">Recommended</span>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold tracking-tight mb-2">Total Freedom</h3>
                <p className="text-[14px] font-sans text-text-secondary mb-8">The complete credit restoration. Every bureau. Every database. Everything included.</p>
                <div className="mb-8"><span className="text-[3.5rem] font-display font-extrabold text-copper-default tracking-[-0.04em]">$849</span><span className="text-[15px] font-sans text-text-muted ml-2">one-time</span></div>
                <div className="h-px bg-copper-default/15 mb-8" />
                <div className="space-y-3.5 mb-10">
                  {['Full 3-bureau dispute & removal', 'Unlimited negative item disputes', 'Inquiry removal — all three bureaus', 'ChexSystems removal', 'Innovis removal', 'Dedicated credit specialist', 'Custom dispute letters — zero templates', 'Direct bureau & creditor communication', '24-Hour Rush Processing available', 'Post-removal score strategy', '90-Day Money-Back Guarantee'].map((f, j) => (
                    <div key={j} className="flex items-start gap-3">✅<span className="text-[14px] font-sans text-text-body leading-snug">{f}</span></div>
                  ))}
                </div>
                <Link href="/get-started?plan=total-freedom" className="btn-primary w-full text-center !rounded-xl !text-base">Start Total Freedom ↗</Link>
                <p className="text-center text-[12px] text-text-muted mt-3">Free consultation first — no commitment</p>
              </div>
            </div>

            {/* TIER 2 — FULL SWEEP */}
            <div className="lg:col-start-1 lg:row-start-1">
              <div className="rounded-[24px] p-8 flex flex-col bg-card border border-border-default hover:border-border-strong transition-all duration-300">
                <h3 className="text-xl font-display font-bold tracking-tight mb-2">Full Sweep</h3>
                <p className="text-[13px] font-sans text-text-muted mb-8 min-h-[40px]">Complete 3-bureau removal. No secondary databases.</p>
                <div className="mb-8"><span className="text-[3rem] font-display font-extrabold text-text-headline tracking-[-0.04em]">$599</span><span className="text-[15px] font-sans text-text-muted ml-2">one-time</span></div>
                <div className="h-px bg-border-default mb-8" />
                <div className="space-y-3.5 mb-10 flex-grow">
                  {['Full 3-bureau dispute & removal', 'Unlimited negative item disputes', 'Custom dispute letters — zero templates', 'Direct bureau & creditor communication', 'Dedicated credit specialist', 'Complete results summary', '90-Day Money-Back Guarantee'].map((f, j) => (
                    <div key={j} className="flex items-start gap-3">✅<span className="text-[14px] font-sans text-text-body leading-snug">{f}</span></div>
                  ))}
                </div>
                <Link href="/get-started?plan=full-sweep" className="w-full py-4 rounded-xl font-display font-bold text-center text-[15px] bg-elevated border border-border-default text-text-headline hover:border-turquoise-default/40 hover:text-turquoise-default transition-all flex items-center justify-center gap-2">Start Full Sweep ↗</Link>
              </div>
            </div>

            {/* TIER 3 — ONE AND DONE */}
            <div className="lg:col-start-3 lg:row-start-1">
              <div className="rounded-[24px] p-8 flex flex-col bg-card border border-border-default hover:border-border-strong transition-all duration-300">
                <h3 className="text-xl font-display font-bold tracking-tight mb-2">One and Done</h3>
                <p className="text-[13px] font-sans text-text-muted mb-8 min-h-[40px]">Targeted removal on one bureau. For contained issues.</p>
                <div className="mb-8"><span className="text-[3rem] font-display font-extrabold text-text-headline tracking-[-0.04em]">$299</span><span className="text-[15px] font-sans text-text-muted ml-2">one-time</span></div>
                <div className="h-px bg-border-default mb-8" />
                <div className="space-y-3.5 mb-10 flex-grow">
                  {['Single-bureau dispute & removal', 'Unlimited disputes on selected bureau', 'Custom dispute letters', 'Direct bureau communication', 'Dedicated credit specialist', '90-Day Money-Back Guarantee'].map((f, j) => (
                    <div key={j} className="flex items-start gap-3">✅<span className="text-[14px] font-sans text-text-body leading-snug">{f}</span></div>
                  ))}
                </div>
                <Link href="/get-started?plan=one-and-done" className="w-full py-4 rounded-xl font-display font-bold text-center text-[15px] bg-elevated border border-border-default text-text-headline hover:border-turquoise-default/40 hover:text-turquoise-default transition-all flex items-center justify-center gap-2">Start One and Done ↗</Link>
              </div>
            </div>
          </div>

          {/* ADD-ONS */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3 className="text-2xl font-display font-bold tracking-tight text-center mb-10">Add-Ons — <span className="text-turquoise-default">Build Your Custom Plan</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Inquiry Removal', price: '$149', desc: 'Removes unauthorized hard inquiries across all three bureaus' },
                { name: 'ChexSystems Removal', price: '$199', desc: 'Clears negative banking history — restores account access' },
                { name: 'Innovis Removal', price: '$79', desc: 'Clears Innovis secondary credit database' },
                { name: '24-Hour Rush', price: '$99', desc: 'Disputes submitted within 24 hours — fastest possible start' },
              ].map((addon, i) => (
                <div key={i} className="rounded-2xl p-6 bg-card border border-border-default hover:border-turquoise-default/30 transition-all duration-300">
                  <div className="text-xl font-display font-bold text-turquoise-default mb-1">{addon.price}</div>
                  <h4 className="text-[15px] font-display font-semibold text-text-headline mb-2">{addon.name}</h4>
                  <p className="text-[13px] font-sans text-text-muted leading-relaxed">{addon.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[13px] font-sans text-text-muted mt-6">Add-ons combine with any tier. Not sure which you need? We&apos;ll tell you on your free consultation — honestly, including if you don&apos;t need them.</p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: GUARANTEE ═══ */}
      <section className="py-20 relative">
        <div className="section-divider" />
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="glass-panel rounded-[24px] p-10 md:p-14 border-2 border-copper-default/20 shadow-[0_0_50px_rgba(196,98,45,0.08)] text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-sunken border border-copper-default/25 rounded-full mb-8">
              🛡️
              <span className="text-[12px] font-sans font-bold text-copper-default uppercase tracking-wider">100% Money-Back Guarantee — 90 Days</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-8">Every Plan. Every Client. Same Guarantee.</h2>
            <p className="text-[16px] font-sans text-text-body leading-[1.75]">If State 48 Credit does not remove at least one negative item from your credit report within 90 days of beginning your dispute process, you receive a full refund of everything you paid. Every dollar. Every plan. No exceptions.</p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: ROI TABLES ═══ */}
      <section className="py-28 bg-sunken relative noise-overlay">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[11px] font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">The Math</span>
            <h2 className="text-3xl md:text-[2.8rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em]">Run the Numbers Yourself.</h2>
          </div>

          {/* Mortgage Table */}
          <div className="mb-16">
            <h3 className="text-xl font-display font-bold mb-6">Mortgage Interest Savings <span className="text-text-muted font-sans font-normal text-sm">($425K Phoenix home, 30-year fixed)</span></h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] font-sans">
                <thead><tr className="border-b border-border-strong">
                  <th className="text-left py-4 pr-4 text-text-muted font-semibold">Score Range</th>
                  <th className="text-left py-4 px-4 text-text-muted font-semibold">Est. Rate</th>
                  <th className="text-left py-4 px-4 text-text-muted font-semibold">Monthly</th>
                  <th className="text-left py-4 pl-4 text-text-muted font-semibold">Total Interest</th>
                </tr></thead>
                <tbody>
                  {[
                    ['580–619 (Poor)', '7.8%', '$3,058', '$675,000', true],
                    ['620–659 (Fair)', '7.1%', '$2,858', '$604,000', false],
                    ['660–699 (Good)', '6.5%', '$2,687', '$543,000', false],
                    ['720–759 (Very Good)', '6.1%', '$2,582', '$505,000', false],
                    ['760+ (Excellent)', '5.8%', '$2,502', '$475,000', false],
                  ].map(([range, rate, monthly, total, isRed], j) => (
                    <tr key={j} className="border-b border-border-default">
                      <td className={`py-4 pr-4 font-medium ${isRed ? 'text-status-error' : 'text-text-body'}`}>{range as string}</td>
                      <td className="py-4 px-4 text-text-secondary">{rate as string}</td>
                      <td className="py-4 px-4 text-text-secondary">{monthly as string}</td>
                      <td className={`py-4 pl-4 font-bold ${isRed ? 'text-status-error' : 'text-text-headline'}`}>{total as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[14px] font-sans text-text-secondary mt-6">Moving from a 580 to a 720 saves approximately <strong className="text-copper-default">$170,000</strong> in total interest. Our Total Freedom package costs <strong className="text-text-headline">$849</strong>.</p>
          </div>

          {/* Auto Table */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Auto Loan Savings <span className="text-text-muted font-sans font-normal text-sm">($35K vehicle, 5-year term)</span></h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] font-sans">
                <thead><tr className="border-b border-border-strong">
                  <th className="text-left py-4 pr-4 text-text-muted font-semibold">Score Range</th>
                  <th className="text-left py-4 px-4 text-text-muted font-semibold">Avg Rate</th>
                  <th className="text-left py-4 px-4 text-text-muted font-semibold">Monthly</th>
                  <th className="text-left py-4 pl-4 text-text-muted font-semibold">5-Year Total</th>
                </tr></thead>
                <tbody>
                  {[
                    ['Below 600 (Deep Subprime)', '18.4%', '$891', '$53,460', true],
                    ['600–660 (Subprime)', '13.7%', '$809', '$48,540', false],
                    ['661–780 (Near Prime)', '7.1%', '$692', '$41,520', false],
                    ['781+ (Prime)', '5.2%', '$666', '$39,960', false],
                  ].map(([range, rate, monthly, total, isRed], j) => (
                    <tr key={j} className="border-b border-border-default">
                      <td className={`py-4 pr-4 font-medium ${isRed ? 'text-status-error' : 'text-text-body'}`}>{range as string}</td>
                      <td className="py-4 px-4 text-text-secondary">{rate as string}</td>
                      <td className="py-4 px-4 text-text-secondary">{monthly as string}</td>
                      <td className={`py-4 pl-4 font-bold ${isRed ? 'text-status-error' : 'text-text-headline'}`}>{total as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[14px] font-sans text-text-secondary mt-6">Moving from deep subprime to near prime on a $35K vehicle saves <strong className="text-copper-default">$11,940</strong> over five years. Our Full Sweep costs <strong className="text-text-headline">$599</strong>.</p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: PAYMENT ═══ */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight mb-6">How Payment Works</h2>
          <p className="text-[16px] font-sans text-text-body leading-[1.75]">We accept Zelle and Apple Pay. Payment is made once — at the start of your service — and there are no recurring charges, no monthly fees, and no surprise invoices. What you see on this page is what you pay.</p>
        </div>
      </section>

      {/* ═══ SECTION 7: VALUE TESTIMONIALS ═══ */}
      <section className="py-28 bg-alt-bg relative noise-overlay">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[11px] font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">Was It Worth It?</span>
            <h2 className="text-3xl md:text-[2.8rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em]">In Their Own Words.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I refinanced my mortgage after State 48 Credit raised my score 174 points. My new rate saved me $312 a month. The fee I paid them covered itself in less than 60 days.", name: "Linda C.", loc: "Scottsdale, AZ", result: "$312/Month Saved" },
              { quote: "I spent eight months paying a national company $99 a month — almost $800 total — and they removed two items. State 48 removed eleven items in 45 days for less money.", name: "Diego M.", loc: "Mesa, AZ", result: "11 Items Removed" },
              { quote: "The fee seemed like a lot at first. Then I got my mortgage rate and realized I was saving that amount every single month in interest. It paid for itself on day one.", name: "Anthony L.", loc: "Mesa, AZ", result: "Mortgage Rate Secured" },
            ].map((t, i) => (
              <div key={i} className="glass-panel rounded-[20px] p-8 flex flex-col">
                <div className="flex gap-0.5 mb-4">{[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-copper-default fill-copper-default" />)}</div>
                <p className="text-[15px] font-sans text-text-body leading-[1.7] mb-8 flex-grow">&ldquo;{t.quote}&rdquo;</p>
                <div className="pt-4 border-t border-border-default">
                  <p className="font-display font-bold text-text-headline text-[14px]">{t.name}</p>
                  <p className="text-[12px] font-sans text-text-muted mb-2">{t.loc}</p>
                  <span className="inline-block px-3 py-1 bg-turquoise-default/[0.08] border border-turquoise-default/15 text-turquoise-default text-[10px] font-sans font-bold rounded-full uppercase tracking-wider">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: FINAL CTA ═══ */}
      <section className="py-32 relative overflow-hidden noise-overlay dot-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#1B1714] to-background" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-[3.2rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-8">Not Sure Which Plan Fits?<br /><span className="text-copper-default">Let Us Tell You — For Free.</span></h2>
          <p className="text-lg text-text-lifted font-sans leading-[1.65] mb-12 max-w-2xl mx-auto">Every consultation is free. We look at your report, tell you which items are removable, recommend the right plan, and give you a realistic timeline — all before you commit.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-6">
            <Link href="/get-started" className="btn-primary text-lg group w-full sm:w-auto">Get My Free Credit Analysis <ArrowUpRight size={18} className="ml-2" /></Link>
            <a href="tel:602-377-6626" className="btn-secondary text-lg w-full sm:w-auto">📞 (602) 377-6626</a>
          </div>
          <p className="text-[12px] font-sans text-text-muted">One flat fee · No monthly charges · No contracts · 90-day money-back guarantee on every plan</p>
        </div>
      </section>

      {/* ═══ SECTION 9: ANCHORING CLOSE ═══ */}
      <section className="py-20 bg-sunken relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-lg text-text-secondary font-sans leading-[1.75] mb-6 italic">We are not the cheapest option in Arizona. We know that. There are services that charge less — and deliver less. We would rather be honest with you now about what we cost and why than have you find out the hard way what cheap credit repair actually costs.</p>
          <p className="text-xl font-display font-bold text-text-headline">Fifteen years. Two thousand forty-one clients. Fifteen thousand eight hundred and ninety-two deleted items.</p>
          <p className="text-[15px] font-sans text-text-muted mt-4">The price is what it is because the work is what it is.</p>
        </div>
      </section>
    </>
  );
}
