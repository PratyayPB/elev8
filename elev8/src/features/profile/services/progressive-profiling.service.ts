import {
  ProfileData,
  PromptContext,
  ProfilePromptItem,
} from "../types";
import { calculateProfileCompleteness } from "./profile-completeness.service";

interface PromptTemplate {
  field: string;
  title: string;
  description: string;
  priority: number;
}

const CONTEXT_TEMPLATES: Record<PromptContext, PromptTemplate[]> = {
  RESUME: [
    {
      field: "targetRole",
      title: "What role are you targeting?",
      description: "Your target role helps make resume scoring and keyword tailoring more precise.",
      priority: 100,
    },
    {
      field: "currentRole",
      title: "What is your current role / title?",
      description: "Provides a baseline to evaluate your career progression in resume reviews.",
      priority: 90,
    },
    {
      field: "skills",
      title: "What are your core technical skills?",
      description: "Adding skills enables automated ATS matching and gap analysis.",
      priority: 80,
    },
    {
      field: "education",
      title: "Add your academic background",
      description: "Education details help verify resume credential formatting.",
      priority: 70,
    },
    {
      field: "targetIndustry",
      title: "What industry are you aiming for?",
      description: "Enables industry-specific ATS keyword insights for your resume.",
      priority: 60,
    },
  ],
  INTERVIEW: [
    {
      field: "targetRole",
      title: "What role are you interviewing for?",
      description: "Tailors practice interview questions to your target position.",
      priority: 100,
    },
    {
      field: "targetCompanyType",
      title: "What type of company are you interviewing with?",
      description: "Customizes behavioral and culture-fit scenarios for your target environment.",
      priority: 85,
    },
    {
      field: "skills",
      title: "What skills should the interview focus on?",
      description: "Generates relevant technical question sets matched to your stack.",
      priority: 80,
    },
    {
      field: "currentStatus",
      title: "What is your current career status?",
      description: "Adjusts situational questions for student vs. experienced interviews.",
      priority: 70,
    },
  ],
  ROADMAP: [
    {
      field: "targetRole",
      title: "What career path are you aiming for?",
      description: "Defines the destination and milestones of your custom learning roadmap.",
      priority: 100,
    },
    {
      field: "desiredSkills",
      title: "What skills do you want to learn?",
      description: "Creates targeted milestones specifically for your desired skills.",
      priority: 90,
    },
    {
      field: "weeklyLearningHours",
      title: "How many hours can you dedicate per week?",
      description: "Calculates realistic milestone pacing and completion estimates.",
      priority: 80,
    },
    {
      field: "primaryGoal",
      title: "What is your primary learning goal?",
      description: "Shapes roadmap depth, project scope, and recommended pace.",
      priority: 70,
    },
    {
      field: "skills",
      title: "What skills do you already know?",
      description: "Allows skipping redundant beginner milestones you've already mastered.",
      priority: 60,
    },
  ],
  DASHBOARD: [
    {
      field: "primaryGoal",
      title: "Select your primary career goal",
      description: "Helps Elev8 recommend the most relevant next steps on your dashboard.",
      priority: 100,
    },
    {
      field: "currentStatus",
      title: "What is your current career status?",
      description: "Tailors guidance for your stage (student, switcher, professional).",
      priority: 95,
    },
    {
      field: "skills",
      title: "Add your current skills",
      description: "Unlocks personalized skill gap analysis across all modules.",
      priority: 90,
    },
    {
      field: "targetRole",
      title: "Set your target role",
      description: "Aligns roadmap, interview, and resume recommendations.",
      priority: 85,
    },
    {
      field: "desiredSkills",
      title: "What skills do you want to master next?",
      description: "Helps personalize learning recommendations.",
      priority: 70,
    },
    {
      field: "weeklyLearningHours",
      title: "Set your weekly learning availability",
      description: "Ensures roadmap schedules fit your real-world availability.",
      priority: 65,
    },
  ],
  PROFILE: [
    {
      field: "primaryGoal",
      title: "What is your primary career goal?",
      description: "Aligns all career tools to your main objective.",
      priority: 100,
    },
    {
      field: "currentStatus",
      title: "Specify your current career status",
      description: "Informs contextual guidance across the platform.",
      priority: 95,
    },
    {
      field: "skills",
      title: "Add your skills and proficiencies",
      description: "Helps benchmark your readiness for target positions.",
      priority: 90,
    },
    {
      field: "targetRole",
      title: "Specify your target role",
      description: "Enables precise role-specific gap analysis.",
      priority: 85,
    },
    {
      field: "targetIndustry",
      title: "Select your target industry",
      description: "Customizes market insights and career recommendations.",
      priority: 80,
    },
    {
      field: "education",
      title: "Complete your academic background",
      description: "Documents your highest qualification and university.",
      priority: 75,
    },
    {
      field: "desiredSkills",
      title: "Add skills you want to learn",
      description: "Generates custom learning milestones.",
      priority: 70,
    },
    {
      field: "weeklyLearningHours",
      title: "Set your weekly learning hours",
      description: "Calibrates roadmap pacing to your schedule.",
      priority: 65,
    },
  ],
};

/**
 * Returns prioritized, deterministic prompts for missing profile information in a specific module context.
 */
export function getProfileCompletionPrompts(
  profile: ProfileData | null,
  context: PromptContext = "DASHBOARD"
): ProfilePromptItem[] {
  const completeness = calculateProfileCompleteness(profile);
  const missingSet = new Set(completeness.missingFields.map((m) => m.field));

  if (missingSet.size === 0) {
    return [];
  }

  const templates = CONTEXT_TEMPLATES[context] || CONTEXT_TEMPLATES.DASHBOARD;
  const prompts: ProfilePromptItem[] = [];

  for (const tmpl of templates) {
    if (missingSet.has(tmpl.field)) {
      prompts.push({
        field: tmpl.field,
        title: tmpl.title,
        description: tmpl.description,
        priority: tmpl.priority,
        skippable: true,
        context,
      });
    }
  }

  // Sort by priority descending
  prompts.sort((a, b) => b.priority - a.priority);

  return prompts;
}
