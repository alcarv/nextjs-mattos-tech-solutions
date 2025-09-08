import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, ClipboardList, Rocket, Coins, Users2, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ConsultoriaTISection() {
  const offerings = [
    { icon: Lightbulb, title: 'Estratégia de TI', desc: 'Alinhamento com objetivos do negócio, priorização de iniciativas e OKRs.' },
    { icon: ClipboardList, title: 'Roadmap e PMO', desc: 'Portfólio de projetos, governança de execução e medição de resultados.' },
    { icon: Coins, title: 'Otimização de Custos', desc: 'Mapeamento de custos, renegociação de contratos e racionalização de soluções.' },
    { icon: Users2, title: 'Gestão de Fornecedores', desc: 'Critérios de avaliação, SLAs e acompanhamento de desempenho.' },
  ];

  const steps = [
    { title: 'Diagnóstico', desc: 'Entrevistas, inventário de ativos, processos e desafios atuais.' },
    { title: 'Plano Estratégico', desc: 'Arquitetura alvo, iniciativas, custos estimados e ganhos esperados.' },
    { title: 'Implantação', desc: 'Governança, PMO, cronograma e suportes tático/operacional.' },
    { title: 'Acompanhamento', desc: 'Reviews periódicos, KPIs e melhoria contínua.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Consultoria e Planejamento em TI</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Da estratégia à execução: criamos um plano de TI conectado ao negócio, priorizamos o que traz mais resultado e executamos com governança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offerings.map((o, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mb-2">
                  <o.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{o.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{o.desc}</CardContent>
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

        <div className="text-center">
          <Link href="/#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Planejar Estratégia de TI</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

