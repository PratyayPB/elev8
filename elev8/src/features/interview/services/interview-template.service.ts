import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { TemplateBlobSchema, TemplateBlob } from "../schemas/predefined-interview.schema";
import { InterviewTemplate } from "@prisma/client";

export class InterviewTemplateService {
  /**
   * Lists all available interview templates from Prisma.
   */
  public static async listTemplates(): Promise<InterviewTemplate[]> {
    return prisma.interviewTemplate.findMany({
      orderBy: [
        { role: "asc" },
        { difficulty: "asc" },
      ],
    });
  }

  /**
   * Finds a template by its deterministic ID.
   */
  public static async findTemplateById(id: string): Promise<InterviewTemplate | null> {
    return prisma.interviewTemplate.findUnique({
      where: { id },
    });
  }

  /**
   * Finds a template by role, type, and difficulty.
   */
  public static async findTemplate(
    role: string,
    type: string,
    difficulty: string
  ): Promise<InterviewTemplate | null> {
    return prisma.interviewTemplate.findFirst({
      where: {
        role,
        type,
        difficulty,
      },
    });
  }

  /**
   * Fetches the template JSON blob from Vercel Blob storage using the blob URL and validates its structure.
   */
  public static async fetchTemplateBlob(templateBlobUrl: string): Promise<TemplateBlob> {
    const rawData = await BlobStorageService.fetchJson<unknown>(templateBlobUrl);
    return this.validateTemplateBlob(rawData);
  }

  /**
   * Fetches template JSON blob directly by template ID.
   */
  public static async fetchTemplateBlobById(id: string): Promise<{ template: InterviewTemplate; blob: TemplateBlob }> {
    const template = await this.findTemplateById(id);
    if (!template) {
      throw new Error(`Interview template '${id}' not found in database.`);
    }

    const blob = await this.fetchTemplateBlob(template.templateBlobUrl);
    return { template, blob };
  }

  /**
   * Validates template JSON against the TemplateBlobSchema.
   */
  public static validateTemplateBlob(data: unknown): TemplateBlob {
    return TemplateBlobSchema.parse(data);
  }
}
