import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// src/features/skill-gap/utils/role-normalizer.ts
init_esm();
var ROLE_ALIAS_MAP = {
  "full-stack-engineer": "full-stack-developer",
  "full-stack-dev": "full-stack-developer",
  "fullstack-developer": "full-stack-developer",
  "fullstack-engineer": "full-stack-developer",
  "web-developer": "full-stack-developer",
  "frontend-engineer": "frontend-developer",
  "frontend-dev": "frontend-developer",
  "front-end-developer": "frontend-developer",
  "front-end-engineer": "frontend-developer",
  "react-developer": "frontend-developer",
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
  "ui-ux": "ux-designer",
  "technical-author": "technical-writer",
  "docs-engineer": "technical-writer",
  "data-analyst-specialist": "data-analyst"
};
function normalizeRoleName(role) {
  if (!role) return "";
  return role.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
__name(normalizeRoleName, "normalizeRoleName");
function resolveRoleAlias(role) {
  const slug = normalizeRoleName(role);
  if (!slug) return "";
  return ROLE_ALIAS_MAP[slug] || slug;
}
__name(resolveRoleAlias, "resolveRoleAlias");

export {
  resolveRoleAlias
};
//# sourceMappingURL=chunk-5QBTDJ2B.mjs.map
