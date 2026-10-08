import type { ServicePath } from './services';

type ProjectScope = {
  introduction: string;
  options: Array<{ title: string; description: string }>;
  quoteInputs: string[];
  recurringCosts: string;
};

export const projectScopes: Partial<Record<ServicePath, ProjectScope>> = {
  '/criacao-sites': {
    introduction: 'O formato do site depende do que seu cliente precisa entender e fazer. Estas opções ajudam a delimitar as páginas, o conteúdo e as integrações da proposta.',
    options: [
      { title: 'Site institucional', description: 'Páginas da empresa e dos serviços, conteúdo aprovado, contato e estrutura para busca. Antes de construir, definimos quem fornece textos, imagens e materiais de projetos.' },
      { title: 'Landing page', description: 'Uma oferta e um próximo passo claros para uma campanha. A proposta define o conteúdo, a ligação com formulário ou WhatsApp e os eventos que vão acompanhar os contatos.' },
      { title: 'Portal com conteúdo', description: 'Publicação de artigos, categorias e páginas de serviço. A escolha do editor, as permissões e a orientação para manter o conteúdo entram no planejamento.' },
    ],
    quoteInputs: ['Qual serviço você vende e para quem?', 'Já existe site, domínio, identidade visual e conteúdo?', 'O contato precisa chegar por WhatsApp, e-mail ou CRM?'],
    recurringCosts: 'Domínio, hospedagem e ferramentas de terceiros têm custos recorrentes. Edição de conteúdo, manutenção e campanhas são combinadas conforme a necessidade.',
  },
  '/criacao-software': {
    introduction: 'Uma primeira entrega pode resolver um processo específico. Definimos as regras, as integrações e os critérios de aceite antes de ampliar o sistema.',
    options: [
      { title: 'Substituir controles em planilhas', description: 'Organizar cadastros, permissões, aprovações e histórico de um fluxo. A primeira etapa identifica as regras e os dados que precisam sair das planilhas.' },
      { title: 'Integrar sistemas existentes', description: 'Conectar informações por APIs e tratar falhas, tentativas e conferência dos dados. Avaliamos os acessos, os limites de cada sistema e quem resolve as exceções.' },
      { title: 'Modernizar um sistema legado', description: 'Planejar mudanças por etapas, com testes e continuidade de operação. A proposta delimita o que será preservado, migrado ou substituído e como validar cada etapa.' },
    ],
    quoteInputs: ['Qual processo está gerando retrabalho e com que frequência?', 'Quais sistemas e fontes de dados já são usados?', 'Quem utiliza o processo e quem pode validar a primeira entrega?'],
    recurringCosts: 'Hospedagem, APIs e licenças dependem da arquitetura e do uso. Suporte, correções e novas funcionalidades precisam ter responsáveis e condições definidos na proposta.',
  },
  '/apps-mobile': {
    introduction: 'O desenvolvimento de um aplicativo para empresa começa pelas tarefas de clientes ou equipes. Avaliamos os recursos do celular, as integrações e a distribuição antes de escolher a tecnologia.',
    options: [
      { title: 'Aplicativo para clientes', description: 'Pedidos, acompanhamento, agendamento ou autoatendimento conectado aos seus sistemas. O protótipo valida a jornada principal antes da programação.' },
      { title: 'Aplicativo para equipe em campo', description: 'Registro de visitas, inspeções ou execução de tarefas. Se houver uso sem internet, planejamos armazenamento local, sincronização e tratamento de conflitos.' },
      { title: 'Primeira versão de um produto', description: 'Um conjunto prioritário de funcionalidades para validar o uso. Definimos usuários, critérios de aceite e forma de distribuição, com espaço para evolução após os primeiros aprendizados.' },
    ],
    quoteInputs: ['Quem vai usar o aplicativo e qual tarefa precisa concluir?', 'Precisa funcionar sem internet, usar câmera ou enviar notificações?', 'Quais sistemas serão integrados e como o app será distribuído?'],
    recurringCosts: 'Contas de desenvolvedor das lojas, infraestrutura, serviços de terceiros e manutenção de versões entram no orçamento. A aprovação de publicação depende das regras de cada loja.',
  },
};
