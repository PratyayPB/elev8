export type LLMProviderName = "gemini" | "groq" | "openrouter";

export interface LLMMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface LLMRequest {
  /** Identifier of the calling feature/module for structured logging and routing metrics */
  feature?: string;
  /** System instruction / prompt */
  systemInstruction?: string;
  /** Single string prompt, or raw contents */
  prompt?: string;
  /** Flexible contents parameter (string, Gemini parts, or LLMMessage array) */
  contents?: string | LLMMessage[] | any;
  /** Normalized chat messages list */
  messages?: LLMMessage[];
  /** Model override if specified */
  model?: string;
  /** Temperature between 0.0 and 2.0 */
  temperature?: number;
  /** Maximum completion tokens */
  maxOutputTokens?: number;
  /** Output MIME type (e.g. "application/json") */
  responseMimeType?: "application/json" | "text/plain" | string;
  /** Optional JSON schema for structured output validation */
  responseSchema?: unknown;
  /** Request timeout in milliseconds */
  timeoutMs?: number;
  /** Optional external abort signal */
  abortSignal?: AbortSignal;
}

export interface LLMResponse<T = unknown> {
  /** The generated text content */
  text: string;
  /** Parsed JSON if responseMimeType was application/json and parsing succeeded */
  parsed?: T;
  /** The provider that successfully answered the request */
  provider: LLMProviderName;
  /** The actual model used */
  model: string;
  /** Latency in milliseconds */
  durationMs: number;
  /** Optional token usage details */
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  };
}

export interface LLMErrorClassification {
  /** Whether the error is eligible for fallback to another provider */
  fallbackEligible: boolean;
  /** Normalized failure reason / category */
  reason: string;
  /** HTTP status code if available */
  statusCode?: number;
  /** Whether the error was a user-initiated cancellation / abort */
  isAbort?: boolean;
}

export interface LLMProvider {
  readonly name: LLMProviderName;
  /** Check if the provider has necessary environment variables / keys configured */
  isConfigured(): boolean;
  /** Execute generation request */
  generate(request: LLMRequest): Promise<LLMResponse>;
}
