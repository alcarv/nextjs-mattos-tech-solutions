import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { 
  Lightbulb, 
  Code2, 
  Globe, 
  Shield, 
  Database, 
  Smartphone,
  Cloud,
  ClipboardCheck,
  Palette,
  CheckCircle,
  Brain,
  ServerCog
} from 'lucide-react';

const servicosList = [
  {
    icon: Lightbulb,
    title: 'Consultoria e Planejamento em TI',
    description: 'Desenvolvemos estratégias de TI alinhadas aos seus objetivos de negócio, garantindo que sua tecnologia impulsione o crescimento da empresa.',
    features: [
      'Análise de infraestrutura',
      'Planejamento estratégico',
      'Otimização de processos',
      'Redução de custos'
    ],
    href: '/consultoria-ti#detalhes-servico'
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Integramos IA generativa aos seus processos para automatizar tarefas, criar chatbots, melhorar a análise de dados e treinar sua equipe.',
    features: [
      'Integração com LLMs (OpenAI etc.)',
      'Chatbots e automações',
      'RAG com dados da empresa',
      'Treinamentos práticos em IA'
    ],
    href: '/inteligencia-artificial#detalhes-servico'
  },
  {
    icon: ServerCog,
    title: 'Consultoria em Protheus',
    description: 'Estabilizamos, parametrizamos e integramos seu Protheus com foco em compliance fiscal e nos fluxos do seu negócio.',
    features: [
      'Assessment com quick wins',
      'TAF, TSS, SPED e fiscal em dia',
      'Integrações com canais e BI',
      'Suporte e evolução contínua'
    ],
    href: '/consultoria-protheus#detalhes-servico'
  },
  {
    icon: Code2,
    title: 'Desenvolvimento de Software',
    description: 'Criamos soluções de software personalizadas e escaláveis para atender às necessidades específicas do seu negócio.',
    features: [
      'Sistemas web personalizados',
      'APIs e integrações',
      'Automação de processos',
      'Manutenção contínua'
    ],
    href: '/criacao-software#detalhes-servico'
  },
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Desenvolvemos sites e aplicações web modernas, responsivas e otimizadas para mecanismos de busca.',
    features: [
      'Design responsivo',
      'Otimização SEO',
      'Performance otimizada',
      'Integração com CMS'
    ],
    href: '/criacao-sites#detalhes-servico'
  },
  {
    icon: Shield,
    title: 'Governança e Compliance',
    description: 'Implementamos frameworks de governança em TI e garantimos conformidade com regulamentações do setor.',
    features: [
      'Políticas de segurança',
      'Gestão de riscos',
      'Conformidade regulatória',
      'Auditorias de TI'
    ],
    href: '/governanca-compliance#detalhes-servico'
  },
  {
    icon: Database,
    title: 'Banco de Dados e Analytics',
    description: 'Projetamos e implementamos soluções de banco de dados e análise de dados para decisões mais inteligentes.',
    features: [
      'Modelagem de dados',
      'Business Intelligence',
      'Migração de dados',
      'Otimização de queries'
    ],
    href: '/banco-dados-analytics#detalhes-servico'
  },
  {
    icon: Smartphone,
    title: 'Desenvolvimento Mobile',
    description: 'Criamos aplicativos móveis nativos e híbridos que proporcionam uma experiência excepcional aos usuários.',
    features: [
      'Apps iOS e Android',
      'PWAs',
      'UX/UI mobile',
      'Integração com APIs'
    ],
    href: '/apps-mobile#detalhes-servico'
  },
  {
    icon: Cloud,
    title: 'Migração para Nuvem',
    description: 'Facilitamos sua jornada para a nuvem com soluções seguras e escaláveis, otimizando custos e performance.',
    features: [
      'Estratégia cloud-first',
      'Migração de dados',
      'Otimização de custos',
      'Arquitetura em nuvem'
    ],
    href: '/migracao-cloud#detalhes-servico'
  },
  {
    icon: ClipboardCheck,
    title: 'Avaliações de TI',
    description: 'Realizamos análises completas da sua infraestrutura de TI para identificar oportunidades de melhoria e riscos.',
    features: [
      'Análise de maturidade',
      'Avaliação de segurança',
      'Diagnóstico de sistemas',
      'Recomendações técnicas'
    ],
    href: '/avaliacoes-ti#detalhes-servico'
  },
  {
    icon: Palette,
    title: 'UX/UI Design',
    description: 'Criamos interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus usuários.',
    features: [
      'Design de interfaces',
      'Prototipagem',
      'Testes de usabilidade',
      'Design system'
    ],
    href: '/ux-ui-design#detalhes-servico'
  }
];

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),transparent_55%)]" />
      <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-300">
            Soluções ponta a ponta
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Serviços de Consultoria e Desenvolvimento
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Maximize o potencial da sua empresa com nossa consultoria especializada em TI e soluções de
            desenvolvimento personalizadas. Atuamos a partir de São Paulo (SP), na região do Tatuapé, para Sorocaba,
            Campinas, capital paulista e projetos remotos em todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicosList.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl"
              aria-label={service.title}
              title={service.title}
            >
              <Card className="relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur transition-all duration-300 motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.01] hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="pointer-events-none absolute -top-16 -right-8 h-36 w-36 rounded-full bg-blue-500/20 blur-2xl transition-transform duration-500 group-hover:translate-y-6" />
                <CardHeader className="relative text-left pb-4">
                  <div className="inline-flex items-center justify-center rounded-xl bg-blue-600/20 p-3 text-blue-300 shadow-inner shadow-blue-900/30 transition-transform duration-300 group-hover:scale-105">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-semibold text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-slate-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 rounded-lg px-2 py-1 text-slate-200 transition-colors duration-200 group-hover:bg-blue-500/10"
                      >
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
