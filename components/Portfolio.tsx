"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, X, Layers, CheckCircle2, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  image: string;
  video?: string;
  isFullWidth?: boolean;
  client: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  overview: string;
}

const projects: Project[] = [
  {
    id: "esmi-ugc",
    number: "01",
    title: "Esmi Skin Minerals UGC",
    category: "AI UGC CAMPAIGN",
    tag: "SKINCARE / DTC",
    description: "High-converting organic UGC creator review video showcasing skin mineral routines.",
    image: "/images/ugc_beauty.webp",
    video: "/videos/esmi_ugc.mp4",
    client: "Esmi Skin Minerals",
    deliverables: ["Vertical TikTok/Reels Video", "AI Voiceover UGC", "Hook Variations"],
    metrics: [
      { label: "ROAS Increase", value: "+380%" },
      { label: "Hook Rate", value: "74.2%" },
      { label: "Impressions", value: "2.8M+" },
    ],
    overview:
      "A high-impact direct-response UGC ad featuring authentic creator storytelling, product application close-ups, and problem-solution scripting tailored for TikTok & Instagram.",
  },
  {
    id: "face-cream-ugc",
    number: "02",
    title: "Face Cream Hydration UGC",
    category: "AI UGC CAMPAIGN",
    tag: "LUXURY COSMETICS",
    description: "Creator-style product demonstration and texture breakdown built for Meta & TikTok paid feeds.",
    image: "/images/beauty.webp",
    video: "/videos/face_cream.mp4",
    client: "Aura Face Botanicals",
    deliverables: ["Short-Form UGC Reel", "Voiceover Testimonial", "Paid Social Ad"],
    metrics: [
      { label: "Hook Rate", value: "72.1%" },
      { label: "Conversion", value: "+210%" },
      { label: "Impressions", value: "3.2M+" },
    ],
    overview:
      "Natural, aesthetic UGC showcase demonstrating cream application, formula absorbency, and radiant skin finish with crystal-clear voiceover.",
  },
  {
    id: "ftune-gwr-ugc",
    number: "03",
    title: "Ftune GRWM Beauty UGC",
    category: "AI UGC CAMPAIGN",
    tag: "BEAUTY & PERSONAL CARE",
    description: "Viral-style creator reel demonstrating get-ready-with-me routine and instant product results.",
    image: "/images/ugc_lifestyle.webp",
    video: "/videos/ftune_gwr_video.mp4",
    client: "Ftune Beauty",
    deliverables: ["GRWM Social Ad", "Organic Reel Hook", "4 UGC Angle Swaps"],
    metrics: [
      { label: "Video Completion", value: "52%" },
      { label: "ROAS Boost", value: "+340%" },
      { label: "Shares", value: "18.4K" },
    ],
    overview:
      "An engaging Get Ready With Me (GRWM) style UGC creative designed to hook viewers within 1 second and drive high purchase intent.",
  },
  {
    id: "fashion",
    number: "04",
    title: "Maison Nord Editorial",
    category: "AI PRODUCT CAMPAIGN",
    tag: "HIGH FASHION",
    description: "Editorial fashion campaign rendered in surreal architectural spaces and cinematic lighting.",
    image: "/images/ugc_fashion.webp",
    isFullWidth: true,
    client: "MAISON NORD",
    deliverables: ["Editorial Lookbook Visuals", "Hero Campaign Film", "Instagram Reels"],
    metrics: [
      { label: "Engagement", value: "4.8x Avg" },
      { label: "Save Rate", value: "12.3%" },
      { label: "Production Savings", value: "85%" },
    ],
    overview:
      "Blending architectural CGI worlds with AI model generation to create an impossible luxury editorial atmosphere without traditional location drag.",
  },
];

