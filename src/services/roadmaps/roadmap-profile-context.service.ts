import { Profile, ProfileSkill } from "@prisma/client";

export interface RoadmapExistingSkill {
  name: string;
  proficiency: string;
}

export interface RoadmapProfileContext {
  currentStatus: string | null;
  currentRole: string | null;
  yearsOfExperience: number | null;
  highestQualification: string | null;
  fieldOfStudy: string | null;
  targetCompanyType: string | null;
  weeklyLearningHours: number | null;
  primaryGoal?: string | null;
  existingSkills: RoadmapExistingSkill[];
}

export type ProfileWithSkills = Profile & {
  skills?: ProfileSkill[];
};

export class RoadmapProfileContextService {
  /**
   * Transforms a Prisma Profile entity into a normalized RoadmapProfileContext.
   * Excludes PII (name, age, phone numbers, email) and non-curriculum fields.
   */
  public static buildRoadmapProfileContext(
    profile: ProfileWithSkills | null | undefined
  ): RoadmapProfileContext | null {
    if (!profile) {
      return null;
    }

    const existingSkills: RoadmapExistingSkill[] = (profile.skills || []).map(
      (s) => ({
        name: s.name,
        proficiency: s.proficiency,
      })
    );

    return {
      currentStatus: profile.currentStatus ?? null,
      currentRole: profile.currentRole ?? null,
      yearsOfExperience: profile.yearsOfExperience ?? null,
      highestQualification: profile.highestQualification ?? null,
      fieldOfStudy: profile.fieldOfStudy ?? null,
      targetCompanyType: profile.targetCompanyType ?? null,
      weeklyLearningHours: profile.weeklyLearningHours ?? null,
      primaryGoal: profile.primaryGoal ?? null,
      existingSkills,
    };
  }
}
