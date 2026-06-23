"use client";

type ThumbnailProps = {
  accent?: string;
  label?: string;
  variant?: "card" | "story" | "abstract";
  className?: string;
};

export default function Thumbnail({
  accent = "#E63946",
  label = "MG",
  variant = "card",
  className = "",
}: ThumbnailProps) {
  if (variant === "story") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient id={`bg-${label}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            <radialGradient id={`glow-${label}`} cx="0.7" cy="0.4" r="0.6">
              <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </radialGradient>
            <pattern id={`grid-${label}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill={`url(#bg-${label})`} />
          <rect width="400" height="300" fill={`url(#grid-${label})`} />
          <rect width="400" height="300" fill={`url(#glow-${label})`} />

          {/* Abstract trophy/card silhouette */}
          <g transform="translate(200, 150)">
            <rect
              x="-50"
              y="-90"
              width="100"
              height="140"
              rx="8"
              fill="rgba(255,255,255,0.04)"
              stroke={accent}
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
            <rect
              x="-60"
              y="-100"
              width="120"
              height="160"
              rx="10"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
              transform="rotate(-6)"
            />
            <circle cx="0" cy="-10" r="22" fill={accent} fillOpacity="0.3" />
            <circle cx="0" cy="-10" r="14" fill={accent} fillOpacity="0.6" />
            <path
              d="M -10 -20 L 0 -30 L 10 -20 L 10 0 L 0 10 L -10 0 Z"
              fill={accent}
            />
          </g>

          {/* Corner marks */}
          <text
            x="20"
            y="38"
            fontSize="11"
            fontFamily="monospace"
            fill="rgba(255,255,255,0.5)"
            letterSpacing="2"
          >
            {label}
          </text>
          <text
            x="380"
            y="280"
            fontSize="10"
            fontFamily="monospace"
            fill="rgba(255,255,255,0.4)"
            textAnchor="end"
            letterSpacing="2"
          >
            FEATURED · 2026
          </text>
        </svg>
      </div>
    );
  }

  if (variant === "abstract") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient id={`abg-${label}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.7" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="#0a0a0a" />
          <circle cx="100" cy="100" r="80" fill={`url(#abg-${label})`} opacity="0.6" />
          <text
            x="100"
            y="108"
            fontSize="32"
            fontFamily="sans-serif"
            fontWeight="900"
            fill="white"
            textAnchor="middle"
            letterSpacing="-1"
          >
            {label}
          </text>
        </svg>
      </div>
    );
  }

  // card variant - small thumbnail
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id={`tbg-${label}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          <radialGradient id={`tg-${label}`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={accent} stopOpacity="0.7" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#tbg-${label})`} />
        <rect width="100" height="100" fill={`url(#tg-${label})`} />

        <g transform="translate(50,50)">
          <rect
            x="-22"
            y="-30"
            width="44"
            height="60"
            rx="3"
            fill="rgba(255,255,255,0.05)"
            stroke={accent}
            strokeOpacity="0.7"
            strokeWidth="1"
          />
          <circle cx="0" cy="-5" r="10" fill={accent} fillOpacity="0.5" />
          <path
            d="M -4 -10 L 0 -16 L 4 -10 L 4 0 L 0 5 L -4 0 Z"
            fill={accent}
          />
        </g>
      </svg>
    </div>
  );
}
