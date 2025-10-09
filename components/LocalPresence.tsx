import { Button } from '@/components/ui/button';
import { MapPin, Globe2, Building2, Clock } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const highlights = [
  {
    icon: MapPin,
    title: 'Base em Itu (SP)',
    description:
      'Atendimento próximo às empresas de Itu e região, com possibilidade de reuniões presenciais sob demanda.',
  },
  {
    icon: Building2,
    title: 'Região Metropolitana de Sorocaba',
    description:
      'Projetos recorrentes em Sorocaba, Salto e cidades vizinhas, com suporte contínuo e visitas planejadas.',
  },
  {
    icon: Globe2,
    title: 'Consultorias Remotas',
    description:
      'Atuamos remotamente para Campinas, Grande São Paulo e outros estados com rituais ágeis e relatórios semanais.',
  },
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    description:
      'Suporte entre 9h e 18h em dias úteis e plantões aos sábados, garantindo agilidade nas demandas críticas.',
  },
];

export default function LocalPresence() {
  return (
    <section id="presenca" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-64 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl backdrop-blur">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
                Presença local, impacto nacional
              </span>
              <h2 id="local-presence-title" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Presença em Itu com alcance nacional
              </h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                A Mattos Tech Solutions nasceu em Itu (SP) e leva soluções digitais para toda a região de Sorocaba,
                Campinas e capital paulista. Com uma operação flexível, combinamos atendimento consultivo presencial
                com squads remotos especializados em desenvolvimento, nuvem e inteligência artificial.
              </p>
              <p className="mt-4 text-slate-400">
                Adaptamos nossa rotina aos seus times: reuniões estratégicas in loco, acompanhamento remoto em tempo
                real e canais diretos para demandas urgentes — tecnologia aplicada para entregar resultado.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/#contact">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-8 hover:from-blue-500 hover:to-indigo-400">
                    Agendar uma conversa
                  </Button>
                </Link>
                <span className="text-sm text-blue-300">
                  * Atendimento híbrido com visitas presenciais planejadas
                </span>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex rounded-full bg-blue-600/20 p-3 text-blue-300 shadow-inner">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.description}</p>
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
