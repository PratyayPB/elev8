import { Quote, User } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Elev8 transformed how I look at my skills. Within two months of following the customized roadmap, I landed a Lead Software Architect position at a Tier-1 tech company with a 35% pay increase.",
      name: "Alex Johnson",
      title: "Lead Software Architect",
      company: "Ex-Senior Engineer",
      accent: "bg-[#84E6F6]",
    },
    {
      quote: "The AI interview simulations are scarily accurate. It helped me overcome my presentation anxiety, refine my system design communication, and negotiate a $40k base salary raise.",
      name: "Sarah Chen",
      title: "VP of Product",
      company: "Fintech Leader",
      accent: "bg-[#F7A49E]",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 max-w-container-max mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#999999]">Real Stories</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
          User Success
        </h2>
        <p className="text-lg text-[#605F5F]">
          See how ambitious professionals use Elev8 to reach their highest potential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E6E6E6] rounded-2xl md:rounded-3xl p-8 shadow-sm flex flex-col justify-between relative space-y-6"
          >
            <Quote className="w-10 h-10 text-black/10 absolute top-6 right-6" />

            <p className="text-base sm:text-lg text-[#1A1A1A] italic leading-relaxed relative z-10">
              &quot;{item.quote}&quot;
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-[#E6E6E6]">
              <div className={`w-12 h-12 rounded-full ${item.accent} border border-black/10 flex items-center justify-center font-bold text-black`}>
                <User className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-black text-base">{item.name}</h4>
                <p className="text-xs text-[#605F5F] font-medium">{item.title} • {item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
