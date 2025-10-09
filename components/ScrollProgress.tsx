'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export default function ScrollProgress({ className }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(Math.min(Math.max(percentage, 0), 100));
    };

    const opts: AddEventListenerOptions = { passive: true };
    window.addEventListener('scroll', handleScroll, opts);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-[60] h-1 bg-transparent',
        'transition-opacity duration-300',
        progress > 0 ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      <div
        className="h-full w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
        style={{ width: `${progress}%`, transition: 'width 120ms ease-out' }}
      />
    </div>
  );
}
