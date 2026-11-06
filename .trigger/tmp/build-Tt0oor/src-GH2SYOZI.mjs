import {
  ContactInfo,
  DateRange,
  Section,
  SectionTitle,
  renderResumeDocument,
  require_jsx_dev_runtime,
  require_styled_components_cjs
} from "./chunk-F5V7KJFG.mjs";
import "./chunk-3KD33LUC.mjs";
import {
  require_react
} from "./chunk-ZPESTPYW.mjs";
import {
  __name,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/jsonresume-theme-government-standard/src/index.jsx
init_esm();

// node_modules/jsonresume-theme-government-standard/src/Resume.jsx
init_esm();
var import_react5 = __toESM(require_react(), 1);
var import_styled_components = __toESM(require_styled_components_cjs(), 1);

// node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx
init_esm();
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function WorkSection({ work }) {
  if (!work?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Professional Experience" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    work.map((job, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: job.position }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        job.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: job.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
          lineNumber: 24,
          columnNumber: 26
        }, this),
        (job.startDate || job.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateText, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRange, { startDate: job.startDate, endDate: job.endDate }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
          lineNumber: 27,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
          lineNumber: 26,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      job.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: job.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
        lineNumber: 31,
        columnNumber: 27
      }, this),
      job.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: job.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/WorkSection.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
__name(WorkSection, "WorkSection");

