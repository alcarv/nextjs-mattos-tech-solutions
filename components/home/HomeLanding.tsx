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
import DecisionGuides from '@/components/DecisionGuides';
import { whatsappLink } from '@/lib/contact';
import HomeContact from './HomeContact';
import HomeEffects from './HomeEffects';
import HomeHeader from './HomeHeader';
import MagneticLink from './MagneticLink';
import MTSCore from './MTSCore';
import ChallengeExplorer from './ChallengeExplorer';
import BuyingGuide from '@/components/BuyingGuide';
import type { BlogPost } from '@/lib/supabase';

type Solution = {
  number: string;
  title: string;
  description: string;
  outcome: string;
  href: string;
  icon: LucideIcon;
};

const solutions: Solution[] = [
  {
    number: '01',
    title: 'Sites e presença digital',
    description: 'Para quando visitantes chegam ao seu site, mas não entendem sua oferta ou não entram em contato.',
    outcome: 'Sua oferta explicada com clareza, navegação simples e contatos que podem ser acompanhados.',
    href: '/criacao-sites',
    icon: Globe2,
  },
  {
    number: '02',
    title: 'Sistemas sob medida',
    description: 'Para quando planilhas, controles paralelos e ferramentas prontas já não atendem à sua rotina.',
    outcome: 'Regras da empresa organizadas em um sistema, com histórico e menos trabalho duplicado.',
    href: '/criacao-software',
    icon: Braces,
  },
  {
    number: '03',
    title: 'Automações e integrações',
    description: 'Para quando a equipe copia informações de um sistema para outro e confere tudo à mão.',
    outcome: 'Dados circulando entre ferramentas e pessoas focadas nas exceções que exigem atenção.',
    href: '/criacao-software',
    icon: Workflow,
  },
  {
    number: '04',
    title: 'Inteligência Artificial',
    description: 'Para quando buscar informações, analisar documentos ou responder dúvidas consome a capacidade do time.',
    outcome: 'Assistentes para tarefas específicas, avaliados por qualidade, tempo e custo de uso.',
    href: '/inteligencia-artificial',
    icon: Bot,
  },
  {
    number: '05',
    title: 'Cloud, DevOps e infraestrutura',
    description: 'Para quando a infraestrutura limita a operação ou seus custos crescem sem explicação.',
    outcome: 'Um plano de infraestrutura com capacidade, continuidade e custos avaliados juntos.',
    href: '/migracao-cloud',
    icon: CloudCog,
  },
  {
    number: '06',
    title: 'Observabilidade e confiabilidade',
    description: 'Para quando os mesmos incidentes voltam e o time só descobre um problema após a reclamação.',
    outcome: 'Diagnóstico das causas e prioridades para orientar correções e melhorar o acompanhamento.',
    href: '/avaliacoes-ti',
    icon: Activity,
  },
];

const method = [
  { number: '01', title: 'Diagnóstico', text: 'Mapeamos o problema, quem é afetado e como medir o cenário atual.', icon: Search },
  { number: '02', title: 'Plano', text: 'Você avalia escopo, entregas, estimativas e custos recorrentes na proposta.', icon: Layers3 },
  { number: '03', title: 'Construção', text: 'Você acompanha demonstrações e valida as entregas pelos critérios combinados.', icon: CodeXml },
  { number: '04', title: 'Implantação', text: 'Testamos o que foi acordado, documentamos e orientamos a entrada em operação.', icon: GitBranch },
  { number: '05', title: 'Evolução', text: 'Avaliamos os indicadores. Suporte e novas melhorias seguem o plano contratado.', icon: Radar },
];

const expertise = [
  'Desenvolvimento de software', 'Cloud', 'Kubernetes', 'Kafka e integração de dados',
  'Automação', 'Inteligência Artificial', 'DevOps', 'Observabilidade', 'Arquitetura e confiabilidade',
];

