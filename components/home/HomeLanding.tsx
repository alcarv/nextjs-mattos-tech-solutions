'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  CloudCog,
  CodeXml,
  DatabaseZap,
  GitBranch,
  Globe2,
  Instagram,
  Layers3,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { Brand } from './Brand';
import HomeBlog from './HomeBlog';
import HomeContact from './HomeContact';
import HomeHeader from './HomeHeader';
import MagneticLink from './MagneticLink';
import MTSCore from './MTSCore';
import ScrollStory from './ScrollStory';

type Solution = {
  number: string;
  title: string;
  description: string;
  outcome: string;
  href: string;
  icon: LucideIcon;
  labels: string[];
  variant: string;
};

const solutions: Solution[] = [
  {
    number: '01',
    title: 'Sites e presença digital',
    description: 'Experiências digitais profissionais, rápidas e construídas para gerar oportunidades.',
    outcome: 'Clareza de marca, credibilidade e uma jornada orientada à conversão.',
    href: '/criacao-sites',
    icon: Globe2,
    labels: ['ESTRATÉGIA', 'EXPERIÊNCIA', 'PERFORMANCE'],
    variant: 'web',
  },
  {
    number: '02',
    title: 'Sistemas sob medida',
    description: 'Aplicações alinhadas aos processos, regras e objetivos de cada operação.',
    outcome: 'Tecnologia que acompanha a rotina real do negócio e pode evoluir com ela.',
    href: '/criacao-software',
    icon: Braces,
    labels: ['REGRA', 'APLICAÇÃO', 'EVOLUÇÃO'],
    variant: 'software',
  },
  {
    number: '03',
    title: 'Automações e integrações',
    description: 'Menos tarefas repetitivas, menos retrabalho e informações conectadas.',
    outcome: 'Fluxos consistentes entre ferramentas, equipes e pontos de decisão.',
    href: '/consultoria-ti',
    icon: Workflow,
    labels: ['ENTRADA', 'ORQUESTRAÇÃO', 'AÇÃO'],
    variant: 'automation',
  },
  {
    number: '04',
    title: 'Inteligência Artificial',
    description: 'IA aplicada a fluxos, documentos, dados, atendimento e produtividade.',
    outcome: 'Mais capacidade de análise e execução, com governança e propósito claro.',
    href: '/inteligencia-artificial',
    icon: Bot,
    labels: ['CONTEXTO', 'MODELO', 'RESPOSTA'],
    variant: 'ai',
  },
  {
    number: '05',
    title: 'Cloud, DevOps e infraestrutura',
    description: 'Ambientes seguros, escaláveis e preparados para acompanhar o negócio.',
    outcome: 'Entregas mais previsíveis, operação protegida e capacidade para crescer.',
    href: '/migracao-cloud',
    icon: CloudCog,
    labels: ['BUILD', 'DEPLOY', 'SCALE'],
    variant: 'cloud',
  },
  {
    number: '06',
    title: 'Observabilidade e confiabilidade',
    description: 'Mais visibilidade sobre sistemas, falhas, desempenho e disponibilidade.',
    outcome: 'Problemas encontrados mais cedo e decisões técnicas baseadas em evidências.',
    href: '/avaliacoes-ti',
    icon: Activity,
    labels: ['MÉTRICAS', 'TRACES', 'ALERTAS'],
    variant: 'observe',
  },
];

const method = [
  { number: '01', title: 'Diagnóstico', text: 'Entendimento do negócio, dos processos e do problema.', icon: Search },
  { number: '02', title: 'Plano', text: 'Definição da solução, arquitetura, prioridades e etapas.', icon: Layers3 },
  { number: '03', title: 'Construção', text: 'Desenvolvimento com acompanhamento e comunicação transparente.', icon: CodeXml },
  { number: '04', title: 'Implantação', text: 'Entrada em produção, validação, segurança e documentação.', icon: GitBranch },
  { number: '05', title: 'Evolução', text: 'Monitoramento, suporte e melhoria contínua.', icon: Radar },
];

const expertise = [
  'Desenvolvimento de software', 'Cloud', 'Kubernetes', 'Kafka e integração de dados',
  'Automação', 'Inteligência Artificial', 'DevOps', 'Observabilidade', 'Arquitetura e confiabilidade',
];

