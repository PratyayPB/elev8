import { CareerStatus, SkillProficiency } from "./types";

/**
 * Normalizes a career status string (e.g. from user manual entry) into a valid CareerStatus enum value.
 * e.g. "Freelance Developer" -> "FREELANCER", "graduated recently" -> "RECENT_GRADUATE", "studying" -> "STUDENT"
 */
export function normalizeCareerStatus(input?: string | null): CareerStatus {
  if (!input) return "OTHER";

  const trimmed = input.trim();
  if (!trimmed) return "OTHER";

  // Check direct exact match (case-insensitive & snake_case formatted)
  const cleaned = trimmed.toUpperCase().replace(/[\s-]+/g, "_");
  const validStatuses: CareerStatus[] = [
    "STUDENT",
    "EMPLOYED",
    "SELF_EMPLOYED",
    "BUSINESS_OWNER",
    "FREELANCER",
    "JOB_SEEKER",
    "RECENT_GRADUATE",
    "OTHER",
  ];

  if (validStatuses.includes(cleaned as CareerStatus)) {
    return cleaned as CareerStatus;
  }

  const lower = trimmed.toLowerCase();

  // Pattern matching for smart normalization
  if (/\b(student|studying|college|university|undergrad|postgrad|scholar|school|btech|phd|masters|bachelors)\b/i.test(lower)) {
    return "STUDENT";
  }
  if (/\b(freelance|freelancer|freelancing|contractor|gig|consultant)\b/i.test(lower)) {
    return "FREELANCER";
  }
  if (/\b(self[\s_-]?employed|independent|solopreneur|solo[\s_-]?founder)\b/i.test(lower)) {
    return "SELF_EMPLOYED";
  }
  if (/\b(business[\s_-]?owner|founder|co[\s_-]?founder|entrepreneur|ceo|owner|proprietor|agency[\s_-]?owner|startup[\s_-]?founder)\b/i.test(lower)) {
    return "BUSINESS_OWNER";
  }
  if (/\b(graduat\w*|recent[\s_-]?grad|fresh[\s_-]?grad|freshers?|new[\s_-]?grad|alumni|passed[\s_-]?out)\b/i.test(lower)) {
    return "RECENT_GRADUATE";
  }
  if (/\b(job[\s_-]?seeker|looking[\s_-]?for|seeking|unemployed|in[\s_-]?between|hunting|open[\s_-]?to[\s_-]?work)\b/i.test(lower)) {
    return "JOB_SEEKER";
  }
  if (/\b(employed|working|full[\s_-]?time|part[\s_-]?time|developer|engineer|manager|employee|corporate)\b/i.test(lower)) {
    return "EMPLOYED";
  }

  return "OTHER";
}

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
