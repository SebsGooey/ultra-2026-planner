"use client";

export type ViewMode = "lineup" | "schedule";

interface ViewToggleProps {
  view: ViewMode;
  onChangeView: (view: ViewMode) => void;
}

export default function ViewToggle({ view, onChangeView }: ViewToggleProps) {
  return (
    <div className="flex mx-4 bg-white/5 rounded-lg p-1">
      <button
        onClick={() => onChangeView("lineup")}
        className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
          view === "lineup"
            ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
            : "text-gray-400 hover:text-gray-300"
        }`}
      >
        Full Lineup
      </button>
      <button
        onClick={() => onChangeView("schedule")}
        className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
          view === "schedule"
            ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
            : "text-gray-400 hover:text-gray-300"
        }`}
      >
        My Schedule
      </button>
    </div>
  );
}
