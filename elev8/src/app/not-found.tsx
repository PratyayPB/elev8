import Link from "next/link";
import { Header, Footer, ChatButton } from "@/components/landing";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#84E6F6] selection:text-black">
      <Header />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-16 px-4">
        <div className="max-w-2xl w-full text-center space-y-10 relative z-10">
          
          {/* 404 Graphic / Text */}
          <div className="relative inline-block">
            <h1 className="text-[150px] leading-none font-bold tracking-tighter text-black drop-shadow-sm relative z-10">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-coral rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-gold rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black">
              Oops! You've gone off the roadmap.
            </h2>
            <p className="text-lg text-text-secondary max-w-lg mx-auto">
              We can't seem to find the page you're looking for. It might have been moved, deleted, or perhaps it never existed.
            </p>
          </div>

          <div className="pt-8">
            <Link 
              href="/"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-black/90 hover:scale-105 transition-all shadow-md group"
            >
              Return Home
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
}
