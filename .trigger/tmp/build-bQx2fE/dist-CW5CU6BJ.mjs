import {
  require_jsx_runtime
} from "./chunk-RI445JHN.mjs";
import {
  require_server_node
} from "./chunk-3KD33LUC.mjs";
import {
  require_react
} from "./chunk-ZPESTPYW.mjs";
import {
  __name,
  __require,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/@jsonresume/jsonresume-theme-consultant-polished/dist/index.js
init_esm();
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_server = __toESM(require_server_node(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/marked/lib/marked.esm.js
init_esm();
function L() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
__name(L, "L");
var T = L();
function G(l3) {
  T = l3;
}
__name(G, "G");
var E = { exec: /* @__PURE__ */ __name(() => null, "exec") };
function d(l3, e = "") {
  let t = typeof l3 == "string" ? l3 : l3.source, n = { replace: /* @__PURE__ */ __name((r, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(m.caret, "$1"), t = t.replace(r, s), n;
  }, "replace"), getRegex: /* @__PURE__ */ __name(() => new RegExp(t, e), "getRegex") };
  return n;
}
__name(d, "d");
var be = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return false;
  }
})();
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: /* @__PURE__ */ __name((l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"), nextBulletRegex: /* @__PURE__ */ __name((l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"), hrRegex: /* @__PURE__ */ __name((l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"), fencesBeginRegex: /* @__PURE__ */ __name((l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"), headingBeginRegex: /* @__PURE__ */ __name((l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}#`), "headingBeginRegex"), htmlBeginRegex: /* @__PURE__ */ __name((l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex") };
var Re = /^(?:[ \t]*(?:\n|$))+/;
var Te = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Oe = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var I = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var we = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var F = /(?:[*+-]|\d{1,9}[.)])/;
var ie = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var oe = d(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var ye = d(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var Pe = /^[^\n]+/;
var Q = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var Se = d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var $e = d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, F).getRegex();
var v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var _e = d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var ae = d(j).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var Le = d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ae).getRegex();
var K = { blockquote: Le, code: Te, def: Se, fences: Oe, heading: we, hr: I, html: _e, lheading: oe, list: $e, newline: Re, paragraph: ae, table: E, text: Pe };
var re = d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var Me = { ...K, lheading: ye, table: re, paragraph: d(j).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex() };
var ze = { ...K, html: d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: E, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: d(j).replace("hr", I).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", oe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Ae = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var Ee = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var le = /^( {2,}|\\)\n(?!\s*$)/;
var Ie = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var D = /[\p{P}\p{S}]/u;
var W = /[\s\p{P}\p{S}]/u;
var ue = /[^\s\p{P}\p{S}]/u;
var Ce = d(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, W).getRegex();
var pe = /(?!~)[\p{P}\p{S}]/u;
var Be = /(?!~)[\s\p{P}\p{S}]/u;
var qe = /(?:[^\s\p{P}\p{S}]|~)/u;
var ve = d(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", be ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ce = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var De = d(ce, "u").replace(/punct/g, D).getRegex();
var He = d(ce, "u").replace(/punct/g, pe).getRegex();
var he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var Ze = d(he, "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Ge = d(he, "gu").replace(/notPunctSpace/g, qe).replace(/punctSpace/g, Be).replace(/punct/g, pe).getRegex();
var Ne = d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Fe = d(/\\(punct)/, "gu").replace(/punct/g, D).getRegex();
var je = d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var Qe = d(U).replace("(?:-->|$)", "-->").getRegex();
var Ue = d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Qe).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/;
var Ke = d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var de = d(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex();
var ke = d(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex();
var We = d("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex();
var se = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var X = { _backpedal: E, anyPunctuation: Fe, autolink: je, blockSkip: ve, br: le, code: Ee, del: E, emStrongLDelim: De, emStrongRDelimAst: Ze, emStrongRDelimUnd: Ne, escape: Ae, link: Ke, nolink: ke, punctuation: Ce, reflink: de, reflinkSearch: We, tag: Ue, text: Ie, url: E };
var Xe = { ...X, link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(), reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex() };
var N = { ...X, emStrongRDelimAst: Ge, emStrongLDelim: He, url: d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", se).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: d(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", se).getRegex() };
var Je = { ...N, br: d(le).replace("{2,}", "*").getRegex(), text: d(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var C = { normal: K, gfm: Me, pedantic: ze };
var M = { normal: X, gfm: N, breaks: Je, pedantic: Xe };
var Ve = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = /* @__PURE__ */ __name((l3) => Ve[l3], "ge");
function w(l3, e) {
  if (e) {
    if (m.escapeTest.test(l3)) return l3.replace(m.escapeReplace, ge);
  } else if (m.escapeTestNoEncode.test(l3)) return l3.replace(m.escapeReplaceNoEncode, ge);
  return l3;
}
__name(w, "w");
function J(l3) {
  try {
    l3 = encodeURI(l3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
__name(J, "J");
function V(l3, e) {
  let t = l3.replace(m.findPipe, (i, s, a) => {
    let o2 = false, p2 = s;
    for (; --p2 >= 0 && a[p2] === "\\"; ) o2 = !o2;
    return o2 ? "|" : " |";
  }), n = t.split(m.splitPipe), r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; r < n.length; r++) n[r] = n[r].trim().replace(m.slashPipe, "|");
  return n;
}
__name(V, "V");
function z(l3, e, t) {
  let n = l3.length;
  if (n === 0) return "";
  let r = 0;
  for (; r < n; ) {
    let i = l3.charAt(n - r - 1);
    if (i === e && !t) r++;
    else if (i !== e && t) r++;
    else break;
  }
  return l3.slice(0, n - r);
}
__name(z, "z");
function fe(l3, e) {
  if (l3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < l3.length; n++) if (l3[n] === "\\") n++;
  else if (l3[n] === e[0]) t++;
  else if (l3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
__name(fe, "fe");
function me(l3, e, t, n, r) {
  let i = e.href, s = e.title || null, a = l3[1].replace(r.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let o2 = { type: l3[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: a, tokens: n.inlineTokens(a) };
  return n.state.inLink = false, o2;
}
__name(me, "me");
function Ye(l3, e, t) {
  let n = l3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let r = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(t.other.beginningSpace);
    if (s === null) return i;
    let [a] = s;
    return a.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
__name(Ye, "Ye");
var y = class {
  static {
    __name(this, "y");
  }
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : z(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Ye(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = z(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: z(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = z(t[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; n.length > 0; ) {
        let a = false, o2 = [], p2;
        for (p2 = 0; p2 < n.length; p2++) if (this.rules.other.blockquoteStart.test(n[p2])) o2.push(n[p2]), a = true;
        else if (!a) o2.push(n[p2]);
        else break;
        n = n.slice(p2);
        let u = o2.join(`
`), c = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${u}` : u, i = i ? `${i}
${c}` : c;
        let g2 = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, s, true), this.lexer.state.top = g2, n.length === 0) break;
        let h = s.at(-1);
        if (h?.type === "code") break;
        if (h?.type === "blockquote") {
          let R2 = h, f2 = R2.raw + `
` + n.join(`
`), O2 = this.blockquote(f2);
          s[s.length - 1] = O2, r = r.substring(0, r.length - R2.raw.length) + O2.raw, i = i.substring(0, i.length - R2.text.length) + O2.text;
          break;
        } else if (h?.type === "list") {
          let R2 = h, f2 = R2.raw + `
` + n.join(`
`), O2 = this.list(f2);
          s[s.length - 1] = O2, r = r.substring(0, r.length - h.raw.length) + O2.raw, i = i.substring(0, i.length - R2.raw.length) + O2.raw, n = f2.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: s, text: i };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), r = n.length > 1, i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let s = this.rules.other.listItemRegex(n), a = false;
      for (; e; ) {
        let p2 = false, u = "", c = "";
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let g2 = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (H2) => " ".repeat(3 * H2.length)), h = e.split(`
`, 1)[0], R2 = !g2.trim(), f2 = 0;
        if (this.options.pedantic ? (f2 = 2, c = g2.trimStart()) : R2 ? f2 = t[1].length + 1 : (f2 = t[2].search(this.rules.other.nonSpaceChar), f2 = f2 > 4 ? 1 : f2, c = g2.slice(f2), f2 += t[1].length), R2 && this.rules.other.blankLine.test(h) && (u += h + `
`, e = e.substring(h.length + 1), p2 = true), !p2) {
          let H2 = this.rules.other.nextBulletRegex(f2), ee2 = this.rules.other.hrRegex(f2), te2 = this.rules.other.fencesBeginRegex(f2), ne2 = this.rules.other.headingBeginRegex(f2), xe2 = this.rules.other.htmlBeginRegex(f2);
          for (; e; ) {
            let Z2 = e.split(`
`, 1)[0], A2;
            if (h = Z2, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), A2 = h) : A2 = h.replace(this.rules.other.tabCharGlobal, "    "), te2.test(h) || ne2.test(h) || xe2.test(h) || H2.test(h) || ee2.test(h)) break;
            if (A2.search(this.rules.other.nonSpaceChar) >= f2 || !h.trim()) c += `
` + A2.slice(f2);
            else {
              if (R2 || g2.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || te2.test(g2) || ne2.test(g2) || ee2.test(g2)) break;
              c += `
` + h;
            }
            !R2 && !h.trim() && (R2 = true), u += Z2 + `
`, e = e.substring(Z2.length + 1), g2 = A2.slice(f2);
          }
        }
        i.loose || (a ? i.loose = true : this.rules.other.doubleBlankLine.test(u) && (a = true));
        let O2 = null, Y2;
        this.options.gfm && (O2 = this.rules.other.listIsTask.exec(c), O2 && (Y2 = O2[0] !== "[ ] ", c = c.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: u, task: !!O2, checked: Y2, loose: false, text: c, tokens: [] }), i.raw += u;
      }
      let o2 = i.items.at(-1);
      if (o2) o2.raw = o2.raw.trimEnd(), o2.text = o2.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let p2 = 0; p2 < i.items.length; p2++) if (this.lexer.state.top = false, i.items[p2].tokens = this.lexer.blockTokens(i.items[p2].text, []), !i.loose) {
        let u = i.items[p2].tokens.filter((g2) => g2.type === "space"), c = u.length > 0 && u.some((g2) => this.rules.other.anyLine.test(g2.raw));
        i.loose = c;
      }
      if (i.loose) for (let p2 = 0; p2 < i.items.length; p2++) i.items[p2].loose = true;
      return i;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: r, title: i };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = V(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let a of r) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < n.length; a++) s.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: true, align: s.align[a] });
      for (let a of i) s.rows.push(V(a, s.header.length).map((o2, p2) => ({ text: o2, tokens: this.lexer.inline(o2), header: false, align: s.align[p2] })));
      return s;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let s = z(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = fe(t[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o2 = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, o2).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else i = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), me(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        let s = n[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return me(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let s = [...r[0]].length - 1, a, o2, p2 = s, u = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = c.exec(t)) != null; ) {
        if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
        if (o2 = [...a].length, r[3] || r[4]) {
          p2 += o2;
          continue;
        } else if ((r[5] || r[6]) && s % 3 && !((s + o2) % 3)) {
          u += o2;
          continue;
        }
        if (p2 -= o2, p2 > 0) continue;
        o2 = Math.min(o2, o2 + p2 + u);
        let g2 = [...r[0]][0].length, h = e.slice(0, s + r.index + g2 + o2);
        if (Math.min(s, o2) % 2) {
          let f2 = h.slice(1, -1);
          return { type: "em", raw: h, text: f2, tokens: this.lexer.inlineTokens(f2) };
        }
        let R2 = h.slice(2, -2);
        return { type: "strong", raw: h, text: R2, tokens: this.lexer.inlineTokens(R2) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@") n = t[0], r = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (i !== t[0]);
        n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
};
var x = class l {
  static {
    __name(this, "l");
  }
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { other: m, block: C.normal, inline: M.normal };
    this.options.pedantic ? (t.block = C.pedantic, t.inline = M.pedantic) : this.options.gfm && (t.block = C.gfm, this.options.breaks ? t.inline = M.breaks : t.inline = M.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: C, inline: M };
  }
  static lex(e, t) {
    return new l(t).lex(e);
  }
  static lexInline(e, t) {
    return new l(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, a = e.slice(1), o2;
        this.options.extensions.startBlock.forEach((p2) => {
          o2 = p2.call({ lexer: this }, a), typeof o2 == "number" && o2 >= 0 && (s = Math.min(s, o2));
        }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let s = t.at(-1);
        n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (e) {
        let s = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, r = null;
    if (this.tokens.links) {
      let o2 = Object.keys(this.tokens.links);
      if (o2.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) o2.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i;
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let s = false, a = "";
    for (; e; ) {
      s || (a = ""), s = false;
      let o2;
      if (this.options.extensions?.inline?.some((u) => (o2 = u.call({ lexer: this }, e, t)) ? (e = e.substring(o2.raw.length), t.push(o2), true) : false)) continue;
      if (o2 = this.tokenizer.escape(e)) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.tag(e)) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.link(e)) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o2.raw.length);
        let u = t.at(-1);
        o2.type === "text" && u?.type === "text" ? (u.raw += o2.raw, u.text += o2.text) : t.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.emStrong(e, n, a)) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.codespan(e)) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.br(e)) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.del(e)) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.autolink(e)) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      if (!this.state.inLink && (o2 = this.tokenizer.url(e))) {
        e = e.substring(o2.raw.length), t.push(o2);
        continue;
      }
      let p2 = e;
      if (this.options.extensions?.startInline) {
        let u = 1 / 0, c = e.slice(1), g2;
        this.options.extensions.startInline.forEach((h) => {
          g2 = h.call({ lexer: this }, c), typeof g2 == "number" && g2 >= 0 && (u = Math.min(u, g2));
        }), u < 1 / 0 && u >= 0 && (p2 = e.substring(0, u + 1));
      }
      if (o2 = this.tokenizer.inlineText(p2)) {
        e = e.substring(o2.raw.length), o2.raw.slice(-1) !== "_" && (a = o2.raw.slice(-1)), s = true;
        let u = t.at(-1);
        u?.type === "text" ? (u.raw += o2.raw, u.text += o2.text) : t.push(o2);
        continue;
      }
      if (e) {
        let u = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else throw new Error(u);
      }
    }
    return t;
  }
};
var P = class {
  static {
    __name(this, "P");
  }
  options;
  parser;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + w(r) + '">' + (n ? i : w(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : w(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, r = "";
    for (let a = 0; a < e.items.length; a++) {
      let o2 = e.items[a];
      r += this.listitem(o2);
    }
    let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      let n = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + w(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({ type: "text", raw: n + " ", text: n + " ", escaped: true }) : t += n + " ";
    }
    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
    t += this.tablerow({ text: n });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      let s = e.rows[i];
      n = "";
      for (let a = 0; a < s.length; a++) n += this.tablecell(s[a]);
      r += this.tablerow({ text: n });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${w(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let r = this.parser.parseInline(n), i = J(e);
    if (i === null) return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + w(t) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    let i = J(e);
    if (i === null) return w(n);
    e = i;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${w(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : w(e.text);
  }
};
var $ = class {
  static {
    __name(this, "$");
  }
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
};
var b = class l2 {
  static {
    __name(this, "l");
  }
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
  }
  static parse(e, t) {
    return new l2(t).parse(e);
  }
  static parseInline(e, t) {
    return new l2(t).parseInline(e);
  }
  parse(e, t = true) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let a = i, o2 = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (o2 !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          n += o2 || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "space": {
          n += this.renderer.space(s);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(s);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(s);
          continue;
        }
        case "code": {
          n += this.renderer.code(s);
          continue;
        }
        case "table": {
          n += this.renderer.table(s);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          n += this.renderer.list(s);
          continue;
        }
        case "html": {
          n += this.renderer.html(s);
          continue;
        }
        case "def": {
          n += this.renderer.def(s);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(s);
          continue;
        }
        case "text": {
          let a = s, o2 = this.renderer.text(a);
          for (; r + 1 < e.length && e[r + 1].type === "text"; ) a = e[++r], o2 += `
` + this.renderer.text(a);
          t ? n += this.renderer.paragraph({ type: "paragraph", raw: o2, text: o2, tokens: [{ type: "text", raw: o2, text: o2, escaped: true }] }) : n += o2;
          continue;
        }
        default: {
          let a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (a !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += a || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "escape": {
          n += t.text(s);
          break;
        }
        case "html": {
          n += t.html(s);
          break;
        }
        case "link": {
          n += t.link(s);
          break;
        }
        case "image": {
          n += t.image(s);
          break;
        }
        case "strong": {
          n += t.strong(s);
          break;
        }
        case "em": {
          n += t.em(s);
          break;
        }
        case "codespan": {
          n += t.codespan(s);
          break;
        }
        case "br": {
          n += t.br(s);
          break;
        }
        case "del": {
          n += t.del(s);
          break;
        }
        case "text": {
          n += t.text(s);
          break;
        }
        default: {
          let a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
};
var S = class {
  static {
    __name(this, "S");
  }
  options;
  block;
  constructor(e) {
    this.options = e || T;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer() {
    return this.block ? x.lex : x.lexInline;
  }
  provideParser() {
    return this.block ? b.parse : b.parseInline;
  }
};
var B = class {
  static {
    __name(this, "B");
  }
  defaults = L();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = b;
  Renderer = P;
  TextRenderer = $;
  Lexer = x;
  Tokenizer = y;
  Hooks = S;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
      case "table": {
        let i = r;
        for (let s of i.header) n = n.concat(this.walkTokens(s.tokens, t));
        for (let s of i.rows) for (let a of s) n = n.concat(this.walkTokens(a.tokens, t));
        break;
      }
      case "list": {
        let i = r;
        n = n.concat(this.walkTokens(i.items, t));
        break;
      }
      default: {
        let i = r;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let a = i[s].flat(1 / 0);
          n = n.concat(this.walkTokens(a, t));
        }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let r = { ...n };
      if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t.renderers[i.name];
          s ? t.renderers[i.name] = function(...a) {
            let o2 = i.renderer.apply(this, a);
            return o2 === false && (o2 = s.apply(this, a)), o2;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[i.level];
          s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), r.extensions = t), n.renderer) {
        let i = this.defaults.renderer || new P(this.defaults);
        for (let s in n.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let a = s, o2 = n.renderer[a], p2 = i[a];
          i[a] = (...u) => {
            let c = o2.apply(i, u);
            return c === false && (c = p2.apply(i, u)), c || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new y(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let a = s, o2 = n.tokenizer[a], p2 = i[a];
          i[a] = (...u) => {
            let c = o2.apply(i, u);
            return c === false && (c = p2.apply(i, u)), c;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new S();
        for (let s in n.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let a = s, o2 = n.hooks[a], p2 = i[a];
          S.passThroughHooks.has(s) ? i[a] = (u) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(s)) return (async () => {
              let g2 = await o2.call(i, u);
              return p2.call(i, g2);
            })();
            let c = o2.call(i, u);
            return p2.call(i, c);
          } : i[a] = (...u) => {
            if (this.defaults.async) return (async () => {
              let g2 = await o2.apply(i, u);
              return g2 === false && (g2 = await p2.apply(i, u)), g2;
            })();
            let c = o2.apply(i, u);
            return c === false && (c = p2.apply(i, u)), c;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, s = n.walkTokens;
        r.walkTokens = function(a) {
          let o2 = [];
          return o2.push(s.call(this, a)), i && (o2 = o2.concat(i.call(this, a))), o2;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return x.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return b.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, r) => {
      let i = { ...r }, s = { ...this.defaults, ...i }, a = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && i.async === false) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async) return (async () => {
        let o2 = s.hooks ? await s.hooks.preprocess(n) : n, u = await (s.hooks ? await s.hooks.provideLexer() : e ? x.lex : x.lexInline)(o2, s), c = s.hooks ? await s.hooks.processAllTokens(u) : u;
        s.walkTokens && await Promise.all(this.walkTokens(c, s.walkTokens));
        let h = await (s.hooks ? await s.hooks.provideParser() : e ? b.parse : b.parseInline)(c, s);
        return s.hooks ? await s.hooks.postprocess(h) : h;
      })().catch(a);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let p2 = (s.hooks ? s.hooks.provideLexer() : e ? x.lex : x.lexInline)(n, s);
        s.hooks && (p2 = s.hooks.processAllTokens(p2)), s.walkTokens && this.walkTokens(p2, s.walkTokens);
        let c = (s.hooks ? s.hooks.provideParser() : e ? b.parse : b.parseInline)(p2, s);
        return s.hooks && (c = s.hooks.postprocess(c)), c;
      } catch (o2) {
        return a(o2);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let r = "<p>An error occurred:</p><pre>" + w(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var _ = new B();
function k(l3, e) {
  return _.parse(l3, e);
}
__name(k, "k");
k.options = k.setOptions = function(l3) {
  return _.setOptions(l3), k.defaults = _.defaults, G(k.defaults), k;
};
k.getDefaults = L;
k.defaults = T;
k.use = function(...l3) {
  return _.use(...l3), k.defaults = _.defaults, G(k.defaults), k;
};
k.walkTokens = function(l3, e) {
  return _.walkTokens(l3, e);
};
k.parseInline = _.parseInline;
k.Parser = b;
k.parser = b.parse;
k.Renderer = P;
k.TextRenderer = $;
k.Lexer = x;
k.lexer = x.lex;
k.Tokenizer = y;
k.Hooks = S;
k.parse = k;
var Zt = k.options;
var Gt = k.setOptions;
var Nt = k.use;
var Ft = k.walkTokens;
var jt = k.parseInline;
var Ut = b.parse;
var Kt = x.lex;

// node_modules/@jsonresume/jsonresume-theme-consultant-polished/dist/index.js
var __assign = /* @__PURE__ */ __name(function() {
  __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2)) t[p2] = s[p2];
    }
    return t;
  }, "__assign2");
  return __assign.apply(this, arguments);
}, "__assign");
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l3 = from2.length, ar; i < l3; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
__name(__spreadArray, "__spreadArray");
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
__name(memoize, "memoize");
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function getDefaultExportFromCjs(x22) {
  return x22 && x22.__esModule && Object.prototype.hasOwnProperty.call(x22, "default") ? x22["default"] : x22;
}
__name(getDefaultExportFromCjs, "getDefaultExportFromCjs");
var shallowequal;
var hasRequiredShallowequal;
function requireShallowequal() {
  if (hasRequiredShallowequal) return shallowequal;
  hasRequiredShallowequal = 1;
  shallowequal = /* @__PURE__ */ __name(function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
      return !!ret;
    }
    if (objA === objB) {
      return true;
    }
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
      return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var idx = 0; idx < keysA.length; idx++) {
      var key = keysA[idx];
      if (!bHasOwnProperty(key)) {
        return false;
      }
      var valueA = objA[key];
      var valueB = objB[key];
      ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
      if (ret === false || ret === void 0 && valueA !== valueB) {
        return false;
      }
    }
    return true;
  }, "shallowEqual");
  return shallowequal;
}
__name(requireShallowequal, "requireShallowequal");
var shallowequalExports = requireShallowequal();
var p = /* @__PURE__ */ getDefaultExportFromCjs(shallowequalExports);
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
__name(hash, "hash");
function trim(value) {
  return value.trim();
}
__name(trim, "trim");
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
__name(match, "match");
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
__name(replace, "replace");
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
__name(indexof, "indexof");
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
__name(charat, "charat");
function substr(value, begin, end) {
  return value.slice(begin, end);
}
__name(substr, "substr");
function strlen(value) {
  return value.length;
}
__name(strlen, "strlen");
function sizeof(value) {
  return value.length;
}
__name(sizeof, "sizeof");
function append(value, array) {
  return array.push(value), value;
}
__name(append, "append");
function combine(array, callback) {
  return array.map(callback).join("");
}
__name(combine, "combine");
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}
__name(filter, "filter");
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
__name(node, "node");
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
__name(copy, "copy");
function lift(root) {
  while (root.root)
    root = copy(root.root, { children: [root] });
  append(root, root.siblings);
}
__name(lift, "lift");
function char() {
  return character;
}
__name(char, "char");
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
__name(prev, "prev");
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
__name(next, "next");
function peek() {
  return charat(characters, position);
}
__name(peek, "peek");
function caret() {
  return position;
}
__name(caret, "caret");
function slice(begin, end) {
  return substr(characters, begin, end);
}
__name(slice, "slice");
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
__name(token, "token");
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
__name(alloc, "alloc");
function dealloc(value) {
  return characters = "", value;
}
__name(dealloc, "dealloc");
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
__name(delimit, "delimit");
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
__name(whitespace, "whitespace");
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
__name(escaping, "escaping");
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
__name(delimiter, "delimiter");
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
__name(commenter, "commenter");
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
__name(identifier, "identifier");
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
__name(compile, "compile");
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
__name(parse, "parse");
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j22 = 0, k22 = 0; i < index; ++i)
    for (var x22 = 0, y22 = substr(value, post + 1, post = abs(j22 = points[i])), z22 = value; x22 < size; ++x22)
      if (z22 = trim(j22 > 0 ? rule[x22] + " " + y22 : replace(y22, /&\f/g, rule[x22])))
        props[k22++] = z22;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
__name(ruleset, "ruleset");
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
__name(comment, "comment");
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
__name(declaration, "declaration");
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // tab-size
    case 4789:
      return MOZ + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    // justify-self
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_22, a, b2, c, d2, e, f2) {
        return MS + a + ":" + b2 + f2 + (c ? MS + a + "-span:" + (d2 ? e : +e - +b2) + f2 : "") + value;
      });
    // position: sticky
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        // (inline-)?gri(d)
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}
__name(prefix, "prefix");
function serialize(children, callback) {
  var output = "";
  for (var i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
__name(serialize, "serialize");
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
__name(stringify, "stringify");
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
__name(middleware, "middleware");
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
__name(rulesheet, "rulesheet");
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(children = element.props, function(value) {
              switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                // :read-(only|write)
                case ":read-only":
                case ":read-write":
                  lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
                // :placeholder
                case "::placeholder":
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}
__name(prefixer, "prefixer");
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var m2 = "active";
var y2 = "data-styled-version";
var v2 = "6.1.19";
var g = "/*!sc*/\n";
var S2 = "undefined" != typeof window && "undefined" != typeof document;
var w2 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV);
var E2 = /invalid hook call/i;
var N2 = /* @__PURE__ */ new Set();
var P2 = /* @__PURE__ */ __name(function(t, n) {
  if ("production" !== process.env.NODE_ENV) {
    var o2 = n ? ' with the id of "'.concat(n, '"') : "", s = "The component ".concat(t).concat(o2, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n", i = console.error;
    try {
      var a = true;
      console.error = function(t2) {
        for (var n2 = [], o3 = 1; o3 < arguments.length; o3++) n2[o3 - 1] = arguments[o3];
        E2.test(t2) ? (a = false, N2.delete(s)) : i.apply(void 0, __spreadArray([t2], n2, false));
      }, (0, import_react.useRef)(), a && !N2.has(s) && (console.warn(s), N2.add(s));
    } catch (e) {
      E2.test(e.message) && N2.delete(s);
    } finally {
      console.error = i;
    }
  }
}, "P");
var _2 = Object.freeze([]);
var C2 = Object.freeze({});
function I2(e, t, n) {
  return void 0 === n && (n = C2), e.theme !== n.theme && e.theme || t || n.theme;
}
__name(I2, "I");
var A = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]);
var O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var D2 = /(^-|-$)/g;
function R(e) {
  return e.replace(O, "-").replace(D2, "");
}
__name(R, "R");
var T2 = /(a)(d)/gi;
var k2 = 52;
var j2 = /* @__PURE__ */ __name(function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}, "j");
function x2(e) {
  var t, n = "";
  for (t = Math.abs(e); t > k2; t = t / k2 | 0) n = j2(t % k2) + n;
  return (j2(t % k2) + n).replace(T2, "$1-$2");
}
__name(x2, "x");
var V2;
var F2 = 5381;
var z2 = /* @__PURE__ */ __name(function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, "z");
var M2 = /* @__PURE__ */ __name(function(e) {
  return z2(F2, e);
}, "M");
function $2(e) {
  return x2(M2(e) >>> 0);
}
__name($2, "$");
function B2(e) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
__name(B2, "B");
function G2(e) {
  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
__name(G2, "G");
var L2 = "function" == typeof Symbol && Symbol.for;
var Y = L2 ? Symbol.for("react.memo") : 60115;
var q2 = L2 ? Symbol.for("react.forward_ref") : 60112;
var W2 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
var H = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
var U2 = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
var J2 = ((V2 = {})[q2] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, V2[Y] = U2, V2);
function X2(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Y ? U2 : "$$typeof" in e ? J2[e.$$typeof] : W2;
  var t;
}
__name(X2, "X");
var Z = Object.defineProperty;
var K2 = Object.getOwnPropertyNames;
var Q2 = Object.getOwnPropertySymbols;
var ee = Object.getOwnPropertyDescriptor;
var te = Object.getPrototypeOf;
var ne = Object.prototype;
function oe2(e, t, n) {
  if ("string" != typeof t) {
    if (ne) {
      var o2 = te(t);
      o2 && o2 !== ne && oe2(e, o2, n);
    }
    var r = K2(t);
    Q2 && (r = r.concat(Q2(t)));
    for (var s = X2(e), i = X2(t), a = 0; a < r.length; ++a) {
      var c = r[a];
      if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
        var l3 = ee(t, c);
        try {
          Z(e, c, l3);
        } catch (e2) {
        }
      }
    }
  }
  return e;
}
__name(oe2, "oe");
function re2(e) {
  return "function" == typeof e;
}
__name(re2, "re");
function se2(e) {
  return "object" == typeof e && "styledComponentId" in e;
}
__name(se2, "se");
function ie2(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
__name(ie2, "ie");
function ae2(e, t) {
  if (0 === e.length) return "";
  for (var n = e[0], o2 = 1; o2 < e.length; o2++) n += t ? t + e[o2] : e[o2];
  return n;
}
__name(ae2, "ae");
function ce2(e) {
  return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
__name(ce2, "ce");
function le2(e, t, n) {
  if (void 0 === n && (n = false), !n && !ce2(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var o2 = 0; o2 < t.length; o2++) e[o2] = le2(e[o2], t[o2]);
  else if (ce2(t)) for (var o2 in t) e[o2] = le2(e[o2], t[o2]);
  return e;
}
__name(le2, "le");
function ue2(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
__name(ue2, "ue");
var pe2 = "production" !== process.env.NODE_ENV ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n", 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function de2() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], o2 = [], r = 1, s = e.length; r < s; r += 1) o2.push(e[r]);
  return o2.forEach(function(e2) {
    n = n.replace(/%[a-z]/, e2);
  }), n;
}
__name(de2, "de");
function he2(t) {
  for (var n = [], o2 = 1; o2 < arguments.length; o2++) n[o2 - 1] = arguments[o2];
  return "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(de2.apply(void 0, __spreadArray([pe2[t]], n, false)).trim());
}
__name(he2, "he");
var fe2 = function() {
  function e(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
  }
  __name(e, "e");
  return e.prototype.indexOfGroup = function(e2) {
    for (var t = 0, n = 0; n < e2; n++) t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(e2, t) {
    if (e2 >= this.groupSizes.length) {
      for (var n = this.groupSizes, o2 = n.length, r = o2; e2 >= r; ) if ((r <<= 1) < 0) throw he2(16, "".concat(e2));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var s = o2; s < r; s++) this.groupSizes[s] = 0;
    }
    for (var i = this.indexOfGroup(e2 + 1), a = (s = 0, t.length); s < a; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e2]++, i++);
  }, e.prototype.clearGroup = function(e2) {
    if (e2 < this.length) {
      var t = this.groupSizes[e2], n = this.indexOfGroup(e2), o2 = n + t;
      this.groupSizes[e2] = 0;
      for (var r = n; r < o2; r++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(e2) {
    var t = "";
    if (e2 >= this.length || 0 === this.groupSizes[e2]) return t;
    for (var n = this.groupSizes[e2], o2 = this.indexOfGroup(e2), r = o2 + n, s = o2; s < r; s++) t += "".concat(this.tag.getRule(s)).concat(g);
    return t;
  }, e;
}();
var me2 = 1 << 30;
var ye2 = /* @__PURE__ */ new Map();
var ve2 = /* @__PURE__ */ new Map();
var ge2 = 1;
var Se2 = /* @__PURE__ */ __name(function(e) {
  if (ye2.has(e)) return ye2.get(e);
  for (; ve2.has(ge2); ) ge2++;
  var t = ge2++;
  if ("production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > me2)) throw he2(16, "".concat(t));
  return ye2.set(e, t), ve2.set(t, e), t;
}, "Se");
var we2 = /* @__PURE__ */ __name(function(e, t) {
  ge2 = t + 1, ye2.set(e, t), ve2.set(t, e);
}, "we");
var be2 = "style[".concat(f, "][").concat(y2, '="').concat(v2, '"]');
var Ee2 = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
var Ne2 = /* @__PURE__ */ __name(function(e, t, n) {
  for (var o2, r = n.split(","), s = 0, i = r.length; s < i; s++) (o2 = r[s]) && e.registerName(t, o2);
}, "Ne");
var Pe2 = /* @__PURE__ */ __name(function(e, t) {
  for (var n, o2 = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), r = [], s = 0, i = o2.length; s < i; s++) {
    var a = o2[s].trim();
    if (a) {
      var c = a.match(Ee2);
      if (c) {
        var l3 = 0 | parseInt(c[1], 10), u = c[2];
        0 !== l3 && (we2(u, l3), Ne2(e, u, c[3]), e.getTag().insertRules(l3, r)), r.length = 0;
      } else r.push(a);
    }
  }
}, "Pe");
var _e2 = /* @__PURE__ */ __name(function(e) {
  for (var t = document.querySelectorAll(be2), n = 0, o2 = t.length; n < o2; n++) {
    var r = t[n];
    r && r.getAttribute(f) !== m2 && (Pe2(e, r), r.parentNode && r.parentNode.removeChild(r));
  }
}, "_e");
function Ce2() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
__name(Ce2, "Ce");
var Ie2 = /* @__PURE__ */ __name(function(e) {
  var t = document.head, n = e || t, o2 = document.createElement("style"), r = function(e2) {
    var t2 = Array.from(e2.querySelectorAll("style[".concat(f, "]")));
    return t2[t2.length - 1];
  }(n), s = void 0 !== r ? r.nextSibling : null;
  o2.setAttribute(f, m2), o2.setAttribute(y2, v2);
  var i = Ce2();
  return i && o2.setAttribute("nonce", i), n.insertBefore(o2, s), o2;
}, "Ie");
var Ae2 = function() {
  function e(e2) {
    this.element = Ie2(e2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e3) {
      if (e3.sheet) return e3.sheet;
      for (var t = document.styleSheets, n = 0, o2 = t.length; n < o2; n++) {
        var r = t[n];
        if (r.ownerNode === e3) return r;
      }
      throw he2(17);
    }(this.element), this.length = 0;
  }
  __name(e, "e");
  return e.prototype.insertRule = function(e2, t) {
    try {
      return this.sheet.insertRule(t, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }, e.prototype.deleteRule = function(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }, e.prototype.getRule = function(e2) {
    var t = this.sheet.cssRules[e2];
    return t && t.cssText ? t.cssText : "";
  }, e;
}();
var Oe2 = function() {
  function e(e2) {
    this.element = Ie2(e2), this.nodes = this.element.childNodes, this.length = 0;
  }
  __name(e, "e");
  return e.prototype.insertRule = function(e2, t) {
    if (e2 <= this.length && e2 >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[e2] || null), this.length++, true;
    }
    return false;
  }, e.prototype.deleteRule = function(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }, e;
}();
var De2 = function() {
  function e(e2) {
    this.rules = [], this.length = 0;
  }
  __name(e, "e");
  return e.prototype.insertRule = function(e2, t) {
    return e2 <= this.length && (this.rules.splice(e2, 0, t), this.length++, true);
  }, e.prototype.deleteRule = function(e2) {
    this.rules.splice(e2, 1), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.rules[e2] : "";
  }, e;
}();
var Re2 = S2;
var Te2 = { isServer: !S2, useCSSOMInjection: !w2 };
var ke2 = function() {
  function e(e2, n, o2) {
    void 0 === e2 && (e2 = C2), void 0 === n && (n = {});
    var r = this;
    this.options = __assign(__assign({}, Te2), e2), this.gs = n, this.names = new Map(o2), this.server = !!e2.isServer, !this.server && S2 && Re2 && (Re2 = false, _e2(this)), ue2(this, function() {
      return function(e3) {
        for (var t = e3.getTag(), n2 = t.length, o3 = "", r2 = function(n3) {
          var r3 = function(e4) {
            return ve2.get(e4);
          }(n3);
          if (void 0 === r3) return "continue";
          var s2 = e3.names.get(r3), i = t.getGroup(n3);
          if (void 0 === s2 || !s2.size || 0 === i.length) return "continue";
          var a = "".concat(f, ".g").concat(n3, '[id="').concat(r3, '"]'), c = "";
          void 0 !== s2 && s2.forEach(function(e4) {
            e4.length > 0 && (c += "".concat(e4, ","));
          }), o3 += "".concat(i).concat(a, '{content:"').concat(c, '"}').concat(g);
        }, s = 0; s < n2; s++) r2(s);
        return o3;
      }(r);
    });
  }
  __name(e, "e");
  return e.registerId = function(e2) {
    return Se2(e2);
  }, e.prototype.rehydrate = function() {
    !this.server && S2 && _e2(this);
  }, e.prototype.reconstructWithOptions = function(n, o2) {
    return void 0 === o2 && (o2 = true), new e(__assign(__assign({}, this.options), n), this.gs, o2 && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (e2 = function(e3) {
      var t = e3.useCSSOMInjection, n = e3.target;
      return e3.isServer ? new De2(n) : t ? new Ae2(n) : new Oe2(n);
    }(this.options), new fe2(e2)));
    var e2;
  }, e.prototype.hasNameForId = function(e2, t) {
    return this.names.has(e2) && this.names.get(e2).has(t);
  }, e.prototype.registerName = function(e2, t) {
    if (Se2(e2), this.names.has(e2)) this.names.get(e2).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(e2, n);
    }
  }, e.prototype.insertRules = function(e2, t, n) {
    this.registerName(e2, t), this.getTag().insertRules(Se2(e2), n);
  }, e.prototype.clearNames = function(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }, e.prototype.clearRules = function(e2) {
    this.getTag().clearGroup(Se2(e2)), this.clearNames(e2);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}();
var je2 = /&/g;
var xe = /^\s*\/\/.*$/gm;
function Ve2(e, t) {
  return e.map(function(e2) {
    return "rule" === e2.type && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
      return "".concat(t, " ").concat(e3);
    })), Array.isArray(e2.children) && "@keyframes" !== e2.type && (e2.children = Ve2(e2.children, t)), e2;
  });
}
__name(Ve2, "Ve");
function Fe2(e) {
  var t, n, o2, r = void 0 === e ? C2 : e, s = r.options, i = void 0 === s ? C2 : s, a = r.plugins, c = void 0 === a ? _2 : a, l3 = /* @__PURE__ */ __name(function(e2, o3, r2) {
    return r2.startsWith(n) && r2.endsWith(n) && r2.replaceAll(n, "").length > 0 ? ".".concat(t) : e2;
  }, "l"), u = c.slice();
  u.push(function(e2) {
    e2.type === RULESET && e2.value.includes("&") && (e2.props[0] = e2.props[0].replace(je2, n).replace(o2, l3));
  }), i.prefix && u.push(prefixer), u.push(stringify);
  var p2 = /* @__PURE__ */ __name(function(e2, r2, s2, a2) {
    void 0 === r2 && (r2 = ""), void 0 === s2 && (s2 = ""), void 0 === a2 && (a2 = "&"), t = a2, n = r2, o2 = new RegExp("\\".concat(n, "\\b"), "g");
    var c2 = e2.replace(xe, ""), l22 = compile(s2 || r2 ? "".concat(s2, " ").concat(r2, " { ").concat(c2, " }") : c2);
    i.namespace && (l22 = Ve2(l22, i.namespace));
    var p3 = [];
    return serialize(l22, middleware(u.concat(rulesheet(function(e3) {
      return p3.push(e3);
    })))), p3;
  }, "p2");
  return p2.hash = c.length ? c.reduce(function(e2, t2) {
    return t2.name || he2(15), z2(e2, t2.name);
  }, F2).toString() : "", p2;
}
__name(Fe2, "Fe");
var ze2 = new ke2();
var Me2 = Fe2();
var $e2 = import_react.default.createContext({ shouldForwardProp: void 0, styleSheet: ze2, stylis: Me2 });
$e2.Consumer;
var Ge2 = import_react.default.createContext(void 0);
function Le2() {
  return (0, import_react.useContext)($e2);
}
__name(Le2, "Le");
function Ye2(e) {
  var t = (0, import_react.useState)(e.stylisPlugins), n = t[0], r = t[1], c = Le2().styleSheet, l3 = (0, import_react.useMemo)(function() {
    var t2 = c;
    return e.sheet ? t2 = e.sheet : e.target && (t2 = t2.reconstructWithOptions({ target: e.target }, false)), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
  }, [e.disableCSSOMInjection, e.sheet, e.target, c]), u = (0, import_react.useMemo)(function() {
    return Fe2({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
  }, [e.enableVendorPrefixes, e.namespace, n]);
  (0, import_react.useEffect)(function() {
    p(n, e.stylisPlugins) || r(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var d2 = (0, import_react.useMemo)(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: l3, stylis: u };
  }, [e.shouldForwardProp, l3, u]);
  return import_react.default.createElement($e2.Provider, { value: d2 }, import_react.default.createElement(Ge2.Provider, { value: u }, e.children));
}
__name(Ye2, "Ye");
var qe2 = function() {
  function e(e2, t) {
    var n = this;
    this.inject = function(e3, t2) {
      void 0 === t2 && (t2 = Me2);
      var o2 = n.name + t2.hash;
      e3.hasNameForId(n.id, o2) || e3.insertRules(n.id, o2, t2(n.rules, o2, "@keyframes"));
    }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t, ue2(this, function() {
      throw he2(12, String(n.name));
    });
  }
  __name(e, "e");
  return e.prototype.getName = function(e2) {
    return void 0 === e2 && (e2 = Me2), this.name + e2.hash;
  }, e;
}();
var We2 = /* @__PURE__ */ __name(function(e) {
  return e >= "A" && e <= "Z";
}, "We");
function He2(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var o2 = e[n];
    if (1 === n && "-" === o2 && "-" === e[0]) return e;
    We2(o2) ? t += "-" + o2.toLowerCase() : t += o2;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
__name(He2, "He");
var Ue2 = /* @__PURE__ */ __name(function(e) {
  return null == e || false === e || "" === e;
}, "Ue");
var Je2 = /* @__PURE__ */ __name(function(t) {
  var n, o2, r = [];
  for (var s in t) {
    var i = t[s];
    t.hasOwnProperty(s) && !Ue2(i) && (Array.isArray(i) && i.isCss || re2(i) ? r.push("".concat(He2(s), ":"), i, ";") : ce2(i) ? r.push.apply(r, __spreadArray(__spreadArray(["".concat(s, " {")], Je2(i), false), ["}"], false)) : r.push("".concat(He2(s), ": ").concat((n = s, null == (o2 = i) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || n in unitlessKeys || n.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
  }
  return r;
}, "Je");
function Xe2(e, t, n, o2) {
  if (Ue2(e)) return [];
  if (se2(e)) return [".".concat(e.styledComponentId)];
  if (re2(e)) {
    if (!re2(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var r = e(t);
    return "production" === process.env.NODE_ENV || "object" != typeof r || Array.isArray(r) || r instanceof qe2 || ce2(r) || null === r || console.error("".concat(B2(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe2(r, t, n, o2);
  }
  var s;
  return e instanceof qe2 ? n ? (e.inject(n, o2), [e.getName(o2)]) : [e] : ce2(e) ? Je2(e) : Array.isArray(e) ? Array.prototype.concat.apply(_2, e.map(function(e2) {
    return Xe2(e2, t, n, o2);
  })) : [e.toString()];
}
__name(Xe2, "Xe");
function Ze2(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (re2(n) && !se2(n)) return false;
  }
  return true;
}
__name(Ze2, "Ze");
var Ke2 = M2(v2);
var Qe2 = function() {
  function e(e2, t, n) {
    this.rules = e2, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n || n.isStatic) && Ze2(e2), this.componentId = t, this.baseHash = z2(Ke2, t), this.baseStyle = n, ke2.registerId(t);
  }
  __name(e, "e");
  return e.prototype.generateAndInjectStyles = function(e2, t, n) {
    var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o2 = ie2(o2, this.staticRulesId);
    else {
      var r = ae2(Xe2(this.rules, e2, t, n)), s = x2(z2(this.baseHash, r) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var i = n(r, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, i);
      }
      o2 = ie2(o2, s), this.staticRulesId = s;
    }
    else {
      for (var a = z2(this.baseHash, n.hash), c = "", l3 = 0; l3 < this.rules.length; l3++) {
        var u = this.rules[l3];
        if ("string" == typeof u) c += u, "production" !== process.env.NODE_ENV && (a = z2(a, u));
        else if (u) {
          var p2 = ae2(Xe2(u, e2, t, n));
          a = z2(a, p2 + l3), c += p2;
        }
      }
      if (c) {
        var d2 = x2(a >>> 0);
        t.hasNameForId(this.componentId, d2) || t.insertRules(this.componentId, d2, n(c, ".".concat(d2), void 0, this.componentId)), o2 = ie2(o2, d2);
      }
    }
    return o2;
  }, e;
}();
var et = import_react.default.createContext(void 0);
et.Consumer;
var rt = {};
var st = /* @__PURE__ */ new Set();
function it(e, r, s) {
  var i = se2(e), a = e, c = !G2(e), p2 = r.attrs, d2 = void 0 === p2 ? _2 : p2, h = r.componentId, f2 = void 0 === h ? function(e2, t) {
    var n = "string" != typeof e2 ? "sc" : R(e2);
    rt[n] = (rt[n] || 0) + 1;
    var o2 = "".concat(n, "-").concat($2(v2 + n + rt[n]));
    return t ? "".concat(t, "-").concat(o2) : o2;
  }(r.displayName, r.parentComponentId) : h, m22 = r.displayName, y22 = void 0 === m22 ? function(e2) {
    return G2(e2) ? "styled.".concat(e2) : "Styled(".concat(B2(e2), ")");
  }(e) : m22, g2 = r.displayName && r.componentId ? "".concat(R(r.displayName), "-").concat(r.componentId) : r.componentId || f2, S22 = i && a.attrs ? a.attrs.concat(d2).filter(Boolean) : d2, w22 = r.shouldForwardProp;
  if (i && a.shouldForwardProp) {
    var b2 = a.shouldForwardProp;
    if (r.shouldForwardProp) {
      var E22 = r.shouldForwardProp;
      w22 = /* @__PURE__ */ __name(function(e2, t) {
        return b2(e2, t) && E22(e2, t);
      }, "w2");
    } else w22 = b2;
  }
  var N22 = new Qe2(s, g2, i ? a.componentStyle : void 0);
  function O2(e2, r2) {
    return function(e3, r3, s2) {
      var i2 = e3.attrs, a2 = e3.componentStyle, c2 = e3.defaultProps, p3 = e3.foldedComponentIds, d22 = e3.styledComponentId, h2 = e3.target, f3 = import_react.default.useContext(et), m3 = Le2(), y3 = e3.shouldForwardProp || m3.shouldForwardProp;
      "production" !== process.env.NODE_ENV && (0, import_react.useDebugValue)(d22);
      var v22 = I2(r3, f3, c2) || C2, g3 = function(e4, n, o2) {
        for (var r4, s3 = __assign(__assign({}, n), { className: void 0, theme: o2 }), i3 = 0; i3 < e4.length; i3 += 1) {
          var a3 = re2(r4 = e4[i3]) ? r4(s3) : r4;
          for (var c3 in a3) s3[c3] = "className" === c3 ? ie2(s3[c3], a3[c3]) : "style" === c3 ? __assign(__assign({}, s3[c3]), a3[c3]) : a3[c3];
        }
        return n.className && (s3.className = ie2(s3.className, n.className)), s3;
      }(i2, r3, v22), S3 = g3.as || h2, w3 = {};
      for (var b22 in g3) void 0 === g3[b22] || "$" === b22[0] || "as" === b22 || "theme" === b22 && g3.theme === v22 || ("forwardedAs" === b22 ? w3.as = g3.forwardedAs : y3 && !y3(b22, S3) || (w3[b22] = g3[b22], y3 || "development" !== process.env.NODE_ENV || isPropValid(b22) || st.has(b22) || !A.has(S3) || (st.add(b22), console.warn('styled-components: it looks like an unknown prop "'.concat(b22, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var E3 = function(e4, t) {
        var n = Le2(), o2 = e4.generateAndInjectStyles(t, n.styleSheet, n.stylis);
        return "production" !== process.env.NODE_ENV && (0, import_react.useDebugValue)(o2), o2;
      }(a2, g3);
      "production" !== process.env.NODE_ENV && e3.warnTooManyClasses && e3.warnTooManyClasses(E3);
      var N3 = ie2(p3, d22);
      return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[G2(S3) && !A.has(S3) ? "class" : "className"] = N3, s2 && (w3.ref = s2), (0, import_react.createElement)(S3, w3);
    }(D22, e2, r2);
  }
  __name(O2, "O2");
  O2.displayName = y22;
  var D22 = import_react.default.forwardRef(O2);
  return D22.attrs = S22, D22.componentStyle = N22, D22.displayName = y22, D22.shouldForwardProp = w22, D22.foldedComponentIds = i ? ie2(a.foldedComponentIds, a.styledComponentId) : "", D22.styledComponentId = g2, D22.target = i ? a.target : e, Object.defineProperty(D22, "defaultProps", { get: /* @__PURE__ */ __name(function() {
    return this._foldedDefaultProps;
  }, "get"), set: /* @__PURE__ */ __name(function(e2) {
    this._foldedDefaultProps = i ? function(e3) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      for (var o2 = 0, r2 = t; o2 < r2.length; o2++) le2(e3, r2[o2], true);
      return e3;
    }({}, a.defaultProps, e2) : e2;
  }, "set") }), "production" !== process.env.NODE_ENV && (P2(y22, g2), D22.warnTooManyClasses = /* @__PURE__ */ function(e2, t) {
    var n = {}, o2 = false;
    return function(r2) {
      if (!o2 && (n[r2] = true, Object.keys(n).length >= 200)) {
        var s2 = t ? ' with the id of "'.concat(t, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e2).concat(s2, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), o2 = true, n = {};
      }
    };
  }(y22, g2)), ue2(D22, function() {
    return ".".concat(D22.styledComponentId);
  }), c && oe2(D22, e, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), D22;
}
__name(it, "it");
function at(e, t) {
  for (var n = [e[0]], o2 = 0, r = t.length; o2 < r; o2 += 1) n.push(t[o2], e[o2 + 1]);
  return n;
}
__name(at, "at");
var ct = /* @__PURE__ */ __name(function(e) {
  return Object.assign(e, { isCss: true });
}, "ct");
function lt(t) {
  for (var n = [], o2 = 1; o2 < arguments.length; o2++) n[o2 - 1] = arguments[o2];
  if (re2(t) || ce2(t)) return ct(Xe2(at(_2, __spreadArray([t], n, true))));
  var r = t;
  return 0 === n.length && 1 === r.length && "string" == typeof r[0] ? Xe2(r) : ct(Xe2(at(r, n)));
}
__name(lt, "lt");
function ut(n, o2, r) {
  if (void 0 === r && (r = C2), !o2) throw he2(1, o2);
  var s = /* @__PURE__ */ __name(function(t) {
    for (var s2 = [], i = 1; i < arguments.length; i++) s2[i - 1] = arguments[i];
    return n(o2, r, lt.apply(void 0, __spreadArray([t], s2, false)));
  }, "s");
  return s.attrs = function(e) {
    return ut(n, o2, __assign(__assign({}, r), { attrs: Array.prototype.concat(r.attrs, e).filter(Boolean) }));
  }, s.withConfig = function(e) {
    return ut(n, o2, __assign(__assign({}, r), e));
  }, s;
}
__name(ut, "ut");
var pt = /* @__PURE__ */ __name(function(e) {
  return ut(it, e);
}, "pt");
var dt = pt;
A.forEach(function(e) {
  dt[e] = pt(e);
});
var vt = /^\s*<\/[a-z]/i;
var gt = function() {
  function e() {
    var e2 = this;
    this._emitSheetCSS = function() {
      var t = e2.instance.toString();
      if (!t) return "";
      var n = Ce2(), o2 = ae2([n && 'nonce="'.concat(n, '"'), "".concat(f, '="true"'), "".concat(y2, '="').concat(v2, '"')].filter(Boolean), " ");
      return "<style ".concat(o2, ">").concat(t, "</style>");
    }, this.getStyleTags = function() {
      if (e2.sealed) throw he2(2);
      return e2._emitSheetCSS();
    }, this.getStyleElement = function() {
      var n;
      if (e2.sealed) throw he2(2);
      var r = e2.instance.toString();
      if (!r) return [];
      var s = ((n = {})[f] = "", n[y2] = v2, n.dangerouslySetInnerHTML = { __html: r }, n), i = Ce2();
      return i && (s.nonce = i), [import_react.default.createElement("style", __assign({}, s, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e2.sealed = true;
    }, this.instance = new ke2({ isServer: true }), this.sealed = false;
  }
  __name(e, "e");
  return e.prototype.collectStyles = function(e2) {
    if (this.sealed) throw he2(2);
    return import_react.default.createElement(Ye2, { sheet: this.instance }, e2);
  }, e.prototype.interleaveWithNodeStream = function(e2) {
    if (S2) throw he2(3);
    if (this.sealed) throw he2(2);
    this.seal();
    var t = __require("stream").Transform, n = e2, o2 = this.instance, r = this._emitSheetCSS, s = new t({ transform: /* @__PURE__ */ __name(function(e3, t2, n2) {
      var s2 = e3.toString(), i = r();
      if (o2.clearTag(), vt.test(s2)) {
        var a = s2.indexOf(">") + 1, c = s2.slice(0, a), l3 = s2.slice(a);
        this.push(c + i + l3);
      } else this.push(i + s2);
      n2();
    }, "transform") });
    return n.on("error", function(e3) {
      s.emit("error", e3);
    }), n.pipe(s);
  }, e;
}();
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var wt = "__sc-".concat(f, "__");
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[wt] || (window[wt] = 0), 1 === window[wt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[wt] += 1);
var CSS_RESET = "<style>*,*::before,*::after{box-sizing:border-box}html,body{margin:0;padding:0}body{-webkit-font-smoothing:antialiased}</style>";
var TOKENS_CSS_HREF = "https://unpkg.com/@jsonresume/core/dist/tokens.css";
var FONTS_PRECONNECT = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
function isHref(value) {
  return /^(https?:)?\/\//.test(value) || value.trim().startsWith("<link");
}
__name(isHref, "isHref");
function familyParam(family) {
  const [name, ...rest] = String(family).split(":");
  const encodedName = name.trim().replace(/\s+/g, "+");
  return rest.length ? `${encodedName}:${rest.join(":")}` : encodedName;
}
__name(familyParam, "familyParam");
function googleFontsLinks(families) {
  if (!Array.isArray(families) || families.length === 0) return "";
  const passthrough = [];
  const names = [];
  for (const entry of families) {
    if (entry == null || entry === "") continue;
    if (isHref(entry)) passthrough.push(entry);
    else names.push(entry);
  }
  const links = passthrough.map(
    (href) => href.trim().startsWith("<link") ? href : `<link href="${href}" rel="stylesheet">`
  );
  if (names.length > 0) {
    const query = names.map(familyParam).join("&family=");
    links.unshift(
      `<link href="https://fonts.googleapis.com/css2?family=${query}&display=swap" rel="stylesheet">`
    );
  }
  if (links.length === 0) return "";
  return FONTS_PRECONNECT + links.join("");
}
__name(googleFontsLinks, "googleFontsLinks");
function renderResumeDocument(element, options = {}) {
  const {
    fonts,
    title,
    lang = "en",
    dir = "ltr",
    reset = false,
    head = "",
    headAfterStyles = "",
    includeTokensCss = true,
    bodyClass
  } = options;
  const sheet = new gt();
  let html;
  let styleTags;
  try {
    html = (0, import_server.renderToStaticMarkup)(sheet.collectStyles(element));
    styleTags = sheet.getStyleTags();
  } finally {
    sheet.seal();
  }
  const fontLinks = googleFontsLinks(fonts);
  const tokensLink = includeTokensCss ? `<link rel="stylesheet" href="${TOKENS_CSS_HREF}">` : "";
  const resetTag = reset ? CSS_RESET : "";
  const titleTag = title ? `<title>${title}</title>` : "";
  const bodyAttr = bodyClass ? ` class="${bodyClass}"` : "";
  return `<!DOCTYPE html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">` + fontLinks + tokensLink + resetTag + head + styleTags + headAfterStyles + titleTag + `</head><body${bodyAttr}>${html}</body></html>`;
}
__name(renderResumeDocument, "renderResumeDocument");
var Header$6 = dt.header`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #0b1f3a;
`;
var Name$3 = dt.h1`
  font-size: 2.5rem;
  color: #0b1f3a;
  margin-bottom: 0.5rem;
`;
var Label = dt.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;
var ContactInfo = dt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: #666;
`;
var ContactItem = dt.div`
  a {
    color: #0b1f3a;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid #0b1f3a;
    }
  }
`;
var Hero = /* @__PURE__ */ __name(({ basics }) => {
  if (!basics) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header$6, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Name$3, { children: basics.name }),
    basics.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: basics.label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactInfo, { children: [
      basics.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: `mailto:${basics.email}`, children: basics.email }) }),
      basics.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, { children: basics.phone }),
      basics.location?.city && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactItem, { children: [
        basics.location.city,
        basics.location.region && `, ${basics.location.region}`
      ] }),
      basics.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: basics.url, target: "_blank", rel: "noopener noreferrer", children: basics.url.replace(/^https?:\/\//, "") }) }),
      basics.profiles?.map((profile, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: profile.url, target: "_blank", rel: "noopener noreferrer", children: profile.network }) }, i))
    ] })
  ] });
}, "Hero");
var SectionContainer = dt.section`
  margin-bottom: 2.5rem;
`;
var SectionTitle = dt.h2`
  font-size: 1.5rem;
  color: #0b1f3a;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
`;
var Section = /* @__PURE__ */ __name(({ title, children }) => {
  if (!children) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionContainer, { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: title }),
    children
  ] });
}, "Section");
var SummaryText = dt.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
`;
var Summary$2 = /* @__PURE__ */ __name(({ basics }) => {
  if (!basics?.summary) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Profile", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryText, { children: basics.summary }) });
}, "Summary$2");
var WorkItem = dt.div`
  margin-bottom: 2rem;
`;
var WorkHeader = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Position$1 = dt.h3`
  font-size: 1.125rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateRange$3 = dt.div`
  font-size: 0.9rem;
  color: #666;
  font-weight: 400;
`;
var Company = dt.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.75rem;
`;
var Description$2 = dt.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.5rem;

  p {
    margin-bottom: 0.5rem;
  }
`;
var Highlights$2 = dt.ul`
  margin-top: 0.75rem;
  padding-left: 1.5rem;
  list-style: disc;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: #444;
  }
`;
var formatDate$6 = /* @__PURE__ */ __name((date) => {
  if (!date) return "Present";
  const d2 = new Date(date);
  return d2.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}, "formatDate$6");
var Work = /* @__PURE__ */ __name(({ work }) => {
  if (!work || work.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Experience", children: work.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WorkItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WorkHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Position$1, { children: item.position }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DateRange$3, { children: [
        formatDate$6(item.startDate),
        " - ",
        formatDate$6(item.endDate)
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Company, { children: [
      item.name,
      item.location && ` • ${item.location}`
    ] }),
    item.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Description$2,
      {
        dangerouslySetInnerHTML: { __html: k(item.summary) }
      }
    ),
    item.highlights && item.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights$2, { children: item.highlights.map((highlight, j22) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: highlight }, j22)) })
  ] }, i)) });
}, "Work");
var ProjectItem = dt.div`
  margin-bottom: 1.75rem;
`;
var Header$5 = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var ProjectName = dt.h3`
  font-size: 1.0625rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateRange$2 = dt.div`
  font-size: 0.9rem;
  color: #666;
`;
var Entity = dt.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.5rem;
`;
var Description$1 = dt.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.5rem;

  p {
    margin-bottom: 0.5rem;
  }
`;
var Highlights$1 = dt.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  list-style: disc;

  li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
    color: #444;
  }
`;
var formatDate$5 = /* @__PURE__ */ __name((date) => {
  if (!date) return "";
  const d2 = new Date(date);
  return d2.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}, "formatDate$5");
var Projects = /* @__PURE__ */ __name(({ projects }) => {
  if (!projects || projects.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Projects", children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProjectItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header$5, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectName, { children: project.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: project.url, target: "_blank", rel: "noopener noreferrer", children: project.name }) : project.name }),
      (project.startDate || project.endDate) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DateRange$2, { children: [
        formatDate$5(project.startDate),
        project.endDate && ` - ${formatDate$5(project.endDate)}`
      ] })
    ] }),
    project.entity && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Entity, { children: project.entity }),
    project.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Description$1,
      {
        dangerouslySetInnerHTML: { __html: k(project.description) }
      }
    ),
    project.highlights && project.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights$1, { children: project.highlights.map((highlight, j22) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: highlight }, j22)) })
  ] }, i)) });
}, "Projects");
var EducationItem = dt.div`
  margin-bottom: 1.5rem;
`;
var Header$4 = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Degree = dt.h3`
  font-size: 1.0625rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateRange$1 = dt.div`
  font-size: 0.9rem;
  color: #666;
`;
var Institution = dt.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;
var Details = dt.div`
  font-size: 0.95rem;
  color: #666;
`;
var formatDate$4 = /* @__PURE__ */ __name((date) => {
  if (!date) return "";
  const d2 = new Date(date);
  return d2.toLocaleDateString("en-US", { year: "numeric" });
}, "formatDate$4");
var Education = /* @__PURE__ */ __name(({ education }) => {
  if (!education || education.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Education", children: education.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EducationItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header$4, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Degree, { children: [
        item.studyType,
        " ",
        item.area && `in ${item.area}`
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DateRange$1, { children: [
        item.startDate && formatDate$4(item.startDate),
        item.endDate && ` - ${formatDate$4(item.endDate)}`
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Institution, { children: item.institution }),
    (item.score || item.courses) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Details, { children: [
      item.score && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        "GPA: ",
        item.score
      ] }),
      item.courses && item.courses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        "Relevant Coursework: ",
        item.courses.join(", ")
      ] })
    ] })
  ] }, i)) });
}, "Education");
var CertificateItem = dt.div`
  margin-bottom: 1.25rem;
`;
var Header$3 = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Name$2 = dt.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateText$2 = dt.div`
  font-size: 0.9rem;
  color: #666;
`;
var Issuer = dt.div`
  font-size: 0.95rem;
  color: #555;
`;
var formatDate$3 = /* @__PURE__ */ __name((date) => {
  if (!date) return "";
  const d2 = new Date(date);
  return d2.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}, "formatDate$3");
var Certificates = /* @__PURE__ */ __name(({ certificates }) => {
  if (!certificates || certificates.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Certifications", children: certificates.map((cert, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CertificateItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header$3, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Name$2, { children: cert.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: cert.url, target: "_blank", rel: "noopener noreferrer", children: cert.name }) : cert.name }),
      cert.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateText$2, { children: formatDate$3(cert.date) })
    ] }),
    cert.issuer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Issuer, { children: cert.issuer })
  ] }, i)) });
}, "Certificates");
var PublicationItem = dt.div`
  margin-bottom: 1.25rem;
`;
var Header$2 = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Name$1 = dt.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin: 0;
  font-style: italic;
