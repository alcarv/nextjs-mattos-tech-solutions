# Plano de SEO — Mattos Tech Solutions

**Data da análise:** 30 de agosto de 2026
**Domínio canônico:** `https://mattostechsolutions.com`
**Mercado considerado:** Brasil, com prioridade comercial para São Paulo
**Ponto de partida informado:** posição média aproximada 20 no Google
**Objetivo:** aumentar tráfego orgânico não relacionado à marca e mover páginas comercialmente relevantes das posições 11–30 para o top 10, sem técnicas manipulativas.

## Resumo executivo

A Mattos Tech Solutions é uma empresa B2B de tecnologia baseada em São Paulo. O site oferece consultoria de TI, software sob medida, consultoria TOTVS Protheus, Inteligência Artificial, criação de sites, e-commerce, aplicativos, cloud, dados e BI, governança, assessments e UX/UI. O público mais provável são gestores, líderes de tecnologia e donos de empresas que precisam resolver gargalos de operação, integração, confiabilidade ou crescimento.

O projeto já possuía uma base técnica acima da média: Next.js com páginas estáticas, conteúdo renderizado no HTML, URLs canônicas, sitemap, robots, metadados próprios, blog com artigos aprofundados e dados estruturados. A produção retornou HTTP 200 para as 50 URLs do sitemap, os redirecionamentos de HTTP e `www` estão corretos e não foram encontrados links internos quebrados.

Os maiores limitadores encontrados foram:

1. a home disputava as mesmas intenções amplas das páginas de software e IA, em vez de concentrar a intenção institucional/local;
2. as páginas prioritárias tinham conteúdo técnico forte, mas titles e H1s pouco alinhados às consultas comerciais com “São Paulo”, “consultoria” e “empresa”;
3. o conteúdo principal da home era hidratado como um grande componente cliente e inicialmente animado, gerando Lighthouse móvel 74 e LCP de 8,5 s;
4. a malha de links entre serviços dependia principalmente do rodapé e do hub; e-commerce nem sequer aparecia no hub de serviços;
5. as FAQs reais das principais páginas não estavam ligadas a `FAQPage`, e o schema de serviço não descrevia explicitamente a `WebPage` correspondente;
6. o Google ainda mostra, em alguns resultados, versões antigas de títulos, conteúdo e e-mail, o que exige deploy, recrawl e acompanhamento;
7. faltam sinais externos de autoridade comparáveis aos concorrentes: estudos de caso, depoimentos verificáveis, menções editoriais, diretórios/parcerias e backlinks relevantes.

As melhorias de alta confiança foram implementadas sem mudar preços, ofertas ou identidade visual. A home passou de **74 para 94** no Lighthouse móvel e o LCP de laboratório caiu de **8,5 s para 2,9 s**. SEO e acessibilidade permaneceram em 100 e CLS em 0. Após a análise do Search Console, também foram adicionados redirecionamentos permanentes para 20 URLs antigas de artigos que usavam UUID e hoje tinham slugs descritivos; nove dessas URLs antigas ainda somavam 29 impressões e 1 clique no relatório de páginas.

Os dados reais do Google Search Console foram exportados em 30/08/2026 e armazenados em `docs/search-console/2026-08-30`. No período de 29/04/2025 a 28/08/2026, a propriedade registrou **28 cliques, 677 impressões, CTR de 4,1% e posição média 13,3**. Nos últimos 90 dias foram 14 cliques e 457 impressões; nos últimos 28 dias, 10 cliques e 278 impressões, contra 2 cliques e 115 impressões nos 28 dias anteriores. A tendência recente é positiva, mas o volume ainda é pequeno e exige decisões conservadoras.

O principal limitador confirmado não é uma penalidade nem uma falha de HTTPS: é a cobertura. O relatório de 20/08/2026 mostrava **15 URLs indexadas e 30 não indexadas**. Dessas, 3 são variações HTTP/`www` corretamente redirecionadas, 6 foram rastreadas mas não indexadas e 21 foram descobertas sem rastreamento registrado. O Search Console também reporta somente 1 backlink conhecido e nenhum link interno processado, reforçando a prioridade de crawl, consolidação de sinais e autoridade.

## Entendimento da empresa e do projeto

| Item | Entendimento baseado em evidências do projeto |
|---|---|
| Empresa | Mattos Tech Solutions |
| Segmento | Consultoria, engenharia e operação de tecnologia para empresas |
| Proposta de valor | Tecnologia sob medida conectada aos processos reais, com diagnóstico, arquitetura, implantação e evolução contínua |
| Público provável | PMEs e empresas de médio porte; decisores de negócio, operações, finanças e TI; empresas com processos manuais, sistemas isolados, ERP Protheus ou necessidades de modernização |
| Serviços | Consultoria de TI; software sob medida; TOTVS Protheus; IA; sites; e-commerce; apps; cloud; dados/BI; governança/compliance; assessments; UX/UI |
| Base e regiões | São Paulo (o projeto cita Tatuapé), Grande São Paulo e atendimento remoto em todo o Brasil; Sorocaba e Campinas também aparecem no conteúdo existente |
| Diferenciais declarados | Experiência do fundador em ambientes críticos; atuação do diagnóstico à operação; integração entre software, dados, IA e cloud; abordagem sem promessas ou métricas genéricas |
| Fundador | Alefe de Carvalho, identificado no conteúdo existente como Founder e Tech Lead, com mais de 9 anos de experiência profissional |
| Contato canônico atual | `contato@mattostechsolutions.com` e `+55 (11) 99018-3194` |
| Domínio | `https://mattostechsolutions.com`, definido em `.env.example` e `lib/seo.ts` |
| Framework | Next.js 16.1.1, React 19, TypeScript e App Router |
| Renderização | Páginas comerciais pré-renderizadas; blog com SSG/ISR e revalidação de uma hora; API própria para lead do Meta |
| CMS/dados | Supabase para posts do blog |
| Hospedagem | Netlify com `@netlify/plugin-nextjs` |
| Idioma | Português do Brasil (`pt-BR`); não há versão internacional que justifique `hreflang` neste momento |

### Páginas de maior importância comercial

1. `/consultoria-ti` — intenção abrangente e local, capaz de originar diagnósticos e projetos subsequentes;
2. `/criacao-software` — alta aderência ao diferencial técnico e alta intenção de contratação;
3. `/consultoria-protheus` — nicho específico, comercial e com linguagem técnica já aprofundada;
4. `/inteligencia-artificial` — demanda atual, porém concorrência e exigência de confiança elevadas;
5. `/criacao-sites` — grande demanda local, concorrência alta e potencial de leads de menor ciclo;
6. `/migracao-cloud` — demanda B2B qualificada e boa conexão com o conteúdo técnico existente;
7. `/avaliacoes-ti` — boa oferta de entrada para clientes ainda sem escopo definido;
8. `/servicos` — hub de descoberta, distribuição de autoridade e navegação.

## Metodologia de pesquisa

A análise utilizou:

- README, configurações, variáveis de ambiente, Git, rotas, componentes, textos, schemas, sitemap, robots e documentação existentes;
- HTML de produção, headers HTTP, redirecionamentos, sitemap e todas as 50 URLs publicadas;
- títulos, H1s, descrições, FAQs, serviços, artigos e links internos;
- pesquisa web não personalizada em português para consultas comerciais de São Paulo e Brasil;
- comparação manual dos formatos, argumentos e conteúdos visíveis dos concorrentes;
- Lighthouse móvel local antes e depois das alterações;
- exportações reais do Google Search Console de desempenho, indexação, breadcrumbs e links;
- build, TypeScript, ESLint e um crawler SEO reproduzível criado no projeto.

