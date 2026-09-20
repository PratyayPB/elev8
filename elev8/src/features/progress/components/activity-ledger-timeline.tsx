import { Activity } from "lucide-react";
import { ModuleActivityRecord } from "../types";
import { getActivityEventDetails } from "../utils/activity-details";

interface ActivityLedgerTimelineProps {
  activities: ModuleActivityRecord[];
}

export function ActivityLedgerTimeline({ activities }: ActivityLedgerTimelineProps) {
  if (activities.length === 0) {
    return (
      <div className="p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card text-center">
        <Activity className="w-8 h-8 text-text-muted mx-auto mb-3 opacity-60" />
        <h4 className="font-display font-semibold text-text-primary mb-1">
          No Activity Recorded Yet
        </h4>
        <p className="text-sm font-sans text-text-secondary max-w-md mx-auto">
          As you practice mock interviews, generate roadmaps, and build resumes, your career progress history will be recorded here.
        </p>
      </div>
    );
  }

  const getEventDetails = getActivityEventDetails;


  // Group activities by date bucket (Today, Yesterday, or Date string)
  const groupActivitiesByDate = (items: ModuleActivityRecord[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const groups: { [key: string]: ModuleActivityRecord[] } = {};

    items.forEach((item) => {
      const d = new Date(item.createdAt);
      d.setHours(0, 0, 0, 0);

      let label = d.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      if (d.getTime() === today.getTime()) {
        label = "Today";
      } else if (d.getTime() === yesterday.getTime()) {
        label = "Yesterday";
      }

      if (!groups[label]) groups[label] = [];
      groups[label].push(item);
    });

    return groups;
  };

  const grouped = groupActivitiesByDate(activities);

  return (
    <div className="p-6 md:p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card relative">
      <div className="space-y-8">
        {Object.entries(grouped).map(([dateLabel, groupItems]) => (
          <div key={dateLabel} className="space-y-4">
            <h5 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              {dateLabel}
            </h5>

            <div className="space-y-3 relative pl-6 border-l border-border-subtle">
              {groupItems.map((item) => {
                const details = getEventDetails(item);
                const time = new Date(item.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <div key={item.id} className="relative flex items-center justify-between gap-4 py-1">
                    {/* Bullet marker */}
                    <div className="absolute -left-[31px] w-3 h-3 rounded-full bg-dashboard-card border-2 border-border-subtle flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-dashboard-metricHighlight" />
                    </div>

                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-surface-muted border border-border-subtle flex items-center justify-center shrink-0">
                        {details.icon}
                      </div>
                      <span className="text-sm font-medium text-text-primary truncate">
                        {details.title}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-text-muted shrink-0">
                      {time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
