import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    host: 'https://mattostechsolutions.com',
    sitemap: 'https://mattostechsolutions.com/sitemap.xml',
  };
}