### Contexto e limitações da pesquisa orgânica

- **Data:** 30/08/2026.
- **Localização considerada:** São Paulo/Brasil pela linguagem e modificadores das consultas. A ferramenta de busca não garante uma localização física exata nem reproduz integralmente uma SERP personalizada do Google.
- **Variação:** resultados mudam por dispositivo, histórico, bairro, data, layout da SERP e testes do buscador.
- **Posições:** as posições reais deste documento vêm do Search Console; a pesquisa web continua sendo usada apenas para contexto competitivo e formato das SERPs.
- **Volume/dificuldade:** não houve acesso a Google Ads, Semrush, Ahrefs ou outra base de volume. “Dificuldade aparente” é uma avaliação qualitativa baseada na força dos domínios e na profundidade dos resultados atuais.
- **Backlinks:** o Search Console encontrou 1 link externo; não houve acesso a Ahrefs, Semrush ou outra base independente para comparação competitiva completa.
- **Privacidade e agregação:** o Search Console omite consultas raras/anônimas. Por isso, a soma das linhas de consultas é menor que o total da propriedade. Em páginas, uma mesma impressão da propriedade pode envolver mais de uma URL; os cartões e a série temporal são a fonte dos totais gerais.

## Diagnóstico técnico

| Área | Estado encontrado | Ação/decisão |
|---|---|---|
| Indexabilidade | Produção acessível e 50 URLs do sitemap retornaram 200; GSC tinha 15 indexadas de 45 conhecidas em 20/08 | Prioridade imediata de recrawl e qualidade/descoberta |
| Robots | Permite rastreamento e bloqueia apenas `/api/` e `/private/`; aponta para sitemap | Mantido |
| Sitemap | 17 URLs estáticas e 33 artigos em produção; GSC processou 49 URLs na leitura de 29/08 | Mantido; reenviar após deploy para nova leitura |
| Canonicals | Próprios e coerentes com o caminho em todas as páginas verificadas | Mantidos; validação automatizada |
| HTTP/HTTPS | HTTP redireciona 301 para HTTPS | Correto |
| `www` | `https://www...` redireciona 301 para o domínio sem `www` | Correto |
| 404 | Status 404 correto, porém usava a experiência padrão | Criada página 404 útil e `noindex` |
| URLs antigas de blog | 9 URLs com UUID ainda somavam 29 impressões e 1 clique, mas retornavam 404 | 20 mapeamentos históricos receberam redirect permanente para o slug atual |
| Links quebrados | Nenhum entre 50 páginas e 50 destinos internos de produção | Validação automatizada adicionada |
| Página órfã | E-commerce estava no sitemap, mas fora do hub principal | Adicionada ao hub e a links relacionados |
| Profundidade | Serviços principais acessíveis pelo hub/rodapé; relações contextuais fracas | Blocos de serviços relacionados adicionados às 12 páginas |
| Breadcrumbs | JSON-LD existia; barra visual não tinha semântica nem nome atual | Transformada em navegação `aria-label="Breadcrumb"` com página atual |
| Hreflang | Apenas `pt-BR` | Não necessário |
| Renderização | Conteúdo comercial está no HTML; blog usa SSG/ISR | Correto |
| JavaScript | Home inteira era um componente cliente | Conteúdo estático voltou ao servidor; efeitos isolados |
| Conteúdo pós-interação | FAQs ficam em accordion, mas perguntas/respostas estão no HTML | Correto; schema ligado ao conteúdo visível |
| Mobile | Layout responsivo; Lighthouse sem falhas de SEO ou acessibilidade | Mantido |
| Imagens | `next/image`, dimensões, `sizes`, AVIF/WebP e alts presentes nos pontos relevantes | Mantido |
| CLS | 0 no laboratório | Correto |
| LCP | Home 8,5 s antes; páginas prioritárias próximas de 2,5 s | Home reduzida para 2,9 s; monitorar dados de campo |
| INP | Lighthouse não mede INP de campo; TBT foi 90–120 ms; GSC não possui amostra CrUX suficiente | Monitorar quando houver tráfego de campo suficiente |
| Recursos terceiros | GTM, Meta Pixel e RD Station somam JS/cookies externos | Pendente de decisão de consentimento e estratégia de medição |
| Segurança básica | HTTPS, HSTS e `X-Content-Type-Options` presentes na produção | Correto; CSP exigiria inventário dos scripts de marketing |
| Dados estruturados | Organization, WebSite, Service, BlogPosting, Breadcrumb e FAQ geral | Acrescentados WebPage, FAQ real de serviços e CollectionPage/ItemList |
| Ações manuais/segurança | Nenhuma ação manual e nenhum problema de segurança no GSC | Correto |

### Linha de base e resultado de laboratório

Execução móvel local em build de produção, Chrome headless e Lighthouse 13. Resultados de laboratório variam entre execuções e não substituem Core Web Vitals de campo.

| Página | Momento | Performance | SEO | Acessibilidade | Boas práticas | FCP | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Home | Antes | 74 | 100 | 100 | 77 | 1,1 s | 8,5 s | 120 ms | 0 |
| Home | Depois | 94 | 100 | 100 | 77 | 1,1 s | 2,9 s | 120 ms | 0 |
| Software | Antes | 97 | 100 | 100 | 77 | 1,1 s | 2,5 s | 90 ms | 0 |
| Software | Depois | 96 | 100 | 100 | 77 | 1,1 s | 2,6 s | 90 ms | 0 |

Na home, o LCP deixou de ser o pequeno texto “TECH SOLUTIONS” do cabeçalho e passou a ser o H1 real. Em software, o H1 também passou a ser o elemento principal imediatamente disponível. A diferença de 0,1 s nessa página está dentro da variação normal de laboratório.

## Auditoria on-page

### Principais achados

- Todas as páginas indexáveis verificadas possuem exatamente um H1, title, meta description e canonical.
- Não foram encontradas páginas comerciais finas: a produção apresenta aproximadamente 700–930 palavras nas páginas de serviço aprofundadas e 603 palavras no hub.
- A home tinha intenção excessivamente ampla e sobrepunha software e IA. Foi reposicionada para “empresa de tecnologia em São Paulo”.
- Software, Protheus, sites, IA e consultoria de TI passaram a alinhar title, H1, introdução e intenção comercial.
- Titles locais ficaram entre 54 e 68 caracteres no HTML final. Os mais longos devem ser avaliados por CTR no Search Console, pois o Google pode reescrevê-los.
- O conteúdo preserva a voz consultiva e evita preços, garantias, certificações, avaliações ou números inventados.
- Os artigos antigos já foram reescritos com melhor profundidade, mas alguns ainda podem competir semanticamente com páginas comerciais. A distinção deve ser: serviço = contratação; artigo = decisão/aprendizado.

### Canibalização e sobreposição

