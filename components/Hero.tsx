'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { campaignConfigs, getDefaultConfig } from '@/lib/compaignConfigs';

export default function Hero() {
  const pathname = usePathname();
  
  const currentRoute = pathname.slice(1);
  
  const config = campaignConfigs[currentRoute as keyof typeof campaignConfigs] || getDefaultConfig();

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {config.heroTitle.includes('Tecnologia Inteligente') ? (
                <>
                  Transforme sua empresa com{' '}
                  <span className="text-blue-600">Tecnologia Inteligente</span>
                </>
              ) : (
                config.heroTitle
              )}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              {config.heroSubtitle}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/5511990183194?text=Olá! Gostaria de saber mais sobre os serviços da Mattos Tech Solutions." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-green-700">
                  {config.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/#servicos">
                <Button variant="outline" size="lg">
                  Ver Nossos Serviços
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Soluções Personalizadas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Suporte 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Equipe Especializada</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Resultados Garantidos</span>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded p-4">
                    <div className="text-sm text-gray-600 font-mono">
                      <div>function transformBusiness() &#123;</div>
                      <div className="ml-4">return innovation + efficiency;</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-full p-4">
                <CheckCircle className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}