"use client";

interface ConflictBadgeProps {
  conflictNames: string[];
}

export default function ConflictBadge({ conflictNames }: ConflictBadgeProps) {
  return (
    <div className="flex items-center gap-1 text-orange-400 text-xs mt-1">
      <span>&#9888;</span>
      <span>Overlaps with {conflictNames.join(", ")}</span>
    </div>
  );
}
