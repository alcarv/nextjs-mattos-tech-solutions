import Reveal from '@/components/Reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Como definimos o escopo inicial sem travar o projeto?',
    answer:
      'Iniciamos com discovery focado em objetivos de negócio, personas e jornadas prioritárias. Priorizamos um MVP com entregas quinzenais, mantendo backlog vivo para evoluções sem travar o cronograma.',
  },
  {
    question: 'Vocês assumem projetos já iniciados ou legados?',
    answer:
      'Sim. Fazemos uma avaliação técnica do stack atual, identificamos riscos e criamos um plano de estabilização antes de acelerar novas funcionalidades ou reescritas graduais.',
  },
  {
    question: 'Qual a equipe envolvida em um projeto típico?',
    answer:
      'Montamos squads com tech lead, devs full stack, QA, UX e product manager conforme a necessidade. Também podemos trabalhar junto com seu time interno compartilhando práticas e documentação.',
  },
  {
    question: 'Como garantir qualidade e segurança?',
    answer:
      'Trabalhamos com code review, testes automatizados (unitários, integração e e2e quando faz sentido), pipelines CI/CD e checklist de segurança baseado em OWASP e LGPD.',
  },
  {
    question: 'E após a entrega do MVP?',
    answer:
      'Oferecemos planos de operação assistida, suporte e squads de evolução contínua com metas alinhadas à sua estratégia. Reportamos métricas e oportunidades a cada ciclo.',
  },
];

export default function SoftwareFAQ() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            O que você precisa saber antes de desenvolver seu software
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Transparência em cada etapa para criar uma parceria com previsibilidade e foco em resultados.
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
