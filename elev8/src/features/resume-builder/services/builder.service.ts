import { BuilderState, ResumeProfile } from "../types";

export class BuilderService {
  static getInitialState(): BuilderState {
    return {
      activeResume: null,
      activeTemplateId: "classic",
      isDirty: false,
      lastSaved: null,
      validationStatus: {
        isValid: true,
        errors: {},
      },
    };
  }

  static setActiveResume(state: BuilderState, resume: ResumeProfile): BuilderState {
    return {
      ...state,
      activeResume: resume,
      isDirty: true,
    };
  }

  static setActiveTemplate(state: BuilderState, templateId: string): BuilderState {
    return {
      ...state,
      activeTemplateId: templateId,
      isDirty: true,
    };
  }
}
