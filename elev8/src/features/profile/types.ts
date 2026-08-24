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

  currentStatus: CareerStatus | null;
  currentRole: string | null;
  yearsOfExperience: number | null;

  education: ProfileEducationData | null;
  careerGoals: ProfileCareerGoalsData | null;

  skills: ProfileSkillData[];
  desiredSkills: string[];

  targetCompanyType: TargetCompanyType | null;
  weeklyLearningHours: number | null;

  profileVersion: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ProfileCreateInput {
  name: string;
  age: number;
  country: string;
  phoneNumber?: string | null;

  currentStatus?: CareerStatus | null;
  currentRole?: string | null;
  yearsOfExperience?: number | null;

  highestQualification?: string | null;
  fieldOfStudy?: string | null;

  primaryGoal?: PrimaryGoal | null;
  targetRole?: string | null;

  targetCompanyType?: TargetCompanyType | null;
  weeklyLearningHours?: number | null;

  skills?: {
    name: string;
    proficiency: SkillProficiency;
  }[];
  desiredSkills?: string[];
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

export type OnboardingStage = "MANDATORY" | "OPTIONAL";

export interface OnboardingState {
  isLoading: boolean;
  isOpen: boolean;
  stage: OnboardingStage;
  profile: ProfileData | null;
  missingFields: string[];
  isSaving: boolean;
  error: string | null;
}
