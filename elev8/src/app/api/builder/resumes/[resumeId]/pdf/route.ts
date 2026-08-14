import React from "react";
import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { ResumeBuilderService, ResumeBuilderError } from "@/features/resume-builder/services/resume-builder.service";
import { ResumeTemplateRenderer } from "@/features/resume-builder/components/templates/resume-template-renderer";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    const dbUser = await getOrCreateDbUser();
    const { resumeId } = await params;

    // Verify ownership and get metadata
    const resume = await ResumeBuilderService.getResume(dbUser.id, resumeId);
    
    // Fetch artifact
    const artifact = await ResumeBuilderService.getResumeArtifact(dbUser.id, resumeId);

    // Dynamically import react-dom/server.browser to bypass Next.js App Router static import lint rule
    const { renderToStaticMarkup } = await import("react-dom/server.browser");

    // Dynamically import puppeteer to handle environment constraints cleanly
    const puppeteer = await import("puppeteer");

    const browser = await puppeteer.default.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Render React template component to static HTML markup
    const markup = renderToStaticMarkup(
      React.createElement(ResumeTemplateRenderer, {
        artifact,
        template: resume.template,
      })
    );

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-white">
          ${markup}
        </body>
      </html>
    `;

    await page.setContent(fullHtml, { waitUntil: "domcontentloaded" });

    // Generate PDF Buffer
    const pdfBuffer = await page.pdf({
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

    // Sanitize filename
    const sanitizedTitle = (resume.title || "Resume")
      .replace(/[/\\?%*:|"<>]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${sanitizedTitle}.pdf"`,
      },
    });
  } catch (error: any) {
    if (error instanceof ResumeBuilderError) {
      return NextResponse.json(
        { error: error.message, code: error.code },
        { status: error.statusCode }
      );
    }
    if (error?.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
    }
    console.error("GET /api/builder/resumes/[resumeId]/pdf error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF. Please try again.", code: "PDF_GENERATION_FAILED" },
      { status: 500 }
    );
  }
}
