"use client";

import { motion } from "framer-motion";

interface ApertureBladesProps {
  isClosing: boolean;
  color?: string;
}

const BLADE_COUNT = 8;

export default function ApertureBlades({ isClosing, color = "#1a1a2e" }: ApertureBladesProps) {
  const blades = Array.from({ length: BLADE_COUNT }, (_, i) => {
    const angle = (360 / BLADE_COUNT) * i;
    return { angle, index: i };
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <clipPath id="lens-clip">
            <circle cx="200" cy="200" r="200" />
          </clipPath>
        </defs>
        <g clipPath="url(#lens-clip)">
          {blades.map(({ angle, index }) => (
            <motion.polygon
              key={index}
              points="200,200 100,0 300,0"
              fill={color}
              stroke="#333"
              strokeWidth="0.5"
              style={{ transformOrigin: "200px 200px" }}
              initial={{ rotate: angle, scale: 0 }}
              animate={{
                rotate: angle,
                scale: isClosing ? 1.6 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: index * 0.02,
              }}
            />
          ))}
        </g>
        {/* Lens ring border */}
        <circle
          cx="200"
          cy="200"
          r="198"
          fill="none"
          stroke="#555"
          strokeWidth="4"
        />
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="#333"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
