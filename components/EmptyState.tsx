"use client";

interface EmptyStateProps {
  dayLabel: string;
  onSwitchToLineup: () => void;
}

export default function EmptyState({ dayLabel, onSwitchToLineup }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      <div className="text-4xl mb-4">&#9825;</div>
      <p className="text-gray-400 text-sm mb-4">
        No favorites yet for {dayLabel}. Tap the &#9825; on any artist to start building your schedule!
      </p>
      <button
        onClick={onSwitchToLineup}
        className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Browse Full Lineup
      </button>
    </div>
  );
}
