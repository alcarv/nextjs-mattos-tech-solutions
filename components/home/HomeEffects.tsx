'use client';

import { useEffect, useRef } from 'react';

export default function HomeEffects({ children }: { children: React.ReactNode }) {
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

  return <div ref={pageRef} className="mts-page">{children}</div>;
}
