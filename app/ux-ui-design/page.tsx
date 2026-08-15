import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import UXUISection from '@/components/services/UXUISection';
import ServiceJsonLd from '@/components/ServiceJsonLd';
import BackToServices from '@/components/BackToServices';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'UX/UI Design e Experiência do Usuário',
  description: 'Pesquisa, arquitetura de informação, protótipos, testes de usabilidade e design systems para criar interfaces claras e orientadas à conversão.',
  path: '/ux-ui-design',
  keywords: ['UX/UI design', 'design de interfaces', 'testes de usabilidade', 'prototipagem', 'design system'],
});

export default function UxUiDesignPage() {
  return (
    <main className="mts-service-page min-h-screen">
      <ServiceJsonLd
        name="UX/UI Design"
        description="Pesquisa com usuários, protótipos navegáveis, design system e UI com foco em conversão e usabilidade."
        url="/ux-ui-design"
        serviceType="UX/UI Design"
      />
      <Header />
      <Hero />
      <BackToServices />
      <UXUISection />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
