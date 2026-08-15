'use client';

import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShareButton({ title, text }: { title: string; text: string }) {
  async function sharePost() {
    if (navigator.share) {
      await navigator.share({ title, text, url: window.location.href });
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="border-slate-600 text-slate-200 hover:bg-slate-800/70 hover:text-blue-300"
      onClick={() => void sharePost()}
    >
      <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
      Compartilhar
    </Button>
  );
}
