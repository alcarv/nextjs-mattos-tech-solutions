import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackToServices({ current }: { current: string }) {
  return (
    <nav className="service-backbar" aria-label="Breadcrumb">
      <div className="mts-container service-backbar__inner">
        <Link href="/servicos"><ArrowLeft aria-hidden="true" /> Serviços</Link>
        <span aria-current="page">{current}</span>
      </div>
    </nav>
  );
}
