import Link from 'next/link';

export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="42" height="42" rx="10" fill="#07101f" stroke="#29436f" />
      <path
        d="M10.5 31V13h4.2L22 20.7 29.3 13h4.2v18h-3.8V18.6L22 26.5l-7.7-7.9V31h-3.8Z"
        fill="#f3f7fc"
      />
      <path d="M10.5 10.5h8" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="33.5" r="1.7" fill="#22d3ee" />
    </svg>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="mts-brand">
      <BrandMark className="mts-brand__mark" />
      {!compact && (
        <span className="mts-brand__name">
          MATTOS <span>TECH SOLUTIONS</span>
        </span>
      )}
    </Link>
  );
}
