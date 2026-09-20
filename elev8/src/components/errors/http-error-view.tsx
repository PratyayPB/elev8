"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface HttpErrorInfo {
  code: number;
  name: string;
  description: string;
}

const HTTP_ERROR_MAP: Record<number, { name: string; description: string }> = {
  // 4xx Client Errors (excluding 404 per instructions)
  400: {
    name: "Bad Request",
    description: "The server could not understand the request due to invalid syntax or parameters.",
  },
  401: {
    name: "Unauthorized",
    description: "Authentication is required to access this resource. Please sign in to continue.",
  },
  402: {
    name: "Payment Required",
    description: "A subscription or payment is required to access this feature.",
  },
  403: {
    name: "Forbidden",
    description: "You do not have permission to view this resource or perform this action.",
  },
  405: {
    name: "Method Not Allowed",
    description: "The request method is not supported for this requested route.",
  },
  406: {
    name: "Not Acceptable",
    description: "The requested resource cannot generate content matching the request headers.",
  },
  408: {
    name: "Request Timeout",
    description: "The server timed out waiting for the request. Please check your connection and try again.",
  },
  409: {
    name: "Conflict",
    description: "The request could not be processed due to a conflict with the current state of the resource.",
  },
  410: {
    name: "Gone",
    description: "The requested resource has been permanently removed and is no longer available.",
  },
  413: {
    name: "Payload Too Large",
    description: "The uploaded file or request payload exceeds the maximum allowed size limit.",
  },
  415: {
    name: "Unsupported Media Type",
    description: "The format or media type of the requested data is not supported.",
  },
  422: {
    name: "Unprocessable Entity",
    description: "The request was well-formed but contained semantic errors or validation failures.",
  },
  429: {
    name: "Too Many Requests",
    description: "Too many requests have been made in a short time. Please wait a moment before trying again.",
  },

  // 5xx Server Errors
  500: {
    name: "Internal Server Error",
    description: "The server encountered an unexpected error while processing your request.",
  },
  501: {
    name: "Not Implemented",
    description: "The server does not support the functionality required to fulfill this request.",
  },
  502: {
    name: "Bad Gateway",
    description: "The server received an invalid response from an upstream server or gateway.",
  },
  503: {
    name: "Service Unavailable",
    description: "The server is currently unable to handle the request due to temporary maintenance or overload.",
  },
  504: {
    name: "Gateway Timeout",
    description: "The upstream server did not respond in time. Please try again in a few moments.",
  },
  505: {
    name: "HTTP Version Not Supported",
    description: "The HTTP version used in the request is not supported by the server.",
  },
};

/**
 * Extracts or infers an HTTP status code and details from an error object.
 */
