import Link from "next/link";
import { Sparkles, ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-36 pb-20 px-4 sm:px-6  mx-auto  items-center text-center flex flex-row gap-2">
      <div>
        {/* Main Headline */}
        <h1 className="text-xl sm:text-xl md:text-xl font-bold tracking-tight text-black max-w-4xl leading-[1.1] mb-6">
          Strategy and growth for modern teams
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#605F5F] max-w-2xl leading-relaxed mb-10">
          Leverage generative intelligence to map your career trajectory,
          optimize your professional presence, and ace your next big
          opportunity.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-black/90 transition-all shadow-md hover:shadow-lg"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#dashboard"
            className="inline-flex items-center justify-center gap-2 bg-white text-black border border-[#E6E6E6] px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#EDE9E6]/50 transition-all shadow-sm"
          >
            <Play className="w-4 h-4 fill-current text-black" />
            <span>View Demo</span>
          </a>
        </div>
      </div>

      {/* Hero Dashboard Preview Card */}
      <div
        id="dashboard"
        className=" max-w-3xl bg-white rounded-2xl md:rounded-3xl border border-[#E6E6E6] shadow-xl p-4 md:p-8 overflow-hidden text-left relative group"
      >
        <div className="bg-[#F4F2EE] rounded-xl md:rounded-2xl p-6 border border-[#E6E6E6] space-y-6">
          {/* Mock Dashboard Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#E6E6E6]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#999999]">
                Executive View
              </span>
              <h3 className="text-2xl font-bold text-black mt-0.5">
                Career Readiness Dashboard
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#FEF7AF] text-black text-xs font-semibold px-3 py-1 rounded-full border border-[#FECD1A]">
                Top 5% Candidate
              </span>
              <span className="bg-[#84E6F6] text-black text-xs font-semibold px-3 py-1 rounded-full border border-[#52d6ec]">
                Score: 94/100
              </span>
            </div>
          </div>

          {/* Mock Dashboard Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Widget 1 */}
            <div className="bg-white rounded-xl p-5 border border-[#E6E6E6] flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-[#605F5F]">
                  Skill Gap Analysis
                </span>
                <span className="w-2 h-2 rounded-full bg-[#84E6F6]"></span>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">92% Match</div>
                <p className="text-xs text-[#999999] mt-1">
                  Senior Staff Engineer Profile
                </p>
              </div>
              <div className="w-full bg-[#F4F2EE] h-2 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[92%] rounded-full"></div>
              </div>
            </div>

            {/* Widget 2 */}
            <div className="bg-white rounded-xl p-5 border border-[#E6E6E6] flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-[#605F5F]">
                  ATS Resume Score
                </span>
                <span className="w-2 h-2 rounded-full bg-[#F7A49E]"></span>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">88/100</div>
                <p className="text-xs text-[#999999] mt-1">
                  Optimized for Tier-1 Tech
                </p>
              </div>
              <div className="w-full bg-[#F4F2EE] h-2 rounded-full overflow-hidden">
                <div className="bg-[#F7A49E] h-full w-[88%] rounded-full"></div>
              </div>
            </div>

            {/* Widget 3 */}
            <div className="bg-white rounded-xl p-5 border border-[#E6E6E6] flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-[#605F5F]">
                  Interview Sim Readiness
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FECD1A]"></span>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">4/5 Passed</div>
                <p className="text-xs text-[#999999] mt-1">
                  System Design & Leadership
                </p>
              </div>
              <div className="w-full bg-[#F4F2EE] h-2 rounded-full overflow-hidden">
                <div className="bg-[#FECD1A] h-full w-[80%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
