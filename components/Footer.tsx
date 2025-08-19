import { Code2, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
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
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* servicos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#servicos" className="hover:text-blue-400 transition-colors">Consultoria em TI</Link></li>
              <li><Link href="#servicos" className="hover:text-blue-400 transition-colors">Desenvolvimento Web</Link></li>
              <li><Link href="#servicos" className="hover:text-blue-400 transition-colors">Desenvolvimento Mobile</Link></li>
              <li><Link href="#servicos" className="hover:text-blue-400 transition-colors">Banco de Dados</Link></li>
              <li><Link href="#servicos" className="hover:text-blue-400 transition-colors">Migração para Nuvem</Link></li>
              <li><Link href="#servicos" className="hover:text-blue-400 transition-colors">UX/UI Design</Link></li>
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
                <span>contato@mattostech.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span>
                  Av. Paulista, 1000<br />
                  São Paulo - SP<br />
                  CEP: 01310-100
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
                <Link href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}