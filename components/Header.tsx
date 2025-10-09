'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Sobre', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contato', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith('/#')) {
      if (window.location.pathname !== '/') {
        window.location.href = href;
      } else {
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 text-slate-100 shadow-lg shadow-slate-950/30 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-blue-300 transition-colors hover:text-blue-200">
            <Code2 className="h-8 w-8" />
            <span className="font-bold text-xl">Mattos Tech Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 transition-colors duration-200 hover:text-blue-400 font-medium"
                  onClick={() => {
                    // Close mobile menu if open
                    setIsMenuOpen(false);
                    // Handle hash navigation for same page
                    if (item.href.startsWith('#')) {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => handleNavClick('/#contact')}
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:from-blue-500 hover:to-indigo-400"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-300 hover:text-blue-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg border border-slate-800 bg-slate-900/90 px-2 pt-2 pb-3 shadow-lg sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-300 transition-colors duration-200 hover:text-blue-400"
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Handle hash navigation for same page
                    if (item.href.startsWith('#')) {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => handleNavClick('/#contact')}
                  className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:from-blue-500 hover:to-indigo-400"
                >
                  Contato
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
