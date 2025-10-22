import m, { forwardRef as gt, Children as Dt, useRef as V, useState as q, useEffect as D, useCallback as te, createPortal as Ht, useMemo as vt, useLayoutEffect as Bt, useContext as Vt } from "react";
import { useResizeDetector as ze } from "react-resize-detector";
import { waitForStableBoundingRect as Ot, recursiveMap as Ft } from "./utils.es.js";
import { noOp as U } from "velor-utils/utils/functional.mjs";
import F from "react-bootstrap/Modal";
import { InfoCircleFill as Ze, ExclamationTriangleFill as qt, ExclamationSquareFill as Gt, ExclamationDiamondFill as jt, Pin as Wt, PinAngle as Zt, XLg as Qt, PlusCircleFill as Qe, DashCircleFill as Ue } from "react-bootstrap-icons";
import { Alert as Xe, ProgressBar as Ut, Form as Ke, FormControl as Xt, Dropdown as Je, DropdownMenu as Kt, DropdownItem as Jt } from "react-bootstrap";
import ee from "react-bootstrap/Button";
import { u as Yt, a as es, b as Ie, c as ts } from "./hooks-DYRN6R3-.js";
import { R as Fi } from "./hooks-DYRN6R3-.js";
import "react-range-slider-input/dist/style.css";
import ss from "react-range-slider-input";
import Ye from "react-bootstrap/ButtonGroup";
import { useContextMenu as is, Menu as ns, Item as et } from "react-contexify";
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
function rs() {
  return tt || (tt = 1, (function(t) {
    (function() {
      var e = {}.hasOwnProperty;
      function i() {
        for (var o = "", a = 0; a < arguments.length; a++) {
          var h = arguments[a];
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
        var a = "";
        for (var h in o)
          e.call(o, h) && o[h] && (a = s(a, h));
        return a;
      }
      function s(o, a) {
        return a ? o ? o + " " + a : o + a : o;
      }
      t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
    })();
  })(Ce)), Ce.exports;
}
var os = rs();
const B = /* @__PURE__ */ De(os), st = "animating-expand", it = "animating-collapse", nt = "animating", rt = "collapsed", Te = "expanded", kt = gt((t, e) => {
  const {
    children: i,
    expanded: r,
    onExpand: s = U,
    onStateChanged: o = U,
    onTransitionEnd: a = U,
    caption: h,
    className: g,
    fitParentWidth: p = !1,
    fitParentHeight: k = !1,
    style: b = {}
  } = t;
  if (Dt.count(i) === 0) return null;
  const c = V(), n = V(), [l, u] = q(!0), [d, v] = q([]), y = () => {
    const _ = n.current.getBoundingClientRect(), f = c.current.parentElement;
    let L = window.getComputedStyle(f);
    const N = f.getBoundingClientRect();
    let C = _.width, T = _.height;
    p && (C = N.width - parseFloat(L.paddingLeft) - parseFloat(L.paddingRight)), k && (T = N.height - parseFloat(L.paddingTop) - parseFloat(L.paddingBottom)), c.current.style.width = `${C}px`, c.current.style.height = `${T}px`;
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
    ]), y();
  }, $ = () => d.includes(st), E = () => d.includes(it);
  return D(() => {
    r ? (v([
      Te
    ]), y(), s(!0), o(!0)) : (v([
      rt
    ]), w(), s(!1), o(!1));
    const _ = () => {
      s(!1);
    };
    return u(!1), document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []), D(() => {
    l || (r ? S() : x());
  }, [r]), ze({
    targetRef: n,
    onResize: (_, f) => {
      d.includes(Te) && Ot(n.current, y);
    }
  }), D(() => {
    e && (e.current = c.current);
  }, [e, c.current]), /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: c,
      onTransitionEnd: (_) => {
        a(_), _.propertyName === "width" && (E() && !r ? (v([
          rt
        ]), o(!1)) : $() && r && (v([
          Te
        ]), o(!0)));
      },
      onMouseDown: (_) => _.stopPropagation(),
      onClick: (_) => {
        _.stopPropagation(), s(!0);
      },
      style: b,
      className: B(
        d,
        g,
        "collapsible"
      )
    },
    /* @__PURE__ */ m.createElement("span", { className: "caption", ref: e }, h),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: n,
        className: "content"
      },
      i
    )
  );
}), xi = (t) => Ft(t.children, (e) => m.cloneElement(e, {
  disabled: e.props.disabled || t.disabled
})), Ei = (t) => {
  const {
    notifications: e,
    variant: i,
    visible: r = !1,
    bordered: s = !1,
    size: o
  } = t, a = V(), h = V(), [g, p] = q(!1);
  function k(b) {
    b.preventDefault(), b.stopPropagation(), g ? (p(!1), a.current.style.width = null, a.current.style.height = null) : (p(!0), a.current.style.width = h.current.scrollWidth + "px", a.current.style.height = h.current.scrollHeight + "px");
  }
  return D(() => {
    const b = (c) => {
      c.stopPropagation(), p(!1), a.current && (a.current.style.width = null, a.current.style.height = null);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []), t.children ? /* @__PURE__ */ m.createElement("div", { style: { position: "relative", width: "fit-content" } }, /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: a,
      onClick: k,
      className: B(
        i,
        o,
        "dot-notification",
        {
          bordered: s,
          hidden: !r,
          expanded: g
        }
      )
    },
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: h,
        className: "content"
      },
      e
    )
  ), t.children) : /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: a,
      onClick: k,
      className: B(
        i,
        o,
        "dot-notification",
        {
          bordered: s,
          hidden: !r,
          expanded: g
        }
      )
    },
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: h,
        className: "content"
      },
      e
    )
  );
}, as = (t) => {
  const {
    visible: e,
    className: i = "",
    location: r = "left",
    ...s
  } = t;
  return /* @__PURE__ */ m.createElement("div", { className: B(
    "drawer-container",
    `${r}-drawer`,
    {
      "horizontal-drawer": r === "left" || r === "right",
      "vertical-drawer": r === "top" || r === "bottom"
    }
  ) }, /* @__PURE__ */ m.createElement(
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
}, Ci = (t) => {
  const {
    visibleItem: e
  } = t;
  return m.Children.map(t.children, (i) => {
    if (!m.isValidElement(i))
      return i;
    const {
      title: r,
      name: s,
      loading: o,
      className: a,
      id: h,
      onClose: g
    } = i.props;
    return /* @__PURE__ */ m.createElement(
      as,
      {
        id: h,
        className: a,
        visible: e === s,
        title: r,
        name: s,
        loading: o,
        onClose: g
      },
      i
    );
  });
}, ls = (t) => {
  const e = V(), {
    itemRenderer: i,
    itemSize: r,
    range: s
  } = t;
  if (!s || !s.valid)
    return;
  const [o, a] = q(0);
  D(() => {
    s.count = Math.floor(o / r) - 1;
  }, [s, s.max, o, r]);
  const h = s.max > 0, g = te((k) => {
    const b = Math.sign(k.deltaY);
    s.moveDown(b);
  }, [s]);
  ze({
    targetRef: e,
    onResize: te(({ height: k }) => {
      a(k);
    }, [])
  });
  const p = [];
  for (let k of s) {
    let b = i(k);
    b !== null && p.push(b);
  }
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      id: t.id,
      className: "gargantua",
      ref: e,
      style: t.style,
      onWheel: g
    },
    /* @__PURE__ */ m.createElement("div", { className: "viewport" }, /* @__PURE__ */ m.createElement("div", { className: "content" }, p), /* @__PURE__ */ m.createElement(
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
  let i = typeof t == "string" ? t : t.source;
  const r = {
    replace: (s, o) => {
      let a = typeof o == "string" ? o : o.source;
      return a = a.replace(I.caret, "$1"), i = i.replace(s, a), r;
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
}, hs = /^(?:[ \t]*(?:\n|$))+/, cs = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, us = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ae = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ps = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Be = /(?:[*+-]|\d{1,9}[.)])/, _t = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, yt = P(_t).replace(/bull/g, Be).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ds = P(_t).replace(/bull/g, Be).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Ve = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, fs = /^[^\n]+/, Oe = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ms = P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Oe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), gs = P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Be).getRegex(), _e = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Fe = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, vs = P(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Fe).replace("tag", _e).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), wt = P(Ve).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), ks = P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", wt).getRegex(), qe = {
  blockquote: ks,
  code: cs,
  def: ms,
  fences: us,
  heading: ps,
  hr: ae,
  html: vs,
  lheading: yt,
  list: gs,
  newline: hs,
  paragraph: wt,
  table: oe,
  text: fs
}, ot = P(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), bs = {
  ...qe,
  lheading: ds,
  table: ot,
  paragraph: P(Ve).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ot).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex()
}, _s = {
  ...qe,
  html: P(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Fe).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: oe,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: P(Ve).replace("hr", ae).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", yt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ys = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ws = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, xt = /^( {2,}|\\)\n(?!\s*$)/, xs = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ye = /[\p{P}\p{S}]/u, Ge = /[\s\p{P}\p{S}]/u, Et = /[^\s\p{P}\p{S}]/u, Es = P(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ge).getRegex(), Ct = /(?!~)[\p{P}\p{S}]/u, Cs = /(?!~)[\s\p{P}\p{S}]/u, Ts = /(?:[^\s\p{P}\p{S}]|~)/u, $s = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Tt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ls = P(Tt, "u").replace(/punct/g, ye).getRegex(), Ss = P(Tt, "u").replace(/punct/g, Ct).getRegex(), $t = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", As = P($t, "gu").replace(/notPunctSpace/g, Et).replace(/punctSpace/g, Ge).replace(/punct/g, ye).getRegex(), Ps = P($t, "gu").replace(/notPunctSpace/g, Ts).replace(/punctSpace/g, Cs).replace(/punct/g, Ct).getRegex(), Rs = P(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, Et).replace(/punctSpace/g, Ge).replace(/punct/g, ye).getRegex(), Ns = P(/\\(punct)/, "gu").replace(/punct/g, ye).getRegex(), Ms = P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), zs = P(Fe).replace("(?:-->|$)", "-->").getRegex(), Is = P(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", zs).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ve = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ds = P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ve).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Lt = P(/^!?\[(label)\]\[(ref)\]/).replace("label", ve).replace("ref", Oe).getRegex(), St = P(/^!?\[(ref)\](?:\[\])?/).replace("ref", Oe).getRegex(), Hs = P("reflink|nolink(?!\\()", "g").replace("reflink", Lt).replace("nolink", St).getRegex(), je = {
  _backpedal: oe,
  // only used for GFM url
  anyPunctuation: Ns,
  autolink: Ms,
  blockSkip: $s,
  br: xt,
  code: ws,
  del: oe,
  emStrongLDelim: Ls,
  emStrongRDelimAst: As,
  emStrongRDelimUnd: Rs,
  escape: ys,
  link: Ds,
  nolink: St,
  punctuation: Es,
  reflink: Lt,
  reflinkSearch: Hs,
  tag: Is,
  text: xs,
  url: oe
}, Bs = {
  ...je,
  link: P(/^!?\[(label)\]\((.*?)\)/).replace("label", ve).getRegex(),
  reflink: P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ve).getRegex()
}, Pe = {
  ...je,
  emStrongRDelimAst: Ps,
  emStrongLDelim: Ss,
  url: P(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Vs = {
  ...Pe,
  br: P(xt).replace("{2,}", "*").getRegex(),
  text: P(Pe.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, me = {
  normal: qe,
  gfm: bs,
  pedantic: _s
}, ne = {
  normal: je,
  gfm: Pe,
  breaks: Vs,
  pedantic: Bs
}, Os = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, at = (t) => Os[t];
function O(t, e) {
  if (e) {
    if (I.escapeTest.test(t))
      return t.replace(I.escapeReplace, at);
  } else if (I.escapeTestNoEncode.test(t))
    return t.replace(I.escapeReplaceNoEncode, at);
  return t;
}
function lt(t) {
  try {
    t = encodeURI(t).replace(I.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function ht(t, e) {
  const i = t.replace(I.findPipe, (o, a, h) => {
    let g = !1, p = a;
    for (; --p >= 0 && h[p] === "\\"; ) g = !g;
    return g ? "|" : " |";
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
function re(t, e, i) {
  const r = t.length;
  if (r === 0)
    return "";
  let s = 0;
  for (; s < r && t.charAt(r - s - 1) === e; )
    s++;
  return t.slice(0, r - s);
}
function Fs(t, e) {
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
function ct(t, e, i, r, s) {
  const o = e.href, a = e.title || null, h = t[1].replace(s.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  const g = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: i,
    href: o,
    title: a,
    text: h,
    tokens: r.inlineTokens(h)
  };
  return r.state.inLink = !1, g;
}
function qs(t, e, i) {
  const r = t.match(i.other.indentCodeCompensation);
  if (r === null)
    return e;
  const s = r[1];
  return e.split(`
`).map((o) => {
    const a = o.match(i.other.beginningSpace);
    if (a === null)
      return o;
    const [h] = a;
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
      const i = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: e[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : re(i, `
`)
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const i = e[0], r = qs(i, e[3] || "", this.rules);
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
        const r = re(i, "#");
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
        raw: re(e[0], `
`)
      };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      let i = re(e[0], `
`).split(`
`), r = "", s = "";
      const o = [];
      for (; i.length > 0; ) {
        let a = !1;
        const h = [];
        let g;
        for (g = 0; g < i.length; g++)
          if (this.rules.other.blockquoteStart.test(i[g]))
            h.push(i[g]), a = !0;
          else if (!a)
            h.push(i[g]);
          else
            break;
        i = i.slice(g);
        const p = h.join(`
`), k = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${p}` : p, s = s ? `${s}
${k}` : k;
        const b = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(k, o, !0), this.lexer.state.top = b, i.length === 0)
          break;
        const c = o.at(-1);
        if (c?.type === "code")
          break;
        if (c?.type === "blockquote") {
          const n = c, l = n.raw + `
` + i.join(`
`), u = this.blockquote(l);
          o[o.length - 1] = u, r = r.substring(0, r.length - n.raw.length) + u.raw, s = s.substring(0, s.length - n.text.length) + u.text;
          break;
        } else if (c?.type === "list") {
          const n = c, l = n.raw + `
` + i.join(`
`), u = this.list(l);
          o[o.length - 1] = u, r = r.substring(0, r.length - c.raw.length) + u.raw, s = s.substring(0, s.length - n.raw.length) + u.raw, i = l.substring(o.at(-1).raw.length).split(`
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
      let a = !1;
      for (; t; ) {
        let g = !1, p = "", k = "";
        if (!(e = o.exec(t)) || this.rules.block.hr.test(t))
          break;
        p = e[0], t = t.substring(p.length);
        let b = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (v) => " ".repeat(3 * v.length)), c = t.split(`
`, 1)[0], n = !b.trim(), l = 0;
        if (this.options.pedantic ? (l = 2, k = b.trimStart()) : n ? l = e[1].length + 1 : (l = e[2].search(this.rules.other.nonSpaceChar), l = l > 4 ? 1 : l, k = b.slice(l), l += e[1].length), n && this.rules.other.blankLine.test(c) && (p += c + `
`, t = t.substring(c.length + 1), g = !0), !g) {
          const v = this.rules.other.nextBulletRegex(l), y = this.rules.other.hrRegex(l), w = this.rules.other.fencesBeginRegex(l), x = this.rules.other.headingBeginRegex(l), S = this.rules.other.htmlBeginRegex(l);
          for (; t; ) {
            const $ = t.split(`
`, 1)[0];
            let E;
            if (c = $, this.options.pedantic ? (c = c.replace(this.rules.other.listReplaceNesting, "  "), E = c) : E = c.replace(this.rules.other.tabCharGlobal, "    "), w.test(c) || x.test(c) || S.test(c) || v.test(c) || y.test(c))
              break;
            if (E.search(this.rules.other.nonSpaceChar) >= l || !c.trim())
              k += `
` + E.slice(l);
            else {
              if (n || b.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || w.test(b) || x.test(b) || y.test(b))
                break;
              k += `
` + c;
            }
            !n && !c.trim() && (n = !0), p += $ + `
`, t = t.substring($.length + 1), b = E.slice(l);
          }
        }
        s.loose || (a ? s.loose = !0 : this.rules.other.doubleBlankLine.test(p) && (a = !0));
        let u = null, d;
        this.options.gfm && (u = this.rules.other.listIsTask.exec(k), u && (d = u[0] !== "[ ] ", k = k.replace(this.rules.other.listReplaceTask, ""))), s.items.push({
          type: "list_item",
          raw: p,
          task: !!u,
          checked: d,
          loose: !1,
          text: k,
          tokens: []
        }), s.raw += p;
      }
      const h = s.items.at(-1);
      if (h)
        h.raw = h.raw.trimEnd(), h.text = h.text.trimEnd();
      else
        return;
      s.raw = s.raw.trimEnd();
      for (let g = 0; g < s.items.length; g++)
        if (this.lexer.state.top = !1, s.items[g].tokens = this.lexer.blockTokens(s.items[g].text, []), !s.loose) {
          const p = s.items[g].tokens.filter((b) => b.type === "space"), k = p.length > 0 && p.some((b) => this.rules.other.anyLine.test(b.raw));
          s.loose = k;
        }
      if (s.loose)
        for (let g = 0; g < s.items.length; g++)
          s.items[g].loose = !0;
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
    const i = ht(e[1]), r = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === r.length) {
      for (const a of r)
        this.rules.other.tableAlignRight.test(a) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? o.align.push("left") : o.align.push(null);
      for (let a = 0; a < i.length; a++)
        o.header.push({
          text: i[a],
          tokens: this.lexer.inline(i[a]),
          header: !0,
          align: o.align[a]
        });
      for (const a of s)
        o.rows.push(ht(a, o.header.length).map((h, g) => ({
          text: h,
          tokens: this.lexer.inline(h),
          header: !1,
          align: o.align[g]
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
        const o = re(i.slice(0, -1), "\\");
        if ((i.length - o.length) % 2 === 0)
          return;
      } else {
        const o = Fs(e[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), ct(e, {
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
      return ct(i, s, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, i = "") {
    let r = this.rules.inline.emStrongLDelim.exec(t);
    if (!r || r[3] && i.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const o = [...r[0]].length - 1;
      let a, h, g = o, p = 0;
      const k = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, e = e.slice(-1 * t.length + o); (r = k.exec(e)) != null; ) {
        if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
        if (h = [...a].length, r[3] || r[4]) {
          g += h;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + h) % 3)) {
          p += h;
          continue;
        }
        if (g -= h, g > 0) continue;
        h = Math.min(h, h + g + p);
        const b = [...r[0]][0].length, c = t.slice(0, o + r.index + b + h);
        if (Math.min(o, h) % 2) {
          const l = c.slice(1, -1);
          return {
            type: "em",
            raw: c,
            text: l,
            tokens: this.lexer.inlineTokens(l)
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
    const i = {
      other: I,
      block: me.normal,
      inline: ne.normal
    };
    this.options.pedantic ? (i.block = me.pedantic, i.inline = ne.pedantic) : this.options.gfm && (i.block = me.gfm, this.options.breaks ? i.inline = ne.breaks : i.inline = ne.gfm), this.tokenizer.rules = i;
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
  static lex(e, i) {
    return new Re(i).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, i) {
    return new Re(i).inlineTokens(e);
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
      if (this.options.extensions?.block?.some((a) => (s = a.call({ lexer: this }, e, i)) ? (e = e.substring(s.raw.length), i.push(s), !0) : !1))
        continue;
      if (s = this.tokenizer.space(e)) {
        e = e.substring(s.raw.length);
        const a = i.at(-1);
        s.raw.length === 1 && a !== void 0 ? a.raw += `
` : i.push(s);
        continue;
      }
      if (s = this.tokenizer.code(e)) {
        e = e.substring(s.raw.length);
        const a = i.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += `
` + s.raw, a.text += `
` + s.text, this.inlineQueue.at(-1).src = a.text) : i.push(s);
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
        const a = i.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += `
` + s.raw, a.text += `
` + s.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
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
        let a = 1 / 0;
        const h = e.slice(1);
        let g;
        this.options.extensions.startBlock.forEach((p) => {
          g = p.call({ lexer: this }, h), typeof g == "number" && g >= 0 && (a = Math.min(a, g));
        }), a < 1 / 0 && a >= 0 && (o = e.substring(0, a + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(o))) {
        const a = i.at(-1);
        r && a?.type === "paragraph" ? (a.raw += `
` + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : i.push(s), r = o.length !== e.length, e = e.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(e)) {
        e = e.substring(s.raw.length);
        const a = i.at(-1);
        a?.type === "text" ? (a.raw += `
` + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : i.push(s);
        continue;
      }
      if (e) {
        const a = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        } else
          throw new Error(a);
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
    let o = !1, a = "";
    for (; e; ) {
      o || (a = ""), o = !1;
      let h;
      if (this.options.extensions?.inline?.some((p) => (h = p.call({ lexer: this }, e, i)) ? (e = e.substring(h.raw.length), i.push(h), !0) : !1))
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
        const p = i.at(-1);
        h.type === "text" && p?.type === "text" ? (p.raw += h.raw, p.text += h.text) : i.push(h);
        continue;
      }
      if (h = this.tokenizer.emStrong(e, r, a)) {
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
      let g = e;
      if (this.options.extensions?.startInline) {
        let p = 1 / 0;
        const k = e.slice(1);
        let b;
        this.options.extensions.startInline.forEach((c) => {
          b = c.call({ lexer: this }, k), typeof b == "number" && b >= 0 && (p = Math.min(p, b));
        }), p < 1 / 0 && p >= 0 && (g = e.substring(0, p + 1));
      }
      if (h = this.tokenizer.inlineText(g)) {
        e = e.substring(h.raw.length), h.raw.slice(-1) !== "_" && (a = h.raw.slice(-1)), o = !0;
        const p = i.at(-1);
        p?.type === "text" ? (p.raw += h.raw, p.text += h.text) : i.push(h);
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
    return i;
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
  code({ text: t, lang: e, escaped: i }) {
    const r = (e || "").match(I.notSpaceStart)?.[0], s = t.replace(I.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + O(r) + '">' + (i ? s : O(s, !0)) + `</code></pre>
` : "<pre><code>" + (i ? s : O(s, !0)) + `</code></pre>
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
    for (let a = 0; a < t.items.length; a++) {
      const h = t.items[a];
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
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + O(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
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
      for (let a = 0; a < o.length; a++)
        i += this.tablecell(o[a]);
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
    return `<code>${O(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: e, tokens: i }) {
    const r = this.parser.parseInline(i), s = lt(t);
    if (s === null)
      return r;
    t = s;
    let o = '<a href="' + t + '"';
    return e && (o += ' title="' + O(e) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: t, title: e, text: i, tokens: r }) {
    r && (i = this.parser.parseInline(r, this.parser.textRenderer));
    const s = lt(t);
    if (s === null)
      return O(i);
    t = s;
    let o = `<img src="${t}" alt="${i}"`;
    return e && (o += ` title="${O(e)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : O(t.text);
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
  static parse(e, i) {
    return new Ne(i).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, i) {
    return new Ne(i).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, i = !0) {
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        const h = o, g = this.options.extensions.renderers[h.type].call({ parser: this }, h);
        if (g !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(h.type)) {
          r += g || "";
          continue;
        }
      }
      const a = o;
      switch (a.type) {
        case "space": {
          r += this.renderer.space(a);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(a);
          continue;
        }
        case "code": {
          r += this.renderer.code(a);
          continue;
        }
        case "table": {
          r += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          r += this.renderer.list(a);
          continue;
        }
        case "html": {
          r += this.renderer.html(a);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let h = a, g = this.renderer.text(h);
          for (; s + 1 < e.length && e[s + 1].type === "text"; )
            h = e[++s], g += `
` + this.renderer.text(h);
          i ? r += this.renderer.paragraph({
            type: "paragraph",
            raw: g,
            text: g,
            tokens: [{ type: "text", raw: g, text: g, escaped: !0 }]
          }) : r += g;
          continue;
        }
        default: {
          const h = 'Token with "' + a.type + '" type was not found.';
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
      const a = o;
      switch (a.type) {
        case "escape": {
          r += i.text(a);
          break;
        }
        case "html": {
          r += i.html(a);
          break;
        }
        case "link": {
          r += i.link(a);
          break;
        }
        case "image": {
          r += i.image(a);
          break;
        }
        case "strong": {
          r += i.strong(a);
          break;
        }
        case "em": {
          r += i.em(a);
          break;
        }
        case "codespan": {
          r += i.codespan(a);
          break;
        }
        case "br": {
          r += i.br(a);
          break;
        }
        case "del": {
          r += i.del(a);
          break;
        }
        case "text": {
          r += i.text(a);
          break;
        }
        default: {
          const h = 'Token with "' + a.type + '" type was not found.';
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
}, Gs = class {
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
    let i = [];
    for (const r of t)
      switch (i = i.concat(e.call(this, r)), r.type) {
        case "table": {
          const s = r;
          for (const o of s.header)
            i = i.concat(this.walkTokens(o.tokens, e));
          for (const o of s.rows)
            for (const a of o)
              i = i.concat(this.walkTokens(a.tokens, e));
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
            const a = s[o].flat(1 / 0);
            i = i.concat(this.walkTokens(a, e));
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
          o ? e.renderers[s.name] = function(...a) {
            let h = s.renderer.apply(this, a);
            return h === !1 && (h = o.apply(this, a)), h;
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
          const a = o, h = i.renderer[a], g = s[a];
          s[a] = (...p) => {
            let k = h.apply(s, p);
            return k === !1 && (k = g.apply(s, p)), k || "";
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
          const a = o, h = i.tokenizer[a], g = s[a];
          s[a] = (...p) => {
            let k = h.apply(s, p);
            return k === !1 && (k = g.apply(s, p)), k;
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
          const a = o, h = i.hooks[a], g = s[a];
          ge.passThroughHooks.has(o) ? s[a] = (p) => {
            if (this.defaults.async)
              return Promise.resolve(h.call(s, p)).then((b) => g.call(s, b));
            const k = h.call(s, p);
            return g.call(s, k);
          } : s[a] = (...p) => {
            let k = h.apply(s, p);
            return k === !1 && (k = g.apply(s, p)), k;
          };
        }
        r.hooks = s;
      }
      if (i.walkTokens) {
        const s = this.defaults.walkTokens, o = i.walkTokens;
        r.walkTokens = function(a) {
          let h = [];
          return h.push(o.call(this, a)), s && (h = h.concat(s.call(this, a))), h;
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
    return (i, r) => {
      const s = { ...r }, o = { ...this.defaults, ...s }, a = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && s.async === !1)
        return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof i > "u" || i === null)
        return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof i != "string")
        return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = t);
      const h = o.hooks ? o.hooks.provideLexer() : t ? W.lex : W.lexInline, g = o.hooks ? o.hooks.provideParser() : t ? Z.parse : Z.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(i) : i).then((p) => h(p, o)).then((p) => o.hooks ? o.hooks.processAllTokens(p) : p).then((p) => o.walkTokens ? Promise.all(this.walkTokens(p, o.walkTokens)).then(() => p) : p).then((p) => g(p, o)).then((p) => o.hooks ? o.hooks.postprocess(p) : p).catch(a);
      try {
        o.hooks && (i = o.hooks.preprocess(i));
        let p = h(i, o);
        o.hooks && (p = o.hooks.processAllTokens(p)), o.walkTokens && this.walkTokens(p, o.walkTokens);
        let k = g(p, o);
        return o.hooks && (k = o.hooks.postprocess(k)), k;
      } catch (p) {
        return a(p);
      }
    };
  }
  onError(t, e) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const r = "<p>An error occurred:</p><pre>" + O(i.message + "", !0) + "</pre>";
        return e ? Promise.resolve(r) : r;
      }
      if (e)
        return Promise.reject(i);
      throw i;
    };
  }
}, X = new Gs();
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
const js = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function Ws(t) {
  let e;
  for (; (e = js.exec(t)) !== null; ) {
    const { dateStr: i } = e.groups;
    t = t.replaceAll(
      e[0],
      new Date(i).toLocaleDateString()
    );
  }
  return t;
}
function Zs(t) {
  return t = Ws(t), R.parse(t);
}
const Qs = (t) => {
  const {
    entry: e
  } = t;
  let i;
  switch (e.severity) {
    case "info":
    case "success":
      i = /* @__PURE__ */ m.createElement(Ze, null);
      break;
    case "warning":
      i = /* @__PURE__ */ m.createElement(Gt, null);
      break;
    case "error":
      i = /* @__PURE__ */ m.createElement(qt, null);
      break;
    default:
      i = /* @__PURE__ */ m.createElement(Ze, null);
  }
  let r = e.message;
  return Array.isArray(r) || (r = [r]), /* @__PURE__ */ m.createElement("div", { className: B("entry", e.severity, e.category) }, /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement("span", { className: "icon" }, i), /* @__PURE__ */ m.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), r.map((s) => /* @__PURE__ */ m.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: Zs(s) }
    }
  )));
}, Us = (t) => {
  let e;
  const {
    messages: i = []
  } = t;
  return !Array.isArray(i) || i.length > 0 && typeof i[0] != "object" ? e = /* @__PURE__ */ m.createElement(Xe, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : i.length === 0 ? e = /* @__PURE__ */ m.createElement(Xe, { variant: "secondary" }, "There are currently no message") : e = /* @__PURE__ */ m.createElement("div", { className: "messages" }, i.map((r) => /* @__PURE__ */ m.createElement(Qs, { entry: r }))), e;
}, Ti = (t) => {
  const {
    title: e,
    icon: i,
    children: r
  } = t;
  return /* @__PURE__ */ m.createElement(F, { ...t }, /* @__PURE__ */ m.createElement(F.Header, null, /* @__PURE__ */ m.createElement(F.Title, null, /* @__PURE__ */ m.createElement("span", null, i), /* @__PURE__ */ m.createElement("span", null, e))), /* @__PURE__ */ m.createElement(F.Body, null, /* @__PURE__ */ m.createElement(Us, { ...t })), /* @__PURE__ */ m.createElement(F.Footer, null, r));
}, $i = (t) => {
  const {
    show: e,
    onHide: i,
    onConfirm: r,
    title: s,
    message: o
  } = t;
  return /* @__PURE__ */ m.createElement(
    F,
    {
      show: e,
      size: "sm",
      onHide: i
    },
    /* @__PURE__ */ m.createElement(F.Header, { closeButton: !0 }, /* @__PURE__ */ m.createElement(F.Title, null, /* @__PURE__ */ m.createElement(jt, null), /* @__PURE__ */ m.createElement("span", { className: "" }, s))),
    /* @__PURE__ */ m.createElement(F.Body, null, /* @__PURE__ */ m.createElement("p", { className: "ellipsis" }, o)),
    /* @__PURE__ */ m.createElement(F.Footer, null, /* @__PURE__ */ m.createElement(
      ee,
      {
        variant: "secondary",
        onClick: i
      },
      "Cancel"
    ), /* @__PURE__ */ m.createElement(
      ee,
      {
        variant: "danger",
        onClick: () => {
          r(), i();
        }
      },
      "Proceed"
    ))
  );
}, Me = (t) => {
  const {
    children: e
  } = t;
  return /* @__PURE__ */ m.createElement("div", { className: B("decorated-container") }, e);
};
Me.Decoration = (t) => {
  const {
    positionH: e = "top",
    positionV: i = "right",
    anchorH: r = "center",
    anchorV: s = "center",
    direction: o = "column",
    children: a,
    ...h
  } = t;
  return /* @__PURE__ */ m.createElement("div", { className: B(
    "decoration",
    `positionH-${e}`,
    `positionV-${i}`,
    `anchorH-${r}`,
    `anchorV-${s}`,
    `direction-${o}`
  ) }, /* @__PURE__ */ m.createElement(
    "div",
    {
      className: "wrapper",
      ...h
    },
    a
  ));
};
const Xs = gt((t, e) => {
  let {
    expanded: i,
    setExpanded: r,
    canPin: s = !0,
    canClose: o = !0,
    onClose: a = U,
    pinned: h,
    setPinned: g,
    className: p,
    pin: k = {},
    children: b
  } = t;
  q(!1);
  const c = [];
  return k = {
    direction: "row",
    positionH: "right",
    anchorH: "right",
    anchorV: "center",
    positionV: "top",
    ...k
  }, s && c.push(
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: "btn btn-light btn-round",
        onClick: (n) => {
          n.stopPropagation(), g(!h);
        }
      },
      h ? /* @__PURE__ */ m.createElement(Wt, null) : /* @__PURE__ */ m.createElement(Zt, null)
    )
  ), o && c.push(
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: "btn btn-light btn-round",
        onClick: (n) => {
          n.stopPropagation(), a();
        }
      },
      /* @__PURE__ */ m.createElement(Qt, null)
    )
  ), /* @__PURE__ */ m.createElement(
    kt,
    {
      ...t,
      className: B(p, {
        pinnable: s,
        closable: o
      }),
      expanded: i || h,
      onExpand: r,
      ref: e
    },
    /* @__PURE__ */ m.createElement(Me, null, /* @__PURE__ */ m.createElement(Me.Decoration, { ...k }, c), b)
  );
}), Li = (t) => {
  const {
    progress: e,
    label: i
  } = t;
  return /* @__PURE__ */ m.createElement(
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
    /* @__PURE__ */ m.createElement("div", { className: "progress-label" }, i),
    /* @__PURE__ */ m.createElement(Ut, { now: e })
  );
};
function ut(t) {
  const {
    onEvent: e,
    enabled: i = !0,
    style: r = {},
    delay: s,
    ...o
  } = t, { onMouseEnter: a, onMouseLeave: h } = Yt(
    {
      onEvent: e,
      interval: s,
      enabled: i
    }
  );
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      onMouseEnter: a,
      onMouseLeave: h,
      ...o,
      style: {
        ...r,
        display: i ? "block" : "none"
      }
    }
  );
}
let Ks = 0;
const Si = (t) => {
  const [e, i] = q(null), r = V(window), [s, o] = q(() => Ks++), {
    name: a = "",
    options: h = "",
    notifications: g
  } = t;
  function p() {
    t.onClose();
  }
  return D(() => {
    const k = document.createElement("div");
    i(k);
  }, []), D(() => {
    function k() {
      if (process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Opening the admin control panel"), t.popup ? r.current = window.open(
        t.url ?? "",
        a,
        "popup"
        // `popup,width=${width},height=${height},top=${top},left=${left}`
      ) : r.current = window.open(
        t.url ?? "",
        "_blank",
        h
      ), !r.current) {
        g.error(
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
}, Ai = ({
  min: t,
  max: e,
  ticks: i,
  value: r,
  onChange: s,
  formatter: o = (k) => k,
  className: a = "",
  tooltip_position: h,
  orientation: g = "vertical",
  disabled: p = !1
}) => {
  const k = V(), b = Array.isArray(r), c = es();
  function n(d, v) {
    return () => {
      const {
        min: y,
        max: w
      } = k.current.rangeLimits;
      let x = [
        w - k.current.value.max,
        w - k.current.value.min
      ];
      return x[v] += d, x[v] = Math.min(w, x[v]), x[v] = Math.max(y, x[v]), s(b ? x : x[v]), !1;
    };
  }
  function l(d) {
    if (p) return;
    const v = -Math.sign(d.deltaY), {
      min: y,
      max: w
    } = k.current.rangeLimits;
    let x = [
      w - k.current.value.max,
      w - k.current.value.min
    ];
    x[1] += v, x[1] = Math.max(y, x[1]), x[1] = Math.min(w, x[1]), s(b ? [
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
  const u = /* @__PURE__ */ m.createElement(
    ss,
    {
      ref: k,
      onInput: (d) => s(b ? [e - d[1], e - d[0]] : e - d[0]),
      value: b ? [e - r[1], e - r[0]] : [e - r, e],
      step: 1,
      max: e,
      min: t,
      disabled: p,
      thumbsDisabled: [!1, !b],
      orientation: g
    }
  );
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      className: B(
        a,
        "slider",
        `slider-${g}`,
        {
          dual: b,
          disabled: p
        }
      ),
      onWheel: l
    },
    /* @__PURE__ */ m.createElement(Ye, { className: "max-btns" }, /* @__PURE__ */ m.createElement(
      ee,
      {
        variant: "secondary",
        className: "plus",
        disabled: p,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(1, 1)
      },
      /* @__PURE__ */ m.createElement(Qe, null)
    ), /* @__PURE__ */ m.createElement(
      ee,
      {
        variant: "secondary",
        className: "minus",
        disabled: p,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(-1, 1)
      },
      /* @__PURE__ */ m.createElement(Ue, null)
    )),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (d) => d.stopPropagation()
      },
      u
    ),
    b ? /* @__PURE__ */ m.createElement(Ye, { className: "min-btns" }, /* @__PURE__ */ m.createElement(
      ee,
      {
        variant: "secondary",
        className: "plus",
        disabled: p,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(1, 0)
      },
      /* @__PURE__ */ m.createElement(Qe, null)
    ), /* @__PURE__ */ m.createElement(
      ee,
      {
        variant: "secondary",
        className: "minus",
        disabled: p,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(-1, 0)
      },
      /* @__PURE__ */ m.createElement(Ue, null)
    )) : null
  );
}, Pi = (t) => {
  const {
    id: e
  } = t, { hideAll: i } = is({
    id: "file-ctx-menu"
  }), [r, s] = q(!1);
  function o(h) {
    h.key === "Escape" && i();
  }
  D(() => {
    if (r)
      return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [r]);
  function a(h) {
    const {
      elem: g,
      name: p,
      value: k,
      index: b
    } = h;
  }
  return /* @__PURE__ */ m.createElement(
    ns,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: s
    },
    /* @__PURE__ */ m.createElement(
      et,
      {
        hidden: ({ props: h }) => !h.field.canCopy,
        onMouseDown: (h) => {
          h.stopPropagation(), h.stopImmediatePropagation();
        },
        onClick: a,
        id: "copy"
      },
      "Copy"
    ),
    /* @__PURE__ */ m.createElement(et, { id: "cut" }, "Cut")
  );
}, Ri = (t) => {
  const {
    target: e,
    onChange: i = () => {
    },
    onAccept: r = () => {
    },
    onAbort: s = () => {
    },
    disabled: o,
    name: a,
    label: h,
    type: g = "text",
    required: p = !1
  } = t;
  function k(n) {
    e[a] = n.target.value, r(e[a], { target: e, name: a });
  }
  function b(n) {
    e[a] = n.target.value, i(e[a], { target: e, name: a });
  }
  function c(n) {
    e[a] = n.target.value, s(e[a], { target: e, name: a });
  }
  return /* @__PURE__ */ React.createElement(Ke.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(Ke.Label, { className: "text-secondary small", htmlFor: a }, h), /* @__PURE__ */ React.createElement(
    Xt,
    {
      id: a,
      type: g,
      disabled: o,
      value: e[a] ?? "",
      name: a,
      onChange: b,
      required: p,
      onKeyDown: (n) => {
        n.key === "Enter" ? k(n) : n.key === "Escape" && c(n);
      }
    }
  ));
}, Ni = (t) => {
  const {
    canPin: e = !1,
    canClose: i = !1,
    onClose: r,
    value: s,
    onExpand: o = U,
    pinned: a = !1,
    setPinned: h = U,
    group: g = "global",
    collapsible: p = !0,
    visible: k = !0,
    children: b,
    ...c
  } = t, [n, l] = Ie(g), u = n === s;
  return k ? /* @__PURE__ */ m.createElement(
    Xs,
    {
      ...c,
      pinned: a,
      onClose: r,
      setPinned: h,
      expanded: u || !p,
      setExpanded: (d) => {
        o(d), l(d ? s : null);
      },
      canPin: e,
      canClose: i
    },
    b
  ) : null;
};
function Js(t) {
  return Array.isArray(t) ? t : Object.entries(t).map(([e, i]) => ({ value: isNaN(+e) ? e : +e, label: String(i) }));
}
function Mi(t) {
  const {
    value: e,
    options: i,
    onChange: r,
    disabled: s,
    placeholder: o = "Select…",
    className: a
  } = t, h = vt(() => Js(i), [i]), g = h.find((p) => p.value === e);
  return /* @__PURE__ */ m.createElement(Je, null, /* @__PURE__ */ m.createElement(
    Je.Toggle,
    {
      disabled: s,
      onMouseDown: (p) => p.stopPropagation()
    },
    g ? g.label : o
  ), /* @__PURE__ */ m.createElement(Kt, null, h.map((p) => /* @__PURE__ */ m.createElement(
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
function Ys() {
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
      var a;
      return (function(h) {
        var g = Array.prototype.slice;
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
          function l(u, d) {
            b.fn[u] = function(v) {
              if (typeof v == "string") {
                for (var y = g.call(arguments, 1), w = 0, x = this.length; w < x; w++) {
                  var S = this[w], $ = b.data(S, u);
                  if (!$) {
                    n("cannot call methods on " + u + " prior to initialization; attempted to call '" + v + "'");
                    continue;
                  }
                  if (!b.isFunction($[v]) || v.charAt(0) === "_") {
                    n("no such method '" + v + "' for " + u + " instance");
                    continue;
                  }
                  var E = $[v].apply($, y);
                  if (E !== void 0 && E !== $)
                    return E;
                }
                return this;
              } else {
                var _ = this.map(function() {
                  var f = b.data(this, u);
                  return f ? (f.option(v), f._init()) : (f = new d(this, v), b.data(this, u, f)), b(this);
                });
                return _.length === 1 ? _[0] : _;
              }
            };
          }
          return b.bridget = function(u, d) {
            c(d), l(u, d);
          }, b.bridget;
        }
        k(h);
      })(r), (function(h) {
        var g = void 0, p = {
          formatInvalidInputErrorMsg: function(n) {
            return "Invalid input value '" + n + "' passed in";
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, k = {
          linear: {
            getValue: function(n, l) {
              return n < l.min ? l.min : n > l.max ? l.max : n;
            },
            toValue: function(n) {
              var l = n / 100 * (this.options.max - this.options.min), u = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var d, v, y, w = 0, x = 1; x < this.options.ticks_positions.length; x++)
                  if (n <= this.options.ticks_positions[x]) {
                    d = this.options.ticks[x - 1], y = this.options.ticks_positions[x - 1], v = this.options.ticks[x], w = this.options.ticks_positions[x];
                    break;
                  }
                var S = (n - y) / (w - y);
                l = d + S * (v - d), u = !1;
              }
              var $ = u ? this.options.min : 0, E = $ + Math.round(l / this.options.step) * this.options.step;
              return k.linear.getValue(E, this.options);
            },
            toPercentage: function(n) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var l, u, d, v = 0, y = 0; y < this.options.ticks.length; y++)
                  if (n <= this.options.ticks[y]) {
                    l = y > 0 ? this.options.ticks[y - 1] : 0, d = y > 0 ? this.options.ticks_positions[y - 1] : 0, u = this.options.ticks[y], v = this.options.ticks_positions[y];
                    break;
                  }
                if (y > 0) {
                  var w = (n - l) / (u - l);
                  return d + w * (v - d);
                }
              }
              return 100 * (n - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(n) {
              var l = 1 - this.options.min, u = Math.log(this.options.min + l), d = Math.log(this.options.max + l), v = Math.exp(u + (d - u) * n / 100) - l;
              return Math.round(v) === d ? d : (v = this.options.min + Math.round((v - this.options.min) / this.options.step) * this.options.step, k.linear.getValue(v, this.options));
            },
            toPercentage: function(n) {
              if (this.options.max === this.options.min)
                return 0;
              var l = 1 - this.options.min, u = Math.log(this.options.max + l), d = Math.log(this.options.min + l), v = Math.log(n + l);
              return 100 * (v - d) / (u - d);
            }
          }
        };
        a = function(n, l) {
          return b.call(this, n, l), this;
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
          for (var l = Object.keys(this.defaultOptions), u = n.hasOwnProperty("min"), d = n.hasOwnProperty("max"), v = 0; v < l.length; v++) {
            var y = l[v], w = n[y];
            w = typeof w < "u" ? w : S(this.element, y), w = w !== null ? w : this.defaultOptions[y], this.options || (this.options = {}), this.options[y] = w;
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
          var $ = this.element.style.width, E = !1, _ = this.element.parentNode, f, L, N, C, T;
          if (this.sliderElem)
            E = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var A = document.createElement("div");
            A.className = "slider-track", L = document.createElement("div"), L.className = "slider-track-low", f = document.createElement("div"), f.className = "slider-selection", N = document.createElement("div"), N.className = "slider-track-high", C = document.createElement("div"), C.className = "slider-handle min-slider-handle", C.setAttribute("role", "slider"), C.setAttribute("aria-valuemin", this.options.min), C.setAttribute("aria-valuemax", this.options.max), T = document.createElement("div"), T.className = "slider-handle max-slider-handle", T.setAttribute("role", "slider"), T.setAttribute("aria-valuemin", this.options.min), T.setAttribute("aria-valuemax", this.options.max), A.appendChild(L), A.appendChild(f), A.appendChild(N), this.rangeHighlightElements = [];
            var M = this.options.rangeHighlights;
            if (Array.isArray(M) && M.length > 0)
              for (var J = 0; J < M.length; J++) {
                var H = document.createElement("div"), G = M[J].class || "";
                H.className = "slider-rangeHighlight slider-selection " + G, this.rangeHighlightElements.push(H), A.appendChild(H);
              }
            var se = Array.isArray(this.options.labelledby);
            if (se && this.options.labelledby[0] && C.setAttribute("aria-labelledby", this.options.labelledby[0]), se && this.options.labelledby[1] && T.setAttribute("aria-labelledby", this.options.labelledby[1]), !se && this.options.labelledby && (C.setAttribute("aria-labelledby", this.options.labelledby), T.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
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
            ue.className = "tooltip tooltip-max", ue.setAttribute("role", "presentation"), we(ue), this.sliderElem.appendChild(A), this.sliderElem.appendChild(he), this.sliderElem.appendChild(ce), this.sliderElem.appendChild(ue), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(C), this.sliderElem.appendChild(T), _.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (h && (this.$element = h(this.element), this.$sliderElem = h(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), k[this.options.scale] && (this.options.scale = k[this.options.scale]), E === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(z) {
            this._removeProperty(this.trackLow, z), this._removeProperty(this.trackSelection, z), this._removeProperty(this.trackHigh, z);
          }, this), [this.handle1, this.handle2].forEach(function(z) {
            this._removeProperty(z, "left"), this._removeProperty(z, "right"), this._removeProperty(z, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(z) {
            this._removeProperty(z, "bs-tooltip-left"), this._removeProperty(z, "bs-tooltip-right"), this._removeProperty(z, "bs-tooltip-top"), this._removeClass(z, "bs-tooltip-right"), this._removeClass(z, "bs-tooltip-left"), this._removeClass(z, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = $, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (d || (this.options.max = Math.max.apply(Math, this.options.ticks)), u || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = L || this.trackLow, this.trackSelection = f || this.trackSelection, this.trackHigh = N || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = C || this.handle1, this.handle2 = T || this.handle2, E === !0)
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
        a.prototype = {
          _init: function() {
          },
          // NOTE: Must exist to support bridget
          constructor: a,
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
          setValue: function(n, l, u) {
            n || (n = 0);
            var d = this.getValue();
            this._state.value = this._validateInputValue(n);
            var v = this._applyPrecision.bind(this);
            this.options.range ? (this._state.value[0] = v(this._state.value[0]), this._state.value[1] = v(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = v(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this.options.selection === "after" ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
            var y = this.options.range ? this._state.value : this._state.value[0];
            this._setDataVal(y), l === !0 && this._trigger("slide", y);
            var w = !1;
            return Array.isArray(y) ? w = d[0] !== y[0] || d[1] !== y[1] : w = d !== y, w && u === !0 && this._trigger("change", {
              oldValue: d,
              newValue: y
            }), this;
          },
          destroy: function() {
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), h && (this._unbindJQueryEventHandlers(), g === s && this.$element.removeData(g), this.$element.removeData(o));
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
          on: function(n, l) {
            return this._bindNonQueryEventHandler(n, l), this;
          },
          off: function(n, l) {
            h ? (this.$element.off(n, l), this.$sliderElem.off(n, l)) : this._unbindNonQueryEventHandler(n, l);
          },
          getAttribute: function(n) {
            return n ? this.options[n] : this.options;
          },
          setAttribute: function(n, l) {
            return this.options[n] = l, this;
          },
          refresh: function(n) {
            var l = this.getValue();
            return this._removeSliderEventHandlers(), b.call(this, this.element, this.options), n && n.useCurrentValue === !0 && this.setValue(l), h && (g === s ? (h.data(this.element, s, this), h.data(this.element, o, this)) : h.data(this.element, o, this)), this;
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
          _removeTooltipListener: function(n, l) {
            this.handle1.removeEventListener(n, l, !1), this.handle2.removeEventListener(n, l, !1);
          },
          _removeSliderEventHandlers: function() {
            if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
              for (var n = this.ticksContainer.getElementsByClassName("slider-tick"), l = 0; l < n.length; l++)
                n[l].removeEventListener("mouseenter", this.ticksCallbackMap[l].mouseEnter, !1), n[l].removeEventListener("mouseleave", this.ticksCallbackMap[l].mouseLeave, !1);
              this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1));
            }
            this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1)), window.removeEventListener("resize", this.resize, !1);
          },
          _bindNonQueryEventHandler: function(n, l) {
            this.eventToCallbackMap[n] === void 0 && (this.eventToCallbackMap[n] = []), this.eventToCallbackMap[n].push(l);
          },
          _unbindNonQueryEventHandler: function(n, l) {
            var u = this.eventToCallbackMap[n];
            if (u !== void 0) {
              for (var d = 0; d < u.length; d++)
                if (u[d] === l) {
                  u.splice(d, 1);
                  break;
                }
            }
          },
          _cleanUpEventCallbacksMap: function() {
            for (var n = Object.keys(this.eventToCallbackMap), l = 0; l < n.length; l++) {
              var u = n[l];
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
            var l = this, u = this.options.formatter(n ? n.value[0] : this._state.value[0]), d = n ? v(n, this.options.reversed) : v(this._state, this.options.reversed);
            this._setText(this.tooltipInner, u), this.tooltip.style[this.stylePos] = d[0] + "%";
            function v(y, w) {
              return w ? [100 - y.percentage[0], l.options.range ? 100 - y.percentage[1] : y.percentage[1]] : [y.percentage[0], y.percentage[1]];
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
              addMouseEnter: function(l, u, d) {
                var v = function() {
                  var w = l._copyState(), x = u === l.handle1 ? w.value[0] : w.value[1], S = void 0;
                  d !== void 0 ? (x = l.options.ticks[d], S = l.options.ticks_positions.length > 0 && l.options.ticks_positions[d] || l._toPercentage(l.options.ticks[d])) : S = l._toPercentage(x), w.value[0] = x, w.percentage[0] = S, l._setToolTipOnMouseOver(w), l._showTooltip();
                };
                return u.addEventListener("mouseenter", v, !1), v;
              },
              addMouseLeave: function(l, u) {
                var d = function() {
                  l._hideTooltip();
                };
                return u.addEventListener("mouseleave", d, !1), d;
              }
            };
          },
          _layout: function() {
            var n, l;
            if (this.options.reversed ? n = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : n = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = n[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), l = this.options.formatter(this._state.value[0]), isNaN(l) ? this.handle1.setAttribute("aria-valuetext", l) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = n[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), l = this.options.formatter(this._state.value[1]), isNaN(l) ? this.handle2.setAttribute("aria-valuetext", l) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
              for (var u = 0; u < this.options.rangeHighlights.length; u++) {
                var d = this._toPercentage(this.options.rangeHighlights[u].start), v = this._toPercentage(this.options.rangeHighlights[u].end);
                if (this.options.reversed) {
                  var y = 100 - v;
                  v = 100 - d, d = y;
                }
                var w = this._createHighlightRange(d, v);
                w ? this.options.orientation === "vertical" ? (this.rangeHighlightElements[u].style.top = w.start + "%", this.rangeHighlightElements[u].style.height = w.size + "%") : (this.options.rtl ? this.rangeHighlightElements[u].style.right = w.start + "%" : this.rangeHighlightElements[u].style.left = w.start + "%", this.rangeHighlightElements[u].style.width = w.size + "%") : this.rangeHighlightElements[u].style.display = "none";
              }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              var x = this.options.orientation === "vertical" ? "height" : "width", S;
              this.options.orientation === "vertical" ? S = "marginTop" : this.options.rtl ? S = "marginRight" : S = "marginLeft";
              var $ = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var E = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[S] = -$ / 2 + "px"), E = this.tickLabelContainer.offsetHeight;
                else
                  for (_ = 0; _ < this.tickLabelContainer.childNodes.length; _++)
                    this.tickLabelContainer.childNodes[_].offsetHeight > E && (E = this.tickLabelContainer.childNodes[_].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = E + "px");
              }
              for (var _ = 0; _ < this.options.ticks.length; _++) {
                var f = this.options.ticks_positions[_] || this._toPercentage(this.options.ticks[_]);
                this.options.reversed && (f = 100 - f), this.ticks[_].style[this.stylePos] = f + "%", this._removeClass(this.ticks[_], "in-selection"), this.options.range ? f >= n[0] && f <= n[1] && this._addClass(this.ticks[_], "in-selection") : this.options.selection === "after" && f >= n[0] ? this._addClass(this.ticks[_], "in-selection") : this.options.selection === "before" && f <= n[0] && this._addClass(this.ticks[_], "in-selection"), this.tickLabels[_] && (this.tickLabels[_].style[x] = $ + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[_] !== void 0 ? (this.tickLabels[_].style.position = "absolute", this.tickLabels[_].style[this.stylePos] = f + "%", this.tickLabels[_].style[S] = -$ / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[_].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[_].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[S] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[_], "label-in-selection label-is-selection"), this.options.range ? f >= n[0] && f <= n[1] && (this._addClass(this.tickLabels[_], "label-in-selection"), (f === n[0] || n[1]) && this._addClass(this.tickLabels[_], "label-is-selection")) : (this.options.selection === "after" && f >= n[0] ? this._addClass(this.tickLabels[_], "label-in-selection") : this.options.selection === "before" && f <= n[0] && this._addClass(this.tickLabels[_], "label-in-selection"), f === n[0] && this._addClass(this.tickLabels[_], "label-is-selection")));
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
              var T = this.tooltip_min.getBoundingClientRect(), A = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? T.right > A.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : T.right > A.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
            }
          },
          _createHighlightRange: function(n, l) {
            return this._isHighlightRange(n, l) ? n > l ? { start: l, size: n - l } : { start: n, size: l - n } : null;
          },
          _isHighlightRange: function(n, l) {
            return 0 <= n && n <= 100 && 0 <= l && l <= 100;
          },
          _resize: function(n) {
            this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout();
          },
          _removeProperty: function(n, l) {
            n.style.removeProperty ? n.style.removeProperty(l) : n.style.removeAttribute(l);
          },
          _mousedown: function(n) {
            if (!this._state.enabled)
              return !1;
            n.preventDefault && n.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
            var l = this._getPercentage(n);
            if (this.options.range) {
              var u = Math.abs(this._state.percentage[0] - l), d = Math.abs(this._state.percentage[1] - l);
              this._state.dragged = u < d ? 0 : 1, this._adjustPercentageForRangeSliders(l);
            } else
              this._state.dragged = 0;
            this._state.percentage[this._state.dragged] = l, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
            var v = this._calculateValue();
            return this._trigger("slideStart", v), this.setValue(v, !1, !0), n.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
          },
          _touchstart: function(n) {
            this._mousedown(n);
          },
          _triggerFocusOnHandle: function(n) {
            n === 0 && this.handle1.focus(), n === 1 && this.handle2.focus();
          },
          _keydown: function(n, l) {
            if (!this._state.enabled)
              return !1;
            var u;
            switch (l.keyCode) {
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
                var d = this.options.orientation === "horizontal", v = this.options.orientation === "vertical", y = this.options.rtl, w = this.options.reversed;
                d ? y ? w || (u = -u) : w && (u = -u) : v && (w || (u = -u));
              }
              var x;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var S = void 0;
                S = this.options.ticks.indexOf(this._state.value[n]), S === -1 && (S = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), S += u, S = Math.max(0, Math.min(this.options.ticks.length - 1, S)), x = this.options.ticks[S];
              } else
                x = this._state.value[n] + u * this.options.step;
              var $ = this._toPercentage(x);
              if (this._state.keyCtrl = n, this.options.range) {
                this._adjustPercentageForRangeSliders($);
                var E = this._state.keyCtrl ? this._state.value[0] : x, _ = this._state.keyCtrl ? x : this._state.value[1];
                x = [Math.max(this.options.min, Math.min(this.options.max, E)), Math.max(this.options.min, Math.min(this.options.max, _))];
              } else
                x = Math.max(this.options.min, Math.min(this.options.max, x));
              return this._trigger("slideStart", x), this.setValue(x, !0, !0), this._trigger("slideStop", x), this._pauseEvent(l), delete this._state.keyCtrl, !1;
            }
          },
          _pauseEvent: function(n) {
            n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault(), n.cancelBubble = !0, n.returnValue = !1;
          },
          _mousemove: function(n) {
            if (!this._state.enabled)
              return !1;
            var l = this._getPercentage(n);
            this._adjustPercentageForRangeSliders(l), this._state.percentage[this._state.dragged] = l;
            var u = this._calculateValue(!0);
            return this.setValue(u, !0, !0), !1;
          },
          _touchmove: function(n) {
            n.changedTouches !== void 0 && n.preventDefault && n.preventDefault();
          },
          _adjustPercentageForRangeSliders: function(n) {
            if (this.options.range) {
              var l = this._getNumDigitsAfterDecimalPlace(n);
              l = l ? l - 1 : 0;
              var u = this._applyToFixedAndParseFloat(n, l);
              this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], l) < u ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], l) > u ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < n ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > n && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
            }
          },
          _mouseup: function(n) {
            if (!this._state.enabled)
              return !1;
            var l = this._getPercentage(n);
            this._adjustPercentageForRangeSliders(l), this._state.percentage[this._state.dragged] = l, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
            var u = this._calculateValue(!0);
            return this.setValue(u, !1, !0), this._trigger("slideStop", u), this._state.dragged = null, !1;
          },
          _setValues: function(n, l) {
            var u = n === 0 ? 0 : 100;
            this._state.percentage[n] !== u && (l.data[n] = this._toValue(this._state.percentage[n]), l.data[n] = this._applyPrecision(l.data[n]));
          },
          _calculateValue: function(n) {
            var l = {};
            return this.options.range ? (l.data = [this.options.min, this.options.max], this._setValues(0, l), this._setValues(1, l), n && (l.data[0] = this._snapToClosestTick(l.data[0]), l.data[1] = this._snapToClosestTick(l.data[1]))) : (l.data = this._toValue(this._state.percentage[0]), l.data = parseFloat(l.data), l.data = this._applyPrecision(l.data), n && (l.data = this._snapToClosestTick(l.data))), l.data;
          },
          _snapToClosestTick: function(n) {
            for (var l = [n, 1 / 0], u = 0; u < this.options.ticks.length; u++) {
              var d = Math.abs(this.options.ticks[u] - n);
              d <= l[1] && (l = [this.options.ticks[u], d]);
            }
            return l[1] <= this.options.ticks_snap_bounds ? l[0] : n;
          },
          _applyPrecision: function(n) {
            var l = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
            return this._applyToFixedAndParseFloat(n, l);
          },
          _getNumDigitsAfterDecimalPlace: function(n) {
            var l = ("" + n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return l ? Math.max(0, (l[1] ? l[1].length : 0) - (l[2] ? +l[2] : 0)) : 0;
          },
          _applyToFixedAndParseFloat: function(n, l) {
            var u = n.toFixed(l);
            return parseFloat(u);
          },
          /*
          	Credits to Mike Samuel for the following method!
          	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
          */
          _getPercentage: function(n) {
            this.touchCapable && (n.type === "touchstart" || n.type === "touchmove" || n.type === "touchend") && (n = n.changedTouches[0]);
            var l = n[this.mousePos], u = this._state.offset[this.stylePos], d = l - u;
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
            for (var l = 0; l < n.length; l++) {
              var u = n[l];
              if (typeof u != "number")
                throw new Error(p.formatInvalidInputErrorMsg(u));
            }
          },
          _setDataVal: function(n) {
            this.element.setAttribute("data-value", n), this.element.setAttribute("value", n), this.element.value = n;
          },
          _trigger: function(n, l) {
            l = l || l === 0 ? l : void 0;
            var u = this.eventToCallbackMap[n];
            if (u && u.length)
              for (var d = 0; d < u.length; d++) {
                var v = u[d];
                v(l);
              }
            h && this._triggerJQueryEvent(n, l);
          },
          _triggerJQueryEvent: function(n, l) {
            var u = {
              type: n,
              value: l
            };
            this.$element.trigger(u), this.$sliderElem.trigger(u);
          },
          _unbindJQueryEventHandlers: function() {
            this.$element.off(), this.$sliderElem.off();
          },
          _setText: function(n, l) {
            typeof n.textContent < "u" ? n.textContent = l : typeof n.innerText < "u" && (n.innerText = l);
          },
          _removeClass: function(n, l) {
            for (var u = l.split(" "), d = n.className, v = 0; v < u.length; v++) {
              var y = u[v], w = new RegExp("(?:\\s|^)" + y + "(?:\\s|$)");
              d = d.replace(w, " ");
            }
            n.className = d.trim();
          },
          _addClass: function(n, l) {
            for (var u = l.split(" "), d = n.className, v = 0; v < u.length; v++) {
              var y = u[v], w = new RegExp("(?:\\s|^)" + y + "(?:\\s|$)"), x = w.test(d);
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
            for (var l = n.offsetTop; (n = n.offsetParent) && !isNaN(n.offsetTop); )
              l += n.offsetTop, n.tagName !== "BODY" && (l -= n.scrollTop);
            return l;
          },
          _offset: function(n) {
            return {
              left: this._offsetLeft(n),
              right: this._offsetRight(n),
              top: this._offsetTop(n)
            };
          },
          _css: function(n, l, u) {
            if (h)
              h.style(n, l, u);
            else {
              var d = l.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(v, y) {
                return y.toUpperCase();
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
              var l;
              this.options.tooltip_position ? l = this.options.tooltip_position : this.options.rtl ? l = "left" : l = "right";
              var u = l === "left" ? "right" : "left";
              n.forEach((function(d) {
                this._addClass(d, "bs-tooltip-" + l), d.style[u] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? n.forEach((function(d) {
              this._addClass(d, "bs-tooltip-bottom"), d.style.top = "22px";
            }).bind(this)) : n.forEach((function(d) {
              this._addClass(d, "bs-tooltip-top"), d.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(n) {
            for (var l = Math.abs(n - this.options.ticks[0]), u = 0, d = 0; d < this.options.ticks.length; ++d) {
              var v = Math.abs(n - this.options.ticks[d]);
              v < l && (l = v, u = d);
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
        }, h && h.fn && (h.fn.slider ? (i && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), g = o) : (h.bridget(s, a), g = s), h.bridget(o, a), h(function() {
          h("input[data-provide=slider]")[g]();
        }));
      })(r), a;
    });
  })($e)), $e.exports;
}
var ei = Ys();
const ti = /* @__PURE__ */ De(ei), si = (t, e) => {
  const i = {
    ...t,
    tooltip: t.tooltip || "show"
  };
  let {
    change: r,
    onChange: s,
    value: o
  } = t;
  const a = V(), [h, g] = q();
  return r = r ?? s, D(() => {
    if (a.current) {
      const p = new ti(a.current, i);
      return g(p), () => p.destroy();
    }
  }, [a.current]), D(() => {
    e && h && (e.current = {
      mySlider: h
    });
  }, [e, h]), D(() => {
    if (h && r) {
      h.on("change", r);
      for (let p in t)
        h.setAttribute(p, t[p]);
      return () => {
        h.off("change", r);
      };
    }
  }, [t, h]), D(() => {
    t.enabled ? h?.enable() : h?.disable();
  }, [t.enabled]), D(() => {
    h && o !== void 0 && h.setValue(o);
  }, [h, o]), /* @__PURE__ */ m.createElement("div", { ref: a });
}, zi = m.forwardRef(si);
var Le = { exports: {} }, Se, dt;
function ii() {
  if (dt) return Se;
  dt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Se = t, Se;
}
var Ae, ft;
function ni() {
  if (ft) return Ae;
  ft = 1;
  var t = /* @__PURE__ */ ii();
  function e() {
  }
  function i() {
  }
  return i.resetWarningCache = e, Ae = function() {
    function r(a, h, g, p, k, b) {
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
  }, Ae;
}
var mt;
function ri() {
  return mt || (mt = 1, Le.exports = /* @__PURE__ */ ni()()), Le.exports;
}
var oi = /* @__PURE__ */ ri();
const j = /* @__PURE__ */ De(oi);
function ai({
  initialPx: t,
  // preferred: initial width of left pane in pixels
  initialPercent: e = 50,
  // fallback if initialPx not provided
  minA: i = 120,
  minB: r = 120,
  maxA: s,
  // optional px limit for left pane; otherwise auto from container - minB - gutter
  gutter: o = 10,
  style: a,
  children: h,
  onChange: g
  // called with { px, percent }
}) {
  const p = V(null), k = V(!1), [b, c] = q(0), [n, l] = m.Children.toArray(h), u = ($, E, _) => Math.max(E, Math.min(_, $)), d = te(() => {
    const $ = p.current;
    if (!$) return { total: 0, min: 0, max: 0 };
    const E = $.clientWidth, _ = Math.max(0, E - o - r), f = typeof s == "number" ? Math.min(s, _) : _, L = Math.min(i, f);
    return { total: E, min: L, max: f };
  }, [o, i, r, s]);
  Bt(() => {
    if (!p.current) return;
    const { total: E, min: _, max: f } = d();
    let L;
    typeof t == "number" && Number.isFinite(t) ? L = t : L = Math.round(u(e, 0, 100) / 100 * (E - o)), c(u(L, _, f));
  }, [d, t, e, o]), D(() => {
    const $ = p.current;
    if (!$) return;
    const E = () => {
      const { total: f, min: L, max: N } = d();
      if (c((C) => u(C, L, N)), g) {
        const C = u(b, L, N), T = f > 0 ? C / (f - o) * 100 : 0;
        g({ px: C, percent: T });
      }
    };
    let _;
    return "ResizeObserver" in window ? (_ = new ResizeObserver(E), _.observe($)) : window.addEventListener("resize", E), () => {
      _ ? _.disconnect() : window.removeEventListener("resize", E);
    };
  }, [d, o, g, b]);
  const v = te(($) => {
    const E = p.current;
    if (!E) return;
    k.current = !0, $.currentTarget.setPointerCapture?.($.pointerId);
    const _ = (L) => {
      if (!k.current) return;
      const N = E.getBoundingClientRect(), C = L.clientX - N.left, { total: T, min: A, max: M } = d(), H = u(C, A, M);
      if (c(H), g) {
        const G = T > 0 ? H / (T - o) * 100 : 0;
        g({ px: H, percent: Math.round(G * 100) / 100 });
      }
    }, f = () => {
      k.current = !1;
      try {
        $.currentTarget.releasePointerCapture?.($.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", _), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f);
    };
    window.addEventListener("pointermove", _), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }, [d, o, g]);
  te(() => {
    const { total: $, min: E, max: _ } = d();
    let f;
    typeof t == "number" && Number.isFinite(t) ? f = t : f = Math.round(u(e, 0, 100) / 100 * ($ - o)), c(u(f, E, _));
  }, [d, t, e, o]);
  const y = vt(
    () => ({
      display: "grid",
      gridTemplateColumns: `${b}px ${o}px 1fr`,
      gridTemplateRows: "1fr",
      minWidth: 0
      // prevent overflow due to intrinsic min-content sizes
    }),
    [b, o]
  ), { min: w, max: x, total: S } = d();
  return /* @__PURE__ */ m.createElement("div", { ref: p, className: "splitpane", style: { ...y, ...a || {} } }, /* @__PURE__ */ m.createElement("div", { className: "pane", style: { minWidth: 0, minHeight: 0 } }, n), /* @__PURE__ */ m.createElement(
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
    /* @__PURE__ */ m.createElement("div", { className: "separator-grip" }),
    /* @__PURE__ */ m.createElement("div", { className: "separator-hit" })
  ), /* @__PURE__ */ m.createElement("div", { className: "pane", style: { minWidth: 0, minHeight: 0 } }, l));
}
ai.propTypes = {
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
const Ii = (t) => {
  const {
    className: e,
    onSelectionStart: i,
    onSelectionEnd: r,
    range: s,
    itemSize: o,
    selectionRange: a,
    itemRenderer: h,
    keyBindings: g = {},
    indicators: p = [],
    ...k
  } = t, b = t.style || {}, {
    callbacks: c,
    isSelecting: n,
    onMouseUp: l
  } = ts(a, {
    onSelectionStart: i,
    onSelectionEnd: r
  }), u = te((y) => h(y, c(y), {
    selectionRange: a,
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
      range: w,
      caption: x,
      name: S
    } = y;
    let $, E;
    return typeof w == "object" ? ($ = w.count, E = w.first) : ($ = 1, E = w), /* @__PURE__ */ m.createElement(
      "div",
      {
        onClick: (_) => {
          _.stopPropagation(), s.jumpToFirst(E);
        },
        className: `indicator indicator-${S}`,
        style: {
          position: "absolute",
          height: `calc(max(var(--indicator-min-height), ${$ / s.max * 100}%))`,
          top: `${E / s.max * 100}%`
        }
      }
    );
  }
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      className: B("dynamic-list", e),
      style: {
        position: "relative"
      }
    },
    /* @__PURE__ */ m.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ m.createElement(
      ut,
      {
        style: {
          ...d,
          bottom: -o
        },
        className: "auto-scroll auto-scroll-up",
        onMouseUp: l,
        enabled: n,
        onEvent: () => {
          s.moveUp(), s.first < a.first ? a.first = s.first : s.first > a.first && s.first < a.last && (a.last = s.first + 1);
        }
      }
    )),
    /* @__PURE__ */ m.createElement(
      ls,
      {
        itemSize: o,
        itemRenderer: u,
        range: s,
        ...k,
        style: {
          ...b
        }
      }
    ),
    /* @__PURE__ */ m.createElement(
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
      p.filter((y) => y.enabled).map(v)
    ),
    /* @__PURE__ */ m.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ m.createElement(
      ut,
      {
        style: {
          ...d,
          top: -o - 40
        },
        className: "auto-scroll auto-scroll-down",
        onMouseUp: l,
        enabled: n,
        onEvent: () => {
          s.moveDown(), s.last > a.last ? a.last = s.last : s.last !== s.max && s.last <= a.last && s.last > a.first && (a.first = s.last - 1);
        }
      }
    ))
  );
};
function li(t) {
  const {
    width: e,
    height: i,
    side: r = "top",
    arrowBase: s = 20,
    arrowLength: o = 10,
    borderRadius: a = 10,
    padding: h = 8,
    strokeWidth: g = 2,
    seamOverlap: p = 0.5
  } = t || {}, k = Math.max(0, Number(e) || 0), b = Math.max(0, Number(i) || 0), c = Math.max(0, Number(s) || 0), n = Math.max(0, Number(o) || 0), l = Math.max(0, Number(a) || 0), u = Math.max(0, Number(h) || 0), d = Math.max(0, Number(g) || 0), v = k + u * 2, y = b + u * 2, w = r === "left" || r === "right" ? n : 0, x = r === "top" || r === "bottom" ? n : 0, S = v + w + d, $ = y + x + d, E = r === "left" ? n : 0, _ = r === "top" ? n : 0, f = Math.min(l, Math.min(v, y) / 2), L = E + v / 2, N = _ + y / 2, C = E, T = _, A = C + v, M = T + y, J = [
    `M ${C + f} ${T}`,
    `H ${A - f}`,
    `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
    `V ${M - f}`,
    `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
    `H ${C + f}`,
    `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
    `V ${T + f}`,
    `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
    "Z"
  ].join(" ");
  let H = "";
  n > 0 && c > 0 && (r === "right" ? H = [
    `M ${A - p} ${N - c / 2}`,
    `L ${A + n} ${N}`,
    `L ${A - p} ${N + c / 2}`,
    "Z"
  ].join(" ") : r === "left" ? H = [
    `M ${C + p} ${N + c / 2}`,
    `L ${C - n} ${N}`,
    `L ${C + p} ${N - c / 2}`,
    "Z"
  ].join(" ") : r === "top" ? H = [
    `M ${L - c / 2} ${T + p}`,
    `L ${L} ${T - n}`,
    `L ${L + c / 2} ${T + p}`,
    "Z"
  ].join(" ") : r === "bottom" && (H = [
    `M ${L + c / 2} ${M - p}`,
    `L ${L} ${M + n}`,
    `L ${L - c / 2} ${M - p}`,
    "Z"
  ].join(" ")));
  let G = "";
  if (r === "right")
    G = [
      `M ${C + f} ${T}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
      `V ${N - c / 2}`,
      ...n > 0 && c > 0 ? [`L ${A + n} ${N}`, `L ${A} ${N + c / 2}`] : [],
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${T + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
      "Z"
    ].join(" ");
  else if (r === "left")
    G = [
      `M ${C + f} ${T}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${N + c / 2}`,
      ...n > 0 && c > 0 ? [`L ${C - n} ${N}`, `L ${C} ${N - c / 2}`] : [],
      `V ${T + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
      "Z"
    ].join(" ");
  else if (r === "top")
    G = [
      `M ${L} ${T - n}`,
      ...n > 0 && c > 0 ? [`L ${L + c / 2} ${T}`] : [],
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      `V ${T + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
      ...n > 0 && c > 0 ? [`H ${L - c / 2}`] : [],
      "Z"
    ].join(" ");
  else if (r === "bottom") {
    const Y = [
      `M ${C + f} ${T}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
      `V ${M - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${M}`
    ];
    n > 0 && c > 0 && Y.push(
      `H ${L + c / 2}`,
      `L ${L} ${M + n}`,
      `L ${L - c / 2} ${M}`
    ), Y.push(
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${M - f}`,
      // ✅ bas-gauche correct
      `V ${T + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
      "Z"
    ), G = Y.join(" ");
  }
  const se = { top: r === "top" ? -n : 0, left: r === "left" ? -n : 0 }, Q = { x: E + u, y: _ + u };
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
    height: $,
    viewBox: `0 0 ${S} ${$}`,
    viewBoxRectOnly: `0 0 ${v} ${y}`,
    transformRectToOrigin: `translate(${-E}, ${-_})`,
    rect: { x: E, y: _, w: v, h: y, r: f },
    offset: se,
    contentOffset: Q,
    strokeWidth: d
  };
}
function Di({
  side: t = "right",
  arrowBase: e = 20,
  arrowLength: i = 10,
  borderRadius: r = 10,
  stroke: s = "#111827",
  bubbleFill: o = "#fff",
  arrowFill: a = "#fff",
  strokeWidth: h = 2,
  style: g,
  seamOverlap: p = 0.5,
  children: k,
  ...b
}) {
  const c = m.useRef(null), { width: n = 0, height: l = 0 } = ze({ targetRef: c }), u = m.useMemo(() => !n || !l ? null : li({
    width: n,
    // = clientWidth (inclut padding)
    height: l,
    // = clientHeight (inclut padding)
    padding: 0,
    // le div gère déjà son padding visuel
    side: t,
    arrowBase: e,
    arrowLength: i,
    borderRadius: r,
    strokeWidth: h,
    seamOverlap: p
  }), [
    n,
    l,
    t,
    e,
    i,
    r,
    h
  ]);
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: c,
      style: {
        position: "relative",
        boxSizing: "border-box",
        ...g
      },
      ...b
    },
    /* @__PURE__ */ m.createElement("div", { style: { position: "relative", zIndex: 1 } }, k),
    u && /* @__PURE__ */ m.createElement(
      "svg",
      {
        "aria-hidden": !0,
        viewBox: `0 0 ${n} ${l}`,
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
      /* @__PURE__ */ m.createElement("g", { transform: u.transformRectToOrigin }, u.arrowD && /* @__PURE__ */ m.createElement("path", { d: u.arrowD, fill: a, stroke: "none" }), /* @__PURE__ */ m.createElement("path", { d: u.rectD, fill: o, stroke: "none" }), /* @__PURE__ */ m.createElement(
        "path",
        {
          d: u.outlineD,
          fill: "none",
          stroke: s,
          strokeWidth: u.strokeWidth,
          strokeLinejoin: "round",
          strokeLinecap: "round"
        }
      ))
    )
  );
}
const At = m.createContext(), Hi = (t) => {
  const {
    children: e,
    store: i,
    className: r,
    group: s,
    style: o = {}
  } = t, [a] = Ie(s, i);
  return /* @__PURE__ */ m.createElement(At.Provider, { value: s }, /* @__PURE__ */ m.createElement("div", { style: o, className: B("restack", r, a ?? "no-selection", s) }, e));
}, Bi = (t) => {
  const {
    value: e,
    onExpand: i = U,
    children: r,
    className: s,
    store: o,
    ...a
  } = t, h = Vt(At), [g, p] = Ie(h, o), k = g === e, b = V();
  let c = {
    x: 0,
    y: 0
  };
  if (g !== null && b.current && k) {
    let n = window.getComputedStyle(b.current.parentNode), l = -b.current.offsetLeft + parseFloat(n.paddingLeft), u = -b.current.offsetTop + parseFloat(n.paddingTop);
    c = { x: l, y: u };
  }
  return /* @__PURE__ */ m.createElement(
    kt,
    {
      ref: b,
      ...a,
      style: {
        left: c.x,
        top: c.y
        // position: !!selectedGroup && !selected ? "absolute" : "relative"
      },
      className: s,
      expanded: k,
      onExpand: (n) => {
        i(n), p(n ? e : null);
      }
    },
    r
  );
};
export {
  Di as Bubble,
  kt as Collapsible,
  Me as Decorated,
  xi as Disable,
  Ei as DotNotification,
  as as Drawer,
  Ci as DrawerContainer,
  Mi as Dropdown,
  Ii as DynamicList,
  ls as GargantuaList,
  ut as IntervalOnHover,
  Ti as MessageModal,
  Us as Messages,
  $i as ModalOkCancel,
  Xs as Pinnable,
  Li as Progress,
  Ni as RadioCollapse,
  Fi as RadioProvider,
  Hi as RadioStackContainer,
  Bi as RadioStacked,
  zi as ReactSlider,
  Si as RenderInWindow,
  Ai as Slider,
  ai as SplitPaneH,
  Pi as TableContextMenu,
  Ri as TextField
};
