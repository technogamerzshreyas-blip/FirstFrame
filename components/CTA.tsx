"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 md:py-48 border-b border-[#DDD9D1]/80 bg-[#F5F3EE] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 max-w-5xl mx-auto"
        >
          <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase">
            08 / START A PROJECT
          </div>

          <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] text-[#111111] leading-[0.88] tracking-tightest">
            LET'S MAKE <br />
            SOMETHING <br />
            <span className="text-[#626B70]">IMPOSSIBLE TO</span> <br />
            IGNORE.
          </h2>

          <p className="text-base sm:text-lg text-[#626B70] max-w-lg mx-auto font-normal pt-4">
            Have a project in mind? Tell us about your brand, goals, and timeline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => scrollToSection("#contact")}
              data-cursor="START ↗"
              className="group flex items-center gap-3 px-9 py-5 rounded-full bg-[#111111] text-[#F5F3EE] text-xs font-semibold tracking-widest uppercase hover:bg-black transition-all duration-300 hover:scale-[1.02] shadow-sm"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={() => scrollToSection("#portfolio")}
              data-cursor="VIEW PROJECT ↗"
              className="group flex items-center gap-3 px-9 py-5 rounded-full border border-[#DDD9D1] bg-[#F5F3EE] text-[#111111] text-xs font-semibold tracking-widest uppercase hover:bg-[#ECE9E2] transition-all duration-300 hover:border-[#111111]/40"
            >
              <span>VIEW WORK</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
