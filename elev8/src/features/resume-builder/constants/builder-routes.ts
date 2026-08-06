export const BUILDER_ROUTES = {
  HOME: "/resume-builder",
  NEW: "/resume-builder/new",
  EDITOR: (resumeId: string) => `/resume-builder/${resumeId}`,
  TEMPLATES: "/resume-builder/templates",
};
