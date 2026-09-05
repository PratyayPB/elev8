import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { ResumeBuilderService } from "@/features/resume-builder/services/resume-builder.service";
import { builderToJsonResume } from "@/features/resume-builder/adapters/builder-to-json-resume";
import { RESUME_TEMPLATE_REGISTRY } from "@/features/resume-builder/templates/registry";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const auth = getAuth(req);
    if (!auth.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: auth.userId },
    });

    if (!dbUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { resumeId } = req.query;
    if (typeof resumeId !== 'string') {
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

    // Dynamically import puppeteer to handle environment constraints cleanly
    const puppeteer = await import("puppeteer");

    const browser = await puppeteer.default.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

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

    await page.setContent(fullHtml, { waitUntil: "domcontentloaded" });

    // Generate PDF (returns Uint8Array in modern Puppeteer)
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

    await browser.close();

    // Convert Uint8Array to Node.js Buffer to prevent Next.js from serializing it as JSON
    const pdfBuffer = Buffer.from(pdfUint8Array);

    // Sanitize filename
    const sanitizedTitle = (resume.title || "Resume")
      .replace(/[\/\\?%*:|"<>]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${sanitizedTitle}.pdf"`);
    res.setHeader('Content-Length', pdfBuffer.length.toString());
    return res.status(200).end(pdfBuffer);
  } catch (error: any) {
    console.error("GET /api/builder/resumes/[resumeId]/pdf error:", error);
    res.status(500).json({ error: "Failed to generate PDF. Please try again." });
  }
}
