import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://state48credit.com';
  
  const routes = [
    '',
    '/services',
    '/how-it-works',
    '/results',
    '/pricing',
    '/about',
    '/compare',
    '/get-started',
    '/contact',
    '/services/collections-removal-arizona',
    '/services/inquiry-removal-phoenix',
    '/services/bankruptcy-removal-arizona',
    '/services/identity-theft-restoration-arizona',
    '/services/repossession-removal-arizona',
    '/services/foreclosure-removal-arizona',
    '/blog',
    '/blog/how-to-remove-collections-from-credit-report',
    '/blog/does-paying-off-collections-improve-score',
    '/blog/how-long-do-hard-inquiries-stay-on-credit-report',
    '/locations/phoenix',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
