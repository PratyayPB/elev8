import {
  require_server_node
} from "./chunk-3KD33LUC.mjs";
import {
  require_react
} from "./chunk-ZPESTPYW.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __name,
  __require,
  __toCommonJS,
  __toESM,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var init_emotion_memoize_esm = __esm({
  "node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"() {
    init_esm();
    __name(memoize, "memoize");
  }
});

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var emotion_is_prop_valid_esm_exports = {};
__export(emotion_is_prop_valid_esm_exports, {
  default: () => isPropValid
});
var reactPropsRegex, isPropValid;
var init_emotion_is_prop_valid_esm = __esm({
  "node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"() {
    init_esm();
    init_emotion_memoize_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    isPropValid = /* @__PURE__ */ memoize(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
      /* Z+1 */
    );
  }
});

// node_modules/stylis/dist/umd/stylis.js
var require_stylis = __commonJS({
  "node_modules/stylis/dist/umd/stylis.js"(exports, module) {
    init_esm();
    (function(e, r) {
      typeof exports === "object" && typeof module !== "undefined" ? r(exports) : typeof define === "function" && define.amd ? define(["exports"], r) : (e = e || self, r(e.stylis = {}));
    })(exports, function(e) {
      "use strict";
      var r = "-ms-";
      var a = "-moz-";
      var c = "-webkit-";
      var t = "comm";
      var n = "rule";
      var s = "decl";
      var i = "@page";
      var u = "@media";
      var o = "@import";
      var l = "@charset";
      var f = "@viewport";
      var p = "@supports";
      var h = "@document";
      var v = "@namespace";
      var d = "@keyframes";
      var b = "@font-face";
      var w = "@counter-style";
      var m = "@font-feature-values";
      var g = "@layer";
      var k = "@scope";
      var $ = Math.abs;
      var x = String.fromCharCode;
      var E = Object.assign;
      function y(e2, r2) {
        return M(e2, 0) ^ 45 ? (((r2 << 2 ^ M(e2, 0)) << 2 ^ M(e2, 1)) << 2 ^ M(e2, 2)) << 2 ^ M(e2, 3) : 0;
      }
      __name(y, "y");
      function O(e2) {
        return e2.trim();
      }
      __name(O, "O");
      function T(e2, r2) {
        return (e2 = r2.exec(e2)) ? e2[0] : e2;
      }
      __name(T, "T");
      function A(e2, r2, a2) {
        return e2.replace(r2, a2);
      }
      __name(A, "A");
      function C(e2, r2, a2) {
        return e2.indexOf(r2, a2);
      }
      __name(C, "C");
      function M(e2, r2) {
        return e2.charCodeAt(r2) | 0;
      }
      __name(M, "M");
      function S(e2, r2, a2) {
        return e2.slice(r2, a2);
      }
      __name(S, "S");
      function R(e2) {
        return e2.length;
      }
      __name(R, "R");
      function P(e2) {
        return e2.length;
      }
      __name(P, "P");
      function z(e2, r2) {
        return r2.push(e2), e2;
      }
      __name(z, "z");
      function N(e2, r2) {
        return e2.map(r2).join("");
      }
      __name(N, "N");
      function j(e2, r2) {
        return e2.filter(function(e3) {
          return !T(e3, r2);
        });
      }
      __name(j, "j");
      e.line = 1;
      e.column = 1;
      e.length = 0;
      e.position = 0;
      e.character = 0;
      e.characters = "";
      function U(r2, a2, c2, t2, n2, s2, i2, u2) {
        return { value: r2, root: a2, parent: c2, type: t2, props: n2, children: s2, line: e.line, column: e.column, length: i2, return: "", siblings: u2 };
      }
      __name(U, "U");
      function _(e2, r2) {
        return E(U("", null, null, "", null, null, 0, e2.siblings), e2, { length: -e2.length }, r2);
      }
      __name(_, "_");
      function F(e2) {
        while (e2.root) e2 = _(e2.root, { children: [e2] });
        z(e2, e2.siblings);
      }
      __name(F, "F");
      function I() {
        return e.character;
      }
      __name(I, "I");
      function L() {
        e.character = e.position > 0 ? M(e.characters, --e.position) : 0;
        if (e.column--, e.character === 10) e.column = 1, e.line--;
        return e.character;
      }
      __name(L, "L");
      function D() {
        e.character = e.position < e.length ? M(e.characters, e.position++) : 0;
        if (e.column++, e.character === 10) e.column = 1, e.line++;
        return e.character;
      }
      __name(D, "D");
      function Y() {
        return M(e.characters, e.position);
      }
      __name(Y, "Y");
      function K() {
        return e.position;
      }
      __name(K, "K");
      function V(r2, a2) {
        return S(e.characters, r2, a2);
      }
      __name(V, "V");
      function W(e2) {
        switch (e2) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      __name(W, "W");
      function B(r2) {
        return e.line = e.column = 1, e.length = R(e.characters = r2), e.position = 0, [];
      }
      __name(B, "B");
      function G(r2) {
        return e.characters = "", r2;
      }
      __name(G, "G");
      function H(r2) {
        return O(V(e.position - 1, X(r2 === 91 ? r2 + 2 : r2 === 40 ? r2 + 1 : r2)));
      }
      __name(H, "H");
      function Z(e2) {
        return G(J(B(e2)));
      }
      __name(Z, "Z");
      function q(r2) {
        while (e.character = Y()) if (e.character < 33) D();
        else break;
        return W(r2) > 2 || W(e.character) > 3 ? "" : " ";
      }
      __name(q, "q");
      function J(r2) {
        while (D()) switch (W(e.character)) {
          case 0:
            z(re(e.position - 1), r2);
            break;
          case 2:
            z(H(e.character), r2);
            break;
          default:
            z(x(e.character), r2);
        }
        return r2;
      }
      __name(J, "J");
      function Q(r2, a2) {
        while (--a2 && D()) if (e.character < 48 || e.character > 102 || e.character > 57 && e.character < 65 || e.character > 70 && e.character < 97) break;
        return V(r2, K() + (a2 < 6 && Y() == 32 && D() == 32));
      }
      __name(Q, "Q");
      function X(r2) {
        while (D()) switch (e.character) {
          case r2:
            return e.position;
          case 34:
          case 39:
            if (r2 !== 34 && r2 !== 39) X(e.character);
            break;
          case 40:
            if (r2 === 41) X(r2);
            break;
          case 92:
            D();
            break;
        }
        return e.position;
      }
      __name(X, "X");
      function ee(r2, a2) {
        while (D()) if (r2 + e.character === 47 + 10) break;
        else if (r2 + e.character === 42 + 42 && Y() === 47) break;
        return "/*" + V(a2, e.position - 1) + "*" + x(r2 === 47 ? r2 : D());
      }
      __name(ee, "ee");
      function re(r2) {
        while (!W(Y())) D();
        return V(r2, e.position);
      }
      __name(re, "re");
      function ae(e2) {
        return G(ce("", null, null, null, [""], e2 = B(e2), 0, [0], e2));
      }
      __name(ae, "ae");
      function ce(e2, r2, a2, c2, t2, n2, s2, i2, u2) {
        var o2 = 0;
        var l2 = 0;
        var f2 = s2;
        var p2 = 0;
        var h2 = 0;
        var v2 = 0;
        var d2 = 1;
        var b2 = 1;
        var w2 = 1;
        var m2 = 0;
        var g2 = "";
        var k2 = t2;
        var E2 = n2;
        var y2 = c2;
        var O2 = g2;
        while (b2) switch (v2 = m2, m2 = D()) {
          case 40:
            if (v2 != 108 && M(O2, f2 - 1) == 58) {
              if (C(O2 += A(H(m2), "&", "&\f"), "&\f", $(o2 ? i2[o2 - 1] : 0)) != -1) w2 = -1;
              break;
            }
          case 34:
          case 39:
          case 91:
            O2 += H(m2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            O2 += q(v2);
            break;
          case 92:
            O2 += Q(K() - 1, 7);
            continue;
          case 47:
            switch (Y()) {
              case 42:
              case 47:
                z(ne(ee(D(), K()), r2, a2, u2), u2);
                if ((W(v2 || 1) == 5 || W(Y() || 1) == 5) && R(O2) && S(O2, -1, void 0) !== " ") O2 += " ";
                break;
              default:
                O2 += "/";
            }
            break;
          case 123 * d2:
            i2[o2++] = R(O2) * w2;
          case 125 * d2:
          case 59:
          case 0:
            switch (m2) {
              case 0:
              case 125:
                b2 = 0;
              case 59 + l2:
                if (w2 == -1) O2 = A(O2, /\f/g, "");
                if (h2 > 0 && (R(O2) - f2 || d2 === 0 && v2 === 47)) z(h2 > 32 ? se(O2 + ";", c2, a2, f2 - 1, u2) : se(A(O2, " ", "") + ";", c2, a2, f2 - 2, u2), u2);
                break;
              case 59:
                O2 += ";";
              default:
                z(y2 = te(O2, r2, a2, o2, l2, t2, i2, g2, k2 = [], E2 = [], f2, n2), n2);
                if (m2 === 123) if (l2 === 0) ce(O2, r2, y2, y2, k2, n2, f2, i2, E2);
                else {
                  switch (p2) {
                    case 99:
                      if (M(O2, 3) === 110) break;
                    case 108:
                      if (M(O2, 2) === 97) break;
                    default:
                      l2 = 0;
                    case 100:
                    case 109:
                    case 115:
                  }
                  if (l2) ce(e2, y2, y2, c2 && z(te(e2, y2, y2, 0, 0, t2, i2, g2, t2, k2 = [], f2, E2), E2), t2, E2, f2, i2, c2 ? k2 : E2);
                  else ce(O2, y2, y2, y2, [""], E2, 0, i2, E2);
                }
            }
            o2 = l2 = h2 = 0, d2 = w2 = 1, g2 = O2 = "", f2 = s2;
            break;
          case 58:
            f2 = 1 + R(O2), h2 = v2;
          default:
            if (d2 < 1) {
              if (m2 == 123) --d2;
              else if (m2 == 125 && d2++ == 0 && L() == 125) continue;
            }
            switch (O2 += x(m2), m2 * d2) {
              case 38:
                w2 = l2 > 0 ? 1 : (O2 += "\f", -1);
                break;
              case 44:
                i2[o2++] = (R(O2) - 1) * w2, w2 = 1;
                break;
              case 64:
                if (Y() === 45) O2 += H(D());
                p2 = Y(), l2 = f2 = R(g2 = O2 += re(K())), m2++;
                break;
              case 45:
                if (v2 === 45 && R(O2) == 2) d2 = 0;
            }
        }
        return n2;
      }
      __name(ce, "ce");
      function te(e2, r2, a2, c2, t2, s2, i2, u2, o2, l2, f2, p2) {
        var h2 = t2 - 1;
        var v2 = t2 === 0 ? s2 : [""];
        var d2 = P(v2);
        for (var b2 = 0, w2 = 0, m2 = 0; b2 < c2; ++b2) for (var g2 = 0, k2 = S(e2, h2 + 1, h2 = $(w2 = i2[b2])), x2 = e2; g2 < d2; ++g2) if (x2 = O(w2 > 0 ? v2[g2] + " " + k2 : A(k2, /&\f/g, v2[g2]))) o2[m2++] = x2;
        return U(e2, r2, a2, t2 === 0 ? n : u2, o2, l2, f2, p2);
      }
      __name(te, "te");
      function ne(e2, r2, a2, c2) {
        return U(e2, r2, a2, t, x(I()), S(e2, 2, -2), 0, c2);
      }
      __name(ne, "ne");
      function se(e2, r2, a2, c2, t2) {
        return U(e2, r2, a2, s, S(e2, 0, c2), S(e2, c2 + 1, -1), c2, t2);
      }
      __name(se, "se");
      function ie(e2, t2, n2) {
        switch (y(e2, t2)) {
          case 5103:
            return c + "print-" + e2 + e2;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
            return c + e2 + e2;
          case 4855:
            return c + e2.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + e2;
          case 4789:
            return a + e2 + e2;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return c + e2 + a + e2 + r + e2 + e2;
          case 5936:
            switch (M(e2, t2 + 11)) {
              case 114:
                return c + e2 + r + A(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
              case 108:
                return c + e2 + r + A(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
              case 45:
                return c + e2 + r + A(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
            }
          case 6828:
          case 4268:
          case 2903:
            return c + e2 + r + e2 + e2;
          case 6165:
            return c + e2 + r + "flex-" + e2 + e2;
          case 5187:
            return c + e2 + A(e2, /(\w+).+(:[^]+)/, c + "box-$1$2" + r + "flex-$1$2") + e2;
          case 5443:
            return c + e2 + r + "flex-item-" + A(e2, /flex-|-self/g, "") + (!T(e2, /flex-|baseline/) ? r + "grid-row-" + A(e2, /flex-|-self/g, "") : "") + e2;
          case 4675:
            return c + e2 + r + "flex-line-pack" + A(e2, /align-content|flex-|-self/g, "") + e2;
          case 5548:
            return c + e2 + r + A(e2, "shrink", "negative") + e2;
          case 5292:
            return c + e2 + r + A(e2, "basis", "preferred-size") + e2;
          case 6060:
            return c + "box-" + A(e2, "-grow", "") + c + e2 + r + A(e2, "grow", "positive") + e2;
          case 4554:
            return c + A(e2, /([^-])(transform)/g, "$1" + c + "$2") + e2;
          case 6187:
            return A(A(A(e2, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e2, "") + e2;
          case 5495:
          case 3959:
            return A(e2, /(image-set\([^]*)/, c + "$1$`$1");
          case 4968:
            return A(A(e2, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + r + "flex-pack:$3"), /space-between/, "justify") + c + e2 + e2;
          case 4200:
            if (!T(e2, /flex-|baseline/)) return r + "grid-column-align" + S(e2, t2) + e2;
            break;
          case 2592:
          case 3360:
            return r + A(e2, "template-", "") + e2;
          case 4384:
          case 3616:
            if (n2 && n2.some(function(e3, r2) {
              return t2 = r2, T(e3.props, /grid-\w+-end/);
            })) {
              return ~C(e2 + (n2 = n2[t2].value), "span", 0) ? e2 : r + A(e2, "-start", "") + e2 + r + "grid-row-span:" + (~C(n2, "span", 0) ? T(n2, /\d+/) : +T(n2, /\d+/) - +T(e2, /\d+/)) + ";";
            }
            return r + A(e2, "-start", "") + e2;
          case 4896:
          case 4128:
            return n2 && n2.some(function(e3) {
              return T(e3.props, /grid-\w+-start/);
            }) ? e2 : r + A(A(e2, "-end", "-span"), "span ", "") + e2;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return A(e2, /(.+)-inline(.+)/, c + "$1$2") + e2;
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
            if (R(e2) - 1 - t2 > 6) switch (M(e2, t2 + 1)) {
              case 109:
                if (M(e2, t2 + 4) !== 45) break;
              case 102:
                return A(e2, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3$1" + a + (M(e2, t2 + 3) == 108 ? "$3" : "$2-$3")) + e2;
              case 115:
                return ~C(e2, "stretch", 0) ? ie(A(e2, "stretch", "fill-available"), t2, n2) + e2 : e2;
            }
            break;
          case 5152:
          case 5920:
            return A(e2, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(a2, c2, t3, n3, s2, i2, u2) {
              return r + c2 + ":" + t3 + u2 + (n3 ? r + c2 + "-span:" + (s2 ? i2 : +i2 - +t3) + u2 : "") + e2;
            });
          case 4949:
            if (M(e2, t2 + 6) === 121) return A(e2, ":", ":" + c) + e2;
            break;
          case 6444:
            switch (M(e2, M(e2, 14) === 45 ? 18 : 11)) {
              case 120:
                return A(e2, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + c + (M(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + c + "$2$3$1" + r + "$2box$3") + e2;
              case 100:
                return A(e2, ":", ":" + r) + e2;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return A(e2, "scroll-", "scroll-snap-") + e2;
        }
        return e2;
      }
      __name(ie, "ie");
      function ue(e2, r2) {
        var a2 = "";
        for (var c2 = 0; c2 < e2.length; c2++) a2 += r2(e2[c2], c2, e2, r2) || "";
        return a2;
      }
      __name(ue, "ue");
      function oe(e2, r2, a2, c2) {
        switch (e2.type) {
          case g:
            if (e2.children.length) break;
          case o:
          case v:
          case s:
            return e2.return = e2.return || e2.value;
          case t:
            return "";
          case d:
            return e2.return = e2.value + "{" + ue(e2.children, c2) + "}";
          case n:
            if (!R(e2.value = e2.props.join(","))) return "";
        }
        return R(a2 = ue(e2.children, c2)) ? e2.return = e2.value + "{" + a2 + "}" : "";
      }
      __name(oe, "oe");
      function le(e2) {
        var r2 = P(e2);
        return function(a2, c2, t2, n2) {
          var s2 = "";
          for (var i2 = 0; i2 < r2; i2++) s2 += e2[i2](a2, c2, t2, n2) || "";
          return s2;
        };
      }
      __name(le, "le");
      function fe(e2) {
        return function(r2) {
          if (!r2.root) {
            if (r2 = r2.return) e2(r2);
          }
        };
      }
      __name(fe, "fe");
      function pe(e2, t2, i2, u2) {
        if (e2.length > -1) {
          if (!e2.return) switch (e2.type) {
            case s:
              e2.return = ie(e2.value, e2.length, i2);
              return;
            case d:
              return ue([_(e2, { value: A(e2.value, "@", "@" + c) })], u2);
            case n:
              if (e2.length) return N(i2 = e2.props, function(t3) {
                switch (T(t3, u2 = /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    F(_(e2, { props: [A(t3, /:(read-\w+)/, ":" + a + "$1")] }));
                    F(_(e2, { props: [t3] }));
                    E(e2, { props: j(i2, u2) });
                    break;
                  case "::placeholder":
                    F(_(e2, { props: [A(t3, /:(plac\w+)/, ":" + c + "input-$1")] }));
                    F(_(e2, { props: [A(t3, /:(plac\w+)/, ":" + a + "$1")] }));
                    F(_(e2, { props: [A(t3, /:(plac\w+)/, r + "input-$1")] }));
                    F(_(e2, { props: [t3] }));
                    E(e2, { props: j(i2, u2) });
                    break;
                }
                return "";
              });
          }
        }
      }
      __name(pe, "pe");
      function he(e2) {
        switch (e2.type) {
          case n:
            e2.props = e2.props.map(function(r2) {
              return N(Z(r2), function(r3, a2, c2) {
                switch (M(r3, 0)) {
                  case 12:
                    return S(r3, 1, R(r3));
                  case 0:
                  case 40:
                  case 43:
                  case 62:
                  case 126:
                    return r3;
                  case 58:
                    if (c2[++a2] === "global") c2[a2] = "", c2[++a2] = "\f" + S(c2[a2], a2 = 1, -1);
                  case 32:
                    return a2 === 1 ? "" : r3;
                  default:
                    switch (a2) {
                      case 0:
                        e2 = r3;
                        return P(c2) > 1 ? "" : r3;
                      case (a2 = P(c2) - 1):
                      case 2:
                        return a2 === 2 ? r3 + e2 + e2 : r3 + e2;
                      default:
                        return r3;
                    }
                }
              });
            });
        }
      }
      __name(he, "he");
      e.CHARSET = l;
      e.COMMENT = t;
      e.COUNTER_STYLE = w;
      e.DECLARATION = s;
      e.DOCUMENT = h;
      e.FONT_FACE = b;
      e.FONT_FEATURE_VALUES = m;
      e.IMPORT = o;
      e.KEYFRAMES = d;
      e.LAYER = g;
      e.MEDIA = u;
      e.MOZ = a;
      e.MS = r;
      e.NAMESPACE = v;
      e.PAGE = i;
      e.RULESET = n;
      e.SCOPE = k;
      e.SUPPORTS = p;
      e.VIEWPORT = f;
      e.WEBKIT = c;
      e.abs = $;
      e.alloc = B;
      e.append = z;
      e.assign = E;
      e.caret = K;
      e.char = I;
      e.charat = M;
      e.combine = N;
      e.comment = ne;
      e.commenter = ee;
      e.compile = ae;
      e.copy = _;
      e.dealloc = G;
      e.declaration = se;
      e.delimit = H;
      e.delimiter = X;
      e.escaping = Q;
      e.filter = j;
      e.from = x;
      e.hash = y;
      e.identifier = re;
      e.indexof = C;
      e.lift = F;
      e.match = T;
      e.middleware = le;
      e.namespace = he;
      e.next = D;
      e.node = U;
      e.parse = ce;
      e.peek = Y;
      e.prefix = ie;
      e.prefixer = pe;
      e.prev = L;
      e.replace = A;
      e.ruleset = te;
      e.rulesheet = fe;
      e.serialize = ue;
      e.sizeof = P;
      e.slice = V;
      e.stringify = oe;
      e.strlen = R;
      e.substr = S;
      e.token = W;
      e.tokenize = Z;
      e.tokenizer = J;
      e.trim = O;
      e.whitespace = q;
      Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});

// node_modules/styled-components/dist/styled-components.cjs.js
var require_styled_components_cjs = __commonJS({
  "node_modules/styled-components/dist/styled-components.cjs.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    var e = (init_emotion_is_prop_valid_esm(), __toCommonJS(emotion_is_prop_valid_esm_exports));
    var t = require_react();
    var n = require_stylis();
    function o(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    __name(o, "o");
    function s(e2) {
      if (e2 && e2.__esModule) return e2;
      var t2 = /* @__PURE__ */ Object.create(null);
      return e2 && Object.keys(e2).forEach(function(n2) {
        if ("default" !== n2) {
          var o2 = Object.getOwnPropertyDescriptor(e2, n2);
          Object.defineProperty(t2, n2, o2.get ? o2 : { enumerable: true, get: /* @__PURE__ */ __name(function() {
            return e2[n2];
          }, "get") });
        }
      }), t2.default = e2, Object.freeze(t2);
    }
    __name(s, "s");
    var r;
    var i;
    var l = /* @__PURE__ */ o(e);
    var a = /* @__PURE__ */ o(t);
    var c = /* @__PURE__ */ s(n);
    var u = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
    var d = "active";
    var h = "data-styled-version";
    var p = "6.5.3";
    var f = "/*!sc*/\n";
    var m = "undefined" != typeof window && "undefined" != typeof document;
    var y = void 0 === a.default.createContext;
    function g(e2) {
      if ("undefined" != typeof process && void 0 !== process.env) {
        const t2 = process.env[e2];
        if (void 0 !== t2 && "" !== t2) return "false" !== t2;
      }
    }
    __name(g, "g");
    var v = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = g("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : g("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" != typeof process && void 0 !== process.env && "production" !== process.env.NODE_ENV);
    var S = "sc-keyframes-";
    var b = {};
    var w = "production" !== process.env.NODE_ENV ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n\n", 18: "Accessing `useTheme` hook outside of a `<ThemeProvider>` element.\n\n```jsx\nimport { useTheme } from 'styled-components';\nexport function StyledCompoent({ children }) {\n  const theme = useTheme();\n  return <div style={{ width: theme.sizes.full }}>{children}</div>;\n}\n\nimport { StyledComponent } from './StyledComponent';\nimport { theme } from './theme';\nexport function App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <StyledComponent />\n    </ThemeProvider>\n  );\n}\n```\n\nIf you need access to the theme in an uncertain composition scenario, `React.useContext(ThemeContext)` will not emit an error if there is no `ThemeProvider` ancestor.\n" } : {};
    function C(e2, ...t2) {
      return "production" === process.env.NODE_ENV ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e2} for more information.${t2.length > 0 ? ` Args: ${t2.join(", ")}` : ""}`) : new Error(function(...e3) {
        let t3 = e3[0];
        const n2 = [];
        for (let t4 = 1, o2 = e3.length; t4 < o2; t4 += 1) n2.push(e3[t4]);
        return n2.forEach((e4) => {
          t3 = t3.replace(/%[a-z]/, e4);
        }), t3;
      }(w[e2], ...t2).trim());
    }
    __name(C, "C");
    var N = 1 << 30;
    var P = /* @__PURE__ */ new Map();
    var O = /* @__PURE__ */ new Map();
    var x = 1;
    var E = /* @__PURE__ */ __name((e2) => {
      if (P.has(e2)) return P.get(e2);
      for (; O.has(x); ) x++;
      const t2 = x++;
      if ("production" !== process.env.NODE_ENV && ((0 | t2) < 0 || t2 > N)) throw C(16, `${t2}`);
      return P.set(e2, t2), O.set(t2, e2), t2;
    }, "E");
    var _ = /* @__PURE__ */ __name((e2) => O.get(e2), "_");
    var I = /* @__PURE__ */ __name((e2, t2) => {
      x = t2 + 1, P.set(e2, t2), O.set(t2, e2);
    }, "I");
    var A = /invalid hook call/i;
    var R = /* @__PURE__ */ new Set();
    var $ = /* @__PURE__ */ __name((e2, t2) => {
      if ("production" !== process.env.NODE_ENV) {
        if (y) return;
        const n2 = `The component ${e2}${t2 ? ` with the id of "${t2}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o2 = console.error;
        try {
          let e3 = true;
          console.error = (t3, ...s2) => {
            A.test(t3) ? (e3 = false, R.delete(n2)) : o2(t3, ...s2);
          }, "function" == typeof a.default.useState && a.default.useState(null), e3 && !R.has(n2) && (console.warn(n2), R.add(n2));
        } catch (e3) {
          A.test(e3.message) && R.delete(n2);
        } finally {
          console.error = o2;
        }
      }
    }, "$");
    var j = Object.freeze([]);
    var T = Object.freeze({});
    function k(e2, t2, n2 = T) {
      return e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
    }
    __name(k, "k");
    var D = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
    var M = /(^-|-$)/g;
    function V(e2) {
      return e2.replace(D, "-").replace(M, "");
    }
    __name(V, "V");
    var G = /(a)(d)/gi;
    var F = /* @__PURE__ */ __name((e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97)), "F");
    function z(e2) {
      let t2, n2 = "";
      for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = F(t2 % 52) + n2;
      return (F(t2 % 52) + n2).replace(G, "$1-$2");
    }
    __name(z, "z");
    var W = 5381;
    var q = /* @__PURE__ */ __name((e2, t2) => {
      let n2 = t2.length;
      for (; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
      return e2;
    }, "q");
    var L = /* @__PURE__ */ __name((e2) => q(W, e2), "L");
    function B(e2) {
      return z(L(e2) >>> 0);
    }
    __name(B, "B");
    function H(e2) {
      return "production" !== process.env.NODE_ENV && "string" == typeof e2 && e2 || e2.displayName || e2.name || "Component";
    }
    __name(H, "H");
    function U(e2) {
      return "string" == typeof e2 && ("production" === process.env.NODE_ENV || e2.charAt(0) === e2.charAt(0).toLowerCase());
    }
    __name(U, "U");
    function Y(e2) {
      return U(e2) ? `styled.${e2}` : `Styled(${H(e2)})`;
    }
    __name(Y, "Y");
    var J = Symbol.for("react.memo");
    var X = Symbol.for("react.forward_ref");
    var Z = { contextType: true, defaultProps: true, displayName: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, propTypes: true, type: true };
    var K = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
    var Q = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
    var ee = { [X]: { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, [J]: Q };
    function te(e2) {
      return ("type" in (t2 = e2) && t2.type.$$typeof) === J ? Q : "$$typeof" in e2 ? ee[e2.$$typeof] : Z;
      var t2;
    }
    __name(te, "te");
    var ne = Object.defineProperty;
    var oe = Object.getOwnPropertyNames;
    var se = Object.getOwnPropertySymbols;
    var re = Object.getOwnPropertyDescriptor;
    var ie = Object.getPrototypeOf;
    var le = Object.prototype;
    function ae(e2, t2, n2) {
      if ("string" != typeof t2) {
        const o2 = ie(t2);
        o2 && o2 !== le && ae(e2, o2, n2);
        const s2 = oe(t2).concat(se(t2)), r2 = te(e2), i2 = te(t2);
        for (let o3 = 0; o3 < s2.length; ++o3) {
          const l2 = s2[o3];
          if (!(l2 in K || n2 && n2[l2] || i2 && l2 in i2 || r2 && l2 in r2)) {
            const n3 = re(t2, l2);
            try {
              ne(e2, l2, n3);
            } catch (e3) {
            }
          }
        }
      }
      return e2;
    }
    __name(ae, "ae");
    function ce(e2) {
      return "function" == typeof e2;
    }
    __name(ce, "ce");
    var ue = Symbol.for("react.forward_ref");
    function de(e2) {
      return null != e2 && ("object" == typeof e2 || "function" == typeof e2) && e2.$$typeof === ue && "styledComponentId" in e2;
    }
    __name(de, "de");
    function he(e2, t2) {
      return e2 && t2 ? e2 + " " + t2 : e2 || t2 || "";
    }
    __name(he, "he");
    function pe(e2, t2) {
      return e2.join(t2 || "");
    }
    __name(pe, "pe");
    function fe(e2) {
      let t2 = "";
      for (let n2 = 0; n2 < e2.length; n2++) t2 += e2[n2] + f;
      return t2;
    }
    __name(fe, "fe");
    function me(e2) {
      return e2 ? e2.replaceAll(f, "") : e2;
    }
    __name(me, "me");
    function ye(e2) {
      return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
    }
    __name(ye, "ye");
    function ge(e2, t2, n2 = false) {
      if (!n2 && !ye(e2) && !Array.isArray(e2)) return t2;
      if (Array.isArray(t2)) for (let n3 = 0; n3 < t2.length; n3++) e2[n3] = ge(e2[n3], t2[n3]);
      else if (ye(t2)) for (const n3 in t2) e2[n3] = ge(e2[n3], t2[n3]);
      return e2;
    }
    __name(ge, "ge");
    function ve(e2) {
      if (!y) return null;
      const t2 = a.default.cache;
      return t2 ? t2(e2) : null;
    }
    __name(ve, "ve");
    function Se(e2, t2) {
      Object.defineProperty(e2, "toString", { value: t2 });
    }
    __name(Se, "Se");
    var be = class {
      static {
        __name(this, "be");
      }
      constructor(e2) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2, this._cGroup = 0, this._cIndex = 0;
      }
      indexOfGroup(e2) {
        if (e2 === this._cGroup) return this._cIndex;
        let t2 = this._cIndex;
        if (e2 > this._cGroup) for (let n2 = this._cGroup; n2 < e2; n2++) t2 += this.groupSizes[n2];
        else for (let n2 = this._cGroup - 1; n2 >= e2; n2--) t2 -= this.groupSizes[n2];
        return this._cGroup = e2, this._cIndex = t2, t2;
      }
      insertRules(e2, t2) {
        if (e2 >= this.groupSizes.length) {
          const t3 = this.groupSizes, n3 = t3.length;
          let o3 = n3;
          for (; e2 >= o3; ) if (o3 <<= 1, o3 < 0) throw C(16, `${e2}`);
          this.groupSizes = new Uint32Array(o3), this.groupSizes.set(t3), this.length = o3;
          for (let e3 = n3; e3 < o3; e3++) this.groupSizes[e3] = 0;
        }
        let n2 = this.indexOfGroup(e2 + 1), o2 = 0;
        for (let s2 = 0, r2 = t2.length; s2 < r2; s2++) this.tag.insertRule(n2, t2[s2]) && (this.groupSizes[e2]++, n2++, o2++);
        o2 > 0 && this._cGroup > e2 && (this._cIndex += o2);
      }
      clearGroup(e2) {
        if (e2 < this.length) {
          const t2 = this.groupSizes[e2], n2 = this.indexOfGroup(e2), o2 = n2 + t2;
          this.groupSizes[e2] = 0;
          for (let e3 = n2; e3 < o2; e3++) this.tag.deleteRule(n2);
          t2 > 0 && this._cGroup > e2 && (this._cIndex -= t2);
        }
      }
      getGroup(e2) {
        let t2 = "";
        if (e2 >= this.length || 0 === this.groupSizes[e2]) return t2;
        const n2 = this.groupSizes[e2], o2 = this.indexOfGroup(e2), s2 = o2 + n2;
        for (let e3 = o2; e3 < s2; e3++) t2 += this.tag.getRule(e3) + f;
        return t2;
      }
    };
    var we = `style[${u}][${h}="${p}"]`;
    var Ce = new RegExp(`^${u}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`);
    var Ne = /* @__PURE__ */ __name((e2) => "undefined" != typeof ShadowRoot && e2 instanceof ShadowRoot || "host" in e2 && 11 === e2.nodeType, "Ne");
    var Pe = /* @__PURE__ */ __name((e2) => {
      if (!e2) return document;
      if (Ne(e2)) return e2;
      if ("getRootNode" in e2) {
        const t2 = e2.getRootNode();
        if (Ne(t2)) return t2;
      }
      return document;
    }, "Pe");
    var Oe = /* @__PURE__ */ __name((e2, t2, n2) => {
      const o2 = n2.split(",");
      let s2;
      for (let n3 = 0, r2 = o2.length; n3 < r2; n3++) (s2 = o2[n3]) && e2.registerName(t2, s2);
    }, "Oe");
    var xe = /* @__PURE__ */ __name((e2, t2) => {
      var n2;
      const o2 = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(f), s2 = [];
      for (let t3 = 0, n3 = o2.length; t3 < n3; t3++) {
        const n4 = o2[t3].trim();
        if (!n4) continue;
        const r2 = n4.match(Ce);
        if (r2) {
          const t4 = 0 | parseInt(r2[1], 10), n5 = r2[2];
          0 !== t4 && (I(n5, t4), Oe(e2, n5, r2[3]), e2.getTag().insertRules(t4, s2)), s2.length = 0;
        } else s2.push(n4);
      }
    }, "xe");
    var Ee = /* @__PURE__ */ __name((e2) => {
      const t2 = Pe(e2.options.target).querySelectorAll(we);
      for (let n2 = 0, o2 = t2.length; n2 < o2; n2++) {
        const o3 = t2[n2];
        o3 && o3.getAttribute(u) !== d && (xe(e2, o3), o3.parentNode && o3.parentNode.removeChild(o3));
      }
    }, "Ee");
    var _e = false;
    function Ie() {
      if (false !== _e) return _e;
      if ("undefined" != typeof document) {
        const e2 = document.head.querySelector('meta[property="csp-nonce"]');
        if (e2) return _e = e2.nonce || e2.getAttribute("content") || void 0;
        const t2 = document.head.querySelector('meta[name="sc-nonce"]');
        if (t2) return _e = t2.getAttribute("content") || void 0;
      }
      return _e = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
    }
    __name(Ie, "Ie");
    var Ae = /* @__PURE__ */ __name((e2, t2) => {
      const n2 = document.head, o2 = e2 || n2, s2 = document.createElement("style"), r2 = ((e3) => {
        const t3 = Array.from(e3.querySelectorAll(`style[${u}]`));
        return t3[t3.length - 1];
      })(o2), i2 = void 0 !== r2 ? r2.nextSibling : null;
      s2.setAttribute(u, d), s2.setAttribute(h, p);
      const l2 = t2 || Ie();
      return l2 && s2.setAttribute("nonce", l2), o2.insertBefore(s2, i2), s2;
    }, "Ae");
    var Re = class {
      static {
        __name(this, "Re");
      }
      constructor(e2, t2) {
        this.element = Ae(e2, t2), this.element.appendChild(document.createTextNode("")), this.sheet = ((e3) => {
          var t3;
          if (e3.sheet) return e3.sheet;
          const n2 = null !== (t3 = e3.getRootNode().styleSheets) && void 0 !== t3 ? t3 : document.styleSheets;
          for (let t4 = 0, o2 = n2.length; t4 < o2; t4++) {
            const o3 = n2[t4];
            if (o3.ownerNode === e3) return o3;
          }
          throw C(17);
        })(this.element), this.length = 0;
      }
      insertRule(e2, t2) {
        try {
          return this.sheet.insertRule(t2, e2), this.length++, true;
        } catch (e3) {
          return false;
        }
      }
      deleteRule(e2) {
        this.sheet.deleteRule(e2), this.length--;
      }
      getRule(e2) {
        const t2 = this.sheet.cssRules[e2];
        return t2 && t2.cssText ? t2.cssText : "";
      }
    };
    var $e = class {
      static {
        __name(this, "$e");
      }
      constructor(e2, t2) {
        this.element = Ae(e2, t2), this.nodes = this.element.childNodes, this.length = 0;
      }
      insertRule(e2, t2) {
        if (e2 <= this.length && e2 >= 0) {
          const n2 = document.createTextNode(t2);
          return this.element.insertBefore(n2, this.nodes[e2] || null), this.length++, true;
        }
        return false;
      }
      deleteRule(e2) {
        this.element.removeChild(this.nodes[e2]), this.length--;
      }
      getRule(e2) {
        return e2 < this.length ? this.nodes[e2].textContent : "";
      }
    };
    var je = class {
      static {
        __name(this, "je");
      }
      constructor(e2) {
        this.rules = [], this.length = 0;
      }
      insertRule(e2, t2) {
        return e2 <= this.length && (e2 === this.length ? this.rules.push(t2) : this.rules.splice(e2, 0, t2), this.length++, true);
      }
      deleteRule(e2) {
        this.rules.splice(e2, 1), this.length--;
      }
      getRule(e2) {
        return e2 < this.length ? this.rules[e2] : "";
      }
    };
    var Te = m;
    var ke = { isServer: !m, useCSSOMInjection: !v };
    var De = class _De {
      static {
        __name(this, "De");
      }
      static registerId(e2) {
        return E(e2);
      }
      constructor(e2 = T, t2 = {}, n2) {
        this.options = Object.assign(Object.assign({}, ke), e2), this.gs = t2, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n2), this.server = !!e2.isServer, !this.server && m && Te && (Te = false, Ee(this)), Se(this, () => ((e3) => {
          const t3 = e3.getTag(), { length: n3 } = t3;
          let o2 = "";
          for (let s2 = 0; s2 < n3; s2++) {
            const n4 = _(s2);
            if (void 0 === n4) continue;
            const r2 = e3.names.get(n4);
            if (void 0 === r2 || !r2.size) continue;
            const i2 = t3.getGroup(s2);
            if (0 === i2.length) continue;
            const l2 = u + ".g" + s2 + '[id="' + n4 + '"]';
            let a2 = "";
            for (const e4 of r2) e4.length > 0 && (a2 += e4 + ",");
            o2 += i2 + l2 + '{content:"' + a2 + '"}' + f;
          }
          return o2;
        })(this));
      }
      rehydrate() {
        !this.server && m && Ee(this);
      }
      reconstructWithOptions(e2, t2 = true) {
        const n2 = new _De(Object.assign(Object.assign({}, this.options), e2), this.gs, t2 && this.names || void 0);
        return n2.keyframeIds = new Set(this.keyframeIds), !this.server && m && e2.target !== this.options.target && Pe(this.options.target) !== Pe(e2.target) && Ee(n2), n2;
      }
      allocateGSInstance(e2) {
        return this.gs[e2] = (this.gs[e2] || 0) + 1;
      }
      getTag() {
        return this.tag || (this.tag = (e2 = (({ isServer: e3, useCSSOMInjection: t2, target: n2, nonce: o2 }) => e3 ? new je(n2) : t2 ? new Re(n2, o2) : new $e(n2, o2))(this.options), new be(e2)));
        var e2;
      }
      hasNameForId(e2, t2) {
        var n2, o2;
        return null !== (o2 = null === (n2 = this.names.get(e2)) || void 0 === n2 ? void 0 : n2.has(t2)) && void 0 !== o2 && o2;
      }
      registerName(e2, t2) {
        E(e2), e2.startsWith(S) && this.keyframeIds.add(e2);
        const n2 = this.names.get(e2);
        n2 ? n2.add(t2) : this.names.set(e2, /* @__PURE__ */ new Set([t2]));
      }
      insertRules(e2, t2, n2) {
        this.registerName(e2, t2), this.getTag().insertRules(E(e2), n2);
      }
      clearNames(e2) {
        this.names.has(e2) && this.names.get(e2).clear();
      }
      clearRules(e2) {
        this.getTag().clearGroup(E(e2)), this.clearNames(e2);
      }
      clearTag() {
        this.tag = void 0;
      }
    };
    var Me = /* @__PURE__ */ new WeakSet();
    var Ve = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
    function Ge(e2, t2) {
      return null == t2 || "boolean" == typeof t2 || "" === t2 ? "" : "number" != typeof t2 || 0 === t2 || e2 in Ve || e2.startsWith("--") ? String(t2).trim() : t2 + "px";
    }
    __name(Ge, "Ge");
    var Fe = 47;
    function ze(e2) {
      if (45 === e2.charCodeAt(0) && 45 === e2.charCodeAt(1)) return e2;
      let t2 = "";
      for (let n2 = 0; n2 < e2.length; n2++) {
        const o2 = e2.charCodeAt(n2);
        t2 += o2 >= 65 && o2 <= 90 ? "-" + String.fromCharCode(o2 + 32) : e2[n2];
      }
      return t2.startsWith("ms-") ? "-" + t2 : t2;
    }
    __name(ze, "ze");
    var We = Symbol.for("sc-keyframes");
    function qe(e2) {
      return "object" == typeof e2 && null !== e2 && We in e2;
    }
    __name(qe, "qe");
    function Le(e2) {
      return ce(e2) && !(e2.prototype && e2.prototype.isReactComponent);
    }
    __name(Le, "Le");
    var Be = /* @__PURE__ */ __name((e2) => null == e2 || false === e2 || "" === e2, "Be");
    var He = Symbol.for("react.client.reference");
    function Ue(e2) {
      return e2.$$typeof === He;
    }
    __name(Ue, "Ue");
    function Ye(e2) {
      const t2 = e2.$$id, n2 = (t2 && t2.includes("#") ? t2.split("#").pop() : t2) || e2.name || "unknown";
      console.warn(`Interpolating a client component (${n2}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
    }
    __name(Ye, "Ye");
    function Je(e2, t2) {
      for (const n2 in e2) {
        const o2 = e2[n2];
        e2.hasOwnProperty(n2) && !Be(o2) && (Array.isArray(o2) && Me.has(o2) || ce(o2) ? t2.push(ze(n2) + ":", o2, ";") : ye(o2) ? (t2.push(n2 + " {"), Je(o2, t2), t2.push("}")) : t2.push(ze(n2) + ": " + Ge(n2, o2) + ";"));
      }
    }
    __name(Je, "Je");
    function Xe(e2, t2, n2, o2, s2 = []) {
      if (Be(e2)) return s2;
      const r2 = typeof e2;
      if ("string" === r2) return s2.push(e2), s2;
      if ("function" === r2) {
        if (Ue(e2)) return "production" !== process.env.NODE_ENV && Ye(e2), s2;
        if (Le(e2) && t2) {
          const r3 = e2(t2);
          return "production" === process.env.NODE_ENV || "object" != typeof r3 || Array.isArray(r3) || qe(r3) || ye(r3) || null === r3 || console.error(`${H(e2)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), Xe(r3, t2, n2, o2, s2);
        }
        return s2.push(e2), s2;
      }
      if (Array.isArray(e2)) {
        for (let r3 = 0; r3 < e2.length; r3++) Xe(e2[r3], t2, n2, o2, s2);
        return s2;
      }
      return de(e2) ? (s2.push(`.${e2.styledComponentId}`), s2) : qe(e2) ? (n2 ? (e2.inject(n2, o2), s2.push(e2.getName(o2))) : s2.push(e2), s2) : Ue(e2) ? ("production" !== process.env.NODE_ENV && Ye(e2), s2) : ye(e2) ? e2.toString !== Object.prototype.toString ? (s2.push(e2.toString()), s2) : (Je(e2, s2), s2) : (s2.push(e2.toString()), s2);
    }
    __name(Xe, "Xe");
    var Ze = L(p);
    var Ke = y ? /* @__PURE__ */ new WeakMap() : null;
    function Qe(e2, t2) {
      if (!Ke) return null;
      const n2 = Ke.get(e2);
      if (!n2) return null;
      const o2 = t2.names.get(e2.componentId);
      if (!o2) return null;
      let s2 = "";
      for (const e3 of o2) {
        const t3 = n2.get(e3);
        if (!t3) return null;
        s2 += t3;
      }
      return s2;
    }
    __name(Qe, "Qe");
    var et = class {
      static {
        __name(this, "et");
      }
      constructor(e2, t2, n2) {
        this.rules = e2, this.componentId = t2, this.baseHash = q(Ze, t2), this.baseStyle = n2, De.registerId(t2);
      }
      generateAndInjectStyles(e2, t2, n2) {
        let o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t2, n2) : "";
        {
          let s2 = "";
          for (let o3 = 0; o3 < this.rules.length; o3++) {
            const r2 = this.rules[o3];
            if ("string" == typeof r2) s2 += r2;
            else if (r2) if (Le(r2)) {
              const o4 = r2(e2);
              "string" == typeof o4 ? s2 += o4 : null != o4 && false !== o4 && ("production" === process.env.NODE_ENV || "object" != typeof o4 || Array.isArray(o4) || qe(o4) || ye(o4) || console.error(`${H(r2)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), s2 += pe(Xe(o4, e2, t2, n2)));
            } else s2 += pe(Xe(r2, e2, t2, n2));
          }
          if (s2) {
            this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
            const e3 = n2.hash ? n2.hash + s2 : s2;
            let r2 = this.dynamicNameCache.get(e3);
            if (!r2) {
              if (r2 = z(q(q(this.baseHash, n2.hash), s2) >>> 0), this.dynamicNameCache.size >= 200) {
                const e4 = this.dynamicNameCache.keys().next().value;
                void 0 !== e4 && this.dynamicNameCache.delete(e4);
              }
              this.dynamicNameCache.set(e3, r2);
            }
            if (!t2.hasNameForId(this.componentId, r2)) if (y && function(e4, t3) {
              var n3, o3;
              return null !== (o3 = null === (n3 = null == Ke ? void 0 : Ke.get(e4)) || void 0 === n3 ? void 0 : n3.has(t3)) && void 0 !== o3 && o3;
            }(this, r2)) t2.registerName(this.componentId, r2);
            else {
              const e4 = n2(s2, "." + r2, void 0, this.componentId);
              y && function(e5, t3, n3) {
                if (!Ke) return;
                let o3 = Ke.get(e5);
                o3 || (o3 = /* @__PURE__ */ new Map(), Ke.set(e5, o3)), o3.set(t3, fe(n3));
              }(this, r2, e4), t2.insertRules(this.componentId, r2, e4);
            }
            o2 = he(o2, r2);
          }
        }
        return o2;
      }
    };
    var tt = /&/g;
    function nt(e2, t2) {
      let n2 = 0;
      for (; --t2 >= 0 && 92 === e2.charCodeAt(t2); ) n2++;
      return !(1 & ~n2);
    }
    __name(nt, "nt");
    function ot(e2) {
      const t2 = e2.length;
      let n2 = "", o2 = 0, s2 = 0, r2 = 0, i2 = false, l2 = false;
      for (let a2 = 0; a2 < t2; a2++) {
        const c2 = e2.charCodeAt(a2);
        if (0 !== r2 || i2 || c2 !== Fe || 42 !== e2.charCodeAt(a2 + 1)) if (i2) 42 === c2 && e2.charCodeAt(a2 + 1) === Fe && (i2 = false, a2++);
        else if (34 !== c2 && 39 !== c2 || nt(e2, a2)) {
          if (0 === r2) if (123 === c2) s2++;
          else if (125 === c2) {
            if (s2--, s2 < 0) {
              l2 = true;
              let n3 = a2 + 1;
              for (; n3 < t2; ) {
                const t3 = e2.charCodeAt(n3);
                if (59 === t3 || 10 === t3) break;
                n3++;
              }
              n3 < t2 && 59 === e2.charCodeAt(n3) && n3++, s2 = 0, a2 = n3 - 1, o2 = n3;
              continue;
            }
            0 === s2 && (n2 += e2.substring(o2, a2 + 1), o2 = a2 + 1);
          } else 59 === c2 && 0 === s2 && (n2 += e2.substring(o2, a2 + 1), o2 = a2 + 1);
        } else 0 === r2 ? r2 = c2 : r2 === c2 && (r2 = 0);
        else i2 = true, a2++;
      }
      return l2 || 0 !== s2 || 0 !== r2 ? (o2 < t2 && 0 === s2 && 0 === r2 && (n2 += e2.substring(o2)), n2) : e2;
    }
    __name(ot, "ot");
    function st(e2, t2) {
      const n2 = t2 + " ", o2 = "," + n2;
      for (let s2 = 0; s2 < e2.length; s2++) {
        const r2 = e2[s2];
        if ("rule" === r2.type) {
          r2.value = (n2 + r2.value).replaceAll(",", o2);
          const e3 = r2.props, t3 = [];
          for (let o3 = 0; o3 < e3.length; o3++) t3[o3] = n2 + e3[o3];
          r2.props = t3;
        }
        Array.isArray(r2.children) && "@keyframes" !== r2.type && st(r2.children, t2);
      }
      return e2;
    }
    __name(st, "st");
    function rt({ options: e2 = T, plugins: t2 = j } = T) {
      let n2, o2, s2;
      const r2 = /* @__PURE__ */ __name((e3, t3, s3) => s3.startsWith(o2) && s3.endsWith(o2) && s3.replaceAll(o2, "").length > 0 ? `.${n2}` : e3, "r"), i2 = t2.slice();
      i2.push((e3) => {
        e3.type === c.RULESET && e3.value.includes("&") && (s2 || (s2 = new RegExp(`\\${o2}\\b`, "g")), e3.props[0] = e3.props[0].replace(tt, o2).replace(s2, r2));
      }), e2.prefix && i2.push(c.prefixer), i2.push(c.stringify);
      let l2 = [];
      const a2 = c.middleware(i2.concat(c.rulesheet((e3) => l2.push(e3)))), u2 = /* @__PURE__ */ __name((t3, r3 = "", i3 = "", u3 = "&") => {
        n2 = u3, o2 = r3, s2 = void 0;
        const d3 = function(e3) {
          const t4 = -1 !== e3.indexOf("//"), n3 = -1 !== e3.indexOf("}");
          if (!t4 && !n3) return e3;
          if (!t4) return ot(e3);
          const o3 = e3.length;
          let s3 = "", r4 = 0, i4 = 0, l3 = 0, a3 = 0, c2 = 0, u4 = false;
          for (; i4 < o3; ) {
            const t5 = e3.charCodeAt(i4);
            if (34 !== t5 && 39 !== t5 || nt(e3, i4)) if (0 === l3) if (t5 === Fe && i4 + 1 < o3 && 42 === e3.charCodeAt(i4 + 1)) {
              for (i4 += 2; i4 + 1 < o3 && (42 !== e3.charCodeAt(i4) || e3.charCodeAt(i4 + 1) !== Fe); ) i4++;
              i4 += 2;
            } else if (40 !== t5) if (41 !== t5) if (a3 > 0) i4++;
            else if (42 === t5 && i4 + 1 < o3 && e3.charCodeAt(i4 + 1) === Fe) s3 += e3.substring(r4, i4), i4 += 2, r4 = i4, u4 = true;
            else if (t5 === Fe && i4 + 1 < o3 && e3.charCodeAt(i4 + 1) === Fe) {
              for (s3 += e3.substring(r4, i4); i4 < o3 && 10 !== e3.charCodeAt(i4); ) i4++;
              r4 = i4, u4 = true;
            } else 123 === t5 ? c2++ : 125 === t5 && c2--, i4++;
            else a3 > 0 && a3--, i4++;
            else a3++, i4++;
            else i4++;
            else 0 === l3 ? l3 = t5 : l3 === t5 && (l3 = 0), i4++;
          }
          return u4 ? (r4 < o3 && (s3 += e3.substring(r4)), 0 === c2 ? s3 : ot(s3)) : 0 === c2 ? e3 : ot(e3);
        }(t3);
        let h3 = c.compile(i3 || r3 ? i3 + " " + r3 + " { " + d3 + " }" : d3);
        return e2.namespace && (h3 = st(h3, e2.namespace)), l2 = [], c.serialize(h3, a2), l2;
      }, "u"), d2 = e2;
      let h2 = W;
      for (let e3 = 0; e3 < t2.length; e3++) t2[e3].name || C(15), h2 = q(h2, t2[e3].name);
      return (null == d2 ? void 0 : d2.namespace) && (h2 = q(h2, d2.namespace)), (null == d2 ? void 0 : d2.prefix) && (h2 = q(h2, "p")), u2.hash = h2 !== W ? h2.toString() : "", u2;
    }
    __name(rt, "rt");
    var it;
    var lt;
    var at;
    var ct = new De();
    var ut = rt();
    var dt;
    var ht = null;
    var pt = ut;
    var ft = y && null !== (at = null === (lt = (it = a.default).cache) || void 0 === lt ? void 0 : lt.call(it, () => {
      ct.names.clear(), ct.keyframeIds.clear(), ct.clearTag(), ht = null;
    })) && void 0 !== at ? at : null;
    var mt = { shouldForwardProp: void 0, styleSheet: ct, stylis: ut, stylisPlugins: void 0 };
    var yt = y ? { Provider: /* @__PURE__ */ __name(({ children: e2 }) => e2, "Provider"), Consumer: /* @__PURE__ */ __name(({ children: e2 }) => e2(mt), "Consumer") } : a.default.createContext(mt);
    var gt = yt.Consumer;
    function vt() {
      return y ? (ft && ft(), ht || mt) : a.default.useContext(yt);
    }
    __name(vt, "vt");
    function St(e2) {
      var t2, n2, o2;
      if (y) {
        ft && ft();
        const o3 = ht || mt, s3 = void 0 !== e2.stylisPlugins || void 0 !== e2.namespace || void 0 !== e2.enableVendorPrefixes;
        s3 && (e2.stylisPlugins && e2.stylisPlugins !== dt ? (dt = e2.stylisPlugins, pt = rt({ options: { namespace: e2.namespace, prefix: e2.enableVendorPrefixes }, plugins: e2.stylisPlugins })) : void 0 === e2.namespace && void 0 === e2.enableVendorPrefixes || (pt = rt({ options: { namespace: e2.namespace, prefix: e2.enableVendorPrefixes }, plugins: null !== (t2 = e2.stylisPlugins) && void 0 !== t2 ? t2 : o3.stylisPlugins })));
        const r3 = s3 ? void 0 === e2.stylisPlugins || e2.stylisPlugins.length ? pt : ut : o3.stylis, i3 = "shouldForwardProp" in e2 ? e2.shouldForwardProp : o3.shouldForwardProp, l3 = null !== (n2 = e2.stylisPlugins) && void 0 !== n2 ? n2 : o3.stylisPlugins;
        return ht = r3 !== ut || i3 ? { shouldForwardProp: i3, styleSheet: ct, stylis: r3, stylisPlugins: l3 } : null, e2.children;
      }
      const s2 = vt(), { styleSheet: r2 } = s2, i2 = a.default.useMemo(() => {
        let t3 = r2;
        return e2.sheet ? t3 = e2.sheet : e2.target ? t3 = t3.reconstructWithOptions(void 0 !== e2.nonce ? { target: e2.target, nonce: e2.nonce } : { target: e2.target }, false) : void 0 !== e2.nonce && (t3 = t3.reconstructWithOptions({ nonce: e2.nonce })), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
      }, [e2.disableCSSOMInjection, e2.nonce, e2.sheet, e2.target, r2]), l2 = a.default.useMemo(() => {
        var t3;
        return void 0 === e2.stylisPlugins && void 0 === e2.namespace && void 0 === e2.enableVendorPrefixes ? s2.stylis : rt({ options: { namespace: e2.namespace, prefix: e2.enableVendorPrefixes }, plugins: null !== (t3 = e2.stylisPlugins) && void 0 !== t3 ? t3 : s2.stylisPlugins });
      }, [e2.enableVendorPrefixes, e2.namespace, e2.stylisPlugins, s2.stylis, s2.stylisPlugins]), c2 = "shouldForwardProp" in e2 ? e2.shouldForwardProp : s2.shouldForwardProp, u2 = null !== (o2 = e2.stylisPlugins) && void 0 !== o2 ? o2 : s2.stylisPlugins, d2 = a.default.useMemo(() => ({ shouldForwardProp: c2, styleSheet: i2, stylis: l2, stylisPlugins: u2 }), [c2, i2, l2, u2]);
      return a.default.createElement(yt.Provider, { value: d2 }, e2.children);
    }
    __name(St, "St");
    var bt = y ? { Provider: /* @__PURE__ */ __name(({ children: e2 }) => e2, "Provider"), Consumer: /* @__PURE__ */ __name(({ children: e2 }) => e2(void 0), "Consumer") } : a.default.createContext(void 0);
    var wt = bt.Consumer;
    var Ct = {};
    function Nt(e2, t2) {
      const n2 = "string" != typeof e2 ? "sc" : V(e2);
      Ct[n2] = (Ct[n2] || 0) + 1;
      const o2 = n2 + "-" + B(p + n2 + Ct[n2]);
      return t2 ? t2 + "-" + o2 : o2;
    }
    __name(Nt, "Nt");
    var Pt;
    var Ot = ve(() => /* @__PURE__ */ new Set());
    var xt = /* @__PURE__ */ new Map();
    function Et(e2) {
      let t2 = xt.get(e2);
      return t2 || (t2 = new RegExp("\\." + e2 + "(?![a-zA-Z0-9_-])", "g"), xt.set(e2, t2)), t2;
    }
    __name(Et, "Et");
    function _t(e2, t2, n2) {
      const o2 = n2.names.get(t2);
      if (o2) for (const t3 of o2) {
        const n3 = Et(t3);
        n3.lastIndex = 0, e2 = e2.replace(n3, ":where(." + t3 + ")");
      }
      return e2;
    }
    __name(_t, "_t");
    function It(e2, n2, o2) {
      const s2 = de(e2), r2 = e2, i2 = !U(e2), { attrs: c2 = j, componentId: d2 = Nt(n2.displayName, n2.parentComponentId), displayName: h2 = Y(e2) } = n2, p2 = n2.displayName && n2.componentId ? V(n2.displayName) + "-" + n2.componentId : n2.componentId || d2, m2 = s2 && r2.attrs ? r2.attrs.concat(c2).filter(Boolean) : c2;
      let { shouldForwardProp: g2 } = n2;
      if (s2 && r2.shouldForwardProp) {
        const e3 = r2.shouldForwardProp;
        if (n2.shouldForwardProp) {
          const t2 = n2.shouldForwardProp;
          g2 = /* @__PURE__ */ __name((n3, o3) => e3(n3, o3) && t2(n3, o3), "g");
        } else g2 = e3;
      }
      const v2 = new et(o2, p2, s2 ? r2.componentStyle : void 0);
      function S2(e3, n3) {
        return function(e4, n4, o3) {
          const { attrs: s3, componentStyle: r3, defaultProps: i3, foldedComponentIds: c3, styledComponentId: d3, target: h3 } = e4, p3 = y ? void 0 : a.default.useContext(bt), m3 = vt(), g3 = e4.shouldForwardProp || m3.shouldForwardProp;
          "production" !== process.env.NODE_ENV && a.default.useDebugValue && a.default.useDebugValue(d3);
          const v3 = k(n4, p3, i3) || (y ? void 0 : T);
          let S3, b3;
          S3 = function(e5, t2, n5) {
            const o4 = Object.assign(Object.assign({}, t2), { className: void 0, theme: n5 }), s4 = e5.length > 1;
            for (let n6 = 0; n6 < e5.length; n6++) {
              const r4 = e5[n6], i4 = ce(r4) ? r4(s4 ? Object.assign({}, o4) : o4) : r4;
              for (const e6 in i4) "className" === e6 ? o4.className = he(o4.className, i4[e6]) : "style" === e6 ? o4.style = Object.assign(Object.assign({}, o4.style), i4[e6]) : e6 in t2 && void 0 === t2[e6] || (o4[e6] = i4[e6]);
            }
            return "className" in t2 && "string" == typeof t2.className && (o4.className = he(o4.className, t2.className)), o4;
          }(s3, n4, v3), b3 = r3.generateAndInjectStyles(S3, m3.styleSheet, m3.stylis), "production" !== process.env.NODE_ENV && a.default.useDebugValue && a.default.useDebugValue(b3), "production" !== process.env.NODE_ENV && e4.warnTooManyClasses && e4.warnTooManyClasses(b3);
          const w2 = S3.as || h3, C2 = function(e5, t2, n5, o4) {
            const s4 = {};
            for (const r4 in e5) void 0 === e5[r4] || "$" === r4[0] || "as" === r4 || "theme" === r4 && e5.theme === n5 || ("forwardedAs" === r4 ? s4.as = e5.forwardedAs : o4 && !o4(r4, t2) || (s4[r4] = e5[r4], o4 || "development" !== process.env.NODE_ENV || l.default(r4) || (Pt || (Pt = /* @__PURE__ */ new Set())).has(r4) || !U(t2) || t2.includes("-") || (Pt.add(r4), console.warn(`styled-components: it looks like an unknown prop "${r4}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
            return s4;
          }(S3, w2, v3, g3);
          let N2 = he(c3, d3);
          b3 && (N2 += " " + b3), S3.className && (N2 += " " + S3.className), C2[U(w2) && w2.includes("-") ? "class" : "className"] = N2, o3 && (C2.ref = o3);
          const P2 = t.createElement(w2, C2);
          if (y) {
            const e5 = Ot ? Ot() : null;
            let t2 = null, n5 = 0, o4 = "", s4 = true, i4 = r3;
            for (; i4; ) {
              const l3 = m3.styleSheet.names.get(i4.componentId);
              if (l3) {
                n5 += l3.size;
                for (const n6 of l3) e5 && e5.has(n6) || (t2 || (t2 = []), t2.push(n6), e5 && e5.add(n6));
              }
              if (t2 && s4) {
                let e6 = Qe(i4, m3.styleSheet);
                null === e6 ? s4 = false : (i4 !== r3 && (e6 = _t(e6, i4.componentId, m3.styleSheet)), o4 = e6 + o4);
              }
              i4 = i4.baseStyle;
            }
            if (t2 && !s4) {
              o4 = "";
              const e6 = m3.styleSheet.getTag();
              let t3 = r3;
              for (; t3; ) {
                let n6 = e6.getGroup(E(t3.componentId));
                n6 && t3 !== r3 && (n6 = _t(n6, t3.componentId, m3.styleSheet)), o4 = n6 + o4, t3 = t3.baseStyle;
              }
            }
            let l2 = "";
            if (m3.styleSheet.keyframeIds.size > 0) {
              const t3 = m3.styleSheet.getTag();
              for (const n6 of m3.styleSheet.keyframeIds) {
                if (e5 && e5.has(n6)) continue;
                const o5 = t3.getGroup(E(n6));
                o5 && (l2 += o5, e5 && e5.add(n6));
              }
            }
            if (o4 && e5 && t2 && t2.length < n5) {
              const e6 = o4.split(f);
              let n6 = "";
              for (let o5 = 0; o5 < e6.length; o5++) {
                const s5 = e6[o5];
                if (s5) for (let e7 = 0; e7 < t2.length; e7++) {
                  const o6 = Et(t2[e7]);
                  if (o6.lastIndex = 0, o6.test(s5)) {
                    n6 += s5 + f;
                    break;
                  }
                }
              }
              o4 = n6;
            }
            const c4 = me(l2 + o4);
            if (c4) {
              const e6 = a.default.createElement("style", { [u]: "", key: "sc-" + r3.componentId, children: c4 });
              return a.default.createElement(a.default.Fragment, null, e6, P2);
            }
          }
          return P2;
        }(b2, e3, n3);
      }
      __name(S2, "S");
      S2.displayName = h2;
      let b2 = a.default.forwardRef(S2);
      return b2.attrs = m2, b2.componentStyle = v2, b2.displayName = h2, b2.shouldForwardProp = g2, b2.foldedComponentIds = s2 ? he(r2.foldedComponentIds, r2.styledComponentId) : "", b2.styledComponentId = p2, b2.target = s2 ? r2.target : e2, Object.defineProperty(b2, "defaultProps", { get() {
        return this._foldedDefaultProps;
      }, set(e3) {
        this._foldedDefaultProps = s2 ? function(e4, ...t2) {
          for (const n3 of t2) ge(e4, n3, true);
          return e4;
        }({}, r2.defaultProps, e3) : e3;
      } }), "production" !== process.env.NODE_ENV && ($(h2, p2), b2.warnTooManyClasses = /* @__PURE__ */ ((e3, t2) => {
        let n3 = {}, o3 = false;
        return (s3) => {
          !o3 && (n3[s3] = true, Object.keys(n3).length >= 200) && (console.warn(`Over 200 classes were generated for component ${e3}${t2 ? ` with the id of "${t2}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), o3 = true, n3 = {});
        };
      })(h2, p2)), Se(b2, () => `.${b2.styledComponentId}`), i2 && ae(b2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), b2;
    }
    __name(It, "It");
    var At = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
    function Rt(e2, t2) {
      const n2 = [e2[0]];
      for (let o2 = 0, s2 = t2.length; o2 < s2; o2 += 1) n2.push(t2[o2], e2[o2 + 1]);
      return n2;
    }
    __name(Rt, "Rt");
    var $t = /* @__PURE__ */ __name((e2) => (Me.add(e2), e2), "$t");
    function jt(e2, ...t2) {
      if (ce(e2) || ye(e2)) return $t(Xe(Rt(j, [e2, ...t2])));
      const n2 = e2;
      return 0 === t2.length && 1 === n2.length && "string" == typeof n2[0] ? Xe(n2) : $t(Xe(Rt(n2, t2)));
    }
    __name(jt, "jt");
    function Tt(e2, t2, n2 = T) {
      if (!t2) throw C(1, t2);
      const o2 = /* @__PURE__ */ __name((o3, ...s2) => e2(t2, n2, jt(o3, ...s2)), "o");
      return o2.attrs = (o3) => Tt(e2, t2, Object.assign(Object.assign({}, n2), { attrs: Array.prototype.concat(n2.attrs, o3).filter(Boolean) })), o2.withConfig = (o3) => Tt(e2, t2, Object.assign(Object.assign({}, n2), o3)), o2;
    }
    __name(Tt, "Tt");
    var kt = /* @__PURE__ */ __name((e2) => Tt(It, e2), "kt");
    var Dt = kt;
    At.forEach((e2) => {
      Dt[e2] = kt(e2);
    });
    var Mt = class {
      static {
        __name(this, "Mt");
      }
      constructor(e2, t2) {
        this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e2, this.componentId = t2, this.isStatic = function(e3) {
          for (let t3 = 0; t3 < e3.length; t3 += 1) {
            const n2 = e3[t3];
            if (ce(n2) && !de(n2)) return false;
          }
          return true;
        }(e2), De.registerId(this.componentId);
      }
      removeStyles(e2, t2) {
        this.instanceRules.delete(e2), this.rebuildGroup(t2);
      }
      renderStyles(e2, t2, n2, o2) {
        const s2 = this.componentId;
        if (this.isStatic) {
          if (n2.hasNameForId(s2, s2 + e2)) this.instanceRules.has(e2) || this.computeRules(e2, t2, n2, o2);
          else {
            const r3 = this.computeRules(e2, t2, n2, o2);
            n2.insertRules(s2, r3.name, r3.rules);
          }
          return;
        }
        const r2 = this.instanceRules.get(e2);
        if (this.computeRules(e2, t2, n2, o2), !n2.server && r2) {
          const t3 = r2.rules, n3 = this.instanceRules.get(e2).rules;
          if (t3.length === n3.length) {
            let e3 = true;
            for (let o3 = 0; o3 < t3.length; o3++) if (t3[o3] !== n3[o3]) {
              e3 = false;
              break;
            }
            if (e3) return;
          }
        }
        this.rebuildGroup(n2);
      }
      computeRules(e2, t2, n2, o2) {
        const s2 = pe(Xe(this.rules, t2, n2, o2)), r2 = { name: this.componentId + e2, rules: o2(s2, "") };
        return this.instanceRules.set(e2, r2), r2;
      }
      rebuildGroup(e2) {
        const t2 = this.componentId;
        e2.clearRules(t2);
        for (const n2 of this.instanceRules.values()) e2.insertRules(t2, n2.name, n2.rules);
      }
    };
    var Vt = ve(() => /* @__PURE__ */ new Set());
    function Gt(e2, ...t2) {
      const n2 = jt(e2, ...t2), o2 = `sc-global-${B(JSON.stringify(n2))}`, s2 = new Mt(n2, o2);
      "production" !== process.env.NODE_ENV && $(o2);
      const r2 = /* @__PURE__ */ __name((e3) => {
        const t3 = vt(), i2 = y ? void 0 : a.default.useContext(bt);
        let l2;
        if (l2 = t3.styleSheet.allocateGSInstance(o2), "production" !== process.env.NODE_ENV && a.default.Children.count(e3.children) && console.warn(`The global style component ${o2} was given child JSX. createGlobalStyle does not render children.`), "production" !== process.env.NODE_ENV && n2.some((e4) => "string" == typeof e4 && -1 !== e4.indexOf("@import")) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), (y || t3.styleSheet.server) && function(e4, t4, n3, o3, i3) {
          if (s2.isStatic) s2.renderStyles(e4, b, n3, i3);
          else {
            const l3 = Object.assign(Object.assign({}, t4), { theme: k(t4, o3, r2.defaultProps) });
            s2.renderStyles(e4, l3, n3, i3);
          }
        }(l2, e3, t3.styleSheet, i2, t3.stylis), y) {
          const e4 = "undefined" == typeof window ? s2.instanceRules.get(l2) : void 0, n3 = e4 ? fe(e4.rules) : "";
          if (n3) {
            s2.instanceRules.delete(l2);
            const e5 = Vt ? Vt() : null;
            if (e5) {
              const r3 = s2.isStatic ? o2 + t3.stylis.hash : n3;
              if (e5.has(r3)) return null;
              e5.add(r3);
            }
            return a.default.createElement("style", { key: o2 + "-" + l2, "data-styled-global": o2, children: me(n3) });
          }
        }
        return s2.instanceRules.delete(l2), null;
      }, "r");
      return a.default.memo(r2);
    }
    __name(Gt, "Gt");
    function Ft(e2, t2, n2, o2, s2) {
      for (const r2 in e2) {
        const i2 = e2[r2], l2 = s2 ? s2 + "-" + r2 : r2;
        if ("object" == typeof i2 && null !== i2) {
          const e3 = {};
          Ft(i2, t2, e3, o2, l2), n2[r2] = e3;
        } else n2[r2] = o2(l2, i2, r2);
      }
    }
    __name(Ft, "Ft");
    function zt(e2, t2, n2, o2) {
      let s2 = "";
      for (const r2 in e2) {
        const i2 = e2[r2], l2 = t2[r2], a2 = o2 ? o2 + "-" + r2 : r2;
        "object" == typeof i2 && null !== i2 ? "object" == typeof l2 && null !== l2 && (s2 += zt(i2, l2, n2, a2)) : void 0 !== l2 && "function" != typeof l2 && (s2 += "--" + n2 + a2 + ":" + l2 + ";");
      }
      return s2;
    }
    __name(zt, "zt");
    var Wt;
    var qt = y ? /* @__PURE__ */ new WeakMap() : null;
    var Lt = class {
      static {
        __name(this, "Lt");
      }
      constructor(e2, t2) {
        this[Wt] = true, this.inject = (e3, t3 = ut) => {
          var n2;
          const o2 = this.getName(t3);
          if (!e3.hasNameForId(this.id, o2)) {
            const s2 = t3.hash || "", r2 = y ? null === (n2 = null == qt ? void 0 : qt.get(this)) || void 0 === n2 ? void 0 : n2.get(s2) : void 0;
            if (r2) e3.insertRules(this.id, o2, r2);
            else {
              const n3 = t3(this.rules, o2, "@keyframes");
              if (y && qt) {
                let e4 = qt.get(this);
                e4 || (e4 = /* @__PURE__ */ new Map(), qt.set(this, e4)), e4.set(s2, n3);
              }
              e3.insertRules(this.id, o2, n3);
            }
          }
        }, this.name = e2, this.id = S + e2, this.rules = t2, E(this.id), Se(this, () => {
          throw C(12, String(this.name));
        });
      }
      getName(e2 = ut) {
        return e2.hash ? this.name + z(+e2.hash >>> 0) : this.name;
      }
    };
    Wt = We;
    var Bt = /^\s*<\/[a-z]/i;
    var Ht = { StyleSheet: De, mainSheet: ct };
    "production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://styled-components.com/docs/basics#react-native");
    var Ut = `__sc-${u}__`;
    "production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[Ut] || (window[Ut] = 0), 1 === window[Ut] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."), window[Ut] += 1);
    var Yt = /:(?:(first)-child|(last)-child|(only)-child|(nth-child)\(([^()]+)\)|(nth-last-child)\(([^()]+)\))/g;
    var Jt = `:not(style[${u}])`;
    var Xt = `style[${u}]`;
    function Zt(e2) {
      return -1 === e2.indexOf("-child") ? e2 : (Yt.lastIndex = 0, e2.replace(Yt, (e3, t2, n2, o2, s2, r2, i2, l2) => t2 ? `:nth-child(1 of ${Jt})` : n2 ? `:nth-last-child(1 of ${Jt})` : o2 ? `:nth-child(1 of ${Jt}):nth-last-child(1 of ${Jt})` : s2 ? -1 !== r2.indexOf(" of ") ? e3 : `:nth-child(${r2} of ${Jt})` : -1 !== l2.indexOf(" of ") ? e3 : `:nth-last-child(${l2} of ${Jt})`));
    }
    __name(Zt, "Zt");
    function Kt(e2, t2) {
      if (-1 === e2.indexOf("+")) return;
      let n2 = 0, o2 = 0;
      for (let s2 = 0; s2 < e2.length; s2++) {
        const r2 = e2.charCodeAt(s2);
        if (40 === r2) n2++;
        else if (41 === r2) n2--;
        else if (91 === r2) o2++;
        else if (93 === r2) o2--;
        else if (43 === r2 && 0 === n2 && 0 === o2 && !nt(e2, s2)) {
          const n3 = e2.substring(0, s2), o3 = e2.substring(s2 + 1);
          t2.push(n3 + "+" + Xt + "+" + o3), t2.push(n3 + "+" + Xt + "+" + Xt + "+" + o3);
        }
      }
    }
    __name(Kt, "Kt");
    exports.ServerStyleSheet = class {
      constructor({ nonce: e2 } = {}) {
        this._emitSheetCSS = () => {
          const e3 = this.instance.toString();
          if (!e3) return "";
          const t2 = this.instance.options.nonce || Ie();
          return `<style ${pe([t2 && `nonce="${t2}"`, `${u}="true"`, `${h}="${p}"`].filter(Boolean), " ")}>${e3}</style>`;
        }, this.getStyleTags = () => {
          if (this.sealed) throw C(2);
          return this._emitSheetCSS();
        }, this.getStyleElement = () => {
          if (this.sealed) throw C(2);
          const e3 = this.instance.toString();
          if (!e3) return [];
          const t2 = { [u]: "", [h]: p, dangerouslySetInnerHTML: { __html: e3 } }, n2 = this.instance.options.nonce || Ie();
          return n2 && (t2.nonce = n2), [a.default.createElement("style", Object.assign({}, t2, { key: "sc-0-0" }))];
        }, this.seal = () => {
          this.sealed = true;
        }, this.instance = new De({ isServer: true, nonce: e2 }), this.sealed = false;
      }
      collectStyles(e2) {
        if (this.sealed) throw C(2);
        return a.default.createElement(St, { sheet: this.instance }, e2);
      }
      interleaveWithNodeStream(e2) {
        if (this.sealed) throw C(2);
        this.seal();
        const { Transform: t2 } = __require("stream"), { instance: n2, _emitSheetCSS: o2 } = this, s2 = new t2({ transform: /* @__PURE__ */ __name(function(e3, t3, s3) {
          const r2 = e3.toString(), i2 = o2();
          if (n2.clearTag(), Bt.test(r2)) {
            const e4 = r2.indexOf(">") + 1, t4 = r2.slice(0, e4), n3 = r2.slice(e4);
            this.push(t4 + i2 + n3);
          } else this.push(i2 + r2);
          s3();
        }, "transform") });
        if ("on" in e2 && "function" == typeof e2.on && "pipe" in e2) {
          const t3 = e2;
          return t3.on("error", (e3) => {
            s2.emit("error", e3);
          }), t3.pipe(s2);
        }
        if ("pipe" in e2 && "function" == typeof e2.pipe) return e2.pipe(s2);
        throw new Error("Unsupported stream type");
      }
    }, exports.StyleSheetConsumer = gt, exports.StyleSheetContext = yt, exports.StyleSheetManager = St, exports.ThemeConsumer = wt, exports.ThemeContext = bt, exports.ThemeProvider = function(e2) {
      if (y) return e2.children;
      const t2 = a.default.useContext(bt), n2 = a.default.useMemo(() => function(e3, t3) {
        if (!e3) throw C(14);
        if (ce(e3)) {
          const n3 = e3(t3);
          if ("production" !== process.env.NODE_ENV && (null === n3 || Array.isArray(n3) || "object" != typeof n3)) throw C(7);
          return n3;
        }
        if (Array.isArray(e3) || "object" != typeof e3) throw C(8);
        return t3 ? Object.assign(Object.assign({}, t3), e3) : e3;
      }(e2.theme, t2), [e2.theme, t2]);
      return e2.children ? a.default.createElement(bt.Provider, { value: n2 }, e2.children) : null;
    }, exports.__PRIVATE__ = Ht, exports.createGlobalStyle = Gt, exports.createTheme = function(e2, t2) {
      var n2, o2;
      const s2 = (null !== (n2 = null == t2 ? void 0 : t2.prefix) && void 0 !== n2 ? n2 : "sc") + "-", r2 = null !== (o2 = null == t2 ? void 0 : t2.selector) && void 0 !== o2 ? o2 : ":root", i2 = function(e3, t3) {
        const n3 = {};
        return Ft(e3, t3, n3, (e4) => "--" + t3 + e4), n3;
      }(e2, s2), l2 = function(e3, t3) {
        const n3 = {};
        return Ft(e3, t3, n3, (e4, n4) => {
          if ("production" !== process.env.NODE_ENV) {
            const t4 = String(n4);
            let o3 = 0;
            for (let e5 = 0; e5 < t4.length && (40 === t4.charCodeAt(e5) ? o3++ : 41 === t4.charCodeAt(e5) && o3--, !(o3 < 0)); e5++) ;
            0 !== o3 && console.warn(`createTheme: value "${t4}" at "${e4}" contains unbalanced parentheses and may break the var() fallback`);
          }
          return "var(--" + t3 + e4 + ", " + n4 + ")";
        }), n3;
      }(e2, s2), a2 = Gt`
    ${r2} {
      ${(t3) => zt(e2, t3.theme, s2)}
    }
  `;
      return Object.assign(l2, { GlobalStyle: a2, raw: e2, vars: i2, resolve(t3) {
        if (!m) throw new Error("createTheme.resolve() is client-only");
        const n3 = null != t3 ? t3 : document.documentElement;
        return function(e3, t4, n4) {
          const o3 = {};
          return Ft(e3, t4, o3, (e4, o4) => n4.getPropertyValue("--" + t4 + e4).trim() || o4), o3;
        }(e2, s2, getComputedStyle(n3));
      } });
    }, exports.css = jt, exports.default = Dt, exports.isStyledComponent = de, exports.keyframes = function(e2, ...t2) {
      "production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
      const n2 = pe(jt(e2, ...t2)), o2 = B(n2);
      return new Lt(o2, n2);
    }, exports.styled = Dt, exports.stylisPluginRSC = function(e2) {
      if (e2.type === n.RULESET) {
        const t2 = e2.props, n2 = [];
        for (let e3 = 0; e3 < t2.length; e3++) {
          const o2 = Zt(t2[e3]);
          n2.push(o2), Kt(o2, n2);
        }
        e2.props = n2;
      }
    }, exports.useTheme = function() {
      const e2 = y ? void 0 : a.default.useContext(bt);
      if (!e2) throw C(18);
      return e2;
    }, exports.version = p, exports.withTheme = function(e2) {
      const t2 = a.default.forwardRef((t3, n2) => {
        const o2 = k(t3, y ? void 0 : a.default.useContext(bt), e2.defaultProps);
        return "production" !== process.env.NODE_ENV && void 0 === o2 && console.warn(`[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "${H(e2)}"`), a.default.createElement(e2, Object.assign(Object.assign({}, t3), { theme: o2, ref: n2 }));
      });
      return t2.displayName = `WithTheme(${H(e2)})`, ae(t2, e2);
    };
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.production.js
var require_react_jsx_dev_runtime_production = __commonJS({
  "node_modules/react/cjs/react-jsx-dev-runtime.production.js"(exports) {
    "use strict";
    init_esm();
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = void 0;
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-dev-runtime.development.js"(exports) {
    "use strict";
    init_esm();
    "production" !== process.env.NODE_ENV && function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      __name(getComponentNameFromType, "getComponentNameFromType");
      function testStringCoercion(value) {
        return "" + value;
      }
      __name(testStringCoercion, "testStringCoercion");
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      __name(checkKeyStringCoercion, "checkKeyStringCoercion");
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      __name(getTaskName, "getTaskName");
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      __name(getOwner, "getOwner");
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      __name(UnknownOwner, "UnknownOwner");
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      __name(hasValidKey, "hasValidKey");
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        __name(warnAboutAccessingKey, "warnAboutAccessingKey");
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      __name(defineKeyPropWarningGetter, "defineKeyPropWarningGetter");
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      __name(elementRefGetterWithDeprecationWarning, "elementRefGetterWithDeprecationWarning");
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      __name(ReactElement, "ReactElement");
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      __name(jsxDEVImpl, "jsxDEVImpl");
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      __name(validateChildKeys, "validateChildKeys");
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      __name(isValidElement, "isValidElement");
      var React136 = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React136.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React136 = {
        react_stack_bottom_frame: /* @__PURE__ */ __name(function(callStackForError) {
          return callStackForError();
        }, "react_stack_bottom_frame")
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React136.react_stack_bottom_frame.bind(
        React136,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          isStaticChildren,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    }();
  }
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS({
  "node_modules/react/jsx-dev-runtime.js"(exports, module) {
    "use strict";
    init_esm();
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_jsx_dev_runtime_production();
    } else {
      module.exports = require_react_jsx_dev_runtime_development();
    }
  }
});

// node_modules/@jsonresume/core/src/ssr/index.js
init_esm();
var import_server = __toESM(require_server_node());
var import_styled_components = __toESM(require_styled_components_cjs());
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
  const sheet = new import_styled_components.ServerStyleSheet();
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

// node_modules/@jsonresume/core/src/primitives/Section.jsx
init_esm();
var import_react = __toESM(require_react());
var import_styled_components2 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var StyledSection = import_styled_components2.default.section`
  margin-bottom: ${(props) => props.theme?.spacing?.section || "var(--resume-space-section, 2rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
function Section({ children, className, id, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    StyledSection,
    {
      id,
      className: `resume-section ${className || ""}`.trim(),
      ...rest,
      children
    },
    void 0,
    false,
    {
      fileName: "node_modules/@jsonresume/core/src/primitives/Section.jsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
__name(Section, "Section");

// node_modules/@jsonresume/core/src/primitives/SectionTitle.jsx
init_esm();
var import_react2 = __toESM(require_react());
var import_styled_components3 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var StyledTitle = import_styled_components3.default.h2`
  font-size: ${(props) => props.theme?.typography?.heading || "var(--resume-size-heading, 16pt)"};
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};
  margin: 0 0
    ${(props) => props.theme?.spacing?.item || "var(--resume-space-item, 1rem)"}
    0;
  padding-bottom: 4px;
  border-bottom: 2px solid
    ${(props) => props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)"};

  @media print {
    page-break-after: avoid;
  }
`;
var Icon = import_styled_components3.default.span`
  margin-right: 8px;
  font-size: 1.2em;
`;
function SectionTitle({
  children,
  icon,
  level = 2,
  className,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    StyledTitle,
    {
      as: `h${level}`,
      className: `resume-section-title ${className || ""}`.trim(),
      ...rest,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { "aria-hidden": "true", className: "resume-icon", children: icon }, void 0, false, {
          fileName: "node_modules/@jsonresume/core/src/primitives/SectionTitle.jsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "node_modules/@jsonresume/core/src/primitives/SectionTitle.jsx",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
}
__name(SectionTitle, "SectionTitle");

// node_modules/@jsonresume/core/src/primitives/DateRange.jsx
init_esm();
var import_react3 = __toESM(require_react());
var import_styled_components4 = __toESM(require_styled_components_cjs());

// node_modules/@jsonresume/utils/src/dates.js
init_esm();
function formatDateRange({
  startDate,
  endDate,
  format = "short",
  locale = "en-US",
  numberingSystem,
  presentLabel
}) {
  if (!startDate) return "";
  const getPresentLabel = /* @__PURE__ */ __name(() => {
    if (presentLabel) return presentLabel;
    const labels = {
      en: "Present",
      "en-US": "Present",
      "en-GB": "Present",
      fr: "Présent",
      "fr-FR": "Présent",
      es: "Presente",
      "es-ES": "Presente",
      de: "Heute",
      "de-DE": "Heute",
      it: "Presente",
      "it-IT": "Presente",
      pt: "Presente",
      "pt-BR": "Presente",
      ja: "現在",
      "ja-JP": "現在",
      zh: "至今",
      "zh-CN": "至今",
      "zh-TW": "至今",
      ko: "현재",
      "ko-KR": "현재",
      ar: "حاضر",
      "ar-SA": "حاضر"
    };
    return labels[locale] || labels[locale.split("-")[0]] || "Present";
  }, "getPresentLabel");
  const formatDate = /* @__PURE__ */ __name((dateStr) => {
    if (!dateStr) return getPresentLabel();
    const isDateOnlyIso = typeof dateStr === "string" && /^\d{4}(-\d{2}){0,2}$/.test(dateStr);
    const date = typeof dateStr === "string" ? new Date(dateStr) : dateStr;
    if (isNaN(date.getTime())) return dateStr;
    const monthFormats = {
      short: { month: "short" },
      long: { month: "long" },
      numeric: { month: "2-digit" }
    };
    const options = {
      ...monthFormats[format],
      year: "numeric"
    };
    if (isDateOnlyIso) {
      options.timeZone = "UTC";
    }
    if (numberingSystem) {
      options.numberingSystem = numberingSystem;
    }
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  }, "formatDate");
  const start = formatDate(startDate);
  if (endDate === void 0) {
    return start;
  }
  const end = formatDate(endDate);
  return `${start} - ${end}`;
}
__name(formatDateRange, "formatDateRange");

// node_modules/@jsonresume/core/src/primitives/DateRange.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var StyledDateRange = import_styled_components4.default.span`
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.tertiary || "var(--resume-color-tertiary, #666)"};
  white-space: nowrap;
`;
function DateRange({
  startDate,
  endDate,
  format = "short",
  locale = "en-US",
  numberingSystem,
  presentLabel,
  className,
  ...rest
}) {
  const formatted = formatDateRange({
    startDate,
    endDate,
    format,
    locale,
    numberingSystem,
    presentLabel
  });
  if (!formatted) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    StyledDateRange,
    {
      className: `resume-date-range ${className || ""}`.trim(),
      ...rest,
      children: formatted
    },
    void 0,
    false,
    {
      fileName: "node_modules/@jsonresume/core/src/primitives/DateRange.jsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}
__name(DateRange, "DateRange");

// node_modules/@jsonresume/core/src/primitives/Badge.jsx
init_esm();
var import_react4 = __toESM(require_react());
var import_styled_components5 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var StyledBadge = import_styled_components5.default.span`
  display: inline-block;
  padding: ${(props) => {
  if (props.$size === "sm") return "2px 8px";
  if (props.$size === "lg") return "6px 16px";
  return "4px 12px";
}};
  border-radius: ${(props) => props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};
  font-size: ${(props) => {
  if (props.$size === "sm") return "9pt";
  if (props.$size === "lg") return "11pt";
  return "10pt";
}};
  font-weight: 500;
  background: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentLight || "var(--resume-color-accent-light, #e6f2ff)";
  }
  if (props.$variant === "secondary") {
    return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
  }
  return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
}};
  color: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
  }
  return props.theme?.colors?.primary || "var(--resume-color-primary, #000)";
}};

  @media print {
    background: ${(props) => props.$variant === "accent" ? "#e6f2ff" : "#f5f5f5"};
    color: ${(props) => props.$variant === "accent" ? "#0066cc" : "#000"};
  }
`;
function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    StyledBadge,
    {
      $variant: variant,
      $size: size,
      className: `resume-badge resume-badge-${variant} ${className || ""}`.trim(),
      ...rest,
      children
    },
    void 0,
    false,
    {
      fileName: "node_modules/@jsonresume/core/src/primitives/Badge.jsx",
      lineNumber: 65,
      columnNumber: 5
    },
    this
  );
}
__name(Badge, "Badge");
var BadgeContainer = import_styled_components5.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;
function BadgeList({
  children,
  items,
  variant = "default",
  size = "md",
  className,
  ...rest
}) {
  const content = items ? items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant, size, children: item }, index, false, {
    fileName: "node_modules/@jsonresume/core/src/primitives/Badge.jsx",
    lineNumber: 109,
    columnNumber: 9
  }, this)) : children;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    BadgeContainer,
    {
      className: `resume-badge-list ${className || ""}`.trim(),
      ...rest,
      children: content
    },
    void 0,
    false,
    {
      fileName: "node_modules/@jsonresume/core/src/primitives/Badge.jsx",
      lineNumber: 116,
      columnNumber: 5
    },
    this
  );
}
__name(BadgeList, "BadgeList");

// node_modules/@jsonresume/utils/src/url.js
init_esm();
function safeUrl(url) {
  if (!url || typeof url !== "string") {
    return null;
  }
  const trimmed = url.trim();
  const dangerousProtocols = /^(javascript|data|vbscript|file|about):/i;
  if (dangerousProtocols.test(trimmed)) {
    return null;
  }
  const safeProtocols = /^(https?|mailto|tel|sms|ftp):/i;
  if (safeProtocols.test(trimmed)) {
    return trimmed;
  }
  if (trimmed.startsWith("/") || trimmed.startsWith(".")) {
    return trimmed;
  }
  if (/^www\./i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  if (/^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}
__name(safeUrl, "safeUrl");
function getLinkRel(url, openInNewTab = false) {
  if (!url || typeof url !== "string") {
    return "";
  }
  if (openInNewTab && /^https?:/i.test(url)) {
    return "noopener noreferrer";
  }
  return "";
}
__name(getLinkRel, "getLinkRel");
function isExternalUrl(url, currentOrigin = null) {
  if (!url || typeof url !== "string") {
    return false;
  }
  if (url.startsWith("/") || url.startsWith(".") || url.startsWith("#")) {
    return false;
  }
  if (/^(mailto|tel|sms):/i.test(url)) {
    return false;
  }
  if (!currentOrigin && typeof window !== "undefined") {
    currentOrigin = window.location.origin;
  }
  if (!currentOrigin) {
    return true;
  }
  try {
    const urlObj = new URL(url, currentOrigin);
    return urlObj.origin !== currentOrigin;
  } catch (e) {
    return true;
  }
}
__name(isExternalUrl, "isExternalUrl");

// node_modules/@jsonresume/core/src/utils/security.js
init_esm();

// node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx
init_esm();
var import_react5 = __toESM(require_react());
var import_styled_components6 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var ContactContainer = import_styled_components6.default.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme?.spacing?.small || "var(--resume-space-small, 12px)"};
  flex-wrap: wrap;
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.text || "var(--resume-color-text, #333)"};

  a {
    color: ${(props) => props.theme?.colors?.link || "var(--resume-color-link, #0066cc)"};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
var ContactItem = import_styled_components6.default.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
var Separator = import_styled_components6.default.span`
  color: ${(props) => props.theme?.colors?.muted || "var(--resume-color-muted, #999)"};
`;
function ContactInfo({ basics = {}, separator = "•", className }) {
  const { email, phone, url, location, profiles = [] } = basics;
  const items = [];
  if (email) {
    items.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: safeUrl(`mailto:${email}`), "aria-label": "Email", children: email }, void 0, false, {
        fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this) }, "email", false, {
        fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
        lineNumber: 54,
        columnNumber: 7
      }, this)
    );
  }
  if (phone) {
    items.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: safeUrl(`tel:${phone}`), "aria-label": "Phone", children: phone }, void 0, false, {
        fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this) }, "phone", false, {
        fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
        lineNumber: 64,
        columnNumber: 7
      }, this)
    );
  }
  if (location) {
    const locationStr = [location.city, location.region, location.countryCode].filter(Boolean).join(", ");
    if (locationStr) {
      items.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContactItem, { "aria-label": "Location", children: locationStr }, "location", false, {
          fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
          lineNumber: 78,
          columnNumber: 9
        }, this)
      );
    }
  }
  if (url) {
    const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    items.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "a",
        {
          href: safeUrl(url),
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Website",
          children: displayUrl
        },
        void 0,
        false,
        {
          fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
          lineNumber: 89,
          columnNumber: 9
        },
        this
      ) }, "url", false, {
        fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
        lineNumber: 88,
        columnNumber: 7
      }, this)
    );
  }
  profiles.forEach((profile, index) => {
    if (profile.url) {
      items.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "a",
          {
            href: safeUrl(profile.url),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": profile.network,
            children: profile.network || profile.username
          },
          void 0,
          false,
          {
            fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
            lineNumber: 106,
            columnNumber: 11
          },
          this
        ) }, `profile-${index}`, false, {
          fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
          lineNumber: 105,
          columnNumber: 9
        }, this)
      );
    }
  });
  if (items.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContactContainer, { className: `resume-contact ${className || ""}`.trim(), children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.default.Fragment, { children: [
    index > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Separator, { "aria-hidden": "true", children: separator }, void 0, false, {
      fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
      lineNumber: 125,
      columnNumber: 25
    }, this),
    item
  ] }, index, true, {
    fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
    lineNumber: 124,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "node_modules/@jsonresume/core/src/primitives/ContactInfo.jsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
}
__name(ContactInfo, "ContactInfo");

// node_modules/@jsonresume/core/src/primitives/Link.jsx
init_esm();
var import_react6 = __toESM(require_react());
var import_styled_components7 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var StyledLink = import_styled_components7.default.a`
  color: ${(props) => props.theme?.colors?.link || "var(--resume-color-link, #0066cc)"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme?.colors?.linkVisited || "var(--resume-color-link-visited, #551a8b)"};
  }

  @media print {
    color: inherit;
    text-decoration: underline;
  }
`;
function Link({ href, children, className, ...rest }) {
  const safeHref = safeUrl(href);
  if (!safeHref) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className, children }, void 0, false, {
      fileName: "node_modules/@jsonresume/core/src/primitives/Link.jsx",
      lineNumber: 39,
      columnNumber: 12
    }, this);
  }
  const isExternal = isExternalUrl(safeHref);
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    StyledLink,
    {
      href: safeHref,
      className: `resume-link ${className || ""}`.trim(),
      ...externalProps,
      ...rest,
      children
    },
    void 0,
    false,
    {
      fileName: "node_modules/@jsonresume/core/src/primitives/Link.jsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}
__name(Link, "Link");

// node_modules/@jsonresume/core/src/primitives/index.jsx
init_esm();
var import_react9 = __toESM(require_react());

// node_modules/@jsonresume/core/src/primitives/ListItem.jsx
init_esm();
var import_react7 = __toESM(require_react());
var import_styled_components8 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var ItemContainer = import_styled_components8.default.div`
  margin-bottom: ${(props) => props.theme?.spacing?.item || "var(--resume-space-item, 1rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
var ItemHeader = import_styled_components8.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
var ItemTitle = import_styled_components8.default.div`
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};
  font-size: ${(props) => props.theme?.typography?.body || "var(--resume-size-body, 11pt)"};
`;
var ItemSubtitle = import_styled_components8.default.div`
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  margin-bottom: 4px;
`;
var ItemMeta = import_styled_components8.default.div`
  display: flex;
  gap: 12px;
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.tertiary || "var(--resume-color-tertiary, #666)"};
  margin-bottom: 8px;
`;
var Description = import_styled_components8.default.p`
  margin: 8px 0;
  line-height: 1.6;
`;
var Highlights = import_styled_components8.default.ul`
  margin: 8px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin: 4px 0;
    line-height: 1.5;
  }
`;

// node_modules/@jsonresume/core/src/primitives/InlineSeparatorPipe.jsx
init_esm();
var import_react8 = __toESM(require_react());
var import_styled_components9 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var StyledPipe = import_styled_components9.default.span`
  /* Thin space (U+2009) + pipe + thin space for balanced spacing */
  &::before {
    content: '\u2009|\u2009';
    opacity: 0.5;
    color: ${(props) => props.$color || "currentColor"};
    font-weight: normal;
  }

  /* Ensure consistent spacing across browsers */
  display: inline;
  white-space: pre;

  @media print {
    &::before {
      content: '\u2009|\u2009';
      opacity: 0.6;
    }
  }
`;

// node_modules/@jsonresume/core/src/primitives/KeylineDivider.tsx
init_esm();
var import_styled_components10 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var StyledHr = import_styled_components10.default.hr`
  border: none;
  border-top: 0.5pt solid
    ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-left: ${(props) => props.inset || "0"};
  margin-right: ${(props) => props.inset || "0"};
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    border-top-width: 0.3pt;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure border renders in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/primitives/DottedDivider.tsx
init_esm();
var import_styled_components11 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var StyledHr2 = import_styled_components11.default.hr`
  border: none;
  border-top: ${(props) => props.dotSize || "2px"} dotted
    ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  /* Override default border-top-width to use fixed spacing */
  ${(props) => props.spacing && `
    background-image: radial-gradient(
      circle,
      ${props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"} ${props.dotSize || "2px"},
      transparent ${props.dotSize || "2px"}
    );
    background-size: ${props.spacing} 1px;
    background-repeat: repeat-x;
    background-position: center;
    border: none;
    height: 1px;
  `}

  @media print {
    /* Ensure dots render in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Fixed dot rendering for PDF generation */
    border-top-width: ${(props) => props.dotSize || "2px"};
  }
`;

// node_modules/@jsonresume/core/src/primitives/AccentSidebarStripe.tsx
init_esm();
var import_styled_components12 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var StyledStripe = import_styled_components12.default.div`
  position: absolute;
  ${(props) => props.position === "right" ? "right: 0;" : "left: 0;"}
  top: ${(props) => props.top || "0"};
  width: ${(props) => props.width || "4mm"};
  max-width: 6mm; /* ATS-safe maximum */
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.color || props.theme?.colors?.accent || "var(--resume-color-accent, #2563eb)"};
  pointer-events: none; /* Prevent interaction */

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks inside stripe */
    page-break-inside: avoid;
  }

  @media screen and (max-width: 768px) {
    /* Reduce width on mobile */
    width: ${(props) => props.width ? `calc(${props.width} * 0.75)` : "3mm"};
  }
`;

// node_modules/@jsonresume/core/src/primitives/AccentTopRule.tsx
init_esm();
var import_styled_components13 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
var StyledRule = import_styled_components13.default.div`
  width: ${(props) => props.width || "30%"};
  max-width: 40%; /* Design constraint: max 40% */
  min-width: 25%; /* Design constraint: min 25% */
  height: ${(props) => props.thickness || "2.5pt"};
  background-color: ${(props) => props.color || props.theme?.colors?.accent || "var(--resume-color-accent, #2563eb)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-left: ${(props) => {
  if (props.align === "center") return "auto";
  if (props.align === "right") return "auto";
  return "0";
}};
  margin-right: ${(props) => {
  if (props.align === "center") return "auto";
  if (props.align === "right") return "0";
  return "auto";
}};

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure minimum thickness for print visibility */
    min-height: 2pt;
  }

  @media screen and (max-width: 768px) {
    /* Increase width slightly on mobile for better visibility */
    width: ${(props) => props.width ? `calc(${props.width} * 1.2)` : "36%"};
  }
`;

// node_modules/@jsonresume/core/src/primitives/RulesetStack.tsx
init_esm();
var import_styled_components14 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
var StyledStack = import_styled_components14.default.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
var StyledRule2 = import_styled_components14.default.div`
  width: 100%;
  height: ${(props) => props.thickness || "0.4pt"};
  background-color: ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-bottom: ${(props) => props.gapSize};

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    min-height: 0.3pt;
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/index.js
init_esm();

// node_modules/@jsonresume/core/src/providers/ThemeProvider.jsx
init_esm();
var import_react10 = __toESM(require_react());
var import_styled_components15 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
var ThemeContext = (0, import_react10.createContext)({
  theme: "professional",
  setTheme: /* @__PURE__ */ __name(() => {
  }, "setTheme")
});
var GlobalStyles = import_styled_components15.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--resume-font-sans);
    font-size: var(--resume-size-body);
    line-height: var(--resume-line-height-normal);
    color: var(--resume-color-primary);
    background: var(--resume-color-background);
  }
`;

// node_modules/@jsonresume/core/src/tokens/index.js
init_esm();

// node_modules/@jsonresume/core/src/helpers/calculations.js
init_esm();

// node_modules/@jsonresume/core/src/helpers/experience.js
init_esm();

// node_modules/@jsonresume/utils/src/metrics/index.js
init_esm();

// node_modules/@jsonresume/utils/src/metrics/experience.js
init_esm();

// node_modules/@jsonresume/utils/src/metrics/counts.js
init_esm();

// node_modules/@jsonresume/utils/src/metrics/education.js
init_esm();

// node_modules/@jsonresume/utils/src/metrics/workHistory.js
init_esm();

// node_modules/@jsonresume/utils/src/metrics/keyMetrics.js
init_esm();

// node_modules/@jsonresume/core/src/helpers/counts.js
init_esm();

// node_modules/@jsonresume/core/src/helpers/education.js
init_esm();

// node_modules/@jsonresume/core/src/helpers/workHistory.js
init_esm();

// node_modules/@jsonresume/core/src/helpers/keyMetrics.js
init_esm();

// node_modules/@jsonresume/core/src/layouts/index.jsx
init_esm();
var import_react17 = __toESM(require_react());

// node_modules/@jsonresume/core/src/layouts/GridLayout.jsx
init_esm();
var import_react11 = __toESM(require_react());
var import_styled_components16 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
var Grid = import_styled_components16.default.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns === 1 ? "1fr" : `repeat(${props.$columns}, 1fr)`};
  gap: ${(props) => props.$gap || "var(--resume-column-gap)"};
  margin-bottom: ${(props) => props.$spacing || "var(--resume-space-section)"};

  @media print {
    gap: ${(props) => props.$gap || "16px"};
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// node_modules/@jsonresume/core/src/layouts/SidebarLayout.jsx
init_esm();
var import_react12 = __toESM(require_react());
var import_styled_components17 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
var Container = import_styled_components17.default.div`
  display: grid;
  grid-template-columns: ${(props) => props.$sidebarPosition === "right" ? `1fr ${props.$sidebarWidth || "30%"}` : `${props.$sidebarWidth || "30%"} 1fr`};
  gap: ${(props) => props.$gap || "var(--resume-column-gap)"};

  @media print {
    gap: ${(props) => props.$gap || "16px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
var Sidebar = import_styled_components17.default.aside`
  grid-area: ${(props) => props.$position === "right" ? "1 / 2" : "1 / 1"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;
var Main = import_styled_components17.default.main`
  grid-area: ${(props) => props.$sidebarPosition === "right" ? "1 / 1" : "1 / 2"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;

// node_modules/@jsonresume/core/src/layouts/StackLayout.jsx
init_esm();
var import_react13 = __toESM(require_react());
var import_styled_components18 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
var Stack = import_styled_components18.default.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$spacing || "var(--resume-space-item)"};

  @media print {
    gap: ${(props) => props.$spacing || "12px"};
  }
`;

// node_modules/@jsonresume/core/src/layouts/CardLayout.jsx
init_esm();
var import_react14 = __toESM(require_react());
var import_styled_components19 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
var CardGrid = import_styled_components19.default.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.$minCardWidth || "250px"}, 1fr)
  );
  gap: ${(props) => props.$gap || "var(--resume-space-item)"};
  margin-bottom: ${(props) => props.$spacing || "var(--resume-space-section)"};

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${(props) => props.$gap || "12px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// node_modules/@jsonresume/core/src/layouts/FlexLayout.jsx
init_esm();
var import_react15 = __toESM(require_react());
var import_styled_components20 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
var Flex = import_styled_components20.default.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "stretch"};
  flex-wrap: ${(props) => props.$wrap ? "wrap" : "nowrap"};
  gap: ${(props) => props.$gap || "var(--resume-space-tight)"};

  @media print {
    gap: ${(props) => props.$gap || "8px"};
  }

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.$responsiveDirection || props.$direction === "row" ? "column" : props.$direction};
  }
`;

// node_modules/@jsonresume/core/src/layouts/TwoColumnMicroGrid.jsx
init_esm();
var import_react16 = __toESM(require_react());
var import_styled_components21 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
var StyledTwoColumnGrid = import_styled_components21.default.div`
  /* Use CSS columns for visual two-column layout */
  column-count: 2;
  column-gap: ${(props) => props.$columnGap || "16px"};

  /* Prevent column breaks inside items */
  & > * {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: ${(props) => props.$gap || "8px"};
    display: block;
  }

  /* Last item in each column shouldn't have bottom margin */
  & > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    column-count: 2;
    column-gap: 12pt;

    & > * {
      margin-bottom: 6pt;
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }

  /* Collapse to single column on small screens */
  @media (max-width: 768px) {
    column-count: 1;
    column-gap: 0;

    & > * {
      margin-bottom: ${(props) => props.$gap || "8px"};
    }
  }
`;

// node_modules/@jsonresume/core/src/skills/index.jsx
init_esm();
var import_react24 = __toESM(require_react());

// node_modules/@jsonresume/core/src/skills/SkillBar.jsx
init_esm();
var import_react18 = __toESM(require_react());
var import_styled_components22 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
var Container2 = import_styled_components22.default.div`
  margin-bottom: var(--resume-space-tight);
`;
var Label = import_styled_components22.default.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var BarContainer = import_styled_components22.default.div`
  width: 100%;
  height: ${(props) => props.$height || "8px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var BarFill = import_styled_components22.default.div`
  width: ${(props) => props.$level}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/skills/SkillPill.jsx
init_esm();
var import_react19 = __toESM(require_react());
var import_styled_components23 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
var Pill = import_styled_components23.default.span`
  display: inline-block;
  padding: ${(props) => props.$size === "small" ? "4px 8px" : "6px 12px"};
  margin: 4px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "#ffffff" : "var(--resume-color-primary)"};
  border: ${(props) => props.$variant === "outlined" ? "1px solid var(--resume-color-border)" : "none"};
  border-radius: ${(props) => props.$rounded ? "999px" : "var(--resume-radius-sm)"};
  font-size: ${(props) => props.$size === "small" ? "var(--resume-size-small)" : "var(--resume-size-body)"};
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 2px;
  }
`;

// node_modules/@jsonresume/core/src/skills/SkillRating.jsx
init_esm();
var import_react20 = __toESM(require_react());
var import_styled_components24 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
var Container3 = import_styled_components24.default.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);
`;
var SkillName = import_styled_components24.default.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var RatingContainer = import_styled_components24.default.div`
  display: flex;
  gap: 4px;
`;
var Dot = import_styled_components24.default.span`
  width: ${(props) => props.$size || "10px"};
  height: ${(props) => props.$size || "10px"};
  border-radius: 50%;
  background-color: ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/skills/SkillGroup.jsx
init_esm();
var import_react21 = __toESM(require_react());
var import_styled_components25 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
var Container4 = import_styled_components25.default.div`
  margin-bottom: var(--resume-space-item);
`;
var Category = import_styled_components25.default.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
`;
var Skills = import_styled_components25.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
var Skill = import_styled_components25.default.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &:not(:last-child)::after {
    content: '${(props) => props.$separator || "•"}';
    margin-left: 6px;
    color: var(--resume-color-border);
  }
`;

// node_modules/@jsonresume/core/src/skills/SkillCloud.jsx
init_esm();
var import_react22 = __toESM(require_react());
var import_styled_components26 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime());
var Container5 = import_styled_components26.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
var SkillTag = import_styled_components26.default.span`
  display: inline-block;
  padding: 4px 12px;
  font-size: ${(props) => {
  if (props.$weight >= 80) return "var(--resume-size-subheading)";
  if (props.$weight >= 50) return "var(--resume-size-body)";
  return "var(--resume-size-small)";
}};
  font-weight: ${(props) => props.$weight >= 70 ? "var(--resume-weight-semibold)" : "var(--resume-weight-normal)"};
  color: var(--resume-color-primary);
  background-color: ${(props) => `color-mix(in srgb, var(--resume-color-accent) ${props.$weight}%, transparent)`};
  border-radius: var(--resume-radius-sm);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/skills/SkillCategory.jsx
init_esm();
var import_react23 = __toESM(require_react());
var import_styled_components27 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime26 = __toESM(require_jsx_dev_runtime());
var Container6 = import_styled_components27.default.div`
  margin-bottom: var(--resume-space-item);
`;
var CategoryTitle = import_styled_components27.default.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
  border-bottom: 1px solid var(--resume-color-border);
  padding-bottom: 4px;
`;
var SkillList = import_styled_components27.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
var SkillItem = import_styled_components27.default.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var SkillName2 = import_styled_components27.default.span`
  flex: 1;
`;
var SkillLevel = import_styled_components27.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;

// node_modules/@jsonresume/core/src/timeline/index.jsx
init_esm();
var import_react27 = __toESM(require_react());

// node_modules/@jsonresume/core/src/timeline/TimelineSection.jsx
init_esm();
var import_react25 = __toESM(require_react());
var import_styled_components28 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime27 = __toESM(require_jsx_dev_runtime());
var Container7 = import_styled_components28.default.div`
  position: relative;
  margin-bottom: var(--resume-space-section);

  @media print {
    page-break-inside: avoid;
  }
`;

// node_modules/@jsonresume/core/src/timeline/TimelineItem.jsx
init_esm();
var import_react26 = __toESM(require_react());
var import_styled_components29 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime28 = __toESM(require_jsx_dev_runtime());
var Item = import_styled_components29.default.div`
  position: relative;
  padding-left: ${(props) => props.$showLine ? "32px" : "0"};
  margin-bottom: var(--resume-space-item);

  ${(props) => props.$showLine && `
    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: -16px;
      width: 2px;
      background-color: var(--resume-color-border);
    }

    &:last-child::before {
      display: none;
    }
  `}

  @media print {
    break-inside: avoid;
  }
`;
var Marker = import_styled_components29.default.div`
  position: absolute;
  left: 0;
  top: 6px;
  width: ${(props) => props.$size || "16px"};
  height: ${(props) => props.$size || "16px"};
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  border: 2px solid var(--resume-color-background);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Content = import_styled_components29.default.div`
  display: flex;
  flex-direction: column;
`;
var Header = import_styled_components29.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
  flex-wrap: wrap;
`;
var Title = import_styled_components29.default.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Meta = import_styled_components29.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Description2 = import_styled_components29.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// node_modules/@jsonresume/core/src/timeline/TimelineRuleMinimal.tsx
init_esm();
var import_styled_components30 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime29 = __toESM(require_jsx_dev_runtime());
var Container8 = import_styled_components30.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-item, 12pt);

  @media print {
    break-inside: avoid;
  }
`;
var Rule = import_styled_components30.default.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: ${(props) => props.$lineColor || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Item2 = import_styled_components30.default.div`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-left: 20px;
`;
var Tick = import_styled_components30.default.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => props.$width || "8px"};
  height: ${(props) => {
  const height = props.$height || "2pt";
  const value = parseFloat(height);
  const unit = height.replace(/[\d.]/g, "");
  return value < 2 && unit === "pt" ? "2pt" : height;
}};
  background-color: ${(props) => props.$color || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    min-height: 2pt; /* Ensure visibility in print */
  }
`;
var Date2 = import_styled_components30.default.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  font-weight: var(--resume-weight-normal, 400);
  white-space: nowrap;
  flex-shrink: 0;
`;
var Content2 = import_styled_components30.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;
var Label2 = import_styled_components30.default.span`
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  font-weight: var(--resume-weight-medium, 500);
`;
var Meta2 = import_styled_components30.default.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-tertiary, #999);
`;

// node_modules/@jsonresume/core/src/timeline/TimelineInline.tsx
init_esm();
var import_styled_components31 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime30 = __toESM(require_jsx_dev_runtime());
var InlineContainer = import_styled_components31.default.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  white-space: nowrap;
  font-variant-numeric: tabular-nums; /* Consistent number width */

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var DateText = import_styled_components31.default.span`
  font-weight: var(--resume-weight-normal, 400);
`;
var Separator2 = import_styled_components31.default.span`
  /* En dash with narrow no-break spaces for proper typography */
  margin: 0;
  padding: 0;
`;

// node_modules/@jsonresume/core/src/profile/index.jsx
init_esm();
var import_react32 = __toESM(require_react());

// node_modules/@jsonresume/core/src/profile/Avatar.jsx
init_esm();
var import_react28 = __toESM(require_react());
var import_styled_components32 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime31 = __toESM(require_jsx_dev_runtime());
var Image = import_styled_components32.default.img`
  width: ${(props) => props.$size || "80px"};
  height: ${(props) => props.$size || "80px"};
  border-radius: ${(props) => props.$rounded ? "50%" : "var(--resume-radius-md)"};
  object-fit: cover;
  border: ${(props) => props.$border ? `2px solid var(--resume-color-border)` : "none"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Placeholder = import_styled_components32.default.div`
  width: ${(props) => props.$size || "80px"};
  height: ${(props) => props.$size || "80px"};
  border-radius: ${(props) => props.$rounded ? "50%" : "var(--resume-radius-md)"};
  background-color: var(--resume-color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${(props) => props.$size || "80px"} / 2);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-semibold);
`;

// node_modules/@jsonresume/core/src/profile/ProfileCard.jsx
init_esm();
var import_react29 = __toESM(require_react());
var import_styled_components33 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime32 = __toESM(require_jsx_dev_runtime());
var Card = import_styled_components33.default.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  align-items: ${(props) => props.$direction === "row" ? "center" : "flex-start"};
  gap: var(--resume-space-item);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-section);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Info = import_styled_components33.default.div`
  flex: 1;
`;
var Name = import_styled_components33.default.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title2 = import_styled_components33.default.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-tight) 0;
`;
var Summary = import_styled_components33.default.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;

// node_modules/@jsonresume/core/src/profile/ContactGrid.jsx
init_esm();
var import_react30 = __toESM(require_react());
var import_styled_components34 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime33 = __toESM(require_jsx_dev_runtime());
var Grid2 = import_styled_components34.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
var Item3 = import_styled_components34.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var Icon2 = import_styled_components34.default.span`
  color: var(--resume-color-accent);
`;
var Link2 = import_styled_components34.default.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent);
  }

  @media print {
    color: var(--resume-color-secondary);
  }
`;

// node_modules/@jsonresume/core/src/profile/SocialLinks.jsx
init_esm();
var import_react31 = __toESM(require_react());
var import_styled_components35 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime34 = __toESM(require_jsx_dev_runtime());
var Container9 = import_styled_components35.default.div`
  display: flex;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
`;
var Link3 = import_styled_components35.default.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  text-decoration: none;
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--resume-color-accent);
    color: #ffffff;
    border-color: var(--resume-color-accent);
  }

  @media print {
    border: 1px solid var(--resume-color-border);
    color: var(--resume-color-primary);
  }
`;
var Icon3 = import_styled_components35.default.span`
  display: inline-flex;
`;

// node_modules/@jsonresume/core/src/typography/index.jsx
init_esm();
var import_react39 = __toESM(require_react());

// node_modules/@jsonresume/core/src/typography/Heading.jsx
init_esm();
var import_react33 = __toESM(require_react());
var import_styled_components36 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime35 = __toESM(require_jsx_dev_runtime());
var StyledHeading = import_styled_components36.default.h1`
  font-size: ${(props) => {
  const sizes = {
    1: "var(--resume-size-name)",
    2: "var(--resume-size-heading)",
    3: "var(--resume-size-subheading)",
    4: "var(--resume-size-body)"
  };
  return sizes[props.$level] || sizes[2];
}};
  font-weight: ${(props) => props.$weight || "var(--resume-weight-semibold)"};
  color: ${(props) => props.$color || "var(--resume-color-primary)"};
  margin: 0 0 ${(props) => props.$spacing || "var(--resume-space-tight)"} 0;
  line-height: var(--resume-line-height-tight);
`;

// node_modules/@jsonresume/core/src/typography/Text.jsx
init_esm();
var import_react34 = __toESM(require_react());
var import_styled_components37 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime36 = __toESM(require_jsx_dev_runtime());
var StyledText = import_styled_components37.default.p`
  font-size: ${(props) => props.$size || "var(--resume-size-body)"};
  font-weight: ${(props) => props.$weight || "var(--resume-weight-normal)"};
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: ${(props) => props.$lineHeight || "var(--resume-line-height-normal)"};
  margin: 0 0 ${(props) => props.$spacing || "0"} 0;
`;

// node_modules/@jsonresume/core/src/typography/Label.jsx
init_esm();
var import_react35 = __toESM(require_react());
var import_styled_components38 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime37 = __toESM(require_jsx_dev_runtime());
var StyledLabel = import_styled_components38.default.span`
  display: inline-block;
  font-size: var(--resume-size-small);
  font-weight: ${(props) => props.$weight || "var(--resume-weight-medium)"};
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  text-transform: ${(props) => props.$uppercase ? "uppercase" : "none"};
  letter-spacing: ${(props) => props.$uppercase ? "0.05em" : "normal"};
`;

// node_modules/@jsonresume/core/src/typography/SectionIntroParagraph.jsx
init_esm();
var import_react36 = __toESM(require_react());
var import_styled_components39 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime38 = __toESM(require_jsx_dev_runtime());
var StyledIntroParagraph = import_styled_components39.default.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-item) 0;
  max-width: ${(props) => props.$maxWidth || "100%"};

  /* Softer appearance for intro text */
  opacity: 0.95;

  /* Print optimization - maintain readability */
  @media print {
    line-height: var(--resume-line-height-normal);
    opacity: 1;
    page-break-inside: avoid;
  }
`;

// node_modules/@jsonresume/core/src/typography/QuoteStripe.jsx
init_esm();
var import_react37 = __toESM(require_react());
var import_styled_components40 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime39 = __toESM(require_jsx_dev_runtime());
var StyledQuoteStripe = import_styled_components40.default.blockquote`
  margin: 0 0 var(--resume-space-item) 0;
  padding: 2px 0 2px ${(props) => props.$paddingLeft || "16px"};
  border-left: ${(props) => props.$borderWidth || "3px"} solid
    ${(props) => props.$accentColor || "var(--resume-color-accent)"};

  font-size: var(--resume-size-body);
  font-style: ${(props) => props.$fontStyle || "italic"};
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-normal);

  /* Prevent quote clipping with subtle padding */
  padding-right: 2px;

  /* Single-line constraint */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Print optimization */
  @media print {
    page-break-inside: avoid;
    color: #000;
    border-left-color: ${(props) => props.$accentColor || "#000"};
  }
`;

// node_modules/@jsonresume/core/src/typography/HyphenationSafeParagraph.jsx
init_esm();
var import_react38 = __toESM(require_react());
var import_styled_components41 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime40 = __toESM(require_jsx_dev_runtime());
var StyledHyphenatedParagraph = import_styled_components41.default.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-normal);
  text-align: ${(props) => props.$textAlign || "left"};
  margin: 0 0 var(--resume-space-tight) 0;

  /* Enable hyphenation for better text flow */
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;

  /* Prevent orphans and widows */
  orphans: 2;
  widows: 2;

  /* Balanced text wrapping */
  text-wrap: balance;

  /* Optional line clamping */
  ${(props) => props.$maxLines && `
    display: -webkit-box;
    -webkit-line-clamp: ${props.$maxLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Print optimization - disable hyphenation for cleaner output */
  @media print {
    hyphens: none;
    -webkit-hyphens: none;
    page-break-inside: avoid;
    text-wrap: pretty;
  }
`;

// node_modules/@jsonresume/core/src/data/index.jsx
init_esm();
var import_react47 = __toESM(require_react());

// node_modules/@jsonresume/core/src/data/ProgressCircle.jsx
init_esm();
var import_react40 = __toESM(require_react());
var import_styled_components42 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime41 = __toESM(require_jsx_dev_runtime());
var Container10 = import_styled_components42.default.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
var Circle = import_styled_components42.default.svg`
  transform: rotate(-90deg);
`;
var Label4 = import_styled_components42.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-medium);
`;

// node_modules/@jsonresume/core/src/data/StatCard.jsx
init_esm();
var import_react41 = __toESM(require_react());
var import_styled_components43 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime42 = __toESM(require_jsx_dev_runtime());
var Card2 = import_styled_components43.default.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  text-align: ${(props) => props.$align || "left"};

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Value = import_styled_components43.default.div`
  font-size: ${(props) => props.$size || "var(--resume-size-name)"};
  font-weight: var(--resume-weight-bold);
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  line-height: 1;
  margin-bottom: 4px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Label5 = import_styled_components43.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var Description3 = import_styled_components43.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-top: 4px;
`;

// node_modules/@jsonresume/core/src/data/MetricBar.jsx
init_esm();
var import_react42 = __toESM(require_react());
var import_styled_components44 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime43 = __toESM(require_jsx_dev_runtime());
var Container11 = import_styled_components44.default.div`
  margin-bottom: var(--resume-space-tight);
`;
var Header2 = import_styled_components44.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
var Label6 = import_styled_components44.default.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
`;
var Value2 = import_styled_components44.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-semibold);
`;
var Bar = import_styled_components44.default.div`
  width: 100%;
  height: ${(props) => props.$height || "24px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;
  position: relative;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Fill = import_styled_components44.default.div`
  width: ${(props) => props.$percentage}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var InnerLabel = import_styled_components44.default.span`
  font-size: var(--resume-size-small);
  color: #ffffff;
  font-weight: var(--resume-weight-medium);
  white-space: nowrap;
`;

// node_modules/@jsonresume/core/src/data/MetricInline.jsx
init_esm();
var import_react43 = __toESM(require_react());
var import_styled_components45 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime44 = __toESM(require_jsx_dev_runtime());
var StyledMetric = import_styled_components45.default.strong`
  font-weight: ${(props) => {
  if (props.$size === "sm") return "var(--resume-weight-semibold, 600)";
  if (props.$size === "lg") return "var(--resume-weight-extrabold, 800)";
  return "var(--resume-weight-bold, 700)";
}};
  font-size: ${(props) => {
  if (props.$size === "sm") return "0.95em";
  if (props.$size === "lg") return "1.1em";
  return "1em";
}};
  color: inherit;
  white-space: nowrap;

  @media print {
    font-weight: ${(props) => {
  if (props.$size === "sm") return "600";
  if (props.$size === "lg") return "800";
  return "700";
}};
    color: inherit;
  }
`;

// node_modules/@jsonresume/core/src/data/MetricBullet.jsx
init_esm();
var import_react44 = __toESM(require_react());
var import_styled_components46 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime45 = __toESM(require_jsx_dev_runtime());
var BulletContainer = import_styled_components46.default.li`
  display: flex;
  align-items: baseline;
  margin-bottom: ${(props) => props.$spacing === "tight" ? "4px" : "8px"};
  line-height: 1.5;
  list-style: none;

  @media print {
    page-break-inside: avoid;
  }
`;
var Metric = import_styled_components46.default.span`
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #000);
  min-width: ${(props) => props.$align === "right" ? "auto" : "60px"};
  max-width: ${(props) => props.$align === "right" ? "80px" : "auto"};
  margin-right: ${(props) => props.$align === "right" ? "12px" : "0"};
  margin-left: ${(props) => props.$align === "right" ? "0" : "12px"};
  text-align: ${(props) => props.$align === "right" ? "right" : "left"};
  flex-shrink: 0;
  white-space: nowrap;

  ${(props) => props.$align === "right" ? `
    order: -1;
  ` : ""}

  @media print {
    font-weight: 700;
    color: #000;
  }
`;
var Content3 = import_styled_components46.default.span`
  flex: 1;
  color: var(--resume-color-primary, #000);
`;
var Bullet = import_styled_components46.default.span`
  margin-right: 8px;
  color: var(--resume-color-accent, #0066cc);
  font-weight: var(--resume-weight-bold, 700);

  @media print {
    color: #333;
  }
`;
var ListContainer = import_styled_components46.default.ul`
  margin: 8px 0;
  padding-left: 0;
  list-style: none;
`;

// node_modules/@jsonresume/core/src/data/KPIChipLine.jsx
init_esm();
var import_react45 = __toESM(require_react());
var import_styled_components47 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime46 = __toESM(require_jsx_dev_runtime());
var ChipContainer = import_styled_components47.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$gap || "8px"};
  align-items: center;
  margin: ${(props) => props.$margin || "8px 0"};

  @media print {
    gap: 6px;
  }
`;
var Chip = import_styled_components47.default.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => {
  if (props.$size === "xs") return "2px 8px";
  if (props.$size === "md") return "4px 12px";
  return "3px 10px";
}};
  border-radius: ${(props) => props.theme?.radius?.full || "var(--resume-radius-full, 999px)"};
  border: 1px solid
    ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #ddd)"};
  background: transparent;
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  if (props.$size === "md") return "10pt";
  return "9pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weightMedium || "var(--resume-weight-medium, 500)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  white-space: nowrap;
  line-height: 1.2;

  @media print {
    border: 1px solid #ccc;
    background: transparent;
    color: #000;
    padding: ${(props) => {
  if (props.$size === "xs") return "2px 6px";
  if (props.$size === "md") return "3px 10px";
  return "2px 8px";
}};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Divider = import_styled_components47.default.span`
  color: ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #ddd)"};
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  if (props.$size === "md") return "10pt";
  return "9pt";
}};
  user-select: none;

  @media print {
    color: #ccc;
  }
`;

// node_modules/@jsonresume/core/src/data/KeyValueInline.jsx
init_esm();
var import_react46 = __toESM(require_react());
var import_styled_components48 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime47 = __toESM(require_jsx_dev_runtime());
var Container12 = import_styled_components48.default.span`
  display: inline;
  font-size: ${(props) => {
  if (props.$size === "xs") return "9pt";
  if (props.$size === "md") return "11pt";
  return "10pt";
}};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  line-height: 1.5;

  @media print {
    color: #333;
  }
`;
var KeyValuePair = import_styled_components48.default.span`
  display: inline;
  white-space: normal;
`;
var Key = import_styled_components48.default.span`
  font-weight: ${(props) => props.theme?.typography?.weightMedium || "var(--resume-weight-medium, 500)"};
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  @media print {
    font-weight: 500;
    color: #000;
  }
`;
var Colon = import_styled_components48.default.span`
  /* Prevent wrap between key and colon */
  white-space: nowrap;

  &::after {
    content: ':';
    margin-right: 0.25em;
  }
`;
var Value3 = import_styled_components48.default.span`
  /* Prevent wrap immediately after colon */
  display: inline-block;
  color: inherit;
`;
var Separator3 = import_styled_components48.default.span`
  &::before {
    content: ', ';
    white-space: pre;
  }
`;

// node_modules/@jsonresume/core/src/utils/index.jsx
init_esm();
var import_react52 = __toESM(require_react());

// node_modules/@jsonresume/core/src/utils/Divider.jsx
init_esm();
var import_react48 = __toESM(require_react());
var import_styled_components49 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime48 = __toESM(require_jsx_dev_runtime());
var StyledDivider = import_styled_components49.default.hr`
  width: 100%;
  height: ${(props) => props.$thickness || "1px"};
  background-color: ${(props) => props.$color || "var(--resume-color-border)"};
  border: none;
  margin: ${(props) => props.$spacing || "var(--resume-space-item)"} 0;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/utils/Spacer.jsx
init_esm();
var import_react49 = __toESM(require_react());
var import_styled_components50 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime49 = __toESM(require_jsx_dev_runtime());
var StyledSpacer = import_styled_components50.default.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "var(--resume-space-item)"};
  flex-shrink: 0;
`;

// node_modules/@jsonresume/core/src/utils/Flex.jsx
init_esm();
var import_react50 = __toESM(require_react());

// node_modules/@jsonresume/core/src/utils/Grid.jsx
init_esm();
var import_react51 = __toESM(require_react());

// node_modules/@jsonresume/core/src/experience/index.jsx
init_esm();
var import_react57 = __toESM(require_react());

// node_modules/@jsonresume/core/src/experience/ExperienceCard.jsx
init_esm();
var import_react53 = __toESM(require_react());
var import_styled_components51 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime50 = __toESM(require_jsx_dev_runtime());
var Card3 = import_styled_components51.default.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-item);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Header3 = import_styled_components51.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--resume-space-tight);
  flex-wrap: wrap;
  gap: 8px;
`;
var Title3 = import_styled_components51.default.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Company = import_styled_components51.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;
var Meta3 = import_styled_components51.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: var(--resume-space-tight);
`;
var Summary2 = import_styled_components51.default.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;

// node_modules/@jsonresume/core/src/experience/ExperienceTimeline.jsx
init_esm();
var import_react54 = __toESM(require_react());
var import_jsx_dev_runtime51 = __toESM(require_jsx_dev_runtime());

// node_modules/@jsonresume/core/src/experience/ExperienceGrid.jsx
init_esm();
var import_react55 = __toESM(require_react());
var import_styled_components52 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime52 = __toESM(require_jsx_dev_runtime());
var Grid3 = import_styled_components52.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--resume-space-item);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
var Item4 = import_styled_components52.default.div`
  padding: var(--resume-space-item);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);

  @media print {
    break-inside: avoid;
  }
`;
var Title4 = import_styled_components52.default.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Company2 = import_styled_components52.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  margin-bottom: 4px;
`;
var Date3 = import_styled_components52.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;

// node_modules/@jsonresume/core/src/experience/ExperienceCompact.jsx
init_esm();
var import_react56 = __toESM(require_react());
var import_styled_components53 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime53 = __toESM(require_jsx_dev_runtime());
var List = import_styled_components53.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
var Item5 = import_styled_components53.default.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  gap: var(--resume-space-tight);

  &:last-child {
    border-bottom: none;
  }

  @media print {
    break-inside: avoid;
  }
`;
var Main2 = import_styled_components53.default.div`
  flex: 1;
`;
var Title5 = import_styled_components53.default.span`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Company3 = import_styled_components53.default.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &::before {
    content: ' at ';
  }
`;
var Date4 = import_styled_components53.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  white-space: nowrap;
`;

// node_modules/@jsonresume/core/src/header/index.jsx
init_esm();
var import_react69 = __toESM(require_react());

// node_modules/@jsonresume/core/src/header/HeaderCentered.jsx
init_esm();
var import_react58 = __toESM(require_react());
var import_styled_components54 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime54 = __toESM(require_jsx_dev_runtime());
var Header4 = import_styled_components54.default.header`
  text-align: center;
  margin-bottom: var(--resume-space-section);

  @media print {
    break-after: avoid;
  }
`;
var Name2 = import_styled_components54.default.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title6 = import_styled_components54.default.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-item) 0;
`;
var Contacts = import_styled_components54.default.div`
  display: flex;
  justify-content: center;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;

// node_modules/@jsonresume/core/src/header/HeaderSplit.jsx
init_esm();
var import_react59 = __toESM(require_react());
var import_styled_components55 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime55 = __toESM(require_jsx_dev_runtime());
var Header5 = import_styled_components55.default.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
var Left = import_styled_components55.default.div`
  flex: 1;
`;
var Name3 = import_styled_components55.default.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title7 = import_styled_components55.default.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0;
`;
var Right = import_styled_components55.default.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

// node_modules/@jsonresume/core/src/header/HeaderMinimal.jsx
init_esm();
var import_react60 = __toESM(require_react());
var import_styled_components56 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime56 = __toESM(require_jsx_dev_runtime());
var Header6 = import_styled_components56.default.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: var(--resume-space-item);
  border-bottom: 2px solid var(--resume-color-border);
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    border-bottom: 2px solid var(--resume-color-border);
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
var Name4 = import_styled_components56.default.h1`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Contact = import_styled_components56.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;

// node_modules/@jsonresume/core/src/header/CornerInitials.jsx
init_esm();
var import_react61 = __toESM(require_react());
var import_styled_components57 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime57 = __toESM(require_jsx_dev_runtime());
var Container13 = import_styled_components57.default.div`
  position: ${(props) => props.$position === "absolute" ? "absolute" : "relative"};
  ${(props) => props.$corner === "top-left" && "top: 0; left: 0;"}
  ${(props) => props.$corner === "top-right" && "top: 0; right: 0;"}
  ${(props) => props.$corner === "bottom-left" && "bottom: 0; left: 0;"}
  ${(props) => props.$corner === "bottom-right" && "bottom: 0; right: 0;"}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size || "48px"};
  height: ${(props) => props.$size || "48px"};

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Initials = import_styled_components57.default.div`
  font-family: ${(props) => props.$serif ? 'Georgia, "Times New Roman", serif' : "inherit"};
  font-size: ${(props) => props.$fontSize || "calc(var(--resume-size-heading) * 0.8)"};
  font-weight: ${(props) => props.$outline ? "var(--resume-weight-normal)" : "var(--resume-weight-bold)"};
  color: ${(props) => props.$color || "var(--resume-color-primary)"};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${(props) => props.$outline ? "1px" : "0"};

  ${(props) => props.$outline && `
    -webkit-text-stroke: 1px ${props.$color || "var(--resume-color-primary)"};
    -webkit-text-fill-color: transparent;
    text-stroke: 1px ${props.$color || "var(--resume-color-primary)"};
    text-fill-color: transparent;
  `}

  ${(props) => props.$bordered && `
    border: 2px solid ${props.$color || "var(--resume-color-primary)"};
    border-radius: ${props.$rounded ? "50%" : "var(--resume-radius-sm)"};
    padding: ${props.$padding || "8px"};
    width: ${props.$size || "48px"};
    height: ${props.$size || "48px"};
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media print {
    ${(props) => props.$outline && `
      color: ${props.$color || "var(--resume-color-primary)"};
      -webkit-text-stroke: none;
      -webkit-text-fill-color: ${props.$color || "var(--resume-color-primary)"};
      font-weight: var(--resume-weight-normal);
    `}
  }
`;

// node_modules/@jsonresume/core/src/header/Footer.jsx
init_esm();
var import_react62 = __toESM(require_react());
var import_styled_components58 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime58 = __toESM(require_jsx_dev_runtime());
var StyledFooter = import_styled_components58.default.footer`
  margin-top: var(--resume-space-section);
  padding-top: var(--resume-space-item);
  border-top: 1px solid var(--resume-color-border);
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "center"};

  @media print {
    border-top: 1px solid var(--resume-color-border);
    position: running(footer);
  }
`;
var PageNumber = import_styled_components58.default.span`
  @media print {
    &::after {
      content: counter(page);
    }
  }
`;

// node_modules/@jsonresume/core/src/header/PageBreak.jsx
init_esm();
var import_react63 = __toESM(require_react());
var import_styled_components59 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime59 = __toESM(require_jsx_dev_runtime());
var Break = import_styled_components59.default.div`
  @media print {
    page-break-before: ${(props) => props.$before ? "always" : "auto"};
    page-break-after: ${(props) => props.$after ? "always" : "auto"};
    break-before: ${(props) => props.$before ? "page" : "auto"};
    break-after: ${(props) => props.$after ? "page" : "auto"};
  }

  @media screen {
    display: none;
  }
`;

// node_modules/@jsonresume/core/src/header/HeroNameBlock.jsx
init_esm();
var import_react64 = __toESM(require_react());
var import_styled_components60 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime60 = __toESM(require_jsx_dev_runtime());
var Container14 = import_styled_components60.default.header`
  text-align: center;
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
var Label7 = import_styled_components60.default.div`
  font-size: var(--resume-size-small, 10px);
  font-weight: var(--resume-weight-medium, 500);
  color: var(--resume-color-secondary, #4a4a4a);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--resume-space-tight, 8px);

  @media print {
    color: #4a4a4a; /* Ensure print visibility */
  }
`;
var Name5 = import_styled_components60.default.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  letter-spacing: -0.02em; /* Subtle negative tracking, avoid excessive spacing */
  margin: 0 auto;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
  max-width: fit-content;
  line-height: var(--resume-line-height-tight, 1.2);

  /* Ensure 4.5:1 contrast ratio */
  @media print {
    color: #000000;
    border-bottom-color: #999999;
  }
`;

// node_modules/@jsonresume/core/src/header/ContactRowLine.jsx
init_esm();
var import_react65 = __toESM(require_react());
var import_styled_components61 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime61 = __toESM(require_jsx_dev_runtime());
var Container15 = import_styled_components61.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: var(--resume-size-body, 11px);
  color: var(--resume-color-secondary, #4a4a4a);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Prevent wrapping to maintain single-line layout */
  flex-wrap: nowrap;

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast for print */
  }

  /* Handle overflow gracefully on very narrow screens */
  @media (max-width: 480px) {
    font-size: 10px;
    gap: 8px;
  }
`;
var ContactItem2 = import_styled_components61.default.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;
var ContactLink = import_styled_components61.default.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent, #2563eb);
    text-decoration: underline;
  }

  @media print {
    color: #333333;
    text-decoration: none;
  }
`;
var Separator4 = import_styled_components61.default.span`
  color: var(--resume-color-border, #e5e7eb);
  user-select: none;
  font-weight: var(--resume-weight-normal, 400);

  @media print {
    color: #999999;
  }
`;

// node_modules/@jsonresume/core/src/header/SectionRuleTitle.jsx
init_esm();
var import_react66 = __toESM(require_react());
var import_styled_components62 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime62 = __toESM(require_jsx_dev_runtime());
var Container16 = import_styled_components62.default.div`
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
var Title8 = import_styled_components62.default.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
var Rule2 = import_styled_components62.default.hr`
  width: ${(props) => props.$width || "100%"};
  height: 0;
  border: none;
  border-top: 0.5px solid
    ${(props) => props.$color || "var(--resume-color-border, #e5e7eb)"};
  margin: 0;

  /* Ensure visibility in print */
  @media print {
    border-top-width: 1px;
    border-top-color: ${(props) => props.$color || "#cccccc"};
  }
`;

// node_modules/@jsonresume/core/src/header/SectionFlagTitle.jsx
init_esm();
var import_react67 = __toESM(require_react());
var import_styled_components63 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime63 = __toESM(require_jsx_dev_runtime());
var Container17 = import_styled_components63.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
var Flag = import_styled_components63.default.div`
  width: ${(props) => props.$width || "4px"};
  height: 0.7em; /* Match x-height of text, not full line-height */
  background-color: ${(props) => props.$color || "var(--resume-color-accent, #2563eb)"};
  border-radius: 2px;
  flex-shrink: 0;

  /* Ensure visibility in print */
  @media print {
    background-color: ${(props) => props.$color || "#000000"};
  }
`;
var Title9 = import_styled_components63.default.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;

// node_modules/@jsonresume/core/src/header/NameStackElegant.jsx
init_esm();
var import_react68 = __toESM(require_react());
var import_styled_components64 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime64 = __toESM(require_jsx_dev_runtime());
var Container18 = import_styled_components64.default.header`
  text-align: ${(props) => props.$align || "center"};
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
var Name6 = import_styled_components64.default.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 4px 0;
  line-height: var(--resume-line-height-tight, 1.2);
  letter-spacing: -0.02em;

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
var Role = import_styled_components64.default.div`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-medium, 500); /* Avoid thin weights */
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-normal, 1.5);

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast */
  }
`;
var Tagline = import_styled_components64.default.div`
  font-size: var(--resume-size-body, 11px);
  font-weight: var(--resume-weight-normal, 400);
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0;
  line-height: var(--resume-line-height-relaxed, 1.75);
  max-width: 600px;
  margin-left: ${(props) => props.$align === "center" ? "auto" : "0"};
  margin-right: ${(props) => props.$align === "center" ? "auto" : props.$align === "right" ? "0" : "auto"};

  @media print {
    color: #4a4a4a;
  }
`;

// node_modules/@jsonresume/core/src/quotes/index.jsx
init_esm();
var import_react73 = __toESM(require_react());

// node_modules/@jsonresume/core/src/quotes/PullQuote.jsx
init_esm();
var import_react70 = __toESM(require_react());
var import_styled_components65 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime65 = __toESM(require_jsx_dev_runtime());
var Container19 = import_styled_components65.default.blockquote`
  margin: var(--resume-space-section) 0;
  padding: var(--resume-space-item);
  border-left: 4px solid var(--resume-color-accent);
  background-color: var(--resume-color-muted);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid var(--resume-color-accent);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var QuoteText = import_styled_components65.default.p`
  font-size: var(--resume-size-subheading);
  font-style: italic;
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-tight) 0;
`;
var Attribution = import_styled_components65.default.footer`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: right;
`;
var Author = import_styled_components65.default.cite`
  font-style: normal;
  font-weight: var(--resume-weight-medium);
`;
var Context = import_styled_components65.default.span`
  display: block;
  font-size: var(--resume-size-tiny);
  margin-top: 2px;
`;

// node_modules/@jsonresume/core/src/quotes/Testimonial.jsx
init_esm();
var import_react71 = __toESM(require_react());
var import_styled_components66 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime66 = __toESM(require_jsx_dev_runtime());
var Card4 = import_styled_components66.default.div`
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-tight);
  }
`;
var Header7 = import_styled_components66.default.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
`;
var Photo = import_styled_components66.default.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;
var AuthorInfo = import_styled_components66.default.div`
  flex: 1;
`;
var Author2 = import_styled_components66.default.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Position = import_styled_components66.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Quote = import_styled_components66.default.blockquote`
  margin: 0;
  font-size: var(--resume-size-body);
  font-style: italic;
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// node_modules/@jsonresume/core/src/quotes/BlockQuote.jsx
init_esm();
var import_react72 = __toESM(require_react());
var import_styled_components67 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime67 = __toESM(require_jsx_dev_runtime());
var Quote2 = import_styled_components67.default.blockquote`
  margin: var(--resume-space-item) 0;
  padding: var(--resume-space-tight) var(--resume-space-item);
  border-left: 3px solid var(--resume-color-border);
  font-style: italic;
  color: var(--resume-color-secondary);
  background-color: ${(props) => props.$highlight ? "var(--resume-color-muted)" : "transparent"};
  break-inside: avoid;

  @media print {
    border-left: 3px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Text2 = import_styled_components67.default.p`
  margin: 0;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
`;
var Cite = import_styled_components67.default.cite`
  display: block;
  margin-top: var(--resume-space-tight);
  font-size: var(--resume-size-small);
  font-style: normal;
  color: var(--resume-color-tertiary);
`;

// node_modules/@jsonresume/core/src/certifications/index.jsx
init_esm();
var import_react78 = __toESM(require_react());

// node_modules/@jsonresume/core/src/certifications/CertificationBadge.jsx
init_esm();
var import_react74 = __toESM(require_react());
var import_styled_components68 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime68 = __toESM(require_jsx_dev_runtime());
var Badge2 = import_styled_components68.default.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "white" : "var(--resume-color-primary)"};
  border: 1px solid
    ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  font-weight: var(--resume-weight-medium);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 6px 12px;
  }
`;
var Icon4 = import_styled_components68.default.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
var Text3 = import_styled_components68.default.span`
  white-space: nowrap;
`;
var Date5 = import_styled_components68.default.span`
  opacity: 0.8;
  font-size: var(--resume-size-tiny);
  font-weight: var(--resume-weight-normal);
`;

// node_modules/@jsonresume/core/src/certifications/CertificationRow.jsx
init_esm();
var import_react75 = __toESM(require_react());
var import_styled_components69 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime69 = __toESM(require_jsx_dev_runtime());
var Container20 = import_styled_components69.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Issuer = import_styled_components69.default.span`
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
`;
var Name7 = import_styled_components69.default.span`
  color: var(--resume-color-primary);
`;
var Credential = import_styled_components69.default.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  background-color: var(--resume-color-background);
  padding: 2px 6px;
  border-radius: var(--resume-radius-sm);
  border: 1px solid var(--resume-color-border);

  @media print {
    background-color: transparent;
    border: 1px solid var(--resume-color-border);
    padding: 1px 4px;
  }
`;
var Date6 = import_styled_components69.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  font-style: italic;
`;
var Link4 = import_styled_components69.default.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  font-size: var(--resume-size-small);

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;
var Separator5 = import_styled_components69.default.span`
  color: var(--resume-color-tertiary);

  &::before {
    content: '·';
  }
`;

// node_modules/@jsonresume/core/src/certifications/AwardCard.jsx
init_esm();
var import_react76 = __toESM(require_react());
var import_styled_components70 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime70 = __toESM(require_jsx_dev_runtime());
var Card5 = import_styled_components70.default.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header8 = import_styled_components70.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Title10 = import_styled_components70.default.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date7 = import_styled_components70.default.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Awarder = import_styled_components70.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: 8px;
`;
var Summary3 = import_styled_components70.default.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// node_modules/@jsonresume/core/src/certifications/HonorsList.jsx
init_esm();
var import_react77 = __toESM(require_react());
var import_styled_components71 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime71 = __toESM(require_jsx_dev_runtime());
var List2 = import_styled_components71.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
var Item6 = import_styled_components71.default.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Info2 = import_styled_components71.default.div`
  flex: 1;
`;
var Title11 = import_styled_components71.default.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 2px;
`;
var Awarder2 = import_styled_components71.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Date8 = import_styled_components71.default.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;

// node_modules/@jsonresume/core/src/languages/index.jsx
init_esm();
var import_react83 = __toESM(require_react());

// node_modules/@jsonresume/core/src/languages/LanguageBar.jsx
init_esm();
var import_react79 = __toESM(require_react());
var import_styled_components72 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime72 = __toESM(require_jsx_dev_runtime());
var Container21 = import_styled_components72.default.div`
  margin-bottom: var(--resume-space-tight);
`;
var Label8 = import_styled_components72.default.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var Language = import_styled_components72.default.span`
  font-weight: var(--resume-weight-medium);
`;
var Fluency = import_styled_components72.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var BarContainer2 = import_styled_components72.default.div`
  width: 100%;
  height: 10px;
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var BarFill2 = import_styled_components72.default.div`
  width: ${(props) => props.$level}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/languages/LanguageLevelBarLite.jsx
init_esm();
var import_react80 = __toESM(require_react());
var import_styled_components73 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime73 = __toESM(require_jsx_dev_runtime());
var Container22 = import_styled_components73.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    gap: 0.5em;
  }
`;
var Label9 = import_styled_components73.default.div`
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  flex: 1;
`;
var Language2 = import_styled_components73.default.span`
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Fluency2 = import_styled_components73.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var BarText = import_styled_components73.default.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  letter-spacing: 2px;
  white-space: nowrap;

  @media print {
    letter-spacing: 3px;
  }
`;

// node_modules/@jsonresume/core/src/languages/LanguageGrid.jsx
init_esm();
var import_react81 = __toESM(require_react());
var import_styled_components74 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime74 = __toESM(require_jsx_dev_runtime());
var Grid4 = import_styled_components74.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--resume-space-tight);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
  }
`;
var LanguageCard = import_styled_components74.default.div`
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Language3 = import_styled_components74.default.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
var Fluency3 = import_styled_components74.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Dots = import_styled_components74.default.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;
var Dot2 = import_styled_components74.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;

// node_modules/@jsonresume/core/src/languages/ProficiencyScale.jsx
init_esm();
var import_react82 = __toESM(require_react());
var import_styled_components75 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime75 = __toESM(require_jsx_dev_runtime());
var Container23 = import_styled_components75.default.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
var Label10 = import_styled_components75.default.span`
  min-width: 120px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: var(--resume-size-small);
  }
`;
var Scale = import_styled_components75.default.div`
  display: flex;
  gap: 4px;
  flex: 1;
`;
var Segment = import_styled_components75.default.div`
  flex: 1;
  height: ${(props) => props.$size || "12px"};
  background-color: ${(props) => props.$filled ? props.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-xs);
  transition: background-color 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(props) => props.$filled ? props.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
var LevelText = import_styled_components75.default.span`
  min-width: 80px;
  text-align: right;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);

  @media (max-width: 768px) {
    display: none;
  }
`;

// node_modules/@jsonresume/core/src/publications/index.jsx
init_esm();
var import_react88 = __toESM(require_react());

// node_modules/@jsonresume/core/src/publications/PublicationItem.jsx
init_esm();
var import_react84 = __toESM(require_react());
var import_styled_components76 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime76 = __toESM(require_jsx_dev_runtime());
var Container24 = import_styled_components76.default.div`
  padding: var(--resume-space-tight) 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header9 = import_styled_components76.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Title12 = import_styled_components76.default.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date9 = import_styled_components76.default.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Publisher = import_styled_components76.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-style: italic;
  margin-bottom: 8px;
`;
var Summary4 = import_styled_components76.default.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Link5 = import_styled_components76.default.a`
  display: inline-block;
  margin-top: 8px;
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// node_modules/@jsonresume/core/src/publications/PublicationEntryPlain.jsx
init_esm();
var import_react85 = __toESM(require_react());
var import_styled_components77 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime77 = __toESM(require_jsx_dev_runtime());
var Container25 = import_styled_components77.default.div`
  margin-bottom: var(--resume-space-tight);
  padding-left: 1.5em;
  text-indent: -1.5em;
  break-inside: avoid;
  line-height: var(--resume-line-height-relaxed);

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Text4 = import_styled_components77.default.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var Author3 = (0, import_styled_components77.default)(Text4)`
  font-weight: var(--resume-weight-medium);
`;
var Year = (0, import_styled_components77.default)(Text4)`
  color: var(--resume-color-secondary);
`;
var Title13 = (0, import_styled_components77.default)(Text4)`
  font-style: italic;
`;
var Venue = (0, import_styled_components77.default)(Text4)`
  color: var(--resume-color-secondary);
`;
var Separator6 = import_styled_components77.default.span`
  margin: 0 0.5em;
  color: var(--resume-color-tertiary);
`;
var Link6 = import_styled_components77.default.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  margin-left: 0.5em;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// node_modules/@jsonresume/core/src/publications/PortfolioGrid.jsx
init_esm();
var import_react86 = __toESM(require_react());
var import_styled_components78 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime78 = __toESM(require_jsx_dev_runtime());
var Grid5 = import_styled_components78.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--resume-space-item);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--resume-space-tight);
  }
`;
var Item7 = import_styled_components78.default.div`
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  overflow: hidden;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Thumbnail = import_styled_components78.default.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;

  @media print {
    height: 100px;
  }
`;
var Content4 = import_styled_components78.default.div`
  padding: var(--resume-space-tight);
`;
var Title14 = import_styled_components78.default.h3`
  margin: 0 0 4px 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Description4 = import_styled_components78.default.p`
  margin: 0 0 8px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Tags = import_styled_components78.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
var Tag = import_styled_components78.default.span`
  padding: 2px 8px;
  font-size: var(--resume-size-tiny);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;

// node_modules/@jsonresume/core/src/publications/ProjectCard.jsx
init_esm();
var import_react87 = __toESM(require_react());
var import_styled_components79 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime79 = __toESM(require_jsx_dev_runtime());
var Card6 = import_styled_components79.default.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header10 = import_styled_components79.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
var Title15 = import_styled_components79.default.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date10 = import_styled_components79.default.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Description5 = import_styled_components79.default.p`
  margin: 0 0 var(--resume-space-tight) 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Technologies = import_styled_components79.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--resume-space-tight);
`;
var Tech = import_styled_components79.default.span`
  padding: 4px 10px;
  font-size: var(--resume-size-small);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;
var Links = import_styled_components79.default.div`
  display: flex;
  gap: var(--resume-space-tight);
`;
var Link7 = import_styled_components79.default.a`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// node_modules/@jsonresume/core/src/tables/index.jsx
init_esm();
var import_react92 = __toESM(require_react());

// node_modules/@jsonresume/core/src/tables/SkillMatrix.jsx
init_esm();
var import_react89 = __toESM(require_react());
var import_styled_components80 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime80 = __toESM(require_jsx_dev_runtime());
var Table = import_styled_components80.default.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Thead = import_styled_components80.default.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Th = import_styled_components80.default.th`
  padding: 10px;
  text-align: left;
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody = import_styled_components80.default.tbody``;
var Tr = import_styled_components80.default.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Td = import_styled_components80.default.td`
  padding: 10px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Cell = import_styled_components80.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
var Indicator = import_styled_components80.default.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => {
  if (props.$level === "expert") return "var(--resume-color-accent)";
  if (props.$level === "advanced") return "var(--resume-color-success)";
  if (props.$level === "intermediate") return "var(--resume-color-warning)";
  return "var(--resume-color-border)";
}};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(props) => {
  if (props.$level === "expert") return "var(--resume-color-accent)";
  if (props.$level === "advanced") return "var(--resume-color-success)";
  if (props.$level === "intermediate")
    return "var(--resume-color-warning)";
  return "var(--resume-color-border)";
}};
  }
`;

// node_modules/@jsonresume/core/src/tables/ComparisonTable.jsx
init_esm();
var import_react90 = __toESM(require_react());
var import_styled_components81 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime81 = __toESM(require_jsx_dev_runtime());
var Table2 = import_styled_components81.default.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Thead2 = import_styled_components81.default.thead``;
var Th2 = import_styled_components81.default.th`
  padding: 12px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  background-color: var(--resume-color-muted);
  border: 1px solid var(--resume-color-border);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody2 = import_styled_components81.default.tbody``;
var Tr2 = import_styled_components81.default.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Td2 = import_styled_components81.default.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Label11 = import_styled_components81.default.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;

// node_modules/@jsonresume/core/src/tables/DataTable.jsx
init_esm();
var import_react91 = __toESM(require_react());
var import_styled_components82 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime82 = __toESM(require_jsx_dev_runtime());
var Table3 = import_styled_components82.default.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    display: block;
    overflow-x: auto;
  }
`;
var Thead3 = import_styled_components82.default.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Th3 = import_styled_components82.default.th`
  padding: 12px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);
  white-space: nowrap;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody3 = import_styled_components82.default.tbody``;
var Tr3 = import_styled_components82.default.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.$striped ? "var(--resume-color-background)" : "transparent"};
  }

  &:hover {
    background-color: var(--resume-color-muted);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:hover {
      background-color: transparent;
    }
  }
`;
var Td3 = import_styled_components82.default.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tfoot = import_styled_components82.default.tfoot`
  background-color: var(--resume-color-muted);
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/callouts/index.jsx
init_esm();
var import_react96 = __toESM(require_react());

// node_modules/@jsonresume/core/src/callouts/Callout.jsx
init_esm();
var import_react93 = __toESM(require_react());
var import_styled_components83 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime83 = __toESM(require_jsx_dev_runtime());
var Container26 = import_styled_components83.default.div`
  padding: var(--resume-space-item);
  margin: var(--resume-space-item) 0;
  background-color: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-bg, #d4edda)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-bg, #fff3cd)";
  if (props.$variant === "error")
    return "var(--resume-color-error-bg, #f8d7da)";
  return "var(--resume-color-muted)";
}};
  border-left: 4px solid
    ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #28a745)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #ffc107)";
  if (props.$variant === "error")
    return "var(--resume-color-error, #dc3545)";
  return "var(--resume-color-accent)";
}};
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid
      ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #28a745)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #ffc107)";
  if (props.$variant === "error")
    return "var(--resume-color-error, #dc3545)";
  return "var(--resume-color-accent)";
}};
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Title16 = import_styled_components83.default.div`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
var Content5 = import_styled_components83.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// node_modules/@jsonresume/core/src/callouts/InfoBox.jsx
init_esm();
var import_react94 = __toESM(require_react());
var import_styled_components84 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime84 = __toESM(require_jsx_dev_runtime());
var Box = import_styled_components84.default.div`
  display: flex;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-tight) 0;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Icon5 = import_styled_components84.default.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  color: white;
  font-size: 14px;
  font-weight: var(--resume-weight-bold);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(props) => props.$color || "var(--resume-color-accent)"};
  }
