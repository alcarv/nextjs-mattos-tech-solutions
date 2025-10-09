import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BackToServices() {
  return (
    <div className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/#servicos">
          <Button
            variant="outline"
            className="border-blue-500 text-blue-300 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-500/20 hover:text-blue-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Serviços
          </Button>
        </Link>
      </div>
    </div>
  );
}
