import { SITE_NAME } from '@/lib/seo';

type Props = {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
};

export default function ServiceJsonLd({ name, description, url, serviceType }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
    serviceType: serviceType || name,
    url,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

