import { SERVICE_AREAS, SITE_NAME, SITE_URL } from '@/lib/seo';

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
      url: SITE_URL,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    serviceType: serviceType || name,
    url,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
