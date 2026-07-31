import { Flame, Award, BarChart2 } from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-container-max mx-auto">
      <div className="bg-white border border-[#E6E6E6] rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-sm space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Real-time Telemetry</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Analytics &amp; Insights
          </h2>
          <p className="text-base sm:text-lg text-[#605F5F]">
            Continuous data tracking empowering you to measure your growth with mathematical precision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Column Stack */}
          <div className="col-span-1 flex flex-col gap-6">
            {/* Widget 1: Score Gauge */}
            <div className="bg-[#F4F2EE] border border-[#E6E6E6] rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#605F5F] uppercase">Score Gauge</span>
                <Award className="w-4 h-4 text-black" />
              </div>
              <div className="text-center py-2">
                <span className="text-4xl font-extrabold text-black">94.8</span>
                <span className="text-xs text-[#999999] block mt-1">Percentile Rank</span>
              </div>
              <div className="bg-white px-3 py-1.5 rounded-full text-center text-xs font-medium text-black border border-[#E6E6E6]">
                Top 5% Nationwide
              </div>
            </div>

            {/* Widget 2: Activity Heatmap */}
            <div className="bg-[#F4F2EE] border border-[#E6E6E6] rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#605F5F] uppercase">Streak &amp; Prep</span>
                <Flame className="w-4 h-4 text-[#E83043]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-black">14 Days</div>
                <p className="text-xs text-[#605F5F] mt-1">Consistent Daily Practice</p>
              </div>
              <div className="grid grid-cols-7 gap-1 pt-2">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 rounded-sm ${
                      i > 10 ? "bg-[#84E6F6]" : i > 5 ? "bg-[#F7A49E]" : "bg-black"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Large Growth Trend Chart Placeholder Container */}
          <div className="col-span-1 md:col-span-3 bg-[#F4F2EE] border border-[#E6E6E6] rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[340px]">
            <div className="flex justify-between items-center pb-4 border-b border-[#E6E6E6]">
              <div>
                <h4 className="text-lg font-bold text-black flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-black" />
                  <span>Growth Velocity &amp; Market Alignment</span>
                </h4>
                <p className="text-xs text-[#605F5F] mt-0.5">3-Month Skill Competency Trajectory vs Market Demands</p>
              </div>
              <span className="bg-[#84E6F6] text-black text-xs font-bold px-3 py-1 rounded-full border border-[#52d6ec]">
                +38% Velocity
              </span>
            </div>

            {/* Mock Chart Visual Bars */}
            <div className="flex items-end justify-between gap-2 md:gap-4 h-48 pt-6 pb-2 px-4">
              {[35, 42, 50, 64, 58, 72, 80, 88, 94].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <div
                    style={{ height: `${val}%` }}
                    className="w-full bg-black group-hover:bg-[#84E6F6] rounded-t-md transition-all duration-300 relative"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-black bg-white px-1.5 py-0.5 rounded border border-[#E6E6E6]">
                      {val}%
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#999999]">W{idx + 1}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#E6E6E6] text-xs text-[#605F5F]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                <span>System Architecture</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#84E6F6]"></span>
                <span>AI Engineering</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F7A49E]"></span>
                <span>Leadership</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
