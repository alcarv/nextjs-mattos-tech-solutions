import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, FileText, Lock, Scale, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function GovernancaSection() {
  const pillars = [
    { icon: ShieldCheck, title: 'Políticas e Controles', desc: 'Normas, papéis e responsabilidades para segurança e governança.' },
    { icon: FileText, title: 'Conformidade', desc: 'Adequação a LGPD, ISO 27001, SOC 2 e requisitos setoriais.' },
    { icon: Lock, title: 'Gestão de Riscos', desc: 'Identificação, priorização e planos de mitigação de riscos.' },
    { icon: Scale, title: 'Auditorias e Evidências', desc: 'Processos rastreáveis, evidências e relatórios para auditorias.' },
  ];

  const steps = [
    { title: 'Diagnóstico', desc: 'Levantamento de processos, lacunas e riscos.' },
    { title: 'Plano de Ação', desc: 'Roadmap com priorização e responsáveis.' },
    { title: 'Implantação', desc: 'Políticas, controles, ferramentas e comunicação.' },
    { title: 'Monitoramento', desc: 'KPIs, revisão periódica e melhoria contínua.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Governança e Compliance de TI</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Estruture políticas, processos e controles para segurança, conformidade e eficiência operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mb-2">
                  <p.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{p.desc}</CardContent>
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Iniciar Implantação</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

