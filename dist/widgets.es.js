import g, { forwardRef as mt, Children as Nt, useRef as F, useState as G, useEffect as H, useCallback as ee, createPortal as zt, useMemo as gt, useLayoutEffect as It } from "react";
import { useResizeDetector as Be } from "react-resize-detector";
import { waitForStableBoundingRect as Dt, recursiveMap as Ht } from "./utils.es.js";
import { noOp as oe } from "velor-utils/utils/functional.mjs";
import O from "react-bootstrap/Modal";
import { InfoCircleFill as Xe, ExclamationTriangleFill as Bt, ExclamationSquareFill as Vt, ExclamationDiamondFill as Ot, Pin as Ft, PinAngle as qt, XLg as jt, PlusCircleFill as Ke, DashCircleFill as Je } from "react-bootstrap-icons";
import { Alert as Ye, ProgressBar as Zt, Form as et, FormControl as Wt, Dropdown as tt, DropdownMenu as Gt, DropdownItem as Qt } from "react-bootstrap";
import Y from "react-bootstrap/Button";
import { u as Ut, a as Xt, b as Kt, c as Jt } from "./hooks-DYRN6R3-.js";
import { R as Hi } from "./hooks-DYRN6R3-.js";
import "react-range-slider-input/dist/style.css";
import Yt from "react-range-slider-input";
import st from "react-bootstrap/ButtonGroup";
import { useContextMenu as es, Menu as ts, Item as it } from "react-contexify";
function Ve(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ce = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var nt;
function ss() {
  return nt || (nt = 1, (function(t) {
    (function() {
      var e = {}.hasOwnProperty;
      function i() {
        for (var o = "", l = 0; l < arguments.length; l++) {
          var h = arguments[l];
          h && (o = s(o, r(h)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return i.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var l = "";
        for (var h in o)
          e.call(o, h) && o[h] && (l = s(l, h));
        return l;
      }
      function s(o, l) {
        return l ? o ? o + " " + l : o + l : o;
      }
      t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
    })();
  })(Ce)), Ce.exports;
}
var is = ss();
const B = /* @__PURE__ */ Ve(is), $e = "animating-expand", Te = "animating-collapse", Le = "animating", Se = "collapsed", Ae = "expanded", ns = mt((t, e) => {
  const {
    children: i,
    expanded: r,
    onExpand: s = oe,
    onStateChanged: o = oe,
    caption: l,
    className: h,
    style: m = {}
  } = t;
  if (Nt.count(i) === 0) return null;
  const u = F(), k = F(), [b, c] = G(!0), n = () => {
    const _ = k.current.getBoundingClientRect();
    u.current.style.width = _.width + "px", u.current.style.height = _.height + "px";
  }, a = () => {
    u.current.style.width = "1.7em", u.current.style.height = "1.7em";
  }, p = () => {
    u.current.classList.remove(Ae), u.current.classList.add(Te, Le), a();
  }, d = () => {
    u.current.classList.remove(Se), u.current.classList.add($e, Le), n();
  }, v = () => u.current.classList.contains($e), y = () => u.current.classList.contains(Te);
  return H(() => {
    r ? (u.current.classList.add(Ae), n(), s(!0), o(!0)) : (u.current.classList.add(Se), a(), s(!1), o(!1));
    const _ = () => {
      s(!1);
    };
    return c(!1), document.addEventListener("mousedown", _), () => {
      document.removeEventListener("mousedown", _);
    };
  }, []), H(() => {
    b || (r ? d() : p());
  }, [r]), Be({
    targetRef: k,
    onResize: (_, x) => {
      u.current.classList.contains("expanded") && Dt(k.current, n);
    }
  }), /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: u,
      onTransitionEnd: (_) => {
        _.propertyName === "width" && (y() && !r ? (u.current.classList.add(Se), o(!1)) : v() && r && (u.current.classList.add(Ae), o(!0)), u.current.classList.remove(
          Te,
          $e,
          Le
        ));
      },
      onMouseDown: (_) => _.stopPropagation(),
      onClick: (_) => {
        _.stopPropagation(), s(!0);
      },
      style: m,
      className: B(
        h,
        "collapsible"
      )
    },
    /* @__PURE__ */ g.createElement("span", { className: "caption", ref: e }, l),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: k,
        className: "content"
      },
      i
    )
  );
}), yi = (t) => Ht(t.children, (e) => g.cloneElement(e, {
  disabled: e.props.disabled || t.disabled
})), wi = (t) => {
  const {
    notifications: e,
    variant: i,
    visible: r = !1,
    bordered: s = !1,
    size: o
  } = t, l = F(), h = F(), [m, u] = G(!1);
  function k(b) {
    b.preventDefault(), b.stopPropagation(), m ? (u(!1), l.current.style.width = null, l.current.style.height = null) : (u(!0), l.current.style.width = h.current.scrollWidth + "px", l.current.style.height = h.current.scrollHeight + "px");
  }
  return H(() => {
    const b = (c) => {
      c.stopPropagation(), u(!1), l.current && (l.current.style.width = null, l.current.style.height = null);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), t.children ? /* @__PURE__ */ g.createElement("div", { style: { position: "relative", width: "fit-content" } }, /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: l,
      onClick: k,
      className: B(
        i,
        o,
        "dot-notification",
        {
          bordered: s,
          hidden: !r,
          expanded: m
        }
      )
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: h,
        className: "content"
      },
      e
    )
  ), t.children) : /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: l,
      onClick: k,
      className: B(
        i,
        o,
        "dot-notification",
        {
          bordered: s,
          hidden: !r,
          expanded: m
        }
      )
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: h,
        className: "content"
      },
      e
    )
  );
}, rs = (t) => {
  const {
    visible: e,
    className: i = "",
    location: r = "left",
    ...s
  } = t;
  return /* @__PURE__ */ g.createElement("div", { className: B(
    "drawer-container",
    `${r}-drawer`,
    {
      "horizontal-drawer": r === "left" || r === "right",
      "vertical-drawer": r === "top" || r === "bottom"
    }
  ) }, /* @__PURE__ */ g.createElement(
    "div",
    {
      ...s,
      className: B(
        i,
        { visible: e },
        "drawer"
      )
    },
    t.children
  ));
}, xi = (t) => {
  const {
    visibleItem: e
  } = t;
  return g.Children.map(t.children, (i) => {
    if (!g.isValidElement(i))
      return i;
    const {
      title: r,
      name: s,
      loading: o,
      className: l,
      id: h,
      onClose: m
    } = i.props;
    return /* @__PURE__ */ g.createElement(
      rs,
      {
        id: h,
        className: l,
        visible: e === s,
        title: r,
        name: s,
        loading: o,
        onClose: m
      },
      i
    );
  });
}, os = (t) => {
  const e = F(), {
    itemRenderer: i,
    itemSize: r,
    range: s
  } = t;
  if (!s || !s.valid)
    return;
  const [o, l] = G(0);
  H(() => {
    s.count = Math.floor(o / r) - 1;
  }, [s, s.max, o, r]);
  const h = s.max > 0, m = ee((k) => {
    const b = Math.sign(k.deltaY);
    s.moveDown(b);
  }, [s]);
  Be({
    targetRef: e,
    onResize: ee(({ height: k }) => {
      l(k);
    }, [])
  });
  const u = [];
  for (let k of s) {
    let b = i(k);
    b !== null && u.push(b);
  }
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      id: t.id,
      className: "gargantua",
      ref: e,
      style: t.style,
      onWheel: m
    },
    /* @__PURE__ */ g.createElement("div", { className: "viewport" }, /* @__PURE__ */ g.createElement("div", { className: "content" }, u), /* @__PURE__ */ g.createElement(
      "input",
      {
        type: "range",
        onFocus: (k) => {
          k.target.blur();
        },
        className: "vertical-range",
        onClick: (k) => k.stopPropagation(),
        onChange: (k) => s.jumpToFirst(k.target.value),
        disabled: !h,
        value: s.first,
        min: 0,
        max: s.max
      }
    ))
  );
};
function Oe() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
var X = Oe();
function vt(t) {
  X = t;
}
var re = { exec: () => null };
function P(t, e = "") {
  let i = typeof t == "string" ? t : t.source;
  const r = {
    replace: (s, o) => {
      let l = typeof o == "string" ? o : o.source;
      return l = l.replace(I.caret, "$1"), i = i.replace(s, l), r;
    },
    getRegex: () => new RegExp(i, e)
  };
  return r;
}
var I = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (t) => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}#`),
  htmlBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i")
}, as = /^(?:[ \t]*(?:\n|$))+/, ls = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, hs = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ae = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, cs = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Fe = /(?:[*+-]|\d{1,9}[.)])/, kt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, bt = P(kt).replace(/bull/g, Fe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), us = P(kt).replace(/bull/g, Fe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), qe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ps = /^[^\n]+/, je = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ds = P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", je).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), fs = P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Fe).getRegex(), _e = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ze = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ms = P(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Ze).replace("tag", _e).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _t = P(qe).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), gs = P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _t).getRegex(), We = {
  blockquote: gs,
  code: ls,
  def: ds,
  fences: hs,
  heading: cs,
  hr: ae,
  html: ms,
  lheading: bt,
  list: fs,
  newline: as,
  paragraph: _t,
  table: re,
  text: ps
}, rt = P(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), vs = {
  ...We,
  lheading: us,
  table: rt,
  paragraph: P(qe).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", rt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex()
}, ks = {
  ...We,
  html: P(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Ze).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: re,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: P(qe).replace("hr", ae).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", bt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, bs = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, _s = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, yt = /^( {2,}|\\)\n(?!\s*$)/, ys = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ye = /[\p{P}\p{S}]/u, Ge = /[\s\p{P}\p{S}]/u, wt = /[^\s\p{P}\p{S}]/u, ws = P(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ge).getRegex(), xt = /(?!~)[\p{P}\p{S}]/u, xs = /(?!~)[\s\p{P}\p{S}]/u, Es = /(?:[^\s\p{P}\p{S}]|~)/u, Cs = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Et = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, $s = P(Et, "u").replace(/punct/g, ye).getRegex(), Ts = P(Et, "u").replace(/punct/g, xt).getRegex(), Ct = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ls = P(Ct, "gu").replace(/notPunctSpace/g, wt).replace(/punctSpace/g, Ge).replace(/punct/g, ye).getRegex(), Ss = P(Ct, "gu").replace(/notPunctSpace/g, Es).replace(/punctSpace/g, xs).replace(/punct/g, xt).getRegex(), As = P(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, wt).replace(/punctSpace/g, Ge).replace(/punct/g, ye).getRegex(), Ps = P(/\\(punct)/, "gu").replace(/punct/g, ye).getRegex(), Rs = P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ms = P(Ze).replace("(?:-->|$)", "-->").getRegex(), Ns = P(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", Ms).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ve = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, zs = P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ve).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), $t = P(/^!?\[(label)\]\[(ref)\]/).replace("label", ve).replace("ref", je).getRegex(), Tt = P(/^!?\[(ref)\](?:\[\])?/).replace("ref", je).getRegex(), Is = P("reflink|nolink(?!\\()", "g").replace("reflink", $t).replace("nolink", Tt).getRegex(), Qe = {
  _backpedal: re,
  // only used for GFM url
  anyPunctuation: Ps,
  autolink: Rs,
  blockSkip: Cs,
  br: yt,
  code: _s,
  del: re,
  emStrongLDelim: $s,
  emStrongRDelimAst: Ls,
  emStrongRDelimUnd: As,
  escape: bs,
  link: zs,
  nolink: Tt,
  punctuation: ws,
  reflink: $t,
  reflinkSearch: Is,
  tag: Ns,
  text: ys,
  url: re
}, Ds = {
  ...Qe,
  link: P(/^!?\[(label)\]\((.*?)\)/).replace("label", ve).getRegex(),
  reflink: P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ve).getRegex()
}, ze = {
  ...Qe,
  emStrongRDelimAst: Ss,
  emStrongLDelim: Ts,
  url: P(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Hs = {
  ...ze,
  br: P(yt).replace("{2,}", "*").getRegex(),
  text: P(ze.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, me = {
  normal: We,
  gfm: vs,
  pedantic: ks
}, ie = {
  normal: Qe,
  gfm: ze,
  breaks: Hs,
  pedantic: Ds
}, Bs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ot = (t) => Bs[t];
function V(t, e) {
  if (e) {
    if (I.escapeTest.test(t))
      return t.replace(I.escapeReplace, ot);
  } else if (I.escapeTestNoEncode.test(t))
    return t.replace(I.escapeReplaceNoEncode, ot);
  return t;
}
function at(t) {
  try {
    t = encodeURI(t).replace(I.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function lt(t, e) {
  const i = t.replace(I.findPipe, (o, l, h) => {
    let m = !1, u = l;
    for (; --u >= 0 && h[u] === "\\"; ) m = !m;
    return m ? "|" : " |";
  }), r = i.split(I.splitPipe);
  let s = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; ) r.push("");
  for (; s < r.length; s++)
    r[s] = r[s].trim().replace(I.slashPipe, "|");
  return r;
}
function ne(t, e, i) {
  const r = t.length;
  if (r === 0)
    return "";
  let s = 0;
  for (; s < r && t.charAt(r - s - 1) === e; )
    s++;
  return t.slice(0, r - s);
}
function Vs(t, e) {
  if (t.indexOf(e[1]) === -1)
    return -1;
  let i = 0;
  for (let r = 0; r < t.length; r++)
    if (t[r] === "\\")
      r++;
    else if (t[r] === e[0])
      i++;
    else if (t[r] === e[1] && (i--, i < 0))
      return r;
  return i > 0 ? -2 : -1;
}
function ht(t, e, i, r, s) {
  const o = e.href, l = e.title || null, h = t[1].replace(s.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  const m = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: i,
    href: o,
    title: l,
    text: h,
    tokens: r.inlineTokens(h)
  };
  return r.state.inLink = !1, m;
}
function Os(t, e, i) {
  const r = t.match(i.other.indentCodeCompensation);
  if (r === null)
    return e;
  const s = r[1];
  return e.split(`
`).map((o) => {
    const l = o.match(i.other.beginningSpace);
    if (l === null)
      return o;
    const [h] = l;
    return h.length >= s.length ? o.slice(s.length) : o;
  }).join(`
`);
}
var ke = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(t) {
    this.options = t || X;
  }
  space(t) {
    const e = this.rules.block.newline.exec(t);
    if (e && e[0].length > 0)
      return {
        type: "space",
        raw: e[0]
      };
  }
  code(t) {
    const e = this.rules.block.code.exec(t);
    if (e) {
      const i = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: e[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : ne(i, `
`)
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const i = e[0], r = Os(i, e[3] || "", this.rules);
      return {
        type: "code",
        raw: i,
        lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
        text: r
      };
    }
  }
  heading(t) {
    const e = this.rules.block.heading.exec(t);
    if (e) {
      let i = e[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        const r = ne(i, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (i = r.trim());
      }
      return {
        type: "heading",
        raw: e[0],
        depth: e[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(t) {
    const e = this.rules.block.hr.exec(t);
    if (e)
      return {
        type: "hr",
        raw: ne(e[0], `
`)
      };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      let i = ne(e[0], `
`).split(`
`), r = "", s = "";
      const o = [];
      for (; i.length > 0; ) {
        let l = !1;
        const h = [];
        let m;
        for (m = 0; m < i.length; m++)
          if (this.rules.other.blockquoteStart.test(i[m]))
            h.push(i[m]), l = !0;
          else if (!l)
            h.push(i[m]);
          else
            break;
        i = i.slice(m);
        const u = h.join(`
`), k = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${u}` : u, s = s ? `${s}
${k}` : k;
        const b = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(k, o, !0), this.lexer.state.top = b, i.length === 0)
          break;
        const c = o.at(-1);
        if (c?.type === "code")
          break;
        if (c?.type === "blockquote") {
          const n = c, a = n.raw + `
` + i.join(`
`), p = this.blockquote(a);
          o[o.length - 1] = p, r = r.substring(0, r.length - n.raw.length) + p.raw, s = s.substring(0, s.length - n.text.length) + p.text;
          break;
        } else if (c?.type === "list") {
          const n = c, a = n.raw + `
` + i.join(`
`), p = this.list(a);
          o[o.length - 1] = p, r = r.substring(0, r.length - c.raw.length) + p.raw, s = s.substring(0, s.length - n.raw.length) + p.raw, i = a.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: o,
        text: s
      };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let i = e[1].trim();
      const r = i.length > 1, s = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = r ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = r ? i : "[*+-]");
      const o = this.rules.other.listItemRegex(i);
      let l = !1;
      for (; t; ) {
        let m = !1, u = "", k = "";
        if (!(e = o.exec(t)) || this.rules.block.hr.test(t))
          break;
        u = e[0], t = t.substring(u.length);
        let b = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (v) => " ".repeat(3 * v.length)), c = t.split(`
`, 1)[0], n = !b.trim(), a = 0;
        if (this.options.pedantic ? (a = 2, k = b.trimStart()) : n ? a = e[1].length + 1 : (a = e[2].search(this.rules.other.nonSpaceChar), a = a > 4 ? 1 : a, k = b.slice(a), a += e[1].length), n && this.rules.other.blankLine.test(c) && (u += c + `
`, t = t.substring(c.length + 1), m = !0), !m) {
          const v = this.rules.other.nextBulletRegex(a), y = this.rules.other.hrRegex(a), _ = this.rules.other.fencesBeginRegex(a), x = this.rules.other.headingBeginRegex(a), S = this.rules.other.htmlBeginRegex(a);
          for (; t; ) {
            const T = t.split(`
`, 1)[0];
            let E;
            if (c = T, this.options.pedantic ? (c = c.replace(this.rules.other.listReplaceNesting, "  "), E = c) : E = c.replace(this.rules.other.tabCharGlobal, "    "), _.test(c) || x.test(c) || S.test(c) || v.test(c) || y.test(c))
              break;
            if (E.search(this.rules.other.nonSpaceChar) >= a || !c.trim())
              k += `
` + E.slice(a);
            else {
              if (n || b.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || _.test(b) || x.test(b) || y.test(b))
                break;
              k += `
` + c;
            }
            !n && !c.trim() && (n = !0), u += T + `
`, t = t.substring(T.length + 1), b = E.slice(a);
          }
        }
        s.loose || (l ? s.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (l = !0));
        let p = null, d;
        this.options.gfm && (p = this.rules.other.listIsTask.exec(k), p && (d = p[0] !== "[ ] ", k = k.replace(this.rules.other.listReplaceTask, ""))), s.items.push({
          type: "list_item",
          raw: u,
          task: !!p,
          checked: d,
          loose: !1,
          text: k,
          tokens: []
        }), s.raw += u;
      }
      const h = s.items.at(-1);
      if (h)
        h.raw = h.raw.trimEnd(), h.text = h.text.trimEnd();
      else
        return;
      s.raw = s.raw.trimEnd();
      for (let m = 0; m < s.items.length; m++)
        if (this.lexer.state.top = !1, s.items[m].tokens = this.lexer.blockTokens(s.items[m].text, []), !s.loose) {
          const u = s.items[m].tokens.filter((b) => b.type === "space"), k = u.length > 0 && u.some((b) => this.rules.other.anyLine.test(b.raw));
          s.loose = k;
        }
      if (s.loose)
        for (let m = 0; m < s.items.length; m++)
          s.items[m].loose = !0;
      return s;
    }
  }
  html(t) {
    const e = this.rules.block.html.exec(t);
    if (e)
      return {
        type: "html",
        block: !0,
        raw: e[0],
        pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
        text: e[0]
      };
  }
  def(t) {
    const e = this.rules.block.def.exec(t);
    if (e) {
      const i = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return {
        type: "def",
        tag: i,
        raw: e[0],
        href: r,
        title: s
      };
    }
  }
  table(t) {
    const e = this.rules.block.table.exec(t);
    if (!e || !this.rules.other.tableDelimiter.test(e[2]))
      return;
    const i = lt(e[1]), r = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === r.length) {
      for (const l of r)
        this.rules.other.tableAlignRight.test(l) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? o.align.push("left") : o.align.push(null);
      for (let l = 0; l < i.length; l++)
        o.header.push({
          text: i[l],
          tokens: this.lexer.inline(i[l]),
          header: !0,
          align: o.align[l]
        });
      for (const l of s)
        o.rows.push(lt(l, o.header.length).map((h, m) => ({
          text: h,
          tokens: this.lexer.inline(h),
          header: !1,
          align: o.align[m]
        })));
      return o;
    }
  }
  lheading(t) {
    const e = this.rules.block.lheading.exec(t);
    if (e)
      return {
        type: "heading",
        raw: e[0],
        depth: e[2].charAt(0) === "=" ? 1 : 2,
        text: e[1],
        tokens: this.lexer.inline(e[1])
      };
  }
  paragraph(t) {
    const e = this.rules.block.paragraph.exec(t);
    if (e) {
      const i = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return {
        type: "paragraph",
        raw: e[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(t) {
    const e = this.rules.block.text.exec(t);
    if (e)
      return {
        type: "text",
        raw: e[0],
        text: e[0],
        tokens: this.lexer.inline(e[0])
      };
  }
  escape(t) {
    const e = this.rules.inline.escape.exec(t);
    if (e)
      return {
        type: "escape",
        raw: e[0],
        text: e[1]
      };
  }
  tag(t) {
    const e = this.rules.inline.tag.exec(t);
    if (e)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: e[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: e[0]
      };
  }
  link(t) {
    const e = this.rules.inline.link.exec(t);
    if (e) {
      const i = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i))
          return;
        const o = ne(i.slice(0, -1), "\\");
        if ((i.length - o.length) % 2 === 0)
          return;
      } else {
        const o = Vs(e[2], "()");
        if (o === -2)
          return;
        if (o > -1) {
          const h = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + o;
          e[2] = e[2].substring(0, o), e[0] = e[0].substring(0, h).trim(), e[3] = "";
        }
      }
      let r = e[2], s = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(r);
        o && (r = o[1], s = o[3]);
      } else
        s = e[3] ? e[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), ht(e, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: s && s.replace(this.rules.inline.anyPunctuation, "$1")
      }, e[0], this.lexer, this.rules);
    }
  }
  reflink(t, e) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      const r = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = e[r.toLowerCase()];
      if (!s) {
        const o = i[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return ht(i, s, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, i = "") {
    let r = this.rules.inline.emStrongLDelim.exec(t);
    if (!r || r[3] && i.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const o = [...r[0]].length - 1;
      let l, h, m = o, u = 0;
      const k = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, e = e.slice(-1 * t.length + o); (r = k.exec(e)) != null; ) {
        if (l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !l) continue;
        if (h = [...l].length, r[3] || r[4]) {
          m += h;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + h) % 3)) {
          u += h;
          continue;
        }
        if (m -= h, m > 0) continue;
        h = Math.min(h, h + m + u);
        const b = [...r[0]][0].length, c = t.slice(0, o + r.index + b + h);
        if (Math.min(o, h) % 2) {
          const a = c.slice(1, -1);
          return {
            type: "em",
            raw: c,
            text: a,
            tokens: this.lexer.inlineTokens(a)
          };
        }
        const n = c.slice(2, -2);
        return {
          type: "strong",
          raw: c,
          text: n,
          tokens: this.lexer.inlineTokens(n)
        };
      }
    }
  }
  codespan(t) {
    const e = this.rules.inline.code.exec(t);
    if (e) {
      let i = e[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(i), s = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return r && s && (i = i.substring(1, i.length - 1)), {
        type: "codespan",
        raw: e[0],
        text: i
      };
    }
  }
  br(t) {
    const e = this.rules.inline.br.exec(t);
    if (e)
      return {
        type: "br",
        raw: e[0]
      };
  }
  del(t) {
    const e = this.rules.inline.del.exec(t);
    if (e)
      return {
        type: "del",
        raw: e[0],
        text: e[2],
        tokens: this.lexer.inlineTokens(e[2])
      };
  }
  autolink(t) {
    const e = this.rules.inline.autolink.exec(t);
    if (e) {
      let i, r;
      return e[2] === "@" ? (i = e[1], r = "mailto:" + i) : (i = e[1], r = i), {
        type: "link",
        raw: e[0],
        text: i,
        href: r,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  url(t) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let i, r;
      if (e[2] === "@")
        i = e[0], r = "mailto:" + i;
      else {
        let s;
        do
          s = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (s !== e[0]);
        i = e[0], e[1] === "www." ? r = "http://" + e[0] : r = e[0];
      }
      return {
        type: "link",
        raw: e[0],
        text: i,
        href: r,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  inlineText(t) {
    const e = this.rules.inline.text.exec(t);
    if (e) {
      const i = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: e[0],
        text: e[0],
        escaped: i
      };
    }
  }
}, Z = class Ie {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || X, this.options.tokenizer = this.options.tokenizer || new ke(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const i = {
      other: I,
      block: me.normal,
      inline: ie.normal
    };
    this.options.pedantic ? (i.block = me.pedantic, i.inline = ie.pedantic) : this.options.gfm && (i.block = me.gfm, this.options.breaks ? i.inline = ie.breaks : i.inline = ie.gfm), this.tokenizer.rules = i;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: me,
      inline: ie
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, i) {
    return new Ie(i).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, i) {
    return new Ie(i).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(I.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const r = this.inlineQueue[i];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, i = [], r = !1) {
    for (this.options.pedantic && (e = e.replace(I.tabCharGlobal, "    ").replace(I.spaceLine, "")); e; ) {
      let s;
      if (this.options.extensions?.block?.some((l) => (s = l.call({ lexer: this }, e, i)) ? (e = e.substring(s.raw.length), i.push(s), !0) : !1))
        continue;
      if (s = this.tokenizer.space(e)) {
        e = e.substring(s.raw.length);
        const l = i.at(-1);
        s.raw.length === 1 && l !== void 0 ? l.raw += `
` : i.push(s);
        continue;
      }
      if (s = this.tokenizer.code(e)) {
        e = e.substring(s.raw.length);
        const l = i.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += `
` + s.raw, l.text += `
` + s.text, this.inlineQueue.at(-1).src = l.text) : i.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(e)) {
        e = e.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(e)) {
        e = e.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(e)) {
        e = e.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(e)) {
        e = e.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.list(e)) {
        e = e.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.html(e)) {
        e = e.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.def(e)) {
        e = e.substring(s.raw.length);
        const l = i.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += `
` + s.raw, l.text += `
` + s.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
          href: s.href,
          title: s.title
        });
        continue;
      }
      if (s = this.tokenizer.table(e)) {
        e = e.substring(s.raw.length), i.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(e)) {
        e = e.substring(s.raw.length), i.push(s);
        continue;
      }
      let o = e;
      if (this.options.extensions?.startBlock) {
        let l = 1 / 0;
        const h = e.slice(1);
        let m;
        this.options.extensions.startBlock.forEach((u) => {
          m = u.call({ lexer: this }, h), typeof m == "number" && m >= 0 && (l = Math.min(l, m));
        }), l < 1 / 0 && l >= 0 && (o = e.substring(0, l + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(o))) {
        const l = i.at(-1);
        r && l?.type === "paragraph" ? (l.raw += `
` + s.raw, l.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : i.push(s), r = o.length !== e.length, e = e.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(e)) {
        e = e.substring(s.raw.length);
        const l = i.at(-1);
        l?.type === "text" ? (l.raw += `
` + s.raw, l.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : i.push(s);
        continue;
      }
      if (e) {
        const l = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(l);
          break;
        } else
          throw new Error(l);
      }
    }
    return this.state.top = !0, i;
  }
  inline(e, i = []) {
    return this.inlineQueue.push({ src: e, tokens: i }), i;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, i = []) {
    let r = e, s = null;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          h.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, s.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let o = !1, l = "";
    for (; e; ) {
      o || (l = ""), o = !1;
      let h;
      if (this.options.extensions?.inline?.some((u) => (h = u.call({ lexer: this }, e, i)) ? (e = e.substring(h.raw.length), i.push(h), !0) : !1))
        continue;
      if (h = this.tokenizer.escape(e)) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      if (h = this.tokenizer.tag(e)) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      if (h = this.tokenizer.link(e)) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      if (h = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(h.raw.length);
        const u = i.at(-1);
        h.type === "text" && u?.type === "text" ? (u.raw += h.raw, u.text += h.text) : i.push(h);
        continue;
      }
      if (h = this.tokenizer.emStrong(e, r, l)) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      if (h = this.tokenizer.codespan(e)) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      if (h = this.tokenizer.br(e)) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      if (h = this.tokenizer.del(e)) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      if (h = this.tokenizer.autolink(e)) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      if (!this.state.inLink && (h = this.tokenizer.url(e))) {
        e = e.substring(h.raw.length), i.push(h);
        continue;
      }
      let m = e;
      if (this.options.extensions?.startInline) {
        let u = 1 / 0;
        const k = e.slice(1);
        let b;
        this.options.extensions.startInline.forEach((c) => {
          b = c.call({ lexer: this }, k), typeof b == "number" && b >= 0 && (u = Math.min(u, b));
        }), u < 1 / 0 && u >= 0 && (m = e.substring(0, u + 1));
      }
      if (h = this.tokenizer.inlineText(m)) {
        e = e.substring(h.raw.length), h.raw.slice(-1) !== "_" && (l = h.raw.slice(-1)), o = !0;
        const u = i.at(-1);
        u?.type === "text" ? (u.raw += h.raw, u.text += h.text) : i.push(h);
        continue;
      }
      if (e) {
        const u = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else
          throw new Error(u);
      }
    }
    return i;
  }
}, be = class {
  options;
  parser;
  // set by the parser
  constructor(t) {
    this.options = t || X;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: e, escaped: i }) {
    const r = (e || "").match(I.notSpaceStart)?.[0], s = t.replace(I.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + V(r) + '">' + (i ? s : V(s, !0)) + `</code></pre>
` : "<pre><code>" + (i ? s : V(s, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: e }) {
    return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    const e = t.ordered, i = t.start;
    let r = "";
    for (let l = 0; l < t.items.length; l++) {
      const h = t.items[l];
      r += this.listitem(h);
    }
    const s = e ? "ol" : "ul", o = e && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + s + o + `>
` + r + "</" + s + `>
`;
  }
  listitem(t) {
    let e = "";
    if (t.task) {
      const i = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + V(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: i + " ",
        text: i + " ",
        escaped: !0
      }) : e += i + " ";
    }
    return e += this.parser.parse(t.tokens, !!t.loose), `<li>${e}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let e = "", i = "";
    for (let s = 0; s < t.header.length; s++)
      i += this.tablecell(t.header[s]);
    e += this.tablerow({ text: i });
    let r = "";
    for (let s = 0; s < t.rows.length; s++) {
      const o = t.rows[s];
      i = "";
      for (let l = 0; l < o.length; l++)
        i += this.tablecell(o[l]);
      r += this.tablerow({ text: i });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const e = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + e + `</${i}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${V(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: e, tokens: i }) {
    const r = this.parser.parseInline(i), s = at(t);
    if (s === null)
      return r;
    t = s;
    let o = '<a href="' + t + '"';
    return e && (o += ' title="' + V(e) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: t, title: e, text: i, tokens: r }) {
    r && (i = this.parser.parseInline(r, this.parser.textRenderer));
    const s = at(t);
    if (s === null)
      return V(i);
    t = s;
    let o = `<img src="${t}" alt="${i}"`;
    return e && (o += ` title="${V(e)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : V(t.text);
  }
}, Ue = class {
  // no need for block level renderers
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, W = class De {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || X, this.options.renderer = this.options.renderer || new be(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ue();
  }
  /**
   * Static Parse Method
   */
  static parse(e, i) {
    return new De(i).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, i) {
    return new De(i).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, i = !0) {
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        const h = o, m = this.options.extensions.renderers[h.type].call({ parser: this }, h);
        if (m !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(h.type)) {
          r += m || "";
          continue;
        }
      }
      const l = o;
      switch (l.type) {
        case "space": {
          r += this.renderer.space(l);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(l);
          continue;
        }
        case "code": {
          r += this.renderer.code(l);
          continue;
        }
        case "table": {
          r += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          r += this.renderer.list(l);
          continue;
        }
        case "html": {
          r += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let h = l, m = this.renderer.text(h);
          for (; s + 1 < e.length && e[s + 1].type === "text"; )
            h = e[++s], m += `
` + this.renderer.text(h);
          i ? r += this.renderer.paragraph({
            type: "paragraph",
            raw: m,
            text: m,
            tokens: [{ type: "text", raw: m, text: m, escaped: !0 }]
          }) : r += m;
          continue;
        }
        default: {
          const h = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(h), "";
          throw new Error(h);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, i = this.renderer) {
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        const h = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (h !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          r += h || "";
          continue;
        }
      }
      const l = o;
      switch (l.type) {
        case "escape": {
          r += i.text(l);
          break;
        }
        case "html": {
          r += i.html(l);
          break;
        }
        case "link": {
          r += i.link(l);
          break;
        }
        case "image": {
          r += i.image(l);
          break;
        }
        case "strong": {
          r += i.strong(l);
          break;
        }
        case "em": {
          r += i.em(l);
          break;
        }
        case "codespan": {
          r += i.codespan(l);
          break;
        }
        case "br": {
          r += i.br(l);
          break;
        }
        case "del": {
          r += i.del(l);
          break;
        }
        case "text": {
          r += i.text(l);
          break;
        }
        default: {
          const h = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(h), "";
          throw new Error(h);
        }
      }
    }
    return r;
  }
}, ge = class {
  options;
  block;
  constructor(t) {
    this.options = t || X;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? Z.lex : Z.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? W.parse : W.parseInline;
  }
}, Fs = class {
  defaults = Oe();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = W;
  Renderer = be;
  TextRenderer = Ue;
  Lexer = Z;
  Tokenizer = ke;
  Hooks = ge;
  constructor(...t) {
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, e) {
    let i = [];
    for (const r of t)
      switch (i = i.concat(e.call(this, r)), r.type) {
        case "table": {
          const s = r;
          for (const o of s.header)
            i = i.concat(this.walkTokens(o.tokens, e));
          for (const o of s.rows)
            for (const l of o)
              i = i.concat(this.walkTokens(l.tokens, e));
          break;
        }
        case "list": {
          const s = r;
          i = i.concat(this.walkTokens(s.items, e));
          break;
        }
        default: {
          const s = r;
          this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
            const l = s[o].flat(1 / 0);
            i = i.concat(this.walkTokens(l, e));
          }) : s.tokens && (i = i.concat(this.walkTokens(s.tokens, e)));
        }
      }
    return i;
  }
  use(...t) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      const r = { ...i };
      if (r.async = this.defaults.async || r.async || !1, i.extensions && (i.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          const o = e.renderers[s.name];
          o ? e.renderers[s.name] = function(...l) {
            let h = s.renderer.apply(this, l);
            return h === !1 && (h = o.apply(this, l)), h;
          } : e.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = e[s.level];
          o ? o.unshift(s.tokenizer) : e[s.level] = [s.tokenizer], s.start && (s.level === "block" ? e.startBlock ? e.startBlock.push(s.start) : e.startBlock = [s.start] : s.level === "inline" && (e.startInline ? e.startInline.push(s.start) : e.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (e.childTokens[s.name] = s.childTokens);
      }), r.extensions = e), i.renderer) {
        const s = this.defaults.renderer || new be(this.defaults);
        for (const o in i.renderer) {
          if (!(o in s))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const l = o, h = i.renderer[l], m = s[l];
          s[l] = (...u) => {
            let k = h.apply(s, u);
            return k === !1 && (k = m.apply(s, u)), k || "";
          };
        }
        r.renderer = s;
      }
      if (i.tokenizer) {
        const s = this.defaults.tokenizer || new ke(this.defaults);
        for (const o in i.tokenizer) {
          if (!(o in s))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const l = o, h = i.tokenizer[l], m = s[l];
          s[l] = (...u) => {
            let k = h.apply(s, u);
            return k === !1 && (k = m.apply(s, u)), k;
          };
        }
        r.tokenizer = s;
      }
      if (i.hooks) {
        const s = this.defaults.hooks || new ge();
        for (const o in i.hooks) {
          if (!(o in s))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const l = o, h = i.hooks[l], m = s[l];
          ge.passThroughHooks.has(o) ? s[l] = (u) => {
            if (this.defaults.async)
              return Promise.resolve(h.call(s, u)).then((b) => m.call(s, b));
            const k = h.call(s, u);
            return m.call(s, k);
          } : s[l] = (...u) => {
            let k = h.apply(s, u);
            return k === !1 && (k = m.apply(s, u)), k;
          };
        }
        r.hooks = s;
      }
      if (i.walkTokens) {
        const s = this.defaults.walkTokens, o = i.walkTokens;
        r.walkTokens = function(l) {
          let h = [];
          return h.push(o.call(this, l)), s && (h = h.concat(s.call(this, l))), h;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return Z.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return W.parse(t, e ?? this.defaults);
  }
  parseMarkdown(t) {
    return (i, r) => {
      const s = { ...r }, o = { ...this.defaults, ...s }, l = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && s.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof i > "u" || i === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof i != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = t);
      const h = o.hooks ? o.hooks.provideLexer() : t ? Z.lex : Z.lexInline, m = o.hooks ? o.hooks.provideParser() : t ? W.parse : W.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(i) : i).then((u) => h(u, o)).then((u) => o.hooks ? o.hooks.processAllTokens(u) : u).then((u) => o.walkTokens ? Promise.all(this.walkTokens(u, o.walkTokens)).then(() => u) : u).then((u) => m(u, o)).then((u) => o.hooks ? o.hooks.postprocess(u) : u).catch(l);
      try {
        o.hooks && (i = o.hooks.preprocess(i));
        let u = h(i, o);
        o.hooks && (u = o.hooks.processAllTokens(u)), o.walkTokens && this.walkTokens(u, o.walkTokens);
        let k = m(u, o);
        return o.hooks && (k = o.hooks.postprocess(k)), k;
      } catch (u) {
        return l(u);
      }
    };
  }
  onError(t, e) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const r = "<p>An error occurred:</p><pre>" + V(i.message + "", !0) + "</pre>";
        return e ? Promise.resolve(r) : r;
      }
      if (e)
        return Promise.reject(i);
      throw i;
    };
  }
}, U = new Fs();
function R(t, e) {
  return U.parse(t, e);
}
R.options = R.setOptions = function(t) {
  return U.setOptions(t), R.defaults = U.defaults, vt(R.defaults), R;
};
R.getDefaults = Oe;
R.defaults = X;
R.use = function(...t) {
  return U.use(...t), R.defaults = U.defaults, vt(R.defaults), R;
};
R.walkTokens = function(t, e) {
  return U.walkTokens(t, e);
};
R.parseInline = U.parseInline;
R.Parser = W;
R.parser = W.parse;
R.Renderer = be;
R.TextRenderer = Ue;
R.Lexer = Z;
R.lexer = Z.lex;
R.Tokenizer = ke;
R.Hooks = ge;
R.parse = R;
R.options;
R.setOptions;
R.use;
R.walkTokens;
R.parseInline;
W.parse;
Z.lex;
const qs = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function js(t) {
  let e;
  for (; (e = qs.exec(t)) !== null; ) {
    const { dateStr: i } = e.groups;
    t = t.replaceAll(
      e[0],
      new Date(i).toLocaleDateString()
    );
  }
  return t;
}
function Zs(t) {
  return t = js(t), R.parse(t);
}
const Ws = (t) => {
  const {
    entry: e
  } = t;
  let i;
  switch (e.severity) {
    case "info":
    case "success":
      i = /* @__PURE__ */ g.createElement(Xe, null);
      break;
    case "warning":
      i = /* @__PURE__ */ g.createElement(Vt, null);
      break;
    case "error":
      i = /* @__PURE__ */ g.createElement(Bt, null);
      break;
    default:
      i = /* @__PURE__ */ g.createElement(Xe, null);
  }
  let r = e.message;
  return Array.isArray(r) || (r = [r]), /* @__PURE__ */ g.createElement("div", { className: B("entry", e.severity, e.category) }, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("span", { className: "icon" }, i), /* @__PURE__ */ g.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), r.map((s) => /* @__PURE__ */ g.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: Zs(s) }
    }
  )));
}, Gs = (t) => {
  let e;
  const {
    messages: i = []
  } = t;
  return !Array.isArray(i) || i.length > 0 && typeof i[0] != "object" ? e = /* @__PURE__ */ g.createElement(Ye, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : i.length === 0 ? e = /* @__PURE__ */ g.createElement(Ye, { variant: "secondary" }, "There are currently no message") : e = /* @__PURE__ */ g.createElement("div", { className: "messages" }, i.map((r) => /* @__PURE__ */ g.createElement(Ws, { entry: r }))), e;
}, Ei = (t) => {
  const {
    title: e,
    icon: i,
    children: r
  } = t;
  return /* @__PURE__ */ g.createElement(O, { ...t }, /* @__PURE__ */ g.createElement(O.Header, null, /* @__PURE__ */ g.createElement(O.Title, null, /* @__PURE__ */ g.createElement("span", null, i), /* @__PURE__ */ g.createElement("span", null, e))), /* @__PURE__ */ g.createElement(O.Body, null, /* @__PURE__ */ g.createElement(Gs, { ...t })), /* @__PURE__ */ g.createElement(O.Footer, null, r));
}, Ci = (t) => {
  const {
    show: e,
    onHide: i,
    onConfirm: r,
    title: s,
    message: o
  } = t;
  return /* @__PURE__ */ g.createElement(
    O,
    {
      show: e,
      size: "sm",
      onHide: i
    },
    /* @__PURE__ */ g.createElement(O.Header, { closeButton: !0 }, /* @__PURE__ */ g.createElement(O.Title, null, /* @__PURE__ */ g.createElement(Ot, null), /* @__PURE__ */ g.createElement("span", { className: "" }, s))),
    /* @__PURE__ */ g.createElement(O.Body, null, /* @__PURE__ */ g.createElement("p", { className: "ellipsis" }, o)),
    /* @__PURE__ */ g.createElement(O.Footer, null, /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "secondary",
        onClick: i
      },
      "Cancel"
    ), /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "danger",
        onClick: () => {
          r(), i();
        }
      },
      "Proceed"
    ))
  );
}, He = (t) => {
  const {
    children: e
  } = t;
  return /* @__PURE__ */ g.createElement("div", { className: B("decorated-container") }, e);
};
He.Decoration = (t) => {
  const {
    positionH: e = "top",
    positionV: i = "right",
    anchorH: r = "center",
    anchorV: s = "center",
    direction: o = "column",
    children: l,
    ...h
  } = t;
  return /* @__PURE__ */ g.createElement("div", { className: B(
    "decoration",
    `positionH-${e}`,
    `positionV-${i}`,
    `anchorH-${r}`,
    `anchorV-${s}`,
    `direction-${o}`
  ) }, /* @__PURE__ */ g.createElement(
    "div",
    {
      className: "wrapper",
      ...h
    },
    l
  ));
};
const Qs = mt((t, e) => {
  let {
    expanded: i,
    setExpanded: r,
    canPin: s = !0,
    canClose: o = !0,
    onClose: l = oe,
    pinned: h,
    setPinned: m,
    className: u,
    pin: k = {},
    children: b
  } = t;
  G(!1);
  const c = [];
  return k = {
    direction: "row",
    positionH: "right",
    anchorH: "right",
    anchorV: "center",
    positionV: "top",
    ...k
  }, s && c.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn btn-light btn-round",
        onClick: (n) => {
          n.stopPropagation(), m(!h);
        }
      },
      h ? /* @__PURE__ */ g.createElement(Ft, null) : /* @__PURE__ */ g.createElement(qt, null)
    )
  ), o && c.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn btn-light btn-round",
        onClick: (n) => {
          n.stopPropagation(), l();
        }
      },
      /* @__PURE__ */ g.createElement(jt, null)
    )
  ), /* @__PURE__ */ g.createElement(
    ns,
    {
      ...t,
      className: B(u, {
        pinnable: s,
        closable: o
      }),
      expanded: i || h,
      onExpand: r,
      ref: e
    },
    /* @__PURE__ */ g.createElement(He, null, /* @__PURE__ */ g.createElement(He.Decoration, { ...k }, c), b)
  );
}), $i = (t) => {
  const {
    progress: e,
    label: i
  } = t;
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: B(
        "progress-container",
        "animate__slower",
        "animate__animated",
        {
          animate__fadeOut: e >= 100 || e <= 0
        }
      )
    },
    /* @__PURE__ */ g.createElement("div", { className: "progress-label" }, i),
    /* @__PURE__ */ g.createElement(Zt, { now: e })
  );
};
function ct(t) {
  const {
    onEvent: e,
    enabled: i = !0,
    style: r = {},
    delay: s,
    ...o
  } = t, { onMouseEnter: l, onMouseLeave: h } = Ut(
    {
      onEvent: e,
      interval: s,
      enabled: i
    }
  );
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      onMouseEnter: l,
      onMouseLeave: h,
      ...o,
      style: {
        ...r,
        display: i ? "block" : "none"
      }
    }
  );
}
let Us = 0;
const Ti = (t) => {
  const [e, i] = G(null), r = F(window), [s, o] = G(() => Us++), {
    name: l = "",
    options: h = "",
    notifications: m
  } = t;
  function u() {
    t.onClose();
  }
  return H(() => {
    const k = document.createElement("div");
    i(k);
  }, []), H(() => {
    function k() {
      if (process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Opening the admin control panel"), t.popup ? r.current = window.open(
        t.url ?? "",
        l,
        "popup"
        // `popup,width=${width},height=${height},top=${top},left=${left}`
      ) : r.current = window.open(
        t.url ?? "",
        "_blank",
        h
      ), !r.current) {
        m.error(
          `Unable to open ${t.name}. Is your browser preventing popups ?`,
          "Failed opening new window",
          1e4
        ), t.onBlocked();
        return;
      }
      r.current.document.close(), r.current.addEventListener("beforeunload", u), r.current.document.body.appendChild(e), Array.from(document.head.querySelectorAll('style,link[rel="stylesheet"]')).forEach((n) => {
        r.current.document.head.appendChild(
          n.cloneNode(!0)
        );
      });
      const b = () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), c.removeEventListener("beforeunload", u), c.close();
      };
      window.addEventListener("beforeunload", b);
      const c = r.current;
      return () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), window.removeEventListener("beforeunload", b), c.close();
      };
    }
    if (e)
      return k();
  }, [e]), e && zt(t.children, e);
}, Li = ({
  min: t,
  max: e,
  ticks: i,
  value: r,
  onChange: s,
  formatter: o = (k) => k,
  className: l = "",
  tooltip_position: h,
  orientation: m = "vertical",
  disabled: u = !1
}) => {
  const k = F(), b = Array.isArray(r), c = Xt();
  function n(d, v) {
    return () => {
      const {
        min: y,
        max: _
      } = k.current.rangeLimits;
      let x = [
        _ - k.current.value.max,
        _ - k.current.value.min
      ];
      return x[v] += d, x[v] = Math.min(_, x[v]), x[v] = Math.max(y, x[v]), s(b ? x : x[v]), !1;
    };
  }
  function a(d) {
    const v = -Math.sign(d.deltaY), {
      min: y,
      max: _
    } = k.current.rangeLimits;
    let x = [
      _ - k.current.value.max,
      _ - k.current.value.min
    ];
    x[1] += v, x[1] = Math.max(y, x[1]), x[1] = Math.min(_, x[1]), s(b ? [
      x[0],
      x[1]
    ] : x[1]), d.stopPropagation();
  }
  if (k.current)
    if (b) {
      let d = k.current.index;
      k.current.thumb[0].current.setAttribute("data-value", o(r[d.max])), k.current.thumb[1].current.setAttribute("data-value", o(r[d.min]));
    } else
      k.current.thumb[0].current.setAttribute("data-value", o(r));
  else
    c();
  const p = /* @__PURE__ */ g.createElement(
    Yt,
    {
      ref: k,
      onInput: (d) => s(b ? [e - d[1], e - d[0]] : e - d[0]),
      value: b ? [e - r[1], e - r[0]] : [e - r, e],
      step: 1,
      max: e,
      min: t,
      disabled: u,
      thumbsDisabled: [!1, !b],
      orientation: m
    }
  );
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: B(
        l,
        "slider",
        `slider-${m}`,
        {
          dual: b,
          disabled: u
        }
      ),
      onWheel: a
    },
    /* @__PURE__ */ g.createElement(st, { className: "max-btns" }, /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "secondary",
        className: "plus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(1, 1)
      },
      /* @__PURE__ */ g.createElement(Ke, null)
    ), /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "secondary",
        className: "minus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(-1, 1)
      },
      /* @__PURE__ */ g.createElement(Je, null)
    )),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (d) => d.stopPropagation()
      },
      p
    ),
    b ? /* @__PURE__ */ g.createElement(st, { className: "min-btns" }, /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "secondary",
        className: "plus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(1, 0)
      },
      /* @__PURE__ */ g.createElement(Ke, null)
    ), /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "secondary",
        className: "minus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(-1, 0)
      },
      /* @__PURE__ */ g.createElement(Je, null)
    )) : null
  );
}, Si = (t) => {
  const {
    id: e
  } = t, { hideAll: i } = es({
    id: "file-ctx-menu"
  }), [r, s] = G(!1);
  function o(h) {
    h.key === "Escape" && i();
  }
  H(() => {
    if (r)
      return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [r]);
  function l(h) {
    const {
      elem: m,
      name: u,
      value: k,
      index: b
    } = h;
  }
  return /* @__PURE__ */ g.createElement(
    ts,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: s
    },
    /* @__PURE__ */ g.createElement(
      it,
      {
        hidden: ({ props: h }) => !h.field.canCopy,
        onMouseDown: (h) => {
          h.stopPropagation(), h.stopImmediatePropagation();
        },
        onClick: l,
        id: "copy"
      },
      "Copy"
    ),
    /* @__PURE__ */ g.createElement(it, { id: "cut" }, "Cut")
  );
}, Ai = (t) => {
  const {
    target: e,
    onChange: i = () => {
    },
    onAccept: r = () => {
    },
    onAbort: s = () => {
    },
    disabled: o,
    name: l,
    label: h,
    type: m = "text",
    required: u = !1
  } = t;
  function k(n) {
    e[l] = n.target.value, r(e[l], { target: e, name: l });
  }
  function b(n) {
    e[l] = n.target.value, i(e[l], { target: e, name: l });
  }
  function c(n) {
    e[l] = n.target.value, s(e[l], { target: e, name: l });
  }
  return /* @__PURE__ */ React.createElement(et.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(et.Label, { className: "text-secondary small", htmlFor: l }, h), /* @__PURE__ */ React.createElement(
    Wt,
    {
      id: l,
      type: m,
      disabled: o,
      value: e[l] ?? "",
      name: l,
      onChange: b,
      required: u,
      onKeyDown: (n) => {
        n.key === "Enter" ? k(n) : n.key === "Escape" && c(n);
      }
    }
  ));
}, Pi = (t) => {
  const {
    canPin: e = !1,
    canClose: i = !1,
    onClose: r,
    value: s,
    onExpand: o = oe,
    pinned: l = !1,
    setPinned: h = oe,
    group: m = "global",
    collapsible: u = !0,
    visible: k = !0
  } = t, [b, c] = Kt(m), n = b === s;
  return k ? /* @__PURE__ */ g.createElement(
    Qs,
    {
      ...t,
      pinned: l,
      onClose: r,
      setPinned: h,
      expanded: n || !u,
      setExpanded: (a) => {
        o(a), c(a ? s : null);
      },
      canPin: e,
      canClose: i
    },
    t.children
  ) : null;
};
function Xs(t) {
  return Array.isArray(t) ? t : Object.entries(t).map(([e, i]) => ({ value: isNaN(+e) ? e : +e, label: String(i) }));
}
function Ri(t) {
  const {
    value: e,
    options: i,
    onChange: r,
    disabled: s,
    placeholder: o = "Select…",
    className: l
  } = t, h = gt(() => Xs(i), [i]), m = h.find((u) => u.value === e);
  return /* @__PURE__ */ g.createElement(tt, null, /* @__PURE__ */ g.createElement(
    tt.Toggle,
    {
      disabled: s,
      onMouseDown: (u) => u.stopPropagation()
    },
    m ? m.label : o
  ), /* @__PURE__ */ g.createElement(Gt, null, h.map((u) => /* @__PURE__ */ g.createElement(
    Qt,
    {
      key: String(u.value),
      onClick: () => r(u.value),
      "aria-disabled": u.disabled
    },
    u.label
  ))));
}
var Pe = { exports: {} };
/*! =======================================================
                      VERSION  11.0.2              
========================================================= */
var ut;
function Ks() {
  return ut || (ut = 1, (function(t) {
    var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    };
    /*! =========================================================
     * bootstrap-slider.js
     *
     * Maintainers:
     *		Kyle Kemp
     *			- Twitter: @seiyria
     *			- Github:  seiyria
     *		Rohit Kalkur
     *			- Twitter: @Rovolutionary
     *			- Github:  rovolution
     *
     * =========================================================
     *
     * bootstrap-slider is released under the MIT License
     * Copyright (c) 2019 Kyle Kemp, Rohit Kalkur, and contributors
     *
     * Permission is hereby granted, free of charge, to any person
     * obtaining a copy of this software and associated documentation
     * files (the "Software"), to deal in the Software without
     * restriction, including without limitation the rights to use,
     * copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the
     * Software is furnished to do so, subject to the following
     * conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
     * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
     * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
     * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
     * OTHER DEALINGS IN THE SOFTWARE.
     *
     * ========================================================= */
    var i = (typeof window > "u" ? "undefined" : e(window)) === "object";
    (function(r) {
      if (e(t) === "object" && t.exports) {
        var s;
        try {
          s = require("jquery");
        } catch {
          s = null;
        }
        t.exports = r(s);
      } else window && (window.Slider = r(window.jQuery));
    })(function(r) {
      var s = "slider", o = "bootstrapSlider";
      i && !window.console && (window.console = {}), i && !window.console.log && (window.console.log = function() {
      }), i && !window.console.warn && (window.console.warn = function() {
      });
      var l;
      return (function(h) {
        var m = Array.prototype.slice;
        function u() {
        }
        function k(b) {
          if (!b)
            return;
          function c(p) {
            p.prototype.option || (p.prototype.option = function(d) {
              b.isPlainObject(d) && (this.options = b.extend(!0, this.options, d));
            });
          }
          var n = typeof console > "u" ? u : function(p) {
            console.error(p);
          };
          function a(p, d) {
            b.fn[p] = function(v) {
              if (typeof v == "string") {
                for (var y = m.call(arguments, 1), _ = 0, x = this.length; _ < x; _++) {
                  var S = this[_], T = b.data(S, p);
                  if (!T) {
                    n("cannot call methods on " + p + " prior to initialization; attempted to call '" + v + "'");
                    continue;
                  }
                  if (!b.isFunction(T[v]) || v.charAt(0) === "_") {
                    n("no such method '" + v + "' for " + p + " instance");
                    continue;
                  }
                  var E = T[v].apply(T, y);
                  if (E !== void 0 && E !== T)
                    return E;
                }
                return this;
              } else {
                var w = this.map(function() {
                  var f = b.data(this, p);
                  return f ? (f.option(v), f._init()) : (f = new d(this, v), b.data(this, p, f)), b(this);
                });
                return w.length === 1 ? w[0] : w;
              }
            };
          }
          return b.bridget = function(p, d) {
            c(d), a(p, d);
          }, b.bridget;
        }
        k(h);
      })(r), (function(h) {
        var m = void 0, u = {
          formatInvalidInputErrorMsg: function(n) {
            return "Invalid input value '" + n + "' passed in";
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, k = {
          linear: {
            getValue: function(n, a) {
              return n < a.min ? a.min : n > a.max ? a.max : n;
            },
            toValue: function(n) {
              var a = n / 100 * (this.options.max - this.options.min), p = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var d, v, y, _ = 0, x = 1; x < this.options.ticks_positions.length; x++)
                  if (n <= this.options.ticks_positions[x]) {
                    d = this.options.ticks[x - 1], y = this.options.ticks_positions[x - 1], v = this.options.ticks[x], _ = this.options.ticks_positions[x];
                    break;
                  }
                var S = (n - y) / (_ - y);
                a = d + S * (v - d), p = !1;
              }
              var T = p ? this.options.min : 0, E = T + Math.round(a / this.options.step) * this.options.step;
              return k.linear.getValue(E, this.options);
            },
            toPercentage: function(n) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var a, p, d, v = 0, y = 0; y < this.options.ticks.length; y++)
                  if (n <= this.options.ticks[y]) {
                    a = y > 0 ? this.options.ticks[y - 1] : 0, d = y > 0 ? this.options.ticks_positions[y - 1] : 0, p = this.options.ticks[y], v = this.options.ticks_positions[y];
                    break;
                  }
                if (y > 0) {
                  var _ = (n - a) / (p - a);
                  return d + _ * (v - d);
                }
              }
              return 100 * (n - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(n) {
              var a = 1 - this.options.min, p = Math.log(this.options.min + a), d = Math.log(this.options.max + a), v = Math.exp(p + (d - p) * n / 100) - a;
              return Math.round(v) === d ? d : (v = this.options.min + Math.round((v - this.options.min) / this.options.step) * this.options.step, k.linear.getValue(v, this.options));
            },
            toPercentage: function(n) {
              if (this.options.max === this.options.min)
                return 0;
              var a = 1 - this.options.min, p = Math.log(this.options.max + a), d = Math.log(this.options.min + a), v = Math.log(n + a);
              return 100 * (v - d) / (p - d);
            }
          }
        };
        l = function(n, a) {
          return b.call(this, n, a), this;
        };
        function b(c, n) {
          this._state = {
            value: null,
            enabled: null,
            offset: null,
            size: null,
            percentage: null,
            inDrag: !1,
            over: !1,
            tickIndex: null
          }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, typeof c == "string" ? this.element = document.querySelector(c) : c instanceof HTMLElement && (this.element = c), n = n || {};
          for (var a = Object.keys(this.defaultOptions), p = n.hasOwnProperty("min"), d = n.hasOwnProperty("max"), v = 0; v < a.length; v++) {
            var y = a[v], _ = n[y];
            _ = typeof _ < "u" ? _ : S(this.element, y), _ = _ !== null ? _ : this.defaultOptions[y], this.options || (this.options = {}), this.options[y] = _;
          }
          if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), this.options.rtl === "auto") {
            var x = window.getComputedStyle(this.element);
            x != null ? this.options.rtl = x.direction === "rtl" : this.options.rtl = this.element.style.direction === "rtl";
          }
          this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom") ? this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right" : this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right") && (this.options.tooltip_position = "top");
          function S(z, de) {
            var fe = "data-slider-" + de.replace(/_/g, "-"), se = z.getAttribute(fe);
            try {
              return JSON.parse(se);
            } catch {
              return se;
            }
          }
          var T = this.element.style.width, E = !1, w = this.element.parentNode, f, L, N, C, $;
          if (this.sliderElem)
            E = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var A = document.createElement("div");
            A.className = "slider-track", L = document.createElement("div"), L.className = "slider-track-low", f = document.createElement("div"), f.className = "slider-selection", N = document.createElement("div"), N.className = "slider-track-high", C = document.createElement("div"), C.className = "slider-handle min-slider-handle", C.setAttribute("role", "slider"), C.setAttribute("aria-valuemin", this.options.min), C.setAttribute("aria-valuemax", this.options.max), $ = document.createElement("div"), $.className = "slider-handle max-slider-handle", $.setAttribute("role", "slider"), $.setAttribute("aria-valuemin", this.options.min), $.setAttribute("aria-valuemax", this.options.max), A.appendChild(L), A.appendChild(f), A.appendChild(N), this.rangeHighlightElements = [];
            var M = this.options.rangeHighlights;
            if (Array.isArray(M) && M.length > 0)
              for (var K = 0; K < M.length; K++) {
                var D = document.createElement("div"), q = M[K].class || "";
                D.className = "slider-rangeHighlight slider-selection " + q, this.rangeHighlightElements.push(D), A.appendChild(D);
              }
            var te = Array.isArray(this.options.labelledby);
            if (te && this.options.labelledby[0] && C.setAttribute("aria-labelledby", this.options.labelledby[0]), te && this.options.labelledby[1] && $.setAttribute("aria-labelledby", this.options.labelledby[1]), !te && this.options.labelledby && (C.setAttribute("aria-labelledby", this.options.labelledby), $.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", v = 0; v < this.options.ticks.length; v++) {
                var Q = document.createElement("div");
                if (Q.className = "slider-tick", this.options.ticks_tooltip) {
                  var J = this._addTickListener(), Lt = J.addMouseEnter(this, Q, v), St = J.addMouseLeave(this, Q);
                  this.ticksCallbackMap[v] = {
                    mouseEnter: Lt,
                    mouseLeave: St
                  };
                }
                this.ticks.push(Q), this.ticksContainer.appendChild(Q);
              }
              f.className += " tick-slider-selection";
            }
            if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
              for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", v = 0; v < this.options.ticks_labels.length; v++) {
                var le = document.createElement("div"), At = this.options.ticks_positions.length === 0, Pt = this.options.reversed && At ? this.options.ticks_labels.length - (v + 1) : v;
                le.className = "slider-tick-label", le.innerHTML = this.options.ticks_labels[Pt], this.tickLabels.push(le), this.tickLabelContainer.appendChild(le);
              }
            var we = function(de) {
              var fe = document.createElement("div");
              fe.className = "arrow";
              var se = document.createElement("div");
              se.className = "tooltip-inner", de.appendChild(fe), de.appendChild(se);
            }, he = document.createElement("div");
            he.className = "tooltip tooltip-main", he.setAttribute("role", "presentation"), we(he);
            var ce = document.createElement("div");
            ce.className = "tooltip tooltip-min", ce.setAttribute("role", "presentation"), we(ce);
            var ue = document.createElement("div");
            ue.className = "tooltip tooltip-max", ue.setAttribute("role", "presentation"), we(ue), this.sliderElem.appendChild(A), this.sliderElem.appendChild(he), this.sliderElem.appendChild(ce), this.sliderElem.appendChild(ue), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(C), this.sliderElem.appendChild($), w.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (h && (this.$element = h(this.element), this.$sliderElem = h(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), k[this.options.scale] && (this.options.scale = k[this.options.scale]), E === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(z) {
            this._removeProperty(this.trackLow, z), this._removeProperty(this.trackSelection, z), this._removeProperty(this.trackHigh, z);
          }, this), [this.handle1, this.handle2].forEach(function(z) {
            this._removeProperty(z, "left"), this._removeProperty(z, "right"), this._removeProperty(z, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(z) {
            this._removeProperty(z, "bs-tooltip-left"), this._removeProperty(z, "bs-tooltip-right"), this._removeProperty(z, "bs-tooltip-top"), this._removeClass(z, "bs-tooltip-right"), this._removeClass(z, "bs-tooltip-left"), this._removeClass(z, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = T, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (d || (this.options.max = Math.max.apply(Math, this.options.ticks)), p || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = L || this.trackLow, this.trackSelection = f || this.trackSelection, this.trackHigh = N || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = C || this.handle1, this.handle2 = $ || this.handle2, E === !0)
            for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), v = 0; v < this.ticks.length; v++)
              this._removeClass(this.ticks[v], "round triangle hide");
          var Rt = ["round", "triangle", "custom"], Mt = Rt.indexOf(this.options.handle) !== -1;
          if (Mt)
            for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), v = 0; v < this.ticks.length; v++)
              this._addClass(this.ticks[v], this.options.handle);
          if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), this.options.tooltip === "hide")
            this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");
          else if (this.options.tooltip === "always")
            this._showTooltip(), this._alwaysShowTooltip = !0;
          else {
            if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
              var pe = this._addTickListener(), xe = pe.addMouseEnter(this, this.handle1), Ee = pe.addMouseLeave(this, this.handle1);
              this.handleCallbackMap.handle1 = {
                mouseEnter: xe,
                mouseLeave: Ee
              }, xe = pe.addMouseEnter(this, this.handle2), Ee = pe.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
                mouseEnter: xe,
                mouseLeave: Ee
              };
            } else
              this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.showTooltip, !1), this.sliderElem.addEventListener("touchmove", this.showTooltip, !1), this.sliderElem.addEventListener("touchend", this.hideTooltip, !1));
            this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1), this.touchCapable && (this.handle1.addEventListener("touchstart", this.showTooltip, !1), this.handle1.addEventListener("touchmove", this.showTooltip, !1), this.handle1.addEventListener("touchend", this.hideTooltip, !1), this.handle2.addEventListener("touchstart", this.showTooltip, !1), this.handle2.addEventListener("touchmove", this.showTooltip, !1), this.handle2.addEventListener("touchend", this.hideTooltip, !1));
          }
          this.options.enabled ? this.enable() : this.disable();
        }
        l.prototype = {
          _init: function() {
          },
          // NOTE: Must exist to support bridget
          constructor: l,
          defaultOptions: {
            id: "",
            min: 0,
            max: 10,
            step: 1,
            precision: 0,
            orientation: "horizontal",
            value: 5,
            range: !1,
            selection: "before",
            tooltip: "show",
            tooltip_split: !1,
            lock_to_ticks: !1,
            handle: "round",
            reversed: !1,
            rtl: "auto",
            enabled: !0,
            formatter: function(n) {
              return Array.isArray(n) ? n[0] + " : " + n[1] : n;
            },
            natural_arrow_keys: !1,
            ticks: [],
            ticks_positions: [],
            ticks_labels: [],
            ticks_snap_bounds: 0,
            ticks_tooltip: !1,
            scale: "linear",
            focus: !1,
            tooltip_position: null,
            labelledby: null,
            rangeHighlights: []
          },
          getElement: function() {
            return this.sliderElem;
          },
          getValue: function() {
            return this.options.range ? this._state.value : this._state.value[0];
          },
          setValue: function(n, a, p) {
            n || (n = 0);
            var d = this.getValue();
            this._state.value = this._validateInputValue(n);
            var v = this._applyPrecision.bind(this);
            this.options.range ? (this._state.value[0] = v(this._state.value[0]), this._state.value[1] = v(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = v(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this.options.selection === "after" ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
            var y = this.options.range ? this._state.value : this._state.value[0];
            this._setDataVal(y), a === !0 && this._trigger("slide", y);
            var _ = !1;
            return Array.isArray(y) ? _ = d[0] !== y[0] || d[1] !== y[1] : _ = d !== y, _ && p === !0 && this._trigger("change", {
              oldValue: d,
              newValue: y
            }), this;
          },
          destroy: function() {
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), h && (this._unbindJQueryEventHandlers(), m === s && this.$element.removeData(m), this.$element.removeData(o));
          },
          disable: function() {
            return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this;
          },
          enable: function() {
            return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this;
          },
          toggle: function() {
            return this._state.enabled ? this.disable() : this.enable(), this;
          },
          isEnabled: function() {
            return this._state.enabled;
          },
          on: function(n, a) {
            return this._bindNonQueryEventHandler(n, a), this;
          },
          off: function(n, a) {
            h ? (this.$element.off(n, a), this.$sliderElem.off(n, a)) : this._unbindNonQueryEventHandler(n, a);
          },
          getAttribute: function(n) {
            return n ? this.options[n] : this.options;
          },
          setAttribute: function(n, a) {
            return this.options[n] = a, this;
          },
          refresh: function(n) {
            var a = this.getValue();
            return this._removeSliderEventHandlers(), b.call(this, this.element, this.options), n && n.useCurrentValue === !0 && this.setValue(a), h && (m === s ? (h.data(this.element, s, this), h.data(this.element, o, this)) : h.data(this.element, o, this)), this;
          },
          relayout: function() {
            return this._resize(), this;
          },
          /******************************+
          				HELPERS
          	- Any method that is not part of the public interface.
          - Place it underneath this comment block and write its signature like so:
          		_fnName : function() {...}
          	********************************/
          _removeTooltipListener: function(n, a) {
            this.handle1.removeEventListener(n, a, !1), this.handle2.removeEventListener(n, a, !1);
          },
          _removeSliderEventHandlers: function() {
            if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
              for (var n = this.ticksContainer.getElementsByClassName("slider-tick"), a = 0; a < n.length; a++)
                n[a].removeEventListener("mouseenter", this.ticksCallbackMap[a].mouseEnter, !1), n[a].removeEventListener("mouseleave", this.ticksCallbackMap[a].mouseLeave, !1);
              this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1));
            }
            this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1)), window.removeEventListener("resize", this.resize, !1);
          },
          _bindNonQueryEventHandler: function(n, a) {
            this.eventToCallbackMap[n] === void 0 && (this.eventToCallbackMap[n] = []), this.eventToCallbackMap[n].push(a);
          },
          _unbindNonQueryEventHandler: function(n, a) {
            var p = this.eventToCallbackMap[n];
            if (p !== void 0) {
              for (var d = 0; d < p.length; d++)
                if (p[d] === a) {
                  p.splice(d, 1);
                  break;
                }
            }
          },
          _cleanUpEventCallbacksMap: function() {
            for (var n = Object.keys(this.eventToCallbackMap), a = 0; a < n.length; a++) {
              var p = n[a];
              delete this.eventToCallbackMap[p];
            }
          },
          _showTooltip: function() {
            this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), this.tooltip.style.display = "none"), this._state.over = !0;
          },
          _hideTooltip: function() {
            this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), this._removeClass(this.tooltip_max, "show")), this._state.over = !1;
          },
          _setToolTipOnMouseOver: function(n) {
            var a = this, p = this.options.formatter(n ? n.value[0] : this._state.value[0]), d = n ? v(n, this.options.reversed) : v(this._state, this.options.reversed);
            this._setText(this.tooltipInner, p), this.tooltip.style[this.stylePos] = d[0] + "%";
            function v(y, _) {
              return _ ? [100 - y.percentage[0], a.options.range ? 100 - y.percentage[1] : y.percentage[1]] : [y.percentage[0], y.percentage[1]];
            }
          },
          _copyState: function() {
            return {
              value: [this._state.value[0], this._state.value[1]],
              enabled: this._state.enabled,
              offset: this._state.offset,
              size: this._state.size,
              percentage: [this._state.percentage[0], this._state.percentage[1], this._state.percentage[2]],
              inDrag: this._state.inDrag,
              over: this._state.over,
              // deleted or null'd keys
              dragged: this._state.dragged,
              keyCtrl: this._state.keyCtrl
            };
          },
          _addTickListener: function() {
            return {
              addMouseEnter: function(a, p, d) {
                var v = function() {
                  var _ = a._copyState(), x = p === a.handle1 ? _.value[0] : _.value[1], S = void 0;
                  d !== void 0 ? (x = a.options.ticks[d], S = a.options.ticks_positions.length > 0 && a.options.ticks_positions[d] || a._toPercentage(a.options.ticks[d])) : S = a._toPercentage(x), _.value[0] = x, _.percentage[0] = S, a._setToolTipOnMouseOver(_), a._showTooltip();
                };
                return p.addEventListener("mouseenter", v, !1), v;
              },
              addMouseLeave: function(a, p) {
                var d = function() {
                  a._hideTooltip();
                };
                return p.addEventListener("mouseleave", d, !1), d;
              }
            };
          },
          _layout: function() {
            var n, a;
            if (this.options.reversed ? n = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : n = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = n[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), a = this.options.formatter(this._state.value[0]), isNaN(a) ? this.handle1.setAttribute("aria-valuetext", a) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = n[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), a = this.options.formatter(this._state.value[1]), isNaN(a) ? this.handle2.setAttribute("aria-valuetext", a) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
              for (var p = 0; p < this.options.rangeHighlights.length; p++) {
                var d = this._toPercentage(this.options.rangeHighlights[p].start), v = this._toPercentage(this.options.rangeHighlights[p].end);
                if (this.options.reversed) {
                  var y = 100 - v;
                  v = 100 - d, d = y;
                }
                var _ = this._createHighlightRange(d, v);
                _ ? this.options.orientation === "vertical" ? (this.rangeHighlightElements[p].style.top = _.start + "%", this.rangeHighlightElements[p].style.height = _.size + "%") : (this.options.rtl ? this.rangeHighlightElements[p].style.right = _.start + "%" : this.rangeHighlightElements[p].style.left = _.start + "%", this.rangeHighlightElements[p].style.width = _.size + "%") : this.rangeHighlightElements[p].style.display = "none";
              }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              var x = this.options.orientation === "vertical" ? "height" : "width", S;
              this.options.orientation === "vertical" ? S = "marginTop" : this.options.rtl ? S = "marginRight" : S = "marginLeft";
              var T = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var E = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[S] = -T / 2 + "px"), E = this.tickLabelContainer.offsetHeight;
                else
                  for (w = 0; w < this.tickLabelContainer.childNodes.length; w++)
                    this.tickLabelContainer.childNodes[w].offsetHeight > E && (E = this.tickLabelContainer.childNodes[w].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = E + "px");
              }
              for (var w = 0; w < this.options.ticks.length; w++) {
                var f = this.options.ticks_positions[w] || this._toPercentage(this.options.ticks[w]);
                this.options.reversed && (f = 100 - f), this.ticks[w].style[this.stylePos] = f + "%", this._removeClass(this.ticks[w], "in-selection"), this.options.range ? f >= n[0] && f <= n[1] && this._addClass(this.ticks[w], "in-selection") : this.options.selection === "after" && f >= n[0] ? this._addClass(this.ticks[w], "in-selection") : this.options.selection === "before" && f <= n[0] && this._addClass(this.ticks[w], "in-selection"), this.tickLabels[w] && (this.tickLabels[w].style[x] = T + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[w] !== void 0 ? (this.tickLabels[w].style.position = "absolute", this.tickLabels[w].style[this.stylePos] = f + "%", this.tickLabels[w].style[S] = -T / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[w].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[w].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[S] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[w], "label-in-selection label-is-selection"), this.options.range ? f >= n[0] && f <= n[1] && (this._addClass(this.tickLabels[w], "label-in-selection"), (f === n[0] || n[1]) && this._addClass(this.tickLabels[w], "label-is-selection")) : (this.options.selection === "after" && f >= n[0] ? this._addClass(this.tickLabels[w], "label-in-selection") : this.options.selection === "before" && f <= n[0] && this._addClass(this.tickLabels[w], "label-in-selection"), f === n[0] && this._addClass(this.tickLabels[w], "label-is-selection")));
              }
            }
            var L;
            if (this.options.range) {
              L = this.options.formatter(this._state.value), this._setText(this.tooltipInner, L), this.tooltip.style[this.stylePos] = (n[1] + n[0]) / 2 + "%";
              var N = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, N);
              var C = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, C), this.tooltip_min.style[this.stylePos] = n[0] + "%", this.tooltip_max.style[this.stylePos] = n[1] + "%";
            } else
              L = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, L), this.tooltip.style[this.stylePos] = n[0] + "%";
            if (this.options.orientation === "vertical")
              this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(n[0], n[1]) + "%", this.trackSelection.style.top = Math.min(n[0], n[1]) + "%", this.trackSelection.style.height = Math.abs(n[0] - n[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(n[0], n[1]) - Math.abs(n[0] - n[1]) + "%";
            else {
              this.stylePos === "right" ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(n[0], n[1]) + "%", this.stylePos === "right" ? this.trackSelection.style.right = Math.min(n[0], n[1]) + "%" : this.trackSelection.style.left = Math.min(n[0], n[1]) + "%", this.trackSelection.style.width = Math.abs(n[0] - n[1]) + "%", this.stylePos === "right" ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(n[0], n[1]) - Math.abs(n[0] - n[1]) + "%";
              var $ = this.tooltip_min.getBoundingClientRect(), A = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? $.right > A.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : $.right > A.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
            }
          },
          _createHighlightRange: function(n, a) {
            return this._isHighlightRange(n, a) ? n > a ? { start: a, size: n - a } : { start: n, size: a - n } : null;
          },
          _isHighlightRange: function(n, a) {
            return 0 <= n && n <= 100 && 0 <= a && a <= 100;
          },
          _resize: function(n) {
            this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout();
          },
          _removeProperty: function(n, a) {
            n.style.removeProperty ? n.style.removeProperty(a) : n.style.removeAttribute(a);
          },
          _mousedown: function(n) {
            if (!this._state.enabled)
              return !1;
            n.preventDefault && n.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
            var a = this._getPercentage(n);
            if (this.options.range) {
              var p = Math.abs(this._state.percentage[0] - a), d = Math.abs(this._state.percentage[1] - a);
              this._state.dragged = p < d ? 0 : 1, this._adjustPercentageForRangeSliders(a);
            } else
              this._state.dragged = 0;
            this._state.percentage[this._state.dragged] = a, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
            var v = this._calculateValue();
            return this._trigger("slideStart", v), this.setValue(v, !1, !0), n.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
          },
          _touchstart: function(n) {
            this._mousedown(n);
          },
          _triggerFocusOnHandle: function(n) {
            n === 0 && this.handle1.focus(), n === 1 && this.handle2.focus();
          },
          _keydown: function(n, a) {
            if (!this._state.enabled)
              return !1;
            var p;
            switch (a.keyCode) {
              case 37:
              // left
              case 40:
                p = -1;
                break;
              case 39:
              // right
              case 38:
                p = 1;
                break;
            }
            if (p) {
              if (this.options.natural_arrow_keys) {
                var d = this.options.orientation === "horizontal", v = this.options.orientation === "vertical", y = this.options.rtl, _ = this.options.reversed;
                d ? y ? _ || (p = -p) : _ && (p = -p) : v && (_ || (p = -p));
              }
              var x;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var S = void 0;
                S = this.options.ticks.indexOf(this._state.value[n]), S === -1 && (S = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), S += p, S = Math.max(0, Math.min(this.options.ticks.length - 1, S)), x = this.options.ticks[S];
              } else
                x = this._state.value[n] + p * this.options.step;
              var T = this._toPercentage(x);
              if (this._state.keyCtrl = n, this.options.range) {
                this._adjustPercentageForRangeSliders(T);
                var E = this._state.keyCtrl ? this._state.value[0] : x, w = this._state.keyCtrl ? x : this._state.value[1];
                x = [Math.max(this.options.min, Math.min(this.options.max, E)), Math.max(this.options.min, Math.min(this.options.max, w))];
              } else
                x = Math.max(this.options.min, Math.min(this.options.max, x));
              return this._trigger("slideStart", x), this.setValue(x, !0, !0), this._trigger("slideStop", x), this._pauseEvent(a), delete this._state.keyCtrl, !1;
            }
          },
          _pauseEvent: function(n) {
            n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault(), n.cancelBubble = !0, n.returnValue = !1;
          },
          _mousemove: function(n) {
            if (!this._state.enabled)
              return !1;
            var a = this._getPercentage(n);
            this._adjustPercentageForRangeSliders(a), this._state.percentage[this._state.dragged] = a;
            var p = this._calculateValue(!0);
            return this.setValue(p, !0, !0), !1;
          },
          _touchmove: function(n) {
            n.changedTouches !== void 0 && n.preventDefault && n.preventDefault();
          },
          _adjustPercentageForRangeSliders: function(n) {
            if (this.options.range) {
              var a = this._getNumDigitsAfterDecimalPlace(n);
              a = a ? a - 1 : 0;
              var p = this._applyToFixedAndParseFloat(n, a);
              this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], a) < p ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], a) > p ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < n ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > n && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
            }
          },
          _mouseup: function(n) {
            if (!this._state.enabled)
              return !1;
            var a = this._getPercentage(n);
            this._adjustPercentageForRangeSliders(a), this._state.percentage[this._state.dragged] = a, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
            var p = this._calculateValue(!0);
            return this.setValue(p, !1, !0), this._trigger("slideStop", p), this._state.dragged = null, !1;
          },
          _setValues: function(n, a) {
            var p = n === 0 ? 0 : 100;
            this._state.percentage[n] !== p && (a.data[n] = this._toValue(this._state.percentage[n]), a.data[n] = this._applyPrecision(a.data[n]));
          },
          _calculateValue: function(n) {
            var a = {};
            return this.options.range ? (a.data = [this.options.min, this.options.max], this._setValues(0, a), this._setValues(1, a), n && (a.data[0] = this._snapToClosestTick(a.data[0]), a.data[1] = this._snapToClosestTick(a.data[1]))) : (a.data = this._toValue(this._state.percentage[0]), a.data = parseFloat(a.data), a.data = this._applyPrecision(a.data), n && (a.data = this._snapToClosestTick(a.data))), a.data;
          },
          _snapToClosestTick: function(n) {
            for (var a = [n, 1 / 0], p = 0; p < this.options.ticks.length; p++) {
              var d = Math.abs(this.options.ticks[p] - n);
              d <= a[1] && (a = [this.options.ticks[p], d]);
            }
            return a[1] <= this.options.ticks_snap_bounds ? a[0] : n;
          },
          _applyPrecision: function(n) {
            var a = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
            return this._applyToFixedAndParseFloat(n, a);
          },
          _getNumDigitsAfterDecimalPlace: function(n) {
            var a = ("" + n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return a ? Math.max(0, (a[1] ? a[1].length : 0) - (a[2] ? +a[2] : 0)) : 0;
          },
          _applyToFixedAndParseFloat: function(n, a) {
            var p = n.toFixed(a);
            return parseFloat(p);
          },
          /*
          	Credits to Mike Samuel for the following method!
          	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
          */
          _getPercentage: function(n) {
            this.touchCapable && (n.type === "touchstart" || n.type === "touchmove" || n.type === "touchend") && (n = n.changedTouches[0]);
            var a = n[this.mousePos], p = this._state.offset[this.stylePos], d = a - p;
            this.stylePos === "right" && (d = -d);
            var v = d / this._state.size * 100;
            return v = Math.round(v / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (v = 100 - v), Math.max(0, Math.min(100, v));
          },
          _validateInputValue: function(n) {
            if (isNaN(+n)) {
              if (Array.isArray(n))
                return this._validateArray(n), n;
              throw new Error(u.formatInvalidInputErrorMsg(n));
            } else return +n;
          },
          _validateArray: function(n) {
            for (var a = 0; a < n.length; a++) {
              var p = n[a];
              if (typeof p != "number")
                throw new Error(u.formatInvalidInputErrorMsg(p));
            }
          },
          _setDataVal: function(n) {
            this.element.setAttribute("data-value", n), this.element.setAttribute("value", n), this.element.value = n;
          },
          _trigger: function(n, a) {
            a = a || a === 0 ? a : void 0;
            var p = this.eventToCallbackMap[n];
            if (p && p.length)
              for (var d = 0; d < p.length; d++) {
                var v = p[d];
                v(a);
              }
            h && this._triggerJQueryEvent(n, a);
          },
          _triggerJQueryEvent: function(n, a) {
            var p = {
              type: n,
              value: a
            };
            this.$element.trigger(p), this.$sliderElem.trigger(p);
          },
          _unbindJQueryEventHandlers: function() {
            this.$element.off(), this.$sliderElem.off();
          },
          _setText: function(n, a) {
            typeof n.textContent < "u" ? n.textContent = a : typeof n.innerText < "u" && (n.innerText = a);
          },
          _removeClass: function(n, a) {
            for (var p = a.split(" "), d = n.className, v = 0; v < p.length; v++) {
              var y = p[v], _ = new RegExp("(?:\\s|^)" + y + "(?:\\s|$)");
              d = d.replace(_, " ");
            }
            n.className = d.trim();
          },
          _addClass: function(n, a) {
            for (var p = a.split(" "), d = n.className, v = 0; v < p.length; v++) {
              var y = p[v], _ = new RegExp("(?:\\s|^)" + y + "(?:\\s|$)"), x = _.test(d);
              x || (d += " " + y);
            }
            n.className = d.trim();
          },
          _offsetLeft: function(n) {
            return n.getBoundingClientRect().left;
          },
          _offsetRight: function(n) {
            return n.getBoundingClientRect().right;
          },
          _offsetTop: function(n) {
            for (var a = n.offsetTop; (n = n.offsetParent) && !isNaN(n.offsetTop); )
              a += n.offsetTop, n.tagName !== "BODY" && (a -= n.scrollTop);
            return a;
          },
          _offset: function(n) {
            return {
              left: this._offsetLeft(n),
              right: this._offsetRight(n),
              top: this._offsetTop(n)
            };
          },
          _css: function(n, a, p) {
            if (h)
              h.style(n, a, p);
            else {
              var d = a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(v, y) {
                return y.toUpperCase();
              });
              n.style[d] = p;
            }
          },
          _toValue: function(n) {
            return this.options.scale.toValue.apply(this, [n]);
          },
          _toPercentage: function(n) {
            return this.options.scale.toPercentage.apply(this, [n]);
          },
          _setTooltipPosition: function() {
            var n = [this.tooltip, this.tooltip_min, this.tooltip_max];
            if (this.options.orientation === "vertical") {
              var a;
              this.options.tooltip_position ? a = this.options.tooltip_position : this.options.rtl ? a = "left" : a = "right";
              var p = a === "left" ? "right" : "left";
              n.forEach((function(d) {
                this._addClass(d, "bs-tooltip-" + a), d.style[p] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? n.forEach((function(d) {
              this._addClass(d, "bs-tooltip-bottom"), d.style.top = "22px";
            }).bind(this)) : n.forEach((function(d) {
              this._addClass(d, "bs-tooltip-top"), d.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(n) {
            for (var a = Math.abs(n - this.options.ticks[0]), p = 0, d = 0; d < this.options.ticks.length; ++d) {
              var v = Math.abs(n - this.options.ticks[d]);
              v < a && (a = v, p = d);
            }
            return p;
          },
          /**
           * Attempts to find the index in `ticks[]` the slider values are set at.
           * The indexes can be -1 to indicate the slider value is not set at a value in `ticks[]`.
           */
          _setTickIndex: function() {
            this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])]);
          }
        }, h && h.fn && (h.fn.slider ? (i && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), m = o) : (h.bridget(s, l), m = s), h.bridget(o, l), h(function() {
          h("input[data-provide=slider]")[m]();
        }));
      })(r), l;
    });
  })(Pe)), Pe.exports;
}
var Js = Ks();
const Ys = /* @__PURE__ */ Ve(Js), ei = (t, e) => {
  const i = {
    ...t,
    tooltip: t.tooltip || "show"
  };
  let {
    change: r,
    onChange: s,
    value: o
  } = t;
  const l = F(), [h, m] = G();
  return r = r ?? s, H(() => {
    if (l.current) {
      const u = new Ys(l.current, i);
      return m(u), () => u.destroy();
    }
  }, [l.current]), H(() => {
    e && h && (e.current = {
      mySlider: h
    });
  }, [e, h]), H(() => {
    if (h && r) {
      h.on("change", r);
      for (let u in t)
        h.setAttribute(u, t[u]);
      return () => {
        h.off("change", r);
      };
    }
  }, [t, h]), H(() => {
    t.enabled ? h?.enable() : h?.disable();
  }, [t.enabled]), H(() => {
    h && o !== void 0 && h.setValue(o);
  }, [h, o]), /* @__PURE__ */ g.createElement("div", { ref: l });
}, Mi = g.forwardRef(ei);
var Re = { exports: {} }, Me, pt;
function ti() {
  if (pt) return Me;
  pt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Me = t, Me;
}
var Ne, dt;
function si() {
  if (dt) return Ne;
  dt = 1;
  var t = /* @__PURE__ */ ti();
  function e() {
  }
  function i() {
  }
  return i.resetWarningCache = e, Ne = function() {
    function r(l, h, m, u, k, b) {
      if (b !== t) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: i,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, Ne;
}
var ft;
function ii() {
  return ft || (ft = 1, Re.exports = /* @__PURE__ */ si()()), Re.exports;
}
var ni = /* @__PURE__ */ ii();
const j = /* @__PURE__ */ Ve(ni);
function ri({
  initialPx: t,
  // preferred: initial width of left pane in pixels
  initialPercent: e = 50,
  // fallback if initialPx not provided
  minA: i = 120,
  minB: r = 120,
  maxA: s,
  // optional px limit for left pane; otherwise auto from container - minB - gutter
  gutter: o = 10,
  style: l,
  children: h,
  onChange: m
  // called with { px, percent }
}) {
  const u = F(null), k = F(!1), [b, c] = G(0), [n, a] = g.Children.toArray(h), p = (T, E, w) => Math.max(E, Math.min(w, T)), d = ee(() => {
    const T = u.current;
    if (!T) return { total: 0, min: 0, max: 0 };
    const E = T.clientWidth, w = Math.max(0, E - o - r), f = typeof s == "number" ? Math.min(s, w) : w, L = Math.min(i, f);
    return { total: E, min: L, max: f };
  }, [o, i, r, s]);
  It(() => {
    if (!u.current) return;
    const { total: E, min: w, max: f } = d();
    let L;
    typeof t == "number" && Number.isFinite(t) ? L = t : L = Math.round(p(e, 0, 100) / 100 * (E - o)), c(p(L, w, f));
  }, [d, t, e, o]), H(() => {
    const T = u.current;
    if (!T) return;
    const E = () => {
      const { total: f, min: L, max: N } = d();
      if (c((C) => p(C, L, N)), m) {
        const C = p(b, L, N), $ = f > 0 ? C / (f - o) * 100 : 0;
        m({ px: C, percent: $ });
      }
    };
    let w;
    return "ResizeObserver" in window ? (w = new ResizeObserver(E), w.observe(T)) : window.addEventListener("resize", E), () => {
      w ? w.disconnect() : window.removeEventListener("resize", E);
    };
  }, [d, o, m, b]);
  const v = ee((T) => {
    const E = u.current;
    if (!E) return;
    k.current = !0, T.currentTarget.setPointerCapture?.(T.pointerId);
    const w = (L) => {
      if (!k.current) return;
      const N = E.getBoundingClientRect(), C = L.clientX - N.left, { total: $, min: A, max: M } = d(), D = p(C, A, M);
      if (c(D), m) {
        const q = $ > 0 ? D / ($ - o) * 100 : 0;
        m({ px: D, percent: Math.round(q * 100) / 100 });
      }
    }, f = () => {
      k.current = !1;
      try {
        T.currentTarget.releasePointerCapture?.(T.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f);
    };
    window.addEventListener("pointermove", w), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }, [d, o, m]);
  ee(() => {
    const { total: T, min: E, max: w } = d();
    let f;
    typeof t == "number" && Number.isFinite(t) ? f = t : f = Math.round(p(e, 0, 100) / 100 * (T - o)), c(p(f, E, w));
  }, [d, t, e, o]);
  const y = gt(
    () => ({
      display: "grid",
      gridTemplateColumns: `${b}px ${o}px 1fr`,
      gridTemplateRows: "1fr",
      minWidth: 0
      // prevent overflow due to intrinsic min-content sizes
    }),
    [b, o]
  ), { min: _, max: x, total: S } = d();
  return /* @__PURE__ */ g.createElement("div", { ref: u, className: "splitpane", style: { ...y, ...l || {} } }, /* @__PURE__ */ g.createElement("div", { className: "pane", style: { minWidth: 0, minHeight: 0 } }, n), /* @__PURE__ */ g.createElement(
    "div",
    {
      role: "separator",
      "aria-orientation": "vertical",
      "aria-valuemin": _,
      "aria-valuemax": x,
      "aria-valuenow": b,
      tabIndex: 0,
      onPointerDown: v,
      className: "separator",
      style: { width: o, minHeight: 0 }
    },
    /* @__PURE__ */ g.createElement("div", { className: "separator-grip" }),
    /* @__PURE__ */ g.createElement("div", { className: "separator-hit" })
  ), /* @__PURE__ */ g.createElement("div", { className: "pane", style: { minWidth: 0, minHeight: 0 } }, a));
}
ri.propTypes = {
  initialPx: j.number,
  initialPercent: j.number,
  // used only if initialPx is not provided
  minA: j.number,
  minB: j.number,
  maxA: j.number,
  gutter: j.number,
  style: j.object,
  children: j.node.isRequired,
  onChange: j.func
};
const Ni = (t) => {
  const {
    className: e,
    onSelectionStart: i,
    onSelectionEnd: r,
    range: s,
    itemSize: o,
    selectionRange: l,
    itemRenderer: h,
    keyBindings: m = {},
    indicators: u = [],
    ...k
  } = t, b = t.style || {}, {
    callbacks: c,
    isSelecting: n,
    onMouseUp: a
  } = Jt(l, {
    onSelectionStart: i,
    onSelectionEnd: r
  }), p = ee((y) => h(y, c(y), {
    selectionRange: l,
    isSelecting: n
  }), [s, n, h]), d = {
    width: 5e3,
    position: "absolute",
    left: -2500,
    zIndex: 1e3,
    height: 5e3
  };
  function v(y) {
    const {
      range: _,
      caption: x,
      name: S
    } = y;
    let T, E;
    return typeof _ == "object" ? (T = _.count, E = _.first) : (T = 1, E = _), /* @__PURE__ */ g.createElement(
      "div",
      {
        onClick: (w) => {
          w.stopPropagation(), s.jumpToFirst(E);
        },
        className: `indicator indicator-${S}`,
        style: {
          position: "absolute",
          height: `calc(max(var(--indicator-min-height), ${T / s.max * 100}%))`,
          top: `${E / s.max * 100}%`
        }
      }
    );
  }
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: B("dynamic-list", e),
      style: {
        position: "relative"
      }
    },
    /* @__PURE__ */ g.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ g.createElement(
      ct,
      {
        style: {
          ...d,
          bottom: -o
        },
        className: "auto-scroll auto-scroll-up",
        onMouseUp: a,
        enabled: n,
        onEvent: () => {
          s.moveUp(), s.first < l.first ? l.first = s.first : s.first > l.first && s.first < l.last && (l.last = s.first + 1);
        }
      }
    )),
    /* @__PURE__ */ g.createElement(
      os,
      {
        itemSize: o,
        itemRenderer: p,
        range: s,
        ...k,
        style: {
          ...b
        }
      }
    ),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "gutter gutter-right",
        style: {
          position: "absolute",
          right: "calc( var(--gutter-width) * -1 - var(--gutter-margin) )",
          width: "var(--gutter-width)",
          height: "100%",
          top: 0
        }
      },
      u.filter((y) => y.enabled).map(v)
    ),
    /* @__PURE__ */ g.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ g.createElement(
      ct,
      {
        style: {
          ...d,
          top: -o - 40
        },
        className: "auto-scroll auto-scroll-down",
        onMouseUp: a,
        enabled: n,
        onEvent: () => {
          s.moveDown(), s.last > l.last ? l.last = s.last : s.last !== s.max && s.last <= l.last && s.last > l.first && (l.first = s.last - 1);
        }
      }
    ))
  );
};
function oi(t) {
  const {
    width: e,
    height: i,
    side: r = "top",
    arrowBase: s = 20,
    arrowLength: o = 10,
    borderRadius: l = 10,
    padding: h = 8,
    strokeWidth: m = 2,
    seamOverlap: u = 0.5
  } = t || {}, k = Math.max(0, Number(e) || 0), b = Math.max(0, Number(i) || 0), c = Math.max(0, Number(s) || 0), n = Math.max(0, Number(o) || 0), a = Math.max(0, Number(l) || 0), p = Math.max(0, Number(h) || 0), d = Math.max(0, Number(m) || 0), v = k + p * 2, y = b + p * 2, _ = r === "left" || r === "right" ? n : 0, x = r === "top" || r === "bottom" ? n : 0, S = v + _ + d, T = y + x + d, E = r === "left" ? n : 0, w = r === "top" ? n : 0, f = Math.min(a, Math.min(v, y) / 2), L = E + v / 2, N = w + y / 2, C = E, $ = w, A = C + v, M = $ + y, K = [
    `M ${C + f} ${$}`,
    `H ${A - f}`,
    `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
    `V ${M - f}`,
    `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
    `H ${C + f}`,
    `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
    `V ${$ + f}`,
    `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
    "Z"
  ].join(" ");
  let D = "";
  n > 0 && c > 0 && (r === "right" ? D = [
    `M ${A - u} ${N - c / 2}`,
    `L ${A + n} ${N}`,
    `L ${A - u} ${N + c / 2}`,
    "Z"
  ].join(" ") : r === "left" ? D = [
    `M ${C + u} ${N + c / 2}`,
    `L ${C - n} ${N}`,
    `L ${C + u} ${N - c / 2}`,
    "Z"
  ].join(" ") : r === "top" ? D = [
    `M ${L - c / 2} ${$ + u}`,
    `L ${L} ${$ - n}`,
    `L ${L + c / 2} ${$ + u}`,
    "Z"
  ].join(" ") : r === "bottom" && (D = [
    `M ${L + c / 2} ${M - u}`,
    `L ${L} ${M + n}`,
    `L ${L - c / 2} ${M - u}`,
    "Z"
  ].join(" ")));
  let q = "";
  if (r === "right")
    q = [
      `M ${C + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${N - c / 2}`,
      ...n > 0 && c > 0 ? [`L ${A + n} ${N}`, `L ${A} ${N + c / 2}`] : [],
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
      "Z"
    ].join(" ");
  else if (r === "left")
    q = [
      `M ${C + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${N + c / 2}`,
      ...n > 0 && c > 0 ? [`L ${C - n} ${N}`, `L ${C} ${N - c / 2}`] : [],
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
      "Z"
    ].join(" ");
  else if (r === "top")
    q = [
      `M ${L} ${$ - n}`,
      ...n > 0 && c > 0 ? [`L ${L + c / 2} ${$}`] : [],
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
      ...n > 0 && c > 0 ? [`H ${L - c / 2}`] : [],
      "Z"
    ].join(" ");
  else if (r === "bottom") {
    const J = [
      `M ${C + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`
    ];
    n > 0 && c > 0 && J.push(
      `H ${L + c / 2}`,
      `L ${L} ${M + n}`,
      `L ${L - c / 2} ${M}`
    ), J.push(
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      // ✅ bas-gauche correct
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
      "Z"
    ), q = J.join(" ");
  }
  const te = { top: r === "top" ? -n : 0, left: r === "left" ? -n : 0 }, Q = { x: E + p, y: w + p };
  return {
    // géométrie
    outlineD: q,
    // à utiliser pour le stroke (bordure unique)
    rectD: K,
    // fill bulle
    arrowD: D,
    // fill flèche (chevauchement interne minime)
    // métriques utiles
    width: S,
    height: T,
    viewBox: `0 0 ${S} ${T}`,
    viewBoxRectOnly: `0 0 ${v} ${y}`,
    transformRectToOrigin: `translate(${-E}, ${-w})`,
    rect: { x: E, y: w, w: v, h: y, r: f },
    offset: te,
    contentOffset: Q,
    strokeWidth: d
  };
}
function zi({
  side: t = "right",
  arrowBase: e = 20,
  arrowLength: i = 10,
  borderRadius: r = 10,
  stroke: s = "#111827",
  bubbleFill: o = "#fff",
  arrowFill: l = "#fff",
  strokeWidth: h = 2,
  style: m,
  seamOverlap: u = 0.5,
  children: k,
  ...b
}) {
  const c = g.useRef(null), { width: n = 0, height: a = 0 } = Be({ targetRef: c }), p = g.useMemo(() => !n || !a ? null : oi({
    width: n,
    // = clientWidth (inclut padding)
    height: a,
    // = clientHeight (inclut padding)
    padding: 0,
    // le div gère déjà son padding visuel
    side: t,
    arrowBase: e,
    arrowLength: i,
    borderRadius: r,
    strokeWidth: h,
    seamOverlap: u
  }), [
    n,
    a,
    t,
    e,
    i,
    r,
    h
  ]);
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: c,
      style: {
        position: "relative",
        boxSizing: "border-box",
        ...m
      },
      ...b
    },
    /* @__PURE__ */ g.createElement("div", { style: { position: "relative", zIndex: 1 } }, k),
    p && /* @__PURE__ */ g.createElement(
      "svg",
      {
        "aria-hidden": !0,
        viewBox: `0 0 ${n} ${a}`,
        preserveAspectRatio: "none",
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
          // laisse dépasser la flèche
          pointerEvents: "none",
          zIndex: 0
        }
      },
      /* @__PURE__ */ g.createElement("g", { transform: p.transformRectToOrigin }, p.arrowD && /* @__PURE__ */ g.createElement("path", { d: p.arrowD, fill: l, stroke: "none" }), /* @__PURE__ */ g.createElement("path", { d: p.rectD, fill: o, stroke: "none" }), /* @__PURE__ */ g.createElement(
        "path",
        {
          d: p.outlineD,
          fill: "none",
          stroke: s,
          strokeWidth: p.strokeWidth,
          strokeLinejoin: "round",
          strokeLinecap: "round"
        }
      ))
    )
  );
}
export {
  zi as Bubble,
  ns as Collapsible,
  He as Decorated,
  yi as Disable,
  wi as DotNotification,
  rs as Drawer,
  xi as DrawerContainer,
  Ri as Dropdown,
  Ni as DynamicList,
  os as GargantuaList,
  ct as IntervalOnHover,
  Ei as MessageModal,
  Gs as Messages,
  Ci as ModalOkCancel,
  Qs as Pinnable,
  $i as Progress,
  Pi as RadioCollapse,
  Hi as RadioProvider,
  Mi as ReactSlider,
  Ti as RenderInWindow,
  Li as Slider,
  ri as SplitPaneH,
  Si as TableContextMenu,
  Ai as TextField
};
