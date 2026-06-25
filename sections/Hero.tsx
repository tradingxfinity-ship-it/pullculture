"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GradedCard from "@/components/GradedCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col pt-[72px] lg:pt-[80px] overflow-hidden bg-magma-black">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-bg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      {/* Dark gradient from the left for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #050505 0%, #050505 25%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,0.2) 75%, transparent 100%)",
        }}
      />
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative flex-1 flex flex-col mx-auto w-full max-w-[1480px] px-6 lg:px-10 pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start flex-1">
          {/* Left content */}
          <div className="lg:col-span-7 relative z-10 flex flex-col pt-10 lg:pt-24">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-display text-white text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[104px]"
            >
              CULTURE<br />
              THROUGH<br />
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #999999 60%, #555555 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  COLLECTING
                </span>
                <sup className="absolute -top-1 -right-3 text-[14px] lg:text-[18px] text-magma-light font-light">
                  ™
                </sup>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-5 lg:mt-6 max-w-lg text-[14px] lg:text-[15px] leading-relaxed text-magma-light"
            >
              Your daily destination for sports cards, Pokémon, One Piece,
              and TCG investing. Track grading news, auction records, set
              releases, and market movements — plus the stories, drops, and
              hobby culture shaping the next era of collecting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-6 lg:mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#news"
                className="group relative inline-flex items-center gap-3 bg-white text-magma-black px-6 lg:px-7 py-3.5 lg:py-4 overflow-hidden transition-colors duration-500 hover:text-white"
              >
                <span className="relative z-10 text-[13px] tracking-[0.18em] font-bold uppercase">
                  Explore News
                </span>
                <ArrowRight
                  className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={1.75}
                />
                <span className="absolute inset-0 bg-magma-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="absolute inset-0 ring-1 ring-black/10 group-hover:ring-white/20 transition" />
              </a>

              <a
                href="#market"
                className="group inline-flex items-center gap-3 px-2 py-4"
              >
                <span className="text-[13px] tracking-[0.18em] font-bold uppercase text-white link-underline">
                  Market Pulse
                </span>
                <span className="text-white text-[13px]">●</span>
              </a>
            </motion.div>

          </div>

          {/* Right card */}
          <div className="lg:col-span-5 relative h-[400px] sm:h-[460px] lg:h-full lg:min-h-[460px]">
            {/* Branded box silhouette behind card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute left-4 sm:left-10 lg:-left-16 xl:-left-24 bottom-0 lg:bottom-2 w-[60%] sm:w-[55%] lg:w-[62%] aspect-[4/3] z-10"
              style={{
                background:
                  "linear-gradient(225deg, #1a1a1a 0%, #050505 60%, #0a0a0a 100%)",
                borderRadius: "6px",
                transform: "perspective(800px) rotateY(8deg) rotateX(2deg)",
                boxShadow:
                  "inset 0 0 50px rgba(0,0,0,0.6), 0 40px 80px -10px rgba(0,0,0,0.7)",
              }}
            >
              <div className="absolute inset-0 noise-overlay opacity-100" />
              <span className="absolute bottom-6 right-6 text-white/80 text-display text-[14px] sm:text-[18px] lg:text-[22px] tracking-tightest font-black">
                PULLCULTURE
                <sup className="text-[8px] ml-0.5 text-white/40 font-light">™</sup>
              </span>
            </motion.div>

            {/* Floating graded card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-4 sm:-left-8 lg:-left-28 xl:-left-40 top-4 sm:top-2 lg:top-0 w-[280px] sm:w-[340px] lg:w-[420px] xl:w-[480px] z-20"
              style={{
                perspective: "800px",
                perspectiveOrigin: "30% 40%",
                filter:
                  "drop-shadow(0 60px 80px rgba(0,0,0,0.7)) drop-shadow(-10px 30px 60px rgba(255,255,255,0.06))",
              }}
            >
              <div
                style={{
                  transform:
                    "rotateX(13deg) rotateY(-26deg) rotateZ(-4deg) scale(1.02)",
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d",
                }}
              >
                <GradedCard image="/cards/card12.webp" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="relative mt-6 lg:mt-0 border-y border-white/10 py-3 overflow-hidden shrink-0 bg-magma-black z-30"
      >
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-12 shrink-0">
              {TICKER.map((t, i) => (
                <div key={i} className="flex items-center gap-3 text-[12px]">
                  <span className="text-white/40 font-mono tracking-wider">
                    {t.symbol}
                  </span>
                  <span className="text-white font-semibold">{t.price}</span>
                  <span
                    className={
                      t.up ? "text-white" : "text-magma-light/60"
                    }
                  >
                    {t.up ? "▲" : "▼"} {t.change}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const TICKER = [
  { symbol: "PSA10·CHARIZARD", price: "$24,150", change: "2.41%", up: true },
  { symbol: "OHTANI·ROOKIE", price: "$18,600", change: "1.18%", up: true },
  { symbol: "ONEPIECE·LUFFY", price: "$3,420", change: "0.92%", up: false },
  { symbol: "PSA10·JORDAN'86", price: "$182,540", change: "3.05%", up: true },
  { symbol: "POKE·INDEX", price: "$97,620", change: "0.45%", up: false },
  { symbol: "NBA·LUKA", price: "$14,250", change: "1.62%", up: true },
  { symbol: "SHOHEI·CHROME", price: "$28,750", change: "2.21%", up: true },
  { symbol: "MTG·DUAL·LAND", price: "$8,150", change: "0.18%", up: true },
];
