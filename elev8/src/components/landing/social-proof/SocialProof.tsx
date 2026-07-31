export function SocialProof() {
  return (
    <section className="bg-[#F4F2EE] border-y border-[#E6E6E6] py-12">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#999999] mb-8">
          Trusted by professionals at top engineering & product teams
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-black tracking-tight">50k+</span>
            <span className="text-xs text-[#605F5F] font-medium mt-1">Active Professionals</span>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-[#E6E6E6]"></div>

          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-black tracking-tight">10k+</span>
            <span className="text-xs text-[#605F5F] font-medium mt-1">Roadmaps Generated</span>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-[#E6E6E6]"></div>

          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-black tracking-tight">98.4%</span>
            <span className="text-xs text-[#605F5F] font-medium mt-1">Interview Pass Rate</span>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-[#E6E6E6]"></div>

          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-black tracking-tight">$35k+</span>
            <span className="text-xs text-[#605F5F] font-medium mt-1">Avg Salary Uplift</span>
          </div>
        </div>
      </div>
    </section>
  );
}
