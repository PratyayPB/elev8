const fs = require('fs');
const path = require('path');

const root = path.resolve('d:/Courses/Web Dev/Projects/Portfolio/elev8');

const ensureFile = (filePath, content = '') => {
  const fullPath = path.join(root, filePath);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content);
    console.log(`Created file: ${filePath}`);
  }
};

const ensureDir = (dirPath) => {
  const fullPath = path.join(root, dirPath);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
};

// 1. App Router
const pages = [
  '/',
  '(sign-in)',
  '(sign-up)',
  '/dashboard',
  '/career-assessment',
  '/career-guidance',
  '/roadmaps',
  '/resume',
  '/interview',
  '/progress',
  '/pricing',
  '/settings',
];
pages.forEach(p => {
  const compName = p.replace(/[^a-zA-Z]/g, '') + 'Page';
  const name = compName.charAt(0).toUpperCase() + compName.slice(1);
  ensureFile(`src/app/${p === '/' ? '' : p + '/'}page.tsx`, `export default function ${name || 'HomePage'}() {\n  return <div>${name || 'Home'}</div>;\n}\n`);
});

// 2. Shared Components
const compFolders = [
  'layout', 'navigation', 'landing', 'dashboard', 'cards', 'charts', 
  'forms', 'dialogs', 'feedback', 'animations', 'shared', 'career', 
  'roadmaps', 'resume', 'interview', 'progress', 'ui'
];
compFolders.forEach(f => {
  ensureFile(`src/components/${f}/index.ts`, `// Export ${f} components\n`);
});

// 3. Features
const featureFolders = [
  'career-assessment', 'career-guidance', 'roadmaps', 'resume', 
  'interview', 'progress', 'dashboard'
];
featureFolders.forEach(f => {
  ['components', 'hooks', 'services'].forEach(sub => {
    ensureDir(`src/features/${f}/${sub}`);
  });
  ['types.ts', 'constants.ts', 'utils.ts', 'index.ts'].forEach(file => {
    ensureFile(`src/features/${f}/${file}`, `// ${f} ${file}\n`);
  });
});

// 4. Shared Services
const services = [
  'ai', 'career', 'dashboard', 'roadmaps', 'resume', 
  'interview', 'analytics', 'storage', 'user'
];
services.forEach(s => {
  ensureFile(`src/services/${s}/index.ts`, `export class ${s.charAt(0).toUpperCase() + s.slice(1)}Service {}\n`);
});

// 5. Shared Hooks
const hooks = [
  'use-mobile.ts', 'use-user.ts', 'use-theme.ts', 
  'use-local-storage.ts', 'use-api.ts', 'use-debounce.ts'
];
hooks.forEach(h => {
  const name = h.replace('.ts', '').replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  ensureFile(`src/hooks/${h}`, `export const ${name} = () => {};\n`);
});

// 6. Zustand Stores
const stores = [
  'user', 'career', 'roadmap', 'resume', 
  'interview', 'dashboard', 'progress'
];
stores.forEach(s => {
  ensureFile(`src/store/${s}.store.ts`, `import { create } from 'zustand';\n\nexport const use${s.charAt(0).toUpperCase() + s.slice(1)}Store = create(() => ({}));\n`);
});

// 7. Providers
const providers = [
  'ThemeProvider', 'QueryProvider', 'ToastProvider', 'ClerkProvider'
];
providers.forEach(p => {
  const kebab = p.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase().replace(/^-/, '');
  ensureFile(`src/providers/${kebab}.tsx`, `export function ${p}({ children }: { children: React.ReactNode }) {\n  return <>{children}</>;\n}\n`);
});

// 8. Utilities
const utils = ['helpers', 'format', 'validation', 'dates', 'storage'];
utils.forEach(u => ensureFile(`src/utils/${u}.ts`, `// ${u} utils\n`));

// 9. Constants
const constants = ['routes', 'navigation', 'pricing', 'career', 'roadmap', 'resume'];
constants.forEach(c => ensureFile(`src/constants/${c}.ts`, `// ${c} constants\n`));

// 10. Types
const types = ['career', 'roadmap', 'resume', 'interview', 'dashboard', 'common', 'api'];
types.forEach(t => ensureFile(`src/types/${t}.ts`, `// ${t} types\n`));

// 11. Configuration
const configFiles = ['site', 'env', 'auth', 'ai', 'dashboard'];
configFiles.forEach(c => ensureFile(`src/config/${c}.ts`, `// ${c} config\n`));

// 12. Library
const libs = ['prisma', 'db', 'auth', 'openai', 'trigger', 'uploadthing', 'utils'];
libs.forEach(l => ensureFile(`src/lib/${l}.ts`, `// ${l} lib\n`));

// 13. Database
ensureDir('prisma/migrations');
ensureFile('prisma/schema.prisma', '// schema\n');
ensureFile('prisma/seed.ts', '// seed\n');

// 14. Public Assets
['images', 'logos', 'avatars', 'icons', 'illustrations'].forEach(a => ensureDir(`public/${a}`));

// 15. Documentation
const docs = [
  'README.md', 'PROJECT_OVERVIEW.md', 'ARCHITECTURE.md', 
  'CONTRIBUTING.md', 'CHANGELOG.md', 'ROADMAP.md', 'LICENSE', '.env.example'
];
docs.forEach(d => ensureFile(d, `# ${d}\n`));

// 16. Specs Directory
const specs = [
  'phase-01-project-setup.md', 'phase-02-landing-page.md', 
  'phase-03-authentication.md', 'phase-04-dashboard.md', 
  'phase-05-career-assessment.md', 'phase-06-career-guidance.md', 
  'phase-07-roadmaps.md', 'phase-08-resume.md', 
  'phase-09-interview.md', 'phase-10-progress.md'
];
specs.forEach(s => {
  const heading = s.replace('.md', '').replace(/-/g, ' ');
  ensureFile(`specs/${s}`, `# ${heading}\n`);
});

console.log('Setup script finished.');
