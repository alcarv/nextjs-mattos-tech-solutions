import Link from 'next/link';

export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="38" height="38" rx="11" fill="#0b1020" stroke="#233257" />
      <path d="M10 28V13l10 9 10-9v15" fill="none" stroke="#f8fafc" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M10 12.5h6.5L20 16l3.5-3.5H30" fill="none" stroke="#38bdf8" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="10" cy="28" r="2" fill="#2563eb" />
      <circle cx="30" cy="28" r="2" fill="#22d3ee" />
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