`;
var Content6 = import_styled_components84.default.div`
  flex: 1;
`;
var Title17 = import_styled_components84.default.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 4px;
`;
var Text5 = import_styled_components84.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// node_modules/@jsonresume/core/src/callouts/HighlightCard.jsx
init_esm();
var import_react95 = __toESM(require_react());
var import_styled_components85 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime85 = __toESM(require_jsx_dev_runtime());
var Card7 = import_styled_components85.default.div`
  padding: var(--resume-space-item);
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  color: white;
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-item) 0;
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(props) => props.$color || "var(--resume-color-accent)"};
    background-color: transparent;
    color: var(--resume-color-primary);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header11 = import_styled_components85.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
var Title18 = import_styled_components85.default.h3`
  margin: 0;
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: inherit;

  @media print {
    color: var(--resume-color-primary);
  }
`;
var Badge3 = import_styled_components85.default.div`
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    background-color: transparent;
    border: 1px solid currentColor;
  }
`;
var Content7 = import_styled_components85.default.div`
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);

  @media print {
    color: var(--resume-color-secondary);
  }
`;
var Footer2 = import_styled_components85.default.div`
  margin-top: var(--resume-space-tight);
  padding-top: var(--resume-space-tight);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: var(--resume-size-small);

  @media print {
    border-top: 1px solid var(--resume-color-border);
    color: var(--resume-color-tertiary);
  }
