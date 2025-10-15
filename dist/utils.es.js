import c from "react";
import { isBrowser as a } from "velor-utils/utils/platform.mjs";
function w(e, n) {
  return e = new Date(e), e.toLocaleDateString(n) + " " + e.toLocaleTimeString(n);
}
function l(e, n, { frames: t = 2, timeout: r = 50 } = {}) {
  let i = e.getBoundingClientRect();
  function o(u) {
    if (u <= 0) {
      const s = e.getBoundingClientRect();
      i.top === s.top && i.left === s.left && i.width === s.width && i.height === s.height ? n() : setTimeout(() => {
        n(), l(e, n, { frames: t, timeout: r });
      }, r);
      return;
    }
    requestAnimationFrame(() => {
      o(u - 1);
    });
  }
  o(t);
}
function h(e, n) {
  return new Promise((t) => {
    d(e, t, n);
  });
}
function d(e, n, { frames: t = 2, timeout: r = 50 } = {}) {
  let i = e.getBoundingClientRect(), o = 0;
  function u() {
    const s = e.getBoundingClientRect();
    if (i.top === s.top && i.left === s.left && i.width === s.width && i.height === s.height) {
      if (o++, o > t) {
        n();
        return;
      }
    } else
      o = 0, i = s;
    requestAnimationFrame(u);
  }
  u();
}
function m(e, n) {
  return c.Children.map(e, (t) => c.isValidElement(t) ? (t.props.children && (t = c.cloneElement(t, {
    children: m(t.props.children, n)
  })), n(t)) : t);
}
function E(e, n) {
  return c.Children.map(
    e,
    (t) => c.cloneElement(t, {
      ...t.props,
      ...n
    })
  );
}
function g(e) {
  return window.matchMedia(`(max-width: ${e}px)`).matches;
}
function f() {
  let e = null;
  if (a) {
    let n = window.navigator.userAgent, t = window.navigator?.userAgentData?.platform || window.navigator.platform, r = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"], i = ["Win32", "Win64", "Windows", "WinCE"], o = ["iPhone", "iPad", "iPod"];
    r.indexOf(t) !== -1 ? e = "macos" : o.indexOf(t) !== -1 ? e = "ios" : i.indexOf(t) !== -1 ? e = "windows" : /Android/.test(n) ? e = "android" : /Linux/.test(t) && (e = "linux");
  } else
    e = "nodejs";
  return e;
}
const L = f();
function R(e = document) {
  let n = !1, t = !1;
  const r = () => {
    t && (n = !0);
  }, i = () => {
    n = !1, t = !0;
  }, o = (u) => {
    n || e.dispatchEvent(new CustomEvent("strictClick", {
      detail: { originalEvent: u },
      bubbles: !0,
      cancelable: !0
    })), n = !1, t = !1;
  };
  return e.addEventListener("mousemove", r), e.addEventListener("mousedown", i), e.addEventListener("mouseup", o), e.addEventListener("touchmove", r), e.addEventListener("touchstart", i), e.addEventListener("touchend", o), () => {
    e.removeEventListener("mousemove", r), e.removeEventListener("mousedown", i), e.removeEventListener("mouseup", o), e.removeEventListener("touchmove", r), e.removeEventListener("touchstart", i), e.removeEventListener("touchend", o);
  };
}
export {
  w as convertDate,
  f as detectOS,
  l as doUntilStableBoundingRect,
  R as enableStrictClick,
  g as isSmaller,
  E as passProps,
  L as platform,
  m as recursiveMap,
  d as waitForStableBoundingRect,
  h as waitForStableBoundingRectAsync
};