// node_modules/jsonresume-theme-government-standard/src/components/EducationSection.jsx
init_esm();
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function EducationSection({ education }) {
  if (!education?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StyledSectionTitle, { children: "Education" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/EducationSection.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EducationItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Institution, { children: edu.institution }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/EducationSection.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Degree, { children: [
        edu.studyType,
        " in ",
        edu.area,
        edu.score && ` - ${edu.score}`
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/EducationSection.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      (edu.startDate || edu.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EducationDate, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DateRange, { startDate: edu.startDate, endDate: edu.endDate }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/EducationSection.jsx",
        lineNumber: 26,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/EducationSection.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/EducationSection.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/EducationSection.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
__name(EducationSection, "EducationSection");

// node_modules/jsonresume-theme-government-standard/src/components/SkillsSection.jsx
init_esm();
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
function SkillsSection({ skills }) {
  if (!skills?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StyledSectionTitle, { children: "Professional Skills" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/SkillsSection.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SkillsList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SkillName, { children: [
        skill.name,
        ":"
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/SkillsSection.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      " ",
      skill.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SkillTags, { children: skill.keywords.join(", ") }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/SkillsSection.jsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/SkillsSection.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/SkillsSection.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
__name(SkillsSection, "SkillsSection");

// node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx
init_esm();
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
function ProjectsSection({ projects }) {
  if (!projects?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StyledSectionTitle, { children: "Projects" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(WorkItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Position, { children: project.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      project.description && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(WorkSummary, { children: project.description }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      project.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Highlights, { children: project.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: highlight }, i, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
__name(ProjectsSection, "ProjectsSection");
function VolunteerSection({ volunteer }) {
  if (!volunteer?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StyledSectionTitle, { children: "Volunteer Experience" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    volunteer.map((vol, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(WorkItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(WorkHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Position, { children: vol.position }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        vol.organization && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Company, { children: vol.organization }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
          lineNumber: 55,
          columnNumber: 34
        }, this),
        (vol.startDate || vol.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DateText, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DateRange, { startDate: vol.startDate, endDate: vol.endDate }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
          lineNumber: 58,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
          lineNumber: 57,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      vol.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(WorkSummary, { children: vol.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 62,
        columnNumber: 27
      }, this),
      vol.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Highlights, { children: vol.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: highlight }, i, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 66,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 52,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
__name(VolunteerSection, "VolunteerSection");
function AwardsSection({ awards }) {
  if (!awards?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StyledSectionTitle, { children: "Awards and Honors" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemTitle, { children: award.title }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      award.awarder && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: [
        "Awarded by: ",
        award.awarder
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      award.date && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: [
        "Date: ",
        award.date
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 88,
        columnNumber: 26
      }, this),
      award.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: award.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 89,
        columnNumber: 29
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 83,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
__name(AwardsSection, "AwardsSection");
function PublicationsSection({ publications }) {
  if (!publications?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StyledSectionTitle, { children: "Publications" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemTitle, { children: pub.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      pub.publisher && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: [
        "Publisher: ",
        pub.publisher
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 106,
        columnNumber: 13
      }, this),
      pub.releaseDate && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: [
        "Published: ",
        pub.releaseDate
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      pub.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: pub.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 111,
        columnNumber: 27
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 103,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
__name(PublicationsSection, "PublicationsSection");
function CertificatesSection({ certificates }) {
  if (!certificates?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StyledSectionTitle, { children: "Certifications" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    certificates.map((cert, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemTitle, { children: cert.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      cert.issuer && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: [
        "Issuer: ",
        cert.issuer
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 127,
        columnNumber: 27
      }, this),
      cert.date && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: [
        "Date: ",
        cert.date
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 128,
        columnNumber: 25
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 125,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}
__name(CertificatesSection, "CertificatesSection");
function LanguagesSection({ languages }) {
  if (!languages?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StyledSectionTitle, { children: "Languages" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    languages.map((lang, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SkillsList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SkillName, { children: [
        lang.language,
        ":"
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      " ",
      lang.fluency && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SkillTags, { children: lang.fluency }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 144,
        columnNumber: 28
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 142,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
__name(LanguagesSection, "LanguagesSection");
function InterestsSection({ interests }) {
  if (!interests?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StyledSectionTitle, { children: "Professional Interests" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SkillsList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SkillName, { children: interest.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 159,
        columnNumber: 11
      }, this),
      interest.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        ": ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SkillTags, { children: interest.keywords.join(", ") }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
          lineNumber: 162,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 161,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 158,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
    lineNumber: 155,
    columnNumber: 5
  }, this);
}
__name(InterestsSection, "InterestsSection");
function ReferencesSection({ references }) {
  if (!references?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StyledSectionTitle, { children: "References" }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemTitle, { children: ref.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 179,
        columnNumber: 11
      }, this),
      ref.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItemText, { children: ref.reference }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
        lineNumber: 180,
        columnNumber: 29
      }, this)
    ] }, index, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
      lineNumber: 178,
      columnNumber: 9
    }, this))
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/components/OtherSections.jsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}
__name(ReferencesSection, "ReferencesSection");

// node_modules/jsonresume-theme-government-standard/src/Resume.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var Layout = import_styled_components.default.div`
  max-width: 8.5in;
  margin: 0 auto;
  padding: 1in;
  background: #ffffff;
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 12pt;
  color: #000000;
  line-height: 1.4;

  @media print {
    padding: 0;
    margin: 0;
  }
`;
var Header = import_styled_components.default.header`
  text-align: center;
  margin-bottom: 24pt;
  padding-bottom: 12pt;
  border-bottom: 2pt solid #000000;
`;
var Name = import_styled_components.default.h1`
  font-size: 18pt;
  font-weight: bold;
  color: #000000;
  margin: 0 0 6pt 0;
  letter-spacing: 0;
  text-transform: uppercase;
  font-family: 'Times New Roman', Georgia, serif;
`;
var Label = import_styled_components.default.div`
  font-size: 12pt;
  color: #000000;
  margin-bottom: 8pt;
  font-weight: normal;
  font-family: 'Times New Roman', Georgia, serif;
`;
var StyledContactInfo = (0, import_styled_components.default)(ContactInfo)`
  font-size: 11pt;
  text-align: center;

  a {
    font-size: 11pt;
    color: #000000;
    text-decoration: underline;
  }
`;
var Summary = import_styled_components.default.p`
  font-size: 12pt;
  line-height: 1.4;
  color: #000000;
  margin: 12pt 0 0 0;
  text-align: left;
  font-family: 'Times New Roman', Georgia, serif;
`;
var StyledSectionTitle = (0, import_styled_components.default)(SectionTitle)`
  font-size: 14pt;
  font-weight: bold;
  color: #000000;
  margin: 18pt 0 12pt 0;
  padding-bottom: 4pt;
  border-bottom: 1pt solid #000000;
  text-transform: uppercase;
  font-family: 'Times New Roman', Georgia, serif;
`;
var WorkItem = import_styled_components.default.div`
  margin-bottom: 18pt;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }
`;
var WorkHeader = import_styled_components.default.div`
  margin-bottom: 6pt;
`;
var Position = import_styled_components.default.h3`
  font-size: 13pt;
  font-weight: bold;
  color: #000000;
  margin: 0 0 3pt 0;
  font-family: 'Times New Roman', Georgia, serif;
`;
var Company = import_styled_components.default.div`
  font-size: 12pt;
  color: #000000;
  font-weight: normal;
  margin-bottom: 3pt;
  font-family: 'Times New Roman', Georgia, serif;
`;
var DateText = import_styled_components.default.div`
  font-size: 11pt;
  color: #111827;
  font-weight: normal;
  font-style: italic;
  font-family: 'Times New Roman', Georgia, serif;
`;
var WorkSummary = import_styled_components.default.p`
  margin: 6pt 0;
  color: #000000;
  line-height: 1.4;
  font-size: 12pt;
  font-family: 'Times New Roman', Georgia, serif;
`;
var Highlights = import_styled_components.default.ul`
  margin: 6pt 0 0 18pt;
  padding: 0;
  list-style-type: disc;

  li {
    margin: 3pt 0;
    color: #000000;
    line-height: 1.4;
    font-size: 12pt;
    font-family: 'Times New Roman', Georgia, serif;
  }
`;
var EducationItem = import_styled_components.default.div`
  margin-bottom: 12pt;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }
`;
var Institution = import_styled_components.default.h3`
  font-size: 13pt;
  font-weight: bold;
  color: #000000;
  margin: 0 0 3pt 0;
  font-family: 'Times New Roman', Georgia, serif;
`;
var Degree = import_styled_components.default.div`
  font-size: 12pt;
  color: #000000;
  margin-bottom: 3pt;
  font-family: 'Times New Roman', Georgia, serif;
`;
var EducationDate = import_styled_components.default.div`
  font-size: 11pt;
  color: #111827;
  font-style: italic;
  font-family: 'Times New Roman', Georgia, serif;
`;
var SkillsList = import_styled_components.default.div`
  margin-bottom: 12pt;

  &:last-child {
    margin-bottom: 0;
  }
`;
var SkillName = import_styled_components.default.h4`
  font-size: 12pt;
  font-weight: bold;
  color: #000000;
  margin: 0 0 3pt 0;
  display: inline;
  font-family: 'Times New Roman', Georgia, serif;
`;
var SkillTags = import_styled_components.default.span`
  font-size: 12pt;
  color: #000000;
  font-weight: normal;
  font-family: 'Times New Roman', Georgia, serif;
`;
var SimpleList = import_styled_components.default.div`
  margin-bottom: 12pt;

  &:last-child {
    margin-bottom: 0;
  }
`;
var ListItemTitle = import_styled_components.default.h4`
  font-size: 12pt;
  font-weight: bold;
  color: #000000;
  margin: 0 0 3pt 0;
  font-family: 'Times New Roman', Georgia, serif;
`;
var ListItemText = import_styled_components.default.p`
  font-size: 12pt;
  color: #000000;
  margin: 3pt 0;
  line-height: 1.4;
  font-family: 'Times New Roman', Georgia, serif;
`;
function Resume({ resume }) {
  const {
    basics = {},
    work = [],
    education = [],
    skills = [],
    projects = [],
    volunteer = [],
    awards = [],
    publications = [],
    certificates = [],
    languages = [],
    interests = [],
    references = []
  } = resume;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Name, { children: basics.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
        lineNumber: 270,
        columnNumber: 9
      }, this),
      basics.label && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { children: basics.label }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
        lineNumber: 271,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StyledContactInfo, { basics }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
        lineNumber: 272,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 269,
      columnNumber: 7
    }, this),
    basics.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StyledSectionTitle, { children: "Professional Summary" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
        lineNumber: 277,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Summary, { children: basics.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
        lineNumber: 278,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 276,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(WorkSection, { work }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 282,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(EducationSection, { education }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 283,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SkillsSection, { skills }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 284,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProjectsSection, { projects }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 285,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VolunteerSection, { volunteer }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 286,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AwardsSection, { awards }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 287,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PublicationsSection, { publications }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CertificatesSection, { certificates }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 289,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LanguagesSection, { languages }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InterestsSection, { interests }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 291,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ReferencesSection, { references }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
      lineNumber: 292,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/Resume.jsx",
    lineNumber: 268,
    columnNumber: 5
  }, this);
}
__name(Resume, "Resume");
var Resume_default = Resume;

// node_modules/jsonresume-theme-government-standard/src/index.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
function render(resume) {
  return renderResumeDocument(/* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Resume_default, { resume }, void 0, false, {
    fileName: "node_modules/jsonresume-theme-government-standard/src/index.jsx",
    lineNumber: 5,
    columnNumber: 31
  }, this), {
    headAfterStyles: `<style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-family: 'Times New Roman', Georgia, serif;
    }
    @media print {
      body {
        background: white;
      }
      @page {
        margin: 1in;
      }
    }
  </style>`,
    lang: "en",
    dir: "ltr",
    title: `${resume.basics?.name || "Resume"} - Resume`,
    includeTokensCss: false
  });
}
__name(render, "render");
export {
  render
};
//# sourceMappingURL=src-GH2SYOZI.mjs.map
