export const BUILDER_ROUTES = {
  HOME: "/dashboard/resumes/builder",
  NEW: "/dashboard/resumes/builder/new",
  EDITOR: (resumeId: string) => `/dashboard/resumes/builder/${resumeId}`,
  TEMPLATES: "/dashboard/resumes/builder/templates",
};

export const BUILDER_API = {
  RESUMES: "/api/builder/resumes",
  RESUME: (resumeId: string) => `/api/builder/resumes/${resumeId}`,
  ARTIFACT: (resumeId: string) => `/api/builder/resumes/${resumeId}/artifact`,
  PDF: (resumeId: string) => `/api/builder/resumes/${resumeId}/pdf`,
};
