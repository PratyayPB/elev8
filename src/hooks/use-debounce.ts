import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook that returns a debounced version of any passed value.
 *
 * @param value The value to debounce.
 * @param delay The delay in milliseconds before updating the debounced value (default: 350ms).
 */
export function useDebounce<T>(value: T, delay: number = 350): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook that returns a memoized callback that delays invoking `callback`
 * until after `delay` milliseconds have elapsed since the last time it was invoked.
 *
 * @param callback The callback function to debounce.
 * @param delay The delay in milliseconds (default: 350ms).
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 350
): (...args: Parameters<T>) => void {
  const callbackRef = useRef(callback);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );
}
