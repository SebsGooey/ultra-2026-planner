"use client";

import { useState, useRef, useCallback } from "react";

export default function MapView() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(s + 0.5, 5));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((s) => {
      const next = Math.max(s - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (scale <= 1) return;
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      posStart.current = { ...position };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [scale, position]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPosition({
        x: posStart.current.x + dx,
        y: posStart.current.y + dy,
      });
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-180px)]">
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden bg-[#0a0a0a] select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default", touchAction: "none" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sitemap.jpg"
          alt="Ultra Music Festival 2026 Site Map — Bayfront Park, Miami"
          className="w-full h-full object-contain pointer-events-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? "none" : "transform 0.2s ease-out",
          }}
          draggable={false}
        />
      </div>

      {/* Zoom controls */}
      <div className="flex items-center justify-center gap-3 py-3 px-4 bg-[#0a0a0a]">
        <button
          onClick={zoomOut}
          disabled={scale <= 1}
          className="w-10 h-10 rounded-full bg-white/10 text-white text-lg font-bold flex items-center justify-center transition-all hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Zoom out"
        >
          &minus;
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-xs font-medium transition-all hover:bg-white/20"
        >
          {Math.round(scale * 100)}%
        </button>
        <button
          onClick={zoomIn}
          disabled={scale >= 5}
          className="w-10 h-10 rounded-full bg-white/10 text-white text-lg font-bold flex items-center justify-center transition-all hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Zoom in"
        >
          +
        </button>
      </div>
    </div>
  );
}
