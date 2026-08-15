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
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Consultoria Protheus e TOTVS',
  description: 'Consultoria em TOTVS Protheus para fiscal, TAF, TSS, SPED, integrações, performance, customizações e sustentação com governança.',
  path: '/consultoria-protheus',
  keywords: ['consultoria Protheus', 'TOTVS Protheus', 'TAF e TSS', 'integrações Protheus', 'ADVPL'],
});

export default function ConsultoriaProtheusPage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Consultoria em Protheus"
        description="Diagnóstico, conformidade fiscal, integrações, performance e sustentação do Protheus 12 com governança."
        url="/consultoria-protheus"
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
