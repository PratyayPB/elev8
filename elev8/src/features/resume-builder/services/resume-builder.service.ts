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
import { ModuleActivityService } from "@/features/recommendations/services";
import { ModuleType, ModuleCompletionStatus } from "@prisma/client";

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
    // Generate deterministic artifact path using standard cuid or timestamp ID
    // We create Prisma record first with empty blob URL, or create ID then upload blob then create Prisma record
    // Creating Prisma record first with transaction or pre-allocating ID
    const dummyRecord = await prisma.resumeBuild.create({
      data: {
        userId,
        title: input.title,
        template: (input.template as ResumeBuilderTemplate) || "CLASSIC",
        status: ResumeBuildStatus.DRAFT,
      },
    });

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
      orderBy: { updatedAt: "desc" },
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

    const updated = await prisma.resumeBuild.update({
      where: { id: resumeId },
      data: {
        ...(input.title !== undefined && { title: input.title }),
        ...(input.template !== undefined && { template: input.template as ResumeBuilderTemplate }),
        ...(input.status !== undefined && { status: input.status as ResumeBuildStatus }),
      },
    });

    if (input.status === "READY" && existingResume.status !== "READY") {
      try {
        await ModuleActivityService.recordActivity(
          userId,
          ModuleType.RESUME_BUILD,
          ModuleCompletionStatus.COMPLETED,
          {
            template: updated.template,
          }
        );
      } catch (err) {
        console.error("[ResumeBuilderService] Failed to record activity:", err);
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

    // 3. Create a new Prisma record (DRAFT)
    const duplicateTitle = `${originalResume.title} - Copy`;
    const newRecord = await prisma.resumeBuild.create({
      data: {
        userId,
        title: duplicateTitle.substring(0, 100), // Enforce MVP maximum length
        template: originalResume.template,
        status: "DRAFT",
      },
    });

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
    await this.getResume(userId, resumeId);

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
    const baseArtifact =
      clientArtifact || (await this.getResumeArtifact(userId, resumeId));

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