`;

// node_modules/@jsonresume/core/src/lists/index.jsx
init_esm();
var import_react108 = __toESM(require_react());

// node_modules/@jsonresume/core/src/lists/CheckList.jsx
init_esm();
var import_react97 = __toESM(require_react());
var import_styled_components86 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime86 = __toESM(require_jsx_dev_runtime());
var List3 = import_styled_components86.default.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
var Item8 = import_styled_components86.default.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Check = import_styled_components86.default.span`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  color: white;
  font-size: 12px;
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(props) => props.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
var Text6 = import_styled_components86.default.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  text-decoration: ${(props) => props.$checked && props.$strikethrough ? "line-through" : "none"};
  opacity: ${(props) => props.$checked && props.$strikethrough ? 0.7 : 1};
`;

// node_modules/@jsonresume/core/src/lists/IconList.jsx
init_esm();
var import_react98 = __toESM(require_react());
var import_styled_components87 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime87 = __toESM(require_jsx_dev_runtime());
var List4 = import_styled_components87.default.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
var Item9 = import_styled_components87.default.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var IconWrapper = import_styled_components87.default.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Text7 = import_styled_components87.default.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// node_modules/@jsonresume/core/src/lists/NumberedList.jsx
init_esm();
var import_react99 = __toESM(require_react());
var import_styled_components88 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime88 = __toESM(require_jsx_dev_runtime());
var List5 = import_styled_components88.default.ol`
  margin: var(--resume-space-tight) 0;
  padding-left: 28px;
  counter-reset: list-counter;
  list-style: none;
