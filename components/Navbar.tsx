"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "News", href: "#news" },
  { label: "Top Pulls", href: "#top-pulls" },
  { label: "Market Trends", href: "#market" },
  { label: "Features", href: "#features" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-magma-black/85 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" aria-label="Pullculture home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Pullculture"
                className="h-[22px] lg:h-[26px] w-auto select-none"
              />
              <span className="text-[8px] tracking-[0.35em] text-magma-light mt-1 font-mono">
                COLLECTOR CULTURE
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] tracking-[0.05em] font-medium text-white/90 hover:text-white link-underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-2 lg:gap-3">
              <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors">
                <Search className="w-4 h-4 text-white" strokeWidth={1.5} />
              </button>
              <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors">
                <User className="w-4 h-4 text-white" strokeWidth={1.5} />
              </button>
              <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
                <ShoppingBag className="w-4 h-4 text-white" strokeWidth={1.5} />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-magma-red" />
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-white" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-magma-black lg:hidden noise-overlay"
          >
            <div className="flex items-center justify-between h-[72px] px-6 border-b border-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Pullculture" className="h-[22px] w-auto select-none" />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-5 text-[32px] font-black tracking-tightest text-display border-b border-white/5 hover:text-magma-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-10 left-6 right-6 flex items-center gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 h-12 border border-white/10 rounded-full">
                <Search className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">Search</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 h-12 bg-white text-magma-black rounded-full">
                <User className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm font-medium">Sign In</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
