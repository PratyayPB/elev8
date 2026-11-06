import {
  BadgeList,
  ContactInfo,
  DateRange,
  Link,
  Section,
  SectionTitle,
  renderResumeDocument,
  require_jsx_dev_runtime,
  require_styled_components_cjs,
  safeUrl
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

// node_modules/jsonresume-theme-developer-mono/src/index.jsx
init_esm();

// node_modules/jsonresume-theme-developer-mono/src/Resume.jsx
init_esm();
var import_react = __toESM(require_react(), 1);
var import_styled_components = __toESM(require_styled_components_cjs(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Layout = import_styled_components.default.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 32px;
  background: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1f2937;
  line-height: 1.7;
  font-size: 15px;

  @media print {
    padding: 24px;
  }
`;
var Header = import_styled_components.default.header`
  margin-bottom: 40px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 32px;
`;
var Name = import_styled_components.default.h1`
  font-family: 'JetBrains Mono', monospace;
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #111827;
  letter-spacing: -0.5px;
`;
var Label = import_styled_components.default.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 16px;
`;
var ContactWrapper = import_styled_components.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
  color: #6b7280;
`;
var SummarySection = (0, import_styled_components.default)(Section)`
  margin-bottom: 40px;
`;
var SummaryText = import_styled_components.default.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #374151;
`;
var MainSection = (0, import_styled_components.default)(Section)`
  margin-bottom: 40px;
`;
var MainSectionTitle = (0, import_styled_components.default)(SectionTitle)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  color: #6b7280;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
var WorkItem = import_styled_components.default.div`
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
var WorkHeader = import_styled_components.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
`;
var WorkTitle = import_styled_components.default.h3`
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #111827;
`;
var WorkMeta = import_styled_components.default.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
`;
var WorkCompany = import_styled_components.default.div`
  font-size: 15px;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 8px;
`;
var WorkDescription = import_styled_components.default.p`
  font-size: 15px;
  line-height: 1.7;
  margin: 12px 0;
  color: #374151;
`;
var WorkHighlights = import_styled_components.default.ul`
  margin: 12px 0 0 0;
  padding-left: 20px;
  list-style: none;

  li {
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 1.6;
    color: #374151;
    position: relative;
    padding-left: 12px;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #2563eb;
      font-weight: 600;
    }
  }
`;
var SkillsGrid = import_styled_components.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
`;
var SkillItem = import_styled_components.default.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var SkillName = import_styled_components.default.h4`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var SkillCodeBlock = import_styled_components.default.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  background: #f9fafb;
  padding: 12px;
  border-radius: 4px;
  border-left: 3px solid #2563eb;
  line-height: 1.6;
  color: #4b5563;
`;
var SimpleList = import_styled_components.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;
var SimpleItem = import_styled_components.default.div`
  font-size: 15px;
  line-height: 1.6;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;

  strong {
    font-weight: 600;
    color: #111827;
  }
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
      basics.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Name, { children: basics.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 230,
        columnNumber: 25
      }, this),
      basics.label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: basics.label }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 231,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactInfo, { basics }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 233,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 232,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 229,
      columnNumber: 7
    }, this),
    basics.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SummarySection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SummaryText, { children: basics.summary }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 239,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 238,
      columnNumber: 9
    }, this),
    work.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Experience" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 245,
        columnNumber: 11
      }, this),
      work.map((job, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: job.position || job.name }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 249,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkMeta, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRange, { startDate: job.startDate, endDate: job.endDate }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 251,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 250,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 248,
          columnNumber: 15
        }, this),
        job.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: job.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 254,
          columnNumber: 28
        }, this),
        job.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDescription, { children: job.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 255,
          columnNumber: 31
        }, this),
        job.highlights && job.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHighlights, { children: job.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 259,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 257,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 247,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 244,
      columnNumber: 9
    }, this),
    skills.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Skills" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 270,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillsGrid, { children: skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillName, { children: skill.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 274,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillCodeBlock, { children: skill.keywords?.join(", ") }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 275,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 273,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 271,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 269,
      columnNumber: 9
    }, this),
    projects.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Projects" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 284,
        columnNumber: 11
      }, this),
      projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: project.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: safeUrl(project.url), children: project.name }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 290,
            columnNumber: 21
          }, this) : project.name }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 288,
            columnNumber: 17
          }, this),
          (project.startDate || project.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkMeta, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            DateRange,
            {
              startDate: project.startDate,
              endDate: project.endDate
            },
            void 0,
            false,
            {
              fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
              lineNumber: 297,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 296,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 287,
          columnNumber: 15
        }, this),
        project.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDescription, { children: project.description }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 305,
          columnNumber: 17
        }, this),
        project.highlights && project.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHighlights, { children: project.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 310,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 308,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 286,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 283,
      columnNumber: 9
    }, this),
    education.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Education" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 321,
        columnNumber: 11
      }, this),
      education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: edu.institution }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 325,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkMeta, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRange, { startDate: edu.startDate, endDate: edu.endDate }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 327,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 326,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 324,
          columnNumber: 15
        }, this),
        edu.studyType && edu.area && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: [
          edu.studyType,
          " in ",
          edu.area
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 331,
          columnNumber: 17
        }, this),
        edu.score && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDescription, { children: [
          "GPA: ",
          edu.score
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 335,
          columnNumber: 29
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 323,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 320,
      columnNumber: 9
    }, this),
    volunteer.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Volunteer" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 343,
        columnNumber: 11
      }, this),
      volunteer.map((vol, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: vol.position }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 347,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkMeta, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRange, { startDate: vol.startDate, endDate: vol.endDate }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 349,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 348,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 346,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: vol.organization }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 352,
          columnNumber: 15
        }, this),
        vol.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDescription, { children: vol.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 353,
          columnNumber: 31
        }, this),
        vol.highlights && vol.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHighlights, { children: vol.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, i, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 357,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 355,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 345,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 342,
      columnNumber: 9
    }, this),
    awards.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Awards" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 368,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleList, { children: awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: award.title }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 372,
          columnNumber: 17
        }, this),
        award.awarder && ` — ${award.awarder}`,
        award.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: {
              fontSize: "13px",
              color: "#6b7280",
              marginTop: "4px"
            },
            children: award.date
          },
          void 0,
          false,
          {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 375,
            columnNumber: 19
          },
          this
        )
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 371,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 369,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 367,
      columnNumber: 9
    }, this),
    certificates.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Certificates" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 393,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleList, { children: certificates.map((cert, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: cert.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: safeUrl(cert.url), children: cert.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 399,
          columnNumber: 21
        }, this) : cert.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 397,
          columnNumber: 17
        }, this),
        cert.issuer && ` — ${cert.issuer}`,
        cert.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: {
              fontSize: "13px",
              color: "#6b7280",
              marginTop: "4px"
            },
            children: cert.date
          },
          void 0,
          false,
          {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 406,
            columnNumber: 19
          },
          this
        )
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 396,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 394,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 392,
      columnNumber: 9
    }, this),
    publications.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Publications" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 424,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleList, { children: publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: pub.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 428,
          columnNumber: 17
        }, this),
        pub.publisher && ` — ${pub.publisher}`,
        pub.releaseDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: {
              fontSize: "13px",
              color: "#6b7280",
              marginTop: "4px"
            },
            children: pub.releaseDate
          },
          void 0,
          false,
          {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 431,
            columnNumber: 19
          },
          this
        )
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 427,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 425,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 423,
      columnNumber: 9
    }, this),
    languages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Languages" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 449,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleList, { children: languages.map((lang, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: lang.language }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 453,
          columnNumber: 17
        }, this),
        lang.fluency && ` — ${lang.fluency}`
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 452,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 450,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 448,
      columnNumber: 9
    }, this),
    interests.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "Interests" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 463,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleList, { children: interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: interest.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 467,
          columnNumber: 17
        }, this),
        interest.keywords && interest.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          BadgeList,
          {
            items: interest.keywords,
            variant: "accent",
            size: "sm"
          },
          void 0,
          false,
          {
            fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
            lineNumber: 469,
            columnNumber: 19
          },
          this
        )
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 466,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 464,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 462,
      columnNumber: 9
    }, this),
    references.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "References" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 483,
        columnNumber: 11
      }, this),
      references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: ref.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 486,
          columnNumber: 15
        }, this),
        ref.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDescription, { children: ref.reference }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
          lineNumber: 488,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
        lineNumber: 485,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
      lineNumber: 482,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-developer-mono/src/Resume.jsx",
    lineNumber: 228,
    columnNumber: 5
  }, this);
}
__name(Resume, "Resume");
var Resume_default = Resume;

// node_modules/jsonresume-theme-developer-mono/src/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function render(resume) {
  return renderResumeDocument(/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Resume_default, { resume }, void 0, false, {
    fileName: "node_modules/jsonresume-theme-developer-mono/src/index.jsx",
    lineNumber: 5,
    columnNumber: 31
  }, this), {
    fonts: ["Inter:wght@400;500;600"],
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
//# sourceMappingURL=src-7336HLVE.mjs.map
