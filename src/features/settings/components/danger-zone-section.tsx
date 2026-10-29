"use client";

import React, { useState, useTransition } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { AlertTriangle, Trash2, Loader2 } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { deleteAccountAction } from "../actions/settings.actions";
import { toast } from "sonner";

export function DangerZoneSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, startDeleteTransition] = useTransition();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleDeleteAccount = () => {
    startDeleteTransition(async () => {
      try {
        const result = await deleteAccountAction();
        if (result.success) {
          toast.success("Account successfully deleted.");
          await signOut();
          router.push("/sign-in");
        } else {
          toast.error(result.error || "Failed to delete account. Please try again.");
          setIsOpen(false);
        }
      } catch (err) {
        console.error("Account deletion failed:", err);
        toast.error("Failed to delete account. Please try again later.");
        setIsOpen(false);
      }
    });
  };

  return (
    <>
      <Card className="border border-destructive/30 bg-destructive/[0.02] shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-display font-semibold text-destructive flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Danger Zone
          </CardTitle>
          <CardDescription>
            Irreversible actions that permanently delete your Elev8 profile, learning history, and credentials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-destructive/20 bg-background">
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold text-text-primary">Delete Account</h4>
              <p className="text-xs text-text-secondary leading-relaxed max-w-xl">
                Permanently purge your account, generated career roadmaps, interview transcripts, and AI evaluations. This action cannot be reversed.
              </p>
            </div>

            <Button
              variant="destructive"
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto font-medium flex items-center gap-2 shrink-0"
            >
              <Trash2 className="w-4 h-4" />
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="w-10 h-10 rounded-full bg-destructive/15 text-destructive flex items-center justify-center mb-2">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <DialogTitle className="text-lg font-semibold text-text-primary">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-sm text-text-secondary pt-1 leading-relaxed">
              This action is <strong className="text-destructive font-medium">permanent and irreversible</strong>. 
              Deleting your account will immediately erase:
            </DialogDescription>
          </DialogHeader>

          <div className="p-3 rounded-lg bg-surface-muted/50 dark:bg-card/50 text-xs text-text-secondary space-y-1.5 border border-border/40">
            <p>• All saved career assessments and skill gap reports</p>
            <p>• All generated roadmaps, progress checkpoints, and milestones</p>
            <p>• All mock interview records, audio assessments, and scores</p>
            <p>• Your authentication identity and personal login credentials</p>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 pt-2">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={isDeleting}
              className="flex items-center gap-2"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deleting Account...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  Yes, permanently delete
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
