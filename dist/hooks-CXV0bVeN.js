import { createContext as A, useContext as D, useCallback as c, useSyncExternalStore as M, useEffect as l, useState as w, useRef as d } from "react";
import { Range as L } from "velor-utils/utils/Range.mjs";
import { noOp as v, broadcast as S } from "velor-utils/utils/functional.mjs";
const I = A(null);
class h {
  #e;
  static #t = 0;
  constructor() {
    this.active = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Map(), this.#e = h.#t++;
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
function k(e, t, { target: n = document, capture: o } = {}) {
  l(() => (n.addEventListener(e, t, o), () => n.removeEventListener(e, t, o)), [e, t, n]);
}
function j(e, t) {
  return k("mousedown", e, t);
}
function y() {
  const [e, t] = w(() => () => {
  });
  return e(), () => new Promise(((n) => {
    t(() => n);
  }));
}
function B() {
  const e = y();
  l(() => {
    e();
  }, []);
}
function F() {
  const e = d(null);
  return l(() => {
    e.current && e.current.focus();
  }, []), e;
}
function H(e = {}) {
  const {
    onClick: t = v,
    onKeyDown: n = v,
    show: o = !0
  } = e;
  l(() => {
    if (o) {
      let i = function(r) {
        return r.stopPropagation(), r.stopImmediatePropagation(), r.preventDefault(), t(), !0;
      };
      const s = document.createElement("div");
      return document.body.append(s), s.style.left = "0", s.style.right = "0", s.style.top = "0", s.style.bottom = "0", s.style.position = "absolute", s.style.zIndex = "1000", document.addEventListener("keydown", n), s.onmousedown = (r) => (r.stopPropagation(), r.stopImmediatePropagation(), !0), s.onclick = i, s.oncontextmenu = i, s.onauxclick = i, () => {
        s.remove(), document.removeEventListener("keydown", n);
      };
    }
  }, [o]);
}
function E() {
  const [e, t] = w(0);
  return [e, () => t((n) => n + 1)];
}
function x(e, t) {
  const [n, o] = E();
  l(() => e.on(t, o), [e]);
}
function z(e) {
  const [t, n] = E();
  l(() => e.onAny(n), [e]);
}
function N(e, t) {
  const [n, o] = E();
  l(S(...e.map((s) => s.on(t, o))), [e]);
}
function b(e, t = [], {
  target: n = document,
  ctrl: o = !1,
  shift: s = !1
} = {}) {
  l(() => {
    const i = (r) => {
      const p = Array.isArray(t) ? t : [t];
      (p.includes(r.code) || p.length === 0) && (o && r.ctrlKey || !o) && (s && r.shiftKey || !s) && e(r);
    };
    return n.addEventListener("keydown", i), () => n.removeEventListener("keydown", i);
  }, [t, e]);
}
function X(e = []) {
  const t = y();
  b(t, e);
}
function q(e, {
  onSelectionStart: t = v,
  onSelectionEnd: n = v
} = {}) {
  const o = d(null), [s, i] = w(!1), r = c((a, u) => {
    if (a.shiftKey)
      if (e.valid) {
        let f = u > e.last ? 1 : 0;
        e.growTo(u + f);
      } else
        e.setValue({
          first: u,
          last: u + 1
        });
  }, e.toArray()), p = c((a, u) => {
    i(!1), o.current = null, n();
  }, []), R = c((a, u) => {
    a.button === 0 && (a.shiftKey || e.invalidate(), o.current = u, t());
  }, []), m = c((a, u) => {
    const f = o.current;
    u !== null && f !== null && (e.valid ? u < f ? e.first = u : (u === f && (e.first = u), e.last = u + 1) : u < f ? e.setValue({
      first: u,
      last: f + 1
    }) : e.setValue({
      first: f,
      last: u + 1
    }), i(!0));
  }, [o, e]);
  return {
    callbacks: (a) => ({
      onMouseDown: (u) => R(u, a),
      onMouseUp: (u) => p(u, a),
      onMouseEnter: (u) => m(u, a),
      onMouseLeave: (u) => m(u, null),
      onClick: (u) => r(u, a)
    }),
    onClick: r,
    onMouseDown: R,
    onMouseUp: p,
    onMouseHover: m,
    isSelecting: s
  };
}
function Y({
  first: e = 0,
  last: t = 0,
  max: n = Number.MAX_SAFE_INTEGER
} = {}) {
  const o = y(), s = d(null);
  if (s.current === null) {
    const i = new L({
      first: e,
      last: t,
      max: n
    });
    i.valueChanged = o, s.current = i;
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
    pageUp: c(() => e.pageUp(), [e]),
    pageDown: c(() => e.pageDown(), [e]),
    end: c(() => e.jumpToLast(), [e]),
    home: c(() => e.jumpToFirst(), [e]),
    up: c(() => e.moveUp(), [e]),
    down: c(() => e.moveDown(), [e])
  };
  for (let i in s)
    b(s[i], o[i], n);
}
function g() {
  const e = d({ x: 0, y: 0 });
  return l(() => {
    let t = (n) => {
      e.current.x = n.pageX, e.current.y = n.pageY;
    };
    return document.addEventListener("mousemove", t), () => {
      document.removeEventListener("mousemove", t);
    };
  }, []), e.current;
}
function C(e, t) {
  t = t ?? D(I);
  const n = c((s) => t.subscribe(e, s), [t, e]), o = c(() => t.get(e), [t, e]);
  return M(n, o, o);
}
function P(e, t) {
  return t = t ?? D(I), c((n) => t.set(e, n), [t, e]);
}
function K(e, t) {
  const n = C(e, t), o = P(e, t);
  return [n, o];
}
function J(e) {
  const t = U();
  return [...K(e, t), t];
}
function U() {
  const e = d();
  return e.current || (e.current = new h()), e.current;
}
function Q({
  onEvent: e,
  interval: t = 100,
  enabled: n = !0
}) {
  const o = d(null), s = c(() => {
    n && (o.current = setInterval(e, t));
  }, [e, t, n]), i = c(() => {
    o.current && (clearInterval(o.current), o.current = null);
  }, []);
  return { onMouseEnter: s, onMouseLeave: i };
}
export {
  I as R,
  y as a,
  K as b,
  q as c,
  C as d,
  k as e,
  j as f,
  B as g,
  F as h,
  H as i,
  E as j,
  x as k,
  z as l,
  N as m,
  b as n,
  X as o,
  Y as p,
  _ as q,
  g as r,
  P as s,
  J as t,
  Q as u,
  U as v
};
