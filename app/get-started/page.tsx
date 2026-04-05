'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { submitGetStartedForm } from '@/app/actions/get-started';

const steps = [
  {
    title: 'What is your primary goal right now?',
    subtitle: 'Step 1 of 5',
    options: [
      { emoji: '🏠', label: 'I want to buy a home' },
      { emoji: '🚗', label: 'I need a car loan' },
      { emoji: '📋', label: 'I have collections or negative items' },
      { emoji: '🔒', label: 'I was a victim of identity theft' },
      { emoji: '⭐', label: 'I just want a higher score' },
    ],
  },
  {
    title: 'How soon do you need to see results?',
    subtitle: 'Step 2 of 5',
    options: [
      { emoji: '🔥', label: 'As fast as possible' },
      { emoji: '📅', label: 'Within the next 90 days' },
      { emoji: '🗓️', label: 'Within the next 6 months' },
      { emoji: '🔍', label: 'I am still exploring' },
    ],
  },
  {
    title: 'What happens if nothing changes in 6 months?',
    subtitle: 'Step 3 of 5',
    options: [
      { emoji: '🏠', label: 'I miss out on buying a home' },
      { emoji: '💸', label: 'I keep overpaying on interest' },
      { emoji: '❌', label: 'I keep getting denied' },
      { emoji: '😔', label: 'Nothing changes and I stay stuck' },
      { emoji: '📉', label: 'My score gets worse' },
    ],
  },
  {
    title: 'Where are you in your decision right now?',
    subtitle: 'Step 4 of 5',
    options: [
      { emoji: '✅', label: 'I am ready to get started' },
      { emoji: '💬', label: 'I have a few questions first' },
      { emoji: '🔍', label: 'I am still comparing my options' },
    ],
  },
];

