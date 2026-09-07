import { buyingFaqs } from '@/lib/service-value';

export default function BuyingGuide() {
  return (
    <section className="value-section buying-guide" id="transparencia" aria-labelledby="buying-title">
      <div className="mts-container buying-guide__layout">
        <div className="value-heading">
          <span className="value-eyebrow">TRANSPARÊNCIA PARA DECIDIR</span>
          <h2 id="buying-title">Você precisa entender o investimento antes de dar o próximo passo.</h2>
          <p>Uma boa proposta deixa claro o que será feito, o que depende da sua equipe e como avaliar a entrega.</p>
          <a className="value-link" href="#contato">Vamos entender sua prioridade ↗</a>
        </div>
        <div className="buying-guide__questions">
          {buyingFaqs.map((item) => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}
