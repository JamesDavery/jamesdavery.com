"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

interface BeatCardProps {
  id: string;
  title: string;
  bpm: number;
  musicalKey: string;
  genre: string;
  price: number;
  premiumPrice: number;
  exclusivePrice: number;
  audioUrl: string;
  imageUrl?: string;
  onAddToCart: (beatId: string, license: string, price: number) => void;
}

const LICENSE_OPTIONS = [
  { key: "basic", label: "Basic" },
  { key: "premium", label: "Premium" },
  { key: "exclusive", label: "Exclusive" },
] as const;

export default function BeatCard({
  id,
  title,
  bpm,
  musicalKey,
  genre,
  price,
  premiumPrice,
  exclusivePrice,
  audioUrl,
  imageUrl,
  onAddToCart,
}: BeatCardProps) {
  const [selectedLicense, setSelectedLicense] = useState<"basic" | "premium" | "exclusive">("basic");

  const prices = { basic: price, premium: premiumPrice, exclusive: exclusivePrice };
  const currentPrice = prices[selectedLicense];

  return (
    <div className="bg-[#141420] rounded-xl border border-white/10 overflow-hidden hover:border-[#e63946]/50 transition-colors group">
      {/* Image */}
      <div
        className="w-full h-40 bg-cover bg-center"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
          backgroundColor: "#1a1a2e",
        }}
      />

      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <div className="flex gap-2 text-xs text-gray-500 mb-3">
          <span className="bg-white/5 px-2 py-0.5 rounded">{bpm} BPM</span>
          <span className="bg-white/5 px-2 py-0.5 rounded">{musicalKey}</span>
          <span className="bg-white/5 px-2 py-0.5 rounded">{genre}</span>
        </div>

        <AudioPlayer src={audioUrl} />

        {/* License selector */}
        <div className="flex gap-1 mt-3">
          {LICENSE_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedLicense(opt.key)}
              className={`flex-1 text-xs py-1 rounded transition-colors ${
                selectedLicense === opt.key
                  ? "bg-[#e63946] text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Price + add to cart */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-white font-bold text-lg">${currentPrice.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(id, selectedLicense, currentPrice)}
            className="bg-[#e63946] hover:bg-[#c5303c] text-white text-sm font-bold px-4 py-2 rounded transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
