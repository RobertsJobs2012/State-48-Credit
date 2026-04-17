/**
 * Single source of truth for all brand, contact, stats, pricing, and navigation data.
 * Updating anything here propagates across every page and schema block.
 */

export const site = {
  name: "State 48 Credit",
  legalName: "State 48 Credit LLC",
  tagline: "Arizona's most trusted credit repair — built by a survivor, for real people.",
  url: "https://state48credit.com",
  logoPath: "/images/logo.svg",
  ogImage: "/images/og-default.jpg",
  founded: "2010",

  phone: "602-377-6626",
  phoneHref: "tel:+16023776626",
  email: "State48Credit@gmail.com",
  emailHref: "mailto:State48Credit@gmail.com",

  address: {
    city: "Phoenix",
    region: "AZ",
    regionName: "Arizona",
    country: "US",
    countryName: "United States",
  },

  hours: {
    display: "Mon–Fri · 9am–6pm MST",
    open: "09:00",
    close: "18:00",
    days: ["Mo", "Tu", "We", "Th", "Fr"],
    timezone: "America/Phoenix",
  },

  social: {
    google: "https://g.page/state48credit",
    facebook: "https://facebook.com/state48credit",
    instagram: "https://instagram.com/state48credit",
    youtube: "https://youtube.com/@state48credit",
  },

  payment: ["Zelle", "Apple Pay"],
  licensing: "Licensed & bonded in Arizona",
  serviceArea: [
    "Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler",
    "Gilbert", "Glendale", "Peoria", "Surprise", "Avondale",
    "Tucson", "Flagstaff", "Prescott", "Sedona", "Yuma",
  ],
} as const;

export const founder = {
  name: "Robert Garcia",
  role: "Founder & Lead Credit Strategist",
  city: "Phoenix, AZ",
  photo: "/images/robert-garcia.jpg",
  story: "Robert survived identity theft in his early 20s — a stolen identity, a ruined credit report, and banks telling him he'd have to live with it for seven years. He refused. He spent two years learning credit law from the ground up, rebuilt his own profile, and in 2010 opened State 48 Credit to make sure no one in Arizona had to fight that battle alone.",
} as const;

export const stats = {
  clientsServed: 2041,
  itemsRemoved: 15892,
  debtEliminated: "20.4M",
  rating: 4.9,
  reviews: 412,
  yearsInBusiness: 2026 - 2010,
} as const;

export type PackageId = "essential" | "advanced" | "premier";

