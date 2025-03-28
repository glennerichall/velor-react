import { useState as l, useEffect as r, useRef as p } from "react";
import { noOp as i, broadcast as d } from "velor-utils/utils/functional.mjs";
function m() {
  const [e, t] = l(() => () => {
  });
  return e(), () => new Promise((o) => {
    t(() => o);
  });
}
function y() {
  const e = m();
  r(() => {
    e();
  }, []);
}
const E = () => {
  const e = p(null);
  return r(() => {
    e.current && e.current.focus();
  }, []), e;
}, h = (e = {}) => {
  const {
    onClick: t = i,
    onKeyDown: o = i,
    show: u = !0
  } = e;
  r(() => {
    if (u) {
      let c = function(s) {
        return s.stopPropagation(), s.stopImmediatePropagation(), s.preventDefault(), t(), !0;
      };
      const n = document.createElement("div");
      return document.body.append(n), n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.position = "absolute", n.style.zIndex = "1000", document.addEventListener("keydown", o), n.onmousedown = (s) => (s.stopPropagation(), s.stopImmediatePropagation(), !0), n.onclick = c, n.oncontextmenu = c, n.onauxclick = c, () => {
        n.remove(), document.removeEventListener("keydown", o);
      };
    }
  }, [u]);
};
function a() {
  const [e, t] = l(0);
  return [e, () => t((o) => o + 1)];
}
function I(e, t) {
  const [o, u] = a();
  r(() => e.on(t, u), [e]);
}
function w(e) {
  const [t, o] = a();
  r(() => e.onAny(o), [e]);
}
function b(e, t) {
  const [o, u] = a();
  r(d(...e.map((n) => n.on(t, u))), [e]);
}
export {
  E as useAutoFocus,
  h as useCaptureAll,
  a as useEpoch,
  m as useInvalidate,
  w as useInvalidateOnAny,
  b as useInvalidateOnAnyEmitterEvent,
  I as useInvalidateOnEvent,
  y as useInvalidateOnce
};
