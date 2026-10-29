import { ResumeBuildStatus, ResumeCompanyType } from "@prisma/client";

export { ResumeBuildStatus, ResumeCompanyType };

export type BuilderResumeStatus = ResumeBuildStatus;
export type BuilderResumeTemplate = string;
export type ResumeBuilderTemplate = string;

export interface PersonalInformation {
  fullName: string;
  email: string;
  label?: string;
  image?: string;
  phone?: string;
  location?: string;
  city?: string;
  region?: string;
  countryCode?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  portfolio?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
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
  awarder?: string;
  description?: string;
  date?: string;
}

export interface LanguageEntry {
  id: string;
  language: string;
  fluency?: string;
}

export interface VolunteerEntry {
  id: string;
  organization: string;
  position: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface PublicationEntry {
  id: string;
  name: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;
}

export interface InterestEntry {
  id: string;
  name: string;
  keywords?: string[];
}

export interface ReferenceEntry {
  id: string;
  name: string;
  reference?: string;
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
  languages: LanguageEntry[];
  volunteer: VolunteerEntry[];
  publications: PublicationEntry[];
  interests: InterestEntry[];
  references: ReferenceEntry[];
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

