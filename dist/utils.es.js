import u from "react";
import { isBrowser as c } from "velor-utils/utils/platform.mjs";
function w(t, n) {
  return t = new Date(t), t.toLocaleDateString(n) + " " + t.toLocaleTimeString(n);
}
function l(t, n, { frames: e = 2, timeout: s = 50 } = {}) {
  let i = t.getBoundingClientRect();
  function r(a) {
    if (a <= 0) {
      const o = t.getBoundingClientRect();
      i.top === o.top && i.left === o.left && i.width === o.width && i.height === o.height ? n() : setTimeout(() => {
        n(), l(t, n, { frames: e, timeout: s });
      }, s);
      return;
    }
    requestAnimationFrame(() => {
      r(a - 1);
    });
  }
  r(e);
}
function h(t, n) {
  return new Promise((e) => {
    f(t, e, n);
  });
}
function f(t, n, { frames: e = 2, timeout: s = 50 } = {}) {
  let i = t.getBoundingClientRect(), r = 0;
  function a() {
    const o = t.getBoundingClientRect();
    if (i.top === o.top && i.left === o.left && i.width === o.width && i.height === o.height) {
      if (r++, r > e) {
        n();
        return;
      }
    } else
      r = 0, i = o;
    requestAnimationFrame(a);
  }
  a();
}
function d(t, n) {
  return u.Children.map(t, (e) => u.isValidElement(e) ? (e.props.children && (e = u.cloneElement(e, {
    children: d(e.props.children, n)
  })), n(e)) : e);
}
function R(t, n) {
  return u.Children.map(
    t,
    (e) => u.cloneElement(e, {
      ...e.props,
      ...n
    })
  );
}
function P(t) {
  return window.matchMedia(`(max-width: ${t}px)`).matches;
}
function m() {
  let t = null;
  if (c) {
    let n = window.navigator.userAgent, e = window.navigator?.userAgentData?.platform || window.navigator.platform, s = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"], i = ["Win32", "Win64", "Windows", "WinCE"], r = ["iPhone", "iPad", "iPod"];
    s.indexOf(e) !== -1 ? t = "macos" : r.indexOf(e) !== -1 ? t = "ios" : i.indexOf(e) !== -1 ? t = "windows" : /Android/.test(n) ? t = "android" : /Linux/.test(e) && (t = "linux");
  } else
    t = "nodejs";
  return t;
}
const S = m();
export {
  w as convertDate,
  m as detectOS,
  l as doUntilStableBoundingRect,
  P as isSmaller,
  R as passProps,
  S as platform,
  d as recursiveMap,
  f as waitForStableBoundingRect,
  h as waitForStableBoundingRectAsync
};
