import {
  external_exports
} from "./chunk-3HTFOM3X.mjs";
import {
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// src/features/resume-builder/schemas/resume-artifact.schema.ts
init_esm();
var PersonalInformationSchema = external_exports.object({
  fullName: external_exports.string().nullish().transform((v) => v ?? ""),
  email: external_exports.string().nullish().transform((v) => v ?? ""),
  label: external_exports.string().nullish().transform((v) => v ?? ""),
  image: external_exports.string().nullish().transform((v) => v ?? ""),
  phone: external_exports.string().nullish().transform((v) => v ?? ""),
  location: external_exports.string().nullish().transform((v) => v ?? ""),
  city: external_exports.string().nullish().transform((v) => v ?? ""),
  region: external_exports.string().nullish().transform((v) => v ?? ""),
  countryCode: external_exports.string().nullish().transform((v) => v ?? ""),
  linkedin: external_exports.string().nullish().transform((v) => v ?? ""),
  github: external_exports.string().nullish().transform((v) => v ?? ""),
  twitter: external_exports.string().nullish().transform((v) => v ?? ""),
  portfolio: external_exports.string().nullish().transform((v) => v ?? "")
});
var EducationEntrySchema = external_exports.object({
  id: external_exports.string(),
  institution: external_exports.string().nullish().transform((v) => v ?? ""),
  degree: external_exports.string().nullish().transform((v) => v ?? ""),
  fieldOfStudy: external_exports.string().nullish().transform((v) => v ?? ""),
  startDate: external_exports.string().nullish().transform((v) => v ?? ""),
  endDate: external_exports.string().nullish().transform((v) => v ?? ""),
  score: external_exports.string().nullish().transform((v) => v ?? ""),
  courses: external_exports.array(external_exports.string()).nullish().transform((v) => v ?? []),
  description: external_exports.string().nullish().transform((v) => v ?? "")
});
var ExperienceEntrySchema = external_exports.object({
  id: external_exports.string(),
  jobTitle: external_exports.string().nullish().transform((v) => v ?? ""),
  company: external_exports.string().nullish().transform((v) => v ?? ""),
  location: external_exports.string().nullish().transform((v) => v ?? ""),
  startDate: external_exports.string().nullish().transform((v) => v ?? ""),
  endDate: external_exports.string().nullish().transform((v) => v ?? ""),
  currentlyWorking: external_exports.boolean().nullish().transform((v) => Boolean(v)),
  description: external_exports.string().nullish().transform((v) => v ?? ""),
  achievements: external_exports.array(external_exports.string()).nullish().transform((v) => v ?? [])
});
var ProjectEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string().nullish().transform((v) => v ?? ""),
  description: external_exports.string().nullish().transform((v) => v ?? ""),
  technologies: external_exports.array(external_exports.string()).nullish().transform((v) => v ?? []),
  url: external_exports.string().nullish().transform((v) => v ?? ""),
  startDate: external_exports.string().nullish().transform((v) => v ?? ""),
  endDate: external_exports.string().nullish().transform((v) => v ?? "")
});
var SkillEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string().nullish().transform((v) => v ?? ""),
  category: external_exports.string().nullish().transform((v) => v ?? ""),
  proficiency: external_exports.string().nullish().transform((v) => v ?? "")
});
var CertificationEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string().nullish().transform((v) => v ?? ""),
  issuingOrganization: external_exports.string().nullish().transform((v) => v ?? ""),
  issueDate: external_exports.string().nullish().transform((v) => v ?? ""),
  expiryDate: external_exports.string().nullish().transform((v) => v ?? ""),
  credentialUrl: external_exports.string().nullish().transform((v) => v ?? "")
});
var AchievementEntrySchema = external_exports.object({
  id: external_exports.string(),
  title: external_exports.string().nullish().transform((v) => v ?? ""),
  awarder: external_exports.string().nullish().transform((v) => v ?? ""),
  description: external_exports.string().nullish().transform((v) => v ?? ""),
  date: external_exports.string().nullish().transform((v) => v ?? "")
});
var LanguageEntrySchema = external_exports.object({
  id: external_exports.string(),
  language: external_exports.string().nullish().transform((v) => v ?? ""),
  fluency: external_exports.string().nullish().transform((v) => v ?? "")
});
var VolunteerEntrySchema = external_exports.object({
  id: external_exports.string(),
  organization: external_exports.string().nullish().transform((v) => v ?? ""),
  position: external_exports.string().nullish().transform((v) => v ?? ""),
  url: external_exports.string().nullish().transform((v) => v ?? ""),
  startDate: external_exports.string().nullish().transform((v) => v ?? ""),
  endDate: external_exports.string().nullish().transform((v) => v ?? ""),
  summary: external_exports.string().nullish().transform((v) => v ?? ""),
  highlights: external_exports.array(external_exports.string()).nullish().transform((v) => v ?? [])
});
var PublicationEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string().nullish().transform((v) => v ?? ""),
  publisher: external_exports.string().nullish().transform((v) => v ?? ""),
  releaseDate: external_exports.string().nullish().transform((v) => v ?? ""),
  url: external_exports.string().nullish().transform((v) => v ?? ""),
  summary: external_exports.string().nullish().transform((v) => v ?? "")
});
var InterestEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string().nullish().transform((v) => v ?? ""),
  keywords: external_exports.array(external_exports.string()).nullish().transform((v) => v ?? [])
});
var ReferenceEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string().nullish().transform((v) => v ?? ""),
  reference: external_exports.string().nullish().transform((v) => v ?? "")
});
var BuilderResumeArtifactSchema = external_exports.object({
  resumeId: external_exports.string(),
  version: external_exports.number().int().positive(),
  personalInformation: PersonalInformationSchema,
  professionalSummary: external_exports.string().nullish().transform((v) => v ?? ""),
  education: external_exports.array(EducationEntrySchema).nullish().transform((v) => v ?? []),
  experience: external_exports.array(ExperienceEntrySchema).nullish().transform((v) => v ?? []),
  projects: external_exports.array(ProjectEntrySchema).nullish().transform((v) => v ?? []),
  skills: external_exports.array(SkillEntrySchema).nullish().transform((v) => v ?? []),
  certifications: external_exports.array(CertificationEntrySchema).nullish().transform((v) => v ?? []),
  achievements: external_exports.array(AchievementEntrySchema).nullish().transform((v) => v ?? []),
  languages: external_exports.array(LanguageEntrySchema).nullish().transform((v) => v ?? []),
  volunteer: external_exports.array(VolunteerEntrySchema).nullish().transform((v) => v ?? []),
  publications: external_exports.array(PublicationEntrySchema).nullish().transform((v) => v ?? []),
  interests: external_exports.array(InterestEntrySchema).nullish().transform((v) => v ?? []),
  references: external_exports.array(ReferenceEntrySchema).nullish().transform((v) => v ?? [])
});
var ResumeBuildStatusEnum = external_exports.enum(["DRAFT", "READY", "ARCHIVED"]);
var CreateResumeInputSchema = external_exports.object({
  title: external_exports.string().trim().min(1, "Resume title is required").max(100, "Resume title cannot exceed 100 characters"),
  template: external_exports.string().optional().default("academic-cv-lite")
});
var UpdateResumeInputSchema = external_exports.object({
  title: external_exports.string().trim().min(1, "Resume title is required").max(100, "Resume title cannot exceed 100 characters").optional(),
  template: external_exports.string().optional(),
  status: ResumeBuildStatusEnum.optional()
});

export {
  BuilderResumeArtifactSchema
};
//# sourceMappingURL=chunk-QPKFBGWH.mjs.map
