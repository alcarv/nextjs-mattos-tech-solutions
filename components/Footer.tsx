import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { Brand } from '@/components/home/Brand';

export default function Footer() {
  return (
    <footer className="mts-footer">
      <div className="mts-container">
        <div className="mts-footer__top">
          <Brand />
          <p>Tecnologia sob medida para operações que precisam avançar com clareza, integração e segurança.</p>
          <a className="mts-footer__social" href="https://www.instagram.com/mattostechsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Mattos Tech Solutions">
            <Instagram />
          </a>
        </div>
        <div className="mts-footer__nav">
          <div><span>SOLUÇÕES</span><Link href="/servicos">Todos os serviços</Link><Link href="/criacao-software">Software sob medida</Link><Link href="/inteligencia-artificial">Inteligência Artificial</Link><Link href="/criacao-sites">Sites profissionais</Link><Link href="/migracao-cloud">Cloud e infraestrutura</Link></div>
          <div><span>EMPRESA</span><Link href="/#sobre">Sobre</Link><Link href="/blog">Blog</Link><Link href="/faq">FAQ</Link></div>
          <div><span>CONTATO</span><a href="mailto:contato@mattostechsolutions.com">E-mail</a><a href="https://wa.me/5511990183194" target="_blank" rel="noopener noreferrer">WhatsApp</a><span className="mts-footer__location">São Paulo / Brasil</span></div>
        </div>
        <div className="mts-footer__bottom">
          <span>© {new Date().getFullYear()} MATTOS TECH SOLUTIONS</span>
          <span>CNPJ 54.019.901/0001-54</span>
          <Link href="/politica-de-privacidade">POLÍTICA DE PRIVACIDADE</Link>
        </div>
      </div>
    </footer>
  );
}
