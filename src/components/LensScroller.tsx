"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ApertureBlades from "./ApertureBlades";
import ResumePanel from "./ResumePanel";
import { resumeSections } from "@/data/resume";

export default function LensScroller() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPhoto, setShowPhoto] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const section = resumeSections[activeIndex];

  const transitionTo = useCallback(
    (newIndex: number) => {
      if (isTransitioning || newIndex < 0 || newIndex >= resumeSections.length) return;
      if (newIndex === activeIndex) return;

      setIsTransitioning(true);
      setShowPhoto(false);

      // Close aperture
      setTimeout(() => {
        setActiveIndex(newIndex);
        // Open aperture with new photo
        setTimeout(() => {
          setShowPhoto(true);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 400);
        }, 300);
      }, 350);
    },
    [activeIndex, isTransitioning]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current || isTransitioning) return;

      isScrolling.current = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      transitionTo(activeIndex + direction);

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        transitionTo(activeIndex + (delta > 0 ? 1 : -1));
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isTransitioning, transitionTo]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Section title */}
      <AnimatePresence mode="wait">
        <motion.div
          key={section.id}
          className="absolute top-18 md:top-20 left-0 right-0 text-center z-20"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2
            className="text-3xl md:text-7xl font-black uppercase tracking-tight"
            style={{ color: section.color }}
          >
            {section.title}
          </h2>
          <p className="text-gray-400 text-sm md:text-lg tracking-widest uppercase mt-1">
            {section.subtitle}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Center lens -- on mobile, sits in upper portion to leave room for resume below */}
      <div className="absolute inset-0 flex items-start md:items-center justify-center pt-[28%] md:pt-0 z-10">
        <div className="relative w-40 h-40 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
          {/* Photo */}
          <AnimatePresence mode="wait">
            {showPhoto && (
              <motion.div
                key={section.id}
                className="absolute inset-0 rounded-full overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${section.photo})`,
                    backgroundColor: section.color + "33",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Aperture overlay */}
          <ApertureBlades isClosing={!showPhoto} color="#0a0a0a" />

          {/* Lens ring */}
          <div
            className="absolute inset-0 rounded-full border-4 pointer-events-none z-40"
            style={{ borderColor: section.color }}
          />
        </div>
      </div>

      {/* Resume panels */}
      <ResumePanel section={section} isActive={showPhoto && !isTransitioning} />

      {/* Section indicators */}
      <div className="absolute right-3 md:right-6 top-[30%] md:top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {resumeSections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => transitionTo(i)}
            className="w-3 h-3 rounded-full border-2 transition-all duration-300"
            style={{
              borderColor: s.color,
              backgroundColor: i === activeIndex ? s.color : "transparent",
              transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={`Go to ${s.title} section`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      {activeIndex === 0 && !isTransitioning && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-sm z-20 hidden md:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="block text-center">Scroll to explore</span>
          <span className="block text-center text-2xl">&#x25BE;</span>
        </motion.div>
      )}
    </div>
  );
}
