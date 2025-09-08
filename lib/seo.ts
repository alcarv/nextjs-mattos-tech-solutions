export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mattostechsolutions.com';
export const SITE_NAME = 'Mattos Tech Solutions';

export const ORG_LOGO = `${SITE_URL}/favicon.svg`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+5511990183194',
        contactType: 'customer service',
        availableLanguage: ['pt-BR'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/mattostechsolutions/',
      'https://wa.me/5511990183194',
    ],
  } as const;
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'pt-BR',
  } as const;
}

