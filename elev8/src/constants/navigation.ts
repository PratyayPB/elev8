import { ROUTES } from "./routes";

export const PUBLIC_NAVIGATION: { label: string; href: string }[] = [];

export const DASHBOARD_NAVIGATION = [
  { label: "Dashboard", href: ROUTES.DASHBOARD },
  { label: "Career Assessment", href: ROUTES.CAREER_ASSESSMENT },
  { label: "Career Guidance", href: ROUTES.CAREER_GUIDANCE },
  { label: "Roadmaps", href: ROUTES.ROADMAPS },
  { label: "Resumes", href: ROUTES.RESUMES },
  { label: "Interviews", href: ROUTES.INTERVIEWS },
  { label: "Progress", href: ROUTES.PROGRESS },
  { label: "Settings", href: ROUTES.SETTINGS },
];
