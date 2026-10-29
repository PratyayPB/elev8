import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export function SectionHeader({
  title,
  actionLabel,
  actionHref,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between mb-6", className)}>
      <h2 className="text-xl font-display font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="group flex items-center gap-1 text-sm font-display font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          {actionLabel}
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
