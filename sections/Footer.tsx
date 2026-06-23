"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Mail, ArrowRight } from "lucide-react";

const FOOTER_LINKS = {
  explore: [
    { label: "News", href: "#news" },
    { label: "Top Pulls", href: "#top-pulls" },
    { label: "Market Trends", href: "#market" },
    { label: "Features", href: "#features" },
    { label: "Hobby Resources", href: "#resources" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
  shop: [
    { label: "Apparel", href: "#apparel" },
    { label: "Accessories", href: "#accessories" },
    { label: "Collectibles", href: "#collectibles" },
    { label: "Gift Cards", href: "#gift" },
  ],
};

const SOCIAL = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X / Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: TiktokIcon, href: "#", label: "TikTok" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      id="about"
      className="relative bg-magma-black border-t border-white/[0.06] pt-20 pb-10"
    >
      <div className="absolute inset-0 noise-overlay opacity-50" />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="flex flex-col leading-none">
              <span className="text-display text-[36px] lg:text-[48px] tracking-tightest font-black">
                PULLCULTURE
              </span>
              <span className="text-[9px] tracking-[0.35em] text-magma-light mt-2 font-mono">
                COLLECTOR CULTURE · EST. 2026
              </span>
            </div>
            <p className="text-magma-light text-[13px] leading-relaxed mt-6 max-w-sm">
              The premium destination for collectible culture. News, top pulls,
              market trends, and the stories behind the hobby.
            </p>

            <div className="flex items-center gap-3 mt-8">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <FooterColumn title="Explore" links={FOOTER_LINKS.explore} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <FooterColumn title="Shop" links={FOOTER_LINKS.shop} />
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h4 className="eyebrow text-white/80 mb-5">Newsletter</h4>
            <p className="text-[12px] text-magma-light leading-relaxed mb-5">
              Stay up to date on hobby news, market trends, and exclusive
              drops.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/15 rounded-full pl-5 pr-12 py-3 text-[12px] text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 w-9 h-9 rounded-full bg-white text-magma-black flex items-center justify-center hover:bg-magma-black hover:text-white transition-all duration-300 group"
              >
                <ArrowRight
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  strokeWidth={2}
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Big logo wash */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative mt-20 mb-10 overflow-hidden"
        >
          <div
            className="text-display tracking-tightest font-black select-none pointer-events-none whitespace-nowrap"
            style={{
              fontSize: "clamp(80px, 18vw, 280px)",
              lineHeight: 0.9,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PULLCULTURE
          </div>
        </motion.div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-[11px] text-white/40">
            © 2026 PULLCULTURE™. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40">
            Designed by Collectors. Made for Culture.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow text-white/80 mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[13px] text-magma-light hover:text-white transition-colors inline-block link-underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}
