import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Credit Repair Works in Arizona | State 48 Credit Process',
  description: 'See exactly how State 48 Credit removes negative items from your report. Simple process, real results. Serving Phoenix, Tucson, Mesa & all of Arizona.',
};

export default function HowItWorksPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Simple Process. <span className="text-copper-default">Real Results.</span> No Surprises.
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            We know the unknown is the scariest part. So here is exactly what happens from the moment you contact us to the moment your score reflects who you actually are. No confusion. No fine print. No guessing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-text-secondary">
            <span className="px-4 py-2 bg-sunken border border-border-default rounded-full">15 Years Perfecting This Process</span>
            <span className="px-4 py-2 bg-sunken border border-border-default rounded-full">15,892 Items Successfully Removed</span>
            <span className="px-4 py-2 bg-sunken border border-border-default rounded-full">Results Often Begin Within 14–30 Days</span>
            <span className="px-4 py-2 bg-sunken border border-border-default rounded-full">100% Money-Back Guarantee if Nothing Is Removed in 90 Days</span>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-headline mb-16 text-center">Here Is Exactly What Happens — Step by Step</h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative">
              <div className="absolute top-8 -left-4 w-8 h-8 bg-copper-default rounded-full flex items-center justify-center text-background font-bold shadow-[0_0_15px_rgba(196,98,45,0.4)]">1</div>
              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-text-headline"><span className="inline-flex items-center justify-center px-4 py-1.5 bg-turquoise-default/15 border border-turquoise-default/30 rounded-full text-turquoise-default text-sm font-extrabold uppercase tracking-wider mr-3">YOU</span>Book Your Free Consultation</h3>
                  <span className="inline-block px-3 py-1 bg-sunken border border-border-default rounded-lg text-sm text-text-secondary">Day 1 — takes about 15 minutes</span>
                </div>
                <p className="text-text-body leading-relaxed">
                  You book a free consultation — online or by phone. That is the only thing you have to do to get this started. No paperwork, no credit card, no commitment of any kind. During the call, we pull your credit reports from all three bureaus and walk through every item with you line by line. We tell you exactly what we see, what we believe is removable, and what a realistic timeline looks like for your specific situation. If we can&apos;t help you, we tell you that on the call — before you spend a dollar. Honesty is how we&apos;ve stayed in business for 15 years.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative">
              <div className="absolute top-8 -left-4 w-8 h-8 bg-turquoise-default rounded-full flex items-center justify-center text-background font-bold shadow-[0_0_15px_rgba(43,191,179,0.4)]">2</div>
              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-text-headline"><span className="inline-flex items-center justify-center px-4 py-1.5 bg-copper-default/15 border border-copper-default/30 rounded-full text-copper-default text-sm font-extrabold uppercase tracking-wider mr-3">WE</span>Build Your Custom Strategy and Begin Disputes</h3>
                  <span className="inline-block px-3 py-1 bg-sunken border border-border-default rounded-lg text-sm text-text-secondary">Within 24 hours of signup</span>
                </div>
                <p className="text-text-body leading-relaxed mb-6">
                  This is where we take over completely — and where the real work begins. Within 24 hours of your consultation, your dedicated specialist has already begun building your personalized dispute strategy. Here is everything we do so you don&apos;t have to:
                </p>
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  {[
                    'Perform a full forensic audit of your Equifax, Experian, and TransUnion reports',
                    'Identify every negative item — collections, late payments, charge-offs, repossessions, foreclosures, bankruptcies, and unauthorized inquiries',
                    'Research the legal basis for disputing each specific item using the FCRA, FDCPA, FACTA, and Metro 2 compliance standards',
                    'Write completely custom dispute letters for every single item — tailored to the item type, the bureau, and the creditor involved',
                    'Submit all disputes directly to the bureaus on your behalf',
                    'Monitor incoming bureau responses in real time'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-text-body font-medium">
                  You don&apos;t make a single call. You don&apos;t write a single letter. You don&apos;t sit on hold with Equifax for two hours. We handle every piece of it.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative">
              <div className="absolute top-8 -left-4 w-8 h-8 bg-turquoise-default rounded-full flex items-center justify-center text-background font-bold shadow-[0_0_15px_rgba(43,191,179,0.4)]">3</div>
              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-text-headline"><span className="inline-flex items-center justify-center px-4 py-1.5 bg-copper-default/15 border border-copper-default/30 rounded-full text-copper-default text-sm font-extrabold uppercase tracking-wider mr-3">WE</span>Follow Through Until the Job Is Done</h3>
                  <span className="inline-block px-3 py-1 bg-sunken border border-border-default rounded-lg text-sm text-text-secondary">Ongoing through 30–90 days</span>
                </div>
                <p className="text-text-body leading-relaxed">
                  Credit repair is not a one-and-done submission. Bureaus have 30 to 45 days to respond to each dispute. Some items come off in the first round. Others require a second or third challenge with a different legal angle. We stay on it — every response, every denial, every opportunity to re-dispute — until we have exhausted every legal avenue available to us. Most clients see their first removals within 14 to 30 days. The full process typically runs 30 to 90 days depending on the complexity of the report. We never drop your file. We never go quiet. And we never stop until we have done everything the law allows us to do.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative border-copper-default/30">
              <div className="absolute top-8 -left-4 w-8 h-8 bg-copper-default rounded-full flex items-center justify-center text-background font-bold shadow-[0_0_15px_rgba(196,98,45,0.4)]">4</div>
              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-text-headline"><span className="inline-flex items-center justify-center px-4 py-1.5 bg-turquoise-default/15 border border-turquoise-default/30 rounded-full text-turquoise-default text-sm font-extrabold uppercase tracking-wider mr-3">YOU</span>Watch Your Score Climb and Get Back to Living</h3>
                  <span className="inline-block px-3 py-1 bg-sunken border border-border-default rounded-lg text-sm text-text-secondary">30–90 days and beyond</span>
                </div>
                <p className="text-text-body leading-relaxed mb-4">
                  This is the step you have been waiting for. Items start coming off your report. Your score starts moving — often 150 points or more, sometimes as high as 300 points in significant cases. The pre-approval notification arrives. The car dealership says yes. The apartment application goes through. The mortgage closes.
                </p>
                <p className="text-text-body leading-relaxed">
                  Imagine checking your credit app and seeing a number you haven&apos;t seen in years — or maybe ever. Imagine your phone buzzing with a pre-approval for the home you&apos;ve been putting off. Imagine walking into that dealership knowing the answer is yes before you sit down. That is not a fantasy. That is Tuesday at State 48 Credit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-6">The Process Is Simple. The Results Are Real. The First Step Is Free.</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            You have just seen exactly what happens when you work with State 48 Credit — every step, every timeline, every complication we know how to handle. There is nothing hidden. There is nothing complicated. There is only one question left. Are you ready to start?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Get My Free Credit Analysis Today
            </Link>
            <Link href="/results" className="inline-flex items-center justify-center px-8 py-4 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-lg">
              See Our Results First →
            </Link>
          </div>
          <p className="text-sm text-text-muted">No commitment. No monthly fees. No pressure. Just a free, honest conversation about what we can do for your specific situation.</p>
        </div>
      </section>
    </div>
  );
}
