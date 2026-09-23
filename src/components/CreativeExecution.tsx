"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leftCapabilities = ["Creative Direction", "AI Production", "UGC Systems"];
const rightCapabilities = ["Product Visuals", "Paid Social", "Campaign Concepts"];

export default function CreativeExecution() {
  return (
    <section className="py-24 md:py-36 border-b border-[#DDD9D1]/80 bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Creative Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-[22px] overflow-hidden bg-[#ECE9E2] border border-[#DDD9D1] shadow-lg group">
              <Image
                src="/images/ugc_fashion.webp"
                alt="AI Creative Execution"
                fill
                loading="lazy"
                quality={85}
                className="object-cover grayscale contrast-105 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-6 left-6 bg-[#F5F3EE]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#DDD9D1] text-[10px] font-bold tracking-widest text-[#111111] uppercase">
                PRODUCTION SYNTHESIS
              </div>
            </div>
          </div>

          {/* RIGHT: Headline & Two-Column Editorial List */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase">
                07 / CREATIVE EXECUTION
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tightest leading-[0.92]">
                CREATIVE THINKING. <br />
                <span className="text-[#626B70]">AI-SPEED EXECUTION.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#626B70] leading-relaxed font-normal">
              Strategy, concepts, visual direction and AI production working together to move from idea to finished creative faster than traditional agency pipelines.
            </p>

            {/* Two-Column Thin Underline Editorial List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-[#DDD9D1]">
              <div className="space-y-3 divide-y divide-[#DDD9D1]">
                {leftCapabilities.map((item) => (
                  <div key={item} className="pt-3 flex items-center justify-between text-xs font-bold tracking-widest text-[#111111] uppercase">
                    <span>{item}</span>
                    <span className="text-[#626B70]">✦</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 divide-y divide-[#DDD9D1]">
                {rightCapabilities.map((item) => (
                  <div key={item} className="pt-3 flex items-center justify-between text-xs font-bold tracking-widest text-[#111111] uppercase">
                    <span>{item}</span>
                    <span className="text-[#626B70]">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
