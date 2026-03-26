"use client";

import { Artist, DayId } from "@/lib/types";
import ArtistCard from "./ArtistCard";
import EmptyState from "./EmptyState";
import { ViewMode } from "./ViewToggle";

const DAY_LABELS: Record<DayId, string> = {
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export function parseTime(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export function getConflicts(artists: Artist[]): Map<string, string[]> {
  const conflicts = new Map<string, string[]>();

  for (let i = 0; i < artists.length; i++) {
    for (let j = i + 1; j < artists.length; j++) {
      const a = artists[i];
      const b = artists[j];

      const aStart = parseTime(a.startTime);
      let aEnd = parseTime(a.endTime);
      if (aEnd <= aStart) aEnd += 24 * 60;

      const bStart = parseTime(b.startTime);
      let bEnd = parseTime(b.endTime);
      if (bEnd <= bStart) bEnd += 24 * 60;

      if (aStart < bEnd && bStart < aEnd) {
        const aConflicts = conflicts.get(a.id) || [];
        aConflicts.push(b.name);
        conflicts.set(a.id, aConflicts);

        const bConflicts = conflicts.get(b.id) || [];
        bConflicts.push(a.name);
        conflicts.set(b.id, bConflicts);
      }
    }
  }

  return conflicts;
}

interface TimelineViewProps {
  artists: Artist[];
  selectedDay: DayId;
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  onChangeView: (v: ViewMode) => void;
  searchQuery: string;
}

export default function TimelineView({
  artists,
  selectedDay,
  favoriteIds,
  onToggleFavorite,
  isFavorite,
  onChangeView,
  searchQuery,
}: TimelineViewProps) {
  const favArtists = artists
    .filter((a) => a.day === selectedDay && favoriteIds.includes(a.id))
    .filter((a) => !searchQuery || a.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  if (favArtists.length === 0) {
    return <EmptyState dayLabel={DAY_LABELS[selectedDay]} onSwitchToLineup={() => onChangeView("lineup")} />;
  }

  const conflicts = getConflicts(favArtists);

  const now = new Date();
  const festivalDates: Record<DayId, number> = { friday: 27, saturday: 28, sunday: 29 };
  const isToday = now.getMonth() === 2 && now.getFullYear() === 2026 && now.getDate() === festivalDates[selectedDay];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return (
    <div className="flex flex-col gap-2 px-4">
      {favArtists.map((artist) => {
        let isLive = false;
        if (isToday) {
          const start = parseTime(artist.startTime);
          let end = parseTime(artist.endTime);
          if (end <= start) end += 24 * 60;
          isLive = currentMinutes >= start && currentMinutes < end;
        }
        return (
          <ArtistCard
            key={artist.id}
            artist={artist}
            isFavorite={isFavorite(artist.id)}
            onToggleFavorite={onToggleFavorite}
            isLive={isLive}
            conflictNames={conflicts.get(artist.id)}
          />
        );
      })}
    </div>
  );
}