`;
var DateText$1 = dt.div`
  font-size: 0.9rem;
  color: #666;
`;
var Publisher = dt.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.25rem;
`;
var Summary$1 = dt.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`;
var formatDate$2 = /* @__PURE__ */ __name((date) => {
  if (!date) return "";
  const d2 = new Date(date);
  return d2.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}, "formatDate$2");
var Publications = /* @__PURE__ */ __name(({ publications }) => {
  if (!publications || publications.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Publications", children: publications.map((pub, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicationItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header$2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Name$1, { children: pub.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: pub.url, target: "_blank", rel: "noopener noreferrer", children: pub.name }) : pub.name }),
      pub.releaseDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateText$1, { children: formatDate$2(pub.releaseDate) })
    ] }),
    pub.publisher && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Publisher, { children: pub.publisher }),
    pub.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary$1, { children: pub.summary })
  ] }, i)) });
}, "Publications");
var AwardItem = dt.div`
  margin-bottom: 1.25rem;
`;
var Header$1 = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Title = dt.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateText = dt.div`
  font-size: 0.9rem;
  color: #666;
`;
var Awarder = dt.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.25rem;
`;
var Summary = dt.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`;
var formatDate$1 = /* @__PURE__ */ __name((date) => {
  if (!date) return "";
  const d2 = new Date(date);
  return d2.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}, "formatDate$1");
var Awards = /* @__PURE__ */ __name(({ awards }) => {
  if (!awards || awards.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Awards & Honors", children: awards.map((award, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AwardItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header$1, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { children: award.title }),
      award.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateText, { children: formatDate$1(award.date) })
    ] }),
    award.awarder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Awarder, { children: award.awarder }),
    award.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, { children: award.summary })
  ] }, i)) });
}, "Awards");
var SkillsGrid = dt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;
var SkillCategory = dt.div`
  margin-bottom: 1rem;
