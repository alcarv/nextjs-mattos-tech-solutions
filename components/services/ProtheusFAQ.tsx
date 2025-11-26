import Reveal from '@/components/Reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Vocês trabalham com Protheus 12 e versões anteriores?',
    answer:
      'Nosso foco é Protheus 12. Em ambientes legados, mapeamos riscos e desenhamos o plano de atualização com testes em homologação antes da virada.',
  },
  {
    question: 'Cobrem TAF, TSS e obrigações fiscais (SPED, NF-e, eSocial)?',
    answer:
      'Sim. Validamos parametrizações, schemas e rotinas críticas, aplicamos atualizações necessárias e deixamos trilhas de auditoria para fiscal/contábil.',
  },
  {
    question: 'Podemos começar com um diagnóstico rápido?',
    answer:
      'Rodamos um assessment em 1 a 2 semanas para identificar gargalos, riscos fiscais, integrações frágeis e oportunidades de quick wins.',
  },
  {
    question: 'Como vocês evitam impactos ao customizar o Protheus?',
    answer:
      'Usamos boas práticas TOTVS: versionamento, ambientes separados, documentação e planos de reversão. Todas as mudanças passam por homologação e testes integrados.',
  },
  {
    question: 'Vocês oferecem sustentação recorrente?',
    answer:
      'Disponibilizamos planos mensais com SLAs, monitoramento de jobs, gestão de chamados e evolução contínua alinhada às áreas de negócio.',
  },
];

export default function ProtheusFAQ() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Dúvidas sobre Consultoria em Protheus
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Transparência do diagnóstico à operação para que seu ERP siga estável, em conformidade e integrado.
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
