import {
  ProfileData,
  ProfileCompletenessResult,
  MissingFieldItem,
} from "../types";
import {
  PROFILE_COMPLETION_WEIGHTS,
  FIELD_METADATA,
  ProfileCompletenessFieldKey,
} from "../constants";

export function checkMandatoryCompletion(profile: ProfileData | null): {
  isMandatoryCompleted: boolean;
  missingFields: string[];
} {
  const missingFields: string[] = [];
  if (!profile?.name?.trim()) missingFields.push("name");
  if (!profile?.age) missingFields.push("age");
  if (!profile?.country?.trim()) missingFields.push("country");
  if (!profile?.phoneNumber?.trim()) missingFields.push("phoneNumber");

  return {
    isMandatoryCompleted: missingFields.length === 0,
    missingFields,
  };
}

/**
 * Checks if a string value is present and not just whitespace.
 */
function isNonEmptyString(val: unknown): boolean {
  return typeof val === "string" && val.trim().length > 0;
}

/**
 * Calculates completeness, mandatory completion, and full profile completion.
 * isComplete is true only if ALL attributes in the Profile schema have valid values.
 */
export function calculateProfileCompleteness(
  profile: ProfileData | null
): ProfileCompletenessResult {
  const mandatory = checkMandatoryCompletion(profile);

  if (!profile) {
    const allMissing: MissingFieldItem[] = (
      Object.keys(PROFILE_COMPLETION_WEIGHTS) as ProfileCompletenessFieldKey[]
    )
      .map((key) => ({
        field: key,
        weight: PROFILE_COMPLETION_WEIGHTS[key],
        label: FIELD_METADATA[key].label,
        description: FIELD_METADATA[key].description,
      }))
      .sort((a, b) => b.weight - a.weight);

    return {
      score: 0,
      state: "NOT_STARTED",
      isComplete: false,
      isMandatoryCompleted: false,
      completedFields: [],
      missingFields: allMissing,
    };
  }

  let totalScore = 0;
  const completedFields: string[] = [];
  const missingFields: MissingFieldItem[] = [];

  // 1. Primary Goal (15)
  if (profile.careerGoals?.primaryGoal) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.primaryGoal;
    completedFields.push("primaryGoal");
  } else {
    missingFields.push({
      field: "primaryGoal",
      weight: PROFILE_COMPLETION_WEIGHTS.primaryGoal,
      label: FIELD_METADATA.primaryGoal.label,
      description: FIELD_METADATA.primaryGoal.description,
    });
  }

  // 2. Current Status (15)
  if (profile.currentStatus) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.currentStatus;
    completedFields.push("currentStatus");
  } else {
    missingFields.push({
      field: "currentStatus",
      weight: PROFILE_COMPLETION_WEIGHTS.currentStatus,
      label: FIELD_METADATA.currentStatus.label,
      description: FIELD_METADATA.currentStatus.description,
    });
  }

  // 3. Skills (15)
  if (
    Array.isArray(profile.skills) &&
    profile.skills.length > 0 &&
    profile.skills.some((s) => isNonEmptyString(s.name) && s.proficiency)
  ) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.skills;
    completedFields.push("skills");
  } else {
    missingFields.push({
      field: "skills",
      weight: PROFILE_COMPLETION_WEIGHTS.skills,
      label: FIELD_METADATA.skills.label,
      description: FIELD_METADATA.skills.description,
    });
  }

  // 4. Target Role (10) - EXPLORE_CAREERS does not require a specific targetRole for score, but check role
  const isExploration = profile.careerGoals?.primaryGoal === "EXPLORE_CAREERS";
  const hasTargetRole = isNonEmptyString(profile.careerGoals?.targetRole);

  if (hasTargetRole || isExploration) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.targetRole;
    completedFields.push("targetRole");
  } else {
    missingFields.push({
      field: "targetRole",
      weight: PROFILE_COMPLETION_WEIGHTS.targetRole,
      label: FIELD_METADATA.targetRole.label,
      description: FIELD_METADATA.targetRole.description,
    });
  }

  // 5. Education (15) - Requires 2 fields
  const isEducationComplete = Boolean(
    profile.education &&
      isNonEmptyString(profile.education.highestQualification) &&
      isNonEmptyString(profile.education.fieldOfStudy)
  );

  if (isEducationComplete) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.education;
    completedFields.push("education");
  } else {
    missingFields.push({
      field: "education",
      weight: PROFILE_COMPLETION_WEIGHTS.education,
      label: FIELD_METADATA.education.label,
      description: FIELD_METADATA.education.description,
    });
  }

  // 6. Desired Skills (10)
  if (
    Array.isArray(profile.desiredSkills) &&
    profile.desiredSkills.length > 0 &&
    profile.desiredSkills.some((s) => isNonEmptyString(s))
  ) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.desiredSkills;
    completedFields.push("desiredSkills");
  } else {
    missingFields.push({
      field: "desiredSkills",
      weight: PROFILE_COMPLETION_WEIGHTS.desiredSkills,
      label: FIELD_METADATA.desiredSkills.label,
      description: FIELD_METADATA.desiredSkills.description,
    });
  }

  // 7. Weekly Learning Hours (5)
  if (
    typeof profile.weeklyLearningHours === "number" &&
    profile.weeklyLearningHours > 0
  ) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.weeklyLearningHours;
    completedFields.push("weeklyLearningHours");
  } else {
    missingFields.push({
      field: "weeklyLearningHours",
      weight: PROFILE_COMPLETION_WEIGHTS.weeklyLearningHours,
      label: FIELD_METADATA.weeklyLearningHours.label,
      description: FIELD_METADATA.weeklyLearningHours.description,
    });
  }

  // 8. Target Company Type (5)
  if (profile.targetCompanyType) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.targetCompanyType;
    completedFields.push("targetCompanyType");
  } else {
    missingFields.push({
      field: "targetCompanyType",
      weight: PROFILE_COMPLETION_WEIGHTS.targetCompanyType,
      label: FIELD_METADATA.targetCompanyType.label,
      description: FIELD_METADATA.targetCompanyType.description,
    });
  }

  // 9. Current Role (10)
  if (isNonEmptyString(profile.currentRole)) {
    totalScore += PROFILE_COMPLETION_WEIGHTS.currentRole;
    completedFields.push("currentRole");
  } else {
    missingFields.push({
      field: "currentRole",
      weight: PROFILE_COMPLETION_WEIGHTS.currentRole,
      label: FIELD_METADATA.currentRole.label,
      description: FIELD_METADATA.currentRole.description,
    });
  }

  // Check if ALL attributes in Profile schema have valid values
  const hasValidBasicInfo = mandatory.isMandatoryCompleted;
  const hasValidYearsOfExp = typeof profile.yearsOfExperience === "number" && profile.yearsOfExperience >= 0;
  const hasValidTargetRole = isNonEmptyString(profile.careerGoals?.targetRole);
  const isAllAttributesComplete =
    hasValidBasicInfo &&
    Boolean(profile.currentStatus) &&
    isNonEmptyString(profile.currentRole) &&
    hasValidYearsOfExp &&
    isEducationComplete &&
    Boolean(profile.careerGoals?.primaryGoal) &&
    hasValidTargetRole &&
    Boolean(profile.targetCompanyType) &&
    typeof profile.weeklyLearningHours === "number" &&
    profile.weeklyLearningHours > 0 &&
    Array.isArray(profile.skills) &&
    profile.skills.length > 0 &&
    profile.skills.every((s) => isNonEmptyString(s.name) && s.proficiency) &&
    Array.isArray(profile.desiredSkills) &&
    profile.desiredSkills.length > 0 &&
    profile.desiredSkills.every((s) => isNonEmptyString(s));

  const score = Math.min(100, Math.max(0, totalScore));
  let state: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" = "IN_PROGRESS";
  if (score === 0) {
    state = "NOT_STARTED";
  } else if (score === 100 || isAllAttributesComplete) {
    state = "COMPLETED";
  }

  // Sort missing fields by weight descending
  missingFields.sort((a, b) => b.weight - a.weight);

  return {
    score,
    state,
    isComplete: isAllAttributesComplete,
    isMandatoryCompleted: mandatory.isMandatoryCompleted,
    completedFields,
    missingFields,
  };
}
