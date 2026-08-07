'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  CloudCog,
  DatabaseZap,
  Lightbulb,
  Palette,
  ScanSearch,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { campaignConfigs, getDefaultConfig } from '@/lib/compaignConfigs';

const visualConfigs: Record<string, { label: string; icon: LucideIcon; nodes: string[] }> = {
  'consultoria-ti': { label: 'CONSULTORIA / ESTRATÉGIA', icon: Lightbulb, nodes: ['CENÁRIO', 'PRIORIDADES', 'ROADMAP'] },
  'migracao-cloud': { label: 'CLOUD / INFRAESTRUTURA', icon: CloudCog, nodes: ['ASSESSMENT', 'MIGRAÇÃO', 'OPERAÇÃO'] },
  'apps-mobile': { label: 'MOBILE / PRODUTO', icon: Smartphone, nodes: ['EXPERIÊNCIA', 'INTEGRAÇÃO', 'EVOLUÇÃO'] },
  'solucoes-ecommerce': { label: 'COMMERCE / OPERAÇÃO', icon: ShoppingBag, nodes: ['CATÁLOGO', 'PAGAMENTO', 'PEDIDO'] },
  'governanca-compliance': { label: 'GOVERNANÇA / RISCO', icon: ShieldCheck, nodes: ['POLÍTICAS', 'CONTROLES', 'EVIDÊNCIAS'] },
  'banco-dados-analytics': { label: 'DATA / ANALYTICS', icon: DatabaseZap, nodes: ['ORIGEM', 'CONTEXTO', 'DECISÃO'] },
  'avaliacoes-ti': { label: 'ASSESSMENT / ROADMAP', icon: ScanSearch, nodes: ['DIAGNÓSTICO', 'RISCO', 'PLANO'] },
  'ux-ui-design': { label: 'DESIGN / EXPERIÊNCIA', icon: Palette, nodes: ['PESQUISA', 'PROTÓTIPO', 'VALIDAÇÃO'] },
};

export default function Hero() {
  const pathname = usePathname();
  const route = pathname.slice(1);
  const config = campaignConfigs[route as keyof typeof campaignConfigs] || getDefaultConfig();
  const visual = visualConfigs[route] || visualConfigs['consultoria-ti'];
  const VisualIcon = visual.icon;

  return (
    <section className="service-generic-hero">
      <div className="service-generic-hero__grid" />
      <div className="mts-container service-generic-hero__inner">
        <div className="service-generic-hero__copy">
          <span className="service-eyebrow"><i /> {visual.label}</span>
          <h1>{config.heroTitle}</h1>
          <p>{config.heroSubtitle}</p>
          <div className="service-generic-hero__actions">
            <Link href="#contact" className="mts-button mts-button--primary">
              {config.ctaText} <ArrowUpRight />
            </Link>
            <Link href="#detalhes-servico" className="mts-button mts-button--outline">
              Entender a solução <ArrowDown />
            </Link>
          </div>
        </div>

        <div className="service-blueprint" aria-hidden="true">
          <div className="service-blueprint__meta"><span>SERVICE BLUEPRINT</span><span>01 / 03</span></div>
          <div className="service-blueprint__grid" />
          <div className="service-blueprint__orbit orbit-one" />
          <div className="service-blueprint__orbit orbit-two" />
          <div className="service-blueprint__orbit orbit-three" />
          <div className="service-blueprint__core"><VisualIcon /></div>
          <svg viewBox="0 0 560 460">
            <path d="M66 115C174 115 182 214 280 230S390 115 494 115" />
            <path d="M66 345C168 345 185 247 280 230S395 345 494 345" />
          </svg>
          {visual.nodes.map((node, index) => (
            <span key={node} className={`service-blueprint__node node-${index + 1}`}>{node}</span>
          ))}
          <div className="service-blueprint__status"><i /> ARCHITECTURE READY</div>
        </div>
      </div>
      <a className="service-generic-hero__scroll" href="#detalhes-servico"><span>EXPLORAR</span><ArrowDown /></a>
    </section>
  );
}
