"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 border-b border-[#DDD9D1]/80 overflow-hidden bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Headline (55–60% Visual Attention) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 speed-transform"
          >
            {/* Eyebrow Label */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span>AI CREATIVE STUDIO // PRODUCTION LAB</span>
            </motion.div>

            {/* Line-by-Line Editorial Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif-editorial text-[3.8rem] sm:text-[5rem] md:text-[6.2rem] lg:text-[6.8rem] xl:text-[7.8rem] leading-[0.88] tracking-tightest text-[#111111]"
            >
              AI CREATIVE <br />
              FOR BRANDS <br />
              <span className="text-[#626B70] font-normal">
                THAT MOVE FAST.
              </span>
            </motion.h1>

            {/* Subhead Categories */}
            <motion.div variants={itemVariants} className="pt-2 space-y-3">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#111111] uppercase">
                AI UGC · PRODUCT FILMS · SOCIAL ADS · CREATIVE STRATEGY
              </p>
              <p className="text-sm sm:text-base text-[#626B70] max-w-xl leading-relaxed font-normal">
                We combine direct-response creative direction, performance strategy, and generative AI production to create content built for attention.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection("#portfolio")}
                data-cursor="VIEW PROJECT ↗"
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-[#F5F3EE] text-xs font-semibold tracking-widest uppercase hover:bg-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <span>VIEW WORK</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                data-cursor="START ↗"
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-[#DDD9D1] bg-[#F5F3EE] text-[#111111] text-xs font-semibold tracking-widest uppercase hover:bg-[#ECE9E2] transition-all duration-300 hover:border-[#111111]/40"
              >
                <span>START A PROJECT</span>
                <ArrowDown className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Vertical Editorial Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center speed-transform"
          >
            <div
              data-cursor="VIEW PROJECT ↗"
              onClick={() => scrollToSection("#portfolio")}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-md lg:max-w-none rounded-[22px] overflow-hidden border border-[#DDD9D1] shadow-sm bg-[#ECE9E2] group cursor-pointer"
            >
              <Image
                src="/images/hero.webp"
                alt="FIRSTFRAME Editorial Visual"
                fill
                priority
                quality={85}
                className="object-cover grayscale contrast-105 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 z-10 bg-[#F5F3EE]/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#DDD9D1] flex items-center gap-2.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#111111] uppercase">
                  AVAILABLE FOR SELECT PROJECTS
                </span>
              </div>
            </div>

            <div className="hidden xl:block absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[10px] font-bold tracking-[0.3em] text-[#626B70] uppercase select-none pointer-events-none">
              FIRSTFRAME // 2026
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
