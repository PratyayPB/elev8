"use client";

import { useState } from "react";
import { Stage1FormData, ProfileContext, RoadmapRequest } from "../types";
import { RoadmapRequestService } from "../services/roadmap-request.service";

export function useRoadmapRequest() {
  const [request, setRequest] = useState<RoadmapRequest | null>(null);
  const [buildError, setBuildError] = useState<string | null>(null);

  const generateRequest = (
    stage1Data: Stage1FormData,
    personalization: {
      skipped: boolean;
      profileContext?: ProfileContext | null;
    }
  ): RoadmapRequest | null => {
    try {
      setBuildError(null);
      const payload = RoadmapRequestService.buildRequest(
        stage1Data,
        personalization
      );
      setRequest(payload);
      return payload;
    } catch (err: any) {
      console.error("RoadmapRequest Build Error:", err);
      setBuildError(err.message || "Invalid roadmap request inputs.");
      return null;
    }
  };

  return {
    request,
    buildError,
    generateRequest,
  };
}
