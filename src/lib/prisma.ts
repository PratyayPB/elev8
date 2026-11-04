import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function createPrismaClient(): PrismaClient {
  const client = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

  // Query timeout extension: guards against queries stalling and exhausting serverless connections
  return client.$extends({
    query: {
      $allModels: {
        async $allOperations({ operation, model, args, query }) {
          // Timeout limit of 25 seconds for app queries
          const timeoutMs = 25000;
          return Promise.race([
            query(args),
            new Promise((_, reject) =>
              setTimeout(
                () =>
                  reject(
                    new Error(
                      `[Prisma Timeout] Query ${model ? `${model}.` : ""}${operation} exceeded ${timeoutMs}ms limit`
                    )
                  ),
                timeoutMs
              )
            ),
          ]);
        },
      },
    },
  }) as unknown as PrismaClient;
}

export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
