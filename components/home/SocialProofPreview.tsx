'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I came to State 48 Credit after being denied for a mortgage three times. I had collections and a repossession dragging my score down to 512. Within 67 days, my score was at 674 and I was pre-approved. I closed on my first home two months later. I literally cried.",
    name: "Marcus T.",
    location: "Phoenix, AZ",
    type: "First-Time Homebuyer",
    result: "+162 Points in 67 Days | 8 Items Removed"
  },
  {
    quote: "I was a victim of identity theft and had no idea where to even start. Someone opened six accounts in my name and I was completely lost. State 48 Credit handled everything — all three bureaus, ChexSystems, the works. Robert answered every single call. Every. Single. One. You don't find that anywhere else.",
    name: "Vanessa R.",
    location: "Tucson, AZ",
    type: "Identity Theft Victim",
    result: "All 6 Fraudulent Accounts Removed | Score +189 Points"
  },
  {
    quote: "I tried fixing my credit on my own for two years and got nowhere. Hired one of those big national companies and paid them for eight months with almost nothing to show for it. State 48 Credit removed more in 45 days than that company removed in eight months. The difference is night and day.",
    name: "Diego M.",
    location: "Mesa, AZ",
    type: "Former DIY Attempt",
    result: "11 Items Deleted | +144 Points in 45 Days"
  }
];

export function SocialProofPreview() {
  return (
    <section className="py-24 bg-alt-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-headline mb-6"
          >
            Real Results. Real Arizona Residents. Real Proof.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-sunset-amber text-sunset-amber" />
                ))}
              </div>
              
              <blockquote className="text-lg text-text-body italic leading-relaxed mb-8 flex-grow">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              
              <div className="mt-auto pt-6 border-t border-border-default">
                <p className="font-bold text-text-headline">{testimonial.name}</p>
                <p className="text-sm text-text-secondary mb-3">{testimonial.location} | {testimonial.type}</p>
                <div className="inline-block px-3 py-1 bg-sunken border border-turquoise-default/30 rounded-lg text-sm font-medium text-turquoise-default">
                  Result: {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/results"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-copper-default text-copper-default hover:bg-copper-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-lg"
          >
            See More Results →
          </Link>
          <p className="text-text-muted mt-6">Now here is the part where most people ask us exactly what they&apos;re getting.</p>
        </div>
      </div>
    </section>
  );
}
