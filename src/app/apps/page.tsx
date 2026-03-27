import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Applications | James Davery",
  description: "Web-based tools and applications built by James Davery.",
};

const apps = [
  {
    title: "Virtual X32 Compact Mixer",
    description:
      "A web-based virtual mixer module for the Behringer X32 Compact. Control your mixer from any device with a browser — full channel strip, bus routing, effects, and metering.",
    image: "/images/x32-mixer.jpg",
    href: "#",
    tags: ["Audio", "Web App", "Real-time"],
  },
  {
    title: "Wireless Mic Frequency Scanner",
    description:
      "Scan and coordinate wireless microphone frequencies to avoid interference. Supports multiple manufacturer frequency bands and real-time spectrum analysis.",
    image: "/images/freq-scanner.jpg",
    href: "#",
    tags: ["RF", "Audio", "Tool"],
  },
];

export default function AppsPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#e63946] mb-2">
        Web Apps
      </h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        Custom-built web applications for audio professionals and technicians.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {apps.map((app) => (
          <a
            key={app.title}
            href={app.href}
            className="group bg-[#141420] rounded-xl border border-white/10 overflow-hidden hover:border-[#e63946]/50 transition-all hover:scale-[1.02]"
          >
            <div
              className="w-full h-56 bg-cover bg-center transition-transform group-hover:scale-105"
              style={{
                backgroundImage: `url(${app.image})`,
                backgroundColor: "#1a1a2e",
              }}
            />
            <div className="p-6">
              <h2 className="text-white text-2xl font-bold mb-2 group-hover:text-[#e63946] transition-colors">
                {app.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{app.description}</p>
              <div className="flex gap-2 flex-wrap">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-[#e63946] font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                Launch App
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
