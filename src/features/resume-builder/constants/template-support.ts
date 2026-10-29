export type TemplateSectionKey =
  | "personal-info"
  | "summary"
  | "experience"
  | "education"
  | "projects"
  | "skills"
  | "certifications"
  | "achievements"
  | "languages"
  | "volunteer"
  | "publications"
  | "interests"
  | "references";

export type TemplatePersonalFieldKey =
  | "label"
  | "image"
  | "city"
  | "region"
  | "countryCode"
  | "twitter"
  | "phone"
  | "email"
  | "portfolio"
  | "location";

export type TemplateEducationFieldKey = "score" | "courses";
export type TemplateAchievementFieldKey = "awarder";

export interface TemplateSupport {
  sections: TemplateSectionKey[];
  personalFields: TemplatePersonalFieldKey[];
  educationFields: TemplateEducationFieldKey[];
  achievementFields: TemplateAchievementFieldKey[];
}

const ALL_CORE_SECTIONS: TemplateSectionKey[] = [
  "personal-info",
  "summary",
  "experience",
  "education",
  "projects",
  "skills",
  "certifications",
  "achievements",
  "languages",
  "volunteer",
  "publications",
  "interests",
  "references",
];

const STANDARD_PERSONAL_FIELDS: TemplatePersonalFieldKey[] = [
  "label",
  "location",
  "city",
  "region",
  "countryCode",
  "phone",
  "email",
  "portfolio",
  "twitter",
];

export const TEMPLATE_SUPPORT_MANIFEST: Record<string, TemplateSupport> = {
  "academic-cv-lite": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: ["score"],
    achievementFields: ["awarder"],
  },
  "developer-mono": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: ["score"],
    achievementFields: ["awarder"],
  },
  "government-standard": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: ["score"],
    achievementFields: ["awarder"],
  },
  "architects-portfolio": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: [],
    achievementFields: ["awarder"],
  },
  "minimalist-grid": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: ["score"],
    achievementFields: ["awarder"],
  },
  "nordic-minimal": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: [],
    achievementFields: ["awarder"],
  },
  "desert-modern": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: ["score", "courses"],
    achievementFields: ["awarder"],
  },
  "elegant": {
    sections: ALL_CORE_SECTIONS,
    personalFields: [...STANDARD_PERSONAL_FIELDS, "image"],
    educationFields: ["courses"],
    achievementFields: ["awarder"],
  },
  "macchiato": {
    sections: ALL_CORE_SECTIONS.filter((s) => s !== "certifications"),
    personalFields: STANDARD_PERSONAL_FIELDS.filter((f) => f !== "twitter"),
    educationFields: ["courses"],
    achievementFields: ["awarder"],
  },
  "sidebar": {
    sections: ALL_CORE_SECTIONS,
    personalFields: [
      "label",
      "image",
      "location",
      "city",
      "region",
      "phone",
      "email",
      "portfolio",
    ],
    educationFields: ["score"],
    achievementFields: ["awarder"],
  },
  "art-deco": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: ["score", "courses"],
    achievementFields: ["awarder"],
  },
  "art-school-modern": {
    sections: ALL_CORE_SECTIONS,
    personalFields: [...STANDARD_PERSONAL_FIELDS, "image"],
    educationFields: ["score", "courses"],
    achievementFields: ["awarder"],
  },
  "brutalist": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: ["score", "courses"],
    achievementFields: ["awarder"],
  },
  "consultant-polished": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS.filter(
      (f) => f !== "countryCode"
    ),
    educationFields: ["score", "courses"],
    achievementFields: ["awarder"],
  },
  "creative-studio": {
    sections: ALL_CORE_SECTIONS,
    personalFields: STANDARD_PERSONAL_FIELDS,
    educationFields: ["score"],
    achievementFields: ["awarder"],
  },
};

export function getTemplateSupport(slug: string): TemplateSupport {
  return (
    TEMPLATE_SUPPORT_MANIFEST[slug] ??
    TEMPLATE_SUPPORT_MANIFEST["academic-cv-lite"]
  );
}
