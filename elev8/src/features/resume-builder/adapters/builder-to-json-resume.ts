import { BuilderResumeArtifact } from "../types";

export function builderToJsonResume(artifact: BuilderResumeArtifact): any {
  const {
    personalInformation: pi,
    professionalSummary,
    experience = [],
    education = [],
    projects = [],
    skills = [],
    certifications = [],
    achievements = [],
  } = artifact;

  // Profiles mapping
  const profiles = [];
  if (pi.linkedin) {
    profiles.push({ network: "LinkedIn", url: pi.linkedin });
  }
  if (pi.github) {
    profiles.push({ network: "GitHub", url: pi.github });
  }

  const jsonResume: any = {
    basics: {
      name: pi.fullName || "",
      email: pi.email || "",
      phone: pi.phone || "",
      url: pi.portfolio || "",
      summary: professionalSummary || "",
      location: pi.location ? { address: pi.location } : undefined,
      profiles: profiles.length > 0 ? profiles : undefined,
    },
  };

  if (experience.length > 0) {
    jsonResume.work = experience.map((exp) => ({
      name: exp.company || "",
      position: exp.jobTitle || "",
      url: "",
      startDate: exp.startDate || "",
      endDate: exp.currentlyWorking ? "" : (exp.endDate || ""),
      summary: exp.description || "",
      highlights: exp.achievements && exp.achievements.length > 0 ? exp.achievements : undefined,
    }));
  }

  if (education.length > 0) {
    jsonResume.education = education.map((edu) => ({
      institution: edu.institution || "",
      url: "",
      area: edu.fieldOfStudy || "",
      studyType: edu.degree || "",
      startDate: edu.startDate || "",
      endDate: edu.endDate || "",
      score: "",
      courses: [],
    }));
  }

  if (projects.length > 0) {
    jsonResume.projects = projects.map((proj) => ({
      name: proj.name || "",
      description: proj.description || "",
      highlights: proj.technologies && proj.technologies.length > 0 ? proj.technologies : undefined,
      url: proj.url || "",
      startDate: proj.startDate || "",
      endDate: proj.endDate || "",
    }));
  }

  if (skills.length > 0) {
    jsonResume.skills = skills.map((skill) => ({
      name: skill.name || "",
      level: skill.proficiency || "",
      keywords: skill.category ? [skill.category] : [],
    }));
  }

  if (certifications.length > 0) {
    jsonResume.certificates = certifications.map((cert) => ({
      name: cert.name || "",
      date: cert.issueDate || "",
      issuer: cert.issuingOrganization || "",
      url: cert.credentialUrl || "",
    }));
  }

  if (achievements.length > 0) {
    jsonResume.awards = achievements.map((ach) => ({
      title: ach.title || "",
      date: ach.date || "",
      awarder: "",
      summary: ach.description || "",
    }));
  }

  return jsonResume;
}
