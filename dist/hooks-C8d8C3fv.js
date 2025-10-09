import S, { createContext as k, useState as v, useEffect as l, useRef as p, useCallback as f, useSyncExternalStore as D, useContext as A } from "react";
import { Range as P } from "velor-utils/utils/Range.mjs";
import { noOp as y, broadcast as C } from "velor-utils/utils/functional.mjs";
const h = k(null);
function G({ children: e }) {
  const t = b();
  return /* @__PURE__ */ S.createElement(h.Provider, { value: t }, e);
}
class I {
  constructor() {
    this.active = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Map();
  }
  get(t) {
    return this.active.get(t) ?? null;
  }
  set(t, n) {
    if (this.get(t) === n) return;
    this.active.set(t, n);
    const s = this.listeners.get(t);
    s && s.forEach((o) => o());
  }
  subscribe(t, n) {
    const s = this.listeners.get(t) ?? /* @__PURE__ */ new Set();
    return s.add(n), this.listeners.set(t, s), () => {
      s.delete(n), s.size === 0 && this.listeners.delete(t);
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
function O() {
  const e = m();
  l(() => {
    e();
  }, []);
}
function T() {
  const e = p(null);
  return l(() => {
    e.current && e.current.focus();
  }, []), e;
}
function j(e = {}) {
  const {
    onClick: t = y,
    onKeyDown: n = y,
    show: s = !0
  } = e;
  l(() => {
    if (s) {
      let i = function(r) {
        return r.stopPropagation(), r.stopImmediatePropagation(), r.preventDefault(), t(), !0;
      };
      const o = document.createElement("div");
      return document.body.append(o), o.style.left = "0", o.style.right = "0", o.style.top = "0", o.style.bottom = "0", o.style.position = "absolute", o.style.zIndex = "1000", document.addEventListener("keydown", n), o.onmousedown = (r) => (r.stopPropagation(), r.stopImmediatePropagation(), !0), o.onclick = i, o.oncontextmenu = i, o.onauxclick = i, () => {
        o.remove(), document.removeEventListener("keydown", n);
      };
    }
  }, [s]);
}
function w() {
  const [e, t] = v(0);
  return [e, () => t((n) => n + 1)];
}
function B(e, t) {
  const [n, s] = w();
  l(() => e.on(t, s), [e]);
}
function F(e) {
  const [t, n] = w();
  l(() => e.onAny(n), [e]);
}
function z(e, t) {
  const [n, s] = w();
  l(C(...e.map((o) => o.on(t, s))), [e]);
}
function R(e, t = [], {
  target: n = document,
  ctrl: s = !1,
  shift: o = !1
} = {}) {
  l(() => {
    const i = (r) => {
      const d = Array.isArray(t) ? t : [t];
      (d.includes(r.code) || d.length === 0) && (s && r.ctrlKey || !s) && (o && r.shiftKey || !o) && e(r);
    };
    return n.addEventListener("keydown", i), () => n.removeEventListener("keydown", i);
  });
}
function H(e = []) {
  const t = m();
  R(t, e);
}
function N(e) {
  const t = p(null), [n, s] = v(!1), o = f((a, u) => {
    if (a.shiftKey)
      if (e.valid) {
        let c = u > e.last ? 1 : 0;
        e.growTo(u + c);
      } else
        e.setValue({
          first: u,
          last: u + 1
        });
  }, e.toArray()), i = f((a, u) => {
    s(!1), t.current = null;
  }, []), r = f((a, u) => {
    a.button === 0 && (a.shiftKey || e.invalidate(), t.current = u);
  }, []), d = f((a, u) => {
    const c = t.current;
    u !== null && c !== null && (e.valid ? u < c ? e.first = u : (u === c && (e.first = u), e.last = u + 1) : u < c ? e.setValue({
      first: u,
      last: c + 1
    }) : e.setValue({
      first: c,
      last: u + 1
    }), s(!0));
  }, [t, e]);
  return {
    callbacks: (a) => ({
      onMouseDown: (u) => r(u, a),
      onMouseUp: (u) => i(u, a),
      onMouseEnter: (u) => d(u, a),
      onMouseLeave: (u) => d(u, null),
      onClick: (u) => o(u, a)
    }),
    onClick: o,
    onMouseDown: r,
    onMouseUp: i,
    onMouseHover: d,
    isSelecting: n
  };
}
function X({
  first: e = 0,
  last: t = 0,
  max: n = Number.MAX_SAFE_INTEGER
} = {}) {
  const s = m(), o = p(null);
  if (o.current === null) {
    const i = new P({
      first: e,
      last: t,
      max: n
    });
    i.valueChanged = s, o.current = i;
  }
  return o.current;
}
function _(e, t = {}, n) {
  const s = {
    pageUp: "PageUp",
    pageDown: "PageDown",
    end: "End",
    home: "Home",
    down: "ArrowDown",
    up: "ArrowUp",
    all: "KeyA",
    ...t
  }, o = {
    pageUp: () => e.pageUp(),
    pageDown: () => e.pageDown(),
    end: () => e.jumpToLast(),
    home: () => e.jumpToFirst(),
    up: () => e.moveUp(),
    down: () => e.moveDown()
  };
  for (let i in o)
    R(o[i], s[i], n);
}
function q() {
  const e = p({ x: 0, y: 0 });
  return l(() => {
    let t = (n) => {
      e.current.x = n.pageX, e.current.y = n.pageY;
    };
    return document.addEventListener("mousemove", t), () => {
      document.removeEventListener("mousemove", t);
    };
  }, []), e.current;
}
function E() {
  const e = A(h);
  if (!e) throw new Error("useRadioStore must be used inside <RadioProvider>");
  return e;
}
function M(e, t) {
  t = t ?? E();
  const n = f((o) => t.subscribe(e, o), [t, e]), s = f(() => t.get(e), [t, e]);
  return D(n, s, s);
}
function K(e, t) {
  return t = t ?? E(), f((n) => t.set(e, n), [t, e]);
}
function L(e, t) {
  const n = M(e, t), s = K(e, t);
  return [n, s];
}
function Y(e) {
  const t = b();
  return L(e, t);
}
function b() {
  const e = p();
  return e.current || (e.current = new I()), e.current;
}
export {
  G as R,
  L as a,
  N as b,
  O as c,
  T as d,
  j as e,
  w as f,
  B as g,
  F as h,
  z as i,
  R as j,
  H as k,
  X as l,
  _ as m,
  q as n,
  M as o,
  K as p,
  Y as q,
  b as r,
  m as u
};
