export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://mattostechsolutions.com.br';
export const SITE_NAME = 'Mattos Tech Solutions';
export const SITE_DESCRIPTION =
  'Consultoria em TI, desenvolvimento de software, IA e soluções digitais que impulsionam empresas a partir de São Paulo (região do Tatuapé), atendendo Sorocaba, Campinas e todo o Brasil.';

export const BUSINESS_PHONE = '+5511990183194';
export const BUSINESS_EMAIL = 'mattostechsolutions@gmail.com';
export const SERVICE_AREAS = [
  'São Paulo - Tatuapé - SP',
  'Zona Leste - SP',
  'Sorocaba - SP',
  'Campinas - SP',
  'Brasil',
] as const;

export const COMPANY_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Tatuapé',
  addressLocality: 'São Paulo',
  addressRegion: 'SP',
  addressCountry: 'BR',
} as const;

export const COMPANY_GEO = {
  '@type': 'GeoCoordinates',
  latitude: -23.536,
  longitude: -46.575,
} as const;

export const ORG_LOGO = `${SITE_URL}/favicon.svg`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    email: BUSINESS_EMAIL,
    address: COMPANY_ADDRESS,
    geo: COMPANY_GEO,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        contactType: 'sales',
        areaServed: SERVICE_AREAS.map((area) => ({
          '@type': 'AdministrativeArea',
          name: area,
        })),
        availableLanguage: ['pt-BR'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/mattostechsolutions/',
      'https://wa.me/5511990183194',
    ],
  } as const;
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: ORG_LOGO,
    email: BUSINESS_EMAIL,
    telephone: BUSINESS_PHONE,
    priceRange: '$$',
    address: COMPANY_ADDRESS,
    geo: COMPANY_GEO,
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '14:00',
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
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  } as const;
}
