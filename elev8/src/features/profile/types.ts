export type CurrentStatus =
  | "STUDENT"
  | "GRADUATE"
  | "WORKING_PROFESSIONAL"
  | "CAREER_SWITCHER";

export type OnboardingStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "SKIPPED";

export interface CategorizedSkills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  cloud: string[];
  tools: string[];
  softSkills: string[];
}

export interface UserProfileData {
  id: string;
  clerkId: string;
  fullName?: string | null;
  profilePicture?: string | null;
  email?: string | null;
  country?: string | null;
  timezone?: string | null;
  currentStatus?: CurrentStatus | null;
  degree?: string | null;
  major?: string | null;
  institution?: string | null;
  graduationYear?: number | null;
  currentRole?: string | null;
  yearsOfExperience?: number | null;
  industry?: string | null;
  employmentStatus?: string | null;
  careerInterests: string[];
  skills?: CategorizedSkills | null;
  careerGoals: string[];
  learningStyle?: string | null;
  difficulty?: string | null;
  weeklyHours?: number | null;
  onboardingStatus: OnboardingStatus;
  onboardingStep: number;
  profileCompletion: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface PersonalInfoStepData {
  fullName: string;
  country: string;
  timezone: string;
}

export interface EducationStepData {
  currentStatus: CurrentStatus | "";
  degree: string;
  major: string;
  institution: string;
  graduationYear?: number | null;
}

export interface ProfessionalStepData {
  currentRole: string;
  yearsOfExperience?: number | null;
  industry: string;
  employmentStatus: string;
}

export interface SkillsStepData {
  skills: CategorizedSkills;
}

export interface InterestsStepData {
  careerInterests: string[];
}

export interface GoalsStepData {
  careerGoals: string[];
}

export interface PreferencesStepData {
  learningStyle: string;
  difficulty: string;
  weeklyHours?: number | null;
}

export interface OnboardingStepConfig {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}
