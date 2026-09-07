import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { serviceCatalog } from '@/lib/services';
import { serviceValue } from '@/lib/service-value';

export default function Servicos() {
  return (
    <section id="servicos" className="value-section" aria-labelledby="catalog-title">
      <div className="mts-container">
        <div className="value-heading">
          <span className="value-eyebrow">ENCONTRE O PONTO DE PARTIDA</span>
          <h2 id="catalog-title">Qual problema você quer resolver?</h2>
          <p>Compare as situações abaixo. Em cada serviço, explicamos as entregas possíveis, os indicadores e os cuidados para decidir.</p>
        </div>
        <div className="value-columns">
          {serviceCatalog.map(service => {
            const value = serviceValue[service.path];
            return (
              <article key={service.path} className="value-card">
                <span className="value-eyebrow">{service.name}</span>
                <h3>{value.problem}</h3>
                <p>{value.outcome}</p>
                <ul>{value.deliverables.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                <Link href={service.path} className="value-link" aria-label={`Ver entregas e limites: ${service.name}`}>Conhecer {service.name.toLowerCase()} <ArrowUpRight aria-hidden="true" /></Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
