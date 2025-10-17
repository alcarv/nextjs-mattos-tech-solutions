import Reveal from '@/components/Reveal';
import { CheckCircle2, Users2, ClipboardList, Rocket, BarChart3 } from 'lucide-react';

const phases = [
  {
    title: 'Discovery acelerado',
    description:
      'Workshops para mapear dores, oportunidades, dados disponíveis, riscos e indicadores de sucesso com áreas-chave.',
    icon: Users2,
  },
  {
    title: 'MVP em semanas',
    description:
      'Prototipamos fluxos e copilots em ciclos curtos, validando com usuários reais antes de escalar para produção.',
    icon: Rocket,
  },
  {
    title: 'Governança e operação',
    description:
      'Definimos responsáveis, protocolos de uso, guardrails e monitoramento contínuo de qualidade e segurança.',
    icon: ClipboardList,
  },
  {
    title: 'Adoção e métricas',
    description:
      'Treinamentos sob demanda, planos de comunicação interna e dashboards com KPIs de valor gerado.',
    icon: BarChart3,
  },
];

export default function AIEnablement() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-48 bg-blue-600/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl backdrop-blur">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
              Do piloto ao scale-up
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Como garantimos adoção e ROI em IA</h2>
            <p className="mt-3 text-lg text-slate-300 max-w-3xl mx-auto">
              IA não é só modelo: combinamos estratégia, operação e capacitação para entregar resultados tangíveis e
              sustentáveis.
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
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-300" />
              <div>
                <p className="text-lg font-semibold text-white">Treinamentos personalizados para cada área</p>
                <p className="mt-1 text-sm text-emerald-100">
                  Tecnologia, atendimento, marketing, jurídico e liderança: materiais sob medida para adoção segura e
                  eficiente.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/5511990183194?text=Olá! Gostaria de falar sobre projetos de IA com a Mattos Tech Solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400 px-6 py-2 text-sm font-medium text-emerald-100 transition-colors duration-300 hover:border-emerald-300 hover:bg-emerald-400/20"
            >
              Conversar sobre capacitação
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
