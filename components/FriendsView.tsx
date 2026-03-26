"use client";

import { useState } from "react";
import { Artist, DayId, FriendSchedule } from "@/lib/types";
import { encodeSchedule } from "@/lib/friends";
import { SCHEDULE } from "@/lib/schedule-data";
import ArtistCard from "./ArtistCard";
import FriendSelector from "./FriendSelector";
import ImportModal from "./ImportModal";
import ExportModal from "./ExportModal";
import { getConflicts, parseTime } from "./TimelineView";

interface FriendsViewProps {
  artists: Artist[];
  selectedDay: DayId;
  friends: FriendSchedule[];
  userFavoriteIds: string[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onAddFriend: (name: string, favoriteIds: string[]) => string;
  onRemoveFriend: (id: string) => void;
  searchQuery: string;
}

export default function FriendsView({
  artists,
  selectedDay,
  friends,
  userFavoriteIds,
  isFavorite,
  onToggleFavorite,
  onAddFriend,
  onRemoveFriend,
  searchQuery,
}: FriendsViewProps) {
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(
    friends.length > 0 ? friends[0].id : null
  );
  const [showImport, setShowImport] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const selectedFriend = friends.find((f) => f.id === selectedFriendId) || null;

  // If selected friend was removed, pick the first available or null
  const effectiveFriend =
    selectedFriend || (friends.length > 0 ? friends[0] : null);

  const handleImport = (name: string, favoriteIds: string[]) => {
    const newId = onAddFriend(name, favoriteIds);
    setSelectedFriendId(newId);
    setShowImport(false);
  };

  const handleRemove = (id: string) => {
    onRemoveFriend(id);
    if (selectedFriendId === id) {
      const remaining = friends.filter((f) => f.id !== id);
      setSelectedFriendId(remaining.length > 0 ? remaining[0].id : null);
    }
  };

  const userFavSet = new Set(userFavoriteIds);

  // Get friend's artists for the selected day
  const friendArtists = effectiveFriend
    ? artists
        .filter((a) => a.day === selectedDay && effectiveFriend.favoriteIds.includes(a.id))
        .filter((a) => !searchQuery || a.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => a.startTime.localeCompare(b.startTime))
    : [];

  const conflicts = effectiveFriend ? getConflicts(friendArtists) : new Map<string, string[]>();

  const now = new Date();
  const festivalDates: Record<DayId, number> = { friday: 27, saturday: 28, sunday: 29 };
  const isToday = now.getMonth() === 2 && now.getFullYear() === 2026 && now.getDate() === festivalDates[selectedDay];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return (
    <div>
      <div className="mb-3">
        <FriendSelector
          friends={friends}
          selectedFriendId={effectiveFriend?.id || null}
          selectedDay={selectedDay}
          onSelectFriend={setSelectedFriendId}
          onRemoveFriend={handleRemove}
          onImport={() => { setShowImport(true); setShowExport(false); }}
          onExport={() => { setShowExport(true); setShowImport(false); }}
        />
      </div>

      {showExport && (
        <ExportModal
          code={encodeSchedule(userFavoriteIds)}
          onClose={() => setShowExport(false)}
        />
      )}

      {showImport && (
        <ImportModal
          onImport={handleImport}
          onClose={() => setShowImport(false)}
        />
      )}

      {friends.length === 0 && !showImport ? (
        <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
          <div className="text-4xl mb-4">&#x1F465;</div>
          <p className="text-gray-400 text-sm mb-4">
            No friends imported yet. Export your schedule and share the code, then import your friends&apos; codes here.
          </p>
          <button
            onClick={() => setShowImport(true)}
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            + Import a Friend
          </button>
        </div>
      ) : effectiveFriend && friendArtists.length > 0 ? (
        <div className="flex flex-col gap-2 px-4">
          {friendArtists.map((artist) => {
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
                overlapFriendName={userFavSet.has(artist.id) ? effectiveFriend.name : undefined}
              />
            );
          })}
        </div>
      ) : effectiveFriend ? (
        <p className="text-center text-gray-500 py-12 text-sm">
          {searchQuery
            ? "No matching artists in this schedule."
            : `${effectiveFriend.name} has no picks for this day.`}
        </p>
      ) : null}
    </div>
  );
}
