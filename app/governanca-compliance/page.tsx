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

export const metadata: Metadata = {
  title: 'Governança e Compliance em TI - Mattos Tech Solutions',
  description:
    'Implementamos governança, conformidade (LGPD, ISO 27001) e políticas de segurança em TI para reduzir riscos e aumentar a confiança do seu negócio.',
  keywords:
    'governança de TI, compliance, LGPD, ISO 27001, segurança da informação, políticas de TI, gestão de riscos',
  alternates: { canonical: '/governanca-compliance' },
  openGraph: {
    title: 'Governança e Compliance em TI',
    description:
      'Governança, conformidade e segurança da informação para reduzir riscos e aumentar a confiança.',
    url: 'https://mattostechsolutions.com.br/governanca-compliance',
    type: 'website',
  },
};

export default function GovernancaCompliancePage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Governança e Compliance em TI"
        description="Políticas, controles, conformidade (LGPD/ISO 27001) e gestão de riscos em TI, com auditoria e evidências."
        url="https://mattostechsolutions.com.br/governanca-compliance"
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
