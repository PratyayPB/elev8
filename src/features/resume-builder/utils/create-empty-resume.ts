import { BuilderResumeArtifact } from "../types";

/**
 * Creates an empty Resume Artifact standard structure for a given resume ID.
 */
export function createEmptyResumeArtifact(resumeId: string): BuilderResumeArtifact {
  return {
    resumeId,
    version: 1,
    personalInformation: {
      fullName: "",
      email: "",
      label: "",
      image: "",
      phone: "",
      location: "",
      city: "",
      region: "",
      countryCode: "",
      linkedin: "",
      github: "",
      twitter: "",
      portfolio: "",
    },
    professionalSummary: "",
    education: [],
    experience: [],
    projects: [],
    skills: [],
    certifications: [],
    achievements: [],
    languages: [],
    volunteer: [],
    publications: [],
    interests: [],
    references: [],
  };
}
