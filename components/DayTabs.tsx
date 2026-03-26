"use client";

import { DayId } from "@/lib/types";

const DAYS: { id: DayId; label: string; date: string }[] = [
  { id: "friday", label: "FRI", date: "3/27" },
  { id: "saturday", label: "SAT", date: "3/28" },
  { id: "sunday", label: "SUN", date: "3/29" },
];

interface DayTabsProps {
  selectedDay: DayId;
  onSelectDay: (day: DayId) => void;
  favCountsByDay: Record<DayId, number>;
}

export default function DayTabs({ selectedDay, onSelectDay, favCountsByDay }: DayTabsProps) {
  return (
    <div className="flex gap-1 px-4">
      {DAYS.map((day) => {
        const isActive = selectedDay === day.id;
        const favCount = favCountsByDay[day.id] || 0;
        return (
          <button
            key={day.id}
            onClick={() => onSelectDay(day.id)}
            className={`flex-1 py-2.5 px-2 rounded-lg text-sm font-semibold transition-all ${
              isActive
                ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {day.label} {day.date}
            {favCount > 0 && (
              <span className={`ml-1.5 text-xs ${isActive ? "text-white/80" : "text-yellow-400/80"}`}>
                &#9733;{favCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
