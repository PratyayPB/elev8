"use client";

import { ParsedResume } from "../../types";

interface ResumePreviewProps {
  parsedResume: ParsedResume;
}

export function ResumePreview({ parsedResume }: ResumePreviewProps) {
  const { personalInformation, summary, skills, experience, projects, education } = parsedResume;

  return (
    <div className="bg-gray-50 dark:bg-gray-900/60 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 font-sans text-gray-800 dark:text-gray-200 space-y-6 text-sm">
      {/* Header Info */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {personalInformation.name || "Candidate Name"}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
          {personalInformation.email && <span>{personalInformation.email}</span>}
          {personalInformation.phone && <span>{personalInformation.phone}</span>}
          {personalInformation.location && <span>{personalInformation.location}</span>}
          {personalInformation.linkedin && <span>{personalInformation.linkedin}</span>}
          {personalInformation.github && <span>{personalInformation.github}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="space-y-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Professional Summary</h4>
          <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">{summary}</p>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="space-y-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Skills</h4>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Experience</h4>
          {experience.map((exp, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between font-semibold text-xs text-gray-900 dark:text-white">
                <span>{exp.role} — {exp.company}</span>
                <span className="text-gray-400">{exp.startDate} - {exp.endDate || "Present"}</span>
              </div>
              <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-400 space-y-0.5 pl-1">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Projects</h4>
          {projects.map((proj, idx) => (
            <div key={idx} className="space-y-1">
              <h5 className="font-semibold text-xs text-gray-900 dark:text-white">{proj.title}</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">{proj.description}</p>
              {proj.technologies.length > 0 && (
                <p className="text-[11px] text-gray-400">Tech: {proj.technologies.join(", ")}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Education</h4>
          {education.map((edu, idx) => (
            <div key={idx} className="flex justify-between text-xs text-gray-700 dark:text-gray-300 font-medium">
              <span>{edu.degree} — {edu.institution}</span>
              <span className="text-gray-400">{edu.graduationDate}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
