import I, { createContext as A, useState as w, useEffect as f, useRef as d, useCallback as r, useSyncExternalStore as k, useContext as M } from "react";
import { Range as P } from "velor-utils/utils/Range.mjs";
import { noOp as v, broadcast as C } from "velor-utils/utils/functional.mjs";
const E = A(null);
function j({ children: e }) {
  const t = D();
  return /* @__PURE__ */ I.createElement(E.Provider, { value: t }, e);
}
class L {
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
function h() {
  const [e, t] = w(() => () => {
  });
  return e(), () => new Promise(((n) => {
    t(() => n);
  }));
}
function B() {
  const e = h();
  f(() => {
    e();
  }, []);
}
function F() {
  const e = d(null);
  return f(() => {
    e.current && e.current.focus();
  }, []), e;
}
function H(e = {}) {
  const {
    onClick: t = v,
    onKeyDown: n = v,
    show: o = !0
  } = e;
  f(() => {
    if (o) {
      let i = function(c) {
        return c.stopPropagation(), c.stopImmediatePropagation(), c.preventDefault(), t(), !0;
      };
      const s = document.createElement("div");
      return document.body.append(s), s.style.left = "0", s.style.right = "0", s.style.top = "0", s.style.bottom = "0", s.style.position = "absolute", s.style.zIndex = "1000", document.addEventListener("keydown", n), s.onmousedown = (c) => (c.stopPropagation(), c.stopImmediatePropagation(), !0), s.onclick = i, s.oncontextmenu = i, s.onauxclick = i, () => {
        s.remove(), document.removeEventListener("keydown", n);
      };
    }
  }, [o]);
}
function y() {
  const [e, t] = w(0);
  return [e, () => t((n) => n + 1)];
}
function g(e, t) {
  const [n, o] = y();
  f(() => e.on(t, o), [e]);
}
function z(e) {
  const [t, n] = y();
  f(() => e.onAny(n), [e]);
}
function N(e, t) {
  const [n, o] = y();
  f(C(...e.map((s) => s.on(t, o))), [e]);
}
function b(e, t = [], {
  target: n = document,
  ctrl: o = !1,
  shift: s = !1
} = {}) {
  f(() => {
    const i = (c) => {
      const p = Array.isArray(t) ? t : [t];
      (p.includes(c.code) || p.length === 0) && (o && c.ctrlKey || !o) && (s && c.shiftKey || !s) && e(c);
    };
    return n.addEventListener("keydown", i), () => n.removeEventListener("keydown", i);
  }, [t, e]);
}
function X(e = []) {
  const t = h();
  b(t, e);
}
function _(e, {
  onSelectionStart: t = v,
  onSelectionEnd: n = v
} = {}) {
  const o = d(null), [s, i] = w(!1), c = r((a, u) => {
    if (a.shiftKey)
      if (e.valid) {
        let l = u > e.last ? 1 : 0;
        e.growTo(u + l);
      } else
        e.setValue({
          first: u,
          last: u + 1
        });
  }, e.toArray()), p = r((a, u) => {
    i(!1), o.current = null, n();
  }, []), R = r((a, u) => {
    a.button === 0 && (a.shiftKey || e.invalidate(), o.current = u, t());
  }, []), m = r((a, u) => {
    const l = o.current;
    u !== null && l !== null && (e.valid ? u < l ? e.first = u : (u === l && (e.first = u), e.last = u + 1) : u < l ? e.setValue({
      first: u,
      last: l + 1
    }) : e.setValue({
      first: l,
      last: u + 1
    }), i(!0));
  }, [o, e]);
  return {
    callbacks: (a) => ({
      onMouseDown: (u) => R(u, a),
      onMouseUp: (u) => p(u, a),
      onMouseEnter: (u) => m(u, a),
      onMouseLeave: (u) => m(u, null),
      onClick: (u) => c(u, a)
    }),
    onClick: c,
    onMouseDown: R,
    onMouseUp: p,
    onMouseHover: m,
    isSelecting: s
  };
}
function q({
  first: e = 0,
  last: t = 0,
  max: n = Number.MAX_SAFE_INTEGER
} = {}) {
  const o = h(), s = d(null);
  if (s.current === null) {
    const i = new P({
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
    pageUp: r(() => e.pageUp(), [e]),
    pageDown: r(() => e.pageDown(), [e]),
    end: r(() => e.jumpToLast(), [e]),
    home: r(() => e.jumpToFirst(), [e]),
    up: r(() => e.moveUp(), [e]),
    down: r(() => e.moveDown(), [e])
  };
  for (let i in s)
    b(s[i], o[i], n);
}
function J() {
  const e = d({ x: 0, y: 0 });
  return f(() => {
    let t = (n) => {
      e.current.x = n.pageX, e.current.y = n.pageY;
    };
    return document.addEventListener("mousemove", t), () => {
      document.removeEventListener("mousemove", t);
    };
  }, []), e.current;
}
function S() {
  const e = M(E);
  if (!e) throw new Error("useRadioStore must be used inside <RadioProvider>");
  return e;
}
function K(e, t) {
  t = t ?? S();
  const n = r((s) => t.subscribe(e, s), [t, e]), o = r(() => t.get(e), [t, e]);
  return k(n, o, o);
}
function U(e, t) {
  return t = t ?? S(), r((n) => t.set(e, n), [t, e]);
}
function V(e, t) {
  const n = K(e, t), o = U(e, t);
  return [n, o];
}
function Q(e) {
  const t = D();
  return V(e, t);
}
function D() {
  const e = d();
  return e.current || (e.current = new L()), e.current;
}
function W({
  onEvent: e,
  interval: t = 100,
  enabled: n = !0
}) {
  const o = d(null), s = r(() => {
    n && (o.current = setInterval(e, t));
  }, [e, t, n]), i = r(() => {
    o.current && (clearInterval(o.current), o.current = null);
  }, []);
  return { onMouseEnter: s, onMouseLeave: i };
}
export {
  j as R,
  h as a,
  V as b,
  _ as c,
  B as d,
  F as e,
  H as f,
  y as g,
  g as h,
  z as i,
  N as j,
  b as k,
  X as l,
  q as m,
  Y as n,
  J as o,
  K as p,
  U as q,
  Q as r,
  D as s,
  W as u
};
