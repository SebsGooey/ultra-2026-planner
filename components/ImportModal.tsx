"use client";

import { useState } from "react";
import { decodeSchedule } from "@/lib/friends";
import { SCHEDULE } from "@/lib/schedule-data";

interface ImportModalProps {
  onImport: (name: string, favoriteIds: string[]) => void;
  onClose: () => void;
}

export default function ImportModal({ onImport, onClose }: ImportModalProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const validIds = new Set(SCHEDULE.map((a) => a.id));

  const handleImport = () => {
    setError("");
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("Enter a name for this friend.");
      return;
    }

    const decoded = decodeSchedule(code);
    if (!decoded) {
      setError("Invalid code. Ask your friend to re-export.");
      return;
    }

    const filtered = decoded.filter((id) => validIds.has(id));
    if (filtered.length === 0) {
      setError("No valid artists found in this code.");
      return;
    }

    onImport(trimmedName, filtered);
    setName("");
    setCode("");
  };

  return (
    <div className="bg-[#141414] border border-white/10 rounded-xl p-4 mx-4 mb-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Import Friend&apos;s Schedule</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-white text-lg leading-none">&times;</button>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Friend's name..."
        className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 mb-2"
      />
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste schedule code here..."
        className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-xs text-gray-300 font-mono resize-none focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
        rows={3}
      />
      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
      <button
        onClick={handleImport}
        className="mt-2 w-full py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-cyan-400 to-violet-500 text-white transition-all"
      >
        Import Schedule
      </button>
    </div>
  );
}
