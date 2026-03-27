"use client";

export default function AdminProductsPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-8">
        Manage Downloads
      </h1>

      <div className="bg-[#141420] border border-white/10 rounded-xl p-8">
        <p className="text-gray-400 mb-6">
          Add downloadable products with optional donation-based pricing.
        </p>

        <form className="flex flex-col gap-4 max-w-lg">
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Title</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#2a9d8f] focus:outline-none"
              placeholder="Product title"
            />
          </div>

          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Description</label>
            <textarea
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#2a9d8f] focus:outline-none resize-none"
              placeholder="Describe the product..."
            />
          </div>

          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">
              Minimum Price ($0 = free)
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              defaultValue="0"
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#2a9d8f] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Product File</label>
            <input
              type="file"
              className="w-full text-gray-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#2a9d8f] file:text-white file:font-bold file:text-sm"
            />
          </div>

          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Cover Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full text-gray-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-white/10 file:text-white file:font-bold file:text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-[#2a9d8f] hover:bg-[#238276] text-white font-bold py-2.5 rounded transition-colors mt-2"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
