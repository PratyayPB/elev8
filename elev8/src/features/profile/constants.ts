import { OnboardingStepConfig } from "./types";

export const ONBOARDING_STEPS: OnboardingStepConfig[] = [
  {
    id: 1,
    title: "Welcome",
    subtitle: "Let's personalize your Elev8 experience",
    description: "Welcome to Elev8! You can set up your professional profile now or skip and complete it later.",
  },
  {
    id: 2,
    title: "Personal Info",
    subtitle: "Tell us a bit about yourself",
    description: "Your basic contact details and local timezone.",
  },
  {
    id: 3,
    title: "Education",
    subtitle: "Academic background",
    description: "Information about your degree, major, and current academic status.",
  },
  {
    id: 4,
    title: "Professional",
    subtitle: "Work experience & current role",
    description: "Details regarding your current industry, role, and years of experience.",
  },
  {
    id: 5,
    title: "Skills",
    subtitle: "Your technical & soft skill set",
    description: "Select languages, frameworks, tools, and databases you work with.",
  },
  {
    id: 6,
    title: "Interests",
    subtitle: "What domains inspire you?",
    description: "Select your primary technical and professional areas of interest.",
  },
  {
    id: 7,
    title: "Career Goals",
    subtitle: "What are you aiming for?",
    description: "Choose your primary career objectives for the near future.",
  },
  {
    id: 8,
    title: "Preferences",
    subtitle: "Learning style & availability",
    description: "Tailor how Elev8 provides guidance and roadmap suggestions.",
  },
  {
    id: 9,
    title: "Completion",
    subtitle: "All set!",
    description: "Your profile setup is complete. You can modify these settings anytime.",
  },
];

export const CURRENT_STATUS_OPTIONS = [
  { label: "Student", value: "STUDENT" },
  { label: "Graduate", value: "GRADUATE" },
  { label: "Working Professional", value: "WORKING_PROFESSIONAL" },
  { label: "Career Switcher", value: "CAREER_SWITCHER" },
];

export const CAREER_INTEREST_OPTIONS = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "AI / Machine Learning",
  "Data Science",
  "Cybersecurity",
  "DevOps",
  "Mobile Development",
  "Cloud Computing",
  "UI / UX Design",
  "Product Management",
];

export const CAREER_GOAL_OPTIONS = [
  "Get my first internship",
  "Land my first software job",
  "Switch careers",
  "Become a Full Stack Developer",
  "Learn AI",
  "Become interview ready",
  "Build a stronger portfolio",
];

export const LEARNING_STYLE_OPTIONS = [
  { label: "Hands-on Projects", value: "PROJECTS" },
  { label: "Structured Courses", value: "COURSES" },
  { label: "Documentation & Reading", value: "READING" },
  { label: "Video Tutorials", value: "VIDEO" },
];

export const DIFFICULTY_OPTIONS = [
  { label: "Beginner", value: "BEGINNER" },
  { label: "Intermediate", value: "INTERMEDIATE" },
  { label: "Advanced", value: "ADVANCED" },
];

export const EMPLOYMENT_STATUS_OPTIONS = [
  "Employed Full-time",
  "Employed Part-time",
  "Freelancer / Contractor",
  "Unemployed / Job Seeking",
  "Student",
];
