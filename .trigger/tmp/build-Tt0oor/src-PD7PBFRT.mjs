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

// node_modules/jsonresume-theme-academic-cv-lite/src/index.jsx
init_esm();
var import_react2 = __toESM(require_react(), 1);

// node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx
init_esm();
var import_react = __toESM(require_react(), 1);
var import_styled_components = __toESM(require_styled_components_cjs(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Layout = import_styled_components.default.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 40px;
  background: #ffffff;
  font-family: 'Merriweather', Georgia, serif;
  font-size: 12pt;
  color: #111827;
  line-height: 1.6;

  @media print {
    padding: 30px;
  }
`;
var Header = import_styled_components.default.header`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #6b7280;
  text-align: center;
`;
var Name = import_styled_components.default.h1`
  font-size: 28pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
`;
var Label = import_styled_components.default.div`
  font-size: 14pt;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 400;
  font-style: italic;
`;
var StyledContactInfo = (0, import_styled_components.default)(ContactInfo)`
  font-size: 11pt;
  color: #1f2937;
  justify-content: center;

  a {
    font-size: 11pt;
    color: #1f2937;
    text-decoration: underline;
  }
`;
var Summary = import_styled_components.default.p`
  font-size: 12pt;
  line-height: 1.6;
  color: #1f2937;
  margin: 20px 0 0 0;
  text-align: left;
`;
var StyledSectionTitle = (0, import_styled_components.default)(SectionTitle)`
  font-size: 16pt;
  font-weight: 700;
  color: #111827;
  margin: 32px 0 16px 0;
  padding-bottom: 6px;
  border-bottom: 2px solid #111827;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
var PublicationItem = import_styled_components.default.div`
  margin-bottom: 20px;
  padding-left: 24px;
  text-indent: -24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var PublicationTitle = import_styled_components.default.span`
  font-weight: 700;
  color: #111827;
`;
var PublicationMeta = import_styled_components.default.span`
  color: #1f2937;
  font-style: italic;
`;
var PublicationDate = import_styled_components.default.span`
  color: #6b7280;
`;
var AwardItem = import_styled_components.default.div`
  margin-bottom: 16px;
  padding-left: 20px;
  border-left: 3px solid #9ca3af;

  &:last-child {
    margin-bottom: 0;
  }
`;
var AwardTitle = import_styled_components.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var AwardAwarder = import_styled_components.default.div`
  font-size: 11pt;
  color: #1f2937;
  font-style: italic;
  margin-bottom: 4px;
`;
var AwardDate = import_styled_components.default.div`
  font-size: 11pt;
  color: #6b7280;
  margin-bottom: 8px;
`;
var AwardSummary = import_styled_components.default.p`
  margin: 0;
  font-size: 11pt;
  color: #1f2937;
  line-height: 1.5;
`;
var WorkItem = import_styled_components.default.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var WorkHeader = import_styled_components.default.div`
  margin-bottom: 8px;
`;
var Position = import_styled_components.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var Company = import_styled_components.default.div`
  font-size: 12pt;
  color: #1f2937;
  font-style: italic;
  margin-bottom: 4px;
`;
var DateText = import_styled_components.default.div`
  font-size: 11pt;
  color: #6b7280;
  margin-bottom: 8px;
`;
var WorkSummary = import_styled_components.default.p`
  margin: 8px 0;
  color: #1f2937;
  line-height: 1.5;
  font-size: 11pt;
`;
var Highlights = import_styled_components.default.ul`
  margin: 8px 0 0 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin: 4px 0;
    color: #1f2937;
    line-height: 1.5;
    font-size: 11pt;
  }
`;
var EducationItem = import_styled_components.default.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var Institution = import_styled_components.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var Degree = import_styled_components.default.div`
  font-size: 12pt;
  color: #1f2937;
  margin-bottom: 4px;
`;
var EducationDate = import_styled_components.default.div`
  font-size: 11pt;
  color: #6b7280;
`;
var SkillsList = import_styled_components.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
var SkillItem = import_styled_components.default.div`
  display: flex;
  gap: 8px;
`;
var SkillName = import_styled_components.default.span`
  font-weight: 700;
  color: #111827;
  font-size: 12pt;
  min-width: 120px;
`;
var SkillKeywords = import_styled_components.default.span`
  color: #1f2937;
  font-size: 11pt;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Name, { children: basics.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 260,
        columnNumber: 9
      }, this),
      basics.label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: basics.label }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 261,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledContactInfo, { basics }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 262,
        columnNumber: 9
      }, this),
      basics.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Summary, { children: basics.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 263,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 259,
      columnNumber: 7
    }, this),
    education?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Education" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 268,
        columnNumber: 11
      }, this),
      education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: edu.institution }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 271,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: [
          edu.studyType,
          " in ",
          edu.area,
          edu.score && ` • ${edu.score}`
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 272,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationDate, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRange, { startDate: edu.startDate, endDate: edu.endDate }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 277,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 276,
          columnNumber: 15
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 270,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 267,
      columnNumber: 9
    }, this),
    publications?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Publications" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 286,
        columnNumber: 11
      }, this),
      publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PublicationItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PublicationTitle, { children: [
          pub.name,
          ". "
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 289,
          columnNumber: 15
        }, this),
        pub.publisher && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PublicationMeta, { children: [
          pub.publisher,
          ". "
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 291,
          columnNumber: 17
        }, this),
        pub.releaseDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PublicationDate, { children: [
          "(",
          pub.releaseDate,
          ")"
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 294,
          columnNumber: 17
        }, this),
        pub.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: pub.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 296,
          columnNumber: 31
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 288,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 285,
      columnNumber: 9
    }, this),
    certificates?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Certificates" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 304,
        columnNumber: 11
      }, this),
      certificates.map((cert, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardTitle, { children: cert.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 307,
          columnNumber: 15
        }, this),
        cert.issuer && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardAwarder, { children: cert.issuer }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 308,
          columnNumber: 31
        }, this),
        cert.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardDate, { children: cert.date }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 309,
          columnNumber: 29
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 306,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 303,
      columnNumber: 9
    }, this),
    awards?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Awards & Honors" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 317,
        columnNumber: 11
      }, this),
      awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardTitle, { children: award.title }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 320,
          columnNumber: 15
        }, this),
        award.awarder && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardAwarder, { children: award.awarder }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 321,
          columnNumber: 33
        }, this),
        award.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardDate, { children: award.date }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 322,
          columnNumber: 30
        }, this),
        award.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwardSummary, { children: award.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 323,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 319,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 316,
      columnNumber: 9
    }, this),
    work?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Professional Experience" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 331,
        columnNumber: 11
      }, this),
      work.map((job, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: job.position }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
            lineNumber: 335,
            columnNumber: 17
          }, this),
          job.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: job.name }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
            lineNumber: 336,
            columnNumber: 30
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateText, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRange, { startDate: job.startDate, endDate: job.endDate }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
            lineNumber: 338,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
            lineNumber: 337,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 334,
          columnNumber: 15
        }, this),
        job.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: job.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 341,
          columnNumber: 31
        }, this),
        job.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: job.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 345,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 343,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 333,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 330,
      columnNumber: 9
    }, this),
    projects?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Research Projects" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 356,
        columnNumber: 11
      }, this),
      projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: project.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 359,
          columnNumber: 15
        }, this),
        project.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: project.description }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 361,
          columnNumber: 17
        }, this),
        project.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: project.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 366,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 364,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 358,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 355,
      columnNumber: 9
    }, this),
    skills?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Skills" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 377,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillsList, { children: skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillName, { children: [
          skill.name,
          ":"
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 381,
          columnNumber: 17
        }, this),
        skill.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillKeywords, { children: skill.keywords.join(", ") }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 383,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 380,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 378,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 376,
      columnNumber: 9
    }, this),
    volunteer?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Service & Leadership" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 393,
        columnNumber: 11
      }, this),
      volunteer.map((vol, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: vol.position }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
            lineNumber: 397,
            columnNumber: 17
          }, this),
          vol.organization && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: vol.organization }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
            lineNumber: 398,
            columnNumber: 38
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
              fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
              lineNumber: 401,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
            lineNumber: 400,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 396,
          columnNumber: 15
        }, this),
        vol.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: vol.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 408,
          columnNumber: 31
        }, this),
        vol.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: vol.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 412,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 410,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 395,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 392,
      columnNumber: 9
    }, this),
    languages?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Languages" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 423,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillsList, { children: languages.map((lang, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillName, { children: [
          lang.language,
          ":"
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 427,
          columnNumber: 17
        }, this),
        lang.fluency && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillKeywords, { children: lang.fluency }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 428,
          columnNumber: 34
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 426,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 424,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 422,
      columnNumber: 9
    }, this),
    interests?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Research Interests" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 437,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillsList, { children: interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillName, { children: interest.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 441,
          columnNumber: 17
        }, this),
        interest.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillKeywords, { children: interest.keywords.join(", ") }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 443,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 440,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 438,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 436,
      columnNumber: 9
    }, this),
    references?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "References" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 453,
        columnNumber: 11
      }, this),
      references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: ref.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 456,
          columnNumber: 15
        }, this),
        ref.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkSummary, { children: ref.reference }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
          lineNumber: 457,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
        lineNumber: 455,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
      lineNumber: 452,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx",
    lineNumber: 258,
    columnNumber: 5
  }, this);
}
__name(Resume, "Resume");
var Resume_default = Resume;

// node_modules/jsonresume-theme-academic-cv-lite/src/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function render(resume) {
  return renderResumeDocument(/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Resume_default, { resume }, void 0, false, {
    fileName: "node_modules/jsonresume-theme-academic-cv-lite/src/index.jsx",
    lineNumber: 6,
    columnNumber: 31
  }, this), {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap"
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
        margin: 0.75in;
      }
    }
  </style>`,
    lang: "en",
    dir: "ltr",
    title: `${resume.basics?.name || "Resume"} - Curriculum Vitae`,
    includeTokensCss: false
  });
}
__name(render, "render");
export {
  render
};
//# sourceMappingURL=src-PD7PBFRT.mjs.map
