import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Search, Gauge, Layers, Cpu, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function WebDevSection() {
  const solutions = [
    { icon: Globe, title: 'Sites e Web Apps', desc: 'Interfaces modernas, responsivas e acessíveis, com foco em conversão.' },
    { icon: Search, title: 'SEO Técnico', desc: 'Estrutura, metas, OG, sitemap e performance para ranquear melhor.' },
    { icon: Gauge, title: 'Performance', desc: 'SSR/ISR, otimização de imagens, caching e Core Web Vitals.' },
    { icon: Layers, title: 'CMS & Headless', desc: 'Integração com CMS e arquiteturas headless escaláveis.' },
  ];

  const steps = [
    { title: 'Descoberta', desc: 'Objetivos, público, concorrentes e KPIs.' },
    { title: 'Design', desc: 'Wireframes, UI e revisão com stakeholders.' },
    { title: 'Desenvolvimento', desc: 'Melhores práticas, testes e acessibilidade.' },
    { title: 'Lançamento', desc: 'SEO, monitoramento e evolução contínua.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Criação de Sites e Aplicações Web</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Construímos experiências web rápidas, acessíveis e otimizadas para SEO para escalar sua presença digital.
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
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Processo</h3>
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Criar Meu Site</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

