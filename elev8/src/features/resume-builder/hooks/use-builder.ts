import { useBuilderState } from "./use-builder-state";

export function useBuilder() {
  const state = useBuilderState();
  return state;
}
