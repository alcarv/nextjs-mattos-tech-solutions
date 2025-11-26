import { Database, FileCode, CloudCog, Cable, ShieldHalf, Server } from 'lucide-react';
import Reveal from '@/components/Reveal';

const tools = [
  {
    icon: Server,
    title: 'Ambiente Protheus',
    items: 'Protheus 12, AppServer, SmartClient e gestão de dicionário/deltas com versionamento.',
  },
  {
    icon: Database,
    title: 'Bancos e infraestrutura',
    items: 'SQL Server, Oracle ou PostgreSQL com tuning, rotinas de backup e alta disponibilidade.',
  },
  {
    icon: FileCode,
    title: 'Customizações e relatórios',
    items: 'ADVPL/4GL, TOTVS API REST, eventos, fórmulas, relatórios gerenciais e Portal Web.',
  },
  {
    icon: Cable,
    title: 'Integrações',
    items: 'REST/JSON, mensageria, ETL, conectores para CRM, e-commerce, logística e BI.',
  },
  {
    icon: CloudCog,
    title: 'DevOps e automação',
    items: 'Controle de versões, ambientes de teste/homologação, pipelines de publicação e jobs monitorados.',
  },
  {
    icon: ShieldHalf,
    title: 'Governança e segurança',
    items: 'Segregação de perfis, trilhas de auditoria, LGPD e gestão de riscos em mudanças.',
  },
];

export default function ProtheusTechStack() {
  return (
    <section className="bg-slate-950/95 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1 text-sm font-semibold text-blue-300">
            Stack e integrações
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tecnologias e práticas que dominamos</h2>
          <p className="mt-3 text-lg text-slate-300">
            Selecionamos ferramentas conforme seu cenário: compliance fiscal, estabilidade, integrações e evolução contínua do ERP.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tools.map((tool, index) => (
            <Reveal
              key={tool.title}
              delay={index * 70}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                  <tool.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{tool.items}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
