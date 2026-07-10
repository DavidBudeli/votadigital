type VotaDigitalLogoProps = {
  className?: string;
  markOnly?: boolean;
};

export function VotaDigitalLogo({ className, markOnly = false }: VotaDigitalLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-[#1B2A44] bg-[#0B1423] shadow-[0_16px_44px_rgba(0,0,0,0.28)]">
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          className="size-7"
          fill="none"
        >
          <path
            d="M8.5 10.5L17.4 29.5L32 10.5"
            stroke="url(#votadigital-check)"
            strokeWidth="4.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            data-logo-shimmer
            d="M17.3 29.2L31.6 10.8"
            stroke="rgba(246,248,255,0.7)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M10 26.5H14.5M26 13.5H31"
            stroke="rgba(168,179,199,0.55)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="votadigital-check" x1="8.5" x2="32" y1="10.5" y2="29.5">
              <stop stopColor="#2563FF" />
              <stop offset="1" stopColor="#00D084" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {!markOnly ? (
        <span className="font-heading text-[1.05rem] font-semibold leading-none text-[#F6F8FF]">
          Vota
          <span className="text-gradient">Digital</span>
        </span>
      ) : null}
    </span>
  );
}
