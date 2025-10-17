import Reveal from '@/components/Reveal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Quanto tempo leva para colocar um projeto de IA em produção?',
    answer:
      'Nosso processo começa com discovery e definição de indicadores. Em seguida, rodamos um MVP funcional em 3 a 6 semanas. A partir da validação, seguimos para integrações completas e governança contínua.',
  },
  {
    question: 'Vocês trabalham com dados sensíveis e LGPD?',
    answer:
      'Sim. Construímos fluxos com anonimização quando necessário, definimos papéis, acessos e registramos logs de uso. Selecionamos provedores que oferecem isolamento e monitoramento adequado para o seu caso.',
  },
  {
    question: 'Qual o investimento médio em projetos de IA?',
    answer:
      'Variamos de pacotes de discovery e MVP a partir de R$ 8 mil até projetos enterprise com operação contínua. Ajustamos escopo e time dedicado conforme o valor esperado e a complexidade do cenário.',
  },
  {
    question: 'Podemos usar IA mesmo sem grande equipe técnica interna?',
    answer:
      'Combinamos automações low-code e integrações customizadas. Também treinamos a equipe para operar e evoluir a solução, garantindo autonomia com suporte estratégico da Mattos Tech.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer:
      'Oferecemos planos de operação, monitoramento e evolução contínua com KPIs, além de sessões periódicas para otimização e novos casos de uso.',
  },
];

export default function AIFAQ() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Dúvidas comuns sobre nossos projetos de IA
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Transparência do planejamento à operação para você decidir com segurança como adotar IA na sua empresa.
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
