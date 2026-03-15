type ApekaLogoProps = {
  size?: number;
  className?: string;
};

export function ApekaLogo({ size = 24, className }: ApekaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Apeka logo"
    >
      <title>Apeka logo</title>
      <rect x="4" y="4" width="56" height="56" rx="16" fill="#ECFDF5" />
      <path d="M32 14L49 44H15L32 14Z" stroke="#10B981" strokeWidth="4" strokeLinejoin="round" />
      <path d="M32 22L41.5 39H22.5L32 22Z" fill="#34D399" />
      <path d="M24 34H40" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
