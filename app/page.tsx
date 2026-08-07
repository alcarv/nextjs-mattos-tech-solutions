import type { Metadata } from 'next';
import HomeLanding from '@/components/home/HomeLanding';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const homeDescription =
  'Sites profissionais, software sob medida, automação empresarial, Inteligência Artificial, cloud e DevOps para empresas que querem conectar processos e crescer com segurança.';

export const metadata: Metadata = {
  title: 'Software sob medida, IA, automação e cloud para empresas',
  description: homeDescription,
  keywords: [
    'desenvolvimento de software sob medida',
    'criação de sites profissionais',
    'automação empresarial',
    'inteligência artificial para empresas',
    'consultoria cloud e DevOps',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tecnologia sob medida para transformar operações em crescimento',
    description: homeDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Home() {
  return <HomeLanding />;
}
