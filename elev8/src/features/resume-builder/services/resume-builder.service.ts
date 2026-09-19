import { prisma } from "@/lib/prisma";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { profileToResumeArtifact, mergeProfileIntoResumeArtifact } from "./profile-to-resume.mapper";
import { createEmptyResumeArtifact } from "../utils/create-empty-resume";
import {
  BuilderResumeArtifact,
  BuilderResumeRecord,
  ResumeBuilderTemplate,
  ResumeBuildStatus,
} from "../types";
import {
  BuilderResumeArtifactSchema,
  CreateResumeInput,
  UpdateResumeInput,
} from "../schemas/resume-artifact.schema";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleType,
  ModuleCompletionStatus,
  ModuleActivityEventType,
} from "@/features/progress/types";

export class ResumeBuilderError extends Error {
  constructor(message: string, public code: string, public statusCode: number = 400) {
    super(message);
    this.name = "ResumeBuilderError";
  }
}

export class ResumeBuilderService {
  /**
   * Creates a new resume for a user: generates empty artifact, uploads to Blob, creates Prisma record.
   */
  public static async createResume(
    userId: string,
    input: CreateResumeInput
  ): Promise<BuilderResumeRecord> {
    const trimmedTitle = input.title.trim();
    if (!trimmedTitle) {
      throw new ResumeBuilderError(
        "Resume title is required.",
        "INVALID_RESUME_TITLE",
        400
      );
    }

    const existing = await prisma.resumeBuild.findFirst({
      where: {
        userId,
        title: { equals: trimmedTitle, mode: "insensitive" },
      },
    });

    if (existing) {
      throw new ResumeBuilderError(
        `A resume named "${trimmedTitle}" already exists. Please choose a unique name.`,
        "RESUME_TITLE_EXISTS",
        409
      );
    }

    let dummyRecord;
    try {
      dummyRecord = await prisma.resumeBuild.create({
        data: {
          userId,
          title: trimmedTitle,
          template: (input.template as ResumeBuilderTemplate) || "CLASSIC",
          status: ResumeBuildStatus.DRAFT,
        },
      });
    } catch (error: any) {
      if (error?.code === "P2002") {
        throw new ResumeBuilderError(
          `A resume named "${trimmedTitle}" already exists. Please choose a unique name.`,
          "RESUME_TITLE_EXISTS",
          409
        );
      }
      throw error;
    }

    const resumeId = dummyRecord.id;

    // Resumes start with an empty artifact; profile data is imported on-demand via the "Import Profile Data" button
    const initialArtifact = createEmptyResumeArtifact(resumeId);
    const pathname = `resumes/${userId}/${resumeId}/artifact.json`;

    try {
      const artifactBlobUrl = await BlobStorageService.upsertJson(pathname, initialArtifact);

      const updatedRecord = await prisma.resumeBuild.update({
        where: { id: resumeId },
        data: { artifactBlobUrl },
      });

      // Record activity
      try {
        await ModuleActivityService.recordActivity({
          userId,
          module: ModuleType.RESUME_BUILD,
          eventType: ModuleActivityEventType.RESUME_BUILD_STARTED,
          completionStatus: ModuleCompletionStatus.STARTED,
          entityId: resumeId,
          metadata: {
            resumeId,
            title: input.title,
            template: input.template || "CLASSIC",
          },
        });
      } catch (err) {
        console.warn("[ResumeBuilderService] Failed to record build started activity:", err);
      }

      return updatedRecord as unknown as BuilderResumeRecord;
    } catch (error) {
      // Cleanup Prisma record if Blob upload fails
      await prisma.resumeBuild.delete({ where: { id: resumeId } }).catch(() => {});
      throw new ResumeBuilderError(
        `Failed to create resume storage artifact: ${(error as Error).message}`,
        "BLOB_UPLOAD_FAILED",
        500
      );
    }
  }

