'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getContactService } from '@/lib/contact';
import { trackConversion } from '@/lib/conversion-events';

export default function ConversionTracking() {
  const pathname = usePathname();
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a');
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      const service = getContactService(pathname)?.path || 'geral';
      if (url.hostname === 'wa.me') trackConversion('contact_click', 'whatsapp', service);
      else if (url.protocol === 'mailto:') trackConversion('contact_click', 'email', service);
      else if (url.hostname === 'cal.com') trackConversion('contact_click', 'schedule', service);
      else if (url.origin === window.location.origin && ['#contato', '#contact', '#formulario'].includes(url.hash)) trackConversion('contact_click', 'form', service);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [pathname]);
  return null;
}
