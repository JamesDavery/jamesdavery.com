"use client";

import { useState } from "react";

interface DonationGateProps {
  productId: string;
  minPrice: number;
}

export default function DonationGate({ productId, minPrice }: DonationGateProps) {
  const [amount, setAmount] = useState(minPrice > 0 ? minPrice : 0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/downloads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, amount, email }),
      });

      const data = await res.json();

      if (amount > 0 && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else if (data.downloadUrl) {
        window.location.href = data.downloadUrl;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">
          {minPrice > 0 ? `Minimum $${minPrice.toFixed(2)}` : "Name your price (optional)"}
        </label>
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">$</span>
          <input
            type="number"
            min={minPrice}
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white w-24 focus:border-[#2a9d8f] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#2a9d8f] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#2a9d8f] hover:bg-[#238276] text-white font-bold py-2.5 rounded transition-colors disabled:opacity-50"
      >
        {loading ? "Processing..." : amount > 0 ? `Pay $${amount.toFixed(2)} & Download` : "Download Free"}
      </button>
    </form>
  );
}
