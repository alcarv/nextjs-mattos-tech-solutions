import { Code2, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Mattos Tech Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transformamos desafios empresariais em oportunidades através da tecnologia. 
              Sua parceira especializada em consultoria de TI e desenvolvimento de soluções personalizadas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mattostechsolutions/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500/20 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* servicos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/#servicos" className="transition-colors hover:text-blue-400">Consultoria em TI</Link></li>
              <li><Link href="/#servicos" className="transition-colors hover:text-blue-400">Desenvolvimento Web</Link></li>
              <li><Link href="/#servicos" className="transition-colors hover:text-blue-400">Desenvolvimento Mobile</Link></li>
              <li><Link href="/#servicos" className="transition-colors hover:text-blue-400">Banco de Dados</Link></li>
              <li><Link href="/#servicos" className="transition-colors hover:text-blue-400">Migração para Nuvem</Link></li>
              <li><Link href="/#servicos" className="transition-colors hover:text-blue-400">UX/UI Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+55 (11) 99018-3194</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>mattostechsolutions@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span>
                  Itu - SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Mattos Tech Solutions. Todos os direitos reservados.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/faq" className="transition-colors hover:text-blue-400">FAQ</Link>
                <Link href="/politica-de-privacidade" className="transition-colors hover:text-blue-400">Política de Privacidade</Link>
                <Link href="#" className="transition-colors hover:text-blue-400">Termos de Uso</Link>
                <Link href="#" className="transition-colors hover:text-blue-400">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
