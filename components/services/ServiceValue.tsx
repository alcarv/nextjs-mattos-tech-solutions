import { ArrowUpRight, Check, Gauge } from 'lucide-react';
import { serviceValue } from '@/lib/service-value';
import type { ServicePath } from '@/lib/services';
import { decisionGuides } from '@/lib/decision-guides';
import Link from 'next/link';

export default function ServiceValue({ path }: { path: ServicePath }) {
  const value = serviceValue[path];
  const guide = decisionGuides.find(item => item.service === path);
  return (
    <section className="value-section" id="valor-do-servico" aria-labelledby="service-value-title">
      <div className="mts-container">
        <div className="value-heading">
          <span className="value-eyebrow">O QUE MUDA PARA SUA EMPRESA</span>
          <h2 id="service-value-title">Quando esse serviço faz sentido?</h2>
          <p>{value.problem}</p>
        </div>
        <div className="value-columns">
          <article className="value-card"><span className="value-eyebrow">O CUSTO DO PROBLEMA</span><h3>O impacto na rotina</h3><p>{value.impact}</p><p className="value-highlight">{value.outcome}</p></article>
          <article className="value-card"><span className="value-eyebrow">ENTREGAS A DEFINIR NA PROPOSTA</span><h3>O que pode entrar no projeto</h3><ul>{value.deliverables.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article>
          <article className="value-card"><Gauge aria-hidden="true" className="value-icon" /><h3>Como avaliar o resultado</h3><p>{value.measure}</p><a className="value-link" href="#contact">Conversar sobre esse cenário <ArrowUpRight aria-hidden="true" /></a></article>
        </div>
        <p className="value-note"><strong>Para decidir com clareza.</strong> {value.caveat}</p>
        {guide && <Link className="value-link" href={`/guias/${guide.slug}`}>{guide.title} <ArrowUpRight aria-hidden="true" /></Link>}
      </div>
    </section>
  );
}
