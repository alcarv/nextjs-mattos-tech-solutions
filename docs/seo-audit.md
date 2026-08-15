# Auditoria de SEO — Mattos Tech Solutions

Data da auditoria: 15 de agosto de 2026

## Resumo executivo

O projeto tem boa base semântica, páginas específicas por serviço e conteúdo institucional relevante. Os maiores bloqueios encontrados foram:

1. **Domínio público indisponível:** `mattostechsolutions.com.br` retornou `ERR_NAME_NOT_RESOLVED` tanto no navegador quanto em consulta pelo terminal. Enquanto o DNS não resolver, mecanismos de busca não conseguem rastrear o site.
2. **Blog dependente de JavaScript no cliente:** o HTML inicial exibia apenas estados de carregamento, reduzindo a visibilidade dos artigos e dos links internos para crawlers.
3. **Sitemap com datas artificiais:** todas as páginas recebiam `lastModified` com a data da requisição, mesmo sem mudança de conteúdo.
4. **Metadados inconsistentes:** títulos repetiam a marca, páginas herdavam dados sociais da home e não havia imagem social adequada.
5. **Malha interna incompleta:** várias páginas de serviço apareciam apenas no sitemap ou em uma listagem antiga, sem uma página central de serviços claramente ligada pelo site.
6. **Dados estruturados imprecisos:** o site declarava geolocalização e endereço parcial como se fossem um estabelecimento físico completo.
7. **Conteúdo pouco específico em e-commerce:** a landing page repetia a lista geral de serviços em vez de aprofundar a intenção de busca por loja virtual.
8. **Provas sociais não verificáveis:** números genéricos de projetos, satisfação e crescimento eram exibidos sem fonte ou estudo de caso correspondente.

## Otimizações implementadas

### Rastreamento e indexação

- Sitemap centralizado em `SITE_URL`, com todas as páginas canônicas e artigos publicados.
- Remoção de `priority` e `changefreq`, ignorados pelo Google.
- Remoção de `lastModified` artificial em páginas estáticas; artigos usam a data real do CMS.
- `robots.txt` centralizado no domínio configurado e com bloqueio apenas para rotas de API e privadas.
- Artigos inexistentes agora retornam HTTP 404 e `noindex`, em vez de uma tela de erro com status 200.

### Renderização e conteúdo do blog

- Home, índice do blog, blocos de artigos nas páginas de serviço e artigos individuais agora recebem conteúdo no HTML inicial.
- Revalidação configurada para uma hora.
- Compatibilidade adicionada para os dois formatos de coluna encontrados no histórico do Supabase (`description`/`excerpt`, `image_url`/`featured_image`).
- Tempo de leitura, autor, tags e datas reais passaram a alimentar interface e metadados.
- Artigos receberam `BlogPosting` e breadcrumbs em JSON-LD.
- HTML arbitrário no Markdown deixou de ser interpretado, reduzindo risco de conteúdo injetado.

### Metadados e aparência na busca

- Títulos únicos e orientados à intenção de busca em todas as páginas.
- Descrições únicas e coerentes com o conteúdo visível.
- Canonicals absolutos verificados nas 17 páginas indexáveis.
- Open Graph e Twitter Cards específicos por página.
- Imagem social de 1200 × 630 criada para compartilhamentos.
- Logo vetorial de 512 × 512 criado para identificação da organização.
- Suporte opcional a `GOOGLE_SITE_VERIFICATION` por variável de ambiente.

### Dados estruturados

- Organização e site consolidados em um grafo com IDs estáveis.
- Inclusão de contato, CNPJ, fundador, áreas atendidas e especialidades.
- Remoção de geocoordenadas e endereço de rua incompleto.
- Serviços agora incluem `Service` e `BreadcrumbList` ligados à organização.
- FAQ principal recebeu `FAQPage`; o Google pode usá-lo para compreensão, embora rich results de FAQ sejam restritos a determinados sites.
- Todos os blocos JSON-LD foram testados e são JSON válido.

### Arquitetura e links internos

