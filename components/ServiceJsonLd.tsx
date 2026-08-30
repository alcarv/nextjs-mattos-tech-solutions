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
  faqs?: ReadonlyArray<{ question: string; answer: string }>;
};

export default function ServiceJsonLd({ name, description, url, serviceType, faqs }: Props) {
  const pageUrl = absoluteUrl(url);
  const path = new URL(pageUrl).pathname;
  const breadcrumb = {
    ...breadcrumbJsonLd([
      { name: 'Início', path: '/' },
      { name: 'Serviços', path: '/servicos' },
      { name, path },
    ]),
    '@id': `${pageUrl}#breadcrumb`,
  };
  const faqPage = faqs?.length
    ? {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: `${pageUrl}#faq`,
        isPartOf: { '@id': `${pageUrl}#webpage` },
        inLanguage: 'pt-BR',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : undefined;
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
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${pageUrl}#service` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      breadcrumb,
      ...(faqPage ? [faqPage] : []),
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
  );
}