function SolutionVisual({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <div className={`solution-visual solution-visual--${solution.variant}`} aria-hidden="true">
      <div className="solution-visual__grid" />
      <div className="solution-visual__header">
        <span>SOLUTION_LAYER / {solution.number}</span>
        <span className="mts-status"><i /> READY</span>
      </div>
      <div className="solution-visual__diagram">
        <div className="solution-visual__orbit orbit-a" />
        <div className="solution-visual__orbit orbit-b" />
        <div className="solution-visual__center"><Icon /></div>
        <svg viewBox="0 0 560 250" preserveAspectRatio="none">
          <path d="M42 125C130 125 141 50 230 50S352 198 518 125" pathLength="1" />
          <path d="M42 184C166 184 175 122 280 122s126-70 238-70" pathLength="1" />
          <path d="M42 66c107 0 131 136 238 136s130-42 238-42" pathLength="1" />
        </svg>
        <span className="solution-visual__node node-a" />
        <span className="solution-visual__node node-b" />
        <span className="solution-visual__node node-c" />
        {solution.labels.map((label, index) => (
          <span key={label} className={`solution-visual__label label-${index + 1}`}>{label}</span>
        ))}
      </div>
      <div className="solution-visual__footer"><span>INPUT</span><i /><span>PROCESS</span><i /><span>OUTCOME</span></div>
    </div>
  );
}

