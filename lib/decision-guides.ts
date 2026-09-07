import type { ServicePath } from './services';

type GuideSection = { id: string; title: string; paragraphs: string[]; checklist?: string[] };
export type DecisionGuide = {
  slug: string; title: string; description: string; answer: string;
  service: ServicePath; serviceLabel: string; cta: string;
  comparison: { headers: [string, string, string]; rows: [string, string, string][] };
  sections: GuideSection[];
};

export const decisionGuides: DecisionGuide[] = [
  {
    slug: 'software-sob-medida-ou-sistema-pronto',
    title: 'Software sob medida ou sistema pronto: como escolher?',
    description: 'Compare adaptação, integrações, investimento e manutenção para escolher entre software sob medida e sistema pronto para sua empresa.',
    answer: 'Um sistema pronto costuma fazer sentido quando atende às regras essenciais do negócio com configuração. Software sob medida merece avaliação quando as limitações geram retrabalho relevante ou impedem um processo que diferencia sua empresa. A decisão depende do custo total e da capacidade de operar a solução.',
    service: '/criacao-software', serviceLabel: 'desenvolvimento de software sob medida', cta: 'Quero comparar os caminhos para minha empresa',
    comparison: {
      headers: ['Critério', 'Sistema pronto', 'Software sob medida'],
      rows: [
        ['Regras de negócio', 'Você configura o que o produto permite.', 'As regras acordadas são construídas para sua operação.'],
        ['Início de uso', 'Depende de configuração, migração e treinamento.', 'Depende de definição, desenvolvimento e validação.'],
        ['Integrações', 'Limitadas às APIs, conectores e condições do fornecedor.', 'Planejadas por projeto; ainda dependem dos sistemas externos.'],
        ['Custo contínuo', 'Licenças, usuários, recursos extras e serviços de integração.', 'Hospedagem, manutenção, serviços externos e evolução.'],
        ['Responsabilidade', 'O fornecedor mantém o produto; você administra o uso.', 'Operação, suporte e evolução precisam de responsáveis definidos.'],
      ],
    },
    sections: [
      { id: 'quando-pronto', title: 'Quando escolher um sistema pronto', paragraphs: [
        'Comece identificando os requisitos indispensáveis. Cadastro, agenda, cobrança e gestão de tarefas podem já estar bem atendidos por produtos existentes. Se a ferramenta cobre o fluxo principal, configurar e integrar pode ser suficiente.',
        'Faça uma demonstração com um processo real da empresa. Em vez de conferir apenas uma lista de funcionalidades, simule a entrada de um pedido, uma alteração e uma exceção. Observe onde as pessoas precisam sair do sistema para completar o trabalho.',
      ] },
      { id: 'quando-sob-medida', title: 'Quando o desenvolvimento sob medida se justifica', paragraphs: [
        'O sinal mais útil é uma limitação recorrente com impacto concreto. Pode ser uma regra de aprovação que nenhum produto atende, uma integração indispensável ou uma operação que cresce acompanhada de controles paralelos.',
        'Exemplo ilustrativo: um pedido precisa passar por condições comerciais diferentes por cliente e por várias aprovações. Se o sistema exige planilhas para manter essas regras, uma integração ou um módulo específico pode resolver o gargalo. Isso não exige necessariamente substituir todo o ambiente.',
      ] },
      { id: 'custo-total', title: 'Compare o custo total, não apenas o orçamento inicial', paragraphs: [
        'Use o mesmo horizonte de planejamento para comparar as alternativas. Some implantação, migração de dados, integração, treinamento, licenças, infraestrutura, suporte e evolução. Inclua também o tempo da sua equipe para implantar e validar.',
        'Registre as premissas: quantidade de usuários, volume de operações e necessidades de suporte. Uma diferença de preço pode resultar de escopos distintos. Peça que exclusões, limitações e cobranças recorrentes sejam explicitadas.',
      ], checklist: ['Quais tarefas ainda ficarão fora da ferramenta?', 'Como exportar os dados e obter a documentação?', 'Quem atende incidentes e em quais condições?', 'O que muda no custo quando a operação cresce?'] },
      { id: 'primeiro-passo', title: 'Como decidir sem começar pelo projeto inteiro', paragraphs: [
        'Selecione um fluxo prioritário, registre o tempo gasto e as falhas mais frequentes. Compare ferramentas e possibilidades de integração com esse fluxo. Se houver incerteza técnica, delimite uma prova de conceito com critérios de sucesso e um ponto de decisão.',
        'Na conversa com a Mattos Tech Solutions, você pode trazer uma descrição do processo e dos sistemas utilizados. Isso ajuda a avaliar se o caminho é aproveitar o que existe, integrar ferramentas ou desenvolver uma solução. A recomendação e o escopo dependem dessa análise.',
      ] },
    ],
  },
  {
    slug: 'quanto-custa-site-profissional',
    title: 'Quanto custa um site profissional e o que entra no orçamento?',
    description: 'Entenda o que muda o preço de um site profissional: conteúdo, páginas, design, integrações, hospedagem e manutenção. Compare propostas com clareza.',
    answer: 'O preço de um site depende do que ele precisa fazer e do que será entregue. Número e tipo de páginas, produção de conteúdo, design, integrações e manutenção mudam o investimento. Para comparar propostas, separe a criação do site dos custos recorrentes e verifique quem é responsável por cada etapa.',
    service: '/criacao-sites', serviceLabel: 'criação de sites profissionais', cta: 'Quero entender o escopo do meu site',
    comparison: {
      headers: ['Item', 'O que verificar', 'Por que muda o orçamento'],
      rows: [
        ['Conteúdo', 'Textos, imagens, revisão e responsáveis.', 'Organizar a oferta e produzir materiais exige trabalho próprio.'],
        ['Páginas', 'Modelos diferentes e volume de conteúdo.', 'Uma página de serviço e uma área de cliente têm complexidades distintas.'],
        ['Integrações', 'Formulário, CRM, agenda, pagamentos e outras ferramentas.', 'Cada conexão precisa de configuração e testes.'],
        ['Gestão', 'Painel para editar textos e publicar páginas.', 'Autonomia de edição pode exigir configuração e treinamento.'],
        ['Operação', 'Domínio, hospedagem, suporte e licenças.', 'São despesas e responsabilidades posteriores à publicação.'],
      ],
    },
    sections: [
      { id: 'tipo-site', title: 'Site institucional, landing page ou loja virtual?', paragraphs: [
        'Um site institucional explica a empresa e seus serviços. Uma landing page concentra a atenção em uma oferta ou campanha. Uma loja virtual inclui catálogo, compra, pagamento e operação dos pedidos. Antes de comparar preços, confirme que as propostas tratam do mesmo objetivo.',
        'O número de páginas isoladamente não define a complexidade. Dez páginas baseadas em um mesmo modelo podem exigir menos implementação que uma única área com login e integração a sistemas. Liste as ações que o visitante precisa conseguir realizar.',
      ] },
      { id: 'escopo', title: 'O que uma proposta de site precisa esclarecer', paragraphs: [
        'O orçamento deve identificar as páginas, as funcionalidades, o conteúdo incluído e as integrações. Também precisa indicar etapas de aprovação, critérios de entrega e o que depende da empresa contratante, como identidade visual e acesso às ferramentas.',
        'Confirme o que significa “SEO incluído”. Estrutura de títulos, indexação e desempenho são diferentes de produção editorial contínua ou acompanhamento de busca. O mesmo vale para “manutenção”: correções, alterações de conteúdo e novas páginas podem ter condições distintas.',
      ], checklist: ['O layout será validado no celular e no computador?', 'Quem escreve e aprova os textos?', 'Como os contatos chegam à equipe comercial?', 'Quais acessos e materiais serão entregues?', 'Hospedagem, domínio e suporte estão separados?'] },
      { id: 'retorno', title: 'Como avaliar se o site entrega valor', paragraphs: [
        'Um site de serviços precisa explicar a oferta, ajudar o visitante a confiar e facilitar o contato. Escolha indicadores coerentes com esse objetivo: solicitações qualificadas, cliques nos canais de contato e conversão dos formulários. Um clique no WhatsApp indica interesse, mas não comprova uma conversa ou venda.',
        'Exemplo ilustrativo: se visitantes chegam a uma página de serviço e perguntam sempre o que está incluído, o conteúdo pode não estar respondendo à dúvida principal. Melhorar essa explicação e acompanhar a qualidade dos contatos pode ser mais útil que adicionar efeitos visuais.',
        'Resultados dependem também da origem dos visitantes, da oferta e do atendimento comercial. Um site novo não cria demanda sozinho e nenhuma posição no Google deve ser tratada como garantida.',
      ] },
      { id: 'briefing', title: 'O que preparar para pedir um orçamento', paragraphs: [
        'Descreva o que a empresa vende, para quem vende e qual ação espera do visitante. Liste os serviços prioritários, o site atual, se houver, e as ferramentas que precisam receber os contatos. Se existir uma data importante, explique o motivo.',
        'Você pode começar sem textos prontos. Informe o que já existe e o que precisa de apoio, para que a proposta reflita esse trabalho. A Mattos Tech Solutions usa esse contexto para avaliar a estrutura, as entregas e o investimento do projeto.',
      ] },
    ],
  },
  {
    slug: 'automatizar-processos-empresa',
    title: 'Automação de processos: por onde começar na empresa?',
    description: 'Aprenda a escolher o primeiro processo para automatizar, estimar esforço manual e definir indicadores antes de investir em integrações ou IA.',
    answer: 'Comece por uma tarefa frequente, com regras claras, dados acessíveis e um responsável. Meça o esforço atual, defina como tratar exceções e teste um fluxo pequeno. Automação pode ser uma integração simples; inteligência artificial só entra quando o tipo de tarefa e a validação justificam seu uso.',
    service: '/consultoria-ti', serviceLabel: 'consultoria de TI e automação de processos', cta: 'Quero identificar o primeiro processo para automatizar',
    comparison: {
      headers: ['Situação', 'Caminho a avaliar', 'O que verificar'],
      rows: [
        ['Copiar dados entre ferramentas', 'Integração entre sistemas.', 'Acesso, regras de cadastro e duplicidades.'],
        ['Encaminhar aprovações', 'Fluxo com regras e responsáveis.', 'Exceções, permissões e histórico.'],
        ['Ler documentos variados', 'Extração assistida, possivelmente com IA.', 'Qualidade, custo por documento e revisão humana.'],
        ['Processo muda a cada execução', 'Organizar o processo antes.', 'Responsável, critérios e padrões mínimos.'],
        ['Tarefa rara e rápida', 'Manter manual pode ser adequado.', 'Se implantação e manutenção se justificam.'],
      ],
    },
    sections: [
      { id: 'prioridade', title: 'Como escolher o primeiro processo', paragraphs: [
        'Procure tarefas que se repetem e geram espera ou retrabalho: cadastrar pedidos, conferir informações, atualizar relatórios ou encaminhar solicitações. Converse com quem executa o trabalho e observe as etapas reais, incluindo ajustes fora do procedimento formal.',
        'Priorize a combinação de frequência, esforço, risco de erro e viabilidade. Um fluxo visível e bem delimitado facilita a validação. Automatizar um processo desorganizado pode apenas fazer o erro se repetir mais rapidamente.',
      ] },
      { id: 'medir-esforco', title: 'Uma conta simples para dimensionar o esforço atual', paragraphs: [
        'Multiplique o volume mensal de tarefas pelo tempo médio de execução e divida por 60. O resultado é uma estimativa de horas mensais dedicadas à tarefa. Use uma amostra representativa e inclua conferências e retrabalho para não subestimar o esforço.',
        'Exemplo hipotético: 300 tarefas de 10 minutos representam 50 horas por mês. Isso descreve esforço atual, não economia prometida. A solução pode continuar exigindo conferência, tratamento de exceções e manutenção. Tempo liberado também não se transforma automaticamente em redução de despesas.',
        'Depois do piloto, compare o tempo restante, o custo de operação e a qualidade das entregas. Observe volumes equivalentes e considere treinamento e adaptação da equipe ao interpretar o resultado.',
      ] },
      { id: 'ia-ou-regra', title: 'Quando usar integração, regras ou inteligência artificial', paragraphs: [
        'Se a tarefa segue uma regra objetiva, como transferir um pedido aprovado para outro sistema, uma integração pode atender. Defina como identificar o registro, impedir duplicidades e avisar a equipe se algo falhar.',
        'Quando o trabalho envolve linguagem ou documentos variados, IA pode ajudar a classificar ou extrair informações. Nesse caso, teste respostas com exemplos representativos, defina quais situações exigem revisão e acompanhe o custo por uso. Dados incompletos e respostas incorretas precisam de tratamento explícito.',
      ] },
      { id: 'piloto', title: 'O que combinar antes de colocar o fluxo em operação', paragraphs: [
        'Escolha um responsável pelo processo e outro pelo acompanhamento técnico. Defina os acessos necessários, os critérios de aceite e um procedimento manual para quando a automação não puder concluir uma tarefa.',
        'Leve para a conversa inicial o fluxo, as ferramentas e uma estimativa de frequência. Evite compartilhar dados sensíveis nesse primeiro contato. A análise pode indicar um ajuste de processo, uma integração ou um piloto antes de ampliar o investimento.',
      ], checklist: ['Qual evento inicia e encerra o fluxo?', 'Como a equipe identifica e corrige uma falha?', 'Quem revisa exceções e acompanha indicadores?', 'Quais custos recorrentes precisam ser previstos?'] },
    ],
  },
];

export function getDecisionGuide(slug: string) { return decisionGuides.find(guide => guide.slug === slug); }
