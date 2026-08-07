type MTSCoreProps = {
  id: 'hero' | 'story';
  className?: string;
  story?: boolean;
};

const fragments = [
  { x: 92, y: 118, label: 'PLANILHA', className: 'fragment-a' },
  { x: 428, y: 104, label: 'SISTEMA', className: 'fragment-b' },
  { x: 68, y: 410, label: 'DADOS', className: 'fragment-c' },
  { x: 434, y: 432, label: 'PROCESSO', className: 'fragment-d' },
];

export default function MTSCore({ id, className = '', story = false }: MTSCoreProps) {
  const blueGradient = `${id}-blue-gradient`;
  const cyanGradient = `${id}-cyan-gradient`;
  const glow = `${id}-glow`;

  return (
    <div className={`mts-core ${story ? 'mts-core--story' : ''} ${className}`} aria-hidden="true">
      <div className="mts-core__halo" />
      <svg viewBox="0 0 600 600" fill="none">
        <defs>
          <linearGradient id={blueGradient} x1="124" y1="94" x2="474" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="0.55" stopColor="#2563eb" />
            <stop offset="1" stopColor="#172554" />
          </linearGradient>
          <linearGradient id={cyanGradient} x1="160" y1="124" x2="440" y2="478" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0f2fe" />
            <stop offset="0.45" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
          <filter id={glow} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="core-grid" opacity=".28">
          {Array.from({ length: 9 }).map((_, index) => (
            <path key={`v-${index}`} d={`M${100 + index * 50} 76V524`} stroke="#334155" strokeWidth="0.6" />
          ))}
          {Array.from({ length: 9 }).map((_, index) => (
            <path key={`h-${index}`} d={`M76 ${100 + index * 50}H524`} stroke="#334155" strokeWidth="0.6" />
          ))}
        </g>

        <g className="core-crosshair" stroke="#64748b" strokeWidth="0.8" opacity=".5">
          <path d="M300 48V126M300 474V552M48 300H126M474 300H552" />
          <circle cx="300" cy="300" r="252" strokeDasharray="2 12" />
        </g>

        <g className="story-connectors" strokeLinecap="round">
          <path className="story-connector" pathLength="1" d="M123 146C178 176 208 214 249 263" stroke={`url(#${cyanGradient})`} />
          <path className="story-connector" pathLength="1" d="M473 138C421 169 390 205 350 259" stroke={`url(#${cyanGradient})`} />
          <path className="story-connector" pathLength="1" d="M110 435C174 416 215 384 253 344" stroke={`url(#${cyanGradient})`} />
          <path className="story-connector" pathLength="1" d="M480 454C417 422 387 382 350 343" stroke={`url(#${cyanGradient})`} />
        </g>

        <g className="core-orbits">
          <ellipse cx="300" cy="300" rx="206" ry="112" transform="rotate(-18 300 300)" stroke="#2563eb" strokeWidth="1.1" strokeDasharray="5 9" opacity=".6" />
          <ellipse cx="300" cy="300" rx="207" ry="112" transform="rotate(62 300 300)" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="2 13" opacity=".45" />
          <circle cx="300" cy="300" r="184" stroke="#1e3a8a" strokeWidth="1" opacity=".65" />
        </g>

        <g className="infra-frame" opacity={story ? 0 : 0.45}>
          <path d="M181 165H419L486 300l-67 135H181L114 300l67-135Z" stroke="#334155" strokeWidth="1" />
          {[
            [181, 165], [419, 165], [486, 300], [419, 435], [181, 435], [114, 300],
          ].map(([cx, cy], index) => (
            <g key={index} className="infra-node">
              <circle cx={cx} cy={cy} r="7" fill="#07101f" stroke="#22d3ee" />
              <circle cx={cx} cy={cy} r="2" fill="#67e8f9" />
            </g>
          ))}
        </g>

        <g className="core-center">
          <circle cx="300" cy="300" r="114" fill="#050816" stroke={`url(#${blueGradient})`} strokeWidth="1.5" />
          <circle className="core-center__pulse" cx="300" cy="300" r="94" stroke="#2563eb" strokeWidth="1" opacity=".6" />
          <path d="M300 209 379 254v92l-79 45-79-45v-92l79-45Z" fill="#07142a" stroke={`url(#${blueGradient})`} strokeWidth="2" />
          <path d="m300 235 56 32v66l-56 32-56-32v-66l56-32Z" fill="#081936" stroke="#38bdf8" strokeWidth="1.3" opacity=".9" />
          <path d="M271 325v-50l29 27 29-27v50" stroke="#f8fafc" strokeWidth="6" strokeLinejoin="round" />
          <path d="M271 270h18l11 11 11-11h18" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" />
          <circle cx="271" cy="325" r="4" fill="#2563eb" filter={`url(#${glow})`} />
          <circle cx="329" cy="325" r="4" fill="#22d3ee" filter={`url(#${glow})`} />
        </g>

        <g className="ai-layer" opacity={story ? 0 : 0.5}>
          <circle cx="300" cy="300" r="140" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="1 9" />
          <path d="M300 153v24M300 423v24M153 300h24M423 300h24" stroke="#67e8f9" strokeWidth="2" />
        </g>

        {fragments.map((fragment) => (
          <g
            key={fragment.label}
            transform={`translate(${fragment.x} ${fragment.y})`}
          >
            <g className={`core-fragment ${fragment.className}`}>
              <rect width="86" height="34" rx="5" fill="#07101f" stroke="#263b62" />
              <circle cx="12" cy="11" r="2.5" fill="#22d3ee" />
              <path d="M21 11h50M11 22h64" stroke="#35517e" strokeWidth="1" />
              <text x="43" y="29" textAnchor="middle" fill="#94a3b8" fontSize="6.5" letterSpacing="1.2">
                {fragment.label}
              </text>
            </g>
          </g>
        ))}

        <g className="core-particles" fill="#93c5fd">
          <circle cx="166" cy="219" r="2" />
          <circle cx="440" cy="241" r="1.5" />
          <circle cx="393" cy="464" r="2" />
          <circle cx="139" cy="354" r="1.5" />
          <circle cx="332" cy="92" r="1.5" />
        </g>
      </svg>
      <div className="mts-core__label">
        <span>CORE / MTS</span>
        <span className="mts-status"><i /> ONLINE</span>
      </div>
    </div>
  );
}
