'use client';

import { useActionState } from 'react';
import { submitGetStartedForm } from '@/app/actions/get-started';
import { CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-copper-default hover:bg-copper-hover text-background font-bold rounded-xl transition-all duration-200 glow-copper text-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Processing...' : 'Get My Free Analysis'}
    </button>
  );
}

export default function GetStartedPage() {
  const [state, formAction] = useActionState(submitGetStartedForm, null);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-start pt-12">
        
        {/* Left Column: Value Prop */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-headline mb-6 leading-tight">
            Let&apos;s See Exactly What We Can <span className="text-copper-default">Remove From Your Report.</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            Fill out the form below to request your free consultation. We will pull your reports, walk through every negative item, and tell you exactly what is removable before you pay a single dollar.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="text-turquoise-default" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-headline mb-1">100% Free. Zero Commitment.</h3>
                <p className="text-text-secondary">We don&apos;t ask for a credit card. If we can&apos;t help you, we tell you that on the call.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="text-turquoise-default" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-headline mb-1">No Monthly Fees</h3>
                <p className="text-text-secondary">If you decide to move forward, you pay one flat fee. We work until the job is done.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="text-turquoise-default" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-headline mb-1">90-Day Money-Back Guarantee</h3>
                <p className="text-text-secondary">If we don&apos;t remove a single item in 90 days, you get every dollar back. Period.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-sunken border border-border-default rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-copper-default" size={24} />
              <h4 className="font-bold text-text-headline">Your Privacy is Protected</h4>
            </div>
            <p className="text-sm text-text-muted">
              We use bank-level encryption. We never sell your data. Your information is used strictly to evaluate your credit profile and contact you regarding your consultation.
            </p>
          </div>
        </div>
        
        {/* Right Column: Form */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl border-t-4 border-t-copper-default shadow-[0_0_40px_rgba(196,98,45,0.1)]">
          <h2 className="text-2xl font-bold text-text-headline mb-6">Request Your Free Analysis</h2>
          
          {state?.success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-green-400 text-sm">{state.message}</p>
            </div>
          )}
          
          {state?.success === false && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-red-400 text-sm">{state.message}</p>
            </div>
          )}

          <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-text-body">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  required
                  className="w-full bg-sunken border border-border-default focus:border-turquoise-default focus:ring-1 focus:ring-turquoise-default rounded-xl px-4 py-3 text-text-body placeholder-text-placeholder outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-text-body">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  required
                  className="w-full bg-sunken border border-border-default focus:border-turquoise-default focus:ring-1 focus:ring-turquoise-default rounded-xl px-4 py-3 text-text-body placeholder-text-placeholder outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-body">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full bg-sunken border border-border-default focus:border-turquoise-default focus:ring-1 focus:ring-turquoise-default rounded-xl px-4 py-3 text-text-body placeholder-text-placeholder outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-text-body">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required
                className="w-full bg-sunken border border-border-default focus:border-turquoise-default focus:ring-1 focus:ring-turquoise-default rounded-xl px-4 py-3 text-text-body placeholder-text-placeholder outline-none transition-all"
                placeholder="(602) 555-0123"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="goal" className="block text-sm font-medium text-text-body">What is your primary goal?</label>
              <select 
                id="goal" 
                name="goal" 
                required
                className="w-full bg-sunken border border-border-default focus:border-turquoise-default focus:ring-1 focus:ring-turquoise-default rounded-xl px-4 py-3 text-text-body outline-none transition-all appearance-none"
              >
                <option value="" disabled selected className="text-text-placeholder">Select an option...</option>
                <option value="home">I want to buy a home</option>
                <option value="car">I want to buy a car</option>
                <option value="clean">I just want to clean up my credit</option>
                <option value="identity_theft">I was a victim of identity theft</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <SubmitButton />
            
            <p className="text-xs text-text-muted text-center mt-4">
              By clicking the button above, you agree to our Terms of Service and Privacy Policy, and consent to be contacted regarding your credit repair inquiry.
            </p>
          </form>
        </div>
        
      </div>
    </div>
  );
}
