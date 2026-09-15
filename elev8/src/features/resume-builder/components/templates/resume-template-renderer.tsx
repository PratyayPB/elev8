"use client";

import React, { useState, useEffect } from "react";
import { BuilderResumeArtifact } from "../../types";

interface ResumeTemplateRendererProps {
  artifact: BuilderResumeArtifact;
  template?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildFallbackPreviewHtml(artifact: BuilderResumeArtifact): string {
  const personal = artifact.personalInformation ?? {};
  const fullName = personal.fullName || "Your Name";
  const email = personal.email
    ? `<div>${escapeHtml(personal.email)}</div>`
    : "";
  const location = personal.location
    ? `<div>${escapeHtml(personal.location)}</div>`
    : "";
  const contact = [email, location].filter(Boolean).join("");

  const summary = artifact.professionalSummary
    ? `<p>${escapeHtml(artifact.professionalSummary)}</p>`
    : "";

  const education = artifact.education.length
    ? `<section><h2>Education</h2>${artifact.education
        .map(
          (entry) => `
          <div>
            <strong>${escapeHtml(entry.institution || "Institution")}</strong>
            <div>${escapeHtml(entry.degree || "Degree")}${entry.fieldOfStudy ? `, ${escapeHtml(entry.fieldOfStudy)}` : ""}</div>
          </div>
        `
        )
        .join("")}</section>`
    : "";

  const experience = artifact.experience.length
    ? `<section><h2>Work Experience</h2>${artifact.experience
        .map(
          (entry) => `
          <div>
            <strong>${escapeHtml(entry.jobTitle || "Role")}</strong>
            <div>${escapeHtml(entry.company || "Company")}</div>
            <div>${escapeHtml(entry.description || "")}</div>
          </div>
        `
        )
        .join("")}</section>`
    : "";

  const skills = artifact.skills.length
    ? `<section><h2>Skills</h2><div>${artifact.skills
        .map((skill) => escapeHtml(skill.name || "Skill"))
        .join(" • ")}</div></section>`
    : "";

  const certifications = artifact.certifications.length
    ? `<section><h2>Certifications</h2>${artifact.certifications
        .map(
          (entry) => `
          <div>
            <strong>${escapeHtml(entry.name || "Certification")}</strong>
            <div>${escapeHtml(entry.issuingOrganization || "Issuer")}</div>
          </div>
        `
        )
        .join("")}</section>`
    : "";

  const achievements = artifact.achievements.length
    ? `<section><h2>Achievements</h2>${artifact.achievements
        .map(
          (entry) => `
          <div>
            <strong>${escapeHtml(entry.title || "Achievement")}</strong>
            <div>${escapeHtml(entry.description || "")}</div>
          </div>
        `
        )
        .join("")}</section>`
    : "";

  return `
    <html>
      <body style="margin:0;font-family:Arial,sans-serif;background:#fff;color:#111;line-height:1.5;">
        <div style="max-width:900px;margin:0 auto;padding:36px;">
          <h1 style="margin:0 0 6px;font-size:32px;">${escapeHtml(fullName)}</h1>
          <div style="display:flex;flex-direction:column;gap:2px;color:#374151;">${contact}</div>
          ${summary ? `<div style="margin-top:18px;">${summary}</div>` : ""}
          ${education}
          ${experience}
          ${skills}
          ${certifications}
          ${achievements}
        </div>
      </body>
    </html>
  `;
}

export function ResumeTemplateRenderer({
  artifact,
  template = "academic-cv-lite",
}: ResumeTemplateRendererProps) {
  const [html, setHtml] = useState<string>(() =>
    buildFallbackPreviewHtml(artifact)
  );
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
          setHtml(
            `<div style="padding: 20px; font-family: sans-serif;">Failed to load preview.</div>`
          );
        }
      } catch (err) {
        console.error("Preview fetch error", err);
        setHtml(
          `<div style="padding: 20px; font-family: sans-serif;">Error loading preview.</div>`
        );
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
        srcDoc={html || buildFallbackPreviewHtml(artifact)}
        onLoad={handleIframeLoad}
        style={{ height: `${height}px` }}
        className="w-full border-none block min-h-[1130px]"
        title="Resume Preview"
      />
    </div>
  );
}
