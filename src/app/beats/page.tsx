"use client";

import { useState, useCallback } from "react";
import BeatCard from "@/components/BeatCard";
import Cart, { type CartItem } from "@/components/Cart";

// Placeholder beats data (will come from API/database)
const DEMO_BEATS = [
  {
    id: "1",
    title: "Midnight Drive",
    bpm: 140,
    musicalKey: "Am",
    genre: "Trap",
    price: 29.99,
    premiumPrice: 59.99,
    exclusivePrice: 199.99,
    audioUrl: "/audio/beat-preview-1.mp3",
    imageUrl: "/images/beat-1.jpg",
  },
  {
    id: "2",
    title: "Golden Hour",
    bpm: 95,
    musicalKey: "Cmaj",
    genre: "R&B",
    price: 24.99,
    premiumPrice: 49.99,
    exclusivePrice: 149.99,
    audioUrl: "/audio/beat-preview-2.mp3",
    imageUrl: "/images/beat-2.jpg",
  },
  {
    id: "3",
    title: "Voltage",
    bpm: 170,
    musicalKey: "Fm",
    genre: "Drill",
    price: 34.99,
    premiumPrice: 69.99,
    exclusivePrice: 249.99,
    audioUrl: "/audio/beat-preview-3.mp3",
    imageUrl: "/images/beat-3.jpg",
  },
  {
    id: "4",
    title: "Velvet",
    bpm: 85,
    musicalKey: "Dbmaj",
    genre: "Neo-Soul",
    price: 19.99,
    premiumPrice: 39.99,
    exclusivePrice: 129.99,
    audioUrl: "/audio/beat-preview-4.mp3",
    imageUrl: "/images/beat-4.jpg",
  },
];

export default function BeatsPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = useCallback(
    (beatId: string, license: string, price: number) => {
      const beat = DEMO_BEATS.find((b) => b.id === beatId);
      if (!beat) return;

      setCartItems((prev) => [
        ...prev,
        { beatId, title: beat.title, license, price },
      ]);
      setCartOpen(true);
    },
    []
  );

  const handleRemove = useCallback((index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  async function handleCheckout() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Checkout failed. Please try again.");
    }
  }

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#e63946]">
            Beats
          </h1>
          <p className="text-gray-400 text-lg mt-2">
            Premium beats ready for your next project.
          </p>
        </div>
        <button
          onClick={() => setCartOpen(true)}
          className="relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#e63946] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DEMO_BEATS.map((beat) => (
          <BeatCard
            key={beat.id}
            id={beat.id}
            title={beat.title}
            bpm={beat.bpm}
            musicalKey={beat.musicalKey}
            genre={beat.genre}
            price={beat.price}
            premiumPrice={beat.premiumPrice}
            exclusivePrice={beat.exclusivePrice}
            audioUrl={beat.audioUrl}
            imageUrl={beat.imageUrl}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <Cart
        items={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
