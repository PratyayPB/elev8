import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { RESUME_TEMPLATE_REGISTRY } from "@/features/resume-builder/templates/registry";
import { builderToJsonResume } from "@/features/resume-builder/adapters/builder-to-json-resume";
import { BuilderResumeArtifactSchema } from "@/features/resume-builder/schemas/resume-artifact.schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 1. Authenticate with Clerk via Pages Router auth
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

    // 2. Parse and validate body
    const { artifact, template } = req.body || {};
    if (!artifact || !template || typeof template !== "string") {
      return res.status(400).json({ error: "Missing artifact or template" });
    }

    const parseResult = BuilderResumeArtifactSchema.safeParse(artifact);
    if (!parseResult.success) {
      return res.status(400).json({
        error: "Invalid artifact structure",
        details: parseResult.error.format(),
      });
    }

    const renderer = RESUME_TEMPLATE_REGISTRY[template];
    if (!renderer) {
      return res.status(404).json({ error: "Template not found" });
    }

    const jsonResume = builderToJsonResume(parseResult.data);
    let html = await renderer(jsonResume);

    // Inject CSS to ensure the body and main container fill the iframe and have a white background,
    // preventing the gap at the bottom and eliminating internal iframe scrollbars.
    const customCss = `
      <style>
        html, body {
          background-color: #ffffff !important;
          min-height: 100vh !important;
          margin: 0 !important;
          overflow: hidden !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        ::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        #resume, .resume-container, .container, main, article, #wrapper {
          background-color: #ffffff !important;
          box-shadow: none !important;
          min-height: 100vh !important;
          margin: 0 auto !important;
          overflow: hidden !important;
        }
      </style>
    `;

    if (html.includes("</head>")) {
      html = html.replace("</head>", `${customCss}</head>`);
    } else {
      html = customCss + html;
    }

    res.setHeader("Content-Type", "text/html");
    return res.status(200).send(html);
  } catch (error: any) {
    console.error("POST /api/builder/preview error:", error);
    return res.status(500).json({ error: "Failed to render preview" });
  }
}
