import { Building2, ShoppingCart, ClipboardList, Factory, Stethoscope, ShieldCheck, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
  impact: string;
};

const useCases: UseCase[] = [
  {
    icon: Building2,
    title: 'Portais e intranets corporativas',
    description: 'Fluxos digitais para atendimento a parceiros, franquias e equipe interna com autenticação e dashboards.',
    impact: 'Centralização dos processos e redução de chamados operacionais.',
  },
  {
    icon: ShoppingCart,
    title: 'Plataformas de vendas B2B/B2C',
    description: 'Pedidos, billing, logística e integrações com ERPs, marketplaces e meios de pagamento.',
    impact: 'Melhora da conversão e visibilidade ponta a ponta da jornada do cliente.',
  },
  {
    icon: ClipboardList,
    title: 'Gestão de operações e compliance',
    description: 'Workflows customizados, auditoria, assinatura digital e checklist inteligente para times regulados.',
    impact: 'Rastreabilidade completa e redução de riscos e penalidades.',
  },
  {
    icon: Factory,
    title: 'Automação industrial e IoT',
    description: 'Integração de sensores, SCADA e ERPs com painéis em tempo real, alertas e rotinas automáticas.',
    impact: 'Menos paradas não planejadas e decisões baseadas em dados.',
  },
  {
    icon: Stethoscope,
    title: 'Saúde e educação digital',
    description: 'Teleatendimento, prontuário eletrônico, plataformas EAD e avaliações com segurança e LGPD.',
    impact: 'Experiências digitais seguras para pacientes, alunos e profissionais.',
  },
  {
    icon: ShieldCheck,
    title: 'Sistemas críticos e legado',
    description: 'Modernização de aplicações on-premise, APIs e integrações para manter compliance e disponibilidade.',
    impact: 'Estabilidade, performance e novas capacidades sem interromper o negócio.',
  },
];

export default function SoftwareUseCases() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Onde atuamos
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Casos de uso que transformam operações digitais
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Projetos realizados em diferentes setores, sempre conectando estratégia, UX, engenharia e dados.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {useCases.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 70}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  <p className="mt-3 text-sm font-medium text-emerald-300">{item.impact}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
