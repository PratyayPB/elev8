import React from "react";
import { BuilderResumeArtifact } from "../../types";

interface MinimalTemplateProps {
  artifact: BuilderResumeArtifact;
}

export function MinimalTemplate({ artifact }: MinimalTemplateProps) {
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
    <div className="w-full bg-white text-zinc-800 p-10 font-sans text-[11px] leading-relaxed max-w-[800px] mx-auto shadow-sm print:shadow-none print:p-0 print:max-w-none">
      {/* Minimal Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-light tracking-tight text-zinc-900 mb-2">
          {pi.fullName || "Your Name"}
        </h1>
        {contactItems.length > 0 && (
          <p className="text-[10px] text-zinc-500 font-light tracking-wide space-x-2">
            {contactItems.map((item, idx) => (
              <span key={idx}>
                {item}
                {idx < contactItems.length - 1 && <span className="ml-2 text-zinc-300">/</span>}
              </span>
            ))}
          </p>
        )}
      </header>

      {/* Summary */}
      {professionalSummary && (
        <section className="mb-6">
          <h2 className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            Summary
          </h2>
          <p className="text-zinc-700 font-light leading-relaxed whitespace-pre-wrap">
            {professionalSummary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-3">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <div className="sm:col-span-3 text-[10px] text-zinc-400 font-light">
                  {exp.startDate} {exp.startDate && (exp.endDate || exp.currentlyWorking) ? "—" : ""} {exp.currentlyWorking ? "Present" : exp.endDate}
                </div>
                <div className="sm:col-span-9">
                  <div className="font-normal text-zinc-900">
                    <span className="font-medium">{exp.jobTitle}</span>
                    {exp.company && <span className="text-zinc-500">, {exp.company}</span>}
                  </div>
                  {exp.description && (
                    <p className="text-zinc-600 font-light mt-1 whitespace-pre-wrap">{exp.description}</p>
                  )}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc pl-4 mt-1.5 space-y-0.5 text-zinc-600 font-light text-[10.5px]">
                      {exp.achievements.filter(Boolean).map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-3">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <div className="sm:col-span-3 text-[10px] text-zinc-400 font-light">
                  {edu.startDate} {edu.startDate && edu.endDate ? "—" : ""} {edu.endDate}
                </div>
                <div className="sm:col-span-9">
                  <div className="font-normal text-zinc-900">
                    <span className="font-medium">{edu.degree || edu.institution}</span>
                    {edu.fieldOfStudy && <span className="text-zinc-500"> in {edu.fieldOfStudy}</span>}
                  </div>
                  <div className="text-[10px] text-zinc-500">{edu.institution}</div>
                  {edu.description && (
                    <p className="text-zinc-600 font-light mt-0.5">{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-3">
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <div className="sm:col-span-3 text-[10px] text-zinc-400 font-light">
                  {proj.startDate} {proj.startDate && proj.endDate ? "—" : ""} {proj.endDate}
                </div>
                <div className="sm:col-span-9">
                  <div className="font-medium text-zinc-900">{proj.name}</div>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <div className="text-[10px] text-zinc-400 font-light mb-0.5">
                      {proj.technologies.join(" / ")}
                    </div>
                  )}
                  {proj.description && (
                    <p className="text-zinc-600 font-light">{proj.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            Skills
          </h2>
          <p className="text-zinc-700 font-light text-[10.5px]">
            {skills.map((s) => s.name).filter(Boolean).join("  •  ")}
          </p>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            Certifications
          </h2>
          <div className="space-y-1 text-zinc-700 font-light">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
                <span>{cert.name} {cert.issuingOrganization && <span className="text-zinc-400">({cert.issuingOrganization})</span>}</span>
                <span className="text-[10px] text-zinc-400">{cert.issueDate}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-2">
            Achievements
          </h2>
          <div className="space-y-1 text-zinc-700 font-light">
            {achievements.map((ach) => (
              <div key={ach.id} className="flex justify-between">
                <span>{ach.title} {ach.description && <span className="text-zinc-500">— {ach.description}</span>}</span>
                <span className="text-[10px] text-zinc-400">{ach.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
