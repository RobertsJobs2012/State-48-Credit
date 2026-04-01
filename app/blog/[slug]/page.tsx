import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User } from 'lucide-react';

// Mock data for blog posts (in a real app, this would come from a CMS or database)
const posts = [
  {
    slug: 'how-to-remove-collections-from-credit-report',
    title: 'How to Remove Collections from Your Credit Report in 2026',
    content: `
      <p>Dealing with collections on your credit report can be incredibly stressful. They drag down your score and signal to lenders that you are a high-risk borrower. However, many collections are reported inaccurately or illegally, giving you grounds for removal.</p>
      
      <h2>1. Understand Your Rights Under the FDCPA</h2>
      <p>The Fair Debt Collection Practices Act (FDCPA) protects consumers from abusive debt collection practices. It also requires collection agencies to prove that the debt is valid and that they have the legal right to collect it.</p>
      
      <h2>2. Request Debt Validation</h2>
      <p>Within 30 days of receiving a collection notice, you have the right to request debt validation. The collection agency must provide proof that you owe the debt, the amount is correct, and they are authorized to collect it. If they cannot provide this proof, they must remove the collection from your credit report.</p>
      
      <h2>3. Dispute Inaccuracies with the Credit Bureaus</h2>
      <p>If you find inaccuracies in how the collection is reported (e.g., wrong dates, incorrect balances, duplicate accounts), you can dispute the information directly with Equifax, Experian, and TransUnion under the Fair Credit Reporting Act (FCRA).</p>
      
      <h2>4. Negotiate a "Pay for Delete"</h2>
      <p>If the debt is valid and you are able to pay it, you can sometimes negotiate a "pay for delete" agreement. This means you agree to pay the debt (or a settled amount) in exchange for the collection agency agreeing to remove the account from your credit report entirely. Always get this agreement in writing before making a payment.</p>
      
      <h2>5. Seek Professional Help</h2>
      <p>Navigating the complex laws and dealing with aggressive collection agencies can be overwhelming. A reputable credit repair company like State 48 Credit can handle the entire process for you, leveraging advanced compliance audits to force the removal of inaccurate collections.</p>
    `,
    date: 'March 15, 2026',
    author: 'State 48 Credit Team',
    category: 'Credit Repair',
  },
  {
    slug: 'does-paying-off-collections-improve-score',
    title: 'Does Paying Off a Collection Improve Your Credit Score?',
    content: `
      <p>One of the most common misconceptions in credit repair is that simply paying off a collection account will immediately boost your credit score. Unfortunately, the reality is much more complicated.</p>
      
      <h2>The Truth About Paid Collections</h2>
      <p>Under older credit scoring models (like FICO 8, which is still widely used by many lenders, especially for mortgages), a paid collection is still a collection. It remains on your credit report for up to seven years from the date of the original delinquency, and its negative impact on your score does not disappear just because the balance is now zero.</p>
      
      <h2>Newer Scoring Models</h2>
      <p>Newer scoring models, such as FICO 9 and VantageScore 3.0 and 4.0, do ignore paid collection accounts. If a lender uses one of these newer models, paying off a collection could result in a score increase. However, you cannot control which scoring model a lender uses.</p>
      
      <h2>The "Pay for Delete" Strategy</h2>
      <p>Because a paid collection can still hurt your score on older models, the best strategy is often to negotiate a "pay for delete" agreement. This means you agree to pay the debt in exchange for the collection agency completely removing the account from your credit report. If successful, it's as if the collection never happened.</p>
      
      <h2>When to Pay Without Deletion</h2>
      <p>If a collection agency refuses a pay for delete, you may still need to pay the account, especially if you are trying to qualify for a mortgage. Many mortgage lenders require all outstanding collections to be paid or settled before they will approve a loan, regardless of the impact on your credit score.</p>
    `,
    date: 'February 28, 2026',
    author: 'State 48 Credit Team',
    category: 'Collections',
  },
  {
    slug: 'how-long-do-hard-inquiries-stay-on-credit-report',
    title: 'How Long Do Hard Inquiries Stay on Your Credit Report?',
    content: `
      <p>Every time you apply for new credit—whether it's a credit card, auto loan, or mortgage—the lender checks your credit report. This is known as a "hard inquiry" or "hard pull."</p>
      
      <h2>The Lifespan of a Hard Inquiry</h2>
      <p>Hard inquiries remain on your credit report for exactly <strong>two years (24 months)</strong> from the date the inquiry was made. After two years, they automatically fall off your report.</p>
      
      <h2>The Impact on Your Credit Score</h2>
      <p>While hard inquiries stay on your report for two years, they only impact your FICO credit score for the first <strong>12 months</strong>. After one year, the inquiry is still visible to lenders, but it no longer factors into your score calculation.</p>
      
      <h2>How Much Does an Inquiry Hurt?</h2>
      <p>A single hard inquiry typically drops your score by only a few points (usually less than 5 points). However, multiple hard inquiries in a short period can have a compounding negative effect, signaling to lenders that you are desperate for credit or taking on too much debt.</p>
      
      <h2>Rate Shopping Exception</h2>
      <p>Credit scoring models are designed to allow you to shop around for the best rates on auto loans, mortgages, and student loans. If you have multiple inquiries for the same type of loan within a short window (typically 14 to 45 days, depending on the scoring model), they are treated as a single inquiry for scoring purposes.</p>
      
      <h2>Removing Unauthorized Inquiries</h2>
      <p>If you see hard inquiries on your report that you did not authorize, you may be a victim of identity theft. You have the right to dispute these unauthorized inquiries with the credit bureaus and have them removed from your report.</p>
    `,
    date: 'February 10, 2026',
    author: 'State 48 Credit Team',
    category: 'Inquiries',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | State 48 Credit',
    };
  }

  return {
    title: `${post.title} | State 48 Credit Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#1B1714] to-[#211913] z-0" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-turquoise-default hover:text-turquoise-hover font-medium mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
            <span className="px-3 py-1 bg-sunken rounded-full text-turquoise-default font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{post.author}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-text-headline mb-6 leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-alt-bg">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <div 
              className="prose prose-invert prose-copper max-w-none
                prose-headings:font-bold prose-headings:text-text-headline
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-text-body prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-turquoise-default prose-a:no-underline hover:prose-a:text-turquoise-hover
                prose-strong:text-text-headline prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-8 border-t border-border-default text-center">
              <h3 className="text-2xl font-bold text-text-headline mb-4">Need Help With Your Credit?</h3>
              <p className="text-text-secondary mb-8">
                Our team of experts is ready to help you navigate your credit repair journey. Get a free, no-obligation analysis today.
              </p>
              <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg">
                Get My Free Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
