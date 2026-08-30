import type { Metadata } from 'next';
import Header from '@/components/Header';
import Servicos from '@/components/Servicos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, createPageMetadata, safeJsonLd } from '@/lib/seo';
import { serviceCatalog } from '@/lib/services';

export const metadata: Metadata = createPageMetadata({
  title: 'Serviços de Tecnologia para Empresas',
  description:
    'Serviços de tecnologia em São Paulo: consultoria de TI, software sob medida, IA, automação, cloud, dados, Protheus, sites, e-commerce, apps e UX/UI.',
  path: '/servicos',
  keywords: [
    'serviços de tecnologia para empresas',
    'consultoria em TI',
    'software sob medida',
    'inteligência artificial para empresas',
  ],
});

export default function ServicosPage() {
  const pageUrl = absoluteUrl('/servicos');
  const breadcrumb = {
    ...breadcrumbJsonLd([
      { name: 'Início', path: '/' },
      { name: 'Serviços', path: '/servicos' },
    ]),
    '@id': `${pageUrl}#breadcrumb`,
  };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Serviços de Tecnologia para Empresas',
        description: 'Consultoria, engenharia e operação de tecnologia para empresas em São Paulo e em todo o Brasil.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        mainEntity: { '@id': `${pageUrl}#services` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#services`,
        name: 'Serviços da Mattos Tech Solutions',
        numberOfItems: serviceCatalog.length,
        itemListElement: serviceCatalog.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.name,
          url: absoluteUrl(service.path),
        })),
      },
      breadcrumb,
    ],
  };

  return (
    <div className="mts-service-page min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Header />
      <main id="conteudo">
        <section className="bg-slate-950 px-4 pb-4 pt-32 text-center">
          <div className="mx-auto max-w-4xl">
            <span className="service-eyebrow">PORTFÓLIO DE SERVIÇOS</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tecnologia conectada aos objetivos da sua empresa
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Do diagnóstico à evolução contínua, combinamos estratégia, engenharia e operação para resolver desafios reais com segurança e clareza.
            </p>
          </div>
        </section>
        <Servicos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
