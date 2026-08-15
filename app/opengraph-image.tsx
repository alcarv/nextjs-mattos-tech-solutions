import { ImageResponse } from 'next/og';

export const alt = 'Mattos Tech Solutions — software, automação, IA e cloud';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#050816',
          color: '#f8fafc',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'radial-gradient(circle at 82% 22%, rgba(37,99,235,.42), transparent 35%), radial-gradient(circle at 18% 88%, rgba(34,211,238,.2), transparent 30%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 28,
            display: 'flex',
            border: '1px solid rgba(148,163,184,.22)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '72px 82px',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 68,
                height: 68,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #315b9f',
                borderRadius: 16,
                background: '#07101f',
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              MTS
            </div>
            <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
              MATTOS&nbsp;<span style={{ color: '#60a5fa' }}>TECH SOLUTIONS</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 920 }}>
            <div style={{ display: 'flex', color: '#67e8f9', fontSize: 20, letterSpacing: 4 }}>
              ESTRATÉGIA • SOFTWARE • IA • CLOUD
            </div>
            <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, lineHeight: 1.06, letterSpacing: -2 }}>
              Tecnologia sob medida para operações que precisam crescer.
            </div>
          </div>

          <div style={{ display: 'flex', color: '#94a3b8', fontSize: 22 }}>
            São Paulo • Atendimento em todo o Brasil
          </div>
        </div>
      </div>
    ),
    size,
  );
}
