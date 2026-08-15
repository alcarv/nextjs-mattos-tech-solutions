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
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Criação de Sites Profissionais',
  description: 'Criamos sites profissionais, rápidos, responsivos e preparados para SEO, com conteúdo claro, integrações e foco em geração de oportunidades.',
  path: '/criacao-sites',
  keywords: ['criação de sites profissionais', 'desenvolvimento de sites', 'site otimizado para SEO', 'desenvolvimento web'],
});

export default function CriacaoSitesPage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="Criação de Sites Profissionais"
        description="Sites e aplicações web rápidas, responsivas e otimizadas para SEO, com integração a CMS e foco em conversão."
        url="/criacao-sites"
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
