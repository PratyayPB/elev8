"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast as sonnerToast } from "sonner";
import { syncToastToDatabase, processToastQueue } from "@/lib/toast-sync";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function extractToastText(val: any): string {
  if (typeof val === "string") return val;
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  if (val && typeof val === "object") {
    if (typeof val.props?.children === "string") return val.props.children;
    if (typeof val.message === "string") return val.message;
  }
  return "";
}

let isInterceptionSetup = false;

export function setupSonnerInterception() {
  if (isInterceptionSetup || typeof window === "undefined") return;
  isInterceptionSetup = true;

  const originalSuccess = sonnerToast.success;
  const originalError = sonnerToast.error;
  const originalInfo = sonnerToast.info;
  const originalWarning = sonnerToast.warning;
  const originalMessage = sonnerToast.message;

  sonnerToast.success = (message: any, data?: any) => {
    const title = extractToastText(message);
    const desc = extractToastText(data?.description);
    syncToastToDatabase({
      title,
      message: desc || title,
      actionUrl: data?.actionUrl,
      idempotencyKey: data?.idempotencyKey,
      skipDb: data?.skipDb,
    }).catch(() => {});
    return originalSuccess(message, data);
  };

  sonnerToast.error = (message: any, data?: any) => {
    const title = extractToastText(message);
    const desc = extractToastText(data?.description);
    syncToastToDatabase({
      title,
      message: desc || title,
      actionUrl: data?.actionUrl,
      idempotencyKey: data?.idempotencyKey,
      skipDb: data?.skipDb,
    }).catch(() => {});
    return originalError(message, data);
  };

  sonnerToast.info = (message: any, data?: any) => {
    const title = extractToastText(message);
    const desc = extractToastText(data?.description);
    syncToastToDatabase({
      title,
      message: desc || title,
      actionUrl: data?.actionUrl,
      idempotencyKey: data?.idempotencyKey,
      skipDb: data?.skipDb,
    }).catch(() => {});
    return originalInfo(message, data);
  };

  sonnerToast.warning = (message: any, data?: any) => {
    const title = extractToastText(message);
    const desc = extractToastText(data?.description);
    syncToastToDatabase({
      title,
      message: desc || title,
      actionUrl: data?.actionUrl,
      idempotencyKey: data?.idempotencyKey,
      skipDb: data?.skipDb,
    }).catch(() => {});
    return originalWarning(message, data);
  };

  sonnerToast.message = (message: any, data?: any) => {
    const title = extractToastText(message);
    const desc = extractToastText(data?.description);
    syncToastToDatabase({
      title,
      message: desc || title,
      actionUrl: data?.actionUrl,
      idempotencyKey: data?.idempotencyKey,
      skipDb: data?.skipDb,
    }).catch(() => {});
    return originalMessage(message, data);
  };
}

if (typeof window !== "undefined") {
  setupSonnerInterception();
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  useEffect(() => {
    setupSonnerInterception();
    processToastQueue().catch(() => {});
  }, []);

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-accent group-[.toast]:text-accent-foreground group-[.toast]:font-semibold",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, sonnerToast as toast };
