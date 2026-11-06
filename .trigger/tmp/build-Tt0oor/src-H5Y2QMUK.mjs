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

// node_modules/jsonresume-theme-desert-modern/src/index.jsx
init_esm();
var import_react2 = __toESM(require_react(), 1);

// node_modules/jsonresume-theme-desert-modern/src/Resume.jsx
init_esm();
var import_react = __toESM(require_react(), 1);

// node_modules/jsonresume-theme-desert-modern/src/styles.jsx
init_esm();
var import_styled_components = __toESM(require_styled_components_cjs(), 1);
var ACCENT = "#d97706";
var Layout = import_styled_components.default.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 64px 72px;
  background: #fefbf5;
  color: #3f2f25;
  font-family: 'Nunito', 'Inter', 'Segoe UI', sans-serif;
  line-height: 1.7;
  border-radius: 20px;
  box-shadow: 0 32px 60px rgba(149, 108, 57, 0.12);
  border: 1px solid rgba(217, 119, 6, 0.16);

  @media (max-width: 720px) {
    padding: 48px 28px;
  }

  @media print {
    padding: 40px 48px;
    border-radius: 0;
    box-shadow: none;
    border: none;
    background: white;
  }
`;
var Header = import_styled_components.default.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(217, 119, 6, 0.25);
`;
var Name = import_styled_components.default.h1`
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #92400e;
  margin: 0;
`;
var Label = import_styled_components.default.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #b45309;
`;
var StyledContactInfo = (0, import_styled_components.default)(ContactInfo)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  font-size: 13px;
  color: #6f5d4e;

  a {
    color: #b45309;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: rgba(217, 119, 6, 0.5);
    }
  }
`;
var Summary = import_styled_components.default.p`
  margin: 0;
  padding: 18px 22px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(217, 119, 6, 0.12);
  color: #4f3d31;
  font-size: 15px;
  line-height: 1.8;
`;
var SectionBlock = (0, import_styled_components.default)(Section)`
  margin-bottom: 36px;
  padding-top: 24px;
  border-top: 1px solid rgba(217, 119, 6, 0.18);

  &:last-of-type {
    margin-bottom: 0;
  }
`;
var SectionHeading = (0, import_styled_components.default)(SectionTitle)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #b45309;
  margin: 0 0 20px 0;

  &::before {
    content: '';
    display: block;
    width: 36px;
    height: 2px;
    background: currentColor;
    opacity: 0.4;
  }
`;
var Entry = import_styled_components.default.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var EntryHeader = import_styled_components.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;
var EntryTitle = import_styled_components.default.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #4a3326;
  letter-spacing: 0.01em;
`;
var EntrySubtitle = import_styled_components.default.div`
  font-size: 14px;
  color: #7c6a58;
`;
var EntryMeta = import_styled_components.default.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #b45309;
  white-space: nowrap;
`;
var EntrySummary = import_styled_components.default.p`
  margin: 0;
  color: #4f3d31;
  line-height: 1.75;
  font-size: 14px;
`;
var BulletList = import_styled_components.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;

  li {
    position: relative;
    padding-left: 18px;
    color: #4f3d31;
    font-size: 14px;
    line-height: 1.7;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${ACCENT};
    opacity: 0.6;
  }
`;
var SkillGrid = import_styled_components.default.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
var SkillCard = import_styled_components.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
var SkillTitle = import_styled_components.default.div`
  font-size: 15px;
  font-weight: 600;
  color: #4a3326;
`;
var KeywordList = import_styled_components.default.div`
  font-size: 13px;
  color: #6f5d4e;
`;
var Pill = import_styled_components.default.span`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(217, 119, 6, 0.14);
  color: #8a4d0f;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
var Anchor = import_styled_components.default.a`
  color: #b45309;
  text-decoration: none;
  border-bottom: 1px solid rgba(217, 119, 6, 0.3);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(217, 119, 6, 0.6);
  }
