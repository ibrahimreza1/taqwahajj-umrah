export function IslamicPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
    >
      <defs>
        <pattern id="islamic-star" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* 8-pointed star */}
          <polygon
            points="50,5 61,35 93,35 68,57 79,91 50,70 21,91 32,57 7,35 39,35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <polygon
            points="50,15 59,38 85,38 65,54 73,80 50,64 27,80 35,54 15,38 41,38"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          {/* Corner accents */}
          <line x1="0" y1="0" x2="10" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="100" y1="0" x2="90" y2="10" stroke="currentColor" strokeWidth="0.4" />
          <line x1="0" y1="100" x2="10" y2="90" stroke="currentColor" strokeWidth="0.4" />
          <line x1="100" y1="100" x2="90" y2="90" stroke="currentColor" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#islamic-star)" />
    </svg>
  );
}

export function IslamicPatternBg({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="w-full h-full opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpolygon points='50,5 61,35 93,35 68,57 79,91 50,70 21,91 32,57 7,35 39,35' fill='none' stroke='%23C9A84C' stroke-width='0.8'/%3E%3Cpolygon points='50,15 59,38 85,38 65,54 73,80 50,64 27,80 35,54 15,38 41,38' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}
