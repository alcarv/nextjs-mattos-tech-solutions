'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { partners } from '@/lib/partners';

export default function PartnerBrands({ contained = false }: { contained?: boolean }) {
  const titleId = useId();
  const trackId = useId();
  const [paused, setPaused] = useState(false);

  return (
    <section id="parceiros" className={`partner-brands${contained ? ' partner-brands--contained' : ''}`} aria-labelledby={titleId}>
      <div className={contained ? undefined : 'mts-container'}>
        <div className="partner-brands__heading">
          <h2 id={titleId}>Empresas parceiras</h2>
          <button
            type="button"
            className="partner-brands__pause"
            aria-label={paused ? 'Retomar animação dos parceiros' : 'Pausar animação dos parceiros'}
            aria-controls={trackId}
            aria-pressed={paused}
            onClick={() => setPaused(value => !value)}
          >
            {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          </button>
        </div>
        <div className="partner-brands__viewport" role="region" aria-label="Logos das empresas parceiras" tabIndex={0}>
          <div id={trackId} className="partner-brands__track" data-paused={paused}>
            {[false, true].map(duplicate => (
              <ul key={String(duplicate)} className="partner-brands__list" aria-hidden={duplicate || undefined}>
                {partners.map(partner => (
                  <li key={partner.name} className={`partner-brands__logo partner-brands__logo--${partner.tone}`}>
                    <Image
                      className={'darkLogo' in partner ? 'partner-brands__image--light' : undefined}
                      src={partner.logo}
                      alt={duplicate ? '' : partner.name}
                      width={partner.width}
                      height={partner.height}
                      sizes={partner.tone === 'upbet' ? '260px' : '200px'}
                      loading="eager"
                    />
                    {'darkLogo' in partner && (
                      <Image className="partner-brands__image--dark" src={partner.darkLogo} alt={duplicate ? '' : partner.name} width={partner.width} height={partner.height} sizes="200px" loading="eager" />
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
