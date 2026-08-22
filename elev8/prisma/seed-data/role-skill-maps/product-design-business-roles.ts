import { RoleProfileSeedEntry } from "./types";

export const PRODUCT_DESIGN_BUSINESS_ROLE_PROFILES: RoleProfileSeedEntry[] = [
  // UI/UX Designer - ENTRY
  {
    role: "UI/UX Designer",
    normalizedRole: "ui-ux-designer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "Figma", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "UI/UX Design", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 35 },
      { name: "Wireframing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "HTML/CSS", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 15 },
    ],
  },
  // UI/UX Designer - MID
  {
    role: "UI/UX Designer",
    normalizedRole: "ui-ux-designer",
    experienceLevel: "MID",
    skills: [
      { name: "Figma", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "UI/UX Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Design Systems", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 30 },
      { name: "User Research", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "Prototyping", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
    ],
  },

  // Product Manager - MID
  {
    role: "Product Manager",
    normalizedRole: "product-manager",
    experienceLevel: "MID",
    skills: [
      { name: "Product Strategy", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 35 },
      { name: "User Research", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Data Analytics", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "Agile / Scrum", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "Wireframing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 15 },
    ],
  },
  // Product Manager - SENIOR
  {
    role: "Product Manager",
    normalizedRole: "product-manager",
    experienceLevel: "SENIOR",
    skills: [
      { name: "Product Strategy", minimumProficiency: "EXPERT", importance: "CORE", estimatedHours: 0 },
      { name: "Data Analytics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "User Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Executive Stakeholder Management", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 30 },
      { name: "Go-to-Market Strategy", minimumProficiency: "ADVANCED", importance: "IMPORTANT", estimatedHours: 30 },
    ],
  },

  // Business Analyst - ENTRY
  {
    role: "Business Analyst",
    normalizedRole: "business-analyst",
    experienceLevel: "ENTRY",
    skills: [
      { name: "Requirements Gathering", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "SQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 25 },
      { name: "Data Analytics", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Excel / Spreadsheets", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
    ],
  },
  // Business Analyst - MID
  {
    role: "Business Analyst",
    normalizedRole: "business-analyst",
    experienceLevel: "MID",
    skills: [
      { name: "Requirements Gathering", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Data Analytics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 25 },
      { name: "Process Modeling", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 25 },
    ],
  },

  // Digital Marketing Specialist - ENTRY
  {
    role: "Digital Marketing Specialist",
    normalizedRole: "digital-marketing-specialist",
    experienceLevel: "ENTRY",
    skills: [
      { name: "SEO", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Content Strategy", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 20 },
      { name: "Google Analytics", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Social Media Marketing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 15 },
    ],
  },
  // Digital Marketing Specialist - MID
  {
    role: "Digital Marketing Specialist",
    normalizedRole: "digital-marketing-specialist",
    experienceLevel: "MID",
    skills: [
      { name: "SEO", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "Google Analytics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "Performance Marketing / PPC", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 25 },
      { name: "Conversion Rate Optimization", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 25 },
    ],
  },

  // Technical Writer - ENTRY
  {
    role: "Technical Writer",
    normalizedRole: "technical-writer",
    experienceLevel: "ENTRY",
    skills: [
      { name: "Technical Documentation", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 25 },
      { name: "Markdown", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 10 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 10 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
    ],
  },
  // Technical Writer - MID
  {
    role: "Technical Writer",
    normalizedRole: "technical-writer",
    experienceLevel: "MID",
    skills: [
      { name: "Technical Documentation", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 0 },
      { name: "API Documentation", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 10 },
      { name: "Information Architecture", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 20 },
    ],
  },
];
