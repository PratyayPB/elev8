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
        "flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-2xl border border-dashed border-border bg-card/40",
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-muted-foreground bg-secondary/80 p-4 rounded-full shadow-sm border border-border/40">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-display font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base font-sans text-muted-foreground max-w-md mb-6">
        {description}
      </p>

      {actionLabel &&
        (actionHref ? (
          <Link
            href={actionHref}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm transition-all hover:bg-primary/90 hover:scale-[0.98] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
          >
            {actionLabel}
          </Link>
        ) : (
          <button
            onClick={actionOnClick}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm transition-all hover:bg-primary/90 hover:scale-[0.98] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
          >
            {actionLabel}
          </button>
        ))}
    </div>
  );
}
