import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://state48credit.com';
  
  // Check if we are in a staging or development environment
  const isStaging = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' || process.env.NODE_ENV !== 'production';

  if (isStaging) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/search',
        '/*?*', // Block URLs with query parameters
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
