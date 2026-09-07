import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { decisionGuides } from '@/lib/decision-guides';
import type { ServicePath } from '@/lib/services';

export default function DecisionGuides({ service }: { service?: ServicePath }) {
  const guides = service ? decisionGuides.filter(guide => guide.service === service) : decisionGuides;
  if (!guides.length) return null;
  return (
    <section className="value-section" aria-labelledby="decision-guides-title">
      <div className="mts-container">
        <div className="value-heading"><span className="value-eyebrow">ANTES DE INVESTIR</span><h2 id="decision-guides-title">Respostas para decidir com mais segurança.</h2><p>Entenda as opções, o que muda o investimento e como preparar uma conversa sobre seu projeto.</p></div>
        <div className="value-columns">
          {guides.map(guide => <article key={guide.slug} className="value-card"><h3><Link href={`/guias/${guide.slug}`}>{guide.title}</Link></h3><p>{guide.description}</p><Link className="value-link" href={`/guias/${guide.slug}`}>Ler o guia <ArrowRight aria-hidden="true" /></Link></article>)}
        </div>
      </div>
    </section>
  );
}
