import Link from 'next/link';
import Image from 'next/image';

const serviceLinks = [
  { href: '/services/collections-removal-arizona', label: 'Collections Removal' },
  { href: '/services/inquiry-removal-phoenix', label: 'Inquiry Removal' },
  { href: '/services/bankruptcy-removal-arizona', label: 'Bankruptcy Removal' },
  { href: '/services/identity-theft-restoration-arizona', label: 'Identity Theft Restoration' },
  { href: '/services/foreclosure-removal-arizona', label: 'Foreclosure Removal' },
  { href: '/services/repossession-removal-arizona', label: 'Repossession Removal' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/results', label: 'Results' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/compare', label: 'Compare' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-copper-pressed via-copper-default to-copper-hover py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div>
            <p className="text-xl font-display font-bold text-background text-center md:text-left">Ready to fix your credit?</p>
            <p className="text-sm font-sans text-background/70 text-center md:text-left">Free consultation · No commitment · Results in 30-45 days</p>
          </div>
          <Link href="/get-started" className="px-8 py-3.5 bg-background text-text-headline font-display font-bold rounded-xl hover:bg-elevated transition-colors text-sm shrink-0">
            Get Started ↗
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-sunken pt-20 pb-8 relative noise-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-block">
                <Image src="/State48Credit.png" alt="State 48 Credit" width={140} height={45} className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </Link>
              <p className="text-[13px] font-sans text-text-muted leading-[1.7] max-w-sm">Arizona&apos;s most trusted credit repair company. Fifteen years. 2,041 clients. 15,892 negative items deleted. One guarantee.</p>
              <div className="space-y-2 text-[13px] font-sans text-text-muted">
                <p><a href="tel:+16023776626" className="hover:text-text-secondary transition-colors">(602) 377-6626</a></p>
                <p><a href="mailto:State48Credit@gmail.com" className="hover:text-text-secondary transition-colors">State48Credit@gmail.com</a></p>
              </div>
              <div className="flex gap-2 pt-2">
                {[{ emoji: '𝕏', l: 'Facebook' }, { emoji: '📸', l: 'Instagram' }, { emoji: '💼', l: 'LinkedIn' }].map(({ emoji, l }) => (
                  <a key={l} href="#" className="w-9 h-9 rounded-xl bg-white/[0.03] border border-border-default flex items-center justify-center text-text-muted hover:bg-copper-default hover:text-background hover:border-copper-default transition-all duration-200 text-sm" aria-label={l}>{emoji}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-display font-bold text-text-headline mb-5 uppercase tracking-[0.08em]">Services</h4>
              <ul className="space-y-3">{serviceLinks.map(l => <li key={l.href}><Link href={l.href} className="text-[13px] font-sans text-text-muted hover:text-text-secondary transition-colors">{l.label}</Link></li>)}</ul>
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-text-headline mb-5 uppercase tracking-[0.08em]">Company</h4>
              <ul className="space-y-3">{companyLinks.map(l => <li key={l.href}><Link href={l.href} className="text-[13px] font-sans text-text-muted hover:text-text-secondary transition-colors">{l.label}</Link></li>)}</ul>
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-text-headline mb-5 uppercase tracking-[0.08em]">Arizona</h4>
              <ul className="space-y-3">{['Phoenix','Mesa','Chandler','Gilbert','Scottsdale','Tempe','Glendale','Tucson'].map(c => <li key={c}><span className="text-[13px] font-sans text-text-muted">{c}, AZ</span></li>)}</ul>
            </div>
          </div>

          <div className="border-t border-border-default pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-sans text-text-muted/70">&copy; {new Date().getFullYear()} State 48 Credit. All Rights Reserved.</p>
            <div className="flex gap-6">{['Privacy Policy','Terms of Service','Sitemap'].map(t => <span key={t} className="text-[11px] font-sans text-text-muted/50 hover:text-text-muted transition-colors cursor-pointer">{t}</span>)}</div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-card/30 border border-border-default">
            <p className="text-[11px] font-sans text-text-muted/60 leading-[1.7]"><strong className="text-text-muted/70">Important Notice Required by Federal Law:</strong> You have a right to dispute inaccurate information in your credit report by contacting the credit bureau directly. There is no fee or charge for this. Any legitimate credit repair organization is prohibited from requesting or receiving payment until after it has fully performed all services it has contracted to provide. You may cancel your contract with any credit repair organization for any reason within three business days from the date you signed it. Credit repair organizations are prohibited by law from making false or misleading claims. Individual results may vary.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