`;

// node_modules/jsonresume-theme-desert-modern/src/Resume.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var joinParts = /* @__PURE__ */ __name((...parts) => parts.filter(Boolean).join(" • "), "joinParts");
var renderHighlights = /* @__PURE__ */ __name((items) => items?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BulletList, { children: items.map((text, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: text }, index, false, {
  fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
  lineNumber: 33,
  columnNumber: 9
})) }, void 0, false, {
  fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
  lineNumber: 31,
  columnNumber: 5
}) : null, "renderHighlights");
function Resume({ resume }) {
  const {
    basics = {},
    work = [],
    education = [],
    projects = [],
    volunteer = [],
    skills = [],
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
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      basics.label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: basics.label }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 58,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledContactInfo, { basics }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      basics.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Summary, { children: basics.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 60,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    work?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Experience" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      work.map((job, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Entry, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            job.position && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryTitle, { children: job.position }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 70,
              columnNumber: 36
            }, this),
            job.name || job.location ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySubtitle, { children: joinParts(job.name, job.location) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 72,
              columnNumber: 21
            }, this) : null
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          (job.startDate || job.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryMeta, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            DateRange,
            {
              startDate: job.startDate,
              endDate: job.endDate
            },
            void 0,
            false,
            {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 79,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 78,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        job.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySummary, { children: job.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 86,
          columnNumber: 31
        }, this),
        renderHighlights(job.highlights)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    projects?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Projects" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      projects.map((project, index) => {
        const summary = project.description || project.summary;
        const descriptor = joinParts(project.entity, project.type);
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Entry, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              project.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryTitle, { children: project.name }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
                lineNumber: 103,
                columnNumber: 38
              }, this),
              (descriptor || project.url) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySubtitle, { children: [
                descriptor,
                descriptor && project.url ? " • " : "",
                project.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: project.url, children: project.url }, void 0, false, {
                  fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
                  lineNumber: 109,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
                lineNumber: 105,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 102,
              columnNumber: 19
            }, this),
            (project.startDate || project.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryMeta, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              DateRange,
              {
                startDate: project.startDate,
                endDate: project.endDate
              },
              void 0,
              false,
              {
                fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
                lineNumber: 116,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 115,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 101,
            columnNumber: 17
          }, this),
          summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySummary, { children: summary }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 123,
            columnNumber: 29
          }, this),
          renderHighlights(project.highlights),
          project.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeywordList, { children: project.keywords.join(" • ") }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 126,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 100,
          columnNumber: 15
        }, this);
      })
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    education?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Education" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Entry, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            edu.institution && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryTitle, { children: edu.institution }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 142,
              columnNumber: 21
            }, this),
            (edu.studyType || edu.area || edu.score) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySubtitle, { children: joinParts(
              [edu.studyType, edu.area].filter(Boolean).join(" in "),
              edu.score
            ) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 145,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          (edu.startDate || edu.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryMeta, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            DateRange,
            {
              startDate: edu.startDate,
              endDate: edu.endDate
            },
            void 0,
            false,
            {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 155,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 154,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 139,
          columnNumber: 15
        }, this),
        edu.courses?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeywordList, { children: [
          "Key courses: ",
          edu.courses.join(", ")
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 163,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 138,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 135,
      columnNumber: 9
    }, this),
    skills?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Skills" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 172,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillGrid, { children: skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillCard, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillTitle, { children: [
          skill.name,
          skill.level && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pill, { children: skill.level }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 178,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 176,
          columnNumber: 17
        }, this),
        skill.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeywordList, { children: skill.keywords.join(" • ") }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 181,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 175,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 173,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 171,
      columnNumber: 9
    }, this),
    volunteer?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Volunteer" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 191,
        columnNumber: 11
      }, this),
      volunteer.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Entry, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            item.position && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryTitle, { children: item.position }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 196,
              columnNumber: 37
            }, this),
            (item.organization || item.location) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySubtitle, { children: joinParts(item.organization, item.location) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 198,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 195,
            columnNumber: 17
          }, this),
          (item.startDate || item.endDate) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryMeta, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            DateRange,
            {
              startDate: item.startDate,
              endDate: item.endDate
            },
            void 0,
            false,
            {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 205,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 204,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 194,
          columnNumber: 15
        }, this),
        item.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySummary, { children: item.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 212,
          columnNumber: 32
        }, this),
        renderHighlights(item.highlights)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 193,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 190,
      columnNumber: 9
    }, this),
    awards?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Awards" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 221,
        columnNumber: 11
      }, this),
      awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Entry, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            award.title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryTitle, { children: award.title }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 226,
              columnNumber: 35
            }, this),
            award.awarder && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySubtitle, { children: [
              "Issued by ",
              award.awarder
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 228,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 225,
            columnNumber: 17
          }, this),
          award.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryMeta, { children: award.date }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 231,
            columnNumber: 32
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 224,
          columnNumber: 15
        }, this),
        award.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySummary, { children: award.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 233,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 223,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 220,
      columnNumber: 9
    }, this),
    certificates?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Certifications" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 241,
        columnNumber: 11
      }, this),
      certificates.map((cert, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Entry, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            cert.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryTitle, { children: cert.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 246,
              columnNumber: 33
            }, this),
            cert.issuer && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySubtitle, { children: [
              "Issued by ",
              cert.issuer
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 248,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 245,
            columnNumber: 17
          }, this),
          cert.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryMeta, { children: cert.date }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 251,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 244,
          columnNumber: 15
        }, this),
        cert.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySummary, { children: cert.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 253,
          columnNumber: 32
        }, this),
        cert.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeywordList, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: cert.url, children: cert.url }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 256,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 255,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 243,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 240,
      columnNumber: 9
    }, this),
    publications?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Publications" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 266,
        columnNumber: 11
      }, this),
      publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Entry, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            pub.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryTitle, { children: pub.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 271,
              columnNumber: 32
            }, this),
            (pub.publisher || pub.url) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySubtitle, { children: [
              pub.publisher,
              pub.publisher && pub.url ? " • " : "",
              pub.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: pub.url, children: pub.url }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
                lineNumber: 276,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
              lineNumber: 273,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 270,
            columnNumber: 17
          }, this),
          pub.releaseDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryMeta, { children: pub.releaseDate }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
            lineNumber: 280,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 269,
          columnNumber: 15
        }, this),
        pub.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySummary, { children: pub.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 282,
          columnNumber: 31
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 268,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 265,
      columnNumber: 9
    }, this),
    languages?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Languages" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 290,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillGrid, { children: languages.map((lang, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillCard, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillTitle, { children: lang.language }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 294,
          columnNumber: 17
        }, this),
        lang.fluency && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pill, { children: lang.fluency }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 295,
          columnNumber: 34
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 293,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 291,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 289,
      columnNumber: 9
    }, this),
    interests?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "Interests" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 304,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillGrid, { children: interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillCard, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillTitle, { children: interest.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 308,
          columnNumber: 17
        }, this),
        interest.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeywordList, { children: interest.keywords.join(" • ") }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 310,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 307,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 305,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 303,
      columnNumber: 9
    }, this),
    references?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { children: "References" }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 320,
        columnNumber: 11
      }, this),
      references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Entry, { children: [
        ref.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryTitle, { children: ref.name }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 323,
          columnNumber: 28
        }, this),
        ref.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntrySummary, { children: ref.reference }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
          lineNumber: 324,
          columnNumber: 33
        }, this)
      ] }, index, true, {
        fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
        lineNumber: 322,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
      lineNumber: 319,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-desert-modern/src/Resume.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
__name(Resume, "Resume");
var Resume_default = Resume;

// node_modules/jsonresume-theme-desert-modern/src/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function render(resume) {
  return renderResumeDocument(/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Resume_default, { resume }, void 0, false, {
    fileName: "node_modules/jsonresume-theme-desert-modern/src/index.jsx",
    lineNumber: 6,
    columnNumber: 31
  }, this), {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Inter:wght@400;500;600;700&display=swap"
    ],
    headAfterStyles: `<style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      background: #fdf7f2;
      color: #1f2933;
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
  Resume_default as Resume,
  render
};
//# sourceMappingURL=src-H5Y2QMUK.mjs.map
