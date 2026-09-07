import { buyingFaqs } from '@/lib/service-value';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata, safeJsonLd } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Perguntas Frequentes',
  description: 'Respostas sobre serviços, orçamento, prazos, tecnologias, segurança, propriedade intelectual, suporte e forma de trabalho da Mattos Tech Solutions.',
  path: '/faq',
});

const faqs = [
  ...buyingFaqs,
  { q: 'Quais serviços vocês oferecem?', a: 'Consultoria de TI, software sob medida, sites, aplicativos, e-commerce, inteligência artificial, Protheus, nuvem, dados, UX/UI, avaliações e governança. A escolha começa pelo problema que sua empresa precisa resolver.' },
  { q: 'Qual é o prazo de um projeto?', a: 'O prazo depende das entregas, integrações, disponibilidade de dados e validações da sua equipe. A proposta apresenta uma estimativa por etapa e as dependências. Mudanças nessas condições precisam ser reavaliadas em conjunto.' },
  { q: 'Como tratam segurança e confidencialidade?', a: 'Definimos acessos e práticas de segurança de acordo com o escopo e a sensibilidade dos dados. Acordos de confidencialidade podem ser formalizados quando necessários. Responsabilidades e requisitos devem ser alinhados antes do acesso ao ambiente.' },
];

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <main className="mts-service-page min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Header />
      <section className="bg-card py-16 pt-32">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">FAQ – Perguntas Frequentes</h1>
          <p className="text-muted-foreground mb-8">Entenda escopo, investimento, prazos e responsabilidades antes de contratar.</p>

          <div className="divide-y divide-border rounded-md border border-border bg-card">
            {faqs.map((item, idx) => (
              <div key={idx} className="p-5">
                <h2 className="text-lg font-semibold text-foreground">{item.q}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-muted-foreground">
            <p>
              Não encontrou sua resposta? Fale com a gente em{' '}
              <a href="mailto:contato@mattostechsolutions.com" className="text-blue-600 hover:underline">contato@mattostechsolutions.com</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
