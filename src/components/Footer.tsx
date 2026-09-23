"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-[#F5F3EE] text-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 space-y-12">
        
        {/* Top Footer Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#DDD9D1]">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-[#111111] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#111111] inline-block transition-transform duration-300 group-hover:scale-125" />
            <span>FIRSTFRAME</span>
          </a>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-8 text-[11px] font-semibold tracking-widest text-[#626B70] uppercase">
            <a href="#portfolio" className="hover:text-[#111111] transition-colors hover-line">
              WORK
            </a>
            <a href="#process" className="hover:text-[#111111] transition-colors hover-line">
              PROCESS
            </a>
            <a href="#about" className="hover:text-[#111111] transition-colors hover-line">
              ABOUT
            </a>
            <a href="#contact" className="hover:text-[#111111] transition-colors hover-line">
              CONTACT
            </a>
          </div>

          {/* Back to Top */}
          <a
            href="#"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#111111] uppercase hover:text-[#626B70] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Bottom Legal & Location */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#626B70] uppercase">
          <div>
            © {new Date().getFullYear()} FIRSTFRAME CREATIVE STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div>
            AI PRODUCTION LAB // GLOBAL REMOTE STUDIO
          </div>
        </div>

      </div>
    </footer>
  );
}
