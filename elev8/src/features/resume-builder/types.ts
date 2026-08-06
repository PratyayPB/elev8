import { ParsedResume } from "@/features/resume/types";

export type ResumeProfile = ParsedResume;

export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  isPremium: boolean;
}

export type Template = TemplateMetadata;

export interface BuilderSection {
  id: string;
  title: string;
  icon: string;
}

export interface ValidationState {
  isValid: boolean;
  errors: Record<string, string[]>;
}

export interface BuilderState {
  activeResume: ResumeProfile | null;
  activeTemplateId: string | null;
  isDirty: boolean;
  lastSaved: string | null;
  validationStatus: ValidationState;
}
