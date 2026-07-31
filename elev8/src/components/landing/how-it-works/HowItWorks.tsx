export function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Create Your Profile",
      description: "Import your LinkedIn URL or upload your current CV to build your baseline AI career profile.",
    },
    {
      num: 2,
      title: "Skills Assessment",
      description: "Complete a targeted 10-minute diagnostic session to measure hard and soft competencies.",
    },
    {
      num: 3,
      title: "Generate Roadmap",
      description: "Receive an individualized growth plan with clear skill acquisition milestones.",
    },
    {
      num: 4,
      title: "Optimize Assets",
      description: "Generate tailored ATS-friendly resumes and cover letters for your target opportunities.",
    },
    {
      num: 5,
      title: "Interview Training",
      description: "Simulate high-stakes technical & behavioral interviews with real-time AI scoring.",
    },
    {
      num: 6,
      title: "Land the Role",
      description: "Execute your job hunt with confidence, backed by AI offer negotiation guidance.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 max-w-container-max mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Simple 6-Step Journey</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
          How It Works
        </h2>
        <p className="text-lg text-[#605F5F]">
          From initial assessment to your dream job offer, Elev8 guides every step.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Connecting Gradient Line */}
        <div className="absolute left-6 md:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#84E6F6] via-[#F7A49E] to-[#FECD1A] z-0"></div>

        <div className="space-y-10 relative z-10">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-6 md:gap-8 items-start group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#E6E6E6] flex items-center justify-center font-bold text-lg md:text-xl text-black shrink-0 shadow-sm group-hover:border-black group-hover:bg-[#84E6F6] transition-all">
                {step.num}
              </div>

              <div className="pt-2 flex-grow bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-all">
                <h3 className="text-lg md:text-xl font-bold text-black mb-1">{step.title}</h3>
                <p className="text-sm md:text-base text-[#605F5F] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
