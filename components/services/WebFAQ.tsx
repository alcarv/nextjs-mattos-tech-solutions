import Reveal from '@/components/Reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Quanto tempo leva para lançar um site com vocês?',
    answer:
      'Projetos institucionais costumam levar de 6 a 10 semanas, incluindo discovery, conteúdo, design e implementação. Landing pages podem ficar prontas em ciclos de 2 a 4 semanas conforme escopo.',
  },
  {
    question: 'Posso editar o conteúdo do site depois?',
    answer:
      'Sim. Entregamos via CMS headless ou painel customizado e oferecemos treinamento rápido para que seu time faça atualizações sem depender de código.',
  },
  {
    question: 'Vocês criam o conteúdo e os textos também?',
    answer:
      'Co-criamos com seu time. Conduzimos entrevistas, sugerimos copy e fazemos a produção junto com experts internos para garantir que tudo esteja alinhado à estratégia.',
  },
  {
    question: 'Como funcionam SEO e métricas?',
    answer:
      'Configuramos SEO técnico, schema, sitemap, analytics, pixel e ferramentas como Google Search Console. Também recomendamos dashboards para monitorar resultados.',
  },
  {
    question: 'E depois do go-live?',
    answer:
      'Podemos seguir com planos de evolução contínua: novos testes A/B, landing pages, melhorias de SEO, integração com automações e suporte técnico.',
  },
];

export default function WebFAQ() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Antes de lançar seu novo site</h2>
          <p className="mt-3 text-lg text-slate-300">
            Respondemos às dúvidas mais comuns para garantir um projeto ágil, sustentável e alinhado às suas metas.
          </p>
        </Reveal>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur">
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index + 1}`} className="border-slate-800">
                <AccordionTrigger className="text-left text-base text-white hover:text-blue-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
