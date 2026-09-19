import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ResumeBuilderService, ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";
import { builderToJsonResume } from "@/features/resume-builder/adapters/builder-to-json-resume";
import { RESUME_TEMPLATE_REGISTRY } from "@/features/resume-builder/templates/registry";
import { ModuleActivityService } from "@/features/progress/services";
import {
  ModuleActivityEventType,
  ModuleCompletionStatus,
  ModuleType,
} from "@/features/progress/types";

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let browser: any = null;

  try {
    const { userId: clerkId } = getAuth(req);
    if (!clerkId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!dbUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { resumeId } = req.query;
    if (!resumeId || typeof resumeId !== "string") {
      return res.status(400).json({ error: "Invalid resumeId" });
    }

    // Verify ownership and get metadata
    const resume = await ResumeBuilderService.getResume(dbUser.id, resumeId);

    // Fetch artifact
    const artifact = await ResumeBuilderService.getResumeArtifact(dbUser.id, resumeId);

    const renderer = RESUME_TEMPLATE_REGISTRY[resume.template];
    if (!renderer) {
      return res.status(400).json({ error: "Template not found" });
    }

    const jsonResume = builderToJsonResume(artifact);
    const themeHtml = await renderer(jsonResume);

    // Dynamically import puppeteer
    const puppeteer = await import("puppeteer");

    browser = await puppeteer.default.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      timeout: 30000,
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

    const pdfBuffer = Buffer.from(pdfUint8Array);

    await ModuleActivityService.recordActivity({
      userId: dbUser.id,
      module: ModuleType.RESUME_BUILD,
      eventType: ModuleActivityEventType.RESUME_PDF_GENERATED,
      completionStatus: ModuleCompletionStatus.COMPLETED,
      entityId: resumeId,
      metadata: {
        source: "RESUME_PDF_API",
        resumeId,
        title: resume.title,
        template: resume.template,
      },
    }).catch((activityError) =>
      console.warn("[ResumePdfApi] Failed to record PDF activity:", activityError)
    );

    const sanitizedTitle = (resume.title || "Resume")
      .replace(/[\/\\?%*:|"<>]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${sanitizedTitle}.pdf"`);
    res.setHeader("Content-Length", pdfBuffer.length.toString());

    return res.status(200).send(pdfBuffer);
  } catch (error: any) {
    if (error instanceof ResumeBuilderError) {
      return res.status(error.statusCode).json({ error: error.message, code: error.code });
    }
    console.error("GET /api/builder/resumes/[resumeId]/pdf error:", error);
    return res.status(500).json({ error: "Failed to generate PDF. Please try again." });
  } finally {
    if (browser) {
      await browser.close().catch((err: any) => console.warn("Error closing puppeteer browser:", err));
    }
  }
}
