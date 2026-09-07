import type { ServicePath } from './services';

type ServiceValue = {
  problem: string;
  impact: string;
  outcome: string;
  deliverables: string[];
  measure: string;
  caveat: string;
};

export const serviceValue: Record<ServicePath, ServiceValue> = {
  '/consultoria-ti': {
    problem: 'Você precisa investir em tecnologia, mas não sabe o que priorizar.',
    impact: 'Projetos isolados e ferramentas sobrepostas disputam orçamento sem resolver a causa dos problemas.',
    outcome: 'Um plano de decisões para direcionar investimento, responsáveis e próximos passos.',
    deliverables: ['Mapa dos processos e sistemas atuais', 'Prioridades por impacto, esforço e risco', 'Plano de ação por etapas'],
    measure: 'Acompanhar a execução das prioridades, os custos envolvidos e o gargalo que cada ação resolve.',
    caveat: 'A consultoria orienta a decisão. Desenvolvimento, licenças e execução das melhorias precisam estar previstos no escopo.',
  },
  '/criacao-software': {
    problem: 'Sua equipe depende de planilhas e repete os mesmos cadastros em vários sistemas.',
    impact: 'Cada nova demanda aumenta o trabalho manual, o tempo de conferência e a chance de erro.',
    outcome: 'Processos conectados para a equipe trabalhar com menos digitação e mais controle.',
    deliverables: ['Fluxos e regras de negócio documentados', 'Sistema e integrações definidos no escopo', 'Testes, documentação e orientação de uso'],
    measure: 'Comparar tempo por tarefa, volume de retrabalho e erros antes e depois da implantação.',
    caveat: 'Uma ferramenta pronta pode atender melhor a um processo simples. Software sob medida faz sentido quando regras e integrações justificam a manutenção.',
  },
  '/consultoria-protheus': {
    problem: 'O Protheus exige ajustes manuais e suas integrações interrompem a rotina.',
    impact: 'Fechamentos, pedidos e conferências dependem de correções que se repetem a cada ciclo.',
    outcome: 'Um ERP mais alinhado à operação, com fluxos validados e falhas rastreáveis.',
    deliverables: ['Diagnóstico dos módulos e integrações', 'Ajustes e customizações acordados', 'Validação em homologação e orientação da equipe'],
    measure: 'Acompanhar falhas de integração, tempo de fechamento e chamados recorrentes.',
    caveat: 'Versão, licenças e customizações existentes afetam o projeto. Regras fiscais precisam ser validadas com os responsáveis da empresa.',
  },
  '/inteligencia-artificial': {
    problem: 'Sua equipe gasta horas buscando informações, lendo documentos e respondendo perguntas repetidas.',
    impact: 'O atendimento acumula filas e profissionais deixam atividades importantes para executar triagens manuais.',
    outcome: 'Assistentes que apoiam tarefas específicas, com fontes, limites e revisão humana.',
    deliverables: ['Caso de uso e critérios de qualidade', 'Piloto conectado às fontes acordadas', 'Avaliação de respostas e regras de supervisão'],
    measure: 'Medir tempo por tarefa, respostas úteis, intervenções humanas e custo por uso no piloto.',
    caveat: 'IA pode errar. Qualidade dos dados, revisão humana e custos dos provedores entram na avaliação antes de ampliar o uso.',
  },
  '/criacao-sites': {
    problem: 'Quem visita seu site não entende seu diferencial ou não encontra um caminho claro para entrar em contato.',
    impact: 'Você pode pagar por divulgação e perder oportunidades na etapa em que o visitante decide confiar na empresa.',
    outcome: 'Uma presença digital que explica sua oferta e facilita o próximo passo do cliente.',
    deliverables: ['Estrutura de páginas e conteúdo acordado', 'Design adaptado a celular e computador', 'Formulários, SEO técnico e medição previstos no projeto'],
    measure: 'Acompanhar contatos qualificados, conversão dos formulários e desempenho das páginas.',
    caveat: 'Um site depende de oferta, conteúdo e aquisição de visitantes. SEO técnico não garante posição no Google nem um volume de vendas.',
  },
  '/migracao-cloud': {
    problem: 'A infraestrutura limita o crescimento e a conta de tecnologia é difícil de explicar.',
    impact: 'Falta visibilidade para planejar capacidade, investigar lentidão e controlar gastos recorrentes.',
    outcome: 'Uma infraestrutura com custos acompanháveis e um plano de migração compatível com a operação.',
    deliverables: ['Inventário e avaliação de viabilidade', 'Plano de migração, testes e retorno', 'Configuração e documentação do ambiente acordado'],
    measure: 'Comparar custo total, disponibilidade e desempenho em períodos equivalentes.',
    caveat: 'Nuvem não significa economia automática. Consumo, licenças, transferência de dados e janelas de migração precisam ser considerados.',
  },
  '/banco-dados-analytics': {
    problem: 'Cada área apresenta um número diferente e montar relatórios leva tempo demais.',
    impact: 'Decisões atrasam enquanto a equipe reúne planilhas e tenta descobrir qual informação está correta.',
    outcome: 'Indicadores com origem e definição claras para apoiar decisões do dia a dia.',
    deliverables: ['Mapa das fontes e definição dos indicadores', 'Integração e tratamento dos dados acordados', 'Painéis e documentação das regras de cálculo'],
    measure: 'Comparar tempo de preparação dos relatórios, atualização e divergências nos indicadores.',
    caveat: 'Painéis dependem da qualidade e do acesso aos dados. Lacunas nas fontes podem exigir correção antes da visualização.',
  },
  '/governanca-compliance': {
    problem: 'A empresa precisa demonstrar controles, mas acessos, políticas e evidências estão dispersos.',
    impact: 'Auditorias viram correria e responsabilidades pouco claras dificultam o tratamento de riscos.',
    outcome: 'Controles e responsabilidades documentados para conduzir a gestão de riscos com mais clareza.',
    deliverables: ['Levantamento de riscos e lacunas', 'Políticas e controles priorizados', 'Plano de ação e organização de evidências'],
    measure: 'Acompanhar ações concluídas, revisões de acesso e evidências atualizadas.',
    caveat: 'O trabalho apoia a adequação técnica e operacional. Certificações, auditorias independentes e orientação jurídica têm escopos próprios.',
  },
  '/avaliacoes-ti': {
    problem: 'As falhas se repetem e sua equipe não tem clareza sobre a causa ou a prioridade de correção.',
    impact: 'Resolver apenas o incidente do dia mantém riscos e gargalos fora do planejamento.',
    outcome: 'Um diagnóstico com evidências para decidir o que corrigir primeiro.',
    deliverables: ['Levantamento do ambiente e dependências', 'Relatório de achados com impacto e evidências', 'Recomendações ordenadas por prioridade'],
    measure: 'Acompanhar o tratamento dos achados e a recorrência dos incidentes após as correções.',
    caveat: 'A avaliação retrata o ambiente e os acessos disponíveis no período. Implementar correções é uma etapa a contratar ou executar internamente.',
  },
  '/apps-mobile': {
    problem: 'Clientes ou equipes precisam executar tarefas recorrentes pelo celular, com uma experiência que o canal atual não atende.',
    impact: 'Etapas difíceis de concluir, conectividade limitada e informações fragmentadas atrapalham o uso.',
    outcome: 'Uma experiência móvel construída em torno das tarefas que as pessoas precisam concluir.',
    deliverables: ['Jornada de uso e protótipo', 'Aplicativo e integrações acordados', 'Testes e preparação para distribuição'],
    measure: 'Medir conclusão de tarefas, uso recorrente e erros nas jornadas principais.',
    caveat: 'Um site responsivo pode ser suficiente. Publicação depende das lojas, e taxas, manutenção e compatibilidade precisam entrar no planejamento.',
  },
  '/ux-ui-design': {
    problem: 'Usuários abandonam etapas ou precisam de ajuda para usar seu produto.',
    impact: 'Uma interface confusa aumenta chamados e impede que as pessoas percebam o valor da solução.',
    outcome: 'Jornadas mais claras, testadas antes de investir na implementação.',
    deliverables: ['Pesquisa e mapa da jornada acordados', 'Protótipos das telas prioritárias', 'Testes de usabilidade e recomendações'],
    measure: 'Observar conclusão de tarefas, tempo de uso e dificuldades nos testes.',
    caveat: 'Design e prototipagem não incluem automaticamente programação. Resultados precisam ser validados com usuários representativos.',
  },
  '/solucoes-ecommerce': {
    problem: 'Vender online exige conferir estoque, pagamentos e pedidos manualmente.',
    impact: 'A operação perde tempo conciliando informações e o cliente encontra dificuldades para concluir a compra.',
    outcome: 'Uma loja com jornada de compra clara e pedidos conectados à rotina do negócio.',
    deliverables: ['Catálogo e jornada de compra', 'Pagamentos, frete e integrações acordados', 'Testes de pedidos e orientação de operação'],
    measure: 'Acompanhar conclusão de compras, falhas em pedidos e tempo de processamento.',
    caveat: 'Plataforma, meios de pagamento e frete têm custos próprios. Vendas também dependem de demanda, preço, divulgação e logística.',
  },
};

