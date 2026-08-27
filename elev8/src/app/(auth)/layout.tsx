import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#0B0C09] font-sans p-2 md:p-4">
      {/* Left Column - Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="w-full h-full relative rounded-3xl overflow-hidden bg-zinc-900">
          <Image
            src="/images/landing/bg-gradient.png"
            alt="Elev8 background"
            fill
            className="object-contain -rotate-90 scale-150"
            priority
          />

          {/* Top Left Brand */}
          <div className="absolute top-10 left-10 flex items-center gap-0">
            <Image
              src="/icons/elev8-rocket.png"
              alt="Elev8 Logo"
              width={50}
              height={50}
            />
            <span className="text-xl font-bold text-black tracking-tight">
              Elev8
            </span>
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-12 left-10">
            <h1 className="text-4xl lg:text-[2.75rem] font-display font-bold text-[#ffffff] leading-[1.1] tracking-tight">
              Your personal
              <br />
              career & AI
            </h1>
          </div>
        </div>
      </div>

      {/* Right Column - Auth Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-[400px]">{children}</div>
      </div>
    </div>
  );
}
