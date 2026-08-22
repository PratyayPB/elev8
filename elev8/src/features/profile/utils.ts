import { SkillProficiency } from "./types";

/**
 * Normalizes a skill name for deduplication and consistent comparison.
 * e.g. "  React.js  " -> "react.js", "JavaScript" -> "javascript"
 */
export function normalizeSkillName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

/**
 * Deduplicates an array of skills by their normalized name, keeping the first occurrence.
 */
export function deduplicateSkills(
  skills: { name: string; proficiency: SkillProficiency }[]
): { name: string; proficiency: SkillProficiency; normalizedName: string }[] {
  const seen = new Set<string>();
  const result: { name: string; proficiency: SkillProficiency; normalizedName: string }[] = [];

  for (const skill of skills) {
    const trimmed = skill.name.trim();
    if (!trimmed) continue;
    const normalized = normalizeSkillName(trimmed);
    if (!seen.has(normalized)) {
      seen.add(normalized);
      result.push({
        name: trimmed,
        proficiency: skill.proficiency,
        normalizedName: normalized,
      });
    }
  }

  return result;
}

/**
 * Deduplicates an array of desired skill strings by their normalized name.
 */
export function deduplicateDesiredSkills(
  skills: string[]
): { name: string; normalizedName: string }[] {
  const seen = new Set<string>();
  const result: { name: string; normalizedName: string }[] = [];

  for (const skill of skills) {
    const trimmed = skill.trim();
    if (!trimmed) continue;
    const normalized = normalizeSkillName(trimmed);
    if (!seen.has(normalized)) {
      seen.add(normalized);
      result.push({
        name: trimmed,
        normalizedName: normalized,
      });
    }
  }

  return result;
}
