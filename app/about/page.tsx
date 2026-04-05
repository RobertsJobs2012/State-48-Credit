import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About State 48 Credit | Arizona Credit Repair | Robert Garcia',
  description: 'State 48 Credit was founded by Robert Garcia after his own identity theft experience. 15 years. 2,041 Arizona clients. Real credit repair done right.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-hero-gradient z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-8">
            About State 48 Credit — <span className="text-copper-default">Phoenix Arizona&apos;s Credit Repair Expert Since 2010.</span>
          </h1>
          <p className="text-xl text-text-lifted font-sans leading-relaxed max-w-3xl mx-auto mb-4">We Believe Every Person Deserves a Second Chance at Clean Credit — Regardless of How They Got Here.</p>
          <p className="text-base text-text-secondary font-sans leading-relaxed max-w-3xl mx-auto">Not a second chance someday. A real, tangible, documented second chance — starting with the items on your credit report and ending with the life you have been trying to build.</p>
        </div>
      </section>

      {/* Founder Portrait */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-copper-default/[0.06] blur-[40px] rounded-[32px] pointer-events-none" />
            <div className="relative rounded-[24px] overflow-hidden border border-border-default shadow-[0_8px_40px_rgba(0,0,0,0.4)] aspect-[4/5]">
              <Image src="/State48Headshot.png" alt="Robert Garcia — Founder of State 48 Credit Phoenix AZ credit repair expert" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-panel rounded-2xl px-5 py-3 z-10">
              <div className="text-2xl font-display font-extrabold text-copper-default">15+</div>
              <div className="text-xs font-sans text-text-muted">Years in Credit Repair</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">Meet the Founder</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-6">Robert Garcia</h2>
            <p className="text-lg text-text-body font-sans leading-[1.75] mb-6">My name is Robert Garcia. I am the founder of State 48 Credit, and I have been doing this work for 15 years — not because it was the most obvious career path, but because I lived exactly what you are living right now.</p>
            <p className="text-base text-text-secondary font-sans leading-[1.75]">I was a victim of identity theft. I turned to the big credit repair companies. They charged me month after month and delivered almost nothing. I already had a background in the industry — I had worked as a senior credit analyst in the disputes department of a major financial institution. I knew the laws. I knew the process. And I watched these companies do none of it correctly.</p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-12 text-center">Why State 48 Credit Was Founded — <span className="text-copper-default">The Real Story.</span></h2>
          <div className="space-y-6 text-base text-text-body font-sans leading-[1.75]">
            <p>The credit repair industry has a problem. A serious one. Most of the largest credit repair companies in this country are not actually designed to fix your credit as fast as possible. They are designed to keep you enrolled as long as possible. Monthly billing. Slow disputes. Minimal communication. It is a business model built on your frustration, not your results.</p>
            <p>I founded State 48 Credit in Phoenix in 2010 with one operating principle: work as fast as possible, communicate as clearly as possible, and never charge a client for a month of nothing.</p>
            <p>Fifteen years later, we have helped 2,041 Arizona residents remove 15,892 negative items from their credit reports. We serve all of Arizona — Phoenix, Mesa, Chandler, Gilbert, Scottsdale, Glendale, Tempe, Peoria, Goodyear, Surprise, Tucson, Yuma, Flagstaff, Prescott, and every city in between.</p>
            <p className="glass-panel rounded-[20px] p-8 italic text-text-lifted">I have had clients who waited two years before calling us. Two years of denials, of overpaying on interest, of watching other people move forward. Every single one of them said the same thing when we were done: I wish I had not waited. I cannot give that time back to them. But I can make sure you do not lose any more of yours.</p>
          </div>
        </div>
      </section>

      {/* Earned Cynicism */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-10 text-center">The Credit Repair Industry Has a Trust Problem. <span className="text-copper-default">Here Is Where We Stand.</span></h2>
          <div className="space-y-4">
            {[
              'We charge a flat fee — not a monthly subscription. Speed is in our DNA.',
              'We tell you what we cannot do before you pay us anything.',
              'We use the actual laws — precisely. FCRA, FDCPA, FACTA, and Metro 2.',
              'We answer when you call. A real person who knows your case.',
              'We back everything with a 100% money-back guarantee.',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-card/50 border border-copper-default/10">
                <span className="text-copper-default font-bold shrink-0">→</span>
                <p className="text-base text-text-body font-sans">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-sunken">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-12 text-center">Who We Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '🏠', title: 'The Home Buyer', desc: 'You have the income, the down payment, and the dream. What you do not have — yet — is the credit score your lender needs to say yes.' },
              { emoji: '🔒', title: 'The Identity Theft Victim', desc: 'You did nothing wrong. Someone made choices with your identity. We specialize in identity theft recovery and know exactly which federal provisions force the bureaus to act.' },
              { emoji: '⭐', title: 'The Person Who Needs a Fresh Start', desc: 'Maybe it was a medical emergency. A job loss. A divorce. You are not that chapter anymore. Your credit report just has not caught up yet.' },
            ].map((item, i) => (
              <div key={i} className="glass-panel rounded-[20px] p-8 text-center">
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-display font-bold mb-3">{item.title}</h3>
                <p className="text-base text-text-secondary font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-extrabold tracking-tight mb-8">15 Years of Recognized Expertise.</h2>
          <p className="text-base text-text-secondary font-sans leading-[1.75] mb-8 max-w-2xl mx-auto">Robert Garcia brings direct insider experience working in the disputes department of a major financial institution as a senior credit analyst. That institutional knowledge has been applied to 2,041 Arizona credit files over 15 years.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Nationally Recognized Expert', 'Best of 2025', '15 Years Experience', '4.9 Stars — 312 Reviews'].map((badge, i) => (
              <span key={i} className="px-4 py-2 bg-card border border-copper-default/15 rounded-full text-sm font-sans font-semibold text-text-secondary">{badge}</span>
            ))}
          </div>
          <p className="text-sm text-text-muted font-sans">As Featured In: AZCentral · Phoenix Business Journal · Forbes · Bloomberg · CNBC · NerdWallet · Investopedia · Yahoo Finance · AP News · MarketWatch · Business Insider · Money</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden noise-overlay">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-8">Ready to Work With Someone Who Has Actually Been Where You Are?</h2>
          <p className="text-lg text-text-lifted font-sans mb-12">Your story does not end with a bad credit report. Let&apos;s write the next chapter.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-6">
            <Link href="/get-started" className="btn-primary text-lg">Book My Free Consultation ↗</Link>
            <a href="tel:+16023776626" className="btn-secondary text-lg">📞 Call (602) 377-6626</a>
          </div>
          <p className="text-xs font-sans text-text-muted">Free consultation · Flat-fee pricing · 100% money-back guarantee · No monthly billing · Serving all of Arizona since 2010</p>
        </div>
      </section>
    </div>
  );
}
