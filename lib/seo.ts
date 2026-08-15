import type { Metadata } from 'next';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://mattostechsolutions.com'
).replace(/\/$/, '');
export const SITE_NAME = 'Mattos Tech Solutions';
export const SITE_DESCRIPTION =
  'Consultoria em TI, software sob medida, automação, Inteligência Artificial e cloud para empresas em São Paulo e em todo o Brasil.';

export const BUSINESS_PHONE = '+5511990183194';
export const BUSINESS_EMAIL = 'contato@mattostechsolutions.com';
export const BUSINESS_TAX_ID = '54.019.901/0001-54';
export const ORG_LOGO = `${SITE_URL}/logo.svg`;
export const SOCIAL_IMAGE = `${SITE_URL}/opengraph-image`;

export const SERVICE_AREAS = [
  'São Paulo - SP',
  'Grande São Paulo - SP',
  'Sorocaba - SP',
  'Campinas - SP',
  'Brasil',
] as const;

export const COMPANY_ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'São Paulo',
  addressRegion: 'SP',
  addressCountry: 'BR',
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function absoluteUrl(path = '/') {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'pt_BR',
      type: 'website',
      images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}

function areaServedJsonLd() {
  return SERVICE_AREAS.map((area) => ({
    '@type': area === 'Brasil' ? 'Country' : 'AdministrativeArea',
    name: area,
  }));
}

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        logo: {
          '@type': 'ImageObject',
          url: ORG_LOGO,
          width: 512,
          height: 512,
        },
        email: BUSINESS_EMAIL,
        telephone: BUSINESS_PHONE,
        taxID: BUSINESS_TAX_ID,
        address: COMPANY_ADDRESS,
        areaServed: areaServedJsonLd(),
        founder: {
          '@type': 'Person',
          name: 'Alefe de Carvalho',
          jobTitle: 'Founder e Tech Lead',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: BUSINESS_PHONE,
          email: BUSINESS_EMAIL,
          contactType: 'sales',
          areaServed: 'BR',
          availableLanguage: 'pt-BR',
        },
        sameAs: ['https://www.instagram.com/mattostechsolutions/'],
        knowsAbout: [
          'Desenvolvimento de software',
          'Inteligência Artificial',
          'Automação de processos',
          'Cloud computing',
          'DevOps',
          'Consultoria em TI',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'pt-BR',
        description: SITE_DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  } as const;
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}
