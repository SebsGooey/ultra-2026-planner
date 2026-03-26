"use client";

import { useState, useEffect, useCallback } from "react";
import { FriendSchedule } from "./types";

const STORAGE_KEY = "ultra2026-friends";

function readFriends(): FriendSchedule[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeFriends(friends: FriendSchedule[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(friends));
}

export function encodeSchedule(favoriteIds: string[]): string {
  return btoa(JSON.stringify(favoriteIds));
}

export function decodeSchedule(code: string): string[] | null {
  try {
    const json = atob(code.trim());
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed) || !parsed.every((id: unknown) => typeof id === "string")) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function useFriends(): {
  friends: FriendSchedule[];
  addFriend: (name: string, favoriteIds: string[]) => string;
  removeFriend: (id: string) => void;
} {
  const [friends, setFriends] = useState<FriendSchedule[]>([]);

  useEffect(() => {
    setFriends(readFriends());
  }, []);

  const addFriend = useCallback((name: string, favoriteIds: string[]): string => {
    const id = String(Date.now());
    setFriends((prev) => {
      const newFriend: FriendSchedule = {
        id,
        name,
        favoriteIds,
        importedAt: Date.now(),
      };
      const next = [...prev, newFriend];
      writeFriends(next);
      return next;
    });
    return id;
  }, []);

  const removeFriend = useCallback((id: string) => {
    setFriends((prev) => {
      const next = prev.filter((f) => f.id !== id);
      writeFriends(next);
      return next;
    });
  }, []);

  return { friends, addFriend, removeFriend };
}
