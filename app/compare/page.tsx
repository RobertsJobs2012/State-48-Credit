import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Credit Repair Company Phoenix AZ | State 48 vs The Rest',
  description: 'How does State 48 Credit compare to Lexington Law, Credit Saint & The Credit People? Honest side-by-side comparison. See why Arizona chooses State 48.',
};

export default function ComparePage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-hero-gradient z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-8">
            Best Credit Repair Company in Phoenix AZ — <span className="text-copper-default">An Honest Comparison.</span>
          </h1>
          <p className="text-lg text-text-lifted font-sans leading-relaxed max-w-3xl mx-auto">If you are on this page, you are doing your research. Good. We are going to answer that question directly. No spin. No cherry-picked comparisons. A real, honest look at how your options stack up.</p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-12 text-center">Side-by-Side Comparison — <span className="text-turquoise-default">The Metrics That Actually Matter.</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead><tr className="border-b border-border-strong">
                <th className="text-left py-4 pr-4 text-text-muted font-semibold">Feature</th>
                <th className="text-left py-4 px-4 text-copper-default font-bold">State 48 Credit</th>
                <th className="text-left py-4 px-4 text-text-muted font-semibold">Lexington Law</th>
                <th className="text-left py-4 px-4 text-text-muted font-semibold">Credit Saint</th>
                <th className="text-left py-4 pl-4 text-text-muted font-semibold">The Credit People</th>
              </tr></thead>
              <tbody>
                {[
                  ['Pricing', '$299–$849 flat fee', '$99–$149/mo ($1,188–$1,788/yr)', '$79–$149/mo ($948–$1,788/yr)', '$99/mo ($1,188/yr)'],
                  ['Billing Model', '✅ One-time flat fee', '❌ Monthly subscription', '❌ Monthly subscription', '❌ Monthly subscription'],
                  ['Custom Disputes', '✅ Every item, every client', '⚠️ Templates at lower tiers', '⚠️ Templates at lower tiers', '⚠️ Templates'],
                  ['ChexSystems/Innovis', '✅ Included in Total Freedom', '❌ Not included', '❌ Not included', '❌ Not included'],
                  ['Money-Back Guarantee', '✅ 90 days, zero items', '❌ No guarantee', '⚠️ Limited', '⚠️ Limited'],
                  ['Dedicated Specialist', '✅ Direct line', '❌ Call center', '❌ Call center', '❌ Call center'],
                  ['Local to Arizona', '✅ Phoenix, AZ', '❌ National', '❌ National', '❌ National'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border-default">
                    <td className="py-4 pr-4 font-semibold text-text-body">{row[0]}</td>
                    <td className="py-4 px-4 text-text-headline font-medium">{row[1]}</td>
                    <td className="py-4 px-4 text-text-secondary">{row[2]}</td>
                    <td className="py-4 px-4 text-text-secondary">{row[3]}</td>
                    <td className="py-4 pl-4 text-text-secondary">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Switching Stories */}
      <section className="py-20 bg-alt-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-12 text-center">Real Clients Who Switched to State 48 Credit</h2>
          <div className="space-y-6">
            <div className="glass-panel rounded-[20px] p-8">
              <h3 className="text-xl font-display font-bold mb-3">Sofia R. — From a National Company to State 48 Credit</h3>
              <p className="text-sm text-text-muted font-sans mb-4">Mesa, AZ</p>
              <p className="text-base text-text-secondary font-sans leading-[1.75]">Sofia spent nearly a year with a national monthly-billing company. Her score moved less than 20 points. Robert reviewed her file, identified 14 items with legitimate dispute basis. Sixty-one days later, all 14 items were gone. Her score went from 511 to 729.</p>
            </div>
            <div className="glass-panel rounded-[20px] p-8">
              <h3 className="text-xl font-display font-bold mb-3">David R. — From DIY to State 48 Credit</h3>
              <p className="text-sm text-text-muted font-sans mb-4">Mesa, AZ</p>
              <p className="text-base text-text-secondary font-sans leading-[1.75]">David spent 11 months disputing items on his own. The bureaus kept coming back with &quot;verified.&quot; Fifty-eight days after enrolling with State 48, 11 items were removed and his score climbed 143 points.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are Not the Right Fit */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-10 text-center">We Are Going to Tell You When a Competitor Might Be a Better Choice.</h2>
          <div className="glass-panel rounded-[20px] p-8 mb-10">
            <p className="text-base text-text-secondary font-sans leading-[1.75] mb-6">State 48 Credit may not be the right fit if:</p>
            <div className="space-y-3">
              {[
                'You prefer a large national brand with decades of name recognition.',
                'You want an app-based portal with 24/7 digital access to your case status.',
                'Your entire credit file is currently accurate, fully verified, and within its legal reporting window.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-text-muted shrink-0">→</span>
                  <p className="text-base text-text-secondary font-sans">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where We Win */}
      <section className="py-20 bg-sunken">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-12 text-center">Where We Win — <span className="text-copper-default">Every Time.</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: '💰 Pricing', desc: 'Our most comprehensive package is $849. Lexington Law at $149/month for 12 months is $1,788. That is $939 less for a service that includes more.' },
              { title: '📞 Personal Access', desc: 'You will never call a 1-800 number and wait on hold. You have a direct line to the specialist working your file.' },
              { title: '⚡ Speed', desc: 'Marcus D. — 74 days, 16 items removed. Sofia R. — 61 days, 14 items removed. James & Angela T. — 89 days, 21 items removed.' },
              { title: '📍 Local Arizona Expertise', desc: 'We are a Phoenix, Arizona company that has been serving Arizona residents for 15 years. We know this market.' },
              { title: '🔍 Transparency', desc: 'We tell you during the free consultation exactly what we can do, what we cannot do, and what it costs — before you decide.' },
              { title: '🛡️ Guarantee', desc: '100% money-back guarantee if zero items are removed in 90 days. No other company on this list offers that.' },
            ].map((item, i) => (
              <div key={i} className="glass-panel rounded-[20px] p-6">
                <h3 className="text-lg font-display font-bold mb-3">{item.title}</h3>
                <p className="text-base text-text-secondary font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden noise-overlay">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-8">Still Deciding? <span className="text-copper-default">Here Is the Easiest Way to Get Your Questions Answered.</span></h2>
          <p className="text-lg text-text-lifted font-sans leading-relaxed mb-12 max-w-2xl mx-auto">The last step is a 15-minute conversation. No pressure to sign up. No sales script. Just a straight answer.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-6">
            <Link href="/get-started" className="btn-primary text-lg">Get My Free Credit Analysis ↗</Link>
            <a href="tel:+16023776626" className="btn-secondary text-lg">📞 Call (602) 377-6626</a>
          </div>
          <p className="text-xs font-sans text-text-muted mb-4">Free consultation · Flat-fee pricing · 100% money-back guarantee · Locally owned in Phoenix, AZ</p>
          <p className="text-sm font-sans text-text-secondary">📧 Not ready for a call? Email us: <a href="mailto:State48Credit@gmail.com" className="text-turquoise-default hover:text-turquoise-hover">State48Credit@gmail.com</a> — We respond within 24 hours.</p>
        </div>
      </section>
    </div>
  );
}
