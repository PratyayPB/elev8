export type ResumeExperienceLevel = "Beginner" | "Basic" | "Intermediate" | "Advanced";

export interface ResumeAnswer {
  questionId: string;
  selectedOptions: string[];
}

export type Answer = ResumeAnswer;

export interface ResumeQuestion {
  id: string;
  question: string;
  type: "single" | "multi";
  options: string[];
}

export type Question = ResumeQuestion;

export interface ResumePersonalization {
  skipped: boolean;
  answers: ResumeAnswer[];
}

export interface ResumeAssessmentRequest {
  role: string;
  roleDescription?: string;
  experienceLevel: ResumeExperienceLevel;
  uploadedFile: File | null;
  personalization: ResumePersonalization;
}

export interface ResumeUpload {
  file: File;
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

// ==========================================
// Phase 4.2 Engine Types
// ==========================================

export interface ParsedResumeInfo {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface ParsedWorkExperience {
  company: string;
  role: string;
  startDate?: string;
  endDate?: string;
  highlights: string[];
}

export interface ParsedProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ParsedEducation {
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  graduationDate?: string;
  gpa?: string;
}

export interface ParsedResume {
  personalInformation: ParsedResumeInfo;
  summary?: string;
  skills: string[];
  projects: ParsedProject[];
  experience: ParsedWorkExperience[];
  education: ParsedEducation[];
  certifications: string[];
  achievements: string[];
}

export interface SectionScore {
  score: number; // 0 - 100
  strengths: string[];
  weaknesses: string[];
  missingSkills?: string[];
  recommendations?: string[];
}

export interface ResumeSectionAssessment {
  sections: {
    skills: SectionScore;
    projects: SectionScore;
    experience: SectionScore;
    education: SectionScore;
    certifications?: SectionScore;
    summary?: SectionScore;
  };
}

export interface ResumeOverallAssessment {
  overallScore: number; // 0 - 100
  atsScore: number; // 0 - 100
  technicalStrength: number;
  projectQuality: number;
  experienceStrength: number;
  strengths: string[];
  weaknesses: string[];
  missingKeywords: string[];
  recommendedSkills: string[];
  recommendedProjects: string[];
  recommendedRoadmap?: string;
  recommendedInterview?: string;
  summary: string;
}

export interface ResumeAnalytics {
  skillCount: number;
  projectCount: number;
  experienceCount: number;
  certificationCount: number;
  educationCount: number;
  wordCount: number;
  estimatedAtsKeywordDensity: number; // percentage
}

export interface ResumeMetadata {
  resumeId: string;
  userId: string;
  role: string;
  experienceLevel: string;
  assessmentDate: string;
  generatorVersion: string;
  artifactVersion: string;
  originalPdfBlobUrl: string;
}

export interface ResumeArtifact {
  version: string; // "1.0.0"
  metadata: ResumeMetadata;
  parsedResume: ParsedResume;
  sectionAssessment: ResumeSectionAssessment;
  overallAssessment: ResumeOverallAssessment;
  analytics: ResumeAnalytics;
}

// ==========================================
// Phase 4.3 Improvement Hub Types
// ==========================================

export type ResumeHealthStatus = "Excellent" | "Good" | "Needs Improvement" | "Critical";

export interface ResumeHealth {
  status: ResumeHealthStatus;
  completeness: number; // percentage
  atsReadiness: number; // percentage
  recruiterReadiness: number; // percentage
  topStrengths: string[];
  topWeaknesses: string[];
}

export interface KeywordAnalysis {
  presentKeywords: string[];
  missingKeywords: string[];
  recommendedKeywords: string[];
  coveragePercentage: number;
}

export interface ImprovementRecommendation {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  section: string;
  expectedImpact: string;
}

export interface ResumeReport {
  resumeId: string;
  status: string;
  artifact: ResumeArtifact;
  health: ResumeHealth;
  keywords: KeywordAnalysis;
  recommendations: ImprovementRecommendation[];
}

