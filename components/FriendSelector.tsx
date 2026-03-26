"use client";

import { FriendSchedule, DayId } from "@/lib/types";
import { SCHEDULE } from "@/lib/schedule-data";

interface FriendSelectorProps {
  friends: FriendSchedule[];
  selectedFriendId: string | null;
  selectedDay: DayId;
  onSelectFriend: (id: string) => void;
  onRemoveFriend: (id: string) => void;
  onImport: () => void;
  onExport: () => void;
}

export default function FriendSelector({
  friends,
  selectedFriendId,
  selectedDay,
  onSelectFriend,
  onRemoveFriend,
  onImport,
  onExport,
}: FriendSelectorProps) {
  const dayArtistIds = new Set(SCHEDULE.filter((a) => a.day === selectedDay).map((a) => a.id));

  return (
    <div className="flex gap-2 px-4 overflow-x-auto scrollbar-hide pb-1">
      {friends.map((friend) => {
        const isActive = selectedFriendId === friend.id;
        const dayCount = friend.favoriteIds.filter((id) => dayArtistIds.has(id)).length;
        return (
          <button
            key={friend.id}
            onClick={() => onSelectFriend(friend.id)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
              isActive
                ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {friend.name}
            <span className="opacity-60">{dayCount}</span>
            {isActive && (
              <span
                onClick={(e) => { e.stopPropagation(); onRemoveFriend(friend.id); }}
                className="ml-0.5 opacity-60 hover:opacity-100"
                role="button"
                aria-label={`Remove ${friend.name}`}
              >
                &times;
              </span>
            )}
          </button>
        );
      })}
      <button
        onClick={onImport}
        className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/25 transition-all whitespace-nowrap"
      >
        + Import
      </button>
      <button
        onClick={onExport}
        className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-400 hover:bg-white/10 transition-all whitespace-nowrap"
      >
        Export Mine
      </button>
    </div>
  );
}
