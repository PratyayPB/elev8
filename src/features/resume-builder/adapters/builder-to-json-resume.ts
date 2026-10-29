import { BuilderResumeArtifact } from "../types";

export function builderToJsonResume(artifact: BuilderResumeArtifact): any {
  const {
    personalInformation = {} as any,
    professionalSummary = "",
    experience = [],
    education = [],
    projects = [],
    skills = [],
    certifications = [],
    achievements = [],
    languages = [],
    volunteer = [],
    publications = [],
    interests = [],
    references = [],
  } = artifact || {};

  const pi = personalInformation || {};

  // Profiles mapping
  const profiles = [];
  if (pi.linkedin) {
    profiles.push({ network: "LinkedIn", url: pi.linkedin, username: "" });
  }
  if (pi.github) {
    profiles.push({ network: "GitHub", url: pi.github, username: "" });
  }
  if (pi.twitter) {
    profiles.push({ network: "Twitter", url: pi.twitter, username: "" });
  }

  // Location mapping with smart fallback if user provided "City, State" in location
  const locCity =
    pi.city ||
    (pi.location && pi.location.includes(",")
      ? pi.location.split(",")[0]?.trim()
      : pi.location) ||
    "";
  const locRegion =
    pi.region ||
    (pi.location && pi.location.includes(",")
      ? pi.location.split(",")[1]?.trim()
      : "") ||
    "";

  const jsonResume: any = {
    basics: {
      name: pi.fullName || "",
      label: pi.label || "",
      image: pi.image || "",
      email: pi.email || "",
      phone: pi.phone || "",
      url: pi.portfolio || "",
      summary: professionalSummary || "",
      location: {
        address: pi.location || "",
        postalCode: "",
        city: locCity,
        countryCode: pi.countryCode || "",
        region: locRegion,
      },
      profiles: profiles,
    },
    work: (experience || []).map((exp) => ({
      name: exp.company || "",
      position: exp.jobTitle || "",
      url: "",
      startDate: exp.startDate || "",
      endDate: exp.currentlyWorking ? "" : exp.endDate || "",
      summary: exp.description || "",
      highlights:
        exp.achievements && exp.achievements.length > 0 ? exp.achievements : [],
    })),
    education: (education || []).map((edu) => ({
      institution: edu.institution || "",
      url: "",
      area: edu.fieldOfStudy || "",
      studyType: edu.degree || "",
      startDate: edu.startDate || "",
      endDate: edu.endDate || "",
      score: edu.score || "",
      courses: Array.isArray(edu.courses)
        ? edu.courses
        : typeof edu.courses === "string"
        ? (edu.courses as string)
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : [],
    })),
    projects: (projects || []).map((proj) => ({
      name: proj.name || "",
      description: proj.description || "",
      highlights:
        proj.technologies && proj.technologies.length > 0
          ? proj.technologies
          : [],
      url: proj.url || "",
      startDate: proj.startDate || "",
      endDate: proj.endDate || "",
    })),
    skills: (skills || []).map((skill) => ({
      name: skill.name || "",
      level: skill.proficiency || "",
      keywords: skill.category ? [skill.category] : [],
    })),
    certificates: (certifications || []).map((cert) => ({
      name: cert.name || "",
      date: cert.issueDate || "",
      issuer: cert.issuingOrganization || "",
      url: cert.credentialUrl || "",
    })),
    awards: (achievements || []).map((ach) => ({
      title: ach.title || "",
      date: ach.date || "",
      awarder: ach.awarder || "",
      summary: ach.description || "",
    })),
    languages: (languages || []).map((lang) => ({
      language: lang.language || "",
      fluency: lang.fluency || "",
    })),
    volunteer: (volunteer || []).map((vol) => ({
      organization: vol.organization || "",
      position: vol.position || "",
      url: vol.url || "",
      startDate: vol.startDate || "",
      endDate: vol.endDate || "",
      summary: vol.summary || "",
      highlights: vol.highlights || [],
    })),
    publications: (publications || []).map((pub) => ({
      name: pub.name || "",
      publisher: pub.publisher || "",
      releaseDate: pub.releaseDate || "",
      url: pub.url || "",
      summary: pub.summary || "",
    })),
    interests: (interests || []).map((int) => ({
      name: int.name || "",
      keywords: Array.isArray(int.keywords) ? int.keywords : [],
    })),
    references: (references || []).map((ref) => ({
      name: ref.name || "",
      reference: ref.reference || "",
    })),
  };

  return jsonResume;
}
