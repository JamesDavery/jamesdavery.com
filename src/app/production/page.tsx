import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Production Services | James D. Avery",
  description:
    "Professional virtual production, music studio, streaming, and film editing services.",
};

const services = [
  {
    title: "Virtual Production Studio",
    description:
      "In-home virtual production setup with LED wall technology, real-time rendering, and camera tracking. Perfect for music videos, indie films, commercials, and content creation without the need for expensive location shoots.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["LED Volume / Green Screen", "Unreal Engine Integration", "Real-time Compositing", "Camera Tracking"],
  },
  {
    title: "Music Studio",
    description:
      "Full recording, mixing, and mastering services. Professional-grade equipment, acoustically treated rooms, and years of experience producing across genres.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    features: ["Recording & Tracking", "Mixing & Mastering", "Beat Production", "Vocal Engineering"],
  },
  {
    title: "Streaming & PPV",
    description:
      "Professional live streaming and pay-per-view event services. Multi-camera setups, real-time graphics, and reliable delivery to any platform.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Multi-Camera Production", "Pay-Per-View Setup", "Platform Streaming", "Live Graphics & Overlays"],
  },
  {
    title: "Editing & Film",
    description:
      "Post-production services including video editing, color grading, VFX compositing, and sound design. From rough cuts to final delivery.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m0 2a2 2 0 012 2m-2-2a2 2 0 00-2 2m2-2V2m10 2V2m0 2a2 2 0 012 2m-2-2a2 2 0 00-2 2M7 20v2m0-2a2 2 0 01-2-2m2 2a2 2 0 002-2m10 2v2m0-2a2 2 0 002-2m-2 2a2 2 0 01-2-2" />
      </svg>
    ),
    features: ["Video Editing", "Color Grading", "VFX & Compositing", "Sound Design"],
  },
];

export default function ProductionPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/studio-hero.jpg)",
            backgroundColor: "#1a1a2e",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white mb-4">
            Virtual
            <br />
            <span className="text-[#e9c46a]">Production</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Full-service production capabilities from concept to delivery.
            Studio, stage, screen, and stream.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#141420] rounded-xl border border-white/10 p-8 hover:border-[#e9c46a]/40 transition-colors"
            >
              <div className="text-[#e9c46a] mb-4">{service.icon}</div>
              <h2 className="text-white text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {service.features.map((feat) => (
                  <li key={feat} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#e9c46a] rounded-full shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          Ready to Create?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your project. Reach out through any of the channels below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:contact@jamesdavery.com"
            className="bg-[#e9c46a] hover:bg-[#d4b35a] text-black font-bold px-8 py-3 rounded-lg transition-colors text-sm uppercase tracking-widest"
          >
            Email Me
          </a>
          <a
            href="tel:+15555555555"
            className="border border-[#e9c46a] text-[#e9c46a] hover:bg-[#e9c46a]/10 font-bold px-8 py-3 rounded-lg transition-colors text-sm uppercase tracking-widest"
          >
            Call
          </a>
          <a
            href="#"
            className="border border-white/20 text-white hover:bg-white/5 font-bold px-8 py-3 rounded-lg transition-colors text-sm uppercase tracking-widest"
          >
            Social
          </a>
        </div>
      </section>
    </div>
  );
}
