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
    {
      q: 'Quais serviços vocês oferecem?',
      a:
        'Consultoria em TI, desenvolvimento web e mobile, migração para nuvem, soluções de e-commerce, UX/UI, dados e analytics, além de avaliações e governança de TI.',
    },
    {
      q: 'Como funciona o processo de orçamento?',
      a:
        'Após entender suas necessidades, enviamos uma proposta com escopo, prazos e investimentos estimados. Projetos podem ser por escopo fechado ou horas dedicadas (time & material).',
    },
    {
      q: 'Quais tecnologias vocês utilizam?',
      a:
        'Trabalhamos com tecnologias modernas como React/Next.js, Node.js, bancos de dados relacionais e não relacionais, integrações com APIs e provedores cloud líderes.',
    },
    {
      q: 'Qual é o prazo típico de um projeto?',
      a:
        'Depende do escopo. Projetos menores podem levar de 2 a 6 semanas; soluções mais complexas variam de 2 a 4 meses ou mais. Definimos milestones e entregas parciais.',
    },
    {
      q: 'Vocês oferecem suporte e manutenção?',
      a:
        'Sim. Podemos firmar planos de suporte e manutenção contínua com SLA, incluindo correções, atualizações e melhorias evolutivas.',
    },
    {
      q: 'Como é feita a gestão do projeto?',
      a:
        'Seguimos boas práticas ágeis com sprints, checkpoints e comunicação transparente. Utilizamos ferramentas de planejamento, versionamento e monitoramento.',
    },
    {
      q: 'Como garantem a segurança e confidencialidade?',
      a:
        'Aplicamos padrões de segurança, controle de acesso e boas práticas de desenvolvimento seguro. Podemos assinar acordos de confidencialidade (NDA) quando necessário.',
    },
    {
      q: 'Quem é o dono do código e da propriedade intelectual?',
      a:
        'Salvo acordo em contrário, o cliente detém os direitos do código/entregáveis produzidos mediante quitação, excetuando-se bibliotecas e componentes de terceiros utilizados.',
    },
    {
      q: 'Como posso falar com a equipe?',
      a:
        'Envie um e-mail para contato@mattostechsolutions.com ou fale pelo WhatsApp no rodapé do site. Também podemos agendar uma call para entender o seu projeto.',
    },
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
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Header />
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FAQ – Perguntas Frequentes</h1>
          <p className="text-gray-500 mb-8">Encontre respostas rápidas sobre nossos serviços e forma de trabalho.</p>

          <div className="divide-y divide-gray-200 rounded-md border border-gray-200 bg-white">
            {faqs.map((item, idx) => (
              <div key={idx} className="p-5">
                <h2 className="text-lg font-semibold text-gray-900">{item.q}</h2>
                <p className="mt-2 text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-gray-700">
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
