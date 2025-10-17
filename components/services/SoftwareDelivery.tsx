import Reveal from '@/components/Reveal';
import { Users, ListChecks, Wrench, Rocket, Clock3, type LucideIcon } from 'lucide-react';

type Phase = {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string;
};

const phases: Phase[] = [
  {
    icon: Users,
    title: 'Discovery imersivo',
    description:
      'Workshops com stakeholders, mapeamento de jornadas, priorização de funcionalidades e definição de KPIs.',
    deliverables: 'Canvas do produto, roadmap inicial, requisitos e riscos mapeados.',
  },
  {
    icon: ListChecks,
    title: 'Arquitetura e prototipação',
    description:
      'Modelagem de dados, diagramas de integração, protótipos navegáveis e definição do plano de entregas.',
    deliverables: 'Documentação arquitetural, backlog priorizado e protótipo validado.',
  },
  {
    icon: Wrench,
    title: 'Construção iterativa',
    description:
      'Squad multidisciplinar com sprints curtos, releases frequentes, testes automatizados e revisões de código.',
    deliverables: 'MVP em produção, relatórios de QA e acompanhamento semanal com stakeholders.',
  },
  {
    icon: Rocket,
    title: 'Operação e evolução',
    description:
      'Monitoramento, observabilidade, suporte ao negócio, squads de crescimento e novos ciclos de discovery.',
    deliverables: 'Playbook de operação, métricas de performance, backlog contínuo de melhorias.',
  },
];

export default function SoftwareDelivery() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-48 bg-blue-600/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl backdrop-blur">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
              Do planejamento ao suporte contínuo
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Entregamos com previsibilidade e governança
            </h2>
            <p className="mt-3 text-lg text-slate-300 max-w-3xl mx-auto">
              Um modelo de parceria pensado para reduzir riscos, alinhar expectativas e acelerar entregas de valor.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {phases.map((phase, index) => (
              <Reveal
                key={phase.title}
                delay={index * 80}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                    <phase.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{phase.description}</p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-blue-200">
                      <Clock3 className="h-4 w-4" />
                      {phase.deliverables}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
