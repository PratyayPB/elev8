import {
  ContactInfo,
  DateRange,
  Section,
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

// node_modules/jsonresume-theme-architects-portfolio/src/index.jsx
init_esm();
var import_react2 = __toESM(require_react(), 1);

// node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx
init_esm();
var import_react = __toESM(require_react(), 1);
var import_styled_components = __toESM(require_styled_components_cjs(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Layout = import_styled_components.default.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 72px 48px;
  background: #fafaf9;
  font-family: 'Jost', 'Red Hat Display', -apple-system, BlinkMacSystemFont,
    sans-serif;
  color: #1f2937;
  line-height: 1.6;

  @media print {
    padding: 40px;
    background: white;
  }
`;
var Header = import_styled_components.default.header`
  margin-bottom: 56px;
  padding-bottom: 32px;
  border-bottom: 2px solid #d1d5db;
`;
var Name = import_styled_components.default.h1`
  font-size: 48px;
  font-weight: 300;
  color: #111827;
  margin: 0 0 12px 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
var Label = import_styled_components.default.div`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 24px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
var StyledContactInfo = (0, import_styled_components.default)(ContactInfo)`
  font-size: 14px;
  color: #4b5563;

  a {
    font-size: 14px;
    color: #4b5563;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;

    &:hover {
      border-bottom-color: #4b5563;
    }
  }

  span {
    color: #9ca3af;
  }
`;
var Summary = import_styled_components.default.p`
  font-size: 15px;
  line-height: 1.8;
  color: #374151;
  margin: 24px 0 0 0;
  font-weight: 300;
`;
var SectionTitle = import_styled_components.default.h2`
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
  margin: 56px 0 28px 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 1px;
    background: #d1d5db;
  }
`;
var WorkItem = import_styled_components.default.div`
  padding: 28px 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;
var WorkHeader = import_styled_components.default.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  margin-bottom: 12px;
  align-items: baseline;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;
var Position = import_styled_components.default.h3`
  font-size: 18px;
  font-weight: 400;
  color: #111827;
  margin: 0;
  letter-spacing: 0.5px;
`;
var Company = import_styled_components.default.div`
  font-size: 15px;
  color: #6b7280;
  font-weight: 300;
  margin-top: 4px;
`;
var DateText = import_styled_components.default.div`
  font-size: 13px;
  color: #9ca3af;
  font-weight: 300;
  white-space: nowrap;
  letter-spacing: 0.5px;
`;
var WorkSummary = import_styled_components.default.p`
  margin: 12px 0;
  color: #4b5563;
  line-height: 1.8;
  font-size: 14px;
  font-weight: 300;
`;
var Highlights = import_styled_components.default.ul`
  margin: 12px 0 0 0;
  padding-left: 20px;
  list-style-type: none;

  li {
    margin: 8px 0;
    color: #4b5563;
    line-height: 1.8;
    font-size: 14px;
    font-weight: 300;
    position: relative;

    &::before {
      content: '—';
      position: absolute;
      left: -20px;
      color: #6b7280;
    }
  }
`;
var EducationItem = import_styled_components.default.div`
  padding: 20px 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;
var Institution = import_styled_components.default.h3`
  font-size: 16px;
  font-weight: 400;
  color: #111827;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
`;
var Degree = import_styled_components.default.div`
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 6px;
  font-weight: 300;
`;
var EducationDate = import_styled_components.default.div`
  font-size: 13px;
  color: #9ca3af;
  font-weight: 300;
`;
var SkillsGrid = import_styled_components.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
`;
var SkillCategory = import_styled_components.default.div`
  padding: 24px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 2px;
`;
var SkillName = import_styled_components.default.h4`
  font-size: 14px;
  font-weight: 500;
  color: #111827;
  margin: 0 0 10px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
var SkillTags = import_styled_components.default.div`
  font-size: 13px;
  color: #6b7280;
  line-height: 1.7;
  font-weight: 300;
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
    certificates = [],
    publications = [],
    languages = [],
    interests = [],
    references = []
  } = resume;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Name, { children: basics.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 251,
        columnNumber: 9
      }, this),
      basics.label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: basics.label }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 252,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledContactInfo, { basics }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      basics.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Summary, { children: basics.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 254,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 250,
      columnNumber: 7
    }, this),
    work && work.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Experience" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 259,
        columnNumber: 11
      }, this),
      work.map((job, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            job.position && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: job.position }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
              lineNumber: 264,
              columnNumber: 36
            }, this),
            job.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: job.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
              lineNumber: 265,
              columnNumber: 32
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
            lineNumber: 263,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateText, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRange, { startDate: job.startDate, endDate: job.endDate }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
            lineNumber: 268,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
            lineNumber: 267,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 262,
          columnNumber: 15
        }, this),
        job.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: job.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 271,
          columnNumber: 31
        }, this),
        job.highlights && job.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: job.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 275,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 273,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 261,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 258,
      columnNumber: 9
    }, this),
    skills && skills.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Skills" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 286,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillsGrid, { children: skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillCategory, { children: [
        skill.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillName, { children: skill.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 290,
          columnNumber: 32
        }, this),
        skill.keywords && skill.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillTags, { children: skill.keywords.join(", ") }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 292,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 289,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 287,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 285,
      columnNumber: 9
    }, this),
    education && education.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Education" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 302,
        columnNumber: 11
      }, this),
      education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
        edu.institution && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: edu.institution }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 305,
          columnNumber: 35
        }, this),
        (edu.studyType || edu.area) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: edu.studyType && edu.area ? `${edu.studyType} in ${edu.area}` : edu.studyType || edu.area }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 307,
          columnNumber: 17
        }, this),
        (edu.startDate || edu.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationDate, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRange, { startDate: edu.startDate, endDate: edu.endDate }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 315,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 314,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 304,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 301,
      columnNumber: 9
    }, this),
    projects && projects.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Projects" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 325,
        columnNumber: 11
      }, this),
      projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            project.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: project.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
              lineNumber: 330,
              columnNumber: 36
            }, this),
            project.type && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: project.type }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
              lineNumber: 331,
              columnNumber: 36
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
            lineNumber: 329,
            columnNumber: 17
          }, this),
          (project.startDate || project.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateText, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            DateRange,
            {
              startDate: project.startDate,
              endDate: project.endDate
            },
            void 0,
            false,
            {
              fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
              lineNumber: 335,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
            lineNumber: 334,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 328,
          columnNumber: 15
        }, this),
        project.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: project.description }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 343,
          columnNumber: 17
        }, this),
        project.highlights && project.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: project.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 348,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 346,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 327,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 324,
      columnNumber: 9
    }, this),
    volunteer && volunteer.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Volunteer" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 359,
        columnNumber: 11
      }, this),
      volunteer.map((vol, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            vol.position && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: vol.position }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
              lineNumber: 364,
              columnNumber: 36
            }, this),
            vol.organization && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: vol.organization }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
              lineNumber: 365,
              columnNumber: 40
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
            lineNumber: 363,
            columnNumber: 17
          }, this),
          (vol.startDate || vol.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateText, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            DateRange,
            {
              startDate: vol.startDate,
              endDate: vol.endDate
            },
            void 0,
            false,
            {
              fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
              lineNumber: 369,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
            lineNumber: 368,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 362,
          columnNumber: 15
        }, this),
        vol.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: vol.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 376,
          columnNumber: 31
        }, this),
        vol.highlights && vol.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: vol.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 380,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 378,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 361,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 358,
      columnNumber: 9
    }, this),
    awards && awards.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Awards" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 391,
        columnNumber: 11
      }, this),
      awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
        award.title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: award.title }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 394,
          columnNumber: 31
        }, this),
        award.awarder && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: award.awarder }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 395,
          columnNumber: 33
        }, this),
        award.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationDate, { children: award.date }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 396,
          columnNumber: 30
        }, this),
        award.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: award.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 397,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 393,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 390,
      columnNumber: 9
    }, this),
    certificates && certificates.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Certificates" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 405,
        columnNumber: 11
      }, this),
      certificates.map((cert, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
        cert.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: cert.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 408,
          columnNumber: 29
        }, this),
        cert.issuer && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: cert.issuer }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 409,
          columnNumber: 31
        }, this),
        cert.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationDate, { children: cert.date }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 410,
          columnNumber: 29
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 407,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 404,
      columnNumber: 9
    }, this),
    publications && publications.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Publications" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 418,
        columnNumber: 11
      }, this),
      publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
        pub.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: pub.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 421,
          columnNumber: 28
        }, this),
        pub.publisher && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: pub.publisher }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 422,
          columnNumber: 33
        }, this),
        pub.releaseDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationDate, { children: pub.releaseDate }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 424,
          columnNumber: 17
        }, this),
        pub.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: pub.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 426,
          columnNumber: 31
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 420,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 417,
      columnNumber: 9
    }, this),
    languages && languages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Languages" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 434,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillsGrid, { children: languages.map((lang, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillCategory, { children: [
        lang.language && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillName, { children: lang.language }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 438,
          columnNumber: 35
        }, this),
        lang.fluency && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillTags, { children: lang.fluency }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 439,
          columnNumber: 34
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 437,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 435,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 433,
      columnNumber: 9
    }, this),
    interests && interests.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "Interests" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 448,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillsGrid, { children: interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillCategory, { children: [
        interest.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillName, { children: interest.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 452,
          columnNumber: 35
        }, this),
        interest.keywords && interest.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillTags, { children: interest.keywords.join(", ") }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 454,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 451,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 449,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 447,
      columnNumber: 9
    }, this),
    references && references.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionTitle, { children: "References" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 464,
        columnNumber: 11
      }, this),
      references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
        ref.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: ref.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 467,
          columnNumber: 28
        }, this),
        ref.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: ref.reference }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
          lineNumber: 468,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
        lineNumber: 466,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
      lineNumber: 463,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-architects-portfolio/src/Resume.jsx",
    lineNumber: 249,
    columnNumber: 5
  }, this);
}
__name(Resume, "Resume");
var Resume_default = Resume;

// node_modules/jsonresume-theme-architects-portfolio/src/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function render(resume) {
  return renderResumeDocument(/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Resume_default, { resume }, void 0, false, {
    fileName: "node_modules/jsonresume-theme-architects-portfolio/src/index.jsx",
    lineNumber: 6,
    columnNumber: 31
  }, this), {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&family=Red+Hat+Display:wght@300;400;500&display=swap"
    ],
    headAfterStyles: `<style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
    }
    @media print {
      body {
        background: white;
      }
      @page {
        margin: 0.5in;
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
//# sourceMappingURL=src-U635VDGZ.mjs.map
