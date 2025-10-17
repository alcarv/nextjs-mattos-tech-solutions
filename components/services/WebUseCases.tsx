import {
  Building2,
  PenTool,
  ShoppingBag,
  GraduationCap,
  Headset,
  Megaphone,
  type LucideIcon,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
  impact: string;
};

const useCases: UseCase[] = [
  {
    icon: Building2,
    title: 'Sites institucionais completos',
    description:
      'Estruturamos páginas para segmentos B2B e B2C com navegação clara, storytelling e formulários inteligentes.',
    impact: 'Fortalece autoridade da marca e aumenta a geração de leads qualificados.',
  },
  {
    icon: ShoppingBag,
    title: 'Landing pages de campanhas',
    description:
      'Lançamentos e ofertas com copy estratégica, componentes reusáveis e experimentos A/B para maximizar conversão.',
    impact: 'Campanhas mais previsíveis e custo de aquisição menor.',
  },
  {
    icon: PenTool,
    title: 'Portais de conteúdo e blogs',
    description:
      'SEO, categorização, CMS headless e automações para distribuição de conteúdo e nutrição de audiência.',
    impact: 'Autoridade orgânica, escala de conteúdo e analytics integrados.',
  },
  {
    icon: GraduationCap,
    title: 'Plataformas educacionais e eventos',
    description:
      'Experiências para cursos, comunidades ou eventos com áreas logadas, catálogos e integração a pagamentos.',
    impact: 'Engajamento contínuo com alunos e monetização previsível.',
  },
  {
    icon: Headset,
    title: 'Centros de suporte e conhecimento',
    description:
      'Base de conhecimento, FAQ dinâmico e integrações com chat, CRM e automações de atendimento.',
    impact: 'Redução de chamados repetitivos e satisfação do cliente.',
  },
  {
    icon: Megaphone,
    title: 'Microsites e hotsites sazonais',
    description:
      'Estruturas leves com velocidade de publicação, animações e brand storytelling para ações pontuais.',
    impact: 'Destaca campanhas especiais e reforça o posicionamento da marca.',
  },
];

export default function WebUseCases() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Onde criamos impacto
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Experiências web alinhadas ao seu objetivo</h2>
          <p className="mt-3 text-lg text-slate-300">
            Do branding à geração de leads, construímos jornadas digitais que combinam conteúdo, UX e performance.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {useCases.map((item, index) => (
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
                  <p className="mt-3 text-sm font-medium text-emerald-300">{item.impact}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
