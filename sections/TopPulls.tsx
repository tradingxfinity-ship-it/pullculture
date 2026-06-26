"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import GradedCard from "@/components/GradedCard";
import { TOP_PULLS } from "@/lib/data";

export default function TopPulls() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="top-pulls"
      className="relative bg-magma-black py-20 lg:py-28 noise-overlay overflow-hidden"
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-magma-red" />
              <span className="eyebrow text-magma-red">Pulled This Week</span>
            </div>
            <h2 className="text-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95]">
              TOP <span className="text-white/30">PULLS</span>
            </h2>
            <p className="text-magma-light text-[14px] mt-4 max-w-md">
              The cards moving culture and capital. Tracked daily, graded weekly.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-full border border-white/15 hover:border-white hover:bg-white hover:text-magma-black transition-all duration-300 flex items-center justify-center group"
                aria-label="Previous"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-full border border-white/15 hover:border-white hover:bg-white hover:text-magma-black transition-all duration-300 flex items-center justify-center group"
                aria-label="Next"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
            <a
              href="#all-pulls"
              className="hidden sm:inline-flex items-center gap-2 ml-4 group"
            >
              <span className="text-[13px] tracking-[0.18em] uppercase font-bold link-underline">
                View All
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="-mx-6 lg:-mx-10 px-6 lg:px-10"
        >
          <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            freeMode={{ enabled: true, momentum: true, momentumRatio: 0.8 }}
            onSwiper={(s) => (swiperRef.current = s)}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.4 },
              1280: { slidesPerView: 4.2 },
              1536: { slidesPerView: 5 },
            }}
            className="!overflow-visible"
          >
            {TOP_PULLS.map((pull) => (
              <SwiperSlide key={pull.id}>
                <PullCard pull={pull} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

function PullCard({ pull }: { pull: (typeof TOP_PULLS)[number] }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative block"
    >
      <div className="relative bg-magma-dark/40 border border-white/[0.07] rounded-2xl p-5 lg:p-6 overflow-hidden card-glow hover:border-white/20 transition-colors duration-500">
        {/* Hover glow */}
        <div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${pull.accent}20 0%, transparent 60%)`,
          }}
        />

        {/* Category badge */}
        <div className="relative flex items-center justify-between mb-5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-semibold">
            {pull.category}
          </span>
          <span className="text-[10px] font-mono text-white/40">
            {pull.grade}
          </span>
        </div>

        {/* Card image */}
        <div className="relative px-4 py-2 mb-6">
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-700"
            style={{ background: pull.accent }}
          />
          <div className="relative transition-transform duration-700 group-hover:scale-[1.04] group-hover:-rotate-1">
            <GradedCard
              grade={pull.grade}
              serial={pull.serial}
              accent={pull.accent}
            />
          </div>
        </div>

        {/* Info */}
        <div className="relative">
          <h3 className="text-[16px] font-bold text-white tracking-tight leading-tight line-clamp-1">
            {pull.title}
          </h3>
          <p className="text-[12px] text-magma-light mt-1 line-clamp-1">
            {pull.setYear}
          </p>

          <div className="flex items-end justify-between mt-5 pt-5 border-t border-white/5">
            <div>
              <div className="eyebrow text-white/40 text-[9px]">
                Last Sold
              </div>
              <div className="text-[22px] font-black text-white tracking-tight leading-none mt-1">
                {pull.value}
              </div>
            </div>
            <div
              className={`flex items-center gap-1 text-[12px] font-semibold ${
                pull.up ? "text-white" : "text-magma-light/60"
              }`}
            >
              {pull.up ? (
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              ) : (
                <ArrowDownRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              )}
              {pull.delta}
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
