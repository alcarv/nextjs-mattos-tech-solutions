import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Plus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/products/ProductCard';
import { productCatalog } from '@/lib/products';
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, createPageMetadata, safeJsonLd } from '@/lib/seo';
import styles from '@/components/products/products.module.css';

const description = 'Conheça o Mattos Auto e o PaperCRM, produto criado em conjunto pela Mattos Tech Solutions e pela Sinapse AI. Fale com nossa equipe sobre cada solução.';

export const metadata: Metadata = createPageMetadata({
  title: 'Produtos: Mattos Auto e PaperCRM',
  description,
  path: '/produtos',
  keywords: ['Mattos Auto', 'PaperCRM', 'produtos Mattos Tech Solutions', 'Sinapse AI'],
});

export default function ProdutosPage() {
  const pageUrl = absoluteUrl('/produtos');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Produtos: Mattos Auto e PaperCRM',
        description,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${pageUrl}#products` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#products`,
        name: 'Produtos da Mattos Tech Solutions',
        numberOfItems: productCatalog.length,
        itemListElement: productCatalog.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'SoftwareApplication',
            name: product.name,
            description: product.description,
            url: product.productionUrl ?? `${pageUrl}#${product.id}`,
            creator: product.creators.map(name => ({ '@type': 'Organization', name })),
          },
        })),
      },
      {
        ...breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Produtos', path: '/produtos' }]),
        '@id': `${pageUrl}#breadcrumb`,
      },
    ],
  };

  return (
    <div className={`mts-page ${styles.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <a className="mts-skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <section className={styles.hero}>
          <div className="mts-container">
            <nav className={styles.breadcrumb} aria-label="Caminho de navegação"><Link href="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Produtos</span></nav>
            <span className="mts-kicker"><i /> PRODUTOS / MATTOS TECH SOLUTIONS</span>
            <h1>Nossa tecnologia,<br /><em>em forma de produto.</em></h1>
            <div className={styles.heroBottom}>
              <p>Conheça o Mattos Auto, da Mattos Tech Solutions, e o PaperCRM, criado em conjunto com a Sinapse AI.</p>
              <a href="#produtos" className={styles.explore}>EXPLORE OS PRODUTOS <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="produtos" className={styles.catalog} aria-label="Mattos Auto e PaperCRM">
          <div className={`mts-container ${styles.grid}`}>
            {productCatalog.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
          </div>
        </section>

        <section className={styles.partnership} aria-labelledby="partnership-title">
          <div className={`mts-container ${styles.partnershipInner}`}>
            <div><span className={styles.eyebrow}>POR TRÁS DO PAPERCRM</span><h2 id="partnership-title">Duas empresas.<br />Uma criação conjunta.</h2><p>O PaperCRM é uma criação da Mattos Tech Solutions + Sinapse AI. Uma parceria que faz parte da identidade do produto.</p></div>
            <div className={styles.partnershipBrands}><strong>Mattos<span>Tech Solutions</span></strong><Plus aria-label="em conjunto com" /><strong>Sinapse<span>AI</span></strong></div>
          </div>
        </section>

        <section className={styles.serviceNote} aria-labelledby="custom-software-title">
          <div className="mts-container"><div><h2 id="custom-software-title">Sua empresa precisa de uma solução sob medida?</h2><p>Também desenvolvemos software a partir dos desafios da sua operação.</p></div><Link href="/criacao-software">Conhecer o desenvolvimento sob medida <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
