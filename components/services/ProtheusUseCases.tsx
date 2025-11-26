import { Boxes, Receipt, ShoppingCart, PiggyBank, Activity, GaugeCircle, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string;
};

const useCases: UseCase[] = [
  {
    icon: Receipt,
    title: 'Compliance fiscal sem riscos',
    description:
      'Conferência de obrigações, ajustes em TAF/TSS, layouts de SPED, NF-e/NFS-e e eSocial com trilhas de auditoria.',
    outcomes: 'Evita autuações e atrasos com entregas fiscais seguras e monitoradas.',
  },
  {
    icon: ShoppingCart,
    title: 'Compras e estoque integrados',
    description:
      'Parametrização de requisições, cotação, recebimento, WMS e inventário com controles de lote e rastreabilidade.',
    outcomes: 'Menos rupturas e visão real do estoque para compras assertivas.',
  },
  {
    icon: PiggyBank,
    title: 'Financeiro confiável',
    description:
      'Boletos, conciliação bancária, tesouraria, fluxo de caixa e integração com gateways de pagamento.',
    outcomes: 'Redução de retrabalho financeiro e indicadores confiáveis para decisão.',
  },
  {
    icon: Boxes,
    title: 'Operação industrial e PCP',
    description: 'Planejamento, apontamento de produção, ordens, custos e qualidade conectados ao chão de fábrica.',
    outcomes: 'Mais previsibilidade e controle de custos por produto/ordem.',
  },
  {
    icon: Activity,
    title: 'Integração com canais digitais',
    description: 'E-commerce, marketplaces e CRM sincronizados com pedidos, faturamento e expedição.',
    outcomes: 'Visão única de vendas e menos retrabalho entre times.',
  },
  {
    icon: GaugeCircle,
    title: 'Performance e suporte contínuo',
    description: 'Monitoramento de jobs, gestão de dicionário/delta, atualizações controladas e tuning de banco.',
    outcomes: 'Ambiente rápido, estável e com menor tempo de indisponibilidade.',
  },
];

export default function ProtheusUseCases() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Onde atuamos no Protheus
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Casos de uso para colocar o ERP em ritmo de negócio
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Atuamos junto aos times de negócio e TI para mapear dores, priorizar ganhos rápidos e sustentar o ambiente com governança.
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
