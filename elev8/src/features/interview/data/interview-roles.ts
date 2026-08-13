export const INTERVIEW_ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Data Analyst",
  "DevOps Engineer",
  "Cloud Engineer",
  "Cybersecurity Analyst",
  "QA / Test Engineer",
  "Product Manager",
  "Business Analyst",
  "UI/UX Designer",
  "Digital Marketing Specialist",
  "General HR / Behavioral",
  "Leadership & Management"
] as const;

export type InterviewRole = typeof INTERVIEW_ROLES[number];