`;
var CategoryName = dt.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin-bottom: 0.5rem;
`;
var KeywordList = dt.div`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;
var Skills = /* @__PURE__ */ __name(({ skills }) => {
  if (!skills || skills.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Skills", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsGrid, { children: skills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkillCategory, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryName, { children: skill.name }),
    skill.keywords && skill.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeywordList, { children: skill.keywords.join(" • ") })
  ] }, i)) }) });
}, "Skills");
var InterestList = dt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;
var InterestItem = dt.div`
  margin-bottom: 0.75rem;
`;
var InterestName = dt.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin-bottom: 0.25rem;
`;
var Keywords = dt.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;
var Interests = /* @__PURE__ */ __name(({ interests }) => {
  if (!interests || interests.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Interests", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InterestList, { children: interests.map((interest, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InterestItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InterestName, { children: interest.name }),
    interest.keywords && interest.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keywords, { children: interest.keywords.join(", ") })
  ] }, i)) }) });
}, "Interests");
var LanguageList = dt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;
var LanguageItem = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
var LanguageName = dt.span`
  font-size: 1rem;
  color: #333;
`;
var Fluency = dt.span`
  font-size: 0.9rem;
  color: #666;
`;
var Languages = /* @__PURE__ */ __name(({ languages }) => {
  if (!languages || languages.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Languages", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageList, { children: languages.map((lang, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LanguageItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageName, { children: lang.language }),
    lang.fluency && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fluency, { children: lang.fluency })
  ] }, i)) }) });
}, "Languages");
var ReferenceItem = dt.div`
  margin-bottom: 1.25rem;
`;
var Name = dt.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin-bottom: 0.25rem;
`;
var Reference = dt.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  font-style: italic;
`;
var References = /* @__PURE__ */ __name(({ references }) => {
  if (!references || references.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "References", children: references.map((ref, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReferenceItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Name, { children: ref.name }),
    ref.reference && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reference, { children: [
      '"',
      ref.reference,
      '"'
    ] })
  ] }, i)) });
}, "References");
var VolunteerItem = dt.div`
  margin-bottom: 1.75rem;
`;
var Header = dt.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Position = dt.h3`
  font-size: 1.0625rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateRange = dt.div`
  font-size: 0.9rem;
  color: #666;
