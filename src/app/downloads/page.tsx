import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Downloads | James Davery",
  description: "Download software, instruments, and tools. Pay what you want.",
};

// Placeholder products (will come from database)
const PRODUCTS = [
  {
    id: "dvds-vst",
    title: "DVDs Visual VST Instrument Suite",
    description:
      "A complete suite of virtual instruments designed for modern producers. Includes synths, samplers, drum machines, and effects — all with stunning visual interfaces. Compatible with all major DAWs.",
    imageUrl: "/images/dvds-vst.jpg",
    minPrice: 0,
  },
];

export default function DownloadsPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#2a9d8f] mb-2">
        Downloads
      </h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        Free and donation-based downloads. Pay what you want — every dollar
        supports independent development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
            minPrice={product.minPrice}
          />
        ))}
      </div>
    </div>
  );
}
