import { RoleProfileSeedEntry } from "./types";

export const DATA_AI_ROLE_PROFILES: RoleProfileSeedEntry[] = [
  // Data Analyst - ENTRY
  {
    role: "Data Analyst",
    normalizedRole: "data-analyst",
    experienceLevel: "ENTRY",
    skills: [
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "Python", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "Pandas", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Visualization", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
    ],
  },
  // Data Analyst - MID
  {
    role: "Data Analyst",
    normalizedRole: "data-analyst",
    experienceLevel: "MID",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Pandas", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "PostgreSQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Visualization", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
    ],
  },

  // Data Scientist - JUNIOR
  {
    role: "Data Scientist",
    normalizedRole: "data-scientist",
    experienceLevel: "JUNIOR",
    skills: [
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Pandas", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "NumPy", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 15 },
      { name: "Machine Learning", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 35 },
      { name: "Scikit-Learn", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
    ],
  },
  // Data Scientist - MID
  {
    role: "Data Scientist",
    normalizedRole: "data-scientist",
    experienceLevel: "MID",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "Machine Learning", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Scikit-Learn", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Pandas", minimumProficiency: "ADVANCED", importance: "IMPORTANT", estimatedHours: 0 },
      { name: "Data Structures & Algorithms", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 25 },
    ],
  },
  // Data Scientist - SENIOR
  {
    role: "Data Scientist",
    normalizedRole: "data-scientist",
    experienceLevel: "SENIOR",
    skills: [
      { name: "Python", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Machine Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Deep Learning", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 35 },
      { name: "TensorFlow", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 30 },
      { name: "System Design", minimumProficiency: "INTERMEDIATE", importance: "SUPPORTING", estimatedHours: 30 },
    ],
  },

  // Machine Learning Engineer - MID
  {
    role: "Machine Learning Engineer",
    normalizedRole: "machine-learning-engineer",
    experienceLevel: "MID",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Machine Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 40 },
      { name: "Deep Learning", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "PyTorch", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "Docker", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Data Structures & Algorithms", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 30 },
    ],
  },
  // Machine Learning Engineer - SENIOR
  {
    role: "Machine Learning Engineer",
    normalizedRole: "machine-learning-engineer",
    experienceLevel: "SENIOR",
    skills: [
      { name: "Python", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Machine Learning", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Deep Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 30 },
      { name: "PyTorch", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 40 },
      { name: "Kubernetes", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 25 },
    ],
  },

  // AI Engineer - MID
  {
    role: "AI Engineer",
    normalizedRole: "ai-engineer",
    experienceLevel: "MID",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Artificial Intelligence", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 35 },
      { name: "Natural Language Processing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "PyTorch", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 30 },
      { name: "REST APIs", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 15 },
    ],
  },
  // AI Engineer - SENIOR
  {
    role: "AI Engineer",
    normalizedRole: "ai-engineer",
    experienceLevel: "SENIOR",
    skills: [
      { name: "Python", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Artificial Intelligence", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Natural Language Processing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 25 },
      { name: "Deep Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 30 },
      { name: "System Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 40 },
    ],
  },

  // Database Administrator - ENTRY
  {
    role: "Database Administrator",
    normalizedRole: "database-administrator",
    experienceLevel: "ENTRY",
    skills: [
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "PostgreSQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "MySQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
    ],
  },
  // Database Administrator - MID
  {
    role: "Database Administrator",
    normalizedRole: "database-administrator",
    experienceLevel: "MID",
    skills: [
      { name: "SQL", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "PostgreSQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 25 },
      { name: "MySQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Redis", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 30 },
    ],
  },
];
