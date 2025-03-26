import u from "react";
import { isBrowser as c } from "velor-utils/utils/platform.mjs";
function w(t, n) {
  return t = new Date(t), t.toLocaleDateString(n) + " " + t.toLocaleTimeString(n);
}
function l(t, n, { frames: e = 2, timeout: a = 50 } = {}) {
  let i = t.getBoundingClientRect();
  function r(s) {
    if (s <= 0) {
      const o = t.getBoundingClientRect();
      i.top === o.top && i.left === o.left && i.width === o.width && i.height === o.height ? n() : setTimeout(() => {
        n(), l(t, n, { frames: e, timeout: a });
      }, a);
      return;
    }
    requestAnimationFrame(() => {
      r(s - 1);
    });
  }
  r(e);
}
function h(t, n) {
  return new Promise((e) => {
    f(t, e, n);
  });
}
function f(t, n, { frames: e = 2, timeout: a = 50 } = {}) {
  let i = t.getBoundingClientRect(), r = 0;
  function s() {
    const o = t.getBoundingClientRect();
    if (i.top === o.top && i.left === o.left && i.width === o.width && i.height === o.height) {
      if (r++, r > e) {
        n();
        return;
      }
    } else
      r = 0, i = o;
    requestAnimationFrame(s);
  }
  s();
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
  var n, e;
  let t = null;
  if (c) {
    let a = window.navigator.userAgent, i = ((e = (n = window.navigator) == null ? void 0 : n.userAgentData) == null ? void 0 : e.platform) || window.navigator.platform, r = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"], s = ["Win32", "Win64", "Windows", "WinCE"], o = ["iPhone", "iPad", "iPod"];
    r.indexOf(i) !== -1 ? t = "macos" : o.indexOf(i) !== -1 ? t = "ios" : s.indexOf(i) !== -1 ? t = "windows" : /Android/.test(a) ? t = "android" : /Linux/.test(i) && (t = "linux");
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
