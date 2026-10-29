import { test } from "node:test";
import assert from "node:assert/strict";

// We can test the error resolution logic directly
const HTTP_ERROR_MAP: Record<number, { name: string; description: string }> = {
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

function resolveHttpError(error: Error & { digest?: string; status?: number; statusCode?: number }) {
  const directCode = error.status || error.statusCode || (error as unknown as { code?: number })?.code;
  if (typeof directCode === "number" && directCode >= 400 && directCode <= 599 && directCode !== 404) {
    const errorData = HTTP_ERROR_MAP[directCode] || {
      name: directCode >= 500 ? "Server Error" : "Client Error",
      description: "An unexpected error occurred while processing the request.",
    };
    return { code: directCode, name: errorData.name, description: errorData.description };
  }

  const rawMessage = error.message || "";
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

  return {
    code: 500,
    name: HTTP_ERROR_MAP[500].name,
    description: HTTP_ERROR_MAP[500].description,
  };
}

test("resolveHttpError correctly identifies direct status codes", () => {
  const err400 = Object.assign(new Error("Bad request body"), { status: 400 });
  assert.deepEqual(resolveHttpError(err400), {
    code: 400,
    name: "Bad Request",
    description: "The server could not understand the request due to invalid syntax or parameters.",
  });

  const err503 = Object.assign(new Error("Down for maintenance"), { statusCode: 503 });
  assert.deepEqual(resolveHttpError(err503), {
    code: 503,
    name: "Service Unavailable",
    description: "The server is currently unable to handle the request due to temporary maintenance or overload.",
  });
});

test("resolveHttpError extracts status code embedded in message", () => {
  const err = new Error("API call failed with status 429: Rate limit exceeded");
  assert.deepEqual(resolveHttpError(err), {
    code: 429,
    name: "Too Many Requests",
    description: "Too many requests have been made in a short time. Please wait a moment before trying again.",
  });
});

test("resolveHttpError infers status codes from keywords", () => {
  const authErr = new Error("Access Denied: missing scope");
  assert.equal(resolveHttpError(authErr).code, 403);
  assert.equal(resolveHttpError(authErr).name, "Forbidden");

  const unauthErr = new Error("User unauthorized");
  assert.equal(resolveHttpError(unauthErr).code, 401);
  assert.equal(resolveHttpError(unauthErr).name, "Unauthorized");

  const timeoutErr = new Error("Connection timed out waiting for server");
  assert.equal(resolveHttpError(timeoutErr).code, 504);
  assert.equal(resolveHttpError(timeoutErr).name, "Gateway Timeout");
});

test("resolveHttpError defaults to 500 Internal Server Error for unclassified exceptions", () => {
  const genericErr = new Error("Unexpected null pointer");
  assert.equal(resolveHttpError(genericErr).code, 500);
  assert.equal(resolveHttpError(genericErr).name, "Internal Server Error");
});
