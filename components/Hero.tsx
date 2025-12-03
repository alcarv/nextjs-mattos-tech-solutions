'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { campaignConfigs, getDefaultConfig } from '@/lib/compaignConfigs';
import Reveal from '@/components/Reveal';

export default function Hero() {
  const pathname = usePathname();
  
  const currentRoute = pathname.slice(1);
  
  const config = campaignConfigs[currentRoute as keyof typeof campaignConfigs] || getDefaultConfig();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 motion-safe:animate-gradient-slow bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.18),transparent_55%)]" />
        <div className="absolute -top-32 -right-16 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-10 left-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl motion-safe:animate-float-slower" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-slate-900/70 px-4 py-2 text-sm font-medium text-blue-300 shadow-sm ring-1 ring-blue-500/40 backdrop-blur">
              Tecnologia estratégica para acelerar resultados
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {config.heroTitle.includes('Tecnologia Inteligente') ? (
                <>
                  Transforme sua empresa com{' '}
                  <span className="text-blue-400">Tecnologia Inteligente</span>
                </>
              ) : (
                config.heroTitle
              )}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {config.heroSubtitle}
            </p>
            <p className="text-base text-slate-400">
              Baseados em São Paulo (SP), na região do Tatuapé, prestamos consultoria e desenvolvimento para empresas
              da capital, Sorocaba, Campinas e projetos remotos em todo o Brasil.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/5511990183194?text=Olá! Gostaria de saber mais sobre os serviços da Mattos Tech Solutions." target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 px-8 text-base font-semibold text-white shadow-lg shadow-blue-900/40 transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-xl"
                >
                  {config.ctaText}
                  <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
              <Link href="/#servicos">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-slate-700 bg-transparent text-slate-100 shadow-sm backdrop-blur transition-colors duration-300 hover:border-blue-500 hover:bg-slate-800/70 hover:text-blue-300"
                >
                  Ver Nossos Serviços
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                'Atendimento regional e remoto',
                'Projetos com foco em ROI',
                'Equipe certificada em cloud e IA',
                'Suporte estratégico contínuo',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-200 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-3xl border border-slate-800/70 bg-blue-500/20 blur-2xl lg:block" />
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
              <div className="absolute -top-3 -right-3 rounded-full border border-blue-500/40 bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                Projetos em produção
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-3 w-3 rounded-full bg-emerald-400" />
                  <div className="flex h-3 w-3 rounded-full bg-amber-400" />
                  <div className="flex h-3 w-3 rounded-full bg-rose-400" />
                </div>
                <div className="rounded-xl bg-gray-900 px-6 py-5 text-sm text-emerald-300 shadow-inner">
                  <div className="font-mono leading-relaxed">
                    <div>
                      <span className="text-sky-400">const</span> sprint ={' '}
                      <span className="text-amber-300">planRoadmap</span>
                      <span className="text-white">({`{`}</span>
                    </div>
                    <div className="ml-6 text-white">
                      objetivo:<span className="text-emerald-300"> 'crescer com tecnologia'</span>,
                    </div>
                    <div className="ml-6 text-white">
                      equipe:<span className="text-emerald-300"> 'Mattos Tech'</span>,
                    </div>
                    <div className="text-white">{`});`}</div>
                    <div className="mt-3 text-white">
                      <span className="text-sky-400">return</span> sprint.<span className="text-emerald-300">executar()</span>;
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 right-6 hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 p-5 text-white shadow-xl lg:block">
              <CheckCircle className="h-8 w-8" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
