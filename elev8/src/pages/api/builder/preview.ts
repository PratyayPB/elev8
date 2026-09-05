import type { NextApiRequest, NextApiResponse } from 'next';
import { RESUME_TEMPLATE_REGISTRY } from "@/features/resume-builder/templates/registry";
import { builderToJsonResume } from "@/features/resume-builder/adapters/builder-to-json-resume";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { artifact, template } = req.body;
    
    if (!artifact || !template) {
      return res.status(400).json({ error: "Missing artifact or template" });
    }

    const renderer = RESUME_TEMPLATE_REGISTRY[template];
    if (!renderer) {
      return res.status(404).json({ error: "Template not found" });
    }

    const jsonResume = builderToJsonResume(artifact);
    let html = await renderer(jsonResume);

    // Inject CSS to ensure the body and main container fill the iframe and have a white background,
    // preventing the #f5f5f5 gap at the bottom of the preview.
    const customCss = `
      <style>
        html, body {
          background-color: #ffffff !important;
          min-height: 100vh !important;
          margin: 0 !important;
        }
        /* Target common wrapper classes in jsonresume themes */
        #resume, .resume-container, .container, main, article, #wrapper {
          background-color: #ffffff !important;
          box-shadow: none !important;
          min-height: 100vh !important;
          margin: 0 auto !important;
        }
      </style>
    `;

    if (html.includes('</head>')) {
      html = html.replace('</head>', `${customCss}</head>`);
    } else {
      html = customCss + html;
    }

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error("POST /api/builder/preview error:", error);
    res.status(500).json({ error: "Failed to render preview" });
  }
}
