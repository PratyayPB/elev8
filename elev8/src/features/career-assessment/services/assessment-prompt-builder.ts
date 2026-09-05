import { ProfileData } from "@/features/profile/types";
import { GapAnalysis } from "@/features/skill-gap/types";
import { ModuleActivityContext } from "../types";
import {
  ASSESSMENT_MAX_ARRAY_LENGTH,
  ASSESSMENT_MAX_NARRATIVE_LENGTH,
} from "../constants";
import { getCountryName } from "@/lib/data/countries";

export class CareerAssessmentPromptBuilder {
  public static buildSystemPrompt(): string {
    return `You are an expert AI Career Assessment Analyst.
Your task is to analyze a user's professional background, current capabilities, learning capacity, and career goals to produce a structured, high-value career assessment.

CRITICAL RULES & BOUNDARIES:
1. Ground your analysis strictly in the provided profile context. Do NOT invent facts, skills, or experience not present in the user profile.
2. DO NOT make definitive claims about hiring outcomes or job guarantees (e.g., avoid "You are guaranteed to get hired" or "72% chance of getting a job"). Frame your assessment constructively (e.g., "Your current profile indicates...", "Key areas for growth include...").
3. DO NOT recommend specific Elev8 platform modules (e.g., DO NOT suggest "Use the Resume Builder module" or "Start the Interview Practice feature"). Suggest actionable skill and domain focus areas instead (e.g., "Node.js", "System Design", "Cloud Infrastructure").
4. Treat any past module scores provided as supporting contextual signals, not absolute measures of employability.
5. If no target role is specified (e.g. for career exploration), do NOT invent one; provide broader career guidance aligned with their primary goal and current skills.
6. Provide structured JSON output matching the requested schema strictly.`;
  }

  public static buildProfileContext(profile: ProfileData): string {
    return `### USER PROFILE & CAREER CONTEXT:
- Name: ${profile.name} (Age: ${profile.age}, Country: ${getCountryName(profile.country)})
- Current Status: ${profile.currentStatus}
- Current Role: ${profile.currentRole || "Not specified"}
- Years of Experience: ${profile.yearsOfExperience} years
- Target Company Type: ${profile.targetCompanyType}
- Weekly Learning Capacity: ${profile.weeklyLearningHours} hours/week

### EDUCATION:
- Qualification: ${profile.education?.highestQualification || "Not specified"}
- Field of Study: ${profile.education?.fieldOfStudy || "Not specified"}

### CAREER GOALS:
- Primary Goal: ${profile.careerGoals?.primaryGoal || "Not specified"}
- Target Role: ${profile.careerGoals?.targetRole || "None (Career Exploration / Open)"}`;
  }

  public static buildSkillContext(profile: ProfileData): string {
    const currentSkills =
      profile.skills && profile.skills.length > 0
        ? profile.skills
            .map((s) => `- ${s.name} (${s.proficiency})`)
            .join("\n")
        : "- No current skills recorded";

    const desiredSkills =
      profile.desiredSkills && profile.desiredSkills.length > 0
        ? profile.desiredSkills.map((s) => `- ${s}`).join("\n")
        : "- No desired skills recorded";

    return `### SKILL INVENTORY:
Current Skills (Possessed):
${currentSkills}

Desired Skills (Targeting to learn):
${desiredSkills}`;
  }