export default function HomeLanding() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    root.classList.add('is-enhanced');
    const items = root.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'));
      return () => root.classList.remove('is-enhanced');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      root.classList.remove('is-enhanced');
    };
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root || !window.matchMedia('(pointer: fine)').matches) return;
    const updateGlow = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', updateGlow, { passive: true });
    return () => window.removeEventListener('pointermove', updateGlow);
  }, []);

  return (
    <div ref={pageRef} className="mts-page">
      <a className="mts-skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="mts-cursor-glow" aria-hidden="true" />
      <HomeHeader />

      <main id="conteudo">
        <section className="mts-hero">
          <div className="mts-hero__grid" />
          <div className="mts-hero__ambient" />
          <div className="mts-container mts-hero__inner">
            <div className="mts-hero__content">
              <span className="mts-kicker mts-hero__kicker"><i /> ESTRATÉGIA <b>•</b> SOFTWARE <b>•</b> IA <b>•</b> CLOUD</span>
              <h1>Tecnologia sob medida para transformar operações em <em>crescimento.</em></h1>
              <p>Criamos sites, sistemas, automações, soluções com Inteligência Artificial e infraestruturas preparadas para conectar processos, reduzir trabalho manual e fazer empresas avançarem com segurança.</p>
              <div className="mts-hero__actions">
                <MagneticLink className="mts-button mts-button--primary" href="#contato">
                  Agendar uma conversa <ArrowUpRight />
                </MagneticLink>
                <MagneticLink className="mts-button mts-button--outline" href="#solucoes">
                  Conhecer nossas soluções <ArrowDown />
                </MagneticLink>
              </div>
            </div>

            <div className="mts-hero__core">
              <div className="mts-hero__core-meta meta-top"><span>INFRA / READY</span><i /></div>
              <MTSCore id="hero" />
              <div className="mts-hero__core-meta meta-bottom"><i /><span>SYSTEMS CONNECTED</span></div>
            </div>
          </div>

          <div className="mts-container mts-hero__footer">
            <div className="mts-hero__principles">
              <span><b>01</b> Estratégia orientada ao negócio</span>
              <span><b>02</b> Arquitetura sob medida</span>
              <span><b>03</b> Evolução contínua</span>
            </div>
            <a href="#experiencia" className="mts-scroll-cue"><span>SCROLL PARA EXPLORAR</span><i><ArrowDown /></i></a>
          </div>
        </section>

        <section className="mts-manifesto">
          <div className="mts-container mts-manifesto__inner reveal-on-scroll">
            <span className="mts-section-number">01 / O PONTO DE PARTIDA</span>
            <p>Tecnologia só faz sentido quando <em>remove fricção</em>, conecta decisões e abre espaço para o negócio avançar.</p>
          </div>
        </section>

        <ScrollStory />

        <section id="solucoes" className="mts-solutions">
          <div className="mts-container">
            <div className="mts-section-head reveal-on-scroll">
              <div>
                <span className="mts-section-number">02 / SOLUÇÕES</span>
                <h2>Uma base tecnológica.<br />Múltiplas frentes de evolução.</h2>
              </div>
              <p>Do primeiro ponto de contato à infraestrutura que sustenta a operação, desenhamos cada camada para resolver um problema real do negócio.</p>
            </div>

            <div className="mts-solutions__list">
              {solutions.map((solution, index) => (
                <article key={solution.number} className={`solution-chapter reveal-on-scroll ${index % 2 ? 'is-reversed' : ''}`}>
                  <div className="solution-chapter__copy">
                    <span className="solution-chapter__number">{solution.number} / 06</span>
                    <div className="solution-chapter__icon"><solution.icon /></div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                    <div className="solution-chapter__outcome"><Check /> <span>{solution.outcome}</span></div>
                    <Link href={solution.href} className="solution-chapter__link">
                      Explorar solução <ArrowRight />
                    </Link>
                  </div>
                  <SolutionVisual solution={solution} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="mts-method">
          <div className="mts-method__grid" />
          <div className="mts-container">
            <div className="mts-section-head reveal-on-scroll">
              <div>
                <span className="mts-section-number">03 / COMO TRABALHAMOS</span>
                <h2>Clareza do diagnóstico<br />à evolução.</h2>
              </div>
              <p>Um processo consultivo, com decisões visíveis e etapas que reduzem incerteza sem engessar o projeto.</p>
            </div>

            <ol className="mts-method__timeline reveal-on-scroll">
              {method.map((step) => (
                <li key={step.number}>
                  <div className="mts-method__marker"><span>{step.number}</span><i /></div>
                  <step.icon />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>

            <div className="mts-method__note reveal-on-scroll">
              <span><ShieldCheck /> DECISÕES COM CONTEXTO</span>
              <p>Arquitetura, segurança e experiência consideradas desde o início — com comunicação transparente durante toda a construção.</p>
            </div>
          </div>
        </section>

        <section id="sobre" className="mts-authority">
          <div className="mts-container mts-authority__layout">
            <div className="mts-authority__portrait reveal-on-scroll" aria-hidden="true">
              <div className="mts-authority__grid" />
              <div className="mts-authority__monogram">AC</div>
              <div className="mts-authority__orbit"><span /></div>
              <div className="mts-authority__caption">
                <span>FOUNDER / TECH LEAD</span>
                <b>ALEFE DE CARVALHO</b>
              </div>
            </div>

            <div className="mts-authority__copy reveal-on-scroll">
              <span className="mts-section-number">04 / EXPERIÊNCIA E AUTORIDADE</span>
              <h2>Tecnologia construída com experiência de <em>ambientes críticos.</em></h2>
              <p className="mts-authority__lead">A Mattos Tech Solutions foi fundada por Alefe de Carvalho, profissional com mais de 9 anos de experiência em tecnologia e atuação em projetos e ambientes de grandes instituições como Itaú, Santander e Sicredi.</p>
              <p>Essa vivência combina execução técnica, visão de arquitetura e entendimento dos riscos que acompanham operações que não podem parar. As instituições citadas fazem parte da trajetória profissional do fundador e não são apresentadas como clientes da Mattos Tech Solutions.</p>
              <div className="mts-authority__expertise">
                {expertise.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mts-results">
          <div className="mts-container">
            <div className="mts-results__header reveal-on-scroll">
              <span className="mts-section-number">05 / PROJETOS E RESULTADOS</span>
              <h2>Resultado começa com uma pergunta melhor.</h2>
              <p>Não usamos números genéricos nem promessas prontas. Em cada projeto, definimos o que precisa mudar, como medir e qual tecnologia faz sentido.</p>
            </div>
            <div className="mts-results__flow reveal-on-scroll">
              <div><span>01</span><Search /><h3>Problema</h3><p>Onde está a fricção e qual impacto ela causa na operação?</p></div>
              <i><ArrowRight /></i>
              <div><span>02</span><DatabaseZap /><h3>Solução</h3><p>Qual arquitetura resolve o cenário com simplicidade e segurança?</p></div>
              <i><ArrowRight /></i>
              <div><span>03</span><Sparkles /><h3>Evolução</h3><p>Como acompanhar o resultado e melhorar continuamente?</p></div>
            </div>
          </div>
        </section>

        <HomeBlog />
        <HomeContact />
      </main>

      <footer className="mts-footer">
        <div className="mts-container">
          <div className="mts-footer__top">
            <Brand />
            <p>Tecnologia sob medida para operações que precisam avançar com clareza, integração e segurança.</p>
            <a className="mts-footer__social" href="https://www.instagram.com/mattostechsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Mattos Tech Solutions"><Instagram /></a>
          </div>
          <div className="mts-footer__nav">
            <div><span>SOLUÇÕES</span><a href="#solucoes">Serviços</a><a href="#metodo">Como trabalhamos</a><a href="#experiencia">Experiência</a></div>
            <div><span>EMPRESA</span><a href="#sobre">Sobre</a><Link href="/blog">Blog</Link><Link href="/faq">FAQ</Link></div>
            <div><span>CONTATO</span><a href="mailto:mattostechsolutions@gmail.com">E-mail</a><a href="https://wa.me/5511990183194" target="_blank" rel="noopener noreferrer">WhatsApp</a><span className="mts-footer__location">São Paulo / Brasil</span></div>
          </div>
          <div className="mts-footer__bottom">
            <span>© {new Date().getFullYear()} MATTOS TECH SOLUTIONS</span>
            <span>CNPJ 54.019.901/0001-54</span>
            <Link href="/politica-de-privacidade">POLÍTICA DE PRIVACIDADE</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