`;
var Item10 = import_styled_components88.default.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  counter-increment: list-counter;
  break-inside: avoid;

  &::before {
    content: counter(list-counter) '.';
    flex-shrink: 0;
    width: 24px;
    font-weight: var(--resume-weight-medium);
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
var Text8 = import_styled_components88.default.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// node_modules/@jsonresume/core/src/lists/BulletList.jsx
init_esm();
var import_react100 = __toESM(require_react());
var import_styled_components89 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime89 = __toESM(require_jsx_dev_runtime());
var List6 = import_styled_components89.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 24px;
  list-style: none;
`;
var Item11 = import_styled_components89.default.li`
  position: relative;
  padding: 4px 0 4px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(props) => props.$bullet || "•"}';
    position: absolute;
    left: 0;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-bold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// node_modules/@jsonresume/core/src/lists/CompactList.jsx
init_esm();
var import_react101 = __toESM(require_react());
var import_styled_components90 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime90 = __toESM(require_jsx_dev_runtime());
var List7 = import_styled_components90.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
var Item12 = import_styled_components90.default.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  break-inside: avoid;

  &:not(:last-child) {
    border-bottom: ${(props) => props.$divider ? "1px solid var(--resume-color-border)" : "none"};
    padding-bottom: ${(props) => props.$divider ? "6px" : "2px"};
    margin-bottom: ${(props) => props.$divider ? "6px" : "0"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    border-bottom: ${(props) => props.$divider ? "1px solid var(--resume-color-border)" : "none"};
  }
`;
var Bullet2 = import_styled_components90.default.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid ${(props) => props.$color || "var(--resume-color-accent)"};
  }
