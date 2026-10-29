export const EXPERIENCE_LEVELS = [
  {
    id: "Beginner",
    title: "Beginner",
    description: "New to the field, little to no prior coding or industry experience.",
  },
  {
    id: "Basic",
    title: "Basic",
    description: "Familiar with fundamentals, built small syntax exercises or tutorials.",
  },
  {
    id: "Intermediate",
    title: "Intermediate",
    description: "Comfortable building applications, looking to fill knowledge gaps.",
  },
  {
    id: "Advanced",
    title: "Advanced",
    description: "Experienced professional looking for mastery, system architecture, or specialization.",
  },
] as const;

export type ExperienceLevelValue = (typeof EXPERIENCE_LEVELS)[number]["id"];
