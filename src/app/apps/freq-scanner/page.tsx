import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FreqScan Pro | James Davery",
  description:
    "Wireless microphone frequency scanner and coordinator for Shure BLX188/CVL systems.",
};

export default function FreqScannerPage() {
  return (
    <div className="pt-16 h-screen flex flex-col bg-[#050a0f]">
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
        <span className="text-gray-500 text-xs font-mono">FREQSCAN PRO</span>
      </div>
      <iframe
        src="/apps/freq-scanner.html"
        className="flex-1 w-full border-0"
        title="FreqScan Pro - Wireless Mic Frequency Scanner"
      />
    </div>
  );
}
