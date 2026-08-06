import { z } from "zod";

export const ParsedResumeSchema = z.object({
  personalInformation: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    location: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
  }),
  summary: z.string().optional(),
  skills: z.array(z.string()).default([]),
  projects: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()).default([]),
        link: z.string().optional(),
      })
    )
    .default([]),
  experience: z
    .array(
      z.object({
        company: z.string(),
        role: z.string(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        highlights: z.array(z.string()).default([]),
      })
    )
    .default([]),
  education: z
    .array(
      z.object({
        institution: z.string(),
        degree: z.string(),
        fieldOfStudy: z.string().optional(),
        graduationDate: z.string().optional(),
        gpa: z.string().optional(),
      })
    )
    .default([]),
  certifications: z.array(z.string()).default([]),
  achievements: z.array(z.string()).default([]),
});

export const SectionScoreSchema = z.object({
  score: z.number().min(0).max(100),
  strengths: z.array(z.string()).default([]),
  weaknesses: z.array(z.string()).default([]),
  missingSkills: z.array(z.string()).optional(),
  recommendations: z.array(z.string()).optional(),
});

export const ResumeSectionAssessmentSchema = z.object({
  sections: z.object({
    skills: SectionScoreSchema,
    projects: SectionScoreSchema,
    experience: SectionScoreSchema,
    education: SectionScoreSchema,
    certifications: SectionScoreSchema.optional(),
    summary: SectionScoreSchema.optional(),
  }),
});

export const ResumeOverallAssessmentSchema = z.object({
  overallScore: z.number().min(0).max(100),
  atsScore: z.number().min(0).max(100),
  technicalStrength: z.number().min(0).max(100),
  projectQuality: z.number().min(0).max(100),
  experienceStrength: z.number().min(0).max(100),
  strengths: z.array(z.string()).default([]),
  weaknesses: z.array(z.string()).default([]),
  missingKeywords: z.array(z.string()).default([]),
  recommendedSkills: z.array(z.string()).default([]),
  recommendedProjects: z.array(z.string()).default([]),
  recommendedRoadmap: z.string().optional(),
  recommendedInterview: z.string().optional(),
  summary: z.string(),
});

export class ResumeValidator {
  public static validateParsedResume(data: unknown) {
    return ParsedResumeSchema.parse(data);
  }

  public static validateSectionAssessment(data: unknown) {
    return ResumeSectionAssessmentSchema.parse(data);
  }

  public static validateOverallAssessment(data: unknown) {
    return ResumeOverallAssessmentSchema.parse(data);
  }
}
