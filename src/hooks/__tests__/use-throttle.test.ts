/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useThrottle, useThrottledCallback } from "../use-throttle";

describe("useThrottledCallback", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should execute callback immediately on first call", () => {
    const fn = vi.fn();
    const { result } = renderHook(() => useThrottledCallback(fn, 1000));

    act(() => {
      result.current("initial");
    });

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("initial");
  });

  it("should ignore rapid subsequent calls within interval", () => {
    const fn = vi.fn();
    const { result } = renderHook(() => useThrottledCallback(fn, 1000));

    act(() => {
      result.current("call 1");
      result.current("call 2");
      result.current("call 3");
    });

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("call 1");

    act(() => {
      vi.advanceTimersByTime(500);
      result.current("call 4");
    });

    expect(fn).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(500);
      result.current("call 5");
    });

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith("call 5");
  });
});

describe("useThrottle", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useThrottle("first", 500));
    expect(result.current).toBe("first");
  });
});
