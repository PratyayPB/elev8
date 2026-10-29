import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getTemplateSupport } from "@/features/resume-builder/constants/template-support";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const template = await prisma.resumeTemplate.findUnique({
      where: { slug },
    });
    
    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 });
    }
    
    const support = getTemplateSupport(slug);
    return NextResponse.json({
      ...template,
      templateSupport: support,
    });
  } catch (error) {
    console.error(`GET /api/builder/templates/[slug] error:`, error);
    return NextResponse.json(
      { error: "Failed to fetch template" },
      { status: 500 }
    );
  }
}
