/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useDebounce, useDebouncedCallback } from "../use-debounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("hello", 300));
    expect(result.current).toBe("hello");
  });

  it("should update value only after specified delay", () => {
    const { result, rerender } = renderHook(
      ({ val, delay }) => useDebounce(val, delay),
      { initialProps: { val: "initial", delay: 300 } }
    );

    expect(result.current).toBe("initial");

    // Change input value
    rerender({ val: "updated", delay: 300 });
    expect(result.current).toBe("initial"); // Not updated yet

    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(result.current).toBe("initial"); // 200ms < 300ms

    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current).toBe("updated"); // 300ms reached
  });

  it("should reset timer if value changes rapidly", () => {
    const { result, rerender } = renderHook(
      ({ val }) => useDebounce(val, 300),
      { initialProps: { val: "a" } }
    );

    rerender({ val: "ab" });
    act(() => {
      vi.advanceTimersByTime(150);
    });

    rerender({ val: "abc" });
    act(() => {
      vi.advanceTimersByTime(150);
    });
    // Total elapsed 300ms from 'ab', but only 150ms from 'abc'
    expect(result.current).toBe("a");

    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(result.current).toBe("abc");
  });
});

describe("useDebouncedCallback", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should debounce rapid callback invocations", () => {
    const fn = vi.fn();
    const { result } = renderHook(() => useDebouncedCallback(fn, 300));

    act(() => {
      result.current("first");
      result.current("second");
      result.current("third");
    });

    expect(fn).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("third");
  });
});
