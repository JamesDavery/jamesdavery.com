import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual X32 Compact Mixer | James Davery",
  description:
    "Web-based virtual replica of the Behringer X32 Compact 40-input digital mixing console.",
};

export default function X32MixerPage() {
  return (
    <div className="pt-16 h-screen flex flex-col bg-[#0a0a0a]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <a
          href="/apps"
          className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Apps
        </a>
        <span className="text-gray-500 text-xs font-mono">VIRTUAL X32 COMPACT</span>
      </div>
      <iframe
        src="/apps/x32-mixer.html"
        className="flex-1 w-full border-0"
        title="Virtual X32 Compact Mixer"
        allow="autoplay"
      />
    </div>
  );
}
