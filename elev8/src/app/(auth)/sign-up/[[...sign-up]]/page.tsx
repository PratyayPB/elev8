import type { Metadata } from "next";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Sign Up | Elev8",
};

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-display font-bold text-white mb-2">Sign up</h2>
      <div className="min-h-[340px] w-full flex flex-col">
        <ClerkLoading>
          <div className="flex flex-col gap-4 w-full animate-pulse">
            <div className="h-11 w-full bg-[#222222] rounded-md"></div>
            <div className="h-11 w-full bg-[#222222] rounded-md"></div>
            <div className="flex items-center gap-2 my-2">
              <div className="h-[1px] w-full bg-white/10"></div>
              <div className="w-8 h-3 bg-white/10 rounded-full"></div>
              <div className="h-[1px] w-full bg-white/10"></div>
            </div>
            <div className="h-11 w-full bg-[#222222] rounded-md"></div>
            <div className="h-11 w-full bg-[#222222] rounded-md"></div>
            <div className="h-11 w-full bg-white/80 rounded-md"></div>
          </div>
        </ClerkLoading>
        
        <ClerkLoaded>
          <SignUp 
            forceRedirectUrl="/dashboard" 
            appearance={{
              baseTheme: dark,
              elements: {
                header: "hidden",
                rootBox: "w-full",
                cardBox: "shadow-none",
                card: "bg-transparent shadow-none w-full p-0 gap-4",
                socialButtonsBlockButton: "bg-[#222222] border border-white/5 hover:bg-[#333333] text-white text-sm h-11 shadow-none relative overflow-hidden",
                dividerRow: "my-2",
                dividerText: "text-white/40 text-xs",
                formFieldInput: "bg-[#222222] border-white/5 text-white h-11 focus:border-white/20 focus:ring-0",
                formFieldLabel: "hidden",
                formButtonPrimary: "bg-white text-black hover:bg-white/90 h-11 font-semibold text-sm shadow-none",
                footer: "hidden",
              }
            }} 
          />
        </ClerkLoaded>
      </div>
      <div className="flex flex-col items-center gap-3 mt-4 text-sm">
        <p className="text-white/60">
          Already have an account? <a href="/sign-in" className="text-blue-500 hover:text-blue-400 font-medium transition-colors">Sign in</a>
        </p>
      </div>
    </div>
  );
}
