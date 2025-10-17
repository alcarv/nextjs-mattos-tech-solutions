import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ConsultoriaTISection from '@/components/services/ConsultoriaTISection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';

export const metadata: Metadata = {
  title: 'Consultoria em TI e Planejamento Estratégico - Mattos Tech Solutions',
  description: 'Consultoria especializada em TI para otimizar sua infraestrutura, reduzir custos e impulsionar o crescimento do seu negócio.',
  keywords: 'consultoria TI, planejamento estratégico, infraestrutura TI, otimização processos, consultoria tecnológica',
  alternates: { canonical: '/consultoria-ti' },
  openGraph: {
    title: 'Consultoria em TI e Planejamento Estratégico - Mattos Tech Solutions',
    description: 'Consultoria especializada em TI para otimizar sua infraestrutura, reduzir custos e impulsionar o crescimento do seu negócio.',
    url: 'https://mattostechsolutions.com.br/consultoria-ti',
  },
};

export default function ConsultoriaTIPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Consultoria em TI e Planejamento Estratégico"
        description="Alinhamento estratégico, roadmap e governança para executar projetos de TI com foco em resultados e redução de custos."
        url="https://mattostechsolutions.com.br/consultoria-ti"
        serviceType="Consultoria em TI"
      />
      <Header />
      <Hero />
      <BackToServices />
      <ConsultoriaTISection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
