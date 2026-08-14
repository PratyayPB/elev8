import React from "react";
import { BuilderResumeArtifact } from "../../types";

interface ClassicTemplateProps {
  artifact: BuilderResumeArtifact;
}

export function ClassicTemplate({ artifact }: ClassicTemplateProps) {
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
    <div className="w-full bg-white text-gray-900 p-8 font-serif text-[11px] leading-relaxed max-w-[800px] mx-auto shadow-sm print:shadow-none print:p-0 print:max-w-none">
      {/* Header */}
      <header className="text-center border-b border-gray-400 pb-4 mb-6">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-gray-900 mb-1">
          {pi.fullName || "Your Name"}
        </h1>
        {contactItems.length > 0 && (
          <p className="text-[10px] text-gray-600 space-x-1 font-sans">
            {contactItems.map((item, idx) => (
              <span key={idx}>
                {item}
                {idx < contactItems.length - 1 && <span className="mx-1 text-gray-400">•</span>}
              </span>
            ))}
          </p>
        )}
      </header>

      {/* Professional Summary */}
      {professionalSummary && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 whitespace-pre-wrap">{professionalSummary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Work Experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-sans">
                  <span className="font-bold text-gray-900 text-[11.5px]">
                    {exp.jobTitle} {exp.company && <span className="font-normal italic">| {exp.company}</span>}
                  </span>
                  <span className="text-[10px] text-gray-600">
                    {exp.startDate} {exp.startDate && (exp.endDate || exp.currentlyWorking) ? "-" : ""} {exp.currentlyWorking ? "Present" : exp.endDate}
                  </span>
                </div>
                {exp.location && (
                  <p className="text-[10px] text-gray-500 italic font-sans mb-1">{exp.location}</p>
                )}
                {exp.description && (
                  <p className="text-gray-700 mb-1 font-serif whitespace-pre-wrap">{exp.description}</p>
                )}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-disc pl-4 space-y-0.5 text-gray-700">
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

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline font-sans">
                  <span className="font-bold text-gray-900">
                    {edu.institution} {edu.degree && <span className="font-normal font-serif">, {edu.degree}</span>} {edu.fieldOfStudy && <span className="font-normal font-serif">in {edu.fieldOfStudy}</span>}
                  </span>
                  <span className="text-[10px] text-gray-600">
                    {edu.startDate} {edu.startDate && edu.endDate ? "-" : ""} {edu.endDate}
                  </span>
                </div>
                {edu.description && (
                  <p className="text-gray-700 font-serif mt-0.5">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          <div className="space-y-2.5">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline font-sans">
                  <span className="font-bold text-gray-900">
                    {proj.name} {proj.url && <span className="font-normal text-[10px] text-blue-800 underline ml-1">({proj.url})</span>}
                  </span>
                  <span className="text-[10px] text-gray-600">
                    {proj.startDate} {proj.startDate && proj.endDate ? "-" : ""} {proj.endDate}
                  </span>
                </div>
                {proj.technologies && proj.technologies.length > 0 && (
                  <p className="text-[10px] text-gray-600 font-sans italic">
                    Technologies: {proj.technologies.join(", ")}
                  </p>
                )}
                {proj.description && (
                  <p className="text-gray-700 font-serif mt-0.5">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <div className="font-sans text-[10.5px] text-gray-800">
            {skills.map((skill, idx) => (
              <span key={skill.id || idx}>
                <span className="font-semibold">{skill.name}</span>
                {skill.category && <span className="text-gray-500 text-[9.5px]"> ({skill.category})</span>}
                {idx < skills.length - 1 && <span className="mx-1 text-gray-400">•</span>}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Certifications
          </h2>
          <div className="space-y-1.5 font-sans">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-gray-900">{cert.name}</span>
                  {cert.issuingOrganization && <span className="text-gray-600"> — {cert.issuingOrganization}</span>}
                </div>
                <span className="text-[10px] text-gray-600">{cert.issueDate}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Honors & Achievements
          </h2>
          <div className="space-y-1.5 font-sans">
            {achievements.map((ach) => (
              <div key={ach.id} className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-gray-900">{ach.title}</span>
                  {ach.description && <span className="text-gray-700 font-serif"> — {ach.description}</span>}
                </div>
                {ach.date && <span className="text-[10px] text-gray-600">{ach.date}</span>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
