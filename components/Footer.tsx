import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { Brand } from '@/components/home/Brand';
import { serviceCatalog } from '@/lib/services';

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
          <div className="mts-footer__services"><span>SERVIÇOS</span><Link href="/servicos">Comparar todos os serviços</Link><ul>{serviceCatalog.map(service => <li key={service.path}><Link href={service.path} data-contact-location="footer">{service.name}</Link></li>)}</ul></div>
          <div><span>EMPRESA</span><Link href="/#sobre">Sobre</Link><Link href="/guias">Guias para decidir</Link><Link href="/blog">Blog</Link><Link href="/faq">FAQ</Link></div>
          <div><span>CONTATO</span><a href="mailto:contato@mattostechsolutions.com" data-contact-location="footer">E-mail</a><a href="https://wa.me/5511990183194" target="_blank" rel="noopener noreferrer" data-contact-location="footer">WhatsApp</a><span className="mts-footer__location">São Paulo / Brasil</span></div>
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
