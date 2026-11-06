import { redis, isRedisConfigured } from "@/lib/redis";
import { CacheTTL } from "./cache-keys";

export class CacheService {
  /**
   * Retrieves an item from cache, or executes the fetcher on cache miss and caches the result.
   * Completely fail-open: if Redis throws or is unconfigured, executes fetcher directly.
   */
  public static async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttlSeconds: number = CacheTTL.MEDIUM
  ): Promise<T> {
    if (!isRedisConfigured() || !redis) {
      return fetcher();
    }

    try {
      const cached = await redis.get<T>(key);
      if (cached !== null && cached !== undefined) {
        return cached;
      }
    } catch (err) {
      console.warn(`[CacheService] Read error for key "${key}", falling back to DB:`, err);
    }

    const freshData = await fetcher();

    if (freshData !== null && freshData !== undefined) {
      try {
        await redis.set(key, freshData, { ex: ttlSeconds });
      } catch (err) {
        console.warn(`[CacheService] Write error for key "${key}":`, err);
      }
    }

    return freshData;
  }

  /**
   * Retrieves an item from cache directly.
   */
  public static async get<T>(key: string): Promise<T | null> {
    if (!isRedisConfigured() || !redis) return null;
    try {
      return (await redis.get<T>(key)) ?? null;
    } catch (err) {
      console.warn(`[CacheService] Get error for key "${key}":`, err);
      return null;
    }
  }

  /**
   * Sets an item in cache with explicit expiration.
   */
  public static async set<T>(
    key: string,
    value: T,
    ttlSeconds: number = CacheTTL.MEDIUM
  ): Promise<void> {
    if (!isRedisConfigured() || !redis) return;
    try {
      await redis.set(key, value, { ex: ttlSeconds });
    } catch (err) {
      console.warn(`[CacheService] Set error for key "${key}":`, err);
    }
  }

  /**
   * Deletes a specific key.
   */
  public static async del(key: string): Promise<void> {
    if (!isRedisConfigured() || !redis) return;
    try {
      await redis.del(key);
    } catch (err) {
      console.warn(`[CacheService] Delete error for key "${key}":`, err);
    }
  }

  /**
   * Deletes multiple keys matching a wildcard pattern (e.g. "catalog:roadmaps:*").
   */
  public static async delPattern(pattern: string): Promise<void> {
    if (!isRedisConfigured() || !redis) return;
    try {
      const keys = await redis.keys(pattern);
      if (keys && keys.length > 0) {
        await redis.del(...keys);
      }
    } catch (err) {
      console.warn(`[CacheService] Pattern delete error for "${pattern}":`, err);
    }
  }

  /**
   * Atomically increments an integer key. If it doesn't exist, initializes to 1.
   * Optionally resets TTL.
   */
  public static async incr(
    key: string,
    ttlSeconds?: number
  ): Promise<number | null> {
    if (!isRedisConfigured() || !redis) return null;
    try {
      const val = await redis.incr(key);
      if (ttlSeconds && val === 1) {
        await redis.expire(key, ttlSeconds);
      }
      return val;
    } catch (err) {
      console.warn(`[CacheService] Incr error for key "${key}":`, err);
      return null;
    }
  }

  /**
   * Acquires a distributed lock using SETNX with an expiration TTL.
   * Returns true if lock was acquired, false if already locked.
   * If Redis is unavailable, returns true (fail-open) so user operations are not blocked.
   */
  public static async acquireLock(
    lockKey: string,
    ttlSeconds: number = CacheTTL.LOCK
  ): Promise<boolean> {
    if (!isRedisConfigured() || !redis) return true;
    try {
      const result = await redis.set(lockKey, "locked", {
        nx: true,
        ex: ttlSeconds,
      });
      return result === "OK";
    } catch (err) {
      console.warn(`[CacheService] Lock acquisition error for "${lockKey}":`, err);
      return true; // Fail-open: allow execution on Redis error
    }
  }

  /**
   * Releases a distributed lock.
   */
  public static async releaseLock(lockKey: string): Promise<void> {
    if (!isRedisConfigured() || !redis) return;
    try {
      await redis.del(lockKey);
    } catch (err) {
      console.warn(`[CacheService] Lock release error for "${lockKey}":`, err);
    }
  }
}
