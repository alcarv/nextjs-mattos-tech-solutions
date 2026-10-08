'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getContactService } from '@/lib/contact';
import { getConversionLocation, trackConversion } from '@/lib/conversion-events';

export default function ConversionTracking() {
  const pathname = usePathname();
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a');
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      const service = getContactService(anchor.dataset.serviceInterest || '')?.path || getContactService(pathname)?.path || 'geral';
      const location = getConversionLocation(anchor.dataset.contactLocation);
      if (url.hostname === 'wa.me') trackConversion('contact_click', 'whatsapp', service, location);
      else if (url.protocol === 'mailto:') trackConversion('contact_click', 'email', service, location);
      else if (url.hostname === 'cal.com') trackConversion('contact_click', 'schedule', service, location);
      else if (url.origin === window.location.origin) {
        const destination = getContactService(url.pathname);
        if (destination && url.pathname !== pathname) trackConversion('service_interest', 'service', destination.path, location);
        else if (['#contato', '#contact', '#formulario'].includes(url.hash)) trackConversion('contact_click', 'form', service, location);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [pathname]);
  return null;
}
