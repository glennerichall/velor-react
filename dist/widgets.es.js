import g, { forwardRef as mt, Children as Mt, useRef as V, useState as B, useEffect as D, useCallback as ee, createPortal as zt, useMemo as gt, useLayoutEffect as It } from "react";
import "velor-utils/utils/Range.mjs";
import { noOp as oe } from "velor-utils/utils/functional.mjs";
import { u as Dt, a as Ht, b as Bt, c as Ot } from "./hooks-CRQdIEpK.js";
import { R as Fi } from "./hooks-CRQdIEpK.js";
import { useResizeDetector as He } from "react-resize-detector";
import { waitForStableBoundingRect as Vt, recursiveMap as Ft } from "./utils.es.js";
import { Spinner as qt, Alert as Ue, ProgressBar as Gt, Form as Xe, FormControl as Zt, Dropdown as Ke, DropdownMenu as jt, DropdownItem as Wt } from "react-bootstrap";
import { ArrowBarLeft as Qt, ArrowBarRight as Ut, InfoCircleFill as Je, ExclamationTriangleFill as Xt, ExclamationSquareFill as Kt, ExclamationDiamondFill as Jt, Pin as Yt, PinAngle as es, XLg as ts, PlusCircleFill as Ye, DashCircleFill as et } from "react-bootstrap-icons";
import U from "react-bootstrap/Button";
import q from "react-bootstrap/Modal";
import "react-range-slider-input/dist/style.css";
import ss from "react-range-slider-input";
import tt from "react-bootstrap/ButtonGroup";
import { useContextMenu as is, Menu as ns, Item as st } from "react-contexify";
function Be(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ce = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var it;
function rs() {
  return it || (it = 1, (function(t) {
    (function() {
      var e = {}.hasOwnProperty;
      function s() {
        for (var o = "", h = 0; h < arguments.length; h++) {
          var l = arguments[h];
          l && (o = i(o, r(l)));
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
        var h = "";
        for (var l in o)
          e.call(o, l) && o[l] && (h = i(h, l));
        return h;
      }
      function i(o, h) {
        return h ? o ? o + " " + h : o + h : o;
      }
      t.exports ? (s.default = s, t.exports = s) : window.classNames = s;
    })();
  })(Ce)), Ce.exports;
}
var os = rs();
const O = /* @__PURE__ */ Be(os), Te = "animating-expand", $e = "animating-collapse", Le = "animating", Se = "collapsed", Ae = "expanded", as = mt((t, e) => {
  const {
    children: s,
    expanded: r,
    onExpand: i = oe,
    onStateChanged: o = oe,
    caption: h,
    className: l,
    style: m = {}
  } = t;
  if (Mt.count(s) === 0) return null;
  const u = V(), k = V(), [b, c] = B(!0), n = () => {
    const _ = k.current.getBoundingClientRect();
    u.current.style.width = _.width + "px", u.current.style.height = _.height + "px";
  }, a = () => {
    u.current.style.width = "1.7em", u.current.style.height = "1.7em";
  }, p = () => {
    u.current.classList.remove(Ae), u.current.classList.add($e, Le), a();
  }, d = () => {
    u.current.classList.remove(Se), u.current.classList.add(Te, Le), n();
  }, v = () => u.current.classList.contains(Te), y = () => u.current.classList.contains($e);
  return D(() => {
    r ? (u.current.classList.add(Ae), n(), i(!0), o(!0)) : (u.current.classList.add(Se), a(), i(!1), o(!1));
    const _ = () => {
      i(!1);
    };
    return c(!1), document.addEventListener("mousedown", _), () => {
      document.removeEventListener("mousedown", _);
    };
  }, []), D(() => {
    b || (r ? d() : p());
  }, [r]), He({
    targetRef: k,
    onResize: (_, w) => {
      u.current.classList.contains("expanded") && Vt(k.current, n);
    }
  }), /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: u,
      onTransitionEnd: (_) => {
        _.propertyName === "width" && (y() && !r ? (u.current.classList.add(Se), o(!1)) : v() && r && (u.current.classList.add(Ae), o(!0)), u.current.classList.remove(
          $e,
          Te,
          Le
        ));
      },
      onMouseDown: (_) => _.stopPropagation(),
      onClick: (_) => {
        _.stopPropagation(), i(!0);
      },
      style: m,
      className: O(
        l,
        "collapsible"
      )
    },
    /* @__PURE__ */ g.createElement("span", { className: "caption", ref: e }, h),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: k,
        className: "content"
      },
      s
    )
  );
}), Ci = (t) => Ft(t.children, (e) => g.cloneElement(e, {
  disabled: e.props.disabled || t.disabled
})), Ti = (t) => {
  const {
    notifications: e,
    variant: s,
    visible: r = !1,
    targetRef: i,
    bordered: o = !1,
    size: h
  } = t, l = V(), m = V(), [u, k] = B(!1);
  function b(c) {
    c.preventDefault(), c.stopPropagation(), u ? (k(!1), l.current.style.width = null, l.current.style.height = null) : (k(!0), l.current.style.width = m.current.scrollWidth + "px", l.current.style.height = m.current.scrollHeight + "px");
  }
  return D(() => {
    const c = (n) => {
      n.stopPropagation(), k(!1), l.current && (l.current.style.width = null, l.current.style.height = null);
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, []), i ? /* @__PURE__ */ g.createElement(
    Anchor,
    {
      anchor: "TOP-RIGHT",
      align: "TOP-LEFT",
      targetRef: i
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: l,
        onClick: b,
        className: O(
          h,
          s,
          "dot-notification",
          "anchored",
          {
            bordered: o,
            hidden: !r,
            expanded: u
          }
        )
      },
      /* @__PURE__ */ g.createElement(
        "div",
        {
          ref: m,
          className: "content"
        },
        e
      )
    )
  ) : t.children ? /* @__PURE__ */ g.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: l,
      onClick: b,
      className: O(
        s,
        h,
        "dot-notification",
        {
          bordered: o,
          hidden: !r,
          expanded: u
        }
      )
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: m,
        className: "content"
      },
      e
    )
  ), t.children) : /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: l,
      onClick: b,
      className: O(
        s,
        h,
        "dot-notification",
        {
          bordered: o,
          hidden: !r,
          expanded: u
        }
      )
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: m,
        className: "content"
      },
      e
    )
  );
}, ls = (t) => {
  const {
    visible: e,
    onClose: s,
    title: r,
    loading: i,
    className: o = "",
    id: h,
    name: l,
    location: m = "right",
    clearChilds: u = !0
  } = t, [k, b] = B(!0), [c, n] = B(e), [a, p] = B(!1);
  D(() => {
    e !== c && (p(!0), b(!1));
    const w = () => {
      e && s(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [e]);
  let d;
  switch (m) {
    case "right":
      d = /* @__PURE__ */ g.createElement(Ut, null);
      break;
    case "left":
      d = /* @__PURE__ */ g.createElement(Qt, null);
      break;
  }
  const v = /* @__PURE__ */ g.createElement(
    U,
    {
      onClick: () => s(!1),
      variant: "light"
    },
    d
  ), y = /* @__PURE__ */ g.createElement(
    qt,
    {
      className: O({ hidden: !i }),
      animation: "border",
      role: "status",
      variant: "secondary"
    }
  );
  let _;
  return r ? _ = /* @__PURE__ */ g.createElement("h5", { className: "title" }, /* @__PURE__ */ g.createElement("span", { className: "content" }, r), /* @__PURE__ */ g.createElement("span", { className: "buttons" }, y, v)) : _ = /* @__PURE__ */ g.createElement("div", { className: "title" }, y, /* @__PURE__ */ g.createElement("span", { className: "buttons" }, v)), /* @__PURE__ */ g.createElement(
    "div",
    {
      id: h,
      onAnimationEnd: (w) => p(e),
      onMouseDown: (w) => {
        w.stopPropagation();
      },
      className: O(
        o,
        `name-${l}`,
        "drawer",
        `${m}-drawer`,
        "animate__animated",
        "animate__faster",
        {
          initial: k,
          "willbe-visible": e,
          "initially-visible": c,
          animate__slideInRight: m === "right" && e && !k,
          animate__slideOutRight: m === "right" && !e && !k,
          animate__slideInLeft: m === "left" && e && !k,
          animate__slideOutLeft: m === "left" && !e && !k
        }
      )
    },
    _,
    a || !u ? t.children : null
  );
}, $i = (t) => {
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
      className: h,
      id: l,
      onClose: m
    } = s.props;
    return /* @__PURE__ */ g.createElement(
      ls,
      {
        id: l,
        className: h,
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
  const e = V(), {
    itemRenderer: s,
    itemSize: r,
    range: i
  } = t;
  if (!i || !i.valid)
    return;
  const [o, h] = B(0);
  D(() => {
    i.count = Math.floor(o / r) - 1;
  }, [i, i.max, o, r]);
  const l = i.max > 0, m = ee((k) => {
    const b = Math.sign(k.deltaY);
    i.moveDown(b);
  }, [i]);
  He({
    targetRef: e,
    onResize: ee(({ height: k }) => {
      h(k);
    }, [])
  });
  const u = [];
  for (let k of i) {
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
        className: "vertical-range",
        onChange: (k) => i.jumpToFirst(k.target.value),
        disabled: !l,
        value: i.first,
        min: 0,
        max: i.max
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
var K = Oe();
function vt(t) {
  K = t;
}
var re = { exec: () => null };
function P(t, e = "") {
  let s = typeof t == "string" ? t : t.source;
  const r = {
    replace: (i, o) => {
      let h = typeof o == "string" ? o : o.source;
      return h = h.replace(I.caret, "$1"), s = s.replace(i, h), r;
    },
    getRegex: () => new RegExp(s, e)
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
}, cs = /^(?:[ \t]*(?:\n|$))+/, us = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ps = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ae = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ds = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ve = /(?:[*+-]|\d{1,9}[.)])/, kt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, bt = P(kt).replace(/bull/g, Ve).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), fs = P(kt).replace(/bull/g, Ve).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Fe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ms = /^[^\n]+/, qe = /(?!\s*\])(?:\\.|[^\[\]\\])+/, gs = P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", qe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), vs = P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ve).getRegex(), _e = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ge = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ks = P(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Ge).replace("tag", _e).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _t = P(Fe).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), bs = P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _t).getRegex(), Ze = {
  blockquote: bs,
  code: us,
  def: gs,
  fences: ps,
  heading: ds,
  hr: ae,
  html: ks,
  lheading: bt,
  list: vs,
  newline: cs,
  paragraph: _t,
  table: re,
  text: ms
}, nt = P(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), _s = {
  ...Ze,
  lheading: fs,
  table: nt,
  paragraph: P(Fe).replace("hr", ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", nt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex()
}, ys = {
  ...Ze,
  html: P(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Ge).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: re,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: P(Fe).replace("hr", ae).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", bt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ws = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, xs = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, yt = /^( {2,}|\\)\n(?!\s*$)/, Es = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ye = /[\p{P}\p{S}]/u, je = /[\s\p{P}\p{S}]/u, wt = /[^\s\p{P}\p{S}]/u, Cs = P(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, je).getRegex(), xt = /(?!~)[\p{P}\p{S}]/u, Ts = /(?!~)[\s\p{P}\p{S}]/u, $s = /(?:[^\s\p{P}\p{S}]|~)/u, Ls = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Et = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ss = P(Et, "u").replace(/punct/g, ye).getRegex(), As = P(Et, "u").replace(/punct/g, xt).getRegex(), Ct = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ps = P(Ct, "gu").replace(/notPunctSpace/g, wt).replace(/punctSpace/g, je).replace(/punct/g, ye).getRegex(), Rs = P(Ct, "gu").replace(/notPunctSpace/g, $s).replace(/punctSpace/g, Ts).replace(/punct/g, xt).getRegex(), Ns = P(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, wt).replace(/punctSpace/g, je).replace(/punct/g, ye).getRegex(), Ms = P(/\\(punct)/, "gu").replace(/punct/g, ye).getRegex(), zs = P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Is = P(Ge).replace("(?:-->|$)", "-->").getRegex(), Ds = P(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", Is).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ve = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Hs = P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ve).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Tt = P(/^!?\[(label)\]\[(ref)\]/).replace("label", ve).replace("ref", qe).getRegex(), $t = P(/^!?\[(ref)\](?:\[\])?/).replace("ref", qe).getRegex(), Bs = P("reflink|nolink(?!\\()", "g").replace("reflink", Tt).replace("nolink", $t).getRegex(), We = {
  _backpedal: re,
  // only used for GFM url
  anyPunctuation: Ms,
  autolink: zs,
  blockSkip: Ls,
  br: yt,
  code: xs,
  del: re,
  emStrongLDelim: Ss,
  emStrongRDelimAst: Ps,
  emStrongRDelimUnd: Ns,
  escape: ws,
  link: Hs,
  nolink: $t,
  punctuation: Cs,
  reflink: Tt,
  reflinkSearch: Bs,
  tag: Ds,
  text: Es,
  url: re
}, Os = {
  ...We,
  link: P(/^!?\[(label)\]\((.*?)\)/).replace("label", ve).getRegex(),
  reflink: P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ve).getRegex()
}, ze = {
  ...We,
  emStrongRDelimAst: Rs,
  emStrongLDelim: As,
  url: P(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Vs = {
  ...ze,
  br: P(yt).replace("{2,}", "*").getRegex(),
  text: P(ze.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, me = {
  normal: Ze,
  gfm: _s,
  pedantic: ys
}, ie = {
  normal: We,
  gfm: ze,
  breaks: Vs,
  pedantic: Os
}, Fs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, rt = (t) => Fs[t];
function F(t, e) {
  if (e) {
    if (I.escapeTest.test(t))
      return t.replace(I.escapeReplace, rt);
  } else if (I.escapeTestNoEncode.test(t))
    return t.replace(I.escapeReplaceNoEncode, rt);
  return t;
}
function ot(t) {
  try {
    t = encodeURI(t).replace(I.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function at(t, e) {
  const s = t.replace(I.findPipe, (o, h, l) => {
    let m = !1, u = h;
    for (; --u >= 0 && l[u] === "\\"; ) m = !m;
    return m ? "|" : " |";
  }), r = s.split(I.splitPipe);
  let i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; ) r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(I.slashPipe, "|");
  return r;
}
function ne(t, e, s) {
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
function lt(t, e, s, r, i) {
  const o = e.href, h = e.title || null, l = t[1].replace(i.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  const m = {
    type: t[0].charAt(0) === "!" ? "image" : "link",
    raw: s,
    href: o,
    title: h,
    text: l,
    tokens: r.inlineTokens(l)
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
    const h = o.match(s.other.beginningSpace);
    if (h === null)
      return o;
    const [l] = h;
    return l.length >= i.length ? o.slice(i.length) : o;
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
        text: this.options.pedantic ? s : ne(s, `
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
        const r = ne(s, "#");
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
        raw: ne(e[0], `
`)
      };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      let s = ne(e[0], `
`).split(`
`), r = "", i = "";
      const o = [];
      for (; s.length > 0; ) {
        let h = !1;
        const l = [];
        let m;
        for (m = 0; m < s.length; m++)
          if (this.rules.other.blockquoteStart.test(s[m]))
            l.push(s[m]), h = !0;
          else if (!h)
            l.push(s[m]);
          else
            break;
        s = s.slice(m);
        const u = l.join(`
`), k = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${u}` : u, i = i ? `${i}
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
`), p = this.blockquote(a);
          o[o.length - 1] = p, r = r.substring(0, r.length - n.raw.length) + p.raw, i = i.substring(0, i.length - n.text.length) + p.text;
          break;
        } else if (c?.type === "list") {
          const n = c, a = n.raw + `
` + s.join(`
`), p = this.list(a);
          o[o.length - 1] = p, r = r.substring(0, r.length - c.raw.length) + p.raw, i = i.substring(0, i.length - n.raw.length) + p.raw, s = a.substring(o.at(-1).raw.length).split(`
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
      let h = !1;
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
          const v = this.rules.other.nextBulletRegex(a), y = this.rules.other.hrRegex(a), _ = this.rules.other.fencesBeginRegex(a), w = this.rules.other.headingBeginRegex(a), L = this.rules.other.htmlBeginRegex(a);
          for (; t; ) {
            const $ = t.split(`
`, 1)[0];
            let E;
            if (c = $, this.options.pedantic ? (c = c.replace(this.rules.other.listReplaceNesting, "  "), E = c) : E = c.replace(this.rules.other.tabCharGlobal, "    "), _.test(c) || w.test(c) || L.test(c) || v.test(c) || y.test(c))
              break;
            if (E.search(this.rules.other.nonSpaceChar) >= a || !c.trim())
              k += `
` + E.slice(a);
            else {
              if (n || b.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || _.test(b) || w.test(b) || y.test(b))
                break;
              k += `
` + c;
            }
            !n && !c.trim() && (n = !0), u += $ + `
`, t = t.substring($.length + 1), b = E.slice(a);
          }
        }
        i.loose || (h ? i.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (h = !0));
        let p = null, d;
        this.options.gfm && (p = this.rules.other.listIsTask.exec(k), p && (d = p[0] !== "[ ] ", k = k.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: u,
          task: !!p,
          checked: d,
          loose: !1,
          text: k,
          tokens: []
        }), i.raw += u;
      }
      const l = i.items.at(-1);
      if (l)
        l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else
        return;
      i.raw = i.raw.trimEnd();
      for (let m = 0; m < i.items.length; m++)
        if (this.lexer.state.top = !1, i.items[m].tokens = this.lexer.blockTokens(i.items[m].text, []), !i.loose) {
          const u = i.items[m].tokens.filter((b) => b.type === "space"), k = u.length > 0 && u.some((b) => this.rules.other.anyLine.test(b.raw));
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
    const s = at(e[1]), r = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === r.length) {
      for (const h of r)
        this.rules.other.tableAlignRight.test(h) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(h) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(h) ? o.align.push("left") : o.align.push(null);
      for (let h = 0; h < s.length; h++)
        o.header.push({
          text: s[h],
          tokens: this.lexer.inline(s[h]),
          header: !0,
          align: o.align[h]
        });
      for (const h of i)
        o.rows.push(at(h, o.header.length).map((l, m) => ({
          text: l,
          tokens: this.lexer.inline(l),
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
        const o = qs(e[2], "()");
        if (o === -2)
          return;
        if (o > -1) {
          const l = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + o;
          e[2] = e[2].substring(0, o), e[0] = e[0].substring(0, l).trim(), e[3] = "";
        }
      }
      let r = e[2], i = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(r);
        o && (r = o[1], i = o[3]);
      } else
        i = e[3] ? e[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), lt(e, {
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
      return lt(s, i, s[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, s = "") {
    let r = this.rules.inline.emStrongLDelim.exec(t);
    if (!r || r[3] && s.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const o = [...r[0]].length - 1;
      let h, l, m = o, u = 0;
      const k = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, e = e.slice(-1 * t.length + o); (r = k.exec(e)) != null; ) {
        if (h = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !h) continue;
        if (l = [...h].length, r[3] || r[4]) {
          m += l;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + l) % 3)) {
          u += l;
          continue;
        }
        if (m -= l, m > 0) continue;
        l = Math.min(l, l + m + u);
        const b = [...r[0]][0].length, c = t.slice(0, o + r.index + b + l);
        if (Math.min(o, l) % 2) {
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
}, j = class Ie {
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
      const r = this.inlineQueue[s];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, s = [], r = !1) {
    for (this.options.pedantic && (e = e.replace(I.tabCharGlobal, "    ").replace(I.spaceLine, "")); e; ) {
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
      let o = e;
      if (this.options.extensions?.startBlock) {
        let h = 1 / 0;
        const l = e.slice(1);
        let m;
        this.options.extensions.startBlock.forEach((u) => {
          m = u.call({ lexer: this }, l), typeof m == "number" && m >= 0 && (h = Math.min(h, m));
        }), h < 1 / 0 && h >= 0 && (o = e.substring(0, h + 1));
      }
      if (this.state.top && (i = this.tokenizer.paragraph(o))) {
        const h = s.at(-1);
        r && h?.type === "paragraph" ? (h.raw += `
` + i.raw, h.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : s.push(i), r = o.length !== e.length, e = e.substring(i.raw.length);
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
    let r = e, i = null;
    if (this.tokens.links) {
      const l = Object.keys(this.tokens.links);
      if (l.length > 0)
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          l.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let o = !1, h = "";
    for (; e; ) {
      o || (h = ""), o = !1;
      let l;
      if (this.options.extensions?.inline?.some((u) => (l = u.call({ lexer: this }, e, s)) ? (e = e.substring(l.raw.length), s.push(l), !0) : !1))
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
        const u = s.at(-1);
        l.type === "text" && u?.type === "text" ? (u.raw += l.raw, u.text += l.text) : s.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(e, r, h)) {
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
      let m = e;
      if (this.options.extensions?.startInline) {
        let u = 1 / 0;
        const k = e.slice(1);
        let b;
        this.options.extensions.startInline.forEach((c) => {
          b = c.call({ lexer: this }, k), typeof b == "number" && b >= 0 && (u = Math.min(u, b));
        }), u < 1 / 0 && u >= 0 && (m = e.substring(0, u + 1));
      }
      if (l = this.tokenizer.inlineText(m)) {
        e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (h = l.raw.slice(-1)), o = !0;
        const u = s.at(-1);
        u?.type === "text" ? (u.raw += l.raw, u.text += l.text) : s.push(l);
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
    this.options = t || K;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: e, escaped: s }) {
    const r = (e || "").match(I.notSpaceStart)?.[0], i = t.replace(I.endingNewline, "") + `
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
    for (let h = 0; h < t.items.length; h++) {
      const l = t.items[h];
      r += this.listitem(l);
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
      for (let h = 0; h < o.length; h++)
        s += this.tablecell(o[h]);
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
    const r = this.parser.parseInline(s), i = ot(t);
    if (i === null)
      return r;
    t = i;
    let o = '<a href="' + t + '"';
    return e && (o += ' title="' + F(e) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: t, title: e, text: s, tokens: r }) {
    r && (s = this.parser.parseInline(r, this.parser.textRenderer));
    const i = ot(t);
    if (i === null)
      return F(s);
    t = i;
    let o = `<img src="${t}" alt="${s}"`;
    return e && (o += ` title="${F(e)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : F(t.text);
  }
}, Qe = class {
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
    this.options = e || K, this.options.renderer = this.options.renderer || new be(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Qe();
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
    let r = "";
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      if (this.options.extensions?.renderers?.[o.type]) {
        const l = o, m = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (m !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type)) {
          r += m || "";
          continue;
        }
      }
      const h = o;
      switch (h.type) {
        case "space": {
          r += this.renderer.space(h);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(h);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(h);
          continue;
        }
        case "code": {
          r += this.renderer.code(h);
          continue;
        }
        case "table": {
          r += this.renderer.table(h);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(h);
          continue;
        }
        case "list": {
          r += this.renderer.list(h);
          continue;
        }
        case "html": {
          r += this.renderer.html(h);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(h);
          continue;
        }
        case "text": {
          let l = h, m = this.renderer.text(l);
          for (; i + 1 < e.length && e[i + 1].type === "text"; )
            l = e[++i], m += `
` + this.renderer.text(l);
          s ? r += this.renderer.paragraph({
            type: "paragraph",
            raw: m,
            text: m,
            tokens: [{ type: "text", raw: m, text: m, escaped: !0 }]
          }) : r += m;
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
        const l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          r += l || "";
          continue;
        }
      }
      const h = o;
      switch (h.type) {
        case "escape": {
          r += s.text(h);
          break;
        }
        case "html": {
          r += s.html(h);
          break;
        }
        case "link": {
          r += s.link(h);
          break;
        }
        case "image": {
          r += s.image(h);
          break;
        }
        case "strong": {
          r += s.strong(h);
          break;
        }
        case "em": {
          r += s.em(h);
          break;
        }
        case "codespan": {
          r += s.codespan(h);
          break;
        }
        case "br": {
          r += s.br(h);
          break;
        }
        case "del": {
          r += s.del(h);
          break;
        }
        case "text": {
          r += s.text(h);
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
    return this.block ? j.lex : j.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? W.parse : W.parseInline;
  }
}, Zs = class {
  defaults = Oe();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = W;
  Renderer = be;
  TextRenderer = Qe;
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
    for (const r of t)
      switch (s = s.concat(e.call(this, r)), r.type) {
        case "table": {
          const i = r;
          for (const o of i.header)
            s = s.concat(this.walkTokens(o.tokens, e));
          for (const o of i.rows)
            for (const h of o)
              s = s.concat(this.walkTokens(h.tokens, e));
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
            const h = i[o].flat(1 / 0);
            s = s.concat(this.walkTokens(h, e));
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
          o ? e.renderers[i.name] = function(...h) {
            let l = i.renderer.apply(this, h);
            return l === !1 && (l = o.apply(this, h)), l;
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
          const h = o, l = s.renderer[h], m = i[h];
          i[h] = (...u) => {
            let k = l.apply(i, u);
            return k === !1 && (k = m.apply(i, u)), k || "";
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
          const h = o, l = s.tokenizer[h], m = i[h];
          i[h] = (...u) => {
            let k = l.apply(i, u);
            return k === !1 && (k = m.apply(i, u)), k;
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
          const h = o, l = s.hooks[h], m = i[h];
          ge.passThroughHooks.has(o) ? i[h] = (u) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(i, u)).then((b) => m.call(i, b));
            const k = l.call(i, u);
            return m.call(i, k);
          } : i[h] = (...u) => {
            let k = l.apply(i, u);
            return k === !1 && (k = m.apply(i, u)), k;
          };
        }
        r.hooks = i;
      }
      if (s.walkTokens) {
        const i = this.defaults.walkTokens, o = s.walkTokens;
        r.walkTokens = function(h) {
          let l = [];
          return l.push(o.call(this, h)), i && (l = l.concat(i.call(this, h))), l;
        };
      }
      this.defaults = { ...this.defaults, ...r };
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
    return (s, r) => {
      const i = { ...r }, o = { ...this.defaults, ...i }, h = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && i.async === !1)
        return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return h(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return h(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = t);
      const l = o.hooks ? o.hooks.provideLexer() : t ? j.lex : j.lexInline, m = o.hooks ? o.hooks.provideParser() : t ? W.parse : W.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((u) => l(u, o)).then((u) => o.hooks ? o.hooks.processAllTokens(u) : u).then((u) => o.walkTokens ? Promise.all(this.walkTokens(u, o.walkTokens)).then(() => u) : u).then((u) => m(u, o)).then((u) => o.hooks ? o.hooks.postprocess(u) : u).catch(h);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let u = l(s, o);
        o.hooks && (u = o.hooks.processAllTokens(u)), o.walkTokens && this.walkTokens(u, o.walkTokens);
        let k = m(u, o);
        return o.hooks && (k = o.hooks.postprocess(k)), k;
      } catch (u) {
        return h(u);
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
}, X = new Zs();
function R(t, e) {
  return X.parse(t, e);
}
R.options = R.setOptions = function(t) {
  return X.setOptions(t), R.defaults = X.defaults, vt(R.defaults), R;
};
R.getDefaults = Oe;
R.defaults = K;
R.use = function(...t) {
  return X.use(...t), R.defaults = X.defaults, vt(R.defaults), R;
};
R.walkTokens = function(t, e) {
  return X.walkTokens(t, e);
};
R.parseInline = X.parseInline;
R.Parser = W;
R.parser = W.parse;
R.Renderer = be;
R.TextRenderer = Qe;
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
const js = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function Ws(t) {
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
function Qs(t) {
  return t = Ws(t), R.parse(t);
}
const Us = (t) => {
  const {
    entry: e
  } = t;
  let s;
  switch (e.severity) {
    case "info":
    case "success":
      s = /* @__PURE__ */ g.createElement(Je, null);
      break;
    case "warning":
      s = /* @__PURE__ */ g.createElement(Kt, null);
      break;
    case "error":
      s = /* @__PURE__ */ g.createElement(Xt, null);
      break;
    default:
      s = /* @__PURE__ */ g.createElement(Je, null);
  }
  let r = e.message;
  return Array.isArray(r) || (r = [r]), /* @__PURE__ */ g.createElement("div", { className: O("entry", e.severity, e.category) }, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("span", { className: "icon" }, s), /* @__PURE__ */ g.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), r.map((i) => /* @__PURE__ */ g.createElement(
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
  return !Array.isArray(s) || s.length > 0 && typeof s[0] != "object" ? e = /* @__PURE__ */ g.createElement(Ue, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : s.length === 0 ? e = /* @__PURE__ */ g.createElement(Ue, { variant: "secondary" }, "There are currently no message") : e = /* @__PURE__ */ g.createElement("div", { className: "messages" }, s.map((r) => /* @__PURE__ */ g.createElement(Us, { entry: r }))), e;
}, Li = (t) => {
  const {
    show: e,
    onShow: s,
    title: r,
    icon: i,
    children: o
  } = t;
  return /* @__PURE__ */ g.createElement(
    q,
    {
      show: e,
      onHide: () => s(!1),
      size: "lg"
    },
    /* @__PURE__ */ g.createElement(q.Header, null, /* @__PURE__ */ g.createElement(q.Title, null, /* @__PURE__ */ g.createElement("span", null, i), /* @__PURE__ */ g.createElement("span", null, r))),
    /* @__PURE__ */ g.createElement(q.Body, null, /* @__PURE__ */ g.createElement(Xs, { ...t })),
    /* @__PURE__ */ g.createElement(q.Footer, null, o)
  );
}, Si = (t) => {
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
    /* @__PURE__ */ g.createElement(q.Header, { closeButton: !0 }, /* @__PURE__ */ g.createElement(q.Title, null, /* @__PURE__ */ g.createElement(Jt, null), /* @__PURE__ */ g.createElement("span", { className: "" }, i))),
    /* @__PURE__ */ g.createElement(q.Body, null, /* @__PURE__ */ g.createElement("p", { className: "ellipsis" }, o)),
    /* @__PURE__ */ g.createElement(q.Footer, null, /* @__PURE__ */ g.createElement(
      U,
      {
        variant: "secondary",
        onClick: s
      },
      "Cancel"
    ), /* @__PURE__ */ g.createElement(
      U,
      {
        variant: "danger",
        onClick: () => {
          r(), s();
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
  return /* @__PURE__ */ g.createElement("div", { className: O(
    "pinnable-container",
    `pin-${s}`
  ) }, t.children, /* @__PURE__ */ g.createElement("div", { className: "pinnable-buttons" }, e));
}, Ks = mt((t, e) => {
  let {
    expanded: s,
    setExpanded: r,
    canPin: i = !0,
    canClose: o = !0,
    onClose: h = oe,
    pinned: l,
    setPinned: m,
    className: u,
    pinReceiver: k
  } = t;
  B(!1);
  const b = [];
  return i && b.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (c) => {
          c.stopPropagation(), m(!l);
        }
      },
      l ? /* @__PURE__ */ g.createElement(Yt, null) : /* @__PURE__ */ g.createElement(es, null)
    )
  ), o && b.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (c) => {
          c.stopPropagation(), h();
        }
      },
      /* @__PURE__ */ g.createElement(ts, null)
    )
  ), /* @__PURE__ */ g.createElement(
    as,
    {
      ...t,
      className: O(u, {
        pinnable: i,
        closable: o
      }),
      expanded: s || l,
      onExpand: r,
      ref: e
    },
    k ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(ht, { buttons: b }, k), t.children) : /* @__PURE__ */ g.createElement(ht, { buttons: b }, t.children)
  );
}), Ai = (t) => {
  const {
    progress: e,
    label: s
  } = t;
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: O(
        "progress-container",
        "animate__slower",
        "animate__animated",
        {
          animate__fadeOut: e >= 100 || e <= 0
        }
      )
    },
    /* @__PURE__ */ g.createElement("div", { className: "progress-label" }, s),
    /* @__PURE__ */ g.createElement(Gt, { now: e })
  );
};
function ct(t) {
  const {
    onEvent: e,
    enabled: s = !0,
    style: r = {},
    ...i
  } = t, o = V();
  function h() {
    const m = () => {
      e(), o.current = setTimeout(m, 100);
    };
    s && m();
  }
  function l() {
    clearTimeout(o.current);
  }
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      onMouseEnter: h,
      onMouseLeave: l,
      ...i,
      style: {
        ...r,
        display: s ? "block" : "none"
      }
    }
  );
}
let Js = 0;
const Pi = (t) => {
  const [e, s] = B(null), r = V(window), [i, o] = B(() => Js++), {
    name: h = "",
    options: l = "",
    notifications: m
  } = t;
  function u() {
    t.onClose();
  }
  return D(() => {
    const k = document.createElement("div");
    s(k);
  }, []), D(() => {
    function k() {
      if (process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Opening the admin control panel"), t.popup ? r.current = window.open(
        t.url ?? "",
        h,
        "popup"
        // `popup,width=${width},height=${height},top=${top},left=${left}`
      ) : r.current = window.open(
        t.url ?? "",
        "_blank",
        l
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
}, Ri = ({
  min: t,
  max: e,
  ticks: s,
  value: r,
  onChange: i,
  formatter: o = (k) => k,
  className: h = "",
  tooltip_position: l,
  orientation: m = "vertical",
  disabled: u = !1
}) => {
  const k = V(), b = Array.isArray(r), c = Dt();
  function n(d, v) {
    return () => {
      const {
        min: y,
        max: _
      } = k.current.rangeLimits;
      let w = [
        _ - k.current.value.max,
        _ - k.current.value.min
      ];
      return w[v] += d, w[v] = Math.min(_, w[v]), w[v] = Math.max(y, w[v]), i(b ? w : w[v]), !1;
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
    w[1] += v, w[1] = Math.max(y, w[1]), w[1] = Math.min(_, w[1]), i(b ? [
      w[0],
      w[1]
    ] : w[1]), d.stopPropagation();
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
    ss,
    {
      ref: k,
      onInput: (d) => i(b ? [e - d[1], e - d[0]] : e - d[0]),
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
      className: O(
        h,
        "slider",
        `slider-${m}`,
        {
          dual: b,
          disabled: u
        }
      ),
      onWheel: a
    },
    /* @__PURE__ */ g.createElement(tt, { className: "max-btns" }, /* @__PURE__ */ g.createElement(
      U,
      {
        variant: "secondary",
        className: "plus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(1, 1)
      },
      /* @__PURE__ */ g.createElement(Ye, null)
    ), /* @__PURE__ */ g.createElement(
      U,
      {
        variant: "secondary",
        className: "minus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(-1, 1)
      },
      /* @__PURE__ */ g.createElement(et, null)
    )),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (d) => d.stopPropagation()
      },
      p
    ),
    b ? /* @__PURE__ */ g.createElement(tt, { className: "min-btns" }, /* @__PURE__ */ g.createElement(
      U,
      {
        variant: "secondary",
        className: "plus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(1, 0)
      },
      /* @__PURE__ */ g.createElement(Ye, null)
    ), /* @__PURE__ */ g.createElement(
      U,
      {
        variant: "secondary",
        className: "minus",
        disabled: u,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: n(-1, 0)
      },
      /* @__PURE__ */ g.createElement(et, null)
    )) : null
  );
}, Ni = (t) => {
  const {
    id: e
  } = t, { hideAll: s } = is({
    id: "file-ctx-menu"
  }), [r, i] = B(!1);
  function o(l) {
    l.key === "Escape" && s();
  }
  D(() => {
    if (r)
      return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [r]);
  function h(l) {
    const {
      elem: m,
      name: u,
      value: k,
      index: b
    } = l;
  }
  return /* @__PURE__ */ g.createElement(
    ns,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: i
    },
    /* @__PURE__ */ g.createElement(
      st,
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
    /* @__PURE__ */ g.createElement(st, { id: "cut" }, "Cut")
  );
}, Mi = (t) => {
  const {
    target: e,
    onChange: s = () => {
    },
    onAccept: r = () => {
    },
    onAbort: i = () => {
    },
    disabled: o,
    name: h,
    label: l,
    type: m = "text",
    required: u = !1
  } = t;
  function k(n) {
    e[h] = n.target.value, r(e[h], { target: e, name: h });
  }
  function b(n) {
    e[h] = n.target.value, s(e[h], { target: e, name: h });
  }
  function c(n) {
    e[h] = n.target.value, i(e[h], { target: e, name: h });
  }
  return /* @__PURE__ */ React.createElement(Xe.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(Xe.Label, { className: "text-secondary small", htmlFor: h }, l), /* @__PURE__ */ React.createElement(
    Zt,
    {
      id: h,
      type: m,
      disabled: o,
      value: e[h] ?? "",
      name: h,
      onChange: b,
      required: u,
      onKeyDown: (n) => {
        n.key === "Enter" ? k(n) : n.key === "Escape" && c(n);
      }
    }
  ));
}, zi = (t) => {
  const {
    canPin: e = !1,
    canClose: s = !1,
    value: r,
    onExpand: i = oe,
    pinned: o = !1,
    setPinned: h = oe,
    group: l = "global",
    collapsible: m = !0
  } = t, u = Ht(l) === r, k = Bt(l);
  return /* @__PURE__ */ g.createElement(
    Ks,
    {
      ...t,
      pinned: o,
      setPinned: h,
      expanded: u || !m,
      setExpanded: (b) => {
        i(b), k(b ? r : null);
      },
      canPin: e,
      canClose: s
    },
    t.children
  );
};
function Ys(t) {
  return Array.isArray(t) ? t : Object.entries(t).map(([e, s]) => ({ value: isNaN(+e) ? e : +e, label: String(s) }));
}
function Ii(t) {
  const {
    value: e,
    options: s,
    onChange: r,
    disabled: i,
    placeholder: o = "Select…",
    className: h
  } = t, l = gt(() => Ys(s), [s]), m = l.find((u) => u.value === e);
  return /* @__PURE__ */ g.createElement(Ke, null, /* @__PURE__ */ g.createElement(Ke.Toggle, { disabled: i }, m ? m.label : o), /* @__PURE__ */ g.createElement(jt, null, l.map((u) => /* @__PURE__ */ g.createElement(
    Wt,
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
function ei() {
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
      var h;
      return (function(l) {
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
                for (var y = m.call(arguments, 1), _ = 0, w = this.length; _ < w; _++) {
                  var L = this[_], $ = b.data(L, p);
                  if (!$) {
                    n("cannot call methods on " + p + " prior to initialization; attempted to call '" + v + "'");
                    continue;
                  }
                  if (!b.isFunction($[v]) || v.charAt(0) === "_") {
                    n("no such method '" + v + "' for " + p + " instance");
                    continue;
                  }
                  var E = $[v].apply($, y);
                  if (E !== void 0 && E !== $)
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
        k(l);
      })(r), (function(l) {
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
                for (var d, v, y, _ = 0, w = 1; w < this.options.ticks_positions.length; w++)
                  if (n <= this.options.ticks_positions[w]) {
                    d = this.options.ticks[w - 1], y = this.options.ticks_positions[w - 1], v = this.options.ticks[w], _ = this.options.ticks_positions[w];
                    break;
                  }
                var L = (n - y) / (_ - y);
                a = d + L * (v - d), p = !1;
              }
              var $ = p ? this.options.min : 0, E = $ + Math.round(a / this.options.step) * this.options.step;
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
        h = function(n, a) {
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
          var $ = this.element.style.width, E = !1, x = this.element.parentNode, f, S, M, C, T;
          if (this.sliderElem)
            E = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var A = document.createElement("div");
            A.className = "slider-track", S = document.createElement("div"), S.className = "slider-track-low", f = document.createElement("div"), f.className = "slider-selection", M = document.createElement("div"), M.className = "slider-track-high", C = document.createElement("div"), C.className = "slider-handle min-slider-handle", C.setAttribute("role", "slider"), C.setAttribute("aria-valuemin", this.options.min), C.setAttribute("aria-valuemax", this.options.max), T = document.createElement("div"), T.className = "slider-handle max-slider-handle", T.setAttribute("role", "slider"), T.setAttribute("aria-valuemin", this.options.min), T.setAttribute("aria-valuemax", this.options.max), A.appendChild(S), A.appendChild(f), A.appendChild(M), this.rangeHighlightElements = [];
            var N = this.options.rangeHighlights;
            if (Array.isArray(N) && N.length > 0)
              for (var J = 0; J < N.length; J++) {
                var H = document.createElement("div"), G = N[J].class || "";
                H.className = "slider-rangeHighlight slider-selection " + G, this.rangeHighlightElements.push(H), A.appendChild(H);
              }
            var te = Array.isArray(this.options.labelledby);
            if (te && this.options.labelledby[0] && C.setAttribute("aria-labelledby", this.options.labelledby[0]), te && this.options.labelledby[1] && T.setAttribute("aria-labelledby", this.options.labelledby[1]), !te && this.options.labelledby && (C.setAttribute("aria-labelledby", this.options.labelledby), T.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", v = 0; v < this.options.ticks.length; v++) {
                var Q = document.createElement("div");
                if (Q.className = "slider-tick", this.options.ticks_tooltip) {
                  var Y = this._addTickListener(), Lt = Y.addMouseEnter(this, Q, v), St = Y.addMouseLeave(this, Q);
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
            ue.className = "tooltip tooltip-max", ue.setAttribute("role", "presentation"), we(ue), this.sliderElem.appendChild(A), this.sliderElem.appendChild(he), this.sliderElem.appendChild(ce), this.sliderElem.appendChild(ue), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(C), this.sliderElem.appendChild(T), x.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (l && (this.$element = l(this.element), this.$sliderElem = l(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), k[this.options.scale] && (this.options.scale = k[this.options.scale]), E === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(z) {
            this._removeProperty(this.trackLow, z), this._removeProperty(this.trackSelection, z), this._removeProperty(this.trackHigh, z);
          }, this), [this.handle1, this.handle2].forEach(function(z) {
            this._removeProperty(z, "left"), this._removeProperty(z, "right"), this._removeProperty(z, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(z) {
            this._removeProperty(z, "bs-tooltip-left"), this._removeProperty(z, "bs-tooltip-right"), this._removeProperty(z, "bs-tooltip-top"), this._removeClass(z, "bs-tooltip-right"), this._removeClass(z, "bs-tooltip-left"), this._removeClass(z, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = $, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (d || (this.options.max = Math.max.apply(Math, this.options.ticks)), p || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = S || this.trackLow, this.trackSelection = f || this.trackSelection, this.trackHigh = M || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = C || this.handle1, this.handle2 = T || this.handle2, E === !0)
            for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), v = 0; v < this.ticks.length; v++)
              this._removeClass(this.ticks[v], "round triangle hide");
          var Rt = ["round", "triangle", "custom"], Nt = Rt.indexOf(this.options.handle) !== -1;
          if (Nt)
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
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), l && (this._unbindJQueryEventHandlers(), m === i && this.$element.removeData(m), this.$element.removeData(o));
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
            l ? (this.$element.off(n, a), this.$sliderElem.off(n, a)) : this._unbindNonQueryEventHandler(n, a);
          },
          getAttribute: function(n) {
            return n ? this.options[n] : this.options;
          },
          setAttribute: function(n, a) {
            return this.options[n] = a, this;
          },
          refresh: function(n) {
            var a = this.getValue();
            return this._removeSliderEventHandlers(), b.call(this, this.element, this.options), n && n.useCurrentValue === !0 && this.setValue(a), l && (m === i ? (l.data(this.element, i, this), l.data(this.element, o, this)) : l.data(this.element, o, this)), this;
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
              var w = this.options.orientation === "vertical" ? "height" : "width", L;
              this.options.orientation === "vertical" ? L = "marginTop" : this.options.rtl ? L = "marginRight" : L = "marginLeft";
              var $ = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var E = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[L] = -$ / 2 + "px"), E = this.tickLabelContainer.offsetHeight;
                else
                  for (x = 0; x < this.tickLabelContainer.childNodes.length; x++)
                    this.tickLabelContainer.childNodes[x].offsetHeight > E && (E = this.tickLabelContainer.childNodes[x].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = E + "px");
              }
              for (var x = 0; x < this.options.ticks.length; x++) {
                var f = this.options.ticks_positions[x] || this._toPercentage(this.options.ticks[x]);
                this.options.reversed && (f = 100 - f), this.ticks[x].style[this.stylePos] = f + "%", this._removeClass(this.ticks[x], "in-selection"), this.options.range ? f >= n[0] && f <= n[1] && this._addClass(this.ticks[x], "in-selection") : this.options.selection === "after" && f >= n[0] ? this._addClass(this.ticks[x], "in-selection") : this.options.selection === "before" && f <= n[0] && this._addClass(this.ticks[x], "in-selection"), this.tickLabels[x] && (this.tickLabels[x].style[w] = $ + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[x] !== void 0 ? (this.tickLabels[x].style.position = "absolute", this.tickLabels[x].style[this.stylePos] = f + "%", this.tickLabels[x].style[L] = -$ / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[x].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[x].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[L] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[x], "label-in-selection label-is-selection"), this.options.range ? f >= n[0] && f <= n[1] && (this._addClass(this.tickLabels[x], "label-in-selection"), (f === n[0] || n[1]) && this._addClass(this.tickLabels[x], "label-is-selection")) : (this.options.selection === "after" && f >= n[0] ? this._addClass(this.tickLabels[x], "label-in-selection") : this.options.selection === "before" && f <= n[0] && this._addClass(this.tickLabels[x], "label-in-selection"), f === n[0] && this._addClass(this.tickLabels[x], "label-is-selection")));
              }
            }
            var S;
            if (this.options.range) {
              S = this.options.formatter(this._state.value), this._setText(this.tooltipInner, S), this.tooltip.style[this.stylePos] = (n[1] + n[0]) / 2 + "%";
              var M = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, M);
              var C = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, C), this.tooltip_min.style[this.stylePos] = n[0] + "%", this.tooltip_max.style[this.stylePos] = n[1] + "%";
            } else
              S = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, S), this.tooltip.style[this.stylePos] = n[0] + "%";
            if (this.options.orientation === "vertical")
              this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(n[0], n[1]) + "%", this.trackSelection.style.top = Math.min(n[0], n[1]) + "%", this.trackSelection.style.height = Math.abs(n[0] - n[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(n[0], n[1]) - Math.abs(n[0] - n[1]) + "%";
            else {
              this.stylePos === "right" ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(n[0], n[1]) + "%", this.stylePos === "right" ? this.trackSelection.style.right = Math.min(n[0], n[1]) + "%" : this.trackSelection.style.left = Math.min(n[0], n[1]) + "%", this.trackSelection.style.width = Math.abs(n[0] - n[1]) + "%", this.stylePos === "right" ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(n[0], n[1]) - Math.abs(n[0] - n[1]) + "%";
              var T = this.tooltip_min.getBoundingClientRect(), A = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? T.right > A.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : T.right > A.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
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
              var w;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var L = void 0;
                L = this.options.ticks.indexOf(this._state.value[n]), L === -1 && (L = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), L += p, L = Math.max(0, Math.min(this.options.ticks.length - 1, L)), w = this.options.ticks[L];
              } else
                w = this._state.value[n] + p * this.options.step;
              var $ = this._toPercentage(w);
              if (this._state.keyCtrl = n, this.options.range) {
                this._adjustPercentageForRangeSliders($);
                var E = this._state.keyCtrl ? this._state.value[0] : w, x = this._state.keyCtrl ? w : this._state.value[1];
                w = [Math.max(this.options.min, Math.min(this.options.max, E)), Math.max(this.options.min, Math.min(this.options.max, x))];
              } else
                w = Math.max(this.options.min, Math.min(this.options.max, w));
              return this._trigger("slideStart", w), this.setValue(w, !0, !0), this._trigger("slideStop", w), this._pauseEvent(a), delete this._state.keyCtrl, !1;
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
            l && this._triggerJQueryEvent(n, a);
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
              var y = p[v], _ = new RegExp("(?:\\s|^)" + y + "(?:\\s|$)"), w = _.test(d);
              w || (d += " " + y);
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
            if (l)
              l.style(n, a, p);
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
        }, l && l.fn && (l.fn.slider ? (s && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), m = o) : (l.bridget(i, h), m = i), l.bridget(o, h), l(function() {
          l("input[data-provide=slider]")[m]();
        }));
      })(r), h;
    });
  })(Pe)), Pe.exports;
}
var ti = ei();
const si = /* @__PURE__ */ Be(ti), ii = (t, e) => {
  const s = {
    ...t,
    tooltip: t.tooltip || "show"
  };
  let {
    change: r,
    onChange: i,
    value: o
  } = t;
  const h = V(), [l, m] = B();
  return r = r ?? i, D(() => {
    if (h.current) {
      const u = new si(h.current, s);
      return m(u), () => u.destroy();
    }
  }, [h.current]), D(() => {
    e && l && (e.current = {
      mySlider: l
    });
  }, [e, l]), D(() => {
    if (l && r) {
      l.on("change", r);
      for (let u in t)
        l.setAttribute(u, t[u]);
      return () => {
        l.off("change", r);
      };
    }
  }, [t, l]), D(() => {
    t.enabled ? l?.enable() : l?.disable();
  }, [t.enabled]), D(() => {
    l && o !== void 0 && l.setValue(o);
  }, [l, o]), /* @__PURE__ */ g.createElement("div", { ref: h });
}, Di = g.forwardRef(ii);
var Re = { exports: {} }, Ne, pt;
function ni() {
  if (pt) return Ne;
  pt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ne = t, Ne;
}
var Me, dt;
function ri() {
  if (dt) return Me;
  dt = 1;
  var t = /* @__PURE__ */ ni();
  function e() {
  }
  function s() {
  }
  return s.resetWarningCache = e, Me = function() {
    function r(h, l, m, u, k, b) {
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
  }, Me;
}
var ft;
function oi() {
  return ft || (ft = 1, Re.exports = /* @__PURE__ */ ri()()), Re.exports;
}
var ai = /* @__PURE__ */ oi();
const Z = /* @__PURE__ */ Be(ai);
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
  style: h,
  children: l,
  onChange: m
  // called with { px, percent }
}) {
  const u = V(null), k = V(!1), [b, c] = B(0), [n, a] = g.Children.toArray(l), p = ($, E, x) => Math.max(E, Math.min(x, $)), d = ee(() => {
    const $ = u.current;
    if (!$) return { total: 0, min: 0, max: 0 };
    const E = $.clientWidth, x = Math.max(0, E - o - r), f = typeof i == "number" ? Math.min(i, x) : x, S = Math.min(s, f);
    return { total: E, min: S, max: f };
  }, [o, s, r, i]);
  It(() => {
    if (!u.current) return;
    const { total: E, min: x, max: f } = d();
    let S;
    typeof t == "number" && Number.isFinite(t) ? S = t : S = Math.round(p(e, 0, 100) / 100 * (E - o)), c(p(S, x, f));
  }, [d, t, e, o]), D(() => {
    const $ = u.current;
    if (!$) return;
    const E = () => {
      const { total: f, min: S, max: M } = d();
      if (c((C) => p(C, S, M)), m) {
        const C = p(b, S, M), T = f > 0 ? C / (f - o) * 100 : 0;
        m({ px: C, percent: T });
      }
    };
    let x;
    return "ResizeObserver" in window ? (x = new ResizeObserver(E), x.observe($)) : window.addEventListener("resize", E), () => {
      x ? x.disconnect() : window.removeEventListener("resize", E);
    };
  }, [d, o, m, b]);
  const v = ee(($) => {
    const E = u.current;
    if (!E) return;
    k.current = !0, $.currentTarget.setPointerCapture?.($.pointerId);
    const x = (S) => {
      if (!k.current) return;
      const M = E.getBoundingClientRect(), C = S.clientX - M.left, { total: T, min: A, max: N } = d(), H = p(C, A, N);
      if (c(H), m) {
        const G = T > 0 ? H / (T - o) * 100 : 0;
        m({ px: H, percent: Math.round(G * 100) / 100 });
      }
    }, f = () => {
      k.current = !1;
      try {
        $.currentTarget.releasePointerCapture?.($.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", x), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f);
    };
    window.addEventListener("pointermove", x), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }, [d, o, m]);
  ee(() => {
    const { total: $, min: E, max: x } = d();
    let f;
    typeof t == "number" && Number.isFinite(t) ? f = t : f = Math.round(p(e, 0, 100) / 100 * ($ - o)), c(p(f, E, x));
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
  return /* @__PURE__ */ g.createElement("div", { ref: u, className: "splitpane", style: { ...y, ...h || {} } }, /* @__PURE__ */ g.createElement("div", { className: "pane", style: { minWidth: 0, minHeight: 0 } }, n), /* @__PURE__ */ g.createElement(
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
li.propTypes = {
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
const Hi = (t) => {
  const {
    className: e,
    range: s,
    itemSize: r,
    selectionRange: i,
    itemRenderer: o,
    keyBindings: h = {},
    indicators: l = [],
    ...m
  } = t, u = t.style || {}, {
    callbacks: k,
    isSelecting: b,
    onMouseUp: c
  } = Ot(i), n = ee((d) => o(d, k(d), {
    selectionRange: i,
    isSelecting: b
  }), [s, b, o]), a = {
    width: "5000px",
    position: "absolute",
    height: "5000px",
    left: "-2500px",
    zIndex: 1e3
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
        onClick: ($) => {
          $.stopPropagation(), s.jumpToFirst(L);
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
      className: O("dynamic-list", e),
      style: {
        position: "relative"
      }
    },
    /* @__PURE__ */ g.createElement(
      ct,
      {
        style: {
          ...a,
          top: "-5000px"
        },
        className: "auto-scroll auto-scroll-up",
        onMouseUp: c,
        enabled: b,
        onEvent: () => {
          s.moveUp(), s.first < i.first ? i.first = s.first : s.first < i.last && (i.last = s.first);
        }
      }
    ),
    /* @__PURE__ */ g.createElement(
      hs,
      {
        itemSize: r,
        itemRenderer: n,
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
      l.filter((d) => d.enabled).map(p)
    ),
    /* @__PURE__ */ g.createElement(
      ct,
      {
        style: {
          ...a,
          bottom: "-5000px"
        },
        className: "auto-scroll auto-scroll-down",
        onMouseUp: c,
        enabled: b,
        onEvent: () => {
          s.moveDown(), s.last > i.last ? i.last = s.last : s.last > i.first && (i.first = s.last);
        }
      }
    )
  );
};
function hi(t) {
  const {
    width: e,
    height: s,
    side: r = "top",
    arrowBase: i = 20,
    arrowLength: o = 10,
    borderRadius: h = 10,
    padding: l = 8,
    strokeWidth: m = 2,
    seamOverlap: u = 0.5
  } = t || {}, k = Math.max(0, Number(e) || 0), b = Math.max(0, Number(s) || 0), c = Math.max(0, Number(i) || 0), n = Math.max(0, Number(o) || 0), a = Math.max(0, Number(h) || 0), p = Math.max(0, Number(l) || 0), d = Math.max(0, Number(m) || 0), v = k + p * 2, y = b + p * 2, _ = r === "left" || r === "right" ? n : 0, w = r === "top" || r === "bottom" ? n : 0, L = v + _ + d, $ = y + w + d, E = r === "left" ? n : 0, x = r === "top" ? n : 0, f = Math.min(a, Math.min(v, y) / 2), S = E + v / 2, M = x + y / 2, C = E, T = x, A = C + v, N = T + y, J = [
    `M ${C + f} ${T}`,
    `H ${A - f}`,
    `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
    `V ${N - f}`,
    `A ${f} ${f} 0 0 1 ${A - f} ${N}`,
    `H ${C + f}`,
    `A ${f} ${f} 0 0 1 ${C} ${N - f}`,
    `V ${T + f}`,
    `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
    "Z"
  ].join(" ");
  let H = "";
  n > 0 && c > 0 && (r === "right" ? H = [
    `M ${A - u} ${M - c / 2}`,
    `L ${A + n} ${M}`,
    `L ${A - u} ${M + c / 2}`,
    "Z"
  ].join(" ") : r === "left" ? H = [
    `M ${C + u} ${M + c / 2}`,
    `L ${C - n} ${M}`,
    `L ${C + u} ${M - c / 2}`,
    "Z"
  ].join(" ") : r === "top" ? H = [
    `M ${S - c / 2} ${T + u}`,
    `L ${S} ${T - n}`,
    `L ${S + c / 2} ${T + u}`,
    "Z"
  ].join(" ") : r === "bottom" && (H = [
    `M ${S + c / 2} ${N - u}`,
    `L ${S} ${N + n}`,
    `L ${S - c / 2} ${N - u}`,
    "Z"
  ].join(" ")));
  let G = "";
  if (r === "right")
    G = [
      `M ${C + f} ${T}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
      `V ${M - c / 2}`,
      ...n > 0 && c > 0 ? [`L ${A + n} ${M}`, `L ${A} ${M + c / 2}`] : [],
      `V ${N - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${N}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${N - f}`,
      `V ${T + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
      "Z"
    ].join(" ");
  else if (r === "left")
    G = [
      `M ${C + f} ${T}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
      `V ${N - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${N}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${N - f}`,
      `V ${M + c / 2}`,
      ...n > 0 && c > 0 ? [`L ${C - n} ${M}`, `L ${C} ${M - c / 2}`] : [],
      `V ${T + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
      "Z"
    ].join(" ");
  else if (r === "top")
    G = [
      `M ${S} ${T - n}`,
      ...n > 0 && c > 0 ? [`L ${S + c / 2} ${T}`] : [],
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
      `V ${N - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${N}`,
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${N - f}`,
      `V ${T + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
      ...n > 0 && c > 0 ? [`H ${S - c / 2}`] : [],
      "Z"
    ].join(" ");
  else if (r === "bottom") {
    const Y = [
      `M ${C + f} ${T}`,
      `H ${A - f}`,
      `A ${f} ${f} 0 0 1 ${A} ${T + f}`,
      `V ${N - f}`,
      `A ${f} ${f} 0 0 1 ${A - f} ${N}`
    ];
    n > 0 && c > 0 && Y.push(
      `H ${S + c / 2}`,
      `L ${S} ${N + n}`,
      `L ${S - c / 2} ${N}`
    ), Y.push(
      `H ${C + f}`,
      `A ${f} ${f} 0 0 1 ${C} ${N - f}`,
      // ✅ bas-gauche correct
      `V ${T + f}`,
      `A ${f} ${f} 0 0 1 ${C + f} ${T}`,
      "Z"
    ), G = Y.join(" ");
  }
  const te = { top: r === "top" ? -n : 0, left: r === "left" ? -n : 0 }, Q = { x: E + p, y: x + p };
  return {
    // géométrie
    outlineD: G,
    // à utiliser pour le stroke (bordure unique)
    rectD: J,
    // fill bulle
    arrowD: H,
    // fill flèche (chevauchement interne minime)
    // métriques utiles
    width: L,
    height: $,
    viewBox: `0 0 ${L} ${$}`,
    viewBoxRectOnly: `0 0 ${v} ${y}`,
    transformRectToOrigin: `translate(${-E}, ${-x})`,
    rect: { x: E, y: x, w: v, h: y, r: f },
    offset: te,
    contentOffset: Q,
    strokeWidth: d
  };
}
function Bi({
  side: t = "right",
  arrowBase: e = 20,
  arrowLength: s = 10,
  borderRadius: r = 10,
  stroke: i = "#111827",
  bubbleFill: o = "#fff",
  arrowFill: h = "#fff",
  strokeWidth: l = 2,
  style: m,
  seamOverlap: u = 0.5,
  children: k,
  ...b
}) {
  const c = g.useRef(null), { width: n = 0, height: a = 0 } = He({ targetRef: c }), p = g.useMemo(() => !n || !a ? null : hi({
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
    strokeWidth: l,
    seamOverlap: u
  }), [
    n,
    a,
    t,
    e,
    s,
    r,
    l
  ]);
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: c,
      style: {
        position: "relative",
        // Pour que width inclus le padding:
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
      /* @__PURE__ */ g.createElement("g", { transform: p.transformRectToOrigin }, p.arrowD && /* @__PURE__ */ g.createElement("path", { d: p.arrowD, fill: h, stroke: "none" }), /* @__PURE__ */ g.createElement("path", { d: p.rectD, fill: o, stroke: "none" }), /* @__PURE__ */ g.createElement(
        "path",
        {
          d: p.outlineD,
          fill: "none",
          stroke: i,
          strokeWidth: p.strokeWidth,
          strokeLinejoin: "round",
          strokeLinecap: "round"
        }
      ))
    )
  );
}
export {
  Bi as Bubble,
  as as Collapsible,
  Ci as Disable,
  Ti as DotNotification,
  ls as Drawer,
  $i as DrawerContainer,
  Ii as Dropdown,
  Hi as DynamicList,
  hs as GargantuaList,
  ct as IntervalOnHover,
  Li as MessageModal,
  Si as ModalOkCancel,
  ht as PinButtons,
  Ks as Pinnable,
  Ai as Progress,
  zi as RadioCollapse,
  Fi as RadioProvider,
  Di as ReactSlider,
  Pi as RenderInWindow,
  Ri as Slider,
  li as SplitPaneH,
  Ni as TableContextMenu,
  Mi as TextField
};
