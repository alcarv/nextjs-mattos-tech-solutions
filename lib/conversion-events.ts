export type ConversionEvent = 'contact_click' | 'contact_form_start' | 'contact_form_error' | 'generate_lead' | 'service_interest';
export type ConversionChannel = 'whatsapp' | 'email' | 'form' | 'schedule' | 'service';
export const conversionLocations = ['general', 'home_hero', 'service_hero', 'service_scope', 'article_intro', 'article_end', 'header', 'footer', 'floating', 'form'] as const;
export type ConversionLocation = (typeof conversionLocations)[number];

export function getConversionLocation(value?: string): ConversionLocation {
  return conversionLocations.find(location => location === value) || 'general';
}

declare global {
  interface Window { dataLayer?: Record<string, unknown>[]; }
}

// Send only predefined labels. Never send form values, full URLs or query strings.
export function trackConversion(event: ConversionEvent, channel: ConversionChannel, service = 'geral', location: ConversionLocation = 'general') {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, contact_channel: channel, service_interest: service, contact_location: location });
}
