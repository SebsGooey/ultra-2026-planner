"use client";

import { useState } from "react";

interface ExportModalProps {
  code: string;
  onClose: () => void;
}

export default function ExportModal({ code, onClose }: ExportModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select the text so user can copy manually
      const textarea = document.querySelector<HTMLTextAreaElement>("#export-code");
      if (textarea) {
        textarea.select();
      }
    }
  };

  return (
    <div className="bg-[#141414] border border-white/10 rounded-xl p-4 mx-4 mb-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-white">Your Schedule Code</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-white text-lg leading-none">&times;</button>
      </div>
      <p className="text-xs text-gray-400 mb-3">Share this code with a friend so they can import your schedule.</p>
      <textarea
        id="export-code"
        readOnly
        value={code}
        className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-xs text-gray-300 font-mono resize-none focus:outline-none"
        rows={3}
      />
      <button
        onClick={handleCopy}
        className={`mt-2 w-full py-2 rounded-lg text-xs font-medium transition-all ${
          copied
            ? "bg-green-500/20 text-green-400"
            : "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
        }`}
      >
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
}