  /**
   * Retrieves resume metadata for a user with ownership validation.
   */
  public static async getResume(
    userId: string,
    resumeId: string
  ): Promise<BuilderResumeRecord> {
    const resume = await prisma.resumeBuild.findUnique({
      where: { id: resumeId },
    });

    if (!resume) {
      throw new ResumeBuilderError("Resume not found", "RESUME_NOT_FOUND", 404);
    }

    if (resume.userId !== userId) {
      throw new ResumeBuilderError(
        "You do not have permission to access this resume",
        "RESUME_FORBIDDEN",
        403
      );
    }

    return resume as unknown as BuilderResumeRecord;
  }

  /**
   * Lists all resumes belonging to a user.
   */
  public static async listUserResumes(userId: string): Promise<BuilderResumeRecord[]> {
    const resumes = await prisma.resumeBuild.findMany({
      where: { userId },
      select: {
        id: true,
        userId: true,
        title: true,
        status: true,
        template: true,
        artifactBlobUrl: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: "desc" },
      take: 50,
    });

    return resumes as unknown as BuilderResumeRecord[];
  }

  /**
   * Updates resume metadata (title, targetRole, template, status).
   */
  public static async updateResume(
    userId: string,
    resumeId: string,
    input: UpdateResumeInput
  ): Promise<BuilderResumeRecord> {
    const existingResume = await this.getResume(userId, resumeId);

    let trimmedTitle: string | undefined = undefined;
    if (input.title !== undefined) {
      trimmedTitle = input.title.trim();
      if (!trimmedTitle) {
        throw new ResumeBuilderError(
          "Resume title cannot be empty.",
          "INVALID_RESUME_TITLE",
          400
        );
      }

      if (trimmedTitle.toLowerCase() !== existingResume.title.trim().toLowerCase()) {
        const duplicate = await prisma.resumeBuild.findFirst({
          where: {
            userId,
            title: { equals: trimmedTitle, mode: "insensitive" },
            id: { not: resumeId },
          },
        });

        if (duplicate) {
          throw new ResumeBuilderError(
            `A resume named "${trimmedTitle}" already exists. Please choose a unique name.`,
            "RESUME_TITLE_EXISTS",
            409
          );
        }
      }
    }

    let updated;
    try {
      updated = await prisma.resumeBuild.update({
        where: { id: resumeId },
        data: {
          ...(trimmedTitle !== undefined && { title: trimmedTitle }),
          ...(input.template !== undefined && { template: input.template as ResumeBuilderTemplate }),
          ...(input.status !== undefined && { status: input.status as ResumeBuildStatus }),
        },
      });
    } catch (error: any) {
      if (error?.code === "P2002") {
        throw new ResumeBuilderError(
          `A resume named "${trimmedTitle}" already exists. Please choose a unique name.`,
          "RESUME_TITLE_EXISTS",
          409
        );
      }
      throw error;
    }

    if (input.status === "READY" && existingResume.status !== "READY") {
      try {
        await ModuleActivityService.recordActivity({
          userId,
          module: ModuleType.RESUME_BUILD,
          eventType: ModuleActivityEventType.RESUME_BUILD_READY,
          completionStatus: ModuleCompletionStatus.COMPLETED,
          entityId: resumeId,
          metadata: {
            resumeId,
            template: updated.template,
            status: "READY",
          },
        });
      } catch (err) {
        console.error("[ResumeBuilderService] Failed to record activity:", err);
      }
    }

    if (input.template !== undefined && input.template !== existingResume.template) {
      try {
        await ModuleActivityService.recordActivity({
          userId,
          module: ModuleType.RESUME_BUILD,
          eventType: ModuleActivityEventType.RESUME_TEMPLATE_CHANGED,
          entityId: resumeId,
          metadata: {
            source: "RESUME_BUILDER_UPDATE_RESUME",
            resumeId,
            previousTemplate: existingResume.template,
            template: updated.template,
          },
        });
      } catch (err) {
        console.error("[ResumeBuilderService] Failed to record template change activity:", err);
      }
    }

    return updated as unknown as BuilderResumeRecord;
  }

