import { Profile, ProfileSkill } from "@prisma/client";
import { BuilderResumeArtifact, SkillEntry, EducationEntry } from "../types";
import { createEmptyResumeArtifact } from "../utils/create-empty-resume";
import crypto from "crypto";
import { getCountryName } from "@/lib/data/countries";

type ProfileWithSkills = Profile & {
  skills?: ProfileSkill[];
};

/**
 * Maps a Profile to a BuilderResumeArtifact, copying all relevant profile information.
 */
export function profileToResumeArtifact(
  resumeId: string,
  profile: ProfileWithSkills | null,
  userEmail?: string | null
): BuilderResumeArtifact {
  const artifact = createEmptyResumeArtifact(resumeId);

  if (!profile) {
    return artifact;
  }

  // Map personal information
  artifact.personalInformation.fullName = profile.name || "";
  if (userEmail) {
    artifact.personalInformation.email = userEmail;
  }
  if (profile.country) {
    artifact.personalInformation.location = getCountryName(profile.country);
  }

  // Map education (HighestQualification/FieldOfStudy)
  if (profile.highestQualification || profile.fieldOfStudy) {
    const educationEntry: EducationEntry = {
      id: crypto.randomUUID(),
      institution: "",
      degree: profile.highestQualification || "",
      fieldOfStudy: profile.fieldOfStudy || "",
    };

    artifact.education = [educationEntry];
  }

  // Map skills
  if (profile.skills && Array.isArray(profile.skills)) {
    const mappedSkills: SkillEntry[] = profile.skills
      .filter((s) => s.name && s.name.trim())
      .map((s) => ({
        id: crypto.randomUUID(),
        name: s.name.trim(),
        category: "Technical Skills",
      }));

    artifact.skills = mappedSkills;
  }

  return artifact;
}

/**
 * Merges profile data into an existing resume artifact, updating personalInformation, education, and skills,
 * while preserving other sections (experience, projects, certifications, achievements, summary).
 */
export function mergeProfileIntoResumeArtifact(
  currentArtifact: BuilderResumeArtifact,
  profile: ProfileWithSkills | null,
  userEmail?: string | null
): BuilderResumeArtifact {
  if (!profile) {
    return currentArtifact;
  }

  const profileArtifact = profileToResumeArtifact(
    currentArtifact.resumeId,
    profile,
    userEmail
  );

  return {
    ...currentArtifact,
    personalInformation: {
      ...currentArtifact.personalInformation,
      ...(profileArtifact.personalInformation.fullName
        ? { fullName: profileArtifact.personalInformation.fullName }
        : {}),
      ...(profileArtifact.personalInformation.email
        ? { email: profileArtifact.personalInformation.email }
        : {}),
      ...(profileArtifact.personalInformation.location
        ? { location: profileArtifact.personalInformation.location }
        : {}),
    },
    education:
      profileArtifact.education.length > 0
        ? profileArtifact.education
        : currentArtifact.education,
    skills:
      profileArtifact.skills.length > 0
        ? profileArtifact.skills
        : currentArtifact.skills,
  };
}
