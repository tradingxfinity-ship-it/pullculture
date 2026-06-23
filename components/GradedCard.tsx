"use client";

import { motion } from "framer-motion";

type GradedCardProps = {
  grade?: string;
  serial?: string;
  title?: string;
  subtitle?: string;
  year?: string;
  accent?: string;
  image?: string;
  className?: string;
};

export default function GradedCard({
  grade = "GEM MT 10",
  serial = "84019572",
  title = "PULL ROOKIE",
  subtitle = "FOUNDER • FLAGSHIP",
  year = "2026 PULLCULTURE SELECT",
  accent = "#FFFFFF",
  image = "/cards/image6.png",
  className = "",
}: GradedCardProps) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: "5/7" }}>
      {/* Card slab (PSA-style holder) */}
      <div className="relative w-full h-full rounded-[14px] overflow-hidden">
        {/* Plastic slab */}
        <div
          className="absolute inset-0 rounded-[14px]"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 18%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.06) 75%, rgba(255,255,255,0.14) 100%)",
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 0 60px rgba(0,0,0,0.5), 0 50px 100px -20px rgba(0,0,0,0.9), 0 25px 50px -10px rgba(0,0,0,0.6)",
          }}
        />

        {/* Inner card surface */}
        <div className="absolute inset-[14px] rounded-[8px] overflow-hidden bg-[#0a0a0a]">
          {/* Top label bar (PSA-style) */}
          <div className="h-[11%] bg-white relative border-b-2 border-black flex items-stretch">
            <div className="flex-1 flex flex-col justify-center px-3">
              <div className="text-[8px] tracking-[0.15em] text-black font-black leading-none">
                {year}
              </div>
              <div className="text-[10px] tracking-[0.05em] text-black font-black leading-tight mt-0.5">
                {title}
              </div>
              <div className="text-[7px] tracking-[0.1em] text-black/70 font-bold leading-none mt-0.5">
                {subtitle}
              </div>
            </div>
            <div className="w-[35%] flex flex-col items-center justify-center border-l-2 border-black px-1">
              <div className="text-[7px] font-black text-black leading-none">PMG</div>
              <div className="text-[14px] font-black text-black leading-none mt-0.5">
                {grade.split(" ")[0]}
              </div>
              <div className="text-[14px] font-black text-black leading-none">
                {grade.split(" ").slice(1).join(" ")}
              </div>
            </div>
            {/* perforation hole */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-magma-black border border-white/30" />
          </div>

          {/* Main card art */}
          <div className="relative h-[80%] overflow-hidden">
            {/* Card art background */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 50% 30%, ${accent}40 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 40%),
                  linear-gradient(135deg, #1a1a1a 0%, #050505 50%, #1a1a1a 100%)
                `,
              }}
            />

            {/* Border frame */}
            <div className="absolute inset-2 border-2 border-white/20 rounded-[2px]">
              <div
                className="absolute inset-0 rounded-[2px]"
                style={{
                  boxShadow: `inset 0 0 30px ${accent}30`,
                }}
              />

              {/* Holographic foil pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen"
                viewBox="0 0 100 140"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="foil" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
                    <stop offset="33%" stopColor="#cccccc" stopOpacity="0.35" />
                    <stop offset="66%" stopColor="#888888" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.55" />
                  </linearGradient>
                </defs>
                <rect width="100" height="140" fill="url(#foil)" />
              </svg>

              {/* Card art image */}
              <div className="relative h-full w-full overflow-hidden">
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={image}
                    alt="Trading card art"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-[10px] tracking-[0.2em] font-mono">
                    NO IMAGE
                  </div>
                )}
                {/* Readability gradient at bottom for the on-card label */}
                <div
                  className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Bottom card label */}
              <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                <div>
                  <div
                    className="text-[8px] font-black tracking-[0.1em] leading-none"
                    style={{ color: accent }}
                  >
                    PULLCULTURE
                  </div>
                  <div className="text-[6px] font-bold tracking-[0.2em] text-white/70 mt-0.5">
                    FOUNDER ROOKIE
                  </div>
                </div>
                <div className="text-[6px] font-mono text-white/40">#001/100</div>
              </div>
            </div>
          </div>

          {/* Bottom barcode bar */}
          <div className="h-[9%] bg-white relative flex items-center px-3">
            <div className="flex-1">
              <div className="text-[6px] tracking-[0.15em] text-black/60 font-bold">
                CERT NUMBER
              </div>
              <div className="text-[10px] tracking-[0.05em] text-black font-black font-mono mt-0.5">
                {serial}
              </div>
            </div>
            {/* Barcode */}
            <div className="flex items-stretch gap-px h-6">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-black"
                  style={{ width: i % 3 === 0 ? "2px" : "1px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Glass reflection overlay */}
        <div className="absolute inset-0 rounded-[14px] glass-reflect pointer-events-none" />

        {/* Top diagonal glare */}
        <div
          className="absolute -top-1/2 left-0 w-full h-1/2 rounded-[14px] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
            transform: "rotate(15deg) translateY(60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
}
