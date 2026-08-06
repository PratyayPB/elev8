"use server";

import { Question, ResumeExperienceLevel } from "../types";

export async function fetchResumePersonalizationQuestions(
  role: string,
  experienceLevel: ResumeExperienceLevel
): Promise<Question[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Hardcoded mocked questions for Phase 4.1
  return [
    {
      id: "q_company_target",
      question: "Which companies or organization types are you targeting?",
      type: "single",
      options: [
        "Startup (Fast-paced / Early Stage)",
        "Mid-sized Growth Company",
        "FAANG / Enterprise tech",
        "Government / Defense",
        "No Preference",
      ],
    },
    {
      id: "q_focus_areas",
      question: "What areas should receive extra attention during resume scoring?",
      type: "multi",
      options: [
        "Impactful Project Descriptions",
        "ATS Optimization & Keywords",
        "Technical Skills & Tooling Stack",
        "Work Experience & Leadership",
        "Education & Certifications",
      ],
    },
    {
      id: "q_concern",
      question: "What is your main concern regarding your current resume?",
      type: "single",
      options: [
        "Lack of quantified achievements / metrics",
        "Formatting & ATS readability",
        "Career gap or transition narrative",
        "Overly lengthy or wordy bullet points",
      ],
    },
  ];
}
