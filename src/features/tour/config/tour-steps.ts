import { Step } from "react-joyride";
import { ROUTES } from "@/constants/routes";

export interface CustomStep extends Step {
  route: string;
}

export const ONBOARDING_STEPS: CustomStep[] = [
  {
    target: '[data-tour="dashboard-hero"]',
    content:
      "Welcome to Elev8! This is your central career workspace. From here, you can access all the tools you need to accelerate your career.",
    title: "Welcome to Elev8",
    placement: "bottom",
    route: ROUTES.DASHBOARD,
    disableBeacon: true,
  },
  {
    target: '[data-tour="nav-profile"]',
    content:
      "Your journey starts with your Profile. We use this information to personalize your AI career tools.",
    title: "Build Your Context",
    placement: "right",
    route: ROUTES.DASHBOARD,
  },
  {
    target: '[data-tour="profile-form"]',
    content:
      "Fill out your skills, target role, and experience level. The more detailed you are, the better the AI can tailor its advice, roadmaps, and interview questions.",
    title: "Profile Information",
    placement: "top",
    route: ROUTES.PROFILE,
  },
  {
    target: '[data-tour="nav-assessment"]',
    content:
      "Next, let's look at the Career Assessment tool.",
    title: "Evaluate Your Readiness",
    placement: "right",
    route: ROUTES.PROFILE,
  },
  {
    target: '[data-tour="assessment-view"]',
    content:
      "This engine evaluates your profile against your target role. It identifies your strengths and calculates skill gaps so you know exactly what to focus on.",
    title: "Career Assessment",
    placement: "top",
    route: ROUTES.CAREER_ASSESSMENT,
  },
  {
    target: '[data-tour="nav-roadmaps"]',
    content: "Now let's build a plan to bridge those gaps.",
    title: "Skill Pathways",
    placement: "right",
    route: ROUTES.CAREER_ASSESSMENT,
  },
  {
    target: '[data-tour="roadmaps-library"]',
    content:
      "The Roadmap Generator creates structured learning pathways and milestones. Use it to turn your career goals into an actionable step-by-step plan.",
    title: "Roadmap Generator",
    placement: "top",
    route: ROUTES.ROADMAPS,
  },
  {
    target: '[data-tour="nav-resumes"]',
    content: "Once you have the skills, you need the right resume.",
    title: "Resume Tools",
    placement: "right",
    route: ROUTES.ROADMAPS,
  },
  {
    target: '[data-tour="resume-builder-card"]',
    content:
      "Use the Resume Builder to craft professional, ATS-optimized resumes tailored to highlight your specific strengths.",
    title: "Resume Builder",
    placement: "right",
    route: ROUTES.RESUMES,
  },
  {
    target: '[data-tour="resume-scorer-card"]',
    content:
      "Already have a resume? The Resume Scorer audits your existing document against industry benchmarks to identify missing keywords.",
    title: "Resume Scorer",
    placement: "left",
    route: ROUTES.RESUMES,
  },
  {
    target: '[data-tour="nav-interviews"]',
    content: "Time to practice for the real thing.",
    title: "Interview Practice",
    placement: "right",
    route: ROUTES.RESUMES,
  },
  {
    target: '[data-tour="interviews-hub"]',
    content:
      "Engage in dynamic, role-specific technical and behavioral mock interviews with real-time AI evaluation and feedback.",
    title: "Interview Simulation",
    placement: "top",
    route: ROUTES.INTERVIEWS,
  },
  {
    target: '[data-tour="nav-progress"]',
    content: "Track your journey across all modules.",
    title: "Your Progress",
    placement: "right",
    route: ROUTES.INTERVIEWS,
  },
  {
    target: '[data-tour="progress-timeline"]',
    content:
      "Here you can see a timeline of your recent activities, module completions, and overall career development. You are now ready to start using Elev8!",
    title: "Progress Tracker",
    placement: "top",
    route: ROUTES.PROGRESS,
  },
];
