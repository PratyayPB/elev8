import { schemaTask, metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ResumeBuilderService } from "@/features/resume-builder/services/resume-builder.service";
import { builderToJsonResume } from "@/features/resume-builder/adapters/builder-to-json-resume";
import { renderResumeTheme } from "@/features/resume-builder/templates/registry";
import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { JobService } from "@/services/jobs/job.service";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleType,
  ModuleActivityEventType,
  ModuleCompletionStatus,
} from "@/features/progress/types";

export const CompileResumeTemplateTaskSchema = z.object({
  resumeId: z.string(),
  userId: z.string(),
  jobId: z.string(),
  template: z.string(),
});

export const compileResumeTemplateTask = schemaTask({
  id: "compile-resume-template",
  schema: CompileResumeTemplateTaskSchema,
  machine: {
    preset: "small-1x",
  },
  queue: {
    concurrencyLimit: 10,
  },
  maxDuration: 45,
  run: async (payload, { ctx }) => {
    const { resumeId, userId, jobId, template } = payload;

    metadata.set("status", "Adapting Builder Sections");
    metadata.set("progress", 20);
    await JobService.updateProgress(jobId, 20, "Adapting Builder Sections", ctx.run.id);

    const artifact = await ResumeBuilderService.getResumeArtifact(userId, resumeId);
    const jsonResume = builderToJsonResume(artifact);

    metadata.set("status", "Compiling Template HTML");
    metadata.set("progress", 50);
    await JobService.updateProgress(jobId, 50, "Compiling Template HTML");

    let themeHtml: string;
    try {
      themeHtml = await renderResumeTheme(template, jsonResume);
    } catch (renderError) {
      console.warn(
        `Template render failed for "${template}", falling back to academic-cv-lite:`,
        renderError
      );
      themeHtml = await renderResumeTheme("academic-cv-lite", jsonResume);
    }

    metadata.set("status", "Caching Rendered Preview");
    metadata.set("progress", 80);
    await JobService.updateProgress(jobId, 80, "Caching Rendered Preview");

    const customCss = `
      <style>
        html, body {
          background-color: #ffffff !important;
          margin: 0 !important;
          padding: 0 0 24px 0 !important;
          overflow: hidden !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          height: auto !important;
          min-height: 0 !important;
        }
        body > * {
          min-height: 0 !important;
          min-height: auto !important;
          height: auto !important;
        }
        ::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        #resume, .resume-container, .container, #wrapper, div[class*="Page"], [class*="cmzlok"] {
          box-shadow: none !important;
          margin: 0 auto !important;
          background-color: #ffffff !important;
          width: 100% !important;
          max-width: 100% !important;
          overflow: hidden !important;
          height: auto !important;
          min-height: 0 !important;
        }
      </style>
    `;

    // Inject custom CSS cleanly before </head> since themes already return full HTML documents
    let compiledHtml: string;
    if (themeHtml.includes("</head>")) {
      compiledHtml = themeHtml.replace("</head>", `${customCss}</head>`);
    } else {
      compiledHtml = customCss + themeHtml;
    }

    // Cache the rendered HTML in Blob Storage for instant preview loading
    const previewBlobPath = `resumes/previews/${resumeId}_${template}.html`;
    const previewBlobUrl = await BlobStorageService.upsertString(
      previewBlobPath,
      compiledHtml,
      "text/html"
    );

    // Update database record with new template
    await prisma.resumeBuild.update({
      where: { id: resumeId },
      data: {
        template: template as any,
      },
    });

    await ModuleActivityService.recordActivity({
      userId,
      module: ModuleType.RESUME_BUILD,
      eventType: ModuleActivityEventType.RESUME_TEMPLATE_CHANGED,
      completionStatus: ModuleCompletionStatus.COMPLETED,
      entityId: resumeId,
      metadata: {
        source: "TRIGGER_COMPILE_TEMPLATE_TASK",
        resumeId,
        template,
        previewBlobUrl,
      },
    }).catch((activityError) =>
      console.warn("[CompileResumeTemplateTask] Failed to record activity:", activityError)
    );

    metadata.set("status", "Completed");
    metadata.set("progress", 100);
    metadata.set("previewBlobUrl", previewBlobUrl);

    await JobService.completeJob(jobId, resumeId, "RESUME_TEMPLATE_SWITCH");

    return { previewBlobUrl, html: compiledHtml };
  },
});
