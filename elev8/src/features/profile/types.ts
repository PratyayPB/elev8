import {
  CareerStatus,
  PrimaryGoal,
  SkillProficiency,
  CareerExperienceLevel,
  TargetCompanyType,
} from "@prisma/client";

export {
  CareerStatus,
  PrimaryGoal,
  SkillProficiency,
  CareerExperienceLevel,
  TargetCompanyType,
};

export interface ProfileSkillData {
  id?: string;
  name: string;
  proficiency: SkillProficiency;
}

export interface ProfileEducationData {
  highestQualification: string;
  fieldOfStudy: string;
}

export interface ProfileCareerGoalsData {
  primaryGoal: PrimaryGoal;
  targetRole?: string | null;
}

export interface ProfileData {
  id: string;
  userId: string;
  name: string;
  age: number;
  country: string;
  phoneNumber?: string | null;

  currentStatus: CareerStatus;
  currentRole: string;
  yearsOfExperience: number;

  education: ProfileEducationData;
  careerGoals: ProfileCareerGoalsData;

  skills: ProfileSkillData[];
  desiredSkills: string[];

  targetCompanyType: TargetCompanyType;
  weeklyLearningHours: number;

  profileVersion: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ProfileCreateInput {
  name: string;
  age: number;
  country: string;
  phoneNumber?: string | null;

  currentStatus: CareerStatus;
  currentRole: string;
  yearsOfExperience: number;

  highestQualification: string;
  fieldOfStudy: string;

  primaryGoal: PrimaryGoal;
  targetRole?: string | null;

  targetCompanyType: TargetCompanyType;
  weeklyLearningHours: number;

  skills: {
    name: string;
    proficiency: SkillProficiency;
  }[];
  desiredSkills: string[];
}

export type ProfileUpdateInput = Partial<ProfileCreateInput>;

export type ProfileCompletionState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export type PromptContext = "PROFILE" | "ROADMAP" | "RESUME" | "INTERVIEW" | "DASHBOARD";

export interface MissingFieldItem {
  field: string;
  weight: number;
  label: string;
  description: string;
}

export interface ProfileCompletenessResult {
  score: number;
  state: ProfileCompletionState;
  completedFields: string[];
  missingFields: MissingFieldItem[];
}

export interface ProfilePromptItem {
  field: string;
  title: string;
  description: string;
  priority: number;
  skippable: boolean;
  context: PromptContext;
}
