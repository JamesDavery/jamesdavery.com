"use client";

import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
  color?: string;
}

export default function AudioPlayer({ src, color = "#e63946" }: AudioPlayerProps) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<ReturnType<typeof import("wavesurfer.js").default.create> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (!waveformRef.current) return;

    let ws: ReturnType<typeof import("wavesurfer.js").default.create>;

    import("wavesurfer.js").then((WaveSurfer) => {
      ws = WaveSurfer.default.create({
        container: waveformRef.current!,
        waveColor: "#444",
        progressColor: color,
        cursorColor: color,
        barWidth: 2,
        barGap: 1,
        barRadius: 2,
        height: 40,
        url: src,
      });

      ws.on("ready", () => {
        wavesurferRef.current = ws;
        const dur = ws.getDuration();
        setDuration(formatTime(dur));
      });

      ws.on("audioprocess", () => {
        setCurrentTime(formatTime(ws.getCurrentTime()));
      });

      ws.on("play", () => setIsPlaying(true));
      ws.on("pause", () => setIsPlaying(false));
      ws.on("finish", () => setIsPlaying(false));
    });

    return () => {
      ws?.destroy();
    };
  }, [src, color]);

  function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  function togglePlay() {
    wavesurferRef.current?.playPause();
  }

  return (
    <div className="flex items-center gap-3 w-full">
      <button
        onClick={togglePlay}
        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors"
        style={{ backgroundColor: color }}
      >
        {isPlaying ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      <div ref={waveformRef} className="flex-1 min-w-0" />
      <span className="text-xs text-gray-500 shrink-0 tabular-nums">
        {currentTime} / {duration}
      </span>
    </div>
  );
}
