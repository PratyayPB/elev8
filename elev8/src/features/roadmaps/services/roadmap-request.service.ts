import { RoadmapRequest, RoadmapRequestSchema, Stage1FormData, Answer } from "../types";

export class RoadmapRequestService {
  /**
   * Constructs and validates a RoadmapRequest object.
   */
  static buildRequest(
    stage1Data: Stage1FormData,
    personalization: { skipped: boolean; answers: Answer[] }
  ): RoadmapRequest {
    const rawPayload = {
      role: stage1Data.role.trim(),
      hoursPerWeek: stage1Data.hoursPerWeek,
      experienceLevel: stage1Data.experienceLevel,
      personalization: {
        skipped: personalization.skipped,
        answers: personalization.answers,
      },
    };

    // Validates payload against schema
    return RoadmapRequestSchema.parse(rawPayload);
  }
}
