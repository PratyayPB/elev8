import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeader, MetricCard } from "@/components/dashboard";
import { ROUTES } from "@/constants/routes";
import { ArrowRight, Compass, Search, Star, Target, Zap, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Career Guidance | Elev8",
  description: "AI-powered career path analysis",
};

export default function CareerGuidancePage() {
  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-10">
      <PageHeader 
        title="Career Guidance" 
        description="Get personalized AI career advice based on your current skills and market trends."
        section="AI Workspace"
      />

      <section>
        <SectionHeader title="Recommended Roles" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "Full-Stack Developer", match: "92%", skills: ["React", "Node.js", "REST APIs"], gaps: ["Testing", "System Design"] },
            { role: "Frontend Engineer", match: "88%", skills: ["React", "TypeScript", "Tailwind"], gaps: ["GraphQL", "Web Performance"] },
            { role: "Cloud Engineer", match: "74%", skills: ["Node.js", "APIs"], gaps: ["AWS", "Docker", "Kubernetes"] },
          ].map((item, i) => (
            <div key={i} className="flex flex-col p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-semibold text-lg text-text-primary">{item.role}</h3>
                <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-display font-semibold rounded-full bg-dashboard-metricHighlight text-black">
                  {item.match} Match
                </span>
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-xs font-sans font-semibold text-text-secondary uppercase tracking-wider mb-2">Strong Match Based On</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((s, j) => (
                      <span key={j} className="inline-flex px-2 py-1 bg-surface-muted text-text-secondary text-xs rounded-md font-sans">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-sans font-semibold text-text-secondary uppercase tracking-wider mb-2">Skill Gaps</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.gaps.map((s, j) => (
                      <span key={j} className="inline-flex px-2 py-1 border border-border-subtle text-text-secondary text-xs rounded-md font-sans">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle">
                <Link
                  href={ROUTES.ROADMAPS}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-text-primary text-white font-display font-medium text-sm rounded-lg transition-colors hover:bg-black/80"
                >
                  View Analysis
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <SectionHeader title="Your Strengths" />
          <div className="p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card space-y-4">
             {["React & Next.js", "API Design", "TypeScript", "Problem Solving"].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border-subtle">
                  <div className="flex items-center gap-3">
                    <Star className="h-4 w-4 text-dashboard-metricHighlight fill-dashboard-metricHighlight" />
                    <span className="font-display font-medium text-sm text-text-primary">{s}</span>
                  </div>
                  <span className="text-xs font-sans text-emerald-600 font-medium">Advanced</span>
                </div>
             ))}
          </div>
        </section>
        
        <section>
          <SectionHeader title="Skill Gaps" />
          <div className="p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card space-y-4">
             {["System Design", "Cloud Infrastructure (AWS)", "GraphQL"].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border-subtle">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-rose-500" />
                    <span className="font-display font-medium text-sm text-text-primary">{s}</span>
                  </div>
                  <span className="text-xs font-sans text-rose-600 font-medium">Beginner</span>
                </div>
             ))}
             <Link
                href={ROUTES.ROADMAPS}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-muted text-text-primary font-display font-medium text-sm rounded-lg transition-colors hover:bg-border-subtle"
              >
                Create Roadmap to bridge gaps
                <ArrowRight className="h-4 w-4" />
              </Link>
          </div>
        </section>
      </div>

      <section>
        <SectionHeader title="Market Readiness" />
        <div className="p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card flex flex-col md:flex-row items-center gap-8">
           <div className="w-32 h-32 rounded-full border-8 border-dashboard-metricHighlight flex items-center justify-center shrink-0">
             <span className="text-3xl font-display font-bold">76%</span>
           </div>
           <div>
             <h3 className="text-xl font-display font-bold text-text-primary mb-2">Ready for Junior/Mid Roles</h3>
             <p className="text-sm font-sans text-text-secondary mb-4 max-w-xl">
               Your current skill profile matches 76% of requirements for Full-Stack Developer positions in your area. Focusing on System Design and Cloud Infrastructure will push this above 90%.
             </p>
             <div className="flex items-center gap-4">
               <Link href={ROUTES.INTERVIEWS} className="inline-flex items-center gap-2 text-sm font-display font-semibold text-text-primary hover:underline">
                 <Mic className="h-4 w-4" /> Start Mock Interview
               </Link>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}
