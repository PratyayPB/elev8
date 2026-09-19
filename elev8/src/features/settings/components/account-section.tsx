"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ShieldCheck, Sparkles } from "lucide-react";

interface AccountSectionProps {
  email: string | null;
  authProvider?: string;
  planName?: string;
}

export function AccountSection({
  email,
  authProvider = "Clerk Authentication",
  planName = "Free Plan",
}: AccountSectionProps) {
  return (
    <Card className="border border-border/80 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-display font-semibold flex items-center gap-2">
          Account
        </CardTitle>
        <CardDescription>
          Your primary identity, plan details, and authentication provider.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email */}
          <div className="p-4 rounded-xl border border-border/60 bg-surface-muted/30 dark:bg-card/50 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-text-secondary font-medium">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                Email Address
              </span>
              <Badge variant="outline" className="text-[10px] uppercase font-mono tracking-wider">
                Primary
              </Badge>
            </div>
            <p className="text-sm font-semibold text-text-primary truncate">
              {email || "No email on file"}
            </p>
          </div>

          {/* Current Plan */}
          <div className="p-4 rounded-xl border border-border/60 bg-surface-muted/30 dark:bg-card/50 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-text-secondary font-medium">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Account Plan
              </span>
              <Badge variant="accent" className="text-[10px] uppercase font-mono tracking-wider">
                Active
              </Badge>
            </div>
            <p className="text-sm font-semibold text-text-primary">
              {planName}
            </p>
          </div>

          {/* Authentication */}
          <div className="p-4 rounded-xl border border-border/60 bg-surface-muted/30 dark:bg-card/50 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-text-secondary font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                Authentication
              </span>
              <Badge variant="success" className="text-[10px] uppercase font-mono tracking-wider">
                Secured
              </Badge>
            </div>
            <p className="text-sm font-semibold text-text-primary truncate">
              {authProvider}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
