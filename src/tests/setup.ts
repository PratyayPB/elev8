import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Automatically cleanup DOM after each component test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
