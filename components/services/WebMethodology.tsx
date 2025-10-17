import Reveal from '@/components/Reveal';
import { Lightbulb, PenSquare, Code2, Rocket, Share2, CheckCircle2, type LucideIcon } from 'lucide-react';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverable: string;
};

const steps: Step[] = [
  {
    icon: Lightbulb,
    title: 'Imersão e estratégia',
    description:
      'Workshops com marketing, vendas e liderança para definir posicionamento, proposta de valor e UX desejada.',
    deliverable: 'Mapa de páginas, mensagens-chave, personas e objetivos de conversão.',
  },
  {
    icon: PenSquare,
    title: 'Arquitetura e conteúdo',
    description:
      'Wireframes, tom de voz, copywriting e assets visuais aprovados em ciclos curtos com o time do cliente.',
    deliverable: 'Protótipo navegável, guidelines de conteúdo e assets otimizados.',
  },
  {
    icon: Code2,
    title: 'Implementação técnica',
    description:
      'Desenvolvimento com componentes reutilizáveis, CMS/CHeadless quando necessário e integrações com ferramentas existentes.',
    deliverable: 'Site responsivo, SEO técnico configurado, integrações e automações conectadas.',
  },
  {
    icon: Rocket,
    title: 'Lançamento e otimização',
    description:
      'Testes cross-browser, performance, monitoramento de métricas e ajustes finos a partir de dados reais.',
    deliverable: 'Plano de go-live, checklist de qualidade e roadmap de experimentos.',
  },
];

const checks = [
  'Hospedagem e CDN configuradas',
  'Autonomia para editar conteúdo (CMS opcional)',
  'Treinamento rápido com handoff estruturado',
  'Monitoramento com analytics e heatmaps',
];

export default function WebMethodology() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-48 bg-blue-600/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl backdrop-blur">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
              Metodologia colaborativa
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Processo claro do briefing ao go-live</h2>
            <p className="mt-3 text-lg text-slate-300 max-w-3xl mx-auto">
              Conduzimos o projeto com rituais semanais, aprovações guiadas e total transparência em cada fase.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 80}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-blue-200">
                      <Share2 className="h-4 w-4" />
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-slate-100 sm:grid-cols-2">
            {checks.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
