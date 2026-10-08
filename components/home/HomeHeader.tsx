'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand } from './Brand';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { getContactService } from '@/lib/contact';

const navigation = [
  { label: 'Serviços', href: '/servicos' },
  { label: 'Como trabalhamos', href: '#metodo' },
  { label: 'Transparência', href: '#transparencia' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Guias', href: '/guias' },
  { label: 'Contato', href: '#contato' },
];

function resolveHref(href: string, rootLinks: boolean, isService: boolean) {
  if (href === '#contato' && isService) return '#contact';
  return rootLinks && href.startsWith('#') ? `/${href}` : href;
}

export default function HomeHeader({ rootLinks = false }: { rootLinks?: boolean }) {
  const isService = Boolean(getContactService(usePathname()));
  const contactHref = resolveHref('#contato', rootLinks, isService);
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
            <a key={item.href} href={resolveHref(item.href, rootLinks, isService)} data-contact-location="header">{item.label}</a>
          ))}
        </div>

        <div className="mts-header__actions">
          <a className="mts-header__cta" href={contactHref} data-contact-location="header">
            Vamos conversar <ArrowUpRight aria-hidden="true" />
          </a>

          <ThemeSwitcher />

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
        </div>
      </nav>

      <div id="mts-mobile-menu" className={`mts-mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mts-mobile-menu__meta">NAVEGAÇÃO / 01—06</div>
        {navigation.map((item, index) => (
          <a key={item.href} href={resolveHref(item.href, rootLinks, isService)} data-contact-location="header" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
        <a className="mts-mobile-menu__cta" href={contactHref} data-contact-location="header" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Vamos conversar <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