  /**
   * Deletes a resume record and its associated Blob artifact.
   */
  public static async deleteResume(userId: string, resumeId: string): Promise<void> {
    const resume = await this.getResume(userId, resumeId);

    // Delete Prisma record first
    await prisma.resumeBuild.delete({
      where: { id: resumeId },
    });

    // Delete Blob storage artifact if exists
    if (resume.artifactBlobUrl) {
      await BlobStorageService.delete(resume.artifactBlobUrl).catch((err) => {
        console.warn(`Failed to delete blob artifact for resume ${resumeId}:`, err);
      });
    }
  }

  /**
   * Retrieves full structured Resume Artifact JSON from Blob Storage.
   */
  public static async getResumeArtifact(
    userId: string,
    resumeId: string
  ): Promise<BuilderResumeArtifact> {
    const resume = await this.getResume(userId, resumeId);

    if (!resume.artifactBlobUrl) {
      throw new ResumeBuilderError(
        "Resume artifact URL missing",
        "BLOB_READ_FAILED",
        404
      );
    }

    try {
      const artifact = await BlobStorageService.fetchJson<BuilderResumeArtifact>(
        resume.artifactBlobUrl
      );
      return artifact;
    } catch (error) {
      throw new ResumeBuilderError(
        `Failed to fetch resume artifact: ${(error as Error).message}`,
        "BLOB_READ_FAILED",
        500
      );
    }
  }

  /**
   * Validates and updates the complete Resume Artifact in Blob Storage and updates version in Prisma.
   */
  public static async updateResumeArtifact(
    userId: string,
    resumeId: string,
    artifactInput: BuilderResumeArtifact,
    clientVersion?: number
  ): Promise<{ artifact: BuilderResumeArtifact; version: number; savedAt: Date }> {
    const resume = await this.getResume(userId, resumeId);

    // We bypass fetching the current artifact from Blob storage on every autosave to significantly reduce latency and prevent 500 timeouts.
    // For MVP, we trust the client's version for optimistic concurrency.
    const currentVersion = clientVersion !== undefined ? clientVersion : 0;

    // Validate artifact structure
    const parseResult = BuilderResumeArtifactSchema.safeParse(artifactInput);
    if (!parseResult.success) {
      throw new ResumeBuilderError(
        `Invalid artifact structure: ${parseResult.error.message}`,
        "INVALID_ARTIFACT",
        400
      );
    }

    const validArtifact = parseResult.data as BuilderResumeArtifact;

    if (validArtifact.resumeId !== resumeId) {
      throw new ResumeBuilderError(
        "Artifact resumeId does not match request resumeId",
        "INVALID_ARTIFACT",
        400
      );
    }

    const newVersion = currentVersion + 1;
    validArtifact.version = newVersion;

    const pathname = `resumes/${userId}/${resumeId}/artifact.json`;

    try {
      const updatedBlobUrl = await BlobStorageService.upsertJson(pathname, validArtifact);

      const updatedRecord = await prisma.resumeBuild.update({
        where: { id: resumeId },
        data: {
          artifactBlobUrl: updatedBlobUrl,
        },
      });

      return {
        artifact: validArtifact,
        version: newVersion,
        savedAt: updatedRecord.updatedAt,
      };
    } catch (error) {
      throw new ResumeBuilderError(
        `Failed to update resume artifact storage: ${(error as Error).message}`,
        "BLOB_UPDATE_FAILED",
        500
      );
    }
  }

