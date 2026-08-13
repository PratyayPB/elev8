import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  section?: string;
  action?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  section,
  action,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8", className)}>
      <div className="flex-1 min-w-0">
        {section && (
          <span className="inline-block px-3 py-1 mb-3 text-xs font-display font-semibold uppercase tracking-wider bg-surface-muted text-text-secondary rounded-full">
            {section}
          </span>
        )}
        <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight truncate">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-sm md:text-base font-sans text-text-secondary max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
