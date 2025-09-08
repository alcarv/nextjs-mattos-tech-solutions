import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SoftwareSection from '@/components/services/SoftwareSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Software Personalizado - Mattos Tech Solutions',
  description: 'Criamos software sob medida para sua empresa. Sistemas personalizados, APIs, automação de processos e soluções escaláveis.',
  keywords: 'desenvolvimento software, sistemas personalizados, APIs, automação, software sob medida, desenvolvimento personalizado',
  alternates: { canonical: '/criacao-software' },
  openGraph: {
    title: 'Desenvolvimento de Software Personalizado - Mattos Tech Solutions',
    description: 'Criamos software sob medida para sua empresa. Sistemas personalizados, APIs, automação de processos e soluções escaláveis.',
    url: 'https://mattostechsolutions.com/criacao-software',
  },
};

export default function CriacaoSoftwarePage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Desenvolvimento de Software Personalizado"
        description="Sistemas web sob medida, APIs e integrações, automação de processos e arquitetura cloud‑native com foco em segurança e qualidade."
        url="https://mattostechsolutions.com/criacao-software"
        serviceType="Desenvolvimento de Software"
      />
      <Header />
      <Hero />
      <BackToServices />
      <SoftwareSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
