import m, { forwardRef as mt, Children as $t, useRef as O, useState as I, useEffect as M, useCallback as X, createPortal as Dt, createContext as Bt, useContext as Ot, useMemo as gt, useLayoutEffect as Ht } from "react";
import "velor-utils/utils/Range.mjs";
import { noOp as Me } from "velor-utils/utils/functional.mjs";
import { useResizeDetector as vt } from "react-resize-detector";
import { waitForStableBoundingRect as Vt, recursiveMap as Ft } from "./utils.es.js";
import { Spinner as qt, Alert as je, ProgressBar as Gt, Form as Ue, FormControl as Wt, Dropdown as Xe, DropdownMenu as Zt, DropdownItem as Qt } from "react-bootstrap";
import { ArrowBarLeft as jt, ArrowBarRight as Ut, InfoCircleFill as Ke, ExclamationTriangleFill as Xt, ExclamationSquareFill as Kt, ExclamationDiamondFill as Jt, Pin as Yt, PinAngle as es, XLg as ts, PlusCircleFill as Je, DashCircleFill as Ye } from "react-bootstrap-icons";
import Z from "react-bootstrap/Button";
import F from "react-bootstrap/Modal";
import "react-range-slider-input/dist/style.css";
import ss from "react-range-slider-input";
import et from "react-bootstrap/ButtonGroup";
import { useInvalidate as is, useRangeSelection as ns } from "./hooks.es.js";
import { useContextMenu as rs, Menu as as, Item as tt } from "react-contexify";
function De(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xe = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var st;
function os() {
  return st || (st = 1, (function(t) {
    (function() {
      var e = {}.hasOwnProperty;
      function s() {
        for (var a = "", h = 0; h < arguments.length; h++) {
          var l = arguments[h];
          l && (a = i(a, n(l)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return s.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var h = "";
        for (var l in a)
          e.call(a, l) && a[l] && (h = i(h, l));
        return h;
      }
      function i(a, h) {
        return h ? a ? a + " " + h : a + h : a;
      }
      t.exports ? (s.default = s, t.exports = s) : window.classNames = s;
    })();
  })(xe)), xe.exports;
}
var ls = os();
const $ = /* @__PURE__ */ De(ls), Ee = "animating-expand", Ce = "animating-collapse", Te = "animating", Le = "reduced", Se = "expanded", hs = mt((t, e) => {
  const {
    children: s,
    expanded: n,
    onExpand: i = () => {
    },
    onStateChanged: a = () => {
    },
    caption: h,
    className: l
  } = t;
  if ($t.count(s) === 0) return null;
  const p = O(), d = O(), [v, k] = I(!0), c = () => {
    const b = d.current.getBoundingClientRect();
    p.current.style.width = b.width + "px", p.current.style.height = b.height + "px";
  }, r = () => {
    p.current.style.width = "1.7em", p.current.style.height = "1.7em";
  }, o = () => {
    p.current.classList.remove(Se), p.current.classList.add(Ce, Te), r();
  }, u = () => {
    p.current.classList.remove(Le), p.current.classList.add(Ee, Te), c();
  }, f = () => p.current.classList.contains(Ee), g = () => p.current.classList.contains(Ce);
  return M(() => {
    n ? (p.current.classList.add(Se), c(), i(!0), a(!0)) : (p.current.classList.add(Le), r(), i(!1), a(!1));
    const b = () => {
      i(!1);
    };
    return k(!1), document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, []), M(() => {
    v || (n ? u() : o());
  }, [n]), vt({
    targetRef: d,
    onResize: (b, _) => {
      p.current.classList.contains("expanded") && Vt(d.current, c);
    }
  }), /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: p,
      onTransitionEnd: (b) => {
        b.propertyName === "width" && (g() && !n ? (p.current.classList.add(Le), a(!1)) : f() && n && (p.current.classList.add(Se), a(!0)), p.current.classList.remove(
          Ce,
          Ee,
          Te
        ));
      },
      onMouseDown: (b) => b.stopPropagation(),
      onClick: (b) => {
        b.stopPropagation(), i(!0);
      },
      className: $(
        l,
        "collapsible"
      )
    },
    /* @__PURE__ */ m.createElement("span", { className: "caption", ref: e }, h),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: d,
        className: "content"
      },
      s
    )
  );
}), Ei = (t) => Ft(t.children, (e) => m.cloneElement(e, {
  disabled: e.props.disabled || t.disabled
})), Ci = (t) => {
  const {
    notifications: e,
    variant: s,
    visible: n = !1,
    targetRef: i,
    bordered: a = !1,
    size: h
  } = t, l = O(), p = O(), [d, v] = I(!1);
  function k(c) {
    c.preventDefault(), c.stopPropagation(), d ? (v(!1), l.current.style.width = null, l.current.style.height = null) : (v(!0), l.current.style.width = p.current.scrollWidth + "px", l.current.style.height = p.current.scrollHeight + "px");
  }
  return M(() => {
    const c = (r) => {
      r.stopPropagation(), v(!1), l.current && (l.current.style.width = null, l.current.style.height = null);
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, []), i ? /* @__PURE__ */ m.createElement(
    Anchor,
    {
      anchor: "TOP-RIGHT",
      align: "TOP-LEFT",
      targetRef: i
    },
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: l,
        onClick: k,
        className: $(
          h,
          s,
          "dot-notification",
          "anchored",
          {
            bordered: a,
            hidden: !n,
            expanded: d
          }
        )
      },
      /* @__PURE__ */ m.createElement(
        "div",
        {
          ref: p,
          className: "content"
        },
        e
      )
    )
  ) : t.children ? /* @__PURE__ */ m.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: l,
      onClick: k,
      className: $(
        s,
        h,
        "dot-notification",
        {
          bordered: a,
          hidden: !n,
          expanded: d
        }
      )
    },
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: p,
        className: "content"
      },
      e
    )
  ), t.children) : /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: l,
      onClick: k,
      className: $(
        s,
        h,
        "dot-notification",
        {
          bordered: a,
          hidden: !n,
          expanded: d
        }
      )
    },
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: p,
        className: "content"
      },
      e
    )
  );
}, cs = (t) => {
  const {
    visible: e,
    onClose: s,
    title: n,
    loading: i,
    className: a = "",
    id: h,
    name: l,
    location: p = "right",
    clearChilds: d = !0
  } = t, [v, k] = I(!0), [c, r] = I(e), [o, u] = I(!1);
  M(() => {
    e !== c && (u(!0), k(!1));
    const y = () => {
      e && s(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [e]);
  let f;
  switch (p) {
    case "right":
      f = /* @__PURE__ */ m.createElement(Ut, null);
      break;
    case "left":
      f = /* @__PURE__ */ m.createElement(jt, null);
      break;
  }
  const g = /* @__PURE__ */ m.createElement(
    Z,
    {
      onClick: () => s(!1),
      variant: "light"
    },
    f
  ), b = /* @__PURE__ */ m.createElement(
    qt,
    {
      className: $({ hidden: !i }),
      animation: "border",
      role: "status",
      variant: "secondary"
    }
  );
  let _;
  return n ? _ = /* @__PURE__ */ m.createElement("h5", { className: "title" }, /* @__PURE__ */ m.createElement("span", { className: "content" }, n), /* @__PURE__ */ m.createElement("span", { className: "buttons" }, b, g)) : _ = /* @__PURE__ */ m.createElement("div", { className: "title" }, b, /* @__PURE__ */ m.createElement("span", { className: "buttons" }, g)), /* @__PURE__ */ m.createElement(
    "div",
    {
      id: h,
      onAnimationEnd: (y) => u(e),
      onMouseDown: (y) => {
        y.stopPropagation();
      },
      className: $(
        a,
        `name-${l}`,
        "drawer",
        `${p}-drawer`,
        "animate__animated",
        "animate__faster",
        {
          initial: v,
          "willbe-visible": e,
          "initially-visible": c,
          animate__slideInRight: p === "right" && e && !v,
          animate__slideOutRight: p === "right" && !e && !v,
          animate__slideInLeft: p === "left" && e && !v,
          animate__slideOutLeft: p === "left" && !e && !v
        }
      )
    },
    _,
    o || !d ? t.children : null
  );
}, Ti = (t) => {
  const {
    visibleItem: e
  } = t;
  return m.Children.map(t.children, (s) => {
    if (!m.isValidElement(s))
      return s;
    const {
      title: n,
      name: i,
      loading: a,
      className: h,
      id: l,
      onClose: p
    } = s.props;
    return /* @__PURE__ */ m.createElement(
      cs,
      {
        id: l,
        className: h,
        visible: e === i,
        title: n,
        name: i,
        loading: a,
        onClose: p
      },
      s
    );
  });
}, us = (t) => {
  const e = O(), {
    itemRenderer: s,
    itemSize: n,
    range: i
  } = t;
  if (!i || !i.valid)
    return;
  const [a, h] = I(0);
  M(() => {
    i.count = Math.floor(a / n) - 1;
  }, [i, i.max, a, n]);
  const l = i.max > 0, p = X((v) => {
    const k = Math.sign(v.deltaY);
    i.moveDown(k);
  }, [i]);
  vt({
    targetRef: e,
    onResize: X(({ height: v }) => {
      h(v);
    }, [])
  });
  const d = [];
  for (let v of i) {
    let k = s(v);
    k !== null && d.push(k);
  }
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      id: t.id,
      className: "gargantua",
      ref: e,
      style: t.style,
      onWheel: p
    },
    /* @__PURE__ */ m.createElement("div", { className: "viewport" }, /* @__PURE__ */ m.createElement("div", { className: "content" }, d), /* @__PURE__ */ m.createElement(
      "input",
      {
        type: "range",
        className: "vertical-range",
        onChange: (v) => i.jumpToFirst(v.target.value),
        disabled: !l,
        value: i.first,
        min: 0,
        max: i.max
      }
    ))
  );
};
function Be() {
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
var j = Be();
function kt(t) {
  j = t;
}
var te = { exec: () => null };
function L(t, e = "") {
  let s = typeof t == "string" ? t : t.source;
  const n = {
    replace: (i, a) => {
      let h = typeof a == "string" ? a : a.source;
      return h = h.replace(z.caret, "$1"), s = s.replace(i, h), n;
    },
    getRegex: () => new RegExp(s, e)
  };
  return n;
}
var z = {
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
}, ps = /^(?:[ \t]*(?:\n|$))+/, ds = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, fs = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, se = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ms = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Oe = /(?:[*+-]|\d{1,9}[.)])/, bt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _t = L(bt).replace(/bull/g, Oe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), gs = L(bt).replace(/bull/g, Oe).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), He = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, vs = /^[^\n]+/, Ve = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ks = L(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ve).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), bs = L(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Oe).getRegex(), ge = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Fe = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, _s = L(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Fe).replace("tag", ge).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), yt = L(He).replace("hr", se).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ge).getRegex(), ys = L(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", yt).getRegex(), qe = {
  blockquote: ys,
  code: ds,
  def: ks,
  fences: fs,
  heading: ms,
  hr: se,
  html: _s,
  lheading: _t,
  list: bs,
  newline: ps,
  paragraph: yt,
  table: te,
  text: vs
}, it = L(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", se).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ge).getRegex(), ws = {
  ...qe,
  lheading: gs,
  table: it,
  paragraph: L(He).replace("hr", se).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", it).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ge).getRegex()
}, xs = {
  ...qe,
  html: L(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Fe).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: te,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: L(He).replace("hr", se).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", _t).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Es = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Cs = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, wt = /^( {2,}|\\)\n(?!\s*$)/, Ts = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ve = /[\p{P}\p{S}]/u, Ge = /[\s\p{P}\p{S}]/u, xt = /[^\s\p{P}\p{S}]/u, Ls = L(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ge).getRegex(), Et = /(?!~)[\p{P}\p{S}]/u, Ss = /(?!~)[\s\p{P}\p{S}]/u, Ps = /(?:[^\s\p{P}\p{S}]|~)/u, As = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Ct = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Rs = L(Ct, "u").replace(/punct/g, ve).getRegex(), Ns = L(Ct, "u").replace(/punct/g, Et).getRegex(), Tt = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ms = L(Tt, "gu").replace(/notPunctSpace/g, xt).replace(/punctSpace/g, Ge).replace(/punct/g, ve).getRegex(), zs = L(Tt, "gu").replace(/notPunctSpace/g, Ps).replace(/punctSpace/g, Ss).replace(/punct/g, Et).getRegex(), Is = L(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, xt).replace(/punctSpace/g, Ge).replace(/punct/g, ve).getRegex(), $s = L(/\\(punct)/, "gu").replace(/punct/g, ve).getRegex(), Ds = L(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Bs = L(Fe).replace("(?:-->|$)", "-->").getRegex(), Os = L(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", Bs).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), de = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Hs = L(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", de).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Lt = L(/^!?\[(label)\]\[(ref)\]/).replace("label", de).replace("ref", Ve).getRegex(), St = L(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ve).getRegex(), Vs = L("reflink|nolink(?!\\()", "g").replace("reflink", Lt).replace("nolink", St).getRegex(), We = {
  _backpedal: te,
  // only used for GFM url
  anyPunctuation: $s,
  autolink: Ds,
  blockSkip: As,
  br: wt,
  code: Cs,
  del: te,
  emStrongLDelim: Rs,
  emStrongRDelimAst: Ms,
  emStrongRDelimUnd: Is,
  escape: Es,
  link: Hs,
  nolink: St,
  punctuation: Ls,
  reflink: Lt,
  reflinkSearch: Vs,
  tag: Os,
  text: Ts,
  url: te
}, Fs = {
  ...We,
  link: L(/^!?\[(label)\]\((.*?)\)/).replace("label", de).getRegex(),
  reflink: L(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", de).getRegex()
}, ze = {
  ...We,
  emStrongRDelimAst: zs,
  emStrongLDelim: Ns,
  url: L(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, qs = {
  ...ze,
  br: L(wt).replace("{2,}", "*").getRegex(),
  text: L(ze.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ue = {
  normal: qe,
  gfm: ws,
  pedantic: xs
}, Y = {
  normal: We,
  gfm: ze,
  breaks: qs,
  pedantic: Fs
}, Gs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, nt = (t) => Gs[t];
function H(t, e) {
  if (e) {
    if (z.escapeTest.test(t))
      return t.replace(z.escapeReplace, nt);
  } else if (z.escapeTestNoEncode.test(t))
    return t.replace(z.escapeReplaceNoEncode, nt);
  return t;
}
function rt(t) {
  try {
    t = encodeURI(t).replace(z.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function at(t, e) {
  const s = t.replace(z.findPipe, (a, h, l) => {
    let p = !1, d = h;
    for (; --d >= 0 && l[d] === "\\"; ) p = !p;
    return p ? "|" : " |";
  }), n = s.split(z.splitPipe);
  let i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e)
    if (n.length > e)
      n.splice(e);
    else
      for (; n.length < e; ) n.push("");
  for (; i < n.length; i++)
    n[i] = n[i].trim().replace(z.slashPipe, "|");
  return n;
}
function ee(t, e, s) {
  const n = t.length;
  if (n === 0)
    return "";
  let i = 0;
  for (; i < n && t.charAt(n - i - 1) === e; )
    i++;
  return t.slice(0, n - i);
}
function Ws(t, e) {
  if (t.indexOf(e[1]) === -1)
    return -1;
  let s = 0;
  for (let n = 0; n < t.length; n++)
    if (t[n] === "\\")
      n++;
    else if (t[n] === e[0])
      s++;
    else if (t[n] === e[1] && (s--, s < 0))
      return n;
  return s > 0 ? -2 : -1;
}
function ot(t, e, s, n, i) {
  const a = e.href, h = e.title || null, l = t[1].replace(i.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  const p = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: s,
    href: a,
    title: h,
    text: l,
    tokens: n.inlineTokens(l)
  };
  return n.state.inLink = !1, p;
}
function Zs(t, e, s) {
  const n = t.match(s.other.indentCodeCompensation);
  if (n === null)
    return e;
  const i = n[1];
  return e.split(`
`).map((a) => {
    const h = a.match(s.other.beginningSpace);
    if (h === null)
      return a;
    const [l] = h;
    return l.length >= i.length ? a.slice(i.length) : a;
  }).join(`
`);
}
var fe = class {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(t) {
    this.options = t || j;
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
        text: this.options.pedantic ? s : ee(s, `
`)
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const s = e[0], n = Zs(s, e[3] || "", this.rules);
      return {
        type: "code",
        raw: s,
        lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
        text: n
      };
    }
  }
  heading(t) {
    const e = this.rules.block.heading.exec(t);
    if (e) {
      let s = e[2].trim();
      if (this.rules.other.endingHash.test(s)) {
        const n = ee(s, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (s = n.trim());
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
        raw: ee(e[0], `
`)
      };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      let s = ee(e[0], `
`).split(`
`), n = "", i = "";
      const a = [];
      for (; s.length > 0; ) {
        let h = !1;
        const l = [];
        let p;
        for (p = 0; p < s.length; p++)
          if (this.rules.other.blockquoteStart.test(s[p]))
            l.push(s[p]), h = !0;
          else if (!h)
            l.push(s[p]);
          else
            break;
        s = s.slice(p);
        const d = l.join(`
`), v = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${d}` : d, i = i ? `${i}
${v}` : v;
        const k = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(v, a, !0), this.lexer.state.top = k, s.length === 0)
          break;
        const c = a.at(-1);
        if (c?.type === "code")
          break;
        if (c?.type === "blockquote") {
          const r = c, o = r.raw + `
` + s.join(`
`), u = this.blockquote(o);
          a[a.length - 1] = u, n = n.substring(0, n.length - r.raw.length) + u.raw, i = i.substring(0, i.length - r.text.length) + u.text;
          break;
        } else if (c?.type === "list") {
          const r = c, o = r.raw + `
` + s.join(`
`), u = this.list(o);
          a[a.length - 1] = u, n = n.substring(0, n.length - c.raw.length) + u.raw, i = i.substring(0, i.length - r.raw.length) + u.raw, s = o.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: n,
        tokens: a,
        text: i
      };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let s = e[1].trim();
      const n = s.length > 1, i = {
        type: "list",
        raw: "",
        ordered: n,
        start: n ? +s.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      s = n ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = n ? s : "[*+-]");
      const a = this.rules.other.listItemRegex(s);
      let h = !1;
      for (; t; ) {
        let p = !1, d = "", v = "";
        if (!(e = a.exec(t)) || this.rules.block.hr.test(t))
          break;
        d = e[0], t = t.substring(d.length);
        let k = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (g) => " ".repeat(3 * g.length)), c = t.split(`
`, 1)[0], r = !k.trim(), o = 0;
        if (this.options.pedantic ? (o = 2, v = k.trimStart()) : r ? o = e[1].length + 1 : (o = e[2].search(this.rules.other.nonSpaceChar), o = o > 4 ? 1 : o, v = k.slice(o), o += e[1].length), r && this.rules.other.blankLine.test(c) && (d += c + `
`, t = t.substring(c.length + 1), p = !0), !p) {
          const g = this.rules.other.nextBulletRegex(o), b = this.rules.other.hrRegex(o), _ = this.rules.other.fencesBeginRegex(o), y = this.rules.other.headingBeginRegex(o), T = this.rules.other.htmlBeginRegex(o);
          for (; t; ) {
            const C = t.split(`
`, 1)[0];
            let E;
            if (c = C, this.options.pedantic ? (c = c.replace(this.rules.other.listReplaceNesting, "  "), E = c) : E = c.replace(this.rules.other.tabCharGlobal, "    "), _.test(c) || y.test(c) || T.test(c) || g.test(c) || b.test(c))
              break;
            if (E.search(this.rules.other.nonSpaceChar) >= o || !c.trim())
              v += `
` + E.slice(o);
            else {
              if (r || k.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || _.test(k) || y.test(k) || b.test(k))
                break;
              v += `
` + c;
            }
            !r && !c.trim() && (r = !0), d += C + `
`, t = t.substring(C.length + 1), k = E.slice(o);
          }
        }
        i.loose || (h ? i.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (h = !0));
        let u = null, f;
        this.options.gfm && (u = this.rules.other.listIsTask.exec(v), u && (f = u[0] !== "[ ] ", v = v.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: d,
          task: !!u,
          checked: f,
          loose: !1,
          text: v,
          tokens: []
        }), i.raw += d;
      }
      const l = i.items.at(-1);
      if (l)
        l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else
        return;
      i.raw = i.raw.trimEnd();
      for (let p = 0; p < i.items.length; p++)
        if (this.lexer.state.top = !1, i.items[p].tokens = this.lexer.blockTokens(i.items[p].text, []), !i.loose) {
          const d = i.items[p].tokens.filter((k) => k.type === "space"), v = d.length > 0 && d.some((k) => this.rules.other.anyLine.test(k.raw));
          i.loose = v;
        }
      if (i.loose)
        for (let p = 0; p < i.items.length; p++)
          i.items[p].loose = !0;
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
      const s = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return {
        type: "def",
        tag: s,
        raw: e[0],
        href: n,
        title: i
      };
    }
  }
  table(t) {
    const e = this.rules.block.table.exec(t);
    if (!e || !this.rules.other.tableDelimiter.test(e[2]))
      return;
    const s = at(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === n.length) {
      for (const h of n)
        this.rules.other.tableAlignRight.test(h) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(h) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(h) ? a.align.push("left") : a.align.push(null);
      for (let h = 0; h < s.length; h++)
        a.header.push({
          text: s[h],
          tokens: this.lexer.inline(s[h]),
          header: !0,
          align: a.align[h]
        });
      for (const h of i)
        a.rows.push(at(h, a.header.length).map((l, p) => ({
          text: l,
          tokens: this.lexer.inline(l),
          header: !1,
          align: a.align[p]
        })));
      return a;
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
        const a = ee(s.slice(0, -1), "\\");
        if ((s.length - a.length) % 2 === 0)
          return;
      } else {
        const a = Ws(e[2], "()");
        if (a === -2)
          return;
        if (a > -1) {
          const l = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + a;
          e[2] = e[2].substring(0, a), e[0] = e[0].substring(0, l).trim(), e[3] = "";
        }
      }
      let n = e[2], i = "";
      if (this.options.pedantic) {
        const a = this.rules.other.pedanticHrefTitle.exec(n);
        a && (n = a[1], i = a[3]);
      } else
        i = e[3] ? e[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? n = n.slice(1) : n = n.slice(1, -1)), ot(e, {
        href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, e[0], this.lexer, this.rules);
    }
  }
  reflink(t, e) {
    let s;
    if ((s = this.rules.inline.reflink.exec(t)) || (s = this.rules.inline.nolink.exec(t))) {
      const n = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = e[n.toLowerCase()];
      if (!i) {
        const a = s[0].charAt(0);
        return {
          type: "text",
          raw: a,
          text: a
        };
      }
      return ot(s, i, s[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, s = "") {
    let n = this.rules.inline.emStrongLDelim.exec(t);
    if (!n || n[3] && s.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(n[1] || n[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const a = [...n[0]].length - 1;
      let h, l, p = a, d = 0;
      const v = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (v.lastIndex = 0, e = e.slice(-1 * t.length + a); (n = v.exec(e)) != null; ) {
        if (h = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !h) continue;
        if (l = [...h].length, n[3] || n[4]) {
          p += l;
          continue;
        } else if ((n[5] || n[6]) && a % 3 && !((a + l) % 3)) {
          d += l;
          continue;
        }
        if (p -= l, p > 0) continue;
        l = Math.min(l, l + p + d);
        const k = [...n[0]][0].length, c = t.slice(0, a + n.index + k + l);
        if (Math.min(a, l) % 2) {
          const o = c.slice(1, -1);
          return {
            type: "em",
            raw: c,
            text: o,
            tokens: this.lexer.inlineTokens(o)
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
      const n = this.rules.other.nonSpaceChar.test(s), i = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
      return n && i && (s = s.substring(1, s.length - 1)), {
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
      let s, n;
      return e[2] === "@" ? (s = e[1], n = "mailto:" + s) : (s = e[1], n = s), {
        type: "link",
        raw: e[0],
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
  url(t) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let s, n;
      if (e[2] === "@")
        s = e[0], n = "mailto:" + s;
      else {
        let i;
        do
          i = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (i !== e[0]);
        s = e[0], e[1] === "www." ? n = "http://" + e[0] : n = e[0];
      }
      return {
        type: "link",
        raw: e[0],
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
}, q = class Ie {
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
    const s = {
      other: z,
      block: ue.normal,
      inline: Y.normal
    };
    this.options.pedantic ? (s.block = ue.pedantic, s.inline = Y.pedantic) : this.options.gfm && (s.block = ue.gfm, this.options.breaks ? s.inline = Y.breaks : s.inline = Y.gfm), this.tokenizer.rules = s;
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
    e = e.replace(z.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let s = 0; s < this.inlineQueue.length; s++) {
      const n = this.inlineQueue[s];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, s = [], n = !1) {
    for (this.options.pedantic && (e = e.replace(z.tabCharGlobal, "    ").replace(z.spaceLine, "")); e; ) {
      let i;
      if (this.options.extensions?.block?.some((h) => (i = h.call({ lexer: this }, e, s)) ? (e = e.substring(i.raw.length), s.push(i), !0) : !1))
        continue;
      if (i = this.tokenizer.space(e)) {
        e = e.substring(i.raw.length);
        const h = s.at(-1);
        i.raw.length === 1 && h !== void 0 ? h.raw += `
` : s.push(i);
        continue;
      }
      if (i = this.tokenizer.code(e)) {
        e = e.substring(i.raw.length);
        const h = s.at(-1);
        h?.type === "paragraph" || h?.type === "text" ? (h.raw += `
` + i.raw, h.text += `
` + i.text, this.inlineQueue.at(-1).src = h.text) : s.push(i);
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
        const h = s.at(-1);
        h?.type === "paragraph" || h?.type === "text" ? (h.raw += `
` + i.raw, h.text += `
` + i.raw, this.inlineQueue.at(-1).src = h.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
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
      let a = e;
      if (this.options.extensions?.startBlock) {
        let h = 1 / 0;
        const l = e.slice(1);
        let p;
        this.options.extensions.startBlock.forEach((d) => {
          p = d.call({ lexer: this }, l), typeof p == "number" && p >= 0 && (h = Math.min(h, p));
        }), h < 1 / 0 && h >= 0 && (a = e.substring(0, h + 1));
      }
      if (this.state.top && (i = this.tokenizer.paragraph(a))) {
        const h = s.at(-1);
        n && h?.type === "paragraph" ? (h.raw += `
` + i.raw, h.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : s.push(i), n = a.length !== e.length, e = e.substring(i.raw.length);
        continue;
      }
      if (i = this.tokenizer.text(e)) {
        e = e.substring(i.raw.length);
        const h = s.at(-1);
        h?.type === "text" ? (h.raw += `
` + i.raw, h.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : s.push(i);
        continue;
      }
      if (e) {
        const h = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(h);
          break;
        } else
          throw new Error(h);
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
    let n = e, i = null;
    if (this.tokens.links) {
      const l = Object.keys(this.tokens.links);
      if (l.length > 0)
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; )
          l.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; )
      n = n.slice(0, i.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; )
      n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let a = !1, h = "";
    for (; e; ) {
      a || (h = ""), a = !1;
      let l;
      if (this.options.extensions?.inline?.some((d) => (l = d.call({ lexer: this }, e, s)) ? (e = e.substring(l.raw.length), s.push(l), !0) : !1))
        continue;
      if (l = this.tokenizer.escape(e)) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(e)) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      if (l = this.tokenizer.link(e)) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(l.raw.length);
        const d = s.at(-1);
        l.type === "text" && d?.type === "text" ? (d.raw += l.raw, d.text += l.text) : s.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(e, n, h)) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(e)) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      if (l = this.tokenizer.br(e)) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      if (l = this.tokenizer.del(e)) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(e)) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(e))) {
        e = e.substring(l.raw.length), s.push(l);
        continue;
      }
      let p = e;
      if (this.options.extensions?.startInline) {
        let d = 1 / 0;
        const v = e.slice(1);
        let k;
        this.options.extensions.startInline.forEach((c) => {
          k = c.call({ lexer: this }, v), typeof k == "number" && k >= 0 && (d = Math.min(d, k));
        }), d < 1 / 0 && d >= 0 && (p = e.substring(0, d + 1));
      }
      if (l = this.tokenizer.inlineText(p)) {
        e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (h = l.raw.slice(-1)), a = !0;
        const d = s.at(-1);
        d?.type === "text" ? (d.raw += l.raw, d.text += l.text) : s.push(l);
        continue;
      }
      if (e) {
        const d = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else
          throw new Error(d);
      }
    }
    return s;
  }
}, me = class {
  options;
  parser;
  // set by the parser
  constructor(t) {
    this.options = t || j;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: e, escaped: s }) {
    const n = (e || "").match(z.notSpaceStart)?.[0], i = t.replace(z.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + H(n) + '">' + (s ? i : H(i, !0)) + `</code></pre>
` : "<pre><code>" + (s ? i : H(i, !0)) + `</code></pre>
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
    let n = "";
    for (let h = 0; h < t.items.length; h++) {
      const l = t.items[h];
      n += this.listitem(l);
    }
    const i = e ? "ol" : "ul", a = e && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + i + a + `>
` + n + "</" + i + `>
`;
  }
  listitem(t) {
    let e = "";
    if (t.task) {
      const s = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = s + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = s + " " + H(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
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
    let n = "";
    for (let i = 0; i < t.rows.length; i++) {
      const a = t.rows[i];
      s = "";
      for (let h = 0; h < a.length; h++)
        s += this.tablecell(a[h]);
      n += this.tablerow({ text: s });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
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
    return `<code>${H(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: e, tokens: s }) {
    const n = this.parser.parseInline(s), i = rt(t);
    if (i === null)
      return n;
    t = i;
    let a = '<a href="' + t + '"';
    return e && (a += ' title="' + H(e) + '"'), a += ">" + n + "</a>", a;
  }
  image({ href: t, title: e, text: s, tokens: n }) {
    n && (s = this.parser.parseInline(n, this.parser.textRenderer));
    const i = rt(t);
    if (i === null)
      return H(s);
    t = i;
    let a = `<img src="${t}" alt="${s}"`;
    return e && (a += ` title="${H(e)}"`), a += ">", a;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : H(t.text);
  }
}, Ze = class {
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
}, G = class $e {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || j, this.options.renderer = this.options.renderer || new me(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ze();
  }
  /**
   * Static Parse Method
   */
  static parse(e, s) {
    return new $e(s).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, s) {
    return new $e(s).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, s = !0) {
    let n = "";
    for (let i = 0; i < e.length; i++) {
      const a = e[i];
      if (this.options.extensions?.renderers?.[a.type]) {
        const l = a, p = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (p !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type)) {
          n += p || "";
          continue;
        }
      }
      const h = a;
      switch (h.type) {
        case "space": {
          n += this.renderer.space(h);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(h);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(h);
          continue;
        }
        case "code": {
          n += this.renderer.code(h);
          continue;
        }
        case "table": {
          n += this.renderer.table(h);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(h);
          continue;
        }
        case "list": {
          n += this.renderer.list(h);
          continue;
        }
        case "html": {
          n += this.renderer.html(h);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(h);
          continue;
        }
        case "text": {
          let l = h, p = this.renderer.text(l);
          for (; i + 1 < e.length && e[i + 1].type === "text"; )
            l = e[++i], p += `
` + this.renderer.text(l);
          s ? n += this.renderer.paragraph({
            type: "paragraph",
            raw: p,
            text: p,
            tokens: [{ type: "text", raw: p, text: p, escaped: !0 }]
          }) : n += p;
          continue;
        }
        default: {
          const l = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, s = this.renderer) {
    let n = "";
    for (let i = 0; i < e.length; i++) {
      const a = e[i];
      if (this.options.extensions?.renderers?.[a.type]) {
        const l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          n += l || "";
          continue;
        }
      }
      const h = a;
      switch (h.type) {
        case "escape": {
          n += s.text(h);
          break;
        }
        case "html": {
          n += s.html(h);
          break;
        }
        case "link": {
          n += s.link(h);
          break;
        }
        case "image": {
          n += s.image(h);
          break;
        }
        case "strong": {
          n += s.strong(h);
          break;
        }
        case "em": {
          n += s.em(h);
          break;
        }
        case "codespan": {
          n += s.codespan(h);
          break;
        }
        case "br": {
          n += s.br(h);
          break;
        }
        case "del": {
          n += s.del(h);
          break;
        }
        case "text": {
          n += s.text(h);
          break;
        }
        default: {
          const l = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent)
            return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
}, pe = class {
  options;
  block;
  constructor(t) {
    this.options = t || j;
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
    return this.block ? q.lex : q.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? G.parse : G.parseInline;
  }
}, Qs = class {
  defaults = Be();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = G;
  Renderer = me;
  TextRenderer = Ze;
  Lexer = q;
  Tokenizer = fe;
  Hooks = pe;
  constructor(...t) {
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, e) {
    let s = [];
    for (const n of t)
      switch (s = s.concat(e.call(this, n)), n.type) {
        case "table": {
          const i = n;
          for (const a of i.header)
            s = s.concat(this.walkTokens(a.tokens, e));
          for (const a of i.rows)
            for (const h of a)
              s = s.concat(this.walkTokens(h.tokens, e));
          break;
        }
        case "list": {
          const i = n;
          s = s.concat(this.walkTokens(i.items, e));
          break;
        }
        default: {
          const i = n;
          this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((a) => {
            const h = i[a].flat(1 / 0);
            s = s.concat(this.walkTokens(h, e));
          }) : i.tokens && (s = s.concat(this.walkTokens(i.tokens, e)));
        }
      }
    return s;
  }
  use(...t) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((s) => {
      const n = { ...s };
      if (n.async = this.defaults.async || n.async || !1, s.extensions && (s.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const a = e.renderers[i.name];
          a ? e.renderers[i.name] = function(...h) {
            let l = i.renderer.apply(this, h);
            return l === !1 && (l = a.apply(this, h)), l;
          } : e.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const a = e[i.level];
          a ? a.unshift(i.tokenizer) : e[i.level] = [i.tokenizer], i.start && (i.level === "block" ? e.startBlock ? e.startBlock.push(i.start) : e.startBlock = [i.start] : i.level === "inline" && (e.startInline ? e.startInline.push(i.start) : e.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
      }), n.extensions = e), s.renderer) {
        const i = this.defaults.renderer || new me(this.defaults);
        for (const a in s.renderer) {
          if (!(a in i))
            throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a))
            continue;
          const h = a, l = s.renderer[h], p = i[h];
          i[h] = (...d) => {
            let v = l.apply(i, d);
            return v === !1 && (v = p.apply(i, d)), v || "";
          };
        }
        n.renderer = i;
      }
      if (s.tokenizer) {
        const i = this.defaults.tokenizer || new fe(this.defaults);
        for (const a in s.tokenizer) {
          if (!(a in i))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const h = a, l = s.tokenizer[h], p = i[h];
          i[h] = (...d) => {
            let v = l.apply(i, d);
            return v === !1 && (v = p.apply(i, d)), v;
          };
        }
        n.tokenizer = i;
      }
      if (s.hooks) {
        const i = this.defaults.hooks || new pe();
        for (const a in s.hooks) {
          if (!(a in i))
            throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a))
            continue;
          const h = a, l = s.hooks[h], p = i[h];
          pe.passThroughHooks.has(a) ? i[h] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(i, d)).then((k) => p.call(i, k));
            const v = l.call(i, d);
            return p.call(i, v);
          } : i[h] = (...d) => {
            let v = l.apply(i, d);
            return v === !1 && (v = p.apply(i, d)), v;
          };
        }
        n.hooks = i;
      }
      if (s.walkTokens) {
        const i = this.defaults.walkTokens, a = s.walkTokens;
        n.walkTokens = function(h) {
          let l = [];
          return l.push(a.call(this, h)), i && (l = l.concat(i.call(this, h))), l;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return q.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return G.parse(t, e ?? this.defaults);
  }
  parseMarkdown(t) {
    return (s, n) => {
      const i = { ...n }, a = { ...this.defaults, ...i }, h = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && i.async === !1)
        return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return h(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return h(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      a.hooks && (a.hooks.options = a, a.hooks.block = t);
      const l = a.hooks ? a.hooks.provideLexer() : t ? q.lex : q.lexInline, p = a.hooks ? a.hooks.provideParser() : t ? G.parse : G.parseInline;
      if (a.async)
        return Promise.resolve(a.hooks ? a.hooks.preprocess(s) : s).then((d) => l(d, a)).then((d) => a.hooks ? a.hooks.processAllTokens(d) : d).then((d) => a.walkTokens ? Promise.all(this.walkTokens(d, a.walkTokens)).then(() => d) : d).then((d) => p(d, a)).then((d) => a.hooks ? a.hooks.postprocess(d) : d).catch(h);
      try {
        a.hooks && (s = a.hooks.preprocess(s));
        let d = l(s, a);
        a.hooks && (d = a.hooks.processAllTokens(d)), a.walkTokens && this.walkTokens(d, a.walkTokens);
        let v = p(d, a);
        return a.hooks && (v = a.hooks.postprocess(v)), v;
      } catch (d) {
        return h(d);
      }
    };
  }
  onError(t, e) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const n = "<p>An error occurred:</p><pre>" + H(s.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e)
        return Promise.reject(s);
      throw s;
    };
  }
}, Q = new Qs();
function S(t, e) {
  return Q.parse(t, e);
}
S.options = S.setOptions = function(t) {
  return Q.setOptions(t), S.defaults = Q.defaults, kt(S.defaults), S;
};
S.getDefaults = Be;
S.defaults = j;
S.use = function(...t) {
  return Q.use(...t), S.defaults = Q.defaults, kt(S.defaults), S;
};
S.walkTokens = function(t, e) {
  return Q.walkTokens(t, e);
};
S.parseInline = Q.parseInline;
S.Parser = G;
S.parser = G.parse;
S.Renderer = me;
S.TextRenderer = Ze;
S.Lexer = q;
S.lexer = q.lex;
S.Tokenizer = fe;
S.Hooks = pe;
S.parse = S;
S.options;
S.setOptions;
S.use;
S.walkTokens;
S.parseInline;
G.parse;
q.lex;
const js = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function Us(t) {
  let e;
  for (; (e = js.exec(t)) !== null; ) {
    const { dateStr: s } = e.groups;
    t = t.replaceAll(
      e[0],
      new Date(s).toLocaleDateString()
    );
  }
  return t;
}
function lt(t) {
  return t = Us(t), S.parse(t);
}
const Xs = (t) => {
  const {
    entry: e
  } = t;
  let s;
  switch (e.severity) {
    case "info":
    case "success":
      s = /* @__PURE__ */ m.createElement(Ke, null);
      break;
    case "warning":
      s = /* @__PURE__ */ m.createElement(Kt, null);
      break;
    case "error":
      s = /* @__PURE__ */ m.createElement(Xt, null);
      break;
    default:
      s = /* @__PURE__ */ m.createElement(Ke, null);
  }
  let n = e.message;
  return Array.isArray(n) || (n = [n]), /* @__PURE__ */ m.createElement("div", { className: $("entry", e.severity, e.category) }, /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement("span", { className: "icon" }, s), /* @__PURE__ */ m.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), n.map((i) => /* @__PURE__ */ m.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: lt(i) }
    }
  )), /* @__PURE__ */ m.createElement("div", { className: "changes" }, e.changes?.map((i) => /* @__PURE__ */ m.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: lt(i) },
      className: "change"
    }
  ))));
}, Li = (t) => {
  const {
    show: e,
    onShow: s,
    getMessages: n,
    title: i,
    icon: a
  } = t, [h, l] = I([]), [p, d] = I();
  M(() => {
    e && (async () => {
      try {
        let k = await n();
        l(k);
      } catch (k) {
        d(k);
      }
    })();
  }, [e]);
  let v;
  return p || !Array.isArray(h) || h.length > 0 && typeof h[0] != "object" ? v = /* @__PURE__ */ m.createElement(je, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : h.length === 0 ? v = /* @__PURE__ */ m.createElement(je, { variant: "secondary" }, "There are currently no message") : v = /* @__PURE__ */ m.createElement("div", { className: "announcement-messages" }, h.map((k) => /* @__PURE__ */ m.createElement(Xs, { entry: k }))), /* @__PURE__ */ m.createElement(
    F,
    {
      show: e,
      onHide: () => s(!1),
      size: "lg"
    },
    /* @__PURE__ */ m.createElement(F.Header, null, /* @__PURE__ */ m.createElement(F.Title, null, /* @__PURE__ */ m.createElement("span", null, a), /* @__PURE__ */ m.createElement("span", null, i))),
    /* @__PURE__ */ m.createElement(F.Body, null, v)
  );
}, Si = (t) => {
  const {
    show: e,
    onHide: s,
    onConfirm: n,
    title: i,
    message: a
  } = t;
  return /* @__PURE__ */ m.createElement(
    F,
    {
      show: e,
      size: "sm",
      onHide: s
    },
    /* @__PURE__ */ m.createElement(F.Header, { closeButton: !0 }, /* @__PURE__ */ m.createElement(F.Title, null, /* @__PURE__ */ m.createElement(Jt, null), /* @__PURE__ */ m.createElement("span", { className: "" }, i))),
    /* @__PURE__ */ m.createElement(F.Body, null, /* @__PURE__ */ m.createElement("p", { className: "ellipsis" }, a)),
    /* @__PURE__ */ m.createElement(F.Footer, null, /* @__PURE__ */ m.createElement(
      Z,
      {
        variant: "secondary",
        onClick: s
      },
      "Cancel"
    ), /* @__PURE__ */ m.createElement(
      Z,
      {
        variant: "danger",
        onClick: () => {
          n(), s();
        }
      },
      "Proceed"
    ))
  );
}, ht = (t) => {
  const {
    buttons: e,
    position: s = "top"
  } = t;
  return /* @__PURE__ */ React.createElement("div", { className: $(
    "pinnable-container",
    `pin-${s}`
  ) }, t.children, /* @__PURE__ */ React.createElement("div", { className: "pinnable-buttons" }, e));
}, Ks = mt((t, e) => {
  let {
    expanded: s,
    setExpanded: n,
    canPin: i = !0,
    canClose: a = !0,
    onClose: h = Me,
    pinned: l,
    setPinned: p,
    className: d,
    pinReceiver: v
  } = t;
  I(!1);
  const k = [];
  return i && k.push(
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (c) => {
          c.stopPropagation(), p(!l);
        }
      },
      l ? /* @__PURE__ */ m.createElement(Yt, null) : /* @__PURE__ */ m.createElement(es, null)
    )
  ), a && k.push(
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (c) => {
          c.stopPropagation(), h();
        }
      },
      /* @__PURE__ */ m.createElement(ts, null)
    )
  ), /* @__PURE__ */ m.createElement(
    hs,
    {
      ...t,
      className: $(d, {
        pinnable: i,
        closable: a
      }),
      expanded: s || l,
      onExpand: n,
      ref: e
    },
    v ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(ht, { buttons: k }, v), t.children) : /* @__PURE__ */ m.createElement(ht, { buttons: k }, t.children)
  );
}), Pi = (t) => {
  const {
    progress: e,
    label: s
  } = t;
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      className: $(
        "progress-container",
        "animate__slower",
        "animate__animated",
        {
          animate__fadeOut: e >= 100 || e <= 0
        }
      )
    },
    /* @__PURE__ */ m.createElement("div", { className: "progress-label" }, s),
    /* @__PURE__ */ m.createElement(Gt, { now: e })
  );
};
function ct(t) {
  const {
    onEvent: e,
    enabled: s = !0,
    style: n = {},
    ...i
  } = t, a = O();
  function h() {
    const p = () => {
      e(), a.current = setTimeout(p, 100);
    };
    s && p();
  }
  function l() {
    clearTimeout(a.current);
  }
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      onMouseEnter: h,
      onMouseLeave: l,
      ...i,
      style: {
        ...n,
        display: s ? "block" : "none"
      }
    }
  );
}
let Js = 0;
const Ai = (t) => {
  const [e, s] = I(null), n = O(window), [i, a] = I(() => Js++), {
    name: h = "",
    options: l = "",
    notifications: p
  } = t;
  function d() {
    t.onClose();
  }
  return M(() => {
    const v = document.createElement("div");
    s(v);
  }, []), M(() => {
    function v() {
      if (process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Opening the admin control panel"), t.popup ? n.current = window.open(
        t.url ?? "",
        h,
        "popup"
        // `popup,width=${width},height=${height},top=${top},left=${left}`
      ) : n.current = window.open(
        t.url ?? "",
        "_blank",
        l
      ), !n.current) {
        p.error(
          `Unable to open ${t.name}. Is your browser preventing popups ?`,
          "Failed opening new window",
          1e4
        ), t.onBlocked();
        return;
      }
      n.current.document.close(), n.current.addEventListener("beforeunload", d), n.current.document.body.appendChild(e), Array.from(document.head.querySelectorAll('style,link[rel="stylesheet"]')).forEach((r) => {
        n.current.document.head.appendChild(
          r.cloneNode(!0)
        );
      });
      const k = () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), c.removeEventListener("beforeunload", d), c.close();
      };
      window.addEventListener("beforeunload", k);
      const c = n.current;
      return () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), window.removeEventListener("beforeunload", k), c.close();
      };
    }
    if (e)
      return v();
  }, [e]), e && Dt(t.children, e);
}, Ri = ({
  min: t,
  max: e,
  ticks: s,
  value: n,
  onChange: i,
  formatter: a = (v) => v,
  className: h = "",
  tooltip_position: l,
  orientation: p = "vertical",
  disabled: d = !1
}) => {
  const v = O(), k = Array.isArray(n), c = is();
  function r(f, g) {
    return () => {
      const {
        min: b,
        max: _
      } = v.current.rangeLimits;
      let y = [
        _ - v.current.value.max,
        _ - v.current.value.min
      ];
      return y[g] += f, y[g] = Math.min(_, y[g]), y[g] = Math.max(b, y[g]), i(k ? y : y[g]), !1;
    };
  }
  function o(f) {
    const g = -Math.sign(f.deltaY), {
      min: b,
      max: _
    } = v.current.rangeLimits;
    let y = [
      _ - v.current.value.max,
      _ - v.current.value.min
    ];
    y[1] += g, y[1] = Math.max(b, y[1]), y[1] = Math.min(_, y[1]), i(k ? [
      y[0],
      y[1]
    ] : y[1]), f.stopPropagation();
  }
  if (v.current)
    if (k) {
      let f = v.current.index;
      v.current.thumb[0].current.setAttribute("data-value", a(n[f.max])), v.current.thumb[1].current.setAttribute("data-value", a(n[f.min]));
    } else
      v.current.thumb[0].current.setAttribute("data-value", a(n));
  else
    c();
  const u = /* @__PURE__ */ m.createElement(
    ss,
    {
      ref: v,
      onInput: (f) => i(k ? [e - f[1], e - f[0]] : e - f[0]),
      value: k ? [e - n[1], e - n[0]] : [e - n, e],
      step: 1,
      max: e,
      min: t,
      disabled: d,
      thumbsDisabled: [!1, !k],
      orientation: p
    }
  );
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      className: $(
        h,
        "slider",
        `slider-${p}`,
        {
          dual: k,
          disabled: d
        }
      ),
      onWheel: o
    },
    /* @__PURE__ */ m.createElement(et, { className: "max-btns" }, /* @__PURE__ */ m.createElement(
      Z,
      {
        variant: "secondary",
        className: "plus",
        disabled: d,
        onPointerDown: (f) => f.stopPropagation(),
        onClick: r(1, 1)
      },
      /* @__PURE__ */ m.createElement(Je, null)
    ), /* @__PURE__ */ m.createElement(
      Z,
      {
        variant: "secondary",
        className: "minus",
        disabled: d,
        onPointerDown: (f) => f.stopPropagation(),
        onClick: r(-1, 1)
      },
      /* @__PURE__ */ m.createElement(Ye, null)
    )),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (f) => f.stopPropagation()
      },
      u
    ),
    k ? /* @__PURE__ */ m.createElement(et, { className: "min-btns" }, /* @__PURE__ */ m.createElement(
      Z,
      {
        variant: "secondary",
        className: "plus",
        disabled: d,
        onPointerDown: (f) => f.stopPropagation(),
        onClick: r(1, 0)
      },
      /* @__PURE__ */ m.createElement(Je, null)
    ), /* @__PURE__ */ m.createElement(
      Z,
      {
        variant: "secondary",
        className: "minus",
        disabled: d,
        onPointerDown: (f) => f.stopPropagation(),
        onClick: r(-1, 0)
      },
      /* @__PURE__ */ m.createElement(Ye, null)
    )) : null
  );
}, Ni = (t) => {
  const {
    id: e
  } = t, { hideAll: s } = rs({
    id: "file-ctx-menu"
  }), [n, i] = I(!1);
  function a(l) {
    l.key === "Escape" && s();
  }
  M(() => {
    if (n)
      return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [n]);
  function h(l) {
    const {
      elem: p,
      name: d,
      value: v,
      index: k
    } = l;
  }
  return /* @__PURE__ */ m.createElement(
    as,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: i
    },
    /* @__PURE__ */ m.createElement(
      tt,
      {
        hidden: ({ props: l }) => !l.field.canCopy,
        onMouseDown: (l) => {
          l.stopPropagation(), l.stopImmediatePropagation();
        },
        onClick: h,
        id: "copy"
      },
      "Copy"
    ),
    /* @__PURE__ */ m.createElement(tt, { id: "cut" }, "Cut")
  );
}, Mi = (t) => {
  const {
    target: e,
    onChange: s = () => {
    },
    onAccept: n = () => {
    },
    onAbort: i = () => {
    },
    disabled: a,
    name: h,
    label: l,
    type: p = "text",
    required: d = !1
  } = t;
  function v(r) {
    e[h] = r.target.value, n(e[h], { target: e, name: h });
  }
  function k(r) {
    e[h] = r.target.value, s(e[h], { target: e, name: h });
  }
  function c(r) {
    e[h] = r.target.value, i(e[h], { target: e, name: h });
  }
  return /* @__PURE__ */ React.createElement(Ue.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(Ue.Label, { className: "text-secondary small", htmlFor: h }, l), /* @__PURE__ */ React.createElement(
    Wt,
    {
      id: h,
      type: p,
      disabled: a,
      value: e[h] ?? "",
      name: h,
      onChange: k,
      required: d,
      onKeyDown: (r) => {
        r.key === "Enter" ? v(r) : r.key === "Escape" && c(r);
      }
    }
  ));
}, Pt = Bt(null), zi = (t) => {
  const {
    collapsible: e = !0
  } = t, [s, n] = I();
  return /* @__PURE__ */ React.createElement(Pt.Provider, { value: {
    collapsible: e,
    setExpanded: (i) => n(i),
    expanded: s
  } }, t.children);
}, Ii = (t) => {
  const e = Ot(Pt), {
    canPin: s = !1,
    canClose: n = !1,
    eventKey: i,
    onExpand: a = Me,
    onPin: h = Me
  } = t, [l, p] = usePersistedState(i + ".pinned"), {
    collapsible: d,
    expanded: v,
    setExpanded: k
  } = e;
  return /* @__PURE__ */ React.createElement(
    Ks,
    {
      ...t,
      pinned: l,
      setPinned: p,
      expanded: v === i || !d,
      setExpanded: (c) => {
        a(c), k(d && c ? i : null);
      },
      onPin: h,
      canPin: s,
      canClose: n
    },
    t.children
  );
};
function Ys(t) {
  return Array.isArray(t) ? t : Object.entries(t).map(([e, s]) => ({ value: isNaN(+e) ? e : +e, label: String(s) }));
}
function $i(t) {
  const {
    value: e,
    options: s,
    onChange: n,
    disabled: i,
    placeholder: a = "Select…",
    className: h
  } = t, l = gt(() => Ys(s), [s]), p = l.find((d) => d.value === e);
  return /* @__PURE__ */ m.createElement(Xe, null, /* @__PURE__ */ m.createElement(Xe.Toggle, { disabled: i }, p ? p.label : a), /* @__PURE__ */ m.createElement(Zt, null, l.map((d) => /* @__PURE__ */ m.createElement(
    Qt,
    {
      key: String(d.value),
      onClick: () => n(d.value),
      "aria-disabled": d.disabled
    },
    d.label
  ))));
}
var Pe = { exports: {} };
/*! =======================================================
                      VERSION  11.0.2              
========================================================= */
var ut;
function ei() {
  return ut || (ut = 1, (function(t) {
    var e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
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
    (function(n) {
      if (e(t) === "object" && t.exports) {
        var i;
        try {
          i = require("jquery");
        } catch {
          i = null;
        }
        t.exports = n(i);
      } else window && (window.Slider = n(window.jQuery));
    })(function(n) {
      var i = "slider", a = "bootstrapSlider";
      s && !window.console && (window.console = {}), s && !window.console.log && (window.console.log = function() {
      }), s && !window.console.warn && (window.console.warn = function() {
      });
      var h;
      return (function(l) {
        var p = Array.prototype.slice;
        function d() {
        }
        function v(k) {
          if (!k)
            return;
          function c(u) {
            u.prototype.option || (u.prototype.option = function(f) {
              k.isPlainObject(f) && (this.options = k.extend(!0, this.options, f));
            });
          }
          var r = typeof console > "u" ? d : function(u) {
            console.error(u);
          };
          function o(u, f) {
            k.fn[u] = function(g) {
              if (typeof g == "string") {
                for (var b = p.call(arguments, 1), _ = 0, y = this.length; _ < y; _++) {
                  var T = this[_], C = k.data(T, u);
                  if (!C) {
                    r("cannot call methods on " + u + " prior to initialization; attempted to call '" + g + "'");
                    continue;
                  }
                  if (!k.isFunction(C[g]) || g.charAt(0) === "_") {
                    r("no such method '" + g + "' for " + u + " instance");
                    continue;
                  }
                  var E = C[g].apply(C, b);
                  if (E !== void 0 && E !== C)
                    return E;
                }
                return this;
              } else {
                var w = this.map(function() {
                  var x = k.data(this, u);
                  return x ? (x.option(g), x._init()) : (x = new f(this, g), k.data(this, u, x)), k(this);
                });
                return w.length === 1 ? w[0] : w;
              }
            };
          }
          return k.bridget = function(u, f) {
            c(f), o(u, f);
          }, k.bridget;
        }
        v(l);
      })(n), (function(l) {
        var p = void 0, d = {
          formatInvalidInputErrorMsg: function(r) {
            return "Invalid input value '" + r + "' passed in";
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, v = {
          linear: {
            getValue: function(r, o) {
              return r < o.min ? o.min : r > o.max ? o.max : r;
            },
            toValue: function(r) {
              var o = r / 100 * (this.options.max - this.options.min), u = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var f, g, b, _ = 0, y = 1; y < this.options.ticks_positions.length; y++)
                  if (r <= this.options.ticks_positions[y]) {
                    f = this.options.ticks[y - 1], b = this.options.ticks_positions[y - 1], g = this.options.ticks[y], _ = this.options.ticks_positions[y];
                    break;
                  }
                var T = (r - b) / (_ - b);
                o = f + T * (g - f), u = !1;
              }
              var C = u ? this.options.min : 0, E = C + Math.round(o / this.options.step) * this.options.step;
              return v.linear.getValue(E, this.options);
            },
            toPercentage: function(r) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var o, u, f, g = 0, b = 0; b < this.options.ticks.length; b++)
                  if (r <= this.options.ticks[b]) {
                    o = b > 0 ? this.options.ticks[b - 1] : 0, f = b > 0 ? this.options.ticks_positions[b - 1] : 0, u = this.options.ticks[b], g = this.options.ticks_positions[b];
                    break;
                  }
                if (b > 0) {
                  var _ = (r - o) / (u - o);
                  return f + _ * (g - f);
                }
              }
              return 100 * (r - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(r) {
              var o = 1 - this.options.min, u = Math.log(this.options.min + o), f = Math.log(this.options.max + o), g = Math.exp(u + (f - u) * r / 100) - o;
              return Math.round(g) === f ? f : (g = this.options.min + Math.round((g - this.options.min) / this.options.step) * this.options.step, v.linear.getValue(g, this.options));
            },
            toPercentage: function(r) {
              if (this.options.max === this.options.min)
                return 0;
              var o = 1 - this.options.min, u = Math.log(this.options.max + o), f = Math.log(this.options.min + o), g = Math.log(r + o);
              return 100 * (g - f) / (u - f);
            }
          }
        };
        h = function(r, o) {
          return k.call(this, r, o), this;
        };
        function k(c, r) {
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
          for (var o = Object.keys(this.defaultOptions), u = r.hasOwnProperty("min"), f = r.hasOwnProperty("max"), g = 0; g < o.length; g++) {
            var b = o[g], _ = r[b];
            _ = typeof _ < "u" ? _ : T(this.element, b), _ = _ !== null ? _ : this.defaultOptions[b], this.options || (this.options = {}), this.options[b] = _;
          }
          if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), this.options.rtl === "auto") {
            var y = window.getComputedStyle(this.element);
            y != null ? this.options.rtl = y.direction === "rtl" : this.options.rtl = this.element.style.direction === "rtl";
          }
          this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom") ? this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right" : this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right") && (this.options.tooltip_position = "top");
          function T(N, he) {
            var ce = "data-slider-" + he.replace(/_/g, "-"), J = N.getAttribute(ce);
            try {
              return JSON.parse(J);
            } catch {
              return J;
            }
          }
          var C = this.element.style.width, E = !1, w = this.element.parentNode, x, P, D, A, R;
          if (this.sliderElem)
            E = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var B = document.createElement("div");
            B.className = "slider-track", P = document.createElement("div"), P.className = "slider-track-low", x = document.createElement("div"), x.className = "slider-selection", D = document.createElement("div"), D.className = "slider-track-high", A = document.createElement("div"), A.className = "slider-handle min-slider-handle", A.setAttribute("role", "slider"), A.setAttribute("aria-valuemin", this.options.min), A.setAttribute("aria-valuemax", this.options.max), R = document.createElement("div"), R.className = "slider-handle max-slider-handle", R.setAttribute("role", "slider"), R.setAttribute("aria-valuemin", this.options.min), R.setAttribute("aria-valuemax", this.options.max), B.appendChild(P), B.appendChild(x), B.appendChild(D), this.rangeHighlightElements = [];
            var U = this.options.rangeHighlights;
            if (Array.isArray(U) && U.length > 0)
              for (var ie = 0; ie < U.length; ie++) {
                var W = document.createElement("div"), ke = U[ie].class || "";
                W.className = "slider-rangeHighlight slider-selection " + ke, this.rangeHighlightElements.push(W), B.appendChild(W);
              }
            var be = Array.isArray(this.options.labelledby);
            if (be && this.options.labelledby[0] && A.setAttribute("aria-labelledby", this.options.labelledby[0]), be && this.options.labelledby[1] && R.setAttribute("aria-labelledby", this.options.labelledby[1]), !be && this.options.labelledby && (A.setAttribute("aria-labelledby", this.options.labelledby), R.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", g = 0; g < this.options.ticks.length; g++) {
                var K = document.createElement("div");
                if (K.className = "slider-tick", this.options.ticks_tooltip) {
                  var Qe = this._addTickListener(), At = Qe.addMouseEnter(this, K, g), Rt = Qe.addMouseLeave(this, K);
                  this.ticksCallbackMap[g] = {
                    mouseEnter: At,
                    mouseLeave: Rt
                  };
                }
                this.ticks.push(K), this.ticksContainer.appendChild(K);
              }
              x.className += " tick-slider-selection";
            }
            if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
              for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", g = 0; g < this.options.ticks_labels.length; g++) {
                var ne = document.createElement("div"), Nt = this.options.ticks_positions.length === 0, Mt = this.options.reversed && Nt ? this.options.ticks_labels.length - (g + 1) : g;
                ne.className = "slider-tick-label", ne.innerHTML = this.options.ticks_labels[Mt], this.tickLabels.push(ne), this.tickLabelContainer.appendChild(ne);
              }
            var _e = function(he) {
              var ce = document.createElement("div");
              ce.className = "arrow";
              var J = document.createElement("div");
              J.className = "tooltip-inner", he.appendChild(ce), he.appendChild(J);
            }, re = document.createElement("div");
            re.className = "tooltip tooltip-main", re.setAttribute("role", "presentation"), _e(re);
            var ae = document.createElement("div");
            ae.className = "tooltip tooltip-min", ae.setAttribute("role", "presentation"), _e(ae);
            var oe = document.createElement("div");
            oe.className = "tooltip tooltip-max", oe.setAttribute("role", "presentation"), _e(oe), this.sliderElem.appendChild(B), this.sliderElem.appendChild(re), this.sliderElem.appendChild(ae), this.sliderElem.appendChild(oe), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(A), this.sliderElem.appendChild(R), w.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (l && (this.$element = l(this.element), this.$sliderElem = l(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), v[this.options.scale] && (this.options.scale = v[this.options.scale]), E === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(N) {
            this._removeProperty(this.trackLow, N), this._removeProperty(this.trackSelection, N), this._removeProperty(this.trackHigh, N);
          }, this), [this.handle1, this.handle2].forEach(function(N) {
            this._removeProperty(N, "left"), this._removeProperty(N, "right"), this._removeProperty(N, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(N) {
            this._removeProperty(N, "bs-tooltip-left"), this._removeProperty(N, "bs-tooltip-right"), this._removeProperty(N, "bs-tooltip-top"), this._removeClass(N, "bs-tooltip-right"), this._removeClass(N, "bs-tooltip-left"), this._removeClass(N, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = C, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (f || (this.options.max = Math.max.apply(Math, this.options.ticks)), u || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = P || this.trackLow, this.trackSelection = x || this.trackSelection, this.trackHigh = D || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = A || this.handle1, this.handle2 = R || this.handle2, E === !0)
            for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), g = 0; g < this.ticks.length; g++)
              this._removeClass(this.ticks[g], "round triangle hide");
          var zt = ["round", "triangle", "custom"], It = zt.indexOf(this.options.handle) !== -1;
          if (It)
            for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), g = 0; g < this.ticks.length; g++)
              this._addClass(this.ticks[g], this.options.handle);
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
        h.prototype = {
          _init: function() {
          },
          // NOTE: Must exist to support bridget
          constructor: h,
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
          setValue: function(r, o, u) {
            r || (r = 0);
            var f = this.getValue();
            this._state.value = this._validateInputValue(r);
            var g = this._applyPrecision.bind(this);
            this.options.range ? (this._state.value[0] = g(this._state.value[0]), this._state.value[1] = g(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = g(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this.options.selection === "after" ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
            var b = this.options.range ? this._state.value : this._state.value[0];
            this._setDataVal(b), o === !0 && this._trigger("slide", b);
            var _ = !1;
            return Array.isArray(b) ? _ = f[0] !== b[0] || f[1] !== b[1] : _ = f !== b, _ && u === !0 && this._trigger("change", {
              oldValue: f,
              newValue: b
            }), this;
          },
          destroy: function() {
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), l && (this._unbindJQueryEventHandlers(), p === i && this.$element.removeData(p), this.$element.removeData(a));
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
          on: function(r, o) {
            return this._bindNonQueryEventHandler(r, o), this;
          },
          off: function(r, o) {
            l ? (this.$element.off(r, o), this.$sliderElem.off(r, o)) : this._unbindNonQueryEventHandler(r, o);
          },
          getAttribute: function(r) {
            return r ? this.options[r] : this.options;
          },
          setAttribute: function(r, o) {
            return this.options[r] = o, this;
          },
          refresh: function(r) {
            var o = this.getValue();
            return this._removeSliderEventHandlers(), k.call(this, this.element, this.options), r && r.useCurrentValue === !0 && this.setValue(o), l && (p === i ? (l.data(this.element, i, this), l.data(this.element, a, this)) : l.data(this.element, a, this)), this;
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
          _removeTooltipListener: function(r, o) {
            this.handle1.removeEventListener(r, o, !1), this.handle2.removeEventListener(r, o, !1);
          },
          _removeSliderEventHandlers: function() {
            if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
              for (var r = this.ticksContainer.getElementsByClassName("slider-tick"), o = 0; o < r.length; o++)
                r[o].removeEventListener("mouseenter", this.ticksCallbackMap[o].mouseEnter, !1), r[o].removeEventListener("mouseleave", this.ticksCallbackMap[o].mouseLeave, !1);
              this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1));
            }
            this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1)), window.removeEventListener("resize", this.resize, !1);
          },
          _bindNonQueryEventHandler: function(r, o) {
            this.eventToCallbackMap[r] === void 0 && (this.eventToCallbackMap[r] = []), this.eventToCallbackMap[r].push(o);
          },
          _unbindNonQueryEventHandler: function(r, o) {
            var u = this.eventToCallbackMap[r];
            if (u !== void 0) {
              for (var f = 0; f < u.length; f++)
                if (u[f] === o) {
                  u.splice(f, 1);
                  break;
                }
            }
          },
          _cleanUpEventCallbacksMap: function() {
            for (var r = Object.keys(this.eventToCallbackMap), o = 0; o < r.length; o++) {
              var u = r[o];
              delete this.eventToCallbackMap[u];
            }
          },
          _showTooltip: function() {
            this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), this.tooltip.style.display = "none"), this._state.over = !0;
          },
          _hideTooltip: function() {
            this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), this._removeClass(this.tooltip_max, "show")), this._state.over = !1;
          },
          _setToolTipOnMouseOver: function(r) {
            var o = this, u = this.options.formatter(r ? r.value[0] : this._state.value[0]), f = r ? g(r, this.options.reversed) : g(this._state, this.options.reversed);
            this._setText(this.tooltipInner, u), this.tooltip.style[this.stylePos] = f[0] + "%";
            function g(b, _) {
              return _ ? [100 - b.percentage[0], o.options.range ? 100 - b.percentage[1] : b.percentage[1]] : [b.percentage[0], b.percentage[1]];
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
              addMouseEnter: function(o, u, f) {
                var g = function() {
                  var _ = o._copyState(), y = u === o.handle1 ? _.value[0] : _.value[1], T = void 0;
                  f !== void 0 ? (y = o.options.ticks[f], T = o.options.ticks_positions.length > 0 && o.options.ticks_positions[f] || o._toPercentage(o.options.ticks[f])) : T = o._toPercentage(y), _.value[0] = y, _.percentage[0] = T, o._setToolTipOnMouseOver(_), o._showTooltip();
                };
                return u.addEventListener("mouseenter", g, !1), g;
              },
              addMouseLeave: function(o, u) {
                var f = function() {
                  o._hideTooltip();
                };
                return u.addEventListener("mouseleave", f, !1), f;
              }
            };
          },
          _layout: function() {
            var r, o;
            if (this.options.reversed ? r = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : r = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = r[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), o = this.options.formatter(this._state.value[0]), isNaN(o) ? this.handle1.setAttribute("aria-valuetext", o) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = r[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), o = this.options.formatter(this._state.value[1]), isNaN(o) ? this.handle2.setAttribute("aria-valuetext", o) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
              for (var u = 0; u < this.options.rangeHighlights.length; u++) {
                var f = this._toPercentage(this.options.rangeHighlights[u].start), g = this._toPercentage(this.options.rangeHighlights[u].end);
                if (this.options.reversed) {
                  var b = 100 - g;
                  g = 100 - f, f = b;
                }
                var _ = this._createHighlightRange(f, g);
                _ ? this.options.orientation === "vertical" ? (this.rangeHighlightElements[u].style.top = _.start + "%", this.rangeHighlightElements[u].style.height = _.size + "%") : (this.options.rtl ? this.rangeHighlightElements[u].style.right = _.start + "%" : this.rangeHighlightElements[u].style.left = _.start + "%", this.rangeHighlightElements[u].style.width = _.size + "%") : this.rangeHighlightElements[u].style.display = "none";
              }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              var y = this.options.orientation === "vertical" ? "height" : "width", T;
              this.options.orientation === "vertical" ? T = "marginTop" : this.options.rtl ? T = "marginRight" : T = "marginLeft";
              var C = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var E = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[T] = -C / 2 + "px"), E = this.tickLabelContainer.offsetHeight;
                else
                  for (w = 0; w < this.tickLabelContainer.childNodes.length; w++)
                    this.tickLabelContainer.childNodes[w].offsetHeight > E && (E = this.tickLabelContainer.childNodes[w].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = E + "px");
              }
              for (var w = 0; w < this.options.ticks.length; w++) {
                var x = this.options.ticks_positions[w] || this._toPercentage(this.options.ticks[w]);
                this.options.reversed && (x = 100 - x), this.ticks[w].style[this.stylePos] = x + "%", this._removeClass(this.ticks[w], "in-selection"), this.options.range ? x >= r[0] && x <= r[1] && this._addClass(this.ticks[w], "in-selection") : this.options.selection === "after" && x >= r[0] ? this._addClass(this.ticks[w], "in-selection") : this.options.selection === "before" && x <= r[0] && this._addClass(this.ticks[w], "in-selection"), this.tickLabels[w] && (this.tickLabels[w].style[y] = C + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[w] !== void 0 ? (this.tickLabels[w].style.position = "absolute", this.tickLabels[w].style[this.stylePos] = x + "%", this.tickLabels[w].style[T] = -C / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[w].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[w].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[T] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[w], "label-in-selection label-is-selection"), this.options.range ? x >= r[0] && x <= r[1] && (this._addClass(this.tickLabels[w], "label-in-selection"), (x === r[0] || r[1]) && this._addClass(this.tickLabels[w], "label-is-selection")) : (this.options.selection === "after" && x >= r[0] ? this._addClass(this.tickLabels[w], "label-in-selection") : this.options.selection === "before" && x <= r[0] && this._addClass(this.tickLabels[w], "label-in-selection"), x === r[0] && this._addClass(this.tickLabels[w], "label-is-selection")));
              }
            }
            var P;
            if (this.options.range) {
              P = this.options.formatter(this._state.value), this._setText(this.tooltipInner, P), this.tooltip.style[this.stylePos] = (r[1] + r[0]) / 2 + "%";
              var D = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, D);
              var A = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, A), this.tooltip_min.style[this.stylePos] = r[0] + "%", this.tooltip_max.style[this.stylePos] = r[1] + "%";
            } else
              P = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, P), this.tooltip.style[this.stylePos] = r[0] + "%";
            if (this.options.orientation === "vertical")
              this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(r[0], r[1]) + "%", this.trackSelection.style.top = Math.min(r[0], r[1]) + "%", this.trackSelection.style.height = Math.abs(r[0] - r[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(r[0], r[1]) - Math.abs(r[0] - r[1]) + "%";
            else {
              this.stylePos === "right" ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(r[0], r[1]) + "%", this.stylePos === "right" ? this.trackSelection.style.right = Math.min(r[0], r[1]) + "%" : this.trackSelection.style.left = Math.min(r[0], r[1]) + "%", this.trackSelection.style.width = Math.abs(r[0] - r[1]) + "%", this.stylePos === "right" ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(r[0], r[1]) - Math.abs(r[0] - r[1]) + "%";
              var R = this.tooltip_min.getBoundingClientRect(), B = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? R.right > B.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : R.right > B.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
            }
          },
          _createHighlightRange: function(r, o) {
            return this._isHighlightRange(r, o) ? r > o ? { start: o, size: r - o } : { start: r, size: o - r } : null;
          },
          _isHighlightRange: function(r, o) {
            return 0 <= r && r <= 100 && 0 <= o && o <= 100;
          },
          _resize: function(r) {
            this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout();
          },
          _removeProperty: function(r, o) {
            r.style.removeProperty ? r.style.removeProperty(o) : r.style.removeAttribute(o);
          },
          _mousedown: function(r) {
            if (!this._state.enabled)
              return !1;
            r.preventDefault && r.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
            var o = this._getPercentage(r);
            if (this.options.range) {
              var u = Math.abs(this._state.percentage[0] - o), f = Math.abs(this._state.percentage[1] - o);
              this._state.dragged = u < f ? 0 : 1, this._adjustPercentageForRangeSliders(o);
            } else
              this._state.dragged = 0;
            this._state.percentage[this._state.dragged] = o, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
            var g = this._calculateValue();
            return this._trigger("slideStart", g), this.setValue(g, !1, !0), r.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
          },
          _touchstart: function(r) {
            this._mousedown(r);
          },
          _triggerFocusOnHandle: function(r) {
            r === 0 && this.handle1.focus(), r === 1 && this.handle2.focus();
          },
          _keydown: function(r, o) {
            if (!this._state.enabled)
              return !1;
            var u;
            switch (o.keyCode) {
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
                var f = this.options.orientation === "horizontal", g = this.options.orientation === "vertical", b = this.options.rtl, _ = this.options.reversed;
                f ? b ? _ || (u = -u) : _ && (u = -u) : g && (_ || (u = -u));
              }
              var y;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var T = void 0;
                T = this.options.ticks.indexOf(this._state.value[r]), T === -1 && (T = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), T += u, T = Math.max(0, Math.min(this.options.ticks.length - 1, T)), y = this.options.ticks[T];
              } else
                y = this._state.value[r] + u * this.options.step;
              var C = this._toPercentage(y);
              if (this._state.keyCtrl = r, this.options.range) {
                this._adjustPercentageForRangeSliders(C);
                var E = this._state.keyCtrl ? this._state.value[0] : y, w = this._state.keyCtrl ? y : this._state.value[1];
                y = [Math.max(this.options.min, Math.min(this.options.max, E)), Math.max(this.options.min, Math.min(this.options.max, w))];
              } else
                y = Math.max(this.options.min, Math.min(this.options.max, y));
              return this._trigger("slideStart", y), this.setValue(y, !0, !0), this._trigger("slideStop", y), this._pauseEvent(o), delete this._state.keyCtrl, !1;
            }
          },
          _pauseEvent: function(r) {
            r.stopPropagation && r.stopPropagation(), r.preventDefault && r.preventDefault(), r.cancelBubble = !0, r.returnValue = !1;
          },
          _mousemove: function(r) {
            if (!this._state.enabled)
              return !1;
            var o = this._getPercentage(r);
            this._adjustPercentageForRangeSliders(o), this._state.percentage[this._state.dragged] = o;
            var u = this._calculateValue(!0);
            return this.setValue(u, !0, !0), !1;
          },
          _touchmove: function(r) {
            r.changedTouches !== void 0 && r.preventDefault && r.preventDefault();
          },
          _adjustPercentageForRangeSliders: function(r) {
            if (this.options.range) {
              var o = this._getNumDigitsAfterDecimalPlace(r);
              o = o ? o - 1 : 0;
              var u = this._applyToFixedAndParseFloat(r, o);
              this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], o) < u ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], o) > u ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < r ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > r && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
            }
          },
          _mouseup: function(r) {
            if (!this._state.enabled)
              return !1;
            var o = this._getPercentage(r);
            this._adjustPercentageForRangeSliders(o), this._state.percentage[this._state.dragged] = o, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
            var u = this._calculateValue(!0);
            return this.setValue(u, !1, !0), this._trigger("slideStop", u), this._state.dragged = null, !1;
          },
          _setValues: function(r, o) {
            var u = r === 0 ? 0 : 100;
            this._state.percentage[r] !== u && (o.data[r] = this._toValue(this._state.percentage[r]), o.data[r] = this._applyPrecision(o.data[r]));
          },
          _calculateValue: function(r) {
            var o = {};
            return this.options.range ? (o.data = [this.options.min, this.options.max], this._setValues(0, o), this._setValues(1, o), r && (o.data[0] = this._snapToClosestTick(o.data[0]), o.data[1] = this._snapToClosestTick(o.data[1]))) : (o.data = this._toValue(this._state.percentage[0]), o.data = parseFloat(o.data), o.data = this._applyPrecision(o.data), r && (o.data = this._snapToClosestTick(o.data))), o.data;
          },
          _snapToClosestTick: function(r) {
            for (var o = [r, 1 / 0], u = 0; u < this.options.ticks.length; u++) {
              var f = Math.abs(this.options.ticks[u] - r);
              f <= o[1] && (o = [this.options.ticks[u], f]);
            }
            return o[1] <= this.options.ticks_snap_bounds ? o[0] : r;
          },
          _applyPrecision: function(r) {
            var o = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
            return this._applyToFixedAndParseFloat(r, o);
          },
          _getNumDigitsAfterDecimalPlace: function(r) {
            var o = ("" + r).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return o ? Math.max(0, (o[1] ? o[1].length : 0) - (o[2] ? +o[2] : 0)) : 0;
          },
          _applyToFixedAndParseFloat: function(r, o) {
            var u = r.toFixed(o);
            return parseFloat(u);
          },
          /*
          	Credits to Mike Samuel for the following method!
          	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
          */
          _getPercentage: function(r) {
            this.touchCapable && (r.type === "touchstart" || r.type === "touchmove" || r.type === "touchend") && (r = r.changedTouches[0]);
            var o = r[this.mousePos], u = this._state.offset[this.stylePos], f = o - u;
            this.stylePos === "right" && (f = -f);
            var g = f / this._state.size * 100;
            return g = Math.round(g / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (g = 100 - g), Math.max(0, Math.min(100, g));
          },
          _validateInputValue: function(r) {
            if (isNaN(+r)) {
              if (Array.isArray(r))
                return this._validateArray(r), r;
              throw new Error(d.formatInvalidInputErrorMsg(r));
            } else return +r;
          },
          _validateArray: function(r) {
            for (var o = 0; o < r.length; o++) {
              var u = r[o];
              if (typeof u != "number")
                throw new Error(d.formatInvalidInputErrorMsg(u));
            }
          },
          _setDataVal: function(r) {
            this.element.setAttribute("data-value", r), this.element.setAttribute("value", r), this.element.value = r;
          },
          _trigger: function(r, o) {
            o = o || o === 0 ? o : void 0;
            var u = this.eventToCallbackMap[r];
            if (u && u.length)
              for (var f = 0; f < u.length; f++) {
                var g = u[f];
                g(o);
              }
            l && this._triggerJQueryEvent(r, o);
          },
          _triggerJQueryEvent: function(r, o) {
            var u = {
              type: r,
              value: o
            };
            this.$element.trigger(u), this.$sliderElem.trigger(u);
          },
          _unbindJQueryEventHandlers: function() {
            this.$element.off(), this.$sliderElem.off();
          },
          _setText: function(r, o) {
            typeof r.textContent < "u" ? r.textContent = o : typeof r.innerText < "u" && (r.innerText = o);
          },
          _removeClass: function(r, o) {
            for (var u = o.split(" "), f = r.className, g = 0; g < u.length; g++) {
              var b = u[g], _ = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)");
              f = f.replace(_, " ");
            }
            r.className = f.trim();
          },
          _addClass: function(r, o) {
            for (var u = o.split(" "), f = r.className, g = 0; g < u.length; g++) {
              var b = u[g], _ = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)"), y = _.test(f);
              y || (f += " " + b);
            }
            r.className = f.trim();
          },
          _offsetLeft: function(r) {
            return r.getBoundingClientRect().left;
          },
          _offsetRight: function(r) {
            return r.getBoundingClientRect().right;
          },
          _offsetTop: function(r) {
            for (var o = r.offsetTop; (r = r.offsetParent) && !isNaN(r.offsetTop); )
              o += r.offsetTop, r.tagName !== "BODY" && (o -= r.scrollTop);
            return o;
          },
          _offset: function(r) {
            return {
              left: this._offsetLeft(r),
              right: this._offsetRight(r),
              top: this._offsetTop(r)
            };
          },
          _css: function(r, o, u) {
            if (l)
              l.style(r, o, u);
            else {
              var f = o.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(g, b) {
                return b.toUpperCase();
              });
              r.style[f] = u;
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
              var o;
              this.options.tooltip_position ? o = this.options.tooltip_position : this.options.rtl ? o = "left" : o = "right";
              var u = o === "left" ? "right" : "left";
              r.forEach((function(f) {
                this._addClass(f, "bs-tooltip-" + o), f.style[u] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? r.forEach((function(f) {
              this._addClass(f, "bs-tooltip-bottom"), f.style.top = "22px";
            }).bind(this)) : r.forEach((function(f) {
              this._addClass(f, "bs-tooltip-top"), f.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(r) {
            for (var o = Math.abs(r - this.options.ticks[0]), u = 0, f = 0; f < this.options.ticks.length; ++f) {
              var g = Math.abs(r - this.options.ticks[f]);
              g < o && (o = g, u = f);
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
        }, l && l.fn && (l.fn.slider ? (s && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), p = a) : (l.bridget(i, h), p = i), l.bridget(a, h), l(function() {
          l("input[data-provide=slider]")[p]();
        }));
      })(n), h;
    });
  })(Pe)), Pe.exports;
}
var ti = ei();
const si = /* @__PURE__ */ De(ti), ii = (t, e) => {
  const s = {
    ...t,
    tooltip: t.tooltip || "show"
  };
  let {
    change: n,
    onChange: i,
    value: a
  } = t;
  const h = O(), [l, p] = I();
  return n = n ?? i, M(() => {
    if (h.current) {
      const d = new si(h.current, s);
      return p(d), () => d.destroy();
    }
  }, [h.current]), M(() => {
    e && l && (e.current = {
      mySlider: l
    });
  }, [e, l]), M(() => {
    if (l && n) {
      l.on("change", n);
      for (let d in t)
        l.setAttribute(d, t[d]);
      return () => {
        l.off("change", n);
      };
    }
  }, [t, l]), M(() => {
    t.enabled ? l?.enable() : l?.disable();
  }, [t.enabled]), M(() => {
    l && a !== void 0 && l.setValue(a);
  }, [l, a]), /* @__PURE__ */ m.createElement("div", { ref: h });
}, Di = m.forwardRef(ii);
var Ae = { exports: {} }, Re, pt;
function ni() {
  if (pt) return Re;
  pt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Re = t, Re;
}
var Ne, dt;
function ri() {
  if (dt) return Ne;
  dt = 1;
  var t = /* @__PURE__ */ ni();
  function e() {
  }
  function s() {
  }
  return s.resetWarningCache = e, Ne = function() {
    function n(h, l, p, d, v, k) {
      if (k !== t) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: s,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Ne;
}
var ft;
function ai() {
  return ft || (ft = 1, Ae.exports = /* @__PURE__ */ ri()()), Ae.exports;
}
var oi = /* @__PURE__ */ ai();
const V = /* @__PURE__ */ De(oi);
function li({
  initialPx: t,
  // preferred: initial width of left pane in pixels
  initialPercent: e = 50,
  // fallback if initialPx not provided
  minA: s = 120,
  minB: n = 120,
  maxA: i,
  // optional px limit for left pane; otherwise auto from container - minB - gutter
  gutter: a = 10,
  style: h,
  children: l,
  onChange: p
  // called with { px, percent }
}) {
  const d = O(null), v = O(!1), [k, c] = I(0), [r, o] = m.Children.toArray(l), u = (C, E, w) => Math.max(E, Math.min(w, C)), f = X(() => {
    const C = d.current;
    if (!C) return { total: 0, min: 0, max: 0 };
    const E = C.clientWidth, w = Math.max(0, E - a - n), x = typeof i == "number" ? Math.min(i, w) : w, P = Math.min(s, x);
    return { total: E, min: P, max: x };
  }, [a, s, n, i]);
  Ht(() => {
    if (!d.current) return;
    const { total: E, min: w, max: x } = f();
    let P;
    typeof t == "number" && Number.isFinite(t) ? P = t : P = Math.round(u(e, 0, 100) / 100 * (E - a)), c(u(P, w, x));
  }, [f, t, e, a]), M(() => {
    const C = d.current;
    if (!C) return;
    const E = () => {
      const { total: x, min: P, max: D } = f();
      if (c((A) => u(A, P, D)), p) {
        const A = u(k, P, D), R = x > 0 ? A / (x - a) * 100 : 0;
        p({ px: A, percent: R });
      }
    };
    let w;
    return "ResizeObserver" in window ? (w = new ResizeObserver(E), w.observe(C)) : window.addEventListener("resize", E), () => {
      w ? w.disconnect() : window.removeEventListener("resize", E);
    };
  }, [f, a, p, k]);
  const g = X((C) => {
    const E = d.current;
    if (!E) return;
    v.current = !0, C.currentTarget.setPointerCapture?.(C.pointerId);
    const w = (P) => {
      if (!v.current) return;
      const D = E.getBoundingClientRect(), A = P.clientX - D.left, { total: R, min: B, max: U } = f(), W = u(A, B, U);
      if (c(W), p) {
        const ke = R > 0 ? W / (R - a) * 100 : 0;
        p({ px: W, percent: Math.round(ke * 100) / 100 });
      }
    }, x = () => {
      v.current = !1;
      try {
        C.currentTarget.releasePointerCapture?.(C.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", x);
    };
    window.addEventListener("pointermove", w), window.addEventListener("pointerup", x), window.addEventListener("pointercancel", x);
  }, [f, a, p]);
  X(() => {
    const { total: C, min: E, max: w } = f();
    let x;
    typeof t == "number" && Number.isFinite(t) ? x = t : x = Math.round(u(e, 0, 100) / 100 * (C - a)), c(u(x, E, w));
  }, [f, t, e, a]);
  const b = gt(
    () => ({
      display: "grid",
      gridTemplateColumns: `${k}px ${a}px 1fr`,
      gridTemplateRows: "1fr",
      minWidth: 0
      // prevent overflow due to intrinsic min-content sizes
    }),
    [k, a]
  ), { min: _, max: y, total: T } = f();
  return /* @__PURE__ */ m.createElement("div", { ref: d, className: "splitpane", style: { ...b, ...h || {} } }, /* @__PURE__ */ m.createElement("div", { className: "pane", style: { minWidth: 0 } }, r), /* @__PURE__ */ m.createElement(
    "div",
    {
      role: "separator",
      "aria-orientation": "vertical",
      "aria-valuemin": _,
      "aria-valuemax": y,
      "aria-valuenow": k,
      tabIndex: 0,
      onPointerDown: g,
      className: "separator",
      style: { width: a }
    },
    /* @__PURE__ */ m.createElement("div", { className: "separator-grip" }),
    /* @__PURE__ */ m.createElement("div", { className: "separator-hit" })
  ), /* @__PURE__ */ m.createElement("div", { className: "pane", style: { minWidth: 0 } }, o));
}
li.propTypes = {
  initialPx: V.number,
  initialPercent: V.number,
  // used only if initialPx is not provided
  minA: V.number,
  minB: V.number,
  maxA: V.number,
  gutter: V.number,
  style: V.object,
  children: V.node.isRequired,
  onChange: V.func
};
const Bi = (t) => {
  const {
    className: e,
    range: s,
    itemSize: n,
    selectionRange: i,
    itemRenderer: a,
    keyBindings: h = {},
    indicators: l = [],
    ...p
  } = t, d = t.style || {}, {
    callbacks: v,
    isSelecting: k,
    onMouseUp: c
  } = ns(i), r = X((f) => a(f, v(f), {
    selectionRange: i,
    isSelecting: k
  }), [s, k, a]), o = {
    width: "5000px",
    position: "absolute",
    height: "5000px",
    left: "-2500px",
    zIndex: 1e3
  };
  function u(f) {
    const {
      range: g,
      caption: b,
      name: _
    } = f;
    let y = g.count, T = g.first;
    return /* @__PURE__ */ m.createElement(
      "div",
      {
        onClick: (C) => {
          C.stopPropagation(), s.jumpToFirst(T);
        },
        className: `indicator indicator-${_}`,
        style: {
          position: "absolute",
          height: `calc(max(var(--indicator-min-height), ${y / s.max * 100}%))`,
          top: `${T / s.max * 100}%`
        }
      }
    );
  }
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      className: $("dynamic-list", e),
      style: {
        position: "relative"
      }
    },
    /* @__PURE__ */ m.createElement(
      ct,
      {
        style: {
          ...o,
          top: "-5000px"
        },
        className: "auto-scroll auto-scroll-up",
        onMouseUp: c,
        enabled: k,
        onEvent: () => {
          s.moveUp(), s.first < i.first ? i.first = s.first : s.first < i.last && (i.last = s.first);
        }
      }
    ),
    /* @__PURE__ */ m.createElement(
      us,
      {
        itemSize: n,
        itemRenderer: r,
        range: s,
        ...p,
        style: {
          ...d
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
      l.filter((f) => f.enabled).map(u)
    ),
    /* @__PURE__ */ m.createElement(
      ct,
      {
        style: {
          ...o,
          bottom: "-5000px"
        },
        className: "auto-scroll auto-scroll-down",
        onMouseUp: c,
        enabled: k,
        onEvent: () => {
          s.moveDown(), s.last > i.last ? i.last = s.last : s.last > i.first && (i.first = s.last);
        }
      }
    )
  );
};
export {
  hs as Collapsible,
  Ei as Disable,
  Ci as DotNotification,
  cs as Drawer,
  Ti as DrawerContainer,
  $i as Dropdown,
  Bi as DynamicList,
  us as GargantuaList,
  ct as IntervalOnHover,
  Li as MessageModal,
  Si as ModalOkCancel,
  ht as PinButtons,
  Ks as Pinnable,
  Pi as Progress,
  Di as ReactSlider,
  Ai as RenderInWindow,
  Ri as Slider,
  li as SplitPaneH,
  Ni as TableContextMenu,
  Mi as TextField,
  Ii as Widget,
  zi as WidgetGroup
};
