import { InterviewRequest, GeneratedQuestion, InterviewArtifact, InterviewPlan } from "../types";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { prisma } from "@/lib/prisma";
import { InterviewStatus, InterviewTemplateSource } from "@prisma/client";

export class InterviewArtifactService {
  /**
   * Compiles and stores an immutable template artifact in Blob storage.
   */
  public static async createAndStoreTemplateBlob(
    templateId: string,
    request: InterviewRequest,
    plan: InterviewPlan,
    questions: GeneratedQuestion[]
  ): Promise<string> {
    const templateArtifact: InterviewArtifact = {
      version: "1.0.0",
      metadata: {
        interviewId: templateId,
        role: request.role,
        experienceLevel: request.experienceLevel,
        difficulty: request.difficulty,
        interviewType: request.interviewType,
        questionCount: request.questionCount || questions.length || 10,
        estimatedDuration: plan.estimatedDuration,
        generatedAt: new Date().toISOString(),
        generatorVersion: "1.0.0",
      },
      questions,
      answers: [],
      assessment: null,
    };

    const blobPath = `interview-templates/${templateId}.json`;
    return BlobStorageService.uploadJson(blobPath, templateArtifact);
  }

  /**
   * Compiles the InterviewArtifact, uploads to Blob storage, and updates the Prisma InterviewSession record.
   */
  public static async createAndStoreArtifact(
    interviewId: string,
    request: InterviewRequest,
    plan: InterviewPlan,
    questions: GeneratedQuestion[],
    templateSource: InterviewTemplateSource = InterviewTemplateSource.GLOBAL,
    templateId?: string
  ): Promise<string> {
    const artifact: InterviewArtifact = {
      version: "1.0.0",
      metadata: {
        interviewId,
        role: request.role,
        experienceLevel: request.experienceLevel,
        difficulty: request.difficulty,
        interviewType: request.interviewType,
        questionCount: request.questionCount || questions.length || 10,
        estimatedDuration: plan.estimatedDuration,
        generatedAt: new Date().toISOString(),
        generatorVersion: "1.0.0",
        templateSource,
        ...(templateSource === InterviewTemplateSource.USER_CREATED
          ? { interviewTemplateId: templateId }
          : { globalInterviewTemplateId: templateId }),
      },
      questions,
      answers: [],
      assessment: null,
    };

    // 1. Upload JSON artifact to Blob Storage
    const blobPath = `interviews/${interviewId}.json`;
    const blobUrl = await BlobStorageService.uploadJson(blobPath, artifact);

    // 2. Persist metadata in Prisma
    await prisma.interviewSession.update({
      where: { id: interviewId },
      data: {
        blobUrl,
        status: InterviewStatus.READY,
        estimatedDuration: plan.estimatedDuration,
        updatedAt: new Date(),
      },
    });

    return blobUrl;
  }

  /**
   * Clones questions from an existing global template blob and creates a new user session artifact.
   */
  public static async createSessionFromTemplateBlob(
    sessionId: string,
    templateBlobUrl: string,
    globalTemplateId: string
  ): Promise<string> {
    const templateArtifact = await BlobStorageService.fetchJson<InterviewArtifact>(templateBlobUrl);

    const sessionArtifact: InterviewArtifact = {
      version: "1.0.0",
      metadata: {
        ...templateArtifact.metadata,
        interviewId: sessionId,
        generatedAt: new Date().toISOString(),
        templateSource: InterviewTemplateSource.GLOBAL,
        globalInterviewTemplateId: globalTemplateId,
      },
      questions: templateArtifact.questions || [],
      answers: [],
      assessment: null,
    };

    const blobPath = `interviews/${sessionId}.json`;
    const blobUrl = await BlobStorageService.uploadJson(blobPath, sessionArtifact);

    await prisma.interviewSession.update({
      where: { id: sessionId },
      data: {
        blobUrl,
        status: InterviewStatus.READY,
        updatedAt: new Date(),
      },
    });

    return blobUrl;
  }
}

