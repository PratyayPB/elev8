import { Zap, Target, TrendingUp, Award } from "lucide-react";

export function About() {
  const highlights = [
    {
      title: "Personalized Insight",
      description: "Data-driven analysis tailored to your specific background, skills, and target seniority level.",
      icon: Target,
      bgColor: "bg-[#84E6F6]",
    },
    {
      title: "Real-time Adaptation",
      description: "Dynamic roadmaps that adjust continuously as industry trends and hiring requirements evolve.",
      icon: TrendingUp,
      bgColor: "bg-[#F7A49E]",
    },
    {
      title: "Scalable Learning",
      description: "From entry-level transitions to C-suite executive positioning, full-spectrum support.",
      icon: Zap,
      bgColor: "bg-[#FEF7AF]",
    },
    {
      title: "Objective Evaluation",
      description: "Bias-free skill assessment using advanced AI scoring benchmarks derived from real hiring panels.",
      icon: Award,
      bgColor: "bg-[#FECD1A]",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Mock Illustration / Visual Showcase */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-[#E6E6E6] p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E6E6E6]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs font-mono text-[#999999]">career-matrix.v2.ai</span>
          </div>

          <div className="space-y-4">
            <div className="bg-[#F4F2EE] p-4 rounded-xl border border-[#E6E6E6]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-[#605F5F]">Market Competency Index</span>
                <span className="text-xs font-bold text-black bg-[#84E6F6] px-2 py-0.5 rounded-full">Top 2%</span>
              </div>
              <p className="text-sm text-[#605F5F]">AI analyzed 14,000+ postings. Your competitive edge is high in distributed systems.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#E6E6E6]">
                <span className="text-xs text-[#999999]">Resume Impact</span>
                <div className="text-2xl font-bold text-black mt-1">96.8/100</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E6E6E6]">
                <span className="text-xs text-[#999999]">Interview Score</span>
                <div className="text-2xl font-bold text-black mt-1">4.9 / 5.0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Bullet Features */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">The Elev8 Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight mt-2">
              Why Elev8?
            </h2>
          </div>

          <div className="space-y-6">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 shadow-sm border border-black/10 mt-1`}>
                    <IconComponent className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                    <p className="text-[#605F5F] leading-relaxed text-sm sm:text-base mt-1">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
