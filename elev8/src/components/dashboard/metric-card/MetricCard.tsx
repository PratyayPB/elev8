import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
  highlighted?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({
  label,
  value,
  trend,
  trendDirection = "neutral",
  highlighted = false,
  icon,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card dark:bg-[#1F1F1F] p-6 shadow-sm transition-all hover:shadow-md dark:hover:bg-[#242424]",
        highlighted && "border-primary ring-1 ring-primary",
        className
      )}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      )}

      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider">
          {label}
        </h3>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
          {value}
        </div>

        {trend && (
          <div className="flex items-center gap-1.5 text-xs font-sans font-medium">
            {trendDirection === "up" && (
              <ArrowUpRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            )}
            {trendDirection === "down" && (
              <ArrowDownRight className="h-4 w-4 text-rose-600 dark:text-rose-400" />
            )}
            {trendDirection === "neutral" && (
              <Minus className="h-4 w-4 text-muted-foreground" />
            )}
            <span
              className={cn(
                "truncate",
                trendDirection === "up" && "text-emerald-700 dark:text-emerald-400",
                trendDirection === "down" && "text-rose-700 dark:text-rose-400",
                trendDirection === "neutral" && "text-muted-foreground"
              )}
            >
              {trend}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
