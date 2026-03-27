"use client";

import { motion } from "framer-motion";
import type { ResumeSection } from "@/data/resume";

interface ResumePanelProps {
  section: ResumeSection;
  isActive: boolean;
}

export default function ResumePanel({ section, isActive }: ResumePanelProps) {
  const leftItems = section.items.slice(0, Math.ceil(section.items.length / 2));
  const rightItems = section.items.slice(Math.ceil(section.items.length / 2));

  return (
    <>
      {/* Desktop: side panels */}
      <div className="absolute inset-0 hidden md:flex items-center justify-between px-4 md:px-12 pointer-events-none">
        {/* Award badge */}
        {section.award && (
          <motion.div
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white border"
              style={{ borderColor: section.color, backgroundColor: section.color + "22" }}
            >
              {section.award}
            </div>
          </motion.div>
        )}

        {/* Left panel */}
        <motion.div
          className="w-[30%] max-w-sm pointer-events-auto"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isActive ? 0 : -100, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {leftItems.map((cat) => (
            <div key={cat.category} className="mb-6">
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-2 border-b pb-1"
                style={{ borderColor: section.color, color: section.color }}
              >
                {cat.category}
              </h3>
              {cat.entries.map((entry, i) => (
                <div key={i} className="mb-2 text-sm">
                  <p className="font-semibold text-white">{entry.title}</p>
                  {entry.subtitle && (
                    <p className="text-gray-400 text-xs">{entry.subtitle}</p>
                  )}
                  {entry.details && (
                    <p className="text-gray-500 text-xs italic">{entry.details}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Right panel */}
        <motion.div
          className="w-[30%] max-w-sm text-right pointer-events-auto"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: isActive ? 0 : 100, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {rightItems.map((cat) => (
            <div key={cat.category} className="mb-6">
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-2 border-b pb-1"
                style={{ borderColor: section.color, color: section.color }}
              >
                {cat.category}
              </h3>
              {cat.entries.map((entry, i) => (
                <div key={i} className="mb-2 text-sm">
                  <p className="font-semibold text-white">{entry.title}</p>
                  {entry.subtitle && (
                    <p className="text-gray-400 text-xs">{entry.subtitle}</p>
                  )}
                  {entry.details && (
                    <p className="text-gray-500 text-xs italic">{entry.details}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: content below the lens */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 md:hidden z-20 pointer-events-auto overflow-y-auto px-4 pb-4"
        style={{ top: "58%" }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: isActive ? 0 : 30, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Award badge mobile */}
        {section.award && (
          <div
            className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border text-center mb-3 mx-auto w-fit"
            style={{ borderColor: section.color, backgroundColor: section.color + "22" }}
          >
            {section.award}
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {section.items.map((cat) => (
            <div key={cat.category} className="mb-3">
              <h3
                className="text-[10px] font-bold uppercase tracking-widest mb-1 border-b pb-0.5"
                style={{ borderColor: section.color, color: section.color }}
              >
                {cat.category}
              </h3>
              {cat.entries.map((entry, i) => (
                <div key={i} className="mb-1">
                  <p className="font-semibold text-white text-xs leading-tight">{entry.title}</p>
                  {entry.subtitle && (
                    <p className="text-gray-400 text-[10px] leading-tight">{entry.subtitle}</p>
                  )}
                  {entry.details && (
                    <p className="text-gray-500 text-[10px] italic leading-tight">{entry.details}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
