import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Consultoria e Planejamento em TI',
    description: 'Desenvolvemos estratégias de TI alinhadas aos seus objetivos de negócio, garantindo que sua tecnologia impulsione o crescimento da empresa.',
    features: [
      'Análise de infraestrutura',
      'Planejamento estratégico',
      'Otimização de processos',
      'Redução de custos'
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serviços de Consultoria e Desenvolvimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize o potencial da sua empresa com nossa consultoria especializada em TI e 
            soluções de desenvolvimento personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}