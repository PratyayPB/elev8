"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProfileData, PromptContext } from "../types";
import { getProfileCompletionPrompts } from "../services/progressive-profiling.service";
import { Sparkles, ArrowRight, X } from "lucide-react";

interface ProgressivePromptBannerProps {
  profile: ProfileData | null;
  context: PromptContext;
  className?: string;
  onSkip?: () => void;
}

export function ProgressivePromptBanner({
  profile,
  context,
  className = "",
  onSkip,
}: ProgressivePromptBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const prompts = getProfileCompletionPrompts(profile, context);

  if (isDismissed || prompts.length === 0) {
    return null;
  }

  const topPrompt = prompts[0];

  const handleSkip = () => {
    setIsDismissed(true);
    if (onSkip) onSkip();
  };

  return (
    <div
      className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-[var(--card-radius)] border border-dashboard-metricHighlight/40 bg-dashboard-metricHighlight/10 shadow-sm ${className}`}
    >
      <div className="flex items-start gap-3.5 pr-8 sm:pr-0">
        <div className="h-9 w-9 rounded-xl bg-dashboard-metricHighlight/30 flex items-center justify-center text-black shrink-0 mt-0.5 sm:mt-0">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h4 className="font-display font-semibold text-text-primary text-sm">
            {topPrompt.title}
          </h4>
          <p className="text-xs font-sans text-text-secondary mt-0.5 max-w-xl">
            {topPrompt.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
        {topPrompt.skippable && (
          <button
            type="button"
            onClick={handleSkip}
            className="text-xs font-display font-medium text-text-secondary hover:text-text-primary transition-colors px-2 py-1"
          >
            Skip for now
          </button>
        )}
        <Link
          href="/dashboard/profile"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-text-primary text-white font-display font-semibold text-xs transition-all hover:bg-black/80 shrink-0"
        >
          Add to Profile
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {topPrompt.skippable && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute top-3 right-3 text-text-muted hover:text-text-primary transition-colors sm:hidden"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
