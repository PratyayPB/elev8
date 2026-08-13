import type { Metadata } from "next";
import { PageHeader, SectionHeader, MetricCard } from "@/components/dashboard";
import { Map, Mic, Target, Trophy, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Progress | Elev8",
  description: "Track your career development journey",
};

export default function ProgressPage() {
  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-10">
      <PageHeader 
        title="Progress" 
        description="Track your career development milestones, skill acquisitions, and interview readiness over time."
        section="Analytics"
      />

      <section>
        <SectionHeader title="Overview" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <MetricCard
            label="Total Hours"
            value="42h"
            trend="+5h this week"
            trendDirection="up"
            icon={<Clock className="h-5 w-5" />}
          />
          <MetricCard
            label="Milestones"
            value="18"
            trend="2 remaining"
            trendDirection="neutral"
            icon={<Target className="h-5 w-5" />}
          />
          <MetricCard
            label="Skills Mastered"
            value="24"
            trend="+3 this month"
            trendDirection="up"
            icon={<Trophy className="h-5 w-5" />}
          />
          <MetricCard
            label="Interviews Passed"
            value="4"
            trend="Top 20%"
            trendDirection="up"
            icon={<CheckCircle2 className="h-5 w-5" />}
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <SectionHeader title="Learning Timeline" />
            <div className="p-6 md:p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card relative">
              <div className="absolute left-10 md:left-12 top-10 bottom-10 w-0.5 bg-border-subtle" />
              
              <div className="space-y-8 relative">
                {[
                  { title: "Mastered React Server Components", date: "Today", icon: <Trophy className="h-4 w-4 text-dashboard-metricHighlight fill-dashboard-metricHighlight" /> },
                  { title: "Passed Advanced System Design Mock", date: "Yesterday", icon: <Mic className="h-4 w-4 text-emerald-500" /> },
                  { title: "Completed Node.js Fundamentals", date: "Oct 12, 2024", icon: <Map className="h-4 w-4 text-blue-500" /> },
                  { title: "Updated Resume with new skills", date: "Oct 10, 2024", icon: <CheckCircle2 className="h-4 w-4 text-text-primary" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                     <div className="relative z-10 w-10 h-10 rounded-full bg-surface-muted border-2 border-dashboard-card flex items-center justify-center shrink-0">
                       {item.icon}
                     </div>
                     <div className="pt-1.5">
                       <h4 className="font-display font-semibold text-text-primary mb-1">{item.title}</h4>
                       <span className="text-sm font-sans text-text-muted">{item.date}</span>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <SectionHeader title="Skill Acquisition" />
            <div className="p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card">
               <div className="space-y-6">
                 {[
                   { skill: "React", progress: 95 },
                   { skill: "TypeScript", progress: 85 },
                   { skill: "Node.js", progress: 70 },
                   { skill: "GraphQL", progress: 40 },
                   { skill: "Docker", progress: 25 },
                 ].map((item, i) => (
                   <div key={i}>
                     <div className="flex justify-between items-center mb-2">
                       <span className="font-display font-medium text-sm text-text-primary">{item.skill}</span>
                       <span className="font-sans text-xs text-text-secondary">{item.progress}%</span>
                     </div>
                     <div className="h-1.5 w-full bg-surface-muted rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-text-primary rounded-full"
                         style={{ width: `${item.progress}%` }}
                       />
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
