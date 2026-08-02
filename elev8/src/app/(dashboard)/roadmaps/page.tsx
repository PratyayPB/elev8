import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmaps | Elev8",
};

export default function RoadmapsPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
            <Map className="w-6 h-6 text-black" />
            Career Roadmaps
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Build and follow step-by-step personalized learning paths for your career.
          </p>
        </div>

        <Link
          href="/roadmaps/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white text-xs font-semibold hover:bg-black/90 transition-all shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Create New Roadmap
        </Link>
      </div>

      <div className="border border-dashed border-gray-300 rounded-2xl p-12 text-center bg-gray-50/50">
        <Map className="w-10 h-10 text-gray-400 mx-auto mb-3" />
        <h3 className="text-sm font-semibold text-gray-900">No Roadmaps Created Yet</h3>
        <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto mb-4">
          Click below to launch the Roadmap Generator Wizard and configure your learning path.
        </p>
        <Link
          href="/roadmaps/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white text-xs font-semibold hover:bg-black/90 transition-all"
        >
          Start Roadmap Generator
        </Link>
      </div>
    </div>
  );
}