function resolveHttpError(error: Error & { digest?: string; status?: number; statusCode?: number }): HttpErrorInfo {
  // 1. Direct status code properties
  const directCode = error.status || error.statusCode || (error as unknown as { code?: number })?.code;
  if (typeof directCode === "number" && directCode >= 400 && directCode <= 599 && directCode !== 404) {
    const errorData = HTTP_ERROR_MAP[directCode] || {
      name: directCode >= 500 ? "Server Error" : "Client Error",
      description: "An unexpected error occurred while processing the request.",
    };
    return { code: directCode, name: errorData.name, description: errorData.description };
  }

  const rawMessage = error.message || "";

  // 2. Parse 3-digit HTTP status code from message (e.g. "[400] Bad Request", "status 503", "403:")
  const codeMatch = rawMessage.match(/\b([45]\d{2})\b/);
  if (codeMatch) {
    const parsedCode = parseInt(codeMatch[1], 10);
    if (parsedCode !== 404 && HTTP_ERROR_MAP[parsedCode]) {
      return {
        code: parsedCode,
        name: HTTP_ERROR_MAP[parsedCode].name,
        description: HTTP_ERROR_MAP[parsedCode].description,
      };
    }
  }

  // 3. Keyword-based inference
  const lowerMsg = rawMessage.toLowerCase();

  if (lowerMsg.includes("unauthorized") || lowerMsg.includes("unauthenticated") || lowerMsg.includes("not authenticated")) {
    return { code: 401, name: HTTP_ERROR_MAP[401].name, description: HTTP_ERROR_MAP[401].description };
  }

  if (lowerMsg.includes("forbidden") || lowerMsg.includes("access denied") || lowerMsg.includes("permission")) {
    return { code: 403, name: HTTP_ERROR_MAP[403].name, description: HTTP_ERROR_MAP[403].description };
  }

  if (lowerMsg.includes("too many requests") || lowerMsg.includes("rate limit") || lowerMsg.includes("quota exceeded") || lowerMsg.includes("resource_exhausted")) {
    return { code: 429, name: HTTP_ERROR_MAP[429].name, description: HTTP_ERROR_MAP[429].description };
  }

  if (lowerMsg.includes("payload too large") || lowerMsg.includes("file too large") || lowerMsg.includes("entity too large")) {
    return { code: 413, name: HTTP_ERROR_MAP[413].name, description: HTTP_ERROR_MAP[413].description };
  }

  if (lowerMsg.includes("bad request") || lowerMsg.includes("invalid input") || lowerMsg.includes("validation error") || lowerMsg.includes("zoderror")) {
    return { code: 400, name: HTTP_ERROR_MAP[400].name, description: HTTP_ERROR_MAP[400].description };
  }

  if (lowerMsg.includes("service unavailable") || lowerMsg.includes("temporarily unavailable") || lowerMsg.includes("overloaded") || lowerMsg.includes("high demand")) {
    return { code: 503, name: HTTP_ERROR_MAP[503].name, description: HTTP_ERROR_MAP[503].description };
  }

  if (lowerMsg.includes("bad gateway") || lowerMsg.includes("invalid response")) {
    return { code: 502, name: HTTP_ERROR_MAP[502].name, description: HTTP_ERROR_MAP[502].description };
  }

  if (lowerMsg.includes("timeout") || lowerMsg.includes("timed out") || lowerMsg.includes("econnreset") || lowerMsg.includes("fetch failed")) {
    return { code: 504, name: HTTP_ERROR_MAP[504].name, description: HTTP_ERROR_MAP[504].description };
  }

  // 4. Default to 500 Internal Server Error for unhandled exceptions
  return {
    code: 500,
    name: HTTP_ERROR_MAP[500].name,
    description: HTTP_ERROR_MAP[500].description,
  };
}

export interface HttpErrorViewProps {
  error: Error & { digest?: string; status?: number; statusCode?: number };
  reset: () => void;
  className?: string;
  fallbackRoute?: string;
  logPrefix?: string;
}

export function HttpErrorView({
  error,
  reset,
  className,
  fallbackRoute = "/dashboard",
  logPrefix = "[HttpErrorView]",
}: HttpErrorViewProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(`${logPrefix} Error caught:`, error);
  }, [error, logPrefix]);

  const { code, name, description } = resolveHttpError(error);

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackRoute);
    }
  };

  // Clean custom message detail if provided and informative
  const hasCustomDetail =
    error.message &&
    !error.message.startsWith("NEXT_") &&
    !error.message.includes("digest:") &&
    error.message !== name &&
    error.message !== description;

  return (
    <div className={cn("flex flex-col items-center justify-center min-h-[500px] p-6 text-center", className)}>
      <div className="w-full max-w-md bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-8 shadow-sm space-y-6">
        {/* Warning Icon Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 mx-auto shadow-sm">
          <AlertTriangle className="w-7 h-7" />
        </div>

        {/* Error Code & Name and Description */}
        <div className="space-y-2">
          <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
            {code} {name}
          </h1>
          <p className="text-sm font-sans text-text-secondary leading-relaxed">
            {description}
          </p>

          {hasCustomDetail && (
            <p className="text-xs font-mono text-text-tertiary bg-surface-muted/60 border border-border-subtle rounded-lg p-2.5 mt-3 text-left break-words">
              {error.message}
            </p>
          )}
        </div>

        {/* Action Buttons: Retry and Go Back */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium bg-text-primary text-white dark:text-brand-primary-900 rounded-xl hover:bg-black/80 dark:hover:bg-brand-secondary-200 transition-colors shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium bg-surface-muted text-text-primary border border-border-subtle rounded-xl hover:bg-surface-subtle transition-colors cursor-pointer active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default HttpErrorView;
