"use client";

export default function AdminBeatsPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-8">
        Manage Beats
      </h1>

      <div className="bg-[#141420] border border-white/10 rounded-xl p-8">
        <p className="text-gray-400 mb-6">
          Upload new beats, set pricing for each license tier, and manage your catalog.
        </p>

        <form className="flex flex-col gap-4 max-w-lg">
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Title</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#e63946] focus:outline-none"
              placeholder="Beat title"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">BPM</label>
              <input
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#e63946] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Key</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#e63946] focus:outline-none"
                placeholder="Am"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Genre</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#e63946] focus:outline-none"
                placeholder="Trap"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Basic $</label>
              <input
                type="number"
                step="0.01"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#e63946] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Premium $</label>
              <input
                type="number"
                step="0.01"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#e63946] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Exclusive $</label>
              <input
                type="number"
                step="0.01"
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-[#e63946] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Audio File</label>
            <input
              type="file"
              accept="audio/*"
              className="w-full text-gray-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#e63946] file:text-white file:font-bold file:text-sm"
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
            className="bg-[#e63946] hover:bg-[#c5303c] text-white font-bold py-2.5 rounded transition-colors mt-2"
          >
            Upload Beat
          </button>
        </form>
      </div>
    </div>
  );
}