| Sobreposição | Risco | Decisão recomendada |
|---|---|---|
| Home x `/criacao-software` x `/inteligencia-artificial` | Home tentava ranquear por todas as ofertas | Home agora é institucional/local; páginas de serviço são donas das intenções transacionais |
| `/criacao-sites` x artigo “Site Profissional para Empresas” | Ambos usam “site profissional” | Serviço deve responder contratação/escopo; artigo deve responder requisitos, custos e checklist e apontar para o serviço |
| `/consultoria-ti` x artigo “Quando Contratar uma Consultoria de TI” | Intenção comercial e informacional próximas | Manter o artigo comparativo e ligar com âncora descritiva para a landing comercial |
| `/migracao-cloud` x artigo “Migração para Nuvem” | Mesmo termo principal | Serviço: fornecedor/execução; artigo: planejamento/checklist; links bidirecionais |
| `/avaliacoes-ti` x artigo “Assessment de TI” | Mesmo termo principal | Serviço: proposta e entregáveis; artigo: como avaliar e preparar; links bidirecionais |
| Automação x software x consultoria | Não existe landing exclusiva de automação, apesar de a home destacar a oferta | `/criacao-software` permanece dona da intenção transacional por enquanto; criar `/automacao-processos` somente após confirmar demanda distinta no GSC |

## Descoberta e mapa de palavras-chave

### Critério de prioridade

- **P0:** alta relevância, alta intenção e aderência clara a uma página já existente.
- **P1:** boa intenção e potencial de apoio/conversão; precisa de conteúdo ou autoridade adicional.
- **P2:** relevante, mas mais amplo, competitivo, informacional ou dependente de validação.

“Dificuldade” é aparente: alta quando os resultados atuais incluem empresas fortes, especialistas antigos, diretórios ou páginas com muitos casos e backlinks; média quando existe espaço para uma boutique técnica se diferenciar.

| Cluster / palavra-chave | Tipo | Intenção | Funil | Conversão | Dificuldade | Prioridade | Página dona |
|---|---|---|---|---|---|---|---|
| empresa de tecnologia em São Paulo | Ampla/local | Comercial/local | Consideração | Alta | Alta | P0 | `/` |
| consultoria de TI em São Paulo | Específica/local | Comercial/local | Consideração | Muito alta | Alta | P0 | `/consultoria-ti` |
| consultoria de TI para empresas | Específica | Comercial | Consideração | Muito alta | Alta | P0 | `/consultoria-ti` |
| planejamento estratégico de TI | Específica | Comercial/informacional | Consideração | Alta | Média | P1 | `/consultoria-ti` |
| software sob medida em São Paulo | Específica/local | Transacional | Decisão | Muito alta | Alta | P0 | `/criacao-software` |
| desenvolvimento de software sob medida | Ampla | Comercial | Decisão | Muito alta | Alta | P0 | `/criacao-software` |
| empresa de desenvolvimento de sistemas | Específica | Comercial | Decisão | Muito alta | Alta | P1 | `/criacao-software` |
| software house em São Paulo | Específica/local | Comercial | Decisão | Muito alta | Alta | P1 | `/criacao-software` |
| sistema personalizado para empresa | Cauda longa | Comercial | Consideração | Alta | Média | P1 | `/criacao-software` |
| consultoria TOTVS Protheus | Específica | Transacional | Decisão | Muito alta | Alta | P0 | `/consultoria-protheus` |
| consultoria Protheus em São Paulo | Específica/local | Transacional/local | Decisão | Muito alta | Média/alta | P0 | `/consultoria-protheus` |
| suporte Protheus / sustentação Protheus | Específica | Transacional | Decisão | Muito alta | Alta | P1 | `/consultoria-protheus` |
| customização Protheus ADVPL | Cauda longa | Comercial | Decisão | Alta | Média | P1 | `/consultoria-protheus` |
| consultoria de IA para empresas | Específica | Comercial | Consideração | Muito alta | Alta | P0 | `/inteligencia-artificial` |
| inteligência artificial para empresas | Ampla | Comercial/informacional | Descoberta/consideração | Alta | Alta | P0 | `/inteligencia-artificial` |
| RAG para empresas / chatbot com dados internos | Cauda longa | Comercial/informacional | Consideração | Alta | Média | P1 | `/inteligencia-artificial` + artigos de RAG/chatbot |
| automação de processos com IA | Cauda longa | Comercial | Consideração | Alta | Média/alta | P1 | `/inteligencia-artificial` |
| criação de sites profissionais em São Paulo | Específica/local | Transacional | Decisão | Muito alta | Alta | P0 | `/criacao-sites` |
| empresa de criação de sites em SP | Específica/local | Transacional | Decisão | Muito alta | Alta | P1 | `/criacao-sites` |
| site institucional para empresa | Cauda longa | Comercial | Consideração | Alta | Média | P1 | `/criacao-sites` |
| consultoria migração para nuvem | Específica | Comercial | Decisão | Muito alta | Média/alta | P1 | `/migracao-cloud` |
| migração AWS Azure GCP | Específica | Comercial | Consideração | Alta | Alta | P1 | `/migracao-cloud` |
| assessment de TI para empresas | Específica | Comercial | Consideração | Alta | Média | P1 | `/avaliacoes-ti` |
| diagnóstico de infraestrutura de TI | Cauda longa | Comercial | Consideração | Alta | Média | P1 | `/avaliacoes-ti` |
| consultoria em banco de dados / BI | Específica | Comercial | Consideração | Alta | Alta | P1 | `/banco-dados-analytics` |
| business intelligence para empresas | Específica | Comercial/informacional | Consideração | Alta | Alta | P1 | `/banco-dados-analytics` + artigo de BI |
| governança de TI / compliance de TI | Específica | Comercial | Consideração | Alta | Média/alta | P1 | `/governanca-compliance` |
| desenvolvimento de aplicativos em São Paulo | Específica/local | Comercial | Decisão | Alta | Alta | P1 | `/apps-mobile` |
| desenvolvimento de e-commerce | Específica | Comercial | Decisão | Alta | Alta | P1 | `/solucoes-ecommerce` |
| UX/UI design para empresas | Específica | Comercial | Consideração | Média/alta | Alta | P2 | `/ux-ui-design` |
| automação de processos para empresas | Específica | Comercial | Consideração | Muito alta | Média/alta | P1 | `/criacao-software` agora; nova landing a validar |
| quanto custa software sob medida | Cauda longa | Informacional/comercial | Decisão | Muito alta | Média | P0 editorial | Novo artigo apoiando `/criacao-software` |
| como escolher consultoria Protheus | Cauda longa | Informacional/comercial | Decisão | Muito alta | Média | P0 editorial | Novo artigo apoiando `/consultoria-protheus` |
| como calcular ROI de IA | Cauda longa | Informacional/comercial | Consideração | Alta | Média | P0 editorial | Novo artigo apoiando `/inteligencia-artificial` |

### Termos amplos versus cauda longa

- **Amplos:** “empresa de tecnologia”, “consultoria de TI”, “inteligência artificial para empresas”. Têm maior concorrência e intenção misturada. Servem a páginas centrais e exigem autoridade.
- **Específicos comerciais:** “consultoria Protheus”, “software sob medida em São Paulo”, “criação de sites profissionais em São Paulo”. Devem receber a maior parte da otimização on-page e dos links internos.
- **Cauda longa de decisão:** “quanto custa software sob medida”, “como escolher consultoria Protheus”, “chatbot com dados internos da empresa”. Costumam converter melhor e são adequados para conteúdos que levam à página comercial.
- **Técnicos/informacionais:** “webhooks”, “RAG”, “CI/CD seguro”, “observabilidade”. Constroem autoridade temática, mas devem apontar para o serviço coerente para não gerar tráfego sem caminho de conversão.

## Concorrentes orgânicos e comerciais

### Concorrentes comerciais recorrentes