`;
var Text9 = import_styled_components90.default.span`
  flex: 1;
  line-height: 1.4;
`;

// node_modules/@jsonresume/core/src/lists/AchievementListTight.jsx
init_esm();
var import_react102 = __toESM(require_react());
var import_styled_components91 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime91 = __toESM(require_jsx_dev_runtime());
var List8 = import_styled_components91.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 20px;
  list-style: none;
`;
var Item13 = import_styled_components91.default.li`
  position: relative;
  padding: 2px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.4;
  break-inside: avoid;
  orphans: 2;
  widows: 2;
  max-height: 4.2em; /* Enforce 2-3 line max (1.4 line-height × 3 lines) */
  overflow: hidden;
  text-overflow: ellipsis;

  &::before {
    content: '${(props) => props.$bullet || "•"}';
    position: absolute;
    left: -16px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// node_modules/@jsonresume/core/src/lists/AchievementListSpacious.jsx
init_esm();
var import_react103 = __toESM(require_react());
var import_styled_components92 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime92 = __toESM(require_jsx_dev_runtime());
var List9 = import_styled_components92.default.ul`
  margin: var(--resume-space-comfortable) 0;
  padding-left: 24px;
  list-style: none;
`;
var Item14 = import_styled_components92.default.li`
  position: relative;
  padding: 6px 0; /* 6pt baseline grid */
  margin-bottom: 8px; /* 8pt baseline grid */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.6; /* 1.6 × 16px = 25.6px ≈ 26px (multiple of 6pt baseline) */
  break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '${(props) => props.$bullet || "•"}';
    position: absolute;
    left: -20px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    line-height: inherit;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// node_modules/@jsonresume/core/src/lists/HangingBulletList.jsx
