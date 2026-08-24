import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ProfileService, ProfileConflictError, ProfileNotFoundError } from "@/features/profile/services";
import { profileCreateSchema, profileUpdateSchema, profileUpsertSchema } from "@/features/profile/schemas";
import { ZodError } from "zod";
import { getOrCreateDbUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getOrCreateDbUser().catch(() => null);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await ProfileService.getProfile(user.id);
    if (!profile) {
      return NextResponse.json({ profile: null }, { status: 200 });
    }

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error("GET /api/profile error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getOrCreateDbUser().catch(() => null);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const validated = profileCreateSchema.parse(body);

    const created = await ProfileService.createProfile(user.id, validated);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    if (error instanceof ProfileConflictError) {
      return NextResponse.json({ error: error.message }, { status: 409 });
    }
    console.error("POST /api/profile error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const user = await getOrCreateDbUser().catch(() => null);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const validated = profileUpdateSchema.parse(body);

    const updated = await ProfileService.updateProfile(user.id, validated);
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    if (error instanceof ProfileNotFoundError) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    console.error("PATCH /api/profile error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = await getOrCreateDbUser().catch(() => null);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const validated = profileUpsertSchema.parse(body);

    const upserted = await ProfileService.upsertProfile(user.id, validated);
    return NextResponse.json(upserted, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    console.error("PUT /api/profile error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
