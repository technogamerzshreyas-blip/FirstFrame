"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
}

const servicesList: Service[] = [
  {
    number: "01",
    title: "AI UGC ADS",
    description: "Authentic creator-style ads powered by AI voice & video models built for direct-response scale.",
    image: "/images/ugc_beauty.webp",
  },
  {
    number: "02",
    title: "PRODUCT VIDEOS",
    description: "Sleek, high-definition product visual showcases designed to highlight key product features instantly.",
    image: "/images/ugc_tech.webp",
  },
  {
    number: "03",
    title: "SOCIAL MEDIA ADS",
    description: "Hook-driven direct response creative tailored for TikTok, Reels, Shorts and Meta paid feeds.",
    image: "/images/ugc_fashion.webp",
  },
  {
    number: "04",
    title: "AI PRODUCT CREATIVES",
    description: "Generative lifestyle placements placing your product into impossible, high-fashion visual environments.",
    image: "/images/about.webp",
  },
  {
    number: "05",
    title: "AD CREATIVE CONCEPTS",
    description: "Hooks, scripts, visual direction, and complete audience angles structured for high-velocity testing.",
    image: "/images/hero.webp",
  },
  {
    number: "06",
    title: "CREATIVE STRATEGY",
    description: "Campaign architecture designed around consumer psychology, brand positioning and customer acquisition.",
    image: "/images/ugc_lifestyle.webp",
  },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-36 border-b border-[#DDD9D1]/80 bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 max-w-xl">
          <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase mb-3">
            03 / CAPABILITIES
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-7xl text-[#111111] tracking-tightest">
            WHAT WE CREATE
          </h2>
          <p className="text-sm sm:text-base text-[#626B70] font-normal leading-relaxed pt-2">
            Tailored creative production designed specifically for social-first advertising and high-converting campaigns.
          </p>
        </div>

        {/* Large Editorial Rows */}
        <div className="divide-y divide-[#DDD9D1] border-y border-[#DDD9D1] relative">
          {servicesList.map((service, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                data-cursor="EXPLORE ↗"
                className={`group py-10 px-4 sm:px-6 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer ${
                  isHovered ? "bg-[#ECE9E2] pl-8" : "bg-transparent"
                } ${hoveredIdx !== null && !isHovered ? "opacity-40" : "opacity-100"}`}
              >
                {/* Left: Number, Title, Description */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 flex-1">
                  <span className="text-xs font-mono font-semibold text-[#626B70]">
                    {service.number}
                  </span>

                  <div className="space-y-1 max-w-xl">
                    <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#111111] transition-transform duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#626B70] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Right: Floating Media Preview Thumbnail (Desktop) & Arrow */}
                <div className="flex items-center gap-8 self-end md:self-center">
                  {/* Floating Media Preview on Hover */}
                  {isHovered && (
                    <div className="hidden lg:block w-72 h-44 rounded-[16px] overflow-hidden border border-[#DDD9D1] shadow-xl relative animate-fadeIn">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover grayscale contrast-105"
                      />
                    </div>
                  )}

                  {/* Arrow Icon */}
                  <div className="w-12 h-12 rounded-full border border-[#DDD9D1] flex items-center justify-center text-[#626B70] group-hover:text-[#F5F3EE] group-hover:bg-[#111111] group-hover:border-[#111111] transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 stroke-[2] transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
