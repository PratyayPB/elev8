import { BuilderResumeArtifact } from "../types";

export const BUILDER_TO_JSON_RESUME_SECTION: Record<keyof BuilderResumeArtifact, string | null> = {
  resumeId: null,
  version: null,
  personalInformation: "basics",
  professionalSummary: "basics",
  experience: "work",
  education: "education",
  projects: "projects",
  skills: "skills",
  certifications: "certificates",
  achievements: "awards",
  languages: "languages",
  volunteer: "volunteer",
  publications: "publications",
  interests: "interests",
  references: "references",
};

export function getPopulatedBuilderSections(artifact: BuilderResumeArtifact): string[] {
  const populatedSections: string[] = [];
  
  if (artifact.personalInformation && Object.keys(artifact.personalInformation).length > 0) {
    populatedSections.push("personalInformation");
  }
  if (artifact.professionalSummary && artifact.professionalSummary.trim().length > 0) {
    populatedSections.push("professionalSummary");
  }
  if (artifact.experience && artifact.experience.length > 0) {
    populatedSections.push("experience");
  }
  if (artifact.education && artifact.education.length > 0) {
    populatedSections.push("education");
  }
  if (artifact.projects && artifact.projects.length > 0) {
    populatedSections.push("projects");
  }
  if (artifact.skills && artifact.skills.length > 0) {
    populatedSections.push("skills");
  }
  if (artifact.certifications && artifact.certifications.length > 0) {
    populatedSections.push("certifications");
  }
  if (artifact.achievements && artifact.achievements.length > 0) {
    populatedSections.push("achievements");
  }
  if (artifact.languages && artifact.languages.length > 0) {
    populatedSections.push("languages");
  }
  if (artifact.volunteer && artifact.volunteer.length > 0) {
    populatedSections.push("volunteer");
  }
  if (artifact.publications && artifact.publications.length > 0) {
    populatedSections.push("publications");
  }
  if (artifact.interests && artifact.interests.length > 0) {
    populatedSections.push("interests");
  }
  if (artifact.references && artifact.references.length > 0) {
    populatedSections.push("references");
  }

  return populatedSections;
}
