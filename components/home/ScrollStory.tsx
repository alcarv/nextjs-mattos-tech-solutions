'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MTSCore from './MTSCore';

const chapters = [
  {
    number: '01',
    eyebrow: 'O cenário',
    title: 'Processos desconectados limitam o crescimento.',
    text: 'Planilhas isoladas, tarefas repetidas e sistemas que não conversam consomem tempo e escondem decisões importantes.',
    align: 'left',
  },
  {
    number: '02',
    eyebrow: 'A conexão',
    title: 'Conectamos sistemas, dados e pessoas.',
    text: 'Integrações bem desenhadas fazem a informação percorrer a operação com menos atrito, duplicidade e dependência manual.',
    align: 'right',
  },
  {
    number: '03',
    eyebrow: 'A fluidez',
    title: 'Automatizamos o que consome tempo.',
    text: 'Regras, aprovações e rotinas passam a operar em fluxos confiáveis — com controle humano onde ele realmente importa.',
    align: 'left',
  },
  {
    number: '04',
    eyebrow: 'A inteligência',
    title: 'Aplicamos inteligência onde ela gera valor.',
    text: 'IA entra com propósito: organizar documentos, apoiar análises, acelerar atendimento e ampliar a produtividade das equipes.',
    align: 'right',
  },
  {
    number: '05',
    eyebrow: 'A base',
    title: 'Construímos uma base preparada para evoluir.',
    text: 'Cloud, DevOps, segurança e observabilidade sustentam uma operação disponível, visível e pronta para crescer.',
    align: 'left',
  },
  {
    number: '06',
    eyebrow: 'O resultado',
    title: 'Da complexidade à evolução.',
    text: 'Um ecossistema integrado, automatizado e confiável — construído ao redor do seu negócio, não o contrário.',
    align: 'center',
  },
];

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const context = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.story-copy');
      const fragments = gsap.utils.toArray<SVGGElement>('.core-fragment');
      const connectors = gsap.utils.toArray<SVGPathElement>('.story-connector');
      const modules = gsap.utils.toArray<HTMLElement>('.story-module');
      const stageDots = gsap.utils.toArray<HTMLElement>('.story-rail__dot');

      gsap.set(panels, { autoAlpha: 0, y: 28 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      gsap.set(connectors, { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.set(modules, { autoAlpha: 0, scale: 0.82 });
      gsap.set(stageDots, { scale: 0.72, opacity: 0.4 });
      gsap.set(stageDots[0], { scale: 1, opacity: 1 });
      gsap.set(fragments, {
        x: (index) => [-28, 34, -38, 26][index],
        y: (index) => [-22, -14, 24, 18][index],
        rotation: (index) => [-7, 5, 6, -5][index],
        transformOrigin: 'center center',
      });

      const motion = gsap.matchMedia();

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${window.innerHeight * (window.innerWidth < 768 ? 3.2 : 4.8)}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        const showPanel = (from: number, to: number, at: number) => {
          tl.to(panels[from], { autoAlpha: 0, y: -24, duration: 3 }, at)
            .fromTo(panels[to], { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 4 }, at + 2)
            .to(stageDots[from], { scale: 0.72, opacity: 0.4, duration: 2 }, at)
            .to(stageDots[to], { scale: 1, opacity: 1, duration: 2 }, at + 1);
        };

        tl.to('.story-progress__fill', { scaleY: 1, duration: 100 }, 0)
          .to('.core-orbits', { rotation: 22, transformOrigin: '50% 50%', duration: 100 }, 0)
          .to('.core-center', { rotation: -8, transformOrigin: '50% 50%', duration: 100 }, 0)
          .to('.core-particles', { rotation: 70, transformOrigin: '50% 50%', duration: 100 }, 0);

        showPanel(0, 1, 14);
        tl.to(connectors, { strokeDashoffset: 0, stagger: 1.2, duration: 13 }, 15)
          .to(fragments, {
            x: (index) => [55, -55, 62, -62][index],
            y: (index) => [40, 46, -50, -56][index],
            rotation: 0,
            duration: 17,
          }, 15);

        showPanel(1, 2, 33);
        tl.to(modules, { autoAlpha: 1, scale: 1, stagger: 1.1, duration: 8, ease: 'power2.out' }, 34)
          .to('.core-center__pulse', { attr: { r: 104 }, opacity: 0.95, duration: 9, yoyo: true, repeat: 1 }, 36);

        showPanel(2, 3, 52);
        tl.to('.ai-layer', { opacity: 1, duration: 10 }, 53)
          .to('.ai-layer', { rotation: 60, transformOrigin: '50% 50%', duration: 28 }, 53)
          .to('.story-module--ai', { autoAlpha: 1, scale: 1.08, duration: 7 }, 54);

        showPanel(3, 4, 70);
        tl.to('.infra-frame', { opacity: 1, duration: 10 }, 71)
          .fromTo('.infra-node', { scale: 0 }, { scale: 1, stagger: 0.8, duration: 7, transformOrigin: 'center center' }, 72)
          .to('.mts-core__halo', { scale: 1.14, opacity: 0.9, duration: 12 }, 73);

        showPanel(4, 5, 87);
        tl.to('.story-module', { x: 0, y: 0, autoAlpha: 1, scale: 0.9, duration: 8 }, 88)
          .to('.story-ecosystem', { autoAlpha: 1, y: 0, duration: 7 }, 90)
          .to('.mts-core--story', { scale: 1.06, duration: 10 }, 90);

        return () => tl.kill();
      });

      motion.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(panels, { clearProps: 'all' });
        gsap.set(connectors, { strokeDashoffset: 0 });
        gsap.set('.ai-layer, .infra-frame, .story-ecosystem', { opacity: 1 });
      });

      return () => motion.revert();
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experiencia" className="story-scroll" aria-label="Como conectamos tecnologia e negócio">
      <div className="story-stage">
        <div className="story-stage__grid" />
        <div className="story-stage__topline">
          <span>MTS / SISTEMA OPERACIONAL</span>
          <span>SCROLL NARRATIVE_01</span>
        </div>

        <div className="story-core-wrap">
          <MTSCore id="story" story />
          <div className="story-module story-module--system">SISTEMAS</div>
          <div className="story-module story-module--flow">AUTOMAÇÕES</div>
          <div className="story-module story-module--ai">IA APLICADA</div>
          <div className="story-module story-module--cloud">CLOUD</div>
          <div className="story-ecosystem">ECOSSISTEMA INTEGRADO</div>
        </div>

        <div className="story-copy-stack">
          {chapters.map((chapter) => (
            <article key={chapter.number} className={`story-copy story-copy--${chapter.align}`}>
              <div className="story-copy__meta">
                <span>{chapter.number} / 06</span>
                <span>{chapter.eyebrow}</span>
              </div>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>

        <div className="story-rail" aria-hidden="true">
          {chapters.map((chapter) => (
            <span key={chapter.number} className="story-rail__dot" />
          ))}
        </div>
        <div className="story-progress" aria-hidden="true"><span className="story-progress__fill" /></div>
        <div className="story-stage__bottomline">
          <span>FRAGMENTOS</span><i /><span>CONEXÃO</span><i /><span>EVOLUÇÃO</span>
        </div>
      </div>
    </section>
  );
}
