"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import Sparkline from "@/components/Sparkline";
import { LATEST_NEWS, MARKET_INDICES } from "@/lib/data";

export default function ContentGrid() {
  return (
    <section className="relative bg-magma-black py-20 lg:py-28">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <LatestNewsColumn />
          <MarketTrendsColumn />
          <div className="md:col-span-2 lg:col-span-1">
            <FeaturedStoryColumn />
          </div>
        </div>
      </div>
    </section>
  );
}

function LatestNewsColumn() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      id="news"
      className="bg-magma-dark/50 border border-white/[0.06] rounded-2xl p-6 lg:p-8 flex flex-col"
    >
      <SectionHeader title="Latest News" tag="Daily Brief" />

      <div className="flex-1 mt-7 divide-y divide-white/5">
        {LATEST_NEWS.map((n, i) => (
          <motion.a
            key={n.id}
            href="#"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="group flex items-start gap-4 py-5 first:pt-0 last:pb-0"
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 ring-1 ring-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={n.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-magma-black/20 group-hover:bg-magma-black/0 transition-colors duration-500" />
            </div>

            <div className="flex-1 min-w-0">
              <span
                className="eyebrow text-[9px]"
                style={{ color: n.accent }}
              >
                {n.tag}
              </span>
              <h3 className="text-[14px] leading-snug font-semibold text-white mt-1 group-hover:text-white/95 line-clamp-3 transition-colors">
                {n.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-2 text-[11px] text-white/40">
                <Clock className="w-3 h-3" strokeWidth={1.5} />
                {n.timeAgo}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <a
        href="#all-news"
        className="group mt-7 flex items-center justify-between pt-6 border-t border-white/5"
      >
        <span className="text-[12px] tracking-[0.18em] uppercase font-bold link-underline">
          View All News
        </span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      </a>
    </motion.div>
  );
}

function MarketTrendsColumn() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      id="market"
      className="bg-magma-dark/50 border border-white/[0.06] rounded-2xl p-6 lg:p-8 flex flex-col"
    >
      <SectionHeader title="Market Trends" tag="Live" pulse />

      <div className="flex-1 mt-7 divide-y divide-white/5">
        {MARKET_INDICES.map((idx, i) => (
          <motion.div
            key={idx.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="group py-4 first:pt-0 last:pb-0 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[11px] tracking-[0.12em] uppercase font-bold text-white truncate">
                  {idx.name}
                </div>
                <div className="text-[10px] text-white/40 mt-0.5 truncate">
                  {idx.sub}
                </div>
              </div>
              <Sparkline data={idx.spark} positive={idx.up} width={70} height={28} />
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <div className="text-[20px] font-black text-white font-mono tracking-tight">
                {idx.value}
              </div>
              <div
                className={`flex items-center gap-1 text-[12px] font-semibold ${
                  idx.up ? "text-white" : "text-magma-light/60"
                }`}
              >
                <TrendingUp
                  className={`w-3 h-3 ${idx.up ? "" : "rotate-180"}`}
                  strokeWidth={2.5}
                />
                {idx.delta}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <a
        href="#market-full"
        className="group mt-7 flex items-center justify-between pt-6 border-t border-white/5"
      >
        <span className="text-[12px] tracking-[0.18em] uppercase font-bold link-underline">
          View Market
        </span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      </a>
    </motion.div>
  );
}

function FeaturedStoryColumn() {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.2 }}
      id="features"
      className="group relative bg-magma-dark/50 border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 h-full"
    >
      <div className="p-6 lg:p-8 pb-0">
        <SectionHeader title="Featured Story" tag="Editorial" />
      </div>

      {/* Tablet: side-by-side; Mobile/Desktop: stacked */}
      <div className="flex flex-col md:flex-row lg:flex-col flex-1">
        <div className="relative mx-6 lg:mx-8 mt-6 md:mt-6 md:ml-6 md:mr-0 md:mb-6 lg:ml-8 lg:mr-8 lg:mb-0 aspect-[4/3] md:aspect-auto md:w-[45%] lg:w-auto lg:aspect-[4/3] md:self-stretch rounded-xl overflow-hidden ring-1 ring-white/5 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image.webp"
            alt="Featured story"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-magma-black/90 via-magma-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-magma-black/70 backdrop-blur-sm border border-white/10 eyebrow text-[10px] text-white">
              Long Read · 12 min
            </span>
          </div>
        </div>

        <div className="p-6 lg:p-8 pt-6 flex-1 flex flex-col">
          <h3 className="text-[22px] lg:text-[26px] font-black leading-[1.15] tracking-tight text-white">
            The $12M Pullculture Founder Card: Inside the Most Expensive Modern
            Sale in Hobby History
          </h3>
          <p className="text-magma-light text-[13px] leading-relaxed mt-4">
            How a single PSA 10 rookie redefined modern grading economics, what
            the auction floor whispered, and why the next era is already here.
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <span className="text-[12px] tracking-[0.18em] uppercase font-bold link-underline">
              Read Feature
            </span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function SectionHeader({
  title,
  tag,
  pulse = false,
}: {
  title: string;
  tag: string;
  pulse?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-display text-[24px] lg:text-[30px] tracking-tightest font-black uppercase">
        {title}
      </h2>
      <span className="flex items-center gap-2 eyebrow text-white/50">
        {pulse && (
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
        )}
        {tag}
      </span>
    </div>
  );
}
