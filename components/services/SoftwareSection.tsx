import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Plug, Workflow, Cloud, ShieldCheck, Rocket, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function SoftwareSection() {
  const solutions = [
    { icon: Code2, title: 'Sistemas Web e Portais', desc: 'Aplicações web sob medida, escaláveis e seguras, alinhadas aos fluxos do seu negócio.' },
    { icon: Plug, title: 'APIs e Integrações', desc: 'Integramos ERPs, CRMs, gateways de pagamento e serviços externos com APIs confiáveis.' },
    { icon: Workflow, title: 'Automação de Processos', desc: 'Reduza tarefas manuais e erros com orquestração de processos ponta a ponta.' },
    { icon: Cloud, title: 'Cloud‑native e Microservices', desc: 'Arquitetura moderna, observabilidade e implantação contínua em nuvem.' },
  ];

  const steps = [
    { title: 'Descoberta e Requisitos', desc: 'Entendimento do domínio, mapeamento de personas, fluxos e objetivos.' },
    { title: 'Desenho da Solução', desc: 'Arquitetura, modelagem de dados, integrações e plano de entregas.' },
    { title: 'Implementação e QA', desc: 'Código limpo, testes, segurança e revisão contínua com o cliente.' },
    { title: 'Go‑live e Evolução', desc: 'Observabilidade, suporte, melhorias e roadmap pós‑lançamento.' },
  ];

  const highlights = [
    'Segurança por padrão (auth, permissions, OWASP, LGPD)',
    'Qualidade e testes automatizados (unit, e2e quando aplicável)',
    'Documentação e handoff organizados para seu time',
    'Pipelines CI/CD e monitoramento para estabilidade',
  ];

  return (
    <section id="detalhes-servico" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-52 bg-blue-600/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl backdrop-blur">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
              Software sob medida
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Software Personalizado para o seu Negócio</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Do planejamento à operação, entregamos sistemas sob medida com foco em segurança, desempenho e evolução contínua.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {solutions.map((s, i) => (
              <Card
                key={i}
                className="group h-full rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-white">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">{s.desc}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12 rounded-2xl border border-slate-800 bg-blue-500/10 p-8 shadow-inner">
            <h3 className="text-xl font-semibold text-white mb-4">Como entregamos</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center text-blue-300 font-semibold">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Etapa {i + 1}
                  </div>
                  <div className="mt-2 font-medium text-white">{s.title}</div>
                  <div className="mt-1 text-sm text-slate-300">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 items-start mb-12 lg:grid-cols-2">
            <Card className="h-full rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-2 text-blue-300">
                  <ShieldCheck className="h-5 w-5" />
                  <CardTitle className="text-lg">Qualidade e Segurança</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-200">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-2 text-blue-300">
                  <Rocket className="h-5 w-5" />
                  <CardTitle className="text-lg">Entrega Contínua</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-slate-200 leading-relaxed">
                Releases frequentes, feedback contínuo e observabilidade permitem evoluir o produto com segurança e velocidade.
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="#contact">
              <Button className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 px-8 text-base font-semibold shadow-lg shadow-blue-900/40 hover:from-blue-500 hover:to-indigo-400">
                Planejar meu Projeto
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
