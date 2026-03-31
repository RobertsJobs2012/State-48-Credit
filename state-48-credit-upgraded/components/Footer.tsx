import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const serviceLinks = [
  { href: '/services/collections-removal-arizona', label: 'Collections Removal' },
  { href: '/services/inquiry-removal-phoenix', label: 'Inquiry Removal' },
  { href: '/services/bankruptcy-removal-arizona', label: 'Bankruptcy Removal' },
  { href: '/services/identity-theft-restoration-arizona', label: 'Identity Theft Restoration' },
  { href: '/services/foreclosure-removal-arizona', label: 'Foreclosure Removal' },
  { href: '/services/repossession-removal-arizona', label: 'Repossession Removal' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/results', label: 'Results' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/compare', label: 'Compare' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/get-started', label: 'Get Started' },
];

const locationLinks = [
  { href: '/locations/phoenix', label: 'Phoenix' },
  { href: '/locations/tucson', label: 'Tucson' },
  { href: '/locations/mesa', label: 'Mesa' },
  { href: '/locations/chandler', label: 'Chandler' },
  { href: '/locations/gilbert', label: 'Gilbert' },
  { href: '/locations/glendale', label: 'Glendale' },
];

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-sans font-bold text-text-muted uppercase tracking-[0.15em] mb-5">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[13px] font-sans text-text-secondary hover:text-text-headline transition-colors duration-200">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative">
      {/* Top divider */}
      <div className="section-divider" />

      <div className="bg-[#080706] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
            {/* Brand column — wider */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-copper-default to-copper-pressed flex items-center justify-center">
                  <span className="text-[#FFF8F0] font-display font-extrabold text-xs tracking-tighter">48</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-sans font-medium text-text-muted uppercase tracking-[0.15em]">State 48</span>
                  <span className="text-base font-display font-bold tracking-tight text-text-secondary -mt-0.5">Credit</span>
                </div>
              </Link>

              <p className="text-[13px] font-sans text-text-muted leading-[1.7] max-w-sm">
                Arizona&apos;s most trusted credit repair company. Fifteen years. 2,041 clients. 15,892 negative items deleted. One guarantee.
              </p>

              <div className="space-y-2 text-[13px] font-sans text-text-muted">
                <p>Serving all of Arizona</p>
                <p>
                  <a href="tel:602-377-6626" className="hover:text-text-secondary transition-colors">
                    602-377-6626
                  </a>
                </p>
                <p>
                  <a href="mailto:State48Credit@gmail.com" className="hover:text-text-secondary transition-colors">
                    State48Credit@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.04] flex items-center justify-center text-text-muted hover:text-text-secondary hover:border-white/[0.08] transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Locations" links={locationLinks} />
          </div>

          {/* Legal */}
          <div className="border-t border-white/[0.04] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <p className="text-[11px] font-sans text-text-muted/70">
                © {new Date().getFullYear()} State 48 Credit. All Rights Reserved.
              </p>
              <div className="flex flex-wrap gap-5 text-[11px] font-sans text-text-muted/70">
                <Link href="/privacy-policy" className="hover:text-text-muted transition-colors">Privacy</Link>
                <Link href="/terms-of-service" className="hover:text-text-muted transition-colors">Terms</Link>
                <Link href="/refund-cancellation-policy" className="hover:text-text-muted transition-colors">Refund Policy</Link>
                <Link href="/croa-disclosure" className="hover:text-text-muted transition-colors">CROA Disclosure</Link>
              </div>
            </div>

            <div className="bg-[#0A0908] p-5 rounded-xl border border-white/[0.03]">
              <p className="text-[11px] font-sans text-text-muted/60 leading-[1.7]">
                <strong className="text-text-muted/70">Important Notice Required by Federal Law:</strong> You have a right to dispute inaccurate information in your credit report by contacting the credit bureau directly. There is no fee or charge for this. Any legitimate credit repair organization is prohibited from requesting or receiving payment until after it has fully performed all services it has contracted to provide. You may cancel your contract with any credit repair organization for any reason within three business days from the date you signed it. Credit repair organizations are prohibited by law from making false or misleading claims about the services they can provide. Individual results may vary. State 48 Credit is a credit repair organization as defined under federal and state law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
