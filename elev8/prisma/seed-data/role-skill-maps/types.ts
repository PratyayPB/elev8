import {
  CareerExperienceLevel,
  SkillImportance,
  SkillProficiency,
} from "@prisma/client";

export interface RoleSkillRequirementSeed {
  name: string;
  minimumProficiency: SkillProficiency;
  importance: SkillImportance;
  estimatedHours?: number;
}

export interface RoleProfileSeedEntry {
  role: string;
  normalizedRole: string;
  experienceLevel: CareerExperienceLevel;
  skills: RoleSkillRequirementSeed[];
}
