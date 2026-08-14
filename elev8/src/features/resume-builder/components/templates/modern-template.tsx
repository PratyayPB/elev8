import React from "react";
import { BuilderResumeArtifact } from "../../types";

interface ModernTemplateProps {
  artifact: BuilderResumeArtifact;
}

export function ModernTemplate({ artifact }: ModernTemplateProps) {
  const {
    personalInformation: pi,
    professionalSummary,
    experience = [],
    education = [],
    projects = [],
    skills = [],
    certifications = [],
    achievements = [],
  } = artifact;

  const contactItems = [
    pi.email,
    pi.phone,
    pi.location,
    pi.linkedin,
    pi.github,
    pi.portfolio,
  ].filter(Boolean);

  return (
    <div className="w-full bg-white text-slate-800 p-8 font-sans text-[11px] leading-relaxed max-w-[800px] mx-auto shadow-sm print:shadow-none print:p-0 print:max-w-none">
      {/* Header Accent Bar */}
      <header className="bg-slate-900 text-white p-6 -mx-8 -mt-8 mb-6 rounded-b-xl">
        <h1 className="text-2xl font-black tracking-tight text-white mb-1">
          {pi.fullName || "Your Name"}
        </h1>
        {contactItems.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10.5px] text-slate-300 font-medium">
            {contactItems.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1">
                {item}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Two Column Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Column (8 cols) */}
        <div className="md:col-span-8 space-y-6">
          {/* Summary */}
          {professionalSummary && (
            <section>
              <h2 className="text-[12px] font-bold tracking-wide uppercase text-slate-900 border-l-4 border-indigo-600 pl-2 mb-2">
                About Me
              </h2>
              <p className="text-slate-700 text-[11px] leading-relaxed whitespace-pre-wrap">
                {professionalSummary}
              </p>
            </section>
          )}

          {/* Work Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-[12px] font-bold tracking-wide uppercase text-slate-900 border-l-4 border-indigo-600 pl-2 mb-3">
                Work Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-3 border-l border-slate-200">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-slate-900 text-[12px]">{exp.jobTitle}</h3>
                      <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {exp.startDate} {exp.startDate && (exp.endDate || exp.currentlyWorking) ? "-" : ""} {exp.currentlyWorking ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-600 mb-1">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </div>
                    {exp.description && (
                      <p className="text-slate-700 mb-1.5 whitespace-pre-wrap">{exp.description}</p>
                    )}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[10.5px]">
                        {exp.achievements.filter(Boolean).map((ach, aIdx) => (
                          <li key={aIdx}>{ach}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-[12px] font-bold tracking-wide uppercase text-slate-900 border-l-4 border-indigo-600 pl-2 mb-3">
                Projects
              </h2>
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold text-slate-900">{proj.name}</span>
                      <span className="text-[10px] text-slate-500">
                        {proj.startDate} {proj.startDate && proj.endDate ? "-" : ""} {proj.endDate}
                      </span>
                    </div>
                    {proj.url && (
                      <p className="text-[10px] text-indigo-600 underline mb-1">{proj.url}</p>
                    )}
                    {proj.description && (
                      <p className="text-slate-700 text-[10.5px] mb-1.5">{proj.description}</p>
                    )}
                    {proj.technologies && proj.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.map((t, idx) => (
                          <span key={idx} className="bg-white border border-slate-200 text-slate-700 text-[9.5px] px-1.5 py-0.5 rounded font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Column (4 cols) */}
        <div className="md:col-span-4 space-y-6">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-[12px] font-bold tracking-wide uppercase text-slate-900 border-b-2 border-indigo-600 pb-1 mb-2">
                Skills
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, idx) => (
                  <span
                    key={skill.id || idx}
                    className="bg-indigo-50 border border-indigo-100 text-indigo-900 font-semibold px-2 py-1 rounded-md text-[10px]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-[12px] font-bold tracking-wide uppercase text-slate-900 border-b-2 border-indigo-600 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="font-bold text-slate-900">{edu.degree || edu.institution}</div>
                    <div className="text-[10.5px] text-slate-600">{edu.institution}</div>
                    {edu.fieldOfStudy && (
                      <div className="text-[10px] text-indigo-600 font-medium">{edu.fieldOfStudy}</div>
                    )}
                    <div className="text-[9.5px] text-slate-500 mt-0.5">
                      {edu.startDate} {edu.startDate && edu.endDate ? "-" : ""} {edu.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-[12px] font-bold tracking-wide uppercase text-slate-900 border-b-2 border-indigo-600 pb-1 mb-2">
                Certifications
              </h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <div className="font-semibold text-slate-900">{cert.name}</div>
                    {cert.issuingOrganization && (
                      <div className="text-[10px] text-slate-600">{cert.issuingOrganization}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <section>
              <h2 className="text-[12px] font-bold tracking-wide uppercase text-slate-900 border-b-2 border-indigo-600 pb-1 mb-2">
                Achievements
              </h2>
              <div className="space-y-2">
                {achievements.map((ach) => (
                  <div key={ach.id}>
                    <div className="font-semibold text-slate-900">{ach.title}</div>
                    {ach.description && (
                      <div className="text-[10px] text-slate-600">{ach.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
