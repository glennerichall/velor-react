var Ve = Object.defineProperty;
var We = (u, e, t) => e in u ? Ve(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t;
var x = (u, e, t) => We(u, typeof e != "symbol" ? e + "" : e, t);
import h, { useRef as P, useEffect as _, createPortal as Le, forwardRef as _e, Children as Ue, useState as S, createContext as Qe, useContext as Xe } from "react";
import { waitForStableBoundingRect as ne, recursiveMap as Ke } from "./utils.es.js";
import { OverlayTrigger as Ye, Tooltip as Je, Spinner as et, Alert as ge, ProgressBar as tt, Form as me, FormControl as nt } from "react-bootstrap";
import { useResizeDetector as Ne } from "react-resize-detector";
import { ArrowBarLeft as st, ArrowBarRight as rt, PlusCircleFill as ke, DashCircleFill as be, InfoCircleFill as xe, ExclamationTriangleFill as it, ExclamationSquareFill as lt, ExclamationDiamondFill as at, Pin as ot, PinAngle as ct, XLg as ut } from "react-bootstrap-icons";
import z from "react-bootstrap/Button";
import ht from "react-range-slider-input";
import we from "react-bootstrap/ButtonGroup";
import { useInvalidate as pt } from "./hooks.es.js";
import L from "react-bootstrap/Modal";
import { noOp as se } from "velor-utils/utils/functional.mjs";
import { NotificationManager as dt } from "react-notifications";
import { useContextMenu as ft, Menu as gt, Item as ye } from "react-contexify";
function mt(u, e) {
  const t = e.getBoundingClientRect(), {
    top: n,
    left: i,
    right: s,
    bottom: r
  } = t;
  let l, a = 0;
  const [o, c] = u.toUpperCase().split("-");
  return o === "TOP" ? a = n : o === "BOTTOM" ? a = r : o === "CENTER" && (a = (n + r) / 2), c === "LEFT" ? l = i : c === "RIGHT" ? l = s : c === "CENTER" && (l = (i + s) / 2), { ah: l, av: a };
}
function kt(u, e, t) {
  const n = t.getBoundingClientRect(), { ah: i, av: s } = e, [r, l] = u.toUpperCase().split("-");
  let a = {};
  if (r === "TOP")
    a.top = `${s}px`;
  else if (r === "BOTTOM") {
    let o = s - n.height;
    a.top = `${o}px`;
  } else if (r === "CENTER") {
    let o = s - n.height / 2;
    a.top = `${o}px`;
  }
  if (l === "LEFT")
    a.left = `${i}px`;
  else if (l === "RIGHT") {
    let o = i - n.width;
    a.left = `${o}px`;
  } else if (l === "CENTER") {
    let o = i - n.width / 2;
    a.left = `${o}px`;
  }
  return a;
}
const bt = (u) => {
  const {
    to: e,
    targetRef: t,
    children: n,
    style: i,
    anchor: s = "TOP-LEFT",
    align: r = "TOP-LEFT"
  } = u, l = P(), a = typeof e == "string" ? document.getElementById(e) : t.current;
  return _(() => {
    if (!a) return;
    const o = l.current;
    function c() {
      const d = mt(s, a);
      if (o) {
        const f = () => {
          const m = kt(r, d, o), g = {
            ...i,
            width: "fit-content",
            height: "fit-content",
            position: "absolute",
            ...m
          };
          Object.keys(g).forEach((k) => {
            o.style[k] = g[k];
          });
        };
        o.style.position = "absolute", ne(o, f);
      }
    }
    const p = new ResizeObserver(() => {
      ne(a, c);
    });
    return p.observe(a), p.observe(o), () => {
      p.unobserve(a), p.unobserve(o);
    };
  }, [a, l.current]), Le(
    /* @__PURE__ */ h.createElement("div", { ref: l }, n),
    document.body
  );
}, Ln = (u) => {
  const {
    id: e = crypto.randomUUID(),
    label: t,
    placement: n = "right",
    onChange: i,
    name: s,
    target: r,
    checked: l,
    tooltip: a,
    ...o
  } = u, c = /* @__PURE__ */ h.createElement(
    "input",
    {
      ...o,
      id: e,
      type: "checkbox",
      checked: s && r ? r[s] : l,
      onChange: (f) => {
        const m = f.target.checked;
        s && r && (r[s] = m), i && i(m, { name: s, target: r });
      }
    }
  ), p = /* @__PURE__ */ h.createElement(
    "label",
    {
      ...o,
      className: "text-secondary small",
      htmlFor: e
    },
    t
  );
  let d;
  return n === "right" ? d = /* @__PURE__ */ h.createElement("span", null, c, p) : d = /* @__PURE__ */ h.createElement("span", null, p, c), typeof a == "string" && (d = /* @__PURE__ */ h.createElement("span", null, /* @__PURE__ */ h.createElement(
    Ye,
    {
      key: s,
      placement: "right",
      delay: { show: 400, hide: 250 },
      overlay: /* @__PURE__ */ h.createElement(Je, { id: `tooltip-${e}` }, a)
    },
    d
  ))), d;
};
function xt(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var X = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ee;
function wt() {
  return Ee || (Ee = 1, function(u) {
    (function() {
      var e = {}.hasOwnProperty;
      function t() {
        for (var s = "", r = 0; r < arguments.length; r++) {
          var l = arguments[r];
          l && (s = i(s, n(l)));
        }
        return s;
      }
      function n(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return t.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var r = "";
        for (var l in s)
          e.call(s, l) && s[l] && (r = i(r, l));
        return r;
      }
      function i(s, r) {
        return r ? s ? s + " " + r : s + r : s;
      }
      u.exports ? (t.default = t, u.exports = t) : window.classNames = t;
    })();
  }(X)), X.exports;
}
var yt = wt();
const T = /* @__PURE__ */ xt(yt), K = "animating-expand", Y = "animating-collapse", J = "animating", ee = "reduced", te = "expanded", Et = _e((u, e) => {
  const {
    children: t,
    expanded: n,
    onExpand: i = () => {
    },
    onStateChanged: s = () => {
    },
    caption: r,
    className: l
  } = u;
  if (Ue.count(t) === 0) return null;
  const a = P(), o = P(), [c, p] = S(!0), d = () => {
    const y = o.current.getBoundingClientRect();
    a.current.style.width = y.width + "px", a.current.style.height = y.height + "px";
  }, f = () => {
    a.current.style.width = "1.7em", a.current.style.height = "1.7em";
  }, m = () => {
    a.current.classList.remove(te), a.current.classList.add(Y, J), f();
  }, g = () => {
    a.current.classList.remove(ee), a.current.classList.add(K, J), d();
  }, k = () => a.current.classList.contains(K), $ = () => a.current.classList.contains(Y);
  return _(() => {
    n ? (a.current.classList.add(te), d(), i(!0), s(!0)) : (a.current.classList.add(ee), f(), i(!1), s(!1));
    const y = () => {
      i(!1);
    };
    return p(!1), document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, []), _(() => {
    c || (n ? g() : m());
  }, [n]), Ne({
    targetRef: o,
    onResize: (y, E) => {
      a.current.classList.contains("expanded") && ne(o.current, d);
    }
  }), /* @__PURE__ */ h.createElement(
    "div",
    {
      ref: a,
      onTransitionEnd: (y) => {
        y.propertyName === "width" && ($() && !n ? (a.current.classList.add(ee), s(!1)) : k() && n && (a.current.classList.add(te), s(!0)), a.current.classList.remove(
          Y,
          K,
          J
        ));
      },
      onMouseDown: (y) => y.stopPropagation(),
      onClick: (y) => {
        y.stopPropagation(), i(!0);
      },
      className: T(
        l,
        "collapsible"
      )
    },
    /* @__PURE__ */ h.createElement("span", { className: "caption", ref: e }, r),
    /* @__PURE__ */ h.createElement(
      "div",
      {
        ref: o,
        className: "content"
      },
      t
    )
  );
}), _n = (u) => Ke(u.children, (e) => h.cloneElement(e, {
  disabled: e.props.disabled || u.disabled
})), Nn = (u) => {
  const {
    notifications: e,
    variant: t,
    visible: n = !1,
    targetRef: i,
    bordered: s = !1,
    size: r
  } = u, l = P(), a = P(), [o, c] = S(!1);
  function p(d) {
    d.preventDefault(), d.stopPropagation(), o ? (c(!1), l.current.style.width = null, l.current.style.height = null) : (c(!0), l.current.style.width = a.current.scrollWidth + "px", l.current.style.height = a.current.scrollHeight + "px");
  }
  return _(() => {
    const d = (f) => {
      f.stopPropagation(), c(!1), l.current && (l.current.style.width = null, l.current.style.height = null);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []), i ? /* @__PURE__ */ h.createElement(
    bt,
    {
      anchor: "TOP-RIGHT",
      align: "TOP-LEFT",
      targetRef: i
    },
    /* @__PURE__ */ h.createElement(
      "div",
      {
        ref: l,
        onClick: p,
        className: T(
          r,
          t,
          "dot-notification",
          "anchored",
          {
            bordered: s,
            hidden: !n,
            expanded: o
          }
        )
      },
      /* @__PURE__ */ h.createElement(
        "div",
        {
          ref: a,
          className: "content"
        },
        e
      )
    )
  ) : u.children ? /* @__PURE__ */ h.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ h.createElement(
    "div",
    {
      ref: l,
      onClick: p,
      className: T(
        t,
        r,
        "dot-notification",
        {
          bordered: s,
          hidden: !n,
          expanded: o
        }
      )
    },
    /* @__PURE__ */ h.createElement(
      "div",
      {
        ref: a,
        className: "content"
      },
      e
    )
  ), u.children) : /* @__PURE__ */ h.createElement(
    "div",
    {
      ref: l,
      onClick: p,
      className: T(
        t,
        r,
        "dot-notification",
        {
          bordered: s,
          hidden: !n,
          expanded: o
        }
      )
    },
    /* @__PURE__ */ h.createElement(
      "div",
      {
        ref: a,
        className: "content"
      },
      e
    )
  );
}, Rt = (u) => {
  const {
    visible: e,
    onClose: t,
    title: n,
    loading: i,
    className: s = "",
    id: r,
    name: l,
    location: a = "right",
    clearChilds: o = !0
  } = u, [c, p] = S(!0), [d, f] = S(e), [m, g] = S(!1);
  _(() => {
    e !== d && (g(!0), p(!1));
    const N = () => {
      e && t(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [e]);
  let k;
  switch (a) {
    case "right":
      k = /* @__PURE__ */ h.createElement(rt, null);
      break;
    case "left":
      k = /* @__PURE__ */ h.createElement(st, null);
      break;
  }
  const $ = /* @__PURE__ */ h.createElement(
    z,
    {
      onClick: () => t(!1),
      variant: "light"
    },
    k
  ), y = /* @__PURE__ */ h.createElement(
    et,
    {
      className: T({ hidden: !i }),
      animation: "border",
      role: "status",
      variant: "secondary"
    }
  );
  let E;
  return n ? E = /* @__PURE__ */ h.createElement("h5", { className: "title" }, /* @__PURE__ */ h.createElement("span", { className: "content" }, n), /* @__PURE__ */ h.createElement("span", { className: "buttons" }, y, $)) : E = /* @__PURE__ */ h.createElement("div", { className: "title" }, y, /* @__PURE__ */ h.createElement("span", { className: "buttons" }, $)), /* @__PURE__ */ h.createElement(
    "div",
    {
      id: r,
      onAnimationEnd: (N) => g(e),
      onMouseDown: (N) => {
        N.stopPropagation();
      },
      className: T(
        s,
        `name-${l}`,
        "drawer",
        `${a}-drawer`,
        "animate__animated",
        "animate__faster",
        {
          initial: c,
          "willbe-visible": e,
          "initially-visible": d,
          animate__slideInRight: a === "right" && e && !c,
          animate__slideOutRight: a === "right" && !e && !c,
          animate__slideInLeft: a === "left" && e && !c,
          animate__slideOutLeft: a === "left" && !e && !c
        }
      )
    },
    E,
    m || !o ? u.children : null
  );
}, Pn = (u) => {
  const {
    visibleItem: e
  } = u;
  return h.Children.map(u.children, (t) => {
    if (!h.isValidElement(t))
      return t;
    const {
      title: n,
      name: i,
      loading: s,
      className: r,
      id: l,
      onClose: a
    } = t.props;
    return /* @__PURE__ */ h.createElement(
      Rt,
      {
        id: l,
        className: r,
        visible: e === i,
        title: n,
        name: i,
        loading: s,
        onClose: a
      },
      t
    );
  });
}, St = ({
  min: u,
  max: e,
  ticks: t,
  value: n,
  onChange: i,
  formatter: s = (c) => c,
  className: r = "",
  tooltip_position: l,
  orientation: a = "vertical",
  disabled: o = !1
}) => {
  const c = P(), p = Array.isArray(n);
  function d(g, k) {
    return () => {
      const {
        min: $,
        max: y
      } = c.current.rangeLimits;
      let E = [
        y - c.current.value.max,
        y - c.current.value.min
      ];
      return E[k] += g, E[k] = Math.min(y, E[k]), E[k] = Math.max($, E[k]), i(p ? E : E[k]), !1;
    };
  }
  function f(g) {
    const k = -Math.sign(g.deltaY), {
      min: $,
      max: y
    } = c.current.rangeLimits;
    let E = [
      y - c.current.value.max,
      y - c.current.value.min
    ];
    E[1] += k, E[1] = Math.max($, E[1]), E[1] = Math.min(y, E[1]), i(p ? [
      E[0],
      E[1]
    ] : E[1]), g.stopPropagation();
  }
  if (c.current)
    if (p) {
      let g = c.current.index;
      c.current.thumb[0].current.setAttribute("data-value", s(n[g.max])), c.current.thumb[1].current.setAttribute("data-value", s(n[g.min]));
    } else
      c.current.thumb[0].current.setAttribute("data-value", s(n));
  const m = /* @__PURE__ */ h.createElement(
    ht,
    {
      ref: c,
      onInput: (g) => i(p ? [e - g[1], e - g[0]] : e - g[0]),
      value: p ? [e - n[1], e - n[0]] : [e - n, e],
      step: 1,
      max: e,
      min: u,
      disabled: o,
      thumbsDisabled: [!1, !p],
      orientation: a
    }
  );
  return /* @__PURE__ */ h.createElement(
    "div",
    {
      className: T(
        r,
        "slider",
        {
          dual: p,
          disabled: o
        }
      ),
      onWheel: f
    },
    /* @__PURE__ */ h.createElement(we, { className: "max-btns" }, /* @__PURE__ */ h.createElement(
      z,
      {
        variant: "secondary",
        className: "plus",
        disabled: o,
        onPointerDown: (g) => g.stopPropagation(),
        onClick: d(1, 1)
      },
      /* @__PURE__ */ h.createElement(ke, null)
    ), /* @__PURE__ */ h.createElement(
      z,
      {
        variant: "secondary",
        className: "minus",
        disabled: o,
        onPointerDown: (g) => g.stopPropagation(),
        onClick: d(-1, 1)
      },
      /* @__PURE__ */ h.createElement(be, null)
    )),
    /* @__PURE__ */ h.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (g) => g.stopPropagation()
      },
      m
    ),
    p ? /* @__PURE__ */ h.createElement(we, { className: "min-btns" }, /* @__PURE__ */ h.createElement(
      z,
      {
        variant: "secondary",
        className: "plus",
        disabled: o,
        onPointerDown: (g) => g.stopPropagation(),
        onClick: d(1, 0)
      },
      /* @__PURE__ */ h.createElement(ke, null)
    ), /* @__PURE__ */ h.createElement(
      z,
      {
        variant: "secondary",
        className: "minus",
        disabled: o,
        onPointerDown: (g) => g.stopPropagation(),
        onClick: d(-1, 0)
      },
      /* @__PURE__ */ h.createElement(be, null)
    )) : null
  );
};
class vt {
  constructor() {
    x(this, "onWheel", (e) => {
      const t = Math.sign(e.deltaY);
      let n = this.first + t;
      this.setValueSafe(n), this.refresh(), this.invalidate();
    });
    x(this, "onSlide", (e) => {
      const t = e.newValue;
      this.setValueSafe(t);
    });
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
      itemCount: n,
      itemRenderer: i,
      onChange: s,
      index: r
    } = e;
    (this.itemRenderer !== i || this.itemCount !== n) && (this.items = []);
    const l = this.itemCount !== n || this.itemSize !== t || this.itemRenderer !== i || this.first !== r || this.items.length !== this.itemCountInViewport;
    this.itemCount = n, this.itemSize = t, this.itemRenderer = i, this.onChange = s, this.invalidate = pt();
    const a = P();
    this.targetRef = a, Ne({
      targetRef: a,
      onResize: (o, c) => {
        this.height = c, this.update(), this.refresh(), this.invalidate();
      }
    }), r !== this.first && this.setValueSafe(r), this.update(), l && this.refresh();
  }
  setValueSafe(e) {
    const t = this.itemCountInViewport;
    e >= this.itemCount - t + 1 && (e = this.itemCount - t + 1), e < 0 && (e = 0), this.first = e, this.update();
  }
  update() {
    var n;
    const { first: e, last: t } = this;
    this.itemCountInViewport = Math.floor(this.height / this.itemSize) - 1, this.last = Math.min(this.first + this.itemCountInViewport - 1, this.itemCount - 1), isNaN(this.last) && (this.last = this.first), (this.first !== e || this.last !== t) && ((n = this.onChange) == null || n.call(null, this.first, this.last));
  }
  refresh() {
    const e = [];
    if (this.itemRenderer) {
      for (let t = this.first; t <= this.last; t++) {
        const n = this.items.findIndex((i) => i.index === t);
        if (n < 0) {
          let i = this.itemRenderer(t);
          i !== null && e.push({
            index: t,
            element: i
          });
        } else
          e.push(this.items[n]);
      }
      this.items = e;
    }
  }
  getElements() {
    return this.items.map((e) => e.element);
  }
}
const Ct = (u) => {
  const [e, t] = S(() => new vt());
  return e.hook(u), e;
}, Tt = (u, e) => {
  const t = Ct(u);
  return /* @__PURE__ */ h.createElement(
    "div",
    {
      id: u.id,
      className: "gargantua",
      ref: t.targetRef,
      onWheel: t.onWheel
    },
    /* @__PURE__ */ h.createElement("div", null, /* @__PURE__ */ h.createElement("div", { className: "content" }, t.getElements()), /* @__PURE__ */ h.createElement("div", { className: "mock" }), /* @__PURE__ */ h.createElement(
      St,
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
}, zn = h.forwardRef(Tt);
function ie() {
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
let B = ie();
function Pe(u) {
  B = u;
}
const q = { exec: () => null };
function b(u, e = "") {
  let t = typeof u == "string" ? u : u.source;
  const n = {
    replace: (i, s) => {
      let r = typeof s == "string" ? s : s.source;
      return r = r.replace(R.caret, "$1"), t = t.replace(i, r), n;
    },
    getRegex: () => new RegExp(t, e)
  };
  return n;
}
const R = {
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
  listItemRegex: (u) => new RegExp(`^( {0,3}${u})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}#`),
  htmlBeginRegex: (u) => new RegExp(`^ {0,${Math.min(3, u - 1)}}<(?:[a-z].*>|!--)`, "i")
}, $t = /^(?:[ \t]*(?:\n|$))+/, At = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Lt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, F = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, _t = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, le = /(?:[*+-]|\d{1,9}[.)])/, ze = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Ie = b(ze).replace(/bull/g, le).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Nt = b(ze).replace(/bull/g, le).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ae = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Pt = /^[^\n]+/, oe = /(?!\s*\])(?:\\.|[^\[\]\\])+/, zt = b(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", oe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), It = b(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, le).getRegex(), W = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ce = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Bt = b("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ce).replace("tag", W).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Be = b(ae).replace("hr", F).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex(), Dt = b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Be).getRegex(), ue = {
  blockquote: Dt,
  code: At,
  def: zt,
  fences: Lt,
  heading: _t,
  hr: F,
  html: Bt,
  lheading: Ie,
  list: It,
  newline: $t,
  paragraph: Be,
  table: q,
  text: Pt
}, Re = b("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", F).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex(), Mt = {
  ...ue,
  lheading: Nt,
  table: Re,
  paragraph: b(ae).replace("hr", F).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", W).getRegex()
}, Ot = {
  ...ue,
  html: b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ce).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: q,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: b(ae).replace("hr", F).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ie).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, qt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Gt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, De = /^( {2,}|\\)\n(?!\s*$)/, Ft = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, U = /[\p{P}\p{S}]/u, he = /[\s\p{P}\p{S}]/u, Me = /[^\s\p{P}\p{S}]/u, Ht = b(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, he).getRegex(), Oe = /(?!~)[\p{P}\p{S}]/u, Zt = /(?!~)[\s\p{P}\p{S}]/u, jt = /(?:[^\s\p{P}\p{S}]|~)/u, Vt = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, qe = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Wt = b(qe, "u").replace(/punct/g, U).getRegex(), Ut = b(qe, "u").replace(/punct/g, Oe).getRegex(), Ge = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Qt = b(Ge, "gu").replace(/notPunctSpace/g, Me).replace(/punctSpace/g, he).replace(/punct/g, U).getRegex(), Xt = b(Ge, "gu").replace(/notPunctSpace/g, jt).replace(/punctSpace/g, Zt).replace(/punct/g, Oe).getRegex(), Kt = b("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Me).replace(/punctSpace/g, he).replace(/punct/g, U).getRegex(), Yt = b(/\\(punct)/, "gu").replace(/punct/g, U).getRegex(), Jt = b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), en = b(ce).replace("(?:-->|$)", "-->").getRegex(), tn = b("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", en).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Z = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, nn = b(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Z).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Fe = b(/^!?\[(label)\]\[(ref)\]/).replace("label", Z).replace("ref", oe).getRegex(), He = b(/^!?\[(ref)\](?:\[\])?/).replace("ref", oe).getRegex(), sn = b("reflink|nolink(?!\\()", "g").replace("reflink", Fe).replace("nolink", He).getRegex(), pe = {
  _backpedal: q,
  // only used for GFM url
  anyPunctuation: Yt,
  autolink: Jt,
  blockSkip: Vt,
  br: De,
  code: Gt,
  del: q,
  emStrongLDelim: Wt,
  emStrongRDelimAst: Qt,
  emStrongRDelimUnd: Kt,
  escape: qt,
  link: nn,
  nolink: He,
  punctuation: Ht,
  reflink: Fe,
  reflinkSearch: sn,
  tag: tn,
  text: Ft,
  url: q
}, rn = {
  ...pe,
  link: b(/^!?\[(label)\]\((.*?)\)/).replace("label", Z).getRegex(),
  reflink: b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Z).getRegex()
}, re = {
  ...pe,
  emStrongRDelimAst: Xt,
  emStrongLDelim: Ut,
  url: b(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, ln = {
  ...re,
  br: b(De).replace("{2,}", "*").getRegex(),
  text: b(re.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, H = {
  normal: ue,
  gfm: Mt,
  pedantic: Ot
}, M = {
  normal: pe,
  gfm: re,
  breaks: ln,
  pedantic: rn
}, an = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Se = (u) => an[u];
function A(u, e) {
  if (e) {
    if (R.escapeTest.test(u))
      return u.replace(R.escapeReplace, Se);
  } else if (R.escapeTestNoEncode.test(u))
    return u.replace(R.escapeReplaceNoEncode, Se);
  return u;
}
function ve(u) {
  try {
    u = encodeURI(u).replace(R.percentDecode, "%");
  } catch {
    return null;
  }
  return u;
}
function Ce(u, e) {
  var s;
  const t = u.replace(R.findPipe, (r, l, a) => {
    let o = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      o = !o;
    return o ? "|" : " |";
  }), n = t.split(R.splitPipe);
  let i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((s = n.at(-1)) != null && s.trim()) && n.pop(), e)
    if (n.length > e)
      n.splice(e);
    else
      for (; n.length < e; )
        n.push("");
  for (; i < n.length; i++)
    n[i] = n[i].trim().replace(R.slashPipe, "|");
  return n;
}
function O(u, e, t) {
  const n = u.length;
  if (n === 0)
    return "";
  let i = 0;
  for (; i < n && u.charAt(n - i - 1) === e; )
    i++;
  return u.slice(0, n - i);
}
function on(u, e) {
  if (u.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let n = 0; n < u.length; n++)
    if (u[n] === "\\")
      n++;
    else if (u[n] === e[0])
      t++;
    else if (u[n] === e[1] && (t--, t < 0))
      return n;
  return -1;
}
function Te(u, e, t, n, i) {
  const s = e.href, r = e.title || null, l = u[1].replace(i.other.outputLinkReplace, "$1");
  if (u[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const a = {
      type: "link",
      raw: t,
      href: s,
      title: r,
      text: l,
      tokens: n.inlineTokens(l)
    };
    return n.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: t,
    href: s,
    title: r,
    text: l
  };
}
function cn(u, e, t) {
  const n = u.match(t.other.indentCodeCompensation);
  if (n === null)
    return e;
  const i = n[1];
  return e.split(`
`).map((s) => {
    const r = s.match(t.other.beginningSpace);
    if (r === null)
      return s;
    const [l] = r;
    return l.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
class j {
  // set by the lexer
  constructor(e) {
    x(this, "options");
    x(this, "rules");
    // set by the lexer
    x(this, "lexer");
    this.options = e || B;
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
      const n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : O(n, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], i = cn(n, t[3] || "", this.rules);
      return {
        type: "code",
        raw: n,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: i
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        const i = O(n, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (n = i.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: O(t[0], `
`)
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = O(t[0], `
`).split(`
`), i = "", s = "";
      const r = [];
      for (; n.length > 0; ) {
        let l = !1;
        const a = [];
        let o;
        for (o = 0; o < n.length; o++)
          if (this.rules.other.blockquoteStart.test(n[o]))
            a.push(n[o]), l = !0;
          else if (!l)
            a.push(n[o]);
          else
            break;
        n = n.slice(o);
        const c = a.join(`
`), p = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${c}` : c, s = s ? `${s}
${p}` : p;
        const d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(p, r, !0), this.lexer.state.top = d, n.length === 0)
          break;
        const f = r.at(-1);
        if ((f == null ? void 0 : f.type) === "code")
          break;
        if ((f == null ? void 0 : f.type) === "blockquote") {
          const m = f, g = m.raw + `
` + n.join(`
`), k = this.blockquote(g);
          r[r.length - 1] = k, i = i.substring(0, i.length - m.raw.length) + k.raw, s = s.substring(0, s.length - m.text.length) + k.text;
          break;
        } else if ((f == null ? void 0 : f.type) === "list") {
          const m = f, g = m.raw + `
` + n.join(`
`), k = this.list(g);
          r[r.length - 1] = k, i = i.substring(0, i.length - f.raw.length) + k.raw, s = s.substring(0, s.length - m.raw.length) + k.raw, n = g.substring(r.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: i,
        tokens: r,
        text: s
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const i = n.length > 1, s = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
      const r = this.rules.other.listItemRegex(n);
      let l = !1;
      for (; e; ) {
        let o = !1, c = "", p = "";
        if (!(t = r.exec(e)) || this.rules.block.hr.test(e))
          break;
        c = t[0], e = e.substring(c.length);
        let d = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (y) => " ".repeat(3 * y.length)), f = e.split(`
`, 1)[0], m = !d.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, p = d.trimStart()) : m ? g = t[1].length + 1 : (g = t[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, p = d.slice(g), g += t[1].length), m && this.rules.other.blankLine.test(f) && (c += f + `
`, e = e.substring(f.length + 1), o = !0), !o) {
          const y = this.rules.other.nextBulletRegex(g), E = this.rules.other.hrRegex(g), N = this.rules.other.fencesBeginRegex(g), fe = this.rules.other.headingBeginRegex(g), je = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            const Q = e.split(`
`, 1)[0];
            let D;
            if (f = Q, this.options.pedantic ? (f = f.replace(this.rules.other.listReplaceNesting, "  "), D = f) : D = f.replace(this.rules.other.tabCharGlobal, "    "), N.test(f) || fe.test(f) || je.test(f) || y.test(f) || E.test(f))
              break;
            if (D.search(this.rules.other.nonSpaceChar) >= g || !f.trim())
              p += `
` + D.slice(g);
            else {
              if (m || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || N.test(d) || fe.test(d) || E.test(d))
                break;
              p += `
` + f;
            }
            !m && !f.trim() && (m = !0), c += Q + `
`, e = e.substring(Q.length + 1), d = D.slice(g);
          }
        }
        s.loose || (l ? s.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let k = null, $;
        this.options.gfm && (k = this.rules.other.listIsTask.exec(p), k && ($ = k[0] !== "[ ] ", p = p.replace(this.rules.other.listReplaceTask, ""))), s.items.push({
          type: "list_item",
          raw: c,
          task: !!k,
          checked: $,
          loose: !1,
          text: p,
          tokens: []
        }), s.raw += c;
      }
      const a = s.items.at(-1);
      if (a)
        a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else
        return;
      s.raw = s.raw.trimEnd();
      for (let o = 0; o < s.items.length; o++)
        if (this.lexer.state.top = !1, s.items[o].tokens = this.lexer.blockTokens(s.items[o].text, []), !s.loose) {
          const c = s.items[o].tokens.filter((d) => d.type === "space"), p = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
          s.loose = p;
        }
      if (s.loose)
        for (let o = 0; o < s.items.length; o++)
          s.items[o].loose = !0;
      return s;
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
      const n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: n,
        raw: t[0],
        href: i,
        title: s
      };
    }
  }
  table(e) {
    var l;
    const t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2]))
      return;
    const n = Ce(t[1]), i = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = (l = t[3]) != null && l.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], r = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === i.length) {
      for (const a of i)
        this.rules.other.tableAlignRight.test(a) ? r.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? r.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? r.align.push("left") : r.align.push(null);
      for (let a = 0; a < n.length; a++)
        r.header.push({
          text: n[a],
          tokens: this.lexer.inline(n[a]),
          header: !0,
          align: r.align[a]
        });
      for (const a of s)
        r.rows.push(Ce(a, r.header.length).map((o, c) => ({
          text: o,
          tokens: this.lexer.inline(o),
          header: !1,
          align: r.align[c]
        })));
      return r;
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
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n)
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
      const n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n))
          return;
        const r = O(n.slice(0, -1), "\\");
        if ((n.length - r.length) % 2 === 0)
          return;
      } else {
        const r = on(t[2], "()");
        if (r > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + r;
          t[2] = t[2].substring(0, r), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let i = t[2], s = "";
      if (this.options.pedantic) {
        const r = this.rules.other.pedanticHrefTitle.exec(i);
        r && (i = r[1], s = r[3]);
      } else
        s = t[3] ? t[3].slice(1, -1) : "";
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? i = i.slice(1) : i = i.slice(1, -1)), Te(t, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: s && s.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const i = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = t[i.toLowerCase()];
      if (!s) {
        const r = n[0].charAt(0);
        return {
          type: "text",
          raw: r,
          text: r
        };
      }
      return Te(n, s, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let i = this.rules.inline.emStrongLDelim.exec(e);
    if (!i || i[3] && n.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(i[1] || i[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const r = [...i[0]].length - 1;
      let l, a, o = r, c = 0;
      const p = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, t = t.slice(-1 * e.length + r); (i = p.exec(t)) != null; ) {
        if (l = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !l)
          continue;
        if (a = [...l].length, i[3] || i[4]) {
          o += a;
          continue;
        } else if ((i[5] || i[6]) && r % 3 && !((r + a) % 3)) {
          c += a;
          continue;
        }
        if (o -= a, o > 0)
          continue;
        a = Math.min(a, a + o + c);
        const d = [...i[0]][0].length, f = e.slice(0, r + i.index + d + a);
        if (Math.min(r, a) % 2) {
          const g = f.slice(1, -1);
          return {
            type: "em",
            raw: f,
            text: g,
            tokens: this.lexer.inlineTokens(g)
          };
        }
        const m = f.slice(2, -2);
        return {
          type: "strong",
          raw: f,
          text: m,
          tokens: this.lexer.inlineTokens(m)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " ");
      const i = this.rules.other.nonSpaceChar.test(n), s = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return i && s && (n = n.substring(1, n.length - 1)), {
        type: "codespan",
        raw: t[0],
        text: n
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
      let n, i;
      return t[2] === "@" ? (n = t[1], i = "mailto:" + n) : (n = t[1], i = n), {
        type: "link",
        raw: t[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e) {
    var n;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let i, s;
      if (t[2] === "@")
        i = t[0], s = "mailto:" + i;
      else {
        let r;
        do
          r = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (r !== t[0]);
        i = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: i,
        href: s,
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
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      const n = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        escaped: n
      };
    }
  }
}
class v {
  constructor(e) {
    x(this, "tokens");
    x(this, "options");
    x(this, "state");
    x(this, "tokenizer");
    x(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || B, this.options.tokenizer = this.options.tokenizer || new j(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      other: R,
      block: H.normal,
      inline: M.normal
    };
    this.options.pedantic ? (t.block = H.pedantic, t.inline = M.pedantic) : this.options.gfm && (t.block = H.gfm, this.options.breaks ? t.inline = M.breaks : t.inline = M.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: H,
      inline: M
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new v(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new v(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(R.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    var i, s, r;
    for (this.options.pedantic && (e = e.replace(R.tabCharGlobal, "    ").replace(R.spaceLine, "")); e; ) {
      let l;
      if ((s = (i = this.options.extensions) == null ? void 0 : i.block) != null && s.some((o) => (l = o.call({ lexer: this }, e, t)) ? (e = e.substring(l.raw.length), t.push(l), !0) : !1))
        continue;
      if (l = this.tokenizer.space(e)) {
        e = e.substring(l.raw.length);
        const o = t.at(-1);
        l.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(l);
        continue;
      }
      if (l = this.tokenizer.code(e)) {
        e = e.substring(l.raw.length);
        const o = t.at(-1);
        (o == null ? void 0 : o.type) === "paragraph" || (o == null ? void 0 : o.type) === "text" ? (o.raw += `
` + l.raw, o.text += `
` + l.text, this.inlineQueue.at(-1).src = o.text) : t.push(l);
        continue;
      }
      if (l = this.tokenizer.fences(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.heading(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.hr(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.blockquote(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.list(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.html(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.def(e)) {
        e = e.substring(l.raw.length);
        const o = t.at(-1);
        (o == null ? void 0 : o.type) === "paragraph" || (o == null ? void 0 : o.type) === "text" ? (o.raw += `
` + l.raw, o.text += `
` + l.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = {
          href: l.href,
          title: l.title
        });
        continue;
      }
      if (l = this.tokenizer.table(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.lheading(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      let a = e;
      if ((r = this.options.extensions) != null && r.startBlock) {
        let o = 1 / 0;
        const c = e.slice(1);
        let p;
        this.options.extensions.startBlock.forEach((d) => {
          p = d.call({ lexer: this }, c), typeof p == "number" && p >= 0 && (o = Math.min(o, p));
        }), o < 1 / 0 && o >= 0 && (a = e.substring(0, o + 1));
      }
      if (this.state.top && (l = this.tokenizer.paragraph(a))) {
        const o = t.at(-1);
        n && (o == null ? void 0 : o.type) === "paragraph" ? (o.raw += `
` + l.raw, o.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(l), n = a.length !== e.length, e = e.substring(l.raw.length);
        continue;
      }
      if (l = this.tokenizer.text(e)) {
        e = e.substring(l.raw.length);
        const o = t.at(-1);
        (o == null ? void 0 : o.type) === "text" ? (o.raw += `
` + l.raw, o.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(l);
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
    var l, a, o;
    let n = e, i = null;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; )
          c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; )
      n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; )
      n = n.slice(0, i.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let s = !1, r = "";
    for (; e; ) {
      s || (r = ""), s = !1;
      let c;
      if ((a = (l = this.options.extensions) == null ? void 0 : l.inline) != null && a.some((d) => (c = d.call({ lexer: this }, e, t)) ? (e = e.substring(c.raw.length), t.push(c), !0) : !1))
        continue;
      if (c = this.tokenizer.escape(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.tag(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.link(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(c.raw.length);
        const d = t.at(-1);
        c.type === "text" && (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : t.push(c);
        continue;
      }
      if (c = this.tokenizer.emStrong(e, n, r)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.codespan(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.br(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.del(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (c = this.tokenizer.autolink(e)) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(e))) {
        e = e.substring(c.raw.length), t.push(c);
        continue;
      }
      let p = e;
      if ((o = this.options.extensions) != null && o.startInline) {
        let d = 1 / 0;
        const f = e.slice(1);
        let m;
        this.options.extensions.startInline.forEach((g) => {
          m = g.call({ lexer: this }, f), typeof m == "number" && m >= 0 && (d = Math.min(d, m));
        }), d < 1 / 0 && d >= 0 && (p = e.substring(0, d + 1));
      }
      if (c = this.tokenizer.inlineText(p)) {
        e = e.substring(c.raw.length), c.raw.slice(-1) !== "_" && (r = c.raw.slice(-1)), s = !0;
        const d = t.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : t.push(c);
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
    return t;
  }
}
class V {
  // set by the parser
  constructor(e) {
    x(this, "options");
    x(this, "parser");
    this.options = e || B;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    var r;
    const i = (r = (t || "").match(R.notSpaceStart)) == null ? void 0 : r[0], s = e.replace(R.endingNewline, "") + `
`;
    return i ? '<pre><code class="language-' + A(i) + '">' + (n ? s : A(s, !0)) + `</code></pre>
` : "<pre><code>" + (n ? s : A(s, !0)) + `</code></pre>
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
    const t = e.ordered, n = e.start;
    let i = "";
    for (let l = 0; l < e.items.length; l++) {
      const a = e.items[l];
      i += this.listitem(a);
    }
    const s = t ? "ol" : "ul", r = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + s + r + `>
` + i + "</" + s + `>
`;
  }
  listitem(e) {
    var n;
    let t = "";
    if (e.task) {
      const i = this.checkbox({ checked: !!e.checked });
      e.loose ? ((n = e.tokens[0]) == null ? void 0 : n.type) === "paragraph" ? (e.tokens[0].text = i + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = i + " " + A(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
        type: "text",
        raw: i + " ",
        text: i + " ",
        escaped: !0
      }) : t += i + " ";
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
    for (let s = 0; s < e.header.length; s++)
      n += this.tablecell(e.header[s]);
    t += this.tablerow({ text: n });
    let i = "";
    for (let s = 0; s < e.rows.length; s++) {
      const r = e.rows[s];
      n = "";
      for (let l = 0; l < r.length; l++)
        n += this.tablecell(r[l]);
      i += this.tablerow({ text: n });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + i + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
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
    return `<code>${A(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    const i = this.parser.parseInline(n), s = ve(e);
    if (s === null)
      return i;
    e = s;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + A(t) + '"'), r += ">" + i + "</a>", r;
  }
  image({ href: e, title: t, text: n }) {
    const i = ve(e);
    if (i === null)
      return A(n);
    e = i;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${A(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : A(e.text);
  }
}
class de {
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
class C {
  constructor(e) {
    x(this, "options");
    x(this, "renderer");
    x(this, "textRenderer");
    this.options = e || B, this.options.renderer = this.options.renderer || new V(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new de();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new C(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new C(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    var i, s;
    let n = "";
    for (let r = 0; r < e.length; r++) {
      const l = e[r];
      if ((s = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && s[l.type]) {
        const o = l, c = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type)) {
          n += c || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "space": {
          n += this.renderer.space(a);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(a);
          continue;
        }
        case "code": {
          n += this.renderer.code(a);
          continue;
        }
        case "table": {
          n += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          n += this.renderer.list(a);
          continue;
        }
        case "html": {
          n += this.renderer.html(a);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let o = a, c = this.renderer.text(o);
          for (; r + 1 < e.length && e[r + 1].type === "text"; )
            o = e[++r], c += `
` + this.renderer.text(o);
          t ? n += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : n += c;
          continue;
        }
        default: {
          const o = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t = this.renderer) {
    var i, s;
    let n = "";
    for (let r = 0; r < e.length; r++) {
      const l = e[r];
      if ((s = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && s[l.type]) {
        const o = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
          n += o || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "escape": {
          n += t.text(a);
          break;
        }
        case "html": {
          n += t.html(a);
          break;
        }
        case "link": {
          n += t.link(a);
          break;
        }
        case "image": {
          n += t.image(a);
          break;
        }
        case "strong": {
          n += t.strong(a);
          break;
        }
        case "em": {
          n += t.em(a);
          break;
        }
        case "codespan": {
          n += t.codespan(a);
          break;
        }
        case "br": {
          n += t.br(a);
          break;
        }
        case "del": {
          n += t.del(a);
          break;
        }
        case "text": {
          n += t.text(a);
          break;
        }
        default: {
          const o = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
}
class G {
  constructor(e) {
    x(this, "options");
    x(this, "block");
    this.options = e || B;
  }
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
    return this.block ? v.lex : v.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? C.parse : C.parseInline;
  }
}
x(G, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class un {
  constructor(...e) {
    x(this, "defaults", ie());
    x(this, "options", this.setOptions);
    x(this, "parse", this.parseMarkdown(!0));
    x(this, "parseInline", this.parseMarkdown(!1));
    x(this, "Parser", C);
    x(this, "Renderer", V);
    x(this, "TextRenderer", de);
    x(this, "Lexer", v);
    x(this, "Tokenizer", j);
    x(this, "Hooks", G);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var i, s;
    let n = [];
    for (const r of e)
      switch (n = n.concat(t.call(this, r)), r.type) {
        case "table": {
          const l = r;
          for (const a of l.header)
            n = n.concat(this.walkTokens(a.tokens, t));
          for (const a of l.rows)
            for (const o of a)
              n = n.concat(this.walkTokens(o.tokens, t));
          break;
        }
        case "list": {
          const l = r;
          n = n.concat(this.walkTokens(l.items, t));
          break;
        }
        default: {
          const l = r;
          (s = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && s[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((a) => {
            const o = l[a].flat(1 / 0);
            n = n.concat(this.walkTokens(o, t));
          }) : l.tokens && (n = n.concat(this.walkTokens(l.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      const i = { ...n };
      if (i.async = this.defaults.async || i.async || !1, n.extensions && (n.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          const r = t.renderers[s.name];
          r ? t.renderers[s.name] = function(...l) {
            let a = s.renderer.apply(this, l);
            return a === !1 && (a = r.apply(this, l)), a;
          } : t.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const r = t[s.level];
          r ? r.unshift(s.tokenizer) : t[s.level] = [s.tokenizer], s.start && (s.level === "block" ? t.startBlock ? t.startBlock.push(s.start) : t.startBlock = [s.start] : s.level === "inline" && (t.startInline ? t.startInline.push(s.start) : t.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (t.childTokens[s.name] = s.childTokens);
      }), i.extensions = t), n.renderer) {
        const s = this.defaults.renderer || new V(this.defaults);
        for (const r in n.renderer) {
          if (!(r in s))
            throw new Error(`renderer '${r}' does not exist`);
          if (["options", "parser"].includes(r))
            continue;
          const l = r, a = n.renderer[l], o = s[l];
          s[l] = (...c) => {
            let p = a.apply(s, c);
            return p === !1 && (p = o.apply(s, c)), p || "";
          };
        }
        i.renderer = s;
      }
      if (n.tokenizer) {
        const s = this.defaults.tokenizer || new j(this.defaults);
        for (const r in n.tokenizer) {
          if (!(r in s))
            throw new Error(`tokenizer '${r}' does not exist`);
          if (["options", "rules", "lexer"].includes(r))
            continue;
          const l = r, a = n.tokenizer[l], o = s[l];
          s[l] = (...c) => {
            let p = a.apply(s, c);
            return p === !1 && (p = o.apply(s, c)), p;
          };
        }
        i.tokenizer = s;
      }
      if (n.hooks) {
        const s = this.defaults.hooks || new G();
        for (const r in n.hooks) {
          if (!(r in s))
            throw new Error(`hook '${r}' does not exist`);
          if (["options", "block"].includes(r))
            continue;
          const l = r, a = n.hooks[l], o = s[l];
          G.passThroughHooks.has(r) ? s[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(s, c)).then((d) => o.call(s, d));
            const p = a.call(s, c);
            return o.call(s, p);
          } : s[l] = (...c) => {
            let p = a.apply(s, c);
            return p === !1 && (p = o.apply(s, c)), p;
          };
        }
        i.hooks = s;
      }
      if (n.walkTokens) {
        const s = this.defaults.walkTokens, r = n.walkTokens;
        i.walkTokens = function(l) {
          let a = [];
          return a.push(r.call(this, l)), s && (a = a.concat(s.call(this, l))), a;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return v.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return C.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, i) => {
      const s = { ...i }, r = { ...this.defaults, ...s }, l = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && s.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      r.hooks && (r.hooks.options = r, r.hooks.block = e);
      const a = r.hooks ? r.hooks.provideLexer() : e ? v.lex : v.lexInline, o = r.hooks ? r.hooks.provideParser() : e ? C.parse : C.parseInline;
      if (r.async)
        return Promise.resolve(r.hooks ? r.hooks.preprocess(n) : n).then((c) => a(c, r)).then((c) => r.hooks ? r.hooks.processAllTokens(c) : c).then((c) => r.walkTokens ? Promise.all(this.walkTokens(c, r.walkTokens)).then(() => c) : c).then((c) => o(c, r)).then((c) => r.hooks ? r.hooks.postprocess(c) : c).catch(l);
      try {
        r.hooks && (n = r.hooks.preprocess(n));
        let c = a(n, r);
        r.hooks && (c = r.hooks.processAllTokens(c)), r.walkTokens && this.walkTokens(c, r.walkTokens);
        let p = o(c, r);
        return r.hooks && (p = r.hooks.postprocess(p)), p;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const i = "<p>An error occurred:</p><pre>" + A(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(i) : i;
      }
      if (t)
        return Promise.reject(n);
      throw n;
    };
  }
}
const I = new un();
function w(u, e) {
  return I.parse(u, e);
}
w.options = w.setOptions = function(u) {
  return I.setOptions(u), w.defaults = I.defaults, Pe(w.defaults), w;
};
w.getDefaults = ie;
w.defaults = B;
w.use = function(...u) {
  return I.use(...u), w.defaults = I.defaults, Pe(w.defaults), w;
};
w.walkTokens = function(u, e) {
  return I.walkTokens(u, e);
};
w.parseInline = I.parseInline;
w.Parser = C;
w.parser = C.parse;
w.Renderer = V;
w.TextRenderer = de;
w.Lexer = v;
w.lexer = v.lex;
w.Tokenizer = j;
w.Hooks = G;
w.parse = w;
w.options;
w.setOptions;
w.use;
w.walkTokens;
w.parseInline;
C.parse;
v.lex;
const hn = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function pn(u) {
  let e;
  for (; (e = hn.exec(u)) !== null; ) {
    const { dateStr: t } = e.groups;
    u = u.replaceAll(
      e[0],
      new Date(t).toLocaleDateString()
    );
  }
  return u;
}
function $e(u) {
  return u = pn(u), w.parse(u);
}
const dn = (u) => {
  var i, s, r;
  const {
    entry: e
  } = u;
  let t;
  switch (e.severity) {
    case "info":
    case "success":
      t = /* @__PURE__ */ h.createElement(xe, null);
      break;
    case "warning":
      t = /* @__PURE__ */ h.createElement(lt, null);
      break;
    case "error":
      t = /* @__PURE__ */ h.createElement(it, null);
      break;
    default:
      t = /* @__PURE__ */ h.createElement(xe, null);
  }
  let n = e.message;
  return Array.isArray(n) || (n = [n]), /* @__PURE__ */ h.createElement("div", { className: T("entry", e.severity, e.category) }, /* @__PURE__ */ h.createElement("div", null, /* @__PURE__ */ h.createElement("span", { className: "icon" }, t), /* @__PURE__ */ h.createElement("span", { className: "date" }, (s = (i = e.date) == null ? void 0 : i.toLocaleDateString) == null ? void 0 : s.call(e.date))), n.map((l) => /* @__PURE__ */ h.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: $e(l) }
    }
  )), /* @__PURE__ */ h.createElement("div", { className: "changes" }, (r = e.changes) == null ? void 0 : r.map((l) => /* @__PURE__ */ h.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: $e(l) },
      className: "change"
    }
  ))));
}, In = (u) => {
  const {
    show: e,
    onShow: t,
    getMessages: n,
    title: i,
    icon: s
  } = u, [r, l] = S([]), [a, o] = S();
  _(() => {
    e && (async () => {
      try {
        let p = await n();
        l(p);
      } catch (p) {
        o(p);
      }
    })();
  }, [e]);
  let c;
  return a || !Array.isArray(r) || r.length > 0 && typeof r[0] != "object" ? c = /* @__PURE__ */ h.createElement(ge, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : r.length === 0 ? c = /* @__PURE__ */ h.createElement(ge, { variant: "secondary" }, "There are currently no message") : c = /* @__PURE__ */ h.createElement("div", { className: "announcement-messages" }, r.map((p) => /* @__PURE__ */ h.createElement(dn, { entry: p }))), /* @__PURE__ */ h.createElement(
    L,
    {
      show: e,
      onHide: () => t(!1),
      size: "lg"
    },
    /* @__PURE__ */ h.createElement(L.Header, null, /* @__PURE__ */ h.createElement(L.Title, null, /* @__PURE__ */ h.createElement("span", null, s), /* @__PURE__ */ h.createElement("span", null, i))),
    /* @__PURE__ */ h.createElement(L.Body, null, c)
  );
}, Bn = (u) => {
  const {
    show: e,
    onHide: t,
    onConfirm: n,
    title: i,
    message: s
  } = u;
  return /* @__PURE__ */ h.createElement(
    L,
    {
      show: e,
      size: "sm",
      onHide: t
    },
    /* @__PURE__ */ h.createElement(L.Header, { closeButton: !0 }, /* @__PURE__ */ h.createElement(L.Title, null, /* @__PURE__ */ h.createElement(at, null), /* @__PURE__ */ h.createElement("span", { className: "" }, i))),
    /* @__PURE__ */ h.createElement(L.Body, null, /* @__PURE__ */ h.createElement("p", { className: "ellipsis" }, s)),
    /* @__PURE__ */ h.createElement(L.Footer, null, /* @__PURE__ */ h.createElement(
      z,
      {
        variant: "secondary",
        onClick: t
      },
      "Cancel"
    ), /* @__PURE__ */ h.createElement(
      z,
      {
        variant: "danger",
        onClick: () => {
          n(), t();
        }
      },
      "Proceed"
    ))
  );
}, Ae = (u) => {
  const {
    buttons: e,
    position: t = "top"
  } = u;
  return /* @__PURE__ */ React.createElement("div", { className: T(
    "pinnable-container",
    `pin-${t}`
  ) }, u.children, /* @__PURE__ */ React.createElement("div", { className: "pinnable-buttons" }, e));
}, fn = _e((u, e) => {
  let {
    expanded: t,
    setExpanded: n,
    canPin: i = !0,
    canClose: s = !0,
    onClose: r = se,
    pinned: l,
    setPinned: a,
    className: o,
    pinReceiver: c
  } = u;
  S(!1);
  const p = [];
  return i && p.push(
    /* @__PURE__ */ h.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (d) => {
          d.stopPropagation(), a(!l);
        }
      },
      l ? /* @__PURE__ */ h.createElement(ot, null) : /* @__PURE__ */ h.createElement(ct, null)
    )
  ), s && p.push(
    /* @__PURE__ */ h.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (d) => {
          d.stopPropagation(), r();
        }
      },
      /* @__PURE__ */ h.createElement(ut, null)
    )
  ), /* @__PURE__ */ h.createElement(
    Et,
    {
      ...u,
      className: T(o, {
        pinnable: i,
        closable: s
      }),
      expanded: t || l,
      onExpand: n,
      ref: e
    },
    c ? /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Ae, { buttons: p }, c), u.children) : /* @__PURE__ */ h.createElement(Ae, { buttons: p }, u.children)
  );
}), Dn = (u) => {
  const {
    progress: e,
    label: t
  } = u;
  return /* @__PURE__ */ h.createElement(
    "div",
    {
      className: T(
        "progress-container",
        "animate__slower",
        "animate__animated",
        {
          animate__fadeOut: e >= 100 || e <= 0
        }
      )
    },
    /* @__PURE__ */ h.createElement("div", { className: "progress-label" }, t),
    /* @__PURE__ */ h.createElement(tt, { now: e })
  );
}, Mn = (u) => {
  const {
    manager: e,
    onHover: t,
    onClick: n,
    onRange: i,
    onMoveUp: s,
    onMoveDown: r,
    className: l,
    id: a,
    range: o
  } = u;
  return e && (e._range = o, e._onHover = t, e._onClick = n, e._onRange = i, e._moveUp = s, e._moveDown = r), /* @__PURE__ */ h.createElement(
    "div",
    {
      id: a,
      className: T(l, e.classNames()),
      style: {
        position: "relative",
        pointerEvents: "all"
      }
    },
    /* @__PURE__ */ h.createElement(
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
    /* @__PURE__ */ h.createElement(
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
    u.children
  );
};
let gn = 0;
const On = (u) => {
  const [e, t] = S(null), n = P(window), [i, s] = S(() => gn++), {
    name: r = "",
    options: l = ""
  } = u;
  function a() {
    u.onClose();
  }
  return _(() => {
    const o = document.createElement("div");
    t(o);
  }, []), _(() => {
    function o() {
      if (process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Opening the admin control panel"), u.popup ? n.current = window.open(
        u.url ?? "",
        r,
        "popup"
        // `popup,width=${width},height=${height},top=${top},left=${left}`
      ) : n.current = window.open(
        u.url ?? "",
        "_blank",
        l
      ), !n.current) {
        dt.error(
          `Unable to open ${u.name}. Is your browser preventing popups ?`,
          "Failed opening new window",
          1e4
        ), u.onBlocked();
        return;
      }
      n.current.document.close(), n.current.addEventListener("beforeunload", a), n.current.document.body.appendChild(e), Array.from(document.head.querySelectorAll('style,link[rel="stylesheet"]')).forEach((d) => {
        n.current.document.head.appendChild(
          d.cloneNode(!0)
        );
      });
      const c = () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), p.removeEventListener("beforeunload", a), p.close();
      };
      window.addEventListener("beforeunload", c);
      const p = n.current;
      return () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), window.removeEventListener("beforeunload", c), p.close();
      };
    }
    if (e)
      return o();
  }, [e]), e && Le(u.children, e);
}, qn = (u) => {
  const {
    id: e
  } = u, { hideAll: t } = ft({
    id: "file-ctx-menu"
  }), [n, i] = S(!1);
  function s(l) {
    l.key === "Escape" && t();
  }
  _(() => {
    if (n)
      return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [n]);
  function r(l) {
    const {
      elem: a,
      name: o,
      value: c,
      index: p
    } = l;
  }
  return /* @__PURE__ */ h.createElement(
    gt,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: i
    },
    /* @__PURE__ */ h.createElement(
      ye,
      {
        hidden: ({ props: l }) => !l.field.canCopy,
        onMouseDown: (l) => {
          l.stopPropagation(), l.stopImmediatePropagation();
        },
        onClick: r,
        id: "copy"
      },
      "Copy"
    ),
    /* @__PURE__ */ h.createElement(ye, { id: "cut" }, "Cut")
  );
}, Gn = (u) => {
  const {
    target: e,
    onChange: t = () => {
    },
    onAccept: n = () => {
    },
    onAbort: i = () => {
    },
    disabled: s,
    name: r,
    label: l,
    type: a = "text",
    required: o = !1
  } = u;
  function c(f) {
    e[r] = f.target.value, n(e[r], { target: e, name: r });
  }
  function p(f) {
    e[r] = f.target.value, t(e[r], { target: e, name: r });
  }
  function d(f) {
    e[r] = f.target.value, i(e[r], { target: e, name: r });
  }
  return /* @__PURE__ */ React.createElement(me.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(me.Label, { className: "text-secondary small", htmlFor: r }, l), /* @__PURE__ */ React.createElement(
    nt,
    {
      id: r,
      type: a,
      disabled: s,
      value: e[r] ?? "",
      name: r,
      onChange: p,
      required: o,
      onKeyDown: (f) => {
        f.key === "Enter" ? c(f) : f.key === "Escape" && d(f);
      }
    }
  ));
}, Ze = Qe(null), Fn = (u) => {
  const {
    collapsible: e = !0
  } = u, [t, n] = S();
  return /* @__PURE__ */ React.createElement(Ze.Provider, { value: {
    collapsible: e,
    setExpanded: (i) => n(i),
    expanded: t
  } }, u.children);
}, Hn = (u) => {
  const e = Xe(Ze), {
    canPin: t = !1,
    canClose: n = !1,
    eventKey: i,
    onExpand: s = se,
    onPin: r = se
  } = u, [l, a] = usePersistedState(i + ".pinned"), {
    collapsible: o,
    expanded: c,
    setExpanded: p
  } = e;
  return /* @__PURE__ */ React.createElement(
    fn,
    {
      ...u,
      pinned: l,
      setPinned: a,
      expanded: c === i || !o,
      setExpanded: (d) => {
        s(d), p(o && d ? i : null);
      },
      onPin: r,
      canPin: t,
      canClose: n
    },
    u.children
  );
};
export {
  bt as Anchor,
  Ln as Checkbox,
  Et as Collapsible,
  _n as Disable,
  Nn as DotNotification,
  Rt as Drawer,
  Pn as DrawerContainer,
  zn as GargantuaList,
  In as MessageModal,
  Bn as ModalOkCancel,
  Ae as PinButtons,
  fn as Pinnable,
  Dn as Progress,
  Mn as RangeSelection,
  On as RenderInWindow,
  St as Slider,
  qn as TableContextMenu,
  Gn as TextField,
  Hn as Widget,
  Fn as WidgetGroup
};
