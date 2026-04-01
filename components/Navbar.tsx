'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import Image from 'next/image';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/results', label: 'Results' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 -mb-[80px] ${isScrolled ? 'py-3' : 'py-5'}`}>
        {/* Background — transparent at top, frosted glass + shadow on scroll */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? 'bg-elevated/90 backdrop-blur-2xl border-b border-border-default/50 shadow-[0_4px_24px_rgba(0,0,0,0.4),0_1px_0_rgba(255,248,240,0.03)_inset]'
            : 'bg-transparent border-b border-transparent'
        }`} />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
          <Link href="/" className="z-50 shrink-0">
            <Image
              src="/State48Credit.png"
              alt="State 48 Credit"
              width={150}
              height={48}
              priority
              className="h-11 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-sans font-medium rounded-lg transition-colors duration-200 group/link ${
                    isActive ? 'text-turquoise-default' : 'text-text-secondary hover:text-text-headline'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full transition-transform duration-300 origin-left ${
                    isActive ? 'bg-turquoise-default scale-x-100' : 'bg-turquoise-default/50 scale-x-0 group-hover/link:scale-x-100'
                  }`} />
                </Link>
              );
            })}
            <div className="w-px h-6 bg-border-default mx-3" />
            <Link href="/get-started" className="btn-primary !py-2.5 !px-6 !text-sm group">
              Get Started
              <ArrowUpRight size={14} className="ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>

          <button
            className="lg:hidden z-50 p-2 text-text-body hover:text-copper-default transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl pt-28 px-8 flex flex-col"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-4 text-3xl font-display font-bold text-text-headline hover:text-copper-default transition-colors border-b border-border-default">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.5 }} className="mt-10">
                <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full text-center text-lg">Get Started Free</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
