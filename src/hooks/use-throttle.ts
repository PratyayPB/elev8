import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook that returns a throttled version of any passed value.
 *
 * @param value The value to throttle.
 * @param interval The cooldown interval in milliseconds (default: 500ms).
 */
export function useThrottle<T>(value: T, interval: number = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval - (Date.now() - lastExecuted.current));

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
}

/**
 * Hook that returns a throttled callback that invokes `callback` at most once
 * per `interval` milliseconds. Any calls within the interval are ignored.
 *
 * @param callback The function to throttle.
 * @param interval Minimum time in milliseconds between invocations (default: 1000ms).
 */
export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  interval: number = 1000
): (...args: Parameters<T>) => void {
  const callbackRef = useRef(callback);
  const lastRan = useRef<number>(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRan.current >= interval) {
        lastRan.current = now;
        callbackRef.current(...args);
      }
    },
    [interval]
  );
}