export default function HomeLanding({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <HomeEffects>
      <a className="mts-skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="mts-cursor-glow" aria-hidden="true" />
      <HomeHeader />

      <main id="conteudo">
        <section className="mts-hero">
          <div className="mts-hero__grid" />
          <div className="mts-hero__ambient" />
          <div className="mts-container mts-hero__inner">
            <div className="mts-hero__content">
              <span className="mts-kicker mts-hero__kicker"><i /> SITES <b>•</b> SOFTWARE <b>•</b> AUTOMAÇÃO</span>
              <h1>Sites e software para vender melhor e <em>simplificar sua operação.</em></h1>
              <p>Transforme um site que não explica sua oferta em um caminho para novos contatos. Troque controles manuais por processos conectados. Desenvolvimento de sites, software sob medida e automação em São Paulo, com atendimento em todo o Brasil.</p>
              <div className="mts-hero__actions">
                <MagneticLink className="mts-button mts-button--primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Falar sobre meu negócio <ArrowUpRight />
                </MagneticLink>
                <MagneticLink className="mts-button mts-button--outline" href="#seu-desafio">
                  Encontrar meu caminho <ArrowDown />
                </MagneticLink>
              </div>
              <div className="mts-hero__assurance">Primeiro entendemos o problema. Escopo e investimento vêm antes da contratação.</div>
            </div>

            <div className="mts-hero__core">
              <div className="mts-hero__core-meta meta-top"><span>INFRA / READY</span><i /></div>
              <MTSCore id="hero" />
              <div className="mts-hero__core-meta meta-bottom"><i /><span>SYSTEMS CONNECTED</span></div>
            </div>
          </div>

          <div className="mts-container mts-hero__footer">
            <div className="mts-hero__principles">
              <span><b>01</b> Problema e prioridades claros</span>
              <span><b>02</b> Entregas definidas na proposta</span>
              <span><b>03</b> Resultado acompanhado</span>
            </div>
            <a href="#seu-desafio" className="mts-scroll-cue"><span>ENCONTRE SUA SOLUÇÃO</span><i><ArrowDown /></i></a>
          </div>
        </section>

        <ChallengeExplorer />

        <section id="solucoes" className="mts-solutions">
          <div className="mts-container">
            <div className="mts-section-head reveal-on-scroll">
              <div>
                <span className="mts-section-number">02 / SOLUÇÕES</span>
                <h2>O serviço certo começa<br />pelo seu problema.</h2>
              </div>
              <p>Entenda em que situação cada solução ajuda. O ponto de partida é o que precisa mudar na empresa; a escolha da tecnologia vem depois.</p>
            </div>

            <div className="home-solutions-grid">
              {solutions.map(solution => (
                <article key={solution.number} className="home-solution-card">
                  <solution.icon aria-hidden="true" />
                  <h3><Link href={solution.href}>{solution.title}</Link></h3>
                  <p>{solution.description}</p>
                  <div className="solution-chapter__outcome"><Check aria-hidden="true" /><span>{solution.outcome}</span></div>
                  <Link href={solution.href} className="solution-chapter__link">Conhecer {solution.title.toLowerCase()} <ArrowRight aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
            <div className="home-solutions-next">
              <Link className="solution-chapter__link" href="/servicos">Comparar todos os 12 serviços <ArrowRight aria-hidden="true" /></Link>
              <a className="mts-button mts-button--primary" href={whatsappLink() } target="_blank" rel="noopener noreferrer">Me ajude a escolher <ArrowUpRight aria-hidden="true" /></a>
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
              <p>Você participa das decisões e acompanha entregas concretas. Cada etapa esclarece o próximo investimento e o que depende da sua equipe.</p>
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
              <p>Mudou a prioridade? Avaliamos juntos o impacto no escopo, no prazo e no investimento antes de seguir com a mudança.</p>
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
              <span className="mts-section-number">05 / COMO AVALIAR O INVESTIMENTO</span>
              <h2>O que melhorou precisa ser visível.</h2>
              <p>Comparamos o cenário inicial com o que foi implantado. Os indicadores dependem do projeto: tempo por tarefa, erros recorrentes, contatos qualificados ou custo de operação.</p>
            </div>
            <div className="mts-results__flow reveal-on-scroll">
              <div><span>01</span><Search /><h3>Antes</h3><p>Registramos como o processo funciona hoje, seu volume e as dificuldades da equipe.</p></div>
              <i><ArrowRight /></i>
              <div><span>02</span><DatabaseZap /><h3>Na entrega</h3><p>Conferimos as funcionalidades e os critérios de aceite definidos na proposta.</p></div>
              <i><ArrowRight /></i>
              <div><span>03</span><Sparkles /><h3>Em uso</h3><p>Comparamos períodos equivalentes e observamos o que depende de ajustes e adoção.</p></div>
            </div>
          </div>
        </section>

        <BuyingGuide />
        <HomeContact />
        <DecisionGuides />
        {blogPosts.length > 0 && <HomeBlog posts={blogPosts} />}
      </main>

      <footer className="mts-footer">
        <div className="mts-container">
          <div className="mts-footer__top">
            <Brand />
            <p>Tecnologia sob medida para operações que precisam avançar com clareza, integração e segurança.</p>
            <a className="mts-footer__social" href="https://www.instagram.com/mattostechsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Mattos Tech Solutions"><Instagram /></a>
          </div>
          <div className="mts-footer__nav">
            <div><span>SOLUÇÕES</span><Link href="/servicos">Todos os serviços</Link><Link href="/criacao-software">Software sob medida</Link><Link href="/inteligencia-artificial">Inteligência Artificial</Link><Link href="/criacao-sites">Sites profissionais</Link><Link href="/migracao-cloud">Cloud e infraestrutura</Link></div>
            <div><span>EMPRESA</span><a href="#sobre">Sobre</a><Link href="/guias">Guias para decidir</Link><Link href="/blog">Blog</Link><Link href="/faq">FAQ</Link></div>
            <div><span>CONTATO</span><a href="mailto:contato@mattostechsolutions.com">E-mail</a><a href="https://wa.me/5511990183194" target="_blank" rel="noopener noreferrer">WhatsApp</a><span className="mts-footer__location">São Paulo / Brasil</span></div>
          </div>
          <div className="mts-footer__bottom">
            <span>© {new Date().getFullYear()} MATTOS TECH SOLUTIONS</span>
            <span>CNPJ 54.019.901/0001-54</span>
            <Link href="/politica-de-privacidade">POLÍTICA DE PRIVACIDADE</Link>
          </div>
        </div>
      </footer>
    </HomeEffects>
  );
}
