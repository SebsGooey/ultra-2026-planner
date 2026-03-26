"use client";

import { useState, useMemo } from "react";
import { DayId, StageId } from "@/lib/types";
import { SCHEDULE } from "@/lib/schedule-data";
import { useFavorites } from "@/lib/favorites";
import DayTabs from "./DayTabs";
import ViewToggle, { ViewMode } from "./ViewToggle";
import StageFilter from "./StageFilter";
import SearchBar from "./SearchBar";
import ArtistCard from "./ArtistCard";
import TimelineView from "./TimelineView";
import MapView from "./MapView";

function getDefaultDay(): DayId {
  const now = new Date();
  if (now.getMonth() === 2 && now.getFullYear() === 2026) {
    if (now.getDate() === 27) return "friday";
    if (now.getDate() === 28) return "saturday";
    if (now.getDate() === 29) return "sunday";
  }
  return "friday";
}

function parseTime(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export default function App() {
  const [selectedDay, setSelectedDay] = useState<DayId>(getDefaultDay);
  const [view, setView] = useState<ViewMode>("lineup");
  const [selectedStage, setSelectedStage] = useState<StageId | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteIds, toggleFavorite, isFavorite] = useFavorites();

  const handleSelectDay = (day: DayId) => {
    setSelectedDay(day);
    setSelectedStage("all");
  };

  const favCountsByDay = useMemo(() => {
    const counts: Record<DayId, number> = { friday: 0, saturday: 0, sunday: 0 };
    for (const a of SCHEDULE) {
      if (favoriteIds.includes(a.id)) {
        counts[a.day]++;
      }
    }
    return counts;
  }, [favoriteIds]);

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const a of SCHEDULE) {
      if (a.day === selectedDay) {
        counts[a.stage] = (counts[a.stage] || 0) + 1;
      }
    }
    return counts;
  }, [selectedDay]);

  const filteredArtists = useMemo(() => {
    let result = SCHEDULE.filter((a) => a.day === selectedDay);
    if (selectedStage !== "all") {
      result = result.filter((a) => a.stage === selectedStage);
    }
    if (searchQuery) {
      result = result.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return result.sort((a, b) => a.startTime.localeCompare(b.startTime));
  }, [selectedDay, selectedStage, searchQuery]);

  const now = new Date();
  const festivalDates: Record<DayId, number> = { friday: 27, saturday: 28, sunday: 29 };
  const isToday = now.getMonth() === 2 && now.getFullYear() === 2026 && now.getDate() === festivalDates[selectedDay];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const totalFavs = favoriteIds.length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-sm pb-3">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              ULTRA 2026
            </h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Schedule Planner</p>
          </div>
          {totalFavs > 0 && (
            <div className="text-xs text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-full">
              &#9733; {totalFavs}
            </div>
          )}
        </div>

        <DayTabs selectedDay={selectedDay} onSelectDay={handleSelectDay} favCountsByDay={favCountsByDay} />

        <div className="mt-2">
          <ViewToggle view={view} onChangeView={setView} />
        </div>

        {view === "lineup" && (
          <div className="mt-2">
            <StageFilter selectedStage={selectedStage} onSelectStage={setSelectedStage} stageCounts={stageCounts} />
          </div>
        )}

        {view !== "map" && (
          <div className="mt-2">
            <SearchBar query={searchQuery} onChangeQuery={setSearchQuery} />
          </div>
        )}
      </div>

      {/* Content */}
      {view === "map" ? (
        <MapView />
      ) : (
        <div className="pb-8 pt-2">
          {view === "schedule" ? (
            <TimelineView
              artists={SCHEDULE}
              selectedDay={selectedDay}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
              onChangeView={setView}
              searchQuery={searchQuery}
            />
          ) : (
            <div className="flex flex-col gap-2 px-4">
              {filteredArtists.map((artist) => {
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
                    onToggleFavorite={toggleFavorite}
                    isLive={isLive}
                  />
                );
              })}
              {filteredArtists.length === 0 && (
                <p className="text-center text-gray-500 py-12 text-sm">No artists found.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
