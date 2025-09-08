import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, BarChart3, Cable, Gauge, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function DadosAnalyticsSection() {
  const solutions = [
    { icon: Database, title: 'Modelagem e DW', desc: 'Modelagem relacional, dimensional e data warehouse em nuvem.' },
    { icon: Cable, title: 'Pipelines ETL/ELT', desc: 'Ingestão, transformação e orquestração de dados confiável.' },
    { icon: Gauge, title: 'Performance e Custos', desc: 'Tuning de queries, índices, particionamento e governança.' },
    { icon: BarChart3, title: 'BI e Dashboards', desc: 'KPIs, relatórios e visualizações para decisões ágeis.' },
  ];

  const steps = [
    { title: 'Descoberta', desc: 'Objetivos, fontes de dados e métricas do negócio.' },
    { title: 'Arquitetura', desc: 'Desenho de camadas, ferramentas e padrões.' },
    { title: 'Implementação', desc: 'Pipelines, modelos e visualizações.' },
    { title: 'Operação', desc: 'Observabilidade, custos e evolução contínua.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Dados e Analytics</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Da modelagem e orquestração até BI, criamos uma base de dados confiável para decisões consistentes.
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
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Metodologia</h3>
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Falar com Especialista em Dados</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

