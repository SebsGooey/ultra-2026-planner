"use client";

import { Artist } from "@/lib/types";
import { STAGE_COLORS } from "./StageFilter";
import ConflictBadge from "./ConflictBadge";

interface ArtistCardProps {
  artist: Artist;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  isLive?: boolean;
  conflictNames?: string[];
}

export default function ArtistCard({ artist, isFavorite, onToggleFavorite, isLive, conflictNames }: ArtistCardProps) {
  const colors = STAGE_COLORS[artist.stage];

  return (
    <div className="bg-[#141414] border border-white/5 rounded-xl px-4 py-3 flex items-start gap-3 hover:bg-[#1a1a1a] transition-colors">
      <div className="flex-shrink-0 w-16 pt-0.5">
        <div className="text-sm font-bold text-white">{artist.startTimeDisplay}</div>
        <div className="text-xs text-gray-500">{artist.endTimeDisplay}</div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium truncate">{artist.name}</span>
          {isLive && (
            <span className="flex items-center gap-1 text-xs text-red-400 flex-shrink-0">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              LIVE
            </span>
          )}
        </div>
        <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text}`}>
          {artist.stageLabel}
        </span>
        {conflictNames && conflictNames.length > 0 && (
          <ConflictBadge conflictNames={conflictNames} />
        )}
      </div>

      <button
        onClick={() => onToggleFavorite(artist.id)}
        className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full transition-transform active:scale-90"
        aria-label={isFavorite ? `Remove ${artist.name} from favorites` : `Add ${artist.name} to favorites`}
      >
        {isFavorite ? (
          <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        )}
      </button>
    </div>
  );
}
