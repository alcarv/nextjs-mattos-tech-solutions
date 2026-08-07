'use client';

import type { AnchorHTMLAttributes, PointerEvent } from 'react';

export default function MagneticLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const handleMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
    event.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <a {...props} onPointerMove={handleMove} onPointerLeave={handleLeave}>
      {children}
    </a>
  );
}
