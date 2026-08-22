/**
 * Controlled alias map mapping common role slugs/variations to canonical role slugs.
 */
export const ROLE_ALIAS_MAP: Record<string, string> = {
  "full-stack-engineer": "full-stack-developer",
  "full-stack-dev": "full-stack-developer",
  "fullstack-developer": "full-stack-developer",
  "fullstack-engineer": "full-stack-developer",
  "web-developer": "full-stack-developer",
  "frontend-engineer": "frontend-developer",
  "frontend-dev": "frontend-developer",
  "front-end-developer": "frontend-developer",
  "front-end-engineer": "frontend-developer",
  "backend-engineer": "backend-developer",
  "backend-dev": "backend-developer",
  "back-end-developer": "backend-developer",
  "back-end-engineer": "backend-developer",
  "software-developer": "software-engineer",
  swe: "software-engineer",
  "ml-engineer": "machine-learning-engineer",
  "machine-learning-developer": "machine-learning-engineer",
  "ai-ml-engineer": "ai-engineer",
  "artificial-intelligence-engineer": "ai-engineer",
  "cloud-architect": "cloud-engineer",
  "devops-specialist": "devops-engineer",
  "qa-tester": "qa-engineer",
  "quality-assurance-engineer": "qa-engineer",
  "test-automation-engineer": "automation-test-engineer",
  sdet: "automation-test-engineer",
  dba: "database-administrator",
  "db-administrator": "database-administrator",
  "ui-designer": "ui-ux-designer",
  "ux-designer": "ui-ux-designer",
  "product-designer": "ui-ux-designer",
  "ui-ux": "ui-ux-designer",
  "technical-author": "technical-writer",
  "docs-engineer": "technical-writer",
  "data-analyst-specialist": "data-analyst",
};

/**
 * Normalizes an arbitrary role string into a kebab-case slug.
 * e.g., "Full Stack Developer" -> "full-stack-developer"
 */
export function normalizeRoleName(role: string): string {
  if (!role) return "";
  return role
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Normalizes and resolves an arbitrary role name into a canonical role slug.
 */
export function resolveRoleAlias(role: string): string {
  const slug = normalizeRoleName(role);
  if (!slug) return "";
  return ROLE_ALIAS_MAP[slug] || slug;
}
