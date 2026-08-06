import { useBuilderState } from "./use-builder-state";
import { TemplateService } from "../services/template.service";

export function useActiveTemplate() {
  const activeTemplateId = useBuilderState((state) => state.activeTemplateId);
  const template = activeTemplateId ? TemplateService.getTemplateById(activeTemplateId) : null;

  return template;
}
