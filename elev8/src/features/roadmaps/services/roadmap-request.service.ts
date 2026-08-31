import {
  RoadmapRequest,
  RoadmapRequestSchema,
  Stage1FormData,
  ProfileContext,
} from "../types";

export class RoadmapRequestService {
  /**
   * Constructs and validates a RoadmapRequest object.
   */
  static buildRequest(
    stage1Data: Stage1FormData,
    personalization: {
      skipped: boolean;
      profileContext?: ProfileContext | null;
    }
  ): RoadmapRequest {
    const rawPayload = {
      role: stage1Data.role.trim(),
      experienceLevel: stage1Data.experienceLevel,
      personalization: {
        skipped: personalization.skipped,
        profileContext: personalization.skipped
          ? null
          : personalization.profileContext || null,
      },
    };

    // Validates payload against schema
    return RoadmapRequestSchema.parse(rawPayload);
  }
}