init_esm();
var import_react104 = __toESM(require_react());
var import_styled_components93 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime93 = __toESM(require_jsx_dev_runtime());
var List10 = import_styled_components93.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
var Item15 = import_styled_components93.default.li`
  position: relative;
  padding: 4px 0 4px 20px; /* Left padding for bullet space */
  text-indent: -20px; /* Negative indent to hang bullet outside */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(props) => props.$bullet || "•"}';
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    display: inline-block;
    width: 20px;
    text-indent: 0; /* Reset indent for bullet */
  }

  /* Reset text-indent for child elements */
  > * {
    text-indent: 0;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// node_modules/@jsonresume/core/src/lists/ListDashCompact.jsx
init_esm();
var import_react105 = __toESM(require_react());
var import_styled_components94 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime94 = __toESM(require_jsx_dev_runtime());
var List11 = import_styled_components94.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
var Item16 = import_styled_components94.default.li`
  position: relative;
  padding: 2px 0 2px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.5;
  break-inside: avoid;

  &::before {
    content: '–'; /* En-dash (U+2013), not hyphen */
    position: absolute;
    left: 0;
    color: ${(props) => props.$color || "var(--resume-color-text)"};
    font-weight: var(--resume-weight-normal);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// node_modules/@jsonresume/core/src/lists/MiniDotLeaderList.jsx
init_esm();
var import_react106 = __toESM(require_react());
var import_styled_components95 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime95 = __toESM(require_jsx_dev_runtime());
var List12 = import_styled_components95.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
var Item17 = import_styled_components95.default.li`
  display: inline-flex;
  align-items: center;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  &:not(:last-child)::after {
    content: '·'; /* Midline dot (U+00B7) */
    margin-left: 8px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:not(:last-child)::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// node_modules/@jsonresume/core/src/lists/DefinitionKeyline.jsx
init_esm();
var import_react107 = __toESM(require_react());
var import_styled_components96 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime96 = __toESM(require_jsx_dev_runtime());
var List13 = import_styled_components96.default.dl`
  margin: var(--resume-space-tight) 0;
  display: grid;
  grid-template-columns: ${(props) => props.$layout === "inline" ? "auto 1fr" : "1fr"};
  gap: ${(props) => props.$layout === "inline" ? "8px 16px" : "4px"};
`;
var Term = import_styled_components96.default.dt`
  font-size: var(--resume-size-body);
  color: var(--resume-color-text);
  font-weight: var(--resume-weight-semibold);
  line-height: var(--resume-line-height-normal);

  ${(props) => props.$layout === "stacked" && `
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Description6 = import_styled_components96.default.dd`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  ${(props) => props.$layout === "inline" && `
    display: flex;
    align-items: baseline;
  `}

  ${(props) => props.$layout === "stacked" && `
    margin-left: 16px;
    &::before {
      content: '—'; /* Em-dash (U+2014) */
      margin-right: 8px;
      color: ${props.$color || "var(--resume-color-accent)"};
    }
  `}

  ${(props) => props.$layout === "inline" && `
    &::before {
      content: '—'; /* Em-dash (U+2014) */
      margin: 0 8px;
      color: ${props.$color || "var(--resume-color-accent)"};
      flex-shrink: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// node_modules/@jsonresume/core/src/dates/index.jsx
init_esm();
var import_react111 = __toESM(require_react());

// node_modules/@jsonresume/core/src/dates/DateBadge.jsx
init_esm();
var import_react109 = __toESM(require_react());
var import_styled_components97 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime97 = __toESM(require_jsx_dev_runtime());
var Badge4 = import_styled_components97.default.time`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "white" : "var(--resume-color-secondary)"};
  border: 1px solid
    ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 3px 10px;
  }
`;
var Icon6 = import_styled_components97.default.span`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

// node_modules/@jsonresume/core/src/dates/RelativeDate.jsx
init_esm();
var import_react110 = __toESM(require_react());
var import_styled_components98 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime98 = __toESM(require_jsx_dev_runtime());
var Container27 = import_styled_components98.default.time`
  font-size: ${(props) => props.$size || "var(--resume-size-small)"};
  color: ${(props) => props.$color || "var(--resume-color-tertiary)"};
  white-space: nowrap;
`;

// node_modules/@jsonresume/core/src/visuals/index.jsx
init_esm();
var import_react116 = __toESM(require_react());

// node_modules/@jsonresume/core/src/visuals/BackgroundPattern.jsx
init_esm();
var import_react112 = __toESM(require_react());
var import_styled_components99 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime99 = __toESM(require_jsx_dev_runtime());
var Pattern = import_styled_components99.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: ${(props) => props.$opacity || 0.05};
  z-index: 0;
  background-image: ${(props) => {
  if (props.$pattern === "dots") {
    return `radial-gradient(circle, var(--resume-color-primary) 1px, transparent 1px)`;
  }
  if (props.$pattern === "grid") {
    return `
        linear-gradient(var(--resume-color-border) 1px, transparent 1px),
        linear-gradient(90deg, var(--resume-color-border) 1px, transparent 1px)
      `;
  }
  if (props.$pattern === "diagonal") {
    return `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        var(--resume-color-border) 10px,
        var(--resume-color-border) 11px
      )`;
  }
  return "none";
}};
  background-size: ${(props) => {
  if (props.$pattern === "dots") return "20px 20px";
  if (props.$pattern === "grid") return "20px 20px";
  return "auto";
}};

  @media print {
    display: none;
  }
`;

// node_modules/@jsonresume/core/src/visuals/ColorBlock.jsx
init_esm();
var import_react113 = __toESM(require_react());
var import_styled_components100 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime100 = __toESM(require_jsx_dev_runtime());
var Block = import_styled_components100.default.div`
  padding: var(--resume-space-section);
  background-color: ${(props) => props.$color || "var(--resume-color-muted)"};
  border-radius: ${(props) => props.$rounded ? "var(--resume-radius-md)" : "0"};
  margin: ${(props) => props.$margin || "var(--resume-space-section) 0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-item);
  }
`;
var Content8 = import_styled_components100.default.div`
  position: relative;
  z-index: 1;
`;

// node_modules/@jsonresume/core/src/visuals/DividerVariants.jsx
init_esm();
var import_react114 = __toESM(require_react());
var import_styled_components101 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime101 = __toESM(require_jsx_dev_runtime());
var Divider3 = import_styled_components101.default.hr`
  border: none;
  margin: ${(props) => props.$spacing || "var(--resume-space-item) 0"};
  height: ${(props) => {
  if (props.$variant === "thick") return "3px";
  if (props.$variant === "gradient") return "2px";
  return "1px";
}};
  background: ${(props) => {
  if (props.$variant === "gradient") {
    return `linear-gradient(
        to right,
        transparent,
        ${props.$color || "var(--resume-color-border)"},
        transparent
      )`;
  }
  if (props.$variant === "dotted") {
    return `repeating-linear-gradient(
        to right,
        ${props.$color || "var(--resume-color-border)"} 0,
        ${props.$color || "var(--resume-color-border)"} 4px,
        transparent 4px,
        transparent 8px
      )`;
  }
  if (props.$variant === "dashed") {
    return `repeating-linear-gradient(
        to right,
        ${props.$color || "var(--resume-color-border)"} 0,
        ${props.$color || "var(--resume-color-border)"} 12px,
        transparent 12px,
        transparent 20px
      )`;
  }
  return props.$color || "var(--resume-color-border)";
}};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: ${(props) => props.$color || "var(--resume-color-border)"};
  }
