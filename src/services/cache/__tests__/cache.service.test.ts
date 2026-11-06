import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock @/lib/redis
vi.mock("@/lib/redis", () => {
  const mockRedis = {
    get: vi.fn(),
    set: vi.fn(),
    del: vi.fn(),
    keys: vi.fn(),
    incr: vi.fn(),
    expire: vi.fn(),
  };

  return {
    redis: mockRedis,
    isRedisConfigured: vi.fn().mockReturnValue(true),
  };
});

import { CacheService } from "../cache.service";
import { redis, isRedisConfigured } from "@/lib/redis";

describe("CacheService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (isRedisConfigured as any).mockReturnValue(true);
  });

  describe("getOrSet", () => {
    it("returns cached value on cache hit without calling fetcher", async () => {
      const mockCachedData = { id: "123", name: "Test Item" };
      (redis!.get as any).mockResolvedValueOnce(mockCachedData);

      const fetcher = vi.fn();
      const result = await CacheService.getOrSet("test:key", fetcher, 300);

      expect(result).toEqual(mockCachedData);
      expect(redis!.get).toHaveBeenCalledWith("test:key");
      expect(fetcher).not.toHaveBeenCalled();
      expect(redis!.set).not.toHaveBeenCalled();
    });

    it("executes fetcher and caches result on cache miss", async () => {
      (redis!.get as any).mockResolvedValueOnce(null);
      const freshData = { id: "456", name: "Fresh Item" };
      const fetcher = vi.fn().mockResolvedValueOnce(freshData);

      const result = await CacheService.getOrSet("test:key", fetcher, 300);

      expect(result).toEqual(freshData);
      expect(redis!.get).toHaveBeenCalledWith("test:key");
      expect(fetcher).toHaveBeenCalledTimes(1);
      expect(redis!.set).toHaveBeenCalledWith("test:key", freshData, { ex: 300 });
    });

    it("fails open and executes fetcher if Redis read throws an error", async () => {
      (redis!.get as any).mockRejectedValueOnce(new Error("Upstash timeout"));
      const freshData = { id: "789", name: "Fallback Item" };
      const fetcher = vi.fn().mockResolvedValueOnce(freshData);

      const result = await CacheService.getOrSet("test:key", fetcher, 300);

      expect(result).toEqual(freshData);
      expect(fetcher).toHaveBeenCalledTimes(1);
    });

    it("returns fetcher result even if Redis set throws an error", async () => {
      (redis!.get as any).mockResolvedValueOnce(null);
      (redis!.set as any).mockRejectedValueOnce(new Error("Write failed"));
      const freshData = { id: "999", name: "Data" };
      const fetcher = vi.fn().mockResolvedValueOnce(freshData);

      const result = await CacheService.getOrSet("test:key", fetcher, 300);

      expect(result).toEqual(freshData);
    });

    it("directly calls fetcher when Redis is not configured", async () => {
      (isRedisConfigured as any).mockReturnValueOnce(false);
      const freshData = { id: "111", name: "Direct Data" };
      const fetcher = vi.fn().mockResolvedValueOnce(freshData);

      const result = await CacheService.getOrSet("test:key", fetcher, 300);

      expect(result).toEqual(freshData);
      expect(redis!.get).not.toHaveBeenCalled();
      expect(redis!.set).not.toHaveBeenCalled();
    });
  });

  describe("del and delPattern", () => {
    it("deletes a key via del()", async () => {
      await CacheService.del("test:key");
      expect(redis!.del).toHaveBeenCalledWith("test:key");
    });

    it("finds and deletes matched keys via delPattern()", async () => {
      (redis!.keys as any).mockResolvedValueOnce(["k1", "k2", "k3"]);
      await CacheService.delPattern("test:*");

      expect(redis!.keys).toHaveBeenCalledWith("test:*");
      expect(redis!.del).toHaveBeenCalledWith("k1", "k2", "k3");
    });

    it("does nothing in delPattern() if no keys match", async () => {
      (redis!.keys as any).mockResolvedValueOnce([]);
      await CacheService.delPattern("empty:*");

      expect(redis!.keys).toHaveBeenCalledWith("empty:*");
      expect(redis!.del).not.toHaveBeenCalled();
    });
  });

  describe("acquireLock and releaseLock", () => {
    it("returns true when lock is successfully acquired", async () => {
      (redis!.set as any).mockResolvedValueOnce("OK");
      const acquired = await CacheService.acquireLock("lock:workflow:123", 30);

      expect(acquired).toBe(true);
      expect(redis!.set).toHaveBeenCalledWith("lock:workflow:123", "locked", {
        nx: true,
        ex: 30,
      });
    });

    it("returns false when lock cannot be acquired (already locked)", async () => {
      (redis!.set as any).mockResolvedValueOnce(null);
      const acquired = await CacheService.acquireLock("lock:workflow:123", 30);

      expect(acquired).toBe(false);
    });

    it("fails open (returns true) if Redis throws during lock acquisition", async () => {
      (redis!.set as any).mockRejectedValueOnce(new Error("Connection error"));
      const acquired = await CacheService.acquireLock("lock:workflow:123", 30);

      expect(acquired).toBe(true);
    });

    it("deletes lock key on releaseLock", async () => {
      await CacheService.releaseLock("lock:workflow:123");
      expect(redis!.del).toHaveBeenCalledWith("lock:workflow:123");
    });
  });
});
