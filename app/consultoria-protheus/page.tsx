import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import ProtheusHero from '@/components/services/ProtheusHero';
import ProtheusSection from '@/components/services/ProtheusSection';
import ProtheusUseCases from '@/components/services/ProtheusUseCases';
import ProtheusTechStack from '@/components/services/ProtheusTechStack';
import ProtheusFAQ from '@/components/services/ProtheusFAQ';

export const metadata: Metadata = {
  title: 'Consultoria em Protheus – Fiscal, Integrações e Performance | Mattos Tech Solutions',
  description:
    'Consultoria especializada em TOTVS Protheus para conformidade fiscal, performance, integrações e customizações seguras. Assessment, quick wins e operação assistida.',
  keywords:
    'consultoria protheus, totvs protheus, TAF, TSS, SPED, nf-e, integrações protheus, performance protheus, advpl',
  alternates: { canonical: '/consultoria-protheus' },
  openGraph: {
    title: 'Consultoria em Protheus – Fiscal, Integrações e Performance',
    description:
      'Assessment, ajustes fiscais, integrações e customizações seguras para Protheus 12 com governança e operação contínua.',
    url: 'https://mattostechsolutions.com.br/consultoria-protheus',
    type: 'website',
  },
};

export default function ConsultoriaProtheusPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="Consultoria em Protheus"
        description="Diagnóstico, conformidade fiscal, integrações, performance e sustentação do Protheus 12 com governança."
        url="https://mattostechsolutions.com.br/consultoria-protheus"
        serviceType="Consultoria em Protheus"
      />
      <Header />
      <ProtheusHero />
      <BackToServices />
      <ProtheusSection />
      <ProtheusUseCases />
      <ProtheusTechStack />
      <ProtheusFAQ />
      <Contact />
      <Footer />
    </main>
  );
}
