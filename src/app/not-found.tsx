import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0B0C09] flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Massive 404 Background Outline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span 
          className="text-[50vw] font-display font-bold leading-none select-none tracking-tighter"
          style={{ 
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)', 
            WebkitTextFillColor: 'transparent',
            color: 'transparent' 
          }}
        >
          404
        </span>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-8">
        <Image 
          src="/icons/robot-outline-in-a-circle-svgrepo-com.svg" 
          alt="404 Robot Icon" 
          width={56} 
          height={56} 
          className="mb-6 opacity-80" 
        />
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
          Page not found.
        </h1>
        
        <p className="text-white/70 text-sm md:text-base max-w-[280px] sm:max-w-xs mx-auto mb-10 leading-relaxed">
          This page does not exist, please head back home and try again.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors shadow-lg"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
