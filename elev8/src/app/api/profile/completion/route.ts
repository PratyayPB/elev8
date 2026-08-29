import { NextResponse } from "next/server";
import { ProfileService, calculateProfileCompleteness, checkMandatoryCompletion } from "@/features/profile/services";
import { getOrCreateDbUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getOrCreateDbUser().catch(() => null);

    if (!user) {
      const emptyCompleteness = calculateProfileCompleteness(null);
      const emptyMandatory = checkMandatoryCompletion(null);
      return NextResponse.json({
        ...emptyCompleteness,
        allMissingFields: emptyCompleteness.missingFields,
        isComplete: false,
        isMandatoryCompleted: false,
        missingFields: emptyCompleteness.missingFields,
        missingMandatoryFields: emptyMandatory.missingFields,
      }, { status: 200 });
    }

    const profile = await ProfileService.getProfile(user.id);
    const completeness = calculateProfileCompleteness(profile);
    const mandatory = checkMandatoryCompletion(profile);

    return NextResponse.json({
      ...completeness,
      allMissingFields: completeness.missingFields,
      isComplete: completeness.isComplete,
      isMandatoryCompleted: mandatory.isMandatoryCompleted,
      missingFields: completeness.missingFields,
      missingMandatoryFields: mandatory.missingFields,
    }, { status: 200 });
  } catch (error) {
    console.error("GET /api/profile/completion error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
