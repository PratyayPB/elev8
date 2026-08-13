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
        "relative overflow-hidden rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card p-6 shadow-sm transition-shadow hover:shadow-md",
        highlighted && "border-dashboard-metricHighlight ring-1 ring-dashboard-metricHighlight",
        className
      )}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 w-full h-1 bg-dashboard-metricHighlight" />
      )}
      
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-display font-semibold text-text-secondary uppercase tracking-wider">
          {label}
        </h3>
        {icon && (
          <div className="text-text-muted">
            {icon}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-3xl md:text-4xl font-display font-bold text-text-primary">
          {value}
        </div>
        
        {trend && (
          <div className="flex items-center gap-1.5 text-sm font-sans font-medium">
            {trendDirection === "up" && <ArrowUpRight className="h-4 w-4 text-emerald-600" />}
            {trendDirection === "down" && <ArrowDownRight className="h-4 w-4 text-rose-600" />}
            {trendDirection === "neutral" && <Minus className="h-4 w-4 text-text-muted" />}
            <span
              className={cn(
                "truncate",
                trendDirection === "up" && "text-emerald-700",
                trendDirection === "down" && "text-rose-700",
                trendDirection === "neutral" && "text-text-secondary"
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
