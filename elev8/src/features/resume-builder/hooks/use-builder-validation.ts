import { useBuilderState } from "./use-builder-state";

export function useBuilderValidation() {
  const validationStatus = useBuilderState((state) => state.validationStatus);
  return validationStatus;
}
