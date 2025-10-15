import g, { forwardRef as mt, Children as Nt, useRef as F, useState as G, useEffect as H, useCallback as ee, createPortal as zt, useMemo as gt, useLayoutEffect as It } from "react";
import { useResizeDetector as Be } from "react-resize-detector";
import { waitForStableBoundingRect as Dt, recursiveMap as Ht } from "./utils.es.js";
import { noOp as oe } from "velor-utils/utils/functional.mjs";
import O from "react-bootstrap/Modal";
import { InfoCircleFill as Xe, ExclamationTriangleFill as Bt, ExclamationSquareFill as Vt, ExclamationDiamondFill as Ot, Pin as Ft, PinAngle as qt, XLg as Zt, PlusCircleFill as Ke, DashCircleFill as Je } from "react-bootstrap-icons";
import { Alert as Ye, ProgressBar as jt, Form as et, FormControl as Wt, Dropdown as tt, DropdownMenu as Gt, DropdownItem as Qt } from "react-bootstrap";
import Y from "react-bootstrap/Button";
import { u as Ut, a as Xt, b as Kt, c as Jt } from "./hooks-DQ3Kw_iX.js";
import { R as Hi } from "./hooks-DQ3Kw_iX.js";
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
      function s() {
        for (var o = "", l = 0; l < arguments.length; l++) {
          var h = arguments[l];
          h && (o = n(o, i(h)));
        }
        return o;
      }
      function i(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return s.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var l = "";
        for (var h in o)
          e.call(o, h) && o[h] && (l = n(l, h));
        return l;
      }
      function n(o, l) {
        return l ? o ? o + " " + l : o + l : o;
      }
      t.exports ? (s.default = s, t.exports = s) : window.classNames = s;
    })();
  })(Ce)), Ce.exports;
}
var is = ss();
const B = /* @__PURE__ */ Ve(is), $e = "animating-expand", Te = "animating-collapse", Le = "animating", Se = "collapsed", Ae = "expanded", ns = mt((t, e) => {
  const {
    children: s,
    expanded: i,
    onExpand: n = oe,
    onStateChanged: o = oe,
    caption: l,
    className: h,
    style: m = {}
  } = t;
  if (Nt.count(s) === 0) return null;
  const u = F(), k = F(), [b, c] = G(!0), r = () => {
    const _ = k.current.getBoundingClientRect();
    u.current.style.width = _.width + "px", u.current.style.height = _.height + "px";
  }, a = () => {
    u.current.style.width = "1.7em", u.current.style.height = "1.7em";
  }, p = () => {
    u.current.classList.remove(Ae), u.current.classList.add(Te, Le), a();
  }, d = () => {
    u.current.classList.remove(Se), u.current.classList.add($e, Le), r();
  }, v = () => u.current.classList.contains($e), y = () => u.current.classList.contains(Te);
  return H(() => {
    i ? (u.current.classList.add(Ae), r(), n(!0), o(!0)) : (u.current.classList.add(Se), a(), n(!1), o(!1));
    const _ = () => {
      n(!1);
    };
    return c(!1), document.addEventListener("mousedown", _), () => {
      document.removeEventListener("mousedown", _);
    };
  }, []), H(() => {
    b || (i ? d() : p());
  }, [i]), Be({
    targetRef: k,
    onResize: (_, w) => {
      u.current.classList.contains("expanded") && Dt(k.current, r);
    }
  }), /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: u,
      onTransitionEnd: (_) => {
        _.propertyName === "width" && (y() && !i ? (u.current.classList.add(Se), o(!1)) : v() && i && (u.current.classList.add(Ae), o(!0)), u.current.classList.remove(
          Te,
          $e,
          Le
        ));
      },
      onMouseDown: (_) => _.stopPropagation(),
      onClick: (_) => {
        _.stopPropagation(), n(!0);
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
      s
    )
  );
}), yi = (t) => Ht(t.children, (e) => g.cloneElement(e, {
  disabled: e.props.disabled || t.disabled
})), wi = (t) => {
  const {
    notifications: e,
    variant: s,
    visible: i = !1,
    bordered: n = !1,
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
        s,
        o,
        "dot-notification",
        {
          bordered: n,
          hidden: !i,
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
        s,
        o,
        "dot-notification",
        {
          bordered: n,
          hidden: !i,
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
    className: s = "",
    location: i = "left",
    ...n
  } = t;
  return /* @__PURE__ */ g.createElement("div", { className: B(
    "drawer-container",
    `${i}-drawer`,
    {
      "horizontal-drawer": i === "left" || i === "right",
      "vertical-drawer": i === "top" || i === "bottom"
    }
  ) }, /* @__PURE__ */ g.createElement(
    "div",
    {
      ...n,
      className: B(
        s,
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
  return g.Children.map(t.children, (s) => {
    if (!g.isValidElement(s))
      return s;
    const {
      title: i,
      name: n,
      loading: o,
      className: l,
      id: h,
      onClose: m
    } = s.props;
    return /* @__PURE__ */ g.createElement(
      rs,
      {
        id: h,
        className: l,
        visible: e === n,
        title: i,
        name: n,
        loading: o,
        onClose: m
      },
      s
    );
  });
}, os = (t) => {
  const e = F(), {
    itemRenderer: s,
    itemSize: i,
    range: n
  } = t;
  if (!n || !n.valid)
    return;
  const [o, l] = G(0);
  H(() => {
    n.count = Math.floor(o / i) - 1;
  }, [n, n.max, o, i]);
  const h = n.max > 0, m = ee((k) => {
    const b = Math.sign(k.deltaY);
    n.moveDown(b);
  }, [n]);
  Be({
    targetRef: e,
    onResize: ee(({ height: k }) => {
      l(k);
    }, [])
  });
  const u = [];
  for (let k of n) {
    let b = s(k);
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
        onChange: (k) => n.jumpToFirst(k.target.value),
        disabled: !h,
        value: n.first,
        min: 0,
        max: n.max
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
  let s = typeof t == "string" ? t : t.source;
  const i = {
    replace: (n, o) => {
      let l = typeof o == "string" ? o : o.source;
      return l = l.replace(I.caret, "$1"), s = s.replace(n, l), i;
    },
    getRegex: () => new RegExp(s, e)
  };
  return i;
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
}, as = /^(?:[ \t]*(?:\n|$))+/, ls = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, hs = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ae = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, cs = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Fe = /(?:[*+-]|\d{1,9}[.)])/, kt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, bt = P(kt).replace(/bull/g, Fe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), us = P(kt).replace(/bull/g, Fe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), qe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ps = /^[^\n]+/, Ze = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ds = P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ze).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), fs = P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Fe).getRegex(), _e = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", je = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ms = P(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", je).replace("tag", _e).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _t = P(qe).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), gs = P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _t).getRegex(), We = {
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
  ).replace("comment", je).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
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
).replace(/notPunctSpace/g, wt).replace(/punctSpace/g, Ge).replace(/punct/g, ye).getRegex(), Ps = P(/\\(punct)/, "gu").replace(/punct/g, ye).getRegex(), Rs = P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ms = P(je).replace("(?:-->|$)", "-->").getRegex(), Ns = P(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", Ms).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ve = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, zs = P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ve).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), $t = P(/^!?\[(label)\]\[(ref)\]/).replace("label", ve).replace("ref", Ze).getRegex(), Tt = P(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ze).getRegex(), Is = P("reflink|nolink(?!\\()", "g").replace("reflink", $t).replace("nolink", Tt).getRegex(), Qe = {
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
  const s = t.replace(I.findPipe, (o, l, h) => {
    let m = !1, u = l;
    for (; --u >= 0 && h[u] === "\\"; ) m = !m;
    return m ? "|" : " |";
  }), i = s.split(I.splitPipe);
  let n = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), e)
    if (i.length > e)
      i.splice(e);
    else
      for (; i.length < e; ) i.push("");
  for (; n < i.length; n++)
    i[n] = i[n].trim().replace(I.slashPipe, "|");
  return i;
}
function ne(t, e, s) {
  const i = t.length;
  if (i === 0)
    return "";
  let n = 0;
  for (; n < i && t.charAt(i - n - 1) === e; )
    n++;
  return t.slice(0, i - n);
}
function Vs(t, e) {
  if (t.indexOf(e[1]) === -1)
    return -1;
  let s = 0;
  for (let i = 0; i < t.length; i++)
    if (t[i] === "\\")
      i++;
    else if (t[i] === e[0])
      s++;
    else if (t[i] === e[1] && (s--, s < 0))
      return i;
  return s > 0 ? -2 : -1;
}
function ht(t, e, s, i, n) {
  const o = e.href, l = e.title || null, h = t[1].replace(n.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  const m = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: s,
    href: o,
    title: l,
    text: h,
    tokens: i.inlineTokens(h)
  };
  return i.state.inLink = !1, m;
}
function Os(t, e, s) {
  const i = t.match(s.other.indentCodeCompensation);
  if (i === null)
    return e;
  const n = i[1];
  return e.split(`
`).map((o) => {
    const l = o.match(s.other.beginningSpace);
    if (l === null)
      return o;
    const [h] = l;
    return h.length >= n.length ? o.slice(n.length) : o;
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
      const s = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: e[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? s : ne(s, `
`)
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const s = e[0], i = Os(s, e[3] || "", this.rules);
      return {
        type: "code",
        raw: s,
        lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
        text: i
      };
    }
  }
  heading(t) {
    const e = this.rules.block.heading.exec(t);
    if (e) {
      let s = e[2].trim();
      if (this.rules.other.endingHash.test(s)) {
        const i = ne(s, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (s = i.trim());
      }
      return {
        type: "heading",
        raw: e[0],
        depth: e[1].length,
        text: s,
        tokens: this.lexer.inline(s)
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
      let s = ne(e[0], `
`).split(`
`), i = "", n = "";
      const o = [];
      for (; s.length > 0; ) {
        let l = !1;
        const h = [];
        let m;
        for (m = 0; m < s.length; m++)
          if (this.rules.other.blockquoteStart.test(s[m]))
            h.push(s[m]), l = !0;
          else if (!l)
            h.push(s[m]);
          else
            break;
        s = s.slice(m);
        const u = h.join(`
`), k = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${u}` : u, n = n ? `${n}
${k}` : k;
        const b = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(k, o, !0), this.lexer.state.top = b, s.length === 0)
          break;
        const c = o.at(-1);
        if (c?.type === "code")
          break;
        if (c?.type === "blockquote") {
          const r = c, a = r.raw + `
` + s.join(`
`), p = this.blockquote(a);
          o[o.length - 1] = p, i = i.substring(0, i.length - r.raw.length) + p.raw, n = n.substring(0, n.length - r.text.length) + p.text;
          break;
        } else if (c?.type === "list") {
          const r = c, a = r.raw + `
` + s.join(`
`), p = this.list(a);
          o[o.length - 1] = p, i = i.substring(0, i.length - c.raw.length) + p.raw, n = n.substring(0, n.length - r.raw.length) + p.raw, s = a.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: i,
        tokens: o,
        text: n
      };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let s = e[1].trim();
      const i = s.length > 1, n = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +s.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      s = i ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = i ? s : "[*+-]");
      const o = this.rules.other.listItemRegex(s);
      let l = !1;
      for (; t; ) {
        let m = !1, u = "", k = "";
        if (!(e = o.exec(t)) || this.rules.block.hr.test(t))
          break;
        u = e[0], t = t.substring(u.length);
        let b = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (v) => " ".repeat(3 * v.length)), c = t.split(`
`, 1)[0], r = !b.trim(), a = 0;
        if (this.options.pedantic ? (a = 2, k = b.trimStart()) : r ? a = e[1].length + 1 : (a = e[2].search(this.rules.other.nonSpaceChar), a = a > 4 ? 1 : a, k = b.slice(a), a += e[1].length), r && this.rules.other.blankLine.test(c) && (u += c + `
`, t = t.substring(c.length + 1), m = !0), !m) {
          const v = this.rules.other.nextBulletRegex(a), y = this.rules.other.hrRegex(a), _ = this.rules.other.fencesBeginRegex(a), w = this.rules.other.headingBeginRegex(a), L = this.rules.other.htmlBeginRegex(a);
          for (; t; ) {
            const T = t.split(`
`, 1)[0];
            let E;
            if (c = T, this.options.pedantic ? (c = c.replace(this.rules.other.listReplaceNesting, "  "), E = c) : E = c.replace(this.rules.other.tabCharGlobal, "    "), _.test(c) || w.test(c) || L.test(c) || v.test(c) || y.test(c))
              break;
            if (E.search(this.rules.other.nonSpaceChar) >= a || !c.trim())
              k += `
` + E.slice(a);
            else {
              if (r || b.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || _.test(b) || w.test(b) || y.test(b))
                break;
              k += `
` + c;
            }
            !r && !c.trim() && (r = !0), u += T + `
`, t = t.substring(T.length + 1), b = E.slice(a);
          }
        }
        n.loose || (l ? n.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (l = !0));
        let p = null, d;
        this.options.gfm && (p = this.rules.other.listIsTask.exec(k), p && (d = p[0] !== "[ ] ", k = k.replace(this.rules.other.listReplaceTask, ""))), n.items.push({
          type: "list_item",
          raw: u,
          task: !!p,
          checked: d,
          loose: !1,
          text: k,
          tokens: []
        }), n.raw += u;
      }
      const h = n.items.at(-1);
      if (h)
        h.raw = h.raw.trimEnd(), h.text = h.text.trimEnd();
      else
        return;
      n.raw = n.raw.trimEnd();
      for (let m = 0; m < n.items.length; m++)
        if (this.lexer.state.top = !1, n.items[m].tokens = this.lexer.blockTokens(n.items[m].text, []), !n.loose) {
          const u = n.items[m].tokens.filter((b) => b.type === "space"), k = u.length > 0 && u.some((b) => this.rules.other.anyLine.test(b.raw));
          n.loose = k;
        }
      if (n.loose)
        for (let m = 0; m < n.items.length; m++)
          n.items[m].loose = !0;
      return n;
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
      const s = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return {
        type: "def",
        tag: s,
        raw: e[0],
        href: i,
        title: n
      };
    }
  }
  table(t) {
    const e = this.rules.block.table.exec(t);
    if (!e || !this.rules.other.tableDelimiter.test(e[2]))
      return;
    const s = lt(e[1]), i = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === i.length) {
      for (const l of i)
        this.rules.other.tableAlignRight.test(l) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? o.align.push("left") : o.align.push(null);
      for (let l = 0; l < s.length; l++)
        o.header.push({
          text: s[l],
          tokens: this.lexer.inline(s[l]),
          header: !0,
          align: o.align[l]
        });
      for (const l of n)
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
      const s = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return {
        type: "paragraph",
        raw: e[0],
        text: s,
        tokens: this.lexer.inline(s)
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
      const s = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
        if (!this.rules.other.endAngleBracket.test(s))
          return;
        const o = ne(s.slice(0, -1), "\\");
        if ((s.length - o.length) % 2 === 0)
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
      let i = e[2], n = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(i);
        o && (i = o[1], n = o[3]);
      } else
        n = e[3] ? e[3].slice(1, -1) : "";
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? i = i.slice(1) : i = i.slice(1, -1)), ht(e, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: n && n.replace(this.rules.inline.anyPunctuation, "$1")
      }, e[0], this.lexer, this.rules);
    }
  }
  reflink(t, e) {
    let s;
    if ((s = this.rules.inline.reflink.exec(t)) || (s = this.rules.inline.nolink.exec(t))) {
      const i = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = e[i.toLowerCase()];
      if (!n) {
        const o = s[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return ht(s, n, s[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, s = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (!i || i[3] && s.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(i[1] || i[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const o = [...i[0]].length - 1;
      let l, h, m = o, u = 0;
      const k = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, e = e.slice(-1 * t.length + o); (i = k.exec(e)) != null; ) {
        if (l = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !l) continue;
        if (h = [...l].length, i[3] || i[4]) {
          m += h;
          continue;
        } else if ((i[5] || i[6]) && o % 3 && !((o + h) % 3)) {
          u += h;
          continue;
        }
        if (m -= h, m > 0) continue;
        h = Math.min(h, h + m + u);
        const b = [...i[0]][0].length, c = t.slice(0, o + i.index + b + h);
        if (Math.min(o, h) % 2) {
          const a = c.slice(1, -1);
          return {
            type: "em",
            raw: c,
            text: a,
            tokens: this.lexer.inlineTokens(a)
          };
        }
        const r = c.slice(2, -2);
        return {
          type: "strong",
          raw: c,
          text: r,
          tokens: this.lexer.inlineTokens(r)
        };
      }
    }
  }
  codespan(t) {
    const e = this.rules.inline.code.exec(t);
    if (e) {
      let s = e[2].replace(this.rules.other.newLineCharGlobal, " ");
      const i = this.rules.other.nonSpaceChar.test(s), n = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
      return i && n && (s = s.substring(1, s.length - 1)), {
        type: "codespan",
        raw: e[0],
        text: s
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
      let s, i;
      return e[2] === "@" ? (s = e[1], i = "mailto:" + s) : (s = e[1], i = s), {
        type: "link",
        raw: e[0],
        text: s,
        href: i,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  url(t) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let s, i;
      if (e[2] === "@")
        s = e[0], i = "mailto:" + s;
      else {
        let n;
        do
          n = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (n !== e[0]);
        s = e[0], e[1] === "www." ? i = "http://" + e[0] : i = e[0];
      }
      return {
        type: "link",
        raw: e[0],
        text: s,
        href: i,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  inlineText(t) {
    const e = this.rules.inline.text.exec(t);
    if (e) {
      const s = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: e[0],
        text: e[0],
        escaped: s
      };
    }
  }
}, j = class Ie {
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
    const s = {
      other: I,
      block: me.normal,
      inline: ie.normal
    };
    this.options.pedantic ? (s.block = me.pedantic, s.inline = ie.pedantic) : this.options.gfm && (s.block = me.gfm, this.options.breaks ? s.inline = ie.breaks : s.inline = ie.gfm), this.tokenizer.rules = s;
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
  static lex(e, s) {
    return new Ie(s).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, s) {
    return new Ie(s).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(I.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let s = 0; s < this.inlineQueue.length; s++) {
      const i = this.inlineQueue[s];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, s = [], i = !1) {
    for (this.options.pedantic && (e = e.replace(I.tabCharGlobal, "    ").replace(I.spaceLine, "")); e; ) {
      let n;
      if (this.options.extensions?.block?.some((l) => (n = l.call({ lexer: this }, e, s)) ? (e = e.substring(n.raw.length), s.push(n), !0) : !1))
        continue;
      if (n = this.tokenizer.space(e)) {
        e = e.substring(n.raw.length);
        const l = s.at(-1);
        n.raw.length === 1 && l !== void 0 ? l.raw += `
` : s.push(n);
        continue;
      }
      if (n = this.tokenizer.code(e)) {
        e = e.substring(n.raw.length);
        const l = s.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += `
` + n.raw, l.text += `
` + n.text, this.inlineQueue.at(-1).src = l.text) : s.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(e)) {
        e = e.substring(n.raw.length), s.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(e)) {
        e = e.substring(n.raw.length), s.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(e)) {
        e = e.substring(n.raw.length), s.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(e)) {
        e = e.substring(n.raw.length), s.push(n);
        continue;
      }
      if (n = this.tokenizer.list(e)) {
        e = e.substring(n.raw.length), s.push(n);
        continue;
      }
      if (n = this.tokenizer.html(e)) {
        e = e.substring(n.raw.length), s.push(n);
        continue;
      }
      if (n = this.tokenizer.def(e)) {
        e = e.substring(n.raw.length);
        const l = s.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += `
` + n.raw, l.text += `
` + n.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
          href: n.href,
          title: n.title
        });
        continue;
      }
      if (n = this.tokenizer.table(e)) {
        e = e.substring(n.raw.length), s.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(e)) {
        e = e.substring(n.raw.length), s.push(n);
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
      if (this.state.top && (n = this.tokenizer.paragraph(o))) {
        const l = s.at(-1);
        i && l?.type === "paragraph" ? (l.raw += `
` + n.raw, l.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : s.push(n), i = o.length !== e.length, e = e.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(e)) {
        e = e.substring(n.raw.length);
        const l = s.at(-1);
        l?.type === "text" ? (l.raw += `
` + n.raw, l.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : s.push(n);
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
    return this.state.top = !0, s;
  }
  inline(e, s = []) {
    return this.inlineQueue.push({ src: e, tokens: s }), s;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, s = []) {
    let i = e, n = null;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; )
          h.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; )
      i = i.slice(0, n.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; )
      i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let o = !1, l = "";
    for (; e; ) {
      o || (l = ""), o = !1;
      let h;
      if (this.options.extensions?.inline?.some((u) => (h = u.call({ lexer: this }, e, s)) ? (e = e.substring(h.raw.length), s.push(h), !0) : !1))
        continue;
      if (h = this.tokenizer.escape(e)) {
        e = e.substring(h.raw.length), s.push(h);
        continue;
      }
      if (h = this.tokenizer.tag(e)) {
        e = e.substring(h.raw.length), s.push(h);
        continue;
      }
      if (h = this.tokenizer.link(e)) {
        e = e.substring(h.raw.length), s.push(h);
        continue;
      }
      if (h = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(h.raw.length);
        const u = s.at(-1);
        h.type === "text" && u?.type === "text" ? (u.raw += h.raw, u.text += h.text) : s.push(h);
        continue;
      }
      if (h = this.tokenizer.emStrong(e, i, l)) {
        e = e.substring(h.raw.length), s.push(h);
        continue;
      }
      if (h = this.tokenizer.codespan(e)) {
        e = e.substring(h.raw.length), s.push(h);
        continue;
      }
      if (h = this.tokenizer.br(e)) {
        e = e.substring(h.raw.length), s.push(h);
        continue;
      }
      if (h = this.tokenizer.del(e)) {
        e = e.substring(h.raw.length), s.push(h);
        continue;
      }
      if (h = this.tokenizer.autolink(e)) {
        e = e.substring(h.raw.length), s.push(h);
        continue;
      }
      if (!this.state.inLink && (h = this.tokenizer.url(e))) {
        e = e.substring(h.raw.length), s.push(h);
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
        const u = s.at(-1);
        u?.type === "text" ? (u.raw += h.raw, u.text += h.text) : s.push(h);
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
    return s;
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
  code({ text: t, lang: e, escaped: s }) {
    const i = (e || "").match(I.notSpaceStart)?.[0], n = t.replace(I.endingNewline, "") + `
`;
    return i ? '<pre><code class="language-' + V(i) + '">' + (s ? n : V(n, !0)) + `</code></pre>
` : "<pre><code>" + (s ? n : V(n, !0)) + `</code></pre>
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
    const e = t.ordered, s = t.start;
    let i = "";
    for (let l = 0; l < t.items.length; l++) {
      const h = t.items[l];
      i += this.listitem(h);
    }
    const n = e ? "ol" : "ul", o = e && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + n + o + `>
` + i + "</" + n + `>
`;
  }
  listitem(t) {
    let e = "";
    if (t.task) {
      const s = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = s + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = s + " " + V(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: s + " ",
        text: s + " ",
        escaped: !0
      }) : e += s + " ";
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
    let e = "", s = "";
    for (let n = 0; n < t.header.length; n++)
      s += this.tablecell(t.header[n]);
    e += this.tablerow({ text: s });
    let i = "";
    for (let n = 0; n < t.rows.length; n++) {
      const o = t.rows[n];
      s = "";
      for (let l = 0; l < o.length; l++)
        s += this.tablecell(o[l]);
      i += this.tablerow({ text: s });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + i + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const e = this.parser.parseInline(t.tokens), s = t.header ? "th" : "td";
    return (t.align ? `<${s} align="${t.align}">` : `<${s}>`) + e + `</${s}>
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
  link({ href: t, title: e, tokens: s }) {
    const i = this.parser.parseInline(s), n = at(t);
    if (n === null)
      return i;
    t = n;
    let o = '<a href="' + t + '"';
    return e && (o += ' title="' + V(e) + '"'), o += ">" + i + "</a>", o;
  }
  image({ href: t, title: e, text: s, tokens: i }) {
    i && (s = this.parser.parseInline(i, this.parser.textRenderer));
    const n = at(t);
    if (n === null)
      return V(s);
    t = n;
    let o = `<img src="${t}" alt="${s}"`;
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
  static parse(e, s) {
    return new De(s).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, s) {
    return new De(s).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, s = !0) {
    let i = "";
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (this.options.extensions?.renderers?.[o.type]) {
        const h = o, m = this.options.extensions.renderers[h.type].call({ parser: this }, h);
        if (m !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(h.type)) {
          i += m || "";
          continue;
        }
      }
      const l = o;
      switch (l.type) {
        case "space": {
          i += this.renderer.space(l);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(l);
          continue;
        }
        case "code": {
          i += this.renderer.code(l);
          continue;
        }
        case "table": {
          i += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          i += this.renderer.list(l);
          continue;
        }
        case "html": {
          i += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let h = l, m = this.renderer.text(h);
          for (; n + 1 < e.length && e[n + 1].type === "text"; )
            h = e[++n], m += `
` + this.renderer.text(h);
          s ? i += this.renderer.paragraph({
            type: "paragraph",
            raw: m,
            text: m,
            tokens: [{ type: "text", raw: m, text: m, escaped: !0 }]
          }) : i += m;
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
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, s = this.renderer) {
    let i = "";
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (this.options.extensions?.renderers?.[o.type]) {
        const h = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (h !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          i += h || "";
          continue;
        }
      }
      const l = o;
      switch (l.type) {
        case "escape": {
          i += s.text(l);
          break;
        }
        case "html": {
          i += s.html(l);
          break;
        }
        case "link": {
          i += s.link(l);
          break;
        }
        case "image": {
          i += s.image(l);
          break;
        }
        case "strong": {
          i += s.strong(l);
          break;
        }
        case "em": {
          i += s.em(l);
          break;
        }
        case "codespan": {
          i += s.codespan(l);
          break;
        }
        case "br": {
          i += s.br(l);
          break;
        }
        case "del": {
          i += s.del(l);
          break;
        }
        case "text": {
          i += s.text(l);
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
    return i;
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
    return this.block ? j.lex : j.lexInline;
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
  Lexer = j;
  Tokenizer = ke;
  Hooks = ge;
  constructor(...t) {
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, e) {
    let s = [];
    for (const i of t)
      switch (s = s.concat(e.call(this, i)), i.type) {
        case "table": {
          const n = i;
          for (const o of n.header)
            s = s.concat(this.walkTokens(o.tokens, e));
          for (const o of n.rows)
            for (const l of o)
              s = s.concat(this.walkTokens(l.tokens, e));
          break;
        }
        case "list": {
          const n = i;
          s = s.concat(this.walkTokens(n.items, e));
          break;
        }
        default: {
          const n = i;
          this.defaults.extensions?.childTokens?.[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((o) => {
            const l = n[o].flat(1 / 0);
            s = s.concat(this.walkTokens(l, e));
          }) : n.tokens && (s = s.concat(this.walkTokens(n.tokens, e)));
        }
      }
    return s;
  }
  use(...t) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((s) => {
      const i = { ...s };
      if (i.async = this.defaults.async || i.async || !1, s.extensions && (s.extensions.forEach((n) => {
        if (!n.name)
          throw new Error("extension name required");
        if ("renderer" in n) {
          const o = e.renderers[n.name];
          o ? e.renderers[n.name] = function(...l) {
            let h = n.renderer.apply(this, l);
            return h === !1 && (h = o.apply(this, l)), h;
          } : e.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = e[n.level];
          o ? o.unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (e.childTokens[n.name] = n.childTokens);
      }), i.extensions = e), s.renderer) {
        const n = this.defaults.renderer || new be(this.defaults);
        for (const o in s.renderer) {
          if (!(o in n))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const l = o, h = s.renderer[l], m = n[l];
          n[l] = (...u) => {
            let k = h.apply(n, u);
            return k === !1 && (k = m.apply(n, u)), k || "";
          };
        }
        i.renderer = n;
      }
      if (s.tokenizer) {
        const n = this.defaults.tokenizer || new ke(this.defaults);
        for (const o in s.tokenizer) {
          if (!(o in n))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const l = o, h = s.tokenizer[l], m = n[l];
          n[l] = (...u) => {
            let k = h.apply(n, u);
            return k === !1 && (k = m.apply(n, u)), k;
          };
        }
        i.tokenizer = n;
      }
      if (s.hooks) {
        const n = this.defaults.hooks || new ge();
        for (const o in s.hooks) {
          if (!(o in n))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const l = o, h = s.hooks[l], m = n[l];
          ge.passThroughHooks.has(o) ? n[l] = (u) => {
            if (this.defaults.async)
              return Promise.resolve(h.call(n, u)).then((b) => m.call(n, b));
            const k = h.call(n, u);
            return m.call(n, k);
          } : n[l] = (...u) => {
            let k = h.apply(n, u);
            return k === !1 && (k = m.apply(n, u)), k;
          };
        }
        i.hooks = n;
      }
      if (s.walkTokens) {
        const n = this.defaults.walkTokens, o = s.walkTokens;
        i.walkTokens = function(l) {
          let h = [];
          return h.push(o.call(this, l)), n && (h = h.concat(n.call(this, l))), h;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return j.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return W.parse(t, e ?? this.defaults);
  }
  parseMarkdown(t) {
    return (s, i) => {
      const n = { ...i }, o = { ...this.defaults, ...n }, l = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && n.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = t);
      const h = o.hooks ? o.hooks.provideLexer() : t ? j.lex : j.lexInline, m = o.hooks ? o.hooks.provideParser() : t ? W.parse : W.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((u) => h(u, o)).then((u) => o.hooks ? o.hooks.processAllTokens(u) : u).then((u) => o.walkTokens ? Promise.all(this.walkTokens(u, o.walkTokens)).then(() => u) : u).then((u) => m(u, o)).then((u) => o.hooks ? o.hooks.postprocess(u) : u).catch(l);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let u = h(s, o);
        o.hooks && (u = o.hooks.processAllTokens(u)), o.walkTokens && this.walkTokens(u, o.walkTokens);
        let k = m(u, o);
        return o.hooks && (k = o.hooks.postprocess(k)), k;
      } catch (u) {
        return l(u);
      }
    };
  }
  onError(t, e) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const i = "<p>An error occurred:</p><pre>" + V(s.message + "", !0) + "</pre>";
        return e ? Promise.resolve(i) : i;
      }
      if (e)
        return Promise.reject(s);
      throw s;
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
R.Lexer = j;
R.lexer = j.lex;
R.Tokenizer = ke;
R.Hooks = ge;
R.parse = R;
R.options;
R.setOptions;
R.use;
R.walkTokens;
R.parseInline;
W.parse;
j.lex;
const qs = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function Zs(t) {
  let e;
  for (; (e = qs.exec(t)) !== null; ) {
    const { dateStr: s } = e.groups;
    t = t.replaceAll(
      e[0],
      new Date(s).toLocaleDateString()
    );
  }
  return t;
}
function js(t) {
  return t = Zs(t), R.parse(t);
}
const Ws = (t) => {
  const {
    entry: e
  } = t;
  let s;
  switch (e.severity) {
    case "info":
    case "success":
      s = /* @__PURE__ */ g.createElement(Xe, null);
      break;
    case "warning":
      s = /* @__PURE__ */ g.createElement(Vt, null);
      break;
    case "error":
      s = /* @__PURE__ */ g.createElement(Bt, null);
      break;
    default:
      s = /* @__PURE__ */ g.createElement(Xe, null);
  }
  let i = e.message;
  return Array.isArray(i) || (i = [i]), /* @__PURE__ */ g.createElement("div", { className: B("entry", e.severity, e.category) }, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("span", { className: "icon" }, s), /* @__PURE__ */ g.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), i.map((n) => /* @__PURE__ */ g.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: js(n) }
    }
  )));
}, Gs = (t) => {
  let e;
  const {
    messages: s = []
  } = t;
  return !Array.isArray(s) || s.length > 0 && typeof s[0] != "object" ? e = /* @__PURE__ */ g.createElement(Ye, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : s.length === 0 ? e = /* @__PURE__ */ g.createElement(Ye, { variant: "secondary" }, "There are currently no message") : e = /* @__PURE__ */ g.createElement("div", { className: "messages" }, s.map((i) => /* @__PURE__ */ g.createElement(Ws, { entry: i }))), e;
}, Ei = (t) => {
  const {
    title: e,
    icon: s,
    children: i
  } = t;
  return /* @__PURE__ */ g.createElement(O, { ...t }, /* @__PURE__ */ g.createElement(O.Header, null, /* @__PURE__ */ g.createElement(O.Title, null, /* @__PURE__ */ g.createElement("span", null, s), /* @__PURE__ */ g.createElement("span", null, e))), /* @__PURE__ */ g.createElement(O.Body, null, /* @__PURE__ */ g.createElement(Gs, { ...t })), /* @__PURE__ */ g.createElement(O.Footer, null, i));
}, Ci = (t) => {
  const {
    show: e,
    onHide: s,
    onConfirm: i,
    title: n,
    message: o
  } = t;
  return /* @__PURE__ */ g.createElement(
    O,
    {
      show: e,
      size: "sm",
      onHide: s
    },
    /* @__PURE__ */ g.createElement(O.Header, { closeButton: !0 }, /* @__PURE__ */ g.createElement(O.Title, null, /* @__PURE__ */ g.createElement(Ot, null), /* @__PURE__ */ g.createElement("span", { className: "" }, n))),
    /* @__PURE__ */ g.createElement(O.Body, null, /* @__PURE__ */ g.createElement("p", { className: "ellipsis" }, o)),
    /* @__PURE__ */ g.createElement(O.Footer, null, /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "secondary",
        onClick: s
      },
      "Cancel"
    ), /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "danger",
        onClick: () => {
          i(), s();
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
    positionV: s = "right",
    anchorH: i = "center",
    anchorV: n = "center",
    direction: o = "column",
    children: l,
    ...h
  } = t;
  return /* @__PURE__ */ g.createElement("div", { className: B(
    "decoration",
    `positionH-${e}`,
    `positionV-${s}`,
    `anchorH-${i}`,
    `anchorV-${n}`,
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
    expanded: s,
    setExpanded: i,
    canPin: n = !0,
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
  }, n && c.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn btn-light btn-round",
        onClick: (r) => {
          r.stopPropagation(), m(!h);
        }
      },
      h ? /* @__PURE__ */ g.createElement(Ft, null) : /* @__PURE__ */ g.createElement(qt, null)
    )
  ), o && c.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn btn-light btn-round",
        onClick: (r) => {
          r.stopPropagation(), l();
        }
      },
      /* @__PURE__ */ g.createElement(Zt, null)
    )
  ), /* @__PURE__ */ g.createElement(
    ns,
    {
      ...t,
      className: B(u, {
        pinnable: n,
        closable: o
      }),
      expanded: s || h,
      onExpand: i,
      ref: e
    },
    /* @__PURE__ */ g.createElement(He, null, /* @__PURE__ */ g.createElement(He.Decoration, { ...k }, c), b)
  );
}), $i = (t) => {
  const {
    progress: e,
    label: s
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
    /* @__PURE__ */ g.createElement("div", { className: "progress-label" }, s),
    /* @__PURE__ */ g.createElement(jt, { now: e })
  );
};
function ct(t) {
  const {
    onEvent: e,
    enabled: s = !0,
    style: i = {},
    delay: n,
    ...o
  } = t, { onMouseEnter: l, onMouseLeave: h } = Ut(
    {
      onEvent: e,
      interval: n,
      enabled: s
    }
  );
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      onMouseEnter: l,
      onMouseLeave: h,
      ...o,
      style: {
        ...i,
        display: s ? "block" : "none"
      }
    }
  );
}
let Us = 0;
const Ti = (t) => {
  const [e, s] = G(null), i = F(window), [n, o] = G(() => Us++), {
    name: l = "",
    options: h = "",
    notifications: m
  } = t;
  function u() {
    t.onClose();
  }
  return H(() => {
    const k = document.createElement("div");
    s(k);
  }, []), H(() => {
    function k() {
      if (process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Opening the admin control panel"), t.popup ? i.current = window.open(
        t.url ?? "",
        l,
        "popup"
        // `popup,width=${width},height=${height},top=${top},left=${left}`
      ) : i.current = window.open(
        t.url ?? "",
        "_blank",
        h
      ), !i.current) {
        m.error(
          `Unable to open ${t.name}. Is your browser preventing popups ?`,
          "Failed opening new window",
          1e4
        ), t.onBlocked();
        return;
      }
      i.current.document.close(), i.current.addEventListener("beforeunload", u), i.current.document.body.appendChild(e), Array.from(document.head.querySelectorAll('style,link[rel="stylesheet"]')).forEach((r) => {
        i.current.document.head.appendChild(
          r.cloneNode(!0)
        );
      });
      const b = () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), c.removeEventListener("beforeunload", u), c.close();
      };
      window.addEventListener("beforeunload", b);
      const c = i.current;
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
  ticks: s,
  value: i,
  onChange: n,
  formatter: o = (k) => k,
  className: l = "",
  tooltip_position: h,
  orientation: m = "vertical",
  disabled: u = !1
}) => {
  const k = F(), b = Array.isArray(i), c = Xt();
  function r(d, v) {
    return () => {
      const {
        min: y,
        max: _
      } = k.current.rangeLimits;
      let w = [
        _ - k.current.value.max,
        _ - k.current.value.min
      ];
      return w[v] += d, w[v] = Math.min(_, w[v]), w[v] = Math.max(y, w[v]), n(b ? w : w[v]), !1;
    };
  }
  function a(d) {
    const v = -Math.sign(d.deltaY), {
      min: y,
      max: _
    } = k.current.rangeLimits;
    let w = [
      _ - k.current.value.max,
      _ - k.current.value.min
    ];
    w[1] += v, w[1] = Math.max(y, w[1]), w[1] = Math.min(_, w[1]), n(b ? [
      w[0],
      w[1]
    ] : w[1]), d.stopPropagation();
  }
  if (k.current)
    if (b) {
      let d = k.current.index;
      k.current.thumb[0].current.setAttribute("data-value", o(i[d.max])), k.current.thumb[1].current.setAttribute("data-value", o(i[d.min]));
    } else
      k.current.thumb[0].current.setAttribute("data-value", o(i));
  else
    c();
  const p = /* @__PURE__ */ g.createElement(
    Yt,
    {
      ref: k,
      onInput: (d) => n(b ? [e - d[1], e - d[0]] : e - d[0]),
      value: b ? [e - i[1], e - i[0]] : [e - i, e],
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
        onClick: r(1, 1)
      },
      /* @__PURE__ */ g.createElement(Ke, null)
    ), /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "secondary",
        className: "minus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: r(-1, 1)
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
        onClick: r(1, 0)
      },
      /* @__PURE__ */ g.createElement(Ke, null)
    ), /* @__PURE__ */ g.createElement(
      Y,
      {
        variant: "secondary",
        className: "minus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: r(-1, 0)
      },
      /* @__PURE__ */ g.createElement(Je, null)
    )) : null
  );
}, Si = (t) => {
  const {
    id: e
  } = t, { hideAll: s } = es({
    id: "file-ctx-menu"
  }), [i, n] = G(!1);
  function o(h) {
    h.key === "Escape" && s();
  }
  H(() => {
    if (i)
      return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [i]);
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
      onVisibilityChange: n
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
    onChange: s = () => {
    },
    onAccept: i = () => {
    },
    onAbort: n = () => {
    },
    disabled: o,
    name: l,
    label: h,
    type: m = "text",
    required: u = !1
  } = t;
  function k(r) {
    e[l] = r.target.value, i(e[l], { target: e, name: l });
  }
  function b(r) {
    e[l] = r.target.value, s(e[l], { target: e, name: l });
  }
  function c(r) {
    e[l] = r.target.value, n(e[l], { target: e, name: l });
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
      onKeyDown: (r) => {
        r.key === "Enter" ? k(r) : r.key === "Escape" && c(r);
      }
    }
  ));
}, Pi = (t) => {
  const {
    canPin: e = !1,
    canClose: s = !1,
    value: i,
    onExpand: n = oe,
    pinned: o = !1,
    setPinned: l = oe,
    group: h = "global",
    collapsible: m = !0
  } = t, [u, k] = Kt(h), b = u === i;
  return /* @__PURE__ */ g.createElement(
    Qs,
    {
      ...t,
      pinned: o,
      setPinned: l,
      expanded: b || !m,
      setExpanded: (c) => {
        n(c), k(c ? i : null);
      },
      canPin: e,
      canClose: s
    },
    t.children
  );
};
function Xs(t) {
  return Array.isArray(t) ? t : Object.entries(t).map(([e, s]) => ({ value: isNaN(+e) ? e : +e, label: String(s) }));
}
function Ri(t) {
  const {
    value: e,
    options: s,
    onChange: i,
    disabled: n,
    placeholder: o = "Select…",
    className: l
  } = t, h = gt(() => Xs(s), [s]), m = h.find((u) => u.value === e);
  return /* @__PURE__ */ g.createElement(tt, null, /* @__PURE__ */ g.createElement(
    tt.Toggle,
    {
      disabled: n,
      onMouseDown: (u) => u.stopPropagation()
    },
    m ? m.label : o
  ), /* @__PURE__ */ g.createElement(Gt, null, h.map((u) => /* @__PURE__ */ g.createElement(
    Qt,
    {
      key: String(u.value),
      onClick: () => i(u.value),
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
    var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
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
    var s = (typeof window > "u" ? "undefined" : e(window)) === "object";
    (function(i) {
      if (e(t) === "object" && t.exports) {
        var n;
        try {
          n = require("jquery");
        } catch {
          n = null;
        }
        t.exports = i(n);
      } else window && (window.Slider = i(window.jQuery));
    })(function(i) {
      var n = "slider", o = "bootstrapSlider";
      s && !window.console && (window.console = {}), s && !window.console.log && (window.console.log = function() {
      }), s && !window.console.warn && (window.console.warn = function() {
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
          var r = typeof console > "u" ? u : function(p) {
            console.error(p);
          };
          function a(p, d) {
            b.fn[p] = function(v) {
              if (typeof v == "string") {
                for (var y = m.call(arguments, 1), _ = 0, w = this.length; _ < w; _++) {
                  var L = this[_], T = b.data(L, p);
                  if (!T) {
                    r("cannot call methods on " + p + " prior to initialization; attempted to call '" + v + "'");
                    continue;
                  }
                  if (!b.isFunction(T[v]) || v.charAt(0) === "_") {
                    r("no such method '" + v + "' for " + p + " instance");
                    continue;
                  }
                  var E = T[v].apply(T, y);
                  if (E !== void 0 && E !== T)
                    return E;
                }
                return this;
              } else {
                var x = this.map(function() {
                  var f = b.data(this, p);
                  return f ? (f.option(v), f._init()) : (f = new d(this, v), b.data(this, p, f)), b(this);
                });
                return x.length === 1 ? x[0] : x;
              }
            };
          }
          return b.bridget = function(p, d) {
            c(d), a(p, d);
          }, b.bridget;
        }
        k(h);
      })(i), (function(h) {
        var m = void 0, u = {
          formatInvalidInputErrorMsg: function(r) {
            return "Invalid input value '" + r + "' passed in";
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, k = {
          linear: {
            getValue: function(r, a) {
              return r < a.min ? a.min : r > a.max ? a.max : r;
            },
            toValue: function(r) {
              var a = r / 100 * (this.options.max - this.options.min), p = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var d, v, y, _ = 0, w = 1; w < this.options.ticks_positions.length; w++)
                  if (r <= this.options.ticks_positions[w]) {
                    d = this.options.ticks[w - 1], y = this.options.ticks_positions[w - 1], v = this.options.ticks[w], _ = this.options.ticks_positions[w];
                    break;
                  }
                var L = (r - y) / (_ - y);
                a = d + L * (v - d), p = !1;
              }
              var T = p ? this.options.min : 0, E = T + Math.round(a / this.options.step) * this.options.step;
              return k.linear.getValue(E, this.options);
            },
            toPercentage: function(r) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var a, p, d, v = 0, y = 0; y < this.options.ticks.length; y++)
                  if (r <= this.options.ticks[y]) {
                    a = y > 0 ? this.options.ticks[y - 1] : 0, d = y > 0 ? this.options.ticks_positions[y - 1] : 0, p = this.options.ticks[y], v = this.options.ticks_positions[y];
                    break;
                  }
                if (y > 0) {
                  var _ = (r - a) / (p - a);
                  return d + _ * (v - d);
                }
              }
              return 100 * (r - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(r) {
              var a = 1 - this.options.min, p = Math.log(this.options.min + a), d = Math.log(this.options.max + a), v = Math.exp(p + (d - p) * r / 100) - a;
              return Math.round(v) === d ? d : (v = this.options.min + Math.round((v - this.options.min) / this.options.step) * this.options.step, k.linear.getValue(v, this.options));
            },
            toPercentage: function(r) {
              if (this.options.max === this.options.min)
                return 0;
              var a = 1 - this.options.min, p = Math.log(this.options.max + a), d = Math.log(this.options.min + a), v = Math.log(r + a);
              return 100 * (v - d) / (p - d);
            }
          }
        };
        l = function(r, a) {
          return b.call(this, r, a), this;
        };
        function b(c, r) {
          this._state = {
            value: null,
            enabled: null,
            offset: null,
            size: null,
            percentage: null,
            inDrag: !1,
            over: !1,
            tickIndex: null
          }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, typeof c == "string" ? this.element = document.querySelector(c) : c instanceof HTMLElement && (this.element = c), r = r || {};
          for (var a = Object.keys(this.defaultOptions), p = r.hasOwnProperty("min"), d = r.hasOwnProperty("max"), v = 0; v < a.length; v++) {
            var y = a[v], _ = r[y];
            _ = typeof _ < "u" ? _ : L(this.element, y), _ = _ !== null ? _ : this.defaultOptions[y], this.options || (this.options = {}), this.options[y] = _;
          }
          if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), this.options.rtl === "auto") {
            var w = window.getComputedStyle(this.element);
            w != null ? this.options.rtl = w.direction === "rtl" : this.options.rtl = this.element.style.direction === "rtl";
          }
          this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom") ? this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right" : this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right") && (this.options.tooltip_position = "top");
          function L(z, de) {
            var fe = "data-slider-" + de.replace(/_/g, "-"), se = z.getAttribute(fe);
            try {
              return JSON.parse(se);
            } catch {
              return se;
            }
          }
          var T = this.element.style.width, E = !1, x = this.element.parentNode, f, S, N, C, $;
          if (this.sliderElem)
            E = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var A = document.createElement("div");
            A.className = "slider-track", S = document.createElement("div"), S.className = "slider-track-low", f = document.createElement("div"), f.className = "slider-selection", N = document.createElement("div"), N.className = "slider-track-high", C = document.createElement("div"), C.className = "slider-handle min-slider-handle", C.setAttribute("role", "slider"), C.setAttribute("aria-valuemin", this.options.min), C.setAttribute("aria-valuemax", this.options.max), $ = document.createElement("div"), $.className = "slider-handle max-slider-handle", $.setAttribute("role", "slider"), $.setAttribute("aria-valuemin", this.options.min), $.setAttribute("aria-valuemax", this.options.max), A.appendChild(S), A.appendChild(f), A.appendChild(N), this.rangeHighlightElements = [];
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
            ue.className = "tooltip tooltip-max", ue.setAttribute("role", "presentation"), we(ue), this.sliderElem.appendChild(A), this.sliderElem.appendChild(he), this.sliderElem.appendChild(ce), this.sliderElem.appendChild(ue), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(C), this.sliderElem.appendChild($), x.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (h && (this.$element = h(this.element), this.$sliderElem = h(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), k[this.options.scale] && (this.options.scale = k[this.options.scale]), E === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(z) {
            this._removeProperty(this.trackLow, z), this._removeProperty(this.trackSelection, z), this._removeProperty(this.trackHigh, z);
          }, this), [this.handle1, this.handle2].forEach(function(z) {
            this._removeProperty(z, "left"), this._removeProperty(z, "right"), this._removeProperty(z, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(z) {
            this._removeProperty(z, "bs-tooltip-left"), this._removeProperty(z, "bs-tooltip-right"), this._removeProperty(z, "bs-tooltip-top"), this._removeClass(z, "bs-tooltip-right"), this._removeClass(z, "bs-tooltip-left"), this._removeClass(z, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = T, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (d || (this.options.max = Math.max.apply(Math, this.options.ticks)), p || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = S || this.trackLow, this.trackSelection = f || this.trackSelection, this.trackHigh = N || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = C || this.handle1, this.handle2 = $ || this.handle2, E === !0)
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
            formatter: function(r) {
              return Array.isArray(r) ? r[0] + " : " + r[1] : r;
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
          setValue: function(r, a, p) {
            r || (r = 0);
            var d = this.getValue();
            this._state.value = this._validateInputValue(r);
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
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), h && (this._unbindJQueryEventHandlers(), m === n && this.$element.removeData(m), this.$element.removeData(o));
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
          on: function(r, a) {
            return this._bindNonQueryEventHandler(r, a), this;
          },
          off: function(r, a) {
            h ? (this.$element.off(r, a), this.$sliderElem.off(r, a)) : this._unbindNonQueryEventHandler(r, a);
          },
          getAttribute: function(r) {
            return r ? this.options[r] : this.options;
          },
          setAttribute: function(r, a) {
            return this.options[r] = a, this;
          },
          refresh: function(r) {
            var a = this.getValue();
            return this._removeSliderEventHandlers(), b.call(this, this.element, this.options), r && r.useCurrentValue === !0 && this.setValue(a), h && (m === n ? (h.data(this.element, n, this), h.data(this.element, o, this)) : h.data(this.element, o, this)), this;
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
          _removeTooltipListener: function(r, a) {
            this.handle1.removeEventListener(r, a, !1), this.handle2.removeEventListener(r, a, !1);
          },
          _removeSliderEventHandlers: function() {
            if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
              for (var r = this.ticksContainer.getElementsByClassName("slider-tick"), a = 0; a < r.length; a++)
                r[a].removeEventListener("mouseenter", this.ticksCallbackMap[a].mouseEnter, !1), r[a].removeEventListener("mouseleave", this.ticksCallbackMap[a].mouseLeave, !1);
              this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1));
            }
            this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1)), window.removeEventListener("resize", this.resize, !1);
          },
          _bindNonQueryEventHandler: function(r, a) {
            this.eventToCallbackMap[r] === void 0 && (this.eventToCallbackMap[r] = []), this.eventToCallbackMap[r].push(a);
          },
          _unbindNonQueryEventHandler: function(r, a) {
            var p = this.eventToCallbackMap[r];
            if (p !== void 0) {
              for (var d = 0; d < p.length; d++)
                if (p[d] === a) {
                  p.splice(d, 1);
                  break;
                }
            }
          },
          _cleanUpEventCallbacksMap: function() {
            for (var r = Object.keys(this.eventToCallbackMap), a = 0; a < r.length; a++) {
              var p = r[a];
              delete this.eventToCallbackMap[p];
            }
          },
          _showTooltip: function() {
            this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), this.tooltip.style.display = "none"), this._state.over = !0;
          },
          _hideTooltip: function() {
            this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), this._removeClass(this.tooltip_max, "show")), this._state.over = !1;
          },
          _setToolTipOnMouseOver: function(r) {
            var a = this, p = this.options.formatter(r ? r.value[0] : this._state.value[0]), d = r ? v(r, this.options.reversed) : v(this._state, this.options.reversed);
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
                  var _ = a._copyState(), w = p === a.handle1 ? _.value[0] : _.value[1], L = void 0;
                  d !== void 0 ? (w = a.options.ticks[d], L = a.options.ticks_positions.length > 0 && a.options.ticks_positions[d] || a._toPercentage(a.options.ticks[d])) : L = a._toPercentage(w), _.value[0] = w, _.percentage[0] = L, a._setToolTipOnMouseOver(_), a._showTooltip();
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
            var r, a;
            if (this.options.reversed ? r = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : r = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = r[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), a = this.options.formatter(this._state.value[0]), isNaN(a) ? this.handle1.setAttribute("aria-valuetext", a) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = r[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), a = this.options.formatter(this._state.value[1]), isNaN(a) ? this.handle2.setAttribute("aria-valuetext", a) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
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
              var w = this.options.orientation === "vertical" ? "height" : "width", L;
              this.options.orientation === "vertical" ? L = "marginTop" : this.options.rtl ? L = "marginRight" : L = "marginLeft";
              var T = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var E = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[L] = -T / 2 + "px"), E = this.tickLabelContainer.offsetHeight;
                else
                  for (x = 0; x < this.tickLabelContainer.childNodes.length; x++)
                    this.tickLabelContainer.childNodes[x].offsetHeight > E && (E = this.tickLabelContainer.childNodes[x].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = E + "px");
              }
              for (var x = 0; x < this.options.ticks.length; x++) {
                var f = this.options.ticks_positions[x] || this._toPercentage(this.options.ticks[x]);
                this.options.reversed && (f = 100 - f), this.ticks[x].style[this.stylePos] = f + "%", this._removeClass(this.ticks[x], "in-selection"), this.options.range ? f >= r[0] && f <= r[1] && this._addClass(this.ticks[x], "in-selection") : this.options.selection === "after" && f >= r[0] ? this._addClass(this.ticks[x], "in-selection") : this.options.selection === "before" && f <= r[0] && this._addClass(this.ticks[x], "in-selection"), this.tickLabels[x] && (this.tickLabels[x].style[w] = T + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[x] !== void 0 ? (this.tickLabels[x].style.position = "absolute", this.tickLabels[x].style[this.stylePos] = f + "%", this.tickLabels[x].style[L] = -T / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[x].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[x].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[L] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[x], "label-in-selection label-is-selection"), this.options.range ? f >= r[0] && f <= r[1] && (this._addClass(this.tickLabels[x], "label-in-selection"), (f === r[0] || r[1]) && this._addClass(this.tickLabels[x], "label-is-selection")) : (this.options.selection === "after" && f >= r[0] ? this._addClass(this.tickLabels[x], "label-in-selection") : this.options.selection === "before" && f <= r[0] && this._addClass(this.tickLabels[x], "label-in-selection"), f === r[0] && this._addClass(this.tickLabels[x], "label-is-selection")));
              }
            }
            var S;
            if (this.options.range) {
              S = this.options.formatter(this._state.value), this._setText(this.tooltipInner, S), this.tooltip.style[this.stylePos] = (r[1] + r[0]) / 2 + "%";
              var N = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, N);
              var C = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, C), this.tooltip_min.style[this.stylePos] = r[0] + "%", this.tooltip_max.style[this.stylePos] = r[1] + "%";
            } else
              S = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, S), this.tooltip.style[this.stylePos] = r[0] + "%";
            if (this.options.orientation === "vertical")
              this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(r[0], r[1]) + "%", this.trackSelection.style.top = Math.min(r[0], r[1]) + "%", this.trackSelection.style.height = Math.abs(r[0] - r[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(r[0], r[1]) - Math.abs(r[0] - r[1]) + "%";
            else {
              this.stylePos === "right" ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(r[0], r[1]) + "%", this.stylePos === "right" ? this.trackSelection.style.right = Math.min(r[0], r[1]) + "%" : this.trackSelection.style.left = Math.min(r[0], r[1]) + "%", this.trackSelection.style.width = Math.abs(r[0] - r[1]) + "%", this.stylePos === "right" ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(r[0], r[1]) - Math.abs(r[0] - r[1]) + "%";
              var $ = this.tooltip_min.getBoundingClientRect(), A = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? $.right > A.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : $.right > A.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
            }
          },
          _createHighlightRange: function(r, a) {
            return this._isHighlightRange(r, a) ? r > a ? { start: a, size: r - a } : { start: r, size: a - r } : null;
          },
          _isHighlightRange: function(r, a) {
            return 0 <= r && r <= 100 && 0 <= a && a <= 100;
          },
          _resize: function(r) {
            this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout();
          },
          _removeProperty: function(r, a) {
            r.style.removeProperty ? r.style.removeProperty(a) : r.style.removeAttribute(a);
          },
          _mousedown: function(r) {
            if (!this._state.enabled)
              return !1;
            r.preventDefault && r.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
            var a = this._getPercentage(r);
            if (this.options.range) {
              var p = Math.abs(this._state.percentage[0] - a), d = Math.abs(this._state.percentage[1] - a);
              this._state.dragged = p < d ? 0 : 1, this._adjustPercentageForRangeSliders(a);
            } else
              this._state.dragged = 0;
            this._state.percentage[this._state.dragged] = a, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
            var v = this._calculateValue();
            return this._trigger("slideStart", v), this.setValue(v, !1, !0), r.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
          },
          _touchstart: function(r) {
            this._mousedown(r);
          },
          _triggerFocusOnHandle: function(r) {
            r === 0 && this.handle1.focus(), r === 1 && this.handle2.focus();
          },
          _keydown: function(r, a) {
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
              var w;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var L = void 0;
                L = this.options.ticks.indexOf(this._state.value[r]), L === -1 && (L = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), L += p, L = Math.max(0, Math.min(this.options.ticks.length - 1, L)), w = this.options.ticks[L];
              } else
                w = this._state.value[r] + p * this.options.step;
              var T = this._toPercentage(w);
              if (this._state.keyCtrl = r, this.options.range) {
                this._adjustPercentageForRangeSliders(T);
                var E = this._state.keyCtrl ? this._state.value[0] : w, x = this._state.keyCtrl ? w : this._state.value[1];
                w = [Math.max(this.options.min, Math.min(this.options.max, E)), Math.max(this.options.min, Math.min(this.options.max, x))];
              } else
                w = Math.max(this.options.min, Math.min(this.options.max, w));
              return this._trigger("slideStart", w), this.setValue(w, !0, !0), this._trigger("slideStop", w), this._pauseEvent(a), delete this._state.keyCtrl, !1;
            }
          },
          _pauseEvent: function(r) {
            r.stopPropagation && r.stopPropagation(), r.preventDefault && r.preventDefault(), r.cancelBubble = !0, r.returnValue = !1;
          },
          _mousemove: function(r) {
            if (!this._state.enabled)
              return !1;
            var a = this._getPercentage(r);
            this._adjustPercentageForRangeSliders(a), this._state.percentage[this._state.dragged] = a;
            var p = this._calculateValue(!0);
            return this.setValue(p, !0, !0), !1;
          },
          _touchmove: function(r) {
            r.changedTouches !== void 0 && r.preventDefault && r.preventDefault();
          },
          _adjustPercentageForRangeSliders: function(r) {
            if (this.options.range) {
              var a = this._getNumDigitsAfterDecimalPlace(r);
              a = a ? a - 1 : 0;
              var p = this._applyToFixedAndParseFloat(r, a);
              this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], a) < p ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], a) > p ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < r ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > r && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
            }
          },
          _mouseup: function(r) {
            if (!this._state.enabled)
              return !1;
            var a = this._getPercentage(r);
            this._adjustPercentageForRangeSliders(a), this._state.percentage[this._state.dragged] = a, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
            var p = this._calculateValue(!0);
            return this.setValue(p, !1, !0), this._trigger("slideStop", p), this._state.dragged = null, !1;
          },
          _setValues: function(r, a) {
            var p = r === 0 ? 0 : 100;
            this._state.percentage[r] !== p && (a.data[r] = this._toValue(this._state.percentage[r]), a.data[r] = this._applyPrecision(a.data[r]));
          },
          _calculateValue: function(r) {
            var a = {};
            return this.options.range ? (a.data = [this.options.min, this.options.max], this._setValues(0, a), this._setValues(1, a), r && (a.data[0] = this._snapToClosestTick(a.data[0]), a.data[1] = this._snapToClosestTick(a.data[1]))) : (a.data = this._toValue(this._state.percentage[0]), a.data = parseFloat(a.data), a.data = this._applyPrecision(a.data), r && (a.data = this._snapToClosestTick(a.data))), a.data;
          },
          _snapToClosestTick: function(r) {
            for (var a = [r, 1 / 0], p = 0; p < this.options.ticks.length; p++) {
              var d = Math.abs(this.options.ticks[p] - r);
              d <= a[1] && (a = [this.options.ticks[p], d]);
            }
            return a[1] <= this.options.ticks_snap_bounds ? a[0] : r;
          },
          _applyPrecision: function(r) {
            var a = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
            return this._applyToFixedAndParseFloat(r, a);
          },
          _getNumDigitsAfterDecimalPlace: function(r) {
            var a = ("" + r).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return a ? Math.max(0, (a[1] ? a[1].length : 0) - (a[2] ? +a[2] : 0)) : 0;
          },
          _applyToFixedAndParseFloat: function(r, a) {
            var p = r.toFixed(a);
            return parseFloat(p);
          },
          /*
          	Credits to Mike Samuel for the following method!
          	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
          */
          _getPercentage: function(r) {
            this.touchCapable && (r.type === "touchstart" || r.type === "touchmove" || r.type === "touchend") && (r = r.changedTouches[0]);
            var a = r[this.mousePos], p = this._state.offset[this.stylePos], d = a - p;
            this.stylePos === "right" && (d = -d);
            var v = d / this._state.size * 100;
            return v = Math.round(v / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (v = 100 - v), Math.max(0, Math.min(100, v));
          },
          _validateInputValue: function(r) {
            if (isNaN(+r)) {
              if (Array.isArray(r))
                return this._validateArray(r), r;
              throw new Error(u.formatInvalidInputErrorMsg(r));
            } else return +r;
          },
          _validateArray: function(r) {
            for (var a = 0; a < r.length; a++) {
              var p = r[a];
              if (typeof p != "number")
                throw new Error(u.formatInvalidInputErrorMsg(p));
            }
          },
          _setDataVal: function(r) {
            this.element.setAttribute("data-value", r), this.element.setAttribute("value", r), this.element.value = r;
          },
          _trigger: function(r, a) {
            a = a || a === 0 ? a : void 0;
            var p = this.eventToCallbackMap[r];
            if (p && p.length)
              for (var d = 0; d < p.length; d++) {
                var v = p[d];
                v(a);
              }
            h && this._triggerJQueryEvent(r, a);
          },
          _triggerJQueryEvent: function(r, a) {
            var p = {
              type: r,
              value: a
            };
            this.$element.trigger(p), this.$sliderElem.trigger(p);
          },
          _unbindJQueryEventHandlers: function() {
            this.$element.off(), this.$sliderElem.off();
          },
          _setText: function(r, a) {
            typeof r.textContent < "u" ? r.textContent = a : typeof r.innerText < "u" && (r.innerText = a);
          },
          _removeClass: function(r, a) {
            for (var p = a.split(" "), d = r.className, v = 0; v < p.length; v++) {
              var y = p[v], _ = new RegExp("(?:\\s|^)" + y + "(?:\\s|$)");
              d = d.replace(_, " ");
            }
            r.className = d.trim();
          },
          _addClass: function(r, a) {
            for (var p = a.split(" "), d = r.className, v = 0; v < p.length; v++) {
              var y = p[v], _ = new RegExp("(?:\\s|^)" + y + "(?:\\s|$)"), w = _.test(d);
              w || (d += " " + y);
            }
            r.className = d.trim();
          },
          _offsetLeft: function(r) {
            return r.getBoundingClientRect().left;
          },
          _offsetRight: function(r) {
            return r.getBoundingClientRect().right;
          },
          _offsetTop: function(r) {
            for (var a = r.offsetTop; (r = r.offsetParent) && !isNaN(r.offsetTop); )
              a += r.offsetTop, r.tagName !== "BODY" && (a -= r.scrollTop);
            return a;
          },
          _offset: function(r) {
            return {
              left: this._offsetLeft(r),
              right: this._offsetRight(r),
              top: this._offsetTop(r)
            };
          },
          _css: function(r, a, p) {
            if (h)
              h.style(r, a, p);
            else {
              var d = a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(v, y) {
                return y.toUpperCase();
              });
              r.style[d] = p;
            }
          },
          _toValue: function(r) {
            return this.options.scale.toValue.apply(this, [r]);
          },
          _toPercentage: function(r) {
            return this.options.scale.toPercentage.apply(this, [r]);
          },
          _setTooltipPosition: function() {
            var r = [this.tooltip, this.tooltip_min, this.tooltip_max];
            if (this.options.orientation === "vertical") {
              var a;
              this.options.tooltip_position ? a = this.options.tooltip_position : this.options.rtl ? a = "left" : a = "right";
              var p = a === "left" ? "right" : "left";
              r.forEach((function(d) {
                this._addClass(d, "bs-tooltip-" + a), d.style[p] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? r.forEach((function(d) {
              this._addClass(d, "bs-tooltip-bottom"), d.style.top = "22px";
            }).bind(this)) : r.forEach((function(d) {
              this._addClass(d, "bs-tooltip-top"), d.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(r) {
            for (var a = Math.abs(r - this.options.ticks[0]), p = 0, d = 0; d < this.options.ticks.length; ++d) {
              var v = Math.abs(r - this.options.ticks[d]);
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
        }, h && h.fn && (h.fn.slider ? (s && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), m = o) : (h.bridget(n, l), m = n), h.bridget(o, l), h(function() {
          h("input[data-provide=slider]")[m]();
        }));
      })(i), l;
    });
  })(Pe)), Pe.exports;
}
var Js = Ks();
const Ys = /* @__PURE__ */ Ve(Js), ei = (t, e) => {
  const s = {
    ...t,
    tooltip: t.tooltip || "show"
  };
  let {
    change: i,
    onChange: n,
    value: o
  } = t;
  const l = F(), [h, m] = G();
  return i = i ?? n, H(() => {
    if (l.current) {
      const u = new Ys(l.current, s);
      return m(u), () => u.destroy();
    }
  }, [l.current]), H(() => {
    e && h && (e.current = {
      mySlider: h
    });
  }, [e, h]), H(() => {
    if (h && i) {
      h.on("change", i);
      for (let u in t)
        h.setAttribute(u, t[u]);
      return () => {
        h.off("change", i);
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
  function s() {
  }
  return s.resetWarningCache = e, Ne = function() {
    function i(l, h, m, u, k, b) {
      if (b !== t) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
      }
    }
    i.isRequired = i;
    function n() {
      return i;
    }
    var o = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: n,
      element: i,
      elementType: i,
      instanceOf: n,
      node: i,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: s,
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
const Z = /* @__PURE__ */ Ve(ni);
function ri({
  initialPx: t,
  // preferred: initial width of left pane in pixels
  initialPercent: e = 50,
  // fallback if initialPx not provided
  minA: s = 120,
  minB: i = 120,
  maxA: n,
  // optional px limit for left pane; otherwise auto from container - minB - gutter
  gutter: o = 10,
  style: l,
  children: h,
  onChange: m
  // called with { px, percent }
}) {
  const u = F(null), k = F(!1), [b, c] = G(0), [r, a] = g.Children.toArray(h), p = (T, E, x) => Math.max(E, Math.min(x, T)), d = ee(() => {
    const T = u.current;
    if (!T) return { total: 0, min: 0, max: 0 };
    const E = T.clientWidth, x = Math.max(0, E - o - i), f = typeof n == "number" ? Math.min(n, x) : x, S = Math.min(s, f);
    return { total: E, min: S, max: f };
  }, [o, s, i, n]);
  It(() => {
    if (!u.current) return;
    const { total: E, min: x, max: f } = d();
    let S;
    typeof t == "number" && Number.isFinite(t) ? S = t : S = Math.round(p(e, 0, 100) / 100 * (E - o)), c(p(S, x, f));
  }, [d, t, e, o]), H(() => {
    const T = u.current;
    if (!T) return;
    const E = () => {
      const { total: f, min: S, max: N } = d();
      if (c((C) => p(C, S, N)), m) {
        const C = p(b, S, N), $ = f > 0 ? C / (f - o) * 100 : 0;
        m({ px: C, percent: $ });
      }
    };
    let x;
    return "ResizeObserver" in window ? (x = new ResizeObserver(E), x.observe(T)) : window.addEventListener("resize", E), () => {
      x ? x.disconnect() : window.removeEventListener("resize", E);
    };
  }, [d, o, m, b]);
  const v = ee((T) => {
    const E = u.current;
    if (!E) return;
    k.current = !0, T.currentTarget.setPointerCapture?.(T.pointerId);
    const x = (S) => {
      if (!k.current) return;
      const N = E.getBoundingClientRect(), C = S.clientX - N.left, { total: $, min: A, max: M } = d(), D = p(C, A, M);
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
      window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f);
    };
    window.addEventListener("pointermove", x), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }, [d, o, m]);
  ee(() => {
    const { total: T, min: E, max: x } = d();
    let f;
    typeof t == "number" && Number.isFinite(t) ? f = t : f = Math.round(p(e, 0, 100) / 100 * (T - o)), c(p(f, E, x));
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
  ), { min: _, max: w, total: L } = d();
  return /* @__PURE__ */ g.createElement("div", { ref: u, className: "splitpane", style: { ...y, ...l || {} } }, /* @__PURE__ */ g.createElement("div", { className: "pane", style: { minWidth: 0, minHeight: 0 } }, r), /* @__PURE__ */ g.createElement(
    "div",
    {
      role: "separator",
      "aria-orientation": "vertical",
      "aria-valuemin": _,
      "aria-valuemax": w,
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
  initialPx: Z.number,
  initialPercent: Z.number,
  // used only if initialPx is not provided
  minA: Z.number,
  minB: Z.number,
  maxA: Z.number,
  gutter: Z.number,
  style: Z.object,
  children: Z.node.isRequired,
  onChange: Z.func
};
const Ni = (t) => {
  const {
    className: e,
    range: s,
    itemSize: i,
    selectionRange: n,
    itemRenderer: o,
    keyBindings: l = {},
    indicators: h = [],
    ...m
  } = t, u = t.style || {}, {
    callbacks: k,
    isSelecting: b,
    onMouseUp: c
  } = Jt(n), r = ee((d) => o(d, k(d), {
    selectionRange: n,
    isSelecting: b
  }), [s, b, o]), a = {
    width: 5e3,
    position: "absolute",
    left: -2500,
    zIndex: 1e3,
    height: 5e3
  };
  function p(d) {
    const {
      range: v,
      caption: y,
      name: _
    } = d;
    let w = v.count, L = v.first;
    return /* @__PURE__ */ g.createElement(
      "div",
      {
        onClick: (T) => {
          T.stopPropagation(), s.jumpToFirst(L);
        },
        className: `indicator indicator-${_}`,
        style: {
          position: "absolute",
          height: `calc(max(var(--indicator-min-height), ${w / s.max * 100}%))`,
          top: `${L / s.max * 100}%`
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
          ...a,
          bottom: -i
        },
        className: "auto-scroll auto-scroll-up",
        onMouseUp: c,
        enabled: b,
        onEvent: () => {
          s.moveUp(), s.first < n.first ? n.first = s.first : s.first > n.first && s.first < n.last && (n.last = s.first + 1);
        }
      }
    )),
    /* @__PURE__ */ g.createElement(
      os,
      {
        itemSize: i,
        itemRenderer: r,
        range: s,
        ...m,
        style: {
          ...u
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
      h.filter((d) => d.enabled).map(p)
    ),
    /* @__PURE__ */ g.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ g.createElement(
      ct,
      {
        style: {
          ...a,
          top: -i - 40
        },
        className: "auto-scroll auto-scroll-down",
        onMouseUp: c,
        enabled: b,
        onEvent: () => {
          s.moveDown(), s.last > n.last ? n.last = s.last : s.last !== s.max && s.last <= n.last && s.last > n.first && (n.first = s.last - 1);
        }
      }
    ))
  );
};
function oi(t) {
  const {
    width: e,
    height: s,
    side: i = "top",
    arrowBase: n = 20,
    arrowLength: o = 10,
    borderRadius: l = 10,
    padding: h = 8,
    strokeWidth: m = 2,
    seamOverlap: u = 0.5
  } = t || {}, k = Math.max(0, Number(e) || 0), b = Math.max(0, Number(s) || 0), c = Math.max(0, Number(n) || 0), r = Math.max(0, Number(o) || 0), a = Math.max(0, Number(l) || 0), p = Math.max(0, Number(h) || 0), d = Math.max(0, Number(m) || 0), v = k + p * 2, y = b + p * 2, _ = i === "left" || i === "right" ? r : 0, w = i === "top" || i === "bottom" ? r : 0, L = v + _ + d, T = y + w + d, E = i === "left" ? r : 0, x = i === "top" ? r : 0, f = Math.min(a, Math.min(v, y) / 2), S = E + v / 2, N = x + y / 2, C = E, $ = x, A = C + v, M = $ + y, K = [
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
  r > 0 && c > 0 && (i === "right" ? D = [
    `M ${A - u} ${N - c / 2}`,
    `L ${A + r} ${N}`,
    `L ${A - u} ${N + c / 2}`,
    "Z"
  ].join(" ") : i === "left" ? D = [
    `M ${C + u} ${N + c / 2}`,
    `L ${C - r} ${N}`,
    `L ${C + u} ${N - c / 2}`,
    "Z"
  ].join(" ") : i === "top" ? D = [
    `M ${S - c / 2} ${$ + u}`,
    `L ${S} ${$ - r}`,
    `L ${S + c / 2} ${$ + u}`,
    "Z"
  ].join(" ") : i === "bottom" && (D = [
    `M ${S + c / 2} ${M - u}`,
    `L ${S} ${M + r}`,
    `L ${S - c / 2} ${M - u}`,
    "Z"
  ].join(" ")));
  let q = "";
  if (i === "right")
    q = [
      `M ${C + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${N - c / 2}`,
      ...r > 0 && c > 0 ? [`L ${A + r} ${N}`, `L ${A} ${N + c / 2}`] : [],
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
      "Z"
    ].join(" ");
  else if (i === "left")
    q = [
      `M ${C + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${N + c / 2}`,
      ...r > 0 && c > 0 ? [`L ${C - r} ${N}`, `L ${C} ${N - c / 2}`] : [],
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
      "Z"
    ].join(" ");
  else if (i === "top")
    q = [
      `M ${S} ${$ - r}`,
      ...r > 0 && c > 0 ? [`L ${S + c / 2} ${$}`] : [],
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
      ...r > 0 && c > 0 ? [`H ${S - c / 2}`] : [],
      "Z"
    ].join(" ");
  else if (i === "bottom") {
    const J = [
      `M ${C + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`
    ];
    r > 0 && c > 0 && J.push(
      `H ${S + c / 2}`,
      `L ${S} ${M + r}`,
      `L ${S - c / 2} ${M}`
    ), J.push(
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      // ✅ bas-gauche correct
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${$}`,
      "Z"
    ), q = J.join(" ");
  }
  const te = { top: i === "top" ? -r : 0, left: i === "left" ? -r : 0 }, Q = { x: E + p, y: x + p };
  return {
    // géométrie
    outlineD: q,
    // à utiliser pour le stroke (bordure unique)
    rectD: K,
    // fill bulle
    arrowD: D,
    // fill flèche (chevauchement interne minime)
    // métriques utiles
    width: L,
    height: T,
    viewBox: `0 0 ${L} ${T}`,
    viewBoxRectOnly: `0 0 ${v} ${y}`,
    transformRectToOrigin: `translate(${-E}, ${-x})`,
    rect: { x: E, y: x, w: v, h: y, r: f },
    offset: te,
    contentOffset: Q,
    strokeWidth: d
  };
}
function zi({
  side: t = "right",
  arrowBase: e = 20,
  arrowLength: s = 10,
  borderRadius: i = 10,
  stroke: n = "#111827",
  bubbleFill: o = "#fff",
  arrowFill: l = "#fff",
  strokeWidth: h = 2,
  style: m,
  seamOverlap: u = 0.5,
  children: k,
  ...b
}) {
  const c = g.useRef(null), { width: r = 0, height: a = 0 } = Be({ targetRef: c }), p = g.useMemo(() => !r || !a ? null : oi({
    width: r,
    // = clientWidth (inclut padding)
    height: a,
    // = clientHeight (inclut padding)
    padding: 0,
    // le div gère déjà son padding visuel
    side: t,
    arrowBase: e,
    arrowLength: s,
    borderRadius: i,
    strokeWidth: h,
    seamOverlap: u
  }), [
    r,
    a,
    t,
    e,
    s,
    i,
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
        viewBox: `0 0 ${r} ${a}`,
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
          stroke: n,
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
