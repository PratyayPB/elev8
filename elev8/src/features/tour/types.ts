export type OnboardingStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "SKIPPED";

export interface OnboardingState {
  status: OnboardingStatus;
  currentStep: number;
  version: number;
  completedAt: string | null;
}

export const ONBOARDING_VERSION = 1;
export const ONBOARDING_STORAGE_KEY = "elev8_onboarding_state";
