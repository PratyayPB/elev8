import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ResumeBuilderService } from "@/features/resume-builder/services/resume-builder.service";
import { builderToJsonResume } from "@/features/resume-builder/adapters/builder-to-json-resume";
import { renderResumeTheme } from "@/features/resume-builder/templates/registry";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { JobService } from "@/services/jobs/job.service";
import { ModuleActivityService } from "@/features/progress/services";
import { ModuleType, ModuleActivityEventType, ModuleCompletionStatus } from "@/features/progress/types";
import puppeteer from "puppeteer";
import crypto from "crypto";

export const ExportResumePdfTaskSchema = z.object({
  resumeId: z.string(),
  userId: z.string(),
  jobId: z.string(),
});

export const exportResumePdfTask = schemaTask({
  id: "export-resume-pdf",
  schema: ExportResumePdfTaskSchema,
  machine: {
    preset: "medium-2x", // 1 vCPU, 2 GB RAM for headless Chrome
  },
  queue: {
    concurrencyLimit: 5,
  },
  maxDuration: 60,
  run: async (payload, { ctx }) => {
    const { resumeId, userId, jobId } = payload;
    let browser: any = null;

    try {
      metadata.set("status", "Fetching Resume Artifact");
      metadata.set("progress", 10);
      await JobService.updateProgress(jobId, 10, "Fetching Resume Artifact", ctx.run.id);

      const resume = await ResumeBuilderService.getResume(userId, resumeId);
      const artifact = await ResumeBuilderService.getResumeArtifact(userId, resumeId);

      metadata.set("status", "Rendering Template HTML");
      metadata.set("progress", 25);
      await JobService.updateProgress(jobId, 25, "Rendering Template HTML");

      const jsonResume = builderToJsonResume(artifact);
      let themeHtml: string;
      try {
        themeHtml = await renderResumeTheme(resume.template, jsonResume);
      } catch (renderError) {
        console.warn(
          `[ExportResumePdfTask] Theme render failed for "${resume.template}", falling back to academic-cv-lite:`,
          renderError
        );
        themeHtml = await renderResumeTheme("academic-cv-lite", jsonResume);
      }

      metadata.set("status", "Launching Headless Chrome");
      metadata.set("progress", 45);
      await JobService.updateProgress(jobId, 45, "Launching Headless Chrome");

      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
      });

      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(30000);

      const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
              html, body {
                background-color: #ffffff !important;
                min-height: 100vh !important;
                margin: 0 !important;
              }
              #resume, .resume-container, .container, main, article, #wrapper {
                background-color: #ffffff !important;
                box-shadow: none !important;
                min-height: 100vh !important;
                margin: 0 auto !important;
              }
            </style>
          </head>
          <body class="bg-white">
            ${themeHtml}
          </body>
        </html>
      `;

      metadata.set("status", "Rendering PDF Layout");
      metadata.set("progress", 65);
      await JobService.updateProgress(jobId, 65, "Rendering PDF Layout");

      await page.setContent(fullHtml, { waitUntil: "domcontentloaded", timeout: 30000 });

      const pdfUint8Array = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
          top: "0.4in",
          bottom: "0.4in",
          left: "0.4in",
          right: "0.4in",
        },
      });

      metadata.set("status", "Uploading PDF to Storage");
      metadata.set("progress", 85);
      await JobService.updateProgress(jobId, 85, "Uploading PDF to Storage");

      const pdfBuffer = Buffer.from(pdfUint8Array);
      const sanitizedTitle = (resume.title || "Resume")
        .replace(/[\/\\?%*:|"<>]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      const blobPath = `resumes/exports/${resumeId}_${Date.now()}.pdf`;
      const rawBlobUrl = await BlobStorageService.uploadBuffer(
        blobPath,
        pdfBuffer,
        "application/pdf"
      );

      // Create a signed download URL routed through our authenticated Next.js proxy endpoint
      // This solves the 403 Forbidden issue when downloading from private Vercel Blob stores
      const secret =
        process.env.BLOB_READ_WRITE_TOKEN ||
        process.env.CLERK_SECRET_KEY ||
        process.env.TRIGGER_SECRET_KEY ||
        "elev8-fallback-secret-key";

      const tokenPayload = {
        resumeId,
        blobUrl: rawBlobUrl,
        exp: Date.now() + 24 * 60 * 60 * 1000, // Valid for 24 hours
      };
      const encodedPayload = Buffer.from(JSON.stringify(tokenPayload)).toString("base64url");
      const signature = crypto.createHmac("sha256", secret).update(encodedPayload).digest("base64url");
      const signedToken = `${encodedPayload}.${signature}`;

      // Local app download proxy URL
      const downloadUrl = `/api/builder/resumes/${resumeId}/download?token=${signedToken}`;

      await ModuleActivityService.recordActivity({
        userId,
        module: ModuleType.RESUME_BUILD,
        eventType: ModuleActivityEventType.RESUME_PDF_GENERATED,
        completionStatus: ModuleCompletionStatus.COMPLETED,
        entityId: resumeId,
        metadata: {
          source: "TRIGGER_RESUME_PDF_TASK",
          resumeId,
          title: resume.title,
          template: resume.template,
          downloadUrl,
          rawBlobUrl,
        },
      }).catch((activityError) =>
        console.warn("[ExportResumePdfTask] Failed to record activity:", activityError)
      );

      metadata.set("status", "Completed");
      metadata.set("progress", 100);
      metadata.set("downloadUrl", downloadUrl);
      metadata.set("filename", `${sanitizedTitle}.pdf`);

      await JobService.completeJob(jobId, resumeId, "RESUME_PDF");

      return {
        downloadUrl,
        filename: `${sanitizedTitle}.pdf`,
      };
    } finally {
      if (browser) {
        await browser.close().catch((err: any) =>
          console.warn("[ExportResumePdfTask] Error closing browser:", err)
        );
      }
    }
  },
});
