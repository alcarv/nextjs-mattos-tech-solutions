// Exercises validation and event payloads without sending email or opening WhatsApp.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const cache = new Map();
const browserWindow = {};
function load(file) {
  const absolute = path.resolve(file);
  if (cache.has(absolute)) return cache.get(absolute);
  const source = fs.readFileSync(absolute, 'utf8');
  const code = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
  const loadedModule = {exports:{}};
  const requireLocal = name => load(path.resolve(path.dirname(absolute), `${name}.ts`));
  vm.runInNewContext(code, {module:loadedModule,exports:loadedModule.exports,require:requireLocal,process,URL,window:browserWindow}, {filename:absolute});
  cache.set(absolute,loadedModule.exports);
  return loadedModule.exports;
}
const {validateContact,whatsappLink,contactMessage} = load('lib/contact.ts');
const values = {name:'Pessoa Teste',company:'',contact:'teste@example.com',challenge:''};
assert.equal(Object.keys(validateContact(values)).length,0,'Optional fields should not block a conversation');
for (const contact of ['', 'abc11999999999', '11', '12345678901234567890', 'invalid@', '11999999999@']) {
  assert.ok(validateContact({...values,contact}).contact, `Reject invalid contact: ${contact}`);
}
for (const contact of ['+55 (11) 99999-9999','11999999999',' pessoa@example.com ']) {
  assert.equal(validateContact({...values,contact}).contact,undefined, `Accept valid contact: ${contact}`);
}
assert.ok(validateContact({...values,name:' '}).name);
const message = contactMessage({...values,challenge:'Integração & dados? #prioridade'},'Software sob medida');
const url = new URL(whatsappLink(message));
assert.equal(url.hostname,'wa.me');
assert.equal(url.pathname,'/5511990183194');
assert.equal(url.searchParams.get('text'),message);
assert.match(message,/Software sob medida/);
assert.equal(url.hash,'');
assert.equal(url.searchParams.size,1);
const {trackConversion} = load('lib/conversion-events.ts');
trackConversion('contact_click','whatsapp','/criacao-software');
assert.equal(browserWindow.dataLayer[0].event,'contact_click');
assert.equal(JSON.stringify(browserWindow.dataLayer).includes('generate_lead'),false,'A click is not a confirmed lead');
assert.equal(JSON.stringify(browserWindow.dataLayer).includes(values.contact),false,'Analytics must not receive form values');
assert.equal(Object.keys(browserWindow.dataLayer[0]).sort().join(','),'contact_channel,contact_location,event,service_interest');
const {getConversionLocation} = load('lib/conversion-events.ts');
assert.equal(getConversionLocation('article_intro'),'article_intro');
assert.equal(getConversionLocation('name=Pessoa Teste'),'general','Reject arbitrary analytics labels');
trackConversion('contact_click','whatsapp','/apps-mobile','article_end');
assert.equal(browserWindow.dataLayer[1].contact_location,'article_end');
const {getArticleService} = load('lib/article-services.ts');
for (const [slug,title,service] of [
  ['migracao-protheus-nuvem','Migração do Protheus para Nuvem','/consultoria-protheus'],
  ['desenvolvimento-aplicativos-empresas','Desenvolvimento de Aplicativos para Empresas','/apps-mobile'],
  ['acessibilidade-aplicativos-moveis','Acessibilidade em Aplicativos Móveis','/apps-mobile'],
  ['integracao-ecommerce-erp','Integração de E-commerce com ERP','/solucoes-ecommerce'],
  ['etl-ou-elt','ETL ou ELT: Como Escolher para Analytics','/banco-dados-analytics'],
  ['pipeline-cicd-seguro','Pipeline CI/CD Seguro','/migracao-cloud'],
  ['quanto-custa-software-sob-medida','Quanto Custa um Software Sob Medida?','/criacao-software'],
  ['gestao-ativos-ti','Gestão de Ativos de TI','/consultoria-ti'],
]) {
  assert.equal(getArticleService({slug,title})?.path,service,`Relevant service for ${slug}`);
}
assert.equal(getArticleService({slug:'assunto-sem-relacao',title:'Outro assunto'}),undefined,'Do not invent a service for unrelated articles');
assert.equal(getArticleService({slug:'introducao',title:'Introdução',tags:['UX/UI']})?.path,'/ux-ui-design');
console.log('Contato: validação, campos opcionais, contexto, URL e eventos sem dados pessoais verificados. Nenhum envio externo.');
