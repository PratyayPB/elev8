"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Hydration-safe Web Storage hook with cross-tab synchronization.
 *
 * Guaranteed SSR invariant:
 * - Always initializes with `initialValue` during SSR and initial client mount.
 * - Rehydrates from localStorage in useEffect, completely avoiding React hydration mismatches.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  // Rehydrate after initial client mount to preserve SSR HTML consistency
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        setStoredValue(JSON.parse(item));
      }
    } catch (err) {
      console.warn(`[useLocalStorage] Read error for key "${key}":`, err);
    }
    setIsHydrated(true);
  }, [key]);

  // Stable setter supporting raw values or functional updaters
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        setStoredValue((prev) => {
          const nextValue = value instanceof Function ? value(prev) : value;
          if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(nextValue));
          }
          return nextValue;
        });
      } catch (err) {
        console.warn(`[useLocalStorage] Write error for key "${key}":`, err);
      }
    },
    [key]
  );

  // Cross-tab synchronization
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch {
          // Ignore invalid external JSON
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [storedValue, setValue, isHydrated] as const;
}
