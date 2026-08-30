export const serviceCatalog = [
  {
    path: '/consultoria-ti',
    name: 'Consultoria de TI',
    description: 'Diagnóstico, prioridades e roadmap para alinhar tecnologia, riscos e objetivos do negócio.',
  },
  {
    path: '/criacao-software',
    name: 'Software sob medida',
    description: 'Sistemas web, APIs, integrações e automações construídos para os processos da empresa.',
  },
  {
    path: '/consultoria-protheus',
    name: 'Consultoria TOTVS Protheus',
    description: 'Assessment, fiscal, integrações, performance, customizações e sustentação do ERP.',
  },
  {
    path: '/inteligencia-artificial',
    name: 'Inteligência Artificial para empresas',
    description: 'Assistentes, RAG e automações com integração, avaliação, segurança e governança.',
  },
  {
    path: '/criacao-sites',
    name: 'Criação de sites profissionais',
    description: 'Sites rápidos e responsivos, com conteúdo, SEO técnico, integrações e foco em conversão.',
  },
  {
    path: '/migracao-cloud',
    name: 'Migração para nuvem',
    description: 'Assessment e migração para cloud com continuidade, segurança, observabilidade e FinOps.',
  },
  {
    path: '/banco-dados-analytics',
    name: 'Banco de dados, BI e analytics',
    description: 'Modelagem, pipelines de dados, performance, indicadores e dashboards para decisão.',
  },
  {
    path: '/governanca-compliance',
    name: 'Governança e compliance de TI',
    description: 'Políticas, controles, riscos e evidências para LGPD, segurança e auditorias.',
  },
  {
    path: '/avaliacoes-ti',
    name: 'Assessment e avaliação de TI',
    description: 'Diagnóstico de infraestrutura, segurança e aplicações com achados e roadmap priorizado.',
  },
  {
    path: '/apps-mobile',
    name: 'Desenvolvimento de aplicativos',
    description: 'Apps iOS e Android com integrações, experiência de uso e operação contínua.',
  },
  {
    path: '/ux-ui-design',
    name: 'UX/UI design',
    description: 'Pesquisa, arquitetura de informação, protótipos, testes e design systems.',
  },
  {
    path: '/solucoes-ecommerce',
    name: 'Desenvolvimento de loja virtual',
    description: 'E-commerce integrado a pagamentos, catálogo, estoque, pedidos e operação.',
  },
] as const;

export type ServicePath = (typeof serviceCatalog)[number]['path'];

const relatedServicePaths: Record<ServicePath, readonly ServicePath[]> = {
  '/consultoria-ti': ['/avaliacoes-ti', '/migracao-cloud', '/governanca-compliance'],
  '/criacao-software': ['/ux-ui-design', '/migracao-cloud', '/banco-dados-analytics'],
  '/consultoria-protheus': ['/criacao-software', '/banco-dados-analytics', '/governanca-compliance'],
  '/inteligencia-artificial': ['/criacao-software', '/banco-dados-analytics', '/governanca-compliance'],
  '/criacao-sites': ['/solucoes-ecommerce', '/ux-ui-design', '/criacao-software'],
  '/migracao-cloud': ['/avaliacoes-ti', '/governanca-compliance', '/criacao-software'],
  '/banco-dados-analytics': ['/inteligencia-artificial', '/criacao-software', '/governanca-compliance'],
  '/governanca-compliance': ['/avaliacoes-ti', '/migracao-cloud', '/consultoria-ti'],
  '/avaliacoes-ti': ['/consultoria-ti', '/governanca-compliance', '/migracao-cloud'],
  '/apps-mobile': ['/ux-ui-design', '/criacao-software', '/migracao-cloud'],
  '/ux-ui-design': ['/criacao-sites', '/apps-mobile', '/criacao-software'],
  '/solucoes-ecommerce': ['/criacao-sites', '/criacao-software', '/banco-dados-analytics'],
};

export function getRelatedServices(currentPath: ServicePath) {
  const paths = relatedServicePaths[currentPath];
  return paths.map((path) => serviceCatalog.find((service) => service.path === path)!);
}
