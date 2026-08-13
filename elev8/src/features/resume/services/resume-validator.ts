import { z } from "zod";

const nullableString = z.preprocess(
  (val) => (val === null ? undefined : val),
  z.string().optional()
);

const nullableStringArray = z.preprocess(
  (val) => (val === null || val === undefined ? [] : val),
  z.array(z.string()).default([])
);

export const ParsedResumeSchema = z.object({
  personalInformation: z
    .preprocess(
      (val) => (val === null || val === undefined ? {} : val),
      z.object({
        name: nullableString,
        email: nullableString,
        phone: nullableString,
        location: nullableString,
        linkedin: nullableString,
        github: nullableString,
        website: nullableString,
      })
    )
    .default({}),
  summary: nullableString,
  skills: nullableStringArray,
  projects: z
    .preprocess(
      (val) => (val === null || val === undefined ? [] : val),
      z.array(
        z.object({
          title: z.preprocess((val) => (val === null || val === undefined ? "" : String(val)), z.string().default("")),
          description: z.preprocess((val) => (val === null || val === undefined ? "" : String(val)), z.string().default("")),
          technologies: nullableStringArray,
          link: nullableString,
        })
      )
    )
    .default([]),
  experience: z
    .preprocess(
      (val) => (val === null || val === undefined ? [] : val),
      z.array(
        z.object({
          company: z.preprocess((val) => (val === null || val === undefined ? "" : String(val)), z.string().default("")),
          role: z.preprocess((val) => (val === null || val === undefined ? "" : String(val)), z.string().default("")),
          startDate: nullableString,
          endDate: nullableString,
          highlights: nullableStringArray,
        })
      )
    )
    .default([]),
  education: z
    .preprocess(
      (val) => (val === null || val === undefined ? [] : val),
      z.array(
        z.object({
          institution: z.preprocess((val) => (val === null || val === undefined ? "" : String(val)), z.string().default("")),
          degree: z.preprocess((val) => (val === null || val === undefined ? "" : String(val)), z.string().default("")),
          fieldOfStudy: nullableString,
          graduationDate: nullableString,
          gpa: nullableString,
        })
      )
    )
    .default([]),
  certifications: nullableStringArray,
  achievements: nullableStringArray,
});

export const SectionScoreSchema = z.object({
  score: z.preprocess((val) => (typeof val === "number" ? val : Number(val) || 0), z.number().min(0).max(100)),
  strengths: nullableStringArray,
  weaknesses: nullableStringArray,
  missingSkills: nullableStringArray,
  recommendations: nullableStringArray,
});

export const ResumeSectionAssessmentSchema = z.object({
  sections: z.object({
    skills: SectionScoreSchema,
    projects: SectionScoreSchema,
    experience: SectionScoreSchema,
    education: SectionScoreSchema,
    certifications: z.preprocess((val) => (val === null ? undefined : val), SectionScoreSchema.optional()),
    summary: z.preprocess((val) => (val === null ? undefined : val), SectionScoreSchema.optional()),
  }),
});

export const ResumeOverallAssessmentSchema = z.object({
  overallScore: z.preprocess((val) => (typeof val === "number" ? val : Number(val) || 0), z.number().min(0).max(100)),
  atsScore: z.preprocess((val) => (typeof val === "number" ? val : Number(val) || 0), z.number().min(0).max(100)),
  technicalStrength: z.preprocess((val) => (typeof val === "number" ? val : Number(val) || 0), z.number().min(0).max(100)),
  projectQuality: z.preprocess((val) => (typeof val === "number" ? val : Number(val) || 0), z.number().min(0).max(100)),
  experienceStrength: z.preprocess((val) => (typeof val === "number" ? val : Number(val) || 0), z.number().min(0).max(100)),
  strengths: nullableStringArray,
  weaknesses: nullableStringArray,
  missingKeywords: nullableStringArray,
  recommendedSkills: nullableStringArray,
  recommendedProjects: nullableStringArray,
  recommendedRoadmap: nullableString,
  recommendedInterview: nullableString,
  summary: z.preprocess((val) => (val === null || val === undefined ? "" : String(val)), z.string().default("")),
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
