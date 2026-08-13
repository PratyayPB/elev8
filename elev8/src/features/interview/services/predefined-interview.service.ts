import { InterviewTemplateService } from "./interview-template.service";
import { PredefinedInterviewSummary, PredefinedDifficulty } from "../types/predefined-interview";
import { InterviewArtifact, GeneratedQuestion } from "../types";
import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { InterviewStatus } from "@prisma/client";

export class PredefinedInterviewService {
  /**
   * Retrieves summary details of all available predefined interviews from the database.
   * Groups templates by role to return role-based summaries for UI rendering.
   */
  public static async getAllInterviews(): Promise<PredefinedInterviewSummary[]> {
    const templates = await InterviewTemplateService.listTemplates();
    
    // Group templates by base role slug
    const roleMap = new Map<string, PredefinedInterviewSummary>();

    for (const t of templates) {
      // Derive slug ID from template ID (e.g., "fullstack-developer-technical-easy" -> "fullstack-developer")
      const roleSlug = t.id.substring(0, t.id.lastIndexOf("-"));
      const baseSlug = roleSlug.substring(0, roleSlug.lastIndexOf("-"));

      if (!roleMap.has(baseSlug)) {
        roleMap.set(baseSlug, {
          id: baseSlug,
          role: t.role,
          type: t.type as any,
          description: `Evaluate key competencies, fundamentals, and scenario responses for ${t.role}.`,
          availableLevels: [],
        });
      }

      const summary = roleMap.get(baseSlug)!;
      if (!summary.availableLevels.includes(t.difficulty as PredefinedDifficulty)) {
        summary.availableLevels.push(t.difficulty as PredefinedDifficulty);
      }
    }

    return Array.from(roleMap.values());
  }

  /**
   * Validates if a template exists for the specified template ID or role slug + difficulty.
   */
  public static async validateInterviewSelection(templateIdOrRoleSlug: string, difficulty: string): Promise<boolean> {
    const template = await prisma.interviewTemplate.findFirst({
      where: {
        OR: [
          { id: templateIdOrRoleSlug },
          { id: { startsWith: templateIdOrRoleSlug }, difficulty: difficulty.toUpperCase() },
        ],
      },
    });
    return !!template;
  }

  /**
   * Fetches the template from Prisma + Blob, deep-clones questions,
   * creates a user artifact Blob, and stores the user's Interview session record.
   * Synchronous & instant: No Trigger.dev generation.
   */
  public static async createSessionFromTemplate(
    userId: string,
    templateIdOrRoleSlug: string,
    difficulty: PredefinedDifficulty
  ): Promise<{ interviewId: string; blobUrl: string }> {
    // 1. Locate template record in Prisma
    let template = await prisma.interviewTemplate.findUnique({
      where: { id: templateIdOrRoleSlug },
    });

    if (!template) {
      template = await prisma.interviewTemplate.findFirst({
        where: {
          id: { startsWith: templateIdOrRoleSlug },
          difficulty: difficulty.toUpperCase(),
        },
      });
    }

    if (!template) {
      throw new Error(`Predefined interview template not found for '${templateIdOrRoleSlug}' [${difficulty}]`);
    }

    // 2. Fetch immutable template Blob JSON & validate with Zod
    const templateBlob = await InterviewTemplateService.fetchTemplateBlob(template.templateBlobUrl);

    // 3. Deep-clone template questions for the user artifact
    const questionsArray = Object.values(templateBlob.questions);
    const clonedQuestions = JSON.parse(JSON.stringify(questionsArray));

    // Map to GeneratedQuestion format expected by InterviewArtifact
    const formattedQuestions: GeneratedQuestion[] = clonedQuestions.map((q: any) => ({
      id: q.id,
      category: q.category || "General",
      question: q.question,
      difficulty: template.difficulty as any,
      expectedTopics: q.expectedTopics || [],
      estimatedAnswerTime: typeof q.estimatedAnswerTime === "number"
        ? `${q.estimatedAnswerTime}-${q.estimatedAnswerTime + 1} mins`
        : q.estimatedAnswerTime || "2-3 mins",
    }));

    const estimatedDuration = template.difficulty === "EASY"
      ? "20-25 minutes"
      : template.difficulty === "MEDIUM"
      ? "25-35 minutes"
      : "35-45 minutes";

    // 4. Create Interview DB record referencing templateId
    const dbInterview = await prisma.interview.create({
      data: {
        userId,
        templateId: template.id,
        role: template.role,
        difficulty: template.difficulty,
        experienceLevel: "Intermediate",
        interviewType: template.type,
        source: "PREDEFINED",
        questionCount: formattedQuestions.length,
        status: InterviewStatus.GENERATING,
        estimatedDuration,
      },
    });

    // 5. Construct initial user-owned mutable InterviewArtifact
    const artifact: InterviewArtifact = {
      version: "1.0.0",
      metadata: {
        interviewId: dbInterview.id,
        role: template.role,
        experienceLevel: "Intermediate",
        difficulty: template.difficulty as any,
        interviewType: template.type as any,
        questionCount: formattedQuestions.length,
        estimatedDuration,
        generatedAt: new Date().toISOString(),
        generatorVersion: "1.0.0",
        source: "PREDEFINED",
        templateId: template.id,
        predefinedInterviewId: template.id,
      },
      questions: formattedQuestions,
      answers: [], // Starts empty
      assessment: null,
    };

    // 6. Upload user artifact to a NEW user Blob (never overwriting the template)
    const blobPath = `interviews/${dbInterview.id}.json`;
    const blobUrl = await BlobStorageService.uploadJson(blobPath, artifact);

    // 7. Update Interview record to READY with user artifact blobUrl
    await prisma.interview.update({
      where: { id: dbInterview.id },
      data: {
        blobUrl,
        status: InterviewStatus.READY,
      },
    });

    return { interviewId: dbInterview.id, blobUrl };
  }
}
