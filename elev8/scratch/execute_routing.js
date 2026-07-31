const fs = require('fs');
const path = require('path');

const root = path.resolve('d:/Courses/Web Dev/Projects/Portfolio/elev8');
const appDir = path.join(root, 'src/app');

// Helper to ensure directory exists
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Helper to move file or dir
const moveItem = (srcRel, destRel) => {
  const src = path.join(appDir, srcRel);
  const dest = path.join(appDir, destRel);
  if (fs.existsSync(src)) {
    ensureDir(path.dirname(dest));
    fs.renameSync(src, dest);
    console.log(`Moved ${srcRel} -> ${destRel}`);
  }
};

// Helper to write file if not existing or overwrite if specified
const writeFile = (relPath, content) => {
  const fullPath = path.join(root, relPath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Wrote ${relPath}`);
};

// 1. Move page.tsx to (public)/page.tsx
moveItem('page.tsx', '(public)/page.tsx');

// 2. Move pricing to (public)/pricing
moveItem('pricing', '(public)/pricing');

// 3. Move dashboard routes to (dashboard)/...
const dashRoutes = [
  'dashboard',
  'career-assessment',
  'career-guidance',
  'roadmaps',
  'resume',
  'interview',
  'progress',
  'settings'
];
dashRoutes.forEach(r => moveItem(r, `(dashboard)/${r}`));

// 4. Write Layouts
writeFile('src/app/(public)/layout.tsx', `import { Header, Footer, ChatButton } from "@/components/landing";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-[#84E6F6] selection:text-black">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatButton />
    </div>
  );
}
`);

writeFile('src/app/(auth)/layout.tsx', `export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
`);

writeFile('src/app/(dashboard)/layout.tsx', `export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <aside className="w-full md:w-64 p-4 border-r border-border hidden md:block">
        Sidebar Placeholder
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="p-4 border-b border-border">
          Top Navigation Placeholder
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
`);

// 5. Update (public)/page.tsx without Header/Footer/ChatButton wrapper
writeFile('src/app/(public)/page.tsx', `import type { Metadata } from "next";
import {
  Hero,
  SocialProof,
  About,
  Features,
  HowItWorks,
  ProductShowcase,
  DashboardPreview,
  Gallery,
  Pricing,
  Testimonials,
  FAQ,
  CTA,
  Contact,
} from "@/components/landing";

export const metadata: Metadata = {
  title: "Elev8 - AI-Powered Career Development Platform",
  description: "Accelerate your career with AI guidance, roadmaps, resume scoring, and mock interviews.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <About />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <DashboardPreview />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
`);

// 6. Create public missing pages
const publicPages = ['about', 'contact', 'faq'];
publicPages.forEach(p => {
  const title = p.charAt(0).toUpperCase() + p.slice(1);
  writeFile(`src/app/(public)/${p}/page.tsx`, `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title} | Elev8",
  description: "${title} page for Elev8 career development platform.",
};

export default function ${title}Page() {
  return <div>${title}</div>;
}
`);
});

// Update (public)/pricing/page.tsx with metadata
writeFile('src/app/(public)/pricing/page.tsx', `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Elev8",
  description: "Pricing plans for Elev8 platform.",
};

export default function PricingPage() {
  return <div>Pricing</div>;
}
`);

// 7. Auth missing pages & metadata updates
writeFile('src/app/(auth)/forgot-password/page.tsx', `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Elev8",
};

export default function ForgotPasswordPage() {
  return <div>Forgot Password</div>;
}
`);

writeFile('src/app/(auth)/sign-in/page.tsx', `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Elev8",
};

export default function SignInPage() {
  return <div>Sign In</div>;
}
`);

writeFile('src/app/(auth)/sign-up/page.tsx', `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Elev8",
};

export default function SignUpPage() {
  return <div>Sign Up</div>;
}
`);

// 8. Update Dashboard pages with Metadata
dashRoutes.forEach(r => {
  const parts = r.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1));
  const compName = parts.join('') + 'Page';
  const displayTitle = parts.join(' ');
  
  writeFile(`src/app/(dashboard)/${r}/page.tsx`, `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${displayTitle} | Elev8",
};

export default function ${compName}() {
  return <div>${displayTitle}</div>;
}
`);
});

// 9. Root Fallback / Error Handling files
writeFile('src/app/loading.tsx', `export default function Loading() {
  return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
}
`);

writeFile('src/app/error.tsx', `'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Try again
      </button>
    </div>
  );
}
`);

writeFile('src/app/global-error.tsx', `'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <h2>Global Error</h2>
          <button onClick={() => reset()} className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
`);

writeFile('src/app/not-found.tsx', `import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Return Home
      </Link>
    </div>
  );
}
`);

// 10. Constants
writeFile('src/constants/routes.ts', `export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PRICING: "/pricing",
  CONTACT: "/contact",
  FAQ: "/faq",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  CAREER_ASSESSMENT: "/career-assessment",
  CAREER_GUIDANCE: "/career-guidance",
  ROADMAPS: "/roadmaps",
  RESUME: "/resume",
  INTERVIEW: "/interview",
  PROGRESS: "/progress",
  SETTINGS: "/settings",
} as const;
`);

writeFile('src/constants/navigation.ts', `import { ROUTES } from "./routes";

export const PUBLIC_NAVIGATION = [
  { label: "About", href: ROUTES.ABOUT },
  { label: "Pricing", href: ROUTES.PRICING },
  { label: "Contact", href: ROUTES.CONTACT },
  { label: "FAQ", href: ROUTES.FAQ },
];

export const DASHBOARD_NAVIGATION = [
  { label: "Dashboard", href: ROUTES.DASHBOARD },
  { label: "Career Assessment", href: ROUTES.CAREER_ASSESSMENT },
  { label: "Career Guidance", href: ROUTES.CAREER_GUIDANCE },
  { label: "Roadmaps", href: ROUTES.ROADMAPS },
  { label: "Resume", href: ROUTES.RESUME },
  { label: "Interview", href: ROUTES.INTERVIEW },
  { label: "Progress", href: ROUTES.PROGRESS },
  { label: "Settings", href: ROUTES.SETTINGS },
];
`);

console.log('Routing execution script complete.');
