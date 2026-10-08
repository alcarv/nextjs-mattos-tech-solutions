import { ArrowUpRight } from 'lucide-react';
import { projectScopes } from '@/lib/service-scope';
import { serviceCatalog, type ServicePath } from '@/lib/services';
import { serviceContactLabels, whatsappLink } from '@/lib/contact';

export default function ProjectScope({ path }: { path: ServicePath }) {
  const scope = projectScopes[path];
  const service = serviceCatalog.find(item => item.path === path);
  if (!scope || !service) return null;

  return (
    <section className="value-section project-scope" aria-labelledby="project-scope-title">
      <div className="mts-container">
        <div className="value-heading">
          <span className="value-eyebrow">ESCOPO E INVESTIMENTO</span>
          <h2 id="project-scope-title">Qual entrega faz sentido para começar?</h2>
          <p>{scope.introduction}</p>
        </div>
        <div className="value-columns">
          {scope.options.map(option => (
            <article className="value-card" key={option.title}>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </article>
          ))}
        </div>
        <div className="project-scope__quote">
          <div>
            <h3>O que precisamos entender para estimar seu projeto</h3>
            <ul>{scope.quoteInputs.map(input => <li key={input}>{input}</li>)}</ul>
          </div>
          <div>
            <h3>O que muda o investimento depois da entrega</h3>
            <p>{scope.recurringCosts}</p>
            <a className="mts-button mts-button--primary" href={whatsappLink(`Olá! Quero avaliar o escopo e o investimento em ${service.name.toLowerCase()} para minha empresa.`)} target="_blank" rel="noopener noreferrer" data-service-interest={path} data-contact-location="service_scope">
              {serviceContactLabels[path]} <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
