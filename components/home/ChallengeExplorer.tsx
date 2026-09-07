'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, MoveRight } from 'lucide-react';
import { serviceValue } from '@/lib/service-value';
import { serviceCatalog, type ServicePath } from '@/lib/services';
import { whatsappLink } from '@/lib/contact';
import { trackConversion } from '@/lib/conversion-events';

const challenges: { label: string; path: ServicePath; before: string; after: string }[] = [
  { label: 'Atrair mais oportunidades', path: '/criacao-sites', before: 'O visitante não entende a oferta e sai sem falar com você.', after: 'Serviços explicados, diferenciais visíveis e um caminho simples para entrar em contato.' },
  { label: 'Reduzir trabalho manual', path: '/criacao-software', before: 'Um pedido chega e a equipe copia os dados entre planilhas e sistemas.', after: 'O pedido percorre um fluxo integrado; a equipe acompanha o status e trata exceções.' },
  { label: 'Agilizar o atendimento', path: '/inteligencia-artificial', before: 'A equipe procura a mesma informação em documentos para responder a cada solicitação.', after: 'Um assistente consulta fontes definidas e encaminha dúvidas que exigem uma pessoa.' },
  { label: 'Ter dados para decidir', path: '/banco-dados-analytics', before: 'A reunião começa com a conferência de relatórios que apresentam números diferentes.', after: 'As áreas consultam indicadores com as mesmas regras e fontes identificadas.' },
  { label: 'Reduzir falhas na operação', path: '/avaliacoes-ti', before: 'A falha só aparece quando alguém reclama e a equipe resolve o incidente sem investigar a causa.', after: 'Um diagnóstico identifica causas e prioridades para orientar as correções.' },
];

export default function ChallengeExplorer() {
  const [selected, setSelected] = useState(0);
  const challenge = challenges[selected];
  const value = serviceValue[challenge.path];
  const service = serviceCatalog.find(item => item.path === challenge.path)!;
  return (
    <section className="value-section challenge-explorer" id="seu-desafio" aria-labelledby="challenge-title">
      <div className="mts-container">
        <div className="value-heading">
          <span className="value-eyebrow">COMECE PELO QUE PRECISA MELHORAR</span>
          <h2 id="challenge-title">Onde sua empresa está perdendo oportunidades?</h2>
          <p>Escolha uma prioridade e veja como a tecnologia pode mudar a rotina. Você não precisa conhecer o nome da solução.</p>
        </div>
        <div className="challenge-options" role="group" aria-label="Escolha o principal desafio">
          {challenges.map((item, index) => <button type="button" key={item.path} aria-pressed={selected === index} aria-controls="challenge-result" onClick={() => { setSelected(index); trackConversion('service_interest', 'service', item.path); }}>{item.label}<ArrowRight aria-hidden="true" /></button>)}
        </div>
        <div className="challenge-result" id="challenge-result" aria-live="polite" aria-atomic="true">
          <div className="challenge-result__intro"><span className="value-eyebrow">EXEMPLO ILUSTRATIVO · NÃO É UM CASE DE CLIENTE</span><h3>{value.outcome}</h3></div>
          <div className="challenge-comparison">
            <div><span className="value-eyebrow">CENÁRIO ATUAL</span><p>{challenge.before}</p></div>
            <MoveRight className="challenge-arrow" aria-hidden="true" />
            <div><span className="value-eyebrow">COM A SOLUÇÃO APLICADA</span><p>{challenge.after}</p></div>
          </div>
          <div className="challenge-result__footer"><p><Check aria-hidden="true" /><span><strong>Como medir:</strong> {value.measure}</span></p><div className="challenge-result__actions"><a className="mts-button mts-button--primary" href={whatsappLink(`Olá! Minha prioridade é ${challenge.label.toLowerCase()}. Quero entender como vocês podem ajudar.`)} target="_blank" rel="noopener noreferrer">Quero melhorar esse cenário <ArrowRight aria-hidden="true" /></a><Link className="value-link" href={challenge.path}>Entender {service.name.toLowerCase()} <ArrowRight aria-hidden="true" /></Link></div></div>
        </div>
        <p className="value-note">A melhor escolha pode ser melhorar o que você já tem. O diagnóstico ajuda a entender se um novo projeto se justifica.</p>
      </div>
    </section>
  );
}
