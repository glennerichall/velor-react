import g, { forwardRef as pt, Children as It, useRef as O, useState as R, useEffect as N, createPortal as $t, createContext as Dt, useContext as Ht, useMemo as dt, useCallback as he } from "react";
import { OverlayTrigger as Vt, Tooltip as Ot, Spinner as Bt, Alert as Ze, ProgressBar as Ft, Form as Qe, FormControl as qt, Dropdown as je, DropdownMenu as Gt, DropdownItem as Wt } from "react-bootstrap";
import { useResizeDetector as ft } from "react-resize-detector";
import { waitForStableBoundingRect as Zt, recursiveMap as Qt } from "./utils.es.js";
import { ArrowBarLeft as jt, ArrowBarRight as Ut, PlusCircleFill as Ue, DashCircleFill as Ke, InfoCircleFill as Xe, ExclamationTriangleFill as Kt, ExclamationSquareFill as Xt, ExclamationDiamondFill as Jt, Pin as Yt, PinAngle as es, XLg as ts } from "react-bootstrap-icons";
import G from "react-bootstrap/Button";
import "react-range-slider-input/dist/style.css";
import ss from "react-range-slider-input";
import Je from "react-bootstrap/ButtonGroup";
import { useInvalidate as mt } from "./hooks.es.js";
import F from "react-bootstrap/Modal";
import { noOp as Me } from "velor-utils/utils/functional.mjs";
import { useContextMenu as is, Menu as ns, Item as Ye } from "react-contexify";
const Ei = (h) => {
  const {
    id: e = crypto.randomUUID(),
    label: t,
    placement: s = "right",
    onChange: n,
    name: r,
    target: o,
    checked: a,
    tooltip: c,
    ...f
  } = h, k = /* @__PURE__ */ g.createElement(
    "input",
    {
      ...f,
      id: e,
      type: "checkbox",
      checked: r && o ? o[r] : a,
      onChange: (i) => {
        const l = i.target.checked;
        r && o && (o[r] = l), n && n(l, { name: r, target: o });
      }
    }
  ), v = /* @__PURE__ */ g.createElement(
    "label",
    {
      ...f,
      className: "small",
      htmlFor: e
    },
    t
  );
  let p;
  return s === "right" ? p = /* @__PURE__ */ g.createElement(g.Fragment, null, k, v) : p = /* @__PURE__ */ g.createElement(g.Fragment, null, v, k), typeof c == "string" && (p = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(
    Vt,
    {
      key: r,
      placement: "right",
      delay: { show: 400, hide: 250 },
      overlay: /* @__PURE__ */ g.createElement(Ot, { id: `tooltip-${e}` }, c)
    },
    p
  ))), p;
};
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
const D = /* @__PURE__ */ Ie(rs), Ee = "animating-expand", Ce = "animating-collapse", Te = "animating", Se = "reduced", Le = "expanded", as = pt((h, e) => {
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
  if (It.count(t) === 0) return null;
  const c = O(), f = O(), [k, v] = R(!0), p = () => {
    const b = f.current.getBoundingClientRect();
    c.current.style.width = b.width + "px", c.current.style.height = b.height + "px";
  }, i = () => {
    c.current.style.width = "1.7em", c.current.style.height = "1.7em";
  }, l = () => {
    c.current.classList.remove(Le), c.current.classList.add(Ce, Te), i();
  }, u = () => {
    c.current.classList.remove(Se), c.current.classList.add(Ee, Te), p();
  }, d = () => c.current.classList.contains(Ee), m = () => c.current.classList.contains(Ce);
  return N(() => {
    s ? (c.current.classList.add(Le), p(), n(!0), r(!0)) : (c.current.classList.add(Se), i(), n(!1), r(!1));
    const b = () => {
      n(!1);
    };
    return v(!1), document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, []), N(() => {
    k || (s ? u() : l());
  }, [s]), ft({
    targetRef: f,
    onResize: (b, _) => {
      c.current.classList.contains("expanded") && Zt(f.current, p);
    }
  }), /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: c,
      onTransitionEnd: (b) => {
        b.propertyName === "width" && (m() && !s ? (c.current.classList.add(Se), r(!1)) : d() && s && (c.current.classList.add(Le), r(!0)), c.current.classList.remove(
          Ce,
          Ee,
          Te
        ));
      },
      onMouseDown: (b) => b.stopPropagation(),
      onClick: (b) => {
        b.stopPropagation(), n(!0);
      },
      className: D(
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
}), Ci = (h) => Qt(h.children, (e) => g.cloneElement(e, {
  disabled: e.props.disabled || h.disabled
})), Ti = (h) => {
  const {
    notifications: e,
    variant: t,
    visible: s = !1,
    targetRef: n,
    bordered: r = !1,
    size: o
  } = h, a = O(), c = O(), [f, k] = R(!1);
  function v(p) {
    p.preventDefault(), p.stopPropagation(), f ? (k(!1), a.current.style.width = null, a.current.style.height = null) : (k(!0), a.current.style.width = c.current.scrollWidth + "px", a.current.style.height = c.current.scrollHeight + "px");
  }
  return N(() => {
    const p = (i) => {
      i.stopPropagation(), k(!1), a.current && (a.current.style.width = null, a.current.style.height = null);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
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
        className: D(
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
          ref: c,
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
      className: D(
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
        ref: c,
        className: "content"
      },
      e
    )
  ), h.children) : /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: a,
      onClick: v,
      className: D(
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
        ref: c,
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
    location: c = "right",
    clearChilds: f = !0
  } = h, [k, v] = R(!0), [p, i] = R(e), [l, u] = R(!1);
  N(() => {
    e !== p && (u(!0), v(!1));
    const y = () => {
      e && t(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [e]);
  let d;
  switch (c) {
    case "right":
      d = /* @__PURE__ */ g.createElement(Ut, null);
      break;
    case "left":
      d = /* @__PURE__ */ g.createElement(jt, null);
      break;
  }
  const m = /* @__PURE__ */ g.createElement(
    G,
    {
      onClick: () => t(!1),
      variant: "light"
    },
    d
  ), b = /* @__PURE__ */ g.createElement(
    Bt,
    {
      className: D({ hidden: !n }),
      animation: "border",
      role: "status",
      variant: "secondary"
    }
  );
  let _;
  return s ? _ = /* @__PURE__ */ g.createElement("h5", { className: "title" }, /* @__PURE__ */ g.createElement("span", { className: "content" }, s), /* @__PURE__ */ g.createElement("span", { className: "buttons" }, b, m)) : _ = /* @__PURE__ */ g.createElement("div", { className: "title" }, b, /* @__PURE__ */ g.createElement("span", { className: "buttons" }, m)), /* @__PURE__ */ g.createElement(
    "div",
    {
      id: o,
      onAnimationEnd: (y) => u(e),
      onMouseDown: (y) => {
        y.stopPropagation();
      },
      className: D(
        r,
        `name-${a}`,
        "drawer",
        `${c}-drawer`,
        "animate__animated",
        "animate__faster",
        {
          initial: k,
          "willbe-visible": e,
          "initially-visible": p,
          animate__slideInRight: c === "right" && e && !k,
          animate__slideOutRight: c === "right" && !e && !k,
          animate__slideInLeft: c === "left" && e && !k,
          animate__slideOutLeft: c === "left" && !e && !k
        }
      )
    },
    _,
    l || !f ? h.children : null
  );
}, Si = (h) => {
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
      onClose: c
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
        onClose: c
      },
      t
    );
  });
}, hs = ({
  min: h,
  max: e,
  ticks: t,
  value: s,
  onChange: n,
  formatter: r = (k) => k,
  className: o = "",
  tooltip_position: a,
  orientation: c = "vertical",
  disabled: f = !1
}) => {
  const k = O(), v = Array.isArray(s), p = mt();
  function i(d, m) {
    return () => {
      const {
        min: b,
        max: _
      } = k.current.rangeLimits;
      let y = [
        _ - k.current.value.max,
        _ - k.current.value.min
      ];
      return y[m] += d, y[m] = Math.min(_, y[m]), y[m] = Math.max(b, y[m]), n(v ? y : y[m]), !1;
    };
  }
  function l(d) {
    const m = -Math.sign(d.deltaY), {
      min: b,
      max: _
    } = k.current.rangeLimits;
    let y = [
      _ - k.current.value.max,
      _ - k.current.value.min
    ];
    y[1] += m, y[1] = Math.max(b, y[1]), y[1] = Math.min(_, y[1]), n(v ? [
      y[0],
      y[1]
    ] : y[1]), d.stopPropagation();
  }
  if (k.current)
    if (v) {
      let d = k.current.index;
      k.current.thumb[0].current.setAttribute("data-value", r(s[d.max])), k.current.thumb[1].current.setAttribute("data-value", r(s[d.min]));
    } else
      k.current.thumb[0].current.setAttribute("data-value", r(s));
  else
    p();
  const u = /* @__PURE__ */ g.createElement(
    ss,
    {
      ref: k,
      onInput: (d) => n(v ? [e - d[1], e - d[0]] : e - d[0]),
      value: v ? [e - s[1], e - s[0]] : [e - s, e],
      step: 1,
      max: e,
      min: h,
      disabled: f,
      thumbsDisabled: [!1, !v],
      orientation: c
    }
  );
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: D(
        o,
        "slider",
        `slider-${c}`,
        {
          dual: v,
          disabled: f
        }
      ),
      onWheel: l
    },
    /* @__PURE__ */ g.createElement(Je, { className: "max-btns" }, /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        className: "plus",
        disabled: f,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: i(1, 1)
      },
      /* @__PURE__ */ g.createElement(Ue, null)
    ), /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        className: "minus",
        disabled: f,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: i(-1, 1)
      },
      /* @__PURE__ */ g.createElement(Ke, null)
    )),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (d) => d.stopPropagation()
      },
      u
    ),
    v ? /* @__PURE__ */ g.createElement(Je, { className: "min-btns" }, /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        className: "plus",
        disabled: f,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: i(1, 0)
      },
      /* @__PURE__ */ g.createElement(Ue, null)
    ), /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        className: "minus",
        disabled: f,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: i(-1, 0)
      },
      /* @__PURE__ */ g.createElement(Ke, null)
    )) : null
  );
};
class cs {
  constructor() {
    this.first = 0, this.last = 0, this.height = 0, this.itemSize = 0, this.itemCount = 0, this.itemCountInViewport = 0, this.items = [], this.onChange = null;
  }
  get enabled() {
    return this.itemCount !== void 0 && this.itemCount !== null && this.itemCount > 0;
  }
  get maxSlider() {
    return this.itemCount - this.itemCountInViewport;
  }
  hook(e) {
    const {
      itemSize: t,
      itemCount: s,
      itemRenderer: n,
      onChange: r,
      index: o
    } = e;
    (this.itemRenderer !== n || this.itemCount !== s) && (this.items = []);
    const a = this.itemCount !== s || this.itemSize !== t || this.itemRenderer !== n || this.first !== o || this.items.length !== this.itemCountInViewport;
    this.itemCount = s, this.itemSize = t, this.itemRenderer = n, this.onChange = r, this.invalidate = mt();
    const c = O();
    this.targetRef = c, ft({
      targetRef: c,
      onResize: (f, k) => {
        this.height = k, this.update(), this.refresh(), this.invalidate();
      }
    }), o !== this.first && this.setValueSafe(o), this.update(), a && this.refresh();
  }
  onWheel = (e) => {
    const t = Math.sign(e.deltaY);
    let s = this.first + t;
    this.setValueSafe(s), this.refresh(), this.invalidate();
  };
  onSlide = (e) => {
    const t = e.newValue;
    this.setValueSafe(t);
  };
  setValueSafe(e) {
    const t = this.itemCountInViewport;
    e >= this.itemCount - t + 1 && (e = this.itemCount - t + 1), e < 0 && (e = 0), this.first = e, this.update();
  }
  update() {
    const { first: e, last: t } = this;
    this.itemCountInViewport = Math.floor(this.height / this.itemSize) - 1, this.last = Math.min(this.first + this.itemCountInViewport - 1, this.itemCount - 1), isNaN(this.last) && (this.last = this.first), (this.first !== e || this.last !== t) && this.onChange?.call(null, this.first, this.last);
  }
  refresh() {
    const e = [];
    if (this.itemRenderer) {
      for (let t = this.first; t <= this.last; t++) {
        const s = this.items.findIndex((n) => n.index === t);
        if (s < 0) {
          let n = this.itemRenderer(t);
          n !== null && e.push({
            index: t,
            element: n
          });
        } else
          e.push(this.items[s]);
      }
      this.items = e;
    }
  }
  getElements() {
    return this.items.map((e) => e.element);
  }
}
const us = (h) => {
  const [e, t] = R(() => new cs());
  return e.hook(h), e;
}, ps = (h, e) => {
  const t = us(h);
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      id: h.id,
      className: "gargantua",
      ref: t.targetRef,
      onWheel: t.onWheel
    },
    /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("div", { className: "content" }, t.getElements()), /* @__PURE__ */ g.createElement("div", { className: "mock" }), /* @__PURE__ */ g.createElement(
      hs,
      {
        tooltip: "always",
        handle: "custom",
        change: t.onSlide,
        enabled: t.enabled,
        value: t.first,
        min: 0,
        max: t.maxSlider,
        orientation: "vertical"
      }
    ))
  );
}, Li = g.forwardRef(ps);
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
let Z = $e();
function gt(h) {
  Z = h;
}
const Y = { exec: () => null };
function C(h, e = "") {
  let t = typeof h == "string" ? h : h.source;
  const s = {
    replace: (n, r) => {
      let o = typeof r == "string" ? r : r.source;
      return o = o.replace(A.caret, "$1"), t = t.replace(n, o), s;
    },
    getRegex: () => new RegExp(t, e)
  };
  return s;
}
const A = {
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
}, ds = /^(?:[ \t]*(?:\n|$))+/, fs = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ms = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ee = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, gs = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, De = /(?:[*+-]|\d{1,9}[.)])/, kt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, vt = C(kt).replace(/bull/g, De).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ks = C(kt).replace(/bull/g, De).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), He = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, vs = /^[^\n]+/, Ve = /(?!\s*\])(?:\\.|[^\[\]\\])+/, bs = C(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ve).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), _s = C(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, De).getRegex(), me = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Oe = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ys = C("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Oe).replace("tag", me).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), bt = C(He).replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", me).getRegex(), ws = C(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", bt).getRegex(), Be = {
  blockquote: ws,
  code: fs,
  def: bs,
  fences: ms,
  heading: gs,
  hr: ee,
  html: ys,
  lheading: vt,
  list: _s,
  newline: ds,
  paragraph: bt,
  table: Y,
  text: vs
}, tt = C("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", me).getRegex(), xs = {
  ...Be,
  lheading: ks,
  table: tt,
  paragraph: C(He).replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", tt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", me).getRegex()
}, Es = {
  ...Be,
  html: C(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Oe).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Y,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: C(He).replace("hr", ee).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", vt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Cs = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ts = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, _t = /^( {2,}|\\)\n(?!\s*$)/, Ss = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ge = /[\p{P}\p{S}]/u, Fe = /[\s\p{P}\p{S}]/u, yt = /[^\s\p{P}\p{S}]/u, Ls = C(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Fe).getRegex(), wt = /(?!~)[\p{P}\p{S}]/u, Ps = /(?!~)[\s\p{P}\p{S}]/u, As = /(?:[^\s\p{P}\p{S}]|~)/u, Rs = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, xt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ns = C(xt, "u").replace(/punct/g, ge).getRegex(), Ms = C(xt, "u").replace(/punct/g, wt).getRegex(), Et = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", zs = C(Et, "gu").replace(/notPunctSpace/g, yt).replace(/punctSpace/g, Fe).replace(/punct/g, ge).getRegex(), Is = C(Et, "gu").replace(/notPunctSpace/g, As).replace(/punctSpace/g, Ps).replace(/punct/g, wt).getRegex(), $s = C("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, yt).replace(/punctSpace/g, Fe).replace(/punct/g, ge).getRegex(), Ds = C(/\\(punct)/, "gu").replace(/punct/g, ge).getRegex(), Hs = C(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vs = C(Oe).replace("(?:-->|$)", "-->").getRegex(), Os = C("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vs).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), pe = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Bs = C(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", pe).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ct = C(/^!?\[(label)\]\[(ref)\]/).replace("label", pe).replace("ref", Ve).getRegex(), Tt = C(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ve).getRegex(), Fs = C("reflink|nolink(?!\\()", "g").replace("reflink", Ct).replace("nolink", Tt).getRegex(), qe = {
  _backpedal: Y,
  // only used for GFM url
  anyPunctuation: Ds,
  autolink: Hs,
  blockSkip: Rs,
  br: _t,
  code: Ts,
  del: Y,
  emStrongLDelim: Ns,
  emStrongRDelimAst: zs,
  emStrongRDelimUnd: $s,
  escape: Cs,
  link: Bs,
  nolink: Tt,
  punctuation: Ls,
  reflink: Ct,
  reflinkSearch: Fs,
  tag: Os,
  text: Ss,
  url: Y
}, qs = {
  ...qe,
  link: C(/^!?\[(label)\]\((.*?)\)/).replace("label", pe).getRegex(),
  reflink: C(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", pe).getRegex()
}, ze = {
  ...qe,
  emStrongRDelimAst: Is,
  emStrongLDelim: Ms,
  url: C(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Gs = {
  ...ze,
  br: C(_t).replace("{2,}", "*").getRegex(),
  text: C(ze.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ce = {
  normal: Be,
  gfm: xs,
  pedantic: Es
}, K = {
  normal: qe,
  gfm: ze,
  breaks: Gs,
  pedantic: qs
}, Ws = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, st = (h) => Ws[h];
function V(h, e) {
  if (e) {
    if (A.escapeTest.test(h))
      return h.replace(A.escapeReplace, st);
  } else if (A.escapeTestNoEncode.test(h))
    return h.replace(A.escapeReplaceNoEncode, st);
  return h;
}
function it(h) {
  try {
    h = encodeURI(h).replace(A.percentDecode, "%");
  } catch {
    return null;
  }
  return h;
}
function nt(h, e) {
  const t = h.replace(A.findPipe, (r, o, a) => {
    let c = !1, f = o;
    for (; --f >= 0 && a[f] === "\\"; )
      c = !c;
    return c ? "|" : " |";
  }), s = t.split(A.splitPipe);
  let n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e)
    if (s.length > e)
      s.splice(e);
    else
      for (; s.length < e; )
        s.push("");
  for (; n < s.length; n++)
    s[n] = s[n].trim().replace(A.slashPipe, "|");
  return s;
}
function X(h, e, t) {
  const s = h.length;
  if (s === 0)
    return "";
  let n = 0;
  for (; n < s && h.charAt(s - n - 1) === e; )
    n++;
  return h.slice(0, s - n);
}
function Zs(h, e) {
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
    const c = {
      type: "link",
      raw: t,
      href: r,
      title: o,
      text: a,
      tokens: s.inlineTokens(a)
    };
    return s.state.inLink = !1, c;
  }
  return {
    type: "image",
    raw: t,
    href: r,
    title: o,
    text: a
  };
}
function Qs(h, e, t) {
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
class de {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(e) {
    this.options = e || Z;
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
        text: this.options.pedantic ? s : X(s, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const s = t[0], n = Qs(s, t[3] || "", this.rules);
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
        const n = X(s, "#");
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
        raw: X(t[0], `
`)
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let s = X(t[0], `
`).split(`
`), n = "", r = "";
      const o = [];
      for (; s.length > 0; ) {
        let a = !1;
        const c = [];
        let f;
        for (f = 0; f < s.length; f++)
          if (this.rules.other.blockquoteStart.test(s[f]))
            c.push(s[f]), a = !0;
          else if (!a)
            c.push(s[f]);
          else
            break;
        s = s.slice(f);
        const k = c.join(`
`), v = k.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${k}` : k, r = r ? `${r}
${v}` : v;
        const p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(v, o, !0), this.lexer.state.top = p, s.length === 0)
          break;
        const i = o.at(-1);
        if (i?.type === "code")
          break;
        if (i?.type === "blockquote") {
          const l = i, u = l.raw + `
` + s.join(`
`), d = this.blockquote(u);
          o[o.length - 1] = d, n = n.substring(0, n.length - l.raw.length) + d.raw, r = r.substring(0, r.length - l.text.length) + d.text;
          break;
        } else if (i?.type === "list") {
          const l = i, u = l.raw + `
` + s.join(`
`), d = this.list(u);
          o[o.length - 1] = d, n = n.substring(0, n.length - i.raw.length) + d.raw, r = r.substring(0, r.length - l.raw.length) + d.raw, s = u.substring(o.at(-1).raw.length).split(`
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
        let f = !1, k = "", v = "";
        if (!(t = o.exec(e)) || this.rules.block.hr.test(e))
          break;
        k = t[0], e = e.substring(k.length);
        let p = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), i = e.split(`
`, 1)[0], l = !p.trim(), u = 0;
        if (this.options.pedantic ? (u = 2, v = p.trimStart()) : l ? u = t[1].length + 1 : (u = t[2].search(this.rules.other.nonSpaceChar), u = u > 4 ? 1 : u, v = p.slice(u), u += t[1].length), l && this.rules.other.blankLine.test(i) && (k += i + `
`, e = e.substring(i.length + 1), f = !0), !f) {
          const b = this.rules.other.nextBulletRegex(u), _ = this.rules.other.hrRegex(u), y = this.rules.other.fencesBeginRegex(u), x = this.rules.other.headingBeginRegex(u), S = this.rules.other.htmlBeginRegex(u);
          for (; e; ) {
            const L = e.split(`
`, 1)[0];
            let w;
            if (i = L, this.options.pedantic ? (i = i.replace(this.rules.other.listReplaceNesting, "  "), w = i) : w = i.replace(this.rules.other.tabCharGlobal, "    "), y.test(i) || x.test(i) || S.test(i) || b.test(i) || _.test(i))
              break;
            if (w.search(this.rules.other.nonSpaceChar) >= u || !i.trim())
              v += `
` + w.slice(u);
            else {
              if (l || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || y.test(p) || x.test(p) || _.test(p))
                break;
              v += `
` + i;
            }
            !l && !i.trim() && (l = !0), k += L + `
`, e = e.substring(L.length + 1), p = w.slice(u);
          }
        }
        r.loose || (a ? r.loose = !0 : this.rules.other.doubleBlankLine.test(k) && (a = !0));
        let d = null, m;
        this.options.gfm && (d = this.rules.other.listIsTask.exec(v), d && (m = d[0] !== "[ ] ", v = v.replace(this.rules.other.listReplaceTask, ""))), r.items.push({
          type: "list_item",
          raw: k,
          task: !!d,
          checked: m,
          loose: !1,
          text: v,
          tokens: []
        }), r.raw += k;
      }
      const c = r.items.at(-1);
      if (c)
        c.raw = c.raw.trimEnd(), c.text = c.text.trimEnd();
      else
        return;
      r.raw = r.raw.trimEnd();
      for (let f = 0; f < r.items.length; f++)
        if (this.lexer.state.top = !1, r.items[f].tokens = this.lexer.blockTokens(r.items[f].text, []), !r.loose) {
          const k = r.items[f].tokens.filter((p) => p.type === "space"), v = k.length > 0 && k.some((p) => this.rules.other.anyLine.test(p.raw));
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
        o.rows.push(nt(a, o.header.length).map((c, f) => ({
          text: c,
          tokens: this.lexer.inline(c),
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
        const o = X(s.slice(0, -1), "\\");
        if ((s.length - o.length) % 2 === 0)
          return;
      } else {
        const o = Zs(t[2], "()");
        if (o > -1) {
          const c = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + o;
          t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, c).trim(), t[3] = "";
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
      let a, c, f = o, k = 0;
      const v = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (v.lastIndex = 0, t = t.slice(-1 * e.length + o); (n = v.exec(t)) != null; ) {
        if (a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !a)
          continue;
        if (c = [...a].length, n[3] || n[4]) {
          f += c;
          continue;
        } else if ((n[5] || n[6]) && o % 3 && !((o + c) % 3)) {
          k += c;
          continue;
        }
        if (f -= c, f > 0)
          continue;
        c = Math.min(c, c + f + k);
        const p = [...n[0]][0].length, i = e.slice(0, o + n.index + p + c);
        if (Math.min(o, c) % 2) {
          const u = i.slice(1, -1);
          return {
            type: "em",
            raw: i,
            text: u,
            tokens: this.lexer.inlineTokens(u)
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
class I {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Z, this.options.tokenizer = this.options.tokenizer || new de(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      other: A,
      block: ce.normal,
      inline: K.normal
    };
    this.options.pedantic ? (t.block = ce.pedantic, t.inline = K.pedantic) : this.options.gfm && (t.block = ce.gfm, this.options.breaks ? t.inline = K.breaks : t.inline = K.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: ce,
      inline: K
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new I(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new I(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(A.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const s = this.inlineQueue[t];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], s = !1) {
    for (this.options.pedantic && (e = e.replace(A.tabCharGlobal, "    ").replace(A.spaceLine, "")); e; ) {
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
        let c;
        this.options.extensions.startBlock.forEach((f) => {
          c = f.call({ lexer: this }, a), typeof c == "number" && c >= 0 && (o = Math.min(o, c));
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
      let c = e;
      if (this.options.extensions?.startInline) {
        let f = 1 / 0;
        const k = e.slice(1);
        let v;
        this.options.extensions.startInline.forEach((p) => {
          v = p.call({ lexer: this }, k), typeof v == "number" && v >= 0 && (f = Math.min(f, v));
        }), f < 1 / 0 && f >= 0 && (c = e.substring(0, f + 1));
      }
      if (a = this.tokenizer.inlineText(c)) {
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
class fe {
  options;
  parser;
  // set by the parser
  constructor(e) {
    this.options = e || Z;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: s }) {
    const n = (t || "").match(A.notSpaceStart)?.[0], r = e.replace(A.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + V(n) + '">' + (s ? r : V(r, !0)) + `</code></pre>
` : "<pre><code>" + (s ? r : V(r, !0)) + `</code></pre>
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
      const c = e.items[a];
      n += this.listitem(c);
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
      e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = s + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = s + " " + V(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
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
    return `<code>${V(e, !0)}</code>`;
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
    return t && (o += ' title="' + V(t) + '"'), o += ">" + n + "</a>", o;
  }
  image({ href: e, title: t, text: s }) {
    const n = it(e);
    if (n === null)
      return V(s);
    e = n;
    let r = `<img src="${e}" alt="${s}"`;
    return t && (r += ` title="${V(t)}"`), r += ">", r;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : V(e.text);
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
class $ {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || Z, this.options.renderer = this.options.renderer || new fe(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ge();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new $(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new $(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let s = "";
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (this.options.extensions?.renderers?.[r.type]) {
        const a = r, c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          s += c || "";
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
          let a = o, c = this.renderer.text(a);
          for (; n + 1 < e.length && e[n + 1].type === "text"; )
            a = e[++n], c += `
` + this.renderer.text(a);
          t ? s += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : s += c;
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
class ue {
  options;
  block;
  constructor(e) {
    this.options = e || Z;
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
    return this.block ? I.lex : I.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? $.parse : $.parseInline;
  }
}
class js {
  defaults = $e();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = $;
  Renderer = fe;
  TextRenderer = Ge;
  Lexer = I;
  Tokenizer = de;
  Hooks = ue;
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
            let c = r.renderer.apply(this, a);
            return c === !1 && (c = o.apply(this, a)), c;
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
        const r = this.defaults.renderer || new fe(this.defaults);
        for (const o in s.renderer) {
          if (!(o in r))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const a = o, c = s.renderer[a], f = r[a];
          r[a] = (...k) => {
            let v = c.apply(r, k);
            return v === !1 && (v = f.apply(r, k)), v || "";
          };
        }
        n.renderer = r;
      }
      if (s.tokenizer) {
        const r = this.defaults.tokenizer || new de(this.defaults);
        for (const o in s.tokenizer) {
          if (!(o in r))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const a = o, c = s.tokenizer[a], f = r[a];
          r[a] = (...k) => {
            let v = c.apply(r, k);
            return v === !1 && (v = f.apply(r, k)), v;
          };
        }
        n.tokenizer = r;
      }
      if (s.hooks) {
        const r = this.defaults.hooks || new ue();
        for (const o in s.hooks) {
          if (!(o in r))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const a = o, c = s.hooks[a], f = r[a];
          ue.passThroughHooks.has(o) ? r[a] = (k) => {
            if (this.defaults.async)
              return Promise.resolve(c.call(r, k)).then((p) => f.call(r, p));
            const v = c.call(r, k);
            return f.call(r, v);
          } : r[a] = (...k) => {
            let v = c.apply(r, k);
            return v === !1 && (v = f.apply(r, k)), v;
          };
        }
        n.hooks = r;
      }
      if (s.walkTokens) {
        const r = this.defaults.walkTokens, o = s.walkTokens;
        n.walkTokens = function(a) {
          let c = [];
          return c.push(o.call(this, a)), r && (c = c.concat(r.call(this, a))), c;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return I.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return $.parse(e, t ?? this.defaults);
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
      const c = o.hooks ? o.hooks.provideLexer() : e ? I.lex : I.lexInline, f = o.hooks ? o.hooks.provideParser() : e ? $.parse : $.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((k) => c(k, o)).then((k) => o.hooks ? o.hooks.processAllTokens(k) : k).then((k) => o.walkTokens ? Promise.all(this.walkTokens(k, o.walkTokens)).then(() => k) : k).then((k) => f(k, o)).then((k) => o.hooks ? o.hooks.postprocess(k) : k).catch(a);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let k = c(s, o);
        o.hooks && (k = o.hooks.processAllTokens(k)), o.walkTokens && this.walkTokens(k, o.walkTokens);
        let v = f(k, o);
        return o.hooks && (v = o.hooks.postprocess(v)), v;
      } catch (k) {
        return a(k);
      }
    };
  }
  onError(e, t) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const n = "<p>An error occurred:</p><pre>" + V(s.message + "", !0) + "</pre>";
        return t ? Promise.resolve(n) : n;
      }
      if (t)
        return Promise.reject(s);
      throw s;
    };
  }
}
const W = new js();
function T(h, e) {
  return W.parse(h, e);
}
T.options = T.setOptions = function(h) {
  return W.setOptions(h), T.defaults = W.defaults, gt(T.defaults), T;
};
T.getDefaults = $e;
T.defaults = Z;
T.use = function(...h) {
  return W.use(...h), T.defaults = W.defaults, gt(T.defaults), T;
};
T.walkTokens = function(h, e) {
  return W.walkTokens(h, e);
};
T.parseInline = W.parseInline;
T.Parser = $;
T.parser = $.parse;
T.Renderer = fe;
T.TextRenderer = Ge;
T.Lexer = I;
T.lexer = I.lex;
T.Tokenizer = de;
T.Hooks = ue;
T.parse = T;
T.options;
T.setOptions;
T.use;
T.walkTokens;
T.parseInline;
$.parse;
I.lex;
const Us = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function Ks(h) {
  let e;
  for (; (e = Us.exec(h)) !== null; ) {
    const { dateStr: t } = e.groups;
    h = h.replaceAll(
      e[0],
      new Date(t).toLocaleDateString()
    );
  }
  return h;
}
function rt(h) {
  return h = Ks(h), T.parse(h);
}
const Xs = (h) => {
  const {
    entry: e
  } = h;
  let t;
  switch (e.severity) {
    case "info":
    case "success":
      t = /* @__PURE__ */ g.createElement(Xe, null);
      break;
    case "warning":
      t = /* @__PURE__ */ g.createElement(Xt, null);
      break;
    case "error":
      t = /* @__PURE__ */ g.createElement(Kt, null);
      break;
    default:
      t = /* @__PURE__ */ g.createElement(Xe, null);
  }
  let s = e.message;
  return Array.isArray(s) || (s = [s]), /* @__PURE__ */ g.createElement("div", { className: D("entry", e.severity, e.category) }, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("span", { className: "icon" }, t), /* @__PURE__ */ g.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), s.map((n) => /* @__PURE__ */ g.createElement(
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
}, Pi = (h) => {
  const {
    show: e,
    onShow: t,
    getMessages: s,
    title: n,
    icon: r
  } = h, [o, a] = R([]), [c, f] = R();
  N(() => {
    e && (async () => {
      try {
        let v = await s();
        a(v);
      } catch (v) {
        f(v);
      }
    })();
  }, [e]);
  let k;
  return c || !Array.isArray(o) || o.length > 0 && typeof o[0] != "object" ? k = /* @__PURE__ */ g.createElement(Ze, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : o.length === 0 ? k = /* @__PURE__ */ g.createElement(Ze, { variant: "secondary" }, "There are currently no message") : k = /* @__PURE__ */ g.createElement("div", { className: "announcement-messages" }, o.map((v) => /* @__PURE__ */ g.createElement(Xs, { entry: v }))), /* @__PURE__ */ g.createElement(
    F,
    {
      show: e,
      onHide: () => t(!1),
      size: "lg"
    },
    /* @__PURE__ */ g.createElement(F.Header, null, /* @__PURE__ */ g.createElement(F.Title, null, /* @__PURE__ */ g.createElement("span", null, r), /* @__PURE__ */ g.createElement("span", null, n))),
    /* @__PURE__ */ g.createElement(F.Body, null, k)
  );
}, Ai = (h) => {
  const {
    show: e,
    onHide: t,
    onConfirm: s,
    title: n,
    message: r
  } = h;
  return /* @__PURE__ */ g.createElement(
    F,
    {
      show: e,
      size: "sm",
      onHide: t
    },
    /* @__PURE__ */ g.createElement(F.Header, { closeButton: !0 }, /* @__PURE__ */ g.createElement(F.Title, null, /* @__PURE__ */ g.createElement(Jt, null), /* @__PURE__ */ g.createElement("span", { className: "" }, n))),
    /* @__PURE__ */ g.createElement(F.Body, null, /* @__PURE__ */ g.createElement("p", { className: "ellipsis" }, r)),
    /* @__PURE__ */ g.createElement(F.Footer, null, /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        onClick: t
      },
      "Cancel"
    ), /* @__PURE__ */ g.createElement(
      G,
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
  return /* @__PURE__ */ React.createElement("div", { className: D(
    "pinnable-container",
    `pin-${t}`
  ) }, h.children, /* @__PURE__ */ React.createElement("div", { className: "pinnable-buttons" }, e));
}, Js = pt((h, e) => {
  let {
    expanded: t,
    setExpanded: s,
    canPin: n = !0,
    canClose: r = !0,
    onClose: o = Me,
    pinned: a,
    setPinned: c,
    className: f,
    pinReceiver: k
  } = h;
  R(!1);
  const v = [];
  return n && v.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (p) => {
          p.stopPropagation(), c(!a);
        }
      },
      a ? /* @__PURE__ */ g.createElement(Yt, null) : /* @__PURE__ */ g.createElement(es, null)
    )
  ), r && v.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (p) => {
          p.stopPropagation(), o();
        }
      },
      /* @__PURE__ */ g.createElement(ts, null)
    )
  ), /* @__PURE__ */ g.createElement(
    as,
    {
      ...h,
      className: D(f, {
        pinnable: n,
        closable: r
      }),
      expanded: t || a,
      onExpand: s,
      ref: e
    },
    k ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(at, { buttons: v }, k), h.children) : /* @__PURE__ */ g.createElement(at, { buttons: v }, h.children)
  );
}), Ri = (h) => {
  const {
    progress: e,
    label: t
  } = h;
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: D(
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
}, Ni = (h) => {
  const {
    manager: e,
    onHover: t,
    onClick: s,
    onRange: n,
    onMoveUp: r,
    onMoveDown: o,
    className: a,
    id: c,
    range: f
  } = h;
  return e && (e._range = f, e._onHover = t, e._onClick = s, e._onRange = n, e._moveUp = r, e._moveDown = o), /* @__PURE__ */ g.createElement(
    "div",
    {
      id: c,
      className: D(a, e.classNames()),
      style: {
        position: "relative",
        pointerEvents: "all"
      }
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        onMouseEnter: () => e.autoScrollUp(),
        onMouseLeave: () => e.stopAutoScroll(),
        style: {
          width: "100%",
          position: "absolute",
          top: "0",
          height: "15px",
          zIndex: e.isSelecting() ? 1e3 : -1
        }
      }
    ),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        onMouseEnter: () => e.autoScrollDown(),
        onMouseLeave: () => e.stopAutoScroll(),
        style: {
          width: "100%",
          position: "absolute",
          bottom: "0",
          height: "15px",
          zIndex: e.isSelecting() ? 1e3 : -1
        }
      }
    ),
    h.children
  );
};
let Ys = 0;
const Mi = (h) => {
  const [e, t] = R(null), s = O(window), [n, r] = R(() => Ys++), {
    name: o = "",
    options: a = "",
    notifications: c
  } = h;
  function f() {
    h.onClose();
  }
  return N(() => {
    const k = document.createElement("div");
    t(k);
  }, []), N(() => {
    function k() {
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
        c.error(
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
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), p.removeEventListener("beforeunload", f), p.close();
      };
      window.addEventListener("beforeunload", v);
      const p = s.current;
      return () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), window.removeEventListener("beforeunload", v), p.close();
      };
    }
    if (e)
      return k();
  }, [e]), e && $t(h.children, e);
}, zi = (h) => {
  const {
    id: e
  } = h, { hideAll: t } = is({
    id: "file-ctx-menu"
  }), [s, n] = R(!1);
  function r(a) {
    a.key === "Escape" && t();
  }
  N(() => {
    if (s)
      return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [s]);
  function o(a) {
    const {
      elem: c,
      name: f,
      value: k,
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
}, Ii = (h) => {
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
    type: c = "text",
    required: f = !1
  } = h;
  function k(i) {
    e[o] = i.target.value, s(e[o], { target: e, name: o });
  }
  function v(i) {
    e[o] = i.target.value, t(e[o], { target: e, name: o });
  }
  function p(i) {
    e[o] = i.target.value, n(e[o], { target: e, name: o });
  }
  return /* @__PURE__ */ React.createElement(Qe.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(Qe.Label, { className: "text-secondary small", htmlFor: o }, a), /* @__PURE__ */ React.createElement(
    qt,
    {
      id: o,
      type: c,
      disabled: r,
      value: e[o] ?? "",
      name: o,
      onChange: v,
      required: f,
      onKeyDown: (i) => {
        i.key === "Enter" ? k(i) : i.key === "Escape" && p(i);
      }
    }
  ));
}, St = Dt(null), $i = (h) => {
  const {
    collapsible: e = !0
  } = h, [t, s] = R();
  return /* @__PURE__ */ React.createElement(St.Provider, { value: {
    collapsible: e,
    setExpanded: (n) => s(n),
    expanded: t
  } }, h.children);
}, Di = (h) => {
  const e = Ht(St), {
    canPin: t = !1,
    canClose: s = !1,
    eventKey: n,
    onExpand: r = Me,
    onPin: o = Me
  } = h, [a, c] = usePersistedState(n + ".pinned"), {
    collapsible: f,
    expanded: k,
    setExpanded: v
  } = e;
  return /* @__PURE__ */ React.createElement(
    Js,
    {
      ...h,
      pinned: a,
      setPinned: c,
      expanded: k === n || !f,
      setExpanded: (p) => {
        r(p), v(f && p ? n : null);
      },
      onPin: o,
      canPin: t,
      canClose: s
    },
    h.children
  );
};
function ei(h) {
  return Array.isArray(h) ? h : Object.entries(h).map(([e, t]) => ({ value: isNaN(+e) ? e : +e, label: String(t) }));
}
function Hi(h) {
  const {
    value: e,
    options: t,
    onChange: s,
    disabled: n,
    placeholder: r = "Select…",
    className: o
  } = h, a = dt(() => ei(t), [t]), c = a.find((f) => f.value === e);
  return /* @__PURE__ */ g.createElement(je, null, /* @__PURE__ */ g.createElement(je.Toggle, { disabled: n }, c ? c.label : r), /* @__PURE__ */ g.createElement(Gt, null, a.map((f) => /* @__PURE__ */ g.createElement(
    Wt,
    {
      key: String(f.value),
      onClick: () => s(f.value),
      "aria-disabled": f.disabled
    },
    f.label
  ))));
}
var Pe = { exports: {} };
/*! =======================================================
                      VERSION  11.0.2              
========================================================= */
var lt;
function ti() {
  return lt || (lt = 1, function(h) {
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
        var c = Array.prototype.slice;
        function f() {
        }
        function k(v) {
          if (!v)
            return;
          function p(u) {
            u.prototype.option || (u.prototype.option = function(d) {
              v.isPlainObject(d) && (this.options = v.extend(!0, this.options, d));
            });
          }
          var i = typeof console > "u" ? f : function(u) {
            console.error(u);
          };
          function l(u, d) {
            v.fn[u] = function(m) {
              if (typeof m == "string") {
                for (var b = c.call(arguments, 1), _ = 0, y = this.length; _ < y; _++) {
                  var x = this[_], S = v.data(x, u);
                  if (!S) {
                    i("cannot call methods on " + u + " prior to initialization; attempted to call '" + m + "'");
                    continue;
                  }
                  if (!v.isFunction(S[m]) || m.charAt(0) === "_") {
                    i("no such method '" + m + "' for " + u + " instance");
                    continue;
                  }
                  var L = S[m].apply(S, b);
                  if (L !== void 0 && L !== S)
                    return L;
                }
                return this;
              } else {
                var w = this.map(function() {
                  var E = v.data(this, u);
                  return E ? (E.option(m), E._init()) : (E = new d(this, m), v.data(this, u, E)), v(this);
                });
                return w.length === 1 ? w[0] : w;
              }
            };
          }
          return v.bridget = function(u, d) {
            p(d), l(u, d);
          }, v.bridget;
        }
        k(a);
      }(s), function(a) {
        var c = void 0, f = {
          formatInvalidInputErrorMsg: function(i) {
            return "Invalid input value '" + i + "' passed in";
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, k = {
          linear: {
            getValue: function(i, l) {
              return i < l.min ? l.min : i > l.max ? l.max : i;
            },
            toValue: function(i) {
              var l = i / 100 * (this.options.max - this.options.min), u = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var d, m, b, _ = 0, y = 1; y < this.options.ticks_positions.length; y++)
                  if (i <= this.options.ticks_positions[y]) {
                    d = this.options.ticks[y - 1], b = this.options.ticks_positions[y - 1], m = this.options.ticks[y], _ = this.options.ticks_positions[y];
                    break;
                  }
                var x = (i - b) / (_ - b);
                l = d + x * (m - d), u = !1;
              }
              var S = u ? this.options.min : 0, L = S + Math.round(l / this.options.step) * this.options.step;
              return k.linear.getValue(L, this.options);
            },
            toPercentage: function(i) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var l, u, d, m = 0, b = 0; b < this.options.ticks.length; b++)
                  if (i <= this.options.ticks[b]) {
                    l = b > 0 ? this.options.ticks[b - 1] : 0, d = b > 0 ? this.options.ticks_positions[b - 1] : 0, u = this.options.ticks[b], m = this.options.ticks_positions[b];
                    break;
                  }
                if (b > 0) {
                  var _ = (i - l) / (u - l);
                  return d + _ * (m - d);
                }
              }
              return 100 * (i - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(i) {
              var l = 1 - this.options.min, u = Math.log(this.options.min + l), d = Math.log(this.options.max + l), m = Math.exp(u + (d - u) * i / 100) - l;
              return Math.round(m) === d ? d : (m = this.options.min + Math.round((m - this.options.min) / this.options.step) * this.options.step, k.linear.getValue(m, this.options));
            },
            toPercentage: function(i) {
              if (this.options.max === this.options.min)
                return 0;
              var l = 1 - this.options.min, u = Math.log(this.options.max + l), d = Math.log(this.options.min + l), m = Math.log(i + l);
              return 100 * (m - d) / (u - d);
            }
          }
        };
        o = function(i, l) {
          return v.call(this, i, l), this;
        };
        function v(p, i) {
          this._state = {
            value: null,
            enabled: null,
            offset: null,
            size: null,
            percentage: null,
            inDrag: !1,
            over: !1,
            tickIndex: null
          }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, typeof p == "string" ? this.element = document.querySelector(p) : p instanceof HTMLElement && (this.element = p), i = i || {};
          for (var l = Object.keys(this.defaultOptions), u = i.hasOwnProperty("min"), d = i.hasOwnProperty("max"), m = 0; m < l.length; m++) {
            var b = l[m], _ = i[b];
            _ = typeof _ < "u" ? _ : x(this.element, b), _ = _ !== null ? _ : this.defaultOptions[b], this.options || (this.options = {}), this.options[b] = _;
          }
          if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), this.options.rtl === "auto") {
            var y = window.getComputedStyle(this.element);
            y != null ? this.options.rtl = y.direction === "rtl" : this.options.rtl = this.element.style.direction === "rtl";
          }
          this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom") ? this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right" : this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right") && (this.options.tooltip_position = "top");
          function x(P, ae) {
            var le = "data-slider-" + ae.replace(/_/g, "-"), U = P.getAttribute(le);
            try {
              return JSON.parse(U);
            } catch {
              return U;
            }
          }
          var S = this.element.style.width, L = !1, w = this.element.parentNode, E, M, q, H, z;
          if (this.sliderElem)
            L = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var B = document.createElement("div");
            B.className = "slider-track", M = document.createElement("div"), M.className = "slider-track-low", E = document.createElement("div"), E.className = "slider-selection", q = document.createElement("div"), q.className = "slider-track-high", H = document.createElement("div"), H.className = "slider-handle min-slider-handle", H.setAttribute("role", "slider"), H.setAttribute("aria-valuemin", this.options.min), H.setAttribute("aria-valuemax", this.options.max), z = document.createElement("div"), z.className = "slider-handle max-slider-handle", z.setAttribute("role", "slider"), z.setAttribute("aria-valuemin", this.options.min), z.setAttribute("aria-valuemax", this.options.max), B.appendChild(M), B.appendChild(E), B.appendChild(q), this.rangeHighlightElements = [];
            var te = this.options.rangeHighlights;
            if (Array.isArray(te) && te.length > 0)
              for (var ke = 0; ke < te.length; ke++) {
                var ve = document.createElement("div"), Lt = te[ke].class || "";
                ve.className = "slider-rangeHighlight slider-selection " + Lt, this.rangeHighlightElements.push(ve), B.appendChild(ve);
              }
            var be = Array.isArray(this.options.labelledby);
            if (be && this.options.labelledby[0] && H.setAttribute("aria-labelledby", this.options.labelledby[0]), be && this.options.labelledby[1] && z.setAttribute("aria-labelledby", this.options.labelledby[1]), !be && this.options.labelledby && (H.setAttribute("aria-labelledby", this.options.labelledby), z.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", m = 0; m < this.options.ticks.length; m++) {
                var j = document.createElement("div");
                if (j.className = "slider-tick", this.options.ticks_tooltip) {
                  var We = this._addTickListener(), Pt = We.addMouseEnter(this, j, m), At = We.addMouseLeave(this, j);
                  this.ticksCallbackMap[m] = {
                    mouseEnter: Pt,
                    mouseLeave: At
                  };
                }
                this.ticks.push(j), this.ticksContainer.appendChild(j);
              }
              E.className += " tick-slider-selection";
            }
            if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
              for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", m = 0; m < this.options.ticks_labels.length; m++) {
                var se = document.createElement("div"), Rt = this.options.ticks_positions.length === 0, Nt = this.options.reversed && Rt ? this.options.ticks_labels.length - (m + 1) : m;
                se.className = "slider-tick-label", se.innerHTML = this.options.ticks_labels[Nt], this.tickLabels.push(se), this.tickLabelContainer.appendChild(se);
              }
            var _e = function(ae) {
              var le = document.createElement("div");
              le.className = "arrow";
              var U = document.createElement("div");
              U.className = "tooltip-inner", ae.appendChild(le), ae.appendChild(U);
            }, ie = document.createElement("div");
            ie.className = "tooltip tooltip-main", ie.setAttribute("role", "presentation"), _e(ie);
            var ne = document.createElement("div");
            ne.className = "tooltip tooltip-min", ne.setAttribute("role", "presentation"), _e(ne);
            var oe = document.createElement("div");
            oe.className = "tooltip tooltip-max", oe.setAttribute("role", "presentation"), _e(oe), this.sliderElem.appendChild(B), this.sliderElem.appendChild(ie), this.sliderElem.appendChild(ne), this.sliderElem.appendChild(oe), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(H), this.sliderElem.appendChild(z), w.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), k[this.options.scale] && (this.options.scale = k[this.options.scale]), L === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(P) {
            this._removeProperty(this.trackLow, P), this._removeProperty(this.trackSelection, P), this._removeProperty(this.trackHigh, P);
          }, this), [this.handle1, this.handle2].forEach(function(P) {
            this._removeProperty(P, "left"), this._removeProperty(P, "right"), this._removeProperty(P, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(P) {
            this._removeProperty(P, "bs-tooltip-left"), this._removeProperty(P, "bs-tooltip-right"), this._removeProperty(P, "bs-tooltip-top"), this._removeClass(P, "bs-tooltip-right"), this._removeClass(P, "bs-tooltip-left"), this._removeClass(P, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = S, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (d || (this.options.max = Math.max.apply(Math, this.options.ticks)), u || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = M || this.trackLow, this.trackSelection = E || this.trackSelection, this.trackHigh = q || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = H || this.handle1, this.handle2 = z || this.handle2, L === !0)
            for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), m = 0; m < this.ticks.length; m++)
              this._removeClass(this.ticks[m], "round triangle hide");
          var Mt = ["round", "triangle", "custom"], zt = Mt.indexOf(this.options.handle) !== -1;
          if (zt)
            for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), m = 0; m < this.ticks.length; m++)
              this._addClass(this.ticks[m], this.options.handle);
          if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), this.options.tooltip === "hide")
            this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");
          else if (this.options.tooltip === "always")
            this._showTooltip(), this._alwaysShowTooltip = !0;
          else {
            if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
              var re = this._addTickListener(), ye = re.addMouseEnter(this, this.handle1), we = re.addMouseLeave(this, this.handle1);
              this.handleCallbackMap.handle1 = {
                mouseEnter: ye,
                mouseLeave: we
              }, ye = re.addMouseEnter(this, this.handle2), we = re.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
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
          setValue: function(i, l, u) {
            i || (i = 0);
            var d = this.getValue();
            this._state.value = this._validateInputValue(i);
            var m = this._applyPrecision.bind(this);
            this.options.range ? (this._state.value[0] = m(this._state.value[0]), this._state.value[1] = m(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = m(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this.options.selection === "after" ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
            var b = this.options.range ? this._state.value : this._state.value[0];
            this._setDataVal(b), l === !0 && this._trigger("slide", b);
            var _ = !1;
            return Array.isArray(b) ? _ = d[0] !== b[0] || d[1] !== b[1] : _ = d !== b, _ && u === !0 && this._trigger("change", {
              oldValue: d,
              newValue: b
            }), this;
          },
          destroy: function() {
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), c === n && this.$element.removeData(c), this.$element.removeData(r));
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
            return this._removeSliderEventHandlers(), v.call(this, this.element, this.options), i && i.useCurrentValue === !0 && this.setValue(l), a && (c === n ? (a.data(this.element, n, this), a.data(this.element, r, this)) : a.data(this.element, r, this)), this;
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
            var u = this.eventToCallbackMap[i];
            if (u !== void 0) {
              for (var d = 0; d < u.length; d++)
                if (u[d] === l) {
                  u.splice(d, 1);
                  break;
                }
            }
          },
          _cleanUpEventCallbacksMap: function() {
            for (var i = Object.keys(this.eventToCallbackMap), l = 0; l < i.length; l++) {
              var u = i[l];
              delete this.eventToCallbackMap[u];
            }
          },
          _showTooltip: function() {
            this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), this.tooltip.style.display = "none"), this._state.over = !0;
          },
          _hideTooltip: function() {
            this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), this._removeClass(this.tooltip_max, "show")), this._state.over = !1;
          },
          _setToolTipOnMouseOver: function(i) {
            var l = this, u = this.options.formatter(i ? i.value[0] : this._state.value[0]), d = i ? m(i, this.options.reversed) : m(this._state, this.options.reversed);
            this._setText(this.tooltipInner, u), this.tooltip.style[this.stylePos] = d[0] + "%";
            function m(b, _) {
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
              addMouseEnter: function(l, u, d) {
                var m = function() {
                  var _ = l._copyState(), y = u === l.handle1 ? _.value[0] : _.value[1], x = void 0;
                  d !== void 0 ? (y = l.options.ticks[d], x = l.options.ticks_positions.length > 0 && l.options.ticks_positions[d] || l._toPercentage(l.options.ticks[d])) : x = l._toPercentage(y), _.value[0] = y, _.percentage[0] = x, l._setToolTipOnMouseOver(_), l._showTooltip();
                };
                return u.addEventListener("mouseenter", m, !1), m;
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
            var i, l;
            if (this.options.reversed ? i = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : i = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = i[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), l = this.options.formatter(this._state.value[0]), isNaN(l) ? this.handle1.setAttribute("aria-valuetext", l) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = i[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), l = this.options.formatter(this._state.value[1]), isNaN(l) ? this.handle2.setAttribute("aria-valuetext", l) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
              for (var u = 0; u < this.options.rangeHighlights.length; u++) {
                var d = this._toPercentage(this.options.rangeHighlights[u].start), m = this._toPercentage(this.options.rangeHighlights[u].end);
                if (this.options.reversed) {
                  var b = 100 - m;
                  m = 100 - d, d = b;
                }
                var _ = this._createHighlightRange(d, m);
                _ ? this.options.orientation === "vertical" ? (this.rangeHighlightElements[u].style.top = _.start + "%", this.rangeHighlightElements[u].style.height = _.size + "%") : (this.options.rtl ? this.rangeHighlightElements[u].style.right = _.start + "%" : this.rangeHighlightElements[u].style.left = _.start + "%", this.rangeHighlightElements[u].style.width = _.size + "%") : this.rangeHighlightElements[u].style.display = "none";
              }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              var y = this.options.orientation === "vertical" ? "height" : "width", x;
              this.options.orientation === "vertical" ? x = "marginTop" : this.options.rtl ? x = "marginRight" : x = "marginLeft";
              var S = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var L = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[x] = -S / 2 + "px"), L = this.tickLabelContainer.offsetHeight;
                else
                  for (w = 0; w < this.tickLabelContainer.childNodes.length; w++)
                    this.tickLabelContainer.childNodes[w].offsetHeight > L && (L = this.tickLabelContainer.childNodes[w].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = L + "px");
              }
              for (var w = 0; w < this.options.ticks.length; w++) {
                var E = this.options.ticks_positions[w] || this._toPercentage(this.options.ticks[w]);
                this.options.reversed && (E = 100 - E), this.ticks[w].style[this.stylePos] = E + "%", this._removeClass(this.ticks[w], "in-selection"), this.options.range ? E >= i[0] && E <= i[1] && this._addClass(this.ticks[w], "in-selection") : this.options.selection === "after" && E >= i[0] ? this._addClass(this.ticks[w], "in-selection") : this.options.selection === "before" && E <= i[0] && this._addClass(this.ticks[w], "in-selection"), this.tickLabels[w] && (this.tickLabels[w].style[y] = S + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[w] !== void 0 ? (this.tickLabels[w].style.position = "absolute", this.tickLabels[w].style[this.stylePos] = E + "%", this.tickLabels[w].style[x] = -S / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[w].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[w].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[x] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[w], "label-in-selection label-is-selection"), this.options.range ? E >= i[0] && E <= i[1] && (this._addClass(this.tickLabels[w], "label-in-selection"), (E === i[0] || i[1]) && this._addClass(this.tickLabels[w], "label-is-selection")) : (this.options.selection === "after" && E >= i[0] ? this._addClass(this.tickLabels[w], "label-in-selection") : this.options.selection === "before" && E <= i[0] && this._addClass(this.tickLabels[w], "label-in-selection"), E === i[0] && this._addClass(this.tickLabels[w], "label-is-selection")));
              }
            }
            var M;
            if (this.options.range) {
              M = this.options.formatter(this._state.value), this._setText(this.tooltipInner, M), this.tooltip.style[this.stylePos] = (i[1] + i[0]) / 2 + "%";
              var q = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, q);
              var H = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, H), this.tooltip_min.style[this.stylePos] = i[0] + "%", this.tooltip_max.style[this.stylePos] = i[1] + "%";
            } else
              M = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, M), this.tooltip.style[this.stylePos] = i[0] + "%";
            if (this.options.orientation === "vertical")
              this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(i[0], i[1]) + "%", this.trackSelection.style.top = Math.min(i[0], i[1]) + "%", this.trackSelection.style.height = Math.abs(i[0] - i[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(i[0], i[1]) - Math.abs(i[0] - i[1]) + "%";
            else {
              this.stylePos === "right" ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(i[0], i[1]) + "%", this.stylePos === "right" ? this.trackSelection.style.right = Math.min(i[0], i[1]) + "%" : this.trackSelection.style.left = Math.min(i[0], i[1]) + "%", this.trackSelection.style.width = Math.abs(i[0] - i[1]) + "%", this.stylePos === "right" ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(i[0], i[1]) - Math.abs(i[0] - i[1]) + "%";
              var z = this.tooltip_min.getBoundingClientRect(), B = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? z.right > B.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : z.right > B.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
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
              var u = Math.abs(this._state.percentage[0] - l), d = Math.abs(this._state.percentage[1] - l);
              this._state.dragged = u < d ? 0 : 1, this._adjustPercentageForRangeSliders(l);
            } else
              this._state.dragged = 0;
            this._state.percentage[this._state.dragged] = l, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
            var m = this._calculateValue();
            return this._trigger("slideStart", m), this.setValue(m, !1, !0), i.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
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
                var d = this.options.orientation === "horizontal", m = this.options.orientation === "vertical", b = this.options.rtl, _ = this.options.reversed;
                d ? b ? _ || (u = -u) : _ && (u = -u) : m && (_ || (u = -u));
              }
              var y;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var x = void 0;
                x = this.options.ticks.indexOf(this._state.value[i]), x === -1 && (x = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), x += u, x = Math.max(0, Math.min(this.options.ticks.length - 1, x)), y = this.options.ticks[x];
              } else
                y = this._state.value[i] + u * this.options.step;
              var S = this._toPercentage(y);
              if (this._state.keyCtrl = i, this.options.range) {
                this._adjustPercentageForRangeSliders(S);
                var L = this._state.keyCtrl ? this._state.value[0] : y, w = this._state.keyCtrl ? y : this._state.value[1];
                y = [Math.max(this.options.min, Math.min(this.options.max, L)), Math.max(this.options.min, Math.min(this.options.max, w))];
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
            var u = this._calculateValue(!0);
            return this.setValue(u, !0, !0), !1;
          },
          _touchmove: function(i) {
            i.changedTouches !== void 0 && i.preventDefault && i.preventDefault();
          },
          _adjustPercentageForRangeSliders: function(i) {
            if (this.options.range) {
              var l = this._getNumDigitsAfterDecimalPlace(i);
              l = l ? l - 1 : 0;
              var u = this._applyToFixedAndParseFloat(i, l);
              this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], l) < u ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], l) > u ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < i ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > i && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
            }
          },
          _mouseup: function(i) {
            if (!this._state.enabled)
              return !1;
            var l = this._getPercentage(i);
            this._adjustPercentageForRangeSliders(l), this._state.percentage[this._state.dragged] = l, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
            var u = this._calculateValue(!0);
            return this.setValue(u, !1, !0), this._trigger("slideStop", u), this._state.dragged = null, !1;
          },
          _setValues: function(i, l) {
            var u = i === 0 ? 0 : 100;
            this._state.percentage[i] !== u && (l.data[i] = this._toValue(this._state.percentage[i]), l.data[i] = this._applyPrecision(l.data[i]));
          },
          _calculateValue: function(i) {
            var l = {};
            return this.options.range ? (l.data = [this.options.min, this.options.max], this._setValues(0, l), this._setValues(1, l), i && (l.data[0] = this._snapToClosestTick(l.data[0]), l.data[1] = this._snapToClosestTick(l.data[1]))) : (l.data = this._toValue(this._state.percentage[0]), l.data = parseFloat(l.data), l.data = this._applyPrecision(l.data), i && (l.data = this._snapToClosestTick(l.data))), l.data;
          },
          _snapToClosestTick: function(i) {
            for (var l = [i, 1 / 0], u = 0; u < this.options.ticks.length; u++) {
              var d = Math.abs(this.options.ticks[u] - i);
              d <= l[1] && (l = [this.options.ticks[u], d]);
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
            var u = i.toFixed(l);
            return parseFloat(u);
          },
          /*
          	Credits to Mike Samuel for the following method!
          	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
          */
          _getPercentage: function(i) {
            this.touchCapable && (i.type === "touchstart" || i.type === "touchmove" || i.type === "touchend") && (i = i.changedTouches[0]);
            var l = i[this.mousePos], u = this._state.offset[this.stylePos], d = l - u;
            this.stylePos === "right" && (d = -d);
            var m = d / this._state.size * 100;
            return m = Math.round(m / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (m = 100 - m), Math.max(0, Math.min(100, m));
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
              var u = i[l];
              if (typeof u != "number")
                throw new Error(f.formatInvalidInputErrorMsg(u));
            }
          },
          _setDataVal: function(i) {
            this.element.setAttribute("data-value", i), this.element.setAttribute("value", i), this.element.value = i;
          },
          _trigger: function(i, l) {
            l = l || l === 0 ? l : void 0;
            var u = this.eventToCallbackMap[i];
            if (u && u.length)
              for (var d = 0; d < u.length; d++) {
                var m = u[d];
                m(l);
              }
            a && this._triggerJQueryEvent(i, l);
          },
          _triggerJQueryEvent: function(i, l) {
            var u = {
              type: i,
              value: l
            };
            this.$element.trigger(u), this.$sliderElem.trigger(u);
          },
          _unbindJQueryEventHandlers: function() {
            this.$element.off(), this.$sliderElem.off();
          },
          _setText: function(i, l) {
            typeof i.textContent < "u" ? i.textContent = l : typeof i.innerText < "u" && (i.innerText = l);
          },
          _removeClass: function(i, l) {
            for (var u = l.split(" "), d = i.className, m = 0; m < u.length; m++) {
              var b = u[m], _ = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)");
              d = d.replace(_, " ");
            }
            i.className = d.trim();
          },
          _addClass: function(i, l) {
            for (var u = l.split(" "), d = i.className, m = 0; m < u.length; m++) {
              var b = u[m], _ = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)"), y = _.test(d);
              y || (d += " " + b);
            }
            i.className = d.trim();
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
          _css: function(i, l, u) {
            if (a)
              a.style(i, l, u);
            else {
              var d = l.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(m, b) {
                return b.toUpperCase();
              });
              i.style[d] = u;
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
              var u = l === "left" ? "right" : "left";
              i.forEach((function(d) {
                this._addClass(d, "bs-tooltip-" + l), d.style[u] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? i.forEach((function(d) {
              this._addClass(d, "bs-tooltip-bottom"), d.style.top = "22px";
            }).bind(this)) : i.forEach((function(d) {
              this._addClass(d, "bs-tooltip-top"), d.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(i) {
            for (var l = Math.abs(i - this.options.ticks[0]), u = 0, d = 0; d < this.options.ticks.length; ++d) {
              var m = Math.abs(i - this.options.ticks[d]);
              m < l && (l = m, u = d);
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
        }, a && a.fn && (a.fn.slider ? (t && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), c = r) : (a.bridget(n, o), c = n), a.bridget(r, o), a(function() {
          a("input[data-provide=slider]")[c]();
        }));
      }(s), o;
    });
  }(Pe)), Pe.exports;
}
var si = ti();
const ii = /* @__PURE__ */ Ie(si), ni = (h, e) => {
  const t = {
    ...h,
    tooltip: h.tooltip || "show"
  };
  let {
    change: s,
    onChange: n,
    value: r
  } = h;
  const o = O(), [a, c] = R();
  return s = s ?? n, N(() => {
    if (o.current) {
      const f = new ii(o.current, t);
      return c(f), () => f.destroy();
    }
  }, [o.current]), N(() => {
    e && a && (e.current = {
      mySlider: a
    });
  }, [e, a]), N(() => {
    if (a && s) {
      a.on("change", s);
      for (let f in h)
        a.setAttribute(f, h[f]);
      return () => {
        a.off("change", s);
      };
    }
  }, [h, a]), N(() => {
    h.enabled ? a?.enable() : a?.disable();
  }, [h.enabled]), N(() => {
    a && r !== void 0 && a.setValue(r);
  }, [a, r]), /* @__PURE__ */ g.createElement("div", { ref: o });
}, Vi = g.forwardRef(ni);
var Ae = { exports: {} }, Re, ht;
function oi() {
  if (ht) return Re;
  ht = 1;
  var h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Re = h, Re;
}
var Ne, ct;
function ri() {
  if (ct) return Ne;
  ct = 1;
  var h = /* @__PURE__ */ oi();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Ne = function() {
    function s(o, a, c, f, k, v) {
      if (v !== h) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
var ut;
function ai() {
  return ut || (ut = 1, Ae.exports = /* @__PURE__ */ ri()()), Ae.exports;
}
var li = /* @__PURE__ */ ai();
const Q = /* @__PURE__ */ Ie(li);
function J(h, e, t) {
  return Math.max(e, Math.min(t, h));
}
function hi({ initial: h = 50, minA: e = 120, minB: t = 120, style: s, children: n, onChange: r }) {
  const o = O(null), [a, c] = R(J(h, 0, 100)), f = O(!1), [k, v] = g.Children.toArray(n), p = he(() => {
    const m = o.current;
    if (!m) return;
    const b = m.clientWidth, _ = e / b * 100, y = t / b * 100;
    c((x) => J(x, _, 100 - y));
  }, [e, t]);
  N(() => {
    p();
    const m = () => p();
    return window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [p]);
  const i = he((m) => {
    const b = o.current;
    if (!b) return;
    f.current = !0, m.target.setPointerCapture(m.pointerId);
    const _ = (x) => {
      if (!f.current) return;
      const S = b.getBoundingClientRect(), L = x.clientX - S.left, w = S.width;
      let E = L / w * 100;
      const M = e / w * 100, q = t / w * 100;
      E = J(E, M, 100 - q), c(E), r && r(Math.round(E * 100) / 100);
    }, y = () => {
      f.current = !1;
      try {
        m.target.releasePointerCapture(m.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", _), window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", y);
    };
    window.addEventListener("pointermove", _), window.addEventListener("pointerup", y), window.addEventListener("pointercancel", y);
  }, [e, t, r]), l = he((m) => {
    const b = o.current;
    if (!b) return;
    const _ = b.clientWidth, x = Math.max(8, Math.round(_ * 0.02)) / _ * 100, S = (L) => {
      const w = e / _ * 100, E = t / _ * 100;
      c((M) => J(M + L, w, 100 - E));
    };
    m.key === "ArrowLeft" && (m.preventDefault(), S(-x)), m.key === "ArrowRight" && (m.preventDefault(), S(x)), m.key === "Home" && (m.preventDefault(), S(-100)), m.key === "End" && (m.preventDefault(), S(100));
  }, [e, t]), u = he(() => c(J(h, 0, 100)), [h]), d = dt(() => ({
    gridTemplateColumns: `${a}% 10px ${100 - a}%`,
    gridTemplateRows: "1fr",
    display: "grid"
  }), [a]);
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: o,
      className: "splitpane",
      style: { ...d, ...s || {} }
    },
    /* @__PURE__ */ g.createElement("div", { className: "pane" }, k),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(a),
        tabIndex: 0,
        onPointerDown: i,
        onKeyDown: l,
        onDoubleClick: u,
        className: "separator"
      },
      /* @__PURE__ */ g.createElement("div", { className: "separator-grip" }),
      /* @__PURE__ */ g.createElement("div", { className: "separator-hit" })
    ),
    /* @__PURE__ */ g.createElement("div", { className: "pane" }, v)
  );
}
hi.propTypes = {
  initial: Q.number,
  minA: Q.number,
  minB: Q.number,
  style: Q.object,
  children: Q.node.isRequired,
  onChange: Q.func
};
export {
  Ei as Checkbox,
  as as Collapsible,
  Ci as Disable,
  Ti as DotNotification,
  ls as Drawer,
  Si as DrawerContainer,
  Hi as Dropdown,
  Li as GargantuaList,
  Pi as MessageModal,
  Ai as ModalOkCancel,
  at as PinButtons,
  Js as Pinnable,
  Ri as Progress,
  Ni as RangeSelection,
  Vi as ReactSlider,
  Mi as RenderInWindow,
  hs as Slider,
  hi as SplitPaneH,
  zi as TableContextMenu,
  Ii as TextField,
  Di as Widget,
  $i as WidgetGroup
};
