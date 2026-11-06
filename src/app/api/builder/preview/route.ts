import { NextResponse } from "next/server";
import { getOrCreateDbUser } from "@/lib/auth";
import { renderResumeTheme } from "@/features/resume-builder/templates/registry";
import { builderToJsonResume } from "@/features/resume-builder/adapters/builder-to-json-resume";
import { BuilderResumeArtifactSchema } from "@/features/resume-builder/schemas/resume-artifact.schema";
import { BuilderResumeArtifact } from "@/features/resume-builder/types";

export async function POST(req: Request) {
  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
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

    let parsedArtifact: BuilderResumeArtifact;
    // Fast path: if basic structure is sound, normalize with fast defaults instead of running deep recursive 12-array Zod safeParse
    if (
      artifact &&
      typeof artifact === "object" &&
      typeof artifact.resumeId === "string" &&
      artifact.personalInformation &&
      typeof artifact.personalInformation === "object"
    ) {
      parsedArtifact = {
        resumeId: artifact.resumeId,
        version: typeof artifact.version === "number" ? artifact.version : 1,
        personalInformation: {
          fullName: artifact.personalInformation.fullName || "",
          email: artifact.personalInformation.email || "",
          phone: artifact.personalInformation.phone || "",
          location: artifact.personalInformation.location || "",
          linkedin: artifact.personalInformation.linkedin || "",
          github: artifact.personalInformation.github || "",
          portfolio: artifact.personalInformation.portfolio || "",
          label: artifact.personalInformation.label || "",
          image: artifact.personalInformation.image || "",
          city: artifact.personalInformation.city || "",
          region: artifact.personalInformation.region || "",
          countryCode: artifact.personalInformation.countryCode || "",
          twitter: artifact.personalInformation.twitter || "",
        },
        professionalSummary: artifact.professionalSummary || "",
        education: Array.isArray(artifact.education) ? artifact.education : [],
        experience: Array.isArray(artifact.experience) ? artifact.experience : [],
        projects: Array.isArray(artifact.projects) ? artifact.projects : [],
        skills: Array.isArray(artifact.skills) ? artifact.skills : [],
        certifications: Array.isArray(artifact.certifications) ? artifact.certifications : [],
        achievements: Array.isArray(artifact.achievements) ? artifact.achievements : [],
        languages: Array.isArray(artifact.languages) ? artifact.languages : [],
        volunteer: Array.isArray(artifact.volunteer) ? artifact.volunteer : [],
        publications: Array.isArray(artifact.publications) ? artifact.publications : [],
        interests: Array.isArray(artifact.interests) ? artifact.interests : [],
        references: Array.isArray(artifact.references) ? artifact.references : [],
      };
    } else {
      const parseResult = BuilderResumeArtifactSchema.safeParse(artifact);
      if (parseResult.success) {
        parsedArtifact = parseResult.data;
      } else {
        parsedArtifact = {
          resumeId: artifact?.resumeId || "draft",
          version: typeof artifact?.version === "number" ? artifact.version : 1,
          personalInformation: {
            fullName: artifact?.personalInformation?.fullName || "Your Name",
            email: artifact?.personalInformation?.email || "",
            phone: artifact?.personalInformation?.phone || "",
            location: artifact?.personalInformation?.location || "",
            linkedin: artifact?.personalInformation?.linkedin || "",
            github: artifact?.personalInformation?.github || "",
            portfolio: artifact?.personalInformation?.portfolio || "",
          },
          professionalSummary: artifact?.professionalSummary || "",
          education: Array.isArray(artifact?.education) ? artifact.education : [],
          experience: Array.isArray(artifact?.experience) ? artifact.experience : [],
          projects: Array.isArray(artifact?.projects) ? artifact.projects : [],
          skills: Array.isArray(artifact?.skills) ? artifact.skills : [],
          certifications: Array.isArray(artifact?.certifications) ? artifact.certifications : [],
          achievements: Array.isArray(artifact?.achievements) ? artifact.achievements : [],
          languages: Array.isArray(artifact?.languages) ? artifact.languages : [],
          volunteer: Array.isArray(artifact?.volunteer) ? artifact.volunteer : [],
          publications: Array.isArray(artifact?.publications) ? artifact.publications : [],
          interests: Array.isArray(artifact?.interests) ? artifact.interests : [],
          references: Array.isArray(artifact?.references) ? artifact.references : [],
        };
      }
    }

    const jsonResume = builderToJsonResume(parsedArtifact);

    let html: string;
    try {
      html = await renderResumeTheme(template, jsonResume);
    } catch (renderError: any) {
      console.warn(
        `Template render failed for "${template}", falling back to academic-cv-lite:`,
        renderError?.message
      );
      html = await renderResumeTheme("academic-cv-lite", jsonResume);
    }

    // Inject CSS to ensure the body and main container fit natural content height,
    // prevent inner scrollbars from showing on the resume document, and eliminate runaway
    // 100vh ResizeObserver feedback loops.
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

    // Inject customCss cleanly before </head> since themes already return full HTML documents
    let compiledHtml: string;
    if (html.includes("</head>")) {
      compiledHtml = html.replace("</head>", `${customCss}</head>`);
    } else {
      compiledHtml = customCss + html;
    }

    return new Response(compiledHtml, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (error: any) {
    console.error("POST /api/builder/preview error:", error);
    return NextResponse.json(
      {
        error: "Failed to render preview",
        message: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
