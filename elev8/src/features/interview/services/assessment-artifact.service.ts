import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { InterviewArtifact, AssessmentReport } from "../types";
import { prisma } from "@/lib/prisma";
import { InterviewStatus } from "@prisma/client";

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
    await prisma.interview.update({
      where: { id: interviewId },
      data: {
        blobUrl: newBlobUrl,
        overallScore: assessmentReport.overallScores.overallScore,
        status: InterviewStatus.COMPLETED,
        updatedAt: new Date(),
      },
    });

    return newBlobUrl;
  }
}
