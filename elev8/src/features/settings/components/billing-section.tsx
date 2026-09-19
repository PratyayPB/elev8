"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Check, Clock } from "lucide-react";

interface BillingSectionProps {
  currentPlan?: string;
}

export function BillingSection({ currentPlan = "Free Plan" }: BillingSectionProps) {
  return (
    <Card className="border border-border/80 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-display font-semibold flex items-center gap-2">
            Billing & Subscription
          </CardTitle>
          <Badge variant="outline" className="font-mono text-[10px] tracking-wider uppercase">
            Current Tier
          </Badge>
        </div>
        <CardDescription>
          View your active plan allocation and subscription management options.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 rounded-xl border border-border/60 bg-surface-muted/30 dark:bg-card/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent/15 text-accent-foreground">
              <CreditCard className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-base text-text-primary">{currentPlan}</span>
                <Badge variant="accent" className="text-[10px] font-mono uppercase">
                  Active
                </Badge>
              </div>
              <p className="text-xs text-text-secondary mt-0.5">
                Standard access to AI career assessment, roadmap creation, and interview mockups.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
            <Button
              variant="outline"
              disabled
              className="w-full sm:w-auto opacity-70 cursor-not-allowed flex items-center gap-2"
            >
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              Manage Subscription (Coming Soon)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-text-secondary pt-1">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-green-500" />
            <span>AI Profile & Gap Engine</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-green-500" />
            <span>Interactive Roadmaps</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-green-500" />
            <span>AI Mock Interviews</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
