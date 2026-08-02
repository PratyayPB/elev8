import { UserProfileData, CategorizedSkills } from "./types";
import {
  personalInfoSchema,
  educationSchema,
  professionalSchema,
  skillsSchema,
  interestsSchema,
  goalsSchema,
  preferencesSchema,
} from "./schemas";

export function calculateProfileCompletion(profile: Partial<UserProfileData> | null): number {
  if (!profile) return 0;

  const weights = [
    { field: profile.fullName, weight: 10 },
    { field: profile.country, weight: 5 },
    { field: profile.timezone, weight: 5 },
    { field: profile.currentStatus, weight: 10 },
    { field: profile.degree || profile.currentRole, weight: 10 },
    { field: profile.institution || profile.industry, weight: 10 },
    { field: profile.careerInterests && profile.careerInterests.length > 0 ? true : null, weight: 15 },
    { field: hasSkills(profile.skills), weight: 15 },
    { field: profile.careerGoals && profile.careerGoals.length > 0 ? true : null, weight: 10 },
    { field: profile.learningStyle || profile.weeklyHours, weight: 10 },
  ];

  let completedWeight = 0;
  for (const item of weights) {
    if (item.field) {
      completedWeight += item.weight;
    }
  }

  return Math.min(100, Math.max(0, completedWeight));
}

function hasSkills(skills?: CategorizedSkills | null): boolean {
  if (!skills) return false;
  return (
    (skills.languages?.length ?? 0) > 0 ||
    (skills.frameworks?.length ?? 0) > 0 ||
    (skills.databases?.length ?? 0) > 0 ||
    (skills.cloud?.length ?? 0) > 0 ||
    (skills.tools?.length ?? 0) > 0 ||
    (skills.softSkills?.length ?? 0) > 0
  );
}

export function getStepValidationSchema(stepIndex: number) {
  switch (stepIndex) {
    case 2:
      return personalInfoSchema;
    case 3:
      return educationSchema;
    case 4:
      return professionalSchema;
    case 5:
      return skillsSchema;
    case 6:
      return interestsSchema;
    case 7:
      return goalsSchema;
    case 8:
      return preferencesSchema;
    default:
      return null;
  }
}
