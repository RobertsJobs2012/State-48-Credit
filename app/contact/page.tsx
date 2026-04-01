'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContactForm, null);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Contact <span className="text-copper-default">State 48 Credit</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            Ready to take back control of your credit? Reach out to our Arizona-based team today for a free, no-obligation consultation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-text-headline mb-8">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-sunken p-3 rounded-xl">
                    <MapPin className="text-copper-default" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-headline mb-1">Office Location</h3>
                    <p className="text-text-secondary">
                      1234 N Central Ave, Suite 500<br />
                      Phoenix, AZ 85004
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-sunken p-3 rounded-xl">
                    <Phone className="text-copper-default" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-headline mb-1">Phone</h3>
                    <p className="text-text-secondary">
                      <a href="tel:+16025550198" className="hover:text-copper-default transition-colors">(602) 555-0198</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-sunken p-3 rounded-xl">
                    <Mail className="text-copper-default" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-headline mb-1">Email</h3>
                    <p className="text-text-secondary">
                      <a href="mailto:support@state48credit.com" className="hover:text-copper-default transition-colors">support@state48credit.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-sunken p-3 rounded-xl">
                    <Clock className="text-copper-default" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-headline mb-1">Business Hours</h3>
                    <p className="text-text-secondary">
                      Monday - Friday: 8:00 AM - 6:00 PM (MST)<br />
                      Saturday: 9:00 AM - 1:00 PM (MST)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel p-8 rounded-2xl border-turquoise-default/30">
                <h3 className="text-xl font-semibold text-text-headline mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle2 className="text-turquoise-default" size={18} />
                    <span>Free Initial Consultation & Analysis</span>
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle2 className="text-turquoise-default" size={18} />
                    <span>90-Day Money-Back Guarantee</span>
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle2 className="text-turquoise-default" size={18} />
                    <span>Flat-Rate Pricing (No Monthly Fees)</span>
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle2 className="text-turquoise-default" size={18} />
                    <span>Local Arizona Expertise</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-panel p-8 md:p-10 rounded-2xl h-fit">
              <h2 className="text-2xl font-bold text-text-headline mb-6">Send Us a Message</h2>
              
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
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-sunken border border-border-default rounded-xl text-text-body focus:outline-none focus:border-copper-default focus:ring-1 focus:ring-copper-default transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-sunken border border-border-default rounded-xl text-text-body focus:outline-none focus:border-copper-default focus:ring-1 focus:ring-copper-default transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-sunken border border-border-default rounded-xl text-text-body focus:outline-none focus:border-copper-default focus:ring-1 focus:ring-copper-default transition-colors"
                      placeholder="(602) 555-0123"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">How can we help you?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-sunken border border-border-default rounded-xl text-text-body focus:outline-none focus:border-copper-default focus:ring-1 focus:ring-copper-default transition-colors resize-none"
                    placeholder="Tell us a little about your credit situation..."
                  ></textarea>
                </div>
                
                <SubmitButton />
                
                <p className="text-xs text-text-muted text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy and consent to being contacted by State 48 Credit.
                </p>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
