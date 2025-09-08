import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WebDevSection from '@/components/services/WebDevSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';

export const metadata: Metadata = {
  title: 'Criação de Sites Profissionais - Mattos Tech Solutions',
  description: 'Desenvolvimento de sites profissionais, responsivos e otimizados para SEO. Criamos sua presença digital com tecnologia de ponta e design moderno.',
  keywords: 'criação de sites, desenvolvimento web, sites responsivos, SEO, design web, sites profissionais',
  alternates: { canonical: '/criacao-sites' },
  openGraph: {
    title: 'Criação de Sites Profissionais - Mattos Tech Solutions',
    description: 'Desenvolvimento de sites profissionais, responsivos e otimizados para SEO. Criamos sua presença digital com tecnologia de ponta e design moderno.',
    url: 'https://mattostechsolutions.com/criacao-sites',
  },
};

export default function CriacaoSitesPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Criação de Sites Profissionais"
        description="Sites e aplicações web rápidas, responsivas e otimizadas para SEO, com integração a CMS e foco em conversão."
        url="https://mattostechsolutions.com/criacao-sites"
        serviceType="Desenvolvimento Web"
      />
      <Header />
      <Hero />
      <BackToServices />
      <WebDevSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
