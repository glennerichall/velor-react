var Lt = Object.defineProperty;
var St = (p, e, t) => e in p ? Lt(p, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[e] = t;
var E = (p, e, t) => St(p, typeof e != "symbol" ? e + "" : e, t);
import g, { useRef as q, useEffect as N, createPortal as it, forwardRef as nt, Children as At, useState as M, createContext as Pt, useContext as Rt } from "react";
import { waitForStableBoundingRect as Se, recursiveMap as Nt } from "./utils.es.js";
import { OverlayTrigger as Mt, Tooltip as zt, Spinner as It, Alert as Oe, ProgressBar as $t, Form as Fe, FormControl as Dt } from "react-bootstrap";
import { useResizeDetector as ot } from "react-resize-detector";
import { ArrowBarLeft as Vt, ArrowBarRight as Bt, PlusCircleFill as qe, DashCircleFill as Ge, InfoCircleFill as Ze, ExclamationTriangleFill as Ht, ExclamationSquareFill as Ot, ExclamationDiamondFill as Ft, Pin as qt, PinAngle as Gt, XLg as Zt } from "react-bootstrap-icons";
import G from "react-bootstrap/Button";
import "react-range-slider-input/dist/style.css";
import Qt from "react-range-slider-input";
import Qe from "react-bootstrap/ButtonGroup";
import { useInvalidate as rt } from "./hooks.es.js";
import F from "react-bootstrap/Modal";
import { noOp as Ae } from "velor-utils/utils/functional.mjs";
import { useContextMenu as Wt, Menu as jt, Item as We } from "react-contexify";
function Ut(p, e) {
  const t = e.getBoundingClientRect(), {
    top: s,
    left: a,
    right: n,
    bottom: r
  } = t;
  let o, h = 0;
  const [c, u] = p.toUpperCase().split("-");
  return c === "TOP" ? h = s : c === "BOTTOM" ? h = r : c === "CENTER" && (h = (s + r) / 2), u === "LEFT" ? o = a : u === "RIGHT" ? o = n : u === "CENTER" && (o = (a + n) / 2), { ah: o, av: h };
}
function Kt(p, e, t) {
  const s = t.getBoundingClientRect(), { ah: a, av: n } = e, [r, o] = p.toUpperCase().split("-");
  let h = {};
  if (r === "TOP")
    h.top = `${n}px`;
  else if (r === "BOTTOM") {
    let c = n - s.height;
    h.top = `${c}px`;
  } else if (r === "CENTER") {
    let c = n - s.height / 2;
    h.top = `${c}px`;
  }
  if (o === "LEFT")
    h.left = `${a}px`;
  else if (o === "RIGHT") {
    let c = a - s.width;
    h.left = `${c}px`;
  } else if (o === "CENTER") {
    let c = a - s.width / 2;
    h.left = `${c}px`;
  }
  return h;
}
const Xt = (p) => {
  const {
    to: e,
    targetRef: t,
    children: s,
    style: a,
    anchor: n = "TOP-LEFT",
    align: r = "TOP-LEFT"
  } = p, o = q(), h = typeof e == "string" ? document.getElementById(e) : t.current;
  return N(() => {
    if (!h) return;
    const c = o.current;
    function u() {
      const d = Ut(n, h);
      if (c) {
        const i = () => {
          const l = Kt(r, d, c), f = {
            ...a,
            width: "fit-content",
            height: "fit-content",
            position: "absolute",
            ...l
          };
          Object.keys(f).forEach((m) => {
            c.style[m] = f[m];
          });
        };
        c.style.position = "absolute", Se(c, i);
      }
    }
    const k = new ResizeObserver(() => {
      Se(h, u);
    });
    return k.observe(h), k.observe(c), () => {
      k.unobserve(h), k.unobserve(c);
    };
  }, [h, o.current]), it(
    /* @__PURE__ */ g.createElement("div", { ref: o }, s),
    document.body
  );
}, pi = (p) => {
  const {
    id: e = crypto.randomUUID(),
    label: t,
    placement: s = "right",
    onChange: a,
    name: n,
    target: r,
    checked: o,
    tooltip: h,
    ...c
  } = p, u = /* @__PURE__ */ g.createElement(
    "input",
    {
      ...c,
      id: e,
      type: "checkbox",
      checked: n && r ? r[n] : o,
      onChange: (i) => {
        const l = i.target.checked;
        n && r && (r[n] = l), a && a(l, { name: n, target: r });
      }
    }
  ), k = /* @__PURE__ */ g.createElement(
    "label",
    {
      ...c,
      className: "text-secondary small",
      htmlFor: e
    },
    t
  );
  let d;
  return s === "right" ? d = /* @__PURE__ */ g.createElement(g.Fragment, null, u, k) : d = /* @__PURE__ */ g.createElement(g.Fragment, null, k, u), typeof h == "string" && (d = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(
    Mt,
    {
      key: n,
      placement: "right",
      delay: { show: 400, hide: 250 },
      overlay: /* @__PURE__ */ g.createElement(zt, { id: `tooltip-${e}` }, h)
    },
    d
  ))), d;
};
function at(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var ye = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var je;
function Jt() {
  return je || (je = 1, function(p) {
    (function() {
      var e = {}.hasOwnProperty;
      function t() {
        for (var n = "", r = 0; r < arguments.length; r++) {
          var o = arguments[r];
          o && (n = a(n, s(o)));
        }
        return n;
      }
      function s(n) {
        if (typeof n == "string" || typeof n == "number")
          return n;
        if (typeof n != "object")
          return "";
        if (Array.isArray(n))
          return t.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
          return n.toString();
        var r = "";
        for (var o in n)
          e.call(n, o) && n[o] && (r = a(r, o));
        return r;
      }
      function a(n, r) {
        return r ? n ? n + " " + r : n + r : n;
      }
      p.exports ? (t.default = t, p.exports = t) : window.classNames = t;
    })();
  }(ye)), ye.exports;
}
var Yt = Jt();
const D = /* @__PURE__ */ at(Yt), we = "animating-expand", xe = "animating-collapse", Ee = "animating", Ce = "reduced", Te = "expanded", es = nt((p, e) => {
  const {
    children: t,
    expanded: s,
    onExpand: a = () => {
    },
    onStateChanged: n = () => {
    },
    caption: r,
    className: o
  } = p;
  if (At.count(t) === 0) return null;
  const h = q(), c = q(), [u, k] = M(!0), d = () => {
    const b = c.current.getBoundingClientRect();
    h.current.style.width = b.width + "px", h.current.style.height = b.height + "px";
  }, i = () => {
    h.current.style.width = "1.7em", h.current.style.height = "1.7em";
  }, l = () => {
    h.current.classList.remove(Te), h.current.classList.add(xe, Ee), i();
  }, f = () => {
    h.current.classList.remove(Ce), h.current.classList.add(we, Ee), d();
  }, m = () => h.current.classList.contains(we), v = () => h.current.classList.contains(xe);
  return N(() => {
    s ? (h.current.classList.add(Te), d(), a(!0), n(!0)) : (h.current.classList.add(Ce), i(), a(!1), n(!1));
    const b = () => {
      a(!1);
    };
    return k(!1), document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, []), N(() => {
    u || (s ? f() : l());
  }, [s]), ot({
    targetRef: c,
    onResize: (b, _) => {
      h.current.classList.contains("expanded") && Se(c.current, d);
    }
  }), /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: h,
      onTransitionEnd: (b) => {
        b.propertyName === "width" && (v() && !s ? (h.current.classList.add(Ce), n(!1)) : m() && s && (h.current.classList.add(Te), n(!0)), h.current.classList.remove(
          xe,
          we,
          Ee
        ));
      },
      onMouseDown: (b) => b.stopPropagation(),
      onClick: (b) => {
        b.stopPropagation(), a(!0);
      },
      className: D(
        o,
        "collapsible"
      )
    },
    /* @__PURE__ */ g.createElement("span", { className: "caption", ref: e }, r),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: c,
        className: "content"
      },
      t
    )
  );
}), di = (p) => Nt(p.children, (e) => g.cloneElement(e, {
  disabled: e.props.disabled || p.disabled
})), fi = (p) => {
  const {
    notifications: e,
    variant: t,
    visible: s = !1,
    targetRef: a,
    bordered: n = !1,
    size: r
  } = p, o = q(), h = q(), [c, u] = M(!1);
  function k(d) {
    d.preventDefault(), d.stopPropagation(), c ? (u(!1), o.current.style.width = null, o.current.style.height = null) : (u(!0), o.current.style.width = h.current.scrollWidth + "px", o.current.style.height = h.current.scrollHeight + "px");
  }
  return N(() => {
    const d = (i) => {
      i.stopPropagation(), u(!1), o.current && (o.current.style.width = null, o.current.style.height = null);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, []), a ? /* @__PURE__ */ g.createElement(
    Xt,
    {
      anchor: "TOP-RIGHT",
      align: "TOP-LEFT",
      targetRef: a
    },
    /* @__PURE__ */ g.createElement(
      "div",
      {
        ref: o,
        onClick: k,
        className: D(
          r,
          t,
          "dot-notification",
          "anchored",
          {
            bordered: n,
            hidden: !s,
            expanded: c
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
    )
  ) : p.children ? /* @__PURE__ */ g.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: o,
      onClick: k,
      className: D(
        t,
        r,
        "dot-notification",
        {
          bordered: n,
          hidden: !s,
          expanded: c
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
  ), p.children) : /* @__PURE__ */ g.createElement(
    "div",
    {
      ref: o,
      onClick: k,
      className: D(
        t,
        r,
        "dot-notification",
        {
          bordered: n,
          hidden: !s,
          expanded: c
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
}, ts = (p) => {
  const {
    visible: e,
    onClose: t,
    title: s,
    loading: a,
    className: n = "",
    id: r,
    name: o,
    location: h = "right",
    clearChilds: c = !0
  } = p, [u, k] = M(!0), [d, i] = M(e), [l, f] = M(!1);
  N(() => {
    e !== d && (f(!0), k(!1));
    const y = () => {
      e && t(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [e]);
  let m;
  switch (h) {
    case "right":
      m = /* @__PURE__ */ g.createElement(Bt, null);
      break;
    case "left":
      m = /* @__PURE__ */ g.createElement(Vt, null);
      break;
  }
  const v = /* @__PURE__ */ g.createElement(
    G,
    {
      onClick: () => t(!1),
      variant: "light"
    },
    m
  ), b = /* @__PURE__ */ g.createElement(
    It,
    {
      className: D({ hidden: !a }),
      animation: "border",
      role: "status",
      variant: "secondary"
    }
  );
  let _;
  return s ? _ = /* @__PURE__ */ g.createElement("h5", { className: "title" }, /* @__PURE__ */ g.createElement("span", { className: "content" }, s), /* @__PURE__ */ g.createElement("span", { className: "buttons" }, b, v)) : _ = /* @__PURE__ */ g.createElement("div", { className: "title" }, b, /* @__PURE__ */ g.createElement("span", { className: "buttons" }, v)), /* @__PURE__ */ g.createElement(
    "div",
    {
      id: r,
      onAnimationEnd: (y) => f(e),
      onMouseDown: (y) => {
        y.stopPropagation();
      },
      className: D(
        n,
        `name-${o}`,
        "drawer",
        `${h}-drawer`,
        "animate__animated",
        "animate__faster",
        {
          initial: u,
          "willbe-visible": e,
          "initially-visible": d,
          animate__slideInRight: h === "right" && e && !u,
          animate__slideOutRight: h === "right" && !e && !u,
          animate__slideInLeft: h === "left" && e && !u,
          animate__slideOutLeft: h === "left" && !e && !u
        }
      )
    },
    _,
    l || !c ? p.children : null
  );
}, mi = (p) => {
  const {
    visibleItem: e
  } = p;
  return g.Children.map(p.children, (t) => {
    if (!g.isValidElement(t))
      return t;
    const {
      title: s,
      name: a,
      loading: n,
      className: r,
      id: o,
      onClose: h
    } = t.props;
    return /* @__PURE__ */ g.createElement(
      ts,
      {
        id: o,
        className: r,
        visible: e === a,
        title: s,
        name: a,
        loading: n,
        onClose: h
      },
      t
    );
  });
}, ss = ({
  min: p,
  max: e,
  ticks: t,
  value: s,
  onChange: a,
  formatter: n = (u) => u,
  className: r = "",
  tooltip_position: o,
  orientation: h = "vertical",
  disabled: c = !1
}) => {
  const u = q(), k = Array.isArray(s), d = rt();
  function i(m, v) {
    return () => {
      const {
        min: b,
        max: _
      } = u.current.rangeLimits;
      let y = [
        _ - u.current.value.max,
        _ - u.current.value.min
      ];
      return y[v] += m, y[v] = Math.min(_, y[v]), y[v] = Math.max(b, y[v]), a(k ? y : y[v]), !1;
    };
  }
  function l(m) {
    const v = -Math.sign(m.deltaY), {
      min: b,
      max: _
    } = u.current.rangeLimits;
    let y = [
      _ - u.current.value.max,
      _ - u.current.value.min
    ];
    y[1] += v, y[1] = Math.max(b, y[1]), y[1] = Math.min(_, y[1]), a(k ? [
      y[0],
      y[1]
    ] : y[1]), m.stopPropagation();
  }
  if (u.current)
    if (k) {
      let m = u.current.index;
      u.current.thumb[0].current.setAttribute("data-value", n(s[m.max])), u.current.thumb[1].current.setAttribute("data-value", n(s[m.min]));
    } else
      u.current.thumb[0].current.setAttribute("data-value", n(s));
  else
    d();
  const f = /* @__PURE__ */ g.createElement(
    Qt,
    {
      ref: u,
      onInput: (m) => a(k ? [e - m[1], e - m[0]] : e - m[0]),
      value: k ? [e - s[1], e - s[0]] : [e - s, e],
      step: 1,
      max: e,
      min: p,
      disabled: c,
      thumbsDisabled: [!1, !k],
      orientation: h
    }
  );
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      className: D(
        r,
        "slider",
        `slider-${h}`,
        {
          dual: k,
          disabled: c
        }
      ),
      onWheel: l
    },
    /* @__PURE__ */ g.createElement(Qe, { className: "max-btns" }, /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        className: "plus",
        disabled: c,
        onPointerDown: (m) => m.stopPropagation(),
        onClick: i(1, 1)
      },
      /* @__PURE__ */ g.createElement(qe, null)
    ), /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        className: "minus",
        disabled: c,
        onPointerDown: (m) => m.stopPropagation(),
        onClick: i(-1, 1)
      },
      /* @__PURE__ */ g.createElement(Ge, null)
    )),
    /* @__PURE__ */ g.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (m) => m.stopPropagation()
      },
      f
    ),
    k ? /* @__PURE__ */ g.createElement(Qe, { className: "min-btns" }, /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        className: "plus",
        disabled: c,
        onPointerDown: (m) => m.stopPropagation(),
        onClick: i(1, 0)
      },
      /* @__PURE__ */ g.createElement(qe, null)
    ), /* @__PURE__ */ g.createElement(
      G,
      {
        variant: "secondary",
        className: "minus",
        disabled: c,
        onPointerDown: (m) => m.stopPropagation(),
        onClick: i(-1, 0)
      },
      /* @__PURE__ */ g.createElement(Ge, null)
    )) : null
  );
};
class is {
  constructor() {
    E(this, "onWheel", (e) => {
      const t = Math.sign(e.deltaY);
      let s = this.first + t;
      this.setValueSafe(s), this.refresh(), this.invalidate();
    });
    E(this, "onSlide", (e) => {
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
      itemCount: s,
      itemRenderer: a,
      onChange: n,
      index: r
    } = e;
    (this.itemRenderer !== a || this.itemCount !== s) && (this.items = []);
    const o = this.itemCount !== s || this.itemSize !== t || this.itemRenderer !== a || this.first !== r || this.items.length !== this.itemCountInViewport;
    this.itemCount = s, this.itemSize = t, this.itemRenderer = a, this.onChange = n, this.invalidate = rt();
    const h = q();
    this.targetRef = h, ot({
      targetRef: h,
      onResize: (c, u) => {
        this.height = u, this.update(), this.refresh(), this.invalidate();
      }
    }), r !== this.first && this.setValueSafe(r), this.update(), o && this.refresh();
  }
  setValueSafe(e) {
    const t = this.itemCountInViewport;
    e >= this.itemCount - t + 1 && (e = this.itemCount - t + 1), e < 0 && (e = 0), this.first = e, this.update();
  }
  update() {
    var s;
    const { first: e, last: t } = this;
    this.itemCountInViewport = Math.floor(this.height / this.itemSize) - 1, this.last = Math.min(this.first + this.itemCountInViewport - 1, this.itemCount - 1), isNaN(this.last) && (this.last = this.first), (this.first !== e || this.last !== t) && ((s = this.onChange) == null || s.call(null, this.first, this.last));
  }
  refresh() {
    const e = [];
    if (this.itemRenderer) {
      for (let t = this.first; t <= this.last; t++) {
        const s = this.items.findIndex((a) => a.index === t);
        if (s < 0) {
          let a = this.itemRenderer(t);
          a !== null && e.push({
            index: t,
            element: a
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
const ns = (p) => {
  const [e, t] = M(() => new is());
  return e.hook(p), e;
}, os = (p, e) => {
  const t = ns(p);
  return /* @__PURE__ */ g.createElement(
    "div",
    {
      id: p.id,
      className: "gargantua",
      ref: t.targetRef,
      onWheel: t.onWheel
    },
    /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("div", { className: "content" }, t.getElements()), /* @__PURE__ */ g.createElement("div", { className: "mock" }), /* @__PURE__ */ g.createElement(
      ss,
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
}, gi = g.forwardRef(os);
function Re() {
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
let Q = Re();
function lt(p) {
  Q = p;
}
const J = { exec: () => null };
function x(p, e = "") {
  let t = typeof p == "string" ? p : p.source;
  const s = {
    replace: (a, n) => {
      let r = typeof n == "string" ? n : n.source;
      return r = r.replace(R.caret, "$1"), t = t.replace(a, r), s;
    },
    getRegex: () => new RegExp(t, e)
  };
  return s;
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
  listItemRegex: (p) => new RegExp(`^( {0,3}${p})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (p) => new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (p) => new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (p) => new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (p) => new RegExp(`^ {0,${Math.min(3, p - 1)}}#`),
  htmlBeginRegex: (p) => new RegExp(`^ {0,${Math.min(3, p - 1)}}<(?:[a-z].*>|!--)`, "i")
}, rs = /^(?:[ \t]*(?:\n|$))+/, as = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ls = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ee = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, hs = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ne = /(?:[*+-]|\d{1,9}[.)])/, ht = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ct = x(ht).replace(/bull/g, Ne).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), cs = x(ht).replace(/bull/g, Ne).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Me = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, us = /^[^\n]+/, ze = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ps = x(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ze).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ds = x(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ne).getRegex(), de = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ie = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, fs = x("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ie).replace("tag", de).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ut = x(Me).replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", de).getRegex(), ms = x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ut).getRegex(), $e = {
  blockquote: ms,
  code: as,
  def: ps,
  fences: ls,
  heading: hs,
  hr: ee,
  html: fs,
  lheading: ct,
  list: ds,
  newline: rs,
  paragraph: ut,
  table: J,
  text: us
}, Ue = x("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", de).getRegex(), gs = {
  ...$e,
  lheading: cs,
  table: Ue,
  paragraph: x(Me).replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ue).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", de).getRegex()
}, ks = {
  ...$e,
  html: x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ie).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: J,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: x(Me).replace("hr", ee).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ct).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, vs = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, bs = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, pt = /^( {2,}|\\)\n(?!\s*$)/, _s = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, fe = /[\p{P}\p{S}]/u, De = /[\s\p{P}\p{S}]/u, dt = /[^\s\p{P}\p{S}]/u, ys = x(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, De).getRegex(), ft = /(?!~)[\p{P}\p{S}]/u, ws = /(?!~)[\s\p{P}\p{S}]/u, xs = /(?:[^\s\p{P}\p{S}]|~)/u, Es = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, mt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Cs = x(mt, "u").replace(/punct/g, fe).getRegex(), Ts = x(mt, "u").replace(/punct/g, ft).getRegex(), gt = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ls = x(gt, "gu").replace(/notPunctSpace/g, dt).replace(/punctSpace/g, De).replace(/punct/g, fe).getRegex(), Ss = x(gt, "gu").replace(/notPunctSpace/g, xs).replace(/punctSpace/g, ws).replace(/punct/g, ft).getRegex(), As = x("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, dt).replace(/punctSpace/g, De).replace(/punct/g, fe).getRegex(), Ps = x(/\\(punct)/, "gu").replace(/punct/g, fe).getRegex(), Rs = x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ns = x(Ie).replace("(?:-->|$)", "-->").getRegex(), Ms = x("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ns).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ce = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, zs = x(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ce).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), kt = x(/^!?\[(label)\]\[(ref)\]/).replace("label", ce).replace("ref", ze).getRegex(), vt = x(/^!?\[(ref)\](?:\[\])?/).replace("ref", ze).getRegex(), Is = x("reflink|nolink(?!\\()", "g").replace("reflink", kt).replace("nolink", vt).getRegex(), Ve = {
  _backpedal: J,
  // only used for GFM url
  anyPunctuation: Ps,
  autolink: Rs,
  blockSkip: Es,
  br: pt,
  code: bs,
  del: J,
  emStrongLDelim: Cs,
  emStrongRDelimAst: Ls,
  emStrongRDelimUnd: As,
  escape: vs,
  link: zs,
  nolink: vt,
  punctuation: ys,
  reflink: kt,
  reflinkSearch: Is,
  tag: Ms,
  text: _s,
  url: J
}, $s = {
  ...Ve,
  link: x(/^!?\[(label)\]\((.*?)\)/).replace("label", ce).getRegex(),
  reflink: x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ce).getRegex()
}, Pe = {
  ...Ve,
  emStrongRDelimAst: Ss,
  emStrongLDelim: Ts,
  url: x(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Ds = {
  ...Pe,
  br: x(pt).replace("{2,}", "*").getRegex(),
  text: x(Pe.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, he = {
  normal: $e,
  gfm: gs,
  pedantic: ks
}, K = {
  normal: Ve,
  gfm: Pe,
  breaks: Ds,
  pedantic: $s
}, Vs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ke = (p) => Vs[p];
function B(p, e) {
  if (e) {
    if (R.escapeTest.test(p))
      return p.replace(R.escapeReplace, Ke);
  } else if (R.escapeTestNoEncode.test(p))
    return p.replace(R.escapeReplaceNoEncode, Ke);
  return p;
}
function Xe(p) {
  try {
    p = encodeURI(p).replace(R.percentDecode, "%");
  } catch {
    return null;
  }
  return p;
}
function Je(p, e) {
  var n;
  const t = p.replace(R.findPipe, (r, o, h) => {
    let c = !1, u = o;
    for (; --u >= 0 && h[u] === "\\"; )
      c = !c;
    return c ? "|" : " |";
  }), s = t.split(R.splitPipe);
  let a = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((n = s.at(-1)) != null && n.trim()) && s.pop(), e)
    if (s.length > e)
      s.splice(e);
    else
      for (; s.length < e; )
        s.push("");
  for (; a < s.length; a++)
    s[a] = s[a].trim().replace(R.slashPipe, "|");
  return s;
}
function X(p, e, t) {
  const s = p.length;
  if (s === 0)
    return "";
  let a = 0;
  for (; a < s && p.charAt(s - a - 1) === e; )
    a++;
  return p.slice(0, s - a);
}
function Bs(p, e) {
  if (p.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let s = 0; s < p.length; s++)
    if (p[s] === "\\")
      s++;
    else if (p[s] === e[0])
      t++;
    else if (p[s] === e[1] && (t--, t < 0))
      return s;
  return -1;
}
function Ye(p, e, t, s, a) {
  const n = e.href, r = e.title || null, o = p[1].replace(a.other.outputLinkReplace, "$1");
  if (p[0].charAt(0) !== "!") {
    s.state.inLink = !0;
    const h = {
      type: "link",
      raw: t,
      href: n,
      title: r,
      text: o,
      tokens: s.inlineTokens(o)
    };
    return s.state.inLink = !1, h;
  }
  return {
    type: "image",
    raw: t,
    href: n,
    title: r,
    text: o
  };
}
function Hs(p, e, t) {
  const s = p.match(t.other.indentCodeCompensation);
  if (s === null)
    return e;
  const a = s[1];
  return e.split(`
`).map((n) => {
    const r = n.match(t.other.beginningSpace);
    if (r === null)
      return n;
    const [o] = r;
    return o.length >= a.length ? n.slice(a.length) : n;
  }).join(`
`);
}
class ue {
  // set by the lexer
  constructor(e) {
    E(this, "options");
    E(this, "rules");
    // set by the lexer
    E(this, "lexer");
    this.options = e || Q;
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
      const s = t[0], a = Hs(s, t[3] || "", this.rules);
      return {
        type: "code",
        raw: s,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: a
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let s = t[2].trim();
      if (this.rules.other.endingHash.test(s)) {
        const a = X(s, "#");
        (this.options.pedantic || !a || this.rules.other.endingSpaceChar.test(a)) && (s = a.trim());
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
`), a = "", n = "";
      const r = [];
      for (; s.length > 0; ) {
        let o = !1;
        const h = [];
        let c;
        for (c = 0; c < s.length; c++)
          if (this.rules.other.blockquoteStart.test(s[c]))
            h.push(s[c]), o = !0;
          else if (!o)
            h.push(s[c]);
          else
            break;
        s = s.slice(c);
        const u = h.join(`
`), k = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        a = a ? `${a}
${u}` : u, n = n ? `${n}
${k}` : k;
        const d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(k, r, !0), this.lexer.state.top = d, s.length === 0)
          break;
        const i = r.at(-1);
        if ((i == null ? void 0 : i.type) === "code")
          break;
        if ((i == null ? void 0 : i.type) === "blockquote") {
          const l = i, f = l.raw + `
` + s.join(`
`), m = this.blockquote(f);
          r[r.length - 1] = m, a = a.substring(0, a.length - l.raw.length) + m.raw, n = n.substring(0, n.length - l.text.length) + m.text;
          break;
        } else if ((i == null ? void 0 : i.type) === "list") {
          const l = i, f = l.raw + `
` + s.join(`
`), m = this.list(f);
          r[r.length - 1] = m, a = a.substring(0, a.length - i.raw.length) + m.raw, n = n.substring(0, n.length - l.raw.length) + m.raw, s = f.substring(r.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: a,
        tokens: r,
        text: n
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let s = t[1].trim();
      const a = s.length > 1, n = {
        type: "list",
        raw: "",
        ordered: a,
        start: a ? +s.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      s = a ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = a ? s : "[*+-]");
      const r = this.rules.other.listItemRegex(s);
      let o = !1;
      for (; e; ) {
        let c = !1, u = "", k = "";
        if (!(t = r.exec(e)) || this.rules.block.hr.test(e))
          break;
        u = t[0], e = e.substring(u.length);
        let d = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), i = e.split(`
`, 1)[0], l = !d.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, k = d.trimStart()) : l ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, k = d.slice(f), f += t[1].length), l && this.rules.other.blankLine.test(i) && (u += i + `
`, e = e.substring(i.length + 1), c = !0), !c) {
          const b = this.rules.other.nextBulletRegex(f), _ = this.rules.other.hrRegex(f), y = this.rules.other.fencesBeginRegex(f), T = this.rules.other.headingBeginRegex(f), A = this.rules.other.htmlBeginRegex(f);
          for (; e; ) {
            const S = e.split(`
`, 1)[0];
            let w;
            if (i = S, this.options.pedantic ? (i = i.replace(this.rules.other.listReplaceNesting, "  "), w = i) : w = i.replace(this.rules.other.tabCharGlobal, "    "), y.test(i) || T.test(i) || A.test(i) || b.test(i) || _.test(i))
              break;
            if (w.search(this.rules.other.nonSpaceChar) >= f || !i.trim())
              k += `
` + w.slice(f);
            else {
              if (l || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || y.test(d) || T.test(d) || _.test(d))
                break;
              k += `
` + i;
            }
            !l && !i.trim() && (l = !0), u += S + `
`, e = e.substring(S.length + 1), d = w.slice(f);
          }
        }
        n.loose || (o ? n.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (o = !0));
        let m = null, v;
        this.options.gfm && (m = this.rules.other.listIsTask.exec(k), m && (v = m[0] !== "[ ] ", k = k.replace(this.rules.other.listReplaceTask, ""))), n.items.push({
          type: "list_item",
          raw: u,
          task: !!m,
          checked: v,
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
      for (let c = 0; c < n.items.length; c++)
        if (this.lexer.state.top = !1, n.items[c].tokens = this.lexer.blockTokens(n.items[c].text, []), !n.loose) {
          const u = n.items[c].tokens.filter((d) => d.type === "space"), k = u.length > 0 && u.some((d) => this.rules.other.anyLine.test(d.raw));
          n.loose = k;
        }
      if (n.loose)
        for (let c = 0; c < n.items.length; c++)
          n.items[c].loose = !0;
      return n;
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
      const s = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), a = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: s,
        raw: t[0],
        href: a,
        title: n
      };
    }
  }
  table(e) {
    var o;
    const t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2]))
      return;
    const s = Je(t[1]), a = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = (o = t[3]) != null && o.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], r = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === a.length) {
      for (const h of a)
        this.rules.other.tableAlignRight.test(h) ? r.align.push("right") : this.rules.other.tableAlignCenter.test(h) ? r.align.push("center") : this.rules.other.tableAlignLeft.test(h) ? r.align.push("left") : r.align.push(null);
      for (let h = 0; h < s.length; h++)
        r.header.push({
          text: s[h],
          tokens: this.lexer.inline(s[h]),
          header: !0,
          align: r.align[h]
        });
      for (const h of n)
        r.rows.push(Je(h, r.header.length).map((c, u) => ({
          text: c,
          tokens: this.lexer.inline(c),
          header: !1,
          align: r.align[u]
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
        const r = X(s.slice(0, -1), "\\");
        if ((s.length - r.length) % 2 === 0)
          return;
      } else {
        const r = Bs(t[2], "()");
        if (r > -1) {
          const h = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + r;
          t[2] = t[2].substring(0, r), t[0] = t[0].substring(0, h).trim(), t[3] = "";
        }
      }
      let a = t[2], n = "";
      if (this.options.pedantic) {
        const r = this.rules.other.pedanticHrefTitle.exec(a);
        r && (a = r[1], n = r[3]);
      } else
        n = t[3] ? t[3].slice(1, -1) : "";
      return a = a.trim(), this.rules.other.startAngleBracket.test(a) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? a = a.slice(1) : a = a.slice(1, -1)), Ye(t, {
        href: a && a.replace(this.rules.inline.anyPunctuation, "$1"),
        title: n && n.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let s;
    if ((s = this.rules.inline.reflink.exec(e)) || (s = this.rules.inline.nolink.exec(e))) {
      const a = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = t[a.toLowerCase()];
      if (!n) {
        const r = s[0].charAt(0);
        return {
          type: "text",
          raw: r,
          text: r
        };
      }
      return Ye(s, n, s[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, s = "") {
    let a = this.rules.inline.emStrongLDelim.exec(e);
    if (!a || a[3] && s.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(a[1] || a[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const r = [...a[0]].length - 1;
      let o, h, c = r, u = 0;
      const k = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, t = t.slice(-1 * e.length + r); (a = k.exec(t)) != null; ) {
        if (o = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !o)
          continue;
        if (h = [...o].length, a[3] || a[4]) {
          c += h;
          continue;
        } else if ((a[5] || a[6]) && r % 3 && !((r + h) % 3)) {
          u += h;
          continue;
        }
        if (c -= h, c > 0)
          continue;
        h = Math.min(h, h + c + u);
        const d = [...a[0]][0].length, i = e.slice(0, r + a.index + d + h);
        if (Math.min(r, h) % 2) {
          const f = i.slice(1, -1);
          return {
            type: "em",
            raw: i,
            text: f,
            tokens: this.lexer.inlineTokens(f)
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
      const a = this.rules.other.nonSpaceChar.test(s), n = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
      return a && n && (s = s.substring(1, s.length - 1)), {
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
      let s, a;
      return t[2] === "@" ? (s = t[1], a = "mailto:" + s) : (s = t[1], a = s), {
        type: "link",
        raw: t[0],
        text: s,
        href: a,
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
    var s;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let a, n;
      if (t[2] === "@")
        a = t[0], n = "mailto:" + a;
      else {
        let r;
        do
          r = t[0], t[0] = ((s = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : s[0]) ?? "";
        while (r !== t[0]);
        a = t[0], t[1] === "www." ? n = "http://" + t[0] : n = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: a,
        href: n,
        tokens: [
          {
            type: "text",
            raw: a,
            text: a
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
  constructor(e) {
    E(this, "tokens");
    E(this, "options");
    E(this, "state");
    E(this, "tokenizer");
    E(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Q, this.options.tokenizer = this.options.tokenizer || new ue(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      other: R,
      block: he.normal,
      inline: K.normal
    };
    this.options.pedantic ? (t.block = he.pedantic, t.inline = K.pedantic) : this.options.gfm && (t.block = he.gfm, this.options.breaks ? t.inline = K.breaks : t.inline = K.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: he,
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
    e = e.replace(R.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const s = this.inlineQueue[t];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], s = !1) {
    var a, n, r;
    for (this.options.pedantic && (e = e.replace(R.tabCharGlobal, "    ").replace(R.spaceLine, "")); e; ) {
      let o;
      if ((n = (a = this.options.extensions) == null ? void 0 : a.block) != null && n.some((c) => (o = c.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1))
        continue;
      if (o = this.tokenizer.space(e)) {
        e = e.substring(o.raw.length);
        const c = t.at(-1);
        o.raw.length === 1 && c !== void 0 ? c.raw += `
` : t.push(o);
        continue;
      }
      if (o = this.tokenizer.code(e)) {
        e = e.substring(o.raw.length);
        const c = t.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + o.raw, c.text += `
` + o.text, this.inlineQueue.at(-1).src = c.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.fences(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.heading(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.hr(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.blockquote(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.list(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.html(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.def(e)) {
        e = e.substring(o.raw.length);
        const c = t.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + o.raw, c.text += `
` + o.raw, this.inlineQueue.at(-1).src = c.text) : this.tokens.links[o.tag] || (this.tokens.links[o.tag] = {
          href: o.href,
          title: o.title
        });
        continue;
      }
      if (o = this.tokenizer.table(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.lheading(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let h = e;
      if ((r = this.options.extensions) != null && r.startBlock) {
        let c = 1 / 0;
        const u = e.slice(1);
        let k;
        this.options.extensions.startBlock.forEach((d) => {
          k = d.call({ lexer: this }, u), typeof k == "number" && k >= 0 && (c = Math.min(c, k));
        }), c < 1 / 0 && c >= 0 && (h = e.substring(0, c + 1));
      }
      if (this.state.top && (o = this.tokenizer.paragraph(h))) {
        const c = t.at(-1);
        s && (c == null ? void 0 : c.type) === "paragraph" ? (c.raw += `
` + o.raw, c.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : t.push(o), s = h.length !== e.length, e = e.substring(o.raw.length);
        continue;
      }
      if (o = this.tokenizer.text(e)) {
        e = e.substring(o.raw.length);
        const c = t.at(-1);
        (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + o.raw, c.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : t.push(o);
        continue;
      }
      if (e) {
        const c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else
          throw new Error(c);
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
    var o, h, c;
    let s = e, a = null;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          u.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s = s.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, a.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let n = !1, r = "";
    for (; e; ) {
      n || (r = ""), n = !1;
      let u;
      if ((h = (o = this.options.extensions) == null ? void 0 : o.inline) != null && h.some((d) => (u = d.call({ lexer: this }, e, t)) ? (e = e.substring(u.raw.length), t.push(u), !0) : !1))
        continue;
      if (u = this.tokenizer.escape(e)) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      if (u = this.tokenizer.tag(e)) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      if (u = this.tokenizer.link(e)) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      if (u = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(u.raw.length);
        const d = t.at(-1);
        u.type === "text" && (d == null ? void 0 : d.type) === "text" ? (d.raw += u.raw, d.text += u.text) : t.push(u);
        continue;
      }
      if (u = this.tokenizer.emStrong(e, s, r)) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      if (u = this.tokenizer.codespan(e)) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      if (u = this.tokenizer.br(e)) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      if (u = this.tokenizer.del(e)) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      if (u = this.tokenizer.autolink(e)) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      if (!this.state.inLink && (u = this.tokenizer.url(e))) {
        e = e.substring(u.raw.length), t.push(u);
        continue;
      }
      let k = e;
      if ((c = this.options.extensions) != null && c.startInline) {
        let d = 1 / 0;
        const i = e.slice(1);
        let l;
        this.options.extensions.startInline.forEach((f) => {
          l = f.call({ lexer: this }, i), typeof l == "number" && l >= 0 && (d = Math.min(d, l));
        }), d < 1 / 0 && d >= 0 && (k = e.substring(0, d + 1));
      }
      if (u = this.tokenizer.inlineText(k)) {
        e = e.substring(u.raw.length), u.raw.slice(-1) !== "_" && (r = u.raw.slice(-1)), n = !0;
        const d = t.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += u.raw, d.text += u.text) : t.push(u);
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
class pe {
  // set by the parser
  constructor(e) {
    E(this, "options");
    E(this, "parser");
    this.options = e || Q;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: s }) {
    var r;
    const a = (r = (t || "").match(R.notSpaceStart)) == null ? void 0 : r[0], n = e.replace(R.endingNewline, "") + `
`;
    return a ? '<pre><code class="language-' + B(a) + '">' + (s ? n : B(n, !0)) + `</code></pre>
` : "<pre><code>" + (s ? n : B(n, !0)) + `</code></pre>
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
    let a = "";
    for (let o = 0; o < e.items.length; o++) {
      const h = e.items[o];
      a += this.listitem(h);
    }
    const n = t ? "ol" : "ul", r = t && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + n + r + `>
` + a + "</" + n + `>
`;
  }
  listitem(e) {
    var s;
    let t = "";
    if (e.task) {
      const a = this.checkbox({ checked: !!e.checked });
      e.loose ? ((s = e.tokens[0]) == null ? void 0 : s.type) === "paragraph" ? (e.tokens[0].text = a + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = a + " " + B(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
        type: "text",
        raw: a + " ",
        text: a + " ",
        escaped: !0
      }) : t += a + " ";
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
    for (let n = 0; n < e.header.length; n++)
      s += this.tablecell(e.header[n]);
    t += this.tablerow({ text: s });
    let a = "";
    for (let n = 0; n < e.rows.length; n++) {
      const r = e.rows[n];
      s = "";
      for (let o = 0; o < r.length; o++)
        s += this.tablecell(r[o]);
      a += this.tablerow({ text: s });
    }
    return a && (a = `<tbody>${a}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + a + `</table>
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
    return `<code>${B(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: s }) {
    const a = this.parser.parseInline(s), n = Xe(e);
    if (n === null)
      return a;
    e = n;
    let r = '<a href="' + e + '"';
    return t && (r += ' title="' + B(t) + '"'), r += ">" + a + "</a>", r;
  }
  image({ href: e, title: t, text: s }) {
    const a = Xe(e);
    if (a === null)
      return B(s);
    e = a;
    let n = `<img src="${e}" alt="${s}"`;
    return t && (n += ` title="${B(t)}"`), n += ">", n;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : B(e.text);
  }
}
class Be {
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
  constructor(e) {
    E(this, "options");
    E(this, "renderer");
    E(this, "textRenderer");
    this.options = e || Q, this.options.renderer = this.options.renderer || new pe(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Be();
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
    var a, n;
    let s = "";
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if ((n = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && n[o.type]) {
        const c = o, u = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (u !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c.type)) {
          s += u || "";
          continue;
        }
      }
      const h = o;
      switch (h.type) {
        case "space": {
          s += this.renderer.space(h);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(h);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(h);
          continue;
        }
        case "code": {
          s += this.renderer.code(h);
          continue;
        }
        case "table": {
          s += this.renderer.table(h);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(h);
          continue;
        }
        case "list": {
          s += this.renderer.list(h);
          continue;
        }
        case "html": {
          s += this.renderer.html(h);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(h);
          continue;
        }
        case "text": {
          let c = h, u = this.renderer.text(c);
          for (; r + 1 < e.length && e[r + 1].type === "text"; )
            c = e[++r], u += `
` + this.renderer.text(c);
          t ? s += this.renderer.paragraph({
            type: "paragraph",
            raw: u,
            text: u,
            tokens: [{ type: "text", raw: u, text: u, escaped: !0 }]
          }) : s += u;
          continue;
        }
        default: {
          const c = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent)
            return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return s;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t = this.renderer) {
    var a, n;
    let s = "";
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if ((n = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && n[o.type]) {
        const c = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (c !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          s += c || "";
          continue;
        }
      }
      const h = o;
      switch (h.type) {
        case "escape": {
          s += t.text(h);
          break;
        }
        case "html": {
          s += t.html(h);
          break;
        }
        case "link": {
          s += t.link(h);
          break;
        }
        case "image": {
          s += t.image(h);
          break;
        }
        case "strong": {
          s += t.strong(h);
          break;
        }
        case "em": {
          s += t.em(h);
          break;
        }
        case "codespan": {
          s += t.codespan(h);
          break;
        }
        case "br": {
          s += t.br(h);
          break;
        }
        case "del": {
          s += t.del(h);
          break;
        }
        case "text": {
          s += t.text(h);
          break;
        }
        default: {
          const c = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent)
            return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return s;
  }
}
class Y {
  constructor(e) {
    E(this, "options");
    E(this, "block");
    this.options = e || Q;
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
    return this.block ? I.lex : I.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? $.parse : $.parseInline;
  }
}
E(Y, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Os {
  constructor(...e) {
    E(this, "defaults", Re());
    E(this, "options", this.setOptions);
    E(this, "parse", this.parseMarkdown(!0));
    E(this, "parseInline", this.parseMarkdown(!1));
    E(this, "Parser", $);
    E(this, "Renderer", pe);
    E(this, "TextRenderer", Be);
    E(this, "Lexer", I);
    E(this, "Tokenizer", ue);
    E(this, "Hooks", Y);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var a, n;
    let s = [];
    for (const r of e)
      switch (s = s.concat(t.call(this, r)), r.type) {
        case "table": {
          const o = r;
          for (const h of o.header)
            s = s.concat(this.walkTokens(h.tokens, t));
          for (const h of o.rows)
            for (const c of h)
              s = s.concat(this.walkTokens(c.tokens, t));
          break;
        }
        case "list": {
          const o = r;
          s = s.concat(this.walkTokens(o.items, t));
          break;
        }
        default: {
          const o = r;
          (n = (a = this.defaults.extensions) == null ? void 0 : a.childTokens) != null && n[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((h) => {
            const c = o[h].flat(1 / 0);
            s = s.concat(this.walkTokens(c, t));
          }) : o.tokens && (s = s.concat(this.walkTokens(o.tokens, t)));
        }
      }
    return s;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((s) => {
      const a = { ...s };
      if (a.async = this.defaults.async || a.async || !1, s.extensions && (s.extensions.forEach((n) => {
        if (!n.name)
          throw new Error("extension name required");
        if ("renderer" in n) {
          const r = t.renderers[n.name];
          r ? t.renderers[n.name] = function(...o) {
            let h = n.renderer.apply(this, o);
            return h === !1 && (h = r.apply(this, o)), h;
          } : t.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const r = t[n.level];
          r ? r.unshift(n.tokenizer) : t[n.level] = [n.tokenizer], n.start && (n.level === "block" ? t.startBlock ? t.startBlock.push(n.start) : t.startBlock = [n.start] : n.level === "inline" && (t.startInline ? t.startInline.push(n.start) : t.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (t.childTokens[n.name] = n.childTokens);
      }), a.extensions = t), s.renderer) {
        const n = this.defaults.renderer || new pe(this.defaults);
        for (const r in s.renderer) {
          if (!(r in n))
            throw new Error(`renderer '${r}' does not exist`);
          if (["options", "parser"].includes(r))
            continue;
          const o = r, h = s.renderer[o], c = n[o];
          n[o] = (...u) => {
            let k = h.apply(n, u);
            return k === !1 && (k = c.apply(n, u)), k || "";
          };
        }
        a.renderer = n;
      }
      if (s.tokenizer) {
        const n = this.defaults.tokenizer || new ue(this.defaults);
        for (const r in s.tokenizer) {
          if (!(r in n))
            throw new Error(`tokenizer '${r}' does not exist`);
          if (["options", "rules", "lexer"].includes(r))
            continue;
          const o = r, h = s.tokenizer[o], c = n[o];
          n[o] = (...u) => {
            let k = h.apply(n, u);
            return k === !1 && (k = c.apply(n, u)), k;
          };
        }
        a.tokenizer = n;
      }
      if (s.hooks) {
        const n = this.defaults.hooks || new Y();
        for (const r in s.hooks) {
          if (!(r in n))
            throw new Error(`hook '${r}' does not exist`);
          if (["options", "block"].includes(r))
            continue;
          const o = r, h = s.hooks[o], c = n[o];
          Y.passThroughHooks.has(r) ? n[o] = (u) => {
            if (this.defaults.async)
              return Promise.resolve(h.call(n, u)).then((d) => c.call(n, d));
            const k = h.call(n, u);
            return c.call(n, k);
          } : n[o] = (...u) => {
            let k = h.apply(n, u);
            return k === !1 && (k = c.apply(n, u)), k;
          };
        }
        a.hooks = n;
      }
      if (s.walkTokens) {
        const n = this.defaults.walkTokens, r = s.walkTokens;
        a.walkTokens = function(o) {
          let h = [];
          return h.push(r.call(this, o)), n && (h = h.concat(n.call(this, o))), h;
        };
      }
      this.defaults = { ...this.defaults, ...a };
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
    return (s, a) => {
      const n = { ...a }, r = { ...this.defaults, ...n }, o = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === !0 && n.async === !1)
        return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      r.hooks && (r.hooks.options = r, r.hooks.block = e);
      const h = r.hooks ? r.hooks.provideLexer() : e ? I.lex : I.lexInline, c = r.hooks ? r.hooks.provideParser() : e ? $.parse : $.parseInline;
      if (r.async)
        return Promise.resolve(r.hooks ? r.hooks.preprocess(s) : s).then((u) => h(u, r)).then((u) => r.hooks ? r.hooks.processAllTokens(u) : u).then((u) => r.walkTokens ? Promise.all(this.walkTokens(u, r.walkTokens)).then(() => u) : u).then((u) => c(u, r)).then((u) => r.hooks ? r.hooks.postprocess(u) : u).catch(o);
      try {
        r.hooks && (s = r.hooks.preprocess(s));
        let u = h(s, r);
        r.hooks && (u = r.hooks.processAllTokens(u)), r.walkTokens && this.walkTokens(u, r.walkTokens);
        let k = c(u, r);
        return r.hooks && (k = r.hooks.postprocess(k)), k;
      } catch (u) {
        return o(u);
      }
    };
  }
  onError(e, t) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const a = "<p>An error occurred:</p><pre>" + B(s.message + "", !0) + "</pre>";
        return t ? Promise.resolve(a) : a;
      }
      if (t)
        return Promise.reject(s);
      throw s;
    };
  }
}
const Z = new Os();
function C(p, e) {
  return Z.parse(p, e);
}
C.options = C.setOptions = function(p) {
  return Z.setOptions(p), C.defaults = Z.defaults, lt(C.defaults), C;
};
C.getDefaults = Re;
C.defaults = Q;
C.use = function(...p) {
  return Z.use(...p), C.defaults = Z.defaults, lt(C.defaults), C;
};
C.walkTokens = function(p, e) {
  return Z.walkTokens(p, e);
};
C.parseInline = Z.parseInline;
C.Parser = $;
C.parser = $.parse;
C.Renderer = pe;
C.TextRenderer = Be;
C.Lexer = I;
C.lexer = I.lex;
C.Tokenizer = ue;
C.Hooks = Y;
C.parse = C;
C.options;
C.setOptions;
C.use;
C.walkTokens;
C.parseInline;
$.parse;
I.lex;
const Fs = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function qs(p) {
  let e;
  for (; (e = Fs.exec(p)) !== null; ) {
    const { dateStr: t } = e.groups;
    p = p.replaceAll(
      e[0],
      new Date(t).toLocaleDateString()
    );
  }
  return p;
}
function et(p) {
  return p = qs(p), C.parse(p);
}
const Gs = (p) => {
  var a, n, r;
  const {
    entry: e
  } = p;
  let t;
  switch (e.severity) {
    case "info":
    case "success":
      t = /* @__PURE__ */ g.createElement(Ze, null);
      break;
    case "warning":
      t = /* @__PURE__ */ g.createElement(Ot, null);
      break;
    case "error":
      t = /* @__PURE__ */ g.createElement(Ht, null);
      break;
    default:
      t = /* @__PURE__ */ g.createElement(Ze, null);
  }
  let s = e.message;
  return Array.isArray(s) || (s = [s]), /* @__PURE__ */ g.createElement("div", { className: D("entry", e.severity, e.category) }, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("span", { className: "icon" }, t), /* @__PURE__ */ g.createElement("span", { className: "date" }, (n = (a = e.date) == null ? void 0 : a.toLocaleDateString) == null ? void 0 : n.call(e.date))), s.map((o) => /* @__PURE__ */ g.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: et(o) }
    }
  )), /* @__PURE__ */ g.createElement("div", { className: "changes" }, (r = e.changes) == null ? void 0 : r.map((o) => /* @__PURE__ */ g.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: et(o) },
      className: "change"
    }
  ))));
}, ki = (p) => {
  const {
    show: e,
    onShow: t,
    getMessages: s,
    title: a,
    icon: n
  } = p, [r, o] = M([]), [h, c] = M();
  N(() => {
    e && (async () => {
      try {
        let k = await s();
        o(k);
      } catch (k) {
        c(k);
      }
    })();
  }, [e]);
  let u;
  return h || !Array.isArray(r) || r.length > 0 && typeof r[0] != "object" ? u = /* @__PURE__ */ g.createElement(Oe, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : r.length === 0 ? u = /* @__PURE__ */ g.createElement(Oe, { variant: "secondary" }, "There are currently no message") : u = /* @__PURE__ */ g.createElement("div", { className: "announcement-messages" }, r.map((k) => /* @__PURE__ */ g.createElement(Gs, { entry: k }))), /* @__PURE__ */ g.createElement(
    F,
    {
      show: e,
      onHide: () => t(!1),
      size: "lg"
    },
    /* @__PURE__ */ g.createElement(F.Header, null, /* @__PURE__ */ g.createElement(F.Title, null, /* @__PURE__ */ g.createElement("span", null, n), /* @__PURE__ */ g.createElement("span", null, a))),
    /* @__PURE__ */ g.createElement(F.Body, null, u)
  );
}, vi = (p) => {
  const {
    show: e,
    onHide: t,
    onConfirm: s,
    title: a,
    message: n
  } = p;
  return /* @__PURE__ */ g.createElement(
    F,
    {
      show: e,
      size: "sm",
      onHide: t
    },
    /* @__PURE__ */ g.createElement(F.Header, { closeButton: !0 }, /* @__PURE__ */ g.createElement(F.Title, null, /* @__PURE__ */ g.createElement(Ft, null), /* @__PURE__ */ g.createElement("span", { className: "" }, a))),
    /* @__PURE__ */ g.createElement(F.Body, null, /* @__PURE__ */ g.createElement("p", { className: "ellipsis" }, n)),
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
}, tt = (p) => {
  const {
    buttons: e,
    position: t = "top"
  } = p;
  return /* @__PURE__ */ React.createElement("div", { className: D(
    "pinnable-container",
    `pin-${t}`
  ) }, p.children, /* @__PURE__ */ React.createElement("div", { className: "pinnable-buttons" }, e));
}, Zs = nt((p, e) => {
  let {
    expanded: t,
    setExpanded: s,
    canPin: a = !0,
    canClose: n = !0,
    onClose: r = Ae,
    pinned: o,
    setPinned: h,
    className: c,
    pinReceiver: u
  } = p;
  M(!1);
  const k = [];
  return a && k.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (d) => {
          d.stopPropagation(), h(!o);
        }
      },
      o ? /* @__PURE__ */ g.createElement(qt, null) : /* @__PURE__ */ g.createElement(Gt, null)
    )
  ), n && k.push(
    /* @__PURE__ */ g.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (d) => {
          d.stopPropagation(), r();
        }
      },
      /* @__PURE__ */ g.createElement(Zt, null)
    )
  ), /* @__PURE__ */ g.createElement(
    es,
    {
      ...p,
      className: D(c, {
        pinnable: a,
        closable: n
      }),
      expanded: t || o,
      onExpand: s,
      ref: e
    },
    u ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(tt, { buttons: k }, u), p.children) : /* @__PURE__ */ g.createElement(tt, { buttons: k }, p.children)
  );
}), bi = (p) => {
  const {
    progress: e,
    label: t
  } = p;
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
    /* @__PURE__ */ g.createElement($t, { now: e })
  );
}, _i = (p) => {
  const {
    manager: e,
    onHover: t,
    onClick: s,
    onRange: a,
    onMoveUp: n,
    onMoveDown: r,
    className: o,
    id: h,
    range: c
  } = p;
  return e && (e._range = c, e._onHover = t, e._onClick = s, e._onRange = a, e._moveUp = n, e._moveDown = r), /* @__PURE__ */ g.createElement(
    "div",
    {
      id: h,
      className: D(o, e.classNames()),
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
    p.children
  );
};
let Qs = 0;
const yi = (p) => {
  const [e, t] = M(null), s = q(window), [a, n] = M(() => Qs++), {
    name: r = "",
    options: o = "",
    notifications: h
  } = p;
  function c() {
    p.onClose();
  }
  return N(() => {
    const u = document.createElement("div");
    t(u);
  }, []), N(() => {
    function u() {
      if (process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Opening the admin control panel"), p.popup ? s.current = window.open(
        p.url ?? "",
        r,
        "popup"
        // `popup,width=${width},height=${height},top=${top},left=${left}`
      ) : s.current = window.open(
        p.url ?? "",
        "_blank",
        o
      ), !s.current) {
        h.error(
          `Unable to open ${p.name}. Is your browser preventing popups ?`,
          "Failed opening new window",
          1e4
        ), p.onBlocked();
        return;
      }
      s.current.document.close(), s.current.addEventListener("beforeunload", c), s.current.document.body.appendChild(e), Array.from(document.head.querySelectorAll('style,link[rel="stylesheet"]')).forEach((i) => {
        s.current.document.head.appendChild(
          i.cloneNode(!0)
        );
      });
      const k = () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), d.removeEventListener("beforeunload", c), d.close();
      };
      window.addEventListener("beforeunload", k);
      const d = s.current;
      return () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), window.removeEventListener("beforeunload", k), d.close();
      };
    }
    if (e)
      return u();
  }, [e]), e && it(p.children, e);
}, wi = (p) => {
  const {
    id: e
  } = p, { hideAll: t } = Wt({
    id: "file-ctx-menu"
  }), [s, a] = M(!1);
  function n(o) {
    o.key === "Escape" && t();
  }
  N(() => {
    if (s)
      return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [s]);
  function r(o) {
    const {
      elem: h,
      name: c,
      value: u,
      index: k
    } = o;
  }
  return /* @__PURE__ */ g.createElement(
    jt,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: a
    },
    /* @__PURE__ */ g.createElement(
      We,
      {
        hidden: ({ props: o }) => !o.field.canCopy,
        onMouseDown: (o) => {
          o.stopPropagation(), o.stopImmediatePropagation();
        },
        onClick: r,
        id: "copy"
      },
      "Copy"
    ),
    /* @__PURE__ */ g.createElement(We, { id: "cut" }, "Cut")
  );
}, xi = (p) => {
  const {
    target: e,
    onChange: t = () => {
    },
    onAccept: s = () => {
    },
    onAbort: a = () => {
    },
    disabled: n,
    name: r,
    label: o,
    type: h = "text",
    required: c = !1
  } = p;
  function u(i) {
    e[r] = i.target.value, s(e[r], { target: e, name: r });
  }
  function k(i) {
    e[r] = i.target.value, t(e[r], { target: e, name: r });
  }
  function d(i) {
    e[r] = i.target.value, a(e[r], { target: e, name: r });
  }
  return /* @__PURE__ */ React.createElement(Fe.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(Fe.Label, { className: "text-secondary small", htmlFor: r }, o), /* @__PURE__ */ React.createElement(
    Dt,
    {
      id: r,
      type: h,
      disabled: n,
      value: e[r] ?? "",
      name: r,
      onChange: k,
      required: c,
      onKeyDown: (i) => {
        i.key === "Enter" ? u(i) : i.key === "Escape" && d(i);
      }
    }
  ));
}, bt = Pt(null), Ei = (p) => {
  const {
    collapsible: e = !0
  } = p, [t, s] = M();
  return /* @__PURE__ */ React.createElement(bt.Provider, { value: {
    collapsible: e,
    setExpanded: (a) => s(a),
    expanded: t
  } }, p.children);
}, Ci = (p) => {
  const e = Rt(bt), {
    canPin: t = !1,
    canClose: s = !1,
    eventKey: a,
    onExpand: n = Ae,
    onPin: r = Ae
  } = p, [o, h] = usePersistedState(a + ".pinned"), {
    collapsible: c,
    expanded: u,
    setExpanded: k
  } = e;
  return /* @__PURE__ */ React.createElement(
    Zs,
    {
      ...p,
      pinned: o,
      setPinned: h,
      expanded: u === a || !c,
      setExpanded: (d) => {
        n(d), k(c && d ? a : null);
      },
      onPin: r,
      canPin: t,
      canClose: s
    },
    p.children
  );
};
var Le = { exports: {} };
/*! =======================================================
                      VERSION  11.0.2              
========================================================= */
var st;
function Ws() {
  return st || (st = 1, function(p) {
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
      if (e(p) === "object" && p.exports) {
        var a;
        try {
          a = require("jquery");
        } catch {
          a = null;
        }
        p.exports = s(a);
      } else window && (window.Slider = s(window.jQuery));
    })(function(s) {
      var a = "slider", n = "bootstrapSlider";
      t && !window.console && (window.console = {}), t && !window.console.log && (window.console.log = function() {
      }), t && !window.console.warn && (window.console.warn = function() {
      });
      var r;
      return function(o) {
        var h = Array.prototype.slice;
        function c() {
        }
        function u(k) {
          if (!k)
            return;
          function d(f) {
            f.prototype.option || (f.prototype.option = function(m) {
              k.isPlainObject(m) && (this.options = k.extend(!0, this.options, m));
            });
          }
          var i = typeof console > "u" ? c : function(f) {
            console.error(f);
          };
          function l(f, m) {
            k.fn[f] = function(v) {
              if (typeof v == "string") {
                for (var b = h.call(arguments, 1), _ = 0, y = this.length; _ < y; _++) {
                  var T = this[_], A = k.data(T, f);
                  if (!A) {
                    i("cannot call methods on " + f + " prior to initialization; attempted to call '" + v + "'");
                    continue;
                  }
                  if (!k.isFunction(A[v]) || v.charAt(0) === "_") {
                    i("no such method '" + v + "' for " + f + " instance");
                    continue;
                  }
                  var S = A[v].apply(A, b);
                  if (S !== void 0 && S !== A)
                    return S;
                }
                return this;
              } else {
                var w = this.map(function() {
                  var L = k.data(this, f);
                  return L ? (L.option(v), L._init()) : (L = new m(this, v), k.data(this, f, L)), k(this);
                });
                return w.length === 1 ? w[0] : w;
              }
            };
          }
          return k.bridget = function(f, m) {
            d(m), l(f, m);
          }, k.bridget;
        }
        u(o);
      }(s), function(o) {
        var h = void 0, c = {
          formatInvalidInputErrorMsg: function(i) {
            return "Invalid input value '" + i + "' passed in";
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, u = {
          linear: {
            getValue: function(i, l) {
              return i < l.min ? l.min : i > l.max ? l.max : i;
            },
            toValue: function(i) {
              var l = i / 100 * (this.options.max - this.options.min), f = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var m, v, b, _ = 0, y = 1; y < this.options.ticks_positions.length; y++)
                  if (i <= this.options.ticks_positions[y]) {
                    m = this.options.ticks[y - 1], b = this.options.ticks_positions[y - 1], v = this.options.ticks[y], _ = this.options.ticks_positions[y];
                    break;
                  }
                var T = (i - b) / (_ - b);
                l = m + T * (v - m), f = !1;
              }
              var A = f ? this.options.min : 0, S = A + Math.round(l / this.options.step) * this.options.step;
              return u.linear.getValue(S, this.options);
            },
            toPercentage: function(i) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var l, f, m, v = 0, b = 0; b < this.options.ticks.length; b++)
                  if (i <= this.options.ticks[b]) {
                    l = b > 0 ? this.options.ticks[b - 1] : 0, m = b > 0 ? this.options.ticks_positions[b - 1] : 0, f = this.options.ticks[b], v = this.options.ticks_positions[b];
                    break;
                  }
                if (b > 0) {
                  var _ = (i - l) / (f - l);
                  return m + _ * (v - m);
                }
              }
              return 100 * (i - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(i) {
              var l = 1 - this.options.min, f = Math.log(this.options.min + l), m = Math.log(this.options.max + l), v = Math.exp(f + (m - f) * i / 100) - l;
              return Math.round(v) === m ? m : (v = this.options.min + Math.round((v - this.options.min) / this.options.step) * this.options.step, u.linear.getValue(v, this.options));
            },
            toPercentage: function(i) {
              if (this.options.max === this.options.min)
                return 0;
              var l = 1 - this.options.min, f = Math.log(this.options.max + l), m = Math.log(this.options.min + l), v = Math.log(i + l);
              return 100 * (v - m) / (f - m);
            }
          }
        };
        r = function(i, l) {
          return k.call(this, i, l), this;
        };
        function k(d, i) {
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
          for (var l = Object.keys(this.defaultOptions), f = i.hasOwnProperty("min"), m = i.hasOwnProperty("max"), v = 0; v < l.length; v++) {
            var b = l[v], _ = i[b];
            _ = typeof _ < "u" ? _ : T(this.element, b), _ = _ !== null ? _ : this.defaultOptions[b], this.options || (this.options = {}), this.options[b] = _;
          }
          if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), this.options.rtl === "auto") {
            var y = window.getComputedStyle(this.element);
            y != null ? this.options.rtl = y.direction === "rtl" : this.options.rtl = this.element.style.direction === "rtl";
          }
          this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom") ? this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right" : this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right") && (this.options.tooltip_position = "top");
          function T(P, ae) {
            var le = "data-slider-" + ae.replace(/_/g, "-"), U = P.getAttribute(le);
            try {
              return JSON.parse(U);
            } catch {
              return U;
            }
          }
          var A = this.element.style.width, S = !1, w = this.element.parentNode, L, H, W, V, z;
          if (this.sliderElem)
            S = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var O = document.createElement("div");
            O.className = "slider-track", H = document.createElement("div"), H.className = "slider-track-low", L = document.createElement("div"), L.className = "slider-selection", W = document.createElement("div"), W.className = "slider-track-high", V = document.createElement("div"), V.className = "slider-handle min-slider-handle", V.setAttribute("role", "slider"), V.setAttribute("aria-valuemin", this.options.min), V.setAttribute("aria-valuemax", this.options.max), z = document.createElement("div"), z.className = "slider-handle max-slider-handle", z.setAttribute("role", "slider"), z.setAttribute("aria-valuemin", this.options.min), z.setAttribute("aria-valuemax", this.options.max), O.appendChild(H), O.appendChild(L), O.appendChild(W), this.rangeHighlightElements = [];
            var te = this.options.rangeHighlights;
            if (Array.isArray(te) && te.length > 0)
              for (var me = 0; me < te.length; me++) {
                var ge = document.createElement("div"), _t = te[me].class || "";
                ge.className = "slider-rangeHighlight slider-selection " + _t, this.rangeHighlightElements.push(ge), O.appendChild(ge);
              }
            var ke = Array.isArray(this.options.labelledby);
            if (ke && this.options.labelledby[0] && V.setAttribute("aria-labelledby", this.options.labelledby[0]), ke && this.options.labelledby[1] && z.setAttribute("aria-labelledby", this.options.labelledby[1]), !ke && this.options.labelledby && (V.setAttribute("aria-labelledby", this.options.labelledby), z.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", v = 0; v < this.options.ticks.length; v++) {
                var j = document.createElement("div");
                if (j.className = "slider-tick", this.options.ticks_tooltip) {
                  var He = this._addTickListener(), yt = He.addMouseEnter(this, j, v), wt = He.addMouseLeave(this, j);
                  this.ticksCallbackMap[v] = {
                    mouseEnter: yt,
                    mouseLeave: wt
                  };
                }
                this.ticks.push(j), this.ticksContainer.appendChild(j);
              }
              L.className += " tick-slider-selection";
            }
            if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
              for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", v = 0; v < this.options.ticks_labels.length; v++) {
                var se = document.createElement("div"), xt = this.options.ticks_positions.length === 0, Et = this.options.reversed && xt ? this.options.ticks_labels.length - (v + 1) : v;
                se.className = "slider-tick-label", se.innerHTML = this.options.ticks_labels[Et], this.tickLabels.push(se), this.tickLabelContainer.appendChild(se);
              }
            var ve = function(ae) {
              var le = document.createElement("div");
              le.className = "arrow";
              var U = document.createElement("div");
              U.className = "tooltip-inner", ae.appendChild(le), ae.appendChild(U);
            }, ie = document.createElement("div");
            ie.className = "tooltip tooltip-main", ie.setAttribute("role", "presentation"), ve(ie);
            var ne = document.createElement("div");
            ne.className = "tooltip tooltip-min", ne.setAttribute("role", "presentation"), ve(ne);
            var oe = document.createElement("div");
            oe.className = "tooltip tooltip-max", oe.setAttribute("role", "presentation"), ve(oe), this.sliderElem.appendChild(O), this.sliderElem.appendChild(ie), this.sliderElem.appendChild(ne), this.sliderElem.appendChild(oe), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(V), this.sliderElem.appendChild(z), w.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (o && (this.$element = o(this.element), this.$sliderElem = o(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), u[this.options.scale] && (this.options.scale = u[this.options.scale]), S === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(P) {
            this._removeProperty(this.trackLow, P), this._removeProperty(this.trackSelection, P), this._removeProperty(this.trackHigh, P);
          }, this), [this.handle1, this.handle2].forEach(function(P) {
            this._removeProperty(P, "left"), this._removeProperty(P, "right"), this._removeProperty(P, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(P) {
            this._removeProperty(P, "bs-tooltip-left"), this._removeProperty(P, "bs-tooltip-right"), this._removeProperty(P, "bs-tooltip-top"), this._removeClass(P, "bs-tooltip-right"), this._removeClass(P, "bs-tooltip-left"), this._removeClass(P, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = A, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (m || (this.options.max = Math.max.apply(Math, this.options.ticks)), f || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = H || this.trackLow, this.trackSelection = L || this.trackSelection, this.trackHigh = W || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = V || this.handle1, this.handle2 = z || this.handle2, S === !0)
            for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), v = 0; v < this.ticks.length; v++)
              this._removeClass(this.ticks[v], "round triangle hide");
          var Ct = ["round", "triangle", "custom"], Tt = Ct.indexOf(this.options.handle) !== -1;
          if (Tt)
            for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), v = 0; v < this.ticks.length; v++)
              this._addClass(this.ticks[v], this.options.handle);
          if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), this.options.tooltip === "hide")
            this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");
          else if (this.options.tooltip === "always")
            this._showTooltip(), this._alwaysShowTooltip = !0;
          else {
            if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
              var re = this._addTickListener(), be = re.addMouseEnter(this, this.handle1), _e = re.addMouseLeave(this, this.handle1);
              this.handleCallbackMap.handle1 = {
                mouseEnter: be,
                mouseLeave: _e
              }, be = re.addMouseEnter(this, this.handle2), _e = re.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
                mouseEnter: be,
                mouseLeave: _e
              };
            } else
              this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.showTooltip, !1), this.sliderElem.addEventListener("touchmove", this.showTooltip, !1), this.sliderElem.addEventListener("touchend", this.hideTooltip, !1));
            this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1), this.touchCapable && (this.handle1.addEventListener("touchstart", this.showTooltip, !1), this.handle1.addEventListener("touchmove", this.showTooltip, !1), this.handle1.addEventListener("touchend", this.hideTooltip, !1), this.handle2.addEventListener("touchstart", this.showTooltip, !1), this.handle2.addEventListener("touchmove", this.showTooltip, !1), this.handle2.addEventListener("touchend", this.hideTooltip, !1));
          }
          this.options.enabled ? this.enable() : this.disable();
        }
        r.prototype = {
          _init: function() {
          },
          // NOTE: Must exist to support bridget
          constructor: r,
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
          setValue: function(i, l, f) {
            i || (i = 0);
            var m = this.getValue();
            this._state.value = this._validateInputValue(i);
            var v = this._applyPrecision.bind(this);
            this.options.range ? (this._state.value[0] = v(this._state.value[0]), this._state.value[1] = v(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = v(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this.options.selection === "after" ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
            var b = this.options.range ? this._state.value : this._state.value[0];
            this._setDataVal(b), l === !0 && this._trigger("slide", b);
            var _ = !1;
            return Array.isArray(b) ? _ = m[0] !== b[0] || m[1] !== b[1] : _ = m !== b, _ && f === !0 && this._trigger("change", {
              oldValue: m,
              newValue: b
            }), this;
          },
          destroy: function() {
            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), o && (this._unbindJQueryEventHandlers(), h === a && this.$element.removeData(h), this.$element.removeData(n));
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
            o ? (this.$element.off(i, l), this.$sliderElem.off(i, l)) : this._unbindNonQueryEventHandler(i, l);
          },
          getAttribute: function(i) {
            return i ? this.options[i] : this.options;
          },
          setAttribute: function(i, l) {
            return this.options[i] = l, this;
          },
          refresh: function(i) {
            var l = this.getValue();
            return this._removeSliderEventHandlers(), k.call(this, this.element, this.options), i && i.useCurrentValue === !0 && this.setValue(l), o && (h === a ? (o.data(this.element, a, this), o.data(this.element, n, this)) : o.data(this.element, n, this)), this;
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
            var f = this.eventToCallbackMap[i];
            if (f !== void 0) {
              for (var m = 0; m < f.length; m++)
                if (f[m] === l) {
                  f.splice(m, 1);
                  break;
                }
            }
          },
          _cleanUpEventCallbacksMap: function() {
            for (var i = Object.keys(this.eventToCallbackMap), l = 0; l < i.length; l++) {
              var f = i[l];
              delete this.eventToCallbackMap[f];
            }
          },
          _showTooltip: function() {
            this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), this.tooltip.style.display = "none"), this._state.over = !0;
          },
          _hideTooltip: function() {
            this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), this._removeClass(this.tooltip_max, "show")), this._state.over = !1;
          },
          _setToolTipOnMouseOver: function(i) {
            var l = this, f = this.options.formatter(i ? i.value[0] : this._state.value[0]), m = i ? v(i, this.options.reversed) : v(this._state, this.options.reversed);
            this._setText(this.tooltipInner, f), this.tooltip.style[this.stylePos] = m[0] + "%";
            function v(b, _) {
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
              addMouseEnter: function(l, f, m) {
                var v = function() {
                  var _ = l._copyState(), y = f === l.handle1 ? _.value[0] : _.value[1], T = void 0;
                  m !== void 0 ? (y = l.options.ticks[m], T = l.options.ticks_positions.length > 0 && l.options.ticks_positions[m] || l._toPercentage(l.options.ticks[m])) : T = l._toPercentage(y), _.value[0] = y, _.percentage[0] = T, l._setToolTipOnMouseOver(_), l._showTooltip();
                };
                return f.addEventListener("mouseenter", v, !1), v;
              },
              addMouseLeave: function(l, f) {
                var m = function() {
                  l._hideTooltip();
                };
                return f.addEventListener("mouseleave", m, !1), m;
              }
            };
          },
          _layout: function() {
            var i, l;
            if (this.options.reversed ? i = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : i = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = i[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), l = this.options.formatter(this._state.value[0]), isNaN(l) ? this.handle1.setAttribute("aria-valuetext", l) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = i[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), l = this.options.formatter(this._state.value[1]), isNaN(l) ? this.handle2.setAttribute("aria-valuetext", l) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
              for (var f = 0; f < this.options.rangeHighlights.length; f++) {
                var m = this._toPercentage(this.options.rangeHighlights[f].start), v = this._toPercentage(this.options.rangeHighlights[f].end);
                if (this.options.reversed) {
                  var b = 100 - v;
                  v = 100 - m, m = b;
                }
                var _ = this._createHighlightRange(m, v);
                _ ? this.options.orientation === "vertical" ? (this.rangeHighlightElements[f].style.top = _.start + "%", this.rangeHighlightElements[f].style.height = _.size + "%") : (this.options.rtl ? this.rangeHighlightElements[f].style.right = _.start + "%" : this.rangeHighlightElements[f].style.left = _.start + "%", this.rangeHighlightElements[f].style.width = _.size + "%") : this.rangeHighlightElements[f].style.display = "none";
              }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              var y = this.options.orientation === "vertical" ? "height" : "width", T;
              this.options.orientation === "vertical" ? T = "marginTop" : this.options.rtl ? T = "marginRight" : T = "marginLeft";
              var A = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var S = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[T] = -A / 2 + "px"), S = this.tickLabelContainer.offsetHeight;
                else
                  for (w = 0; w < this.tickLabelContainer.childNodes.length; w++)
                    this.tickLabelContainer.childNodes[w].offsetHeight > S && (S = this.tickLabelContainer.childNodes[w].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = S + "px");
              }
              for (var w = 0; w < this.options.ticks.length; w++) {
                var L = this.options.ticks_positions[w] || this._toPercentage(this.options.ticks[w]);
                this.options.reversed && (L = 100 - L), this.ticks[w].style[this.stylePos] = L + "%", this._removeClass(this.ticks[w], "in-selection"), this.options.range ? L >= i[0] && L <= i[1] && this._addClass(this.ticks[w], "in-selection") : this.options.selection === "after" && L >= i[0] ? this._addClass(this.ticks[w], "in-selection") : this.options.selection === "before" && L <= i[0] && this._addClass(this.ticks[w], "in-selection"), this.tickLabels[w] && (this.tickLabels[w].style[y] = A + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[w] !== void 0 ? (this.tickLabels[w].style.position = "absolute", this.tickLabels[w].style[this.stylePos] = L + "%", this.tickLabels[w].style[T] = -A / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[w].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[w].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[T] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[w], "label-in-selection label-is-selection"), this.options.range ? L >= i[0] && L <= i[1] && (this._addClass(this.tickLabels[w], "label-in-selection"), (L === i[0] || i[1]) && this._addClass(this.tickLabels[w], "label-is-selection")) : (this.options.selection === "after" && L >= i[0] ? this._addClass(this.tickLabels[w], "label-in-selection") : this.options.selection === "before" && L <= i[0] && this._addClass(this.tickLabels[w], "label-in-selection"), L === i[0] && this._addClass(this.tickLabels[w], "label-is-selection")));
              }
            }
            var H;
            if (this.options.range) {
              H = this.options.formatter(this._state.value), this._setText(this.tooltipInner, H), this.tooltip.style[this.stylePos] = (i[1] + i[0]) / 2 + "%";
              var W = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, W);
              var V = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, V), this.tooltip_min.style[this.stylePos] = i[0] + "%", this.tooltip_max.style[this.stylePos] = i[1] + "%";
            } else
              H = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, H), this.tooltip.style[this.stylePos] = i[0] + "%";
            if (this.options.orientation === "vertical")
              this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(i[0], i[1]) + "%", this.trackSelection.style.top = Math.min(i[0], i[1]) + "%", this.trackSelection.style.height = Math.abs(i[0] - i[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(i[0], i[1]) - Math.abs(i[0] - i[1]) + "%";
            else {
              this.stylePos === "right" ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(i[0], i[1]) + "%", this.stylePos === "right" ? this.trackSelection.style.right = Math.min(i[0], i[1]) + "%" : this.trackSelection.style.left = Math.min(i[0], i[1]) + "%", this.trackSelection.style.width = Math.abs(i[0] - i[1]) + "%", this.stylePos === "right" ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(i[0], i[1]) - Math.abs(i[0] - i[1]) + "%";
              var z = this.tooltip_min.getBoundingClientRect(), O = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? z.right > O.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : z.right > O.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
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
              var f = Math.abs(this._state.percentage[0] - l), m = Math.abs(this._state.percentage[1] - l);
              this._state.dragged = f < m ? 0 : 1, this._adjustPercentageForRangeSliders(l);
            } else
              this._state.dragged = 0;
            this._state.percentage[this._state.dragged] = l, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
            var v = this._calculateValue();
            return this._trigger("slideStart", v), this.setValue(v, !1, !0), i.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
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
            var f;
            switch (l.keyCode) {
              case 37:
              // left
              case 40:
                f = -1;
                break;
              case 39:
              // right
              case 38:
                f = 1;
                break;
            }
            if (f) {
              if (this.options.natural_arrow_keys) {
                var m = this.options.orientation === "horizontal", v = this.options.orientation === "vertical", b = this.options.rtl, _ = this.options.reversed;
                m ? b ? _ || (f = -f) : _ && (f = -f) : v && (_ || (f = -f));
              }
              var y;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var T = void 0;
                T = this.options.ticks.indexOf(this._state.value[i]), T === -1 && (T = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), T += f, T = Math.max(0, Math.min(this.options.ticks.length - 1, T)), y = this.options.ticks[T];
              } else
                y = this._state.value[i] + f * this.options.step;
              var A = this._toPercentage(y);
              if (this._state.keyCtrl = i, this.options.range) {
                this._adjustPercentageForRangeSliders(A);
                var S = this._state.keyCtrl ? this._state.value[0] : y, w = this._state.keyCtrl ? y : this._state.value[1];
                y = [Math.max(this.options.min, Math.min(this.options.max, S)), Math.max(this.options.min, Math.min(this.options.max, w))];
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
            var f = this._calculateValue(!0);
            return this.setValue(f, !0, !0), !1;
          },
          _touchmove: function(i) {
            i.changedTouches !== void 0 && i.preventDefault && i.preventDefault();
          },
          _adjustPercentageForRangeSliders: function(i) {
            if (this.options.range) {
              var l = this._getNumDigitsAfterDecimalPlace(i);
              l = l ? l - 1 : 0;
              var f = this._applyToFixedAndParseFloat(i, l);
              this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], l) < f ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], l) > f ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < i ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > i && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
            }
          },
          _mouseup: function(i) {
            if (!this._state.enabled)
              return !1;
            var l = this._getPercentage(i);
            this._adjustPercentageForRangeSliders(l), this._state.percentage[this._state.dragged] = l, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
            var f = this._calculateValue(!0);
            return this.setValue(f, !1, !0), this._trigger("slideStop", f), this._state.dragged = null, !1;
          },
          _setValues: function(i, l) {
            var f = i === 0 ? 0 : 100;
            this._state.percentage[i] !== f && (l.data[i] = this._toValue(this._state.percentage[i]), l.data[i] = this._applyPrecision(l.data[i]));
          },
          _calculateValue: function(i) {
            var l = {};
            return this.options.range ? (l.data = [this.options.min, this.options.max], this._setValues(0, l), this._setValues(1, l), i && (l.data[0] = this._snapToClosestTick(l.data[0]), l.data[1] = this._snapToClosestTick(l.data[1]))) : (l.data = this._toValue(this._state.percentage[0]), l.data = parseFloat(l.data), l.data = this._applyPrecision(l.data), i && (l.data = this._snapToClosestTick(l.data))), l.data;
          },
          _snapToClosestTick: function(i) {
            for (var l = [i, 1 / 0], f = 0; f < this.options.ticks.length; f++) {
              var m = Math.abs(this.options.ticks[f] - i);
              m <= l[1] && (l = [this.options.ticks[f], m]);
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
            var f = i.toFixed(l);
            return parseFloat(f);
          },
          /*
          	Credits to Mike Samuel for the following method!
          	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
          */
          _getPercentage: function(i) {
            this.touchCapable && (i.type === "touchstart" || i.type === "touchmove" || i.type === "touchend") && (i = i.changedTouches[0]);
            var l = i[this.mousePos], f = this._state.offset[this.stylePos], m = l - f;
            this.stylePos === "right" && (m = -m);
            var v = m / this._state.size * 100;
            return v = Math.round(v / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (v = 100 - v), Math.max(0, Math.min(100, v));
          },
          _validateInputValue: function(i) {
            if (isNaN(+i)) {
              if (Array.isArray(i))
                return this._validateArray(i), i;
              throw new Error(c.formatInvalidInputErrorMsg(i));
            } else return +i;
          },
          _validateArray: function(i) {
            for (var l = 0; l < i.length; l++) {
              var f = i[l];
              if (typeof f != "number")
                throw new Error(c.formatInvalidInputErrorMsg(f));
            }
          },
          _setDataVal: function(i) {
            this.element.setAttribute("data-value", i), this.element.setAttribute("value", i), this.element.value = i;
          },
          _trigger: function(i, l) {
            l = l || l === 0 ? l : void 0;
            var f = this.eventToCallbackMap[i];
            if (f && f.length)
              for (var m = 0; m < f.length; m++) {
                var v = f[m];
                v(l);
              }
            o && this._triggerJQueryEvent(i, l);
          },
          _triggerJQueryEvent: function(i, l) {
            var f = {
              type: i,
              value: l
            };
            this.$element.trigger(f), this.$sliderElem.trigger(f);
          },
          _unbindJQueryEventHandlers: function() {
            this.$element.off(), this.$sliderElem.off();
          },
          _setText: function(i, l) {
            typeof i.textContent < "u" ? i.textContent = l : typeof i.innerText < "u" && (i.innerText = l);
          },
          _removeClass: function(i, l) {
            for (var f = l.split(" "), m = i.className, v = 0; v < f.length; v++) {
              var b = f[v], _ = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)");
              m = m.replace(_, " ");
            }
            i.className = m.trim();
          },
          _addClass: function(i, l) {
            for (var f = l.split(" "), m = i.className, v = 0; v < f.length; v++) {
              var b = f[v], _ = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)"), y = _.test(m);
              y || (m += " " + b);
            }
            i.className = m.trim();
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
          _css: function(i, l, f) {
            if (o)
              o.style(i, l, f);
            else {
              var m = l.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(v, b) {
                return b.toUpperCase();
              });
              i.style[m] = f;
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
              var f = l === "left" ? "right" : "left";
              i.forEach((function(m) {
                this._addClass(m, "bs-tooltip-" + l), m.style[f] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? i.forEach((function(m) {
              this._addClass(m, "bs-tooltip-bottom"), m.style.top = "22px";
            }).bind(this)) : i.forEach((function(m) {
              this._addClass(m, "bs-tooltip-top"), m.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(i) {
            for (var l = Math.abs(i - this.options.ticks[0]), f = 0, m = 0; m < this.options.ticks.length; ++m) {
              var v = Math.abs(i - this.options.ticks[m]);
              v < l && (l = v, f = m);
            }
            return f;
          },
          /**
           * Attempts to find the index in `ticks[]` the slider values are set at.
           * The indexes can be -1 to indicate the slider value is not set at a value in `ticks[]`.
           */
          _setTickIndex: function() {
            this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])]);
          }
        }, o && o.fn && (o.fn.slider ? (t && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), h = n) : (o.bridget(a, r), h = a), o.bridget(n, r), o(function() {
          o("input[data-provide=slider]")[h]();
        }));
      }(s), r;
    });
  }(Le)), Le.exports;
}
var js = Ws();
const Us = /* @__PURE__ */ at(js), Ks = (p, e) => {
  const t = {
    ...p,
    tooltip: p.tooltip || "show"
  };
  let {
    change: s,
    onChange: a,
    value: n
  } = p;
  const r = q(), [o, h] = M();
  return s = s ?? a, N(() => {
    if (r.current) {
      const c = new Us(r.current, t);
      return h(c), () => c.destroy();
    }
  }, [r.current]), N(() => {
    e && o && (e.current = {
      mySlider: o
    });
  }, [e, o]), N(() => {
    if (o && s) {
      o.on("change", s);
      for (let c in p)
        o.setAttribute(c, p[c]);
      return () => {
        o.off("change", s);
      };
    }
  }, [p, o]), N(() => {
    p.enabled ? o == null || o.enable() : o == null || o.disable();
  }, [p.enabled]), N(() => {
    o && n !== void 0 && o.setValue(n);
  }, [o, n]), /* @__PURE__ */ g.createElement("div", { ref: r });
}, Ti = g.forwardRef(Ks);
export {
  Xt as Anchor,
  pi as Checkbox,
  es as Collapsible,
  di as Disable,
  fi as DotNotification,
  ts as Drawer,
  mi as DrawerContainer,
  gi as GargantuaList,
  ki as MessageModal,
  vi as ModalOkCancel,
  tt as PinButtons,
  Zs as Pinnable,
  bi as Progress,
  _i as RangeSelection,
  Ti as ReactSlider,
  yi as RenderInWindow,
  ss as Slider,
  wi as TableContextMenu,
  xi as TextField,
  Ci as Widget,
  Ei as WidgetGroup
};
