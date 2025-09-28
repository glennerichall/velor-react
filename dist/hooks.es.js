import { useState as f, useEffect as r, useRef as v, useCallback as a } from "react";
import { Range as k } from "velor-utils/utils/Range.mjs";
import { noOp as y, broadcast as h } from "velor-utils/utils/functional.mjs";
function m() {
  const [n, o] = f(() => () => {
  });
  return n(), () => new Promise(((s) => {
    o(() => s);
  }));
}
function I() {
  const n = m();
  r(() => {
    n();
  }, []);
}
function M() {
  const n = v(null);
  return r(() => {
    n.current && n.current.focus();
  }, []), n;
}
function R(n = {}) {
  const {
    onClick: o = y,
    onKeyDown: s = y,
    show: u = !0
  } = n;
  r(() => {
    if (u) {
      let c = function(l) {
        return l.stopPropagation(), l.stopImmediatePropagation(), l.preventDefault(), o(), !0;
      };
      const e = document.createElement("div");
      return document.body.append(e), e.style.left = "0", e.style.right = "0", e.style.top = "0", e.style.bottom = "0", e.style.position = "absolute", e.style.zIndex = "1000", document.addEventListener("keydown", s), e.onmousedown = (l) => (l.stopPropagation(), l.stopImmediatePropagation(), !0), e.onclick = c, e.oncontextmenu = c, e.onauxclick = c, () => {
        e.remove(), document.removeEventListener("keydown", s);
      };
    }
  }, [u]);
}
function w() {
  const [n, o] = f(0);
  return [n, () => o((s) => s + 1)];
}
function U(n, o) {
  const [s, u] = w();
  r(() => n.on(o, u), [n]);
}
function C(n) {
  const [o, s] = w();
  r(() => n.onAny(s), [n]);
}
function L(n, o) {
  const [s, u] = w();
  r(h(...n.map((e) => e.on(o, u))), [n]);
}
function E(n, o = [], s = document) {
  r(() => {
    const u = (e) => {
      const c = Array.isArray(o) ? o : [o];
      (c.includes(e.key) || c.length === 0) && n(e);
    };
    return s.addEventListener("keydown", u), () => s.removeEventListener("keydown", u);
  });
}
function P(n = []) {
  const o = m();
  E(o, n);
}
function K(n) {
  const o = v(null), [s, u] = f(!1), e = a((i, t) => {
    console.log(i), i.shiftKey && (n.valid ? n.growTo(t) : n.setValue({
      first: t,
      last: t
    }));
  }, n.toArray()), c = a((i, t) => {
    u(!1), o.current = null;
  }, []), l = a((i, t) => {
    i.button === 0 && (i.shiftKey || n.invalidate(), o.current = t);
  }, []), d = a((i, t) => {
    const p = o.current;
    t !== null && p !== null && (n.valid ? n.adjustTo(t, p) : n.setValue({
      first: t,
      last: p
    }), u(!0));
  }, [o, n]);
  return {
    callbacks: (i) => ({
      onMouseDown: (t) => l(t, i),
      onMouseUp: (t) => c(t, i),
      onMouseEnter: (t) => d(t, i),
      onMouseLeave: (t) => d(t, null),
      onClick: (t) => e(t, i)
    }),
    onClick: e,
    onMouseDown: l,
    onMouseUp: c,
    onMouseHover: d,
    isSelecting: s
  };
}
function S({
  first: n = 0,
  last: o = 0,
  max: s = Number.MAX_SAFE_INTEGER
} = {}) {
  const u = m(), e = v(null);
  if (e.current === null) {
    const c = new k({
      first: n,
      last: o,
      max: s
    });
    c.valueChanged = u, e.current = c;
  }
  return e.current;
}
function T(n, o = {}, s) {
  const u = {
    pageUp: "PageUp",
    pageDown: "PageDown",
    end: "End",
    home: "Home",
    down: "ArrowDown",
    up: "ArrowUp",
    ...o
  }, e = {
    pageUp: () => n.pageUp(),
    pageDown: () => n.pageDown(),
    end: () => n.jumpToLast(),
    home: () => n.jumpToFirst(),
    up: () => n.moveUp(),
    down: () => n.moveDown()
  };
  for (let c in e)
    E(e[c], u[c], s);
}
export {
  M as useAutoFocus,
  R as useCaptureAll,
  w as useEpoch,
  m as useInvalidate,
  C as useInvalidateOnAny,
  L as useInvalidateOnAnyEmitterEvent,
  U as useInvalidateOnEvent,
  P as useInvalidateOnKeyDown,
  I as useInvalidateOnce,
  E as useKeyDown,
  S as useRange,
  T as useRangeKeyBindings,
  K as useRangeSelection
};
