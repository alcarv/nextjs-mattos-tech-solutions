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
    heroTitle: 'Consultoria de TI em São Paulo para modernizar a operação e reduzir riscos',
    heroSubtitle: 'Diagnosticamos tecnologia, processos e fornecedores para construir um roadmap executável, reduzir custos e aumentar a produtividade. Atendimento consultivo em São Paulo e remoto em todo o Brasil.',
    ctaText: 'Solicitar Consultoria'
  },
  'migracao-cloud': {
    heroTitle: 'Migração para cloud com segurança e continuidade',
    heroSubtitle: 'Planejamos e executamos a evolução da infraestrutura com critérios claros de disponibilidade, segurança, custo e capacidade de crescimento.',
    ctaText: 'Migrar para Nuvem'
  },
  'apps-mobile': {
    heroTitle: 'Aplicativos para simplificar a rotina de clientes e equipes',
    heroSubtitle: 'Criamos apps para tarefas recorrentes no celular, com integrações e experiência de uso planejadas. Primeiro avaliamos se um aplicativo faz sentido para o seu público e sua operação.',
    ctaText: 'Criar Aplicativo'
  },
  'solucoes-ecommerce': {
    heroTitle: 'E-commerce conectado à sua operação',
    heroSubtitle: 'Criamos lojas virtuais rápidas e profissionais, integradas a pagamentos, catálogo, estoque e aos processos que sustentam a venda.',
    ctaText: 'Criar Loja Virtual'
  },
  'inteligencia-artificial': {
    heroTitle: 'Inteligência Artificial para acelerar seus resultados',
    heroSubtitle:
      'Integrando IA generativa aos seus processos: chatbots, automações, RAG com LLMs, análise de dados e treinamentos práticos para sua equipe.',
    ctaText: 'Falar com Especialista em IA'
  },
  'governanca-compliance': {
    heroTitle: 'Governança de TI para organizar controles e responsabilidades',
    heroSubtitle:
      'Organizamos políticas, acessos e evidências para apoiar a gestão de riscos e os requisitos da sua empresa. O escopo distingue implantação de controles, adequação e certificação.',
    ctaText: 'Fortalecer Governança'
  },
  'banco-dados-analytics': {
    heroTitle: 'Dados consistentes para decidir sem reunir planilhas a cada reunião',
    heroSubtitle:
      'Conectamos fontes e definimos indicadores para sua equipe acompanhar a operação com menos consolidação manual. Cada painel mostra números com regras de cálculo acordadas.',
    ctaText: 'Evoluir Dados e Analytics'
  },
  'avaliacoes-ti': {
    heroTitle: 'Avaliações de TI para priorizar o que importa',
    heroSubtitle:
      'Diagnóstico de infraestrutura, segurança e aplicações para um roadmap claro de melhorias, riscos e impacto operacional.',
    ctaText: 'Solicitar Avaliação'
  },
  'ux-ui-design': {
    heroTitle: 'UX/UI para ajudar seus usuários a concluir o que precisam',
    heroSubtitle:
      'Investigamos onde as pessoas encontram dificuldades e testamos caminhos mais simples em protótipos. Você valida a experiência antes de investir na programação.',
    ctaText: 'Melhorar a Experiência'
  }
};

export type CampaignConfig = {
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
};

export const getDefaultConfig = (): CampaignConfig => ({
  heroTitle: 'Tecnologia Inteligente para empresas em São Paulo (Tatuapé) e todo o Brasil',
  heroSubtitle:
    'Consultoria de TI, desenvolvimento de software, IA e soluções digitais criadas a partir de São Paulo (região do Tatuapé) para impulsionar resultados na capital, Sorocaba, Campinas e em qualquer lugar com atendimento remoto.',
  ctaText: 'Conversar sobre meu desafio'
});
