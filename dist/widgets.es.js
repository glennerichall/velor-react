import g, { forwardRef as dt, Children as zt, useRef as V, useState as z, useEffect as I, useCallback as X, createPortal as It, createContext as $t, useContext as Dt, useMemo as ft, useLayoutEffect as Bt } from "react";
import "velor-utils/utils/Range.mjs";
import { noOp as Me } from "velor-utils/utils/functional.mjs";
import { useResizeDetector as mt } from "react-resize-detector";
import { waitForStableBoundingRect as Ot, recursiveMap as Ht } from "./utils.es.js";
import { Spinner as Vt, Alert as Ze, ProgressBar as Ft, Form as Qe, FormControl as qt, Dropdown as je, DropdownMenu as Gt, DropdownItem as Wt } from "react-bootstrap";
import { ArrowBarLeft as Zt, ArrowBarRight as Qt, InfoCircleFill as Ue, ExclamationTriangleFill as jt, ExclamationSquareFill as Ut, ExclamationDiamondFill as Xt, Pin as Kt, PinAngle as Jt, XLg as Yt, PlusCircleFill as Xe, DashCircleFill as Ke } from "react-bootstrap-icons";
import Z from "react-bootstrap/Button";
import G from "react-bootstrap/Modal";
import "react-range-slider-input/dist/style.css";
import es from "react-range-slider-input";
import Je from "react-bootstrap/ButtonGroup";
import { useInvalidate as ts, useRangeSelection as ss } from "./hooks.es.js";
import { useContextMenu as is, Menu as ns, Item as Ye } from "react-contexify";
function Ie(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var xe = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var et;
function os() {
  return et || (et = 1, function(h) {
    (function() {
      var e = {}.hasOwnProperty;
      function t() {
        for (var r = "", o = 0; o < arguments.length; o++) {
          var a = arguments[o];
          a && (r = n(r, s(a)));
        }
        return r;
      }
      function s(r) {
        if (typeof r == "string" || typeof r == "number")
          return r;
        if (typeof r != "object")
          return "";
        if (Array.isArray(r))
          return t.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
          return r.toString();
        var o = "";
        for (var a in r)
          e.call(r, a) && r[a] && (o = n(o, a));
        return o;
      }
      function n(r, o) {
        return o ? r ? r + " " + o : r + o : r;
      }
      h.exports ? (t.default = t, h.exports = t) : window.classNames = t;
    })();
  }(xe)), xe.exports;
}
var rs = os();
const B = /* @__PURE__ */ Ie(rs), Ee = "animating-expand", Ce = "animating-collapse", Te = "animating", Le = "reduced", Se = "expanded", as = dt((h, e) => {
  const {
    children: t,
    expanded: s,
    onExpand: n = () => {
    },
    onStateChanged: r = () => {
    },
    caption: o,
    className: a
  } = h;
  if (zt.count(t) === 0) return null;
  const u = V(), f = V(), [m, v] = z(!0), d = () => {
    const b = f.current.getBoundingClientRect();
    u.current.style.width = b.width + "px", u.current.style.height = b.height + "px";
  }, i = () => {
    u.current.style.width = "1.7em", u.current.style.height = "1.7em";
  }, l = () => {
    u.current.classList.remove(Se), u.current.classList.add(Ce, Te), i();
  }, c = () => {
    u.current.classList.remove(Le), u.current.classList.add(Ee, Te), d();
  }, p = () => u.current.classList.contains(Ee), k = () => u.current.classList.contains(Ce);
  return I(() => {
    s ? (u.current.classList.add(Se), d(), n(!0), r(!0)) : (u.current.classList.add(Le), i(), n(!1), r(!1));
    const b = () => {
      n(!1);
    };
    return v(!1), document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, []), I(() => {
    m || (s ? c() : l());
  }, [s]), mt({
    targetRef: f,
    onResize: (b, _) => {
      u.current.classList.contains("expanded") && Ot(f.current, d);
    }
  }), /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: u,
      onTransitionEnd: (b) => {
        b.propertyName === "width" && (k() && !s ? (u.current.classList.add(Le), r(!1)) : p() && s && (u.current.classList.add(Se), r(!0)), u.current.classList.remove(
          Ce,
          Ee,
          Te
        ));
      },
      onMouseDown: (b) => b.stopPropagation(),
      onClick: (b) => {
        b.stopPropagation(), n(!0);
      },
      className: B(
        a,
        "collapsible"
      )
    },
    /* @__PURE__ */ g.createElement("span", { className: "caption", ref: e }, o),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: f,
        className: "content"
      },
      t
    )
  );
}), wi = (h) => Ht(h.children, (e) => g.cloneElement(e, {
  disabled: e.props.disabled || h.disabled
})), xi = (h) => {
  const {
    notifications: e,
    variant: t,
    visible: s = !1,
    targetRef: n,
    bordered: r = !1,
    size: o
  } = h, a = V(), u = V(), [f, m] = z(!1);
  function v(d) {
    d.preventDefault(), d.stopPropagation(), f ? (m(!1), a.current.style.width = null, a.current.style.height = null) : (m(!0), a.current.style.width = u.current.scrollWidth + "px", a.current.style.height = u.current.scrollHeight + "px");
  }
  return I(() => {
    const d = (i) => {
      i.stopPropagation(), m(!1), a.current && (a.current.style.width = null, a.current.style.height = null);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []), n ? /* @__PURE__ */ g.createElement(
    Anchor,
    {
      anchor: "TOP-RIGHT",
      align: "TOP-LEFT",
      targetRef: n
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: a,
        onClick: v,
        className: B(
          o,
          t,
          "dot-notification",
          "anchored",
          {
            bordered: r,
            hidden: !s,
            expanded: f
          }
        )
      },
      /* @__PURE__ */ g.createElement(
        "div",
        {
          ref: u,
          className: "content"
        },
        e
      )
    )
  ) : h.children ? /* @__PURE__ */ g.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: a,
      onClick: v,
      className: B(
        t,
        o,
        "dot-notification",
        {
          bordered: r,
          hidden: !s,
          expanded: f
        }
      )
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: u,
        className: "content"
      },
      e
    )
  ), h.children) : /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: a,
      onClick: v,
      className: B(
        t,
        o,
        "dot-notification",
        {
          bordered: r,
          hidden: !s,
          expanded: f
        }
      )
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: u,
        className: "content"
      },
      e
    )
  );
}, ls = (h) => {
  const {
    visible: e,
    onClose: t,
    title: s,
    loading: n,
    className: r = "",
    id: o,
    name: a,
    location: u = "right",
    clearChilds: f = !0
  } = h, [m, v] = z(!0), [d, i] = z(e), [l, c] = z(!1);
  I(() => {
    e !== d && (c(!0), v(!1));
    const y = () => {
      e && t(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [e]);
  let p;
  switch (u) {
    case "right":
      p = /* @__PURE__ */ g.createElement(Qt, null);
      break;
    case "left":
      p = /* @__PURE__ */ g.createElement(Zt, null);
      break;
  }
  const k = /* @__PURE__ */ g.createElement(
    Z,
    {
      onClick: () => t(!1),
      variant: "light"
    },
    p
  ), b = /* @__PURE__ */ g.createElement(
    Vt,
    {
      className: B({ hidden: !n }),
      animation: "border",
      role: "status",
      variant: "secondary"
    }
  );
  let _;
  return s ? _ = /* @__PURE__ */ g.createElement("h5", { className: "title" }, /* @__PURE__ */ g.createElement("span", { className: "content" }, s), /* @__PURE__ */ g.createElement("span", { className: "buttons" }, b, k)) : _ = /* @__PURE__ */ g.createElement("div", { className: "title" }, b, /* @__PURE__ */ g.createElement("span", { className: "buttons" }, k)), /* @__PURE__ */ g.createElement(
    "div",
    {
      id: o,
      onAnimationEnd: (y) => c(e),
      onMouseDown: (y) => {
        y.stopPropagation();
      },
      className: B(
        r,
        `name-${a}`,
        "drawer",
        `${u}-drawer`,
        "animate__animated",
        "animate__faster",
        {
          initial: m,
          "willbe-visible": e,
          "initially-visible": d,
          animate__slideInRight: u === "right" && e && !m,
          animate__slideOutRight: u === "right" && !e && !m,
          animate__slideInLeft: u === "left" && e && !m,
          animate__slideOutLeft: u === "left" && !e && !m
        }
      )
    },
    _,
    l || !f ? h.children : null
  );
}, Ei = (h) => {
  const {
    visibleItem: e
  } = h;
  return g.Children.map(h.children, (t) => {
    if (!g.isValidElement(t))
      return t;
    const {
      title: s,
      name: n,
      loading: r,
      className: o,
      id: a,
      onClose: u
    } = t.props;
    return /* @__PURE__ */ g.createElement(
      ls,
      {
        id: a,
        className: o,
        visible: e === n,
        title: s,
        name: n,
        loading: r,
        onClose: u
      },
      t
    );
  });
}, hs = (h) => {
  const e = V(), {
    itemRenderer: t,
    itemSize: s,
    range: n
  } = h;
  if (!n || !n.valid)
    return;
  const [r, o] = z(0);
  n.count = Math.floor(r / s) - 1;
  const a = n.valid && n.max > 0, u = X((m) => {
    const v = Math.sign(m.deltaY);
    n.moveDown(v);
  }, [n]);
  mt({
    targetRef: e,
    onResize: X(({ height: m }) => {
      o(m);
    }, [])
  });
  const f = [];
  for (let m of n) {
    let v = t(m);
    v !== null && f.push(v);
  }
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      id: h.id,
      className: "gargantua",
      ref: e,
      style: h.style,
      onWheel: u
    },
    /* @__PURE__ */ g.createElement("div", { className: "viewport" }, /* @__PURE__ */ g.createElement("div", { className: "content" }, f), /* @__PURE__ */ g.createElement(
      "input",
      {
        type: "range",
        className: "vertical-range",
        onChange: (m) => n.jumpToFirst(m.target.value),
        disabled: !a,
        value: n.first,
        min: 0,
        max: n.max
      }
    ))
  );
};
function $e() {
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
let j = $e();
function gt(h) {
  j = h;
}
const te = { exec: () => null };
function T(h, e = "") {
  let t = typeof h == "string" ? h : h.source;
  const s = {
    replace: (n, r) => {
      let o = typeof r == "string" ? r : r.source;
      return o = o.replace(M.caret, "$1"), t = t.replace(n, o), s;
    },
    getRegex: () => new RegExp(t, e)
  };
  return s;
}
const M = {
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
  listItemRegex: (h) => new RegExp(`^( {0,3}${h})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (h) => new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (h) => new RegExp(`^ {0,${Math.min(3, h - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (h) => new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (h) => new RegExp(`^ {0,${Math.min(3, h - 1)}}#`),
  htmlBeginRegex: (h) => new RegExp(`^ {0,${Math.min(3, h - 1)}}<(?:[a-z].*>|!--)`, "i")
}, cs = /^(?:[ \t]*(?:\n|$))+/, us = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ps = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, se = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ds = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, De = /(?:[*+-]|\d{1,9}[.)])/, vt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, kt = T(vt).replace(/bull/g, De).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), fs = T(vt).replace(/bull/g, De).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Be = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ms = /^[^\n]+/, Oe = /(?!\s*\])(?:\\.|[^\[\]\\])+/, gs = T(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Oe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), vs = T(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, De).getRegex(), ge = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", He = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ks = T("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", He).replace("tag", ge).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), bt = T(Be).replace("hr", se).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ge).getRegex(), bs = T(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", bt).getRegex(), Ve = {
  blockquote: bs,
  code: us,
  def: gs,
  fences: ps,
  heading: ds,
  hr: se,
  html: ks,
  lheading: kt,
  list: vs,
  newline: cs,
  paragraph: bt,
  table: te,
  text: ms
}, tt = T("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", se).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ge).getRegex(), _s = {
  ...Ve,
  lheading: fs,
  table: tt,
  paragraph: T(Be).replace("hr", se).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", tt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ge).getRegex()
}, ys = {
  ...Ve,
  html: T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", He).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: te,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: T(Be).replace("hr", se).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", kt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ws = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, xs = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, _t = /^( {2,}|\\)\n(?!\s*$)/, Es = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ve = /[\p{P}\p{S}]/u, Fe = /[\s\p{P}\p{S}]/u, yt = /[^\s\p{P}\p{S}]/u, Cs = T(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Fe).getRegex(), wt = /(?!~)[\p{P}\p{S}]/u, Ts = /(?!~)[\s\p{P}\p{S}]/u, Ls = /(?:[^\s\p{P}\p{S}]|~)/u, Ss = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, xt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, As = T(xt, "u").replace(/punct/g, ve).getRegex(), Ps = T(xt, "u").replace(/punct/g, wt).getRegex(), Et = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Rs = T(Et, "gu").replace(/notPunctSpace/g, yt).replace(/punctSpace/g, Fe).replace(/punct/g, ve).getRegex(), Ns = T(Et, "gu").replace(/notPunctSpace/g, Ls).replace(/punctSpace/g, Ts).replace(/punct/g, wt).getRegex(), Ms = T("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, yt).replace(/punctSpace/g, Fe).replace(/punct/g, ve).getRegex(), zs = T(/\\(punct)/, "gu").replace(/punct/g, ve).getRegex(), Is = T(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), $s = T(He).replace("(?:-->|$)", "-->").getRegex(), Ds = T("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", $s).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), de = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Bs = T(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", de).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ct = T(/^!?\[(label)\]\[(ref)\]/).replace("label", de).replace("ref", Oe).getRegex(), Tt = T(/^!?\[(ref)\](?:\[\])?/).replace("ref", Oe).getRegex(), Os = T("reflink|nolink(?!\\()", "g").replace("reflink", Ct).replace("nolink", Tt).getRegex(), qe = {
  _backpedal: te,
  // only used for GFM url
  anyPunctuation: zs,
  autolink: Is,
  blockSkip: Ss,
  br: _t,
  code: xs,
  del: te,
  emStrongLDelim: As,
  emStrongRDelimAst: Rs,
  emStrongRDelimUnd: Ms,
  escape: ws,
  link: Bs,
  nolink: Tt,
  punctuation: Cs,
  reflink: Ct,
  reflinkSearch: Os,
  tag: Ds,
  text: Es,
  url: te
}, Hs = {
  ...qe,
  link: T(/^!?\[(label)\]\((.*?)\)/).replace("label", de).getRegex(),
  reflink: T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", de).getRegex()
}, ze = {
  ...qe,
  emStrongRDelimAst: Ns,
  emStrongLDelim: Ps,
  url: T(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Vs = {
  ...ze,
  br: T(_t).replace("{2,}", "*").getRegex(),
  text: T(ze.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ue = {
  normal: Ve,
  gfm: _s,
  pedantic: ys
}, Y = {
  normal: qe,
  gfm: ze,
  breaks: Vs,
  pedantic: Hs
}, Fs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, st = (h) => Fs[h];
function F(h, e) {
  if (e) {
    if (M.escapeTest.test(h))
      return h.replace(M.escapeReplace, st);
  } else if (M.escapeTestNoEncode.test(h))
    return h.replace(M.escapeReplaceNoEncode, st);
  return h;
}
function it(h) {
  try {
    h = encodeURI(h).replace(M.percentDecode, "%");
  } catch {
    return null;
  }
  return h;
}
function nt(h, e) {
  const t = h.replace(M.findPipe, (r, o, a) => {
    let u = !1, f = o;
    for (; --f >= 0 && a[f] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), s = t.split(M.splitPipe);
  let n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e)
    if (s.length > e)
      s.splice(e);
    else
      for (; s.length < e; )
        s.push("");
  for (; n < s.length; n++)
    s[n] = s[n].trim().replace(M.slashPipe, "|");
  return s;
}
function ee(h, e, t) {
  const s = h.length;
  if (s === 0)
    return "";
  let n = 0;
  for (; n < s && h.charAt(s - n - 1) === e; )
    n++;
  return h.slice(0, s - n);
}
function qs(h, e) {
  if (h.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let s = 0; s < h.length; s++)
    if (h[s] === "\\")
      s++;
    else if (h[s] === e[0])
      t++;
    else if (h[s] === e[1] && (t--, t < 0))
      return s;
  return -1;
}
function ot(h, e, t, s, n) {
  const r = e.href, o = e.title || null, a = h[1].replace(n.other.outputLinkReplace, "$1");
  if (h[0].charAt(0) !== "!") {
    s.state.inLink = !0;
    const u = {
      type: "link",
      raw: t,
      href: r,
      title: o,
      text: a,
      tokens: s.inlineTokens(a)
    };
    return s.state.inLink = !1, u;
  }
  return {
    type: "image",
    raw: t,
    href: r,
    title: o,
    text: a
  };
}
function Gs(h, e, t) {
  const s = h.match(t.other.indentCodeCompensation);
  if (s === null)
    return e;
  const n = s[1];
  return e.split(`
`).map((r) => {
    const o = r.match(t.other.beginningSpace);
    if (o === null)
      return r;
    const [a] = o;
    return a.length >= n.length ? r.slice(n.length) : r;
  }).join(`
`);
}
class fe {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(e) {
    this.options = e || j;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const s = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? s : ee(s, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const s = t[0], n = Gs(s, t[3] || "", this.rules);
      return {
        type: "code",
        raw: s,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: n
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let s = t[2].trim();
      if (this.rules.other.endingHash.test(s)) {
        const n = ee(s, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (s = n.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: ee(t[0], `
`)
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let s = ee(t[0], `
`).split(`
`), n = "", r = "";
      const o = [];
      for (; s.length > 0; ) {
        let a = !1;
        const u = [];
        let f;
        for (f = 0; f < s.length; f++)
          if (this.rules.other.blockquoteStart.test(s[f]))
            u.push(s[f]), a = !0;
          else if (!a)
            u.push(s[f]);
          else
            break;
        s = s.slice(f);
        const m = u.join(`
`), v = m.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${m}` : m, r = r ? `${r}
${v}` : v;
        const d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(v, o, !0), this.lexer.state.top = d, s.length === 0)
          break;
        const i = o.at(-1);
        if (i?.type === "code")
          break;
        if (i?.type === "blockquote") {
          const l = i, c = l.raw + `
` + s.join(`
`), p = this.blockquote(c);
          o[o.length - 1] = p, n = n.substring(0, n.length - l.raw.length) + p.raw, r = r.substring(0, r.length - l.text.length) + p.text;
          break;
        } else if (i?.type === "list") {
          const l = i, c = l.raw + `
` + s.join(`
`), p = this.list(c);
          o[o.length - 1] = p, n = n.substring(0, n.length - i.raw.length) + p.raw, r = r.substring(0, r.length - l.raw.length) + p.raw, s = c.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: n,
        tokens: o,
        text: r
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let s = t[1].trim();
      const n = s.length > 1, r = {
        type: "list",
        raw: "",
        ordered: n,
        start: n ? +s.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      s = n ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = n ? s : "[*+-]");
      const o = this.rules.other.listItemRegex(s);
      let a = !1;
      for (; e; ) {
        let f = !1, m = "", v = "";
        if (!(t = o.exec(e)) || this.rules.block.hr.test(e))
          break;
        m = t[0], e = e.substring(m.length);
        let d = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), i = e.split(`
`, 1)[0], l = !d.trim(), c = 0;
        if (this.options.pedantic ? (c = 2, v = d.trimStart()) : l ? c = t[1].length + 1 : (c = t[2].search(this.rules.other.nonSpaceChar), c = c > 4 ? 1 : c, v = d.slice(c), c += t[1].length), l && this.rules.other.blankLine.test(i) && (m += i + `
`, e = e.substring(i.length + 1), f = !0), !f) {
          const b = this.rules.other.nextBulletRegex(c), _ = this.rules.other.hrRegex(c), y = this.rules.other.fencesBeginRegex(c), S = this.rules.other.headingBeginRegex(c), C = this.rules.other.htmlBeginRegex(c);
          for (; e; ) {
            const E = e.split(`
`, 1)[0];
            let w;
            if (i = E, this.options.pedantic ? (i = i.replace(this.rules.other.listReplaceNesting, "  "), w = i) : w = i.replace(this.rules.other.tabCharGlobal, "    "), y.test(i) || S.test(i) || C.test(i) || b.test(i) || _.test(i))
              break;
            if (w.search(this.rules.other.nonSpaceChar) >= c || !i.trim())
              v += `
` + w.slice(c);
            else {
              if (l || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || y.test(d) || S.test(d) || _.test(d))
                break;
              v += `
` + i;
            }
            !l && !i.trim() && (l = !0), m += E + `
`, e = e.substring(E.length + 1), d = w.slice(c);
          }
        }
        r.loose || (a ? r.loose = !0 : this.rules.other.doubleBlankLine.test(m) && (a = !0));
        let p = null, k;
        this.options.gfm && (p = this.rules.other.listIsTask.exec(v), p && (k = p[0] !== "[ ] ", v = v.replace(this.rules.other.listReplaceTask, ""))), r.items.push({
          type: "list_item",
          raw: m,
          task: !!p,
          checked: k,
          loose: !1,
          text: v,
          tokens: []
        }), r.raw += m;
      }
      const u = r.items.at(-1);
      if (u)
        u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
      else
        return;
      r.raw = r.raw.trimEnd();
      for (let f = 0; f < r.items.length; f++)
        if (this.lexer.state.top = !1, r.items[f].tokens = this.lexer.blockTokens(r.items[f].text, []), !r.loose) {
          const m = r.items[f].tokens.filter((d) => d.type === "space"), v = m.length > 0 && m.some((d) => this.rules.other.anyLine.test(d.raw));
          r.loose = v;
        }
      if (r.loose)
        for (let f = 0; f < r.items.length; f++)
          r.items[f].loose = !0;
      return r;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const s = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: s,
        raw: t[0],
        href: n,
        title: r
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2]))
      return;
    const s = nt(t[1]), n = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === n.length) {
      for (const a of n)
        this.rules.other.tableAlignRight.test(a) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? o.align.push("left") : o.align.push(null);
      for (let a = 0; a < s.length; a++)
        o.header.push({
          text: s[a],
          tokens: this.lexer.inline(s[a]),
          header: !0,
          align: o.align[a]
        });
      for (const a of r)
        o.rows.push(nt(a, o.header.length).map((u, f) => ({
          text: u,
          tokens: this.lexer.inline(u),
          header: !1,
          align: o.align[f]
        })));
      return o;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const s = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: t[1]
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const s = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
        if (!this.rules.other.endAngleBracket.test(s))
          return;
        const o = ee(s.slice(0, -1), "\\");
        if ((s.length - o.length) % 2 === 0)
          return;
      } else {
        const o = qs(t[2], "()");
        if (o > -1) {
          const u = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + o;
          t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, u).trim(), t[3] = "";
        }
      }
      let n = t[2], r = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(n);
        o && (n = o[1], r = o[3]);
      } else
        r = t[3] ? t[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? n = n.slice(1) : n = n.slice(1, -1)), ot(t, {
        href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
        title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let s;
    if ((s = this.rules.inline.reflink.exec(e)) || (s = this.rules.inline.nolink.exec(e))) {
      const n = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[n.toLowerCase()];
      if (!r) {
        const o = s[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return ot(s, r, s[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, s = "") {
    let n = this.rules.inline.emStrongLDelim.exec(e);
    if (!n || n[3] && s.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(n[1] || n[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const o = [...n[0]].length - 1;
      let a, u, f = o, m = 0;
      const v = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (v.lastIndex = 0, t = t.slice(-1 * e.length + o); (n = v.exec(t)) != null; ) {
        if (a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !a)
          continue;
        if (u = [...a].length, n[3] || n[4]) {
          f += u;
          continue;
        } else if ((n[5] || n[6]) && o % 3 && !((o + u) % 3)) {
          m += u;
          continue;
        }
        if (f -= u, f > 0)
          continue;
        u = Math.min(u, u + f + m);
        const d = [...n[0]][0].length, i = e.slice(0, o + n.index + d + u);
        if (Math.min(o, u) % 2) {
          const c = i.slice(1, -1);
          return {
            type: "em",
            raw: i,
            text: c,
            tokens: this.lexer.inlineTokens(c)
          };
        }
        const l = i.slice(2, -2);
        return {
          type: "strong",
          raw: i,
          text: l,
          tokens: this.lexer.inlineTokens(l)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let s = t[2].replace(this.rules.other.newLineCharGlobal, " ");
      const n = this.rules.other.nonSpaceChar.test(s), r = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
      return n && r && (s = s.substring(1, s.length - 1)), {
        type: "codespan",
        raw: t[0],
        text: s
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let s, n;
      return t[2] === "@" ? (s = t[1], n = "mailto:" + s) : (s = t[1], n = s), {
        type: "link",
        raw: t[0],
        text: s,
        href: n,
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
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let s, n;
      if (t[2] === "@")
        s = t[0], n = "mailto:" + s;
      else {
        let r;
        do
          r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (r !== t[0]);
        s = t[0], t[1] === "www." ? n = "http://" + t[0] : n = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: s,
        href: n,
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
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      const s = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        escaped: s
      };
    }
  }
}
class $ {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || j, this.options.tokenizer = this.options.tokenizer || new fe(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      other: M,
      block: ue.normal,
      inline: Y.normal
    };
    this.options.pedantic ? (t.block = ue.pedantic, t.inline = Y.pedantic) : this.options.gfm && (t.block = ue.gfm, this.options.breaks ? t.inline = Y.breaks : t.inline = Y.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: ue,
      inline: Y
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new $(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new $(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(M.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const s = this.inlineQueue[t];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], s = !1) {
    for (this.options.pedantic && (e = e.replace(M.tabCharGlobal, "    ").replace(M.spaceLine, "")); e; ) {
      let n;
      if (this.options.extensions?.block?.some((o) => (n = o.call({ lexer: this }, e, t)) ? (e = e.substring(n.raw.length), t.push(n), !0) : !1))
        continue;
      if (n = this.tokenizer.space(e)) {
        e = e.substring(n.raw.length);
        const o = t.at(-1);
        n.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(n);
        continue;
      }
      if (n = this.tokenizer.code(e)) {
        e = e.substring(n.raw.length);
        const o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue.at(-1).src = o.text) : t.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.list(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.html(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.def(e)) {
        e = e.substring(n.raw.length);
        const o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += `
` + n.raw, o.text += `
` + n.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
          href: n.href,
          title: n.title
        });
        continue;
      }
      if (n = this.tokenizer.table(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(e)) {
        e = e.substring(n.raw.length), t.push(n);
        continue;
      }
      let r = e;
      if (this.options.extensions?.startBlock) {
        let o = 1 / 0;
        const a = e.slice(1);
        let u;
        this.options.extensions.startBlock.forEach((f) => {
          u = f.call({ lexer: this }, a), typeof u == "number" && u >= 0 && (o = Math.min(o, u));
        }), o < 1 / 0 && o >= 0 && (r = e.substring(0, o + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(r))) {
        const o = t.at(-1);
        s && o?.type === "paragraph" ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(n), s = r.length !== e.length, e = e.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(e)) {
        e = e.substring(n.raw.length);
        const o = t.at(-1);
        o?.type === "text" ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(n);
        continue;
      }
      if (e) {
        const o = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(o);
          break;
        } else
          throw new Error(o);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let s = e, n = null;
    if (this.tokens.links) {
      const a = Object.keys(this.tokens.links);
      if (a.length > 0)
        for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          a.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s = s.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, n.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let r = !1, o = "";
    for (; e; ) {
      r || (o = ""), r = !1;
      let a;
      if (this.options.extensions?.inline?.some((f) => (a = f.call({ lexer: this }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), !0) : !1))
        continue;
      if (a = this.tokenizer.escape(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.tag(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.link(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(a.raw.length);
        const f = t.at(-1);
        a.type === "text" && f?.type === "text" ? (f.raw += a.raw, f.text += a.text) : t.push(a);
        continue;
      }
      if (a = this.tokenizer.emStrong(e, s, o)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.codespan(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.br(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.del(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.autolink(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (!this.state.inLink && (a = this.tokenizer.url(e))) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      let u = e;
      if (this.options.extensions?.startInline) {
        let f = 1 / 0;
        const m = e.slice(1);
        let v;
        this.options.extensions.startInline.forEach((d) => {
          v = d.call({ lexer: this }, m), typeof v == "number" && v >= 0 && (f = Math.min(f, v));
        }), f < 1 / 0 && f >= 0 && (u = e.substring(0, f + 1));
      }
      if (a = this.tokenizer.inlineText(u)) {
        e = e.substring(a.raw.length), a.raw.slice(-1) !== "_" && (o = a.raw.slice(-1)), r = !0;
        const f = t.at(-1);
        f?.type === "text" ? (f.raw += a.raw, f.text += a.text) : t.push(a);
        continue;
      }
      if (e) {
        const f = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(f);
          break;
        } else
          throw new Error(f);
      }
    }
    return t;
  }
}
class me {
  options;
  parser;
  // set by the parser
  constructor(e) {
    this.options = e || j;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: s }) {
    const n = (t || "").match(M.notSpaceStart)?.[0], r = e.replace(M.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + F(n) + '">' + (s ? r : F(r, !0)) + `</code></pre>
` : "<pre><code>" + (s ? r : F(r, !0)) + `</code></pre>
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
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    const t = e.ordered, s = e.start;
    let n = "";
    for (let a = 0; a < e.items.length; a++) {
      const u = e.items[a];
      n += this.listitem(u);
    }
    const r = t ? "ol" : "ul", o = t && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + r + o + `>
` + n + "</" + r + `>
`;
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      const s = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = s + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = s + " " + F(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
        type: "text",
        raw: s + " ",
        text: s + " ",
        escaped: !0
      }) : t += s + " ";
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
    let t = "", s = "";
    for (let r = 0; r < e.header.length; r++)
      s += this.tablecell(e.header[r]);
    t += this.tablerow({ text: s });
    let n = "";
    for (let r = 0; r < e.rows.length; r++) {
      const o = e.rows[r];
      s = "";
      for (let a = 0; a < o.length; a++)
        s += this.tablecell(o[a]);
      n += this.tablerow({ text: s });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const t = this.parser.parseInline(e.tokens), s = e.header ? "th" : "td";
    return (e.align ? `<${s} align="${e.align}">` : `<${s}>`) + t + `</${s}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${F(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: s }) {
    const n = this.parser.parseInline(s), r = it(e);
    if (r === null)
      return n;
    e = r;
    let o = '<a href="' + e + '"';
    return t && (o += ' title="' + F(t) + '"'), o += ">" + n + "</a>", o;
  }
  image({ href: e, title: t, text: s }) {
    const n = it(e);
    if (n === null)
      return F(s);
    e = n;
    let r = `<img src="${e}" alt="${s}"`;
    return t && (r += ` title="${F(t)}"`), r += ">", r;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : F(e.text);
  }
}
class Ge {
  // no need for block level renderers
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
}
class D {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || j, this.options.renderer = this.options.renderer || new me(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ge();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new D(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new D(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let s = "";
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (this.options.extensions?.renderers?.[r.type]) {
        const a = r, u = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (u !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          s += u || "";
          continue;
        }
      }
      const o = r;
      switch (o.type) {
        case "space": {
          s += this.renderer.space(o);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(o);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(o);
          continue;
        }
        case "code": {
          s += this.renderer.code(o);
          continue;
        }
        case "table": {
          s += this.renderer.table(o);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          s += this.renderer.list(o);
          continue;
        }
        case "html": {
          s += this.renderer.html(o);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(o);
          continue;
        }
        case "text": {
          let a = o, u = this.renderer.text(a);
          for (; n + 1 < e.length && e[n + 1].type === "text"; )
            a = e[++n], u += `
` + this.renderer.text(a);
          t ? s += this.renderer.paragraph({
            type: "paragraph",
            raw: u,
            text: u,
            tokens: [{ type: "text", raw: u, text: u, escaped: !0 }]
          }) : s += u;
          continue;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return s;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t = this.renderer) {
    let s = "";
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (this.options.extensions?.renderers?.[r.type]) {
        const a = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          s += a || "";
          continue;
        }
      }
      const o = r;
      switch (o.type) {
        case "escape": {
          s += t.text(o);
          break;
        }
        case "html": {
          s += t.html(o);
          break;
        }
        case "link": {
          s += t.link(o);
          break;
        }
        case "image": {
          s += t.image(o);
          break;
        }
        case "strong": {
          s += t.strong(o);
          break;
        }
        case "em": {
          s += t.em(o);
          break;
        }
        case "codespan": {
          s += t.codespan(o);
          break;
        }
        case "br": {
          s += t.br(o);
          break;
        }
        case "del": {
          s += t.del(o);
          break;
        }
        case "text": {
          s += t.text(o);
          break;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return s;
  }
}
class pe {
  options;
  block;
  constructor(e) {
    this.options = e || j;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? $.lex : $.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? D.parse : D.parseInline;
  }
}
class Ws {
  defaults = $e();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = D;
  Renderer = me;
  TextRenderer = Ge;
  Lexer = $;
  Tokenizer = fe;
  Hooks = pe;
  constructor(...e) {
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    let s = [];
    for (const n of e)
      switch (s = s.concat(t.call(this, n)), n.type) {
        case "table": {
          const r = n;
          for (const o of r.header)
            s = s.concat(this.walkTokens(o.tokens, t));
          for (const o of r.rows)
            for (const a of o)
              s = s.concat(this.walkTokens(a.tokens, t));
          break;
        }
        case "list": {
          const r = n;
          s = s.concat(this.walkTokens(r.items, t));
          break;
        }
        default: {
          const r = n;
          this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((o) => {
            const a = r[o].flat(1 / 0);
            s = s.concat(this.walkTokens(a, t));
          }) : r.tokens && (s = s.concat(this.walkTokens(r.tokens, t)));
        }
      }
    return s;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((s) => {
      const n = { ...s };
      if (n.async = this.defaults.async || n.async || !1, s.extensions && (s.extensions.forEach((r) => {
        if (!r.name)
          throw new Error("extension name required");
        if ("renderer" in r) {
          const o = t.renderers[r.name];
          o ? t.renderers[r.name] = function(...a) {
            let u = r.renderer.apply(this, a);
            return u === !1 && (u = o.apply(this, a)), u;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = t[r.level];
          o ? o.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), n.extensions = t), s.renderer) {
        const r = this.defaults.renderer || new me(this.defaults);
        for (const o in s.renderer) {
          if (!(o in r))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const a = o, u = s.renderer[a], f = r[a];
          r[a] = (...m) => {
            let v = u.apply(r, m);
            return v === !1 && (v = f.apply(r, m)), v || "";
          };
        }
        n.renderer = r;
      }
      if (s.tokenizer) {
        const r = this.defaults.tokenizer || new fe(this.defaults);
        for (const o in s.tokenizer) {
          if (!(o in r))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const a = o, u = s.tokenizer[a], f = r[a];
          r[a] = (...m) => {
            let v = u.apply(r, m);
            return v === !1 && (v = f.apply(r, m)), v;
          };
        }
        n.tokenizer = r;
      }
      if (s.hooks) {
        const r = this.defaults.hooks || new pe();
        for (const o in s.hooks) {
          if (!(o in r))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const a = o, u = s.hooks[a], f = r[a];
          pe.passThroughHooks.has(o) ? r[a] = (m) => {
            if (this.defaults.async)
              return Promise.resolve(u.call(r, m)).then((d) => f.call(r, d));
            const v = u.call(r, m);
            return f.call(r, v);
          } : r[a] = (...m) => {
            let v = u.apply(r, m);
            return v === !1 && (v = f.apply(r, m)), v;
          };
        }
        n.hooks = r;
      }
      if (s.walkTokens) {
        const r = this.defaults.walkTokens, o = s.walkTokens;
        n.walkTokens = function(a) {
          let u = [];
          return u.push(o.call(this, a)), r && (u = u.concat(r.call(this, a))), u;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return $.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return D.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (s, n) => {
      const r = { ...n }, o = { ...this.defaults, ...r }, a = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && r.async === !1)
        return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = e);
      const u = o.hooks ? o.hooks.provideLexer() : e ? $.lex : $.lexInline, f = o.hooks ? o.hooks.provideParser() : e ? D.parse : D.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((m) => u(m, o)).then((m) => o.hooks ? o.hooks.processAllTokens(m) : m).then((m) => o.walkTokens ? Promise.all(this.walkTokens(m, o.walkTokens)).then(() => m) : m).then((m) => f(m, o)).then((m) => o.hooks ? o.hooks.postprocess(m) : m).catch(a);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let m = u(s, o);
        o.hooks && (m = o.hooks.processAllTokens(m)), o.walkTokens && this.walkTokens(m, o.walkTokens);
        let v = f(m, o);
        return o.hooks && (v = o.hooks.postprocess(v)), v;
      } catch (m) {
        return a(m);
      }
    };
  }
  onError(e, t) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const n = "<p>An error occurred:</p><pre>" + F(s.message + "", !0) + "</pre>";
        return t ? Promise.resolve(n) : n;
      }
      if (t)
        return Promise.reject(s);
      throw s;
    };
  }
}
const Q = new Ws();
function L(h, e) {
  return Q.parse(h, e);
}
L.options = L.setOptions = function(h) {
  return Q.setOptions(h), L.defaults = Q.defaults, gt(L.defaults), L;
};
L.getDefaults = $e;
L.defaults = j;
L.use = function(...h) {
  return Q.use(...h), L.defaults = Q.defaults, gt(L.defaults), L;
};
L.walkTokens = function(h, e) {
  return Q.walkTokens(h, e);
};
L.parseInline = Q.parseInline;
L.Parser = D;
L.parser = D.parse;
L.Renderer = me;
L.TextRenderer = Ge;
L.Lexer = $;
L.lexer = $.lex;
L.Tokenizer = fe;
L.Hooks = pe;
L.parse = L;
L.options;
L.setOptions;
L.use;
L.walkTokens;
L.parseInline;
D.parse;
$.lex;
const Zs = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function Qs(h) {
  let e;
  for (; (e = Zs.exec(h)) !== null; ) {
    const { dateStr: t } = e.groups;
    h = h.replaceAll(
      e[0],
      new Date(t).toLocaleDateString()
    );
  }
  return h;
}
function rt(h) {
  return h = Qs(h), L.parse(h);
}
const js = (h) => {
  const {
    entry: e
  } = h;
  let t;
  switch (e.severity) {
    case "info":
    case "success":
      t = /* @__PURE__ */ g.createElement(Ue, null);
      break;
    case "warning":
      t = /* @__PURE__ */ g.createElement(Ut, null);
      break;
    case "error":
      t = /* @__PURE__ */ g.createElement(jt, null);
      break;
    default:
      t = /* @__PURE__ */ g.createElement(Ue, null);
  }
  let s = e.message;
  return Array.isArray(s) || (s = [s]), /* @__PURE__ */ g.createElement("div", { className: B("entry", e.severity, e.category) }, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("span", { className: "icon" }, t), /* @__PURE__ */ g.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), s.map((n) => /* @__PURE__ */ g.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: rt(n) }
    }
  )), /* @__PURE__ */ g.createElement("div", { className: "changes" }, e.changes?.map((n) => /* @__PURE__ */ g.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: rt(n) },
      className: "change"
    }
  ))));
}, Ci = (h) => {
  const {
    show: e,
    onShow: t,
    getMessages: s,
    title: n,
    icon: r
  } = h, [o, a] = z([]), [u, f] = z();
  I(() => {
    e && (async () => {
      try {
        let v = await s();
        a(v);
      } catch (v) {
        f(v);
      }
    })();
  }, [e]);
  let m;
  return u || !Array.isArray(o) || o.length > 0 && typeof o[0] != "object" ? m = /* @__PURE__ */ g.createElement(Ze, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : o.length === 0 ? m = /* @__PURE__ */ g.createElement(Ze, { variant: "secondary" }, "There are currently no message") : m = /* @__PURE__ */ g.createElement("div", { className: "announcement-messages" }, o.map((v) => /* @__PURE__ */ g.createElement(js, { entry: v }))), /* @__PURE__ */ g.createElement(
    G,
    {
      show: e,
      onHide: () => t(!1),
      size: "lg"
    },
    /* @__PURE__ */ g.createElement(G.Header, null, /* @__PURE__ */ g.createElement(G.Title, null, /* @__PURE__ */ g.createElement("span", null, r), /* @__PURE__ */ g.createElement("span", null, n))),
    /* @__PURE__ */ g.createElement(G.Body, null, m)
  );
}, Ti = (h) => {
  const {
    show: e,
    onHide: t,
    onConfirm: s,
    title: n,
    message: r
  } = h;
  return /* @__PURE__ */ g.createElement(
    G,
    {
      show: e,
      size: "sm",
      onHide: t
    },
    /* @__PURE__ */ g.createElement(G.Header, { closeButton: !0 }, /* @__PURE__ */ g.createElement(G.Title, null, /* @__PURE__ */ g.createElement(Xt, null), /* @__PURE__ */ g.createElement("span", { className: "" }, n))),
    /* @__PURE__ */ g.createElement(G.Body, null, /* @__PURE__ */ g.createElement("p", { className: "ellipsis" }, r)),
    /* @__PURE__ */ g.createElement(G.Footer, null, /* @__PURE__ */ g.createElement(
      Z,
      {
        variant: "secondary",
        onClick: t
      },
      "Cancel"
    ), /* @__PURE__ */ g.createElement(
      Z,
      {
        variant: "danger",
        onClick: () => {
          s(), t();
        }
      },
      "Proceed"
    ))
  );
}, at = (h) => {
  const {
    buttons: e,
    position: t = "top"
  } = h;
  return /* @__PURE__ */ React.createElement("div", { className: B(
    "pinnable-container",
    `pin-${t}`
  ) }, h.children, /* @__PURE__ */ React.createElement("div", { className: "pinnable-buttons" }, e));
}, Us = dt((h, e) => {
  let {
    expanded: t,
    setExpanded: s,
    canPin: n = !0,
    canClose: r = !0,
    onClose: o = Me,
    pinned: a,
    setPinned: u,
    className: f,
    pinReceiver: m
  } = h;
  z(!1);
  const v = [];
  return n && v.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (d) => {
          d.stopPropagation(), u(!a);
        }
      },
      a ? /* @__PURE__ */ g.createElement(Kt, null) : /* @__PURE__ */ g.createElement(Jt, null)
    )
  ), r && v.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (d) => {
          d.stopPropagation(), o();
        }
      },
      /* @__PURE__ */ g.createElement(Yt, null)
    )
  ), /* @__PURE__ */ g.createElement(
    as,
    {
      ...h,
      className: B(f, {
        pinnable: n,
        closable: r
      }),
      expanded: t || a,
      onExpand: s,
      ref: e
    },
    m ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(at, { buttons: v }, m), h.children) : /* @__PURE__ */ g.createElement(at, { buttons: v }, h.children)
  );
}), Li = (h) => {
  const {
    progress: e,
    label: t
  } = h;
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
    /* @__PURE__ */ g.createElement("div", { className: "progress-label" }, t),
    /* @__PURE__ */ g.createElement(Ft, { now: e })
  );
};
function lt(h) {
  const {
    onEvent: e,
    enabled: t = !0,
    style: s = {},
    ...n
  } = h, r = V();
  function o() {
    const u = () => {
      e(), r.current = setTimeout(u, 100);
    };
    t && u();
  }
  function a() {
    clearTimeout(r.current);
  }
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      onMouseEnter: o,
      onMouseLeave: a,
      ...n,
      style: {
        ...s,
        display: t ? "block" : "none"
      }
    }
  );
}
let Xs = 0;
const Si = (h) => {
  const [e, t] = z(null), s = V(window), [n, r] = z(() => Xs++), {
    name: o = "",
    options: a = "",
    notifications: u
  } = h;
  function f() {
    h.onClose();
  }
  return I(() => {
    const m = document.createElement("div");
    t(m);
  }, []), I(() => {
    function m() {
      if (process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Opening the admin control panel"), h.popup ? s.current = window.open(
        h.url ?? "",
        o,
        "popup"
        // `popup,width=${width},height=${height},top=${top},left=${left}`
      ) : s.current = window.open(
        h.url ?? "",
        "_blank",
        a
      ), !s.current) {
        u.error(
          `Unable to open ${h.name}. Is your browser preventing popups ?`,
          "Failed opening new window",
          1e4
        ), h.onBlocked();
        return;
      }
      s.current.document.close(), s.current.addEventListener("beforeunload", f), s.current.document.body.appendChild(e), Array.from(document.head.querySelectorAll('style,link[rel="stylesheet"]')).forEach((i) => {
        s.current.document.head.appendChild(
          i.cloneNode(!0)
        );
      });
      const v = () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), d.removeEventListener("beforeunload", f), d.close();
      };
      window.addEventListener("beforeunload", v);
      const d = s.current;
      return () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), window.removeEventListener("beforeunload", v), d.close();
      };
    }
    if (e)
      return m();
  }, [e]), e && It(h.children, e);
}, Ai = ({
  min: h,
  max: e,
  ticks: t,
  value: s,
  onChange: n,
  formatter: r = (m) => m,
  className: o = "",
  tooltip_position: a,
  orientation: u = "vertical",
  disabled: f = !1
}) => {
  const m = V(), v = Array.isArray(s), d = ts();
  function i(p, k) {
    return () => {
      const {
        min: b,
        max: _
      } = m.current.rangeLimits;
      let y = [
        _ - m.current.value.max,
        _ - m.current.value.min
      ];
      return y[k] += p, y[k] = Math.min(_, y[k]), y[k] = Math.max(b, y[k]), n(v ? y : y[k]), !1;
    };
  }
  function l(p) {
    const k = -Math.sign(p.deltaY), {
      min: b,
      max: _
    } = m.current.rangeLimits;
    let y = [
      _ - m.current.value.max,
      _ - m.current.value.min
    ];
    y[1] += k, y[1] = Math.max(b, y[1]), y[1] = Math.min(_, y[1]), n(v ? [
      y[0],
      y[1]
    ] : y[1]), p.stopPropagation();
  }
  if (m.current)
    if (v) {
      let p = m.current.index;
      m.current.thumb[0].current.setAttribute("data-value", r(s[p.max])), m.current.thumb[1].current.setAttribute("data-value", r(s[p.min]));
    } else
      m.current.thumb[0].current.setAttribute("data-value", r(s));
  else
    d();
  const c = /* @__PURE__ */ g.createElement(
    es,
    {
      ref: m,
      onInput: (p) => n(v ? [e - p[1], e - p[0]] : e - p[0]),
      value: v ? [e - s[1], e - s[0]] : [e - s, e],
      step: 1,
      max: e,
      min: h,
      disabled: f,
      thumbsDisabled: [!1, !v],
      orientation: u
    }
  );
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: B(
        o,
        "slider",
        `slider-${u}`,
        {
          dual: v,
          disabled: f
        }
      ),
      onWheel: l
    },
    /* @__PURE__ */ g.createElement(Je, { className: "max-btns" }, /* @__PURE__ */ g.createElement(
      Z,
      {
        variant: "secondary",
        className: "plus",
        disabled: f,
        onPointerDown: (p) => p.stopPropagation(),
        onClick: i(1, 1)
      },
      /* @__PURE__ */ g.createElement(Xe, null)
    ), /* @__PURE__ */ g.createElement(
      Z,
      {
        variant: "secondary",
        className: "minus",
        disabled: f,
        onPointerDown: (p) => p.stopPropagation(),
        onClick: i(-1, 1)
      },
      /* @__PURE__ */ g.createElement(Ke, null)
    )),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (p) => p.stopPropagation()
      },
      c
    ),
    v ? /* @__PURE__ */ g.createElement(Je, { className: "min-btns" }, /* @__PURE__ */ g.createElement(
      Z,
      {
        variant: "secondary",
        className: "plus",
        disabled: f,
        onPointerDown: (p) => p.stopPropagation(),
        onClick: i(1, 0)
      },
      /* @__PURE__ */ g.createElement(Xe, null)
    ), /* @__PURE__ */ g.createElement(
      Z,
      {
        variant: "secondary",
        className: "minus",
        disabled: f,
        onPointerDown: (p) => p.stopPropagation(),
        onClick: i(-1, 0)
      },
      /* @__PURE__ */ g.createElement(Ke, null)
    )) : null
  );
}, Pi = (h) => {
  const {
    id: e
  } = h, { hideAll: t } = is({
    id: "file-ctx-menu"
  }), [s, n] = z(!1);
  function r(a) {
    a.key === "Escape" && t();
  }
  I(() => {
    if (s)
      return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [s]);
  function o(a) {
    const {
      elem: u,
      name: f,
      value: m,
      index: v
    } = a;
  }
  return /* @__PURE__ */ g.createElement(
    ns,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: n
    },
    /* @__PURE__ */ g.createElement(
      Ye,
      {
        hidden: ({ props: a }) => !a.field.canCopy,
        onMouseDown: (a) => {
          a.stopPropagation(), a.stopImmediatePropagation();
        },
        onClick: o,
        id: "copy"
      },
      "Copy"
    ),
    /* @__PURE__ */ g.createElement(Ye, { id: "cut" }, "Cut")
  );
}, Ri = (h) => {
  const {
    target: e,
    onChange: t = () => {
    },
    onAccept: s = () => {
    },
    onAbort: n = () => {
    },
    disabled: r,
    name: o,
    label: a,
    type: u = "text",
    required: f = !1
  } = h;
  function m(i) {
    e[o] = i.target.value, s(e[o], { target: e, name: o });
  }
  function v(i) {
    e[o] = i.target.value, t(e[o], { target: e, name: o });
  }
  function d(i) {
    e[o] = i.target.value, n(e[o], { target: e, name: o });
  }
  return /* @__PURE__ */ React.createElement(Qe.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(Qe.Label, { className: "text-secondary small", htmlFor: o }, a), /* @__PURE__ */ React.createElement(
    qt,
    {
      id: o,
      type: u,
      disabled: r,
      value: e[o] ?? "",
      name: o,
      onChange: v,
      required: f,
      onKeyDown: (i) => {
        i.key === "Enter" ? m(i) : i.key === "Escape" && d(i);
      }
    }
  ));
}, Lt = $t(null), Ni = (h) => {
  const {
    collapsible: e = !0
  } = h, [t, s] = z();
  return /* @__PURE__ */ React.createElement(Lt.Provider, { value: {
    collapsible: e,
    setExpanded: (n) => s(n),
    expanded: t
  } }, h.children);
}, Mi = (h) => {
  const e = Dt(Lt), {
    canPin: t = !1,
    canClose: s = !1,
    eventKey: n,
    onExpand: r = Me,
    onPin: o = Me
  } = h, [a, u] = usePersistedState(n + ".pinned"), {
    collapsible: f,
    expanded: m,
    setExpanded: v
  } = e;
  return /* @__PURE__ */ React.createElement(
    Us,
    {
      ...h,
      pinned: a,
      setPinned: u,
      expanded: m === n || !f,
      setExpanded: (d) => {
        r(d), v(f && d ? n : null);
      },
      onPin: o,
      canPin: t,
      canClose: s
    },
    h.children
  );
};
function Ks(h) {
  return Array.isArray(h) ? h : Object.entries(h).map(([e, t]) => ({ value: isNaN(+e) ? e : +e, label: String(t) }));
}
function zi(h) {
  const {
    value: e,
    options: t,
    onChange: s,
    disabled: n,
    placeholder: r = "Select…",
    className: o
  } = h, a = ft(() => Ks(t), [t]), u = a.find((f) => f.value === e);
  return /* @__PURE__ */ g.createElement(je, null, /* @__PURE__ */ g.createElement(je.Toggle, { disabled: n }, u ? u.label : r), /* @__PURE__ */ g.createElement(Gt, null, a.map((f) => /* @__PURE__ */ g.createElement(
    Wt,
    {
      key: String(f.value),
      onClick: () => s(f.value),
      "aria-disabled": f.disabled
    },
    f.label
  ))));
}
var Ae = { exports: {} };
/*! =======================================================
                      VERSION  11.0.2              
========================================================= */
var ht;
function Js() {
  return ht || (ht = 1, function(h) {
    var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
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
    var t = (typeof window > "u" ? "undefined" : e(window)) === "object";
    (function(s) {
      if (e(h) === "object" && h.exports) {
        var n;
        try {
          n = require("jquery");
        } catch {
          n = null;
        }
        h.exports = s(n);
      } else window && (window.Slider = s(window.jQuery));
    })(function(s) {
      var n = "slider", r = "bootstrapSlider";
      t && !window.console && (window.console = {}), t && !window.console.log && (window.console.log = function() {
      }), t && !window.console.warn && (window.console.warn = function() {
      });
      var o;
      return function(a) {
        var u = Array.prototype.slice;
        function f() {
        }
        function m(v) {
          if (!v)
            return;
          function d(c) {
            c.prototype.option || (c.prototype.option = function(p) {
              v.isPlainObject(p) && (this.options = v.extend(!0, this.options, p));
            });
          }
          var i = typeof console > "u" ? f : function(c) {
            console.error(c);
          };
          function l(c, p) {
            v.fn[c] = function(k) {
              if (typeof k == "string") {
                for (var b = u.call(arguments, 1), _ = 0, y = this.length; _ < y; _++) {
                  var S = this[_], C = v.data(S, c);
                  if (!C) {
                    i("cannot call methods on " + c + " prior to initialization; attempted to call '" + k + "'");
                    continue;
                  }
                  if (!v.isFunction(C[k]) || k.charAt(0) === "_") {
                    i("no such method '" + k + "' for " + c + " instance");
                    continue;
                  }
                  var E = C[k].apply(C, b);
                  if (E !== void 0 && E !== C)
                    return E;
                }
                return this;
              } else {
                var w = this.map(function() {
                  var x = v.data(this, c);
                  return x ? (x.option(k), x._init()) : (x = new p(this, k), v.data(this, c, x)), v(this);
                });
                return w.length === 1 ? w[0] : w;
              }
            };
          }
          return v.bridget = function(c, p) {
            d(p), l(c, p);
          }, v.bridget;
        }
        m(a);
      }(s), function(a) {
        var u = void 0, f = {
          formatInvalidInputErrorMsg: function(i) {
            return "Invalid input value '" + i + "' passed in";
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, m = {
          linear: {
            getValue: function(i, l) {
              return i < l.min ? l.min : i > l.max ? l.max : i;
            },
            toValue: function(i) {
              var l = i / 100 * (this.options.max - this.options.min), c = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var p, k, b, _ = 0, y = 1; y < this.options.ticks_positions.length; y++)
                  if (i <= this.options.ticks_positions[y]) {
                    p = this.options.ticks[y - 1], b = this.options.ticks_positions[y - 1], k = this.options.ticks[y], _ = this.options.ticks_positions[y];
                    break;
                  }
                var S = (i - b) / (_ - b);
                l = p + S * (k - p), c = !1;
              }
              var C = c ? this.options.min : 0, E = C + Math.round(l / this.options.step) * this.options.step;
              return m.linear.getValue(E, this.options);
            },
            toPercentage: function(i) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var l, c, p, k = 0, b = 0; b < this.options.ticks.length; b++)
                  if (i <= this.options.ticks[b]) {
                    l = b > 0 ? this.options.ticks[b - 1] : 0, p = b > 0 ? this.options.ticks_positions[b - 1] : 0, c = this.options.ticks[b], k = this.options.ticks_positions[b];
                    break;
                  }
                if (b > 0) {
                  var _ = (i - l) / (c - l);
                  return p + _ * (k - p);
                }
              }
              return 100 * (i - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(i) {
              var l = 1 - this.options.min, c = Math.log(this.options.min + l), p = Math.log(this.options.max + l), k = Math.exp(c + (p - c) * i / 100) - l;
              return Math.round(k) === p ? p : (k = this.options.min + Math.round((k - this.options.min) / this.options.step) * this.options.step, m.linear.getValue(k, this.options));
            },
            toPercentage: function(i) {
              if (this.options.max === this.options.min)
                return 0;
              var l = 1 - this.options.min, c = Math.log(this.options.max + l), p = Math.log(this.options.min + l), k = Math.log(i + l);
              return 100 * (k - p) / (c - p);
            }
          }
        };
        o = function(i, l) {
          return v.call(this, i, l), this;
        };
        function v(d, i) {
          this._state = {
            value: null,
            enabled: null,
            offset: null,
            size: null,
            percentage: null,
            inDrag: !1,
            over: !1,
            tickIndex: null
          }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, typeof d == "string" ? this.element = document.querySelector(d) : d instanceof HTMLElement && (this.element = d), i = i || {};
          for (var l = Object.keys(this.defaultOptions), c = i.hasOwnProperty("min"), p = i.hasOwnProperty("max"), k = 0; k < l.length; k++) {
            var b = l[k], _ = i[b];
            _ = typeof _ < "u" ? _ : S(this.element, b), _ = _ !== null ? _ : this.defaultOptions[b], this.options || (this.options = {}), this.options[b] = _;
          }
          if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), this.options.rtl === "auto") {
            var y = window.getComputedStyle(this.element);
            y != null ? this.options.rtl = y.direction === "rtl" : this.options.rtl = this.element.style.direction === "rtl";
          }
          this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom") ? this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right" : this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right") && (this.options.tooltip_position = "top");
          function S(N, he) {
            var ce = "data-slider-" + he.replace(/_/g, "-"), J = N.getAttribute(ce);
            try {
              return JSON.parse(J);
            } catch {
              return J;
            }
          }
          var C = this.element.style.width, E = !1, w = this.element.parentNode, x, A, O, P, R;
          if (this.sliderElem)
            E = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var H = document.createElement("div");
            H.className = "slider-track", A = document.createElement("div"), A.className = "slider-track-low", x = document.createElement("div"), x.className = "slider-selection", O = document.createElement("div"), O.className = "slider-track-high", P = document.createElement("div"), P.className = "slider-handle min-slider-handle", P.setAttribute("role", "slider"), P.setAttribute("aria-valuemin", this.options.min), P.setAttribute("aria-valuemax", this.options.max), R = document.createElement("div"), R.className = "slider-handle max-slider-handle", R.setAttribute("role", "slider"), R.setAttribute("aria-valuemin", this.options.min), R.setAttribute("aria-valuemax", this.options.max), H.appendChild(A), H.appendChild(x), H.appendChild(O), this.rangeHighlightElements = [];
            var U = this.options.rangeHighlights;
            if (Array.isArray(U) && U.length > 0)
              for (var ie = 0; ie < U.length; ie++) {
                var W = document.createElement("div"), ke = U[ie].class || "";
                W.className = "slider-rangeHighlight slider-selection " + ke, this.rangeHighlightElements.push(W), H.appendChild(W);
              }
            var be = Array.isArray(this.options.labelledby);
            if (be && this.options.labelledby[0] && P.setAttribute("aria-labelledby", this.options.labelledby[0]), be && this.options.labelledby[1] && R.setAttribute("aria-labelledby", this.options.labelledby[1]), !be && this.options.labelledby && (P.setAttribute("aria-labelledby", this.options.labelledby), R.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", k = 0; k < this.options.ticks.length; k++) {
                var K = document.createElement("div");
                if (K.className = "slider-tick", this.options.ticks_tooltip) {
                  var We = this._addTickListener(), St = We.addMouseEnter(this, K, k), At = We.addMouseLeave(this, K);
                  this.ticksCallbackMap[k] = {
                    mouseEnter: St,
                    mouseLeave: At
                  };
                }
                this.ticks.push(K), this.ticksContainer.appendChild(K);
              }
              x.className += " tick-slider-selection";
            }
            if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
              for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", k = 0; k < this.options.ticks_labels.length; k++) {
                var ne = document.createElement("div"), Pt = this.options.ticks_positions.length === 0, Rt = this.options.reversed && Pt ? this.options.ticks_labels.length - (k + 1) : k;
                ne.className = "slider-tick-label", ne.innerHTML = this.options.ticks_labels[Rt], this.tickLabels.push(ne), this.tickLabelContainer.appendChild(ne);
              }
            var _e = function(he) {
              var ce = document.createElement("div");
              ce.className = "arrow";
              var J = document.createElement("div");
              J.className = "tooltip-inner", he.appendChild(ce), he.appendChild(J);
            }, oe = document.createElement("div");
            oe.className = "tooltip tooltip-main", oe.setAttribute("role", "presentation"), _e(oe);
            var re = document.createElement("div");
            re.className = "tooltip tooltip-min", re.setAttribute("role", "presentation"), _e(re);
            var ae = document.createElement("div");
            ae.className = "tooltip tooltip-max", ae.setAttribute("role", "presentation"), _e(ae), this.sliderElem.appendChild(H), this.sliderElem.appendChild(oe), this.sliderElem.appendChild(re), this.sliderElem.appendChild(ae), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(P), this.sliderElem.appendChild(R), w.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), m[this.options.scale] && (this.options.scale = m[this.options.scale]), E === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(N) {
            this._removeProperty(this.trackLow, N), this._removeProperty(this.trackSelection, N), this._removeProperty(this.trackHigh, N);
          }, this), [this.handle1, this.handle2].forEach(function(N) {
            this._removeProperty(N, "left"), this._removeProperty(N, "right"), this._removeProperty(N, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(N) {
            this._removeProperty(N, "bs-tooltip-left"), this._removeProperty(N, "bs-tooltip-right"), this._removeProperty(N, "bs-tooltip-top"), this._removeClass(N, "bs-tooltip-right"), this._removeClass(N, "bs-tooltip-left"), this._removeClass(N, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = C, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (p || (this.options.max = Math.max.apply(Math, this.options.ticks)), c || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = A || this.trackLow, this.trackSelection = x || this.trackSelection, this.trackHigh = O || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = P || this.handle1, this.handle2 = R || this.handle2, E === !0)
            for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), k = 0; k < this.ticks.length; k++)
              this._removeClass(this.ticks[k], "round triangle hide");
          var Nt = ["round", "triangle", "custom"], Mt = Nt.indexOf(this.options.handle) !== -1;
          if (Mt)
            for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), k = 0; k < this.ticks.length; k++)
              this._addClass(this.ticks[k], this.options.handle);
          if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), this.options.tooltip === "hide")
            this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");
          else if (this.options.tooltip === "always")
            this._showTooltip(), this._alwaysShowTooltip = !0;
          else {
            if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
              var le = this._addTickListener(), ye = le.addMouseEnter(this, this.handle1), we = le.addMouseLeave(this, this.handle1);
              this.handleCallbackMap.handle1 = {
                mouseEnter: ye,
                mouseLeave: we
              }, ye = le.addMouseEnter(this, this.handle2), we = le.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
                mouseEnter: ye,
                mouseLeave: we
              };
            } else
              this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.showTooltip, !1), this.sliderElem.addEventListener("touchmove", this.showTooltip, !1), this.sliderElem.addEventListener("touchend", this.hideTooltip, !1));
            this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1), this.touchCapable && (this.handle1.addEventListener("touchstart", this.showTooltip, !1), this.handle1.addEventListener("touchmove", this.showTooltip, !1), this.handle1.addEventListener("touchend", this.hideTooltip, !1), this.handle2.addEventListener("touchstart", this.showTooltip, !1), this.handle2.addEventListener("touchmove", this.showTooltip, !1), this.handle2.addEventListener("touchend", this.hideTooltip, !1));
          }
          this.options.enabled ? this.enable() : this.disable();
        }
        o.prototype = {
          _init: function() {
          },
          // NOTE: Must exist to support bridget
          constructor: o,
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
            formatter: function(i) {
              return Array.isArray(i) ? i[0] + " : " + i[1] : i;
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
          setValue: function(i, l, c) {
            i || (i = 0);
            var p = this.getValue();
            this._state.value = this._validateInputValue(i);
            var k = this._applyPrecision.bind(this);
            this.options.range ? (this._state.value[0] = k(this._state.value[0]), this._state.value[1] = k(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = k(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this.options.selection === "after" ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
            var b = this.options.range ? this._state.value : this._state.value[0];
            this._setDataVal(b), l === !0 && this._trigger("slide", b);
            var _ = !1;
            return Array.isArray(b) ? _ = p[0] !== b[0] || p[1] !== b[1] : _ = p !== b, _ && c === !0 && this._trigger("change", {
              oldValue: p,
              newValue: b
            }), this;
          },
          destroy: function() {
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), u === n && this.$element.removeData(u), this.$element.removeData(r));
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
          on: function(i, l) {
            return this._bindNonQueryEventHandler(i, l), this;
          },
          off: function(i, l) {
            a ? (this.$element.off(i, l), this.$sliderElem.off(i, l)) : this._unbindNonQueryEventHandler(i, l);
          },
          getAttribute: function(i) {
            return i ? this.options[i] : this.options;
          },
          setAttribute: function(i, l) {
            return this.options[i] = l, this;
          },
          refresh: function(i) {
            var l = this.getValue();
            return this._removeSliderEventHandlers(), v.call(this, this.element, this.options), i && i.useCurrentValue === !0 && this.setValue(l), a && (u === n ? (a.data(this.element, n, this), a.data(this.element, r, this)) : a.data(this.element, r, this)), this;
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
          _removeTooltipListener: function(i, l) {
            this.handle1.removeEventListener(i, l, !1), this.handle2.removeEventListener(i, l, !1);
          },
          _removeSliderEventHandlers: function() {
            if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
              for (var i = this.ticksContainer.getElementsByClassName("slider-tick"), l = 0; l < i.length; l++)
                i[l].removeEventListener("mouseenter", this.ticksCallbackMap[l].mouseEnter, !1), i[l].removeEventListener("mouseleave", this.ticksCallbackMap[l].mouseLeave, !1);
              this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1));
            }
            this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1)), window.removeEventListener("resize", this.resize, !1);
          },
          _bindNonQueryEventHandler: function(i, l) {
            this.eventToCallbackMap[i] === void 0 && (this.eventToCallbackMap[i] = []), this.eventToCallbackMap[i].push(l);
          },
          _unbindNonQueryEventHandler: function(i, l) {
            var c = this.eventToCallbackMap[i];
            if (c !== void 0) {
              for (var p = 0; p < c.length; p++)
                if (c[p] === l) {
                  c.splice(p, 1);
                  break;
                }
            }
          },
          _cleanUpEventCallbacksMap: function() {
            for (var i = Object.keys(this.eventToCallbackMap), l = 0; l < i.length; l++) {
              var c = i[l];
              delete this.eventToCallbackMap[c];
            }
          },
          _showTooltip: function() {
            this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), this.tooltip.style.display = "none"), this._state.over = !0;
          },
          _hideTooltip: function() {
            this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), this._removeClass(this.tooltip_max, "show")), this._state.over = !1;
          },
          _setToolTipOnMouseOver: function(i) {
            var l = this, c = this.options.formatter(i ? i.value[0] : this._state.value[0]), p = i ? k(i, this.options.reversed) : k(this._state, this.options.reversed);
            this._setText(this.tooltipInner, c), this.tooltip.style[this.stylePos] = p[0] + "%";
            function k(b, _) {
              return _ ? [100 - b.percentage[0], l.options.range ? 100 - b.percentage[1] : b.percentage[1]] : [b.percentage[0], b.percentage[1]];
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
              addMouseEnter: function(l, c, p) {
                var k = function() {
                  var _ = l._copyState(), y = c === l.handle1 ? _.value[0] : _.value[1], S = void 0;
                  p !== void 0 ? (y = l.options.ticks[p], S = l.options.ticks_positions.length > 0 && l.options.ticks_positions[p] || l._toPercentage(l.options.ticks[p])) : S = l._toPercentage(y), _.value[0] = y, _.percentage[0] = S, l._setToolTipOnMouseOver(_), l._showTooltip();
                };
                return c.addEventListener("mouseenter", k, !1), k;
              },
              addMouseLeave: function(l, c) {
                var p = function() {
                  l._hideTooltip();
                };
                return c.addEventListener("mouseleave", p, !1), p;
              }
            };
          },
          _layout: function() {
            var i, l;
            if (this.options.reversed ? i = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : i = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = i[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), l = this.options.formatter(this._state.value[0]), isNaN(l) ? this.handle1.setAttribute("aria-valuetext", l) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = i[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), l = this.options.formatter(this._state.value[1]), isNaN(l) ? this.handle2.setAttribute("aria-valuetext", l) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
              for (var c = 0; c < this.options.rangeHighlights.length; c++) {
                var p = this._toPercentage(this.options.rangeHighlights[c].start), k = this._toPercentage(this.options.rangeHighlights[c].end);
                if (this.options.reversed) {
                  var b = 100 - k;
                  k = 100 - p, p = b;
                }
                var _ = this._createHighlightRange(p, k);
                _ ? this.options.orientation === "vertical" ? (this.rangeHighlightElements[c].style.top = _.start + "%", this.rangeHighlightElements[c].style.height = _.size + "%") : (this.options.rtl ? this.rangeHighlightElements[c].style.right = _.start + "%" : this.rangeHighlightElements[c].style.left = _.start + "%", this.rangeHighlightElements[c].style.width = _.size + "%") : this.rangeHighlightElements[c].style.display = "none";
              }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              var y = this.options.orientation === "vertical" ? "height" : "width", S;
              this.options.orientation === "vertical" ? S = "marginTop" : this.options.rtl ? S = "marginRight" : S = "marginLeft";
              var C = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var E = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[S] = -C / 2 + "px"), E = this.tickLabelContainer.offsetHeight;
                else
                  for (w = 0; w < this.tickLabelContainer.childNodes.length; w++)
                    this.tickLabelContainer.childNodes[w].offsetHeight > E && (E = this.tickLabelContainer.childNodes[w].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = E + "px");
              }
              for (var w = 0; w < this.options.ticks.length; w++) {
                var x = this.options.ticks_positions[w] || this._toPercentage(this.options.ticks[w]);
                this.options.reversed && (x = 100 - x), this.ticks[w].style[this.stylePos] = x + "%", this._removeClass(this.ticks[w], "in-selection"), this.options.range ? x >= i[0] && x <= i[1] && this._addClass(this.ticks[w], "in-selection") : this.options.selection === "after" && x >= i[0] ? this._addClass(this.ticks[w], "in-selection") : this.options.selection === "before" && x <= i[0] && this._addClass(this.ticks[w], "in-selection"), this.tickLabels[w] && (this.tickLabels[w].style[y] = C + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[w] !== void 0 ? (this.tickLabels[w].style.position = "absolute", this.tickLabels[w].style[this.stylePos] = x + "%", this.tickLabels[w].style[S] = -C / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[w].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[w].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[S] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[w], "label-in-selection label-is-selection"), this.options.range ? x >= i[0] && x <= i[1] && (this._addClass(this.tickLabels[w], "label-in-selection"), (x === i[0] || i[1]) && this._addClass(this.tickLabels[w], "label-is-selection")) : (this.options.selection === "after" && x >= i[0] ? this._addClass(this.tickLabels[w], "label-in-selection") : this.options.selection === "before" && x <= i[0] && this._addClass(this.tickLabels[w], "label-in-selection"), x === i[0] && this._addClass(this.tickLabels[w], "label-is-selection")));
              }
            }
            var A;
            if (this.options.range) {
              A = this.options.formatter(this._state.value), this._setText(this.tooltipInner, A), this.tooltip.style[this.stylePos] = (i[1] + i[0]) / 2 + "%";
              var O = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, O);
              var P = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, P), this.tooltip_min.style[this.stylePos] = i[0] + "%", this.tooltip_max.style[this.stylePos] = i[1] + "%";
            } else
              A = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, A), this.tooltip.style[this.stylePos] = i[0] + "%";
            if (this.options.orientation === "vertical")
              this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(i[0], i[1]) + "%", this.trackSelection.style.top = Math.min(i[0], i[1]) + "%", this.trackSelection.style.height = Math.abs(i[0] - i[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(i[0], i[1]) - Math.abs(i[0] - i[1]) + "%";
            else {
              this.stylePos === "right" ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(i[0], i[1]) + "%", this.stylePos === "right" ? this.trackSelection.style.right = Math.min(i[0], i[1]) + "%" : this.trackSelection.style.left = Math.min(i[0], i[1]) + "%", this.trackSelection.style.width = Math.abs(i[0] - i[1]) + "%", this.stylePos === "right" ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(i[0], i[1]) - Math.abs(i[0] - i[1]) + "%";
              var R = this.tooltip_min.getBoundingClientRect(), H = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? R.right > H.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : R.right > H.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
            }
          },
          _createHighlightRange: function(i, l) {
            return this._isHighlightRange(i, l) ? i > l ? { start: l, size: i - l } : { start: i, size: l - i } : null;
          },
          _isHighlightRange: function(i, l) {
            return 0 <= i && i <= 100 && 0 <= l && l <= 100;
          },
          _resize: function(i) {
            this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout();
          },
          _removeProperty: function(i, l) {
            i.style.removeProperty ? i.style.removeProperty(l) : i.style.removeAttribute(l);
          },
          _mousedown: function(i) {
            if (!this._state.enabled)
              return !1;
            i.preventDefault && i.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
            var l = this._getPercentage(i);
            if (this.options.range) {
              var c = Math.abs(this._state.percentage[0] - l), p = Math.abs(this._state.percentage[1] - l);
              this._state.dragged = c < p ? 0 : 1, this._adjustPercentageForRangeSliders(l);
            } else
              this._state.dragged = 0;
            this._state.percentage[this._state.dragged] = l, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
            var k = this._calculateValue();
            return this._trigger("slideStart", k), this.setValue(k, !1, !0), i.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
          },
          _touchstart: function(i) {
            this._mousedown(i);
          },
          _triggerFocusOnHandle: function(i) {
            i === 0 && this.handle1.focus(), i === 1 && this.handle2.focus();
          },
          _keydown: function(i, l) {
            if (!this._state.enabled)
              return !1;
            var c;
            switch (l.keyCode) {
              case 37:
              // left
              case 40:
                c = -1;
                break;
              case 39:
              // right
              case 38:
                c = 1;
                break;
            }
            if (c) {
              if (this.options.natural_arrow_keys) {
                var p = this.options.orientation === "horizontal", k = this.options.orientation === "vertical", b = this.options.rtl, _ = this.options.reversed;
                p ? b ? _ || (c = -c) : _ && (c = -c) : k && (_ || (c = -c));
              }
              var y;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var S = void 0;
                S = this.options.ticks.indexOf(this._state.value[i]), S === -1 && (S = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), S += c, S = Math.max(0, Math.min(this.options.ticks.length - 1, S)), y = this.options.ticks[S];
              } else
                y = this._state.value[i] + c * this.options.step;
              var C = this._toPercentage(y);
              if (this._state.keyCtrl = i, this.options.range) {
                this._adjustPercentageForRangeSliders(C);
                var E = this._state.keyCtrl ? this._state.value[0] : y, w = this._state.keyCtrl ? y : this._state.value[1];
                y = [Math.max(this.options.min, Math.min(this.options.max, E)), Math.max(this.options.min, Math.min(this.options.max, w))];
              } else
                y = Math.max(this.options.min, Math.min(this.options.max, y));
              return this._trigger("slideStart", y), this.setValue(y, !0, !0), this._trigger("slideStop", y), this._pauseEvent(l), delete this._state.keyCtrl, !1;
            }
          },
          _pauseEvent: function(i) {
            i.stopPropagation && i.stopPropagation(), i.preventDefault && i.preventDefault(), i.cancelBubble = !0, i.returnValue = !1;
          },
          _mousemove: function(i) {
            if (!this._state.enabled)
              return !1;
            var l = this._getPercentage(i);
            this._adjustPercentageForRangeSliders(l), this._state.percentage[this._state.dragged] = l;
            var c = this._calculateValue(!0);
            return this.setValue(c, !0, !0), !1;
          },
          _touchmove: function(i) {
            i.changedTouches !== void 0 && i.preventDefault && i.preventDefault();
          },
          _adjustPercentageForRangeSliders: function(i) {
            if (this.options.range) {
              var l = this._getNumDigitsAfterDecimalPlace(i);
              l = l ? l - 1 : 0;
              var c = this._applyToFixedAndParseFloat(i, l);
              this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], l) < c ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], l) > c ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < i ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > i && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
            }
          },
          _mouseup: function(i) {
            if (!this._state.enabled)
              return !1;
            var l = this._getPercentage(i);
            this._adjustPercentageForRangeSliders(l), this._state.percentage[this._state.dragged] = l, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
            var c = this._calculateValue(!0);
            return this.setValue(c, !1, !0), this._trigger("slideStop", c), this._state.dragged = null, !1;
          },
          _setValues: function(i, l) {
            var c = i === 0 ? 0 : 100;
            this._state.percentage[i] !== c && (l.data[i] = this._toValue(this._state.percentage[i]), l.data[i] = this._applyPrecision(l.data[i]));
          },
          _calculateValue: function(i) {
            var l = {};
            return this.options.range ? (l.data = [this.options.min, this.options.max], this._setValues(0, l), this._setValues(1, l), i && (l.data[0] = this._snapToClosestTick(l.data[0]), l.data[1] = this._snapToClosestTick(l.data[1]))) : (l.data = this._toValue(this._state.percentage[0]), l.data = parseFloat(l.data), l.data = this._applyPrecision(l.data), i && (l.data = this._snapToClosestTick(l.data))), l.data;
          },
          _snapToClosestTick: function(i) {
            for (var l = [i, 1 / 0], c = 0; c < this.options.ticks.length; c++) {
              var p = Math.abs(this.options.ticks[c] - i);
              p <= l[1] && (l = [this.options.ticks[c], p]);
            }
            return l[1] <= this.options.ticks_snap_bounds ? l[0] : i;
          },
          _applyPrecision: function(i) {
            var l = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
            return this._applyToFixedAndParseFloat(i, l);
          },
          _getNumDigitsAfterDecimalPlace: function(i) {
            var l = ("" + i).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return l ? Math.max(0, (l[1] ? l[1].length : 0) - (l[2] ? +l[2] : 0)) : 0;
          },
          _applyToFixedAndParseFloat: function(i, l) {
            var c = i.toFixed(l);
            return parseFloat(c);
          },
          /*
          	Credits to Mike Samuel for the following method!
          	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
          */
          _getPercentage: function(i) {
            this.touchCapable && (i.type === "touchstart" || i.type === "touchmove" || i.type === "touchend") && (i = i.changedTouches[0]);
            var l = i[this.mousePos], c = this._state.offset[this.stylePos], p = l - c;
            this.stylePos === "right" && (p = -p);
            var k = p / this._state.size * 100;
            return k = Math.round(k / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (k = 100 - k), Math.max(0, Math.min(100, k));
          },
          _validateInputValue: function(i) {
            if (isNaN(+i)) {
              if (Array.isArray(i))
                return this._validateArray(i), i;
              throw new Error(f.formatInvalidInputErrorMsg(i));
            } else return +i;
          },
          _validateArray: function(i) {
            for (var l = 0; l < i.length; l++) {
              var c = i[l];
              if (typeof c != "number")
                throw new Error(f.formatInvalidInputErrorMsg(c));
            }
          },
          _setDataVal: function(i) {
            this.element.setAttribute("data-value", i), this.element.setAttribute("value", i), this.element.value = i;
          },
          _trigger: function(i, l) {
            l = l || l === 0 ? l : void 0;
            var c = this.eventToCallbackMap[i];
            if (c && c.length)
              for (var p = 0; p < c.length; p++) {
                var k = c[p];
                k(l);
              }
            a && this._triggerJQueryEvent(i, l);
          },
          _triggerJQueryEvent: function(i, l) {
            var c = {
              type: i,
              value: l
            };
            this.$element.trigger(c), this.$sliderElem.trigger(c);
          },
          _unbindJQueryEventHandlers: function() {
            this.$element.off(), this.$sliderElem.off();
          },
          _setText: function(i, l) {
            typeof i.textContent < "u" ? i.textContent = l : typeof i.innerText < "u" && (i.innerText = l);
          },
          _removeClass: function(i, l) {
            for (var c = l.split(" "), p = i.className, k = 0; k < c.length; k++) {
              var b = c[k], _ = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)");
              p = p.replace(_, " ");
            }
            i.className = p.trim();
          },
          _addClass: function(i, l) {
            for (var c = l.split(" "), p = i.className, k = 0; k < c.length; k++) {
              var b = c[k], _ = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)"), y = _.test(p);
              y || (p += " " + b);
            }
            i.className = p.trim();
          },
          _offsetLeft: function(i) {
            return i.getBoundingClientRect().left;
          },
          _offsetRight: function(i) {
            return i.getBoundingClientRect().right;
          },
          _offsetTop: function(i) {
            for (var l = i.offsetTop; (i = i.offsetParent) && !isNaN(i.offsetTop); )
              l += i.offsetTop, i.tagName !== "BODY" && (l -= i.scrollTop);
            return l;
          },
          _offset: function(i) {
            return {
              left: this._offsetLeft(i),
              right: this._offsetRight(i),
              top: this._offsetTop(i)
            };
          },
          _css: function(i, l, c) {
            if (a)
              a.style(i, l, c);
            else {
              var p = l.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(k, b) {
                return b.toUpperCase();
              });
              i.style[p] = c;
            }
          },
          _toValue: function(i) {
            return this.options.scale.toValue.apply(this, [i]);
          },
          _toPercentage: function(i) {
            return this.options.scale.toPercentage.apply(this, [i]);
          },
          _setTooltipPosition: function() {
            var i = [this.tooltip, this.tooltip_min, this.tooltip_max];
            if (this.options.orientation === "vertical") {
              var l;
              this.options.tooltip_position ? l = this.options.tooltip_position : this.options.rtl ? l = "left" : l = "right";
              var c = l === "left" ? "right" : "left";
              i.forEach((function(p) {
                this._addClass(p, "bs-tooltip-" + l), p.style[c] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? i.forEach((function(p) {
              this._addClass(p, "bs-tooltip-bottom"), p.style.top = "22px";
            }).bind(this)) : i.forEach((function(p) {
              this._addClass(p, "bs-tooltip-top"), p.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(i) {
            for (var l = Math.abs(i - this.options.ticks[0]), c = 0, p = 0; p < this.options.ticks.length; ++p) {
              var k = Math.abs(i - this.options.ticks[p]);
              k < l && (l = k, c = p);
            }
            return c;
          },
          /**
           * Attempts to find the index in `ticks[]` the slider values are set at.
           * The indexes can be -1 to indicate the slider value is not set at a value in `ticks[]`.
           */
          _setTickIndex: function() {
            this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])]);
          }
        }, a && a.fn && (a.fn.slider ? (t && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), u = r) : (a.bridget(n, o), u = n), a.bridget(r, o), a(function() {
          a("input[data-provide=slider]")[u]();
        }));
      }(s), o;
    });
  }(Ae)), Ae.exports;
}
var Ys = Js();
const ei = /* @__PURE__ */ Ie(Ys), ti = (h, e) => {
  const t = {
    ...h,
    tooltip: h.tooltip || "show"
  };
  let {
    change: s,
    onChange: n,
    value: r
  } = h;
  const o = V(), [a, u] = z();
  return s = s ?? n, I(() => {
    if (o.current) {
      const f = new ei(o.current, t);
      return u(f), () => f.destroy();
    }
  }, [o.current]), I(() => {
    e && a && (e.current = {
      mySlider: a
    });
  }, [e, a]), I(() => {
    if (a && s) {
      a.on("change", s);
      for (let f in h)
        a.setAttribute(f, h[f]);
      return () => {
        a.off("change", s);
      };
    }
  }, [h, a]), I(() => {
    h.enabled ? a?.enable() : a?.disable();
  }, [h.enabled]), I(() => {
    a && r !== void 0 && a.setValue(r);
  }, [a, r]), /* @__PURE__ */ g.createElement("div", { ref: o });
}, Ii = g.forwardRef(ti);
var Pe = { exports: {} }, Re, ct;
function si() {
  if (ct) return Re;
  ct = 1;
  var h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Re = h, Re;
}
var Ne, ut;
function ii() {
  if (ut) return Ne;
  ut = 1;
  var h = /* @__PURE__ */ si();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Ne = function() {
    function s(o, a, u, f, m, v) {
      if (v !== h) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    s.isRequired = s;
    function n() {
      return s;
    }
    var r = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: n,
      element: s,
      elementType: s,
      instanceOf: n,
      node: s,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return r.PropTypes = r, r;
  }, Ne;
}
var pt;
function ni() {
  return pt || (pt = 1, Pe.exports = /* @__PURE__ */ ii()()), Pe.exports;
}
var oi = /* @__PURE__ */ ni();
const q = /* @__PURE__ */ Ie(oi);
function ri({
  initialPx: h,
  // preferred: initial width of left pane in pixels
  initialPercent: e = 50,
  // fallback if initialPx not provided
  minA: t = 120,
  minB: s = 120,
  maxA: n,
  // optional px limit for left pane; otherwise auto from container - minB - gutter
  gutter: r = 10,
  style: o,
  children: a,
  onChange: u
  // called with { px, percent }
}) {
  const f = V(null), m = V(!1), [v, d] = z(0), [i, l] = g.Children.toArray(a), c = (C, E, w) => Math.max(E, Math.min(w, C)), p = X(() => {
    const C = f.current;
    if (!C) return { total: 0, min: 0, max: 0 };
    const E = C.clientWidth, w = Math.max(0, E - r - s), x = typeof n == "number" ? Math.min(n, w) : w, A = Math.min(t, x);
    return { total: E, min: A, max: x };
  }, [r, t, s, n]);
  Bt(() => {
    if (!f.current) return;
    const { total: E, min: w, max: x } = p();
    let A;
    typeof h == "number" && Number.isFinite(h) ? A = h : A = Math.round(c(e, 0, 100) / 100 * (E - r)), d(c(A, w, x));
  }, [p, h, e, r]), I(() => {
    const C = f.current;
    if (!C) return;
    const E = () => {
      const { total: x, min: A, max: O } = p();
      if (d((P) => c(P, A, O)), u) {
        const P = c(v, A, O), R = x > 0 ? P / (x - r) * 100 : 0;
        u({ px: P, percent: R });
      }
    };
    let w;
    return "ResizeObserver" in window ? (w = new ResizeObserver(E), w.observe(C)) : window.addEventListener("resize", E), () => {
      w ? w.disconnect() : window.removeEventListener("resize", E);
    };
  }, [p, r, u, v]);
  const k = X((C) => {
    const E = f.current;
    if (!E) return;
    m.current = !0, C.currentTarget.setPointerCapture?.(C.pointerId);
    const w = (A) => {
      if (!m.current) return;
      const O = E.getBoundingClientRect(), P = A.clientX - O.left, { total: R, min: H, max: U } = p(), W = c(P, H, U);
      if (d(W), u) {
        const ke = R > 0 ? W / (R - r) * 100 : 0;
        u({ px: W, percent: Math.round(ke * 100) / 100 });
      }
    }, x = () => {
      m.current = !1;
      try {
        C.currentTarget.releasePointerCapture?.(C.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", x);
    };
    window.addEventListener("pointermove", w), window.addEventListener("pointerup", x), window.addEventListener("pointercancel", x);
  }, [p, r, u]);
  X(() => {
    const { total: C, min: E, max: w } = p();
    let x;
    typeof h == "number" && Number.isFinite(h) ? x = h : x = Math.round(c(e, 0, 100) / 100 * (C - r)), d(c(x, E, w));
  }, [p, h, e, r]);
  const b = ft(
    () => ({
      display: "grid",
      gridTemplateColumns: `${v}px ${r}px 1fr`,
      gridTemplateRows: "1fr",
      minWidth: 0
      // prevent overflow due to intrinsic min-content sizes
    }),
    [v, r]
  ), { min: _, max: y, total: S } = p();
  return /* @__PURE__ */ g.createElement("div", { ref: f, className: "splitpane", style: { ...b, ...o || {} } }, /* @__PURE__ */ g.createElement("div", { className: "pane", style: { minWidth: 0 } }, i), /* @__PURE__ */ g.createElement(
    "div",
    {
      role: "separator",
      "aria-orientation": "vertical",
      "aria-valuemin": _,
      "aria-valuemax": y,
      "aria-valuenow": v,
      tabIndex: 0,
      onPointerDown: k,
      className: "separator",
      style: { width: r }
    },
    /* @__PURE__ */ g.createElement("div", { className: "separator-grip" }),
    /* @__PURE__ */ g.createElement("div", { className: "separator-hit" })
  ), /* @__PURE__ */ g.createElement("div", { className: "pane", style: { minWidth: 0 } }, l));
}
ri.propTypes = {
  initialPx: q.number,
  initialPercent: q.number,
  // used only if initialPx is not provided
  minA: q.number,
  minB: q.number,
  maxA: q.number,
  gutter: q.number,
  style: q.object,
  children: q.node.isRequired,
  onChange: q.func
};
const $i = (h) => {
  const {
    className: e,
    range: t,
    selectionRange: s,
    itemRenderer: n,
    keyBindings: r = {},
    indicators: o = [],
    ...a
  } = h, u = h.style || {}, {
    callbacks: f,
    isSelecting: m,
    onMouseUp: v
  } = ss(s), d = X((c) => n(c, f(c), {
    selectionRange: s,
    isSelecting: m
  }), [t, m]), i = {
    width: "5000px",
    position: "absolute",
    height: "5000px",
    left: "-2500px",
    zIndex: 1e3
  };
  function l(c) {
    const {
      range: p,
      caption: k,
      name: b
    } = c;
    let _ = p.count, y = p.first;
    return /* @__PURE__ */ g.createElement(
      "div",
      {
        onClick: () => t.first = y,
        className: `indicator indicator-${b}`,
        style: {
          position: "absolute",
          height: `calc(max(var(--indicator-min-height), ${_ / t.max * 100}%))`,
          top: `${y / t.max * 100}%`
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
    /* @__PURE__ */ g.createElement(
      lt,
      {
        style: {
          ...i,
          top: "-5000px"
        },
        className: "auto-scroll auto-scroll-up",
        onMouseUp: v,
        enabled: m,
        onEvent: () => {
          t.moveUp(), t.first < s.first ? s.first = t.first : t.first < s.last && (s.last = t.first);
        }
      }
    ),
    /* @__PURE__ */ g.createElement(
      hs,
      {
        itemSize: 20,
        itemRenderer: d,
        range: t,
        ...a,
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
      o.filter((c) => c.enabled).map(l)
    ),
    /* @__PURE__ */ g.createElement(
      lt,
      {
        style: {
          ...i,
          bottom: "-5000px"
        },
        className: "auto-scroll auto-scroll-down",
        onMouseUp: v,
        enabled: m,
        onEvent: () => {
          t.moveDown(), t.last > s.last ? s.last = t.last : t.last > s.first && (s.first = t.last);
        }
      }
    )
  );
};
export {
  as as Collapsible,
  wi as Disable,
  xi as DotNotification,
  ls as Drawer,
  Ei as DrawerContainer,
  zi as Dropdown,
  $i as DynamicList,
  hs as GargantuaList,
  lt as IntervalOnHover,
  Ci as MessageModal,
  Ti as ModalOkCancel,
  at as PinButtons,
  Us as Pinnable,
  Li as Progress,
  Ii as ReactSlider,
  Si as RenderInWindow,
  Ai as Slider,
  ri as SplitPaneH,
  Pi as TableContextMenu,
  Ri as TextField,
  Mi as Widget,
  Ni as WidgetGroup
};
