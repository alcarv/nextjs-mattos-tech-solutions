import { Lightbulb, LineChart, MessagesSquare, Workflow, ShieldCheck, GraduationCap, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string;
};

const useCases: UseCase[] = [
  {
    icon: MessagesSquare,
    title: 'Atendimento inteligente',
    description:
      'Chatbots e copilots multicanal para WhatsApp, web e apps internos com transferência para humanos sem atrito.',
    outcomes: 'Redução de até 70% no tempo de resposta e disponibilidade 24/7.',
  },
  {
    icon: Workflow,
    title: 'Automação de processos',
    description:
      'Orquestração de fluxos com IA para análise de documentos, triagem de chamados e criação de relatórios.',
    outcomes: 'Menos tarefas repetitivas, maior padronização e compliance.',
  },
  {
    icon: LineChart,
    title: 'Decisões data-driven',
    description:
      'RAG e modelos preditivos conectados aos seus bancos de dados, ERPs e CRMs para consultas contextuais.',
    outcomes: 'Insights confiáveis e time com autonomia para explorar dados.',
  },
  {
    icon: Lightbulb,
    title: 'Ideação e criação',
    description: 'Oficinas de prompts, copilots de marketing e geração assistida de propostas, roteiros e conteúdo.',
    outcomes: 'Maior velocidade e consistência na produção com governança.',
  },
  {
    icon: GraduationCap,
    title: 'Upskilling da equipe',
    description:
      'Trilhas práticas sobre boas práticas de IA, segurança, privacidade, prompt engineering e ferramentas do dia a dia.',
    outcomes: 'Time confiante, com uso responsável e alinhado ao negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e governança',
    description:
      'Definição de políticas, guardrails, monitoramento e métricas de qualidade dos outputs para evitar riscos.',
    outcomes: 'Implementações seguras e aderentes a LGPD e compliance.',
  },
];

export default function AIUseCases() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Onde aplicamos IA
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Casos de uso que aceleram operações e atendimento
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Co-construímos jornadas que começam com discovery, MVP rápido e evolução contínua com indicadores claros.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {useCases.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  <p className="mt-3 text-sm font-medium text-emerald-300">{item.outcomes}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
