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
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Desenvolvimento de Software Sob Medida',
  description: 'Desenvolvemos sistemas web sob medida, APIs, integrações e automações para conectar processos, reduzir trabalho manual e sustentar o crescimento.',
  path: '/criacao-software',
  keywords: ['desenvolvimento de software sob medida', 'sistemas personalizados', 'APIs e integrações', 'automação de processos'],
});

export default function CriacaoSoftwarePage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Desenvolvimento de Software Personalizado"
        description="Sistemas web sob medida, APIs e integrações, automação de processos e arquitetura cloud‑native com foco em segurança e qualidade."
        url="/criacao-software"
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
