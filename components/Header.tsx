"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "WORK", href: "#portfolio" },
  { name: "SERVICES", href: "#services" },
  { name: "PROCESS", href: "#process" },
  { name: "ABOUT", href: "#about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 40);

          const scrollPosition = scrollY + 200;
          const sections = navLinks.map((link) => link.href.substring(1));

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F5F3EE]/85 backdrop-blur-md border-b border-[#DDD9D1] py-4 shadow-sm"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between">
        
        {/* LEFT: Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-[#111111] uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#111111] inline-block transition-transform duration-300 group-hover:scale-125" />
          <span>FIRSTFRAME</span>
        </a>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.18em] text-[#626B70]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`transition-colors duration-200 hover:text-[#111111] hover-line ${
                  isActive ? "text-[#111111] font-semibold" : ""
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Magnetic CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            data-cursor="START ↗"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-[#F5F3EE] text-[11px] font-medium tracking-widest uppercase hover:bg-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 stroke-[1.5]" />
          ) : (
            <Menu className="w-6 h-6 stroke-[1.5]" />
          )}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#F5F3EE]/98 backdrop-blur-xl border-b border-[#DDD9D1] py-8 px-6 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col gap-6 text-center text-xs tracking-[0.2em] font-semibold text-[#111111] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="py-2 border-b border-[#DDD9D1]/50 hover:text-[#626B70] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#111111] text-[#F5F3EE] text-xs font-semibold tracking-widest uppercase"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2]" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
