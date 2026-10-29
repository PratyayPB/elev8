import {
  SkillImportance,
  SkillProficiency,
  CareerExperienceLevel,
} from "@prisma/client";

export { SkillImportance, SkillProficiency, CareerExperienceLevel };

export type GapStatus =
  | "SUCCESS"
  | "NO_TARGET_ROLE"
  | "ROLE_NOT_SUPPORTED";

export interface MatchedSkill {
  name: string;
  userProficiency: SkillProficiency;
  requiredProficiency: SkillProficiency;
}

export interface UnderqualifiedSkill {
  name: string;
  userProficiency: SkillProficiency;
  requiredProficiency: SkillProficiency;
  importance: SkillImportance;
  proficiencyDeficit: number;
  estimatedHours?: number | null;
}

export interface MissingSkill {
  name: string;
  requiredProficiency: SkillProficiency;
  importance: SkillImportance;
  estimatedHours?: number | null;
}

export interface GapAnalysis {
  status: GapStatus;
  targetRole: string | null;
  matchedSkills: MatchedSkill[];
  underqualifiedSkills: UnderqualifiedSkill[];
  missingSkills: MissingSkill[];
  unmatchedUserSkills: string[];
  severity: number; // 0.0 - 1.0
  estimatedLearningHours: number;
}

export interface SkillGapSignal {
  status: GapStatus;
  severity: number;
  missingSkills: MissingSkill[];
  underqualifiedSkills: UnderqualifiedSkill[];
  estimatedLearningHours: number;
}
