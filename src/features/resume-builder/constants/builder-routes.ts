export const BUILDER_ROUTES = {
  HOME: "/dashboard/resumes/builder",
  NEW: "/dashboard/resumes/builder/new",
  EDITOR: (resumeId: string) => `/dashboard/resumes/builder/${resumeId}`,
};

export const BUILDER_API = {
  RESUMES: "/api/builder/resumes",
  RESUME: (resumeId: string) => `/api/builder/resumes/${resumeId}`,
  ARTIFACT: (resumeId: string) => `/api/builder/resumes/${resumeId}/artifact`,
  IMPORT_PROFILE: (resumeId: string) => `/api/builder/resumes/${resumeId}/import-profile`,
  DOWNLOAD_PDF: (resumeId: string, token?: string) =>
    token
      ? `/api/builder/resumes/${resumeId}/download?token=${token}`
      : `/api/builder/resumes/${resumeId}/download`,
};