| Grupo | Domínios observados | Por que aparecem / força principal |
|---|---|---|
| Software sob medida em SP | [Bradata](https://www.bradata.com.br/software-house/sao-paulo), [Neryx](https://www.neryx.com.br/software-sob-medida/), [Espresso Labs](https://espresso-labs.com/), Nyverse, North Studio | Landings locais, casos/logos, oferta muito explícita, páginas de decisão e ecossistema editorial |
| TOTVS Protheus | [Upduo](https://www.upduo.com.br/), [Atria Soluções](https://www.atriasolucoes.com.br/), M3Case, Synesis | Especialização exclusiva, tempo de mercado, homologação/canal quando verdadeiro, depoimentos, endereço e módulos claros |
| IA para empresas | [Deal](https://www.deal.com.br/), [Tryvia](https://tryv.ia.br/consultoria-em-ia), Fanar, Miotech | Autoridade de marca, metodologia, conteúdo de decisão, casos/métricas, ofertas derivadas e forte repetição do tema |
| Criação de sites em SP | [SW Agência](https://www.swagencia.com.br/criacao-de-sites), WiseData, W2, Tecna | Páginas locais, tipos de projeto, portfólio, provas, processo, preço em alguns casos e conteúdo sobre contratação |
| Automação de processos | Nexus BPM, AvantiCoreX, Digizer, Rotina Zero | Problema operacional explícito, exemplos concretos, linguagem de resultado e oferta de diagnóstico |

### Concorrentes orgânicos não comerciais diretos

- **oHub:** marketplace/diretório que agrega centenas de fornecedores e disputa “consultoria de TI em São Paulo”. Pode ser também oportunidade de citação e lead, desde que o perfil seja verdadeiro e mantido.
- **BR Firmas e outros diretórios locais:** disputam buscas locais por escala de páginas, mas não entregam o serviço.
- **TOTVS e documentação TDN:** aparecem em consultas técnicas de Protheus; são fonte primária, não concorrente comercial direto.
- **Portais técnicos, documentação oficial e publicações de fornecedores:** competem com artigos informacionais e devem ser citados quando forem fontes relevantes.

### Matriz comparativa

| Fator | Mattos Tech Solutions | Concorrentes fortes | Oportunidade concreta |
|---|---|---|---|
| Foco por intenção | Páginas próprias para 12 serviços | Também usam páginas específicas; alguns criam landings locais adicionais | Manter uma página dona por intenção; não criar páginas de cidade duplicadas |
| Profundidade técnica | Forte em arquitetura, segurança, integração, cloud, Protheus e IA | Varia; Neryx, Upduo e Deal têm profundidade/clareza | Transformar profundidade em entregáveis e critérios de contratação |
| Conteúdo de decisão | FAQs e metodologia presentes | Concorrentes cobrem custo, prazo, comparação, “quando contratar” e objeções | Produzir guias de custo/escopo/seleção com experiência real |
| Provas | Experiência do fundador apresentada com ressalva honesta | Logos, depoimentos, cases, tempo de mercado, certificações e números | Publicar casos verificáveis com autorização; nunca usar marcas como clientes sem prova |
| Autoridade externa | Não mensurada; aparenta menor | Domínios antigos, imprensa, prêmios, parceiros e backlinks | Digital PR técnica, parceiros, associações e citações locais legítimas |
| SEO local | São Paulo e áreas atendidas presentes; sem endereço completo público | Muitos exibem endereço, bairro, perfil e páginas locais | Revisar GBP e NAP; só adicionar endereço/horário comprovados |
| Performance | Base moderna; home corrigida para 94 em laboratório | Qualidade variável | Usar performance como diferencial e manter CWV de campo |
| Dados estruturados | Estrutura abrangente e centralizada | Implementação varia | WebPage, Service, Breadcrumb, FAQ e ItemList agora conectados |
| Links internos | Hub, rodapé, blog e novos blocos relacionados | Concorrentes maduros usam clusters e “leitura complementar” | Ligar cada novo artigo à landing e a dois conteúdos do mesmo cluster |
| Diferenciação | Integra software, Protheus, IA, dados e cloud sem promessas exageradas | Especialistas isolados são mais fortes em um nicho | Posicionar integração ponta a ponta e experiência em ambientes críticos, com evidências |

### Assuntos/formatos ausentes ou insuficientes

- estudos de caso completos e verificáveis;
- página ou seção de entregáveis concretos por serviço;
- conteúdo sobre custo, composição de orçamento e fatores que mudam prazo;
- comparação “software sob medida x SaaS/ERP” ligada diretamente ao serviço;
- guia de seleção e troca de consultoria Protheus;
- diagnóstico/ROI de IA com método de mensuração;
- conteúdo sobre automação de processos como oferta independente;
- páginas de autores com experiência e critérios editoriais, se houver mais autores reais;
- materiais ricos realmente úteis: checklist de assessment, briefing de software, matriz de priorização de automações;
- provas externas: perfil do Google, diretórios relevantes, parceiros, palestras, podcasts, artigos assinados e referências editoriais.

## Oportunidades nas posições 11–30

### Linha de base real do Search Console

| Período/métrica | Cliques | Impressões | CTR | Posição média |
|---|---:|---:|---:|---:|
| 29/04/2025–28/08/2026 | 28 | 677 | 4,1% | 13,3 |
| Últimos 90 dias | 14 | 457 | 3,1% | 11,9 |
| Últimos 28 dias | 10 | 278 | 3,6% | — |
| 28 dias anteriores | 2 | 115 | 1,7% | — |

Os últimos 28 dias cresceram 142% em impressões e 400% em cliques em relação aos 28 dias anteriores. A comparação de três meses mostra zero no período anterior porque não houve dados naquele intervalo; ela não deve ser interpretada como ganho percentual infinito nem como prova de impacto das alterações atuais.

### Consultas não relacionadas à marca com melhor oportunidade

| Consulta | Página confirmada no GSC | Impressões | Cliques | Posição | Leitura e ação |
|---|---|---:|---:|---:|---|
| migração para nuvem | `/blog/migracao-para-nuvem` | 26 | 0 | 22,27 | Reforçar planejamento, riscos, checklist e ligação para `/migracao-cloud` |
| desenvolvimento de aplicativo para empresa | `/blog/desenvolvimento-aplicativos-empresas` | 18 | 0 | 24,06 | Atualizar title/introdução para aderir à expressão e fortalecer link para `/apps-mobile` |
| desenvolvimento de aplicativo para startup | `/blog/desenvolvimento-aplicativos-empresas` | 8 | 0 | 29,38 | Cobrir validação de MVP, escopo e custo sem transformar a landing em página para startups |
| pipeline ci cd | `/blog/pipeline-cicd-seguro` | 3 | 0 | 24,67 | Consolidar variantes “CI/CD” e ampliar links técnicos contextuais |
| melhores práticas para gerenciamento de segredos em ci/cd | `/blog/pipeline-cicd-seguro` | 2 | 0 | 28,50 | Criar seção específica com exemplos de processo, não segredos reais |
| desenvolvimento de aplicativos corporativos | `/blog/desenvolvimento-aplicativos-empresas` | 1 | 0 | 16,00 | Incluir a variante semanticamente no texto e âncora para o serviço |

A consulta comercial “empresa especialista em migração cloud” foi mapeada corretamente para `/migracao-cloud`, com 13 impressões e posição 43,92. Já “migração para nuvem” aponta somente para o artigo. A separação observada é saudável: artigo para intenção informacional e landing para contratação; não há evidência de canibalização nesse cluster.

### Páginas já próximas do top 10

| Página | Impressões | CTR | Posição | Próxima ação |
|---|---:|---:|---:|---|
| `/blog/pipeline-cicd-seguro` | 23 | 0% | 13,61 | Melhorar cobertura das variantes CI/CD e snippet |
| `/blog/webhooks-integracao-sistemas` | 11 | 0% | 12,36 | Reforçar diferenças entre webhook, API e fila; ligar ao serviço de software |
| `/apps-mobile` | 9 | 0% | 13,44 | Solicitar indexação após deploy e observar consultas por mais 28 dias |
| `/criacao-software` | 10 | 0% | 9,20 | Priorizar recrawl; title/H1 já foram melhorados para a intenção comercial |
| `/faq` | 19 | 0% | 7,11 | Não reescrever por amostra pequena; melhorar links para landings prioritárias |
| `/blog` | 25 | 0% | 5,88 | Monitorar snippet e garantir que categorias/itens principais apareçam claramente |

As amostras são pequenas. CTR de 0% com menos de algumas dezenas de impressões orienta teste e monitoramento, não uma reescrita agressiva. A consulta de marca “mattos tech” registrou 4 cliques, 47 impressões, CTR de 8,51% e posição 3,17.

### Dispositivo, país e autoridade

- **Desktop:** 23 cliques, 477 impressões, CTR 4,82% e posição 15,99.
- **Mobile:** 5 cliques, 200 impressões, CTR 2,5% e posição 6,86. A posição é melhor no mobile, mas o CTR é menor; títulos/snippets e formato da SERP devem ser avaliados com uma amostra maior.
- **Brasil:** 27 cliques e 530 impressões, concentrando praticamente todos os cliques. Os Estados Unidos geraram 83 impressões e nenhum clique, provável ruído para o objetivo comercial local.
- **Links:** o GSC conhece somente 1 backlink, vindo de `pointblog.net`, com âncora de URL. É um sinal isolado e de baixa utilidade estratégica; não há motivo para ação de disavow com a evidência atual.
- **Links internos:** o relatório ainda mostra zero, apesar de os links existirem no HTML e terem sido validados. Isso reforça que o Google ainda não processou boa parte do site.

### Cobertura de indexação

| Estado do GSC em 20/08/2026 | URLs | Interpretação |
|---|---:|---|
| Indexadas | 15 | Base atual visível no índice |
| Detectadas, mas não indexadas | 21 | URLs canônicas sem rastreamento registrado; prioridade para sitemap, links e inspeção seletiva |
| Rastreadas, mas não indexadas | 6 | Artigos que precisam de diferenciação/qualidade e consolidação de sinais |
| Página com redirecionamento | 3 | `http`, `http://www` e `https://www`; comportamento esperado |

As 21 URLs apenas detectadas incluem 13 páginas comerciais/hub e 8 conteúdos/legais. As 6 rastreadas sem indexação são artigos antigos. O sitemap estava processado, com 49 páginas encontradas na leitura de 29/08/2026. Não há dados suficientes de Core Web Vitals de campo para mobile ou desktop; o laboratório permanece como referência temporária.

### Exportações concluídas e lacunas restantes

Concluídos em `docs/search-console/2026-08-30`: desempenho de 16 meses; comparação dos últimos três meses; consultas, páginas, países, dispositivos e datas; cobertura geral e três motivos de exclusão; breadcrumbs; exemplos de links e links recentes. Também foram verificados na interface: sitemap, HTTPS, Core Web Vitals, ações manuais e problemas de segurança.

Continuam úteis, mas não bloqueiam o plano atual:

1. Search Console API com dimensões combinadas `query` + `page` + `device` + `country`, para superar os limites e a anonimização parcial da interface;
2. GA4/CRM para ligar consultas e landings a leads qualificados;
3. Ahrefs, Semrush ou Majestic para uma comparação competitiva de backlinks;
4. uma nova exportação 28 e 90 dias após o deploy para comparação válida.

## Alterações implementadas

### Intenção e conteúdo

- home reposicionada para “Empresa de Tecnologia em São Paulo”, reduzindo sobreposição com serviços;
- titles e descriptions locais/comerciais em consultoria de TI, software, Protheus, sites e aplicativos;
- H1s de software, Protheus, sites, IA e consultoria de TI alinhados à intenção principal;
- introduções prioritárias passaram a informar São Paulo e atendimento nacional sem criar páginas doorway;
- e-commerce foi adicionado ao hub de serviços.

### Arquitetura e links internos

- catálogo central de 12 serviços criado em `lib/services.ts`;
- blocos contextuais com três serviços relacionados adicionados a todas as páginas comerciais;
- âncoras descrevem a solução, em vez de usar apenas “saiba mais”;
- breadcrumb visual agora é uma navegação semântica e mostra a página atual;
- página 404 própria orienta o usuário para `/servicos` e a home.

### Dados estruturados

- `Service` agora aponta para a `WebPage` correspondente;
- `WebPage` informa site, assunto e breadcrumb;
- FAQs reais e visíveis de software, sites, Protheus e IA geram `FAQPage` sem inventar respostas;
- `/servicos` passou a usar `CollectionPage` e `ItemList` com os 12 serviços;
- Organization, WebSite, BlogPosting e FAQ geral foram preservados.

### Performance e renderização

- a home deixou de ser hidratada integralmente como um único componente cliente;
- efeitos de reveal e ponteiro foram isolados em um componente pequeno;
- conteúdo estático e ícones voltaram a ser renderizados como Server Components;
- texto principal acima da dobra não começa mais oculto por animação;
- heroes estáticos de software, Protheus e sites deixaram de ser componentes cliente e passaram a exibir o conteúdo imediatamente.

### Qualidade e prevenção de regressão

- criado `npm run seo:validate`;
- o script verifica sitemap, robots, HTTP, title, description, canonical, H1, `noindex`, JSON-LD, links internos, fragmentos e duplicidade de metadados;
- adicionados redirects permanentes para os 20 IDs históricos de artigos, com destino nos slugs descritivos registrados no backup do CMS;
- validação local: 17 páginas estáticas, sem erros;
- validação da produção atual: 50 páginas e 50 destinos internos, sem erros.

## Tabela priorizada de problemas e oportunidades

| Problema/oportunidade | URL | Evidência | Ação | Impacto | Esforço | Prioridade | Status |
|---|---|---|---|---|---|---|---|
| Home sobrepunha software e IA | `/` | Title anterior citava software, IA e automação | Reposicionar para empresa de tecnologia local | Alto | Baixo | P0 | Implementado |
| LCP muito alto na home | `/` | Lighthouse 74; LCP 8,5 s; conteúdo principal em grande boundary cliente | Separar conteúdo estático e efeitos | Alto | Médio | P0 | Implementado; 94 e 2,9 s |
| Intenção local fraca | Principais landings | Concorrentes usam páginas “em São Paulo” | Alinhar title, H1 e introdução com moderação | Alto | Baixo | P0 | Implementado |
| E-commerce fora do hub | `/solucoes-ecommerce` | Existia no sitemap, ausente em `Servicos.tsx` | Adicionar ao portfólio e links relacionados | Médio/alto | Baixo | P0 | Implementado |
| Links contextuais fracos | 12 serviços | Dependência do hub/rodapé | Bloco de três soluções relacionadas por contexto | Alto | Médio | P0 | Implementado |
| Schema de página incompleto | Serviços | Service não apontava para WebPage | Criar grafo Service + WebPage + Breadcrumb | Médio | Baixo | P1 | Implementado |
| FAQs não marcadas nas landings | Software, sites, Protheus, IA | Conteúdo visível sem ligação a FAQPage | Reusar exatamente perguntas/respostas visíveis | Médio | Baixo | P1 | Implementado |
| 404 genérica | URLs inválidas | Status correto, experiência padrão | Criar 404 navegável e noindex | Baixo/médio | Baixo | P1 | Implementado |
| URLs antigas com sinais em 404 | 20 URLs `/blog/{uuid}` | 9 URLs somavam 29 impressões e 1 clique; mapeamento confirmado no backup | Redirect permanente para o slug atual | Alto | Baixo | P0 | Implementado; aguarda deploy |
| Snippets antigos | Várias URLs | Busca ainda mostrou e-mail/conteúdo antigos em algumas páginas | Deploy, inspeção e solicitação de recrawl | Alto | Baixo | P0 | Pendente externo |
| Cobertura de indexação baixa | 27 URLs canônicas | GSC: 21 detectadas sem rastreamento e 6 rastreadas sem indexação | Deploy, sitemap, links e inspeção seletiva; melhorar/consolidar artigos antigos | Muito alto | Médio | P0 | Em execução |
| Consultas 11–30 com CTR zero | Cloud, apps e CI/CD | 26 impressões para “migração para nuvem”, 18 para apps empresariais e 3 para “pipeline ci cd” | Atualizar os artigos donos da intenção e fortalecer links para serviços | Alto | Médio | P0 | Dados importados; conteúdo pendente |
| Páginas top 10 com CTR zero | `/blog`, `/faq`, software, dados e sites | Posições 4,33–9,20 em amostras de 6–25 impressões | Priorizar recrawl e monitorar 28 dias antes de novo teste de snippet | Médio/alto | Baixo | P1 | Monitorar após deploy |
| Falta de casos verificáveis | Serviços | Concorrentes exibem casos, depoimentos e marcas | Publicar 2–4 estudos de caso autorizados | Muito alto | Alto | P0 | Pendente negócio |
| Autoridade externa mínima | Domínio | GSC conhece 1 backlink isolado de `pointblog.net` | Campanha de autoridade e citações legítimas | Muito alto | Alto | P1 | Pendente externo |
| Automação sem landing própria | Oferta/cluster | Home e concorrentes destacam intenção; URL exclusiva ausente | Validar no GSC; criar só se houver demanda distinta | Alto | Médio | P1 | Brief pendente |
| Conteúdo de custo/seleção ausente | Software/Protheus/IA | Concorrentes respondem objeções de decisão | Plano editorial de decisão | Alto | Médio | P1 | Planejado |
| Scripts/cookies de terceiros | Site inteiro | Boas práticas 77; GTM, Meta, RD | Auditar consentimento, tags e necessidade; não remover sem decisão de medição | Médio | Médio | P1 | Pendente decisão |
| LCP home ainda acima de 2,5 s em laboratório | `/` | Resultado final 2,9 s; GSC sem amostra CrUX suficiente | Monitorar CWV de campo; depois adiar GSAP e revisar tags | Médio | Médio | P1 | Pendente volume de campo |
| Blog sem paginação | `/blog` | 33 artigos em produção | Implementar paginação apenas ao crescer e se UX/HTML justificar | Baixo | Médio | P2 | Monitorar |
| LocalBusiness incompleto | Site/local | Sem endereço de rua público confiável | Manter Organization; só usar LocalBusiness/GBP com dados reais | Médio | Baixo | P2 | Decisão correta atual |

## Estratégia de links internos

### Regras

1. Cada cluster deve ter uma landing comercial dona da intenção.
2. Todo artigo novo deve apontar para uma landing principal, um artigo anterior do cluster e, quando útil, um serviço complementar.
3. A landing deve receber links dos artigos com âncoras descritivas e variadas: “consultoria TOTVS Protheus”, “desenvolvimento de software sob medida”, “assessment de TI”.
4. Evitar repetir a mesma âncora exata em todos os contextos.
5. Artigos técnicos não devem terminar apenas em “fale conosco”; devem ligar para a solução específica antes do CTA.
6. O hub `/servicos` deve continuar acessível no cabeçalho, breadcrumbs, rodapé e 404.
7. Revisar trimestralmente páginas com zero links internos contextuais e artigos que recebem impressões, mas não assistem conversões.

### Fluxos prioritários

- `quanto-custa-software-sob-medida` → `/criacao-software` → `/ux-ui-design` e `/migracao-cloud`;
- `como-escolher-consultoria-protheus` → `/consultoria-protheus` → `/criacao-software` e `/banco-dados-analytics`;
- `roi-de-ia` e `rag-para-empresas` → `/inteligencia-artificial` → `/banco-dados-analytics` e `/governanca-compliance`;
- `briefing-site-empresa` → `/criacao-sites` → `/ux-ui-design` e `/solucoes-ecommerce`;
- `checklist-assessment-ti` → `/avaliacoes-ti` → `/consultoria-ti`, `/governanca-compliance` e `/migracao-cloud`;
- `finops-migracao-cloud` → `/migracao-cloud` → `/avaliacoes-ti` e `/consultoria-ti`.

## Plano editorial de 90 dias

O plano prioriza um conteúdo útil por semana. Publicar menos e incluir experiência real é melhor que produzir textos genéricos em massa.

### Semana 1 — Quanto custa um software sob medida?

- **Palavra-chave:** quanto custa software sob medida.
- **Intenção:** comercial/informacional; decisão.
- **Título:** “Quanto custa um software sob medida? Fatores, etapas e como orçar”.
- **Headings:** faixas não devem ser inventadas; componentes do custo; discovery; equipe; integrações; segurança/operação; como comparar propostas; checklist de briefing.
- **Perguntas:** o que muda o preço? MVP reduz risco? manutenção está incluída? quem é dono do código? como comparar horas x escopo?
- **Página apoiada:** `/criacao-software`.
- **Links:** receber de artigos sobre sistema pronto e aplicações web; sair para software, UX/UI e cloud.
- **Prioridade:** P0.
- **Justificativa:** objeção de decisão com alta proximidade de contratação.
- **CTA:** solicitar uma conversa de discovery para estruturar o orçamento.

### Semana 2 — Briefing para sistema sob medida

- **Palavra-chave:** briefing para desenvolvimento de software.
- **Intenção:** informacional/comercial; consideração.
- **Título:** “Briefing para software sob medida: o que definir antes de pedir proposta”.
- **Headings:** problema; usuários; fluxos; dados; integrações; permissões; critérios de sucesso; restrições; fases.
- **Perguntas:** é preciso especificar toda tela? quem participa? quais documentos ajudam? como definir MVP?
- **Página apoiada:** `/criacao-software`.
- **Links:** integração via API, CI/CD, software pronto x sob medida; saída para assessment e UX/UI.
- **Prioridade:** P1.
- **Justificativa:** atrai leads mais preparados e reduz desalinhamento comercial.
- **CTA:** baixar checklist ou enviar o cenário para avaliação.

### Semana 3 — Como escolher uma consultoria Protheus

- **Palavra-chave:** como escolher consultoria Protheus.
- **Intenção:** comercial; decisão.
- **Título:** “Como escolher uma consultoria TOTVS Protheus: 12 critérios de avaliação”.
- **Headings:** módulos; fiscal; ADVPL; integração; ambientes; testes; governança; sustentação; documentação; SLA; transição.
- **Perguntas:** homologação é necessária? como avaliar legado? como evitar dependência? quais acessos liberar?
- **Página apoiada:** `/consultoria-protheus`.
- **Links:** customização Protheus, atualização Protheus e integração de sistemas; saída para governança.
- **Prioridade:** P0.
- **Justificativa:** concorrentes têm vantagem de tempo de mercado e prova; critérios técnicos permitem diferenciação honesta.
- **CTA:** solicitar assessment inicial do ambiente.

### Semana 4 — Suporte e sustentação Protheus

- **Palavra-chave:** suporte Protheus / sustentação Protheus.
- **Intenção:** transacional; decisão.
- **Título:** “Sustentação Protheus: escopo, SLA, governança e transição de fornecedor”.
- **Headings:** chamados x evolução; criticidade; SLAs; monitoramento; mudanças; documentação; indicadores; plano de transição.
- **Perguntas:** o que entra no mensal? como priorizar? como medir estabilidade? como trocar sem perder histórico?
- **Página apoiada:** `/consultoria-protheus`.
- **Links:** atualização, customização e incidentes; saída para assessment.
- **Prioridade:** P1.
- **Justificativa:** alta intenção recorrente e alinhamento à oferta já visível.
- **CTA:** revisar escopo atual de sustentação.

### Semana 5 — ROI de Inteligência Artificial

- **Palavra-chave:** como calcular ROI de IA.
- **Intenção:** informacional/comercial; consideração.
- **Título:** “ROI de IA: como priorizar casos de uso e medir resultado sem promessas”.
- **Headings:** linha de base; custo total; qualidade; adoção; risco; experimento; métricas por caso; critérios de escala.
- **Perguntas:** o que medir além de horas? como calcular erro evitado? quando parar um piloto? como medir adoção?
- **Página apoiada:** `/inteligencia-artificial`.
- **Links:** RAG, chatbot, produtividade e governança; saída para dados/BI.
- **Prioridade:** P0.
- **Justificativa:** diferencia a empresa de promessas genéricas e aproxima decisores.
- **CTA:** mapear um caso de uso e seus indicadores.

### Semana 6 — Automação de processos: por onde começar

- **Palavra-chave:** automação de processos para empresas.
- **Intenção:** comercial/informacional; consideração.
- **Título:** “Automação de processos: como escolher o primeiro fluxo e evitar automatizar o erro”.
- **Headings:** sinais; mapeamento atual; regras x IA; integrações; exceções; segurança; métricas; piloto.
- **Perguntas:** RPA, API ou IA? qual processo priorizar? como tratar exceções? como estimar retorno?
- **Página apoiada:** `/criacao-software`; usar dados para decidir futura landing.
- **Links:** RPA, webhooks, integração via API; saída para consultoria de TI e IA.
- **Prioridade:** P0/P1.
- **Justificativa:** cluster comercial visível nos concorrentes e ainda sem landing dedicada.
- **CTA:** indicar um processo repetitivo para diagnóstico.

### Semana 7 — Briefing de site empresarial

- **Palavra-chave:** briefing para site institucional / criar site para empresa.
- **Intenção:** comercial/informacional; decisão.
- **Título:** “Como planejar um site empresarial: conteúdo, SEO, conversão e governança”.
- **Headings:** objetivos; público; arquitetura; provas; páginas; conteúdo; SEO; analytics; responsáveis; evolução.
- **Perguntas:** quantas páginas? quem escreve? como medir leads? CMS é necessário? o que entregar no go-live?
- **Página apoiada:** `/criacao-sites`.
- **Links:** site profissional, performance e dados estruturados; saída para UX/UI e e-commerce.
- **Prioridade:** P1.
- **Justificativa:** concorrentes locais cobrem fortemente processo e tipos de site.
- **CTA:** solicitar roteiro de planejamento do site.

### Semana 8 — FinOps antes e depois da migração

- **Palavra-chave:** reduzir custos cloud / FinOps na migração.
- **Intenção:** comercial/informacional; consideração.
- **Título:** “FinOps na migração para nuvem: como evitar custos imprevisíveis”.
- **Headings:** baseline; tags; direitos de acesso; dimensionamento; compromissos; observabilidade; orçamento; revisão pós-migração.
- **Perguntas:** nuvem sempre reduz custo? o que comparar? quando usar reserva? quem é responsável pelo orçamento?
- **Página apoiada:** `/migracao-cloud`.
- **Links:** guia de migração, observabilidade e CI/CD; saída para assessment.
- **Prioridade:** P1.
- **Justificativa:** objeção comercial comum e compatível com a profundidade técnica do site.
- **CTA:** solicitar avaliação de arquitetura e custos atuais.

### Semana 9 — Checklist de assessment de TI

- **Palavra-chave:** checklist assessment de TI.
- **Intenção:** informacional/comercial; consideração.
- **Título:** “Assessment de TI: checklist de infraestrutura, segurança, aplicações e operação”.
- **Headings:** escopo; evidências; entrevistas; riscos; criticidade; quick wins; relatório; roadmap.
- **Perguntas:** quanto tempo? quais acessos? o que o relatório contém? como priorizar achados?
- **Página apoiada:** `/avaliacoes-ti`.
- **Links:** incidentes, identidade, cloud e governança; saída para consultoria de TI.
- **Prioridade:** P1.
- **Justificativa:** transforma uma oferta abstrata em entregáveis claros.
- **CTA:** usar checklist e solicitar análise independente.

### Semana 10 — BI, dashboard e data warehouse

- **Palavra-chave:** BI para empresas / dashboard ou data warehouse.
- **Intenção:** informacional/comercial; consideração.
- **Título:** “BI, dashboard ou data warehouse: o que sua empresa precisa primeiro?”.
- **Headings:** problema de decisão; qualidade; fontes; modelagem; atualização; governança; custo; roadmap.
- **Perguntas:** planilha basta? quando criar DW? quem define KPI? como evitar números divergentes?
- **Página apoiada:** `/banco-dados-analytics`.
- **Links:** artigo de BI, integrações e RAG; saída para IA.
- **Prioridade:** P1.
- **Justificativa:** captura decisores sem depender de termos excessivamente técnicos.
- **CTA:** mapear uma decisão e as fontes de dados necessárias.

### Semana 11 — Governança de IA e LGPD

- **Palavra-chave:** governança de IA nas empresas / IA e LGPD.
- **Intenção:** informacional/comercial; consideração.
- **Título:** “Governança de IA: dados, acessos, avaliação e responsabilidade em produção”.
- **Headings:** inventário; base legal; fornecedores; dados; acesso; avaliação; logs; incidentes; responsáveis.
- **Perguntas:** dados treinam o modelo? como controlar documentos? o que registrar? quem aprova casos de uso?
- **Página apoiada:** `/governanca-compliance` e `/inteligencia-artificial`.
- **Links:** RAG, chatbot e identidade; saída para assessment.
- **Prioridade:** P1.
- **Justificativa:** diferencia implementação responsável de demos genéricas.
- **CTA:** revisar riscos do caso de uso antes do piloto.

### Semana 12 — Estudo de caso real

- **Palavra-chave:** definida pelo problema e setor do cliente, não por uma frase genérica.
- **Intenção:** comercial; decisão.
- **Título:** “Como [tipo de empresa] reduziu [problema comprovado] com [solução]”.
- **Headings:** contexto; restrições; diagnóstico; alternativas; arquitetura; implantação; resultado; aprendizados; próximos passos.
- **Perguntas:** qual era a linha de base? o que mudou? como foi medido? que limitações permaneceram?
- **Página apoiada:** serviço diretamente relacionado.
- **Links:** artigos técnicos usados no projeto e landing comercial.
- **Prioridade:** P0, condicionado a autorização e evidências.
- **Justificativa:** é a maior lacuna de confiança perante concorrentes.
- **CTA:** conversar sobre um cenário semelhante, sem prometer repetir o mesmo resultado.

## SEO local

### Estado atual

- Nome, telefone, e-mail e domínio estão consistentes no código atual.
- São Paulo é a base declarada; Tatuapé aparece no conteúdo existente, mas não há endereço de rua completo público.
- O schema usa `Organization` e endereço limitado a cidade/estado/país. Isso é mais seguro que inventar um estabelecimento físico.
- Não foi possível verificar um Perfil da Empresa no Google nem avaliações.

### Recomendações

1. Criar ou revisar o Perfil da Empresa no Google somente se a operação for elegível, usando área de atendimento quando o endereço não recebe clientes.
2. Manter exatamente o mesmo nome, telefone, domínio e categoria nas propriedades externas.
3. Adicionar horário, endereço e `LocalBusiness` somente após validação comercial.
4. Solicitar avaliações reais após projetos, sem incentivos condicionados a nota e sem marcação de avaliações próprias no site.
5. Criar perfis consistentes em diretórios relevantes, associações empresariais e ecossistemas de tecnologia; evitar centenas de cadastros automáticos.
6. Não criar páginas quase idênticas para Tatuapé, Mooca, Campinas, Sorocaba e outras cidades. Criar página local somente se houver oferta, prova, equipe, caso ou informação verdadeiramente específica.

## Autoridade e backlinks

### Ações legítimas

- publicar casos assinados e autorizados pelos clientes;
- produzir pesquisas próprias pequenas, por exemplo um diagnóstico anônimo de gargalos observados em assessments;
- contribuir com artigos técnicos em comunidades, portais de tecnologia, associações locais e veículos setoriais;
- participar de podcasts, webinars e eventos com página de palestrante e link editorial;
- obter listagens em parceiros apenas quando a parceria/certificação for real;
- oferecer checklists e templates úteis que profissionais naturalmente queiram referenciar;
- recuperar menções sem link ao fundador ou à empresa, quando existirem;
- criar perfis completos em diretórios de fornecedores relevantes como oHub, sem duplicação ou dados inconsistentes.

### O que não fazer

- compra automatizada de links;
- redes privadas, comentários em massa ou guest posts sem relevância;
- páginas locais doorway;
- avaliações falsas;
- selos ou certificações não comprovados;
- estatísticas sem fonte ou casos sem autorização.

## Métricas para acompanhamento

### Visibilidade

- cliques e impressões orgânicas não relacionadas à marca;
- quantidade de consultas nas faixas 1–3, 4–10, 11–20 e 21–30;
- posição e CTR por landing, consulta e dispositivo;
- participação das páginas comerciais nos cliques não relacionados à marca;
- páginas indexadas e motivos de exclusão.

### Negócio

- leads orgânicos por landing;
- taxa de conversão por serviço;
- leads qualificados, reuniões e propostas originadas do orgânico;
- conversões assistidas por artigos;
- tempo entre primeira visita orgânica e contato.

### Técnica

- LCP abaixo de 2,5 s, INP abaixo de 200 ms e CLS abaixo de 0,1 no percentil 75 de campo;
- erros 4xx/5xx e canonicals divergentes;
- páginas do sitemap sem impressões após 90 dias;
- scripts de terceiros, peso transferido e regressões do Lighthouse;
- resultados do `npm run seo:validate` em cada release.

### Autoridade

- novos domínios de referência relevantes;
- links editoriais para landings e estudos de caso;
- menções de marca;
- avaliações reais e consistência de citações locais.

## Plano de 30, 60 e 90 dias

### Primeiros 30 dias

1. Fazer deploy das alterações e executar `npm run seo:validate` no ambiente publicado.
2. Inspecionar e solicitar recrawl da home, `/servicos`, software, consultoria de TI, Protheus, IA e sites.
3. Enviar novamente o sitemap e acompanhar indexação/snippets antigos.
4. **Concluído em 30/08:** importar Search Console, mapear consultas 11–30 e documentar cobertura, dispositivos e links.
5. Confirmar Google Analytics/GTM, eventos de formulário, WhatsApp e origem orgânica.
6. Atualizar primeiro os artigos já próximos do top 10/30: migração para nuvem, apps empresariais e pipeline CI/CD.
7. Publicar os três primeiros conteúdos novos: custo de software, briefing e escolha de consultoria Protheus.
8. Validar dados do Perfil da Empresa no Google e NAP.

### Dias 31–60

1. Atualizar titles/descriptions apenas onde o GSC mostrar CTR abaixo do esperado.
2. Publicar quatro conteúdos de IA, automação, sites e cloud.
3. Produzir o primeiro estudo de caso com autorização e métricas comprovadas.
4. Conquistar citações em parceiros, diretórios e comunidades relevantes.
5. Revisar links internos dos artigos que já recebem impressões.
6. Avaliar Core Web Vitals de campo e adiar GSAP/tags somente se o LCP real permanecer acima da meta.

### Dias 61–90

1. Publicar assessment, BI, governança e o segundo estudo de caso.
2. Reavaliar todas as consultas 11–30: atualizar conteúdo, introduções, headings e links conforme a intenção observada.
3. Decidir sobre uma landing de automação apenas se consultas e leads mostrarem intenção distinta.
4. Consolidar ou redirecionar conteúdo somente após evidência de canibalização e com aprovação para mudança de URL.
5. Ampliar ações editoriais externas e menções de autoridade.
6. Comparar 90 dias com o período anterior: cliques não marca, CTR, top 10, leads e CWV.

## Alterações pendentes e dependências

- commit/push e deploy do conjunto atual; a produção ainda não contém estas mudanças;
- reenvio do sitemap e solicitação de indexação no Search Console após confirmar a produção;
- nova exportação do Search Console após 28 e 90 dias para medir o efeito agregado;
- validação do Perfil da Empresa no Google, endereço e horário;
- aprovação de clientes para casos, logos, depoimentos e métricas;
- acesso a analytics/CRM para qualidade de lead e conversão;
- ferramenta externa de backlinks para comparar autoridade com concorrentes; o GSC mostrou somente 1 link;
- decisão de privacidade/consentimento antes de alterar GTM, Meta Pixel ou RD Station;
- Rich Results Test e Schema Markup Validator na URL publicada após o deploy;
- atualização de `caniuse-lite`, que apareceu como aviso não bloqueante no build.

## Critérios de revisão contínua

- Não prometer top 10 nem atribuir causalidade a uma única alteração.
- Preservar uma página principal por intenção.
- Priorizar dados reais de consulta e conversão sobre volume estimado.
- Atualizar conteúdo quando houver melhoria substantiva, não apenas para trocar data.
- Não publicar páginas ou afirmações comerciais que dependam de informação ausente.
- Medir por ciclos de 28 e 90 dias, considerando atrasos de rastreamento e reprocessamento.

## Referências úteis

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [SEO para desenvolvedores](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Dados estruturados de organização](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Criar e enviar sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
