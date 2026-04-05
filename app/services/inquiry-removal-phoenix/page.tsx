import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inquiry Removal Phoenix | Delete Hard Inquiries | State 48 Credit',
  description: 'Remove unauthorized hard inquiries from your credit report. State 48 Credit disputes inquiries to boost your score fast. Serving Phoenix & all of Arizona.',
};

export default function InquiryRemovalPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Too Many Hard Inquiries? <span className="text-copper-default">We Can Delete Them.</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light">
            Did you go car shopping and end up with 15 hard inquiries on your report? Did a lender pull your credit without your explicit permission? Hard inquiries drag your score down and make you look desperate for credit. We remove them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
              Get My Free Credit Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-text-headline mb-6">The Dealership Trap</h2>
            <div className="space-y-6 text-text-body leading-relaxed mb-8">
              <p>
                The most common cause of excessive hard inquiries happens at the car dealership. You authorize them to pull your credit to find financing, and they shotgun your application to 15 different banks. Suddenly, you have 15 hard inquiries on your report, and your score drops 30 to 50 points overnight.
              </p>
              <p>
                Under the Fair Credit Reporting Act (FCRA), a company must have a &quot;permissible purpose&quot; and your explicit authorization to pull your credit. If they cannot produce the documentation proving you authorized that specific pull, the inquiry must be deleted.
              </p>
              <p className="text-text-lifted font-medium">
                We aggressively dispute unauthorized and excessive hard inquiries directly with Equifax, Experian, and TransUnion. Because inquiries are often the easiest items to challenge legally, they are frequently the fastest items to be removed — providing a quick boost to your score.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-text-headline mb-4">What We Remove:</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Excessive Auto Loan Inquiries',
                'Unauthorized Credit Card Inquiries',
                'Mortgage Shopping Inquiries',
                'Personal Loan Inquiries',
                'Identity Theft Inquiries'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-secondary">
                  <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-turquoise-default">
            <h3 className="text-2xl font-bold text-text-headline mb-6">Why Inquiry Removal Matters</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              While a single hard inquiry might only drop your score by 3 to 5 points, having 10 or 15 inquiries signals to lenders that you are &quot;credit hungry&quot; or a high risk. Many lenders will automatically deny your application if you have more than 4 hard inquiries in the last 6 months, regardless of how high your score is.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Removing these inquiries not only recovers the lost points but also cleans up your profile, making you look like a much safer borrower to future lenders.
            </p>
            <Link href="/get-started" className="block w-full py-4 text-center bg-sunken border border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200">
              Let Us Review Your Inquiries Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
