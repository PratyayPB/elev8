import { ParsedResume } from "@/features/resume/types";

export type ResumeProfile = ParsedResume;

export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  isPremium: boolean;
}

export type Template = TemplateMetadata;

export interface BuilderSection {
  id: string;
  title: string;
  icon: string;
}

export interface ValidationState {
  isValid: boolean;
  errors: Record<string, string[]>;
}

export interface BuilderState {
  activeResume: ResumeProfile | null;
  activeTemplateId: string | null;
  isDirty: boolean;
  lastSaved: string | null;
  validationStatus: ValidationState;
}

import { ResumeBuildStatus, ResumeCompanyType } from "@prisma/client";

export { ResumeBuildStatus, ResumeCompanyType };

export type BuilderResumeStatus = ResumeBuildStatus;
export type BuilderResumeTemplate = string;
export type ResumeBuilderTemplate = string;

export interface PersonalInformation {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface ExperienceEntry {
  id: string;
  jobTitle: string;
  company: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  currentlyWorking?: boolean;
  description?: string;
  achievements?: string[];
}

export interface ProjectEntry {
  id: string;
  name: string;
  description?: string;
  technologies?: string[];
  url?: string;
  startDate?: string;
  endDate?: string;
}

export interface SkillEntry {
  id: string;
  name: string;
  category?: string;
  proficiency?: string;
}

export interface CertificationEntry {
  id: string;
  name: string;
  issuingOrganization?: string;
  issueDate?: string;
  expiryDate?: string;
  credentialUrl?: string;
}

export interface AchievementEntry {
  id: string;
  title: string;
  description?: string;
  date?: string;
}

export interface BuilderResumeArtifact {
  resumeId: string;
  version: number;
  personalInformation: PersonalInformation;
  professionalSummary: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillEntry[];
  certifications: CertificationEntry[];
  achievements: AchievementEntry[];
}

export interface BuilderResumeRecord {
  id: string;
  userId: string;
  title: string;
  template: ResumeBuilderTemplate;
  artifactBlobUrl?: string | null;
  status: ResumeBuildStatus;
  targetJobTitle?: string | null;
  jobDescription?: string | null;
  targetCompany?: string | null;
  targetCompanyType?: ResumeCompanyType | null;
  isAiGenerated?: boolean;
  aiGeneratedAt?: Date | string | null;
  aiModel?: string | null;
  aiPromptVersion?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

