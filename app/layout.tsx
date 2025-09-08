import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { SITE_URL, SITE_NAME, organizationJsonLd, websiteJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Consultoria e Desenvolvimento em TI`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Maximize o potencial da sua empresa com nossa consultoria especializada em TI e soluções de desenvolvimento personalizadas. Serviços de consultoria, desenvolvimento web, mobile e muito mais.',
  keywords:
    'consultoria TI, desenvolvimento software, desenvolvimento web, governança compliance, banco dados analytics, desenvolvimento mobile, migração nuvem, avaliações TI, UX UI design',
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} – Consultoria e Desenvolvimento em TI`,
    description:
      'Maximize o potencial da sua empresa com nossa consultoria especializada em TI e soluções de desenvolvimento personalizadas.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/favicon.svg`,
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} – Consultoria e Desenvolvimento em TI`,
    description:
      'Maximize o potencial da sua empresa com nossa consultoria especializada em TI e soluções de desenvolvimento personalizadas.',
    images: [`${SITE_URL}/favicon.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Canonical is handled via Next metadata alternates */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NHK45VTT');
          `}
        </Script>
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHK45VTT"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        {children}

        <FloatingWhatsApp />

        <Script
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/e1e8582b-eb55-4673-9c77-04989c8c9b1c-loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
