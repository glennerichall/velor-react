import R, { createContext as S, useRef as d, useState as f, useEffect as l, useCallback as c, useSyncExternalStore as g, useContext as k } from "react";
import { Range as D } from "velor-utils/utils/Range.mjs";
import { noOp as h, broadcast as P } from "velor-utils/utils/functional.mjs";
class A {
  constructor() {
    this.active = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Map();
  }
  get(t) {
    return this.active.get(t) ?? null;
  }
  set(t, o) {
    if (this.get(t) === o) return;
    this.active.set(t, o);
    const s = this.listeners.get(t);
    s && s.forEach((n) => n());
  }
  subscribe(t, o) {
    const s = this.listeners.get(t) ?? /* @__PURE__ */ new Set();
    return s.add(o), this.listeners.set(t, s), () => {
      s.delete(o), s.size === 0 && this.listeners.delete(t);
    };
  }
}
const y = S(null);
function L({ children: e }) {
  const t = d();
  t.current || (t.current = new A());
  const o = t.current;
  return /* @__PURE__ */ R.createElement(y.Provider, { value: o }, e);
}
function U(e, t) {
}
function K(e, t) {
  const [o, s] = f(getPersistedValue(e, t));
  return [
    o,
    (n) => {
      s(n), setPersistedValue(e, n);
    }
  ];
}
function w() {
  const [e, t] = f(() => () => {
  });
  return e(), () => new Promise(((o) => {
    t(() => o);
  }));
}
function V() {
  const e = w();
  l(() => {
    e();
  }, []);
}
function T() {
  const e = d(null);
  return l(() => {
    e.current && e.current.focus();
  }, []), e;
}
function j(e = {}) {
  const {
    onClick: t = h,
    onKeyDown: o = h,
    show: s = !0
  } = e;
  l(() => {
    if (s) {
      let u = function(a) {
        return a.stopPropagation(), a.stopImmediatePropagation(), a.preventDefault(), t(), !0;
      };
      const n = document.createElement("div");
      return document.body.append(n), n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.position = "absolute", n.style.zIndex = "1000", document.addEventListener("keydown", o), n.onmousedown = (a) => (a.stopPropagation(), a.stopImmediatePropagation(), !0), n.onclick = u, n.oncontextmenu = u, n.onauxclick = u, () => {
        n.remove(), document.removeEventListener("keydown", o);
      };
    }
  }, [s]);
}
function m() {
  const [e, t] = f(0);
  return [e, () => t((o) => o + 1)];
}
function G(e, t) {
  const [o, s] = m();
  l(() => e.on(t, s), [e]);
}
function O(e) {
  const [t, o] = m();
  l(() => e.onAny(o), [e]);
}
function B(e, t) {
  const [o, s] = m();
  l(P(...e.map((n) => n.on(t, s))), [e]);
}
function E(e, t = [], o = document) {
  l(() => {
    const s = (n) => {
      const u = Array.isArray(t) ? t : [t];
      (u.includes(n.key) || u.length === 0) && e(n);
    };
    return o.addEventListener("keydown", s), () => o.removeEventListener("keydown", s);
  });
}
function F(e = []) {
  const t = w();
  E(t, e);
}
function z(e) {
  const t = d(null), [o, s] = f(!1), n = c((r, i) => {
    console.log(r), r.shiftKey && (e.valid ? e.growTo(i) : e.setValue({
      first: i,
      last: i
    }));
  }, e.toArray()), u = c((r, i) => {
    s(!1), t.current = null;
  }, []), a = c((r, i) => {
    r.button === 0 && (r.shiftKey || e.invalidate(), t.current = i);
  }, []), p = c((r, i) => {
    const v = t.current;
    i !== null && v !== null && (e.valid ? e.adjustTo(i, v) : e.setValue({
      first: i,
      last: v
    }), s(!0));
  }, [t, e]);
  return {
    callbacks: (r) => ({
      onMouseDown: (i) => a(i, r),
      onMouseUp: (i) => u(i, r),
      onMouseEnter: (i) => p(i, r),
      onMouseLeave: (i) => p(i, null),
      onClick: (i) => n(i, r)
    }),
    onClick: n,
    onMouseDown: a,
    onMouseUp: u,
    onMouseHover: p,
    isSelecting: o
  };
}
function H({
  first: e = 0,
  last: t = 0,
  max: o = Number.MAX_SAFE_INTEGER
} = {}) {
  const s = w(), n = d(null);
  if (n.current === null) {
    const u = new D({
      first: e,
      last: t,
      max: o
    });
    u.valueChanged = s, n.current = u;
  }
  return n.current;
}
function N(e, t = {}, o) {
  const s = {
    pageUp: "PageUp",
    pageDown: "PageDown",
    end: "End",
    home: "Home",
    down: "ArrowDown",
    up: "ArrowUp",
    ...t
  }, n = {
    pageUp: () => e.pageUp(),
    pageDown: () => e.pageDown(),
    end: () => e.jumpToLast(),
    home: () => e.jumpToFirst(),
    up: () => e.moveUp(),
    down: () => e.moveDown()
  };
  for (let u in n)
    E(n[u], s[u], o);
}
function b() {
  const e = k(y);
  if (!e) throw new Error("useRadioStore must be used inside <RadioProvider>");
  return e;
}
function _(e) {
  const t = b(), o = c((n) => t.subscribe(e, n), [t, e]), s = c(() => t.get(e), [t, e]);
  return g(o, s, s);
}
function X(e) {
  const t = b();
  return c((o) => t.set(e, o), [t, e]);
}
export {
  L as R,
  _ as a,
  X as b,
  z as c,
  U as d,
  K as e,
  V as f,
  T as g,
  j as h,
  m as i,
  G as j,
  O as k,
  B as l,
  E as m,
  F as n,
  H as o,
  N as p,
  w as u
};
