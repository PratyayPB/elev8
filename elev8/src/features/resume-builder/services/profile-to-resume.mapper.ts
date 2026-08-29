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
