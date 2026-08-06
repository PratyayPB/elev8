import { ResumeAssessmentRequest } from "../types";
import { ResumeRequestSchema } from "../schemas/resume-request.schema";

export class ResumeRequestService {
  /**
   * Validates and constructs the final ResumeAssessmentRequest object.
   */
  public static buildRequest(rawData: unknown): ResumeAssessmentRequest {
    const validation = ResumeRequestSchema.safeParse(rawData);

    if (!validation.success) {
      console.error("ResumeAssessmentRequest validation failed:", validation.error);
      throw new Error("Invalid resume request data. Please check all required fields.");
    }

    return validation.data as ResumeAssessmentRequest;
  }
}
