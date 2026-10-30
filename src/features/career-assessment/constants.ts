export const ASSESSMENT_PROMPT_VERSION = "1.0";
export const ASSESSMENT_MODEL = "gemini-3.8-flash";
export const ASSESSMENT_MAX_ARRAY_LENGTH = 5;
export const ASSESSMENT_MAX_NARRATIVE_LENGTH = 2000;

// Weekly quota configuration (Rolling 7-day window)
export const ASSESSMENT_WEEKLY_QUOTA = 3;
export const ASSESSMENT_QUOTA_WINDOW_DAYS = 7;
export const ASSESSMENT_QUOTA_WINDOW_MS = ASSESSMENT_QUOTA_WINDOW_DAYS * 24 * 60 * 60 * 1000;

