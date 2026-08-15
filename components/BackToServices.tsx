import Link from 'next/link';
import { ArrowLeft, CornerDownLeft } from 'lucide-react';

export default function BackToServices() {
  return (
    <div className="service-backbar">
      <div className="mts-container service-backbar__inner">
        <Link href="/servicos"><ArrowLeft /> Todas as soluções</Link>
        <span>MTS / SERVICE DETAIL <CornerDownLeft /></span>
      </div>
    </div>
  );
}
