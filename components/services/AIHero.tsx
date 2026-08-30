'use client';

import { useRef, type PointerEvent } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Bot, Braces, Database, FileText, ShieldCheck, Workflow } from 'lucide-react';

export default function AIHero() {
  const visualRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    visualRef.current?.style.setProperty('--ai-parallax-x', `${x * 10}px`);
    visualRef.current?.style.setProperty('--ai-parallax-y', `${y * 10}px`);
  };

  const resetPointer = () => {
    visualRef.current?.style.setProperty('--ai-parallax-x', '0px');
    visualRef.current?.style.setProperty('--ai-parallax-y', '0px');
  };

  return (
    <section className="ai-hero">
      <div className="ai-hero__grid" />
      <div className="ai-hero__ambient" />
      <div className="mts-container ai-hero__inner">
        <div className="ai-hero__copy">
          <span className="service-eyebrow"><i /> INTELIGÊNCIA ARTIFICIAL / APLICADA</span>
          <h1>Consultoria de Inteligência Artificial para empresas. <em>Preparada para operar.</em></h1>
          <p>Desenhamos soluções de Inteligência Artificial ligadas aos seus dados, processos e canais — com integração, governança e acompanhamento para gerar valor real na operação.</p>
          <div className="ai-hero__actions">
            <Link href="#contact" className="mts-button mts-button--primary">Falar sobre meu cenário <ArrowUpRight /></Link>
            <Link href="#ai-journey" className="mts-button mts-button--outline">Ver como funciona <ArrowDown /></Link>
          </div>
          <div className="ai-hero__principles">
            <span><Bot /> Aplicação prática</span>
            <span><Workflow /> Integração real</span>
            <span><ShieldCheck /> Uso responsável</span>
          </div>
        </div>

        <div
          ref={visualRef}
          className="ai-operating-layer"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          aria-hidden="true"
        >
          <div className="ai-operating-layer__grid" />
          <div className="ai-operating-layer__meta"><span>AI OPERATING LAYER</span><span className="mts-status"><i /> READY</span></div>

          <div className="ai-operating-layer__orbit orbit-1" />
          <div className="ai-operating-layer__orbit orbit-2" />
          <div className="ai-operating-layer__orbit orbit-3" />
          <div className="ai-operating-layer__core">
            <span>AI</span>
            <small>ORCHESTRATOR</small>
          </div>

          <svg viewBox="0 0 620 560">
            <path className="path-a" d="M68 104C164 104 183 238 263 266" />
            <path className="path-b" d="M552 104C452 104 438 228 357 266" />
            <path className="path-c" d="M68 456C163 456 180 325 263 294" />
            <path className="path-d" d="M552 456C455 456 440 331 357 294" />
          </svg>

          <div className="ai-source ai-source--docs"><FileText /><span>DOCUMENTOS</span></div>
          <div className="ai-source ai-source--data"><Database /><span>DADOS</span></div>
          <div className="ai-source ai-source--rules"><Braces /><span>REGRAS</span></div>
          <div className="ai-source ai-source--flows"><Workflow /><span>PROCESSOS</span></div>

          <div className="ai-operating-layer__prompt">
            <span>PROMPT / CONTEXTO</span>
            <p>Como posso apoiar esta decisão?</p>
            <i />
          </div>
          <div className="ai-operating-layer__guardrail"><ShieldCheck /> GOVERNED OUTPUT</div>
          <div className="ai-operating-layer__coordinates">MTS_AI / 23°32&apos;S 46°37&apos;W</div>
        </div>
      </div>
      <a className="ai-hero__scroll" href="#ai-journey"><span>CONTINUE PARA CONECTAR AS CAMADAS</span><ArrowDown /></a>
    </section>
  );
}
