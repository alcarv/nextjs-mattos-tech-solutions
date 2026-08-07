'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand } from './Brand';

const navigation = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Como trabalhamos', href: '#metodo' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '#contato' },
];

function resolveHref(href: string, rootLinks: boolean) {
  return rootLinks && href.startsWith('#') ? `/${href}` : href;
}

export default function HomeHeader({ rootLinks = false }: { rootLinks?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`mts-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="mts-header__inner" aria-label="Navegação principal">
        <Brand />

        <div className="mts-header__nav">
          {navigation.map((item) => (
            <a key={item.href} href={resolveHref(item.href, rootLinks)}>{item.label}</a>
          ))}
        </div>

        <a className="mts-header__cta" href={rootLinks ? '/#contato' : '#contato'}>
          Agendar uma conversa <ArrowUpRight aria-hidden="true" />
        </a>

        <button
          className="mts-header__menu"
          type="button"
          aria-expanded={open}
          aria-controls="mts-mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <div id="mts-mobile-menu" className={`mts-mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mts-mobile-menu__meta">NAVEGAÇÃO / 01—06</div>
        {navigation.map((item, index) => (
          <a key={item.href} href={resolveHref(item.href, rootLinks)} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
        <a className="mts-mobile-menu__cta" href={rootLinks ? '/#contato' : '#contato'} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Agendar uma conversa <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
