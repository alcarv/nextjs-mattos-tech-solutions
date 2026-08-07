'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Braces,
  Check,
  CloudCog,
  Database,
  FileSearch,
  Gauge,
  GraduationCap,
  MessagesSquare,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const journeyChapters = [
  {
    number: '01',
    eyebrow: 'Contexto',
    title: 'A IA começa entendendo o cenário.',
    text: 'Objetivos, regras, documentos e dados relevantes formam o contexto necessário para uma solução realmente útil.',
  },
  {
    number: '02',
    eyebrow: 'Conhecimento',
    title: 'A informação certa encontra a pergunta certa.',
    text: 'Pesquisa semântica e RAG conectam modelos ao conhecimento da empresa sem depender apenas da memória do modelo.',
  },
  {
    number: '03',
    eyebrow: 'Orquestração',
    title: 'A inteligência entra no fluxo de trabalho.',
    text: 'A solução consulta sistemas, aplica regras, propõe ações e encaminha decisões dentro dos canais que a equipe já utiliza.',
  },
  {
    number: '04',
    eyebrow: 'Operação',
    title: 'Governança transforma experimento em capacidade.',
    text: 'Acessos, guardrails, avaliação e observabilidade mantêm a solução segura, compreensível e preparada para evoluir.',
  },
];

const capabilities: { icon: LucideIcon; title: string; text: string; tag: string }[] = [
  { icon: MessagesSquare, title: 'Assistentes e copilots', text: 'Atendimento, suporte interno e apoio às equipes com contexto do negócio.', tag: 'CONVERSATION' },
  { icon: Workflow, title: 'Automação com IA', text: 'Triagem, análise, classificação e execução conectadas aos processos existentes.', tag: 'ORCHESTRATION' },
  { icon: FileSearch, title: 'RAG e busca semântica', text: 'Respostas apoiadas em documentos, bases e fontes autorizadas da empresa.', tag: 'KNOWLEDGE' },
  { icon: Network, title: 'Integrações', text: 'APIs, CRM, ERP, WhatsApp, e-mail, webhooks e pipelines de dados.', tag: 'CONNECTION' },
  { icon: ShieldCheck, title: 'Governança e avaliação', text: 'Controle de acesso, guardrails, testes e monitoramento da qualidade.', tag: 'TRUST' },
  { icon: GraduationCap, title: 'Adoção e capacitação', text: 'Treinamentos e práticas para uso responsável e autonomia das equipes.', tag: 'ENABLEMENT' },
];

const useCases = [
  {
    id: 'atendimento',
    label: 'Atendimento',
    number: '01',
    title: 'Atendimento que entende contexto e sabe quando encaminhar.',
    description: 'Assistentes conectados à base de conhecimento podem responder, coletar informações, classificar demandas e transferir a conversa para uma pessoa com o histórico organizado.',
    flow: ['Pergunta', 'Contexto', 'Resposta', 'Encaminhamento'],
    icon: MessagesSquare,
  },
  {
    id: 'documentos',
    label: 'Documentos',
    number: '02',
    title: 'Documentos deixam de ser arquivos isolados.',
    description: 'A IA pode localizar informações, comparar versões, estruturar conteúdo e apoiar a análise — sempre indicando a origem usada para compor a resposta.',
    flow: ['Fontes', 'Extração', 'Análise', 'Referência'],
    icon: FileSearch,
  },
  {
    id: 'operacoes',
    label: 'Operações',
    number: '03',
    title: 'Tarefas repetitivas viram fluxos assistidos.',
    description: 'Classificação, preenchimento, conferência e encaminhamento podem ser orquestrados entre IA, regras de negócio e validações humanas.',
    flow: ['Evento', 'Regra', 'Ação', 'Validação'],
    icon: Workflow,
  },
  {
    id: 'produtividade',
    label: 'Produtividade',
    number: '04',
    title: 'Conhecimento acessível no momento da decisão.',
    description: 'Copilots internos apoiam propostas, pesquisas, sínteses e consultas operacionais sem tirar a equipe das ferramentas que ela já utiliza.',
    flow: ['Demanda', 'Pesquisa', 'Síntese', 'Decisão'],
    icon: Sparkles,
  },
];

const phases = [
  { number: '01', title: 'Diagnóstico', text: 'Mapeamos problema, processo, usuários, dados disponíveis e riscos.', icon: ScanSearch },
  { number: '02', title: 'Validação', text: 'Testamos a hipótese com um recorte que permita aprender antes de ampliar.', icon: BrainCircuit },
  { number: '03', title: 'Integração', text: 'Conectamos canais, sistemas, regras, segurança e operação.', icon: Braces },
  { number: '04', title: 'Evolução', text: 'Acompanhamos qualidade, adoção e novas oportunidades de uso.', icon: Gauge },
];

const stack = [
  { icon: Bot, label: 'Modelos', text: 'OpenAI, Azure OpenAI, Anthropic, Bedrock e Vertex AI' },
  { icon: Database, label: 'Dados', text: 'Postgres, vetores, APIs, documentos e bases internas' },
  { icon: Workflow, label: 'Orquestração', text: 'Fluxos próprios, LangChain, LlamaIndex e automações' },
  { icon: CloudCog, label: 'Infraestrutura', text: 'Cloud, pipelines, observabilidade e controle de acesso' },
];

