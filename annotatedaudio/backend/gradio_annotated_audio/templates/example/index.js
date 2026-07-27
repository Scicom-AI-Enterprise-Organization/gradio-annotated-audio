import { c as d, g as v, i as g, T as _, a as h, C as o, t as m, s as T, b } from "./render-Dbj7hDfr.js";
const p = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function w(t) {
  return (
    /** @type {string} */
    p?.createHTML(t) ?? t
  );
}
function E(t) {
  var r = d("template");
  return r.innerHTML = w(t.replaceAll("<!>", "<!---->")), r.content;
}
function L(t, r) {
  var a = (
    /** @type {Effect} */
    h
  );
  a.nodes === null && (a.nodes = { start: t, end: r, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function A(t, r) {
  var a = (r & _) !== 0, e, n = !t.startsWith("<!>");
  return () => {
    e === void 0 && (e = E(n ? t : "<!>" + t), e = /** @type {TemplateNode} */
    v(e));
    var l = (
      /** @type {TemplateNode} */
      a || g ? document.importNode(e, !0) : e.cloneNode(!0)
    );
    return L(l, l), l;
  };
}
function M(t, r) {
  t !== null && t.before(
    /** @type {Node} */
    r
  );
}
const c = [...` 	
\r\f \v\uFEFF`];
function C(t, r, a) {
  var e = "" + t;
  if (a) {
    for (var n of Object.keys(a))
      if (a[n])
        e = e ? e + " " + n : n;
      else if (e.length)
        for (var l = n.length, i = 0; (i = e.indexOf(n, i)) >= 0; ) {
          var u = i + l;
          (i === 0 || c.includes(e[i - 1])) && (u === e.length || c.includes(e[u])) ? e = (i === 0 ? "" : e.substring(0, i)) + e.substring(u + 1) : i = u;
        }
  }
  return e === "" ? null : e;
}
function H(t, r, a, e, n, l) {
  var i = (
    /** @type {any} */
    t[o]
  );
  if (i !== a || i === void 0) {
    var u = C(a, e, l);
    u == null ? t.removeAttribute("class") : t.className = u, t[o] = a;
  } else if (l && n !== l)
    for (var f in l) {
      var s = !!l[f];
      (n == null || s !== !!n[f]) && t.classList.toggle(f, s);
    }
  return l;
}
function N(t, r, a, e) {
  var n = (
    /** @type {V} */
    e
  ), l = !0, i = () => (l && (l = !1, n = /** @type {V} */
  e), n), u;
  u = /** @type {V} */
  t[r], u === void 0 && e !== void 0 && (u = i());
  var f;
  return f = () => {
    var s = (
      /** @type {V} */
      t[r]
    );
    return s === void 0 ? i() : (l = !0, s);
  }, f;
}
var O = /* @__PURE__ */ A("<div> </div>");
function P(t, r) {
  let a = N(r, "selected", 3, !1);
  var e = O();
  let n;
  var l = b(e);
  m(() => {
    n = H(e, 1, "svelte-s3apn9", null, n, {
      table: r.type === "table",
      gallery: r.type === "gallery",
      selected: a()
    }), T(l, r.value ? r.value : "");
  }), M(t, e);
}
export {
  P as default
};