export const packages: Array<{
  id: PackageId;
  name: string;
  price: number;
  tagline: string;
  bestFor: string;
  timeline: string;
  featured?: boolean;
  features: string[];
}> = [
  {
    id: "essential",
    name: "Essential",
    price: 299,
    tagline: "Strong start for light damage.",
    bestFor: "First-time credit repair, 1–3 negative items, scores in the 580–650 range.",
    timeline: "Typical results in 45–90 days",
    features: [
      "Full 3-bureau credit audit (Equifax · Experian · TransUnion)",
      "Dispute letters for inaccurate collections, late payments & charge-offs",
      "Bureau + creditor verification push",
      "Monthly progress report with score tracking",
      "Direct text line to your credit strategist",
      "Credit rebuilding roadmap",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    price: 599,
    tagline: "Our most-chosen plan.",
    bestFor: "Multiple negatives, medical collections, repossessions, identity theft recovery.",
    timeline: "Typical results in 60–120 days",
    featured: true,
    features: [
      "Everything in Essential",
      "Advanced bureau challenges (Metro 2, FCRA §611, §623)",
      "Creditor goodwill & pay-for-delete negotiations",
      "Hard inquiry disputes",
      "Public records review (bankruptcies, judgments, tax liens)",
      "Identity-theft affidavit support & FTC report filing",
      "Personalized score-building plan (authorized users, secured cards, utilization)",
      "Priority response (within 1 business day)",
    ],
  },
  {
    id: "premier",
    name: "Premier",
    price: 849,
    tagline: "Maximum acceleration.",
    bestFor: "Mortgage prep, complex situations, high-balance debt, re-entering the workforce.",
    timeline: "Typical results in 90–150 days",
    features: [
      "Everything in Advanced",
      "Mortgage-ready strategy with lender coordination",
      "Debt validation & settlement negotiation",
      "Student loan & tax debt strategy",
      "Business credit framework (EIN, Dun & Bradstreet setup)",
      "Monthly 1-on-1 strategy calls with Robert",
      "Unlimited disputes until complete",
      "Post-repair credit monitoring onboarding",
    ],
  },
];

export const services = [
  {
    slug: "credit-repair",
    title: "Credit Repair",
    summary: "Remove inaccurate, outdated, and unverifiable negative items across all three bureaus.",
    icon: "spark",
  },
  {
    slug: "identity-theft-recovery",
    title: "Identity Theft Recovery",
    summary: "Full FTC-guided recovery, fraud-alert placement, and bureau correction — the exact process Robert used himself.",
    icon: "shield",
  },
  {
    slug: "debt-validation",
    title: "Debt Validation & Settlement",
    summary: "Force collectors to prove what you owe — or delete it. Negotiate balances down when validation succeeds.",
    icon: "scale",
  },
  {
    slug: "mortgage-prep",
    title: "Mortgage-Ready Credit",
    summary: "Get score-eligible for FHA, VA, and conventional loans. Coordinated with your lender.",
    icon: "home",
  },
  {
    slug: "credit-building",
    title: "Credit Building & Score Optimization",
    summary: "Tradelines, secured cards, utilization tuning, and authorized-user strategy.",
    icon: "trending",
  },
  {
    slug: "business-credit",
    title: "Business Credit",
    summary: "Build a business credit profile separate from your personal score — EIN, D&B, Paydex.",
    icon: "briefcase",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Free Credit Audit",
    detail: "Book a 15-minute call. We pull all three bureau reports, flag every negative item, and show you exactly what can come off — before you pay a dollar.",
    duration: "15 minutes",
  },
  {
    step: 2,
    title: "Custom Dispute Strategy",
    detail: "Robert builds your plan: which items to challenge, which laws apply (FCRA, FDCPA, Metro 2), and the order of operations. You approve it before we move.",
    duration: "Within 48 hours",
  },
  {
    step: 3,
    title: "We Fight, You Watch",
    detail: "We send the letters. Bureaus have 30 days to respond. You get monthly reports, text updates, and can reach Robert directly any time. Most clients see first removals in 30–45 days.",
    duration: "30–150 days",
  },
];

export const faq = [
  {
    q: "Is credit repair legal?",
    a: "Yes — 100%. The Fair Credit Reporting Act (FCRA) gives you the right to dispute anything on your credit report that is inaccurate, incomplete, or unverifiable. We don't bend rules. We use the law the way it was written.",
  },
  {
    q: "How long does credit repair take?",
    a: "Most of our clients see first removals in 30–45 days. A typical full repair cycle runs 60–150 days depending on how many items are on your report and how the creditors respond. Essential plans finish faster; Premier plans are unlimited until complete.",
  },
  {
    q: "What can actually be removed from my credit report?",
    a: "Anything inaccurate, outdated, or unverifiable: late payments, collections, charge-offs, repossessions, bankruptcies still showing past the 7/10-year mark, hard inquiries you didn't authorize, and identity-theft items. If it's accurate, recent, and properly verified — we won't promise to remove it. Anyone who does is lying.",
  },
  {
    q: "Can you guarantee a specific score increase?",
    a: "No honest credit repair company can. Anyone quoting you \"we'll raise your score 150 points\" is violating federal law (Credit Repair Organizations Act). What we can promise: we only work on items that have a legitimate legal basis for removal, and if nothing comes off in 90 days, you get your money back.",
  },
  {
    q: "How much does it cost?",
    a: "Flat, one-time pricing. Essential is $299, Advanced is $599, Premier is $849. No monthly fees. No surprise charges. No contracts. Pay once, we work until done.",
  },
  {
    q: "Do you work with people outside of Arizona?",
    a: "Yes. We're Phoenix-based and licensed in Arizona, but federal credit law is the same in all 50 states. Most of our clients are Arizonans, but we take on clients nationwide.",
  },
  {
    q: "What makes State 48 different from the big national chains?",
    a: "You talk to Robert. Not a call center. Not a different rep every month. The big chains charge monthly fees for 18+ months and farm disputes to offshore teams. We charge once, do the work in-house, and most clients finish in under six months.",
  },
  {
    q: "Will disputing items hurt my credit?",
    a: "No. Filing a dispute is a protected right under federal law and has zero impact on your score. Only the outcome — an item being removed or updated — changes your score.",
  },
  {
    q: "What do I need to get started?",
    a: "A photo ID, proof of address (utility bill or lease), and a copy of your recent credit report (we can pull it on the free audit call if you don't have one). That's it.",
  },
  {
    q: "What happens if nothing comes off?",
    a: "Full refund. We only take cases we believe we can win. If we somehow misjudge yours and nothing removes in the first 90 days, you get every dollar back.",
  },
];

export const testimonials = [
  {
    name: "Maria R.",
    city: "Phoenix, AZ",
    result: "+127 points in 94 days",
    quote: "Robert pulled 8 collections off my report that three other companies told me were impossible. I closed on my first house two months later.",
  },
  {
    name: "James T.",
    city: "Gilbert, AZ",
    result: "+89 points · mortgage approved",
    quote: "I'd been paying a national company $99/month for a year and a half. State 48 did more in three months than they did in eighteen — for a fraction of the total cost.",
  },
  {
    name: "Alicia K.",
    city: "Scottsdale, AZ",
    result: "11 items removed",
    quote: "Identity theft took three years of my life. Robert told me he'd been through it himself. He didn't just repair my credit — he walked me through every step and actually cared.",
  },
  {
    name: "Marcus D.",
    city: "Tempe, AZ",
    result: "+162 points in 5 months",
    quote: "Went from a 548 to a 710. Approved for a business line of credit last week. I tell everyone I know about State 48.",
  },
  {
    name: "Sandra L.",
    city: "Mesa, AZ",
    result: "4 medical collections removed",
    quote: "Every medical collection on my report came off. My score jumped 74 points after the first round of letters. I cried.",
  },
  {
    name: "Daniel O.",
    city: "Chandler, AZ",
    result: "Bankruptcy removed early",
    quote: "They got a bankruptcy off my report 18 months before it was supposed to expire. I didn't even know that was possible.",
  },
];

export const nav = [
  { label: "Services",      href: "/services" },
  { label: "How It Works",  href: "/how-it-works" },
  { label: "Results",       href: "/results" },
  { label: "Pricing",       href: "/pricing" },
  { label: "About",         href: "/about" },
];

export const footerNav = {
  company: [
    { label: "About Robert",      href: "/about" },
    { label: "Our Mission",       href: "/about#mission" },
    { label: "Compare Us",        href: "/comparison" },
    { label: "Reviews",           href: "/results#reviews" },
    { label: "Contact",           href: "/get-started" },
  ],
  services: [
    { label: "Credit Repair",           href: "/services#credit-repair" },
    { label: "Identity Theft Recovery", href: "/services#identity-theft-recovery" },
    { label: "Debt Validation",         href: "/services#debt-validation" },
    { label: "Mortgage-Ready Credit",   href: "/services#mortgage-prep" },
    { label: "Business Credit",         href: "/services#business-credit" },
  ],
  getStarted: [
    { label: "Free Credit Audit", href: "/get-started" },
    { label: "Pricing & Plans",   href: "/pricing" },
    { label: "How It Works",      href: "/how-it-works" },
    { label: "See Results",       href: "/results" },
    { label: "FAQ",               href: "/#faq" },
  ],
};
