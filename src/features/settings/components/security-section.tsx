"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { ShieldCheck, ExternalLink, KeyRound, Smartphone, History } from "lucide-react";

export function SecuritySection() {
  const { openUserProfile } = useClerk();

  return (
    <Card className="border border-border/80 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-display font-semibold flex items-center gap-2">
          Security
        </CardTitle>
        <CardDescription>
          Your account credentials, two-factor authentication, and connected devices are safeguarded by Clerk.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border border-border/40 bg-surface-muted/20 dark:bg-card/40 flex items-center gap-3">
            <KeyRound className="w-4 h-4 text-accent flex-shrink-0" />
            <div className="text-xs">
              <p className="font-medium text-text-primary">Password & SSO</p>
              <p className="text-text-secondary">Connected providers</p>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-border/40 bg-surface-muted/20 dark:bg-card/40 flex items-center gap-3">
            <Smartphone className="w-4 h-4 text-accent flex-shrink-0" />
            <div className="text-xs">
              <p className="font-medium text-text-primary">Two-Factor Auth</p>
              <p className="text-text-secondary">Enhanced security</p>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-border/40 bg-surface-muted/20 dark:bg-card/40 flex items-center gap-3">
            <History className="w-4 h-4 text-accent flex-shrink-0" />
            <div className="text-xs">
              <p className="font-medium text-text-primary">Active Sessions</p>
              <p className="text-text-secondary">Device activity</p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>Identity verification and security settings managed securely by Clerk</span>
          </div>

          <Button
            type="button"
            onClick={() => openUserProfile()}
            className="flex items-center gap-2 font-medium"
          >
            Manage Account
            <ExternalLink className="w-4 h-4 ml-0.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
