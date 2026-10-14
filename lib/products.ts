export type Product = {
  id: string;
  name: string;
  label: string;
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
    description: 'Nossa experiência em tecnologia aplicada a um produto próprio. Conheça o Mattos Auto e converse com a equipe que está por trás da solução.',
    creators: ['Mattos Tech Solutions'],
    tone: 'blue',
    productionUrl: null,
  },
  {
    id: 'papercrm',
    name: 'PaperCRM',
    label: 'CRIAÇÃO CONJUNTA',
    description: 'Um produto criado em conjunto pela Mattos Tech Solutions e pela Sinapse AI. Duas empresas que somam experiência para construir a mesma solução.',
    creators: ['Mattos Tech Solutions', 'Sinapse AI'],
    tone: 'violet',
    productionUrl: null,
  },
];
