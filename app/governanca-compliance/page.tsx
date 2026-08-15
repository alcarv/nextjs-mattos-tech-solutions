import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GovernancaSection from '@/components/services/GovernancaSection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Governança e Compliance em TI',
  description: 'Estruturamos políticas, controles, gestão de riscos e conformidade com LGPD e ISO 27001 para fortalecer a segurança e a governança de TI.',
  path: '/governanca-compliance',
  keywords: ['governança de TI', 'compliance em TI', 'LGPD', 'ISO 27001', 'gestão de riscos de TI'],
});

export default function GovernancaCompliancePage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Governança e Compliance em TI"
        description="Políticas, controles, conformidade (LGPD/ISO 27001) e gestão de riscos em TI, com auditoria e evidências."
        url="/governanca-compliance"
        serviceType="Governança e Compliance"
      />
      <Header />
      <Hero />
      <BackToServices />
      <GovernancaSection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