- Nova página `/servicos` com todas as 11 especialidades.
- Rodapés agora ligam diretamente para as principais páginas comerciais.
- Links “Todas as soluções” apontam para a página central de serviços.
- Página de e-commerce recebeu conteúdo próprio sobre catálogo, checkout, pagamentos, estoque, pedidos e integrações.
- Auditoria automática confirmou que não restaram links ou fragmentos internos quebrados.

### Performance e experiência

- Imagens remotas passaram a usar o otimizador do Next.js, com AVIF/WebP e hosts permitidos.
- Pixel da Meta e loader de marketing foram postergados até o carregamento ocioso.
- Posts deixaram de fazer consultas duplicadas no navegador.
- Animações de revelação foram corrigidas para não manter grandes seções invisíveis por vários scrolls.
- Teste responsivo em 390 × 844 confirmou ausência de rolagem horizontal.

## Validação técnica

- ESLint: aprovado.
- TypeScript (`tsc --noEmit`): aprovado.
- Build de produção Next.js: aprovado, 23 rotas geradas.
- 17 páginas indexáveis: HTTP 200, uma tag H1, canonical próprio e JSON-LD válido.
- Rota inexistente de blog: HTTP 404 e `noindex`.
- `robots.txt`, `sitemap.xml` e imagem Open Graph: HTTP 200 no build local.

## Ações externas prioritárias

### P0 — restaurar DNS e publicação

Verificar no registrador do domínio e no provedor de DNS:

- delegação dos nameservers;
- registro A/AAAA ou CNAME do domínio raiz;
- registro do `www` e redirecionamento 301 para a versão canônica;
- vínculo do domínio com a hospedagem Netlify;
- certificado HTTPS após a resolução do DNS.

Se o domínio oficial do site tiver mudado, definir `NEXT_PUBLIC_SITE_URL` com o novo domínio antes do build. Todos os canonicals, sitemaps e dados estruturados acompanharão essa variável.

### P1 — Google Search Console

1. Validar a propriedade de domínio via DNS.
2. Enviar `https://DOMINIO/sitemap.xml`.
3. Inspecionar home, `/servicos` e as principais landing pages.
4. Solicitar indexação após o deploy.
5. Acompanhar “Páginas”, “Core Web Vitals”, “Resultados avançados” e consultas por página.

### P1 — autoridade e SEO local

- Criar ou revisar o Perfil da Empresa no Google somente com endereço/área de atendimento verdadeiros.
- Manter nome, telefone, domínio e localização consistentes no site e nos perfis externos.
- Adicionar LinkedIn institucional e perfis técnicos reais ao `sameAs` quando existirem.
- Publicar estudos de caso com contexto, solução, papel da equipe e resultados comprováveis.

### P2 — estratégia editorial de 90 dias

Publicar conteúdo original ligado às páginas comerciais, sempre com autor, data, experiência prática e links internos:

- **Software sob medida:** custo, prazo, build vs. buy, modernização de legados, APIs e integração com ERP.
- **IA para empresas:** RAG, segurança, avaliação de respostas, casos em atendimento e automação, IA e LGPD.
- **Protheus:** TAF/TSS, SPED, integrações, performance e checklist de assessment.
- **Cloud:** planejamento de migração, FinOps, observabilidade, AWS vs. Azure vs. GCP.
- **Sites e e-commerce:** custo de projeto, SEO técnico, performance, checkout, integrações e conversão.

Evitar páginas locais em massa com texto quase idêntico. Páginas por cidade só devem existir quando houver conteúdo, provas e oferta realmente específicos para aquela região.

## Indicadores para acompanhar

- impressões, cliques, CTR e posição média por página no Search Console;
- páginas válidas indexadas e motivos de exclusão;
- consultas não relacionadas à marca;
- leads orgânicos por landing page;
- LCP abaixo de 2,5 s, INP abaixo de 200 ms e CLS abaixo de 0,1 no percentil 75;
- artigos que geram entrada orgânica e assistem conversões para serviços.

## Referências oficiais

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [SEO para desenvolvedores](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [JavaScript e SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Criar e enviar um sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Dados estruturados de organização](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
