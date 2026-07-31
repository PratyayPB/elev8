import { Brain, Bot, Route, FileEdit, BarChart3, Mic } from "lucide-react";

export function Features() {
  const featuresList = [
    {
      icon: Brain,
      title: "Assessment",
      description: "Deep-dive into your technical and soft skills with adaptive interactive testing and diagnostic benchmarks.",
      accent: "bg-[#84E6F6]",
    },
    {
      icon: Bot,
      title: "AI Guidance",
      description: "24/7 career coaching tailored to your professional objectives, negotiation tactics, and career decisions.",
      accent: "bg-[#FEF7AF]",
    },
    {
      icon: Route,
      title: "Roadmaps",
      description: "Step-by-step navigation from your current role to your dream position with structured milestone tracking.",
      accent: "bg-[#F7A49E]",
    },
    {
      icon: FileEdit,
      title: "Resume Builder",
      description: "Craft high-impact resumes tailored to targeted job descriptions using AI-optimized achievement bullets.",
      accent: "bg-[#84E6F6]",
    },
    {
      icon: BarChart3,
      title: "ATS Scorer",
      description: "Ensure your application clears automated applicant tracking systems with instant breakdown reports.",
      accent: "bg-[#FECD1A]",
    },
    {
      icon: Mic,
      title: "Interview Simulation",
      description: "Practice with realistic AI voice/text avatars, receive instant feedback, and refine your delivery under pressure.",
      accent: "bg-[#F7A49E]",
    },
  ];

  return (
    <section id="features" className="bg-[#F4F2EE] border-y border-[#E6E6E6] py-24 px-4 sm:px-6">
      <div className="max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold border border-[#E6E6E6]">
            <span>End-to-End Career Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Powerful Features
          </h2>
          <p className="text-lg text-[#605F5F] leading-relaxed">
            Comprehensive AI-driven tools designed to give you an unfair advantage in today&apos;s competitive job market.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E6E6E6] rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.accent} flex items-center justify-center border border-black/10 shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                  <p className="text-[#605F5F] leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
