import m, { useState as R, useEffect as M, forwardRef as pt, Children as zt, useRef as V, createPortal as It, createContext as Dt, useContext as $t, useMemo as dt, useCallback as K } from "react";
import { useInvalidate as ze } from "./hooks.es.js";
import { OverlayTrigger as Ht, Tooltip as Bt, Spinner as Vt, Alert as Ue, ProgressBar as Ot, Form as Ze, FormControl as Ft, Dropdown as Qe, DropdownMenu as qt, DropdownItem as Gt } from "react-bootstrap";
import { useResizeDetector as ft } from "react-resize-detector";
import { waitForStableBoundingRect as Wt, recursiveMap as Ut } from "./utils.es.js";
import { ArrowBarLeft as Zt, ArrowBarRight as Qt, PlusCircleFill as je, DashCircleFill as Ke, InfoCircleFill as Xe, ExclamationTriangleFill as jt, ExclamationSquareFill as Kt, ExclamationDiamondFill as Xt, Pin as Jt, PinAngle as Yt, XLg as es } from "react-bootstrap-icons";
import W from "react-bootstrap/Button";
import "react-range-slider-input/dist/style.css";
import ts from "react-range-slider-input";
import Je from "react-bootstrap/ButtonGroup";
import q from "react-bootstrap/Modal";
import { noOp as Me } from "velor-utils/utils/functional.mjs";
import { useContextMenu as ss, Menu as is, Item as Ye } from "react-contexify";
function Ie(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var we = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var et;
function ns() {
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
  }(we)), we.exports;
}
var os = ns();
const H = /* @__PURE__ */ Ie(os);
class rs {
  constructor() {
    this._rangeStart = -1, this._rangeEnd = -1, this._rangeClick = -1, this._isSelecting = !1, this._autoScrollTimeout = null, this._range = [], this._onHover = null, this._onClick = null, this._onRange = null, this._moveUp = null, this._moveDown = null, document.addEventListener("mouseup", this.onMouseUp);
  }
  onClick = (e, t, s) => {
    const n = this._range;
    n[0] !== -1 && n[1] !== -1 && s.shiftKey ? (this._rangeStart > e ? this._rangeClick = this._rangeEnd : this._rangeClick = this._rangeStart, this.onMouseHover(e), this.onMouseUp()) : this._onClick(e, s);
  };
  onMouseUp = () => {
    this._rangeClick = -1, this._isSelecting = !1, this.stopAutoScroll(), this.invalidate();
  };
  onMouseDown = (e) => {
    this._rangeClick = e;
  };
  onMouseHover = (e) => {
    e !== null && this._rangeClick !== -1 ? (this._isSelecting = !0, e < this._rangeClick ? (this._rangeStart = e, this._rangeEnd = this._rangeClick) : e > this._rangeClick ? (this._rangeStart = this._rangeClick, this._rangeEnd = e) : (this._rangeStart = e, this._rangeEnd = e), this._range = [this._rangeStart, this._rangeEnd], this._onRange(this._range)) : this._onHover(e);
  };
  dispose() {
    document.removeEventListener("mouseup", this.onMouseUp);
  }
  classNames() {
    return {
      cellSelection: this._isSelecting
    };
  }
  autoScrollUp() {
    const e = () => {
      const t = this._moveUp();
      this.onMouseHover(t), this._autoScrollTimeout = setTimeout(e, 50);
    };
    this._isSelecting && e();
  }
  autoScrollDown() {
    const e = () => {
      const t = this._moveDown();
      this.onMouseHover(t), this._autoScrollTimeout = setTimeout(e, 50);
    };
    this._isSelecting && e();
  }
  stopAutoScroll() {
    clearTimeout(this._autoScrollTimeout);
  }
  isSelecting() {
    return this._isSelecting;
  }
}
function Ei() {
  const [h, e] = R({
    classNames: () => {
    },
    isSelecting: () => !1
  });
  return M(() => {
    const t = new rs();
    return e(t), () => t.dispose();
  }, []), h.invalidate = ze(), {
    rangeSelectionProps: { manager: h },
    onClick: h.onClick,
    onMouseDown: h.onMouseDown,
    onMouseHover: h.onMouseHover
  };
}
const Ci = (h) => {
  const {
    manager: e,
    onHover: t,
    onClick: s,
    onRange: n,
    onMoveUp: r,
    onMoveDown: o,
    className: a,
    id: u,
    range: f
  } = h;
  return e && (e._range = f, e._onHover = t, e._onClick = s, e._onRange = n, e._moveUp = r, e._moveDown = o), /* @__PURE__ */ m.createElement(
    "div",
    {
      id: u,
      className: H(a, e.classNames()),
      style: {
        position: "relative",
        pointerEvents: "all"
      }
    },
    /* @__PURE__ */ m.createElement(
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
    /* @__PURE__ */ m.createElement(
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
}, Ti = (h) => {
  const {
    id: e = crypto.randomUUID(),
    label: t,
    placement: s = "right",
    onChange: n,
    name: r,
    target: o,
    checked: a,
    tooltip: u,
    ...f
  } = h, g = /* @__PURE__ */ m.createElement(
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
  ), k = /* @__PURE__ */ m.createElement(
    "label",
    {
      ...f,
      className: "small",
      htmlFor: e
    },
    t
  );
  let p;
  return s === "right" ? p = /* @__PURE__ */ m.createElement(m.Fragment, null, g, k) : p = /* @__PURE__ */ m.createElement(m.Fragment, null, k, g), typeof u == "string" && (p = /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(
    Ht,
    {
      key: r,
      placement: "right",
      delay: { show: 400, hide: 250 },
      overlay: /* @__PURE__ */ m.createElement(Bt, { id: `tooltip-${e}` }, u)
    },
    p
  ))), p;
}, xe = "animating-expand", Ee = "animating-collapse", Ce = "animating", Te = "reduced", Se = "expanded", as = pt((h, e) => {
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
  const u = V(), f = V(), [g, k] = R(!0), p = () => {
    const b = f.current.getBoundingClientRect();
    u.current.style.width = b.width + "px", u.current.style.height = b.height + "px";
  }, i = () => {
    u.current.style.width = "1.7em", u.current.style.height = "1.7em";
  }, l = () => {
    u.current.classList.remove(Se), u.current.classList.add(Ee, Ce), i();
  }, c = () => {
    u.current.classList.remove(Te), u.current.classList.add(xe, Ce), p();
  }, d = () => u.current.classList.contains(xe), v = () => u.current.classList.contains(Ee);
  return M(() => {
    s ? (u.current.classList.add(Se), p(), n(!0), r(!0)) : (u.current.classList.add(Te), i(), n(!1), r(!1));
    const b = () => {
      n(!1);
    };
    return k(!1), document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, []), M(() => {
    g || (s ? c() : l());
  }, [s]), ft({
    targetRef: f,
    onResize: (b, y) => {
      u.current.classList.contains("expanded") && Wt(f.current, p);
    }
  }), /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: u,
      onTransitionEnd: (b) => {
        b.propertyName === "width" && (v() && !s ? (u.current.classList.add(Te), r(!1)) : d() && s && (u.current.classList.add(Se), r(!0)), u.current.classList.remove(
          Ee,
          xe,
          Ce
        ));
      },
      onMouseDown: (b) => b.stopPropagation(),
      onClick: (b) => {
        b.stopPropagation(), n(!0);
      },
      className: H(
        a,
        "collapsible"
      )
    },
    /* @__PURE__ */ m.createElement("span", { className: "caption", ref: e }, o),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: f,
        className: "content"
      },
      t
    )
  );
}), Si = (h) => Ut(h.children, (e) => m.cloneElement(e, {
  disabled: e.props.disabled || h.disabled
})), Li = (h) => {
  const {
    notifications: e,
    variant: t,
    visible: s = !1,
    targetRef: n,
    bordered: r = !1,
    size: o
  } = h, a = V(), u = V(), [f, g] = R(!1);
  function k(p) {
    p.preventDefault(), p.stopPropagation(), f ? (g(!1), a.current.style.width = null, a.current.style.height = null) : (g(!0), a.current.style.width = u.current.scrollWidth + "px", a.current.style.height = u.current.scrollHeight + "px");
  }
  return M(() => {
    const p = (i) => {
      i.stopPropagation(), g(!1), a.current && (a.current.style.width = null, a.current.style.height = null);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, []), n ? /* @__PURE__ */ m.createElement(
    Anchor,
    {
      anchor: "TOP-RIGHT",
      align: "TOP-LEFT",
      targetRef: n
    },
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: a,
        onClick: k,
        className: H(
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
      /* @__PURE__ */ m.createElement(
        "div",
        {
          ref: u,
          className: "content"
        },
        e
      )
    )
  ) : h.children ? /* @__PURE__ */ m.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: a,
      onClick: k,
      className: H(
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
    /* @__PURE__ */ m.createElement(
      "div",
      {
        ref: u,
        className: "content"
      },
      e
    )
  ), h.children) : /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: a,
      onClick: k,
      className: H(
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
    /* @__PURE__ */ m.createElement(
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
  } = h, [g, k] = R(!0), [p, i] = R(e), [l, c] = R(!1);
  M(() => {
    e !== p && (c(!0), k(!1));
    const _ = () => {
      e && t(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [e]);
  let d;
  switch (u) {
    case "right":
      d = /* @__PURE__ */ m.createElement(Qt, null);
      break;
    case "left":
      d = /* @__PURE__ */ m.createElement(Zt, null);
      break;
  }
  const v = /* @__PURE__ */ m.createElement(
    W,
    {
      onClick: () => t(!1),
      variant: "light"
    },
    d
  ), b = /* @__PURE__ */ m.createElement(
    Vt,
    {
      className: H({ hidden: !n }),
      animation: "border",
      role: "status",
      variant: "secondary"
    }
  );
  let y;
  return s ? y = /* @__PURE__ */ m.createElement("h5", { className: "title" }, /* @__PURE__ */ m.createElement("span", { className: "content" }, s), /* @__PURE__ */ m.createElement("span", { className: "buttons" }, b, v)) : y = /* @__PURE__ */ m.createElement("div", { className: "title" }, b, /* @__PURE__ */ m.createElement("span", { className: "buttons" }, v)), /* @__PURE__ */ m.createElement(
    "div",
    {
      id: o,
      onAnimationEnd: (_) => c(e),
      onMouseDown: (_) => {
        _.stopPropagation();
      },
      className: H(
        r,
        `name-${a}`,
        "drawer",
        `${u}-drawer`,
        "animate__animated",
        "animate__faster",
        {
          initial: g,
          "willbe-visible": e,
          "initially-visible": p,
          animate__slideInRight: u === "right" && e && !g,
          animate__slideOutRight: u === "right" && !e && !g,
          animate__slideInLeft: u === "left" && e && !g,
          animate__slideOutLeft: u === "left" && !e && !g
        }
      )
    },
    y,
    l || !f ? h.children : null
  );
}, Pi = (h) => {
  const {
    visibleItem: e
  } = h;
  return m.Children.map(h.children, (t) => {
    if (!m.isValidElement(t))
      return t;
    const {
      title: s,
      name: n,
      loading: r,
      className: o,
      id: a,
      onClose: u
    } = t.props;
    return /* @__PURE__ */ m.createElement(
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
}, hs = ({
  min: h,
  max: e,
  ticks: t,
  value: s,
  onChange: n,
  formatter: r = (g) => g,
  className: o = "",
  tooltip_position: a,
  orientation: u = "vertical",
  disabled: f = !1
}) => {
  const g = V(), k = Array.isArray(s), p = ze();
  function i(d, v) {
    return () => {
      const {
        min: b,
        max: y
      } = g.current.rangeLimits;
      let _ = [
        y - g.current.value.max,
        y - g.current.value.min
      ];
      return _[v] += d, _[v] = Math.min(y, _[v]), _[v] = Math.max(b, _[v]), n(k ? _ : _[v]), !1;
    };
  }
  function l(d) {
    const v = -Math.sign(d.deltaY), {
      min: b,
      max: y
    } = g.current.rangeLimits;
    let _ = [
      y - g.current.value.max,
      y - g.current.value.min
    ];
    _[1] += v, _[1] = Math.max(b, _[1]), _[1] = Math.min(y, _[1]), n(k ? [
      _[0],
      _[1]
    ] : _[1]), d.stopPropagation();
  }
  if (g.current)
    if (k) {
      let d = g.current.index;
      g.current.thumb[0].current.setAttribute("data-value", r(s[d.max])), g.current.thumb[1].current.setAttribute("data-value", r(s[d.min]));
    } else
      g.current.thumb[0].current.setAttribute("data-value", r(s));
  else
    p();
  const c = /* @__PURE__ */ m.createElement(
    ts,
    {
      ref: g,
      onInput: (d) => n(k ? [e - d[1], e - d[0]] : e - d[0]),
      value: k ? [e - s[1], e - s[0]] : [e - s, e],
      step: 1,
      max: e,
      min: h,
      disabled: f,
      thumbsDisabled: [!1, !k],
      orientation: u
    }
  );
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      className: H(
        o,
        "slider",
        `slider-${u}`,
        {
          dual: k,
          disabled: f
        }
      ),
      onWheel: l
    },
    /* @__PURE__ */ m.createElement(Je, { className: "max-btns" }, /* @__PURE__ */ m.createElement(
      W,
      {
        variant: "secondary",
        className: "plus",
        disabled: f,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: i(1, 1)
      },
      /* @__PURE__ */ m.createElement(je, null)
    ), /* @__PURE__ */ m.createElement(
      W,
      {
        variant: "secondary",
        className: "minus",
        disabled: f,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: i(-1, 1)
      },
      /* @__PURE__ */ m.createElement(Ke, null)
    )),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        style: { height: "100%" },
        onPointerDown: (d) => d.stopPropagation()
      },
      c
    ),
    k ? /* @__PURE__ */ m.createElement(Je, { className: "min-btns" }, /* @__PURE__ */ m.createElement(
      W,
      {
        variant: "secondary",
        className: "plus",
        disabled: f,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: i(1, 0)
      },
      /* @__PURE__ */ m.createElement(je, null)
    ), /* @__PURE__ */ m.createElement(
      W,
      {
        variant: "secondary",
        className: "minus",
        disabled: f,
        onPointerDown: (d) => d.stopPropagation(),
        onClick: i(-1, 0)
      },
      /* @__PURE__ */ m.createElement(Ke, null)
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
    this.itemCount = s, this.itemSize = t, this.itemRenderer = n, this.onChange = r, this.invalidate = ze();
    const u = V();
    this.targetRef = u, ft({
      targetRef: u,
      onResize: (f, g) => {
        this.height = g, this.update(), this.refresh(), this.invalidate();
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
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      id: h.id,
      className: "gargantua",
      ref: t.targetRef,
      onWheel: t.onWheel
    },
    /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement("div", { className: "content" }, t.getElements()), /* @__PURE__ */ m.createElement("div", { className: "mock" }), /* @__PURE__ */ m.createElement(
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
}, Ai = m.forwardRef(ps);
function De() {
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
let Z = De();
function mt(h) {
  Z = h;
}
const Y = { exec: () => null };
function T(h, e = "") {
  let t = typeof h == "string" ? h : h.source;
  const s = {
    replace: (n, r) => {
      let o = typeof r == "string" ? r : r.source;
      return o = o.replace(N.caret, "$1"), t = t.replace(n, o), s;
    },
    getRegex: () => new RegExp(t, e)
  };
  return s;
}
const N = {
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
}, ds = /^(?:[ \t]*(?:\n|$))+/, fs = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ms = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ee = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, gs = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, $e = /(?:[*+-]|\d{1,9}[.)])/, gt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, vt = T(gt).replace(/bull/g, $e).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), vs = T(gt).replace(/bull/g, $e).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), He = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ks = /^[^\n]+/, Be = /(?!\s*\])(?:\\.|[^\[\]\\])+/, _s = T(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Be).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), bs = T(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, $e).getRegex(), fe = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ve = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ys = T("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ve).replace("tag", fe).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), kt = T(He).replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", fe).getRegex(), ws = T(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", kt).getRegex(), Oe = {
  blockquote: ws,
  code: fs,
  def: _s,
  fences: ms,
  heading: gs,
  hr: ee,
  html: ys,
  lheading: vt,
  list: bs,
  newline: ds,
  paragraph: kt,
  table: Y,
  text: ks
}, tt = T("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", fe).getRegex(), xs = {
  ...Oe,
  lheading: vs,
  table: tt,
  paragraph: T(He).replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", tt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", fe).getRegex()
}, Es = {
  ...Oe,
  html: T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ve).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Y,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: T(He).replace("hr", ee).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", vt).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Cs = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ts = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, _t = /^( {2,}|\\)\n(?!\s*$)/, Ss = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, me = /[\p{P}\p{S}]/u, Fe = /[\s\p{P}\p{S}]/u, bt = /[^\s\p{P}\p{S}]/u, Ls = T(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Fe).getRegex(), yt = /(?!~)[\p{P}\p{S}]/u, Ps = /(?!~)[\s\p{P}\p{S}]/u, As = /(?:[^\s\p{P}\p{S}]|~)/u, Rs = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, wt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ms = T(wt, "u").replace(/punct/g, me).getRegex(), Ns = T(wt, "u").replace(/punct/g, yt).getRegex(), xt = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", zs = T(xt, "gu").replace(/notPunctSpace/g, bt).replace(/punctSpace/g, Fe).replace(/punct/g, me).getRegex(), Is = T(xt, "gu").replace(/notPunctSpace/g, As).replace(/punctSpace/g, Ps).replace(/punct/g, yt).getRegex(), Ds = T("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, bt).replace(/punctSpace/g, Fe).replace(/punct/g, me).getRegex(), $s = T(/\\(punct)/, "gu").replace(/punct/g, me).getRegex(), Hs = T(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Bs = T(Ve).replace("(?:-->|$)", "-->").getRegex(), Vs = T("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Bs).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ue = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Os = T(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ue).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Et = T(/^!?\[(label)\]\[(ref)\]/).replace("label", ue).replace("ref", Be).getRegex(), Ct = T(/^!?\[(ref)\](?:\[\])?/).replace("ref", Be).getRegex(), Fs = T("reflink|nolink(?!\\()", "g").replace("reflink", Et).replace("nolink", Ct).getRegex(), qe = {
  _backpedal: Y,
  // only used for GFM url
  anyPunctuation: $s,
  autolink: Hs,
  blockSkip: Rs,
  br: _t,
  code: Ts,
  del: Y,
  emStrongLDelim: Ms,
  emStrongRDelimAst: zs,
  emStrongRDelimUnd: Ds,
  escape: Cs,
  link: Os,
  nolink: Ct,
  punctuation: Ls,
  reflink: Et,
  reflinkSearch: Fs,
  tag: Vs,
  text: Ss,
  url: Y
}, qs = {
  ...qe,
  link: T(/^!?\[(label)\]\((.*?)\)/).replace("label", ue).getRegex(),
  reflink: T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ue).getRegex()
}, Ne = {
  ...qe,
  emStrongRDelimAst: Is,
  emStrongLDelim: Ns,
  url: T(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Gs = {
  ...Ne,
  br: T(_t).replace("{2,}", "*").getRegex(),
  text: T(Ne.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, he = {
  normal: Oe,
  gfm: xs,
  pedantic: Es
}, X = {
  normal: qe,
  gfm: Ne,
  breaks: Gs,
  pedantic: qs
}, Ws = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, st = (h) => Ws[h];
function B(h, e) {
  if (e) {
    if (N.escapeTest.test(h))
      return h.replace(N.escapeReplace, st);
  } else if (N.escapeTestNoEncode.test(h))
    return h.replace(N.escapeReplaceNoEncode, st);
  return h;
}
function it(h) {
  try {
    h = encodeURI(h).replace(N.percentDecode, "%");
  } catch {
    return null;
  }
  return h;
}
function nt(h, e) {
  const t = h.replace(N.findPipe, (r, o, a) => {
    let u = !1, f = o;
    for (; --f >= 0 && a[f] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), s = t.split(N.splitPipe);
  let n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e)
    if (s.length > e)
      s.splice(e);
    else
      for (; s.length < e; )
        s.push("");
  for (; n < s.length; n++)
    s[n] = s[n].trim().replace(N.slashPipe, "|");
  return s;
}
function J(h, e, t) {
  const s = h.length;
  if (s === 0)
    return "";
  let n = 0;
  for (; n < s && h.charAt(s - n - 1) === e; )
    n++;
  return h.slice(0, s - n);
}
function Us(h, e) {
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
function Zs(h, e, t) {
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
class pe {
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
        text: this.options.pedantic ? s : J(s, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const s = t[0], n = Zs(s, t[3] || "", this.rules);
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
        const n = J(s, "#");
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
        raw: J(t[0], `
`)
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let s = J(t[0], `
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
        const g = u.join(`
`), k = g.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${g}` : g, r = r ? `${r}
${k}` : k;
        const p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(k, o, !0), this.lexer.state.top = p, s.length === 0)
          break;
        const i = o.at(-1);
        if (i?.type === "code")
          break;
        if (i?.type === "blockquote") {
          const l = i, c = l.raw + `
` + s.join(`
`), d = this.blockquote(c);
          o[o.length - 1] = d, n = n.substring(0, n.length - l.raw.length) + d.raw, r = r.substring(0, r.length - l.text.length) + d.text;
          break;
        } else if (i?.type === "list") {
          const l = i, c = l.raw + `
` + s.join(`
`), d = this.list(c);
          o[o.length - 1] = d, n = n.substring(0, n.length - i.raw.length) + d.raw, r = r.substring(0, r.length - l.raw.length) + d.raw, s = c.substring(o.at(-1).raw.length).split(`
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
        let f = !1, g = "", k = "";
        if (!(t = o.exec(e)) || this.rules.block.hr.test(e))
          break;
        g = t[0], e = e.substring(g.length);
        let p = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), i = e.split(`
`, 1)[0], l = !p.trim(), c = 0;
        if (this.options.pedantic ? (c = 2, k = p.trimStart()) : l ? c = t[1].length + 1 : (c = t[2].search(this.rules.other.nonSpaceChar), c = c > 4 ? 1 : c, k = p.slice(c), c += t[1].length), l && this.rules.other.blankLine.test(i) && (g += i + `
`, e = e.substring(i.length + 1), f = !0), !f) {
          const b = this.rules.other.nextBulletRegex(c), y = this.rules.other.hrRegex(c), _ = this.rules.other.fencesBeginRegex(c), x = this.rules.other.headingBeginRegex(c), C = this.rules.other.htmlBeginRegex(c);
          for (; e; ) {
            const L = e.split(`
`, 1)[0];
            let w;
            if (i = L, this.options.pedantic ? (i = i.replace(this.rules.other.listReplaceNesting, "  "), w = i) : w = i.replace(this.rules.other.tabCharGlobal, "    "), _.test(i) || x.test(i) || C.test(i) || b.test(i) || y.test(i))
              break;
            if (w.search(this.rules.other.nonSpaceChar) >= c || !i.trim())
              k += `
` + w.slice(c);
            else {
              if (l || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || _.test(p) || x.test(p) || y.test(p))
                break;
              k += `
` + i;
            }
            !l && !i.trim() && (l = !0), g += L + `
`, e = e.substring(L.length + 1), p = w.slice(c);
          }
        }
        r.loose || (a ? r.loose = !0 : this.rules.other.doubleBlankLine.test(g) && (a = !0));
        let d = null, v;
        this.options.gfm && (d = this.rules.other.listIsTask.exec(k), d && (v = d[0] !== "[ ] ", k = k.replace(this.rules.other.listReplaceTask, ""))), r.items.push({
          type: "list_item",
          raw: g,
          task: !!d,
          checked: v,
          loose: !1,
          text: k,
          tokens: []
        }), r.raw += g;
      }
      const u = r.items.at(-1);
      if (u)
        u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
      else
        return;
      r.raw = r.raw.trimEnd();
      for (let f = 0; f < r.items.length; f++)
        if (this.lexer.state.top = !1, r.items[f].tokens = this.lexer.blockTokens(r.items[f].text, []), !r.loose) {
          const g = r.items[f].tokens.filter((p) => p.type === "space"), k = g.length > 0 && g.some((p) => this.rules.other.anyLine.test(p.raw));
          r.loose = k;
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
        const o = J(s.slice(0, -1), "\\");
        if ((s.length - o.length) % 2 === 0)
          return;
      } else {
        const o = Us(t[2], "()");
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
      let a, u, f = o, g = 0;
      const k = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, t = t.slice(-1 * e.length + o); (n = k.exec(t)) != null; ) {
        if (a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !a)
          continue;
        if (u = [...a].length, n[3] || n[4]) {
          f += u;
          continue;
        } else if ((n[5] || n[6]) && o % 3 && !((o + u) % 3)) {
          g += u;
          continue;
        }
        if (f -= u, f > 0)
          continue;
        u = Math.min(u, u + f + g);
        const p = [...n[0]][0].length, i = e.slice(0, o + n.index + p + u);
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
class D {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Z, this.options.tokenizer = this.options.tokenizer || new pe(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      other: N,
      block: he.normal,
      inline: X.normal
    };
    this.options.pedantic ? (t.block = he.pedantic, t.inline = X.pedantic) : this.options.gfm && (t.block = he.gfm, this.options.breaks ? t.inline = X.breaks : t.inline = X.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: he,
      inline: X
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new D(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new D(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(N.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      const s = this.inlineQueue[t];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], s = !1) {
    for (this.options.pedantic && (e = e.replace(N.tabCharGlobal, "    ").replace(N.spaceLine, "")); e; ) {
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
        const g = e.slice(1);
        let k;
        this.options.extensions.startInline.forEach((p) => {
          k = p.call({ lexer: this }, g), typeof k == "number" && k >= 0 && (f = Math.min(f, k));
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
class de {
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
    const n = (t || "").match(N.notSpaceStart)?.[0], r = e.replace(N.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + B(n) + '">' + (s ? r : B(r, !0)) + `</code></pre>
` : "<pre><code>" + (s ? r : B(r, !0)) + `</code></pre>
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
      e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = s + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = s + " " + B(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
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
    return `<code>${B(e, !0)}</code>`;
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
    return t && (o += ' title="' + B(t) + '"'), o += ">" + n + "</a>", o;
  }
  image({ href: e, title: t, text: s }) {
    const n = it(e);
    if (n === null)
      return B(s);
    e = n;
    let r = `<img src="${e}" alt="${s}"`;
    return t && (r += ` title="${B(t)}"`), r += ">", r;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : B(e.text);
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
    this.options = e || Z, this.options.renderer = this.options.renderer || new de(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ge();
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
class ce {
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
    return this.block ? D.lex : D.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? $.parse : $.parseInline;
  }
}
class Qs {
  defaults = De();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = $;
  Renderer = de;
  TextRenderer = Ge;
  Lexer = D;
  Tokenizer = pe;
  Hooks = ce;
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
        const r = this.defaults.renderer || new de(this.defaults);
        for (const o in s.renderer) {
          if (!(o in r))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const a = o, u = s.renderer[a], f = r[a];
          r[a] = (...g) => {
            let k = u.apply(r, g);
            return k === !1 && (k = f.apply(r, g)), k || "";
          };
        }
        n.renderer = r;
      }
      if (s.tokenizer) {
        const r = this.defaults.tokenizer || new pe(this.defaults);
        for (const o in s.tokenizer) {
          if (!(o in r))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const a = o, u = s.tokenizer[a], f = r[a];
          r[a] = (...g) => {
            let k = u.apply(r, g);
            return k === !1 && (k = f.apply(r, g)), k;
          };
        }
        n.tokenizer = r;
      }
      if (s.hooks) {
        const r = this.defaults.hooks || new ce();
        for (const o in s.hooks) {
          if (!(o in r))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const a = o, u = s.hooks[a], f = r[a];
          ce.passThroughHooks.has(o) ? r[a] = (g) => {
            if (this.defaults.async)
              return Promise.resolve(u.call(r, g)).then((p) => f.call(r, p));
            const k = u.call(r, g);
            return f.call(r, k);
          } : r[a] = (...g) => {
            let k = u.apply(r, g);
            return k === !1 && (k = f.apply(r, g)), k;
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
    return D.lex(e, t ?? this.defaults);
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
      const u = o.hooks ? o.hooks.provideLexer() : e ? D.lex : D.lexInline, f = o.hooks ? o.hooks.provideParser() : e ? $.parse : $.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((g) => u(g, o)).then((g) => o.hooks ? o.hooks.processAllTokens(g) : g).then((g) => o.walkTokens ? Promise.all(this.walkTokens(g, o.walkTokens)).then(() => g) : g).then((g) => f(g, o)).then((g) => o.hooks ? o.hooks.postprocess(g) : g).catch(a);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let g = u(s, o);
        o.hooks && (g = o.hooks.processAllTokens(g)), o.walkTokens && this.walkTokens(g, o.walkTokens);
        let k = f(g, o);
        return o.hooks && (k = o.hooks.postprocess(k)), k;
      } catch (g) {
        return a(g);
      }
    };
  }
  onError(e, t) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const n = "<p>An error occurred:</p><pre>" + B(s.message + "", !0) + "</pre>";
        return t ? Promise.resolve(n) : n;
      }
      if (t)
        return Promise.reject(s);
      throw s;
    };
  }
}
const U = new Qs();
function S(h, e) {
  return U.parse(h, e);
}
S.options = S.setOptions = function(h) {
  return U.setOptions(h), S.defaults = U.defaults, mt(S.defaults), S;
};
S.getDefaults = De;
S.defaults = Z;
S.use = function(...h) {
  return U.use(...h), S.defaults = U.defaults, mt(S.defaults), S;
};
S.walkTokens = function(h, e) {
  return U.walkTokens(h, e);
};
S.parseInline = U.parseInline;
S.Parser = $;
S.parser = $.parse;
S.Renderer = de;
S.TextRenderer = Ge;
S.Lexer = D;
S.lexer = D.lex;
S.Tokenizer = pe;
S.Hooks = ce;
S.parse = S;
S.options;
S.setOptions;
S.use;
S.walkTokens;
S.parseInline;
$.parse;
D.lex;
const js = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;
function Ks(h) {
  let e;
  for (; (e = js.exec(h)) !== null; ) {
    const { dateStr: t } = e.groups;
    h = h.replaceAll(
      e[0],
      new Date(t).toLocaleDateString()
    );
  }
  return h;
}
function rt(h) {
  return h = Ks(h), S.parse(h);
}
const Xs = (h) => {
  const {
    entry: e
  } = h;
  let t;
  switch (e.severity) {
    case "info":
    case "success":
      t = /* @__PURE__ */ m.createElement(Xe, null);
      break;
    case "warning":
      t = /* @__PURE__ */ m.createElement(Kt, null);
      break;
    case "error":
      t = /* @__PURE__ */ m.createElement(jt, null);
      break;
    default:
      t = /* @__PURE__ */ m.createElement(Xe, null);
  }
  let s = e.message;
  return Array.isArray(s) || (s = [s]), /* @__PURE__ */ m.createElement("div", { className: H("entry", e.severity, e.category) }, /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement("span", { className: "icon" }, t), /* @__PURE__ */ m.createElement("span", { className: "date" }, e.date?.toLocaleDateString?.call(e.date))), s.map((n) => /* @__PURE__ */ m.createElement(
    "div",
    {
      className: "message",
      dangerouslySetInnerHTML: { __html: rt(n) }
    }
  )), /* @__PURE__ */ m.createElement("div", { className: "changes" }, e.changes?.map((n) => /* @__PURE__ */ m.createElement(
    "div",
    {
      dangerouslySetInnerHTML: { __html: rt(n) },
      className: "change"
    }
  ))));
}, Ri = (h) => {
  const {
    show: e,
    onShow: t,
    getMessages: s,
    title: n,
    icon: r
  } = h, [o, a] = R([]), [u, f] = R();
  M(() => {
    e && (async () => {
      try {
        let k = await s();
        a(k);
      } catch (k) {
        f(k);
      }
    })();
  }, [e]);
  let g;
  return u || !Array.isArray(o) || o.length > 0 && typeof o[0] != "object" ? g = /* @__PURE__ */ m.createElement(Ue, { variant: "danger" }, "Sorry unable to retrieve messages. Try again later.") : o.length === 0 ? g = /* @__PURE__ */ m.createElement(Ue, { variant: "secondary" }, "There are currently no message") : g = /* @__PURE__ */ m.createElement("div", { className: "announcement-messages" }, o.map((k) => /* @__PURE__ */ m.createElement(Xs, { entry: k }))), /* @__PURE__ */ m.createElement(
    q,
    {
      show: e,
      onHide: () => t(!1),
      size: "lg"
    },
    /* @__PURE__ */ m.createElement(q.Header, null, /* @__PURE__ */ m.createElement(q.Title, null, /* @__PURE__ */ m.createElement("span", null, r), /* @__PURE__ */ m.createElement("span", null, n))),
    /* @__PURE__ */ m.createElement(q.Body, null, g)
  );
}, Mi = (h) => {
  const {
    show: e,
    onHide: t,
    onConfirm: s,
    title: n,
    message: r
  } = h;
  return /* @__PURE__ */ m.createElement(
    q,
    {
      show: e,
      size: "sm",
      onHide: t
    },
    /* @__PURE__ */ m.createElement(q.Header, { closeButton: !0 }, /* @__PURE__ */ m.createElement(q.Title, null, /* @__PURE__ */ m.createElement(Xt, null), /* @__PURE__ */ m.createElement("span", { className: "" }, n))),
    /* @__PURE__ */ m.createElement(q.Body, null, /* @__PURE__ */ m.createElement("p", { className: "ellipsis" }, r)),
    /* @__PURE__ */ m.createElement(q.Footer, null, /* @__PURE__ */ m.createElement(
      W,
      {
        variant: "secondary",
        onClick: t
      },
      "Cancel"
    ), /* @__PURE__ */ m.createElement(
      W,
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
  return /* @__PURE__ */ React.createElement("div", { className: H(
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
    setPinned: u,
    className: f,
    pinReceiver: g
  } = h;
  R(!1);
  const k = [];
  return n && k.push(
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (p) => {
          p.stopPropagation(), u(!a);
        }
      },
      a ? /* @__PURE__ */ m.createElement(Jt, null) : /* @__PURE__ */ m.createElement(Yt, null)
    )
  ), r && k.push(
    /* @__PURE__ */ m.createElement(
      "div",
      {
        className: "btn-light",
        onClick: (p) => {
          p.stopPropagation(), o();
        }
      },
      /* @__PURE__ */ m.createElement(es, null)
    )
  ), /* @__PURE__ */ m.createElement(
    as,
    {
      ...h,
      className: H(f, {
        pinnable: n,
        closable: r
      }),
      expanded: t || a,
      onExpand: s,
      ref: e
    },
    g ? /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(at, { buttons: k }, g), h.children) : /* @__PURE__ */ m.createElement(at, { buttons: k }, h.children)
  );
}), Ni = (h) => {
  const {
    progress: e,
    label: t
  } = h;
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      className: H(
        "progress-container",
        "animate__slower",
        "animate__animated",
        {
          animate__fadeOut: e >= 100 || e <= 0
        }
      )
    },
    /* @__PURE__ */ m.createElement("div", { className: "progress-label" }, t),
    /* @__PURE__ */ m.createElement(Ot, { now: e })
  );
};
let Ys = 0;
const zi = (h) => {
  const [e, t] = R(null), s = V(window), [n, r] = R(() => Ys++), {
    name: o = "",
    options: a = "",
    notifications: u
  } = h;
  function f() {
    h.onClose();
  }
  return M(() => {
    const g = document.createElement("div");
    t(g);
  }, []), M(() => {
    function g() {
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
      const k = () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), p.removeEventListener("beforeunload", f), p.close();
      };
      window.addEventListener("beforeunload", k);
      const p = s.current;
      return () => {
        process.env.FRONTEND_LOGGING_ENABLED === "true" && console.debug("Closing the admin control panel"), window.removeEventListener("beforeunload", k), p.close();
      };
    }
    if (e)
      return g();
  }, [e]), e && It(h.children, e);
}, Ii = (h) => {
  const {
    id: e
  } = h, { hideAll: t } = ss({
    id: "file-ctx-menu"
  }), [s, n] = R(!1);
  function r(a) {
    a.key === "Escape" && t();
  }
  M(() => {
    if (s)
      return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [s]);
  function o(a) {
    const {
      elem: u,
      name: f,
      value: g,
      index: k
    } = a;
  }
  return /* @__PURE__ */ m.createElement(
    is,
    {
      id: "file-ctx-menu",
      animation: "slide",
      onVisibilityChange: n
    },
    /* @__PURE__ */ m.createElement(
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
    /* @__PURE__ */ m.createElement(Ye, { id: "cut" }, "Cut")
  );
}, Di = (h) => {
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
  function g(i) {
    e[o] = i.target.value, s(e[o], { target: e, name: o });
  }
  function k(i) {
    e[o] = i.target.value, t(e[o], { target: e, name: o });
  }
  function p(i) {
    e[o] = i.target.value, n(e[o], { target: e, name: o });
  }
  return /* @__PURE__ */ React.createElement(Ze.Group, { className: "text-field" }, /* @__PURE__ */ React.createElement(Ze.Label, { className: "text-secondary small", htmlFor: o }, a), /* @__PURE__ */ React.createElement(
    Ft,
    {
      id: o,
      type: u,
      disabled: r,
      value: e[o] ?? "",
      name: o,
      onChange: k,
      required: f,
      onKeyDown: (i) => {
        i.key === "Enter" ? g(i) : i.key === "Escape" && p(i);
      }
    }
  ));
}, Tt = Dt(null), $i = (h) => {
  const {
    collapsible: e = !0
  } = h, [t, s] = R();
  return /* @__PURE__ */ React.createElement(Tt.Provider, { value: {
    collapsible: e,
    setExpanded: (n) => s(n),
    expanded: t
  } }, h.children);
}, Hi = (h) => {
  const e = $t(Tt), {
    canPin: t = !1,
    canClose: s = !1,
    eventKey: n,
    onExpand: r = Me,
    onPin: o = Me
  } = h, [a, u] = usePersistedState(n + ".pinned"), {
    collapsible: f,
    expanded: g,
    setExpanded: k
  } = e;
  return /* @__PURE__ */ React.createElement(
    Js,
    {
      ...h,
      pinned: a,
      setPinned: u,
      expanded: g === n || !f,
      setExpanded: (p) => {
        r(p), k(f && p ? n : null);
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
function Bi(h) {
  const {
    value: e,
    options: t,
    onChange: s,
    disabled: n,
    placeholder: r = "Select…",
    className: o
  } = h, a = dt(() => ei(t), [t]), u = a.find((f) => f.value === e);
  return /* @__PURE__ */ m.createElement(Qe, null, /* @__PURE__ */ m.createElement(Qe.Toggle, { disabled: n }, u ? u.label : r), /* @__PURE__ */ m.createElement(qt, null, a.map((f) => /* @__PURE__ */ m.createElement(
    Gt,
    {
      key: String(f.value),
      onClick: () => s(f.value),
      "aria-disabled": f.disabled
    },
    f.label
  ))));
}
var Le = { exports: {} };
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
        var u = Array.prototype.slice;
        function f() {
        }
        function g(k) {
          if (!k)
            return;
          function p(c) {
            c.prototype.option || (c.prototype.option = function(d) {
              k.isPlainObject(d) && (this.options = k.extend(!0, this.options, d));
            });
          }
          var i = typeof console > "u" ? f : function(c) {
            console.error(c);
          };
          function l(c, d) {
            k.fn[c] = function(v) {
              if (typeof v == "string") {
                for (var b = u.call(arguments, 1), y = 0, _ = this.length; y < _; y++) {
                  var x = this[y], C = k.data(x, c);
                  if (!C) {
                    i("cannot call methods on " + c + " prior to initialization; attempted to call '" + v + "'");
                    continue;
                  }
                  if (!k.isFunction(C[v]) || v.charAt(0) === "_") {
                    i("no such method '" + v + "' for " + c + " instance");
                    continue;
                  }
                  var L = C[v].apply(C, b);
                  if (L !== void 0 && L !== C)
                    return L;
                }
                return this;
              } else {
                var w = this.map(function() {
                  var E = k.data(this, c);
                  return E ? (E.option(v), E._init()) : (E = new d(this, v), k.data(this, c, E)), k(this);
                });
                return w.length === 1 ? w[0] : w;
              }
            };
          }
          return k.bridget = function(c, d) {
            p(d), l(c, d);
          }, k.bridget;
        }
        g(a);
      }(s), function(a) {
        var u = void 0, f = {
          formatInvalidInputErrorMsg: function(i) {
            return "Invalid input value '" + i + "' passed in";
          },
          callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, g = {
          linear: {
            getValue: function(i, l) {
              return i < l.min ? l.min : i > l.max ? l.max : i;
            },
            toValue: function(i) {
              var l = i / 100 * (this.options.max - this.options.min), c = !0;
              if (this.options.ticks_positions.length > 0) {
                for (var d, v, b, y = 0, _ = 1; _ < this.options.ticks_positions.length; _++)
                  if (i <= this.options.ticks_positions[_]) {
                    d = this.options.ticks[_ - 1], b = this.options.ticks_positions[_ - 1], v = this.options.ticks[_], y = this.options.ticks_positions[_];
                    break;
                  }
                var x = (i - b) / (y - b);
                l = d + x * (v - d), c = !1;
              }
              var C = c ? this.options.min : 0, L = C + Math.round(l / this.options.step) * this.options.step;
              return g.linear.getValue(L, this.options);
            },
            toPercentage: function(i) {
              if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0) {
                for (var l, c, d, v = 0, b = 0; b < this.options.ticks.length; b++)
                  if (i <= this.options.ticks[b]) {
                    l = b > 0 ? this.options.ticks[b - 1] : 0, d = b > 0 ? this.options.ticks_positions[b - 1] : 0, c = this.options.ticks[b], v = this.options.ticks_positions[b];
                    break;
                  }
                if (b > 0) {
                  var y = (i - l) / (c - l);
                  return d + y * (v - d);
                }
              }
              return 100 * (i - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic: {
            /* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
            toValue: function(i) {
              var l = 1 - this.options.min, c = Math.log(this.options.min + l), d = Math.log(this.options.max + l), v = Math.exp(c + (d - c) * i / 100) - l;
              return Math.round(v) === d ? d : (v = this.options.min + Math.round((v - this.options.min) / this.options.step) * this.options.step, g.linear.getValue(v, this.options));
            },
            toPercentage: function(i) {
              if (this.options.max === this.options.min)
                return 0;
              var l = 1 - this.options.min, c = Math.log(this.options.max + l), d = Math.log(this.options.min + l), v = Math.log(i + l);
              return 100 * (v - d) / (c - d);
            }
          }
        };
        o = function(i, l) {
          return k.call(this, i, l), this;
        };
        function k(p, i) {
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
          for (var l = Object.keys(this.defaultOptions), c = i.hasOwnProperty("min"), d = i.hasOwnProperty("max"), v = 0; v < l.length; v++) {
            var b = l[v], y = i[b];
            y = typeof y < "u" ? y : x(this.element, b), y = y !== null ? y : this.defaultOptions[b], this.options || (this.options = {}), this.options[b] = y;
          }
          if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), this.options.rtl === "auto") {
            var _ = window.getComputedStyle(this.element);
            _ != null ? this.options.rtl = _.direction === "rtl" : this.options.rtl = this.element.style.direction === "rtl";
          }
          this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom") ? this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right" : this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right") && (this.options.tooltip_position = "top");
          function x(P, ae) {
            var le = "data-slider-" + ae.replace(/_/g, "-"), j = P.getAttribute(le);
            try {
              return JSON.parse(j);
            } catch {
              return j;
            }
          }
          var C = this.element.style.width, L = !1, w = this.element.parentNode, E, z, O, A, I;
          if (this.sliderElem)
            L = !0;
          else {
            this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
            var F = document.createElement("div");
            F.className = "slider-track", z = document.createElement("div"), z.className = "slider-track-low", E = document.createElement("div"), E.className = "slider-selection", O = document.createElement("div"), O.className = "slider-track-high", A = document.createElement("div"), A.className = "slider-handle min-slider-handle", A.setAttribute("role", "slider"), A.setAttribute("aria-valuemin", this.options.min), A.setAttribute("aria-valuemax", this.options.max), I = document.createElement("div"), I.className = "slider-handle max-slider-handle", I.setAttribute("role", "slider"), I.setAttribute("aria-valuemin", this.options.min), I.setAttribute("aria-valuemax", this.options.max), F.appendChild(z), F.appendChild(E), F.appendChild(O), this.rangeHighlightElements = [];
            var te = this.options.rangeHighlights;
            if (Array.isArray(te) && te.length > 0)
              for (var ge = 0; ge < te.length; ge++) {
                var ve = document.createElement("div"), St = te[ge].class || "";
                ve.className = "slider-rangeHighlight slider-selection " + St, this.rangeHighlightElements.push(ve), F.appendChild(ve);
              }
            var ke = Array.isArray(this.options.labelledby);
            if (ke && this.options.labelledby[0] && A.setAttribute("aria-labelledby", this.options.labelledby[0]), ke && this.options.labelledby[1] && I.setAttribute("aria-labelledby", this.options.labelledby[1]), !ke && this.options.labelledby && (A.setAttribute("aria-labelledby", this.options.labelledby), I.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", v = 0; v < this.options.ticks.length; v++) {
                var Q = document.createElement("div");
                if (Q.className = "slider-tick", this.options.ticks_tooltip) {
                  var We = this._addTickListener(), Lt = We.addMouseEnter(this, Q, v), Pt = We.addMouseLeave(this, Q);
                  this.ticksCallbackMap[v] = {
                    mouseEnter: Lt,
                    mouseLeave: Pt
                  };
                }
                this.ticks.push(Q), this.ticksContainer.appendChild(Q);
              }
              E.className += " tick-slider-selection";
            }
            if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
              for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", v = 0; v < this.options.ticks_labels.length; v++) {
                var se = document.createElement("div"), At = this.options.ticks_positions.length === 0, Rt = this.options.reversed && At ? this.options.ticks_labels.length - (v + 1) : v;
                se.className = "slider-tick-label", se.innerHTML = this.options.ticks_labels[Rt], this.tickLabels.push(se), this.tickLabelContainer.appendChild(se);
              }
            var _e = function(ae) {
              var le = document.createElement("div");
              le.className = "arrow";
              var j = document.createElement("div");
              j.className = "tooltip-inner", ae.appendChild(le), ae.appendChild(j);
            }, ie = document.createElement("div");
            ie.className = "tooltip tooltip-main", ie.setAttribute("role", "presentation"), _e(ie);
            var ne = document.createElement("div");
            ne.className = "tooltip tooltip-min", ne.setAttribute("role", "presentation"), _e(ne);
            var oe = document.createElement("div");
            oe.className = "tooltip tooltip-max", oe.setAttribute("role", "presentation"), _e(oe), this.sliderElem.appendChild(F), this.sliderElem.appendChild(ie), this.sliderElem.appendChild(ne), this.sliderElem.appendChild(oe), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(A), this.sliderElem.appendChild(I), w.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
          }
          if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), g[this.options.scale] && (this.options.scale = g[this.options.scale]), L === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(P) {
            this._removeProperty(this.trackLow, P), this._removeProperty(this.trackSelection, P), this._removeProperty(this.trackHigh, P);
          }, this), [this.handle1, this.handle2].forEach(function(P) {
            this._removeProperty(P, "left"), this._removeProperty(P, "right"), this._removeProperty(P, "top");
          }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(P) {
            this._removeProperty(P, "bs-tooltip-left"), this._removeProperty(P, "bs-tooltip-right"), this._removeProperty(P, "bs-tooltip-top"), this._removeClass(P, "bs-tooltip-right"), this._removeClass(P, "bs-tooltip-left"), this._removeClass(P, "bs-tooltip-top");
          }, this)), this.options.orientation === "vertical" ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = C, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (d || (this.options.max = Math.max.apply(Math, this.options.ticks)), c || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = z || this.trackLow, this.trackSelection = E || this.trackSelection, this.trackHigh = O || this.trackHigh, this.options.selection === "none" ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : (this.options.selection === "after" || this.options.selection === "before") && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = A || this.handle1, this.handle2 = I || this.handle2, L === !0)
            for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), v = 0; v < this.ticks.length; v++)
              this._removeClass(this.ticks[v], "round triangle hide");
          var Mt = ["round", "triangle", "custom"], Nt = Mt.indexOf(this.options.handle) !== -1;
          if (Nt)
            for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), v = 0; v < this.ticks.length; v++)
              this._addClass(this.ticks[v], this.options.handle);
          if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), this.options.tooltip === "hide")
            this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");
          else if (this.options.tooltip === "always")
            this._showTooltip(), this._alwaysShowTooltip = !0;
          else {
            if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
              var re = this._addTickListener(), be = re.addMouseEnter(this, this.handle1), ye = re.addMouseLeave(this, this.handle1);
              this.handleCallbackMap.handle1 = {
                mouseEnter: be,
                mouseLeave: ye
              }, be = re.addMouseEnter(this, this.handle2), ye = re.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
                mouseEnter: be,
                mouseLeave: ye
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
            var d = this.getValue();
            this._state.value = this._validateInputValue(i);
            var v = this._applyPrecision.bind(this);
            this.options.range ? (this._state.value[0] = v(this._state.value[0]), this._state.value[1] = v(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = v(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this.options.selection === "after" ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
            var b = this.options.range ? this._state.value : this._state.value[0];
            this._setDataVal(b), l === !0 && this._trigger("slide", b);
            var y = !1;
            return Array.isArray(b) ? y = d[0] !== b[0] || d[1] !== b[1] : y = d !== b, y && c === !0 && this._trigger("change", {
              oldValue: d,
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
            return this._removeSliderEventHandlers(), k.call(this, this.element, this.options), i && i.useCurrentValue === !0 && this.setValue(l), a && (u === n ? (a.data(this.element, n, this), a.data(this.element, r, this)) : a.data(this.element, r, this)), this;
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
              for (var d = 0; d < c.length; d++)
                if (c[d] === l) {
                  c.splice(d, 1);
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
            var l = this, c = this.options.formatter(i ? i.value[0] : this._state.value[0]), d = i ? v(i, this.options.reversed) : v(this._state, this.options.reversed);
            this._setText(this.tooltipInner, c), this.tooltip.style[this.stylePos] = d[0] + "%";
            function v(b, y) {
              return y ? [100 - b.percentage[0], l.options.range ? 100 - b.percentage[1] : b.percentage[1]] : [b.percentage[0], b.percentage[1]];
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
              addMouseEnter: function(l, c, d) {
                var v = function() {
                  var y = l._copyState(), _ = c === l.handle1 ? y.value[0] : y.value[1], x = void 0;
                  d !== void 0 ? (_ = l.options.ticks[d], x = l.options.ticks_positions.length > 0 && l.options.ticks_positions[d] || l._toPercentage(l.options.ticks[d])) : x = l._toPercentage(_), y.value[0] = _, y.percentage[0] = x, l._setToolTipOnMouseOver(y), l._showTooltip();
                };
                return c.addEventListener("mouseenter", v, !1), v;
              },
              addMouseLeave: function(l, c) {
                var d = function() {
                  l._hideTooltip();
                };
                return c.addEventListener("mouseleave", d, !1), d;
              }
            };
          },
          _layout: function() {
            var i, l;
            if (this.options.reversed ? i = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : i = [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = i[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), l = this.options.formatter(this._state.value[0]), isNaN(l) ? this.handle1.setAttribute("aria-valuetext", l) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = i[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), l = this.options.formatter(this._state.value[1]), isNaN(l) ? this.handle2.setAttribute("aria-valuetext", l) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
              for (var c = 0; c < this.options.rangeHighlights.length; c++) {
                var d = this._toPercentage(this.options.rangeHighlights[c].start), v = this._toPercentage(this.options.rangeHighlights[c].end);
                if (this.options.reversed) {
                  var b = 100 - v;
                  v = 100 - d, d = b;
                }
                var y = this._createHighlightRange(d, v);
                y ? this.options.orientation === "vertical" ? (this.rangeHighlightElements[c].style.top = y.start + "%", this.rangeHighlightElements[c].style.height = y.size + "%") : (this.options.rtl ? this.rangeHighlightElements[c].style.right = y.start + "%" : this.rangeHighlightElements[c].style.left = y.start + "%", this.rangeHighlightElements[c].style.width = y.size + "%") : this.rangeHighlightElements[c].style.display = "none";
              }
            if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
              var _ = this.options.orientation === "vertical" ? "height" : "width", x;
              this.options.orientation === "vertical" ? x = "marginTop" : this.options.rtl ? x = "marginRight" : x = "marginLeft";
              var C = this._state.size / (this.options.ticks.length - 1);
              if (this.tickLabelContainer) {
                var L = 0;
                if (this.options.ticks_positions.length === 0)
                  this.options.orientation !== "vertical" && (this.tickLabelContainer.style[x] = -C / 2 + "px"), L = this.tickLabelContainer.offsetHeight;
                else
                  for (w = 0; w < this.tickLabelContainer.childNodes.length; w++)
                    this.tickLabelContainer.childNodes[w].offsetHeight > L && (L = this.tickLabelContainer.childNodes[w].offsetHeight);
                this.options.orientation === "horizontal" && (this.sliderElem.style.marginBottom = L + "px");
              }
              for (var w = 0; w < this.options.ticks.length; w++) {
                var E = this.options.ticks_positions[w] || this._toPercentage(this.options.ticks[w]);
                this.options.reversed && (E = 100 - E), this.ticks[w].style[this.stylePos] = E + "%", this._removeClass(this.ticks[w], "in-selection"), this.options.range ? E >= i[0] && E <= i[1] && this._addClass(this.ticks[w], "in-selection") : this.options.selection === "after" && E >= i[0] ? this._addClass(this.ticks[w], "in-selection") : this.options.selection === "before" && E <= i[0] && this._addClass(this.ticks[w], "in-selection"), this.tickLabels[w] && (this.tickLabels[w].style[_] = C + "px", this.options.orientation !== "vertical" && this.options.ticks_positions[w] !== void 0 ? (this.tickLabels[w].style.position = "absolute", this.tickLabels[w].style[this.stylePos] = E + "%", this.tickLabels[w].style[x] = -C / 2 + "px") : this.options.orientation === "vertical" && (this.options.rtl ? this.tickLabels[w].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[w].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[x] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[w], "label-in-selection label-is-selection"), this.options.range ? E >= i[0] && E <= i[1] && (this._addClass(this.tickLabels[w], "label-in-selection"), (E === i[0] || i[1]) && this._addClass(this.tickLabels[w], "label-is-selection")) : (this.options.selection === "after" && E >= i[0] ? this._addClass(this.tickLabels[w], "label-in-selection") : this.options.selection === "before" && E <= i[0] && this._addClass(this.tickLabels[w], "label-in-selection"), E === i[0] && this._addClass(this.tickLabels[w], "label-is-selection")));
              }
            }
            var z;
            if (this.options.range) {
              z = this.options.formatter(this._state.value), this._setText(this.tooltipInner, z), this.tooltip.style[this.stylePos] = (i[1] + i[0]) / 2 + "%";
              var O = this.options.formatter(this._state.value[0]);
              this._setText(this.tooltipInner_min, O);
              var A = this.options.formatter(this._state.value[1]);
              this._setText(this.tooltipInner_max, A), this.tooltip_min.style[this.stylePos] = i[0] + "%", this.tooltip_max.style[this.stylePos] = i[1] + "%";
            } else
              z = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, z), this.tooltip.style[this.stylePos] = i[0] + "%";
            if (this.options.orientation === "vertical")
              this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(i[0], i[1]) + "%", this.trackSelection.style.top = Math.min(i[0], i[1]) + "%", this.trackSelection.style.height = Math.abs(i[0] - i[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(i[0], i[1]) - Math.abs(i[0] - i[1]) + "%";
            else {
              this.stylePos === "right" ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(i[0], i[1]) + "%", this.stylePos === "right" ? this.trackSelection.style.right = Math.min(i[0], i[1]) + "%" : this.trackSelection.style.left = Math.min(i[0], i[1]) + "%", this.trackSelection.style.width = Math.abs(i[0] - i[1]) + "%", this.stylePos === "right" ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(i[0], i[1]) - Math.abs(i[0] - i[1]) + "%";
              var I = this.tooltip_min.getBoundingClientRect(), F = this.tooltip_max.getBoundingClientRect();
              this.options.tooltip_position === "bottom" ? I.right > F.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : I.right > F.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), this._addClass(this.tooltip_max, "bs-tooltip-bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), this._addClass(this.tooltip_max, "bs-tooltip-top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
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
              var c = Math.abs(this._state.percentage[0] - l), d = Math.abs(this._state.percentage[1] - l);
              this._state.dragged = c < d ? 0 : 1, this._adjustPercentageForRangeSliders(l);
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
                var d = this.options.orientation === "horizontal", v = this.options.orientation === "vertical", b = this.options.rtl, y = this.options.reversed;
                d ? b ? y || (c = -c) : y && (c = -c) : v && (y || (c = -c));
              }
              var _;
              if (this.ticksAreValid && this.options.lock_to_ticks) {
                var x = void 0;
                x = this.options.ticks.indexOf(this._state.value[i]), x === -1 && (x = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), x += c, x = Math.max(0, Math.min(this.options.ticks.length - 1, x)), _ = this.options.ticks[x];
              } else
                _ = this._state.value[i] + c * this.options.step;
              var C = this._toPercentage(_);
              if (this._state.keyCtrl = i, this.options.range) {
                this._adjustPercentageForRangeSliders(C);
                var L = this._state.keyCtrl ? this._state.value[0] : _, w = this._state.keyCtrl ? _ : this._state.value[1];
                _ = [Math.max(this.options.min, Math.min(this.options.max, L)), Math.max(this.options.min, Math.min(this.options.max, w))];
              } else
                _ = Math.max(this.options.min, Math.min(this.options.max, _));
              return this._trigger("slideStart", _), this.setValue(_, !0, !0), this._trigger("slideStop", _), this._pauseEvent(l), delete this._state.keyCtrl, !1;
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
              var d = Math.abs(this.options.ticks[c] - i);
              d <= l[1] && (l = [this.options.ticks[c], d]);
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
            var l = i[this.mousePos], c = this._state.offset[this.stylePos], d = l - c;
            this.stylePos === "right" && (d = -d);
            var v = d / this._state.size * 100;
            return v = Math.round(v / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (v = 100 - v), Math.max(0, Math.min(100, v));
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
              for (var d = 0; d < c.length; d++) {
                var v = c[d];
                v(l);
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
            for (var c = l.split(" "), d = i.className, v = 0; v < c.length; v++) {
              var b = c[v], y = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)");
              d = d.replace(y, " ");
            }
            i.className = d.trim();
          },
          _addClass: function(i, l) {
            for (var c = l.split(" "), d = i.className, v = 0; v < c.length; v++) {
              var b = c[v], y = new RegExp("(?:\\s|^)" + b + "(?:\\s|$)"), _ = y.test(d);
              _ || (d += " " + b);
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
          _css: function(i, l, c) {
            if (a)
              a.style(i, l, c);
            else {
              var d = l.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(v, b) {
                return b.toUpperCase();
              });
              i.style[d] = c;
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
              i.forEach((function(d) {
                this._addClass(d, "bs-tooltip-" + l), d.style[c] = "100%";
              }).bind(this));
            } else this.options.tooltip_position === "bottom" ? i.forEach((function(d) {
              this._addClass(d, "bs-tooltip-bottom"), d.style.top = "22px";
            }).bind(this)) : i.forEach((function(d) {
              this._addClass(d, "bs-tooltip-top"), d.style.top = -this.tooltip.outerHeight - 14 + "px";
            }).bind(this));
          },
          _getClosestTickIndex: function(i) {
            for (var l = Math.abs(i - this.options.ticks[0]), c = 0, d = 0; d < this.options.ticks.length; ++d) {
              var v = Math.abs(i - this.options.ticks[d]);
              v < l && (l = v, c = d);
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
  }(Le)), Le.exports;
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
  const o = V(), [a, u] = R();
  return s = s ?? n, M(() => {
    if (o.current) {
      const f = new ii(o.current, t);
      return u(f), () => f.destroy();
    }
  }, [o.current]), M(() => {
    e && a && (e.current = {
      mySlider: a
    });
  }, [e, a]), M(() => {
    if (a && s) {
      a.on("change", s);
      for (let f in h)
        a.setAttribute(f, h[f]);
      return () => {
        a.off("change", s);
      };
    }
  }, [h, a]), M(() => {
    h.enabled ? a?.enable() : a?.disable();
  }, [h.enabled]), M(() => {
    a && r !== void 0 && a.setValue(r);
  }, [a, r]), /* @__PURE__ */ m.createElement("div", { ref: o });
}, Vi = m.forwardRef(ni);
var Pe = { exports: {} }, Ae, ht;
function oi() {
  if (ht) return Ae;
  ht = 1;
  var h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ae = h, Ae;
}
var Re, ct;
function ri() {
  if (ct) return Re;
  ct = 1;
  var h = /* @__PURE__ */ oi();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Re = function() {
    function s(o, a, u, f, g, k) {
      if (k !== h) {
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
  }, Re;
}
var ut;
function ai() {
  return ut || (ut = 1, Pe.exports = /* @__PURE__ */ ri()()), Pe.exports;
}
var li = /* @__PURE__ */ ai();
const G = /* @__PURE__ */ Ie(li);
function hi({ initial: h = 50, minA: e = 120, minB: t = 120, maxA: s, style: n, children: r, onChange: o }) {
  const a = V(null), [u, f] = R(i(h, 0, 100)), g = V(!1), [k, p] = m.Children.toArray(r);
  function i(_, x, C) {
    return Math.max(x, Math.min(C, _));
  }
  const l = K((_, x) => {
    const C = e / _ * 100, L = t / _ * 100, w = typeof s == "number" ? s / _ * 100 : 100 - L;
    return i(x, C, w);
  }, [e, t, s]), c = K(() => {
    const _ = a.current;
    if (!_) return;
    const x = _.clientWidth;
    f((C) => l(x, C));
  }, [l]);
  M(() => {
    c();
    const _ = () => c();
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [c]);
  const d = K((_) => {
    const x = a.current;
    if (!x) return;
    g.current = !0, _.target.setPointerCapture(_.pointerId);
    const C = (w) => {
      if (!g.current) return;
      const E = x.getBoundingClientRect(), z = E.width;
      let A = (w.clientX - E.left) / z * 100;
      A = l(z, A), f(A), o && o(Math.round(A * 100) / 100);
    }, L = () => {
      g.current = !1;
      try {
        _.target.releasePointerCapture(_.pointerId);
      } catch {
      }
      window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", L), window.removeEventListener("pointercancel", L);
    };
    window.addEventListener("pointermove", C), window.addEventListener("pointerup", L), window.addEventListener("pointercancel", L);
  }, [l, o]), v = K((_) => {
    const x = a.current;
    if (!x) return;
    const C = x.clientWidth, w = Math.max(8, Math.round(C * 0.02)) / C * 100, E = (z) => {
      f((O) => l(C, O + z));
    };
    _.key === "ArrowLeft" && (_.preventDefault(), E(-w)), _.key === "ArrowRight" && (_.preventDefault(), E(w)), _.key === "Home" && (_.preventDefault(), E(-100)), _.key === "End" && (_.preventDefault(), E(100));
  }, [l]), b = K(() => f((_) => i(h, 0, 100)), [h]), y = dt(() => ({
    gridTemplateColumns: `${u}% 10px ${100 - u}%`,
    gridTemplateRows: "1fr",
    display: "grid"
  }), [u]);
  return /* @__PURE__ */ m.createElement(
    "div",
    {
      ref: a,
      className: "splitpane",
      style: { ...y, ...n || {} }
    },
    /* @__PURE__ */ m.createElement("div", { className: "pane" }, k),
    /* @__PURE__ */ m.createElement(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(u),
        tabIndex: 0,
        onPointerDown: d,
        onKeyDown: v,
        onDoubleClick: b,
        className: "separator"
      },
      /* @__PURE__ */ m.createElement("div", { className: "separator-grip" }),
      /* @__PURE__ */ m.createElement("div", { className: "separator-hit" })
    ),
    /* @__PURE__ */ m.createElement("div", { className: "pane" }, p)
  );
}
hi.propTypes = {
  initial: G.number,
  minA: G.number,
  minB: G.number,
  maxA: G.number,
  style: G.object,
  children: G.node.isRequired,
  onChange: G.func
};
export {
  Ti as Checkbox,
  as as Collapsible,
  Si as Disable,
  Li as DotNotification,
  ls as Drawer,
  Pi as DrawerContainer,
  Bi as Dropdown,
  Ai as GargantuaList,
  Ri as MessageModal,
  Mi as ModalOkCancel,
  at as PinButtons,
  Js as Pinnable,
  Ni as Progress,
  Ci as RangeSelection,
  Vi as ReactSlider,
  zi as RenderInWindow,
  hs as Slider,
  hi as SplitPaneH,
  Ii as TableContextMenu,
  Di as TextField,
  Hi as Widget,
  $i as WidgetGroup,
  Ei as useRangeSelection
};
