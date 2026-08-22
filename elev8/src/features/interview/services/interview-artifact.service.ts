import { InterviewRequest, GeneratedQuestion, InterviewArtifact, InterviewPlan } from "../types";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { prisma } from "@/lib/prisma";
import { InterviewStatus } from "@prisma/client";

export class InterviewArtifactService {
  /**
   * Compiles the InterviewArtifact, uploads to Blob storage, and updates the Prisma Interview record.
   */
  public static async createAndStoreArtifact(
    interviewId: string,
    request: InterviewRequest,
    plan: InterviewPlan,
    questions: GeneratedQuestion[]
  ): Promise<string> {
    const artifact: InterviewArtifact = {
      version: "1.0.0",
      metadata: {
        interviewId,
        role: request.role,
        experienceLevel: request.experienceLevel,
        difficulty: request.difficulty,
        interviewType: request.interviewType,
        questionCount: request.questionCount,
        estimatedDuration: plan.estimatedDuration,
        generatedAt: new Date().toISOString(),
        generatorVersion: "1.0.0",
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
}
