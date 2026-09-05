"use client";

import React, { useState, useEffect } from "react";
import { BuilderResumeArtifact } from "../../types";

interface ResumeTemplateRendererProps {
  artifact: BuilderResumeArtifact;
  template?: string;
}

export function ResumeTemplateRenderer({
  artifact,
  template = "academic-cv-lite",
}: ResumeTemplateRendererProps) {
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState<number>(1130);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/builder/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ artifact, template }),
        });
        
        if (response.ok) {
          const resultHtml = await response.text();
          setHtml(resultHtml);
        } else {
          setHtml(`<div style="padding: 20px; font-family: sans-serif;">Failed to load preview.</div>`);
        }
      } catch (err) {
        console.error("Preview fetch error", err);
        setHtml(`<div style="padding: 20px; font-family: sans-serif;">Error loading preview.</div>`);
      } finally {
        setLoading(false);
      }
    };

    // Debounce the preview fetch to avoid spamming the API on every keystroke (1200ms)
    const timeoutId = setTimeout(fetchPreview, 1200);
    return () => clearTimeout(timeoutId);
  }, [artifact, template]);

  // Adjust iframe height dynamically to match content height
  const handleIframeLoad = () => {
    if (iframeRef.current && iframeRef.current.contentWindow?.document?.body) {
      try {
        const doc = iframeRef.current.contentWindow.document;
        const docHeight = Math.max(
          doc.body.scrollHeight,
          doc.documentElement.scrollHeight,
          doc.body.offsetHeight,
          doc.documentElement.offsetHeight,
          1130
        );
        setHeight(docHeight);
      } catch (e) {
        // Fallback to default A4 min-height
        setHeight(1130);
      }
    }
  };

  return (
    <div className="relative w-full flex-1 bg-white min-h-[1130px]">
      {loading && (
        <div className="absolute top-2 right-2 bg-black/60 text-white px-2.5 py-1 rounded-md text-xs font-medium z-10 backdrop-blur-sm shadow-sm">
          Updating preview...
        </div>
      )}
      <iframe
        ref={iframeRef}
        srcDoc={html}
        onLoad={handleIframeLoad}
        style={{ height: `${height}px` }}
        className="w-full border-none block min-h-[1130px]"
        title="Resume Preview"
      />
    </div>
  );
}
