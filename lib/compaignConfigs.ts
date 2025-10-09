export const campaignConfigs = {
  'criacao-sites': {
    heroTitle: 'Transforme sua empresa com um site profissional que destaca sua marca e atrai mais clientes.',
    heroSubtitle: 'Criamos sites personalizados que refletem a identidade da sua empresa e garantem uma excelente experiência para o usuário. Com design responsivo e foco na conversão, oferecemos soluções completas de criação de sites, do planejamento ao suporte contínuo, para fortalecer sua presença online.',
    ctaText: 'Criar Meu Site'
  },
  'criacao-software': {
    heroTitle: 'Transforme Seu Negócio com Software Personalizado',
    heroSubtitle: 'Criamos sistemas personalizados que resolvem desafios específicos do seu negócio, melhorando a eficiência e proporcionando resultados reais.',
    ctaText: 'Criar meu Software'
  },
  'consultoria-ti': {
    heroTitle: 'Consultoria em TI para Modernizar Sua Infraestrutura e Melhorar a Eficiência Operacional',
    heroSubtitle: 'Analisamos suas necessidades tecnológicas e implementamos soluções personalizadas para otimizar sua infraestrutura, reduzir custos e aumentar a produtividade da sua equipe.',
    ctaText: 'Solicitar Consultoria'
  },
  'migracao-cloud': {
    heroTitle: 'Migração Segura para Nuvem',
    heroSubtitle: 'Reduza custos de infraestrutura em até 40% e aumente a performance com nossa migração especializada para nuvem.',
    ctaText: 'Migrar para Nuvem'
  },
  'apps-mobile': {
    heroTitle: 'Aplicativos Mobile de Alta Performance',
    heroSubtitle: 'Alcance seus clientes onde eles estão com aplicativos móveis modernos, intuitivos e otimizados para iOS e Android.',
    ctaText: 'Criar Aplicativo'
  },
  'solucoes-ecommerce': {
    heroTitle: 'E-commerce que Vende Mais',
    heroSubtitle: 'Aumente suas vendas online com lojas virtuais otimizadas para conversão, integradas com os melhores sistemas de pagamento.',
    ctaText: 'Criar Loja Virtual'
  },
  'inteligencia-artificial': {
    heroTitle: 'Inteligência Artificial para acelerar seus resultados',
    heroSubtitle:
      'Integrando IA generativa aos seus processos: chatbots, automações, RAG com LLMs, análise de dados e treinamentos práticos para sua equipe.',
    ctaText: 'Falar com Especialista em IA'
  },
  'governanca-compliance': {
    heroTitle: 'Governança e Compliance de TI sem dor de cabeça',
    heroSubtitle:
      'Implantamos políticas, processos e controles para conformidade (LGPD, ISO 27001) e segurança, reduzindo riscos e aumentando a confiança.',
    ctaText: 'Fortalecer Governança'
  },
  'banco-dados-analytics': {
    heroTitle: 'Dados que geram decisões — da modelagem ao BI',
    heroSubtitle:
      'Projetamos bancos de dados, pipelines e dashboards para transformar dados em insights: modelagem, ETL/ELT, performance e visualização.',
    ctaText: 'Evoluir Dados e Analytics'
  },
  'avaliacoes-ti': {
    heroTitle: 'Avaliações de TI para priorizar o que importa',
    heroSubtitle:
      'Diagnóstico de infraestrutura, segurança e aplicações para um roadmap claro de melhorias, riscos e ROI.',
    ctaText: 'Solicitar Avaliação'
  },
  'ux-ui-design': {
    heroTitle: 'UX/UI que converte e encanta',
    heroSubtitle:
      'Interfaces claras, prototipagem e testes de usabilidade para elevar a experiência do usuário e resultados de negócio.',
    ctaText: 'Melhorar a Experiência'
  }
};

export type CampaignConfig = {
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
};

export const getDefaultConfig = (): CampaignConfig => ({
  heroTitle: 'Tecnologia Inteligente para empresas em Itu e todo o Brasil',
  heroSubtitle:
    'Consultoria de TI, desenvolvimento de software, IA e soluções digitais criadas a partir de Itu/SP para impulsionar resultados em Sorocaba, Campinas, São Paulo e em qualquer lugar com atendimento remoto.',
  ctaText: 'Agendar diagnóstico gratuito'
});
