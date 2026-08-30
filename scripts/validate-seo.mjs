const baseUrl = (process.env.SEO_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');

function textContent(value = '') {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function attribute(tag, name) {
  return tag.match(new RegExp(`${name}=["']([^"']*)["']`, 'i'))?.[1] || null;
}

function metaContent(html, name) {
  const tag = html.match(new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]*>`, 'i'))?.[0];
  return tag ? attribute(tag, 'content') : null;
}

function canonicalHref(html) {
  const tag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];
  return tag ? attribute(tag, 'href') : null;
}

function extractJsonLd(html) {
  return [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1]);
}

function extractInternalLinks(html, sourceUrl) {
  const links = [];
  for (const match of html.matchAll(/<a\b[^>]+href=["']([^"']+)["']/gi)) {
    try {
      const url = new URL(match[1], sourceUrl);
      if (url.origin === new URL(baseUrl).origin) links.push(url);
    } catch {
      // Links with unsupported schemes are not crawlable internal URLs.
    }
  }
  return links;
}

const responseCache = new Map();
async function load(url) {
  const key = new URL(url).toString();
  if (!responseCache.has(key)) {
    responseCache.set(key, fetch(key, { redirect: 'follow' }).then(async (response) => ({
      response,
      html: await response.text(),
    })));
  }
  return responseCache.get(key);
}

const failures = [];
const warnings = [];

const robots = await load(`${baseUrl}/robots.txt`);
if (!robots.response.ok) failures.push(`robots.txt retornou ${robots.response.status}`);
if (!/Sitemap:/i.test(robots.html)) failures.push('robots.txt não informa o sitemap');

const sitemap = await load(`${baseUrl}/sitemap.xml`);
if (!sitemap.response.ok) failures.push(`sitemap.xml retornou ${sitemap.response.status}`);

const sitemapLocations = [...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!sitemapLocations.length) failures.push('sitemap.xml não contém URLs');

const pageUrls = sitemapLocations.map((location) => {
  const canonical = new URL(location);
  return new URL(`${canonical.pathname}${canonical.search}`, `${baseUrl}/`);
});

const titles = new Map();
const descriptions = new Map();
const internalLinks = [];
const servicePaths = new Set([
  '/apps-mobile',
  '/avaliacoes-ti',
  '/banco-dados-analytics',
  '/consultoria-protheus',
  '/consultoria-ti',
  '/criacao-sites',
  '/criacao-software',
  '/governanca-compliance',
  '/inteligencia-artificial',
  '/migracao-cloud',
  '/solucoes-ecommerce',
  '/ux-ui-design',
]);
const serviceFaqPaths = new Set([
  '/consultoria-protheus',
  '/criacao-sites',
  '/criacao-software',
  '/inteligencia-artificial',
]);

for (const url of pageUrls) {
  const { response, html } = await load(url);
  const path = url.pathname;
  if (response.status !== 200) {
    failures.push(`${path} retornou ${response.status}`);
    continue;
  }

  const title = textContent(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  const description = metaContent(html, 'description');
  const canonical = canonicalHref(html);
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => textContent(match[1]));

  if (!title) failures.push(`${path} não possui title`);
  if (!description) failures.push(`${path} não possui meta description`);
  if (!canonical) failures.push(`${path} não possui canonical`);
  if (canonical && new URL(canonical, baseUrl).pathname !== path) {
    failures.push(`${path} aponta canonical para ${canonical}`);
  }
  if (h1s.length !== 1) failures.push(`${path} possui ${h1s.length} tags H1`);
  if (/noindex/i.test(metaContent(html, 'robots') || '')) failures.push(`${path} está no sitemap e contém noindex`);

  const schemaTypes = [];
  for (const block of extractJsonLd(html)) {
    try {
      const data = JSON.parse(block);
      const nodes = Array.isArray(data['@graph']) ? data['@graph'] : [data];
      for (const node of nodes) {
        const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
        schemaTypes.push(...types.filter(Boolean));
      }
    } catch (error) {
      failures.push(`${path} possui JSON-LD inválido: ${error.message}`);
    }
  }

  const requiredTypes = ['Organization', 'WebSite'];
  if (servicePaths.has(path)) requiredTypes.push('Service', 'WebPage', 'BreadcrumbList');
  if (serviceFaqPaths.has(path)) requiredTypes.push('FAQPage');
  if (path === '/servicos') requiredTypes.push('CollectionPage', 'ItemList', 'BreadcrumbList');
  if (path === '/faq') requiredTypes.push('FAQPage');
  if (path.startsWith('/blog/')) requiredTypes.push('BlogPosting', 'BreadcrumbList');
  for (const type of requiredTypes) {
    if (!schemaTypes.includes(type)) failures.push(`${path} não possui schema ${type}`);
  }

  if (title) titles.set(title, [...(titles.get(title) || []), path]);
  if (description) descriptions.set(description, [...(descriptions.get(description) || []), path]);
  internalLinks.push(...extractInternalLinks(html, url).map((target) => ({ source: path, target })));

  console.log(`${response.status}\tH1:${h1s.length}\tJSON-LD:${extractJsonLd(html).length}\t${path}\t${title}`);
}

for (const [title, paths] of titles) {
  if (paths.length > 1) failures.push(`title duplicado em ${paths.join(', ')}: ${title}`);
}
for (const [description, paths] of descriptions) {
  if (paths.length > 1) failures.push(`description duplicada em ${paths.join(', ')}: ${description}`);
}

const uniqueTargets = new Map();
for (const link of internalLinks) {
  const key = `${link.target.pathname}${link.target.search}`;
  if (!uniqueTargets.has(key)) uniqueTargets.set(key, []);
  uniqueTargets.get(key).push(link);
}

for (const [key, sources] of uniqueTargets) {
  const targetUrl = new URL(key, `${baseUrl}/`);
  const { response, html } = await load(targetUrl);
  if (response.status >= 400) {
    failures.push(`link interno quebrado ${key} (${response.status}), encontrado em ${[...new Set(sources.map((item) => item.source))].join(', ')}`);
  }

  for (const { source, target } of sources) {
    if (!target.hash || target.hash === '#') continue;
    const id = decodeURIComponent(target.hash.slice(1));
    const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!new RegExp(`(?:id|name)=["']${escapedId}["']`, 'i').test(html)) {
      warnings.push(`fragmento ${target.pathname}${target.hash} referenciado em ${source} não foi encontrado`);
    }
  }
}

console.log(`\n${pageUrls.length} páginas do sitemap e ${uniqueTargets.size} destinos internos verificados.`);
for (const warning of [...new Set(warnings)]) console.warn(`AVISO: ${warning}`);
for (const failure of failures) console.error(`ERRO: ${failure}`);

if (failures.length) process.exitCode = 1;
else console.log('Validação SEO concluída sem erros.');
