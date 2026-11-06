import { redis, isRedisConfigured } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { checkInMemoryLimit, RateLimitResult } from "@/lib/rate-limiter";

// Cache of Ratelimit instances keyed by limit and window duration
const limiters = new Map<string, Ratelimit>();

function getLimiter(limit: number, windowMs: number): Ratelimit | null {
  if (!isRedisConfigured() || !redis) return null;

  const cacheKey = `${limit}_${windowMs}`;
  let limiter = limiters.get(cacheKey);

  if (!limiter) {
    limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(limit, `${windowMs} ms`),
      analytics: false,
      prefix: "elev8:rl",
    });
    limiters.set(cacheKey, limiter);
  }

  return limiter;
}

/**
 * Checks distributed sliding-window rate limit using Upstash Redis.
 * Transparently falls back to in-memory rate limiting if Redis is unavailable or unconfigured.
 */
export async function checkDistributedRateLimit(
  key: string,
  config: { limit: number; windowMs: number }
): Promise<RateLimitResult> {
  const limiter = getLimiter(config.limit, config.windowMs);

  if (!limiter) {
    return checkInMemoryLimit(key, config);
  }

  try {
    const { success, limit, remaining, reset } = await limiter.limit(key);
    return {
      success,
      limit,
      remaining,
      resetMs: Math.max(0, reset - Date.now()),
    };
  } catch (err) {
    console.warn(
      `[RateLimitService] Redis rate limit check failed for "${key}", falling back to in-memory limiter:`,
      err
    );
    return checkInMemoryLimit(key, config);
  }
}
