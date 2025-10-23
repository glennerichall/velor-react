import g, { forwardRef as ze, Children as Dt, useRef as B, useState as O, useEffect as I, useCallback as te, createPortal as Ht, useMemo as gt, useLayoutEffect as Vt, useContext as Bt } from "react";
import { useResizeDetector as Ie } from "react-resize-detector";
import { waitForStableBoundingRect as Ot, recursiveMap as Ft } from "./utils.es.js";
import { noOp as U } from "velor-utils/utils/functional.mjs";
import q from "react-bootstrap/Modal";
import { InfoCircleFill as Ze, ExclamationTriangleFill as qt, ExclamationSquareFill as Gt, ExclamationDiamondFill as jt, Pin as Wt, PinAngle as Zt, XLg as Qt, PlusCircleFill as Qe, DashCircleFill as Ue } from "react-bootstrap-icons";
import { Alert as Xe, ProgressBar as Ut, Form as Ke, FormControl as Xt, Dropdown as Je, DropdownMenu as Kt, DropdownItem as Jt } from "react-bootstrap";
import ee from "react-bootstrap/Button";
import { u as Yt, a as es, b as vt, c as ts, d as ss } from "./hooks-CXV0bVeN.js";
import { R as qi } from "./hooks-CXV0bVeN.js";
import "react-range-slider-input/dist/style.css";
import is from "react-range-slider-input";
import Ye from "react-bootstrap/ButtonGroup";
import { useContextMenu as ns, Menu as rs, Item as et } from "react-contexify";
function De(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ce = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var tt;
function os() {
  return tt || (tt = 1, (function(t) {
    (function() {
      var e = {}.hasOwnProperty;
      function s() {
        for (var o = "", l = 0; l < arguments.length; l++) {
          var h = arguments[l];
          h && (o = i(o, r(h)));
        }
        return o;
      }
      function r(o) {
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
          e.call(o, h) && o[h] && (l = i(l, h));
        return l;
      }
      function i(o, l) {
        return l ? o ? o + " " + l : o + l : o;
      }
      t.exports ? (s.default = s, t.exports = s) : window.classNames = s;
    })();
  })(Ce)), Ce.exports;
}
var as = os();
const V = /* @__PURE__ */ De(as), st = "animating-expand", it = "animating-collapse", nt = "animating", rt = "collapsed", Te = "expanded", kt = ze((t, e) => {
  const {
    children: s,
    expanded: r,
    onClick: i = U,
    onStateChanged: o = U,
    onTransitionEnd: l = U,
    caption: h,
    className: m,
    fitParentWidth: p = !1,
    fitParentHeight: k = !1,
    style: b = {}
  } = t;
  if (Dt.count(s) === 0) return null;
  const c = B(), n = B(), [a, u] = O(!0), [d, v] = O([]), _ = () => {
    const y = n.current.getBoundingClientRect();
    let f = y.width + "px", L = y.height + "px";
    p && (f = "100%"), k && (L = "100%"), c.current.style.width = f, c.current.style.height = L;
  }, w = () => {
    c.current.style.width = "1.7em", c.current.style.height = "1.7em";
  }, x = () => {
    v([
      it,
      nt
    ]), w();
  }, S = () => {
    v([
      st,
      nt
    ]), _();
  }, C = () => d.includes(st), E = () => d.includes(it);
  return I(() => {
    r ? (v([Te]), _(), o(!0)) : (v([rt]), w(), o(!1)), u(!1);
  }, []), I(() => {
    a || (r ? S() : x());
  }, [r]), Ie({
    targetRef: n,
    onResize: (y, f) => {
      d.includes(Te) && Ot(n.current, _);
    }
  }), I(() => {
    e && (e.current = c.current);
  }, [e, c.current]), /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: c,
      onTransitionEnd: (y) => {
        l(y), y.propertyName === "width" && (E() && !r ? (v([rt]), o(!1)) : C() && r && (v([Te]), o(!0)));
      },
      onMouseDown: (y) => y.stopPropagation(),
      onClick: (y) => {
        y.stopPropagation(), i();
      },
      style: b,
      className: V(
        d,
        m,
        "collapsible"
      )
    },
    /* @__PURE__ */ g.createElement("span", { className: "caption", ref: e }, h),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: n,
        className: "content"
      },
      s
    )
  );
}), Ei = (t) => Ft(t.children, (e) => g.cloneElement(e, {
  disabled: e.props.disabled || t.disabled
})), Ci = (t) => {
  const {
    notifications: e,
    variant: s,
    visible: r = !1,
    bordered: i = !1,
    size: o
  } = t, l = B(), h = B(), [m, p] = O(!1);
  function k(b) {
    b.preventDefault(), b.stopPropagation(), m ? (p(!1), l.current.style.width = null, l.current.style.height = null) : (p(!0), l.current.style.width = h.current.scrollWidth + "px", l.current.style.height = h.current.scrollHeight + "px");
  }
  return I(() => {
    const b = (c) => {
      c.stopPropagation(), p(!1), l.current && (l.current.style.width = null, l.current.style.height = null);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), t.children ? /* @__PURE__ */ g.createElement("div", { style: { position: "relative", width: "fit-content" } }, /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: l,
      onClick: k,
      className: V(
        s,
        o,
        "dot-notification",
        {
          bordered: i,
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
      className: V(
        s,
        o,
        "dot-notification",
        {
          bordered: i,
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
}, ls = (t) => {
  const {
    visible: e,
    className: s = "",
    location: r = "left",
    ...i
  } = t;
  return /* @__PURE__ */ g.createElement("div", { className: V(
    "drawer-container",
    `${r}-drawer`,
    {
      "horizontal-drawer": r === "left" || r === "right",
      "vertical-drawer": r === "top" || r === "bottom"
    }
  ) }, /* @__PURE__ */ g.createElement(
    "div",
    {
      ...i,
      className: V(
        s,
        { visible: e },
        "drawer"
      )
    },
    t.children
  ));
}, Ti = (t) => {
  const {
    visibleItem: e
  } = t;
  return g.Children.map(t.children, (s) => {
    if (!g.isValidElement(s))
      return s;
    const {
      title: r,
      name: i,
      loading: o,
      className: l,
      id: h,
      onClose: m
    } = s.props;
    return /* @__PURE__ */ g.createElement(
      ls,
      {
        id: h,
        className: l,
        visible: e === i,
        title: r,
        name: i,
        loading: o,
        onClose: m
      },
      s
    );
  });
}, hs = (t) => {
  const e = B(), {
    itemRenderer: s,
    itemSize: r,
    range: i
  } = t;
  if (!i || !i.valid)
    return;
  const [o, l] = O(0);
  I(() => {
    i.count = Math.floor(o / r) - 1;
  }, [i, i.max, o, r]);
  const h = i.max > 0, m = te((k) => {
    const b = Math.sign(k.deltaY);
    i.moveDown(b);
  }, [i]);
  Ie({
    targetRef: e,
    onResize: te(({ height: k }) => {
      l(k);
    }, [])
  });
  const p = [];
  for (let k of i) {
    let b = s(k);
    b !== null && p.push(b);
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
    /* @__PURE__ */ g.createElement("div", { className: "viewport" }, /* @__PURE__ */ g.createElement("div", { className: "content" }, p), /* @__PURE__ */ g.createElement(
      "input",
      {
        type: "range",
        onFocus: (k) => {
          k.target.blur();
        },
        className: "vertical-range",
        onClick: (k) => k.stopPropagation(),
        onChange: (k) => i.jumpToFirst(k.target.value),
        disabled: !h,
        value: i.first,
        min: 0,
        max: i.max
      }
    ))
  );
};
function He() {
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
var K = He();
function bt(t) {
  K = t;
}
var oe = { exec: () => null };
function P(t, e = "") {
  let s = typeof t == "string" ? t : t.source;
  const r = {
    replace: (i, o) => {
      let l = typeof o == "string" ? o : o.source;
      return l = l.replace(D.caret, "$1"), s = s.replace(i, l), r;
    },
    getRegex: () => new RegExp(s, e)
  };
  return r;
}
var D = {
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
}, cs = /^(?:[ \t]*(?:\n|$))+/, us = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ps = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ae = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ds = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ve = /(?:[*+-]|\d{1,9}[.)])/, _t = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, yt = P(_t).replace(/bull/g, Ve).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), fs = P(_t).replace(/bull/g, Ve).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Be = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ms = /^[^\n]+/, Oe = /(?!\s*\])(?:\\.|[^\[\]\\])+/, gs = P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Oe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), vs = P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ve).getRegex(), _e = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Fe = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ks = P(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Fe).replace("tag", _e).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), wt = P(Be).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), bs = P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", wt).getRegex(), qe = {
  blockquote: bs,
  code: us,
  def: gs,
  fences: ps,
  heading: ds,
  hr: ae,
  html: ks,
  lheading: yt,
  list: vs,
  newline: cs,
  paragraph: wt,
  table: oe,
  text: ms
}, ot = P(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), _s = {
  ...qe,
  lheading: fs,
  table: ot,
  paragraph: P(Be).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ot).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex()
}, ys = {
  ...qe,
  html: P(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Fe).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: oe,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: P(Be).replace("hr", ae).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", yt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ws = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, xs = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, xt = /^( {2,}|\\)\n(?!\s*$)/, Es = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ye = /[\p{P}\p{S}]/u, Ge = /[\s\p{P}\p{S}]/u, Et = /[^\s\p{P}\p{S}]/u, Cs = P(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ge).getRegex(), Ct = /(?!~)[\p{P}\p{S}]/u, Ts = /(?!~)[\s\p{P}\p{S}]/u, $s = /(?:[^\s\p{P}\p{S}]|~)/u, Ls = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Tt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ss = P(Tt, "u").replace(/punct/g, ye).getRegex(), As = P(Tt, "u").replace(/punct/g, Ct).getRegex(), $t = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ps = P($t, "gu").replace(/notPunctSpace/g, Et).replace(/punctSpace/g, Ge).replace(/punct/g, ye).getRegex(), Rs = P($t, "gu").replace(/notPunctSpace/g, $s).replace(/punctSpace/g, Ts).replace(/punct/g, Ct).getRegex(), Ns = P(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, Et).replace(/punctSpace/g, Ge).replace(/punct/g, ye).getRegex(), Ms = P(/\\(punct)/, "gu").replace(/punct/g, ye).getRegex(), zs = P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Is = P(Fe).replace("(?:-->|$)", "-->").getRegex(), Ds = P(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", Is).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ve = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Hs = P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ve).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Lt = P(/^!?\[(label)\]\[(ref)\]/).replace("label", ve).replace("ref", Oe).getRegex(), St = P(/^!?\[(ref)\](?:\[\])?/).replace("ref", Oe).getRegex(), Vs = P("reflink|nolink(?!\\()", "g").replace("reflink", Lt).replace("nolink", St).getRegex(), je = {
  _backpedal: oe,
  // only used for GFM url
  anyPunctuation: Ms,
  autolink: zs,
  blockSkip: Ls,
  br: xt,
  code: xs,
  del: oe,
  emStrongLDelim: Ss,
  emStrongRDelimAst: Ps,
  emStrongRDelimUnd: Ns,
  escape: ws,
  link: Hs,
  nolink: St,
  punctuation: Cs,
  reflink: Lt,
  reflinkSearch: Vs,
  tag: Ds,
  text: Es,
  url: oe
}, Bs = {
  ...je,
  link: P(/^!?\[(label)\]\((.*?)\)/).replace("label", ve).getRegex(),
  reflink: P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ve).getRegex()
}, Pe = {
  ...je,
  emStrongRDelimAst: Rs,
  emStrongLDelim: As,
  url: P(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Os = {
  ...Pe,
  br: P(xt).replace("{2,}", "*").getRegex(),
  text: P(Pe.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, me = {
  normal: qe,
  gfm: _s,
  pedantic: ys
}, ne = {
  normal: je,
  gfm: Pe,
  breaks: Os,
  pedantic: Bs
}, Fs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, at = (t) => Fs[t];
function F(t, e) {
  if (e) {
    if (D.escapeTest.test(t))
      return t.replace(D.escapeReplace, at);
  } else if (D.escapeTestNoEncode.test(t))
    return t.replace(D.escapeReplaceNoEncode, at);
  return t;
}
function lt(t) {
  try {
    t = encodeURI(t).replace(D.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function ht(t, e) {
  const s = t.replace(D.findPipe, (o, l, h) => {
    let m = !1, p = l;
    for (; --p >= 0 && h[p] === "\\"; ) m = !m;
    return m ? "|" : " |";
  }), r = s.split(D.splitPipe);
  let i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; ) r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(D.slashPipe, "|");
  return r;
}
function re(t, e, s) {
  const r = t.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r && t.charAt(r - i - 1) === e; )
    i++;
  return t.slice(0, r - i);
}
function qs(t, e) {
  if (t.indexOf(e[1]) === -1)
    return -1;
  let s = 0;
  for (let r = 0; r < t.length; r++)
    if (t[r] === "\\")
      r++;
    else if (t[r] === e[0])
      s++;
    else if (t[r] === e[1] && (s--, s < 0))
      return r;
  return s > 0 ? -2 : -1;
}
function ct(t, e, s, r, i) {
  const o = e.href, l = e.title || null, h = t[1].replace(i.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  const m = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: s,
    href: o,
    title: l,
    text: h,
    tokens: r.inlineTokens(h)
  };
  return r.state.inLink = !1, m;
}
function Gs(t, e, s) {
  const r = t.match(s.other.indentCodeCompensation);
  if (r === null)
    return e;
  const i = r[1];
  return e.split(`
`).map((o) => {
    const l = o.match(s.other.beginningSpace);
    if (l === null)
      return o;
    const [h] = l;
    return h.length >= i.length ? o.slice(i.length) : o;
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
    this.options = t || K;
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
        text: this.options.pedantic ? s : re(s, `
`)
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const s = e[0], r = Gs(s, e[3] || "", this.rules);
      return {
        type: "code",
        raw: s,
        lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
        text: r
      };
    }
  }
  heading(t) {
    const e = this.rules.block.heading.exec(t);
    if (e) {
      let s = e[2].trim();
      if (this.rules.other.endingHash.test(s)) {
        const r = re(s, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (s = r.trim());
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
        raw: re(e[0], `
`)
      };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      let s = re(e[0], `
`).split(`
`), r = "", i = "";
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
        const p = h.join(`
`), k = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${p}` : p, i = i ? `${i}
${k}` : k;
        const b = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(k, o, !0), this.lexer.state.top = b, s.length === 0)
          break;
        const c = o.at(-1);
        if (c?.type === "code")
          break;
        if (c?.type === "blockquote") {
          const n = c, a = n.raw + `
` + s.join(`
`), u = this.blockquote(a);
          o[o.length - 1] = u, r = r.substring(0, r.length - n.raw.length) + u.raw, i = i.substring(0, i.length - n.text.length) + u.text;
          break;
        } else if (c?.type === "list") {
          const n = c, a = n.raw + `
` + s.join(`
`), u = this.list(a);
          o[o.length - 1] = u, r = r.substring(0, r.length - c.raw.length) + u.raw, i = i.substring(0, i.length - n.raw.length) + u.raw, s = a.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: o,
        text: i
      };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let s = e[1].trim();
      const r = s.length > 1, i = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +s.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      s = r ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = r ? s : "[*+-]");
      const o = this.rules.other.listItemRegex(s);
      let l = !1;
      for (; t; ) {
        let m = !1, p = "", k = "";
        if (!(e = o.exec(t)) || this.rules.block.hr.test(t))
          break;
        p = e[0], t = t.substring(p.length);
        let b = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (v) => " ".repeat(3 * v.length)), c = t.split(`
`, 1)[0], n = !b.trim(), a = 0;
        if (this.options.pedantic ? (a = 2, k = b.trimStart()) : n ? a = e[1].length + 1 : (a = e[2].search(this.rules.other.nonSpaceChar), a = a > 4 ? 1 : a, k = b.slice(a), a += e[1].length), n && this.rules.other.blankLine.test(c) && (p += c + `
`, t = t.substring(c.length + 1), m = !0), !m) {
          const v = this.rules.other.nextBulletRegex(a), _ = this.rules.other.hrRegex(a), w = this.rules.other.fencesBeginRegex(a), x = this.rules.other.headingBeginRegex(a), S = this.rules.other.htmlBeginRegex(a);
          for (; t; ) {
            const C = t.split(`
`, 1)[0];
            let E;
            if (c = C, this.options.pedantic ? (c = c.replace(this.rules.other.listReplaceNesting, "  "), E = c) : E = c.replace(this.rules.other.tabCharGlobal, "    "), w.test(c) || x.test(c) || S.test(c) || v.test(c) || _.test(c))
              break;
            if (E.search(this.rules.other.nonSpaceChar) >= a || !c.trim())
              k += `
` + E.slice(a);
            else {
              if (n || b.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || w.test(b) || x.test(b) || _.test(b))
                break;
              k += `
` + c;
            }
            !n && !c.trim() && (n = !0), p += C + `
`, t = t.substring(C.length + 1), b = E.slice(a);
          }
        }
        i.loose || (l ? i.loose = !0 : this.rules.other.doubleBlankLine.test(p) && (l = !0));
        let u = null, d;
        this.options.gfm && (u = this.rules.other.listIsTask.exec(k), u && (d = u[0] !== "[ ] ", k = k.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: p,
          task: !!u,
          checked: d,
          loose: !1,
          text: k,
          tokens: []
        }), i.raw += p;
      }
      const h = i.items.at(-1);
      if (h)
        h.raw = h.raw.trimEnd(), h.text = h.text.trimEnd();
      else
        return;
      i.raw = i.raw.trimEnd();
      for (let m = 0; m < i.items.length; m++)
        if (this.lexer.state.top = !1, i.items[m].tokens = this.lexer.blockTokens(i.items[m].text, []), !i.loose) {
          const p = i.items[m].tokens.filter((b) => b.type === "space"), k = p.length > 0 && p.some((b) => this.rules.other.anyLine.test(b.raw));
          i.loose = k;
        }
      if (i.loose)
        for (let m = 0; m < i.items.length; m++)
          i.items[m].loose = !0;
      return i;
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
      const s = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return {
        type: "def",
        tag: s,
        raw: e[0],
        href: r,
        title: i
      };
    }
  }
  table(t) {
    const e = this.rules.block.table.exec(t);
    if (!e || !this.rules.other.tableDelimiter.test(e[2]))
      return;
    const s = ht(e[1]), r = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === r.length) {
      for (const l of r)
        this.rules.other.tableAlignRight.test(l) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? o.align.push("left") : o.align.push(null);
      for (let l = 0; l < s.length; l++)
        o.header.push({
          text: s[l],
          tokens: this.lexer.inline(s[l]),
          header: !0,
          align: o.align[l]
        });
      for (const l of i)
        o.rows.push(ht(l, o.header.length).map((h, m) => ({
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
        const o = re(s.slice(0, -1), "\\");
        if ((s.length - o.length) % 2 === 0)
          return;
      } else {
        const o = qs(e[2], "()");
        if (o === -2)
          return;
        if (o > -1) {
          const h = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + o;
          e[2] = e[2].substring(0, o), e[0] = e[0].substring(0, h).trim(), e[3] = "";
        }
      }
      let r = e[2], i = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(r);
        o && (r = o[1], i = o[3]);
      } else
        i = e[3] ? e[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), ct(e, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, e[0], this.lexer, this.rules);
    }
  }
  reflink(t, e) {
    let s;
    if ((s = this.rules.inline.reflink.exec(t)) || (s = this.rules.inline.nolink.exec(t))) {
      const r = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = e[r.toLowerCase()];
      if (!i) {
        const o = s[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return ct(s, i, s[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, s = "") {
    let r = this.rules.inline.emStrongLDelim.exec(t);
    if (!r || r[3] && s.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const o = [...r[0]].length - 1;
      let l, h, m = o, p = 0;
      const k = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, e = e.slice(-1 * t.length + o); (r = k.exec(e)) != null; ) {
        if (l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !l) continue;
        if (h = [...l].length, r[3] || r[4]) {
          m += h;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + h) % 3)) {
          p += h;
          continue;
        }
        if (m -= h, m > 0) continue;
        h = Math.min(h, h + m + p);
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
      let s = e[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(s), i = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
      return r && i && (s = s.substring(1, s.length - 1)), {
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
      let s, r;
      return e[2] === "@" ? (s = e[1], r = "mailto:" + s) : (s = e[1], r = s), {
        type: "link",
        raw: e[0],
        text: s,
        href: r,
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
      let s, r;
      if (e[2] === "@")
        s = e[0], r = "mailto:" + s;
      else {
        let i;
        do
          i = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (i !== e[0]);
        s = e[0], e[1] === "www." ? r = "http://" + e[0] : r = e[0];
      }
      return {
        type: "link",
        raw: e[0],
        text: s,
        href: r,
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
}, W = class Re {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || K, this.options.tokenizer = this.options.tokenizer || new ke(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const s = {
      other: D,
      block: me.normal,
      inline: ne.normal
    };
    this.options.pedantic ? (s.block = me.pedantic, s.inline = ne.pedantic) : this.options.gfm && (s.block = me.gfm, this.options.breaks ? s.inline = ne.breaks : s.inline = ne.gfm), this.tokenizer.rules = s;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: me,
      inline: ne
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, s) {
    return new Re(s).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, s) {
    return new Re(s).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(D.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let s = 0; s < this.inlineQueue.length; s++) {
      const r = this.inlineQueue[s];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, s = [], r = !1) {
    for (this.options.pedantic && (e = e.replace(D.tabCharGlobal, "    ").replace(D.spaceLine, "")); e; ) {
      let i;
      if (this.options.extensions?.block?.some((l) => (i = l.call({ lexer: this }, e, s)) ? (e = e.substring(i.raw.length), s.push(i), !0) : !1))
        continue;
      if (i = this.tokenizer.space(e)) {
        e = e.substring(i.raw.length);
        const l = s.at(-1);
        i.raw.length === 1 && l !== void 0 ? l.raw += `
` : s.push(i);
        continue;
      }
      if (i = this.tokenizer.code(e)) {
        e = e.substring(i.raw.length);
        const l = s.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += `
` + i.raw, l.text += `
` + i.text, this.inlineQueue.at(-1).src = l.text) : s.push(i);
        continue;
      }
      if (i = this.tokenizer.fences(e)) {
        e = e.substring(i.raw.length), s.push(i);
        continue;
      }
      if (i = this.tokenizer.heading(e)) {
        e = e.substring(i.raw.length), s.push(i);
        continue;
      }
      if (i = this.tokenizer.hr(e)) {
        e = e.substring(i.raw.length), s.push(i);
        continue;
      }
      if (i = this.tokenizer.blockquote(e)) {
        e = e.substring(i.raw.length), s.push(i);
        continue;
      }
      if (i = this.tokenizer.list(e)) {
        e = e.substring(i.raw.length), s.push(i);
        continue;
      }
      if (i = this.tokenizer.html(e)) {
        e = e.substring(i.raw.length), s.push(i);
        continue;
      }
      if (i = this.tokenizer.def(e)) {
        e = e.substring(i.raw.length);
        const l = s.at(-1);
        l?.type === "paragraph" || l?.type === "text" ? (l.raw += `
` + i.raw, l.text += `
` + i.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
          href: i.href,
          title: i.title
        });
        continue;
      }
      if (i = this.tokenizer.table(e)) {
        e = e.substring(i.raw.length), s.push(i);
        continue;
      }
      if (i = this.tokenizer.lheading(e)) {
        e = e.substring(i.raw.length), s.push(i);
        continue;
      }
      let o = e;
      if (this.options.extensions?.startBlock) {
        let l = 1 / 0;
        const h = e.slice(1);
        let m;
        this.options.extensions.startBlock.forEach((p) => {
          m = p.call({ lexer: this }, h), typeof m == "number" && m >= 0 && (l = Math.min(l, m));
        }), l < 1 / 0 && l >= 0 && (o = e.substring(0, l + 1));
      }
      if (this.state.top && (i = this.tokenizer.paragraph(o))) {
        const l = s.at(-1);
        r && l?.type === "paragraph" ? (l.raw += `
` + i.raw, l.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : s.push(i), r = o.length !== e.length, e = e.substring(i.raw.length);
        continue;
      }
      if (i = this.tokenizer.text(e)) {
        e = e.substring(i.raw.length);
        const l = s.at(-1);
        l?.type === "text" ? (l.raw += `
` + i.raw, l.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : s.push(i);
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
    let r = e, i = null;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          h.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let o = !1, l = "";
    for (; e; ) {
      o || (l = ""), o = !1;
      let h;
      if (this.options.extensions?.inline?.some((p) => (h = p.call({ lexer: this }, e, s)) ? (e = e.substring(h.raw.length), s.push(h), !0) : !1))
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
        const p = s.at(-1);
        h.type === "text" && p?.type === "text" ? (p.raw += h.raw, p.text += h.text) : s.push(h);
        continue;
      }
      if (h = this.tokenizer.emStrong(e, r, l)) {
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
        let p = 1 / 0;
        const k = e.slice(1);
        let b;
        this.options.extensions.startInline.forEach((c) => {
          b = c.call({ lexer: this }, k), typeof b == "number" && b >= 0 && (p = Math.min(p, b));
        }), p < 1 / 0 && p >= 0 && (m = e.substring(0, p + 1));
      }
      if (h = this.tokenizer.inlineText(m)) {
        e = e.substring(h.raw.length), h.raw.slice(-1) !== "_" && (l = h.raw.slice(-1)), o = !0;
        const p = s.at(-1);
        p?.type === "text" ? (p.raw += h.raw, p.text += h.text) : s.push(h);
        continue;
      }
      if (e) {
        const p = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(p);
          break;
        } else
          throw new Error(p);
      }
    }
    return s;
  }
}, be = class {
  options;
  parser;
  // set by the parser
  constructor(t) {
    this.options = t || K;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: e, escaped: s }) {
    const r = (e || "").match(D.notSpaceStart)?.[0], i = t.replace(D.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + F(r) + '">' + (s ? i : F(i, !0)) + `</code></pre>
` : "<pre><code>" + (s ? i : F(i, !0)) + `</code></pre>
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
    let r = "";
    for (let l = 0; l < t.items.length; l++) {
      const h = t.items[l];
      r += this.listitem(h);
    }
    const i = e ? "ol" : "ul", o = e && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + i + o + `>
` + r + "</" + i + `>
`;
  }
  listitem(t) {
    let e = "";
    if (t.task) {
      const s = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = s + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = s + " " + F(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
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
    for (let i = 0; i < t.header.length; i++)
      s += this.tablecell(t.header[i]);
    e += this.tablerow({ text: s });
    let r = "";
    for (let i = 0; i < t.rows.length; i++) {
      const o = t.rows[i];
      s = "";
      for (let l = 0; l < o.length; l++)
        s += this.tablecell(o[l]);
      r += this.tablerow({ text: s });
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
    return `<code>${F(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: e, tokens: s }) {
    const r = this.parser.parseInline(s), i = lt(t);
    if (i === null)
      return r;
    t = i;
    let o = '<a href="' + t + '"';
    return e && (o += ' title="' + F(e) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: t, title: e, text: s, tokens: r }) {
    r && (s = this.parser.parseInline(r, this.parser.textRenderer));
    const i = lt(t);
    if (i === null)
      return F(s);
    t = i;
    let o = `<img src="${t}" alt="${s}"`;
    return e && (o += ` title="${F(e)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : F(t.text);
  }
}, We = class {
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
}, Z = class Ne {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || K, this.options.renderer = this.options.renderer || new be(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new We();
  }
  /**
   * Static Parse Method
   */
  static parse(e, s) {
    return new Ne(s).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, s) {
    return new Ne(s).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, s = !0) {
    let r = "";
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
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
          for (; i + 1 < e.length && e[i + 1].type === "text"; )
            h = e[++i], m += `
` + this.renderer.text(h);
          s ? r += this.renderer.paragraph({
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
  parseInline(e, s = this.renderer) {
    let r = "";
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
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
          r += s.text(l);
          break;
        }
        case "html": {
          r += s.html(l);
          break;
        }
        case "link": {
          r += s.link(l);
          break;
        }
        case "image": {
          r += s.image(l);
          break;
        }
        case "strong": {
          r += s.strong(l);
          break;
        }
        case "em": {
          r += s.em(l);
          break;
        }
        case "codespan": {
          r += s.codespan(l);
          break;
        }
        case "br": {
          r += s.br(l);
          break;
        }
        case "del": {
          r += s.del(l);
          break;
        }
        case "text": {
          r += s.text(l);
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
    this.options = t || K;
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
    return this.block ? W.lex : W.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? Z.parse : Z.parseInline;
  }
}, js = class {
  defaults = He();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = Z;
  Renderer = be;
  TextRenderer = We;
  Lexer = W;
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
    for (const r of t)
      switch (s = s.concat(e.call(this, r)), r.type) {
        case "table": {
          const i = r;
          for (const o of i.header)
            s = s.concat(this.walkTokens(o.tokens, e));
          for (const o of i.rows)
            for (const l of o)
              s = s.concat(this.walkTokens(l.tokens, e));
          break;
        }
        case "list": {
          const i = r;
          s = s.concat(this.walkTokens(i.items, e));
          break;
        }
        default: {
          const i = r;
          this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((o) => {
            const l = i[o].flat(1 / 0);
            s = s.concat(this.walkTokens(l, e));
          }) : i.tokens && (s = s.concat(this.walkTokens(i.tokens, e)));
        }
      }
    return s;
  }
  use(...t) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((s) => {
      const r = { ...s };
      if (r.async = this.defaults.async || r.async || !1, s.extensions && (s.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const o = e.renderers[i.name];
          o ? e.renderers[i.name] = function(...l) {
            let h = i.renderer.apply(this, l);
            return h === !1 && (h = o.apply(this, l)), h;
          } : e.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = e[i.level];
          o ? o.unshift(i.tokenizer) : e[i.level] = [i.tokenizer], i.start && (i.level === "block" ? e.startBlock ? e.startBlock.push(i.start) : e.startBlock = [i.start] : i.level === "inline" && (e.startInline ? e.startInline.push(i.start) : e.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
      }), r.extensions = e), s.renderer) {
        const i = this.defaults.renderer || new be(this.defaults);
        for (const o in s.renderer) {
          if (!(o in i))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const l = o, h = s.renderer[l], m = i[l];
          i[l] = (...p) => {
            let k = h.apply(i, p);
            return k === !1 && (k = m.apply(i, p)), k || "";
          };
        }
        r.renderer = i;
      }
      if (s.tokenizer) {
        const i = this.defaults.tokenizer || new ke(this.defaults);
        for (const o in s.tokenizer) {
          if (!(o in i))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const l = o, h = s.tokenizer[l], m = i[l];
          i[l] = (...p) => {
            let k = h.apply(i, p);
            return k === !1 && (k = m.apply(i, p)), k;
          };
        }
        r.tokenizer = i;
      }
      if (s.hooks) {
        const i = this.defaults.hooks || new ge();
        for (const o in s.hooks) {
          if (!(o in i))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const l = o, h = s.hooks[l], m = i[l];
          ge.passThroughHooks.has(o) ? i[l] = (p) => {
            if (this.defaults.async)
              return Promise.resolve(h.call(i, p)).then((b) => m.call(i, b));
            const k = h.call(i, p);
            return m.call(i, k);
          } : i[l] = (...p) => {
            let k = h.apply(i, p);
            return k === !1 && (k = m.apply(i, p)), k;
          };
        }
        r.hooks = i;
      }
      if (s.walkTokens) {
        const i = this.defaults.walkTokens, o = s.walkTokens;
        r.walkTokens = function(l) {
          let h = [];
          return h.push(o.call(this, l)), i && (h = h.concat(i.call(this, l))), h;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return W.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return Z.parse(t, e ?? this.defaults);
  }
  parseMarkdown(t) {
    return (s, r) => {
      const i = { ...r }, o = { ...this.defaults, ...i }, l = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && i.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = t);
      const h = o.hooks ? o.hooks.provideLexer() : t ? W.lex : W.lexInline, m = o.hooks ? o.hooks.provideParser() : t ? Z.parse : Z.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((p) => h(p, o)).then((p) => o.hooks ? o.hooks.processAllTokens(p) : p).then((p) => o.walkTokens ? Promise.all(this.walkTokens(p, o.walkTokens)).then(() => p) : p).then((p) => m(p, o)).then((p) => o.hooks ? o.hooks.postprocess(p) : p).catch(l);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let p = h(s, o);
        o.hooks && (p = o.hooks.processAllTokens(p)), o.walkTokens && this.walkTokens(p, o.walkTokens);
        let k = m(p, o);
        return o.hooks && (k = o.hooks.postprocess(k)), k;
      } catch (p) {
        return l(p);
      }
    };
  }
  onError(t, e) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const r = "<p>An error occurred:</p><pre>" + F(s.message + "", !0) + "</pre>";
        return e ? Promise.resolve(r) : r;
      }
      if (e)
        return Promise.reject(s);
      throw s;
    };
  }
}, X = new js();
function R(t, e) {
  return X.parse(t, e);
}
R.options = R.setOptions = function(t) {
  return X.setOptions(t), R.defaults = X.defaults, bt(R.defaults), R;
};
R.getDefaults = He;
R.defaults = K;
R.use = function(...t) {
  return X.use(...t), R.defaults = X.defaults, bt(R.defaults), R;
};
R.walkTokens = function(t, e) {
  return X.walkTokens(t, e);
};
R.parseInline = X.parseInline;
R.Parser = Z;
R.parser = Z.parse;
R.Renderer = be;
R.TextRenderer = We;
R.Lexer = W;
R.lexer = W.lex;
R.Tokenizer = ke;
R.Hooks = ge;
R.parse = R;
R.options;
R.setOptions;
R.use;
R.walkTokens;
R.parseInline;
Z.parse;
W.lex;
const Ws = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function Zs(t) {
  let e;
  for (; (e = Ws.exec(t)) !== null; ) {
    const { dateStr: s } = e.groups;
    t = t.replaceAll(
      e[0],
      new Date(s).toLocaleDateString()
    );
  }
  return t;
}
function Qs(t) {
  return t = Zs(t), R.parse(t);
}
const Us = (t) => {
  const {
    entry: e
  } = t;
  let s;
  switch (e.severity) {
    case "info":
    case "success":
      s = /* @__PURE__ */ g.createElement(Ze, null);
      break;
    case "warning":
      s = /* @__PURE__ */ g.createElement(Gt, null);
      break;
    case "error":
      s = /* @__PURE__ */ g.createElement(qt, null);
      break;
    default:
      s = /* @__PURE__ */ g.createElement(Ze, null);
  }
  let r = e.message;
  return Array.isArray(r) || (r = [r]), /* @__PURE__ */ g.createElement("div", { className: V("entry", e.severity, e.category) }, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("span", { className: "icon" }, s), /* @__PURE__ */ g.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), r.map((i) => /* @__PURE__ */ g.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: Qs(i) }
    }
  )));
}, Xs = (t) => {
  let e;
  const {
    messages: s = []
  } = t;
  return !Array.isArray(s) || s.length > 0 && typeof s[0] != "object" ? e = /* @__PURE__ */ g.createElement(Xe, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : s.length === 0 ? e = /* @__PURE__ */ g.createElement(Xe, { variant: "secondary" }, "There are currently no message") : e = /* @__PURE__ */ g.createElement("div", { className: "messages" }, s.map((r) => /* @__PURE__ */ g.createElement(Us, { entry: r }))), e;
}, $i = (t) => {
  const {
    title: e,
    icon: s,
    children: r
  } = t;
  return /* @__PURE__ */ g.createElement(q, { ...t }, /* @__PURE__ */ g.createElement(q.Header, null, /* @__PURE__ */ g.createElement(q.Title, null, /* @__PURE__ */ g.createElement("span", null, s), /* @__PURE__ */ g.createElement("span", null, e))), /* @__PURE__ */ g.createElement(q.Body, null, /* @__PURE__ */ g.createElement(Xs, { ...t })), /* @__PURE__ */ g.createElement(q.Footer, null, r));
}, Li = (t) => {
  const {
    show: e,
    onHide: s,
    onConfirm: r,
    title: i,
    message: o
  } = t;
  return /* @__PURE__ */ g.createElement(
    q,
    {
      show: e,
      size: "sm",
      onHide: s
    },
    /* @__PURE__ */ g.createElement(q.Header, { closeButton: !0 }, /* @__PURE__ */ g.createElement(q.Title, null, /* @__PURE__ */ g.createElement(jt, null), /* @__PURE__ */ g.createElement("span", { className: "" }, i))),
    /* @__PURE__ */ g.createElement(q.Body, null, /* @__PURE__ */ g.createElement("p", { className: "ellipsis" }, o)),
    /* @__PURE__ */ g.createElement(q.Footer, null, /* @__PURE__ */ g.createElement(
      ee,
      {
        variant: "secondary",
        onClick: s
      },
      "Cancel"
    ), /* @__PURE__ */ g.createElement(
      ee,
      {
        variant: "danger",
        onClick: () => {
          r(), s();
        }
      },
      "Proceed"
    ))
  );
}, Me = (t) => {
  const {
    children: e
  } = t;
  return /* @__PURE__ */ g.createElement("div", { className: V("decorated-container") }, e);
};
Me.Decoration = (t) => {
  const {
    positionH: e = "top",
    positionV: s = "right",
    anchorH: r = "center",
    anchorV: i = "center",
    direction: o = "column",
    children: l,
    ...h
  } = t;
  return /* @__PURE__ */ g.createElement("div", { className: V(
    "decoration",
    `positionH-${e}`,
    `positionV-${s}`,
    `anchorH-${r}`,
    `anchorV-${i}`,
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
const Ks = ze((t, e) => {
  let {
    expanded: s,
    onClick: r,
    canPin: i = !0,
    canClose: o = !0,
    onClose: l = U,
    pinned: h,
    setPinned: m,
    className: p,
    pin: k = {},
    children: b
  } = t;
  O(!1);
  const c = [];
  return k = {
    direction: "row",
    positionH: "right",
    anchorH: "right",
    anchorV: "center",
    positionV: "top",
    ...k
  }, i && c.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn btn-light btn-round",
        onClick: (n) => {
          n.stopPropagation(), m(!h);
        }
      },
      h ? /* @__PURE__ */ g.createElement(Wt, null) : /* @__PURE__ */ g.createElement(Zt, null)
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
      /* @__PURE__ */ g.createElement(Qt, null)
    )
  ), /* @__PURE__ */ g.createElement(
    kt,
    {
      ...t,
      className: V(p, {
        pinnable: i,
        closable: o
      }),
      expanded: s || h,
      onClick: r,
      ref: e
    },
    /* @__PURE__ */ g.createElement(Me, null, /* @__PURE__ */ g.createElement(Me.Decoration, { ...k }, c), b)
  );
}), Si = (t) => {
  const {
    progress: e,
    label: s
  } = t;
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: V(
        "progress-container",
        "animate__slower",
        "animate__animated",
        {
          animate__fadeOut: e >= 100 || e <= 0
        }
      )
    },
    /* @__PURE__ */ g.createElement("div", { className: "progress-label" }, s),
    /* @__PURE__ */ g.createElement(Ut, { now: e })
  );
};
function ut(t) {
  const {
    onEvent: e,
    enabled: s = !0,
    style: r = {},
    delay: i,
    ...o
  } = t, { onMouseEnter: l, onMouseLeave: h } = Yt(
    {
      onEvent: e,
      interval: i,
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
        ...r,
        display: s ? "block" : "none"
      }
    }
  );
}
let Js = 0;
const Ai = (t) => {
  const [e, s] = O(null), r = B(window), [i, o] = O(() => Js++), {
    name: l = "",
    options: h = "",
    notifications: m
  } = t;
  function p() {
    t.onClose();
  }
  return I(() => {
    const k = document.createElement("div");
    s(k);
  }, []), I(() => {
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
      r.current.document.close(), r.current.addEventListener("beforeunload", p), r.current.document.body.appendChild(e), Array.from(document.head.querySelectorAll('style,link[rel="stylesheet"]')).forEach((n) => {
        r.current.document.head.appendChild(
          n.cloneNode(!0)
        );
      });
      const b = () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), c.removeEventListener("beforeunload", p), c.close();
      };
      window.addEventListener("beforeunload", b);
      const c = r.current;
      return () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), window.removeEventListener("beforeunload", b), c.close();
      };
    }
    if (e)
      return k();
  }, [e]), e && Ht(t.children, e);
}, Pi = ({
  min: t,
  max: e,
  ticks: s,
  value: r,
  onChange: i,
  formatter: o = (k) => k,
  className: l = "",
  tooltip_position: h,
  orientation: m = "vertical",
  disabled: p = !1
}) => {
  const k = B(), b = Array.isArray(r), c = es();
  function n(d, v) {
    return () => {
      const {
        min: _,
        max: w
      } = k.current.rangeLimits;
      let x = [
        w - k.current.value.max,
        w - k.current.value.min
      ];
      return x[v] += d, x[v] = Math.min(w, x[v]), x[v] = Math.max(_, x[v]), i(b ? x : x[v]), !1;
    };
  }
  function a(d) {
    if (p) return;
    const v = -Math.sign(d.deltaY), {
      min: _,
      max: w
    } = k.current.rangeLimits;
    let x = [
      w - k.current.value.max,
      w - k.current.value.min
    ];
    x[1] += v, x[1] = Math.max(_, x[1]), x[1] = Math.min(w, x[1]), i(b ? [
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
  const u = /* @__PURE__ */ g.createElement(
    is,
    {
      ref: k,
      onInput: (d) => i(b ? [e - d[1], e - d[0]] : e - d[0]),
      value: b ? [e - r[1], e - r[0]] : [e - r, e],
      step: 1,
      max: e,
      min: t,
      disabled: p,
      thumbsDisabled: [!1, !b],
      orientation: m
    }
  );
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: V(
        l,
        "slider",
        `slider-${m}`,
        {
          dual: b,
          disabled: p
        }
      ),
      onWheel: a
    },
    /* @__PURE__ */ g.createElement(Ye, { className: "max-btns" }, /* @__PURE__ */ g.createElement(
      ee,
      {
        variant: "secondary",
        className: "plus",
        disabled: p,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(1, 1)
      },
      /* @__PURE__ */ g.createElement(Qe, null)
    ), /* @__PURE__ */ g.createElement(
      ee,
      {
        variant: "secondary",
        className: "minus",
        disabled: p,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(-1, 1)
      },
      /* @__PURE__ */ g.createElement(Ue, null)
    )),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (d) => d.stopPropagation()
      },
      u
    ),
    b ? /* @__PURE__ */ g.createElement(Ye, { className: "min-btns" }, /* @__PURE__ */ g.createElement(
      ee,
      {
        variant: "secondary",
        className: "plus",
        disabled: p,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(1, 0)
      },
      /* @__PURE__ */ g.createElement(Qe, null)
    ), /* @__PURE__ */ g.createElement(
      ee,
      {
        variant: "secondary",
        className: "minus",
        disabled: p,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(-1, 0)
      },
      /* @__PURE__ */ g.createElement(Ue, null)
    )) : null
  );
}, Ri = (t) => {
  const {
    id: e
  } = t, { hideAll: s } = ns({
    id: "file-ctx-menu"
  }), [r, i] = O(!1);
  function o(h) {
    h.key === "Escape" && s();
  }
  I(() => {
    if (r)
      return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [r]);
  function l(h) {
    const {
      elem: m,
      name: p,
      value: k,
      index: b
    } = h;
  }
  return /* @__PURE__ */ g.createElement(
    rs,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: i
    },
    /* @__PURE__ */ g.createElement(
      et,
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
    /* @__PURE__ */ g.createElement(et, { id: "cut" }, "Cut")
  );
}, Ni = (t) => {
  const {
    target: e,
    onChange: s = () => {
    },
    onAccept: r = () => {
    },
    onAbort: i = () => {
    },
    disabled: o,
    name: l,
    label: h,
    type: m = "text",
    required: p = !1
  } = t;
  function k(n) {
    e[l] = n.target.value, r(e[l], { target: e, name: l });
  }
  function b(n) {
    e[l] = n.target.value, s(e[l], { target: e, name: l });
  }
  function c(n) {
    e[l] = n.target.value, i(e[l], { target: e, name: l });
  }
  return /* @__PURE__ */ React.createElement(Ke.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(Ke.Label, { className: "text-secondary small", htmlFor: l }, h), /* @__PURE__ */ React.createElement(
    Xt,
    {
      id: l,
      type: m,
      disabled: o,
      value: e[l] ?? "",
      name: l,
      onChange: b,
      required: p,
      onKeyDown: (n) => {
        n.key === "Enter" ? k(n) : n.key === "Escape" && c(n);
      }
    }
  ));
}, Mi = (t) => {
  const {
    canPin: e = !1,
    canClose: s = !1,
    onClose: r,
    value: i,
    onClick: o = U,
    pinned: l = !1,
    setPinned: h = U,
    group: m = "global",
    collapsible: p = !0,
    visible: k = !0,
    children: b,
    ...c
  } = t, [n, a] = vt(m), u = n === i;
  return k ? /* @__PURE__ */ g.createElement(
    Ks,
    {
      ...c,
      pinned: l,
      onClose: r,
      setPinned: h,
      expanded: u || !p,
      onClick: () => {
        o(), a(i);
      },
      canPin: e,
      canClose: s
    },
    b
  ) : null;
};
function Ys(t) {
  return Array.isArray(t) ? t : Object.entries(t).map(([e, s]) => ({ value: isNaN(+e) ? e : +e, label: String(s) }));
}
function zi(t) {
  const {
    value: e,
    options: s,
    onChange: r,
    disabled: i,
    placeholder: o = "Select…",
    className: l
  } = t, h = gt(() => Ys(s), [s]), m = h.find((p) => p.value === e);
  return /* @__PURE__ */ g.createElement(Je, null, /* @__PURE__ */ g.createElement(
    Je.Toggle,
    {
      disabled: i,
      onMouseDown: (p) => p.stopPropagation()
    },
    m ? m.label : o
  ), /* @__PURE__ */ g.createElement(Kt, null, h.map((p) => /* @__PURE__ */ g.createElement(
    Jt,
    {
      key: String(p.value),
      onClick: () => r(p.value),
      "aria-disabled": p.disabled
    },
    p.label
  ))));
}
var $e = { exports: {} };
/*! =======================================================
                      VERSION  11.0.2              
========================================================= */
var pt;
function ei() {
  return pt || (pt = 1, (function(t) {
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
    var s = (typeof window > "u" ? "undefined" : e(window)) === "object";
    (function(r) {
      if (e(t) === "object" && t.exports) {
        var i;
        try {
          i = require("jquery");
        } catch {
          i = null;
        }
        t.exports = r(i);
      } else window && (window.Slider = r(window.jQuery));
    })(function(r) {
      var i = "slider", o = "bootstrapSlider";
      s && !window.console && (window.console = {}), s && !window.console.log && (window.console.log = function() {
      }), s && !window.console.warn && (window.console.warn = function() {
      });
      var l;
      return (function(h) {
        var m = Array.prototype.slice;
        function p() {
        }
        function k(b) {
          if (!b)
            return;
          function c(u) {
            u.prototype.option || (u.prototype.option = function(d) {
              b.isPlainObject(d) && (this.options = b.extend(!0, this.options, d));
            });
          }
          var n = typeof console > "u" ? p : function(u) {
            console.error(u);
          };
          function a(u, d) {
            b.fn[u] = function(v) {
              if (typeof v == "string") {
                for (var _ = m.call(arguments, 1), w = 0, x = this.length; w < x; w++) {
                  var S = this[w], C = b.data(S, u);
                  if (!C) {
                    n("cannot call methods on " + u + " prior to initialization; attempted to call '" + v + "'");
                    continue;
                  }
                  if (!b.isFunction(C[v]) || v.charAt(0) === "_") {
                    n("no such method '" + v + "' for " + u + " instance");
                    continue;
                  }
                  var E = C[v].apply(C, _);
                  if (E !== void 0 && E !== C)
                    return E;
                }
                return this;
              } else {
                var y = this.map(function() {
                  var f = b.data(this, u);
                  return f ? (f.option(v), f._init()) : (f = new d(this, v), b.data(this, u, f)), b(this);
                });
                return y.length === 1 ? y[0] : y;
              }
            };
          }
          return b.bridget = function(u, d) {
            c(d), a(u, d);
          }, b.bridget;
        }
        k(h);
      })(r), (function(h) {
        var m = void 0, p = {
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
              var a = n / 100 * (this.options.max - this.options.min), u = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var d, v, _, w = 0, x = 1; x < this.options.ticks_positions.length; x++)
                  if (n <= this.options.ticks_positions[x]) {
                    d = this.options.ticks[x - 1], _ = this.options.ticks_positions[x - 1], v = this.options.ticks[x], w = this.options.ticks_positions[x];
                    break;
                  }
                var S = (n - _) / (w - _);
                a = d + S * (v - d), u = !1;
              }
              var C = u ? this.options.min : 0, E = C + Math.round(a / this.options.step) * this.options.step;
              return k.linear.getValue(E, this.options);
            },
            toPercentage: function(n) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var a, u, d, v = 0, _ = 0; _ < this.options.ticks.length; _++)
                  if (n <= this.options.ticks[_]) {
                    a = _ > 0 ? this.options.ticks[_ - 1] : 0, d = _ > 0 ? this.options.ticks_positions[_ - 1] : 0, u = this.options.ticks[_], v = this.options.ticks_positions[_];
                    break;
                  }
                if (_ > 0) {
                  var w = (n - a) / (u - a);
                  return d + w * (v - d);
                }
              }
              return 100 * (n - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(n) {
              var a = 1 - this.options.min, u = Math.log(this.options.min + a), d = Math.log(this.options.max + a), v = Math.exp(u + (d - u) * n / 100) - a;
              return Math.round(v) === d ? d : (v = this.options.min + Math.round((v - this.options.min) / this.options.step) * this.options.step, k.linear.getValue(v, this.options));
            },
            toPercentage: function(n) {
              if (this.options.max === this.options.min)
                return 0;
              var a = 1 - this.options.min, u = Math.log(this.options.max + a), d = Math.log(this.options.min + a), v = Math.log(n + a);
              return 100 * (v - d) / (u - d);
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
          for (var a = Object.keys(this.defaultOptions), u = n.hasOwnProperty("min"), d = n.hasOwnProperty("max"), v = 0; v < a.length; v++) {
            var _ = a[v], w = n[_];
            w = typeof w < "u" ? w : S(this.element, _), w = w !== null ? w : this.defaultOptions[_], this.options || (this.options = {}), this.options[_] = w;
          }
          if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), this.options.rtl === "auto") {
            var x = window.getComputedStyle(this.element);
            x != null ? this.options.rtl = x.direction === "rtl" : this.options.rtl = this.element.style.direction === "rtl";
          }
          this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom") ? this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right" : this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right") && (this.options.tooltip_position = "top");
          function S(z, de) {
            var fe = "data-slider-" + de.replace(/_/g, "-"), ie = z.getAttribute(fe);
            try {
              return JSON.parse(ie);
            } catch {
              return ie;
            }
          }
          var C = this.element.style.width, E = !1, y = this.element.parentNode, f, L, M, T, $;
          if (this.sliderElem)
            E = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var A = document.createElement("div");
            A.className = "slider-track", L = document.createElement("div"), L.className = "slider-track-low", f = document.createElement("div"), f.className = "slider-selection", M = document.createElement("div"), M.className = "slider-track-high", T = document.createElement("div"), T.className = "slider-handle min-slider-handle", T.setAttribute("role", "slider"), T.setAttribute("aria-valuemin", this.options.min), T.setAttribute("aria-valuemax", this.options.max), $ = document.createElement("div"), $.className = "slider-handle max-slider-handle", $.setAttribute("role", "slider"), $.setAttribute("aria-valuemin", this.options.min), $.setAttribute("aria-valuemax", this.options.max), A.appendChild(L), A.appendChild(f), A.appendChild(M), this.rangeHighlightElements = [];
            var N = this.options.rangeHighlights;
            if (Array.isArray(N) && N.length > 0)
              for (var J = 0; J < N.length; J++) {
                var H = document.createElement("div"), G = N[J].class || "";
                H.className = "slider-rangeHighlight slider-selection " + G, this.rangeHighlightElements.push(H), A.appendChild(H);
              }
            var se = Array.isArray(this.options.labelledby);
            if (se && this.options.labelledby[0] && T.setAttribute("aria-labelledby", this.options.labelledby[0]), se && this.options.labelledby[1] && $.setAttribute("aria-labelledby", this.options.labelledby[1]), !se && this.options.labelledby && (T.setAttribute("aria-labelledby", this.options.labelledby), $.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", v = 0; v < this.options.ticks.length; v++) {
                var Q = document.createElement("div");
                if (Q.className = "slider-tick", this.options.ticks_tooltip) {
                  var Y = this._addTickListener(), Pt = Y.addMouseEnter(this, Q, v), Rt = Y.addMouseLeave(this, Q);
                  this.ticksCallbackMap[v] = {
                    mouseEnter: Pt,
                    mouseLeave: Rt
                  };
                }
                this.ticks.push(Q), this.ticksContainer.appendChild(Q);
              }
              f.className += " tick-slider-selection";
            }
            if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
              for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", v = 0; v < this.options.ticks_labels.length; v++) {
                var le = document.createElement("div"), Nt = this.options.ticks_positions.length === 0, Mt = this.options.reversed && Nt ? this.options.ticks_labels.length - (v + 1) : v;
                le.className = "slider-tick-label", le.innerHTML = this.options.ticks_labels[Mt], this.tickLabels.push(le), this.tickLabelContainer.appendChild(le);
              }
            var we = function(de) {
              var fe = document.createElement("div");
              fe.className = "arrow";
              var ie = document.createElement("div");
              ie.className = "tooltip-inner", de.appendChild(fe), de.appendChild(ie);
            }, he = document.createElement("div");
            he.className = "tooltip tooltip-main", he.setAttribute("role", "presentation"), we(he);
            var ce = document.createElement("div");
            ce.className = "tooltip tooltip-min", ce.setAttribute("role", "presentation"), we(ce);
            var ue = document.createElement("div");
            ue.className = "tooltip tooltip-max", ue.setAttribute("role", "presentation"), we(ue), this.sliderElem.appendChild(A), this.sliderElem.appendChild(he), this.sliderElem.appendChild(ce), this.sliderElem.appendChild(ue), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(T), this.sliderElem.appendChild($), y.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (h && (this.$element = h(this.element), this.$sliderElem = h(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), k[this.options.scale] && (this.options.scale = k[this.options.scale]), E === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(z) {
            this._removeProperty(this.trackLow, z), this._removeProperty(this.trackSelection, z), this._removeProperty(this.trackHigh, z);
          }, this), [this.handle1, this.handle2].forEach(function(z) {
            this._removeProperty(z, "left"), this._removeProperty(z, "right"), this._removeProperty(z, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(z) {
            this._removeProperty(z, "bs-tooltip-left"), this._removeProperty(z, "bs-tooltip-right"), this._removeProperty(z, "bs-tooltip-top"), this._removeClass(z, "bs-tooltip-right"), this._removeClass(z, "bs-tooltip-left"), this._removeClass(z, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = C, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (d || (this.options.max = Math.max.apply(Math, this.options.ticks)), u || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = L || this.trackLow, this.trackSelection = f || this.trackSelection, this.trackHigh = M || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = T || this.handle1, this.handle2 = $ || this.handle2, E === !0)
            for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), v = 0; v < this.ticks.length; v++)
              this._removeClass(this.ticks[v], "round triangle hide");
          var zt = ["round", "triangle", "custom"], It = zt.indexOf(this.options.handle) !== -1;
          if (It)
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
          setValue: function(n, a, u) {
            n || (n = 0);
            var d = this.getValue();
            this._state.value = this._validateInputValue(n);
            var v = this._applyPrecision.bind(this);
            this.options.range ? (this._state.value[0] = v(this._state.value[0]), this._state.value[1] = v(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = v(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this.options.selection === "after" ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
            var _ = this.options.range ? this._state.value : this._state.value[0];
            this._setDataVal(_), a === !0 && this._trigger("slide", _);
            var w = !1;
            return Array.isArray(_) ? w = d[0] !== _[0] || d[1] !== _[1] : w = d !== _, w && u === !0 && this._trigger("change", {
              oldValue: d,
              newValue: _
            }), this;
          },
          destroy: function() {
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), h && (this._unbindJQueryEventHandlers(), m === i && this.$element.removeData(m), this.$element.removeData(o));
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
            return this._removeSliderEventHandlers(), b.call(this, this.element, this.options), n && n.useCurrentValue === !0 && this.setValue(a), h && (m === i ? (h.data(this.element, i, this), h.data(this.element, o, this)) : h.data(this.element, o, this)), this;
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
            var u = this.eventToCallbackMap[n];
            if (u !== void 0) {
              for (var d = 0; d < u.length; d++)
                if (u[d] === a) {
                  u.splice(d, 1);
                  break;
                }
            }
          },
          _cleanUpEventCallbacksMap: function() {
            for (var n = Object.keys(this.eventToCallbackMap), a = 0; a < n.length; a++) {
              var u = n[a];
              delete this.eventToCallbackMap[u];
            }
          },
          _showTooltip: function() {
            this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), this.tooltip.style.display = "none"), this._state.over = !0;
          },
          _hideTooltip: function() {
            this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), this._removeClass(this.tooltip_max, "show")), this._state.over = !1;
          },
          _setToolTipOnMouseOver: function(n) {
            var a = this, u = this.options.formatter(n ? n.value[0] : this._state.value[0]), d = n ? v(n, this.options.reversed) : v(this._state, this.options.reversed);
            this._setText(this.tooltipInner, u), this.tooltip.style[this.stylePos] = d[0] + "%";
            function v(_, w) {
              return w ? [100 - _.percentage[0], a.options.range ? 100 - _.percentage[1] : _.percentage[1]] : [_.percentage[0], _.percentage[1]];
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
              addMouseEnter: function(a, u, d) {
                var v = function() {
                  var w = a._copyState(), x = u === a.handle1 ? w.value[0] : w.value[1], S = void 0;
                  d !== void 0 ? (x = a.options.ticks[d], S = a.options.ticks_positions.length > 0 && a.options.ticks_positions[d] || a._toPercentage(a.options.ticks[d])) : S = a._toPercentage(x), w.value[0] = x, w.percentage[0] = S, a._setToolTipOnMouseOver(w), a._showTooltip();
                };
                return u.addEventListener("mouseenter", v, !1), v;
              },
              addMouseLeave: function(a, u) {
                var d = function() {
                  a._hideTooltip();
                };
                return u.addEventListener("mouseleave", d, !1), d;
              }
            };
          },
          _layout: function() {
            var n, a;
            if (this.options.reversed ? n = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : n = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = n[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), a = this.options.formatter(this._state.value[0]), isNaN(a) ? this.handle1.setAttribute("aria-valuetext", a) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = n[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), a = this.options.formatter(this._state.value[1]), isNaN(a) ? this.handle2.setAttribute("aria-valuetext", a) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
              for (var u = 0; u < this.options.rangeHighlights.length; u++) {
                var d = this._toPercentage(this.options.rangeHighlights[u].start), v = this._toPercentage(this.options.rangeHighlights[u].end);
                if (this.options.reversed) {
                  var _ = 100 - v;
                  v = 100 - d, d = _;
                }
                var w = this._createHighlightRange(d, v);
                w ? this.options.orientation === "vertical" ? (this.rangeHighlightElements[u].style.top = w.start + "%", this.rangeHighlightElements[u].style.height = w.size + "%") : (this.options.rtl ? this.rangeHighlightElements[u].style.right = w.start + "%" : this.rangeHighlightElements[u].style.left = w.start + "%", this.rangeHighlightElements[u].style.width = w.size + "%") : this.rangeHighlightElements[u].style.display = "none";
              }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              var x = this.options.orientation === "vertical" ? "height" : "width", S;
              this.options.orientation === "vertical" ? S = "marginTop" : this.options.rtl ? S = "marginRight" : S = "marginLeft";
              var C = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var E = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[S] = -C / 2 + "px"), E = this.tickLabelContainer.offsetHeight;
                else
                  for (y = 0; y < this.tickLabelContainer.childNodes.length; y++)
                    this.tickLabelContainer.childNodes[y].offsetHeight > E && (E = this.tickLabelContainer.childNodes[y].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = E + "px");
              }
              for (var y = 0; y < this.options.ticks.length; y++) {
                var f = this.options.ticks_positions[y] || this._toPercentage(this.options.ticks[y]);
                this.options.reversed && (f = 100 - f), this.ticks[y].style[this.stylePos] = f + "%", this._removeClass(this.ticks[y], "in-selection"), this.options.range ? f >= n[0] && f <= n[1] && this._addClass(this.ticks[y], "in-selection") : this.options.selection === "after" && f >= n[0] ? this._addClass(this.ticks[y], "in-selection") : this.options.selection === "before" && f <= n[0] && this._addClass(this.ticks[y], "in-selection"), this.tickLabels[y] && (this.tickLabels[y].style[x] = C + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[y] !== void 0 ? (this.tickLabels[y].style.position = "absolute", this.tickLabels[y].style[this.stylePos] = f + "%", this.tickLabels[y].style[S] = -C / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[y].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[y].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[S] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[y], "label-in-selection label-is-selection"), this.options.range ? f >= n[0] && f <= n[1] && (this._addClass(this.tickLabels[y], "label-in-selection"), (f === n[0] || n[1]) && this._addClass(this.tickLabels[y], "label-is-selection")) : (this.options.selection === "after" && f >= n[0] ? this._addClass(this.tickLabels[y], "label-in-selection") : this.options.selection === "before" && f <= n[0] && this._addClass(this.tickLabels[y], "label-in-selection"), f === n[0] && this._addClass(this.tickLabels[y], "label-is-selection")));
              }
            }
            var L;
            if (this.options.range) {
              L = this.options.formatter(this._state.value), this._setText(this.tooltipInner, L), this.tooltip.style[this.stylePos] = (n[1] + n[0]) / 2 + "%";
              var M = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, M);
              var T = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, T), this.tooltip_min.style[this.stylePos] = n[0] + "%", this.tooltip_max.style[this.stylePos] = n[1] + "%";
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
              var u = Math.abs(this._state.percentage[0] - a), d = Math.abs(this._state.percentage[1] - a);
              this._state.dragged = u < d ? 0 : 1, this._adjustPercentageForRangeSliders(a);
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
            var u;
            switch (a.keyCode) {
              case 37:
              // left
              case 40:
                u = -1;
                break;
              case 39:
              // right
              case 38:
                u = 1;
                break;
            }
            if (u) {
              if (this.options.natural_arrow_keys) {
                var d = this.options.orientation === "horizontal", v = this.options.orientation === "vertical", _ = this.options.rtl, w = this.options.reversed;
                d ? _ ? w || (u = -u) : w && (u = -u) : v && (w || (u = -u));
              }
              var x;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var S = void 0;
                S = this.options.ticks.indexOf(this._state.value[n]), S === -1 && (S = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), S += u, S = Math.max(0, Math.min(this.options.ticks.length - 1, S)), x = this.options.ticks[S];
              } else
                x = this._state.value[n] + u * this.options.step;
              var C = this._toPercentage(x);
              if (this._state.keyCtrl = n, this.options.range) {
                this._adjustPercentageForRangeSliders(C);
                var E = this._state.keyCtrl ? this._state.value[0] : x, y = this._state.keyCtrl ? x : this._state.value[1];
                x = [Math.max(this.options.min, Math.min(this.options.max, E)), Math.max(this.options.min, Math.min(this.options.max, y))];
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
            var u = this._calculateValue(!0);
            return this.setValue(u, !0, !0), !1;
          },
          _touchmove: function(n) {
            n.changedTouches !== void 0 && n.preventDefault && n.preventDefault();
          },
          _adjustPercentageForRangeSliders: function(n) {
            if (this.options.range) {
              var a = this._getNumDigitsAfterDecimalPlace(n);
              a = a ? a - 1 : 0;
              var u = this._applyToFixedAndParseFloat(n, a);
              this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], a) < u ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], a) > u ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < n ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > n && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
            }
          },
          _mouseup: function(n) {
            if (!this._state.enabled)
              return !1;
            var a = this._getPercentage(n);
            this._adjustPercentageForRangeSliders(a), this._state.percentage[this._state.dragged] = a, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
            var u = this._calculateValue(!0);
            return this.setValue(u, !1, !0), this._trigger("slideStop", u), this._state.dragged = null, !1;
          },
          _setValues: function(n, a) {
            var u = n === 0 ? 0 : 100;
            this._state.percentage[n] !== u && (a.data[n] = this._toValue(this._state.percentage[n]), a.data[n] = this._applyPrecision(a.data[n]));
          },
          _calculateValue: function(n) {
            var a = {};
            return this.options.range ? (a.data = [this.options.min, this.options.max], this._setValues(0, a), this._setValues(1, a), n && (a.data[0] = this._snapToClosestTick(a.data[0]), a.data[1] = this._snapToClosestTick(a.data[1]))) : (a.data = this._toValue(this._state.percentage[0]), a.data = parseFloat(a.data), a.data = this._applyPrecision(a.data), n && (a.data = this._snapToClosestTick(a.data))), a.data;
          },
          _snapToClosestTick: function(n) {
            for (var a = [n, 1 / 0], u = 0; u < this.options.ticks.length; u++) {
              var d = Math.abs(this.options.ticks[u] - n);
              d <= a[1] && (a = [this.options.ticks[u], d]);
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
            var u = n.toFixed(a);
            return parseFloat(u);
          },
          /*
          	Credits to Mike Samuel for the following method!
          	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
          */
          _getPercentage: function(n) {
            this.touchCapable && (n.type === "touchstart" || n.type === "touchmove" || n.type === "touchend") && (n = n.changedTouches[0]);
            var a = n[this.mousePos], u = this._state.offset[this.stylePos], d = a - u;
            this.stylePos === "right" && (d = -d);
            var v = d / this._state.size * 100;
            return v = Math.round(v / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (v = 100 - v), Math.max(0, Math.min(100, v));
          },
          _validateInputValue: function(n) {
            if (isNaN(+n)) {
              if (Array.isArray(n))
                return this._validateArray(n), n;
              throw new Error(p.formatInvalidInputErrorMsg(n));
            } else return +n;
          },
          _validateArray: function(n) {
            for (var a = 0; a < n.length; a++) {
              var u = n[a];
              if (typeof u != "number")
                throw new Error(p.formatInvalidInputErrorMsg(u));
            }
          },
          _setDataVal: function(n) {
            this.element.setAttribute("data-value", n), this.element.setAttribute("value", n), this.element.value = n;
          },
          _trigger: function(n, a) {
            a = a || a === 0 ? a : void 0;
            var u = this.eventToCallbackMap[n];
            if (u && u.length)
              for (var d = 0; d < u.length; d++) {
                var v = u[d];
                v(a);
              }
            h && this._triggerJQueryEvent(n, a);
          },
          _triggerJQueryEvent: function(n, a) {
            var u = {
              type: n,
              value: a
            };
            this.$element.trigger(u), this.$sliderElem.trigger(u);
          },
          _unbindJQueryEventHandlers: function() {
            this.$element.off(), this.$sliderElem.off();
          },
          _setText: function(n, a) {
            typeof n.textContent < "u" ? n.textContent = a : typeof n.innerText < "u" && (n.innerText = a);
          },
          _removeClass: function(n, a) {
            for (var u = a.split(" "), d = n.className, v = 0; v < u.length; v++) {
              var _ = u[v], w = new RegExp("(?:\\s|^)" + _ + "(?:\\s|$)");
              d = d.replace(w, " ");
            }
            n.className = d.trim();
          },
          _addClass: function(n, a) {
            for (var u = a.split(" "), d = n.className, v = 0; v < u.length; v++) {
              var _ = u[v], w = new RegExp("(?:\\s|^)" + _ + "(?:\\s|$)"), x = w.test(d);
              x || (d += " " + _);
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
          _css: function(n, a, u) {
            if (h)
              h.style(n, a, u);
            else {
              var d = a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(v, _) {
                return _.toUpperCase();
              });
              n.style[d] = u;
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
              var u = a === "left" ? "right" : "left";
              n.forEach((function(d) {
                this._addClass(d, "bs-tooltip-" + a), d.style[u] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? n.forEach((function(d) {
              this._addClass(d, "bs-tooltip-bottom"), d.style.top = "22px";
            }).bind(this)) : n.forEach((function(d) {
              this._addClass(d, "bs-tooltip-top"), d.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(n) {
            for (var a = Math.abs(n - this.options.ticks[0]), u = 0, d = 0; d < this.options.ticks.length; ++d) {
              var v = Math.abs(n - this.options.ticks[d]);
              v < a && (a = v, u = d);
            }
            return u;
          },
          /**
           * Attempts to find the index in `ticks[]` the slider values are set at.
           * The indexes can be -1 to indicate the slider value is not set at a value in `ticks[]`.
           */
          _setTickIndex: function() {
            this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])]);
          }
        }, h && h.fn && (h.fn.slider ? (s && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), m = o) : (h.bridget(i, l), m = i), h.bridget(o, l), h(function() {
          h("input[data-provide=slider]")[m]();
        }));
      })(r), l;
    });
  })($e)), $e.exports;
}
var ti = ei();
const si = /* @__PURE__ */ De(ti), ii = (t, e) => {
  const s = {
    ...t,
    tooltip: t.tooltip || "show"
  };
  let {
    change: r,
    onChange: i,
    value: o
  } = t;
  const l = B(), [h, m] = O();
  return r = r ?? i, I(() => {
    if (l.current) {
      const p = new si(l.current, s);
      return m(p), () => p.destroy();
    }
  }, [l.current]), I(() => {
    e && h && (e.current = {
      mySlider: h
    });
  }, [e, h]), I(() => {
    if (h && r) {
      h.on("change", r);
      for (let p in t)
        h.setAttribute(p, t[p]);
      return () => {
        h.off("change", r);
      };
    }
  }, [t, h]), I(() => {
    t.enabled ? h?.enable() : h?.disable();
  }, [t.enabled]), I(() => {
    h && o !== void 0 && h.setValue(o);
  }, [h, o]), /* @__PURE__ */ g.createElement("div", { ref: l });
}, Ii = g.forwardRef(ii);
var Le = { exports: {} }, Se, dt;
function ni() {
  if (dt) return Se;
  dt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Se = t, Se;
}
var Ae, ft;
function ri() {
  if (ft) return Ae;
  ft = 1;
  var t = /* @__PURE__ */ ni();
  function e() {
  }
  function s() {
  }
  return s.resetWarningCache = e, Ae = function() {
    function r(l, h, m, p, k, b) {
      if (b !== t) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
      }
    }
    r.isRequired = r;
    function i() {
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
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: s,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, Ae;
}
var mt;
function oi() {
  return mt || (mt = 1, Le.exports = /* @__PURE__ */ ri()()), Le.exports;
}
var ai = /* @__PURE__ */ oi();
const j = /* @__PURE__ */ De(ai);
function li({
  initialPx: t,
  // preferred: initial width of left pane in pixels
  initialPercent: e = 50,
  // fallback if initialPx not provided
  minA: s = 120,
  minB: r = 120,
  maxA: i,
  // optional px limit for left pane; otherwise auto from container - minB - gutter
  gutter: o = 10,
  style: l,
  children: h,
  onChange: m
  // called with { px, percent }
}) {
  const p = B(null), k = B(!1), [b, c] = O(0), [n, a] = g.Children.toArray(h), u = (C, E, y) => Math.max(E, Math.min(y, C)), d = te(() => {
    const C = p.current;
    if (!C) return { total: 0, min: 0, max: 0 };
    const E = C.clientWidth, y = Math.max(0, E - o - r), f = typeof i == "number" ? Math.min(i, y) : y, L = Math.min(s, f);
    return { total: E, min: L, max: f };
  }, [o, s, r, i]);
  Vt(() => {
    if (!p.current) return;
    const { total: E, min: y, max: f } = d();
    let L;
    typeof t == "number" && Number.isFinite(t) ? L = t : L = Math.round(u(e, 0, 100) / 100 * (E - o)), c(u(L, y, f));
  }, [d, t, e, o]), I(() => {
    const C = p.current;
    if (!C) return;
    const E = () => {
      const { total: f, min: L, max: M } = d();
      if (c((T) => u(T, L, M)), m) {
        const T = u(b, L, M), $ = f > 0 ? T / (f - o) * 100 : 0;
        m({ px: T, percent: $ });
      }
    };
    let y;
    return "ResizeObserver" in window ? (y = new ResizeObserver(E), y.observe(C)) : window.addEventListener("resize", E), () => {
      y ? y.disconnect() : window.removeEventListener("resize", E);
    };
  }, [d, o, m, b]);
  const v = te((C) => {
    const E = p.current;
    if (!E) return;
    k.current = !0, C.currentTarget.setPointerCapture?.(C.pointerId);
    const y = (L) => {
      if (!k.current) return;
      const M = E.getBoundingClientRect(), T = L.clientX - M.left, { total: $, min: A, max: N } = d(), H = u(T, A, N);
      if (c(H), m) {
        const G = $ > 0 ? H / ($ - o) * 100 : 0;
        m({ px: H, percent: Math.round(G * 100) / 100 });
      }
    }, f = () => {
      k.current = !1;
      try {
        C.currentTarget.releasePointerCapture?.(C.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f);
    };
    window.addEventListener("pointermove", y), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }, [d, o, m]);
  te(() => {
    const { total: C, min: E, max: y } = d();
    let f;
    typeof t == "number" && Number.isFinite(t) ? f = t : f = Math.round(u(e, 0, 100) / 100 * (C - o)), c(u(f, E, y));
  }, [d, t, e, o]);
  const _ = gt(
    () => ({
      display: "grid",
      gridTemplateColumns: `${b}px ${o}px 1fr`,
      gridTemplateRows: "1fr",
      minWidth: 0
      // prevent overflow due to intrinsic min-content sizes
    }),
    [b, o]
  ), { min: w, max: x, total: S } = d();
  return /* @__PURE__ */ g.createElement("div", { ref: p, className: "splitpane", style: { ..._, ...l || {} } }, /* @__PURE__ */ g.createElement("div", { className: "pane", style: { minWidth: 0, minHeight: 0 } }, n), /* @__PURE__ */ g.createElement(
    "div",
    {
      role: "separator",
      "aria-orientation": "vertical",
      "aria-valuemin": w,
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
li.propTypes = {
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
const Di = (t) => {
  const {
    className: e,
    onSelectionStart: s,
    onSelectionEnd: r,
    range: i,
    itemSize: o,
    selectionRange: l,
    itemRenderer: h,
    keyBindings: m = {},
    indicators: p = [],
    ...k
  } = t, b = t.style || {}, {
    callbacks: c,
    isSelecting: n,
    onMouseUp: a
  } = ts(l, {
    onSelectionStart: s,
    onSelectionEnd: r
  }), u = te((_) => h(_, c(_), {
    selectionRange: l,
    isSelecting: n
  }), [i, n, h]), d = {
    width: 5e3,
    position: "absolute",
    left: -2500,
    zIndex: 1e3,
    height: 5e3
  };
  function v(_) {
    const {
      range: w,
      caption: x,
      name: S
    } = _;
    let C, E;
    return typeof w == "object" ? (C = w.count, E = w.first) : (C = 1, E = w), /* @__PURE__ */ g.createElement(
      "div",
      {
        onClick: (y) => {
          y.stopPropagation(), i.jumpToFirst(E);
        },
        className: `indicator indicator-${S}`,
        style: {
          position: "absolute",
          height: `calc(max(var(--indicator-min-height), ${C / i.max * 100}%))`,
          top: `${E / i.max * 100}%`
        }
      }
    );
  }
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: V("dynamic-list", e),
      style: {
        position: "relative"
      }
    },
    /* @__PURE__ */ g.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ g.createElement(
      ut,
      {
        style: {
          ...d,
          bottom: -o
        },
        className: "auto-scroll auto-scroll-up",
        onMouseUp: a,
        enabled: n,
        onEvent: () => {
          i.moveUp(), i.first < l.first ? l.first = i.first : i.first > l.first && i.first < l.last && (l.last = i.first + 1);
        }
      }
    )),
    /* @__PURE__ */ g.createElement(
      hs,
      {
        itemSize: o,
        itemRenderer: u,
        range: i,
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
      p.filter((_) => _.enabled).map(v)
    ),
    /* @__PURE__ */ g.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ g.createElement(
      ut,
      {
        style: {
          ...d,
          top: -o - 40
        },
        className: "auto-scroll auto-scroll-down",
        onMouseUp: a,
        enabled: n,
        onEvent: () => {
          i.moveDown(), i.last > l.last ? l.last = i.last : i.last !== i.max && i.last <= l.last && i.last > l.first && (l.first = i.last - 1);
        }
      }
    ))
  );
};
function hi(t) {
  const {
    width: e,
    height: s,
    side: r = "top",
    arrowBase: i = 20,
    arrowLength: o = 10,
    borderRadius: l = 10,
    padding: h = 8,
    strokeWidth: m = 2,
    seamOverlap: p = 0.5
  } = t || {}, k = Math.max(0, Number(e) || 0), b = Math.max(0, Number(s) || 0), c = Math.max(0, Number(i) || 0), n = Math.max(0, Number(o) || 0), a = Math.max(0, Number(l) || 0), u = Math.max(0, Number(h) || 0), d = Math.max(0, Number(m) || 0), v = k + u * 2, _ = b + u * 2, w = r === "left" || r === "right" ? n : 0, x = r === "top" || r === "bottom" ? n : 0, S = v + w + d, C = _ + x + d, E = r === "left" ? n : 0, y = r === "top" ? n : 0, f = Math.min(a, Math.min(v, _) / 2), L = E + v / 2, M = y + _ / 2, T = E, $ = y, A = T + v, N = $ + _, J = [
    `M ${T + f} ${$}`,
    `H ${A - f}`,
    `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
    `V ${N - f}`,
    `A ${f} ${f} 0 0 1 ${A - f} ${N}`,
    `H ${T + f}`,
    `A ${f} ${f} 0 0 1 ${T} ${N - f}`,
    `V ${$ + f}`,
    `A ${f} ${f} 0 0 1 ${T + f} ${$}`,
    "Z"
  ].join(" ");
  let H = "";
  n > 0 && c > 0 && (r === "right" ? H = [
    `M ${A - p} ${M - c / 2}`,
    `L ${A + n} ${M}`,
    `L ${A - p} ${M + c / 2}`,
    "Z"
  ].join(" ") : r === "left" ? H = [
    `M ${T + p} ${M + c / 2}`,
    `L ${T - n} ${M}`,
    `L ${T + p} ${M - c / 2}`,
    "Z"
  ].join(" ") : r === "top" ? H = [
    `M ${L - c / 2} ${$ + p}`,
    `L ${L} ${$ - n}`,
    `L ${L + c / 2} ${$ + p}`,
    "Z"
  ].join(" ") : r === "bottom" && (H = [
    `M ${L + c / 2} ${N - p}`,
    `L ${L} ${N + n}`,
    `L ${L - c / 2} ${N - p}`,
    "Z"
  ].join(" ")));
  let G = "";
  if (r === "right")
    G = [
      `M ${T + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${M - c / 2}`,
      ...n > 0 && c > 0 ? [`L ${A + n} ${M}`, `L ${A} ${M + c / 2}`] : [],
      `V ${N - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${N}`,
      `H ${T + f}`,
      `A ${f} ${f} 0 0 1 ${T} ${N - f}`,
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${T + f} ${$}`,
      "Z"
    ].join(" ");
  else if (r === "left")
    G = [
      `M ${T + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${N - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${N}`,
      `H ${T + f}`,
      `A ${f} ${f} 0 0 1 ${T} ${N - f}`,
      `V ${M + c / 2}`,
      ...n > 0 && c > 0 ? [`L ${T - n} ${M}`, `L ${T} ${M - c / 2}`] : [],
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${T + f} ${$}`,
      "Z"
    ].join(" ");
  else if (r === "top")
    G = [
      `M ${L} ${$ - n}`,
      ...n > 0 && c > 0 ? [`L ${L + c / 2} ${$}`] : [],
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${N - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${N}`,
      `H ${T + f}`,
      `A ${f} ${f} 0 0 1 ${T} ${N - f}`,
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${T + f} ${$}`,
      ...n > 0 && c > 0 ? [`H ${L - c / 2}`] : [],
      "Z"
    ].join(" ");
  else if (r === "bottom") {
    const Y = [
      `M ${T + f} ${$}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${$ + f}`,
      `V ${N - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${N}`
    ];
    n > 0 && c > 0 && Y.push(
      `H ${L + c / 2}`,
      `L ${L} ${N + n}`,
      `L ${L - c / 2} ${N}`
    ), Y.push(
      `H ${T + f}`,
      `A ${f} ${f} 0 0 1 ${T} ${N - f}`,
      // ✅ bas-gauche correct
      `V ${$ + f}`,
      `A ${f} ${f} 0 0 1 ${T + f} ${$}`,
      "Z"
    ), G = Y.join(" ");
  }
  const se = { top: r === "top" ? -n : 0, left: r === "left" ? -n : 0 }, Q = { x: E + u, y: y + u };
  return {
    // géométrie
    outlineD: G,
    // à utiliser pour le stroke (bordure unique)
    rectD: J,
    // fill bulle
    arrowD: H,
    // fill flèche (chevauchement interne minime)
    // métriques utiles
    width: S,
    height: C,
    viewBox: `0 0 ${S} ${C}`,
    viewBoxRectOnly: `0 0 ${v} ${_}`,
    transformRectToOrigin: `translate(${-E}, ${-y})`,
    rect: { x: E, y, w: v, h: _, r: f },
    offset: se,
    contentOffset: Q,
    strokeWidth: d
  };
}
function Hi({
  side: t = "right",
  arrowBase: e = 20,
  arrowLength: s = 10,
  borderRadius: r = 10,
  stroke: i = "#111827",
  bubbleFill: o = "#fff",
  arrowFill: l = "#fff",
  strokeWidth: h = 2,
  style: m,
  seamOverlap: p = 0.5,
  children: k,
  ...b
}) {
  const c = g.useRef(null), { width: n = 0, height: a = 0 } = Ie({ targetRef: c }), u = g.useMemo(() => !n || !a ? null : hi({
    width: n,
    // = clientWidth (inclut padding)
    height: a,
    // = clientHeight (inclut padding)
    padding: 0,
    // le div gère déjà son padding visuel
    side: t,
    arrowBase: e,
    arrowLength: s,
    borderRadius: r,
    strokeWidth: h,
    seamOverlap: p
  }), [
    n,
    a,
    t,
    e,
    s,
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
    u && /* @__PURE__ */ g.createElement(
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
      /* @__PURE__ */ g.createElement("g", { transform: u.transformRectToOrigin }, u.arrowD && /* @__PURE__ */ g.createElement("path", { d: u.arrowD, fill: l, stroke: "none" }), /* @__PURE__ */ g.createElement("path", { d: u.rectD, fill: o, stroke: "none" }), /* @__PURE__ */ g.createElement(
        "path",
        {
          d: u.outlineD,
          fill: "none",
          stroke: i,
          strokeWidth: u.strokeWidth,
          strokeLinejoin: "round",
          strokeLinecap: "round"
        }
      ))
    )
  );
}
const At = g.createContext(), Vi = ze((t, e) => {
  const {
    children: s,
    store: r,
    className: i,
    group: o,
    style: l = {}
  } = t, h = ss(o, r);
  return /* @__PURE__ */ g.createElement(At.Provider, { value: o }, /* @__PURE__ */ g.createElement(
    "div",
    {
      style: l,
      ref: e,
      className: V(
        "restack",
        i,
        h ?? "no-selection",
        o
      )
    },
    s
  ));
}), Bi = (t) => {
  const {
    value: e,
    onClick: s = U,
    children: r,
    className: i,
    store: o,
    ...l
  } = t, h = Bt(At), [m, p] = vt(h, o), k = m === e, b = B(), [c, n] = O({
    x: 0,
    y: 0
  });
  return I(() => {
    if (m !== null && b.current && k) {
      let a = window.getComputedStyle(b.current.parentNode), u = -b.current.offsetLeft + parseFloat(a.paddingLeft), d = -b.current.offsetTop + parseFloat(a.paddingTop);
      n({ x: u, y: d });
    } else
      n({
        x: 0,
        y: 0
      });
  }, [m, b.current, k]), /* @__PURE__ */ g.createElement(
    kt,
    {
      ref: b,
      ...l,
      style: {
        left: c.x,
        top: c.y
      },
      className: i,
      expanded: k,
      onClick: () => {
        s(), p(e);
      }
    },
    r
  );
};
export {
  Hi as Bubble,
  kt as Collapsible,
  Me as Decorated,
  Ei as Disable,
  Ci as DotNotification,
  ls as Drawer,
  Ti as DrawerContainer,
  zi as Dropdown,
  Di as DynamicList,
  hs as GargantuaList,
  ut as IntervalOnHover,
  $i as MessageModal,
  Xs as Messages,
  Li as ModalOkCancel,
  Ks as Pinnable,
  Si as Progress,
  Mi as RadioCollapse,
  qi as RadioContext,
  Vi as RadioStackContainer,
  Bi as RadioStacked,
  Ii as ReactSlider,
  Ai as RenderInWindow,
  Pi as Slider,
  li as SplitPaneH,
  Ri as TableContextMenu,
  Ni as TextField
};
