import { TEMPLATES } from "../constants/templates";
import { TemplateMetadata } from "../types";

export class TemplateService {
  static getAllTemplates(): TemplateMetadata[] {
    return TEMPLATES;
  }

  static getTemplateById(id: string): TemplateMetadata | undefined {
    return TEMPLATES.find((t) => t.id === id);
  }
}
