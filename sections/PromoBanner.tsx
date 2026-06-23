"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section
      id="shop"
      className="relative overflow-hidden border-y border-white/[0.06]"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #0a0a0a 100%)",
      }}
    >
      {/* Background image (desaturated + faded) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/shop-bg.avif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ filter: "grayscale(1)", opacity: 0.22 }}
      />
      {/* Fade gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #050505 0%, rgba(5,5,5,0.85) 35%, rgba(5,5,5,0.5) 70%, rgba(5,5,5,0.75) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #050505 0%, transparent 30%, transparent 70%, #050505 100%)",
        }}
      />

      {/* Texture overlay */}
      <div className="absolute inset-0 noise-overlay opacity-100" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Wash glow */}
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-[1480px] px-6 lg:px-10"
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-2 lg:py-3">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-white" />
              <span className="eyebrow text-white">Pullculture Shop · 2026 Drop</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-display text-[32px] sm:text-[44px] lg:text-[56px] tracking-tightest leading-[0.95]"
            >
              BUILT FOR <span className="text-white/40">COLLECTORS.</span>
              <br />
              INSPIRED BY <span className="text-white">CULTURE.</span>
            </motion.h2>

            <motion.a
              href="#shop-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="group relative inline-flex items-center gap-3 mt-7 bg-white text-magma-black hover:text-white px-7 py-4 overflow-hidden transition-colors duration-500"
            >
              <span className="relative z-10 text-[13px] tracking-[0.18em] font-bold uppercase">
                Shop Pullculture
              </span>
              <ArrowRight
                className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
              <span className="absolute inset-0 bg-magma-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.a>
          </div>

          {/* Right: shirt image (oversized, bottom clipped by section overflow-hidden) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[220px] sm:h-[300px] lg:h-[360px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/shirt.png"
              alt="Pullculture apparel"
              className="absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-16 lg:-top-24 h-[170%] sm:h-[180%] lg:h-[190%] w-auto max-w-none object-contain object-top drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
