"use client";

import { useState } from "react";
import { ResumeReport } from "../types";

export function useResumeReport(initialReport: ResumeReport) {
  const [report] = useState<ResumeReport>(initialReport);
  const [activeTab, setActiveTab] = useState<
    "overview" | "health" | "sections" | "ats" | "plan" | "next" | "analytics"
  >("overview");

  return {
    report,
    activeTab,
    setActiveTab,
  };
}
