/**
 * High-performance In-Memory Sliding-Window Rate Limiter
 * Provides microsecond-level rate limiting for edge/API routes and autosave actions.
 */

interface RateLimitConfig {
  /** Maximum number of allowed requests in the sliding window */
  limit: number;
  /** Window duration in milliseconds */
  windowMs: number;
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetMs: number;
}

// In-memory token bucket / sliding timestamp map
// Maps identifier key -> array of request timestamps (epoch ms)
const requestStore = new Map<string, number[]>();

// Periodic cleanup of stale keys every 5 minutes to prevent memory leaks
let lastCleanup = Date.now();
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

function cleanupStaleEntries(now: number) {
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [key, timestamps] of requestStore.entries()) {
    // Keep entries that have at least 1 timestamp within the past 10 minutes
    const validTimestamps = timestamps.filter((t) => now - t < 10 * 60 * 1000);
    if (validTimestamps.length === 0) {
      requestStore.delete(key);
    } else {
      requestStore.set(key, validTimestamps);
    }
  }
}

/**
 * Checks sliding-window rate limit for a given key.
 *
 * @param key Unique identifier (e.g. `ip:127.0.0.1:clerk-webhook` or `user:cuid:autosave`)
 * @param config { limit, windowMs }
 * @returns RateLimitResult with success boolean, remaining count, and reset time in ms
 */
export function checkRateLimit(key: string, config: RateLimitConfig): RateLimitResult {
  const now = Date.now();
  cleanupStaleEntries(now);

  const windowStart = now - config.windowMs;
  const existingTimestamps = requestStore.get(key) || [];

  // Filter timestamps within current window
  const activeTimestamps = existingTimestamps.filter((t) => t > windowStart);

  if (activeTimestamps.length >= config.limit) {
    const oldest = activeTimestamps[0];
    const resetMs = Math.max(0, oldest + config.windowMs - now);

    return {
      success: false,
      limit: config.limit,
      remaining: 0,
      resetMs,
    };
  }

  // Record this request
  activeTimestamps.push(now);
  requestStore.set(key, activeTimestamps);

  return {
    success: true,
    limit: config.limit,
    remaining: Math.max(0, config.limit - activeTimestamps.length),
    resetMs: config.windowMs,
  };
}

/**
 * Extracts best-effort client IP from headers.
 */
export function getClientIp(req: Request): string {
  if (!req || !req.headers || typeof req.headers.get !== "function") {
    return "127.0.0.1";
  }
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();
  return "127.0.0.1";
}
