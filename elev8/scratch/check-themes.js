const https = require('https');

const themes = [
  "academic-cv-lite", "consultant-polished", "developer-mono", "government-standard",
  "architects-portfolio", "minimalist-grid", "nordic-minimal", "desert-modern",
  "executive-slate", "elegant", "macchiato", "sidebar",
  "creative-studio", "even", "art-deco", "art-school-modern", "brutalist"
];

async function checkTheme(theme) {
  return new Promise((resolve) => {
    https.get(`https://registry.npmjs.org/jsonresume-theme-${theme}`, (res) => {
      resolve({ theme, found: res.statusCode === 200 });
    });
  });
}

async function run() {
  const results = await Promise.all(themes.map(checkTheme));
  for (const r of results) {
    console.log(`${r.theme}: ${r.found ? 'FOUND' : 'NOT FOUND'}`);
  }
}
run();
