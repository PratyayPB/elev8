import { RoleProfileSeedEntry } from "./types";

export const ENGINEERING_ROLE_PROFILES: RoleProfileSeedEntry[] = [
  // Full Stack Developer - ENTRY
  {
    role: "Full Stack Developer",
    normalizedRole: "full-stack-developer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "React", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "Node.js", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 30 },
      { name: "SQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "HTML/CSS", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
      { name: "TypeScript", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 15 },
    ],
  },
  // Full Stack Developer - MID
  {
    role: "Full Stack Developer",
    normalizedRole: "full-stack-developer",
    experienceLevel: "MID",
    skills: [
      { name: "JavaScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "TypeScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "React", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Node.js", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "PostgreSQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 30 },
      { name: "REST APIs", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 15 },
      { name: "Docker", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 40 },
    ],
  },
  // Full Stack Developer - SENIOR
  {
    role: "Full Stack Developer",
    normalizedRole: "full-stack-developer",
    experienceLevel: "SENIOR",
    skills: [
      { name: "JavaScript", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "TypeScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "React", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Node.js", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "System Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 50 },
      { name: "PostgreSQL", minimumProficiency: "ADVANCED", importance: "IMPORTANT", estimatedHours: 30 },
      { name: "Docker", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 20 },
    ],
  },

  // Frontend Developer - ENTRY
  {
    role: "Frontend Developer",
    normalizedRole: "frontend-developer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "HTML/CSS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 25 },
      { name: "React", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "TypeScript", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
      { name: "Tailwind CSS", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
    ],
  },
  // Frontend Developer - MID
  {
    role: "Frontend Developer",
    normalizedRole: "frontend-developer",
    experienceLevel: "MID",
    skills: [
      { name: "JavaScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "TypeScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "React", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Next.js", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "REST APIs", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 15 },
      { name: "Tailwind CSS", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 10 },
    ],
  },
  // Frontend Developer - SENIOR
  {
    role: "Frontend Developer",
    normalizedRole: "frontend-developer",
    experienceLevel: "SENIOR",
    skills: [
      { name: "JavaScript", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "TypeScript", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "React", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Next.js", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 35 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 20 },
    ],
  },

  // Backend Developer - ENTRY
  {
    role: "Backend Developer",
    normalizedRole: "backend-developer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "Node.js", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "REST APIs", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
      { name: "PostgreSQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
    ],
  },
  // Backend Developer - MID
  {
    role: "Backend Developer",
    normalizedRole: "backend-developer",
    experienceLevel: "MID",
    skills: [
      { name: "Node.js", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "PostgreSQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 25 },
      { name: "System Design", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Redis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 15 },
      { name: "Docker", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "REST APIs", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
    ],
  },
  // Backend Developer - SENIOR
  {
    role: "Backend Developer",
    normalizedRole: "backend-developer",
    experienceLevel: "SENIOR",
    skills: [
      { name: "Node.js", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "System Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 40 },
      { name: "PostgreSQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Redis", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Docker", minimumProficiency: "ADVANCED", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Kubernetes", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 30 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 20 },
    ],
  },

  // Software Engineer - ENTRY
  {
    role: "Software Engineer",
    normalizedRole: "software-engineer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "Data Structures & Algorithms", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 50 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "SQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 15 },
    ],
  },
  // Software Engineer - JUNIOR
  {
    role: "Software Engineer",
    normalizedRole: "software-engineer",
    experienceLevel: "JUNIOR",
    skills: [
      { name: "Data Structures & Algorithms", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 10 },
      { name: "REST APIs", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 15 },
    ],
  },
  // Software Engineer - MID
  {
    role: "Software Engineer",
    normalizedRole: "software-engineer",
    experienceLevel: "MID",
    skills: [
      { name: "Data Structures & Algorithms", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 30 },
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "System Design", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "PostgreSQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "Docker", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ],
  },
  // Software Engineer - SENIOR
  {
    role: "Software Engineer",
    normalizedRole: "software-engineer",
    experienceLevel: "SENIOR",
    skills: [
      { name: "Data Structures & Algorithms", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "System Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 40 },
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "PostgreSQL", minimumProficiency: "ADVANCED", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "Docker", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 20 },
    ],
  },

  // Mobile App Developer - ENTRY
  {
    role: "Mobile App Developer",
    normalizedRole: "mobile-app-developer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "React Native", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "TypeScript", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 15 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
    ],
  },
  // Mobile App Developer - MID
  {
    role: "Mobile App Developer",
    normalizedRole: "mobile-app-developer",
    experienceLevel: "MID",
    skills: [
      { name: "React Native", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "TypeScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "REST APIs", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 15 },
      { name: "CI/CD", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ],
  },
];
