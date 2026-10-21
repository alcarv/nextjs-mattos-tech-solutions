import Link from 'next/link';
import { Info } from 'lucide-react';
import { BUSINESS_TAX_ID, SITE_NAME } from '@/lib/seo';

export default function IdentityNotice() {
  return (
    <aside className="identity-notice" aria-label="Esclarecimento sobre empresas com nomes semelhantes">
      <div className="identity-notice__inner">
        <Info aria-hidden="true" />
        <div>
          <strong>Aviso importante: empresas com nomes semelhantes</strong>
          <p>{SITE_NAME} · CNPJ {BUSINESS_TAX_ID}. Não temos vínculo com a Mattos Tech Intermediações.</p>
        </div>
        <Link href="/esclarecimento">Leia o esclarecimento completo <span aria-hidden="true">↗</span></Link>
      </div>
    </aside>
  );
}
