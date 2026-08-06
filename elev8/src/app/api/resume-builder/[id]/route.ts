import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return NextResponse.json({ message: `PATCH /api/resume-builder/${resolvedParams.id} - Not implemented yet` }, { status: 200 });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return NextResponse.json({ message: `DELETE /api/resume-builder/${resolvedParams.id} - Not implemented yet` }, { status: 200 });
}
