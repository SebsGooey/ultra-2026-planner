"use client";

interface SearchBarProps {
  query: string;
  onChangeQuery: (q: string) => void;
}

export default function SearchBar({ query, onChangeQuery }: SearchBarProps) {
  return (
    <div className="relative px-4">
      <input
        type="text"
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
        placeholder="Search artists..."
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all"
      />
      {query && (
        <button
          onClick={() => onChangeQuery("")}
          className="absolute right-7 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-lg leading-none"
          aria-label="Clear search"
        >
          &times;
        </button>
      )}
    </div>
  );
}