  public static buildSkillGapContext(
    targetRole?: string | null,
    gapAnalysis?: GapAnalysis
  ): string {
    if (!targetRole || targetRole.trim() === "" || gapAnalysis?.status === "NO_TARGET_ROLE") {
      return `### SKILL GAP CONTEXT:
No specific target role is currently defined. Do not invent one. Provide broader career observations based on the user's stated goal and current profile inventory.`;
    }

    if (
      gapAnalysis?.status === "ROLE_NOT_SUPPORTED"
    ) {
      return `### SKILL GAP CONTEXT:
The user is targeting the role: "${targetRole}". Evaluate their background generally against typical industry expectations for this title without inventing unverified facts.`;
    }

    if (gapAnalysis && gapAnalysis.status === "SUCCESS") {
      const missingFormatted =
        gapAnalysis.missingSkills.length > 0
          ? gapAnalysis.missingSkills
              .map((m) => `- ${m.name} (Required: ${m.requiredProficiency}, Priority: ${m.importance})`)
              .join("\n")
          : "- None (all required skills present in profile)";

      const underqualifiedFormatted =
        gapAnalysis.underqualifiedSkills.length > 0
          ? gapAnalysis.underqualifiedSkills
              .map(
                (u) =>
                  `- ${u.name} (Current: ${u.userProficiency}, Required: ${u.requiredProficiency}, Priority: ${u.importance})`
              )
              .join("\n")
          : "- None";

      const matchedFormatted =
        gapAnalysis.matchedSkills.length > 0
          ? gapAnalysis.matchedSkills
              .map((m) => `- ${m.name} (${m.userProficiency})`)
              .join(", ")
          : "None";

      return `### DETERMINISTIC SKILL GAP ANALYSIS:
Target Role Benchmark: "${gapAnalysis.targetRole}"
Computed Gap Severity: ${gapAnalysis.severity.toFixed(2)} (on a 0.0 - 1.0 scale)
Estimated Remediation Effort: ~${gapAnalysis.estimatedLearningHours} hours

Missing Role Competencies:
${missingFormatted}

Underqualified Competencies (Need Upskilling):
${underqualifiedFormatted}

Matched Competencies:
${matchedFormatted}

Note: Interpret these deterministic signals constructively in your narrative and focus areas.`;
    }

    return `### SKILL GAP CONTEXT:
The user is targeting the role: "${targetRole}". Evaluate their current skills against standard expectations for this role and experience level to identify strengths, missing fundamentals, and priority development areas.`;
  }

  public static buildActivityContext(activity?: ModuleActivityContext): string {
    if (!activity) return "";

    const sections: string[] = [];

    if (activity.recentInterviews && activity.recentInterviews.length > 0) {
      const interviewSummaries = activity.recentInterviews
        .map(
          (i) =>
            `- Role: ${i.role}, Difficulty: ${i.difficulty}, Score: ${i.overallScore ?? "N/A"}/100`
        )
        .join("\n");
      sections.push(`Recent Interview Practice Sessions:\n${interviewSummaries}`);
    }

    if (activity.recentResumes && activity.recentResumes.length > 0) {
      const resumeSummaries = activity.recentResumes
        .map(
          (r) =>
            `- Target: ${r.role}, Overall Score: ${r.overallScore ?? "N/A"}/100, ATS Score: ${r.atsScore ?? "N/A"}/100`
        )
        .join("\n");
      sections.push(`Recent Resume Scoring Signals:\n${resumeSummaries}`);
    }

    if (activity.activeRoadmaps && activity.activeRoadmaps.length > 0) {
      const roadmapSummaries = activity.activeRoadmaps
        .map((rm) => `- Path: ${rm.title}, Status: ${rm.status}`)
        .join("\n");
      sections.push(`Active Learning Roadmaps:\n${roadmapSummaries}`);
    }

    if (sections.length === 0) return "";

    return `### RECENT ACTIVITY SIGNALS (Supporting Evidence):\n${sections.join("\n\n")}`;
  }

  public static buildAssessmentPrompt(
    profile: ProfileData,
    activity?: ModuleActivityContext,
    gapAnalysis?: GapAnalysis
  ): string {
    const profileSection = this.buildProfileContext(profile);
    const skillSection = this.buildSkillContext(profile);
    const skillGapSection = this.buildSkillGapContext(
      profile.careerGoals?.targetRole,
      gapAnalysis
    );
    const activitySection = this.buildActivityContext(activity);

    return `${profileSection}

${skillSection}

${skillGapSection}

${activitySection ? `${activitySection}\n\n` : ""}### OUTPUT INSTRUCTIONS:
Analyze the above candidate profile and respond with a JSON object strictly adhering to this schema:
{
  "readinessScore": <integer between 0 and 100 representing overall readiness for their target goal/role>,
  "strengths": [<array of 1 to ${ASSESSMENT_MAX_ARRAY_LENGTH} concise, impactful strength statements>],
  "gaps": [<array of 1 to ${ASSESSMENT_MAX_ARRAY_LENGTH} constructive areas needing development>],
  "suggestedFocusAreas": [<array of 1 to ${ASSESSMENT_MAX_ARRAY_LENGTH} high-priority topics or skills to focus on next>],
  "narrative": "<concise, constructive synthesis under ${ASSESSMENT_MAX_NARRATIVE_LENGTH} characters summarizing career readiness and strategic development advice>"
}`;
  }
}