export const buyingFaqs = [
  { q: 'Quanto custa e o que compõe o investimento?', a: 'O valor depende do problema, das entregas, das integrações e do nível de acompanhamento. A proposta deve separar o trabalho do projeto dos custos recorrentes, como hospedagem, licenças e consumo de APIs. Esses valores são dimensionados após entender o cenário.' },
  { q: 'O que fica combinado antes de começar?', a: 'Escopo, entregas, exclusões, prazos estimados, dependências da sua equipe e critérios de aceite. A proposta também define condições de pagamento e responsabilidades. Assim, você consegue avaliar o que está contratando e comparar alternativas.' },
  { q: 'Como acompanho e aprovo as entregas?', a: 'Com etapas e pontos de validação combinados no planejamento. Sua equipe participa das demonstrações e confere as entregas pelos critérios acordados. Uma mudança de escopo deve ter impacto em prazo e investimento avaliado antes de seguir.' },
  { q: 'E depois da entrega: código, acessos e suporte?', a: 'Direitos sobre o código, documentação, contas e acessos devem constar no contrato, incluindo as licenças de terceiros. Suporte, manutenção, horários e prazos de atendimento também precisam estar definidos; um projeto não inclui automaticamente acompanhamento contínuo.' },
  { q: 'Vocês garantem aumento de vendas ou redução de custos?', a: 'Não há um resultado único para todos os negócios. Definimos indicadores e comparamos o cenário inicial com o que foi implantado. Demanda, qualidade dos dados, adesão da equipe e operação influenciam os resultados. Quando há incerteza, um piloto ajuda a testar a viabilidade antes de ampliar o investimento.' },
  { q: 'Preciso saber qual tecnologia contratar?', a: 'Não. Comece pelo problema, por quem é afetado e pelo que você gostaria de melhorar. Avaliamos se o caminho é ajustar o processo, aproveitar uma ferramenta existente ou desenvolver algo. O envio do contato inicia uma conversa e não contrata um projeto.' },
];
