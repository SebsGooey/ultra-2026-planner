"use client";

import { StageId } from "@/lib/types";

export const STAGE_COLORS: Record<StageId, { bg: string; text: string; activeBg: string }> = {
  "main-stage": { bg: "bg-amber-500/15", text: "text-amber-400", activeBg: "bg-amber-500/30" },
  "worldwide-stage": { bg: "bg-blue-500/15", text: "text-blue-400", activeBg: "bg-blue-500/30" },
  "resistance-megastructure": { bg: "bg-red-500/15", text: "text-red-400", activeBg: "bg-red-500/30" },
  "resistance-the-cove": { bg: "bg-purple-500/15", text: "text-purple-400", activeBg: "bg-purple-500/30" },
  "live-stage": { bg: "bg-green-500/15", text: "text-green-400", activeBg: "bg-green-500/30" },
  "umf-radio": { bg: "bg-orange-500/15", text: "text-orange-400", activeBg: "bg-orange-500/30" },
  "oasis": { bg: "bg-teal-500/15", text: "text-teal-400", activeBg: "bg-teal-500/30" },
};

const STAGES: { id: StageId | "all"; label: string }[] = [
  { id: "all", label: "All Stages" },
  { id: "main-stage", label: "Main Stage" },
  { id: "worldwide-stage", label: "Worldwide" },
  { id: "resistance-megastructure", label: "Megastructure" },
  { id: "resistance-the-cove", label: "The Cove" },
  { id: "live-stage", label: "Live Stage" },
  { id: "umf-radio", label: "UMF Radio" },
  { id: "oasis", label: "Oasis" },
];

interface StageFilterProps {
  selectedStage: StageId | "all";
  onSelectStage: (stage: StageId | "all") => void;
  stageCounts: Record<string, number>;
}

export default function StageFilter({ selectedStage, onSelectStage, stageCounts }: StageFilterProps) {
  return (
    <div className="flex gap-2 px-4 overflow-x-auto scrollbar-hide pb-1">
      {STAGES.map((stage) => {
        const isActive = selectedStage === stage.id;
        const count = stage.id === "all" ? undefined : stageCounts[stage.id];
        const colors = stage.id !== "all" ? STAGE_COLORS[stage.id] : null;
        return (
          <button
            key={stage.id}
            onClick={() => onSelectStage(stage.id)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              isActive
                ? colors
                  ? `${colors.activeBg} ${colors.text} ring-1 ring-current`
                  : "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {stage.label}
            {count !== undefined && (
              <span className="ml-1 opacity-60">{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
