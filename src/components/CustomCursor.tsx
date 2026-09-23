"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable custom cursor on mobile touch devices or prefers-reduced-motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number | null = null;
    let isVisible = false;

    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible && cursorRef.current) {
        isVisible = true;
        cursorRef.current.style.opacity = "1";
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const cursorTarget = target.closest?.("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest?.("button") ||
        target.closest?.("a")
      ) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-300 opacity-0 hidden md:block speed-transform"
      style={{ willChange: "transform" }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#111111] transition-all duration-300 flex items-center justify-center font-semibold text-[10px] tracking-wider uppercase ${
          cursorText
            ? "px-4 py-2 bg-[#111111] text-[#F5F3EE] border-[#111111] shadow-xl whitespace-nowrap"
            : isHovered
            ? "w-10 h-10 bg-[#111111]/15 border-opacity-80 scale-125"
            : "w-4 h-4 bg-[#111111]/30 border-opacity-40"
        }`}
      >
        {cursorText}
      </div>
    </div>
  );
}
