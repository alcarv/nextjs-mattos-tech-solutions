# Revisão de busca orgânica e conversão — 7 de setembro de 2026

## Diagnóstico e alterações

A mensagem já explicava problemas e limites dos serviços, mas o caminho até a conversa ainda era extenso. Na prévia de 884 × 782 px, a home tinha 22.794 px de altura. A narrativa fixada durante a rolagem e os capítulos de serviços ocupavam, juntos, 11.257 px. Após compactar a apresentação, a mesma largura registrou 12.256 px: redução aproximada de 46% na extensão. Isso mede layout, não velocidade de carregamento ou aumento de conversão.

- A home apresenta sites, software e automação junto ao benefício e à área de atendimento. Título e descrição de busca foram alinhados à oferta.
- A narrativa animada de rolagem saiu da home; o componente foi preservado no repositório. Serviços aparecem em cartões comparáveis, com links descritivos e acesso ao catálogo completo.
- O WhatsApp está disponível no primeiro bloco, na escolha do desafio e nos serviços. As mensagens identificam o contexto selecionado.
- Apenas nome e contato são obrigatórios. Empresa e descrição são opcionais. Validação rejeita textos que apenas contêm muitos dígitos, e os campos ficam bloqueados enquanto o envio por e-mail está em andamento.
- Sem configuração de EmailJS, o formulário explica que abre o WhatsApp para revisão e envio pelo visitante. Não exibe confirmação de recebimento. Se o envio por e-mail falha, o link alternativo preserva a mensagem.
- O SDK de e-mail é carregado apenas quando necessário para enviar.
- Foram criados três guias editoriais: custo de site, software pronto versus sob medida e primeiro processo para automatizar. Os guias têm comparação, critérios, índice, links para serviços, metadados próprios, dados estruturados e URLs no sitemap.
- Guias estão acessíveis pela navegação, rodapé, home, blog e serviços relacionados. Na home, a seção do blog só aparece se houver artigos disponíveis.

## Medição implementada

Os eventos abaixo entram no `dataLayer` existente. Não foi publicada configuração no Google Tag Manager ou GA4. Para relatórios, configurar e validar os acionadores e tags no ambiente de produção. O código não envia nome, empresa, contato, texto livre ou query string nesses eventos.

| Evento | Significado |
| --- | --- |
| `service_interest` | Escolha de um desafio no seletor |
| `contact_click` | Clique em WhatsApp, e-mail, agenda ou acesso ao formulário |
| `contact_form_start` | Primeira interação com o formulário |
| `contact_form_error` | Falha na tentativa de envio por e-mail |
| `generate_lead` | EmailJS confirmou o envio do formulário |

Parâmetros: `contact_channel` e `service_interest`, com rótulos definidos no código. Clique em WhatsApp não significa mensagem enviada, lead recebido ou venda. A confirmação de e-mail também não mede a qualificação comercial do contato.

## Validação

- Lint, TypeScript e build de produção concluídos.
- Sitemap e 21 destinos internos conferidos com título, descrição, canonical, H1 e JSON-LD; os guias incluem Article e BreadcrumbList.
- Teste de validação, campos opcionais, mensagem contextual, codificação do WhatsApp e formato dos eventos: `node scripts/validate-conversion.cjs`.
- Navegador: CTAs contextuais, foco no primeiro campo inválido, guias e índice de navegação; largura de 390 px sem transbordamento da página. Tabelas possuem rolagem própria.
- Nenhum formulário real enviado nem mensagem enviada ao WhatsApp.

## Próximas prioridades dependentes de evidências reais

1. **Prova de entrega.** Publicar um projeto autorizado com problema inicial, trabalho executado, imagem real e resultado verificável. Se não houver métrica, usar evidências concretas da entrega e relato aprovado pelo cliente. Não atribuir exemplos ilustrativos a clientes.
2. **Operação de contato.** Confirmar as variáveis de EmailJS no build publicado e fazer um envio de homologação com autorização. A prévia atual usa o caminho de WhatsApp.
3. **Medição comercial.** Configurar os eventos no GTM/GA4, separar cliques de contatos recebidos e acompanhar qualificação e origem na rotina comercial. Não foi auditado o container publicado.
4. **Search Console.** Comparar consultas, impressões, cliques e páginas de entrada antes/depois da publicação. Priorizar novos conteúdos a partir dessas consultas, em vez de supor volume de palavras-chave.
5. **Desempenho real.** Medir Core Web Vitals em produção e avaliar scripts de terceiros. Não foi atribuída nota Lighthouse, resultado CrUX ou ganho de velocidade a esta revisão local.

As mudanças estão no workspace. Não houve publicação, alterações de conta, criação de campanhas ou consulta a relatórios privados de tráfego.

## Referências utilizadas

O Google orienta conteúdo útil para pessoas, com informações suficientes para ajudar na decisão: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

Links internos rastreáveis e texto descritivo ajudam leitores e buscadores a compreender os destinos: [SEO link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

Trabalho de JavaScript pode afetar a resposta às interações; a verificação em produção continua necessária: [Optimize Interaction to Next Paint](https://web.dev/articles/optimize-inp).
