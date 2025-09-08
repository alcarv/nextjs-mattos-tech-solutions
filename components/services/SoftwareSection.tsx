import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Plug, Workflow, Cloud, ShieldCheck, Rocket, CheckCircle } from 'lucide-react';
import Link from 'next/link';

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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Software Personalizado para o seu Negócio</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Do planejamento à operação, entregamos sistemas sob medida com foco em segurança, desempenho e evolução contínua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((s, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mb-2">
                  <s.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{s.desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Como entregamos</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-md p-4 shadow-sm border border-blue-100">
                <div className="flex items-center mb-2 text-blue-600 font-semibold">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Etapa {i + 1}
                </div>
                <div className="font-medium text-gray-900">{s.title}</div>
                <div className="text-gray-600 text-sm mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2 text-blue-600">
                <ShieldCheck className="h-5 w-5" />
                <CardTitle className="text-lg">Qualidade e Segurança</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2 text-blue-600">
                <Rocket className="h-5 w-5" />
                <CardTitle className="text-lg">Entrega Contínua</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              Releases frequentes, feedback contínuo e observabilidade permitem evoluir o produto com segurança e velocidade.
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Planejar meu Projeto</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

