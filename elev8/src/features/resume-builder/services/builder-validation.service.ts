import { ResumeProfile, ValidationState } from "../types";
import { resumeProfileSchema } from "../resume-builder.schema";

export class BuilderValidationService {
  static validate(profile: ResumeProfile): ValidationState {
    const result = resumeProfileSchema.safeParse(profile);
    
    if (result.success) {
      return { isValid: true, errors: {} };
    }

    const errors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const path = issue.path.join(".");
      if (!errors[path]) {
        errors[path] = [];
      }
      errors[path].push(issue.message);
    }

    return { isValid: false, errors };
  }
}
