import { Redis } from "@upstash/redis";

const globalForRedis = globalThis as unknown as {
  redisClient: Redis | null | undefined;
};

function createRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "[Redis] UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is missing. Redis caching and distributed features will fail-open (bypass to database)."
      );
    }
    return null;
  }

  return new Redis({
    url,
    token,
    retry: {
      retries: 2,
      backoff: (retryCount) => Math.min(Math.exp(retryCount) * 50, 500),
    },
  });
}

export const redis =
  globalForRedis.redisClient !== undefined
    ? globalForRedis.redisClient
    : createRedisClient();

if (process.env.NODE_ENV !== "production") {
  globalForRedis.redisClient = redis;
}

export const isRedisConfigured = (): boolean => {
  return Boolean(redis && process.env.REDIS_CACHE_ENABLED !== "false");
};
