import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  actionOnClick?: () => void;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  actionOnClick,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-[var(--card-radius-lg)] border border-dashed border-border-subtle bg-surface-muted/30",
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-text-muted bg-dashboard-card p-4 rounded-full shadow-sm">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-display font-bold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base font-sans text-text-secondary max-w-md mb-6">
        {description}
      </p>
      
      {actionLabel && (
        actionHref ? (
          <Link
            href={actionHref}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-text-primary text-white font-display font-semibold text-sm transition-all hover:bg-black/80 hover:scale-[0.98] active:scale-[0.95]"
          >
            {actionLabel}
          </Link>
        ) : (
          <button
            onClick={actionOnClick}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-text-primary text-white font-display font-semibold text-sm transition-all hover:bg-black/80 hover:scale-[0.98] active:scale-[0.95]"
          >
            {actionLabel}
          </button>
        )
      )}
    </div>
  );
}
