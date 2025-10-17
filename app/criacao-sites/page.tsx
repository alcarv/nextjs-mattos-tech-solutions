import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import WebHero from '@/components/services/WebHero';
import WebDevSection from '@/components/services/WebDevSection';
import WebUseCases from '@/components/services/WebUseCases';
import WebMethodology from '@/components/services/WebMethodology';
import WebStack from '@/components/services/WebStack';
import WebFAQ from '@/components/services/WebFAQ';

export const metadata: Metadata = {
  title: 'Criação de Sites Profissionais - Mattos Tech Solutions',
  description: 'Desenvolvimento de sites profissionais, responsivos e otimizados para SEO. Criamos sua presença digital com tecnologia de ponta e design moderno.',
  keywords: 'criação de sites, desenvolvimento web, sites responsivos, SEO, design web, sites profissionais',
  alternates: { canonical: '/criacao-sites' },
  openGraph: {
    title: 'Criação de Sites Profissionais - Mattos Tech Solutions',
    description: 'Desenvolvimento de sites profissionais, responsivos e otimizados para SEO. Criamos sua presença digital com tecnologia de ponta e design moderno.',
    url: 'https://mattostechsolutions.com.br/criacao-sites',
  },
};

export default function CriacaoSitesPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Criação de Sites Profissionais"
        description="Sites e aplicações web rápidas, responsivas e otimizadas para SEO, com integração a CMS e foco em conversão."
        url="https://mattostechsolutions.com.br/criacao-sites"
        serviceType="Desenvolvimento Web"
      />
      <Header />
      <WebHero />
      <BackToServices />
      <WebDevSection />
      <WebUseCases />
      <WebMethodology />
      <WebStack />
      <WebFAQ />
      <Contact />
      <Footer />
    </main>
  );
}
