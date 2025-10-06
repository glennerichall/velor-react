import R, { createContext as g, useRef as d, useState as v, useEffect as a, useCallback as l, useSyncExternalStore as k, useContext as D } from "react";
import { Range as S } from "velor-utils/utils/Range.mjs";
import { noOp as h, broadcast as A } from "velor-utils/utils/functional.mjs";
class P {
  constructor() {
    this.active = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Map();
  }
  get(n) {
    return this.active.get(n) ?? null;
  }
  set(n, t) {
    if (this.get(n) === t) return;
    this.active.set(n, t);
    const s = this.listeners.get(n);
    s && s.forEach((o) => o());
  }
  subscribe(n, t) {
    const s = this.listeners.get(n) ?? /* @__PURE__ */ new Set();
    return s.add(t), this.listeners.set(n, s), () => {
      s.delete(t), s.size === 0 && this.listeners.delete(n);
    };
  }
}
const y = g(null);
function L({ children: e }) {
  const n = d();
  n.current || (n.current = new P());
  const t = n.current;
  return /* @__PURE__ */ R.createElement(y.Provider, { value: t }, e);
}
function m() {
  const [e, n] = v(() => () => {
  });
  return e(), () => new Promise(((t) => {
    n(() => t);
  }));
}
function U() {
  const e = m();
  a(() => {
    e();
  }, []);
}
function K() {
  const e = d(null);
  return a(() => {
    e.current && e.current.focus();
  }, []), e;
}
function T(e = {}) {
  const {
    onClick: n = h,
    onKeyDown: t = h,
    show: s = !0
  } = e;
  a(() => {
    if (s) {
      let u = function(c) {
        return c.stopPropagation(), c.stopImmediatePropagation(), c.preventDefault(), n(), !0;
      };
      const o = document.createElement("div");
      return document.body.append(o), o.style.left = "0", o.style.right = "0", o.style.top = "0", o.style.bottom = "0", o.style.position = "absolute", o.style.zIndex = "1000", document.addEventListener("keydown", t), o.onmousedown = (c) => (c.stopPropagation(), c.stopImmediatePropagation(), !0), o.onclick = u, o.oncontextmenu = u, o.onauxclick = u, () => {
        o.remove(), document.removeEventListener("keydown", t);
      };
    }
  }, [s]);
}
function w() {
  const [e, n] = v(0);
  return [e, () => n((t) => t + 1)];
}
function j(e, n) {
  const [t, s] = w();
  a(() => e.on(n, s), [e]);
}
function G(e) {
  const [n, t] = w();
  a(() => e.onAny(t), [e]);
}
function O(e, n) {
  const [t, s] = w();
  a(A(...e.map((o) => o.on(n, s))), [e]);
}
function E(e, n = [], t = document) {
  a(() => {
    const s = (o) => {
      const u = Array.isArray(n) ? n : [n];
      (u.includes(o.key) || u.length === 0) && e(o);
    };
    return t.addEventListener("keydown", s), () => t.removeEventListener("keydown", s);
  });
}
function V(e = []) {
  const n = m();
  E(n, e);
}
function B(e) {
  const n = d(null), [t, s] = v(!1), o = l((i, r) => {
    console.log(i), i.shiftKey && (e.valid ? e.growTo(r) : e.setValue({
      first: r,
      last: r
    }));
  }, e.toArray()), u = l((i, r) => {
    s(!1), n.current = null;
  }, []), c = l((i, r) => {
    i.button === 0 && (i.shiftKey || e.invalidate(), n.current = r);
  }, []), f = l((i, r) => {
    const p = n.current;
    r !== null && p !== null && (e.valid ? e.adjustTo(r, p) : e.setValue({
      first: r,
      last: p
    }), s(!0));
  }, [n, e]);
  return {
    callbacks: (i) => ({
      onMouseDown: (r) => c(r, i),
      onMouseUp: (r) => u(r, i),
      onMouseEnter: (r) => f(r, i),
      onMouseLeave: (r) => f(r, null),
      onClick: (r) => o(r, i)
    }),
    onClick: o,
    onMouseDown: c,
    onMouseUp: u,
    onMouseHover: f,
    isSelecting: t
  };
}
function F({
  first: e = 0,
  last: n = 0,
  max: t = Number.MAX_SAFE_INTEGER
} = {}) {
  const s = m(), o = d(null);
  if (o.current === null) {
    const u = new S({
      first: e,
      last: n,
      max: t
    });
    u.valueChanged = s, o.current = u;
  }
  return o.current;
}
function z(e, n = {}, t) {
  const s = {
    pageUp: "PageUp",
    pageDown: "PageDown",
    end: "End",
    home: "Home",
    down: "ArrowDown",
    up: "ArrowUp",
    ...n
  }, o = {
    pageUp: () => e.pageUp(),
    pageDown: () => e.pageDown(),
    end: () => e.jumpToLast(),
    home: () => e.jumpToFirst(),
    up: () => e.moveUp(),
    down: () => e.moveDown()
  };
  for (let u in o)
    E(o[u], s[u], t);
}
function b() {
  const e = D(y);
  if (!e) throw new Error("useRadioStore must be used inside <RadioProvider>");
  return e;
}
function H(e) {
  const n = b(), t = l((o) => n.subscribe(e, o), [n, e]), s = l(() => n.get(e), [n, e]);
  return k(t, s, s);
}
function N(e) {
  const n = b();
  return l((t) => n.set(e, t), [n, e]);
}
function X() {
  const e = d({ x: 0, y: 0 });
  return a(() => {
    let n = (t) => {
      e.current.x = t.pageX, e.current.y = t.pageY;
    };
    return document.addEventListener("mousemove", n), () => {
      document.removeEventListener("mousemove", n);
    };
  }, []), e.current;
}
export {
  L as R,
  H as a,
  N as b,
  B as c,
  U as d,
  K as e,
  T as f,
  w as g,
  j as h,
  G as i,
  O as j,
  E as k,
  V as l,
  F as m,
  z as n,
  X as o,
  m as u
};
