import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-container-max mx-auto text-center relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#84E6F6]/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="bg-white border border-[#E6E6E6] rounded-2xl md:rounded-3xl p-10 md:p-16 shadow-lg max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 bg-[#FEF7AF] text-black px-4 py-1.5 rounded-full text-xs font-semibold border border-[#FECD1A]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Join 50,000+ Professionals</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-tight max-w-2xl mx-auto">
          Ready to Elevate Your Career Trajectory?
        </h2>

        <p className="text-lg text-[#605F5F] max-w-xl mx-auto leading-relaxed">
          Start your diagnostic assessment today and unlock personalized roadmaps, resume optimizations, and AI mock interviews.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/sign-up"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-black/90 transition-all shadow-md"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black border border-[#E6E6E6] px-10 py-4 rounded-full text-base font-semibold hover:bg-[#F4F2EE] transition-all"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
