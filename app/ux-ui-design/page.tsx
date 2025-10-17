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

export const metadata: Metadata = {
  title: 'UX/UI Design - Experiências que Convertem - Mattos Tech Solutions',
  description:
    'Interfaces claras, protótipos navegáveis, testes de usabilidade e design system para elevar conversão e satisfação dos usuários.',
  keywords:
    'UX, UI, design de interfaces, prototipagem, testes de usabilidade, design system, experiência do usuário',
  alternates: { canonical: '/ux-ui-design' },
  openGraph: {
    title: 'UX/UI Design – Experiências que Convertem',
    description:
      'UX/UI com foco em clareza, usabilidade e resultados de negócio.',
    url: 'https://mattostechsolutions.com.br/ux-ui-design',
    type: 'website',
  },
};

export default function UxUiDesignPage() {
  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name="UX/UI Design"
        description="Pesquisa com usuários, protótipos navegáveis, design system e UI com foco em conversão e usabilidade."
        url="https://mattostechsolutions.com.br/ux-ui-design"
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
