import { RoleProfileSeedEntry } from "./types";

export const CLOUD_DEVOPS_ROLE_PROFILES: RoleProfileSeedEntry[] = [
  // DevOps Engineer - ENTRY
  {
    role: "DevOps Engineer",
    normalizedRole: "devops-engineer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "Docker", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "Git", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "Python", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "AWS", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 30 },
    ],
  },
  // DevOps Engineer - MID
  {
    role: "DevOps Engineer",
    normalizedRole: "devops-engineer",
    experienceLevel: "MID",
    skills: [
      { name: "Docker", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Kubernetes", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "CI/CD", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "AWS", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 30 },
    ],
  },
  // DevOps Engineer - SENIOR
  {
    role: "DevOps Engineer",
    normalizedRole: "devops-engineer",
    experienceLevel: "SENIOR",
    skills: [
      { name: "Docker", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Kubernetes", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "AWS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "CI/CD", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "System Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 40 },
    ],
  },

  // Cloud Engineer - MID
  {
    role: "Cloud Engineer",
    normalizedRole: "cloud-engineer",
    experienceLevel: "MID",
    skills: [
      { name: "AWS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 30 },
      { name: "Docker", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "Kubernetes", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
    ],
  },
  // Cloud Engineer - SENIOR
  {
    role: "Cloud Engineer",
    normalizedRole: "cloud-engineer",
    experienceLevel: "SENIOR",
    skills: [
      { name: "AWS", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Kubernetes", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "System Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 40 },
      { name: "Docker", minimumProficiency: "ADVANCED", importance: "IMPORTANT", estimatedHours: 0 },
      { name: "Google Cloud", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 25 },
    ],
  },

  // Cybersecurity Analyst - ENTRY
  {
    role: "Cybersecurity Analyst",
    normalizedRole: "cybersecurity-analyst",
    experienceLevel: "ENTRY",
    skills: [
      { name: "Network Security", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "Python", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
    ],
  },
  // Cybersecurity Analyst - MID
  {
    role: "Cybersecurity Analyst",
    normalizedRole: "cybersecurity-analyst",
    experienceLevel: "MID",
    skills: [
      { name: "Network Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Vulnerability Assessment", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 30 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "AWS", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
    ],
  },

  // QA Engineer - ENTRY
  {
    role: "QA Engineer",
    normalizedRole: "qa-engineer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "Manual Testing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Test Case Design", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "JavaScript", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
    ],
  },
  // QA Engineer - MID
  {
    role: "QA Engineer",
    normalizedRole: "qa-engineer",
    experienceLevel: "MID",
    skills: [
      { name: "Test Case Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Automated Testing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "CI/CD", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 15 },
    ],
  },

  // Automation Test Engineer - MID
  {
    role: "Automation Test Engineer",
    normalizedRole: "automation-test-engineer",
    experienceLevel: "MID",
    skills: [
      { name: "Automated Testing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 35 },
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 10 },
    ],
  },
];
