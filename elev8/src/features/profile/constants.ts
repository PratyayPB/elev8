import {
  CareerStatus,
  PrimaryGoal,
  SkillProficiency,
  CareerExperienceLevel,
  TargetCompanyType,
} from "./types";

export const CAREER_STATUS_OPTIONS: { label: string; value: CareerStatus }[] = [
  { label: "Student", value: "STUDENT" },
  { label: "Employed", value: "EMPLOYED" },
  { label: "Self-Employed", value: "SELF_EMPLOYED" },
  { label: "Business Owner", value: "BUSINESS_OWNER" },
  { label: "Freelancer", value: "FREELANCER" },
  { label: "Job Seeker", value: "JOB_SEEKER" },
  { label: "Recent Graduate", value: "RECENT_GRADUATE" },
  { label: "Other", value: "OTHER" },
];

export const CURRENT_STATUS_OPTIONS = CAREER_STATUS_OPTIONS;

export const PRIMARY_GOAL_OPTIONS: { label: string; value: PrimaryGoal }[] = [
  { label: "Land a Job", value: "LAND_A_JOB" },
  { label: "Get an Internship", value: "GET_AN_INTERNSHIP" },
  { label: "Switch Career", value: "SWITCH_CAREER" },
  { label: "Get Promoted", value: "GET_PROMOTED" },
  { label: "Learn New Skills", value: "LEARN_NEW_SKILLS" },
  { label: "Prepare for Interview", value: "PREPARE_FOR_INTERVIEW" },
  { label: "Build Resume", value: "BUILD_RESUME" },
  { label: "Improve Resume", value: "IMPROVE_RESUME" },
  { label: "Become Job Ready", value: "BECOME_JOB_READY" },
  { label: "Explore Careers", value: "EXPLORE_CAREERS" },
  { label: "Other", value: "OTHER" },
];

export const SKILL_PROFICIENCY_OPTIONS: { label: string; value: SkillProficiency }[] = [
  { label: "Beginner", value: "BEGINNER" },
  { label: "Basic", value: "BASIC" },
  { label: "Intermediate", value: "INTERMEDIATE" },
  { label: "Advanced", value: "ADVANCED" },
  { label: "Expert", value: "EXPERT" },
];

export const CAREER_EXPERIENCE_LEVEL_OPTIONS: { label: string; value: CareerExperienceLevel }[] = [
  { label: "Entry Level", value: "ENTRY" },
  { label: "Junior", value: "JUNIOR" },
  { label: "Mid Level", value: "MID" },
  { label: "Senior", value: "SENIOR" },
  { label: "Lead / Principal", value: "LEAD" },
];

export const TARGET_COMPANY_TYPE_OPTIONS: { label: string; value: TargetCompanyType }[] = [
  { label: "Startup", value: "STARTUP" },
  { label: "Mid-Size Company", value: "MID_SIZE" },
  { label: "Enterprise", value: "ENTERPRISE" },
  { label: "Big Tech / FAANG", value: "FAANG" },
  { label: "Government", value: "GOVERNMENT" },
  { label: "Non-Profit", value: "NON_PROFIT" },
  { label: "No Preference", value: "NO_PREFERENCE" },
];

export const WEEKLY_LEARNING_HOURS_OPTIONS = [5, 10, 15, 20, 25, 30, 40] as const;

export const PROFILE_VALIDATION = {
  AGE_MIN: 16,
  AGE_MAX: 100,
  NAME_MIN: 1,
  NAME_MAX: 100,
  ROLE_MAX: 100,
  QUALIFICATION_MAX: 100,
  FIELD_OF_STUDY_MAX: 100,
  TARGET_ROLE_MAX: 100,
  SKILL_NAME_MAX: 100,
  DESIRED_SKILL_MAX: 100,
  MAX_SKILLS: 50,
  MAX_DESIRED_SKILLS: 30,
} as const;

export const PROFILE_COMPLETION_WEIGHTS = {
  primaryGoal: 15,
  currentStatus: 15,
  skills: 15,
  education: 15,
  targetRole: 10,
  desiredSkills: 10,
  currentRole: 10,
  weeklyLearningHours: 5,
  targetCompanyType: 5,
} as const;

export type ProfileCompletenessFieldKey = keyof typeof PROFILE_COMPLETION_WEIGHTS;

export const FIELD_METADATA: Record<
  ProfileCompletenessFieldKey,
  { label: string; description: string; priority: number }
> = {
  primaryGoal: {
    label: "Primary Goal",
    description: "Your primary career objective helps align guidance and roadmaps.",
    priority: 1,
  },
  currentStatus: {
    label: "Current Status",
    description: "Your employment/academic status tailors personalized advice.",
    priority: 2,
  },
  skills: {
    label: "Current Skills",
    description: "Adding your technical and professional skills enables skill gap analysis.",
    priority: 3,
  },
  targetRole: {
    label: "Target Role",
    description: "Your target role improves roadmap, resume, and interview personalization.",
    priority: 4,
  },
  education: {
    label: "Education",
    description: "Your academic background helps benchmark career experience.",
    priority: 5,
  },
  desiredSkills: {
    label: "Desired Skills",
    description: "Target skills shape learning paths and roadmap milestone recommendations.",
    priority: 6,
  },
  weeklyLearningHours: {
    label: "Weekly Learning Hours",
    description: "Your availability ensures roadmap pacing matches your real schedule.",
    priority: 7,
  },
  targetCompanyType: {
    label: "Target Company Type",
    description: "Target environment shapes interview questions and resume positioning.",
    priority: 8,
  },
  currentRole: {
    label: "Current Role",
    description: "Your current job title or student status establishes your baseline.",
    priority: 9,
  },
};
