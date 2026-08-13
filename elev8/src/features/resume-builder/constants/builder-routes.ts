export const BUILDER_ROUTES = {
  HOME: "/dashboard/resume-builder",
  NEW: "/dashboard/resume-builder/new",
  EDITOR: (resumeId: string) => `/dashboard/resume-builder/${resumeId}`,
  TEMPLATES: "/dashboard/resume-builder/templates",
};
