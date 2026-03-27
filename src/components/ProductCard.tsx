"use client";

import DonationGate from "./DonationGate";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  minPrice: number;
}

export default function ProductCard({ id, title, description, imageUrl, minPrice }: ProductCardProps) {
  return (
    <div className="bg-[#141420] rounded-xl border border-white/10 overflow-hidden hover:border-[#2a9d8f]/50 transition-colors">
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
          backgroundColor: "#1a1a2e",
        }}
      />
      <div className="p-6">
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
        <DonationGate productId={id} minPrice={minPrice} />
      </div>
    </div>
  );
}
