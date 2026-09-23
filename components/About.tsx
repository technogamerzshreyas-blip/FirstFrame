"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-[#DDD9D1]/80 bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase mb-12">
          06 / PHILOSOPHY
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Typography-Driven Story */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl text-[#111111] leading-[0.92] tracking-tightest">
                WE DON'T <br />
                START WITH <br />
                <span className="text-[#626B70]">THE TOOL.</span>
              </h2>

              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl text-[#111111] leading-[0.92] tracking-tightest pt-4">
                WE START <br />
                WITH <br />
                <span className="underline decoration-[#111111]/30">THE IDEA.</span>
              </h2>

              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl text-[#111111] leading-[0.92] tracking-tightest pt-4">
                THEN WE USE <br />
                AI TO MOVE <br />
                <span className="text-[#626B70]">FASTER.</span>
              </h2>
            </motion.div>

            <p className="text-base sm:text-lg text-[#626B70] leading-relaxed max-w-xl font-normal pt-4 border-t border-[#DDD9D1]">
              Traditional video shoots take weeks and cost tens of thousands. By pairing deep direct-response marketing instincts with hyper-realistic AI generation, we turn high-converting concepts into polished, campaign-ready creative in a fraction of the time.
            </p>
          </div>

          {/* RIGHT: High-Fashion Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden bg-[#ECE9E2] border border-[#DDD9D1] shadow-md group">
              <Image
                src="/images/about.webp"
                alt="FIRSTFRAME Studio Philosophy"
                fill
                loading="lazy"
                quality={85}
                className="object-cover grayscale contrast-105 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#F5F3EE]/95 backdrop-blur-md p-6 rounded-[18px] border border-[#DDD9D1]">
                <div className="text-[10px] font-semibold tracking-widest text-[#626B70] uppercase">
                  FOUNDER & CREATIVE DIRECTOR
                </div>
                <p className="font-serif-editorial text-lg text-[#111111] mt-1.5 leading-snug">
                  “Turning creative vision into scroll-stopping AI ads that scale brands.”
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
