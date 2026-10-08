import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { getArticleService } from '@/lib/article-services';
import { serviceContactLabels, whatsappLink } from '@/lib/contact';

type ArticleServiceCTAProps = {
  article: { slug: string; title: string; tags?: readonly string[] };
  placement: 'intro' | 'end';
};

export default function ArticleServiceCTA({ article, placement }: ArticleServiceCTAProps) {
  const service = getArticleService(article);
  const href = whatsappLink(`Olá! Li o artigo "${article.title}". ${service ? `Quero conversar sobre ${service.name.toLowerCase()} para minha empresa.` : 'Quero entender como aplicar esse assunto na minha empresa.'}`);

  return (
    <aside className={`article-service-cta article-service-cta--${placement}`} aria-label="Aplicar este conteúdo na sua empresa">
      <div>
        <span className="value-eyebrow">DO CONTEÚDO AO SEU PROJETO</span>
        <h2>{placement === 'intro' ? 'Quer aplicar isso na sua empresa?' : 'Vamos avaliar o próximo passo para sua empresa?'}</h2>
        <p>{service ? `Converse sobre seu cenário de ${service.name.toLowerCase()} e conheça as entregas antes de pedir uma proposta.` : 'Conte seu objetivo e as dificuldades atuais para entender qual serviço faz sentido.'}</p>
      </div>
      <div className="article-service-cta__actions">
        <a className="mts-button mts-button--primary" href={href} target="_blank" rel="noopener noreferrer" data-service-interest={service?.path} data-contact-location={`article_${placement}`}>
          <MessageCircle aria-hidden="true" />{service ? serviceContactLabels[service.path] : 'Conversar pelo WhatsApp'}
        </a>
        <Link className="value-link" href={service?.path || '/servicos'} data-contact-location={`article_${placement}`}>
          {service ? `Conhecer ${service.name.toLowerCase()}` : 'Comparar os serviços'} <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
