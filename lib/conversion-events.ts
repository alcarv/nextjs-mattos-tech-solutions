export type ConversionEvent = 'contact_click' | 'contact_form_start' | 'contact_form_error' | 'generate_lead' | 'service_interest';
export type ConversionChannel = 'whatsapp' | 'email' | 'form' | 'schedule' | 'service';

declare global {
  interface Window { dataLayer?: Record<string, unknown>[]; }
}

// Send only predefined labels. Never send form values, full URLs or query strings.
export function trackConversion(event: ConversionEvent, channel: ConversionChannel, service = 'geral') {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, contact_channel: channel, service_interest: service });
}
