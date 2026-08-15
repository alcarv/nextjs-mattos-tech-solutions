import {
  SERVICE_AREAS,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  safeJsonLd,
} from '@/lib/seo';

type Props = {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
};

export default function ServiceJsonLd({ name, description, url, serviceType }: Props) {
  const pageUrl = absoluteUrl(url);
  const path = new URL(pageUrl).pathname;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name,
        description,
        provider: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: SERVICE_AREAS.map((area) => ({
          '@type': area === 'Brasil' ? 'Country' : 'AdministrativeArea',
          name: area,
        })),
        serviceType: serviceType || name,
        url: pageUrl,
      },
      breadcrumbJsonLd([
        { name: 'Início', path: '/' },
        { name: 'Serviços', path: '/servicos' },
        { name, path },
      ]),
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
  );
}
