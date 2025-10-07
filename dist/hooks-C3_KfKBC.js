import R, { createContext as k, useRef as p, useState as v, useEffect as l, useCallback as f, useSyncExternalStore as D, useContext as A } from "react";
import { Range as S } from "velor-utils/utils/Range.mjs";
import { noOp as y, broadcast as P } from "velor-utils/utils/functional.mjs";
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
    const r = this.listeners.get(t);
    r && r.forEach((o) => o());
  }
  subscribe(t, n) {
    const r = this.listeners.get(t) ?? /* @__PURE__ */ new Set();
    return r.add(n), this.listeners.set(t, r), () => {
      r.delete(n), r.size === 0 && this.listeners.delete(t);
    };
  }
}
const h = k(null);
function L({ children: e }) {
  const t = p();
  t.current || (t.current = new I());
  const n = t.current;
  return /* @__PURE__ */ R.createElement(h.Provider, { value: n }, e);
}
function m() {
  const [e, t] = v(() => () => {
  });
  return e(), () => new Promise(((n) => {
    t(() => n);
  }));
}
function U() {
  const e = m();
  l(() => {
    e();
  }, []);
}
function V() {
  const e = p(null);
  return l(() => {
    e.current && e.current.focus();
  }, []), e;
}
function G(e = {}) {
  const {
    onClick: t = y,
    onKeyDown: n = y,
    show: r = !0
  } = e;
  l(() => {
    if (r) {
      let u = function(i) {
        return i.stopPropagation(), i.stopImmediatePropagation(), i.preventDefault(), t(), !0;
      };
      const o = document.createElement("div");
      return document.body.append(o), o.style.left = "0", o.style.right = "0", o.style.top = "0", o.style.bottom = "0", o.style.position = "absolute", o.style.zIndex = "1000", document.addEventListener("keydown", n), o.onmousedown = (i) => (i.stopPropagation(), i.stopImmediatePropagation(), !0), o.onclick = u, o.oncontextmenu = u, o.onauxclick = u, () => {
        o.remove(), document.removeEventListener("keydown", n);
      };
    }
  }, [r]);
}
function w() {
  const [e, t] = v(0);
  return [e, () => t((n) => n + 1)];
}
function O(e, t) {
  const [n, r] = w();
  l(() => e.on(t, r), [e]);
}
function T(e) {
  const [t, n] = w();
  l(() => e.onAny(n), [e]);
}
function j(e, t) {
  const [n, r] = w();
  l(P(...e.map((o) => o.on(t, r))), [e]);
}
function E(e, t = [], {
  target: n = document,
  ctrl: r = !1,
  shift: o = !1
} = {}) {
  l(() => {
    const u = (i) => {
      const d = Array.isArray(t) ? t : [t];
      (d.includes(i.code) || d.length === 0) && (r && i.ctrlKey || !r) && (o && i.shiftKey || !o) && e(i);
    };
    return n.addEventListener("keydown", u), () => n.removeEventListener("keydown", u);
  });
}
function x(e = []) {
  const t = m();
  E(t, e);
}
function B(e) {
  const t = p(null), [n, r] = v(!1), o = f((c, s) => {
    if (c.shiftKey)
      if (e.valid) {
        let a = s > e.last ? 1 : 0;
        e.growTo(s + a);
      } else
        e.setValue({
          first: s,
          last: s + 1
        });
  }, e.toArray()), u = f((c, s) => {
    r(!1), t.current = null;
  }, []), i = f((c, s) => {
    c.button === 0 && (c.shiftKey || e.invalidate(), t.current = s);
  }, []), d = f((c, s) => {
    const a = t.current;
    s !== null && a !== null && (e.valid ? s < a ? e.first = s : (s === a && (e.first = s), e.last = s + 1) : s < a ? e.setValue({
      first: s,
      last: a + 1
    }) : e.setValue({
      first: a,
      last: s + 1
    }), r(!0));
  }, [t, e]);
  return {
    callbacks: (c) => ({
      onMouseDown: (s) => i(s, c),
      onMouseUp: (s) => u(s, c),
      onMouseEnter: (s) => d(s, c),
      onMouseLeave: (s) => d(s, null),
      onClick: (s) => o(s, c)
    }),
    onClick: o,
    onMouseDown: i,
    onMouseUp: u,
    onMouseHover: d,
    isSelecting: n
  };
}
function F({
  first: e = 0,
  last: t = 0,
  max: n = Number.MAX_SAFE_INTEGER
} = {}) {
  const r = m(), o = p(null);
  if (o.current === null) {
    const u = new S({
      first: e,
      last: t,
      max: n
    });
    u.valueChanged = r, o.current = u;
  }
  return o.current;
}
function z(e, t = {}, n) {
  const r = {
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
  for (let u in o)
    E(o[u], r[u], n);
}
function b() {
  const e = A(h);
  if (!e) throw new Error("useRadioStore must be used inside <RadioProvider>");
  return e;
}
function H(e) {
  const t = b(), n = f((o) => t.subscribe(e, o), [t, e]), r = f(() => t.get(e), [t, e]);
  return D(n, r, r);
}
function N(e) {
  const t = b();
  return f((n) => t.set(e, n), [t, e]);
}
function X() {
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
export {
  L as R,
  H as a,
  N as b,
  B as c,
  U as d,
  V as e,
  G as f,
  w as g,
  O as h,
  T as i,
  j,
  E as k,
  x as l,
  F as m,
  z as n,
  X as o,
  m as u
};
