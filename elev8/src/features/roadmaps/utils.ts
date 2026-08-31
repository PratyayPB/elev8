import { CareerLevel } from "@prisma/client";

/**
 * Parses a string representation of career/experience level into Prisma CareerLevel enum.
 */
export function parseCareerLevel(level: string): CareerLevel {
  const upper = (level || "").toUpperCase();
  if (upper === "BEGINNER" || upper === "BASIC") return CareerLevel.BEGINNER;
  if (upper === "INTERMEDIATE") return CareerLevel.INTERMEDIATE;
  if (upper === "ADVANCED") return CareerLevel.ADVANCED;
  return CareerLevel.BEGINNER;
}

/**
 * Normalizes role string into a deterministic lowercase hyphenated slug for cache lookups.
 * e.g. "Backend Engineer" -> "backend-engineer"
 */
export function normalizeRole(role: string): string {
  return role
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
