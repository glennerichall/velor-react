import { useState as l, useRef as p, useEffect as s } from "react";
import { noOp as i, broadcast as d } from "velor-utils/utils/functional.mjs";
function v() {
  const [e, n] = l(() => () => {
  });
  return e(), () => new Promise((o) => {
    n(() => o);
  });
}
const y = () => {
  const e = p(null);
  return s(() => {
    e.current && e.current.focus();
  }, []), e;
}, E = (e = {}) => {
  const {
    onClick: n = i,
    onKeyDown: o = i,
    show: u = !0
  } = e;
  s(() => {
    if (u) {
      let c = function(r) {
        return r.stopPropagation(), r.stopImmediatePropagation(), r.preventDefault(), n(), !0;
      };
      const t = document.createElement("div");
      return document.body.append(t), t.style.left = "0", t.style.right = "0", t.style.top = "0", t.style.bottom = "0", t.style.position = "absolute", t.style.zIndex = "1000", document.addEventListener("keydown", o), t.onmousedown = (r) => (r.stopPropagation(), r.stopImmediatePropagation(), !0), t.onclick = c, t.oncontextmenu = c, t.onauxclick = c, () => {
        t.remove(), document.removeEventListener("keydown", o);
      };
    }
  }, [u]);
};
function a() {
  const [e, n] = l(0);
  return [e, () => n((o) => o + 1)];
}
function h(e, n) {
  const [o, u] = a();
  s(() => e.on(n, u), [e]);
}
function I(e) {
  const [n, o] = a();
  s(() => e.onAny(o), [e]);
}
function w(e, n) {
  const [o, u] = a();
  s(d(...e.map((t) => t.on(n, u))), [e]);
}
export {
  y as useAutoFocus,
  E as useCaptureAll,
  a as useEpoch,
  v as useInvalidate,
  I as useInvalidateOnAny,
  w as useInvalidateOnAnyEmitterEvent,
  h as useInvalidateOnEvent
};
