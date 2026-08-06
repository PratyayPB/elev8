import { InterviewRequest } from "../types";
import { InterviewRequestSchema } from "../schemas/interview-request.schema";

export class InterviewRequestService {
  /**
   * Validates and constructs the final InterviewRequest object.
   */
  public static buildRequest(rawData: unknown): InterviewRequest {
    // Validate the incoming data against our strict Zod schema
    const validation = InterviewRequestSchema.safeParse(rawData);

    if (!validation.success) {
      console.error("InterviewRequest validation failed:", validation.error);
      throw new Error("Invalid interview request data.");
    }

    // Return the strongly-typed InterviewRequest
    return validation.data as InterviewRequest;
  }
}
