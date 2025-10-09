import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, PenTool, Ruler, Shapes, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

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
    <section id="detalhes-servico" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-52 bg-blue-600/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl backdrop-blur">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
              Experiências centradas no usuário
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">UX/UI Design</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Experiências que convertem e encantam — da pesquisa ao design system, com validação contínua.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {focus.map((f, i) => (
              <Card
                key={i}
                className="group h-full rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-white">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">{f.desc}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12 rounded-2xl border border-slate-800 bg-blue-500/10 p-8 shadow-inner">
            <h3 className="text-xl font-semibold text-white mb-4">Abordagem</h3>
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

          <div className="text-center">
            <Link href="#contact">
              <Button className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 px-8 text-base font-semibold shadow-lg shadow-blue-900/40 hover:from-blue-500 hover:to-indigo-400">
                Falar com Design
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
