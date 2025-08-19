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
  }
};

export type CampaignConfig = {
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
};

export const getDefaultConfig = (): CampaignConfig => ({
  heroTitle: 'Transforme sua empresa com Tecnologia Inteligente',
  heroSubtitle: 'Maximize o potencial da sua empresa com nossa consultoria especializada em TI e soluções de desenvolvimento personalizadas que impulsionam resultados.',
  ctaText: 'Começar Agora'
});