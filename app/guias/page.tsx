import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DecisionGuides from '@/components/DecisionGuides';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({title: 'Guias para Investir em Sites, Software e Automação', description: 'Compare opções, entenda o orçamento de um site e escolha o primeiro processo para automatizar. Guias da Mattos Tech Solutions para decisões de tecnologia.', path: '/guias'});

export default function GuidesPage() {
  return <div className="mts-service-page"><Header /><main id="conteudo"><section className="value-section guide-hero"><div className="mts-container value-heading"><span className="value-eyebrow">GUIAS PARA DECIDIR</span><h1>Seu investimento em tecnologia começa com boas perguntas.</h1><p>Conteúdo para quem está comparando caminhos e quer entender o que faz sentido para a empresa antes de contratar.</p></div></section><DecisionGuides /></main><Footer /></div>;
}
