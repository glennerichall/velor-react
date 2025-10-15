import S, { createContext as D, useState as v, useEffect as f, useRef as p, useCallback as r, useSyncExternalStore as I, useContext as A } from "react";
import { Range as k } from "velor-utils/utils/Range.mjs";
import { noOp as h, broadcast as M } from "velor-utils/utils/functional.mjs";
const y = D(null);
function O({ children: e }) {
  const t = b();
  return /* @__PURE__ */ S.createElement(y.Provider, { value: t }, e);
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
function T() {
  const e = m();
  f(() => {
    e();
  }, []);
}
function j() {
  const e = p(null);
  return f(() => {
    e.current && e.current.focus();
  }, []), e;
}
function B(e = {}) {
  const {
    onClick: t = h,
    onKeyDown: n = h,
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
function w() {
  const [e, t] = v(0);
  return [e, () => t((n) => n + 1)];
}
function F(e, t) {
  const [n, o] = w();
  f(() => e.on(t, o), [e]);
}
function H(e) {
  const [t, n] = w();
  f(() => e.onAny(n), [e]);
}
function g(e, t) {
  const [n, o] = w();
  f(M(...e.map((s) => s.on(t, o))), [e]);
}
function R(e, t = [], {
  target: n = document,
  ctrl: o = !1,
  shift: s = !1
} = {}) {
  f(() => {
    const i = (c) => {
      const d = Array.isArray(t) ? t : [t];
      (d.includes(c.code) || d.length === 0) && (o && c.ctrlKey || !o) && (s && c.shiftKey || !s) && e(c);
    };
    return n.addEventListener("keydown", i), () => n.removeEventListener("keydown", i);
  }, [t, e]);
}
function z(e = []) {
  const t = m();
  R(t, e);
}
function N(e) {
  const t = p(null), [n, o] = v(!1), s = r((a, u) => {
    if (a.shiftKey)
      if (e.valid) {
        let l = u > e.last ? 1 : 0;
        e.growTo(u + l);
      } else
        e.setValue({
          first: u,
          last: u + 1
        });
  }, e.toArray()), i = r((a, u) => {
    o(!1), t.current = null;
  }, []), c = r((a, u) => {
    a.button === 0 && (a.shiftKey || e.invalidate(), t.current = u);
  }, []), d = r((a, u) => {
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
    callbacks: (a) => ({
      onMouseDown: (u) => c(u, a),
      onMouseUp: (u) => i(u, a),
      onMouseEnter: (u) => d(u, a),
      onMouseLeave: (u) => d(u, null),
      onClick: (u) => s(u, a)
    }),
    onClick: s,
    onMouseDown: c,
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
  const o = m(), s = p(null);
  if (s.current === null) {
    const i = new k({
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
    pageUp: r(() => e.pageUp(), [e]),
    pageDown: r(() => e.pageDown(), [e]),
    end: r(() => e.jumpToLast(), [e]),
    home: r(() => e.jumpToFirst(), [e]),
    up: r(() => e.moveUp(), [e]),
    down: r(() => e.moveDown(), [e])
  };
  for (let i in s)
    R(s[i], o[i], n);
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
  const e = A(y);
  if (!e) throw new Error("useRadioStore must be used inside <RadioProvider>");
  return e;
}
function C(e, t) {
  t = t ?? E();
  const n = r((s) => t.subscribe(e, s), [t, e]), o = r(() => t.get(e), [t, e]);
  return I(n, o, o);
}
function L(e, t) {
  return t = t ?? E(), r((n) => t.set(e, n), [t, e]);
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
  const o = p(null), s = r(() => {
    n && (o.current = setInterval(e, t));
  }, [e, t, n]), i = r(() => {
    o.current && (clearInterval(o.current), o.current = null);
  }, []);
  return { onMouseEnter: s, onMouseLeave: i };
}
export {
  O as R,
  m as a,
  K as b,
  N as c,
  T as d,
  j as e,
  B as f,
  w as g,
  F as h,
  H as i,
  g as j,
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
