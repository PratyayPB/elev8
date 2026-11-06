import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/redis", () => ({
  redis: {
    get: vi.fn(),
    set: vi.fn(),
  },
  isRedisConfigured: vi.fn().mockReturnValue(true),
}));

vi.mock("@upstash/ratelimit", () => {
  const mockLimit = vi.fn();
  class MockRatelimit {
    static slidingWindow = vi.fn().mockReturnValue("sliding-window-algorithm");
    limit = mockLimit;
  }
  return {
    Ratelimit: MockRatelimit,
    mockLimit,
  };
});

import { checkDistributedRateLimit } from "../rate-limit.service";
import { isRedisConfigured } from "@/lib/redis";
import * as upstashRatelimit from "@upstash/ratelimit";

const mockLimit = (upstashRatelimit as any).mockLimit;

describe("RateLimitService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (isRedisConfigured as any).mockReturnValue(true);
  });

  it("checks rate limit using Upstash sliding window when Redis is configured", async () => {
    const resetTime = Date.now() + 30000;
    mockLimit.mockResolvedValueOnce({
      success: true,
      limit: 10,
      remaining: 9,
      reset: resetTime,
    });

    const result = await checkDistributedRateLimit("user:123:test", {
      limit: 10,
      windowMs: 60000,
    });

    expect(result.success).toBe(true);
    expect(result.limit).toBe(10);
    expect(result.remaining).toBe(9);
    expect(result.resetMs).toBeGreaterThan(0);
    expect(mockLimit).toHaveBeenCalledWith("user:123:test");
  });

  it("returns success=false when rate limit is exceeded", async () => {
    const resetTime = Date.now() + 15000;
    mockLimit.mockResolvedValueOnce({
      success: false,
      limit: 5,
      remaining: 0,
      reset: resetTime,
    });

    const result = await checkDistributedRateLimit("user:456:spam", {
      limit: 5,
      windowMs: 60000,
    });

    expect(result.success).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it("falls back to in-memory rate limiting when Redis throws an error", async () => {
    mockLimit.mockRejectedValueOnce(new Error("Redis connection dropped"));

    const result = await checkDistributedRateLimit("user:fallback:key", {
      limit: 20,
      windowMs: 60000,
    });

    // In-memory limiter handles the request safely
    expect(result).toHaveProperty("success");
    expect(result.limit).toBe(20);
    expect(result.remaining).toBeGreaterThanOrEqual(0);
  });

  it("falls back to in-memory rate limiting when Redis is not configured", async () => {
    (isRedisConfigured as any).mockReturnValueOnce(false);

    const result = await checkDistributedRateLimit("user:unconfigured:key", {
      limit: 15,
      windowMs: 60000,
    });

    expect(result.success).toBe(true);
    expect(result.limit).toBe(15);
    expect(mockLimit).not.toHaveBeenCalled();
  });
});
