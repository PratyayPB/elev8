import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeader } from "@/components/dashboard";
import { ROUTES } from "@/constants/routes";
import { ArrowRight, Brain, Code, Database, Globe, MessageSquare, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Career Assessment | Elev8",
  description: "Evaluate your technical and soft skills",
};

export default function CareerAssessmentPage() {
  const categories = [
    { name: "Frontend", score: 85, icon: <Globe className="h-5 w-5" />, color: "bg-blue-500" },
    { name: "Backend", score: 72, icon: <Terminal className="h-5 w-5" />, color: "bg-emerald-500" },
    { name: "Databases", score: 68, icon: <Database className="h-5 w-5" />, color: "bg-indigo-500" },
    { name: "DevOps", score: 55, icon: <Code className="h-5 w-5" />, color: "bg-rose-500" },
    { name: "Problem Solving", score: 80, icon: <Brain className="h-5 w-5" />, color: "bg-amber-500" },
    { name: "Communication", score: 90, icon: <MessageSquare className="h-5 w-5" />, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-10">
      <PageHeader 
        title="Career Assessment" 
        description="Evaluate your technical and soft skills to identify areas for growth."
        section="Skill Evaluation"
        action={
          <Link
            href={ROUTES.INTERVIEWS}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-text-primary text-white font-display font-semibold text-sm transition-all hover:bg-black/80 hover:scale-[0.98]"
          >
            Start New Assessment
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      {/* Overview Card */}
      <section>
        <div className="p-8 rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-sm font-display font-semibold text-text-secondary uppercase tracking-wider mb-2">Overall Score</h2>
             <div className="flex items-baseline gap-2 mb-2">
               <span className="text-5xl font-display font-bold text-text-primary">75</span>
               <span className="text-xl font-display font-medium text-text-secondary">/ 100</span>
             </div>
             <p className="text-sm font-sans text-text-secondary">
               Top 15% of users in your target role.
             </p>
           </div>
           
           <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <div className="bg-surface-muted rounded-xl p-4 flex-1 md:w-48">
                <h4 className="text-xs font-sans font-semibold text-text-secondary uppercase tracking-wider mb-1">Strongest</h4>
                <p className="font-display font-semibold text-text-primary">Communication (90)</p>
             </div>
             <div className="bg-surface-muted rounded-xl p-4 flex-1 md:w-48">
                <h4 className="text-xs font-sans font-semibold text-text-secondary uppercase tracking-wider mb-1">Needs Focus</h4>
                <p className="font-display font-semibold text-text-primary">DevOps (55)</p>
             </div>
           </div>
           
           <div className="absolute right-0 bottom-0 h-64 w-64 bg-dashboard-metricHighlight/20 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />
        </div>
      </section>

      {/* Category Scores */}
      <section>
        <SectionHeader title="Skill Categories" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg text-white", cat.color)}>
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-text-primary">{cat.name}</h3>
                </div>
                <span className="font-display font-bold text-lg text-text-primary">{cat.score}</span>
              </div>
              
              <div className="h-2 w-full bg-surface-muted rounded-full overflow-hidden">
                <div 
                  className={cn("h-full rounded-full transition-all duration-1000", cat.color)}
                  style={{ width: `${cat.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Improvements */}
      <section>
        <SectionHeader title="Recommended Improvements" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <Link href={ROUTES.ROADMAPS} className="group p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card hover:shadow-md hover:border-text-primary/20 transition-all flex items-center justify-between">
              <div>
                 <h4 className="font-display font-semibold text-text-primary mb-1">Docker & CI/CD Fundamentals</h4>
                 <p className="text-sm font-sans text-text-secondary">Improve your DevOps score</p>
              </div>
              <ArrowRight className="h-5 w-5 text-text-muted group-hover:text-text-primary transition-colors group-hover:translate-x-1" />
           </Link>
           <Link href={ROUTES.INTERVIEWS} className="group p-6 rounded-[var(--card-radius)] border border-dashboard-cardBorder bg-dashboard-card hover:shadow-md hover:border-text-primary/20 transition-all flex items-center justify-between">
              <div>
                 <h4 className="font-display font-semibold text-text-primary mb-1">System Design Mock Interview</h4>
                 <p className="text-sm font-sans text-text-secondary">Target your backend gaps</p>
              </div>
              <ArrowRight className="h-5 w-5 text-text-muted group-hover:text-text-primary transition-colors group-hover:translate-x-1" />
           </Link>
        </div>
      </section>

    </div>
  );
}
