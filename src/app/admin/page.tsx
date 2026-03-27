import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | James Davery",
};

export default function AdminPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-black uppercase tracking-tight text-white mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/admin/beats"
          className="bg-[#141420] border border-white/10 rounded-xl p-8 hover:border-[#e63946]/50 transition-colors"
        >
          <h2 className="text-white text-xl font-bold mb-2">Manage Beats</h2>
          <p className="text-gray-400 text-sm">
            Upload, edit, and manage beat listings and prices.
          </p>
        </Link>

        <Link
          href="/admin/products"
          className="bg-[#141420] border border-white/10 rounded-xl p-8 hover:border-[#2a9d8f]/50 transition-colors"
        >
          <h2 className="text-white text-xl font-bold mb-2">Manage Downloads</h2>
          <p className="text-gray-400 text-sm">
            Upload and manage downloadable products and donation stats.
          </p>
        </Link>
      </div>
    </div>
  );
}
