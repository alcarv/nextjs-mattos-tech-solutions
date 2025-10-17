'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import { CircuitBoard, Kanban, ShieldCheck, Sparkles } from 'lucide-react';

const highlights = [
  { icon: CircuitBoard, label: 'Arquitetura escalável e observável' },
  { icon: Kanban, label: 'Sprints quinzenais com demonstrações' },
  { icon: ShieldCheck, label: 'Segurança, testes e LGPD embutidos' },
];

export default function SoftwareHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.23),transparent_60%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),transparent_55%)] motion-safe:animate-gradient-slow" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 shadow-2xl backdrop-blur">
          <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300">
                <Sparkles className="h-4 w-4" />
                Software personalizado de ponta a ponta
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                Produtos digitais sob medida com foco em ROI, segurança e evolução contínua
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Planejamos, construímos e operamos sistemas web, APIs e integrações feitos para sua realidade.
                Trabalhamos com squads multidisciplinares, pipeline CI/CD e acompanhamento próximo da sua equipe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="#contact">
                  <Button className="rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 px-8 text-base font-semibold shadow-lg shadow-blue-900/40 transition-all duration-300 hover:from-blue-500 hover:to-indigo-400">
                    Planejar meu projeto
                  </Button>
                </Link>
                <Link href="https://cal.com/daniel-mattos/30min" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="rounded-full border-slate-700 bg-transparent text-slate-100 shadow-sm backdrop-blur transition-colors duration-300 hover:border-blue-500 hover:bg-slate-800/70 hover:text-blue-300"
                  >
                    Agendar conversa
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-base text-slate-200">{item.label}</span>
                    <span className="ml-auto text-sm font-semibold text-blue-300">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
