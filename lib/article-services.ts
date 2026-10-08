import { serviceCatalog, type ServicePath } from './services';

// Match the article's subject, rather than its body (which can mention other services).
// Specific subjects come first: migrating Protheus is still a Protheus engagement.
const subjects: Array<{ path: ServicePath; pattern: RegExp }> = [
  { path: '/consultoria-protheus', pattern: /\bprotheus\b/ },
  { path: '/apps-mobile', pattern: /\b(aplicativo|aplicativos|mobile|multiplataforma|app nativo|apps)\b/ },
  { path: '/solucoes-ecommerce', pattern: /\b(ecommerce|e commerce|checkout|loja virtual)\b/ },
  { path: '/inteligencia-artificial', pattern: /\b(ia|inteligencia artificial|rag|chatbot|chatbots|generativa|generativo)\b/ },
  { path: '/governanca-compliance', pattern: /\b(governanca|compliance|lgpd|segredos|identidade|vulnerabilidades|sbom|resposta a incidentes|resposta incidentes)\b/ },
  { path: '/migracao-cloud', pattern: /\b(nuvem|cloud|finops|infraestrutura|ci cd|cicd|observabilidade|opentelemetry|slo|error budget|disaster recovery)\b/ },
  { path: '/banco-dados-analytics', pattern: /\b(dados|etl|elt|analytics|business intelligence|bi|linhagem)\b/ },
  { path: '/ux-ui-design', pattern: /\b(ux|ui|usabilidade|design system|design systems)\b/ },
  { path: '/criacao-sites', pattern: /\b(site|sites|website|websites|seo|css|responsivo|responsiva|desenvolvimento web)\b/ },
  { path: '/avaliacoes-ti', pattern: /\b(assessment|due diligence|avaliacao de ti|avaliacoes de ti)\b/ },
  { path: '/criacao-software', pattern: /\b(software|sistemas|sistema|api|apis|webhooks|rpa|automacao|aplicacoes|requisitos|mvp)\b/ },
  { path: '/consultoria-ti', pattern: /\b(consultoria|planejamento|roadmap|ativos de ti|fornecedores de ti|produtividade|parceiro de tecnologia)\b/ },
];

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ');
}

export function getArticleService(article: { slug: string; title: string; tags?: readonly string[] }) {
  const subject = normalize(`${article.slug} ${article.title}`);
  const match = subjects.find(rule => rule.pattern.test(subject))
    || subjects.find(rule => rule.pattern.test(normalize((article.tags || []).join(' '))));
  return match ? serviceCatalog.find(service => service.path === match.path) : undefined;
}