const categories = ["ALL", "AI UGC CAMPAIGN", "AI PRODUCT CAMPAIGN"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-36 border-b border-[#DDD9D1]/80 bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#DDD9D1] pb-10">
          <div>
            <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase mb-3">
              01 / PORTFOLIO
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#111111] tracking-tightest">
              SELECTED WORK
            </h2>
            <p className="text-sm sm:text-base text-[#626B70] font-normal leading-relaxed pt-3 max-w-md">
              Creative built to stop the scroll and move the audience.
            </p>
          </div>

          {/* Filter Tabs & Scroll Controls */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#111111] text-[#F5F3EE] shadow-sm"
                      : "bg-[#ECE9E2] border border-[#DDD9D1] text-[#626B70] hover:text-[#111111]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider Arrow Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Scroll Left"
                className="w-11 h-11 rounded-full border border-[#DDD9D1] bg-[#F5F3EE] hover:bg-[#111111] hover:text-[#F5F3EE] hover:border-[#111111] transition-all duration-300 flex items-center justify-center text-[#111111] shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2]" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll Right"
                className="w-11 h-11 rounded-full border border-[#DDD9D1] bg-[#F5F3EE] hover:bg-[#111111] hover:text-[#F5F3EE] hover:border-[#111111] transition-all duration-300 flex items-center justify-center text-[#111111] shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* HORIZONTAL SLIDER CAROUSEL */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="VIEW CASE STUDY ↗"
              className="snap-start shrink-0 w-[300px] sm:w-[380px] lg:w-[420px] group cursor-pointer flex flex-col justify-between space-y-5 bg-[#ECE9E2]/60 p-5 sm:p-6 rounded-[32px] border border-[#DDD9D1] hover:border-[#111111]/40 transition-all duration-500 shadow-sm"
            >
              {/* Media Card Preview */}
              <div className="relative w-full aspect-[9/14] rounded-[24px] overflow-hidden bg-[#ECE9E2] border border-[#DDD9D1]">
                {project.video ? (
                  <video
                    src={`${project.video}#t=0.1`}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03] pointer-events-none"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    quality={85}
                    className="object-cover grayscale contrast-105 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 300px, 420px"
                  />
                )}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-opacity duration-300" />

                {/* Play Overlay Button */}
                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#F5F3EE]/95 backdrop-blur-md border border-[#DDD9D1] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:bg-[#111111] group-hover:text-[#F5F3EE] transition-all duration-300">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-5 left-5">
                  <div className="bg-[#111111]/90 backdrop-blur-md text-[#F5F3EE] text-[10px] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Editorial Details */}
              <div className="space-y-2 pt-1 px-1">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#626B70] uppercase">
                  <span>{project.number} — {project.tag}</span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl text-[#111111] group-hover:translate-x-2 transition-transform duration-300 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#626B70] leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold tracking-widest text-[#111111] uppercase group-hover:underline">
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal Drawer */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F5F3EE] border border-[#DDD9D1] w-full max-w-3xl rounded-[24px] max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#DDD9D1] hover:bg-[#ECE9E2] transition-colors text-[#111111] z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 mb-6 pr-10">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold tracking-widest text-[#626B70] uppercase">
                  {selectedProject.number} // {selectedProject.client}
                </span>
                {selectedProject.video && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#111111] text-[#F5F3EE] text-[9px] font-bold tracking-wider uppercase">
                    VIDEO SAMPLE
                  </span>
                )}
              </div>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#111111]">
                {selectedProject.title}
              </h3>
              <p className="text-sm sm:text-base text-[#626B70]">
                {selectedProject.overview}
              </p>
            </div>

            <div className="relative w-full rounded-[18px] overflow-hidden mb-8 border border-[#DDD9D1] bg-black flex items-center justify-center shadow-lg">
              {selectedProject.video ? (
                <div className="w-full bg-black flex justify-center py-2">
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[580px] w-auto rounded-[12px] shadow-2xl object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8 bg-[#ECE9E2] p-4 sm:p-6 rounded-[16px] border border-[#DDD9D1]">
              {selectedProject.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif-editorial text-2xl sm:text-3xl text-[#111111]">
                    {m.value}
                  </div>
                  <div className="text-[10px] sm:text-xs tracking-wider uppercase text-[#626B70] mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-semibold tracking-widest text-[#111111] uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#626B70]" />
                <span>Deliverables & Format</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F3EE] border border-[#DDD9D1] text-xs text-[#111111]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDD9D1] flex items-center justify-between">
              <span className="text-xs text-[#626B70]">Want a campaign like this?</span>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                data-cursor="START ↗"
                className="px-6 py-3 rounded-full bg-[#111111] text-[#F5F3EE] text-xs font-semibold tracking-widest uppercase hover:bg-black transition-all flex items-center gap-2"
              >
                <span>REQUEST BRIEF</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
