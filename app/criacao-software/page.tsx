import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import SoftwareHero from '@/components/services/SoftwareHero';
import SoftwareSection from '@/components/services/SoftwareSection';
import SoftwareUseCases from '@/components/services/SoftwareUseCases';
import SoftwareDelivery from '@/components/services/SoftwareDelivery';
import SoftwareTechStack from '@/components/services/SoftwareTechStack';
import SoftwareFAQ from '@/components/services/SoftwareFAQ';

export const metadata: Metadata = {
  title: 'Desenvolvimento de Software Personalizado - Mattos Tech Solutions',
  description: 'Criamos software sob medida para sua empresa. Sistemas personalizados, APIs, automação de processos e soluções escaláveis.',
  keywords: 'desenvolvimento software, sistemas personalizados, APIs, automação, software sob medida, desenvolvimento personalizado',
  alternates: { canonical: '/criacao-software' },
  openGraph: {
    title: 'Desenvolvimento de Software Personalizado - Mattos Tech Solutions',
    description: 'Criamos software sob medida para sua empresa. Sistemas personalizados, APIs, automação de processos e soluções escaláveis.',
    url: 'https://mattostechsolutions.com.br/criacao-software',
  },
};

export default function CriacaoSoftwarePage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Desenvolvimento de Software Personalizado"
        description="Sistemas web sob medida, APIs e integrações, automação de processos e arquitetura cloud‑native com foco em segurança e qualidade."
        url="https://mattostechsolutions.com.br/criacao-software"
        serviceType="Desenvolvimento de Software"
      />
      <Header />
      <SoftwareHero />
      <BackToServices />
      <SoftwareSection />
      <SoftwareUseCases />
      <SoftwareDelivery />
      <SoftwareTechStack />
      <SoftwareFAQ />
      <Contact />
      <Footer />
    </main>
  );
}
