import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  BUSINESS_EMAIL,
  BUSINESS_TAX_ID,
  SITE_NAME,
  SITE_URL,
  createPageMetadata,
} from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Esclarecimento oficial sobre empresas com nomes semelhantes',
  description: `A ${SITE_NAME}, CNPJ ${BUSINESS_TAX_ID}, não tem vínculo com a Mattos Tech Intermediações. Confira nossos dados e canais oficiais.`,
  path: '/esclarecimento',
});

export default function EsclarecimentoPage() {
  return (
    <div className="mts-page">
      <Header />
      <main className="identity-page">
        <div className="identity-page__inner">
          <Link href="/" className="identity-page__back">← Voltar ao site</Link>
          <p className="identity-page__eyebrow">COMUNICADO OFICIAL · MATTOS TECH SOLUTIONS</p>
          <h1>Empresas com nomes semelhantes. Confira com quem você está falando.</h1>
          <p className="identity-page__lead">
            A <strong>{SITE_NAME}</strong>, CNPJ <strong>{BUSINESS_TAX_ID}</strong>,
            não possui vínculo com a empresa <strong>Mattos Tech Intermediações</strong>.
          </p>
          <p>
            Estamos recebendo contatos sobre pagamentos e pedidos de reembolso destinados a outra
            empresa, devido à semelhança dos nomes. Este site e os canais abaixo pertencem à Mattos
            Tech Solutions, que atua com sites, desenvolvimento de software, automação e consultoria em TI.
          </p>

          <section className="identity-page__card" aria-labelledby="dados-oficiais">
            <h2 id="dados-oficiais">Nossos dados e canais oficiais</h2>
            <dl className="identity-page__details">
              <div><dt>Nome</dt><dd>{SITE_NAME}</dd></div>
              <div><dt>CNPJ</dt><dd>{BUSINESS_TAX_ID}</dd></div>
              <div><dt>Site</dt><dd><Link href="/">{new URL(SITE_URL).hostname}</Link></dd></div>
              <div><dt>E-mail</dt><dd><a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a></dd></div>
              <div><dt>WhatsApp</dt><dd>+55 (11) 99018-3194</dd></div>
              <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/mattostechsolutions/" target="_blank" rel="noopener noreferrer">@mattostechsolutions</a></dd></div>
            </dl>
          </section>

          <section aria-labelledby="pagamentos">
            <h2 id="pagamentos">Seu contato é sobre um pagamento ou reembolso?</h2>
            <p>
              Confira o nome e o CNPJ do beneficiário no comprovante da transação e compare com o
              nosso CNPJ: <strong>{BUSINESS_TAX_ID}</strong>. A semelhança do nome, por si só,
              não identifica a empresa que recebeu o pagamento.
            </p>
            <p>
              Não temos acesso aos contratos, pagamentos ou pedidos de reembolso da Mattos Tech
              Intermediações e não conseguimos consultar ou estornar transações recebidas por outra empresa.
            </p>
          </section>

          <section aria-labelledby="servicos">
            <h2 id="servicos">Procura os serviços da Mattos Tech Solutions?</h2>
            <p>
              Nosso atendimento sobre sites, software, automação e consultoria em TI continua pelos
              canais oficiais. Você pode conhecer nossos serviços ou acessar a área de contato.
            </p>
            <div className="identity-page__actions">
              <Link href="/servicos">Conhecer nossos serviços ↗</Link>
              <Link href="/#contato">Contato da Mattos Tech Solutions ↗</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
