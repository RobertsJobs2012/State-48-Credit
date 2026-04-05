'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function FinalCtaSection() {
  return (
    <section className="py-36 relative overflow-hidden noise-overlay dot-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[#1B1714] to-background z-0" />
      <motion.div className="absolute top-[-40%] left-[-15%] w-[70%] h-[70%] rounded-full z-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,98,45,0.08) 0%, transparent 65%)' }} animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute bottom-[-40%] right-[-15%] w-[60%] h-[60%] rounded-full z-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(43,191,179,0.05) 0%, transparent 65%)' }} animate={{ x: [0, -35, 0], y: [0, -18, 0], scale: [1, 1.12, 1] }} transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 2 }} />
      <div className="absolute top-0 left-0 right-0 section-divider z-10" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
          <h2 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-display font-extrabold text-text-headline leading-[1.06] tracking-[-0.04em] mb-8">Your Credit Story Does Not End Here. <span className="text-gradient-copper-turquoise">Let&apos;s Turn the Page.</span></h2>
          <p className="text-lg md:text-xl text-text-lifted font-sans leading-[1.7] mb-6 max-w-2xl mx-auto">You have been carrying this long enough. The denials. The embarrassment. The feeling of watching other people close on homes, drive off in new cars, and move forward with their lives while you stay stuck.</p>
          <p className="text-lg md:text-xl text-text-headline font-sans font-semibold leading-[1.7] mb-12 max-w-2xl mx-auto">That ends today.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8">
            <Link href="/get-started" className="btn-primary text-lg w-full sm:w-auto">Get My Free Credit Analysis ↗</Link>
            <a href="tel:+16023776626" className="btn-secondary text-lg w-full sm:w-auto">📞 Call Us Now — (602) 377-6626</a>
          </div>
          <p className="text-xs font-sans text-text-muted">Free consultation · Flat-fee pricing · 100% money-back guarantee · No monthly billing · No commitment required · Available to all Arizona residents</p>
        </motion.div>
      </div>
    </section>
  );
}
