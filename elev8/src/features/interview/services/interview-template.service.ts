import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { InterviewTemplate } from "@prisma/client";
import { InterviewArtifact } from "../types";

export class InterviewTemplateService {
  /**
   * Lists all available interview templates for a user.
   */
  public static async listUserTemplates(userId: string): Promise<InterviewTemplate[]> {
    return prisma.interviewTemplate.findMany({
      where: { userId },
      orderBy: [
        { role: "asc" },
        { interviewType: "asc" },
      ],
    });
  }

  /**
   * Finds a template by its ID.
   */
  public static async findTemplateById(id: string): Promise<InterviewTemplate | null> {
    return prisma.interviewTemplate.findUnique({
      where: { id },
    });
  }

  /**
   * Fetches the template JSON artifact from Vercel Blob storage using the blob URL.
   */
  public static async fetchTemplateBlob(templateBlobUrl: string): Promise<InterviewArtifact> {
    return BlobStorageService.fetchJson<InterviewArtifact>(templateBlobUrl);
  }
}

