import S, { createContext as k, useState as v, useEffect as f, useRef as p, useCallback as a, useSyncExternalStore as D, useContext as I } from "react";
import { Range as A } from "velor-utils/utils/Range.mjs";
import { noOp as y, broadcast as M } from "velor-utils/utils/functional.mjs";
const h = k(null);
function x({ children: e }) {
  const t = b();
  return /* @__PURE__ */ S.createElement(h.Provider, { value: t }, e);
}
class P {
  constructor() {
    this.active = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Map();
  }
  get(t) {
    return this.active.get(t) ?? null;
  }
  set(t, n) {
    if (this.get(t) === n) return;
    this.active.set(t, n);
    const o = this.listeners.get(t);
    o && o.forEach((s) => s());
  }
  subscribe(t, n) {
    const o = this.listeners.get(t) ?? /* @__PURE__ */ new Set();
    return o.add(n), this.listeners.set(t, o), () => {
      o.delete(n), o.size === 0 && this.listeners.delete(t);
    };
  }
}
function m() {
  const [e, t] = v(() => () => {
  });
  return e(), () => new Promise(((n) => {
    t(() => n);
  }));
}
function G() {
  const e = m();
  f(() => {
    e();
  }, []);
}
function T() {
  const e = p(null);
  return f(() => {
    e.current && e.current.focus();
  }, []), e;
}
function j(e = {}) {
  const {
    onClick: t = y,
    onKeyDown: n = y,
    show: o = !0
  } = e;
  f(() => {
    if (o) {
      let r = function(i) {
        return i.stopPropagation(), i.stopImmediatePropagation(), i.preventDefault(), t(), !0;
      };
      const s = document.createElement("div");
      return document.body.append(s), s.style.left = "0", s.style.right = "0", s.style.top = "0", s.style.bottom = "0", s.style.position = "absolute", s.style.zIndex = "1000", document.addEventListener("keydown", n), s.onmousedown = (i) => (i.stopPropagation(), i.stopImmediatePropagation(), !0), s.onclick = r, s.oncontextmenu = r, s.onauxclick = r, () => {
        s.remove(), document.removeEventListener("keydown", n);
      };
    }
  }, [o]);
}
function w() {
  const [e, t] = v(0);
  return [e, () => t((n) => n + 1)];
}
function B(e, t) {
  const [n, o] = w();
  f(() => e.on(t, o), [e]);
}
function F(e) {
  const [t, n] = w();
  f(() => e.onAny(n), [e]);
}
function H(e, t) {
  const [n, o] = w();
  f(M(...e.map((s) => s.on(t, o))), [e]);
}
function R(e, t = [], {
  target: n = document,
  ctrl: o = !1,
  shift: s = !1
} = {}) {
  f(() => {
    const r = (i) => {
      const d = Array.isArray(t) ? t : [t];
      (d.includes(i.code) || d.length === 0) && (o && i.ctrlKey || !o) && (s && i.shiftKey || !s) && e(i);
    };
    return n.addEventListener("keydown", r), () => n.removeEventListener("keydown", r);
  });
}
function z(e = []) {
  const t = m();
  R(t, e);
}
function N(e) {
  const t = p(null), [n, o] = v(!1), s = a((c, u) => {
    if (c.shiftKey)
      if (e.valid) {
        let l = u > e.last ? 1 : 0;
        e.growTo(u + l);
      } else
        e.setValue({
          first: u,
          last: u + 1
        });
  }, e.toArray()), r = a((c, u) => {
    o(!1), t.current = null;
  }, []), i = a((c, u) => {
    c.button === 0 && (c.shiftKey || e.invalidate(), t.current = u);
  }, []), d = a((c, u) => {
    const l = t.current;
    u !== null && l !== null && (e.valid ? u < l ? e.first = u : (u === l && (e.first = u), e.last = u + 1) : u < l ? e.setValue({
      first: u,
      last: l + 1
    }) : e.setValue({
      first: l,
      last: u + 1
    }), o(!0));
  }, [t, e]);
  return {
    callbacks: (c) => ({
      onMouseDown: (u) => i(u, c),
      onMouseUp: (u) => r(u, c),
      onMouseEnter: (u) => d(u, c),
      onMouseLeave: (u) => d(u, null),
      onClick: (u) => s(u, c)
    }),
    onClick: s,
    onMouseDown: i,
    onMouseUp: r,
    onMouseHover: d,
    isSelecting: n
  };
}
function X({
  first: e = 0,
  last: t = 0,
  max: n = Number.MAX_SAFE_INTEGER
} = {}) {
  const o = m(), s = p(null);
  if (s.current === null) {
    const r = new A({
      first: e,
      last: t,
      max: n
    });
    r.valueChanged = o, s.current = r;
  }
  return s.current;
}
function _(e, t = {}, n) {
  const o = {
    pageUp: "PageUp",
    pageDown: "PageDown",
    end: "End",
    home: "Home",
    down: "ArrowDown",
    up: "ArrowUp",
    all: "KeyA",
    ...t
  }, s = {
    pageUp: () => e.pageUp(),
    pageDown: () => e.pageDown(),
    end: () => e.jumpToLast(),
    home: () => e.jumpToFirst(),
    up: () => e.moveUp(),
    down: () => e.moveDown()
  };
  for (let r in s)
    R(s[r], o[r], n);
}
function q() {
  const e = p({ x: 0, y: 0 });
  return f(() => {
    let t = (n) => {
      e.current.x = n.pageX, e.current.y = n.pageY;
    };
    return document.addEventListener("mousemove", t), () => {
      document.removeEventListener("mousemove", t);
    };
  }, []), e.current;
}
function E() {
  const e = I(h);
  if (!e) throw new Error("useRadioStore must be used inside <RadioProvider>");
  return e;
}
function C(e, t) {
  t = t ?? E();
  const n = a((s) => t.subscribe(e, s), [t, e]), o = a(() => t.get(e), [t, e]);
  return D(n, o, o);
}
function L(e, t) {
  return t = t ?? E(), a((n) => t.set(e, n), [t, e]);
}
function K(e, t) {
  const n = C(e, t), o = L(e, t);
  return [n, o];
}
function Y(e) {
  const t = b();
  return K(e, t);
}
function b() {
  const e = p();
  return e.current || (e.current = new P()), e.current;
}
function J({
  onEvent: e,
  interval: t = 100,
  enabled: n = !0
}) {
  const o = p(null), s = a(() => {
    n && (o.current = setInterval(e, t));
  }, [e, t, n]), r = a(() => {
    o.current && (clearInterval(o.current), o.current = null);
  }, []);
  return { onMouseEnter: s, onMouseLeave: r };
}
export {
  x as R,
  m as a,
  K as b,
  N as c,
  G as d,
  T as e,
  j as f,
  w as g,
  B as h,
  F as i,
  H as j,
  R as k,
  z as l,
  X as m,
  _ as n,
  q as o,
  C as p,
  L as q,
  Y as r,
  b as s,
  J as u
};