  /**
   * Duplicates an existing resume for a user.
   */
  public static async duplicateResume(
    userId: string,
    originalResumeId: string
  ): Promise<BuilderResumeRecord> {
    // 1. Verify ownership and get the original record
    const originalResume = await this.getResume(userId, originalResumeId);

    // 2. Fetch the original artifact
    const originalArtifact = await this.getResumeArtifact(userId, originalResumeId);

    // 3. Find unique title for duplicate (e.g. "Title - Copy", "Title - Copy (2)")
    const baseTitle = originalResume.title.replace(/ - Copy( \(\d+\))?$/, "");
    const copyPrefix = `${baseTitle} - Copy`;

    const existingResumes = await prisma.resumeBuild.findMany({
      where: {
        userId,
        title: { startsWith: copyPrefix, mode: "insensitive" },
      },
      select: { title: true },
    });
    const existingTitles = new Set(existingResumes.map((r) => r.title.toLowerCase()));

    let candidateTitle = copyPrefix.substring(0, 100);
    let counter = 2;

    while (existingTitles.has(candidateTitle.toLowerCase())) {
      candidateTitle = `${baseTitle} - Copy (${counter})`.substring(0, 100);
      counter++;
    }

    let newRecord;
    try {
      newRecord = await prisma.resumeBuild.create({
        data: {
          userId,
          title: candidateTitle,
          template: originalResume.template,
          status: "DRAFT",
        },
      });
    } catch (error: any) {
      if (error?.code === "P2002") {
        throw new ResumeBuilderError(
          `A resume named "${candidateTitle}" already exists. Please choose a unique name.`,
          "RESUME_TITLE_EXISTS",
          409
        );
      }
      throw error;
    }

    const newResumeId = newRecord.id;

    // 4. Deep clone the artifact and update necessary fields
    const newArtifact: BuilderResumeArtifact = JSON.parse(JSON.stringify(originalArtifact));
    newArtifact.resumeId = newResumeId;
    newArtifact.version = 1;
    // Don't copy specific metadata that doesn't belong (if there were any beyond what's in artifact)
    
    const pathname = `resumes/${userId}/${newResumeId}/artifact.json`;

    try {
      // 5. Upload the cloned artifact as a new Blob
      const newArtifactBlobUrl = await BlobStorageService.upsertJson(pathname, newArtifact);

      // 6. Update the new Prisma record with the new Blob URL
      const updatedNewRecord = await prisma.resumeBuild.update({
        where: { id: newResumeId },
        data: { artifactBlobUrl: newArtifactBlobUrl },
      });

      return updatedNewRecord as unknown as BuilderResumeRecord;
    } catch (error) {
      // Cleanup if blob upload fails
      await prisma.resumeBuild.delete({ where: { id: newResumeId } }).catch(() => {});
      throw new ResumeBuilderError(
        `Failed to duplicate resume storage artifact: ${(error as Error).message}`,
        "BLOB_UPLOAD_FAILED",
        500
      );
    }
  }

  /**
   * Checks profile completion and imports profile data into an existing resume artifact.
   * Merges personalInformation, education, and skills while preserving other sections.
   */
  public static async importProfileData(
    userId: string,
    resumeId: string,
    clientArtifact?: BuilderResumeArtifact,
    clientVersion?: number
  ): Promise<{
    isCompleted: boolean;
    artifact?: BuilderResumeArtifact;
    version?: number;
    savedAt?: Date;
  }> {
    // 1. Validate resume ownership
    const resume = await this.getResume(userId, resumeId);

    // 2. Fetch user and profile with skills
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: {
          include: { skills: true },
        },
      },
    });

    if (!user?.profile || !user.profile.isCompleted) {
      return {
        isCompleted: false,
      };
    }

    // 3. Determine base artifact: prefer client's active state to preserve unsaved local changes
    let baseArtifact = clientArtifact;
    if (!baseArtifact) {
      if (!resume.artifactBlobUrl) {
        throw new ResumeBuilderError("Resume artifact URL missing", "BLOB_READ_FAILED", 404);
      }
      try {
        baseArtifact = await BlobStorageService.fetchJson<BuilderResumeArtifact>(resume.artifactBlobUrl);
      } catch (error) {
        throw new ResumeBuilderError(
          `Failed to fetch resume artifact: ${(error as Error).message}`,
          "BLOB_READ_FAILED",
          500
        );
      }
    }

    const mergedArtifact = mergeProfileIntoResumeArtifact(
      baseArtifact,
      user.profile,
      user.email
    );

    // 4. Persist merged artifact
    const { version, savedAt } = await this.updateResumeArtifact(
      userId,
      resumeId,
      mergedArtifact,
      clientVersion ?? baseArtifact.version
    );

    return {
      isCompleted: true,
      artifact: mergedArtifact,
      version,
      savedAt,
    };
  }
}
