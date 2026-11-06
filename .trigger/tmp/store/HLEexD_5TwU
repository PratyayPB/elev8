import {
  ResumeBuilderService,
  builderToJsonResume,
  renderResumeTheme
} from "./chunk-4XM4VWBZ.mjs";
import {
  BlobStorageService,
  JobService
} from "./chunk-N4K5SP4C.mjs";
import {
  ModuleActivityService,
  import_client,
  prisma
} from "./chunk-Q5MBDOPE.mjs";
import {
  external_exports,
  metadata,
  schemaTask
} from "./chunk-3HTFOM3X.mjs";
import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// src/trigger/compile-resume-template.ts
init_esm();
var CompileResumeTemplateTaskSchema = external_exports.object({
  resumeId: external_exports.string(),
  userId: external_exports.string(),
  jobId: external_exports.string(),
  template: external_exports.string()
});
var compileResumeTemplateTask = schemaTask({
  id: "compile-resume-template",
  schema: CompileResumeTemplateTaskSchema,
  machine: {
    preset: "small-1x"
  },
  queue: {
    concurrencyLimit: 10
  },
  maxDuration: 45,
  run: /* @__PURE__ */ __name(async (payload, { ctx }) => {
    const { resumeId, userId, jobId, template } = payload;
    metadata.set("status", "Adapting Builder Sections");
    metadata.set("progress", 20);
    await JobService.updateProgress(jobId, 20, "Adapting Builder Sections", ctx.run.id);
    const artifact = await ResumeBuilderService.getResumeArtifact(userId, resumeId);
    const jsonResume = builderToJsonResume(artifact);
    metadata.set("status", "Compiling Template HTML");
    metadata.set("progress", 50);
    await JobService.updateProgress(jobId, 50, "Compiling Template HTML");
    let themeHtml;
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
    let compiledHtml;
    if (themeHtml.includes("</head>")) {
      compiledHtml = themeHtml.replace("</head>", `${customCss}</head>`);
    } else {
      compiledHtml = customCss + themeHtml;
    }
    const previewBlobPath = `resumes/previews/${resumeId}_${template}.html`;
    const previewBlobUrl = await BlobStorageService.upsertString(
      previewBlobPath,
      compiledHtml,
      "text/html"
    );
    await prisma.resumeBuild.update({
      where: { id: resumeId },
      data: {
        template
      }
    });
    await ModuleActivityService.recordActivity({
      userId,
      module: import_client.ModuleType.RESUME_BUILD,
      eventType: import_client.ModuleActivityEventType.RESUME_TEMPLATE_CHANGED,
      completionStatus: import_client.ModuleCompletionStatus.COMPLETED,
      entityId: resumeId,
      metadata: {
        source: "TRIGGER_COMPILE_TEMPLATE_TASK",
        resumeId,
        template,
        previewBlobUrl
      }
    }).catch(
      (activityError) => console.warn("[CompileResumeTemplateTask] Failed to record activity:", activityError)
    );
    metadata.set("status", "Completed");
    metadata.set("progress", 100);
    metadata.set("previewBlobUrl", previewBlobUrl);
    await JobService.completeJob(jobId, resumeId, "RESUME_TEMPLATE_SWITCH");
    return { previewBlobUrl, html: compiledHtml };
  }, "run")
});

export {
  CompileResumeTemplateTaskSchema,
  compileResumeTemplateTask
};
//# sourceMappingURL=chunk-EOVGOCF6.mjs.map
