import { SkillProficiency } from "@prisma/client";

/**
 * Controlled alias map mapping common skill aliases/variations to canonical normalized keys.
 */
export const SKILL_ALIAS_MAP: Record<string, string> = {
  js: "javascript",
  javascript: "javascript",
  ts: "typescript",
  typescript: "typescript",
  node: "node.js",
  nodejs: "node.js",
  "node.js": "node.js",
  react: "react",
  reactjs: "react",
  "react.js": "react",
  "react native": "react native",
  vue: "vue.js",
  vuejs: "vue.js",
  "vue.js": "vue.js",
  next: "next.js",
  nextjs: "next.js",
  "next.js": "next.js",
  angular: "angular",
  angularjs: "angular",
  python: "python",
  python3: "python",
  py: "python",
  java: "java",
  golang: "go",
  go: "go",
  csharp: "c#",
  "c#": "c#",
  "c sharp": "c#",
  cpp: "c++",
  "c++": "c++",
  "c plus plus": "c++",
  rust: "rust",
  sql: "sql",
  mysql: "mysql",
  postgres: "postgresql",
  postgresql: "postgresql",
  psql: "postgresql",
  mongo: "mongodb",
  mongodb: "mongodb",
  redis: "redis",
  docker: "docker",
  k8s: "kubernetes",
  kubernetes: "kubernetes",
  aws: "aws",
  "amazon web services": "aws",
  gcp: "google cloud",
  "google cloud": "google cloud",
  "google cloud platform": "google cloud",
  azure: "azure",
  "microsoft azure": "azure",
  git: "git",
  github: "git",
  "ci/cd": "ci/cd",
  cicd: "ci/cd",
  "ci / cd": "ci/cd",
  "rest api": "rest apis",
  "rest apis": "rest apis",
  rest: "rest apis",
  restful: "rest apis",
  graphql: "graphql",
  html: "html/css",
  css: "html/css",
  html5: "html/css",
  css3: "html/css",
  "html/css": "html/css",
  "tailwind css": "tailwind css",
  tailwind: "tailwind css",
  tailwindcss: "tailwind css",
  "system design": "system design",
  "systems design": "system design",
  "data structures": "data structures & algorithms",
  dsa: "data structures & algorithms",
  algorithms: "data structures & algorithms",
  "data structures & algorithms": "data structures & algorithms",
  "data structures and algorithms": "data structures & algorithms",
  ml: "machine learning",
  "machine learning": "machine learning",
  dl: "deep learning",
  "deep learning": "deep learning",
  ai: "artificial intelligence",
  "artificial intelligence": "artificial intelligence",
  nlp: "natural language processing",
  "natural language processing": "natural language processing",
  cv: "computer vision",
  "computer vision": "computer vision",
  tensorflow: "tensorflow",
  pytorch: "pytorch",
  pandas: "pandas",
  numpy: "numpy",
  scikit: "scikit-learn",
  "scikit-learn": "scikit-learn",
  "ui/ux": "ui/ux design",
  "ui/ux design": "ui/ux design",
  "ui design": "ui/ux design",
  "ux design": "ui/ux design",
  figma: "figma",
};

/**
 * Normalizes a skill name for consistent lookup against the RoleSkillMap.
 * Resolves case-insensitivity, whitespace, and known aliases.
 */
export function normalizeSkillForLookup(name: string): string {
  if (!name) return "";
  const cleaned = name.trim().toLowerCase().replace(/\s+/g, " ");
  return SKILL_ALIAS_MAP[cleaned] || cleaned;
}

/**
 * Resolves an array of user Profile skills into a Map of normalized canonical key -> { originalName, proficiency }
 */
export function resolveUserSkillsToCanonical(
  skills: Array<{ name: string; proficiency: SkillProficiency }>
): Map<string, { originalName: string; proficiency: SkillProficiency }> {
  const resolved = new Map<
    string,
    { originalName: string; proficiency: SkillProficiency }
  >();

  for (const skill of skills) {
    const key = normalizeSkillForLookup(skill.name);
    if (!key) continue;

    // If already seen, preserve higher proficiency if duplicate exists
    if (resolved.has(key)) {
      const existing = resolved.get(key)!;
      // You can keep the first or highest, let's keep first
      continue;
    }

    resolved.set(key, {
      originalName: skill.name,
      proficiency: skill.proficiency,
    });
  }

  return resolved;
}
