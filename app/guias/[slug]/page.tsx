import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { decisionGuides, getDecisionGuide } from '@/lib/decision-guides';
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, safeJsonLd, SITE_NAME, SITE_URL } from '@/lib/seo';
import { whatsappLink } from '@/lib/contact';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return decisionGuides.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const guide = getDecisionGuide((await params).slug);
  if (!guide) notFound();
  return createPageMetadata({title:guide.title,description:guide.description,path:`/guias/${guide.slug}`});
}
export default async function GuidePage({params}: Props) {
  const guide = getDecisionGuide((await params).slug);
  if (!guide) notFound();
  const path = `/guias/${guide.slug}`;
  const schema = {'@context':'https://schema.org', '@graph':[
    {'@type':'Article','@id':`${absoluteUrl(path)}#article`,headline:guide.title,description:guide.description,inLanguage:'pt-BR', mainEntityOfPage:absoluteUrl(path),author:{'@type':'Organization',name:SITE_NAME,'@id':`${SITE_URL}/#organization`},publisher:{'@id':`${SITE_URL}/#organization`}},
    breadcrumbJsonLd([{name:'Início',path:'/'},{name:'Guias',path:'/guias'},{name:guide.title,path}]),
  ]};
  return (
    <div className="mts-service-page">
      <Header />
      <main id="conteudo" className="value-section guide-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:safeJsonLd(schema)}} />
        <article className="mts-container guide-article">
          <nav aria-label="Breadcrumb"><Link href="/">Início</Link><span aria-hidden="true">/</span><Link href="/guias">Guias</Link></nav>
          <header className="value-heading"><span className="value-eyebrow">DECISÃO DE TECNOLOGIA</span><h1>{guide.title}</h1><p>Por <Link href="/#sobre">{SITE_NAME}</Link></p></header>
          <div className="guide-answer"><strong>Para começar</strong><p>{guide.answer}</p></div>
          <nav className="guide-index" aria-label="Neste guia"><strong>Neste guia</strong>{guide.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav>
          <section aria-labelledby="comparison-title"><h2 id="comparison-title">O que comparar na prática</h2><div className="guide-table" tabIndex={0} role="region" aria-label="Tabela comparativa com rolagem horizontal"><table><thead><tr>{guide.comparison.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{guide.comparison.rows.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table></div></section>
          {guide.sections.map(section => <section key={section.id} id={section.id}><h2>{section.title}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}{section.checklist && <ul>{section.checklist.map(item => <li key={item}>{item}</li>)}</ul>}</section>)}
          <aside className="guide-answer"><h2>Como isso se aplica à sua empresa?</h2><p>Conte seu objetivo, o que já usa e o que está difícil hoje. Vamos entender as alternativas e o próximo passo possível para o seu cenário.</p><a href={whatsappLink(`Olá! Li o guia "${guide.title}". ${guide.cta}.`)} target="_blank" rel="noopener noreferrer" className="mts-button mts-button--primary">{guide.cta} ↗</a><Link className="value-link" href={guide.service}>Conhecer {guide.serviceLabel}</Link></aside>
          <nav className="guide-index" aria-label="Outros guias"><strong>Continue comparando</strong>{decisionGuides.filter(item=>item.slug!==guide.slug).map(item=><Link key={item.slug} href={`/guias/${item.slug}`}>{item.title}</Link>)}</nav>
        </article>
      </main>
      <Footer />
    </div>
  );
}
