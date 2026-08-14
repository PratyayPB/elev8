import { UserProfile } from "@prisma/client";
import { BuilderResumeArtifact, SkillEntry, EducationEntry } from "../types";
import { createEmptyResumeArtifact } from "../utils/create-empty-resume";
import crypto from "crypto";

interface ProfileSkillsJson {
  languages?: string[];
  frameworks?: string[];
  databases?: string[];
  cloud?: string[];
  tools?: string[];
  softSkills?: string[];
  [key: string]: string[] | undefined;
}

/**
 * Maps a UserProfile to a BuilderResumeArtifact, copying all relevant profile information.
 */
export function profileToResumeArtifact(
  resumeId: string,
  profile: UserProfile | null
): BuilderResumeArtifact {
  const artifact = createEmptyResumeArtifact(resumeId);

  if (!profile) {
    return artifact;
  }

  // Map personal information
  artifact.personalInformation.fullName = profile.fullName || "";
  artifact.personalInformation.email = profile.email || "";
  if (profile.country) {
    artifact.personalInformation.location = profile.country;
  }

  // Map education (Institution/Degree/Major)
  if (profile.institution || profile.degree || profile.major) {
    const educationEntry: EducationEntry = {
      id: crypto.randomUUID(),
      institution: profile.institution || "",
      degree: profile.degree || "",
      fieldOfStudy: profile.major || "",
    };

    if (profile.graduationYear) {
      educationEntry.endDate = profile.graduationYear.toString();
    }

    artifact.education = [educationEntry];
  }

  // Map skills
  if (profile.skills && typeof profile.skills === "object") {
    const profileSkills = profile.skills as ProfileSkillsJson;
    const mappedSkills: SkillEntry[] = [];

    const categoryMap: Record<string, string> = {
      languages: "Languages",
      frameworks: "Frameworks/Libraries",
      databases: "Databases",
      cloud: "Cloud Services",
      tools: "Tools",
      softSkills: "Soft Skills",
    };

    for (const [key, categoryLabel] of Object.entries(categoryMap)) {
      const skillsArray = profileSkills[key];
      if (Array.isArray(skillsArray)) {
        for (const skillName of skillsArray) {
          if (typeof skillName === "string" && skillName.trim()) {
            mappedSkills.push({
              id: crypto.randomUUID(),
              name: skillName.trim(),
              category: categoryLabel,
            });
          }
        }
      }
    }

    // Handle any dynamic categories not standard in categoryMap
    for (const [key, skillsArray] of Object.entries(profileSkills)) {
      if (key in categoryMap) continue;
      if (Array.isArray(skillsArray)) {
        for (const skillName of skillsArray) {
          if (typeof skillName === "string" && skillName.trim()) {
            mappedSkills.push({
              id: crypto.randomUUID(),
              name: skillName.trim(),
              category: key,
            });
          }
        }
      }
    }

    artifact.skills = mappedSkills;
  }

  return artifact;
}
