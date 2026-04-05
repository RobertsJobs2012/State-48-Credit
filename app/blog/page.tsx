import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credit Repair Blog | State 48 Credit',
  description: 'Expert advice, tips, and news on credit repair, collections, and financial health in Arizona.',
};

// Mock data for blog posts
const posts = [
  {
    slug: 'how-to-remove-collections-from-credit-report',
    title: 'How to Remove Collections from Your Credit Report in 2026',
    excerpt: 'A step-by-step guide to understanding your rights under the FDCPA and how to legally remove inaccurate collection accounts.',
    date: 'March 15, 2026',
    author: 'State 48 Credit Team',
    category: 'Credit Repair',
  },
  {
    slug: 'does-paying-off-collections-improve-score',
    title: 'Does Paying Off a Collection Improve Your Credit Score?',
    excerpt: 'The truth about "pay for delete" and why simply paying a collection agency might not give you the score boost you expect.',
    date: 'February 28, 2026',
    author: 'State 48 Credit Team',
    category: 'Collections',
  },
  {
    slug: 'how-long-do-hard-inquiries-stay-on-credit-report',
    title: 'How Long Do Hard Inquiries Stay on Your Credit Report?',
    excerpt: 'Understanding the difference between hard and soft inquiries, and how to remove unauthorized hard pulls from your report.',
    date: 'February 10, 2026',
    author: 'State 48 Credit Team',
    category: 'Inquiries',
  },
];

export default async function BlogPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-headline mb-6 leading-tight">
            Credit Repair <span className="text-copper-default">Insights</span>
          </h1>
          <p className="text-xl text-text-lifted leading-relaxed font-light">
            Expert advice, strategies, and news to help you navigate the credit system and take back your financial freedom.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="glass-panel rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                    <span className="px-3 py-1 bg-sunken rounded-full text-turquoise-default font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-text-headline mb-4 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-copper-default transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-text-secondary leading-relaxed mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border-default">
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-copper-default hover:text-copper-hover font-semibold inline-flex items-center transition-colors">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
