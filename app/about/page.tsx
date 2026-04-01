import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About State 48 Credit | Arizona\'s Credit Repair Expert | Robert Garcia',
  description: 'Robert Garcia founded State 48 Credit after his own identity theft nightmare. 15 years. 2,041 clients. Arizona\'s most trusted credit repair company.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-8 leading-tight">
            Bad credit is not a character flaw. <br className="hidden md:block" />
            <span className="text-copper-default">It is a number on a screen.</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed font-light max-w-3xl mx-auto">
            We believe every Arizona resident deserves a fair shot at the financial life they have worked for — regardless of what is on their credit report right now, how it got there, or how long they have been carrying it. And numbers can be changed.
          </p>
        </div>
      </section>

      {/* Founder Portrait */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Headshot — 4:5 ratio */}
          <div className="relative">
            <div className="absolute -inset-4 bg-copper-default/[0.06] blur-[40px] rounded-[32px] pointer-events-none" />
            <div className="relative rounded-[24px] overflow-hidden border border-border-default shadow-[0_8px_40px_rgba(0,0,0,0.4)] aspect-[4/5]">
              <Image
                src="/State48Headshot.png"
                alt="Robert Garcia — Founder of State 48 Credit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 glass-panel rounded-2xl px-5 py-3 z-10">
              <div className="text-2xl font-display font-extrabold text-copper-default">15+</div>
              <div className="text-xs font-sans text-text-muted">Years in Credit Repair</div>
            </div>
          </div>

          {/* Intro text */}
          <div>
            <span className="text-xs font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">Meet the Founder</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-6">Robert Garcia</h2>
            <p className="text-lg text-text-body font-sans leading-[1.75] mb-6">
              Robert didn&apos;t start State 48 Credit because he saw a market opportunity. He started it because he was sitting exactly where you might be sitting right now — staring at a credit report full of damage he didn&apos;t cause, calling companies that were supposed to help, and getting nowhere.
            </p>
            <p className="text-lg text-text-secondary font-sans leading-[1.75]">
              As a former senior credit analyst in the disputes department of a major financial institution, Robert knew how the system worked — and could see clearly that the companies he hired weren&apos;t doing what they should have been doing. That&apos;s when he decided to build something different.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-12 text-center">Why State 48 Credit Exists — And Why It Matters That You Know</h2>
          
          <div className="space-y-8 text-lg text-text-body leading-relaxed">
            <p>
              Robert Garcia did not start State 48 Credit because he saw a market opportunity. He started it because he was sitting exactly where you might be sitting right now — staring at a credit report full of damage he did not cause, calling companies that were supposed to help him, and getting nowhere.
            </p>
            <p>
              Someone stole Robert&apos;s identity. They opened accounts in his name, ran up balances, and disappeared. What came next was worse than the theft itself. He called the credit repair companies. He explained what happened. He provided documentation. And then — one after another — they told him to keep paying his monthly fee while they processed his case. Month after month. The accounts stayed. The fees kept coming. The calls went unanswered. The people who were supposed to be fighting for him were, in reality, fighting for their next billing cycle.
            </p>
            <p>
              What made it even more maddening was that Robert knew better than most people how the system actually worked. He had spent years as a senior credit analyst working in the disputes department of a major financial institution. He understood the FCRA. He understood Metro 2 compliance. He understood exactly which arguments moved bureaus and which ones got filed and forgotten. He knew what these companies should have been doing — and he could see clearly that they were not doing it.
            </p>
            <p className="text-xl text-copper-default font-medium italic border-l-4 border-copper-default pl-6 my-12">
              That gap — between what was possible and what he was receiving — was the moment State 48 Credit was born. Not as a business plan. As a decision. If nobody is going to do this right, then I will.
            </p>
            <p>
              Building State 48 Credit from the ground up in Phoenix meant starting with the clients nobody else wanted to take seriously. The identity theft victims who had been dismissed. The families with bankruptcies they were told were permanent. The first-time homebuyers who kept getting pre-approval denials nobody could explain clearly. Robert took those cases one at a time — using every legal tool available, writing every letter from scratch, answering every call personally.
            </p>
            <p>
              State 48 Credit today is still run on the same principle it started with. We are not the biggest credit repair company in Arizona. We are not trying to be. We cap new clients at 20 per month — not as a marketing tactic, but because that is the number we can serve properly. Every client gets a dedicated specialist. Every file gets personal attention. Every dispute gets a custom letter written for that specific item, that specific bureau, and that specific legal argument.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">Ready to Work With a Team That Actually Gives a Damn?</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            What exists here is 15 years of expertise, a flat-rate pricing model built entirely in your favor, a 90-day money-back guarantee, and a specialist who will answer the phone when you call. The first conversation is free. The first step is easy. And the results — for 2,041 Arizona residents before you — have been life-changing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Get My Free Credit Analysis Today
            </Link>
            <a href="tel:602-377-6626" className="inline-flex items-center justify-center px-8 py-4 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-lg">
              Call Robert Directly: (602) 377-6626
            </a>
          </div>
          <p className="text-sm text-text-muted">No commitment. No monthly fees. No pressure. Just a straight, honest conversation about what we can do for your credit — before you spend a dollar.</p>
        </div>
      </section>
    </div>
  );
}
