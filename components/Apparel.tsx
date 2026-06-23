"use client";

type ApparelProps = {
  variant?: "tee-dark" | "tee-light" | "hoodie";
  className?: string;
};

export default function Apparel({ variant = "tee-dark", className = "" }: ApparelProps) {
  const isLight = variant === "tee-light";
  const bg = isLight ? "#e8e2d4" : "#0a0a0a";
  const logoColor = isLight ? "#0a0a0a" : "#ffffff";
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 320 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={`shadow-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.6)" />
          </linearGradient>
          <filter id={`drop-${variant}`} x="-30%" y="-10%" width="160%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="0" dy="20" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* T-shirt shape */}
        <g filter={`url(#drop-${variant})`}>
          <path
            d="
              M 80 60
              L 130 40
              Q 140 50, 160 50
              Q 180 50, 190 40
              L 240 60
              L 280 100
              L 260 130
              L 240 115
              L 240 340
              Q 240 350, 230 350
              L 90 350
              Q 80 350, 80 340
              L 80 115
              L 60 130
              L 40 100
              Z
            "
            fill={bg}
            stroke={isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.05)"}
            strokeWidth="1"
          />
          {/* Collar */}
          <ellipse
            cx="160"
            cy="55"
            rx="22"
            ry="8"
            fill="none"
            stroke={isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.12)"}
            strokeWidth="1.5"
          />
          {/* Subtle shadow */}
          <path
            d="
              M 80 115
              L 80 340
              Q 80 350, 90 350
              L 100 350
              L 100 130
              Z
            "
            fill={isLight ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.4)"}
          />

          {/* Logo */}
          <g transform="translate(160, 180)">
            <text
              x="0"
              y="0"
              fontSize="22"
              fontFamily="sans-serif"
              fontWeight="900"
              fill={logoColor}
              textAnchor="middle"
              letterSpacing="-1"
            >
              PULL
            </text>
            <text
              x="0"
              y="22"
              fontSize="22"
              fontFamily="sans-serif"
              fontWeight="900"
              fill={logoColor}
              textAnchor="middle"
              letterSpacing="-1"
            >
              CULTURE
            </text>
            <line
              x1="-40"
              y1="32"
              x2="40"
              y2="32"
              stroke={logoColor}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
            <text
              x="0"
              y="44"
              fontSize="6"
              fontFamily="monospace"
              fill={logoColor}
              fillOpacity="0.6"
              textAnchor="middle"
              letterSpacing="3"
            >
              CULTURE · COLLECT · COMMUNITY
            </text>
          </g>

          {/* Subtle flame icon */}
          <g transform="translate(160, 250)" opacity="0.15">
            <path
              d="M 0 -10 C -6 -3, -8 5, -3 10 C -6 12, -7 18, -3 22 C 0 25, 0 25, 3 22 C 7 18, 6 12, 3 10 C 8 5, 6 -3, 0 -10 Z"
              fill={logoColor}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
