export type Product = {
  id: string;
  name: string;
  label: string;
  category: string;
  tagline: string;
  summary: string;
  description: string;
  creators: readonly string[];
  tone: 'blue' | 'violet';
  productionUrl: string | null;
};

// Add official production URLs here when the products are published.
export const productCatalog: readonly Product[] = [
  {
    id: 'mattos-auto',
    name: 'Mattos Auto',
    label: 'PRODUTO MATTOS',
    category: 'Gestão para revendas de veículos',
    tagline: 'Sua revenda conectada, do estoque à venda.',
    summary: 'Estoque, clientes, vendas e financeiro conectados para acompanhar cada veículo e o resultado da sua revenda.',
    description: 'Um sistema de gestão para revendas de veículos que conecta estoque, preparação, clientes, negociações e financeiro. Acompanhe a jornada de cada veículo, da entrada na loja à venda, com custos e histórico reunidos para decidir com mais contexto.',
    creators: ['Mattos Tech Solutions'],
    tone: 'blue',
    productionUrl: null,
  },
  {
    id: 'papercrm',
    name: 'PaperCRM',
    label: 'CRIAÇÃO CONJUNTA',
    category: 'CRM para vendas e atendimento',
    tagline: 'Cada conversa com contexto. Cada oportunidade com um próximo passo.',
    summary: 'Contatos, conversas e oportunidades reunidos para sua equipe saber quem atender e quando retomar cada negociação.',
    description: 'Um CRM que reúne contatos, conversas e oportunidades para sua equipe saber quem atender, o que já foi combinado e qual é o próximo passo. Organize o funil de vendas e os retornos aos clientes com o histórico de cada relacionamento por perto.',
    creators: ['Mattos Tech Solutions', 'Sinapse AI'],
    tone: 'violet',
    productionUrl: null,
  },
];