const faq = [
  {
    question: 'Como saber se um processo realmente precisa de IA?',
    answer: 'Começamos pelo problema e pelo fluxo atual. Em alguns cenários, automação tradicional ou integração resolve melhor. IA entra quando contexto, linguagem, documentos ou variabilidade tornam a abordagem inteligente justificável.',
  },
  {
    question: 'É possível usar dados internos com segurança?',
    answer: 'Sim, desde que arquitetura, acessos, retenção, provedores e registros de uso sejam definidos conforme a sensibilidade do cenário. Esses requisitos fazem parte do desenho, não são adicionados apenas no final.',
  },
  {
    question: 'A solução pode integrar com sistemas que já usamos?',
    answer: 'Esse é normalmente o caminho mais útil. Trabalhamos com APIs, webhooks, bancos de dados e automações para levar a IA até os canais e processos existentes, evitando criar mais uma ferramenta isolada.',
  },
  {
    question: 'Como vocês avaliam a qualidade das respostas?',
    answer: 'Definimos critérios ligados ao caso de uso, criamos conjuntos de avaliação, registramos respostas e combinamos testes automatizados com revisão humana. O objetivo é tornar qualidade e limitações visíveis.',
  },
];

function AIJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;

    const context = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.ai-journey-copy');
      const layers = gsap.utils.toArray<HTMLElement>('.ai-engine__layer');
      const railDots = gsap.utils.toArray<HTMLElement>('.ai-journey__rail-dot');

      gsap.set(panels, { autoAlpha: 0, y: 28 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      gsap.set(layers, { opacity: 0.15, scale: 0.82 });
      gsap.set(layers[0], { opacity: 1, scale: 1 });
      gsap.set(railDots, { opacity: 0.3, scale: 0.7 });
      gsap.set(railDots[0], { opacity: 1, scale: 1 });

      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${window.innerHeight * (window.innerWidth < 768 ? 2.4 : 3.2)}`,
            pin: true,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to('.ai-journey__progress-fill', { scaleY: 1, duration: 100 }, 0)
          .to('.ai-engine__orbit', { rotation: 85, transformOrigin: '50% 50%', duration: 100 }, 0)
          .to('.ai-engine__pulse', { scale: 1.14, opacity: 0.9, transformOrigin: '50% 50%', duration: 100 }, 0);

        [1, 2, 3].forEach((index) => {
          const at = index * 25;
          tl.to(panels[index - 1], { autoAlpha: 0, y: -22, duration: 4 }, at - 2)
            .fromTo(panels[index], { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 5 }, at)
            .to(layers[index - 1], { opacity: 0.45, scale: 0.92, duration: 5 }, at - 1)
            .to(layers[index], { opacity: 1, scale: 1, duration: 7 }, at)
            .to(railDots[index - 1], { opacity: 0.3, scale: 0.7, duration: 3 }, at - 1)
            .to(railDots[index], { opacity: 1, scale: 1, duration: 3 }, at);
        });

        tl.to('.ai-engine__connection', { strokeDashoffset: 0, stagger: 1.5, duration: 18 }, 22)
          .to('.ai-engine__guardrails', { opacity: 1, duration: 14 }, 70);

        return () => tl.kill();
      });

      media.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(panels, { clearProps: 'all' });
        gsap.set(layers, { opacity: 1, scale: 1 });
      });

      return () => media.revert();
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ai-journey" className="ai-journey" aria-label="Como estruturamos uma solução de Inteligência Artificial">
      <div className="ai-journey__stage">
        <div className="ai-journey__grid" />
        <div className="ai-journey__topline"><span>MTS / AI SYSTEM</span><span>CONTEXT → KNOWLEDGE → ACTION → TRUST</span></div>

        <div className="ai-engine" aria-hidden="true">
          <div className="ai-engine__pulse" />
          <div className="ai-engine__orbit" />
          <svg viewBox="0 0 600 600">
            <circle className="ai-engine__layer layer-1" cx="300" cy="300" r="78" />
            <circle className="ai-engine__layer layer-2" cx="300" cy="300" r="132" />
            <circle className="ai-engine__layer layer-3" cx="300" cy="300" r="188" />
            <circle className="ai-engine__layer layer-4" cx="300" cy="300" r="238" />
            <path className="ai-engine__connection" pathLength="1" d="M300 62v160M538 300H378M300 538V378M62 300h160" />
            <g className="ai-engine__guardrails" opacity="0">
              <path d="M176 176h248v248H176z" />
              <path d="m176 176 248 248M424 176 176 424" />
            </g>
          </svg>
          <div className="ai-engine__core"><BrainCircuit /><span>AI / CORE</span></div>
          <span className="ai-engine__node node-context">CONTEXT</span>
          <span className="ai-engine__node node-knowledge">KNOWLEDGE</span>
          <span className="ai-engine__node node-action">ACTION</span>
          <span className="ai-engine__node node-trust">TRUST</span>
        </div>

        <div className="ai-journey__copy-stack">
          {journeyChapters.map((chapter, index) => (
            <article key={chapter.number} className={`ai-journey-copy ai-journey-copy--${index % 2 ? 'right' : 'left'}`}>
              <span>{chapter.number} / 04 · {chapter.eyebrow}</span>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>

        <div className="ai-journey__rail" aria-hidden="true">
          {journeyChapters.map((chapter) => <i key={chapter.number} className="ai-journey__rail-dot" />)}
        </div>
        <div className="ai-journey__progress" aria-hidden="true"><i className="ai-journey__progress-fill" /></div>
        <div className="ai-journey__bottomline">INTELIGÊNCIA COM CONTEXTO, LIMITES E RESPONSABILIDADE</div>
      </div>
    </section>
  );
}

export default function AIExperience() {
  const [activeCase, setActiveCase] = useState(useCases[0]);
  const ActiveIcon = activeCase.icon;

  return (
    <>
      <AIJourney />

      <section id="detalhes-servico" className="ai-capabilities">
        <div className="mts-container">
          <div className="ai-section-head">
            <div><span>02 / CAPACIDADES</span><h2>Do modelo à operação completa.</h2></div>
            <p>A tecnologia é apenas uma camada. O valor aparece quando IA, dados, processos e pessoas trabalham como um sistema coerente.</p>
          </div>
          <div className="ai-capabilities__map">
            <div className="ai-capabilities__line" />
            {capabilities.map((capability, index) => (
              <article key={capability.title} className="ai-capability">
                <div className="ai-capability__meta"><span>0{index + 1}</span><span>{capability.tag}</span></div>
                <capability.icon />
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-use-cases">
        <div className="mts-container">
          <div className="ai-section-head ai-section-head--compact">
            <div><span>03 / APLICAÇÕES</span><h2>Escolha um ponto da operação.</h2></div>
            <p>Explore como a IA pode participar do fluxo sem substituir controle, contexto ou responsabilidade humana.</p>
          </div>

          <div className="ai-use-case-explorer">
            <div className="ai-use-case-tabs" role="tablist" aria-label="Casos de uso de Inteligência Artificial">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  id={`tab-${useCase.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeCase.id === useCase.id}
                  aria-controls="ai-use-case-panel"
                  onClick={() => setActiveCase(useCase)}
                >
                  <span>{useCase.number}</span>{useCase.label}<ArrowRight />
                </button>
              ))}
            </div>

            <div id="ai-use-case-panel" className="ai-use-case-panel" role="tabpanel" aria-labelledby={`tab-${activeCase.id}`} key={activeCase.id}>
              <div className="ai-use-case-panel__copy">
                <div className="ai-use-case-panel__icon"><ActiveIcon /></div>
                <span>USE CASE / {activeCase.number}</span>
                <h3>{activeCase.title}</h3>
                <p>{activeCase.description}</p>
                <div className="ai-use-case-panel__note"><Check /> Humano no controle das decisões sensíveis</div>
              </div>
              <div className="ai-use-case-flow" aria-hidden="true">
                <div className="ai-use-case-flow__grid" />
                {activeCase.flow.map((step, index) => (
                  <div key={step} className="ai-use-case-flow__step"><span>0{index + 1}</span><i /><b>{step}</b></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-method">
        <div className="mts-container">
          <div className="ai-section-head">
            <div><span>04 / ENTREGA</span><h2>Experimentar com critério. Escalar com confiança.</h2></div>
            <p>O projeto avança por evidências: primeiro entendemos, depois validamos e só então ampliamos integração e operação.</p>
          </div>
          <ol className="ai-method__timeline">
            {phases.map((phase) => (
              <li key={phase.number}>
                <div className="ai-method__marker"><span>{phase.number}</span></div>
                <phase.icon />
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ai-stack">
        <div className="mts-container">
          <div className="ai-stack__intro"><span>05 / ARQUITETURA</span><h2>Escolhemos a stack depois de entender o requisito.</h2></div>
          <div className="ai-stack__list">
            {stack.map((item, index) => (
              <article key={item.label}><span>0{index + 1}</span><item.icon /><div><h3>{item.label}</h3><p>{item.text}</p></div></article>
            ))}
          </div>
          <p className="ai-stack__disclaimer">Provedores e ferramentas são selecionados conforme segurança, integração, custo, privacidade e capacidade operacional de cada cenário.</p>
        </div>
      </section>

      <section className="ai-faq">
        <div className="mts-container ai-faq__layout">
          <div className="ai-faq__intro"><span>06 / PERGUNTAS FREQUENTES</span><h2>Clareza antes de começar.</h2><p>IA aplicada exige perguntas técnicas e de negócio. Estas são algumas das mais importantes.</p></div>
          <div className="ai-faq__accordion">
            <Accordion type="single" collapsible defaultValue="item-1">
              {faq.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index + 1}`}>
                  <AccordionTrigger><span>0{index + 1}</span>{item.question}</AccordionTrigger>
                  <AccordionContent><p>{item.answer}</p></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
