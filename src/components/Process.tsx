"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, Sparkles, Send, FileText, Layers, Check } from "lucide-react";
import Image from "next/image";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const lineFillWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (latest < 0.25) setActiveStepIndex(0);
      else if (latest < 0.50) setActiveStepIndex(1);
      else if (latest < 0.75) setActiveStepIndex(2);
      else setActiveStepIndex(3);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div id="process" ref={containerRef} className="relative h-[300vh] bg-[#F5F3EE]">
      {/* Sticky Inner Pinned Container */}
      <section className="sticky top-0 h-screen flex flex-col justify-center py-10 border-b border-[#DDD9D1]/80 overflow-hidden bg-[#F5F3EE] z-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full space-y-10">
          
          {/* Section Header */}
          <div className="space-y-2">
            <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase">
              05 / THE PROCESS
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl text-[#111111] tracking-tightest">
              THE PROCESS
            </h2>
            <p className="text-sm text-[#626B70] font-normal leading-relaxed">
              From first idea to finished creative.
            </p>
          </div>

          {/* Interactive Timeline Progress Line */}
          <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-8 py-2">
            <div className="absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 bg-[#DDD9D1]" />
            <motion.div
              style={{ width: lineFillWidth }}
              className="absolute top-1/2 left-8 max-w-[calc(100%-4rem)] h-[2.5px] -translate-y-1/2 bg-[#111111] origin-left z-10"
            />
            <div className="relative z-20 flex justify-between items-center w-full">
              {["01 BRIEF", "02 CONCEPT", "03 CREATE", "04 DELIVER"].map((label, idx) => {
                const isActive = idx === activeStepIndex;
                const isPassed = idx <= activeStepIndex;

                return (
                  <button
                    key={label}
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isPassed
                          ? "bg-[#111111] border-[#111111] text-[#F5F3EE]"
                          : "bg-[#F5F3EE] border-[#DDD9D1] text-[#626B70]"
                      }`}
                    >
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#F5F3EE] animate-pulse" />}
                    </div>
                    <span
                      className={`text-[9px] font-bold tracking-widest uppercase transition-colors ${
                        isActive ? "text-[#111111]" : "text-[#626B70]"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STAGE DISPLAY PANELS */}
          <div className="max-w-4xl mx-auto w-full min-h-[360px] bg-[#ECE9E2] border border-[#DDD9D1] rounded-[24px] p-6 sm:p-10 shadow-lg relative overflow-hidden flex items-center justify-center">
            
            {/* STAGE 01 — BRIEF */}
            {activeStepIndex === 0 && (
              <motion.div
                key="stage-01"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#DDD9D1] pb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#111111]" />
                    <span className="text-xs font-bold tracking-widest text-[#111111] uppercase">
                      PROJECT BRIEF
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>✓ INFORMATION RECEIVED</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#F5F3EE] p-4 rounded-xl border border-[#DDD9D1]/80 space-y-1">
                    <span className="text-[9px] font-bold tracking-wider text-[#626B70] uppercase">PRODUCT</span>
                    <p className="text-xs font-semibold text-[#111111]">Aura Botanical Serum</p>
                  </div>
                  <div className="bg-[#F5F3EE] p-4 rounded-xl border border-[#DDD9D1]/80 space-y-1">
                    <span className="text-[9px] font-bold tracking-wider text-[#626B70] uppercase">AUDIENCE</span>
                    <p className="text-xs font-semibold text-[#111111]">Gen-Z & Millennial Skincare</p>
                  </div>
                  <div className="bg-[#F5F3EE] p-4 rounded-xl border border-[#DDD9D1]/80 space-y-1">
                    <span className="text-[9px] font-bold tracking-wider text-[#626B70] uppercase">OBJECTIVE</span>
                    <p className="text-xs font-semibold text-[#111111]">Meta Paid Acquisition</p>
                  </div>
                  <div className="bg-[#F5F3EE] p-4 rounded-xl border border-[#DDD9D1]/80 space-y-1">
                    <span className="text-[9px] font-bold tracking-wider text-[#626B70] uppercase">PLATFORM</span>
                    <p className="text-xs font-semibold text-[#111111]">TikTok / Reels (9:16)</p>
                  </div>
                </div>

                <p className="text-xs text-[#626B70] leading-relaxed italic border-t border-[#DDD9D1] pt-3">
                  “Targeting direct response scale with creator storytelling, texture close-ups, and 3 distinct hook swaps.”
                </p>
              </motion.div>
            )}

            {/* STAGE 02 — CONCEPT */}
            {activeStepIndex === 1 && (
              <motion.div
                key="stage-02"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#DDD9D1] pb-4">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-[#111111]" />
                    <span className="text-xs font-bold tracking-widest text-[#111111] uppercase">
                      CREATIVE DIRECTION BOARD
                    </span>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase">
                    HOOK & ANGLE ISOLATION
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F5F3EE] p-5 rounded-xl border border-[#DDD9D1] space-y-2">
                    <div className="text-[9px] font-bold tracking-wider text-[#626B70] uppercase">HOOK</div>
                    <p className="font-serif-editorial text-xl text-[#111111]">“STOP SCROLLING.”</p>
                  </div>

                  <div className="bg-[#F5F3EE] p-5 rounded-xl border border-[#DDD9D1] space-y-2">
                    <div className="text-[9px] font-bold tracking-wider text-[#626B70] uppercase">VISUAL</div>
                    <p className="text-xs text-[#111111]">PRODUCT / CREATOR / AI</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 bg-[#F5F3EE] p-3 rounded-xl border border-[#DDD9D1] text-[10px] font-semibold text-[#111111] text-center uppercase">
                    CONCEPT 01: ORGANIC UGC REEL
                  </div>
                  <div className="flex-1 bg-[#F5F3EE] p-3 rounded-xl border border-[#DDD9D1] text-[10px] font-semibold text-[#111111] text-center uppercase">
                    CONCEPT 02: PRODUCT HIGHLIGHT FILM
                  </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 03 — CREATE */}
            {activeStepIndex === 2 && (
              <motion.div
                key="stage-03"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#DDD9D1] pb-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#111111]" />
                    <span className="text-xs font-bold tracking-widest text-[#111111] uppercase">
                      AI CREATIVE ENGINE
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#111111] text-[#F5F3EE] text-[10px] font-bold tracking-wider uppercase animate-pulse">
                    GENERATING • 78%
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="w-full bg-[#DDD9D1] h-3 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="bg-[#111111] h-full rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#626B70]">
                    <span>SYNTHESIZING AI CREATOR MODEL...</span>
                    <span>78% COMPLETE</span>
                  </div>
                </div>

                <div className="relative w-full h-36 rounded-xl overflow-hidden border border-[#DDD9D1] bg-black">
                  <Image
                    src="/images/ugc_beauty.webp"
                    alt="AI Creative Engine Preview"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white font-mono uppercase">RENDERING HIGH-DEFINITION SYNTHETIC FRAME 420/600</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 04 — DELIVER */}
            {activeStepIndex === 3 && (
              <motion.div
                key="stage-04"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#DDD9D1] pb-4">
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-[#111111]" />
                    <span className="text-xs font-bold tracking-widest text-[#111111] uppercase">
                      CAMPAIGN READY
                    </span>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#111111] text-[#F5F3EE] text-[10px] font-bold tracking-wider uppercase">
                    100% COMPLETE ✓
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["✓ UGC VIDEO", "✓ PRODUCT VISUAL", "✓ SOCIAL ADS", "✓ CAMPAIGN VARIATIONS"].map((item) => (
                    <div key={item} className="bg-[#F5F3EE] p-3.5 rounded-xl border border-[#DDD9D1] flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                      <span className="text-[10px] font-bold tracking-wider text-[#111111] uppercase">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#626B70] text-center pt-2">
                  All campaign assets rendered in native 9:16 vertical & 4:5 social formats, ready to scale paid media.
                </p>
              </motion.div>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
