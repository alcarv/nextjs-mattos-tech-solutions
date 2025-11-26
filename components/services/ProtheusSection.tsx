import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServerCog, ClipboardCheck, FileText, Cable, Workflow, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function ProtheusSection() {
  const capabilities = [
    {
      icon: ServerCog,
      title: 'Assessment e performance',
      desc: 'Saúde do ambiente, appserver, banco e jobs; plano de ação para estabilidade e velocidade.',
    },
    {
      icon: FileText,
      title: 'Fiscal e contábil',
      desc: 'TAF, TSS, SPED, NF-e/NFS-e, eSocial e ECD/ECF com parametrização correta e checklist de conformidade.',
    },
    {
      icon: Workflow,
      title: 'Processos e módulos',
      desc: 'Compras, estoque, financeiro, faturamento e PCP ajustados ao fluxo da sua operação.',
    },
    {
      icon: Cable,
      title: 'Integrações e APIs',
      desc: 'E-commerce, CRM, logística, portais e BI conectados via REST, mensageria ou ETL com governança.',
    },
    {
      icon: ClipboardCheck,
      title: 'Customizações seguras',
      desc: 'ADVPL/4GL, relatórios, fórmulas e eventos padronizados, versionados e documentados.',
    },
    {
      icon: CheckCircle,
      title: 'Suporte assistido',
      desc: 'Sustentação mensal com SLAs, monitoramento e priorização alinhada ao negócio.',
    },
  ];

  const steps = [
    { title: 'Diagnóstico', desc: 'Mapeamos ambiente, versões, módulos usados, riscos fiscais e gargalos.' },
    { title: 'Plano e quick wins', desc: 'Priorizamos correções críticas, automações e integrações de maior retorno.' },
    { title: 'Entrega assistida', desc: 'Implantamos ajustes, documentamos mudanças e conduzimos testes integrados.' },
    { title: 'Operação contínua', desc: 'Monitoramento, melhorias evolutivas e comitês de negócio/tecnologia.' },
  ];

  return (
    <section id="detalhes-servico" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-52 bg-blue-600/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl backdrop-blur">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
              ERP robusto e aderente
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Consultoria em Protheus ponta a ponta</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Priorizamos conformidade fiscal, performance e aderência ao processo real da sua empresa. Entregamos evoluções rápidas com governança.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {capabilities.map((capability, index) => (
              <Card
                key={capability.title}
                className="group h-full rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-white">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">{capability.desc}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12 rounded-2xl border border-slate-800 bg-blue-500/10 p-8 shadow-inner">
            <h3 className="text-xl font-semibold text-white mb-4">Como conduzimos o projeto</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center text-blue-300 font-semibold">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Etapa {index + 1}
                  </div>
                  <div className="mt-2 font-medium text-white">{step.title}</div>
                  <div className="mt-1 text-sm text-slate-300">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="#contact">
              <Button className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 text-base font-semibold shadow-lg shadow-blue-900/40 hover:from-blue-500 hover:to-cyan-400">
                Planejar melhorias no Protheus
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
