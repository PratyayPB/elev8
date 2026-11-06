import {
  DateRange,
  Link,
  Section,
  SectionTitle,
  isExternalUrl,
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

// node_modules/jsonresume-theme-nordic-minimal/src/index.jsx
init_esm();

// node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx
init_esm();
var import_react = __toESM(require_react(), 1);
var import_styled_components = __toESM(require_styled_components_cjs(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var ResumeContainer = import_styled_components.default.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 60px;
  background: #ffffff;
  font-family: 'Lato', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #2c3e50;
  line-height: 1.8;

  @media print {
    padding: 40px 30px;
    max-width: 100%;
  }
`;
var Header = import_styled_components.default.header`
  margin-bottom: 60px;
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 40px;
`;
var Name = import_styled_components.default.h1`
  font-size: 3rem;
  font-weight: 300;
  color: #2c3e50;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
`;
var Title = import_styled_components.default.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: #5f6c6d;
  margin: 0 0 20px 0;
`;
var Summary = import_styled_components.default.p`
  font-size: 1rem;
  line-height: 1.9;
  color: #34495e;
  margin: 20px 0 0 0;
  font-weight: 300;
`;
var TwoColumnLayout = import_styled_components.default.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 60px;

  @media print {
    gap: 40px;
  }
`;
var Sidebar = import_styled_components.default.aside`
  padding-right: 20px;
  border-right: 1px solid #ecf0f1;
`;
var MainContent = import_styled_components.default.main`
  min-width: 0;
`;
var StyledSection = (0, import_styled_components.default)(Section)`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var StyledSectionTitle = (0, import_styled_components.default)(SectionTitle)`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4682b4;
  margin: 0 0 24px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #4682b4;
`;
var ExperienceItem = import_styled_components.default.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var ExperienceHeader = import_styled_components.default.div`
  margin-bottom: 12px;
`;
var Position = import_styled_components.default.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #2c3e50;
  margin: 0 0 4px 0;
`;
var Company = import_styled_components.default.div`
  font-size: 1rem;
  color: #4682b4;
  font-weight: 400;
  margin-bottom: 4px;
`;
var StyledDateRange = (0, import_styled_components.default)(DateRange)`
  font-size: 0.875rem;
  color: #647274;
  font-weight: 300;
`;
var Description = import_styled_components.default.p`
  font-size: 0.9375rem;
  line-height: 1.8;
  color: #34495e;
  margin: 12px 0 16px 0;
  font-weight: 300;
`;
var Highlights = import_styled_components.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
var Highlight = import_styled_components.default.li`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #34495e;
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
  font-weight: 300;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #4682b4;
    font-weight: 700;
  }
`;
var EducationItem = import_styled_components.default.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var Institution = import_styled_components.default.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  margin: 0 0 4px 0;
`;
var Degree = import_styled_components.default.div`
  font-size: 0.9375rem;
  color: #5f6c6d;
  font-weight: 300;
  margin-bottom: 4px;
`;
var SkillCategory = import_styled_components.default.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var SkillName = import_styled_components.default.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var SkillKeywords = import_styled_components.default.div`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #34495e;
  font-weight: 300;
`;
var ContactItem = import_styled_components.default.div`
  margin-bottom: 16px;
  font-size: 0.875rem;
  color: #34495e;
  font-weight: 300;

  &:last-child {
    margin-bottom: 0;
  }
`;
var ContactLabel = import_styled_components.default.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #647274;
  margin-bottom: 4px;
  font-weight: 600;
`;
var ContactValue = import_styled_components.default.div`
  color: #2c3e50;
  word-break: break-word;
`;
var InterestsList = import_styled_components.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
var InterestTag = import_styled_components.default.span`
  display: inline-block;
  padding: 4px 12px;
  background: #ecf0f1;
  color: #34495e;
  border-radius: 12px;
  font-size: 0.8125rem;
  font-weight: 400;
`;
var LanguageItem = import_styled_components.default.div`
  margin-bottom: 16px;
  font-size: 0.875rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
var LanguageName = import_styled_components.default.span`
  font-weight: 500;
  color: #2c3e50;
`;
var LanguageFluency = import_styled_components.default.span`
  color: #5f6c6d;
  font-weight: 300;
  margin-left: 8px;
`;
function Resume({ resume }) {
  const {
    basics,
    work,
    education,
    skills,
    volunteer,
    awards,
    certificates,
    publications,
    languages,
    interests,
    references,
    projects
  } = resume;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { children: basics && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      basics.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Name, { children: basics.name }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
        lineNumber: 288,
        columnNumber: 29
      }, this),
      basics.label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: basics.label }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
        lineNumber: 289,
        columnNumber: 30
      }, this),
      basics.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Summary, { children: basics.summary }, void 0, false, {
        fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
        lineNumber: 290,
        columnNumber: 32
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
      lineNumber: 287,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
      lineNumber: 285,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TwoColumnLayout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, { children: [
        basics && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Contact" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 300,
            columnNumber: 15
          }, this),
          basics.email && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactLabel, { children: "Email" }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 304,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactValue, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: `mailto:${basics.email}`, children: basics.email }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 306,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 305,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 303,
            columnNumber: 17
          }, this),
          basics.phone && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactLabel, { children: "Phone" }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 313,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactValue, { children: basics.phone }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 314,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 312,
            columnNumber: 17
          }, this),
          basics.location && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactLabel, { children: "Location" }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 320,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactValue, { children: [
              basics.location.city,
              basics.location.region,
              basics.location.countryCode
            ].filter(Boolean).join(", ") }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 321,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 319,
            columnNumber: 17
          }, this),
          basics.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactLabel, { children: "Website" }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 335,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactValue, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                href: safeUrl(basics.url),
                target: isExternalUrl(basics.url) ? "_blank" : void 0,
                children: basics.url.replace(/^https?:\/\//, "")
              },
              void 0,
              false,
              {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 337,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 336,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 334,
            columnNumber: 17
          }, this),
          basics.profiles && basics.profiles.length > 0 && basics.profiles.map((profile, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactLabel, { children: profile.network }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 351,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactValue, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                href: safeUrl(profile.url),
                target: isExternalUrl(profile.url) ? "_blank" : void 0,
                children: profile.username || profile.url.replace(/^https?:\/\//, "")
              },
              void 0,
              false,
              {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 353,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 352,
              columnNumber: 21
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 350,
            columnNumber: 19
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 299,
          columnNumber: 13
        }, this),
        skills && skills.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Skills" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 371,
            columnNumber: 15
          }, this),
          skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillCategory, { children: [
            skill.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillName, { children: skill.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 374,
              columnNumber: 34
            }, this),
            skill.keywords && skill.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkillKeywords, { children: skill.keywords.join(" • ") }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 376,
              columnNumber: 21
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 373,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 370,
          columnNumber: 13
        }, this),
        languages && languages.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Languages" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 386,
            columnNumber: 15
          }, this),
          languages.map((language, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LanguageItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LanguageName, { children: language.language }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 389,
              columnNumber: 19
            }, this),
            language.fluency && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LanguageFluency, { children: [
              "(",
              language.fluency,
              ")"
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 391,
              columnNumber: 21
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 388,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 385,
          columnNumber: 13
        }, this),
        interests && interests.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Interests" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 401,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InterestsList, { children: interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.default.Fragment, { children: [
            interest.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InterestTag, { children: interest.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 406,
              columnNumber: 23
            }, this),
            interest.keywords && interest.keywords.length > 0 && interest.keywords.map((keyword, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InterestTag, { children: keyword }, `${index}-kw-${i}`, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 411,
              columnNumber: 25
            }, this))
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 404,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 402,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 400,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
        lineNumber: 296,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainContent, { children: [
        work && work.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Experience" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 426,
            columnNumber: 15
          }, this),
          work.map((job, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperienceItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperienceHeader, { children: [
              job.position && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: job.position }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 430,
                columnNumber: 38
              }, this),
              job.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: job.name }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 431,
                columnNumber: 34
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                StyledDateRange,
                {
                  startDate: job.startDate,
                  endDate: job.endDate
                },
                void 0,
                false,
                {
                  fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                  lineNumber: 432,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 429,
              columnNumber: 19
            }, this),
            job.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: job.summary }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 438,
              columnNumber: 35
            }, this),
            job.highlights && job.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: job.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlight, { children: highlight }, i, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 443,
              columnNumber: 25
            }, this)) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 441,
              columnNumber: 21
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 428,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 425,
          columnNumber: 13
        }, this),
        education && education.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Education" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 455,
            columnNumber: 15
          }, this),
          education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
            edu.institution && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: edu.institution }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 459,
              columnNumber: 21
            }, this),
            edu.studyType && edu.area && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: [
              edu.studyType,
              " in ",
              edu.area
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 462,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              StyledDateRange,
              {
                startDate: edu.startDate,
                endDate: edu.endDate
              },
              void 0,
              false,
              {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 466,
                columnNumber: 19
              },
              this
            )
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 457,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 454,
          columnNumber: 13
        }, this),
        projects && projects.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Projects" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 478,
            columnNumber: 15
          }, this),
          projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperienceItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperienceHeader, { children: [
              project.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: project.name }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 482,
                columnNumber: 38
              }, this),
              project.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Link,
                {
                  href: safeUrl(project.url),
                  target: isExternalUrl(project.url) ? "_blank" : void 0,
                  children: project.url.replace(/^https?:\/\//, "")
                },
                void 0,
                false,
                {
                  fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                  lineNumber: 485,
                  columnNumber: 25
                },
                this
              ) }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 484,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                StyledDateRange,
                {
                  startDate: project.startDate,
                  endDate: project.endDate
                },
                void 0,
                false,
                {
                  fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                  lineNumber: 495,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 481,
              columnNumber: 19
            }, this),
            project.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: project.description }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 502,
              columnNumber: 21
            }, this),
            project.highlights && project.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: project.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlight, { children: highlight }, i, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 508,
              columnNumber: 25
            }, this)) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 506,
              columnNumber: 21
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 480,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 477,
          columnNumber: 13
        }, this),
        awards && awards.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Awards" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 520,
            columnNumber: 15
          }, this),
          awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
            award.title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: award.title }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 523,
              columnNumber: 35
            }, this),
            award.awarder && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: award.awarder }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 524,
              columnNumber: 37
            }, this),
            award.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDateRange, { startDate: award.date }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 525,
              columnNumber: 34
            }, this),
            award.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: award.summary }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 526,
              columnNumber: 37
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 522,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 519,
          columnNumber: 13
        }, this),
        certificates && certificates.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Certificates" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 535,
            columnNumber: 15
          }, this),
          certificates.map((cert, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
            cert.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: cert.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                href: safeUrl(cert.url),
                target: isExternalUrl(cert.url) ? "_blank" : void 0,
                children: cert.name
              },
              void 0,
              false,
              {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 541,
                columnNumber: 25
              },
              this
            ) : cert.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 539,
              columnNumber: 21
            }, this),
            cert.issuer && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: cert.issuer }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 554,
              columnNumber: 35
            }, this),
            cert.date && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDateRange, { startDate: cert.date }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 555,
              columnNumber: 33
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 537,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 534,
          columnNumber: 13
        }, this),
        publications && publications.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Publications" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 564,
            columnNumber: 15
          }, this),
          publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
            pub.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: pub.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                href: safeUrl(pub.url),
                target: isExternalUrl(pub.url) ? "_blank" : void 0,
                children: pub.name
              },
              void 0,
              false,
              {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 570,
                columnNumber: 25
              },
              this
            ) : pub.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 568,
              columnNumber: 21
            }, this),
            pub.publisher && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Degree, { children: pub.publisher }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 581,
              columnNumber: 37
            }, this),
            pub.releaseDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDateRange, { startDate: pub.releaseDate }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 583,
              columnNumber: 21
            }, this),
            pub.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: pub.summary }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 585,
              columnNumber: 35
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 566,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 563,
          columnNumber: 13
        }, this),
        volunteer && volunteer.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "Volunteer" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 594,
            columnNumber: 15
          }, this),
          volunteer.map((vol, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperienceItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperienceHeader, { children: [
              vol.position && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Position, { children: vol.position }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 598,
                columnNumber: 38
              }, this),
              vol.organization && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Company, { children: vol.organization }, void 0, false, {
                fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                lineNumber: 599,
                columnNumber: 42
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                StyledDateRange,
                {
                  startDate: vol.startDate,
                  endDate: vol.endDate
                },
                void 0,
                false,
                {
                  fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
                  lineNumber: 600,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 597,
              columnNumber: 19
            }, this),
            vol.summary && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: vol.summary }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 606,
              columnNumber: 35
            }, this),
            vol.highlights && vol.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlights, { children: vol.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Highlight, { children: highlight }, i, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 611,
              columnNumber: 25
            }, this)) }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 609,
              columnNumber: 21
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 596,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 593,
          columnNumber: 13
        }, this),
        references && references.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSection, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSectionTitle, { children: "References" }, void 0, false, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 623,
            columnNumber: 15
          }, this),
          references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EducationItem, { children: [
            ref.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Institution, { children: ref.name }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 626,
              columnNumber: 32
            }, this),
            ref.reference && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children: ref.reference }, void 0, false, {
              fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
              lineNumber: 627,
              columnNumber: 37
            }, this)
          ] }, index, true, {
            fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
            lineNumber: 625,
            columnNumber: 17
          }, this))
        ] }, void 0, true, {
          fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
          lineNumber: 622,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
        lineNumber: 422,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
      lineNumber: 295,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "node_modules/jsonresume-theme-nordic-minimal/src/Resume.jsx",
    lineNumber: 284,
    columnNumber: 5
  }, this);
}
__name(Resume, "Resume");
var Resume_default = Resume;

// node_modules/jsonresume-theme-nordic-minimal/src/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function render(resume) {
  return renderResumeDocument(/* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Resume_default, { resume }, void 0, false, {
    fileName: "node_modules/jsonresume-theme-nordic-minimal/src/index.jsx",
    lineNumber: 5,
    columnNumber: 31
  }, this), {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
    ],
    headAfterStyles: `<style>
    * {
      box-sizing: border-box;
    }

    html {
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      background: #f8f9fa;
    }

    @media print {
      body {
        background: white;
      }

      @page {
        margin: 0.5cm;
      }
    }
  </style>`,
    title: `${resume.basics?.name || "Resume"} - Curriculum Vitae`,
    includeTokensCss: false
  });
}
__name(render, "render");
export {
  render
};
//# sourceMappingURL=src-BKEHQKNO.mjs.map
