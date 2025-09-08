import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, PenTool, Ruler, Shapes, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function UXUISection() {
  const focus = [
    { icon: Users, title: 'Pesquisa e Descoberta', desc: 'Personas, jornadas e oportunidades de UX.' },
    { icon: PenTool, title: 'Wireframes e Protótipos', desc: 'Fluxos claros, testes e iterações rápidas.' },
    { icon: Ruler, title: 'Design System', desc: 'Componentes consistentes e acessíveis.' },
    { icon: Shapes, title: 'UI e Handoff', desc: 'Visual refinado e documentação para o time.' },
  ];

  const steps = [
    { title: 'Imersão', desc: 'Contexto, objetivos e métricas de sucesso.' },
    { title: 'Prototipação', desc: 'Wireframes navegáveis e validação com usuários.' },
    { title: 'UI e Design System', desc: 'Identidade visual e biblioteca de componentes.' },
    { title: 'Entrega', desc: 'Handoff organizado e suporte à implementação.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">UX/UI Design</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Experiências que convertem e encantam — da pesquisa ao design system, com validação contínua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {focus.map((f, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mb-2">
                  <f.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{f.desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Abordagem</h3>
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Falar com Design</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

