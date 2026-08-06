export const INTERVIEW_TYPES = [
  { id: "quick", label: "Quick Practice", count: 5, description: "A short 5-question warmup." },
  { id: "standard", label: "Standard Interview", count: 10, description: "A typical 10-question interview." },
  { id: "comprehensive", label: "Comprehensive Interview", count: 15, description: "An in-depth 15-question evaluation." },
  { id: "mock", label: "Mock Final Round", count: 20, description: "A rigorous 20-question final round." },
] as const;

export const INTERVIEW_TYPE_MAP: Record<string, number> = {
  "Quick Practice": 5,
  "Standard Interview": 10,
  "Comprehensive Interview": 15,
  "Mock Final Round": 20,
};
