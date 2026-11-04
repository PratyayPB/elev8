import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { RESUME_TEMPLATE_REGISTRY } from "@/features/resume-builder/templates/registry";
import { builderToJsonResume } from "@/features/resume-builder/adapters/builder-to-json-resume";
import { BuilderResumeArtifactSchema } from "@/features/resume-builder/schemas/resume-artifact.schema";

export async function POST(req: Request) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId },
      select: { id: true },
    });

    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { artifact, template } = body || {};

    if (!artifact || !template || typeof template !== "string") {
      return NextResponse.json(
        { error: "Missing artifact or template" },
        { status: 400 }
      );
    }

    const parseResult = BuilderResumeArtifactSchema.safeParse(artifact);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Invalid artifact structure",
          details: parseResult.error.format(),
        },
        { status: 400 }
      );
    }

    const renderer =
      RESUME_TEMPLATE_REGISTRY[template] ||
      RESUME_TEMPLATE_REGISTRY["academic-cv-lite"];

    if (!renderer) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    const jsonResume = builderToJsonResume(parseResult.data);
    let html: string;
    try {
      html = await renderer(jsonResume);
    } catch (renderError) {
      console.warn(
        `Template render failed for "${template}", falling back to academic-cv-lite:`,
        renderError
      );
      const fallbackRenderer = RESUME_TEMPLATE_REGISTRY["academic-cv-lite"];
      html = await fallbackRenderer(jsonResume);
    }

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

    const compiledHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          ${customCss}
        </head>
        <body class="bg-white">
          ${html}
        </body>
      </html>
    `;

    return new Response(compiledHtml, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (error: any) {
    console.error("POST /api/builder/preview error:", error);
    return NextResponse.json(
      { error: "Failed to render preview" },
      { status: 500 }
    );
  }
}
