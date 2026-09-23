"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

interface IntelligenceStep {
  number: string;
  stage: string;
  question: string;
  description: string;
  image: string;
}

const intelligenceSteps: IntelligenceStep[] = [
  {
    number: "01",
    stage: "AUDIENCE",
    question: "Who are we trying to stop?",
    description: "Deep audience profiling and trigger isolation to define exact consumer pain points and aspirational angles.",
    image: "/images/ugc_lifestyle.webp",
  },
  {
    number: "02",
    stage: "HOOK",
    question: "What earns the first second?",
    description: "Visual pattern interrupts and sensory hooks designed to freeze thumb scrolling within 800 milliseconds.",
    image: "/images/ugc_beauty.webp",
  },
  {
    number: "03",
    stage: "CONCEPT",
    question: "What makes them keep watching?",
    description: "Direct-response narrative pacing, authentic creator setups, and rapid problem-solution visual demonstrations.",
    image: "/images/ugc_fashion.webp",
  },
  {
    number: "04",
    stage: "CREATIVE",
    question: "What gets them to act?",
    description: "Hyper-focused call-to-action closing, offer stacking, and conversion-optimized ad variations ready for paid scale.",
    image: "/images/ugc_tech.webp",
  },
];

export default function CreativeIntelligence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (latest < 0.25) setActiveIdx(0);
      else if (latest < 0.50) setActiveIdx(1);
      else if (latest < 0.75) setActiveIdx(2);
      else setActiveIdx(3);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#F5F3EE]">
      {/* Sticky Inner Container */}
      <section className="sticky top-0 h-screen flex flex-col justify-center py-12 border-b border-[#DDD9D1]/80 overflow-hidden bg-[#F5F3EE] z-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full space-y-12">
          
          {/* Section Header */}
          <div className="space-y-2">
            <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase">
              02 / METHODOLOGY
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl text-[#111111] tracking-tightest">
              CREATIVE INTELLIGENCE.
            </h2>
            <p className="text-sm sm:text-base text-[#626B70] font-normal leading-relaxed max-w-lg">
              AI makes production faster. Creative thinking makes it matter.
            </p>
          </div>

          {/* Sticky Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: 4 Stages Text List */}
            <div className="lg:col-span-6 space-y-4 divide-y divide-[#DDD9D1] border-y border-[#DDD9D1]">
              {intelligenceSteps.map((item, idx) => {
                const isActive = idx === activeIdx;

                return (
                  <motion.div
                    key={item.number}
                    onClick={() => setActiveIdx(idx)}
                    animate={{
                      opacity: isActive ? 1 : 0.25,
                      scale: isActive ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="py-6 cursor-pointer space-y-1"
                  >
                    <div className="text-[10px] font-mono font-semibold tracking-widest text-[#626B70] uppercase">
                      {item.number} // {item.stage}
                    </div>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#111111]">
                      {item.question}
                    </h3>
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

            {/* RIGHT: ONE Single Sticky Creative Visual Changing Per Stage */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-[#DDD9D1] shadow-xl bg-[#ECE9E2]">
                {intelligenceSteps.map((step, idx) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{
                      opacity: idx === activeIdx ? 1 : 0,
                      scale: idx === activeIdx ? 1 : 1.03,
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={step.image}
                      alt={step.stage}
                      fill
                      className="object-cover grayscale contrast-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                    <div className="absolute bottom-6 left-6 bg-[#F5F3EE]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#DDD9D1] text-[10px] font-bold tracking-widest text-[#111111] uppercase">
                      STAGE {step.number} // {step.stage}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