`;
var DecorativeDivider = import_styled_components101.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.$spacing || "var(--resume-space-item) 0"};
  gap: var(--resume-space-tight);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.$color || "var(--resume-color-border)"};
  }

  @media print {
    &::before,
    &::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
var Icon7 = import_styled_components101.default.span`
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  font-size: 16px;
`;

// node_modules/@jsonresume/core/src/visuals/BorderAccent.jsx
init_esm();
var import_react115 = __toESM(require_react());
var import_styled_components102 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime102 = __toESM(require_jsx_dev_runtime());
var Container28 = import_styled_components102.default.div`
  position: relative;
  padding: ${(props) => props.$padding || "var(--resume-space-item)"};
  border: ${(props) => {
  const color = props.$color || "var(--resume-color-accent)";
  if (props.$position === "all") return `2px solid ${color}`;
  return "none";
}};
  border-left: ${(props) => {
  if (props.$position === "left" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-right: ${(props) => {
  if (props.$position === "right") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-top: ${(props) => {
  if (props.$position === "top" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-bottom: ${(props) => {
  if (props.$position === "bottom" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-radius: ${(props) => props.$rounded ? "var(--resume-radius-md)" : "0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Corner = import_styled_components102.default.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  border-style: solid;
  border-width: 0;

  ${(props) => {
  if (props.$corner === "top-left") {
    return `
        top: -2px;
        left: -2px;
        border-top-width: 3px;
        border-left-width: 3px;
      `;
  }
  if (props.$corner === "top-right") {
    return `
        top: -2px;
        right: -2px;
        border-top-width: 3px;
        border-right-width: 3px;
      `;
  }
  if (props.$corner === "bottom-left") {
    return `
        bottom: -2px;
        left: -2px;
        border-bottom-width: 3px;
        border-left-width: 3px;
      `;
  }
  if (props.$corner === "bottom-right") {
    return `
        bottom: -2px;
        right: -2px;
        border-bottom-width: 3px;
        border-right-width: 3px;
      `;
  }
}}

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/@jsonresume/core/src/print/index.jsx
init_esm();
var import_react124 = __toESM(require_react());

// node_modules/@jsonresume/core/src/print/KeepTogether.jsx
init_esm();
var import_react117 = __toESM(require_react());
var import_styled_components103 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime103 = __toESM(require_jsx_dev_runtime());
var Container29 = import_styled_components103.default.div`
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;

// node_modules/@jsonresume/core/src/print/ColumnBreak.jsx
init_esm();
var import_react118 = __toESM(require_react());
var import_styled_components104 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime104 = __toESM(require_jsx_dev_runtime());
var Break2 = import_styled_components104.default.div`
  @media print {
    ${(props) => {
  if (props.$type === "page") {
    return `
          page-break-after: always;
          break-after: page;
        `;
  }
  if (props.$type === "column") {
    return `
          column-break-after: always;
          break-after: column;
        `;
  }
  return `
        page-break-after: always;
        break-after: page;
      `;
}}
  }

  @media screen {
    display: none;
  }
`;

// node_modules/@jsonresume/core/src/print/PrintOnly.jsx
init_esm();
var import_react119 = __toESM(require_react());
var import_styled_components105 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime105 = __toESM(require_jsx_dev_runtime());
var Container30 = import_styled_components105.default.div`
  display: ${(props) => props.$hideScreen ? "none" : "block"};

  @media print {
    display: block !important;
  }

  @media screen {
    display: ${(props) => props.$hideScreen ? "none !important" : "block"};
  }
`;
var ScreenContainer = import_styled_components105.default.div`
  @media print {
    display: none !important;
  }
`;

// node_modules/@jsonresume/core/src/print/PageHeaderLine.jsx
init_esm();
var import_react120 = __toESM(require_react());
var import_styled_components106 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime106 = __toESM(require_jsx_dev_runtime());
var HeaderContainer = import_styled_components106.default.div`
  display: none;

  @media print {
    display: block;
    position: running(header);
    padding-bottom: var(--resume-space-xs, 0.5rem);
    border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-small, 0.875rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
var HeaderContent = import_styled_components106.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
var Name8 = import_styled_components106.default.span`
  font-weight: 600;
  color: var(--resume-color-primary, #111827);
`;

// node_modules/@jsonresume/core/src/print/PageFooterLine.jsx
init_esm();
var import_react121 = __toESM(require_react());
var import_styled_components107 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime107 = __toESM(require_jsx_dev_runtime());
var FooterContainer = import_styled_components107.default.div`
  display: none;

  @media print {
    display: block;
    position: running(footer);
    padding-top: var(--resume-space-xs, 0.5rem);
    border-top: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-xs, 0.75rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
var FooterContent = import_styled_components107.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
var PageNumber2 = import_styled_components107.default.span`
  @media print {
    &::before {
      content: 'Page ';
    }
    &::after {
      content: ' of ' counter(pages);
    }
  }
`;
var CurrentPage = import_styled_components107.default.span`
  @media print {
    &::before {
      content: counter(page);
    }
  }
`;
var Date11 = import_styled_components107.default.span`
  font-variant-numeric: tabular-nums;
`;

// node_modules/@jsonresume/core/src/print/LetterheadBar.jsx
init_esm();
var import_react122 = __toESM(require_react());
var import_styled_components108 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime108 = __toESM(require_jsx_dev_runtime());
var LetterheadContainer = import_styled_components108.default.div`
  @media print {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
    z-index: 1000;

    /* Reserve space for unprintable area */
    margin-top: 0.25in;
  }

  @media screen {
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
  }
`;
var LetterheadContent = import_styled_components108.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--resume-size-small, 0.875rem);
`;
var Name9 = import_styled_components108.default.div`
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--resume-color-primary, #111827);
  font-size: var(--resume-size-base, 1rem);
`;
var Tagline2 = import_styled_components108.default.div`
  color: var(--resume-color-secondary, #6b7280);
  font-size: var(--resume-size-small, 0.875rem);
`;
var Spacer2 = import_styled_components108.default.div`
  @media print {
    height: 0.75in;
  }

  @media screen {
    height: 3rem;
  }
`;

// node_modules/@jsonresume/core/src/print/SoftShadowEmulation.jsx
init_esm();
var import_react123 = __toESM(require_react());
var import_styled_components109 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime109 = __toESM(require_jsx_dev_runtime());
var ShadowContainer = import_styled_components109.default.div`
  position: relative;
  background: var(--resume-color-background, #ffffff);
`;
var ShadowBox = import_styled_components109.default.div`
  position: relative;
  padding: ${(props) => props.$padding || "var(--resume-space-base, 1rem)"};
  background: var(--resume-color-background, #ffffff);

  /* Primary border */
  border: 1px solid var(--resume-color-border, #e5e7eb);

  /* Shadow emulation using pseudo-element */
  &::after {
    content: '';
    position: absolute;
    top: ${(props) => props.$offset || "4px"};
    left: ${(props) => props.$offset || "4px"};
    right: -${(props) => props.$offset || "4px"};
    bottom: -${(props) => props.$offset || "4px"};
    border: 1px solid ${(props) => props.$shadowColor || "rgba(0, 0, 0, 0.08)"};
    border-radius: inherit;
    z-index: -1;

    @media print {
      /* Ensure shadow prints - use solid light gray */
      border-color: ${(props) => props.$printShadowColor || "#f0f0f0"};
    }
  }
`;

// node_modules/@jsonresume/core/src/metadata/index.jsx
init_esm();

// node_modules/@jsonresume/core/src/metadata/InlineKicker.jsx
init_esm();
var import_react125 = __toESM(require_react());
var import_styled_components110 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime110 = __toESM(require_jsx_dev_runtime());
var StyledKicker = import_styled_components110.default.span`
  display: inline-block;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.$color || props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;

  @media print {
    font-size: 9pt;
    color: ${(props) => props.$color || "#4a4a4a"};
    letter-spacing: 0.08em;
  }
`;

// node_modules/@jsonresume/core/src/metadata/MetaRow.jsx
init_esm();
var import_react126 = __toESM(require_react());
var import_styled_components111 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime111 = __toESM(require_jsx_dev_runtime());
var StyledMetaRow = import_styled_components111.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  line-height: 1.5;

  /* Ensure 4.5:1 contrast ratio minimum */
  @media screen {
    color: #4a4a4a; /* 9.29:1 contrast on white */
  }

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    gap: 6px;
  }
`;
var MetaItem = import_styled_components111.default.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  &:not(:last-child)::after {
    content: '${(props) => props.$separator}';
    margin-left: 8px;
    opacity: 0.6;

    @media print {
      margin-left: 6px;
    }
  }
`;

// node_modules/@jsonresume/core/src/metadata/SubsectionLabel.jsx
init_esm();
var import_react127 = __toESM(require_react());
var import_styled_components112 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime112 = __toESM(require_jsx_dev_runtime());
var StyledLabel2 = import_styled_components112.default.div`
  display: block;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  margin-bottom: 6px;
  line-height: 1.4;

  /* Tracked uppercase variant */
  ${(props) => props.$variant === "tracked" && `
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-variant: normal;
  `}

  /* Small caps variant */
  ${(props) => props.$variant === "caps" && `
    font-variant: small-caps;
    letter-spacing: 0.05em;
    text-transform: lowercase;
  `}

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    margin-bottom: 4px;

    ${(props) => props.$variant === "tracked" && `
      text-transform: uppercase;
      letter-spacing: 0.1em;
    `}

    ${(props) => props.$variant === "caps" && `
      font-variant: small-caps;
      letter-spacing: 0.05em;
    `}
  }
`;

// node_modules/@jsonresume/core/src/metadata/GreyLabelCaps.jsx
init_esm();
var import_react128 = __toESM(require_react());
var import_styled_components113 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime113 = __toESM(require_jsx_dev_runtime());
var StyledGreyLabel = import_styled_components113.default.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  return "9pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weights?.medium || "var(--resume-weight-medium, 500)"};
  /* Ensure 4.5:1 contrast minimum - #767676 provides 4.54:1 on white */
  color: #767676;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.3;

  @media print {
    font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  return "9pt";
}};
    color: #767676;
    letter-spacing: 0.08em;
  }
`;

// node_modules/@jsonresume/core/src/metadata/SmallCapsHeading.jsx
init_esm();
var import_react129 = __toESM(require_react());
var import_styled_components114 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime114 = __toESM(require_jsx_dev_runtime());
var StyledHeading2 = import_styled_components114.default.h2`
  font-size: ${(props) => {
  if (props.$size === "sm") return "11pt";
  if (props.$size === "lg") return "13pt";
  return "12pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #1a1a1a)"};
  font-variant: small-caps;
  letter-spacing: 0.06em;
  line-height: 1.3;
  margin: 0 0 12px 0;
  text-transform: lowercase; /* Allows font-variant to work properly */

  @media print {
    font-size: ${(props) => {
  if (props.$size === "sm") return "11pt";
  if (props.$size === "lg") return "13pt";
  return "12pt";
}};
    color: #1a1a1a;
    letter-spacing: 0.06em;
    margin: 0 0 10px 0;
    font-variant: small-caps;
    page-break-after: avoid;
  }
`;

// node_modules/@jsonresume/core/src/containers/index.jsx
init_esm();

// node_modules/@jsonresume/core/src/containers/MutedPanel.jsx
init_esm();
var import_react130 = __toESM(require_react());
var import_styled_components115 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime115 = __toESM(require_jsx_dev_runtime());
var StyledMutedPanel = import_styled_components115.default.div`
  background: ${(props) => {
  if (props.$tint === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.06))";
  }
  if (props.$tint === "warm") {
    return "var(--resume-color-warm-muted, rgba(102, 51, 0, 0.05))";
  }
  if (props.$tint === "cool") {
    return "var(--resume-color-cool-muted, rgba(0, 51, 102, 0.05))";
  }
  return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
}};

  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  padding: ${(props) => {
  if (props.$padding === "sm") return "12px";
  if (props.$padding === "lg") return "24px";
  return "16px";
}};

  border-radius: ${(props) => props.theme?.radius?.md || "var(--resume-radius-md, 6px)"};

  margin: ${(props) => {
  if (props.$margin === "sm") return "8px 0";
  if (props.$margin === "lg") return "24px 0";
  if (props.$margin === "none") return "0";
  return "16px 0";
}};

  /* High text contrast for readability */
  line-height: 1.6;
  font-size: 10pt;

  /* Ensure content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Use subtle backgrounds that print well */
    background: ${(props) => {
  if (props.$tint === "accent") return "rgba(0, 102, 204, 0.05)";
  if (props.$tint === "warm") return "rgba(102, 51, 0, 0.04)";
  if (props.$tint === "cool") return "rgba(0, 51, 102, 0.04)";
  return "#f8f8f8";
}};

    /* Ensure high contrast text for printing */
    color: #000;

    /* Remove border radius for cleaner print appearance */
    border-radius: 0;

    /* Adjust spacing for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px";
  if (props.$padding === "lg") return "20px";
  return "14px";
}};

    /* Prevent orphaned panels */
    page-break-inside: avoid;
  }
`;

// node_modules/@jsonresume/core/src/containers/AccentCalloutPanel.jsx
init_esm();
var import_react131 = __toESM(require_react());
var import_styled_components116 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime116 = __toESM(require_jsx_dev_runtime());
var StyledCalloutPanel = import_styled_components116.default.div`
  border-left: 4px solid
    ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #22c55e)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #f59e0b)";
  if (props.$variant === "info") return "var(--resume-color-info, #3b82f6)";
  return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
}};

  background: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-light, rgba(34, 197, 94, 0.08))";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-light, rgba(245, 158, 11, 0.08))";
  if (props.$variant === "info")
    return "var(--resume-color-info-light, rgba(59, 130, 246, 0.08))";
  return props.theme?.colors?.accentLight || "var(--resume-color-accent-light, rgba(0, 102, 204, 0.08))";
}};

  padding: ${(props) => props.$size === "sm" ? "12px 16px" : "16px 20px"}; /* default md */

  margin: 16px 0;
  border-radius: ${(props) => props.theme?.radius?.md || "var(--resume-radius-md, 6px)"};

  /* Ensure high contrast text, no reversed text */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  @media print {
    /* Solid border for print clarity */
    border-left: 3pt solid
      ${(props) => {
  if (props.$variant === "success") return "#22c55e";
  if (props.$variant === "warning") return "#f59e0b";
  if (props.$variant === "info") return "#3b82f6";
  return "#0066cc";
}};

    /* Lighter background for print */
    background: ${(props) => {
  if (props.$variant === "success") return "rgba(34, 197, 94, 0.05)";
  if (props.$variant === "warning") return "rgba(245, 158, 11, 0.05)";
  if (props.$variant === "info") return "rgba(59, 130, 246, 0.05)";
  return "rgba(0, 102, 204, 0.05)";
}};

    /* Remove border radius */
    border-radius: 0;

    /* Ensure black text for maximum contrast */
    color: #000;

    /* Prevent splitting across pages */
    page-break-inside: avoid;
  }
`;
var CalloutHeader = import_styled_components116.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  /* Icon styling */
  .callout-icon {
    font-size: 16pt;
    line-height: 1;
  }
`;
var CalloutTitle = import_styled_components116.default.div`
  /* Bold, larger title for emphasis (as per design constraints) */
  font-size: ${(props) => props.$size === "sm" ? "11pt" : "12pt"};
  font-weight: 700;
  color: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-dark, #16a34a)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-dark, #d97706)";
  if (props.$variant === "info")
    return "var(--resume-color-info-dark, #2563eb)";
  return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
}};

  @media print {
    /* Maintain weight and bump size slightly for print */
    font-weight: 700;
    font-size: ${(props) => props.$size === "sm" ? "11pt" : "12pt"};
    color: #000;
  }
`;
var CalloutContent = import_styled_components116.default.div`
  font-size: 10pt;
  line-height: 1.6;

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    font-size: 10pt;
    line-height: 1.5;
  }
`;

// node_modules/@jsonresume/core/src/containers/SoftCardOutline.jsx
init_esm();
var import_react132 = __toESM(require_react());
var import_styled_components117 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime117 = __toESM(require_jsx_dev_runtime());
var StyledCardOutline = import_styled_components117.default.div`
  /* 1pt stroke as specified */
  border: 1px solid
    ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentBorder || "var(--resume-color-accent-border, #cce5ff)";
  }
  if (props.$variant === "muted") {
    return props.theme?.colors?.border || "var(--resume-color-border, #e5e5e5)";
  }
  return props.theme?.colors?.borderLight || "var(--resume-color-border-light, #d4d4d4)";
}};

  /* Rounded corners for softness */
  border-radius: ${(props) => {
  if (props.$rounded === "sm") return "4px";
  if (props.$rounded === "lg") return "12px";
  return props.theme?.radius?.md || "var(--resume-radius-md, 8px)";
}};

  /* No shadows - clean outline only */
  box-shadow: none;

  /* Padding options */
  padding: ${(props) => {
  if (props.$padding === "sm") return "12px";
  if (props.$padding === "lg") return "24px";
  return "16px";
}};

  margin: ${(props) => {
  if (props.$margin === "sm") return "8px 0";
  if (props.$margin === "lg") return "24px 0";
  if (props.$margin === "none") return "0";
  return "16px 0";
}};

  /* Optional subtle background */
  background: ${(props) => {
  if (props.$background === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.03))";
  }
  if (props.$background === "muted") {
    return "var(--resume-color-background-muted, rgba(0, 0, 0, 0.02))";
  }
  return "transparent";
}};

  /* Text styling */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: 1pt solid
      ${(props) => {
  if (props.$variant === "accent") return "#b3d9ff";
  if (props.$variant === "muted") return "#d4d4d4";
  return "#c0c0c0";
}};

    /* Remove border radius for print (cleaner appearance) */
    border-radius: 0;

    /* Remove background fills for print */
    background: transparent;

    /* Ensure high contrast text */
    color: #000;

    /* Adjust padding for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px";
  if (props.$padding === "lg") return "20px";
  return "14px";
}};

    /* Prevent splitting card across pages */
    page-break-inside: avoid;

    /* Ensure no page edge collision */
    margin-left: 0;
    margin-right: 0;
  }
`;

// node_modules/@jsonresume/core/src/containers/RoleBlockFramed.jsx
init_esm();
var import_react133 = __toESM(require_react());
var import_styled_components118 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime118 = __toESM(require_jsx_dev_runtime());
var StyledRoleBlock = import_styled_components118.default.div`
  /* Light frame - subtle border */
  border: 1px solid
    ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentBorder || "var(--resume-color-accent-border, #e0e0e0)";
  }
  if (props.$variant === "minimal") {
    return "transparent";
  }
  return props.theme?.colors?.borderLight || "var(--resume-color-border-light, #e5e5e5)";
}};

  /* Optional background tint */
  background: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.02))";
  }
  if (props.$variant === "tinted") {
    return "var(--resume-color-background-muted, rgba(0, 0, 0, 0.01))";
  }
  return "transparent";
}};

  /* Consistent padding to prevent edge collision */
  padding: ${(props) => {
  if (props.$padding === "sm") return "12px 16px";
  if (props.$padding === "lg") return "20px 24px";
  return "16px 20px";
}};

  /* Spacing between role blocks */
  margin: ${(props) => {
  if (props.$spacing === "sm") return "12px 0";
  if (props.$spacing === "lg") return "24px 0";
  if (props.$spacing === "none") return "0";
  return "16px 0";
}};

  /* Subtle rounding */
  border-radius: ${(props) => props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};

  /* Text styling */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  /* Ensure proper spacing for nested elements */
  h3,
  h4 {
    margin-bottom: 8px;
  }

  p {
    margin: 4px 0;
  }

  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px;
  }

  li {
    margin: 4px 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: ${(props) => {
  if (props.$variant === "minimal") return "none";
  if (props.$variant === "accent") return "0.5pt solid #d0d0d0";
  return "0.5pt solid #e0e0e0";
}};

    /* Remove background for clean print */
    background: transparent;

    /* Remove border radius for print */
    border-radius: 0;

    /* Adjust padding for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px 12px";
  if (props.$padding === "lg") return "16px 20px";
  return "12px 16px";
}};

    /* Prevent page edge collision - ensure margins */
    margin-left: 0;
    margin-right: 0;

    /* Prevent splitting role blocks across pages */
    page-break-inside: avoid;

    /* Add small gap after each block for readability */
    margin-bottom: ${(props) => {
  if (props.$spacing === "sm") return "10px";
  if (props.$spacing === "lg") return "20px";
  if (props.$spacing === "none") return "0";
  return "14px";
}};

    /* Ensure high contrast text */
    color: #000;

    /* Optimize nested element spacing for print */
    h3,
    h4 {
      margin-bottom: 6px;
    }

    ul,
    ol {
      margin: 6px 0;
    }

    li {
      margin: 3px 0;
    }
  }
`;

// node_modules/@jsonresume/core/src/tags/index.jsx
init_esm();

// node_modules/@jsonresume/core/src/tags/ToolTagRibbon.jsx
init_esm();
var import_react134 = __toESM(require_react());
var import_styled_components119 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime119 = __toESM(require_jsx_dev_runtime());
var RibbonContainer = import_styled_components119.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${(props) => props.$size === "small" ? "6px" : "8px"};
  margin: ${(props) => props.$size === "small" ? "4px 0" : "6px 0"};
  line-height: ${(props) => props.theme?.typography?.lineHeight || "var(--resume-line-height, 1.5)"};

  @media print {
    gap: ${(props) => props.$size === "small" ? "4px" : "6px"};
    margin: 3pt 0;
  }
`;
var Tag2 = import_styled_components119.default.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  font-weight: 500;
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #444444)"};
  white-space: nowrap;

  /* Preserve baseline grid */
  vertical-align: baseline;

  @media print {
    color: #444444;
    font-size: ${(props) => {
  if (props.$size === "small") return "8pt";
  if (props.$size === "large") return "10pt";
  return "9pt";
}};
  }
`;
var Separator7 = import_styled_components119.default.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  color: ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #cccccc)"};
  user-select: none;
  vertical-align: baseline;

  @media print {
    color: #cccccc;
  }
`;

// node_modules/@jsonresume/core/src/badges/index.jsx
init_esm();

// node_modules/@jsonresume/core/src/badges/BadgeRowOutline.jsx
init_esm();
var import_react135 = __toESM(require_react());
var import_styled_components120 = __toESM(require_styled_components_cjs());
var import_jsx_dev_runtime120 = __toESM(require_jsx_dev_runtime());
var BadgeContainer2 = import_styled_components120.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$size === "small" ? "6px" : "8px"};
  margin: ${(props) => props.$size === "small" ? "6px 0" : "8px 0"};

  @media print {
    gap: ${(props) => props.$size === "small" ? "4px" : "6px"};
    margin: 4pt 0;
  }
`;
var OutlineBadge = import_styled_components120.default.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => {
  if (props.$size === "small") return "3px 10px";
  if (props.$size === "large") return "7px 16px";
  return "5px 12px";
}};
  border: ${(props) => props.$strokeWidth || "0.5pt"} solid
    ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #666666)"};
  border-radius: ${(props) => props.$rounded ? "999px" : props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  font-weight: 500;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000000)"};
  background: transparent;
  white-space: nowrap;
  line-height: 1.2;

  /* Prevent scalloping on low-DPI displays */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media print {
    /* Ensure minimum stroke width for print clarity */
    border-width: ${(props) => {
  const width = props.$strokeWidth || "0.5pt";
  return width;
}};
    border-color: #666666;
    color: #000000;
    padding: ${(props) => {
  if (props.$size === "small") return "2pt 8pt";
  if (props.$size === "large") return "5pt 12pt";
  return "3pt 10pt";
}};
    font-size: ${(props) => {
  if (props.$size === "small") return "8pt";
  if (props.$size === "large") return "10pt";
  return "9pt";
}};

    /* Force exact colors for print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

export {
  require_styled_components_cjs,
  renderResumeDocument,
  require_jsx_dev_runtime,
  Section,
  SectionTitle,
  DateRange,
  Badge,
  BadgeList,
  safeUrl,
  getLinkRel,
  isExternalUrl,
  ContactInfo,
  Link
};
/*! Bundled license information:

react/cjs/react-jsx-dev-runtime.production.js:
  (**
   * @license React
   * react-jsx-dev-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-dev-runtime.development.js:
  (**
   * @license React
   * react-jsx-dev-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-F5V7KJFG.mjs.map
