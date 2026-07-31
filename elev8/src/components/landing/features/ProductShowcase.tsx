import { Activity, Map, Sparkles } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="bg-[#F4F2EE] border-y border-[#E6E6E6]">
      {/* Row 1: Dashboard UI */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 py-20 border-b border-[#E6E6E6] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="bg-white rounded-2xl md:rounded-3xl border border-[#E6E6E6] p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#605F5F] bg-[#84E6F6]/30 px-3 py-1 rounded-full w-fit">
            <Activity className="w-4 h-4 text-black" />
            <span>Progress Analytics</span>
          </div>
          <h4 className="text-xl font-bold text-black">Live Performance Scorecard</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-xs text-[#605F5F]">
              <span>Overall Readiness</span>
              <span className="font-bold text-black">94%</span>
            </div>
            <div className="w-full bg-[#F4F2EE] h-2 rounded-full overflow-hidden">
              <div className="bg-black h-full w-[94%] rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#F4F2EE] p-3 rounded-lg border border-[#E6E6E6]">
                <span className="text-xs text-[#999999]">Resume Match</span>
                <p className="text-lg font-bold text-black">91%</p>
              </div>
              <div className="bg-[#F4F2EE] p-3 rounded-lg border border-[#E6E6E6]">
                <span className="text-xs text-[#999999]">Tech Interview</span>
                <p className="text-lg font-bold text-black">96%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Module 01</span>
          <h3 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Master Your Progress</h3>
          <p className="text-lg text-[#605F5F] leading-relaxed">
            View your career health at a glance with integrated charts, skill trackers, and competitive benchmarks that update dynamically as you complete milestones.
          </p>
        </div>
      </div>

      {/* Row 2: Strategic Pathing (Reversed Layout) */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 py-20 border-b border-[#E6E6E6] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Module 02</span>
          <h3 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Strategic Pathing</h3>
          <p className="text-lg text-[#605F5F] leading-relaxed">
            Every action item is linked directly to a concrete career milestone. No more guesswork in your professional development journey.
          </p>
        </div>

        <div className="order-1 lg:order-2 bg-white rounded-2xl md:rounded-3xl border border-[#E6E6E6] p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#605F5F] bg-[#F7A49E]/30 px-3 py-1 rounded-full w-fit">
            <Map className="w-4 h-4 text-black" />
            <span>Smart Roadmap Engine</span>
          </div>
          <h4 className="text-xl font-bold text-black">Career Trajectory Map</h4>
          <div className="space-y-3 border-l-2 border-[#E6E6E6] pl-4">
            <div className="relative">
              <span className="text-xs font-bold text-black">Milestone 1: Staff System Architecture</span>
              <p className="text-xs text-[#605F5F]">Distributed consensus, Raft protocol & high throughput storage</p>
            </div>
            <div className="relative">
              <span className="text-xs font-bold text-black">Milestone 2: Executive Communication</span>
              <p className="text-xs text-[#605F5F]">Cross-functional leadership alignment & board presentations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Live Simulations */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="bg-white rounded-2xl md:rounded-3xl border border-[#E6E6E6] p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#605F5F] bg-[#FECD1A]/40 px-3 py-1 rounded-full w-fit">
            <Sparkles className="w-4 h-4 text-black" />
            <span>Interactive Simulator</span>
          </div>
          <h4 className="text-xl font-bold text-black">AI Voice & Text Panel</h4>
          <div className="bg-[#F4F2EE] p-4 rounded-xl border border-[#E6E6E6] text-xs font-mono space-y-2">
            <div className="text-black font-semibold">AI Interviewer:</div>
            <div className="text-[#605F5F]">&quot;Walk me through how you handled a critical outage in a microservices deployment.&quot;</div>
            <div className="text-black font-semibold pt-2">Candidate Response Evaluated:</div>
            <div className="text-green-700 bg-green-50 p-2 rounded border border-green-200">
              ✓ STAR Method structure verified (Score: 95/100)
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Module 03</span>
          <h3 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Live Simulations</h3>
          <p className="text-lg text-[#605F5F] leading-relaxed">
            Experience low-stakes practice with high-stakes fidelity. Receive detailed diagnostic feedback reports after every session to perfect your pitch.
          </p>
        </div>
      </div>
    </section>
  );
}
