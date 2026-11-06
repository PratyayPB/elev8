/**
 * Cache Key Taxonomy & Builder Functions
 * Adheres to: elev8:<environment>:<namespace>:<entityId>[:<qualifier>]
 */

function getEnvPrefix(): string {
  const env = process.env.NODE_ENV || "development";
  if (env === "production") return "elev8:prod";
  if (env === "test") return "elev8:test";
  return "elev8:dev";
}

export const CacheKeys = {
  // User & Identity Mapping
  userByClerkId: (clerkId: string) => `${getEnvPrefix()}:user:clerk:${clerkId}`,
  userProfile: (userId: string) => `${getEnvPrefix()}:user:profile:${userId}`,

  // Static Catalogs & Reference Data
  catalogAllRoles: () => `${getEnvPrefix()}:catalog:roles:all`,
  catalogRoleProfile: (normalizedRole: string) =>
    `${getEnvPrefix()}:catalog:role:${normalizedRole}`,
  catalogResumeTemplates: () => `${getEnvPrefix()}:catalog:templates:resume`,
  catalogGlobalRoadmaps: (page: number = 1, sort: string = "newest") =>
    `${getEnvPrefix()}:catalog:roadmaps:global:${page}:${sort}`,
  catalogGlobalRoadmapsPattern: () => `${getEnvPrefix()}:catalog:roadmaps:global:*`,
  catalogGlobalInterviews: (
    page: number = 1,
    sort: string = "NEWEST",
    difficulty: string = "ALL"
  ) =>
    `${getEnvPrefix()}:catalog:interviews:global:${page}:${sort}:${difficulty}`,
  catalogGlobalInterviewsPattern: () => `${getEnvPrefix()}:catalog:interviews:global:*`,

  // Artifacts & Computed Reports
  roadmapArtifact: (roadmapId: string) =>
    `${getEnvPrefix()}:artifact:roadmap:${roadmapId}`,
  resumeReport: (resumeId: string) =>
    `${getEnvPrefix()}:artifact:resume:${resumeId}`,
  interviewArtifact: (interviewId: string) =>
    `${getEnvPrefix()}:artifact:interview:${interviewId}`,
  resumeBuilderArtifact: (resumeId: string) =>
    `${getEnvPrefix()}:artifact:resume-builder:${resumeId}`,

  // Notifications
  unreadNotificationCount: (userId: string) =>
    `${getEnvPrefix()}:notify:unread:${userId}`,

  // Quotas & Limits
  quota: (type: string, userId: string) =>
    `${getEnvPrefix()}:quota:${type}:${userId}`,

  // Distributed Locks
  workflowLock: (action: string, entityId: string) =>
    `${getEnvPrefix()}:lock:${action}:${entityId}`,
} as const;

export const CacheTTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  USER_SESSION: 900, // 15 minutes
  USER_PROFILE: 1800, // 30 minutes
  ARTIFACT: 14400, // 4 hours
  CATALOG: 86400, // 24 hours
  LOCK: 30, // 30 seconds
} as const;
