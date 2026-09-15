import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { InterviewArtifact, AssessmentReport } from "../types";
import { prisma } from "@/lib/prisma";
import { InterviewStatus } from "@prisma/client";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleType,
  ModuleCompletionStatus,
  ModuleActivityEventType,
} from "@/features/progress/types";

export class AssessmentArtifactService {
  /**
   * Appends the assessment report to the artifact, uploads it to Blob Storage,
   * and updates Prisma metadata.
   */
  public static async finalizeAssessment(
    interviewId: string,
    currentBlobUrl: string,
    artifact: InterviewArtifact,
    assessmentReport: AssessmentReport
  ): Promise<string> {
    
    // 1. Append assessment to artifact
    const updatedArtifact: InterviewArtifact = {
      ...artifact,
      assessment: assessmentReport,
      status: "COMPLETED",
    };

    // 2. Upload to Blob (replacing old one)
    const newBlobUrl = await BlobStorageService.replaceJson(
      currentBlobUrl,
      `interviews/${interviewId}.json`,
      updatedArtifact
    );

    // 3. Update Prisma
    const interview = await prisma.interviewSession.update({
      where: { id: interviewId },
      data: {
        blobUrl: newBlobUrl,
        overallScore: assessmentReport.overallScores.overallScore,
        status: InterviewStatus.COMPLETED,
        updatedAt: new Date(),
      },
    });

    // 4. Record ModuleActivity
    try {
      await ModuleActivityService.recordActivity({
        userId: interview.userId,
        module: ModuleType.INTERVIEW_PRACTICE,
        eventType: ModuleActivityEventType.INTERVIEW_COMPLETED,
        completionStatus: ModuleCompletionStatus.COMPLETED,
        entityId: interviewId,
        metadata: {
          interviewId,
          role: interview.role,
          experienceLevel: interview.experienceLevel,
          overallScore: assessmentReport.overallScores.overallScore,
        },
      });
    } catch (err) {
      console.error("[AssessmentArtifactService] Failed to record activity:", err);
      // Do not fail the overall assessment completion if this fails
    }

    return newBlobUrl;
  }
}
