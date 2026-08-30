import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { getRelatedServices, type ServicePath } from '@/lib/services';

export default function RelatedServices({ currentPath }: { currentPath: ServicePath }) {
  const services = getRelatedServices(currentPath);

  return (
    <section className="border-y border-slate-800 bg-slate-950 py-20" aria-labelledby="related-services-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="service-eyebrow">SOLUÇÕES RELACIONADAS</span>
          <h2 id="related-services-title" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Conecte esta iniciativa às próximas camadas da operação
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Projetos de tecnologia raramente ficam isolados. Estas frentes costumam complementar o escopo e ajudam a transformar uma entrega pontual em uma base sustentável.
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-blue-300">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Atendimento consultivo em São Paulo e remoto em todo o Brasil.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.path}>
              <Link
                href={service.path}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-blue-500/70 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300">{service.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-300">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                  Conhecer a solução <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
