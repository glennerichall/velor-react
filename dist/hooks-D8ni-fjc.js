import { createContext as M, useEffect as l, useState as h, useRef as d, useCallback as c, useContext as b, useSyncExternalStore as A } from "react";
import { Range as L } from "velor-utils/utils/Range.mjs";
import { noOp as m, broadcast as S } from "velor-utils/utils/functional.mjs";
const v = M(null);
v.id = Math.random();
console.trace(v.id);
class y {
  #e;
  static #t = 0;
  constructor() {
    this.active = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Map(), this.#e = y.#t++;
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
function k(e, t, n = document) {
  l(() => (n.addEventListener(e, (o) => {
    console.log(o), t(o);
  }), () => n.removeEventListener(e, t)), []);
}
function g(e, t = document) {
  return k("mousedown", e, t);
}
function E() {
  const [e, t] = h(() => () => {
  });
  return e(), () => new Promise(((n) => {
    t(() => n);
  }));
}
function j() {
  const e = E();
  l(() => {
    e();
  }, []);
}
function B() {
  const e = d(null);
  return l(() => {
    e.current && e.current.focus();
  }, []), e;
}
function F(e = {}) {
  const {
    onClick: t = m,
    onKeyDown: n = m,
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
function R() {
  const [e, t] = h(0);
  return [e, () => t((n) => n + 1)];
}
function H(e, t) {
  const [n, o] = R();
  l(() => e.on(t, o), [e]);
}
function x(e) {
  const [t, n] = R();
  l(() => e.onAny(n), [e]);
}
function z(e, t) {
  const [n, o] = R();
  l(S(...e.map((s) => s.on(t, o))), [e]);
}
function I(e, t = [], {
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
function N(e = []) {
  const t = E();
  I(t, e);
}
function X(e, {
  onSelectionStart: t = m,
  onSelectionEnd: n = m
} = {}) {
  const o = d(null), [s, i] = h(!1), r = c((a, u) => {
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
  }, []), D = c((a, u) => {
    a.button === 0 && (a.shiftKey || e.invalidate(), o.current = u, t());
  }, []), w = c((a, u) => {
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
      onMouseDown: (u) => D(u, a),
      onMouseUp: (u) => p(u, a),
      onMouseEnter: (u) => w(u, a),
      onMouseLeave: (u) => w(u, null),
      onClick: (u) => r(u, a)
    }),
    onClick: r,
    onMouseDown: D,
    onMouseUp: p,
    onMouseHover: w,
    isSelecting: s
  };
}
function q({
  first: e = 0,
  last: t = 0,
  max: n = Number.MAX_SAFE_INTEGER
} = {}) {
  const o = E(), s = d(null);
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
function Y(e, t = {}, n) {
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
    I(s[i], o[i], n);
}
function _() {
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
  t = t ?? b(v), console.log(t, v.id);
  const n = c((s) => t.subscribe(e, s), [t, e]), o = c(() => t.get(e), [t, e]);
  return A(n, o, o);
}
function P(e, t) {
  return t = t ?? b(v), c((n) => t.set(e, n), [t, e]);
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
  return e.current || (e.current = new y()), e.current;
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
  v as R,
  E as a,
  K as b,
  X as c,
  C as d,
  k as e,
  g as f,
  j as g,
  B as h,
  F as i,
  R as j,
  H as k,
  x as l,
  z as m,
  I as n,
  N as o,
  q as p,
  Y as q,
  _ as r,
  P as s,
  J as t,
  Q as u,
  U as v
};
