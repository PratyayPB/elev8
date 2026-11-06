import {
  BadgeList,
  Section,
  getLinkRel,
  renderResumeDocument,
  require_jsx_dev_runtime,
  require_styled_components_cjs,
  safeUrl
} from "./chunk-F5V7KJFG.mjs";
import "./chunk-3KD33LUC.mjs";
import "./chunk-ZPESTPYW.mjs";
import {
  __name,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/jsonresume-theme-sidebar/src/index.jsx
init_esm();

// node_modules/jsonresume-theme-sidebar/src/Resume.jsx
init_esm();
var import_styled_components = __toESM(require_styled_components_cjs(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Layout = import_styled_components.default.div`
  display: grid;
  grid-template-columns: 315px 1fr;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 11pt;
  line-height: 1.6;
  color: #333;

  @media print {
    min-height: auto;
  }
`;
var Sidebar = import_styled_components.default.aside`
  background: #1e3a52;
  color: #ffffff;
  padding: 40px 30px;
`;
var MainContent = import_styled_components.default.main`
  background: #f5f2ed;
  padding: 60px 50px;
`;
var ProfilePhoto = import_styled_components.default.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #ffffff;
  margin: 0 auto 40px;
  background: #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
var Name = import_styled_components.default.h1`
  font-size: 42pt;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #2c2c2c;
  letter-spacing: 0.5px;

  span {
    font-weight: 400;
  }
`;
var JobTitle = import_styled_components.default.div`
  font-size: 18pt;
  color: #666;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 15px;
  border-bottom: 3px solid #1e3a52;
  display: inline-block;
`;
var SidebarSection = (0, import_styled_components.default)(Section)`
  margin-bottom: 40px;
`;
var SidebarTitle = import_styled_components.default.h2`
  font-size: 14pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
`;
var ContactItem = import_styled_components.default.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  font-size: 10pt;

  svg {
    margin-right: 12px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    word-break: break-word;

    &:hover {
      text-decoration: underline;
    }
  }
`;
var Icon = import_styled_components.default.span`
  display: inline-block;
  width: 16px;
  margin-right: 12px;
  flex-shrink: 0;
`;
var EducationItem = import_styled_components.default.div`
  margin-bottom: 25px;

  h3 {
    font-size: 11pt;
    font-weight: 600;
    margin: 0 0 5px 0;
  }

  .dates {
    font-size: 10pt;
    margin-bottom: 8px;
    opacity: 0.9;
  }

  ul {
    margin: 5px 0 0 0;
    padding-left: 18px;
    font-size: 10pt;

    li {
      margin: 3px 0;
    }
  }
`;
var SkillsList = import_styled_components.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 8px 0;
    padding-left: 15px;
    position: relative;
    font-size: 10pt;

    &:before {
      content: '▪';
      position: absolute;
      left: 0;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
var MainSection = (0, import_styled_components.default)(Section)`
  margin-bottom: 40px;
`;
var MainSectionTitle = import_styled_components.default.h2`
  font-size: 16pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 25px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #1e3a52;
  color: #1e3a52;
`;
var ProfileText = import_styled_components.default.p`
  text-align: justify;
  line-height: 1.8;
  color: #4a4a4a;
`;
var WorkItem = import_styled_components.default.div`
  margin-bottom: 30px;
  position: relative;
  padding-left: 25px;

  &:before {
    content: '';
    position: absolute;
    left: 4px;
    top: 8px;
    width: 10px;
    height: 10px;
    background: #1e3a52;
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    left: 8px;
    top: 20px;
    width: 2px;
    height: calc(100% - 10px);
    background: #d0d0d0;
  }

  &:last-child:after {
    display: none;
  }
`;
var WorkHeader = import_styled_components.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;
var WorkTitle = import_styled_components.default.h3`
  font-size: 12pt;
  font-weight: 700;
  margin: 0;
  color: #2c2c2c;
`;
var WorkCompany = import_styled_components.default.div`
  font-size: 11pt;
  color: #666;
  margin-bottom: 10px;
`;
var WorkDate = import_styled_components.default.div`
  font-size: 10pt;
  color: #666;
  white-space: nowrap;
  text-align: right;
`;
var WorkDescription = import_styled_components.default.ul`
  margin: 10px 0 0 0;
  padding-left: 20px;
  color: #4a4a4a;

  li {
    margin: 6px 0;
    text-align: justify;
  }
`;
var ReferenceGrid = import_styled_components.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;
var ReferenceCard = import_styled_components.default.div`
  h3 {
    font-size: 12pt;
    font-weight: 700;
    margin: 0 0 5px 0;
    color: #2c2c2c;
  }

  .title {
    font-size: 10pt;
    color: #666;
    margin-bottom: 8px;
  }

  .contact {
    font-size: 9pt;
    color: #666;
    margin: 3px 0;
  }
`;
var LanguagesList = import_styled_components.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 8px 0;
    padding-left: 15px;
    position: relative;
    font-size: 10pt;

    &:before {
      content: '▪';
      position: absolute;
      left: 0;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
function Resume({ resume }) {
  const {
    basics = {},
    work = [],
    education = [],
    skills = [],
    languages = [],
    references = [],
    projects = [],
    awards = [],
    certificates = [],
    publications = [],
    volunteer = [],
    interests = []
  } = resume;
  const nameParts = basics.name ? basics.name.split(" ") : [];
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts[nameParts.length - 1];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, { children: [
      basics.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfilePhoto, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: basics.image, alt: basics.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 336,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 335,
        columnNumber: 11
      }, this),
      (basics.phone || basics.email || basics.location || basics.url) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarTitle, { children: "CONTACT" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 343,
          columnNumber: 13
        }, this),
        basics.phone && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { children: "📞" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 346,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: basics.phone }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 347,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 345,
          columnNumber: 15
        }, this),
        basics.email && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { children: "✉️" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 352,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: safeUrl(`mailto:${basics.email}`), children: basics.email }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 353,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 351,
          columnNumber: 15
        }, this),
        basics.location && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { children: "📍" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 358,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            basics.location.address,
            basics.location.city,
            basics.location.region
          ].filter(Boolean).join(", ") }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 359,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 357,
          columnNumber: 15
        }, this),
        basics.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { children: "🌐" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 372,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: safeUrl(basics.url),
              target: "_blank",
              rel: getLinkRel(basics.url, true),
              children: basics.url.replace(/^https?:\/\//, "")
            },
            void 0,
            false,
            {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 373,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 371,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 342,
        columnNumber: 11
      }, this),
      education.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarTitle, { children: "EDUCATION" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 388,
          columnNumber: 13
        }, this),
        education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dates", children: edu.startDate && edu.endDate ? `${new Date(edu.startDate).getFullYear()} - ${new Date(
            edu.endDate
          ).getFullYear()}` : "" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 391,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: edu.institution }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 398,
            columnNumber: 17
          }, this),
          edu.studyType && edu.area && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              edu.studyType,
              " of ",
              edu.area
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 401,
              columnNumber: 21
            }, this),
            edu.score && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              "GPA: ",
              edu.score
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 404,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 400,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 390,
          columnNumber: 15
        }, this))
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 387,
        columnNumber: 11
      }, this),
      skills.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarTitle, { children: "SKILLS" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 415,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillsList, { children: skills.flatMap(
          (skillGroup) => (skillGroup.keywords || []).map((skill, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: skill }, `${skillGroup.name}-${idx}`, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 419,
            columnNumber: 19
          }, this))
        ) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 416,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 414,
        columnNumber: 11
      }, this),
      languages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SidebarTitle, { children: "LANGUAGES" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 429,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LanguagesList, { children: languages.map((lang, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          lang.language,
          lang.fluency && ` (${lang.fluency})`
        ] }, index, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 432,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 430,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 428,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
      lineNumber: 332,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Name, { children: [
          firstName && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            firstName,
            " "
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 447,
            columnNumber: 27
          }, this),
          lastName
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 446,
          columnNumber: 11
        }, this),
        basics.label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(JobTitle, { children: basics.label }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 450,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 445,
        columnNumber: 9
      }, this),
      basics.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "PROFILE" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 456,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileText, { children: basics.summary }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 457,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 455,
        columnNumber: 11
      }, this),
      work.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "WORK EXPERIENCE" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 464,
          columnNumber: 13
        }, this),
        work.map((job, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: job.name }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 469,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: job.position }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 470,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 468,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDate, { children: job.startDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              new Date(job.startDate).getFullYear(),
              " -",
              " ",
              job.endDate ? new Date(job.endDate).getFullYear() : "PRESENT"
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 474,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 472,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 467,
            columnNumber: 17
          }, this),
          job.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { marginBottom: "10px", color: "#4a4a4a" }, children: job.summary }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 484,
            columnNumber: 19
          }, this),
          job.highlights && job.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDescription, { children: job.highlights.map((highlight, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, idx, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 491,
            columnNumber: 23
          }, this)) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 489,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 466,
          columnNumber: 15
        }, this))
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 463,
        columnNumber: 11
      }, this),
      projects.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "PROJECTS" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 503,
          columnNumber: 13
        }, this),
        projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: project.name }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 508,
                columnNumber: 21
              }, this),
              project.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: safeUrl(project.url),
                  target: "_blank",
                  rel: getLinkRel(project.url, true),
                  style: { color: "#1e3a52" },
                  children: project.url
                },
                void 0,
                false,
                {
                  fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                  lineNumber: 511,
                  columnNumber: 25
                },
                this
              ) }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 510,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 507,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDate, { children: project.startDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              new Date(project.startDate).getFullYear(),
              project.endDate && ` - ${new Date(project.endDate).getFullYear()}`
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 524,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 522,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 506,
            columnNumber: 17
          }, this),
          project.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { marginBottom: "10px", color: "#4a4a4a" }, children: project.description }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 533,
            columnNumber: 19
          }, this),
          project.highlights && project.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDescription, { children: project.highlights.map((highlight, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, idx, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 540,
            columnNumber: 23
          }, this)) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 538,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 505,
          columnNumber: 15
        }, this))
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 502,
        columnNumber: 11
      }, this),
      volunteer.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "VOLUNTEER" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 552,
          columnNumber: 13
        }, this),
        volunteer.map((vol, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: vol.organization }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 557,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: vol.position }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 558,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 556,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDate, { children: vol.startDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
              new Date(vol.startDate).getFullYear(),
              " -",
              " ",
              vol.endDate ? new Date(vol.endDate).getFullYear() : "PRESENT"
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 562,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
              lineNumber: 560,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 555,
            columnNumber: 17
          }, this),
          vol.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { marginBottom: "10px", color: "#4a4a4a" }, children: vol.summary }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 572,
            columnNumber: 19
          }, this),
          vol.highlights && vol.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkDescription, { children: vol.highlights.map((highlight, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: highlight }, idx, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 579,
            columnNumber: 23
          }, this)) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 577,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 554,
          columnNumber: 15
        }, this))
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 551,
        columnNumber: 11
      }, this),
      awards.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "AWARDS & HONORS" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 591,
          columnNumber: 13
        }, this),
        awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: { marginBottom: "20px", paddingLeft: "25px" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: award.title }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 597,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: [
                award.awarder,
                award.date && ` - ${new Date(award.date).toLocaleDateString()}`
              ] }, void 0, true, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 598,
                columnNumber: 17
              }, this),
              award.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { marginTop: "8px", color: "#4a4a4a" }, children: award.summary }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 604,
                columnNumber: 19
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 593,
            columnNumber: 15
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 590,
        columnNumber: 11
      }, this),
      certificates.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "CERTIFICATES" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 616,
          columnNumber: 13
        }, this),
        certificates.map((cert, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: { marginBottom: "20px", paddingLeft: "25px" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: cert.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: safeUrl(cert.url),
                  target: "_blank",
                  rel: getLinkRel(cert.url, true),
                  style: { color: "#1e3a52" },
                  children: cert.name
                },
                void 0,
                false,
                {
                  fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                  lineNumber: 624,
                  columnNumber: 21
                },
                this
              ) : cert.name }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 622,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: [
                cert.issuer,
                cert.date && ` - ${new Date(cert.date).toLocaleDateString()}`
              ] }, void 0, true, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 636,
                columnNumber: 17
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 618,
            columnNumber: 15
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 615,
        columnNumber: 11
      }, this),
      publications.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "PUBLICATIONS" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 649,
          columnNumber: 13
        }, this),
        publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: { marginBottom: "20px", paddingLeft: "25px" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: pub.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: safeUrl(pub.url),
                  target: "_blank",
                  rel: getLinkRel(pub.url, true),
                  style: { color: "#1e3a52" },
                  children: pub.name
                },
                void 0,
                false,
                {
                  fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                  lineNumber: 657,
                  columnNumber: 21
                },
                this
              ) : pub.name }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 655,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkCompany, { children: [
                pub.publisher,
                pub.releaseDate && ` - ${new Date(pub.releaseDate).toLocaleDateString()}`
              ] }, void 0, true, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 669,
                columnNumber: 17
              }, this),
              pub.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { marginTop: "8px", color: "#4a4a4a" }, children: pub.summary }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 675,
                columnNumber: 19
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 651,
            columnNumber: 15
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 648,
        columnNumber: 11
      }, this),
      references.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "REFERENCE" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 687,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReferenceGrid, { children: references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReferenceCard, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: ref.name }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 691,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title", children: ref.reference }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 692,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 690,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 688,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 686,
        columnNumber: 11
      }, this),
      interests.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSection, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainSectionTitle, { children: "INTERESTS" }, void 0, false, {
          fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
          lineNumber: 702,
          columnNumber: 13
        }, this),
        interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            style: { marginBottom: "20px", paddingLeft: "25px" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WorkTitle, { children: interest.name }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 708,
                columnNumber: 17
              }, this),
              interest.keywords && interest.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BadgeList, { items: interest.keywords, size: "sm" }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
                lineNumber: 710,
                columnNumber: 19
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
            lineNumber: 704,
            columnNumber: 15
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
        lineNumber: 701,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
      lineNumber: 443,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-sidebar/src/Resume.jsx",
    lineNumber: 330,
    columnNumber: 5
  }, this);
}
__name(Resume, "Resume");
var Resume_default = Resume;

// node_modules/jsonresume-theme-sidebar/src/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function render(resume, options = {}) {
  const {
    locale = "en",
    dir = "ltr",
    title = resume.basics?.name || "Resume"
  } = options;
  const designTokens = `
    :root {
      --resume-font-sans: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      --resume-color-sidebar: #1e3a52;
      --resume-color-main: #f5f2ed;
      --resume-color-text: #333;
      --resume-color-accent: #1e3a52;
    }
  `;
  const globalStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @media print {
      body {
        background: #fff;
      }

      @page {
        size: A4;
        margin: 0;
      }
    }
  `;
  return renderResumeDocument(/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Resume_default, { resume }, void 0, false, {
    fileName: "node_modules/jsonresume-theme-sidebar/src/index.jsx",
    lineNumber: 54,
    columnNumber: 31
  }, this), {
    head: `<style>
    ${designTokens}
  </style>`,
    headAfterStyles: `<style>
    ${globalStyles}
  </style>`,
    lang: locale,
    dir,
    title,
    includeTokensCss: false
  });
}
__name(render, "render");
var src_default = { render };
export {
  Resume_default as Resume,
  src_default as default,
  render
};
//# sourceMappingURL=src-MIMOTX6I.mjs.map
