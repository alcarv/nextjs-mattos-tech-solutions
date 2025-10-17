import { Globe, Figma, Settings2, Database, Zap, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

type StackItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const stack: StackItem[] = [
  {
    icon: Figma,
    title: 'Design e prototipação',
    description: 'Figma, Design Systems personalizados, bibliotecas de componentes reutilizáveis e testes com usuários.',
  },
  {
    icon: Globe,
    title: 'Front-end moderno',
    description:
      'Next.js, React, TypeScript, Tailwind, animações suaves e otimizações Core Web Vitals para entregar velocidade.',
  },
  {
    icon: Settings2,
    title: 'CMS e automações',
    description:
      'Headless CMS (Strapi, Contentful, Sanity) ou painel personalizado, integrações com CRM, RD Station e e-mail marketing.',
  },
  {
    icon: Database,
    title: 'SEO e dados',
    description:
      'Estrutura semântica, schema markup, sitemap, analytics, heatmaps e dashboards para acompanhar performance.',
  },
  {
    icon: Zap,
    title: 'Infraestrutura e performance',
    description:
      'Hospedagem em Vercel/Netlify, CDN global, monitoramento uptime, compressão de imagens e caches inteligentes.',
  },
];

export default function WebStack() {
  return (
    <section className="bg-slate-950/95 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Stack e integrações
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tecnologias que sustentam seu site</h2>
          <p className="mt-3 text-lg text-slate-300">
            Unimos design, SEO e engenharia para um site rápido, editável e preparado para crescer com o seu negócio.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {stack.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 70}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