`;
var Organization = dt.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;
var Description = dt.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.5rem;

  p {
    margin-bottom: 0.5rem;
  }
`;
var Highlights = dt.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  list-style: disc;

  li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
    color: #444;
  }
`;
var formatDate = /* @__PURE__ */ __name((date) => {
  if (!date) return "Present";
  const d2 = new Date(date);
  return d2.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}, "formatDate");
var Volunteer = /* @__PURE__ */ __name(({ volunteer }) => {
  if (!volunteer || volunteer.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { title: "Volunteer Work", children: volunteer.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(VolunteerItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Position, { children: item.position }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DateRange, { children: [
        formatDate(item.startDate),
        " - ",
        formatDate(item.endDate)
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Organization, { children: item.organization }),
    item.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Description,
      {
        dangerouslySetInnerHTML: { __html: k(item.summary) }
      }
    ),
    item.highlights && item.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights, { children: item.highlights.map((highlight, j22) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: highlight }, j22)) })
  ] }, i)) });
}, "Volunteer");
var Layout = dt.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media print {
    padding: 0;
  }
`;
var Resume = /* @__PURE__ */ __name(({ resume }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { basics: resume.basics }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary$2, { basics: resume.basics }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, { work: resume.work }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, { projects: resume.projects }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, { education: resume.education }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certificates, { certificates: resume.certificates }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Publications, { publications: resume.publications }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Awards, { awards: resume.awards }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volunteer, { volunteer: resume.volunteer }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, { skills: resume.skills }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { languages: resume.languages }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Interests, { interests: resume.interests }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(References, { references: resume.references })
  ] });
}, "Resume");
var render = /* @__PURE__ */ __name((resume) => {
  return renderResumeDocument(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resume, { resume }), {
    head: `<style>
    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
      background: #fff;
      font-size: 16px;
      line-height: 1.6;
      color: #1a1a1a;
    }

    body {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: Georgia, 'Times New Roman', serif;
      font-weight: 600;
      color: #0b1f3a;
      margin: 0;
      line-height: 1.3;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      letter-spacing: 0.01em;
    }

    h3 {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }

    p {
      padding: 0;
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
    }

    a {
      color: #0b1f3a;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s ease;
    }

    a:hover {
      border-bottom-color: #0b1f3a;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  </style>`,
    title: `${resume.basics.name} - Resume`,
    includeTokensCss: false
  });
}, "render");
export {
  Resume,
  render
};
//# sourceMappingURL=dist-CW5CU6BJ.mjs.map
