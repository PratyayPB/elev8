"use client";

import React, { useState, useTransition } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Zap, Scale, BrainCircuit, Loader2 } from "lucide-react";
import { LLMPreference } from "@/lib/llm";
import { updateLLMPreferenceAction } from "../actions/settings.actions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface AIPreferencesSectionProps {
  initialPreference: LLMPreference;
}

const PREFERENCE_OPTIONS: Array<{
  id: LLMPreference;
  title: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    id: "FAST",
    title: "Fast",
    badge: "Low Latency",
    description: "Quicker responses optimized for rapid iterations and instant feedback.",
    icon: Zap,
  },
  {
    id: "BALANCED",
    title: "Balanced",
    badge: "Recommended",
    description: "Optimal balance between response speed and deep reasoning capability.",
    icon: Scale,
  },
  {
    id: "THINK",
    title: "Think",
    badge: "Deep Reasoning",
    description: "Enhanced reasoning and detailed evaluation for complex career tasks.",
    icon: BrainCircuit,
  },
];

export function AIPreferencesSection({ initialPreference }: AIPreferencesSectionProps) {
  const [selectedPreference, setSelectedPreference] = useState<LLMPreference>(initialPreference);
  const [isPending, startTransition] = useTransition();

  const handlePreferenceChange = (newPref: LLMPreference) => {
    if (newPref === selectedPreference || isPending) return;

    const previousPref = selectedPreference;
    setSelectedPreference(newPref);

    startTransition(async () => {
      try {
        const result = await updateLLMPreferenceAction(newPref);
        if (result.success) {
          toast.success(`AI Preference updated to ${newPref.charAt(0) + newPref.slice(1).toLowerCase()}`);
        } else {
          setSelectedPreference(previousPref);
          toast.error(result.error || "Unable to save your AI preference. Please try again.");
        }
      } catch (err) {
        setSelectedPreference(previousPref);
        toast.error("Unable to save your AI preference. Please try again.");
      }
    });
  };

  return (
    <Card className="border border-border/80 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-display font-semibold flex items-center gap-2">
            AI Preferences
          </CardTitle>
          {isPending && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-accent" />
              Saving...
            </div>
          )}
        </div>
        <CardDescription>
          Choose your default intelligence profile. This setting universally configures response speed and depth across career assessments, roadmaps, interviews, and resume analysis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedPreference}
          onValueChange={(val) => handlePreferenceChange(val as LLMPreference)}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          disabled={isPending}
        >
          {PREFERENCE_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedPreference === option.id;

            return (
              <Label
                key={option.id}
                htmlFor={`pref-${option.id}`}
                className={cn(
                  "relative flex flex-col p-4 rounded-xl border transition-all cursor-pointer select-none space-y-3",
                  isSelected
                    ? "border-primary ring-2 ring-primary/10 bg-primary/[0.02] dark:bg-primary/[0.05]"
                    : "border-border/60 hover:border-border hover:bg-surface-muted/30 dark:hover:bg-card/40"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "bg-surface-muted dark:bg-card text-text-secondary"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm text-text-primary">
                      {option.title}
                    </span>
                  </div>
                  <RadioGroupItem value={option.id} id={`pref-${option.id}`} />
                </div>

                <p className="text-xs text-text-secondary leading-relaxed flex-1">
                  {option.description}
                </p>

                <div className="pt-1">
                  <Badge
                    variant={isSelected ? "accent" : "outline"}
                    className="text-[10px] font-mono tracking-wider uppercase"
                  >
                    {option.badge}
                  </Badge>
                </div>
              </Label>
            );
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
