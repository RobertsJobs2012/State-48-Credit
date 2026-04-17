import { site, founder, stats, packages, faq, testimonials } from "./site";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}${site.logoPath}`,
    telephone: site.phone,
    email: site.email,
    foundingDate: site.founded,
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
      image: `${site.url}${founder.photo}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    sameAs: Object.values(site.social),
  };
}

export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${site.url}#localbusiness`,
    name: site.name,
    image: `${site.url}${site.ogImage}`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$299 – $849",
    paymentAccepted: site.payment.join(", "),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceArea.map((c) => ({
      "@type": "City",
      name: c,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.open,
      closes: site.hours.close,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: stats.rating.toFixed(1),
      reviewCount: stats.reviews,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function personSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}#founder`,
    name: founder.name,
    jobTitle: founder.role,
    worksFor: { "@id": `${site.url}#organization` },
    image: `${site.url}${founder.photo}`,
    description: founder.story,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
    },
  };
}

export function serviceSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Credit Repair",
    provider: { "@id": `${site.url}#organization` },
    areaServed: {
      "@type": "State",
      name: "Arizona",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Credit Repair Packages",
      itemListElement: packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.toFixed(2),
        priceCurrency: "USD",
        description: p.tagline,
      })),
    },
  };
}

export function faqSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function reviewsSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}#reviews`,
    name: site.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: stats.rating.toFixed(1),
      reviewCount: stats.reviews,
      bestRating: "5",
    },
    review: testimonials.slice(0, 6).map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
  };
}

export function howToSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Credit Repair Works with State 48 Credit",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Free Credit Audit",
        text: "Book a 15-minute call. We pull all three bureau reports and flag every negative item.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Custom Dispute Strategy",
        text: "Robert builds your plan and shows you exactly which items we'll challenge — you approve before we move.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "We Fight, You Watch",
        text: "We file the disputes, monitor bureau responses, and send monthly progress updates until your credit is clean.",
      },
    ],
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}#organization` },
    inLanguage: "en-US",
  };
}