export default function GetStartedPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [dir, setDir] = useState(1);

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const selectOption = (label: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = label;
    setAnswers(newAnswers);
    setDir(1);
    setTimeout(() => setStep(s => s + 1), 200);
  };

  const goBack = () => {
    if (step > 0) { setDir(-1); setStep(s => s - 1); }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const fd = new FormData();
    fd.append('firstName', formData.firstName);
    fd.append('lastName', formData.lastName);
    fd.append('email', formData.email);
    fd.append('phone', formData.phone);
    fd.append('goal', answers[0] || '');
    fd.append('timeline', answers[1] || '');
    fd.append('consequence', answers[2] || '');
    fd.append('commitment', answers[3] || '');
    fd.append('notes', formData.notes);
    const res = await submitGetStartedForm(null, fd);
    setResult(res);
    setSubmitting(false);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 80 : -80, opacity: 0 }),
  };

  if (result?.success) {
    return (
      <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient z-0" />
        <div className="max-w-2xl mx-auto px-6 relative z-10 text-center pt-20">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, type: 'spring' }}>
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-text-headline mb-6">You&apos;re In. Here&apos;s What Happens Next.</h1>
            <p className="text-lg text-text-lifted font-sans leading-relaxed mb-12">You just took the most important step toward clean credit.</p>
            <div className="space-y-4 text-left max-w-md mx-auto mb-12">
              {[
                { num: '1', title: 'Right Now', desc: 'Check your email for confirmation. Add State48Credit@gmail.com to your contacts.' },
                { num: '2', title: 'Within 24 Hours', desc: 'A specialist will reach out to schedule your free consultation.' },
                { num: '3', title: 'The Moment You\'re Ready', desc: 'We build your custom dispute strategy and get to work within 24 hours.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 items-start glass-panel rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-copper-default/15 flex items-center justify-center shrink-0 text-sm font-display font-bold text-copper-default">{s.num}</div>
                  <div><h3 className="text-base font-display font-bold text-text-headline mb-1">{s.title}</h3><p className="text-sm text-text-secondary font-sans">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient z-0" />
      <div className="absolute inset-0 dot-grid z-0" />
      <div className="absolute inset-0 noise-overlay z-0" />

      <div className="max-w-2xl mx-auto px-6 relative z-10 pt-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-text-headline tracking-tight mb-3">
            Get Started With Credit Repair
          </h1>
          <p className="text-base text-text-secondary font-sans">Answer a few quick questions. No commitment. Takes 2 minutes.</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="h-1.5 bg-elevated rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-copper-default to-turquoise-default" animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs font-sans text-text-muted">Step {step + 1} of {totalSteps}</span>
            <span className="text-xs font-sans text-text-muted">{Math.round(progress)}% complete</span>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-xs font-sans text-text-muted">
          <span>⭐ 4.9 Stars</span>
          <span className="text-border-default">·</span>
          <span>👥 2,041 Clients</span>
          <span className="text-border-default">·</span>
          <span>🛡️ 100% Money-Back Guarantee</span>
        </div>

        {/* Step Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            {step < 4 ? (
              /* Quiz Steps 1-4 */
              <motion.div key={step} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                <h2 className="text-2xl font-display font-bold text-text-headline text-center mb-8">{steps[step].title}</h2>
                <div className="space-y-3">
                  {steps[step].options.map((opt, i) => (
                    <motion.button key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} onClick={() => selectOption(opt.label)} className="w-full text-left glass-panel rounded-2xl p-5 flex items-center gap-4 hover:border-copper-default/30 hover:bg-white/[0.02] active:scale-[0.98] transition-all duration-200 group">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{opt.emoji}</span>
                      <span className="text-base font-sans font-medium text-text-headline">{opt.label}</span>
                      <span className="ml-auto text-text-muted group-hover:text-copper-default transition-colors">→</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Step 5: Contact Form */
              <motion.div key="contact" custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                <h2 className="text-2xl font-display font-bold text-text-headline text-center mb-2">Almost there! How can we reach you?</h2>
                <p className="text-sm text-text-muted font-sans text-center mb-8">We&apos;ll reach out within 24 hours to schedule your free consultation.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-sans font-medium text-text-secondary mb-2">First Name *</label>
                      <input type="text" value={formData.firstName} onChange={e => setFormData(p => ({...p, firstName: e.target.value}))} className="w-full px-4 py-3.5 rounded-xl bg-elevated border border-border-default text-text-headline font-sans placeholder:text-text-placeholder focus:border-copper-default/50 focus:outline-none focus:ring-1 focus:ring-copper-default/30 transition-all" placeholder="First name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-text-secondary mb-2">Last Name *</label>
                      <input type="text" value={formData.lastName} onChange={e => setFormData(p => ({...p, lastName: e.target.value}))} className="w-full px-4 py-3.5 rounded-xl bg-elevated border border-border-default text-text-headline font-sans placeholder:text-text-placeholder focus:border-copper-default/50 focus:outline-none focus:ring-1 focus:ring-copper-default/30 transition-all" placeholder="Last name" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-text-secondary mb-2">Email Address *</label>
                    <input type="email" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} className="w-full px-4 py-3.5 rounded-xl bg-elevated border border-border-default text-text-headline font-sans placeholder:text-text-placeholder focus:border-copper-default/50 focus:outline-none focus:ring-1 focus:ring-copper-default/30 transition-all" placeholder="you@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-text-secondary mb-2">Phone Number *</label>
                    <input type="tel" value={formData.phone} onChange={e => setFormData(p => ({...p, phone: e.target.value}))} className="w-full px-4 py-3.5 rounded-xl bg-elevated border border-border-default text-text-headline font-sans placeholder:text-text-placeholder focus:border-copper-default/50 focus:outline-none focus:ring-1 focus:ring-copper-default/30 transition-all" placeholder="(602) 555-0123" required />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-text-secondary mb-2">Anything else we should know? <span className="text-text-muted">(Optional)</span></label>
                    <textarea value={formData.notes} onChange={e => setFormData(p => ({...p, notes: e.target.value}))} rows={3} className="w-full px-4 py-3.5 rounded-xl bg-elevated border border-border-default text-text-headline font-sans placeholder:text-text-placeholder focus:border-copper-default/50 focus:outline-none focus:ring-1 focus:ring-copper-default/30 transition-all resize-none" placeholder="Tell us about your situation..." />
                  </div>

                  <button onClick={handleSubmit} disabled={submitting || !formData.firstName || !formData.lastName || !formData.email || !formData.phone} className="btn-primary w-full text-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                    {submitting ? 'Submitting...' : 'Get My Free Credit Analysis →'}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-text-muted font-sans pt-2">
                    <span>🔒 Private &amp; never shared</span>
                    <span>📞 Response within 24hrs</span>
                  </div>

                  {result && !result.success && (
                    <div className="p-4 rounded-xl bg-status-error/10 border border-status-error/20 text-status-error text-sm font-sans">{result.message}</div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Back button */}
        {step > 0 && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={goBack} className="mt-6 text-sm font-sans text-text-muted hover:text-text-secondary transition-colors flex items-center gap-1 mx-auto">
            ← Go back
          </motion.button>
        )}

        {/* Bottom testimonial */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 glass-panel rounded-2xl p-6 text-center">
          <span className="text-sm">⭐⭐⭐⭐⭐</span>
          <p className="text-sm font-sans text-text-body italic mt-3 leading-relaxed">&ldquo;I almost talked myself out of submitting the form. Robert called me the next morning, spent 20 minutes reviewing my report with me, and told me exactly what he could remove. Every single thing he said turned out to be true.&rdquo;</p>
          <p className="text-xs font-sans font-bold text-text-headline mt-3">— Maria T. · Phoenix, AZ</p>
          <p className="text-xs text-turquoise-default font-sans font-semibold mt-1">✅ +178 Points · First Home Purchased</p>
        </motion.div>
      </div>
    </div>
  );
}
