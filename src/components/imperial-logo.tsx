export function ImperialCrown({ className = "w-10 h-10", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke={color} strokeWidth="1.6" fill="none">
        {/* base band */}
        <rect x="14" y="70" width="92" height="6" />
        <rect x="10" y="78" width="100" height="4" />
        {/* three spires */}
        <path d="M20 70 L28 32 L40 58 L52 24 L60 60 L68 24 L80 58 L92 32 L100 70" />
        {/* orbs on spires */}
        <circle cx="28" cy="30" r="3" fill={color} />
        <circle cx="52" cy="22" r="3" fill={color} />
        <circle cx="60" cy="16" r="3.5" fill={color} />
        <circle cx="68" cy="22" r="3" fill={color} />
        <circle cx="92" cy="30" r="3" fill={color} />
        {/* inner dot ring */}
        <path d="M32 60 Q60 44 88 60" />
        <circle cx="42" cy="56" r="1.6" fill={color} />
        <circle cx="60" cy="50" r="1.6" fill={color} />
        <circle cx="78" cy="56" r="1.6" fill={color} />
      </g>
    </svg>
  );
}

export function ImperialWordmark({ className = "", tone = "gold" }: { className?: string; tone?: "gold" | "ivory" }) {
  const color = tone === "gold" ? "var(--color-orange)" : "var(--color-ink)";
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <ImperialCrown className="w-9 h-9 mb-2" color={color} />
      <div
        style={{ color, fontFamily: "var(--font-display)", letterSpacing: "0.35em" }}
        className="text-[13px] md:text-[15px] font-medium"
      >
        IMPERIAL
      </div>
      <div
        style={{ color, fontFamily: "var(--font-display)", letterSpacing: "0.35em" }}
        className="text-[13px] md:text-[15px] font-medium"
      >
        MANGOES
      </div>
    </div>
  );
}