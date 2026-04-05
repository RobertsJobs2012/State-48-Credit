'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/results', label: 'Results' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { const h = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', h, { passive: true }); h(); return () => window.removeEventListener('scroll', h); }, []);
  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobileOpen]);

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={`fixed top-0 left-0 right-0 z-[55] transition-all duration-500 ${scrolled ? 'py-3' : 'py-4'}`}>
      <nav className={`max-w-[1320px] mx-auto px-6 rounded-2xl transition-all duration-500 ${
        scrolled
          ? 'bg-elevated/70 backdrop-blur-2xl border border-border-default/40 shadow-[0_4px_24px_rgba(0,0,0,0.4),0_1px_0_rgba(255,248,240,0.03)_inset]'
          : 'bg-transparent border border-transparent'
      }`}>
        <div className="flex items-center justify-between py-3 relative z-10">
          <Link href="/" className="z-50 shrink-0">
            <Image src="/State48Credit.png" alt="State 48 Credit" width={150} height={48} priority className="h-11 md:h-12 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={`relative px-4 py-2 text-[13px] font-sans font-medium tracking-wide transition-colors duration-200 group ${pathname === link.href ? 'text-text-headline' : 'text-text-muted hover:text-text-headline'}`}>
                {link.label}
                <span className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-copper-default to-turquoise-default transition-all duration-300 ${pathname === link.href ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'}`} style={{ transformOrigin: 'left' }} />
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/get-started" className="px-6 py-2.5 text-sm font-display font-bold rounded-xl bg-gradient-to-r from-turquoise-default to-turquoise-deep text-background hover:shadow-[0_4px_20px_rgba(43,191,179,0.3)] hover:-translate-y-0.5 transition-all duration-200">Get Started</Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden z-50 w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] active:scale-95 transition-transform" aria-label="Menu">
            {mobileOpen ? <X size={24} className="text-text-headline" /> : <Menu size={22} className="text-text-headline" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col items-center justify-center h-full gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06, duration: 0.4 }}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className={`block text-2xl font-display font-bold tracking-tight py-3 text-center transition-colors ${pathname === link.href ? 'text-copper-default' : 'text-text-headline'}`}>{link.label}</Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.4 }} className="mt-8 w-full max-w-xs">
                <Link href="/get-started" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center text-lg">Get Started ↗</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
