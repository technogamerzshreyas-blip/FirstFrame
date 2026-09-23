"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface Capability {
  number: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    number: "01",
    title: "AI-NATIVE PRODUCTION",
    description: "Generative tools and synthetic workflows allowing infinite concept variation without physical production drag.",
  },
  {
    number: "02",
    title: "FAST ITERATION",
    description: "Move from brief to finalized creative assets in hours instead of traditional agency weeks.",
  },
  {
    number: "03",
    title: "SCROLL-STOPPING CONCEPTS",
    description: "Pattern interrupts, visual hooks, and psychological triggers built specifically for the first second of feed attention.",
  },
  {
    number: "04",
    title: "BRAND-FOCUSED STORYTELLING",
    description: "Social-native direct-response creative that still maintains luxury brand alignment and positioning.",
  },
  {
    number: "05",
    title: "SOCIAL-FIRST CREATIVE",
    description: "Content engineered specifically for modern social feeds (TikTok, Reels, Shorts) and paid acquisition scale.",
  },
];

const metrics = [
  { value: "30+", label: "CREATIVE CONCEPTS" },
  { value: "24–72H", label: "PRODUCTION TURNAROUND" },
  { value: "10X", label: "CREATIVE ITERATION" },
];

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const step = Math.min(
        capabilities.length - 1,
        Math.floor(latest * capabilities.length)
      );
      setActiveIdx(step);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <section id="why-me" ref={containerRef} className="py-24 md:py-36 border-b border-[#DDD9D1]/80 bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Sticky Statement Manifesto & Verified Metrics */}
          <div className="lg:col-span-6 lg:sticky lg:top-36 space-y-8">
            <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase">
              04 / THE DIFFERENCE
            </div>
            
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#111111] tracking-tightest leading-[0.92]">
              NOT ANOTHER <br />
              <span className="text-[#626B70]">CONTENT STUDIO.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#626B70] leading-relaxed max-w-lg font-normal">
              I combine creative direction, AI production and performance thinking to create content built for attention.
            </p>

            {/* Verified Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#DDD9D1]">
              {metrics.map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl text-[#111111]">
                    {m.value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#626B70] uppercase">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Editorial Capabilities Underline Rows */}
          <div className="lg:col-span-6 divide-y divide-[#DDD9D1] border-y border-[#DDD9D1]">
            {capabilities.map((item, idx) => {
              const isActive = idx === activeIdx;

              return (
                <motion.div
                  key={item.number}
                  onClick={() => setActiveIdx(idx)}
                  animate={{
                    opacity: isActive ? 1 : 0.25,
                    x: isActive ? 0 : 12,
                    scale: isActive ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="py-8 px-2 cursor-pointer transition-all duration-300 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#111111]">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-[#626B70]">
                      {item.number}
                    </span>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-xs sm:text-sm text-[#626B70] leading-relaxed pt-2"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
