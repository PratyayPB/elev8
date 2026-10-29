import { SkillImportance, SkillProficiency } from "@prisma/client";

/**
 * Requirement Importance weights as specified in Phase 6.4 spec §8.
 * CORE = 3, IMPORTANT = 2, SUPPORTING = 1
 */
export const IMPORTANCE_WEIGHTS: Record<SkillImportance, number> = {
  CORE: 3,
  IMPORTANT: 2,
  SUPPORTING: 1,
};

/**
 * Numeric mapping for 5-tier SkillProficiency hierarchy as specified in Phase 6.4 spec §15.
 * BEGINNER = 1, BASIC = 2, INTERMEDIATE = 3, ADVANCED = 4, EXPERT = 5
 */
export const PROFICIENCY_ORDER: Record<SkillProficiency, number> = {
  BEGINNER: 1,
  BASIC: 2,
  INTERMEDIATE: 3,
  ADVANCED: 4,
  EXPERT: 5,
};
