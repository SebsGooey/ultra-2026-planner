"use client";

export type ViewMode = "lineup" | "schedule" | "friends" | "map";

interface ViewToggleProps {
  view: ViewMode;
  onChangeView: (view: ViewMode) => void;
}

const TABS: { id: ViewMode; label: string }[] = [
  { id: "lineup", label: "Lineup" },
  { id: "schedule", label: "Schedule" },
  { id: "friends", label: "Friends" },
  { id: "map", label: "Map" },
];

export default function ViewToggle({ view, onChangeView }: ViewToggleProps) {
  return (
    <div className="flex mx-4 bg-white/5 rounded-lg p-1">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChangeView(tab.id)}
          className={`flex-1 py-2 text-xs font-medium rounded-md transition-all ${
            view === tab.id
              ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
