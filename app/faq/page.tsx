import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FAQ – Perguntas Frequentes - Mattos Tech Solutions',
  description:
    'Tire dúvidas sobre serviços, prazos, tecnologias, suporte, orçamento e mais. Veja as principais perguntas e respostas sobre a Mattos Tech Solutions.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ – Perguntas Frequentes - Mattos Tech Solutions',
    description:
      'Perguntas e respostas sobre serviços, prazos, tecnologias, suporte e orçamento.',
    url: 'https://mattostechsolutions.com/faq',
  },
};

export default function FAQPage() {
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
        'Envie um e‑mail para contato@mattostech.com ou fale pelo WhatsApp no rodapé do site. Também podemos agendar uma call para entender o seu projeto.',
    },
  ];

  return (
    <main className="min-h-screen">
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
              <a href="mailto:contato@mattostech.com" className="text-blue-600 hover:underline">contato@mattostech.com</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

