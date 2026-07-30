import { i as Ys, g as yo, o as Ic, n as Ai, u as Ue, s as xo, m as St, a as W, b as y, t as ln, d as Cc, q as Eo, c as To, e as $t, f as Cs, h as Dc, j as Fi, T as kc, k as Pc, r as Ds, l as oi, p as cn, v as ui, w as bo, x as _o, y as So, z as Qi, E as zs, A as li, B as Ao, C as Le, D as Bn, F as Oc, G as Lo, H as dn, I as Mc, J as Fr, K as Fc, L as Nc, M as Mt, N as wo, O as Ro, P as ar, Q as Bc, R as Uc, S as Gc, U as Hc, V as Vc, W as qs, X as Io, Y as Je, Z as Co, _ as Un, $ as Gn, a0 as Kc, a1 as Wc, a2 as jc, a3 as Yc, a4 as zc, a5 as qc, a6 as Xs, a7 as Xc, a8 as Qc, a9 as Zc, aa as Oe, ab as Et, ac as Jc, ad as $c, ae as ed, af as td, ag as id, ah as un, ai as sd, aj as rd, ak as Hn, al as Nr, am as Br, an as nd, ao as Do, ap as yt, aq as ad, ar as od, as as ld, at as cd, au as dd, av as ko, aw as Ur, ax as Vn, ay as Gi, az as ud, aA as hd, aB as fe, aC as We, aD as z, aE as re, aF as je, aG as j, aH as fd, aI as ks, aJ as hn, aK as ve, aL as Li, aM as gd, aN as Ee, aO as he, aP as Po, aQ as fn } from "./render-BxevBEZE.js";
function gn(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const md = [];
function pd(n, e = !1, t = !1) {
  return xs(n, /* @__PURE__ */ new Map(), "", md, null, t);
}
function xs(n, e, t, i, s = null, r = !1) {
  if (typeof n == "object" && n !== null) {
    var a = e.get(n);
    if (a !== void 0) return a;
    if (n instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(n)
    );
    if (n instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(n)
    );
    if (Ys(n)) {
      var o = (
        /** @type {Snapshot<any>} */
        Array(n.length)
      );
      e.set(n, o), s !== null && e.set(s, o);
      for (var l = 0; l < n.length; l += 1) {
        var c = n[l];
        l in n && (o[l] = xs(c, e, t, i, null, r));
      }
      return o;
    }
    if (yo(n) === Ic) {
      o = {}, e.set(n, o), s !== null && e.set(s, o);
      for (var d of Object.keys(n))
        o[d] = xs(
          // @ts-expect-error
          n[d],
          e,
          t,
          i,
          null,
          r
        );
      return o;
    }
    if (n instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(n)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    n.toJSON == "function" && !r)
      return xs(
        /** @type {T & { toJSON(): any } } */
        n.toJSON(),
        e,
        t,
        i,
        // Associate the instance with the toJSON clone
        n
      );
  }
  if (n instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      n
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(n)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      n
    );
  }
}
function Oo(n, e, t) {
  if (n == null)
    return e(void 0), Ai;
  const i = Ue(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const vi = [];
function vd(n, e = Ai) {
  let t = null;
  const i = /* @__PURE__ */ new Set();
  function s(o) {
    if (xo(n, o) && (n = o, t)) {
      const l = !vi.length;
      for (const c of i)
        c[1](), vi.push(c, n);
      if (l) {
        for (let c = 0; c < vi.length; c += 2)
          vi[c][0](vi[c + 1]);
        vi.length = 0;
      }
    }
  }
  function r(o) {
    s(o(
      /** @type {T} */
      n
    ));
  }
  function a(o, l = Ai) {
    const c = [o, l];
    return i.add(c), i.size === 1 && (t = e(s, r) || Ai), o(
      /** @type {T} */
      n
    ), () => {
      i.delete(c), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: r, subscribe: a };
}
function Mo(n) {
  let e;
  return Oo(n, (t) => e = t)(), e;
}
let rs = !1, Gr = /* @__PURE__ */ Symbol("unmounted");
function Kn(n, e, t) {
  const i = t[e] ??= {
    store: null,
    source: St(void 0),
    unsubscribe: Ai
  };
  if (i.store !== n && !(Gr in t))
    if (i.unsubscribe(), i.store = n ?? null, n == null)
      i.source.v = void 0, i.unsubscribe = Ai;
    else {
      var s = !0;
      i.unsubscribe = Oo(n, (r) => {
        s ? i.source.v = r : W(i.source, r);
      }), s = !1;
    }
  return n && Gr in t ? Mo(n) : y(i.source);
}
function yd() {
  const n = {};
  function e() {
    ln(() => {
      for (var t in n)
        n[t].unsubscribe();
      Cc(n, Gr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function xd(n) {
  var e = rs;
  try {
    return rs = !1, [n(), rs];
  } finally {
    rs = e;
  }
}
function Ed(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, Eo(() => {
      document.activeElement === t && n.focus();
    });
  }
}
const Td = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function bd(n) {
  return (
    /** @type {string} */
    Td?.createHTML(n) ?? n
  );
}
function Fo(n) {
  var e = To("template");
  return e.innerHTML = bd(n.replaceAll("<!>", "<!---->")), e.content;
}
function Ii(n, e) {
  var t = (
    /** @type {Effect} */
    Fi
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function J(n, e) {
  var t = (e & kc) !== 0, i = (e & Pc) !== 0, s, r = !n.startsWith("<!>");
  return () => {
    s === void 0 && (s = Fo(r ? n : "<!>" + n), t || (s = /** @type {TemplateNode} */
    Cs(s)));
    var a = (
      /** @type {TemplateNode} */
      i || Dc ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        Cs(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ii(o, l);
    } else
      Ii(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function _d(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), s = `<${t}>${i ? n : "<!>" + n}</${t}>`, r;
  return () => {
    if (!r) {
      var a = (
        /** @type {DocumentFragment} */
        Fo(s)
      ), o = (
        /** @type {Element} */
        Cs(a)
      );
      r = /** @type {Element} */
      Cs(o);
    }
    var l = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return Ii(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Qe(n, e) {
  return /* @__PURE__ */ _d(n, e, "svg");
}
function Dt(n = "") {
  {
    var e = $t(n + "");
    return Ii(e, e), e;
  }
}
function Ne() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = $t();
  return n.append(e, t), Ii(e, t), n;
}
function M(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
class Qs {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #i = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #s = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #r = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    this.anchor = e, this.#r = t;
  }
  /**
   * @param {Batch} batch
   */
  #n = (e) => {
    if (this.#e.has(e)) {
      var t = (
        /** @type {Key} */
        this.#e.get(e)
      ), i = this.#i.get(t);
      if (i)
        Ds(i), this.#s.delete(t);
      else {
        var s = this.#t.get(t);
        s && (Ds(s.effect), this.#i.set(t, s.effect), this.#t.delete(t), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), i = s.effect);
      }
      for (const [r, a] of this.#e) {
        if (this.#e.delete(r), r === e)
          break;
        const o = this.#t.get(a);
        o && (oi(o.effect), this.#t.delete(a));
      }
      for (const [r, a] of this.#i) {
        if (r === t || this.#s.has(r)) continue;
        const o = () => {
          if (Array.from(this.#e.values()).includes(r)) {
            var c = document.createDocumentFragment();
            _o(a, c), c.append($t()), this.#t.set(r, { effect: a, fragment: c });
          } else
            oi(a);
          this.#s.delete(r), this.#i.delete(r);
        };
        this.#r || !i ? (this.#s.add(r), cn(a, o, !1)) : o();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #a = (e) => {
    this.#e.delete(e);
    const t = Array.from(this.#e.values());
    for (const [i, s] of this.#t)
      t.includes(i) || (oi(s.effect), this.#t.delete(i));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      bo
    ), s = So();
    if (t && !this.#i.has(e) && !this.#t.has(e))
      if (s) {
        var r = document.createDocumentFragment(), a = $t();
        r.append(a), this.#t.set(e, {
          effect: ui(() => t(a)),
          fragment: r
        });
      } else
        this.#i.set(
          e,
          ui(() => t(this.anchor))
        );
    if (this.#e.set(i, e), s) {
      for (const [o, l] of this.#i)
        o === e ? i.unskip_effect(l) : i.skip_effect(l);
      for (const [o, l] of this.#t)
        o === e ? i.unskip_effect(l.effect) : i.skip_effect(l.effect);
      i.oncommit(this.#n), i.ondiscard(this.#a);
    } else
      this.#n(i);
  }
}
function Ci(n, e, ...t) {
  var i = new Qs(n);
  Qi(() => {
    const s = e() ?? null;
    i.ensure(s, s && ((r) => s(r, ...t)));
  }, zs);
}
function wt(n) {
  li === null && gn(), Ao && li.l !== null ? Ld(li).m.push(n) : Le(() => {
    const e = Ue(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Zs(n) {
  li === null && gn(), wt(() => () => Ue(n));
}
function Sd(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function Ad() {
  const n = li;
  return n === null && gn(), (e, t, i) => {
    const s = (
      /** @type {Record<string, Function | Function[]>} */
      n.s.$$events?.[
        /** @type {string} */
        e
      ]
    );
    if (s) {
      const r = Ys(s) ? s.slice() : [s], a = Sd(
        /** @type {string} */
        e,
        t,
        i
      );
      for (const o of r)
        o.call(n.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function Ld(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function X(n, e, t = !1) {
  var i = new Qs(n), s = t ? zs : 0;
  function r(a, o) {
    i.ensure(a, o);
  }
  Qi(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, r(l, o);
    }), a || r(-1, null);
  }, s);
}
function ei(n, e) {
  return e;
}
function wd(n, e, t) {
  for (var i = [], s = e.length, r, a = e.length, o = 0; o < s; o++) {
    let u = e[o];
    cn(
      u,
      () => {
        if (r) {
          if (r.pending.delete(u), r.done.add(u), r.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Hr(n, dn(r.done)), h.delete(r), h.size === 0 && (n.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = i.length === 0 && t !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        t
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Gc(d), d.append(c), n.items.clear();
    }
    Hr(n, e, !l);
  } else
    r = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ??= /* @__PURE__ */ new Set()).add(r);
}
function Hr(n, e, t = !0) {
  var i;
  if (n.pending.size > 0) {
    i = /* @__PURE__ */ new Set();
    for (const a of n.pending.values())
      for (const o of a)
        i.add(
          /** @type {EachItem} */
          n.items.get(o).e
        );
  }
  for (var s = 0; s < e.length; s++) {
    var r = e[s];
    if (i?.has(r)) {
      r.f |= Mt;
      const a = document.createDocumentFragment();
      _o(r, a);
    } else
      oi(e[s], t);
  }
}
var Wn;
function Ft(n, e, t, i, s, r = null) {
  var a = n, o = /* @__PURE__ */ new Map(), l = (e & wo) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    a = c.appendChild($t());
  }
  var d = null, u = Lo(() => {
    var _ = t();
    return (
      /** @type {V[]} */
      Ys(_) ? _ : _ == null ? [] : dn(_)
    );
  }), h, f = /* @__PURE__ */ new Map(), g = !0;
  function m(_) {
    (b.effect.f & Ro) === 0 && (b.pending.delete(_), b.fallback = d, Rd(b, h, a, e, i), d !== null && (h.length === 0 ? (d.f & Mt) === 0 ? Ds(d) : (d.f ^= Mt, Ki(d, null, a)) : cn(d, () => {
      d = null;
    })));
  }
  function p(_) {
    b.pending.delete(_);
  }
  var v = Qi(() => {
    h = /** @type {V[]} */
    y(u);
    for (var _ = h.length, E = /* @__PURE__ */ new Set(), T = (
      /** @type {Batch} */
      bo
    ), A = So(), S = 0; S < _; S += 1) {
      var w = h[S], C = i(w, S), L = g ? null : o.get(C);
      L ? (L.v && Bn(L.v, w), L.i && Bn(L.i, S), A && T.unskip_effect(L.e)) : (L = Id(
        o,
        g ? a : Wn ??= $t(),
        w,
        C,
        S,
        s,
        e,
        t
      ), g || (L.e.f |= Mt), o.set(C, L)), E.add(C);
    }
    if (_ === 0 && r && !d && (g ? d = ui(() => r(a)) : (d = ui(() => r(Wn ??= $t())), d.f |= Mt)), _ > E.size && Oc(), !g)
      if (f.set(T, E), A) {
        for (const [I, K] of o)
          E.has(I) || T.skip_effect(K.e);
        T.oncommit(m), T.ondiscard(p);
      } else
        m(T);
    y(u);
  }), b = { effect: v, items: o, pending: f, outrogroups: null, fallback: d };
  g = !1;
}
function Hi(n) {
  for (; n !== null && (n.f & Bc) === 0; )
    n = n.next;
  return n;
}
function Rd(n, e, t, i, s) {
  var r = (i & Uc) !== 0, a = e.length, o = n.items, l = Hi(n.effect.first), c, d = null, u, h = [], f = [], g, m, p, v;
  if (r)
    for (v = 0; v < a; v += 1)
      g = e[v], m = s(g, v), p = /** @type {EachItem} */
      o.get(m).e, (p.f & Mt) === 0 && (p.nodes?.a?.measure(), (u ??= /* @__PURE__ */ new Set()).add(p));
  for (v = 0; v < a; v += 1) {
    if (g = e[v], m = s(g, v), p = /** @type {EachItem} */
    o.get(m).e, n.outrogroups !== null)
      for (const L of n.outrogroups)
        L.pending.delete(p), L.done.delete(p);
    if ((p.f & ar) !== 0 && (Ds(p), r && (p.nodes?.a?.unfix(), (u ??= /* @__PURE__ */ new Set()).delete(p))), (p.f & Mt) !== 0)
      if (p.f ^= Mt, p === l)
        Ki(p, null, t);
      else {
        var b = d ? d.next : l;
        p === n.effect.last && (n.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), Xt(n, d, p), Xt(n, p, b), Ki(p, b, t), d = p, h = [], f = [], l = Hi(d.next);
        continue;
      }
    if (p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (h.length < f.length) {
          var _ = f[0], E;
          d = _.prev;
          var T = h[0], A = h[h.length - 1];
          for (E = 0; E < h.length; E += 1)
            Ki(h[E], _, t);
          for (E = 0; E < f.length; E += 1)
            c.delete(f[E]);
          Xt(n, T.prev, A.next), Xt(n, d, T), Xt(n, A, _), l = _, d = A, v -= 1, h = [], f = [];
        } else
          c.delete(p), Ki(p, l, t), Xt(n, p.prev, p.next), Xt(n, p, d === null ? n.effect.first : d.next), Xt(n, d, p), d = p;
        continue;
      }
      for (h = [], f = []; l !== null && l !== p; )
        (c ??= /* @__PURE__ */ new Set()).add(l), f.push(l), l = Hi(l.next);
      if (l === null)
        continue;
    }
    (p.f & Mt) === 0 && h.push(p), d = p, l = Hi(p.next);
  }
  if (n.outrogroups !== null) {
    for (const L of n.outrogroups)
      L.pending.size === 0 && (Hr(n, dn(L.done)), n.outrogroups?.delete(L));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var S = [];
    if (c !== void 0)
      for (p of c)
        (p.f & ar) === 0 && S.push(p);
    for (; l !== null; )
      (l.f & ar) === 0 && l !== n.fallback && S.push(l), l = Hi(l.next);
    var w = S.length;
    if (w > 0) {
      var C = (i & wo) !== 0 && a === 0 ? t : null;
      if (r) {
        for (v = 0; v < w; v += 1)
          S[v].nodes?.a?.measure();
        for (v = 0; v < w; v += 1)
          S[v].nodes?.a?.fix();
      }
      wd(n, S, C);
    }
  }
  r && Eo(() => {
    if (u !== void 0)
      for (p of u)
        p.nodes?.a?.apply();
  });
}
function Id(n, e, t, i, s, r, a, o) {
  var l = (a & Fc) !== 0 ? (a & Nc) === 0 ? St(t, !1, !1) : Fr(t) : null, c = (a & Mc) !== 0 ? Fr(s) : null;
  return {
    v: l,
    i: c,
    e: ui(() => (r(e, l ?? t, c ?? s, o), () => {
      n.delete(i);
    }))
  };
}
function Ki(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, s = n.nodes.end, r = e && (e.f & Mt) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        Hc(i)
      );
      if (r.before(i), i === s)
        return;
      i = a;
    }
}
function Xt(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function Yi(n, e, t, i, s) {
  var r = e.$$slots?.[t], a = !1;
  r === !0 && (r = e[t === "default" ? "children" : t], a = !0), r === void 0 || r(n, a ? () => i : i);
}
function Cd(n, e, t) {
  var i = new Qs(n);
  Qi(() => {
    var s = e() ?? null;
    i.ensure(s, s && ((r) => t(r, s)));
  }, zs);
}
const Dd = () => performance.now(), At = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Dd(),
  tasks: /* @__PURE__ */ new Set()
};
function No() {
  const n = At.now();
  At.tasks.forEach((e) => {
    e.c(n) || (At.tasks.delete(e), e.f());
  }), At.tasks.size !== 0 && At.tick(No);
}
function kd(n) {
  let e;
  return At.tasks.size === 0 && At.tick(No), {
    promise: new Promise((t) => {
      At.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      At.tasks.delete(e);
    }
  };
}
function Pd(n, e, t, i, s, r) {
  var a = null, o = (
    /** @type {TemplateNode} */
    n
  ), l = new Qs(o, !1);
  Qi(() => {
    const c = e() || null;
    var d = c === "svg" ? Vc : void 0;
    if (c === null) {
      l.ensure(null, null);
      return;
    }
    return l.ensure(c, (u) => {
      if (c) {
        if (a = To(c, d), Ii(a, a), i) {
          var h = null, f = a.appendChild($t());
          i(a, f), h?.remove();
        }
        Fi.nodes.end = a, u.before(a);
      }
    }), () => {
    };
  }, zs), ln(() => {
  });
}
function Od(n, e, t) {
  qs(() => {
    var i = Ue(() => e(n, t?.()) || {});
    if (t && i?.update) {
      var s = !1, r = (
        /** @type {any} */
        {}
      );
      Io(() => {
        var a = t();
        Je(a), s && xo(r, a) && (r = a, i.update(a));
      }), s = !0;
    }
    if (i?.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function Md(n, e) {
  var t = void 0, i;
  Co(() => {
    t !== (t = e()) && (i && (oi(i), i = null), t && (i = ui(() => {
      qs(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Bo(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (e = 0; e < s; e++) n[e] && (t = Bo(n[e])) && (i && (i += " "), i += t);
  } else for (t in n) n[t] && (i && (i += " "), i += t);
  return i;
}
function Fd() {
  for (var n, e, t = 0, i = "", s = arguments.length; t < s; t++) (n = arguments[t]) && (e = Bo(n)) && (i && (i += " "), i += e);
  return i;
}
function Uo(n) {
  return typeof n == "object" ? Fd(n) : n ?? "";
}
const jn = [...` 	
\r\f \v\uFEFF`];
function Nd(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var s of Object.keys(t))
      if (t[s])
        i = i ? i + " " + s : s;
      else if (i.length)
        for (var r = s.length, a = 0; (a = i.indexOf(s, a)) >= 0; ) {
          var o = a + r;
          (a === 0 || jn.includes(i[a - 1])) && (o === i.length || jn.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function Yn(n, e = !1) {
  var t = e ? " !important;" : ";", i = "";
  for (var s of Object.keys(n)) {
    var r = n[s];
    r != null && r !== "" && (i += " " + s + ": " + r + t);
  }
  return i;
}
function or(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function Bd(n, e) {
  if (e) {
    var t = "", i, s;
    if (Array.isArray(e) ? (i = e[0], s = e[1]) : i = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var r = !1, a = 0, o = !1, l = [];
      i && l.push(...Object.keys(i).map(or)), s && l.push(...Object.keys(s).map(or));
      var c = 0, d = -1;
      const m = n.length;
      for (var u = 0; u < m; u++) {
        var h = n[u];
        if (o ? h === "/" && n[u - 1] === "*" && (o = !1) : r ? r === h && (r = !1) : h === "/" && n[u + 1] === "*" ? o = !0 : h === '"' || h === "'" ? r = h : h === "(" ? a++ : h === ")" && a--, !o && r === !1 && a === 0) {
          if (h === ":" && d === -1)
            d = u;
          else if (h === ";" || u === m - 1) {
            if (d !== -1) {
              var f = or(n.substring(c, d).trim());
              if (!l.includes(f)) {
                h !== ";" && u++;
                var g = n.substring(c, u).trim();
                t += " " + g + ";";
              }
            }
            c = u + 1, d = -1;
          }
        }
      }
    }
    return i && (t += Yn(i)), s && (t += Yn(s, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function Ge(n, e, t, i, s, r) {
  var a = (
    /** @type {any} */
    n[Un]
  );
  if (a !== t || a === void 0) {
    var o = Nd(t, i, r);
    o == null ? n.removeAttribute("class") : e ? n.className = o : n.setAttribute("class", o), n[Un] = t;
  } else if (r && s !== r)
    for (var l in r) {
      var c = !!r[l];
      (s == null || c !== !!s[l]) && n.classList.toggle(l, c);
    }
  return r;
}
function lr(n, e = {}, t, i) {
  for (var s in t) {
    var r = t[s];
    e[s] !== r && (t[s] == null ? n.style.removeProperty(s) : n.style.setProperty(s, r, i));
  }
}
function tt(n, e, t, i) {
  var s = (
    /** @type {any} */
    n[Gn]
  );
  if (s !== e) {
    var r = Bd(e, i);
    r == null ? n.removeAttribute("style") : n.style.cssText = r, n[Gn] = e;
  } else i && (Array.isArray(i) ? (lr(n, t?.[0], i[0]), lr(n, t?.[1], i[1], "important")) : lr(n, t, i));
  return i;
}
function Vr(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ys(e))
      return Kc();
    for (var i of n.options)
      i.selected = e.includes(zn(i));
    return;
  }
  for (i of n.options) {
    var s = zn(i);
    if (Wc(s, e)) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Ud(n) {
  var e = new MutationObserver(() => {
    "__value" in n && Vr(n, n.__value);
  });
  e.observe(n, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), ln(() => {
    e.disconnect();
  });
}
function zn(n) {
  return "__value" in n ? n.__value : n.value;
}
const _i = /* @__PURE__ */ Symbol("class"), ni = /* @__PURE__ */ Symbol("style"), Go = /* @__PURE__ */ Symbol("is custom element"), Ho = /* @__PURE__ */ Symbol("is html"), Gd = Xs ? "input" : "INPUT", Hd = Xs ? "option" : "OPTION", Vd = Xs ? "select" : "SELECT", Kd = Xs ? "progress" : "PROGRESS";
function Vo(n, e) {
  var t = mn(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== Kd) || (n.value = e ?? "");
}
function Wd(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function $e(n, e, t, i) {
  var s = mn(n);
  s[e] !== (s[e] = t) && (e === "loading" && (n[zc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Wo(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function jd(n, e, t, i, s = !1, r = !1) {
  var a = mn(n), o = a[Go], l = !a[Ho], c = e || {}, d = n.nodeName === Hd;
  for (var u in e)
    u in t || (t[u] = null);
  t.class ? t.class = Uo(t.class) : (i || t[_i]) && (t.class = null), t[ni] && (t.style ??= null);
  var h = Wo(n);
  if (n.nodeName === Gd && "type" in t && ("value" in t || "__value" in t)) {
    var f = t.type;
    (f !== c.type || f === void 0 && n.hasAttribute("type")) && (c.type = f, $e(n, "type", f));
  }
  for (const E in t) {
    let T = t[E];
    if (d && E === "value" && T == null) {
      n.value = n.__value = "", c[E] = T;
      continue;
    }
    if (E === "class") {
      var g = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ge(n, g, T, i, e?.[_i], t[_i]), c[E] = T, c[_i] = t[_i];
      continue;
    }
    if (E === "style") {
      tt(n, T, e?.[ni], t[ni]), c[E] = T, c[ni] = t[ni];
      continue;
    }
    var m = c[E];
    if (!(T === m && !(T === void 0 && n.hasAttribute(E)))) {
      c[E] = T;
      var p = E[0] + E[1];
      if (p !== "$$")
        if (p === "on") {
          const A = {}, S = "$$" + E;
          let w = E.slice(2);
          var v = td(w);
          if (Zc(w) && (w = w.slice(0, -7), A.capture = !0), !v && m) {
            if (T != null) continue;
            n.removeEventListener(w, c[S], A), c[S] = null;
          }
          if (v)
            Oe(w, n, T), Et([w]);
          else if (T != null) {
            let C = function(L) {
              c[E].call(this, L);
            };
            c[S] = Jc(w, n, C, A);
          }
        } else if (E === "style")
          $e(n, E, T);
        else if (E === "autofocus")
          Ed(
            /** @type {HTMLElement} */
            n,
            !!T
          );
        else if (!o && (E === "__value" || E === "value" && T != null))
          n.value = n.__value = T;
        else if (E === "selected" && d)
          Wd(
            /** @type {HTMLOptionElement} */
            n,
            T
          );
        else {
          var b = E;
          l || (b = $c(b));
          var _ = b === "defaultValue" || b === "defaultChecked";
          if (T == null && !o && !_)
            if (a[E] = null, b === "value" || b === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                n
              );
              const S = e === void 0;
              if (b === "value") {
                let w = A.defaultValue;
                A.removeAttribute(b), A.defaultValue = w, A.value = A.__value = S ? w : null;
              } else {
                let w = A.defaultChecked;
                A.removeAttribute(b), A.defaultChecked = w, A.checked = S ? w : !1;
              }
            } else
              n.removeAttribute(E);
          else _ || h.includes(b) && (o || typeof T != "string") ? (n[b] = T, b in a && (a[b] = ed)) : typeof T != "function" && $e(n, b, T);
        }
    }
  }
  return c;
}
function Ko(n, e, t = [], i = [], s = [], r, a = !1, o = !1) {
  Xc(s, t, i, (l) => {
    var c = void 0, d = {}, u = n.nodeName === Vd, h = !1;
    if (Co(() => {
      var g = e(...l.map(y)), m = jd(
        n,
        c,
        g,
        r,
        a,
        o
      );
      h && u && "value" in g && Vr(
        /** @type {HTMLSelectElement} */
        n,
        g.value
      );
      for (let v of Object.getOwnPropertySymbols(d))
        g[v] || oi(d[v]);
      for (let v of Object.getOwnPropertySymbols(g)) {
        var p = g[v];
        v.description === Qc && (!c || p !== c[v]) && (d[v] && oi(d[v]), d[v] = ui(() => Md(n, () => p))), m[v] = p;
      }
      c = m;
    }), u) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      qs(() => {
        Vr(
          f,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Ud(f);
      });
    }
    h = !0;
  });
}
function mn(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    n[jc] ??= {
      [Go]: n.nodeName.includes("-"),
      [Ho]: n.namespaceURI === Yc
    }
  );
}
var qn = /* @__PURE__ */ new Map();
function Wo(n) {
  var e = n.getAttribute("is") || n.nodeName, t = qn.get(e);
  if (t) return t;
  qn.set(e, t = []);
  for (var i, s = n, r = Element.prototype; r !== s; ) {
    i = qc(s);
    for (var a in i)
      i[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && t.push(a);
    s = yo(s);
  }
  return t;
}
function cr(n, e) {
  return n === e || n?.[un] === e;
}
function et(n = {}, e, t, i) {
  var s = (
    /** @type {ComponentContext} */
    li.r
  ), r = (
    /** @type {Effect} */
    Fi
  );
  return qs(() => {
    var a, o;
    return Io(() => {
      a = o, o = i?.() || [], Ue(() => {
        cr(t(...o), n) || (e(n, ...o), a && cr(t(...a), n) && e(null, ...a));
      });
    }), () => {
      let l = r;
      for (; l !== s && l.parent !== null && l.parent.f & id; )
        l = l.parent;
      const c = () => {
        o && cr(t(...o), n) && e(null, ...o);
      }, d = l.teardown;
      l.teardown = () => {
        c(), d?.();
      };
    };
  }), n;
}
function Js(n = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    li
  ), t = e.l.u;
  if (!t) return;
  let i = () => Je(e.s);
  if (n) {
    let s = 0, r = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = Nr(() => {
      let o = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== r[c] && (r[c] = l[c], o = !0);
      return o && s++, s;
    });
    i = () => y(a);
  }
  t.b.length && sd(() => {
    Xn(e, i), Hn(t.b);
  }), Le(() => {
    const s = Ue(() => t.m.map(rd));
    return () => {
      for (const r of s)
        typeof r == "function" && r();
    };
  }), t.a.length && Le(() => {
    Xn(e, i), Hn(t.a);
  });
}
function Xn(n, e) {
  if (n.l.s)
    for (const t of n.l.s) y(t);
  e();
}
const Yd = {
  get(n, e) {
    if (!n.exclude.has(e))
      return n.props[e];
  },
  set(n, e) {
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    if (!n.exclude.has(e) && e in n.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: n.props[e]
      };
  },
  has(n, e) {
    return n.exclude.has(e) ? !1 : e in n.props;
  },
  ownKeys(n) {
    return Reflect.ownKeys(n.props).filter((e) => !n.exclude.has(e));
  }
};
// @__NO_SIDE_EFFECTS__
function zd(n, e, t) {
  return new Proxy({ props: n, exclude: e }, Yd);
}
const qd = {
  get(n, e) {
    if (!n.exclude.includes(e))
      return y(n.version), e in n.special ? n.special[e]() : n.props[e];
  },
  set(n, e, t) {
    if (!(e in n.special)) {
      var i = Fi;
      try {
        Vn(n.parent_effect), n.special[e] = R(
          {
            get [e]() {
              return n.props[e];
            }
          },
          /** @type {string} */
          e,
          Do
        );
      } finally {
        Vn(i);
      }
    }
    return n.special[e](t), Ur(n.version), !0;
  },
  getOwnPropertyDescriptor(n, e) {
    if (!n.exclude.includes(e) && e in n.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: n.props[e]
      };
  },
  deleteProperty(n, e) {
    return n.exclude.includes(e) || (n.exclude.push(e), Ur(n.version)), !0;
  },
  has(n, e) {
    return n.exclude.includes(e) ? !1 : e in n.props;
  },
  ownKeys(n) {
    return Reflect.ownKeys(n.props).filter((e) => !n.exclude.includes(e));
  }
};
function Qn(n, e) {
  return new Proxy(
    {
      props: n,
      exclude: e,
      special: {},
      version: Fr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Fi
      )
    },
    qd
  );
}
const Xd = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (Gi(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(n, e, t) {
    let i = n.props.length;
    for (; i--; ) {
      let s = n.props[i];
      Gi(s) && (s = s());
      const r = Br(s, e);
      if (r && r.set)
        return r.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (Gi(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const s = Br(i, e);
        return s && !s.configurable && (s.configurable = !0), s;
      }
    }
  },
  has(n, e) {
    if (e === un || e === ko) return !1;
    for (let t of n.props)
      if (Gi(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (Gi(t) && (t = t()), !!t) {
        for (const i in t)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(t))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function Zn(...n) {
  return new Proxy({ props: n }, Xd);
}
function R(n, e, t, i) {
  var s = !Ao || (t & od) !== 0, r = (t & ad) !== 0, a = (t & cd) !== 0, o = (
    /** @type {V} */
    i
  ), l = !0, c = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), d = () => a && s ? (c ??= Nr(
    /** @type {() => V} */
    i
  ), y(c)) : (l && (l = !1, o = a ? Ue(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), o);
  let u;
  if (r) {
    var h = un in n || ko in n;
    u = Br(n, e)?.set ?? (h && e in n ? (E) => n[e] = E : void 0);
  }
  var f, g = !1;
  r ? [f, g] = xd(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && i !== void 0 && (f = d(), u && (s && nd(), u(f)));
  var m;
  if (s ? m = () => {
    var E = (
      /** @type {V} */
      n[e]
    );
    return E === void 0 ? d() : (l = !0, E);
  } : m = () => {
    var E = (
      /** @type {V} */
      n[e]
    );
    return E !== void 0 && (o = /** @type {V} */
    void 0), E === void 0 ? o : E;
  }, s && (t & Do) === 0)
    return m;
  if (u) {
    var p = n.$$legacy;
    return (
      /** @type {() => V} */
      (function(E, T) {
        return arguments.length > 0 ? ((!s || !T || p || g) && u(T ? m() : E), E) : m();
      })
    );
  }
  var v = !1, b = ((t & ld) !== 0 ? Nr : Lo)(() => (v = !1, m()));
  r && y(b);
  var _ = (
    /** @type {Effect} */
    Fi
  );
  return (
    /** @type {() => V} */
    (function(E, T) {
      if (arguments.length > 0) {
        const A = T ? y(b) : s && r ? yt(E) : E;
        return W(b, A), v = !0, o !== void 0 && (o = A), E;
      }
      return dd && v || (_.f & Ro) !== 0 ? b.v : y(b);
    })
  );
}
const Qd = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Jn = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Qd.reduce((n, { color: e, primary: t, secondary: i }) => ({
  ...n,
  [e]: {
    primary: Jn[e][t],
    secondary: Jn[e][i]
  }
}), {});
function Zd(n) {
  let e;
  const t = hd((s) => {
    let r = !1;
    const a = n.subscribe((o) => {
      e = o, r && s();
    });
    return r = !0, a;
  });
  function i() {
    return ud() ? (t(), e) : Mo(n);
  }
  return "set" in n ? {
    get current() {
      return i();
    },
    set current(s) {
      n.set(s);
    }
  } : {
    get current() {
      return i();
    }
  };
}
const Jd = "__i18n__", $d = [
  "label",
  "info",
  "placeholder",
  "description",
  "title",
  "value"
];
class Es extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function jo(n, e) {
  if (window.__gradio_space__ == null)
    throw new Es("Must be on Spaces to share.");
  let t, i, s;
  {
    let l;
    if (typeof n == "object" && n.url)
      l = n.url;
    else if (typeof n == "string")
      l = n;
    else
      throw new Error("Invalid data format for URL type");
    const c = await fetch(l);
    t = await c.blob(), i = c.headers.get("content-type") || "", s = c.headers.get("content-disposition") || "";
  }
  const r = new File([t], s, { type: i }), a = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: r,
    headers: {
      "Content-Type": r.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!a.ok) {
    if (a.headers.get("content-type")?.includes("application/json")) {
      const l = await a.json();
      throw new Es(`Upload failed: ${l.error}`);
    }
    throw new Es("Upload failed.");
  }
  return await a.text();
}
const Lt = (n) => {
  const e = Math.floor(n / 3600), t = Math.floor(n % 3600 / 60), i = Math.round(n) % 60, s = `${t < 10 ? "0" : ""}${t}`, r = `${i < 10 ? "0" : ""}${i}`;
  return e > 0 ? `${e}:${s}:${r}` : `${t}:${r}`;
}, eu = [
  "elem_id",
  "elem_classes",
  "visible",
  "interactive",
  "server_fns",
  "server",
  "id",
  "target",
  "theme_mode",
  "version",
  "root",
  "autoscroll",
  "max_file_size",
  "formatter",
  "client",
  "load_component",
  "scale",
  "min_width",
  "theme",
  "padding",
  "loading_status",
  "label",
  "show_label",
  "validation_error",
  "show_progress",
  "api_prefix",
  "container",
  "attached_events",
  "register_component",
  "dispatcher"
];
function tu(n) {
  return typeof n == "string" && n.includes(Jd);
}
class iu {
  load_component;
  #e = fe(yt({}));
  get shared() {
    return y(this.#e);
  }
  set shared(e) {
    W(this.#e, e, !0);
  }
  #i = fe(yt({}));
  get props() {
    return y(this.#i);
  }
  set props(e) {
    W(this.#i, e, !0);
  }
  #t = fe((e) => e);
  get i18n() {
    return y(this.#t);
  }
  set i18n(e) {
    W(this.#t, e, !0);
  }
  i18n_store;
  _i18n_from_store;
  translatable_props = {};
  dispatcher;
  last_update = null;
  shared_props = eu;
  mounted = !1;
  old_value;
  register_component;
  constructor(e, t) {
    for (const i in e.shared_props)
      this.shared[i] = e.shared_props[i];
    for (const i in e.props)
      i !== "i18n_store" && (this.props[i] = e.props[i]);
    if (t)
      for (const i in t)
        this.props[i] === void 0 && (this.props[i] = t[i]);
    this.i18n = this.props.i18n ?? ((i) => i), this.i18n_store = e.props.i18n_store, this._i18n_from_store = this.i18n_store ? Zd(this.i18n_store) : void 0;
    for (const i of $d)
      this.shared[i] = this._translate_and_store(
        "shared",
        i,
        // @ts-ignore
        e.shared_props[i]
      ), this.props[i] = this._translate_and_store(
        "props",
        i,
        // @ts-ignore
        e.props[i]
      );
    this.load_component = this.shared.load_component, this.register_component = this.shared.register_component || (() => {
    }), this.dispatcher = this.shared.dispatcher || (() => {
    }), this.register_component(
      e.shared_props.id,
      // @ts-ignore
      this.set_data.bind(this),
      this.get_data.bind(this)
    ), Le(() => {
      for (const i in e.shared_props)
        this._is_i18n_managed(`shared.${i}`, e.shared_props[i]) || (this.shared[i] = e.shared_props[i]);
      for (const i in e.props)
        i !== "i18n_store" && (this._is_i18n_managed(`props.${i}`, e.props[i]) || (this.props[i] = e.props[i]));
      this.register_component(
        e.shared_props.id,
        // @ts-ignore
        this.set_data.bind(this),
        this.get_data.bind(this)
      ), Ue(() => {
        this.shared.id = e.shared_props.id;
      });
    }), Le(() => this.i18n_store ? this.i18n_store.subscribe(() => {
      for (const [s, r] of Object.entries(this.translatable_props)) {
        const [a, o] = s.split("."), l = this.i18n(r);
        a === "shared" ? this.shared[o] = l : this.props[o] = l;
      }
    }) : void 0);
  }
  // check if props are translatable
  _is_i18n_managed(e, t) {
    const i = this.translatable_props[e];
    return i ? t === i ? !0 : (delete this.translatable_props[e], !1) : !1;
  }
  _translate_and_store(e, t, i) {
    if (typeof i != "string") return i;
    const s = this.i18n(i);
    return s !== i && (this.translatable_props[`${e}.${t}`] = i), s;
  }
  // Reactive variant of `i18n`. Reading it inside a derived or template
  // subscribes to the live locale store (via Svelte's createSubscriber), so
  // the caller re-runs when the locale changes at runtime. The store is only
  // the reactivity trigger; translation always goes through `this.i18n` so a
  // custom formatter passed via props keeps taking effect.
  live_i18n = (e) => (this._i18n_from_store?.current, this.i18n(e));
  dispatch(e, t) {
    this.dispatcher(this.shared.id, e, t);
  }
  async get_data() {
    return pd(this.props);
  }
  update(e) {
    this.set_data(e);
  }
  set_data(e) {
    for (const t in e) {
      const i = e[t], s = tu(i) ? this._translate_and_store(this.shared_props.includes(t) ? "shared" : "props", t, i) : i;
      if (this.shared_props.includes(t)) {
        const r = t;
        this.shared[r] = s;
        continue;
      }
      this.props[t] = s;
    }
  }
  watch_for_change() {
    Le(() => {
      this.mounted || (this.old_value = this.props.value, this.mounted = !0), this.old_value != this.props.value && (this.old_value = this.props.value, this.dispatch("change"));
    });
  }
}
function dr(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let i = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + i;
}
function $n(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function Kr(n, e, t, i) {
  if (typeof t == "number" || $n(t)) {
    const s = i - t, r = (t - e) / (n.dt || 1 / 60), a = n.opts.stiffness * s, o = n.opts.damping * r, l = (a - o) * n.inv_mass, c = (r + l) * n.dt;
    return Math.abs(c) < n.opts.precision && Math.abs(s) < n.opts.precision ? i : (n.settled = !1, $n(t) ? new Date(t.getTime() + c) : t + c);
  } else {
    if (Array.isArray(t))
      return t.map(
        (s, r) => (
          // @ts-ignore
          Kr(n, e[r], t[r], i[r])
        )
      );
    if (typeof t == "object") {
      const s = {};
      for (const r in t)
        s[r] = Kr(n, e[r], t[r], i[r]);
      return s;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function ea(n, e = {}) {
  const t = vd(n), { stiffness: i = 0.15, damping: s = 0.8, precision: r = 0.01 } = e;
  let a, o, l, c = (
    /** @type {T} */
    n
  ), d = (
    /** @type {T | undefined} */
    n
  ), u = 1, h = 0, f = !1;
  function g(p, v = {}) {
    d = p;
    const b = l = {};
    return n == null || v.hard || m.stiffness >= 1 && m.damping >= 1 ? (f = !0, a = At.now(), c = p, t.set(n = d), Promise.resolve()) : (v.soft && (h = 1 / ((v.soft === !0 ? 0.5 : +v.soft) * 60), u = 0), o || (a = At.now(), f = !1, o = kd((_) => {
      if (f)
        return f = !1, o = null, !1;
      u = Math.min(u + h, 1);
      const E = Math.min(_ - a, 1e3 / 30), T = {
        inv_mass: u,
        opts: m,
        settled: !0,
        dt: E * 60 / 1e3
      }, A = Kr(T, c, n, d);
      return a = _, c = /** @type {T} */
      n, t.set(n = /** @type {T} */
      A), T.settled && (o = null), !T.settled;
    })), new Promise((_) => {
      o.promise.then(() => {
        b === l && _();
      });
    }));
  }
  const m = {
    set: g,
    update: (p, v) => g(p(
      /** @type {T} */
      d,
      /** @type {T} */
      n
    ), v),
    subscribe: t.subscribe,
    stiffness: i,
    damping: s,
    precision: r
  };
  return m;
}
var su = /* @__PURE__ */ J('<div><svg viewBox="-1200 -1200 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-m6d381"><g><path d="M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z" fill="#FF7C00" class="svelte-m6d381"></path><path d="M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z" fill="#FF7C00" class="svelte-m6d381"></path></g><g><path d="M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z" fill="#FF7C00" class="svelte-m6d381"></path><path d="M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z" fill="#FF7C00" class="svelte-m6d381"></path></g></svg></div>');
function ru(n, e) {
  We(e, !0);
  const t = () => Kn(l, "$top", s), i = () => Kn(c, "$bottom", s), [s, r] = yd();
  var a = this && this.__awaiter || function(_, E, T, A) {
    function S(w) {
      return w instanceof T ? w : new T(function(C) {
        C(w);
      });
    }
    return new (T || (T = Promise))(function(w, C) {
      function L(F) {
        try {
          K(A.next(F));
        } catch (D) {
          C(D);
        }
      }
      function I(F) {
        try {
          K(A.throw(F));
        } catch (D) {
          C(D);
        }
      }
      function K(F) {
        F.done ? w(F.value) : S(F.value).then(L, I);
      }
      K((A = A.apply(_, E || [])).next());
    });
  };
  let o = R(e, "margin", 3, !0);
  const l = ea([0, 0]), c = ea([0, 0]);
  let d = fe(!1);
  function u() {
    return a(this, void 0, void 0, function* () {
      yield Promise.all([l.set([125, 140]), c.set([-125, -140])]), yield Promise.all([l.set([-125, 140]), c.set([125, -140])]), yield Promise.all([l.set([-125, 0]), c.set([125, -0])]), yield Promise.all([l.set([125, 0]), c.set([-125, 0])]);
    });
  }
  function h() {
    return a(this, void 0, void 0, function* () {
      yield u(), y(d) || h();
    });
  }
  function f() {
    return a(this, void 0, void 0, function* () {
      yield Promise.all([l.set([125, 0]), c.set([-125, 0])]), h();
    });
  }
  Le(() => (f(), () => {
    W(d, !0);
  }));
  var g = su();
  let m;
  var p = j(g), v = j(p), b = z(v);
  re(() => {
    m = Ge(g, 1, "svelte-m6d381", null, m, { margin: o() }), tt(v, `transform: translate(${t()[0] ?? ""}px, ${t()[1] ?? ""}px);`), tt(b, `transform: translate(${i()[0] ?? ""}px, ${i()[1] ?? ""}px);`);
  }), M(n, g), je(), r();
}
fd();
var nu = /* @__PURE__ */ Qe('<svg class="resize-handle svelte-1stq1b1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><line x1="1" y1="9" x2="9" y2="1" stroke="gray" stroke-width="0.5" class="svelte-1stq1b1"></line><line x1="5" y1="9" x2="9" y2="5" stroke="gray" stroke-width="0.5" class="svelte-1stq1b1"></line></svg>'), ta = /* @__PURE__ */ J("<!> <!>", 1), au = /* @__PURE__ */ J('<div class="placeholder svelte-1stq1b1"></div>');
function ia(n, e) {
  We(e, !1);
  let t = R(e, "height", 8, void 0), i = R(e, "min_height", 8, void 0), s = R(e, "max_height", 8, void 0), r = R(e, "width", 8, void 0), a = R(e, "elem_id", 8, ""), o = R(e, "elem_classes", 24, () => []), l = R(e, "variant", 8, "solid"), c = R(e, "border_mode", 8, "base"), d = R(e, "padding", 8, !0), u = R(e, "type", 8, "normal"), h = R(e, "test_id", 8, void 0), f = R(e, "explicit_call", 8, !1), g = R(e, "container", 8, !0), m = R(e, "visible", 8, !0), p = R(e, "allow_overflow", 8, !0), v = R(e, "overflow_behavior", 8, "auto"), b = R(e, "scale", 8, null), _ = R(e, "min_width", 8, 0), E = R(e, "flex", 12, !1), T = R(e, "resizable", 8, !1), A = R(e, "rtl", 8, !1), S = R(e, "fullscreen", 12, !1), w = R(e, "label", 8, void 0), C = St(S()), L = St(), I = u() === "fieldset" ? "fieldset" : "div", K = St(0), F = St(0), D = St(null);
  function U(O) {
    S() && O.key === "Escape" && S(!1);
  }
  const G = (O) => {
    if (O !== void 0) {
      if (typeof O == "number")
        return O + "px";
      if (typeof O == "string")
        return O;
    }
  }, ee = (O) => {
    let Y = O.clientY;
    const q = (te) => {
      const ge = te.clientY - Y;
      Y = te.clientY, gd(L, y(L).style.height = `${y(L).offsetHeight + ge}px`);
    }, le = () => {
      window.removeEventListener("mousemove", q), window.removeEventListener("mouseup", le);
    };
    window.addEventListener("mousemove", q), window.addEventListener("mouseup", le);
  };
  ks(
    () => (Je(S()), y(C), y(L)),
    () => {
      S() !== y(C) && (W(C, S()), S() ? (W(D, y(L).getBoundingClientRect()), W(K, y(L).offsetHeight), W(F, y(L).offsetWidth), window.addEventListener("keydown", U)) : (W(D, null), window.removeEventListener("keydown", U)));
    }
  ), ks(() => Je(m()), () => {
    m() || E(!1);
  }), hn(), Js();
  var oe = Ne(), H = ve(oe);
  {
    var B = (O) => {
      var Y = ta(), q = ve(Y);
      Pd(q, () => I, !1, (ge, Q) => {
        et(ge, (Ie) => W(L, Ie), () => y(L)), Ko(
          ge,
          (Ie, De) => ({
            "data-testid": h(),
            id: a(),
            class: `block ${Ie ?? ""}`,
            dir: A() ? "rtl" : "ltr",
            "aria-label": w(),
            style: "",
            [_i]: {
              hidden: m() === "hidden",
              padded: d(),
              flex: E(),
              border_focus: c() === "focus",
              border_contrast: c() === "contrast",
              "hide-container": !f() && !g(),
              fullscreen: S(),
              animating: S() && y(D) !== null,
              "auto-margin": b() === null
            },
            [ni]: De
          }),
          [
            () => (Je(o()), Ue(() => o()?.join(" ") || "")),
            () => ({
              height: (Je(S()), Je(t()), Ue(() => S() ? void 0 : G(t()))),
              "min-height": (Je(S()), Je(i()), Ue(() => S() ? void 0 : G(i()))),
              "max-height": (Je(S()), Je(s()), Ue(() => S() ? void 0 : G(s()))),
              "--start-top": (y(D), Ue(() => y(D) ? `${y(D).top}px` : "0px")),
              "--start-left": (y(D), Ue(() => y(D) ? `${y(D).left}px` : "0px")),
              "--start-width": (y(D), Ue(() => y(D) ? `${y(D).width}px` : "0px")),
              "--start-height": (y(D), Ue(() => y(D) ? `${y(D).height}px` : "0px")),
              width: (Je(S()), Je(r()), Ue(() => S() ? void 0 : typeof r() == "number" ? `calc(min(${r()}px, 100%))` : G(r()))),
              "border-style": l(),
              overflow: p() ? v() : "hidden",
              "flex-grow": b(),
              "min-width": `calc(min(${_()}px, 100%))`
            })
          ],
          void 0,
          void 0,
          "svelte-1stq1b1"
        );
        var ie = ta(), ce = ve(ie);
        Yi(ce, e, "default", {});
        var Z = z(ce, 2);
        {
          var _e = (Ie) => {
            var De = nu();
            Li("mousedown", De, ee), M(Ie, De);
          };
          X(Z, (Ie) => {
            T() && Ie(_e);
          });
        }
        M(Q, ie);
      });
      var le = z(q, 2);
      {
        var te = (ge) => {
          var Q = au();
          let ie;
          re(() => ie = tt(Q, "", ie, {
            height: y(K) + "px",
            width: y(F) + "px"
          })), M(ge, Q);
        };
        X(le, (ge) => {
          S() && ge(te);
        });
      }
      M(O, Y);
    };
    X(H, (O) => {
      (m() === !0 || m() === "hidden") && O(B);
    });
  }
  M(n, oe), je();
}
var ou = /* @__PURE__ */ J('<label for="" data-testid="block-label"><span class="svelte-1fzogyz"><!></span> </label>');
function Yo(n, e) {
  let t = R(e, "label", 8, null), i = R(e, "Icon", 8), s = R(e, "show_label", 8, !0), r = R(e, "disable", 8, !1), a = R(e, "float", 8, !0), o = R(e, "rtl", 8, !1);
  var l = ou();
  let c;
  var d = j(l), u = j(d);
  i()(u, {});
  var h = z(d);
  re(() => {
    $e(l, "dir", o() ? "rtl" : "ltr"), c = Ge(l, 1, "svelte-1fzogyz", null, c, {
      hide: !s(),
      "sr-only": !s(),
      float: a(),
      "hide-label": r()
    }), Ee(h, ` ${t() ?? ""}`), l.dir = l.dir;
  }), M(n, l);
}
var lu = /* @__PURE__ */ J("<a><!></a>");
function zo(n, e) {
  const t = Qn(e, ["children", "$$slots", "$$events", "$$legacy"]), i = Qn(t, ["href", "download"]);
  We(e, !1);
  let s = R(e, "href", 8, void 0), r = R(e, "download", 8);
  const a = Ad();
  Js();
  var o = lu(), l = he(() => a.bind(null, "click"));
  Ko(
    o,
    () => ({
      class: "download-link",
      "data-testid": "download-link",
      href: s(),
      target: Ue(() => typeof window < "u" && window.__is_colab__ ? "_blank" : null),
      rel: "noopener noreferrer",
      download: r(),
      ...i,
      [ni]: { position: "relative" }
    }),
    void 0,
    void 0,
    void 0,
    "svelte-q1286o"
  );
  var c = j(o);
  Yi(c, e, "default", {}), Li("click", o, function(...d) {
    y(l)?.apply(this, d);
  }), M(n, o), je();
}
var cu = /* @__PURE__ */ J('<span class="svelte-vvirtv"> </span>'), du = /* @__PURE__ */ J("<button><!> <div><!> <!></div></button>");
function Jt(n, e) {
  let t = R(e, "label", 3, ""), i = R(e, "show_label", 3, !1), s = R(e, "pending", 3, !1), r = R(e, "size", 3, "small"), a = R(e, "padded", 3, !0), o = R(e, "highlight", 3, !1), l = R(e, "disabled", 3, !1), c = R(e, "hasPopup", 3, !1), d = R(e, "color", 3, "var(--block-label-text-color)"), u = R(e, "transparent", 3, !1), h = R(e, "background", 3, "var(--block-background-fill)"), f = R(e, "border", 3, "transparent"), g = he(() => o() ? "var(--color-accent)" : d());
  var m = du();
  let p, v;
  var b = j(m);
  {
    var _ = (C) => {
      var L = cu(), I = j(L);
      re(() => Ee(I, t())), M(C, L);
    };
    X(b, (C) => {
      i() && C(_);
    });
  }
  var E = z(b, 2);
  let T;
  var A = j(E);
  Cd(A, () => e.Icon, (C, L) => {
    L(C, {});
  });
  var S = z(A, 2);
  {
    var w = (C) => {
      var L = Ne(), I = ve(L);
      Ci(I, () => e.children), M(C, L);
    };
    X(S, (C) => {
      e.children && C(w);
    });
  }
  re(() => {
    p = Ge(m, 1, "icon-button svelte-vvirtv", null, p, {
      pending: s(),
      padded: a(),
      highlight: o(),
      transparent: u()
    }), m.disabled = l(), $e(m, "aria-label", t()), $e(m, "aria-haspopup", c()), $e(m, "title", t()), v = tt(m, "", v, {
      "--border-color": f(),
      color: !l() && y(g) ? y(g) : "var(--block-label-text-color)",
      "--bg-color": l() ? "auto" : h()
    }), T = Ge(E, 1, "svelte-vvirtv", null, T, {
      "x-small": r() === "x-small",
      small: r() === "small",
      large: r() === "large",
      medium: r() === "medium"
    });
  }), Oe("click", m, function(...C) {
    e.onclick?.apply(this, C);
  }), M(n, m);
}
Et(["click"]);
var uu = /* @__PURE__ */ J('<div aria-label="Empty value"><div class="icon svelte-1xcwp1t"><!></div></div>');
function qo(n, e) {
  We(e, !1);
  const t = St();
  let i = R(e, "size", 8, "small"), s = R(e, "unpadded_box", 8, !1), r = St();
  function a(u) {
    var h;
    if (!u) return !1;
    const { height: f } = u.getBoundingClientRect(), { height: g } = ((h = u.parentElement) === null || h === void 0 ? void 0 : h.getBoundingClientRect()) || { height: f };
    return f > g + 2;
  }
  ks(() => y(r), () => {
    W(t, a(y(r)));
  }), hn();
  var o = uu();
  let l;
  var c = j(o), d = j(c);
  Yi(d, e, "default", {}), et(o, (u) => W(r, u), () => y(r)), re(() => l = Ge(o, 1, "empty svelte-1xcwp1t", null, l, {
    small: i() === "small",
    large: i() === "large",
    unpadded_box: s(),
    small_parent: y(t)
  })), M(n, o), je();
}
var hu = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" stroke-width="1.5" viewBox="0 0 24 24" color="currentColor"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M21.044 5.704a.6.6 0 0 1 .956.483v11.626a.6.6 0 0 1-.956.483l-7.889-5.813a.6.6 0 0 1 0-.966l7.89-5.813ZM10.044 5.704a.6.6 0 0 1 .956.483v11.626a.6.6 0 0 1-.956.483l-7.888-5.813a.6.6 0 0 1 0-.966l7.888-5.813Z"></path></svg>');
function fu(n) {
  var e = hu();
  M(n, e);
}
var gu = /* @__PURE__ */ Qe('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><g transform="matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"><path d="M18,6L6.087,17.913" style="fill:none;fill-rule:nonzero;stroke-width:2px;"></path></g><path d="M4.364,4.364L19.636,19.636" style="fill:none;fill-rule:nonzero;stroke-width:2px;"></path></svg>');
function Wr(n) {
  var e = gu();
  M(n, e);
}
var mu = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-closed-caption"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><text x="12" y="15" font-family="sans-serif" font-size="8" font-weight="bold" fill="currentColor" stroke="none" text-anchor="middle">CC</text></svg>');
function pu(n) {
  var e = mu();
  M(n, e);
}
var vu = /* @__PURE__ */ Qe('<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path d="M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z" fill="currentColor"></path></svg>');
function yu(n) {
  var e = vu();
  M(n, e);
}
var xu = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"></path></svg>');
function Xo(n) {
  var e = xu();
  M(n, e);
}
var Eu = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>');
function Tu(n) {
  var e = Eu();
  M(n, e);
}
var bu = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" stroke-width="1.5" viewBox="0 0 24 24" color="currentColor"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M2.956 5.704A.6.6 0 0 0 2 6.187v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966l-7.89-5.813ZM13.956 5.704a.6.6 0 0 0-.956.483v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966l-7.89-5.813Z"></path></svg>');
function _u(n) {
  var e = bu();
  M(n, e);
}
var Su = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z"></path></svg>');
function Qo(n) {
  var e = Su();
  M(n, e);
}
var Au = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>');
function Lu(n) {
  var e = Au();
  M(n, e);
}
var wu = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>');
function Ps(n) {
  var e = wu();
  M(n, e);
}
var Ru = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>');
function Zo(n) {
  var e = Ru();
  M(n, e);
}
var Iu = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>');
function Cu(n) {
  var e = Iu();
  M(n, e);
}
var Du = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-scissors"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>');
function ku(n) {
  var e = Du();
  M(n, e);
}
var Pu = /* @__PURE__ */ Qe('<svg aria-label="undo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>');
function Jo(n) {
  var e = Pu();
  M(n, e);
}
var Ou = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>');
function $o(n) {
  var e = Ou();
  M(n, e);
}
var Mu = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>');
function Fu(n) {
  var e = Mu();
  M(n, e);
}
var Nu = /* @__PURE__ */ Qe('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="currentColor"><title>Low volume</title><path d="M19.5 7.5C19.5 7.5 21 9 21 11.5C21 14 19.5 15.5 19.5 15.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z" stroke-width="1.5"></path></svg>');
function Bu(n) {
  var e = Nu();
  M(n, e);
}
var Uu = /* @__PURE__ */ Qe('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" color="currentColor"><title>High volume</title><path d="M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z" stroke-width="1.5"></path><path d="M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
function Gu(n) {
  var e = Uu();
  M(n, e);
}
var Hu = /* @__PURE__ */ Qe('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="currentColor"><title>Muted volume</title><g clip-path="url(#clip0_3173_16686)"><path d="M18 14L20.0005 12M22 10L20.0005 12M20.0005 12L18 10M20.0005 12L22 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z" stroke-width="1.5"></path></g><defs><clipPath id="clip0_3173_16686"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>');
function Vu(n) {
  var e = Hu();
  M(n, e);
}
var Ku = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"></path><path fill="currentColor" d="M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"></path></svg>');
function Wu(n) {
  var e = Ku();
  M(n, e);
}
var ju = /* @__PURE__ */ Qe('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" class="svelte-3g80w1"><circle cx="25" cy="25" r="20" fill="none" stroke-width="3.0" stroke-linecap="round" stroke-dasharray="94.2477796076938 94.2477796076938" stroke-dashoffset="0" class="svelte-3g80w1"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" repeatCount="indefinite" class="svelte-3g80w1"></animateTransform></circle></svg>');
function Yu(n) {
  var e = ju();
  M(n, e);
}
function el(n, e) {
  We(e, !0);
  let t = fe(!1);
  {
    let i = he(() => e.i18n("common.share"));
    Jt(n, {
      get Icon() {
        return yu;
      },
      get label() {
        return y(i);
      },
      get pending() {
        return y(t);
      },
      onclick: async () => {
        try {
          W(t, !0);
          const r = { description: await e.formatter(e.value) };
          e.onshare?.(r);
        } catch (s) {
          console.error(s);
          let r = s instanceof Es ? s.message : "Share failed.";
          e.onerror?.(r);
        } finally {
          W(t, !1);
        }
      }
    });
  }
  je();
}
const zu = /^(#\s*)(.+)$/m;
function sa(n) {
  const e = n.trim(), t = e.match(zu);
  if (!t)
    return [!1, e || !1];
  const [i, , s] = t, r = s.trim();
  if (e === i)
    return [r, !1];
  const a = t.index !== void 0 ? t.index + i.length : 0, l = e.substring(a).trim() || !1;
  return [r, l];
}
var qu = /* @__PURE__ */ J('<h2 class="svelte-cmuu9m"> </h2>'), Xu = /* @__PURE__ */ J('<p class="svelte-cmuu9m"> </p>'), Qu = /* @__PURE__ */ J("<!> <!>", 1), Zu = /* @__PURE__ */ J('<span class="or svelte-cmuu9m"> </span> ', 1), Ju = /* @__PURE__ */ J(" <!>", 1), $u = /* @__PURE__ */ J('<div class="wrap svelte-cmuu9m"><span><!></span> <!></div>');
function eh(n, e) {
  We(e, !1);
  const t = St(), i = St();
  let s = R(e, "type", 8, "file"), r = R(e, "i18n", 8), a = R(e, "message", 8, void 0), o = R(e, "mode", 8, "full"), l = R(e, "hovered", 8, !1), c = R(e, "placeholder", 8, void 0);
  const d = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  ks(
    () => (y(t), y(i), Je(c()), sa),
    () => {
      ((E) => {
        var T = Po(E, 2);
        W(t, T[0]), W(i, T[1]);
      })(c() ? sa(c()) : [!1, !1]);
    }
  ), hn(), Js();
  var u = $u(), h = j(u);
  let f;
  var g = j(h);
  {
    var m = (E) => {
      Qo(E);
    }, p = (E) => {
      $o(E);
    };
    X(g, (E) => {
      s() === "clipboard" ? E(m) : E(p, -1);
    });
  }
  var v = z(h, 2);
  {
    var b = (E) => {
      var T = Qu(), A = ve(T);
      {
        var S = (L) => {
          var I = qu(), K = j(I);
          re(() => Ee(K, y(t))), M(L, I);
        };
        X(A, (L) => {
          y(t) && L(S);
        });
      }
      var w = z(A, 2);
      {
        var C = (L) => {
          var I = Xu(), K = j(I);
          re(() => Ee(K, y(i))), M(L, I);
        };
        X(w, (L) => {
          y(i) && L(C);
        });
      }
      M(E, T);
    }, _ = (E) => {
      var T = Ju(), A = ve(T), S = z(A);
      {
        var w = (C) => {
          var L = Zu(), I = ve(L), K = j(I), F = z(I);
          re(
            (D, U) => {
              Ee(K, `- ${D ?? ""} -`), Ee(F, ` ${U ?? ""}`);
            },
            [
              () => (Je(r()), Ue(() => r()("common.or"))),
              () => (Je(a()), Je(r()), Ue(() => a() || r()("upload_text.click_to_upload")))
            ]
          ), M(C, L);
        };
        X(S, (C) => {
          o() !== "short" && C(w);
        });
      }
      re((C) => Ee(A, `${C ?? ""} `), [
        () => (Je(r()), Je(s()), Ue(() => r()(d[s()] || d.file)))
      ]), M(E, T);
    };
    X(v, (E) => {
      y(t) || y(i) ? E(b) : E(_, -1);
    });
  }
  re(() => f = Ge(h, 1, "icon-wrap svelte-cmuu9m", null, f, { hovered: l() })), M(n, u), je();
}
var th = /* @__PURE__ */ J('<button aria-label="Upload file"><!></button>'), ih = /* @__PURE__ */ J('<button aria-label="Record audio"><!></button>'), sh = /* @__PURE__ */ J('<button aria-label="Capture from camera"><!></button>'), rh = /* @__PURE__ */ J('<button aria-label="Record video from camera"><!></button>'), nh = /* @__PURE__ */ J('<button aria-label="Paste from clipboard"><!></button>'), ah = /* @__PURE__ */ J('<span class="source-selection svelte-5d261r" data-testid="source-select"><!> <!> <!> <!> <!></span>');
function oh(n, e) {
  We(e, !0);
  var t = this && this.__awaiter || function(h, f, g, m) {
    function p(v) {
      return v instanceof g ? v : new g(function(b) {
        b(v);
      });
    }
    return new (g || (g = Promise))(function(v, b) {
      function _(A) {
        try {
          T(m.next(A));
        } catch (S) {
          b(S);
        }
      }
      function E(A) {
        try {
          T(m.throw(A));
        } catch (S) {
          b(S);
        }
      }
      function T(A) {
        A.done ? v(A.value) : p(A.value).then(_, E);
      }
      T((m = m.apply(h, f || [])).next());
    });
  };
  let i = R(e, "active_source", 15), s = R(e, "handle_clear", 3, () => {
  }), r = R(e, "handle_select", 3, () => {
  }), a = he(() => [...new Set(e.sources)]);
  function o(h) {
    return t(this, void 0, void 0, function* () {
      s()(), i(h), r()(h);
    });
  }
  var l = Ne(), c = ve(l);
  {
    var d = (h) => {
      var f = ah(), g = j(f);
      {
        var m = (F) => {
          var D = th();
          let U;
          var G = j(D);
          $o(G), re(() => U = Ge(D, 1, "icon svelte-5d261r", null, U, { selected: i() === "upload" || !i() })), Oe("click", D, () => o("upload")), M(F, D);
        }, p = he(() => e.sources.includes("upload"));
        X(g, (F) => {
          y(p) && F(m);
        });
      }
      var v = z(g, 2);
      {
        var b = (F) => {
          var D = ih();
          let U;
          var G = j(D);
          Lu(G), re(() => U = Ge(D, 1, "icon svelte-5d261r", null, U, { selected: i() === "microphone" })), Oe("click", D, () => o("microphone")), M(F, D);
        }, _ = he(() => e.sources.includes("microphone"));
        X(v, (F) => {
          y(_) && F(b);
        });
      }
      var E = z(v, 2);
      {
        var T = (F) => {
          var D = sh();
          let U;
          var G = j(D);
          Wu(G), re(() => U = Ge(D, 1, "icon svelte-5d261r", null, U, { selected: i() === "webcam" })), Oe("click", D, () => o("webcam")), M(F, D);
        }, A = he(() => e.sources.includes("webcam"));
        X(E, (F) => {
          y(A) && F(T);
        });
      }
      var S = z(E, 2);
      {
        var w = (F) => {
          var D = rh();
          let U;
          var G = j(D);
          Fu(G), re(() => U = Ge(D, 1, "icon svelte-5d261r", null, U, { selected: i() === "webcam-video" })), Oe("click", D, () => o("webcam-video")), M(F, D);
        }, C = he(() => e.sources.includes("webcam-video"));
        X(S, (F) => {
          y(C) && F(w);
        });
      }
      var L = z(S, 2);
      {
        var I = (F) => {
          var D = nh();
          let U;
          var G = j(D);
          Qo(G), re(() => U = Ge(D, 1, "icon svelte-5d261r", null, U, { selected: i() === "clipboard" })), Oe("click", D, () => o("clipboard")), M(F, D);
        }, K = he(() => e.sources.includes("clipboard"));
        X(L, (F) => {
          y(K) && F(I);
        });
      }
      M(h, f);
    }, u = he(() => y(a).length > 1 || e.sources.includes("clipboard"));
    X(c, (h) => {
      y(u) && h(d);
    });
  }
  M(n, l), je();
}
Et(["click"]);
var lh = /* @__PURE__ */ J('<span class="custom-button-label svelte-g7x491"> </span>'), ch = /* @__PURE__ */ J('<button class="custom-button svelte-g7x491"><!></button>');
function tl(n, e) {
  We(e, !1);
  let t = R(e, "button", 8), i = R(e, "on_click", 8);
  Js();
  var s = ch(), r = j(s);
  {
    var a = (o) => {
      var l = lh(), c = j(l);
      re(() => Ee(c, (Je(t()), Ue(() => t().value)))), M(o, l);
    };
    X(r, (o) => {
      Je(t()), Ue(() => t().value) && o(a);
    });
  }
  re(() => {
    $e(s, "title", (Je(t()), Ue(() => t().value || ""))), $e(s, "aria-label", (Je(t()), Ue(() => t().value || "Custom action")));
  }), Li("click", s, () => i()(t().id)), M(n, s), je();
}
var dh = /* @__PURE__ */ J("<div><!> <!></div>");
function il(n, e) {
  We(e, !0);
  let t = R(e, "top_panel", 3, !0), i = R(e, "display_top_corner", 3, !1), s = R(e, "show_background", 3, !0), r = R(e, "buttons", 3, null), a = R(e, "on_custom_button_click", 3, null);
  var o = dh(), l = j(o);
  {
    var c = (h) => {
      var f = Ne(), g = ve(f);
      Ci(g, () => e.children), M(h, f);
    };
    X(l, (h) => {
      e.children && h(c);
    });
  }
  var d = z(l, 2);
  {
    var u = (h) => {
      var f = Ne(), g = ve(f);
      Ft(g, 17, r, ei, (m, p) => {
        var v = Ne(), b = ve(v);
        {
          var _ = (E) => {
            tl(E, {
              get button() {
                return y(p);
              },
              on_click: (T) => {
                a() && a()(T);
              }
            });
          };
          X(b, (E) => {
            typeof y(p) != "string" && E(_);
          });
        }
        M(m, v);
      }), M(h, f);
    };
    X(d, (h) => {
      r() && h(u);
    });
  }
  re(() => Ge(o, 1, `icon-button-wrapper ${t() ? "top-panel" : ""} ${i() ? "display-top-corner" : "hide-top-corner"} ${s() ? "" : "no-background"}`, "svelte-1f7yqtk")), M(n, o), je();
}
var uh = function(n, e, t, i) {
  function s(r) {
    return r instanceof t ? r : new t(function(a) {
      a(r);
    });
  }
  return new (t || (t = Promise))(function(r, a) {
    function o(d) {
      try {
        c(i.next(d));
      } catch (u) {
        a(u);
      }
    }
    function l(d) {
      try {
        c(i.throw(d));
      } catch (u) {
        a(u);
      }
    }
    function c(d) {
      d.done ? r(d.value) : s(d.value).then(o, l);
    }
    c((i = i.apply(n, e || [])).next());
  });
};
let ns = [], ur = !1;
const hh = typeof window < "u", sl = hh ? window.requestAnimationFrame : (n) => {
}, ra = /* @__PURE__ */ new Set();
function fh(n) {
  return uh(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (ns.push(e), !ur) ur = !0;
      else return;
      yield fn(), sl(() => {
        let i = [0, 0];
        for (let s = 0; s < ns.length; s++) {
          const a = ns[s].getBoundingClientRect();
          (s === 0 || a.top + window.scrollY <= i[0]) && (i[0] = a.top + window.scrollY, i[1] = s);
        }
        window.scrollTo({ top: i[0] - 20, behavior: "smooth" }), ur = !1, ns = [];
      });
    }
  });
}
var gh = /* @__PURE__ */ J('<div class="validation-error svelte-124hqw6"> <button class="svelte-124hqw6"><!></button></div>'), mh = /* @__PURE__ */ J('<div class="eta-bar svelte-124hqw6"></div>'), ph = /* @__PURE__ */ J("<!> ", 1), vh = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), yh = /* @__PURE__ */ J('<div class="progress-level svelte-124hqw6"><div class="progress-level-inner svelte-124hqw6"><!></div> <div class="progress-bar-wrap svelte-124hqw6"><div class="progress-bar svelte-124hqw6"></div></div></div>'), xh = /* @__PURE__ */ J('<p class="loading svelte-124hqw6"> </p> <!>', 1), Eh = /* @__PURE__ */ J("<!> <div><!> <!></div> <!> <!>", 1), Th = /* @__PURE__ */ J('<div class="clear-status svelte-124hqw6"><!></div> <span class="error svelte-124hqw6"> </span> <!>', 1), bh = /* @__PURE__ */ J("<div> <!> </div>"), _h = /* @__PURE__ */ J('<div data-testid="status-tracker"><!> <!></div> <!>', 1);
function na(n, e) {
  We(e, !0);
  let t = R(e, "eta", 3, null), i = R(e, "component_id", 3, null), s = R(e, "fn_index", 3, null), r = R(e, "scroll_to_output", 3, !1), a = R(e, "timer", 3, !0), o = R(e, "show_progress", 3, "full"), l = R(e, "message", 3, null), c = R(e, "progress", 3, null), d = R(e, "variant", 3, "default"), u = R(e, "loading_text", 3, "Loading..."), h = R(e, "absolute", 3, !0), f = R(e, "translucent", 3, !1), g = R(e, "border", 3, !1), m = R(e, "validation_error", 7, null), p = R(e, "show_validation_error", 3, !0), v = R(e, "type", 3, null), b = R(e, "used_cache", 3, null), _ = R(e, "cache_duration", 3, null), E = R(e, "avg_time", 3, null), T = R(e, "cache_event_id", 3, null), A, S = !1, w = fe(0), C = fe(null), L = fe(null), I = fe(!1), K = fe(null), F = fe(!1), D = fe(!1), U = fe(null), G = fe(null), ee = fe("from cache"), oe = fe(!1), H = null, B = null, O = null;
  function Y() {
    H && clearTimeout(H), B && clearTimeout(B), H = null, B = null, W(F, !1), W(D, !1);
  }
  const q = he(() => !(p() && m()) && (v() === "input" || !e.status || e.status === "complete" || o() === "hidden" || e.status == "streaming"));
  let le = fe(0);
  const te = he(() => y(L) === null || y(L) <= 0 || !y(le) ? 0 : Math.min(y(le) / y(L), 1)), ge = he(() => y(le).toFixed(1));
  let Q = he(() => c() == null), ie = he(() => t() !== null && t() !== void 0 ? t() : y(C));
  function ce() {
    sl(() => {
      W(le, (performance.now() - y(w)) / 1e3), S && ce();
    });
  }
  let Z = he(() => {
    let ue = null;
    c() != null ? ue = c().map((ze) => {
      if (ze.index != null && ze.length != null)
        return ze.index / ze.length;
      if (ze.progress != null)
        return ze.progress;
    }) : ue = null;
    let Se, ke = "";
    return ue ? (Se = ue[ue.length - 1], Se === 0 ? ke = "0" : ke = "150ms") : Se = void 0, {
      progress_level: ue,
      last_progress_level: Se,
      progress_bar_transition: ke
    };
  });
  function _e() {
    S || (W(C, W(K, null), !0), W(w, performance.now(), !0), S = !0, ce());
  }
  function Ie() {
    W(C, W(K, null), !0), S && (S = !1);
  }
  Le(() => {
    e.status === "pending" ? _e() : Ue(() => {
      Ie();
    });
  }), Le(() => {
    A && r() && (e.status === "pending" || e.status === "complete") && fh(A, e.autoscroll);
  }), Le(() => {
    y(ie) != null && y(C) !== y(ie) && (W(L, (performance.now() - y(w)) / 1e3 + y(ie)), W(K, y(L).toFixed(1), !0), W(C, y(ie), !0));
  });
  function De() {
    W(I, !1);
  }
  Le(() => {
    Ue(() => {
      De();
    }), e.status === "error" && l() && W(I, !0);
  }), Le(() => {
    var ue;
    if (e.status === "complete" && v() === "output" && b() && _() != null) {
      const Se = T() == null ? null : `${(ue = i() !== null && i() !== void 0 ? i() : s()) !== null && ue !== void 0 ? ue : "unknown"}:${s() !== null && s() !== void 0 ? s() : "unknown"}:${T()}`;
      if (Se === O || Se != null && ra.has(Se))
        return;
      O = Se, Se != null && ra.add(Se), W(U, _().toFixed(1), !0), W(ee, b() === "full" ? "from cache" : "used cache", !0), W(oe, E() != null && E() > _() && E() > 0, !0), W(G, y(oe) ? E().toFixed(1) : null, !0), W(F, !0), W(D, !1), H && clearTimeout(H), B && clearTimeout(B), H = setTimeout(
        () => {
          W(D, !0), B = setTimeout(
            () => {
              W(F, !1), W(D, !1);
            },
            500
          );
        },
        1750
      );
    } else v() === "output" && !b() && Y();
  });
  var de = _h(), ne = ve(de);
  let $, se;
  var we = j(ne);
  {
    var He = (ue) => {
      var Se = gh(), ke = j(Se), ze = z(ke), Re = j(ze);
      {
        let Pe = he(() => e.i18n ? e.i18n("common.clear") : "Clear");
        Jt(Re, {
          get Icon() {
            return Wr;
          },
          get label() {
            return y(Pe);
          },
          disabled: !1,
          size: "x-small",
          background: "var(--background-fill-primary)",
          color: "var(--error-background-text)",
          border: "var(--border-color-primary)",
          onclick: () => m(null)
        });
      }
      re(() => Ee(ke, `${m() ?? ""} `)), M(ue, Se);
    };
    X(we, (ue) => {
      m() && p() && ue(He);
    });
  }
  var ye = z(we, 2);
  {
    var be = (ue) => {
      var Se = Eh(), ke = ve(Se);
      {
        var ze = (Fe) => {
          var Ye = mh();
          let ht;
          re(() => ht = tt(Ye, "", ht, {
            transform: `translateX(${(y(te) || 0) * 100 - 100}%)`
          })), M(Fe, Ye);
        };
        X(ke, (Fe) => {
          d() === "default" && y(Q) && o() === "full" && Fe(ze);
        });
      }
      var Re = z(ke, 2);
      let Pe;
      var qe = j(Re);
      {
        var st = (Fe) => {
          var Ye = Ne(), ht = ve(Ye);
          Ft(ht, 17, c, ei, (gi, Ct) => {
            var ts = Ne(), rr = ve(ts);
            {
              var is = (ti) => {
                var Ni = ph(), ss = ve(Ni);
                {
                  var nr = (Ht) => {
                    var ii = Dt();
                    re((Bi, Ui) => Ee(ii, `${Bi ?? ""}/${Ui ?? ""}`), [
                      () => dr(y(Ct).index || 0),
                      () => dr(y(Ct).length)
                    ]), M(Ht, ii);
                  }, mi = (Ht) => {
                    var ii = Dt();
                    re((Bi) => Ee(ii, Bi), [() => dr(y(Ct).index || 0)]), M(Ht, ii);
                  };
                  X(ss, (Ht) => {
                    y(Ct).length != null ? Ht(nr) : Ht(mi, -1);
                  });
                }
                var pi = z(ss);
                re(() => Ee(pi, ` ${y(Ct).unit ?? ""} |  `)), M(ti, Ni);
              };
              X(rr, (ti) => {
                y(Ct).index != null && ti(is);
              });
            }
            M(gi, ts);
          }), M(Fe, Ye);
        }, Rt = (Fe) => {
          var Ye = Dt();
          re(() => Ee(Ye, `queue: ${e.queue_position + 1}/${e.queue_size ?? ""} |`)), M(Fe, Ye);
        }, It = (Fe) => {
          var Ye = Dt("processing |");
          M(Fe, Ye);
        };
        X(qe, (Fe) => {
          c() ? Fe(st) : e.queue_position !== null && e.queue_size !== void 0 && e.queue_position >= 0 ? Fe(Rt, 1) : e.queue_position === 0 && Fe(It, 2);
        });
      }
      var $i = z(qe, 2);
      {
        var tr = (Fe) => {
          var Ye = Dt();
          re(() => Ee(Ye, `${y(ge) ?? ""}${t() ? `/${y(K)}` : ""}s`)), M(Fe, Ye);
        };
        X($i, (Fe) => {
          a() && Fe(tr);
        });
      }
      var es = z(Re, 2);
      {
        var ir = (Fe) => {
          var Ye = yh(), ht = j(Ye), gi = j(ht);
          {
            var Ct = (ti) => {
              var Ni = Ne(), ss = ve(Ni);
              Ft(ss, 17, c, ei, (nr, mi, pi) => {
                var Ht = Ne(), ii = ve(Ht);
                {
                  var Bi = (Ui) => {
                    var On = vh(), Mn = ve(On);
                    {
                      var _c = (ut) => {
                        var Vt = Dt(" /");
                        M(ut, Vt);
                      };
                      X(Mn, (ut) => {
                        pi !== 0 && ut(_c);
                      });
                    }
                    var Fn = z(Mn, 2);
                    {
                      var Sc = (ut) => {
                        var Vt = Dt();
                        re(() => Ee(Vt, y(mi).desc)), M(ut, Vt);
                      };
                      X(Fn, (ut) => {
                        y(mi).desc != null && ut(Sc);
                      });
                    }
                    var Nn = z(Fn, 2);
                    {
                      var Ac = (ut) => {
                        var Vt = Dt("-");
                        M(ut, Vt);
                      };
                      X(Nn, (ut) => {
                        y(mi).desc != null && y(Z).progress_level && y(Z).progress_level[pi] != null && ut(Ac);
                      });
                    }
                    var Lc = z(Nn, 2);
                    {
                      var wc = (ut) => {
                        var Vt = Dt();
                        re((Rc) => Ee(Vt, `${Rc ?? ""}%`), [
                          () => (100 * (y(Z).progress_level[pi] || 0)).toFixed(1)
                        ]), M(ut, Vt);
                      };
                      X(Lc, (ut) => {
                        y(Z).progress_level != null && ut(wc);
                      });
                    }
                    M(Ui, On);
                  };
                  X(ii, (Ui) => {
                    (y(mi).desc != null || y(Z).progress_level && y(Z).progress_level[pi] != null) && Ui(Bi);
                  });
                }
                M(nr, Ht);
              }), M(ti, Ni);
            };
            X(gi, (ti) => {
              c() != null && ti(Ct);
            });
          }
          var ts = z(ht, 2), rr = j(ts);
          let is;
          re(() => is = tt(rr, "", is, {
            width: `${y(Z).last_progress_level * 100}%`,
            transition: y(Z).progress_bar_transition
          })), M(Fe, Ye);
        }, qt = (Fe) => {
          {
            let Ye = he(() => d() === "default");
            ru(Fe, {
              get margin() {
                return y(Ye);
              }
            });
          }
        };
        X(es, (Fe) => {
          y(Z).last_progress_level != null ? Fe(ir) : o() === "full" && Fe(qt, 1);
        });
      }
      var fi = z(es, 2);
      {
        var sr = (Fe) => {
          var Ye = xh(), ht = ve(Ye), gi = j(ht), Ct = z(ht, 2);
          Yi(Ct, e, "additional-loading-text", {}), re(() => Ee(gi, u())), M(Fe, Ye);
        };
        X(fi, (Fe) => {
          a() || Fe(sr);
        });
      }
      re(() => Pe = Ge(Re, 1, "progress-text svelte-124hqw6", null, Pe, {
        "meta-text-center": d() === "center",
        "meta-text": d() === "default"
      })), M(ue, Se);
    }, Ve = (ue) => {
      var Se = Th(), ke = ve(Se), ze = j(ke);
      {
        let st = he(() => e.i18n("common.clear"));
        Jt(ze, {
          get Icon() {
            return Wr;
          },
          get label() {
            return y(st);
          },
          disabled: !1,
          onclick: () => {
            e.on_clear_status?.();
          }
        });
      }
      var Re = z(ke, 2), Pe = j(Re), qe = z(Re, 2);
      Yi(qe, e, "error", {}), re((st) => Ee(Pe, st), [() => e.i18n("common.error")]), M(ue, Se);
    };
    X(ye, (ue) => {
      e.status === "pending" ? ue(be) : e.status === "error" && ue(Ve, 1);
    });
  }
  et(ne, (ue) => A = ue, () => A);
  var Ae = z(ne, 2);
  {
    var Ce = (ue) => {
      var Se = bh();
      let ke, ze;
      var Re = j(Se), Pe = z(Re);
      {
        var qe = (Rt) => {
          var It = Dt();
          re(() => Ee(It, `~${y(G) ?? ""}s
			→ `)), M(Rt, It);
        };
        X(Pe, (Rt) => {
          y(oe) && Rt(qe);
        });
      }
      var st = z(Pe);
      re(() => {
        ke = Ge(Se, 1, "cache-indicator svelte-124hqw6", null, ke, { "fade-out": y(D) }), ze = tt(Se, "", ze, { position: h() ? "absolute" : "static" }), Ee(Re, `⚡ ${y(ee) ?? ""}: `), Ee(st, `${y(U) ?? ""}s`);
      }), M(ue, Se);
    };
    X(Ae, (ue) => {
      y(F) && ue(Ce);
    });
  }
  re(() => {
    $ = Ge(ne, 1, `wrap ${d() ?? ""} ${o() ?? ""}`, "svelte-124hqw6", $, {
      "no-click": m() && p(),
      hide: y(q),
      translucent: d() === "center" && (e.status === "pending" || e.status === "error") || f() || o() === "minimal" || m(),
      generating: e.status === "generating" && o() === "full",
      border: g()
    }), se = tt(ne, "", se, {
      position: h() ? "absolute" : "static",
      padding: h() ? "0" : "var(--size-8) 0"
    });
  }), M(n, de), je();
}
const Sh = (n) => {
  const e = {};
  for (let t = 0, i = n.length; t < i; t++) {
    const s = n[t];
    for (const r in s)
      e[r] ? e[r] = e[r].concat(s[r]) : e[r] = s[r];
  }
  return e;
}, Ah = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], Lh = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], wh = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
];
Sh([
  Object.fromEntries(Ah.map((n) => [n, ["*"]])),
  Object.fromEntries(Lh.map((n) => [n, ["svg:*"]])),
  Object.fromEntries(wh.map((n) => [n, ["math:*"]]))
]);
Et(["touchstart", "touchmove", "touchend", "click", "keydown"]);
var Rh = /* @__PURE__ */ J('<div class="streaming-bar svelte-xj6qzf"></div>');
function Ih(n, e) {
  var t = Ne(), i = ve(t);
  {
    var s = (r) => {
      var a = Rh();
      let o;
      re(() => o = tt(a, "", o, { "animation-duration": `${e.time_limit ?? ""}s` })), M(r, a);
    };
    X(i, (r) => {
      e.time_limit && r(s);
    });
  }
  M(n, t);
}
function ct(n, e, t, i) {
  return new (t || (t = Promise))((function(s, r) {
    function a(c) {
      try {
        l(i.next(c));
      } catch (d) {
        r(d);
      }
    }
    function o(c) {
      try {
        l(i.throw(c));
      } catch (d) {
        r(d);
      }
    }
    function l(c) {
      var d;
      c.done ? s(c.value) : (d = c.value, d instanceof t ? d : new t((function(u) {
        u(d);
      }))).then(a, o);
    }
    l((i = i.apply(n, e || [])).next());
  }));
}
let Zi = class {
  constructor() {
    this.listeners = {};
  }
  on(e, t, i) {
    if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), i?.once) {
      const s = (...r) => {
        this.un(e, s), t(...r);
      };
      return this.listeners[e].add(s), () => this.un(e, s);
    }
    return this.listeners[e].add(t), () => this.un(e, t);
  }
  un(e, t) {
    var i;
    (i = this.listeners[e]) === null || i === void 0 || i.delete(t);
  }
  once(e, t) {
    return this.on(e, t, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(e, ...t) {
    this.listeners[e] && this.listeners[e].forEach(((i) => i(...t)));
  }
};
const as = { decode: function(n, e) {
  return ct(this, void 0, void 0, (function* () {
    const t = new AudioContext({ sampleRate: e });
    try {
      return yield t.decodeAudioData(n);
    } finally {
      t.close();
    }
  }));
}, createBuffer: function(n, e) {
  if (!n || n.length === 0) throw new Error("channelData must be a non-empty array");
  if (e <= 0) throw new Error("duration must be greater than 0");
  if (typeof n[0] == "number" && (n = [n]), !n[0] || n[0].length === 0) throw new Error("channelData must contain non-empty channel arrays");
  return (function(t) {
    const i = t[0];
    if (i.some(((s) => s > 1 || s < -1))) {
      const s = i.length;
      let r = 0;
      for (let a = 0; a < s; a++) {
        const o = Math.abs(i[a]);
        o > r && (r = o);
      }
      for (const a of t) for (let o = 0; o < s; o++) a[o] /= r;
    }
  })(n), { duration: e, length: n[0].length, sampleRate: n[0].length / e, numberOfChannels: n.length, getChannelData: (t) => n?.[t], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function rl(n, e) {
  const t = e.xmlns ? document.createElementNS(e.xmlns, n) : document.createElement(n);
  for (const [i, s] of Object.entries(e)) if (i === "children" && s) for (const [r, a] of Object.entries(s)) a instanceof Node ? t.appendChild(a) : typeof a == "string" ? t.appendChild(document.createTextNode(a)) : t.appendChild(rl(r, a));
  else i === "style" ? Object.assign(t.style, s) : i === "textContent" ? t.textContent = s : t.setAttribute(i, s.toString());
  return t;
}
function aa(n, e, t) {
  const i = rl(n, e || {});
  return t?.appendChild(i), i;
}
var Ch = Object.freeze({ __proto__: null, createElement: aa, default: aa });
const Dh = { fetchBlob: function(n, e, t) {
  return ct(this, void 0, void 0, (function* () {
    const i = yield fetch(n, t);
    if (i.status >= 400) throw new Error(`Failed to fetch ${n}: ${i.status} (${i.statusText})`);
    return (function(s, r) {
      ct(this, void 0, void 0, (function* () {
        if (!s.body || !s.headers) return;
        const a = s.body.getReader(), o = Number(s.headers.get("Content-Length")) || 0;
        let l = 0, c = 0;
        const d = (h) => ct(this, void 0, void 0, (function* () {
          l += h?.length || 0;
          const f = Math.round(l / o * 100);
          r(f);
        })), u = () => ct(this, void 0, void 0, (function* () {
          if (c++ > 1e5) return void console.error("Fetcher: Maximum iterations reached, stopping read loop");
          let h;
          try {
            h = yield a.read();
          } catch {
            return;
          }
          h.done || (d(h.value), yield u());
        }));
        u();
      }));
    })(i.clone(), e), i.blob();
  }));
} };
class kh extends Zi {
  constructor(e) {
    super(), this.isExternalMedia = !1, e.media ? (this.media = e.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), e.mediaControls && (this.media.controls = !0), e.autoplay && (this.media.autoplay = !0), e.playbackRate != null && this.onMediaEvent("canplay", (() => {
      e.playbackRate != null && (this.media.playbackRate = e.playbackRate);
    }), { once: !0 });
  }
  onMediaEvent(e, t, i) {
    return this.media.addEventListener(e, t, i), () => this.media.removeEventListener(e, t, i);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const e = this.getSrc();
    e.startsWith("blob:") && URL.revokeObjectURL(e);
  }
  canPlayType(e) {
    return this.media.canPlayType(e) !== "";
  }
  setSrc(e, t) {
    const i = this.getSrc();
    if (e && i === e) return;
    this.revokeSrc();
    const s = t instanceof Blob && (this.canPlayType(t.type) || !e) ? URL.createObjectURL(t) : e;
    if (i && this.media.removeAttribute("src"), s || e) try {
      this.media.src = s;
    } catch {
      this.media.src = e;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load(), this.media.remove());
  }
  setMediaElement(e) {
    this.media = e;
  }
  play() {
    return ct(this, void 0, void 0, (function* () {
      try {
        return yield this.media.play();
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        throw e;
      }
    }));
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(e) {
    this.media.currentTime = Math.max(0, Math.min(e, this.getDuration()));
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(e) {
    this.media.volume = e;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(e) {
    this.media.muted = e;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(e, t) {
    t != null && (this.media.preservesPitch = t), this.media.playbackRate = e;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(e) {
    return this.media.setSinkId(e);
  }
}
class Di extends Zi {
  constructor(e, t) {
    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.dragUnsubscribe = null, this.subscriptions = [], this.options = e;
    const i = this.parentFromOptionsContainer(e.container);
    this.parent = i;
    const [s, r] = this.initHtml();
    i.appendChild(s), this.container = s, this.scrollContainer = r.querySelector(".scroll"), this.wrapper = r.querySelector(".wrapper"), this.canvasWrapper = r.querySelector(".canvases"), this.progressWrapper = r.querySelector(".progress"), this.cursor = r.querySelector(".cursor"), t && r.appendChild(t), this.initEvents();
  }
  parentFromOptionsContainer(e) {
    let t;
    if (typeof e == "string" ? t = document.querySelector(e) : e instanceof HTMLElement && (t = e), !t) throw new Error("Container not found");
    return t;
  }
  initEvents() {
    const e = (t) => {
      const i = this.wrapper.getBoundingClientRect(), s = t.clientX - i.left, r = t.clientY - i.top;
      return [s / i.width, r / i.height];
    };
    if (this.wrapper.addEventListener("click", ((t) => {
      const [i, s] = e(t);
      this.emit("click", i, s);
    })), this.wrapper.addEventListener("dblclick", ((t) => {
      const [i, s] = e(t);
      this.emit("dblclick", i, s);
    })), this.options.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.scrollContainer.addEventListener("scroll", (() => {
      const { scrollLeft: t, scrollWidth: i, clientWidth: s } = this.scrollContainer, r = t / i, a = (t + s) / i;
      this.emit("scroll", r, a, t, t + s);
    })), typeof ResizeObserver == "function") {
      const t = this.createDelay(100);
      this.resizeObserver = new ResizeObserver((() => {
        t().then((() => this.onContainerResize())).catch((() => {
        }));
      })), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const e = this.parent.clientWidth;
    e === this.lastContainerWidth && this.options.height !== "auto" || (this.lastContainerWidth = e, this.reRender());
  }
  initDrag() {
    this.dragUnsubscribe || (this.dragUnsubscribe = (function(e, t, i, s, r = 3, a = 0, o = 100) {
      if (!e) return () => {
      };
      const l = matchMedia("(pointer: coarse)").matches;
      let c = () => {
      };
      const d = (u) => {
        if (u.button !== a) return;
        u.preventDefault(), u.stopPropagation();
        let h = u.clientX, f = u.clientY, g = !1;
        const m = Date.now(), p = (T) => {
          if (T.preventDefault(), T.stopPropagation(), l && Date.now() - m < o) return;
          const A = T.clientX, S = T.clientY, w = A - h, C = S - f;
          if (g || Math.abs(w) > r || Math.abs(C) > r) {
            const L = e.getBoundingClientRect(), { left: I, top: K } = L;
            g || (i?.(h - I, f - K), g = !0), t(w, C, A - I, S - K), h = A, f = S;
          }
        }, v = (T) => {
          if (g) {
            const A = T.clientX, S = T.clientY, w = e.getBoundingClientRect(), { left: C, top: L } = w;
            s?.(A - C, S - L);
          }
          c();
        }, b = (T) => {
          T.relatedTarget && T.relatedTarget !== document.documentElement || v(T);
        }, _ = (T) => {
          g && (T.stopPropagation(), T.preventDefault());
        }, E = (T) => {
          g && T.preventDefault();
        };
        document.addEventListener("pointermove", p), document.addEventListener("pointerup", v), document.addEventListener("pointerout", b), document.addEventListener("pointercancel", b), document.addEventListener("touchmove", E, { passive: !1 }), document.addEventListener("click", _, { capture: !0 }), c = () => {
          document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", v), document.removeEventListener("pointerout", b), document.removeEventListener("pointercancel", b), document.removeEventListener("touchmove", E), setTimeout((() => {
            document.removeEventListener("click", _, { capture: !0 });
          }), 10);
        };
      };
      return e.addEventListener("pointerdown", d), () => {
        c(), e.removeEventListener("pointerdown", d);
      };
    })(this.wrapper, ((e, t, i) => {
      this.emit("drag", Math.max(0, Math.min(1, i / this.wrapper.getBoundingClientRect().width)));
    }), ((e) => {
      this.isDragging = !0, this.emit("dragstart", Math.max(0, Math.min(1, e / this.wrapper.getBoundingClientRect().width)));
    }), ((e) => {
      this.isDragging = !1, this.emit("dragend", Math.max(0, Math.min(1, e / this.wrapper.getBoundingClientRect().width)));
    })), this.subscriptions.push(this.dragUnsubscribe));
  }
  getHeight(e, t) {
    var i;
    const s = ((i = this.audioData) === null || i === void 0 ? void 0 : i.numberOfChannels) || 1;
    if (e == null) return 128;
    if (!isNaN(Number(e))) return Number(e);
    if (e === "auto") {
      const r = this.parent.clientHeight || 128;
      return t?.every(((a) => !a.overlay)) ? r / s : r;
    }
    return 128;
  }
  initHtml() {
    const e = document.createElement("div"), t = e.attachShadow({ mode: "open" }), i = this.options.cspNonce && typeof this.options.cspNonce == "string" ? this.options.cspNonce.replace(/"/g, "") : "";
    return t.innerHTML = `
      <style${i ? ` nonce="${i}"` : ""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [e, t];
  }
  setOptions(e) {
    if (this.options.container !== e.container) {
      const t = this.parentFromOptionsContainer(e.container);
      t.appendChild(this.container), this.parent = t;
    }
    e.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.options = e, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(e) {
    this.scrollContainer.scrollLeft = e;
  }
  setScrollPercentage(e) {
    const { scrollWidth: t } = this.scrollContainer, i = t * e;
    this.setScroll(i);
  }
  destroy() {
    var e;
    this.subscriptions.forEach(((t) => t())), this.container.remove(), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), (e = this.unsubscribeOnScroll) === null || e === void 0 || e.forEach(((t) => t())), this.unsubscribeOnScroll = [];
  }
  createDelay(e = 10) {
    let t, i;
    const s = () => {
      t && (clearTimeout(t), t = void 0), i && (i(), i = void 0);
    };
    return this.timeouts.push(s), () => new Promise(((r, a) => {
      s(), i = a, t = setTimeout((() => {
        t = void 0, i = void 0, r();
      }), e);
    }));
  }
  convertColorValues(e) {
    if (!Array.isArray(e)) return e || "";
    if (e.length === 0) return "#999";
    if (e.length < 2) return e[0] || "";
    const t = document.createElement("canvas"), i = t.getContext("2d"), s = t.height * (window.devicePixelRatio || 1), r = i.createLinearGradient(0, 0, 0, s), a = 1 / (e.length - 1);
    return e.forEach(((o, l) => {
      const c = l * a;
      r.addColorStop(c, o);
    })), r;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(e, t, i, s) {
    const r = e[0], a = e[1] || e[0], o = r.length, { width: l, height: c } = i.canvas, d = c / 2, u = this.getPixelRatio(), h = t.barWidth ? t.barWidth * u : 1, f = t.barGap ? t.barGap * u : t.barWidth ? h / 2 : 0, g = t.barRadius || 0, m = l / (h + f) / o, p = g && "roundRect" in i ? "roundRect" : "rect";
    i.beginPath();
    let v = 0, b = 0, _ = 0;
    for (let E = 0; E <= o; E++) {
      const T = Math.round(E * m);
      if (T > v) {
        const w = Math.round(b * d * s), C = w + Math.round(_ * d * s) || 1;
        let L = d - w;
        t.barAlign === "top" ? L = 0 : t.barAlign === "bottom" && (L = c - C), i[p](v * (h + f), L, h, C, g), v = T, b = 0, _ = 0;
      }
      const A = Math.abs(r[E] || 0), S = Math.abs(a[E] || 0);
      A > b && (b = A), S > _ && (_ = S);
    }
    i.fill(), i.closePath();
  }
  renderLineWaveform(e, t, i, s) {
    const r = (a) => {
      const o = e[a] || e[0], l = o.length, { height: c } = i.canvas, d = c / 2, u = i.canvas.width / l;
      i.moveTo(0, d);
      let h = 0, f = 0;
      for (let g = 0; g <= l; g++) {
        const m = Math.round(g * u);
        if (m > h) {
          const v = d + (Math.round(f * d * s) || 1) * (a === 0 ? -1 : 1);
          i.lineTo(h, v), h = m, f = 0;
        }
        const p = Math.abs(o[g] || 0);
        p > f && (f = p);
      }
      i.lineTo(h, d);
    };
    i.beginPath(), r(0), r(1), i.fill(), i.closePath();
  }
  renderWaveform(e, t, i) {
    if (i.fillStyle = this.convertColorValues(t.waveColor), t.renderFunction) return void t.renderFunction(e, i);
    let s = t.barHeight || 1;
    if (t.normalize) {
      const r = Array.from(e[0]).reduce(((a, o) => Math.max(a, Math.abs(o))), 0);
      s = r ? s / r : s;
    }
    t.barWidth || t.barGap || t.barAlign ? this.renderBarWaveform(e, t, i, s) : this.renderLineWaveform(e, t, i, s);
  }
  renderSingleCanvas(e, t, i, s, r, a, o) {
    const l = this.getPixelRatio(), c = document.createElement("canvas");
    c.width = Math.round(i * l), c.height = Math.round(s * l), c.style.width = `${i}px`, c.style.height = `${s}px`, c.style.left = `${Math.round(r)}px`, a.appendChild(c);
    const d = c.getContext("2d");
    if (this.renderWaveform(e, t, d), c.width > 0 && c.height > 0) {
      const u = c.cloneNode(), h = u.getContext("2d");
      h.drawImage(c, 0, 0), h.globalCompositeOperation = "source-in", h.fillStyle = this.convertColorValues(t.progressColor), h.fillRect(0, 0, c.width, c.height), o.appendChild(u);
    }
  }
  renderMultiCanvas(e, t, i, s, r, a) {
    const o = this.getPixelRatio(), { clientWidth: l } = this.scrollContainer, c = i / o;
    let d = Math.min(Di.MAX_CANVAS_WIDTH, l, c), u = {};
    if (t.barWidth || t.barGap) {
      const p = t.barWidth || 0.5, v = p + (t.barGap || p / 2);
      d % v != 0 && (d = Math.floor(d / v) * v);
    }
    if (d === 0) return;
    const h = (p) => {
      if (p < 0 || p >= f || u[p]) return;
      u[p] = !0;
      const v = p * d;
      let b = Math.min(c - v, d);
      if (t.barWidth || t.barGap) {
        const E = t.barWidth || 0.5, T = E + (t.barGap || E / 2);
        b = Math.floor(b / T) * T;
      }
      if (b <= 0) return;
      const _ = e.map(((E) => {
        const T = Math.floor(v / c * E.length), A = Math.floor((v + b) / c * E.length);
        return E.slice(T, A);
      }));
      this.renderSingleCanvas(_, t, b, s, v, r, a);
    }, f = Math.ceil(c / d);
    if (!this.isScrollable) {
      for (let p = 0; p < f; p++) h(p);
      return;
    }
    const g = this.scrollContainer.scrollLeft / c, m = Math.floor(g * f);
    if (h(m - 1), h(m), h(m + 1), f > 1) {
      const p = this.on("scroll", (() => {
        const { scrollLeft: v } = this.scrollContainer, b = Math.floor(v / c * f);
        Object.keys(u).length > Di.MAX_NODES && (r.innerHTML = "", a.innerHTML = "", u = {}), h(b - 1), h(b), h(b + 1);
      }));
      this.unsubscribeOnScroll.push(p);
    }
  }
  renderChannel(e, t, i, s) {
    var { overlay: r } = t, a = (function(d, u) {
      var h = {};
      for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && u.indexOf(f) < 0 && (h[f] = d[f]);
      if (d != null && typeof Object.getOwnPropertySymbols == "function") {
        var g = 0;
        for (f = Object.getOwnPropertySymbols(d); g < f.length; g++) u.indexOf(f[g]) < 0 && Object.prototype.propertyIsEnumerable.call(d, f[g]) && (h[f[g]] = d[f[g]]);
      }
      return h;
    })(t, ["overlay"]);
    const o = document.createElement("div"), l = this.getHeight(a.height, a.splitChannels);
    o.style.height = `${l}px`, r && s > 0 && (o.style.marginTop = `-${l}px`), this.canvasWrapper.style.minHeight = `${l}px`, this.canvasWrapper.appendChild(o);
    const c = o.cloneNode();
    this.progressWrapper.appendChild(c), this.renderMultiCanvas(e, a, i, l, o, c);
  }
  render(e) {
    return ct(this, void 0, void 0, (function* () {
      var t;
      this.timeouts.forEach(((l) => l())), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.options.width != null && (this.scrollContainer.style.width = typeof this.options.width == "number" ? `${this.options.width}px` : this.options.width);
      const i = this.getPixelRatio(), s = this.scrollContainer.clientWidth, r = Math.ceil(e.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = r > s;
      const a = this.options.fillParent && !this.isScrollable, o = (a ? s : r) * i;
      if (this.wrapper.style.width = a ? "100%" : `${r}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for (let l = 0; l < e.numberOfChannels; l++) {
        const c = Object.assign(Object.assign({}, this.options), (t = this.options.splitChannels) === null || t === void 0 ? void 0 : t[l]);
        this.renderChannel([e.getChannelData(l)], c, o, l);
      }
      else {
        const l = [e.getChannelData(0)];
        e.numberOfChannels > 1 && l.push(e.getChannelData(1)), this.renderChannel(l, this.options, o, 0);
      }
      Promise.resolve().then((() => this.emit("rendered")));
    }));
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach(((i) => i())), this.unsubscribeOnScroll = [], !this.audioData) return;
    const { scrollWidth: e } = this.scrollContainer, { right: t } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && e !== this.scrollContainer.scrollWidth) {
      const { right: i } = this.progressWrapper.getBoundingClientRect();
      let s = i - t;
      s *= 2, s = s < 0 ? Math.floor(s) : Math.ceil(s), s /= 2, this.scrollContainer.scrollLeft += s;
    }
  }
  zoom(e) {
    this.options.minPxPerSec = e, this.reRender();
  }
  scrollIntoView(e, t = !1) {
    const { scrollLeft: i, scrollWidth: s, clientWidth: r } = this.scrollContainer, a = e * s, o = i, l = i + r, c = r / 2;
    if (this.isDragging)
      a + 30 > l ? this.scrollContainer.scrollLeft += 30 : a - 30 < o && (this.scrollContainer.scrollLeft -= 30);
    else {
      (a < o || a > l) && (this.scrollContainer.scrollLeft = a - (this.options.autoCenter ? c : 0));
      const d = a - i - c;
      t && this.options.autoCenter && d > 0 && (this.scrollContainer.scrollLeft += Math.min(d, 10));
    }
    {
      const d = this.scrollContainer.scrollLeft, u = d / s, h = (d + r) / s;
      this.emit("scroll", u, h, d, d + r);
    }
  }
  renderProgress(e, t) {
    if (isNaN(e)) return;
    const i = 100 * e;
    this.canvasWrapper.style.clipPath = `polygon(${i}% 0%, 100% 0%, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = this.options.cursorWidth ? `translateX(-${e * this.options.cursorWidth}px)` : "", this.isScrollable && this.options.autoScroll && this.scrollIntoView(e, t);
  }
  exportImage(e, t, i) {
    return ct(this, void 0, void 0, (function* () {
      const s = this.canvasWrapper.querySelectorAll("canvas");
      if (!s.length) throw new Error("No waveform data");
      if (i === "dataURL") {
        const r = Array.from(s).map(((a) => a.toDataURL(e, t)));
        return Promise.resolve(r);
      }
      return Promise.all(Array.from(s).map(((r) => new Promise(((a, o) => {
        r.toBlob(((l) => {
          l ? a(l) : o(new Error("Could not export image"));
        }), e, t);
      })))));
    }));
  }
}
Di.MAX_CANVAS_WIDTH = 8e3, Di.MAX_NODES = 10;
class Ph extends Zi {
  constructor() {
    super(...arguments), this.animationFrameId = null, this.isRunning = !1;
  }
  start() {
    if (this.isRunning) return;
    this.isRunning = !0;
    const e = () => {
      this.isRunning && (this.emit("tick"), this.animationFrameId = requestAnimationFrame(e));
    };
    e();
  }
  stop() {
    this.isRunning = !1, this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
  }
  destroy() {
    this.stop();
  }
}
class hr extends Zi {
  constructor(e = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = e, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return ct(this, void 0, void 0, (function* () {
    }));
  }
  get src() {
    return this.currentSrc;
  }
  set src(e) {
    if (this.currentSrc = e, this._duration = void 0, !e) return this.buffer = null, void this.emit("emptied");
    fetch(e).then(((t) => {
      if (t.status >= 400) throw new Error(`Failed to fetch ${e}: ${t.status} (${t.statusText})`);
      return t.arrayBuffer();
    })).then(((t) => this.currentSrc !== e ? null : this.audioContext.decodeAudioData(t))).then(((t) => {
      this.currentSrc === e && (this.buffer = t, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    }));
  }
  _play() {
    if (!this.paused) return;
    this.paused = !1, this.bufferNode && (this.bufferNode.onended = null, this.bufferNode.disconnect()), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let e = this.playedDuration * this._playbackRate;
    (e >= this.duration || e < 0) && (e = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, e), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var e;
    this.paused = !0, (e = this.bufferNode) === null || e === void 0 || e.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return ct(this, void 0, void 0, (function* () {
      this.paused && (this._play(), this.emit("play"));
    }));
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(e) {
    const t = e - this.currentTime, i = this.bufferNode;
    i?.stop(this.audioContext.currentTime + t), i?.addEventListener("ended", (() => {
      i === this.bufferNode && (this.bufferNode = null, this.pause());
    }), { once: !0 });
  }
  setSinkId(e) {
    return ct(this, void 0, void 0, (function* () {
      return this.audioContext.setSinkId(e);
    }));
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(e) {
    this._playbackRate = e, this.bufferNode && (this.bufferNode.playbackRate.value = e);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(e) {
    const t = !this.paused;
    t && this._pause(), this.playedDuration = e / this._playbackRate, t && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var e, t;
    return (e = this._duration) !== null && e !== void 0 ? e : ((t = this.buffer) === null || t === void 0 ? void 0 : t.duration) || 0;
  }
  set duration(e) {
    this._duration = e;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(e) {
    this.gainNode.gain.value = e, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(e) {
    this._muted !== e && (this._muted = e, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(e) {
    return /^(audio|video)\//.test(e);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const e = [];
    if (!this.buffer) return e;
    const t = this.buffer.numberOfChannels;
    for (let i = 0; i < t; i++) e.push(this.buffer.getChannelData(i));
    return e;
  }
  removeAttribute(e) {
    switch (e) {
      case "src":
        this.src = "";
        break;
      case "playbackRate":
        this.playbackRate = 0;
        break;
      case "currentTime":
        this.currentTime = 0;
        break;
      case "duration":
        this.duration = 0;
        break;
      case "volume":
        this.volume = 0;
        break;
      case "muted":
        this.muted = !1;
    }
  }
}
const Oh = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class zt extends kh {
  static create(e) {
    return new zt(e);
  }
  constructor(e) {
    const t = e.media || (e.backend === "WebAudio" ? new hr() : void 0);
    super({ media: t, mediaControls: e.mediaControls, autoplay: e.autoplay, playbackRate: e.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, Oh, e), this.timer = new Ph();
    const i = t ? void 0 : this.getMediaElement();
    this.renderer = new Di(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const s = this.options.url || this.getSrc() || "";
    Promise.resolve().then((() => {
      this.emit("init");
      const { peaks: r, duration: a } = this.options;
      (s || r && a) && this.load(s, r, a).catch(((o) => {
        console.error("WaveSurfer initial load error:", o);
      }));
    }));
  }
  updateProgress(e = this.getCurrentTime()) {
    return this.renderer.renderProgress(e / this.getDuration(), this.isPlaying()), e;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", (() => {
      if (!this.isSeeking()) {
        const e = this.updateProgress();
        this.emit("timeupdate", e), this.emit("audioprocess", e), this.stopAtPosition != null && this.isPlaying() && e >= this.stopAtPosition && this.pause();
      }
    })));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", (() => {
      const e = this.updateProgress();
      this.emit("timeupdate", e);
    })), this.onMediaEvent("play", (() => {
      this.emit("play"), this.timer.start();
    })), this.onMediaEvent("pause", (() => {
      this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
    })), this.onMediaEvent("emptied", (() => {
      this.timer.stop(), this.stopAtPosition = null;
    })), this.onMediaEvent("ended", (() => {
      this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
    })), this.onMediaEvent("seeking", (() => {
      this.emit("seeking", this.getCurrentTime());
    })), this.onMediaEvent("error", (() => {
      var e;
      this.emit("error", (e = this.getMediaElement().error) !== null && e !== void 0 ? e : new Error("Media error")), this.stopAtPosition = null;
    })));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", ((e, t) => {
      this.options.interact && (this.seekTo(e), this.emit("interaction", e * this.getDuration()), this.emit("click", e, t));
    })), this.renderer.on("dblclick", ((e, t) => {
      this.emit("dblclick", e, t);
    })), this.renderer.on("scroll", ((e, t, i, s) => {
      const r = this.getDuration();
      this.emit("scroll", e * r, t * r, i, s);
    })), this.renderer.on("render", (() => {
      this.emit("redraw");
    })), this.renderer.on("rendered", (() => {
      this.emit("redrawcomplete");
    })), this.renderer.on("dragstart", ((e) => {
      this.emit("dragstart", e);
    })), this.renderer.on("dragend", ((e) => {
      this.emit("dragend", e);
    })));
    {
      let e;
      const t = this.renderer.on("drag", ((i) => {
        if (!this.options.interact) return;
        let s;
        this.renderer.renderProgress(i), clearTimeout(e), this.isPlaying() ? s = 0 : this.options.dragToSeek === !0 ? s = 200 : typeof this.options.dragToSeek == "object" && this.options.dragToSeek !== void 0 && (s = this.options.dragToSeek.debounceTime), e = setTimeout((() => {
          this.seekTo(i);
        }), s), this.emit("interaction", i * this.getDuration()), this.emit("drag", i);
      }));
      this.subscriptions.push((() => {
        clearTimeout(e), t();
      }));
    }
  }
  initPlugins() {
    var e;
    !((e = this.options.plugins) === null || e === void 0) && e.length && this.options.plugins.forEach(((t) => {
      this.registerPlugin(t);
    }));
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach(((e) => e())), this.mediaSubscriptions = [];
  }
  setOptions(e) {
    this.options = Object.assign({}, this.options, e), e.duration && !e.peaks && (this.decodedData = as.createBuffer(this.exportPeaks(), e.duration)), e.peaks && e.duration && (this.decodedData = as.createBuffer(e.peaks, e.duration)), this.renderer.setOptions(this.options), e.audioRate && this.setPlaybackRate(e.audioRate), e.mediaControls != null && (this.getMediaElement().controls = e.mediaControls);
  }
  registerPlugin(e) {
    if (this.plugins.includes(e)) return e;
    e._init(this), this.plugins.push(e);
    const t = e.once("destroy", (() => {
      this.plugins = this.plugins.filter(((i) => i !== e)), this.subscriptions = this.subscriptions.filter(((i) => i !== t));
    }));
    return this.subscriptions.push(t), e;
  }
  unregisterPlugin(e) {
    this.plugins = this.plugins.filter(((t) => t !== e)), e.destroy();
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(e) {
    return this.renderer.setScroll(e);
  }
  setScrollTime(e) {
    const t = e / this.getDuration();
    this.renderer.setScrollPercentage(t);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(e, t, i, s) {
    return ct(this, void 0, void 0, (function* () {
      var r;
      if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, (r = this.abortController) === null || r === void 0 || r.abort(), this.abortController = null, !t && !i) {
        const o = this.options.fetchParams || {};
        window.AbortController && !o.signal && (this.abortController = new AbortController(), o.signal = this.abortController.signal);
        const l = (d) => this.emit("loading", d);
        t = yield Dh.fetchBlob(e, l, o);
        const c = this.options.blobMimeType;
        c && (t = new Blob([t], { type: c }));
      }
      this.setSrc(e, t);
      const a = yield new Promise(((o) => {
        const l = s || this.getDuration();
        l ? o(l) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", (() => o(this.getDuration())), { once: !0 }));
      }));
      if (!e && !t) {
        const o = this.getMediaElement();
        o instanceof hr && (o.duration = a);
      }
      if (i) this.decodedData = as.createBuffer(i, a || 0);
      else if (t) {
        const o = yield t.arrayBuffer();
        this.decodedData = yield as.decode(o, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    }));
  }
  load(e, t, i) {
    return ct(this, void 0, void 0, (function* () {
      try {
        return yield this.loadAudio(e, void 0, t, i);
      } catch (s) {
        throw this.emit("error", s), s;
      }
    }));
  }
  loadBlob(e, t, i) {
    return ct(this, void 0, void 0, (function* () {
      try {
        return yield this.loadAudio("", e, t, i);
      } catch (s) {
        throw this.emit("error", s), s;
      }
    }));
  }
  zoom(e) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(e), this.emit("zoom", e);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({ channels: e = 2, maxLength: t = 8e3, precision: i = 1e4 } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const s = Math.min(e, this.decodedData.numberOfChannels), r = [];
    for (let a = 0; a < s; a++) {
      const o = this.decodedData.getChannelData(a), l = [], c = o.length / t;
      for (let d = 0; d < t; d++) {
        const u = o.slice(Math.floor(d * c), Math.ceil((d + 1) * c));
        let h = 0;
        for (let f = 0; f < u.length; f++) {
          const g = u[f];
          Math.abs(g) > Math.abs(h) && (h = g);
        }
        l.push(Math.round(h * i) / i);
      }
      r.push(l);
    }
    return r;
  }
  getDuration() {
    let e = super.getDuration() || 0;
    return e !== 0 && e !== 1 / 0 || !this.decodedData || (e = this.decodedData.duration), e;
  }
  toggleInteraction(e) {
    this.options.interact = e;
  }
  setTime(e) {
    this.stopAtPosition = null, super.setTime(e), this.updateProgress(e), this.emit("timeupdate", e);
  }
  seekTo(e) {
    const t = this.getDuration() * e;
    this.setTime(t);
  }
  play(e, t) {
    const i = Object.create(null, { play: { get: () => super.play } });
    return ct(this, void 0, void 0, (function* () {
      e != null && this.setTime(e);
      const s = yield i.play.call(this);
      return t != null && (this.media instanceof hr ? this.media.stopAt(t) : this.stopAtPosition = t), s;
    }));
  }
  playPause() {
    return ct(this, void 0, void 0, (function* () {
      return this.isPlaying() ? this.pause() : this.play();
    }));
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(e) {
    this.setTime(this.getCurrentTime() + e);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(e) {
    this.unsubscribePlayerEvents(), super.setMediaElement(e), this.initPlayerEvents();
  }
  exportImage() {
    return ct(this, arguments, void 0, (function* (e = "image/png", t = 1, i = "dataURL") {
      return this.renderer.exportImage(e, t, i);
    }));
  }
  destroy() {
    var e;
    this.emit("destroy"), (e = this.abortController) === null || e === void 0 || e.abort(), this.plugins.forEach(((t) => t.destroy())), this.subscriptions.forEach(((t) => t())), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
zt.BasePlugin = class extends Zi {
  constructor(n) {
    super(), this.subscriptions = [], this.isDestroyed = !1, this.options = n;
  }
  onInit() {
  }
  _init(n) {
    this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = n, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach(((n) => n())), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
  }
}, zt.dom = Ch;
function Mh(n) {
  const e = n.numberOfChannels, t = n.length * e * 2 + 44, i = new ArrayBuffer(t), s = new DataView(i);
  let r = 0;
  const a = function(o, l, c) {
    for (let d = 0; d < c.length; d++)
      o.setUint8(l + d, c.charCodeAt(d));
  };
  a(s, r, "RIFF"), r += 4, s.setUint32(r, t - 8, !0), r += 4, a(s, r, "WAVE"), r += 4, a(s, r, "fmt "), r += 4, s.setUint32(r, 16, !0), r += 4, s.setUint16(r, 1, !0), r += 2, s.setUint16(r, e, !0), r += 2, s.setUint32(r, n.sampleRate, !0), r += 4, s.setUint32(r, n.sampleRate * 2 * e, !0), r += 4, s.setUint16(r, e * 2, !0), r += 2, s.setUint16(r, 16, !0), r += 2, a(s, r, "data"), r += 4, s.setUint32(r, n.length * e * 2, !0), r += 4;
  for (let o = 0; o < n.length; o++)
    for (let l = 0; l < e; l++) {
      const c = Math.max(
        -1,
        Math.min(1, n.getChannelData(l)[o])
      );
      s.setInt16(r, c * 32767, !0), r += 2;
    }
  return new Uint8Array(i);
}
const jr = async (n, e, t, i) => {
  const s = new AudioContext({
    sampleRate: i || n.sampleRate
  }), r = n.numberOfChannels, a = i || n.sampleRate;
  let o = n.length, l = 0;
  e != null && t != null && (l = Math.round(e * a), o = Math.round(t * a) - l);
  const c = s.createBuffer(
    r,
    o,
    a
  );
  for (let d = 0; d < r; d++) {
    const u = n.getChannelData(d), h = c.getChannelData(d);
    for (let f = 0; f < o; f++)
      h[f] = u[l + f];
  }
  return Mh(c);
}, Os = (n, e) => {
  n && n.skip(e);
}, os = (n, e) => (e || (e = 5), n / 100 * e || 5);
let nl = class {
  constructor() {
    this.listeners = {};
  }
  on(e, t, i) {
    if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), i?.once) {
      const s = (...r) => {
        this.un(e, s), t(...r);
      };
      return this.listeners[e].add(s), () => this.un(e, s);
    }
    return this.listeners[e].add(t), () => this.un(e, t);
  }
  un(e, t) {
    var i;
    (i = this.listeners[e]) === null || i === void 0 || i.delete(t);
  }
  once(e, t) {
    return this.on(e, t, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(e, ...t) {
    this.listeners[e] && this.listeners[e].forEach(((i) => i(...t)));
  }
}, Fh = class extends nl {
  constructor(e) {
    super(), this.subscriptions = [], this.isDestroyed = !1, this.options = e;
  }
  onInit() {
  }
  _init(e) {
    this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = e, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach(((e) => e())), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
  }
};
function Ts(n, e, t, i, s = 3, r = 0, a = 100) {
  if (!n) return () => {
  };
  const o = matchMedia("(pointer: coarse)").matches;
  let l = () => {
  };
  const c = (d) => {
    if (d.button !== r) return;
    d.preventDefault(), d.stopPropagation();
    let u = d.clientX, h = d.clientY, f = !1;
    const g = Date.now(), m = (E) => {
      if (E.preventDefault(), E.stopPropagation(), o && Date.now() - g < a) return;
      const T = E.clientX, A = E.clientY, S = T - u, w = A - h;
      if (f || Math.abs(S) > s || Math.abs(w) > s) {
        const C = n.getBoundingClientRect(), { left: L, top: I } = C;
        f || (t?.(u - L, h - I), f = !0), e(S, w, T - L, A - I), u = T, h = A;
      }
    }, p = (E) => {
      if (f) {
        const T = E.clientX, A = E.clientY, S = n.getBoundingClientRect(), { left: w, top: C } = S;
        i?.(T - w, A - C);
      }
      l();
    }, v = (E) => {
      E.relatedTarget && E.relatedTarget !== document.documentElement || p(E);
    }, b = (E) => {
      f && (E.stopPropagation(), E.preventDefault());
    }, _ = (E) => {
      f && E.preventDefault();
    };
    document.addEventListener("pointermove", m), document.addEventListener("pointerup", p), document.addEventListener("pointerout", v), document.addEventListener("pointercancel", v), document.addEventListener("touchmove", _, { passive: !1 }), document.addEventListener("click", b, { capture: !0 }), l = () => {
      document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", p), document.removeEventListener("pointerout", v), document.removeEventListener("pointercancel", v), document.removeEventListener("touchmove", _), setTimeout((() => {
        document.removeEventListener("click", b, { capture: !0 });
      }), 10);
    };
  };
  return n.addEventListener("pointerdown", c), () => {
    l(), n.removeEventListener("pointerdown", c);
  };
}
function al(n, e) {
  const t = e.xmlns ? document.createElementNS(e.xmlns, n) : document.createElement(n);
  for (const [i, s] of Object.entries(e)) if (i === "children" && s) for (const [r, a] of Object.entries(s)) a instanceof Node ? t.appendChild(a) : typeof a == "string" ? t.appendChild(document.createTextNode(a)) : t.appendChild(al(r, a));
  else i === "style" ? Object.assign(t.style, s) : i === "textContent" ? t.textContent = s : t.setAttribute(i, s.toString());
  return t;
}
function Wi(n, e, t) {
  const i = al(n, e || {});
  return t?.appendChild(i), i;
}
let oa = class extends nl {
  constructor(e, t, i = 0) {
    var s, r, a, o, l, c, d, u, h, f;
    super(), this.totalDuration = t, this.numberOfChannels = i, this.element = null, this.minLength = 0, this.maxLength = 1 / 0, this.contentEditable = !1, this.subscriptions = [], this.updatingSide = void 0, this.isRemoved = !1, this.subscriptions = [], this.id = e.id || `region-${Math.random().toString(32).slice(2)}`, this.start = this.clampPosition(e.start), this.end = this.clampPosition((s = e.end) !== null && s !== void 0 ? s : e.start), this.drag = (r = e.drag) === null || r === void 0 || r, this.resize = (a = e.resize) === null || a === void 0 || a, this.resizeStart = (o = e.resizeStart) === null || o === void 0 || o, this.resizeEnd = (l = e.resizeEnd) === null || l === void 0 || l, this.color = (c = e.color) !== null && c !== void 0 ? c : "rgba(0, 0, 0, 0.1)", this.minLength = (d = e.minLength) !== null && d !== void 0 ? d : this.minLength, this.maxLength = (u = e.maxLength) !== null && u !== void 0 ? u : this.maxLength, this.channelIdx = (h = e.channelIdx) !== null && h !== void 0 ? h : -1, this.contentEditable = (f = e.contentEditable) !== null && f !== void 0 ? f : this.contentEditable, this.element = this.initElement(), this.setContent(e.content), this.setPart(), this.renderPosition(), this.initMouseEvents();
  }
  clampPosition(e) {
    return Math.max(0, Math.min(this.totalDuration, e));
  }
  setPart() {
    var e;
    const t = this.start === this.end;
    (e = this.element) === null || e === void 0 || e.setAttribute("part", `${t ? "marker" : "region"} ${this.id}`);
  }
  addResizeHandles(e) {
    const t = { position: "absolute", zIndex: "2", width: "6px", height: "100%", top: "0", cursor: "ew-resize", wordBreak: "keep-all" }, i = Wi("div", { part: "region-handle region-handle-left", style: Object.assign(Object.assign({}, t), { left: "0", borderLeft: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "2px 0 0 2px" }) }, e), s = Wi("div", { part: "region-handle region-handle-right", style: Object.assign(Object.assign({}, t), { right: "0", borderRight: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "0 2px 2px 0" }) }, e);
    this.subscriptions.push(Ts(i, ((r) => this.onResize(r, "start")), (() => null), (() => this.onEndResizing("start")), 1), Ts(s, ((r) => this.onResize(r, "end")), (() => null), (() => this.onEndResizing("end")), 1));
  }
  removeResizeHandles(e) {
    const t = e.querySelector('[part*="region-handle-left"]'), i = e.querySelector('[part*="region-handle-right"]');
    t && e.removeChild(t), i && e.removeChild(i);
  }
  initElement() {
    if (this.isRemoved) return null;
    const e = this.start === this.end;
    let t = 0, i = 100;
    this.channelIdx >= 0 && this.numberOfChannels > 0 && this.channelIdx < this.numberOfChannels && (i = 100 / this.numberOfChannels, t = i * this.channelIdx);
    const s = Wi("div", { style: { position: "absolute", top: `${t}%`, height: `${i}%`, backgroundColor: e ? "none" : this.color, borderLeft: e ? "2px solid " + this.color : "none", borderRadius: "2px", boxSizing: "border-box", transition: "background-color 0.2s ease", cursor: this.drag ? "grab" : "default", pointerEvents: "all" } });
    return !e && this.resize && this.addResizeHandles(s), s;
  }
  renderPosition() {
    if (!this.element) return;
    const e = this.start / this.totalDuration, t = (this.totalDuration - this.end) / this.totalDuration;
    this.element.style.left = 100 * e + "%", this.element.style.right = 100 * t + "%";
  }
  toggleCursor(e) {
    var t;
    this.drag && (!((t = this.element) === null || t === void 0) && t.style) && (this.element.style.cursor = e ? "grabbing" : "grab");
  }
  initMouseEvents() {
    const { element: e } = this;
    e && (e.addEventListener("click", ((t) => this.emit("click", t))), e.addEventListener("mouseenter", ((t) => this.emit("over", t))), e.addEventListener("mouseleave", ((t) => this.emit("leave", t))), e.addEventListener("dblclick", ((t) => this.emit("dblclick", t))), e.addEventListener("pointerdown", (() => this.toggleCursor(!0))), e.addEventListener("pointerup", (() => this.toggleCursor(!1))), this.subscriptions.push(Ts(e, ((t) => this.onMove(t)), (() => this.toggleCursor(!0)), (() => {
      this.toggleCursor(!1), this.drag && this.emit("update-end");
    }))), this.contentEditable && this.content && (this.contentClickListener = (t) => this.onContentClick(t), this.contentBlurListener = () => this.onContentBlur(), this.content.addEventListener("click", this.contentClickListener), this.content.addEventListener("blur", this.contentBlurListener)));
  }
  _onUpdate(e, t, i) {
    var s;
    if (!(!((s = this.element) === null || s === void 0) && s.parentElement)) return;
    const { width: r } = this.element.parentElement.getBoundingClientRect(), a = e / r * this.totalDuration;
    let o = t && t !== "start" ? this.start : this.start + a, l = t && t !== "end" ? this.end : this.end + a;
    const c = i !== void 0;
    c && this.updatingSide && this.updatingSide !== t && (this.updatingSide === "start" ? o = i : l = i), o = Math.max(0, o), l = Math.min(this.totalDuration, l);
    const d = l - o;
    this.updatingSide = t;
    const u = d >= this.minLength && d <= this.maxLength;
    o <= l && (u || c) && (this.start = o, this.end = l, this.renderPosition(), this.emit("update", t));
  }
  onMove(e) {
    this.drag && this._onUpdate(e);
  }
  onResize(e, t) {
    this.resize && (this.resizeStart || t !== "start") && (this.resizeEnd || t !== "end") && this._onUpdate(e, t);
  }
  onEndResizing(e) {
    this.resize && (this.emit("update-end", e), this.updatingSide = void 0);
  }
  onContentClick(e) {
    e.stopPropagation(), e.target.focus(), this.emit("click", e);
  }
  onContentBlur() {
    this.emit("update-end");
  }
  _setTotalDuration(e) {
    this.totalDuration = e, this.renderPosition();
  }
  play(e) {
    this.emit("play", e && this.end !== this.start ? this.end : void 0);
  }
  getContent(e = !1) {
    var t;
    return e ? this.content || void 0 : this.element instanceof HTMLElement ? ((t = this.content) === null || t === void 0 ? void 0 : t.innerHTML) || void 0 : "";
  }
  setContent(e) {
    var t;
    if (this.element) if (this.content && this.contentEditable && (this.contentClickListener && this.content.removeEventListener("click", this.contentClickListener), this.contentBlurListener && this.content.removeEventListener("blur", this.contentBlurListener)), (t = this.content) === null || t === void 0 || t.remove(), e) {
      if (typeof e == "string") {
        const i = this.start === this.end;
        this.content = Wi("div", { style: { padding: `0.2em ${i ? 0.2 : 0.4}em`, display: "inline-block" }, textContent: e });
      } else this.content = e;
      this.contentEditable && (this.content.contentEditable = "true", this.contentClickListener = (i) => this.onContentClick(i), this.contentBlurListener = () => this.onContentBlur(), this.content.addEventListener("click", this.contentClickListener), this.content.addEventListener("blur", this.contentBlurListener)), this.content.setAttribute("part", "region-content"), this.element.appendChild(this.content), this.emit("content-changed");
    } else this.content = void 0;
  }
  setOptions(e) {
    var t, i;
    if (this.element) {
      if (e.color && (this.color = e.color, this.element.style.backgroundColor = this.color), e.drag !== void 0 && (this.drag = e.drag, this.element.style.cursor = this.drag ? "grab" : "default"), e.start !== void 0 || e.end !== void 0) {
        const s = this.start === this.end;
        this.start = this.clampPosition((t = e.start) !== null && t !== void 0 ? t : this.start), this.end = this.clampPosition((i = e.end) !== null && i !== void 0 ? i : s ? this.start : this.end), this.renderPosition(), this.setPart();
      }
      if (e.content && this.setContent(e.content), e.id && (this.id = e.id, this.setPart()), e.resize !== void 0 && e.resize !== this.resize) {
        const s = this.start === this.end;
        this.resize = e.resize, this.resize && !s ? this.addResizeHandles(this.element) : this.removeResizeHandles(this.element);
      }
      e.resizeStart !== void 0 && (this.resizeStart = e.resizeStart), e.resizeEnd !== void 0 && (this.resizeEnd = e.resizeEnd);
    }
  }
  remove() {
    this.isRemoved = !0, this.emit("remove"), this.subscriptions.forEach(((e) => e())), this.element && (this.element.remove(), this.element = null);
  }
}, Nh = class ol extends Fh {
  constructor(e) {
    super(e), this.regions = [], this.regionsContainer = this.initRegionsContainer();
  }
  static create(e) {
    return new ol(e);
  }
  onInit() {
    if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
    this.wavesurfer.getWrapper().appendChild(this.regionsContainer), this.subscriptions.push(this.wavesurfer.on("ready", ((t) => {
      this.regions.forEach(((i) => i._setTotalDuration(t)));
    })));
    let e = [];
    this.subscriptions.push(this.wavesurfer.on("timeupdate", ((t) => {
      const i = this.regions.filter(((s) => s.start <= t && (s.end === s.start ? s.start + 0.05 : s.end) >= t));
      i.forEach(((s) => {
        e.includes(s) || this.emit("region-in", s);
      })), e.forEach(((s) => {
        i.includes(s) || this.emit("region-out", s);
      })), e = i;
    })));
  }
  initRegionsContainer() {
    return Wi("div", { part: "regions-container", style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "5", pointerEvents: "none" } });
  }
  getRegions() {
    return this.regions;
  }
  avoidOverlapping(e) {
    e.content && setTimeout((() => {
      const t = e.content, i = t.getBoundingClientRect(), s = this.regions.map(((r) => {
        if (r === e || !r.content) return 0;
        const a = r.content.getBoundingClientRect();
        return i.left < a.left + a.width && a.left < i.left + i.width ? a.height : 0;
      })).reduce(((r, a) => r + a), 0);
      t.style.marginTop = `${s}px`;
    }), 10);
  }
  adjustScroll(e) {
    var t, i;
    if (!e.element) return;
    const s = (i = (t = this.wavesurfer) === null || t === void 0 ? void 0 : t.getWrapper()) === null || i === void 0 ? void 0 : i.parentElement;
    if (!s) return;
    const { clientWidth: r, scrollWidth: a } = s;
    if (a <= r) return;
    const o = s.getBoundingClientRect(), l = e.element.getBoundingClientRect(), c = l.left - o.left, d = l.right - o.left;
    c < 0 ? s.scrollLeft += c : d > r && (s.scrollLeft += d - r);
  }
  virtualAppend(e, t, i) {
    const s = () => {
      if (!this.wavesurfer) return;
      const r = this.wavesurfer.getWidth(), a = this.wavesurfer.getScroll(), o = t.clientWidth, l = this.wavesurfer.getDuration(), c = Math.round(e.start / l * o), d = c + (Math.round((e.end - e.start) / l * o) || 1) > a && c < a + r;
      d && !i.parentElement ? t.appendChild(i) : !d && i.parentElement && i.remove();
    };
    setTimeout((() => {
      if (!this.wavesurfer || !e.element) return;
      s();
      const r = this.wavesurfer.on("scroll", s), a = this.wavesurfer.on("zoom", s);
      this.subscriptions.push(r, a), e.once("remove", (() => {
        r(), a();
      }));
    }), 0);
  }
  saveRegion(e) {
    if (!e.element) return;
    this.virtualAppend(e, this.regionsContainer, e.element), this.avoidOverlapping(e), this.regions.push(e);
    const t = [e.on("update", ((i) => {
      i || this.adjustScroll(e), this.emit("region-update", e, i);
    })), e.on("update-end", ((i) => {
      this.avoidOverlapping(e), this.emit("region-updated", e, i);
    })), e.on("play", ((i) => {
      var s;
      (s = this.wavesurfer) === null || s === void 0 || s.play(e.start, i);
    })), e.on("click", ((i) => {
      this.emit("region-clicked", e, i);
    })), e.on("dblclick", ((i) => {
      this.emit("region-double-clicked", e, i);
    })), e.on("content-changed", (() => {
      this.emit("region-content-changed", e);
    })), e.once("remove", (() => {
      t.forEach(((i) => i())), this.regions = this.regions.filter(((i) => i !== e)), this.emit("region-removed", e);
    }))];
    this.subscriptions.push(...t), this.emit("region-created", e);
  }
  addRegion(e) {
    var t, i;
    if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
    const s = this.wavesurfer.getDuration(), r = (i = (t = this.wavesurfer) === null || t === void 0 ? void 0 : t.getDecodedData()) === null || i === void 0 ? void 0 : i.numberOfChannels, a = new oa(e, s, r);
    return this.emit("region-initialized", a), s ? this.saveRegion(a) : this.subscriptions.push(this.wavesurfer.once("ready", ((o) => {
      a._setTotalDuration(o), this.saveRegion(a);
    }))), a;
  }
  enableDragSelection(e, t = 3) {
    var i;
    const s = (i = this.wavesurfer) === null || i === void 0 ? void 0 : i.getWrapper();
    if (!(s && s instanceof HTMLElement)) return () => {
    };
    let r = null, a = 0, o = 0;
    return Ts(s, ((l, c, d) => {
      r && r._onUpdate(l, d > a ? "end" : "start", o);
    }), ((l) => {
      var c, d;
      if (a = l, !this.wavesurfer) return;
      const u = this.wavesurfer.getDuration(), h = (d = (c = this.wavesurfer) === null || c === void 0 ? void 0 : c.getDecodedData()) === null || d === void 0 ? void 0 : d.numberOfChannels, { width: f } = this.wavesurfer.getWrapper().getBoundingClientRect();
      o = a / f * u;
      const g = l / f * u, m = (l + 5) / f * u;
      r = new oa(Object.assign(Object.assign({}, e), { start: g, end: m }), u, h), this.emit("region-initialized", r), r.element && this.regionsContainer.appendChild(r.element);
    }), (() => {
      r && (this.saveRegion(r), r.updatingSide = void 0, r = null);
    }), t);
  }
  clearRegions() {
    this.regions.slice().forEach(((e) => e.remove())), this.regions = [];
  }
  destroy() {
    this.clearRegions(), super.destroy(), this.regionsContainer.remove();
  }
};
function Bh(n, e) {
  var t = Ne(), i = ve(t);
  {
    var s = (o) => {
      Vu(o);
    }, r = (o) => {
      Bu(o);
    }, a = (o) => {
      Gu(o);
    };
    X(i, (o) => {
      e.currentVolume == 0 ? o(s) : e.currentVolume < 0.5 ? o(r, 1) : e.currentVolume >= 0.5 && o(a, 2);
    });
  }
  M(n, t);
}
var Uh = /* @__PURE__ */ J('<input id="volume" class="volume-slider svelte-1uraozs" type="range" min="0" max="1" step="0.01"/>');
function Gh(n, e) {
  We(e, !0);
  let t = R(e, "currentVolume", 15), i = R(e, "show_volume_slider", 15), s;
  wt(() => {
    r();
  });
  const r = () => {
    let o = s;
    o && (o.style.background = `linear-gradient(to right, var(--color-accent) ${(t() !== null && t() !== void 0 ? t() : 1) * 100}%, var(--neutral-400) ${(t() !== null && t() !== void 0 ? t() : 1) * 100}%)`);
  };
  Le(() => {
    t(), r();
  });
  var a = Uh();
  et(a, (o) => s = o, () => s), re(() => Vo(a, t() ?? 1)), Oe("focusout", a, () => i(!1)), Oe("input", a, (o) => {
    o.target instanceof HTMLInputElement && (t(parseFloat(o.target.value)), e.waveform?.setVolume(t()));
  }), M(n, a), je();
}
Et(["focusout", "input"]);
var Hh = /* @__PURE__ */ J('<button class="action icon cc-button svelte-1n8o0j8" data-testid="subtitles-toggle"><!></button>'), Vh = /* @__PURE__ */ J('<button class="action icon svelte-1n8o0j8" aria-label="Reset audio"><!></button>'), Kh = /* @__PURE__ */ J('<button class="action icon svelte-1n8o0j8" aria-label="Trim audio to selection"><!></button>'), Wh = /* @__PURE__ */ J('<button class="text-button svelte-1n8o0j8">Trim</button> <button class="text-button svelte-1n8o0j8">Cancel</button>', 1), jh = /* @__PURE__ */ J("<!> <!>", 1), Yh = /* @__PURE__ */ J('<div class="controls svelte-1n8o0j8" data-testid="waveform-controls"><div class="control-wrapper svelte-1n8o0j8"><button class="action icon volume svelte-1n8o0j8" aria-label="Adjust volume"><!></button> <!> <button><span> </span></button></div> <div class="play-pause-wrapper svelte-1n8o0j8"><button class="rewind icon svelte-1n8o0j8"><!></button> <button class="play-pause-button icon svelte-1n8o0j8"><!></button> <button class="skip icon svelte-1n8o0j8"><!></button></div> <div class="settings-wrapper svelte-1n8o0j8"><!> <!></div></div>');
function ll(n, e) {
  We(e, !0);
  let t = R(e, "show_redo", 3, !1), i = R(e, "interactive", 3, !1), s = R(e, "mode", 15), r = R(e, "waveform_options", 19, () => ({})), a = R(e, "trim_region_settings", 19, () => ({})), o = R(e, "show_volume_slider", 15), l = R(e, "editable", 3, !0), c = R(e, "subtitles_toggle", 15), d = R(e, "show_subtitles", 3, !1), u = R(e, "trimDuration", 15), h = [0.5, 1, 1.5, 2], f = fe(yt(h[1])), g = fe(null), m = fe(null), p = fe(null), v = fe(null), b = fe(""), _ = fe(1);
  function E() {
    e.container && e.waveform && !y(g) && W(g, e.waveform.registerPlugin(Nh.create()), !0);
  }
  wt(() => {
    E();
  }), Le(() => {
    if (!y(g)) return;
    const $ = (se) => {
      se.play();
    };
    return y(g).on("region-out", $), () => {
      y(g) === null || y(g) === void 0 || y(g).un("region-out", $);
    };
  }), Le(() => {
    if (!y(g)) return;
    const $ = (se) => {
      u(se.end - se.start);
    };
    return y(g).on("region-updated", $), () => {
      y(g) === null || y(g) === void 0 || y(g).un("region-updated", $);
    };
  }), Le(() => {
    if (!y(g)) return;
    const $ = (se, we) => {
      we.stopPropagation(), W(m, se, !0), se.play();
    };
    return y(g).on("region-clicked", $), () => {
      y(g) === null || y(g) === void 0 || y(g).un("region-clicked", $);
    };
  });
  const T = () => {
    y(g) && (W(
      m,
      y(g) === null || y(g) === void 0 ? void 0 : y(g).addRegion(Object.assign(
        {
          start: e.audio_duration / 4,
          end: e.audio_duration / 2
        },
        a()
      )),
      !0
    ), u(y(m).end - y(m).start));
  };
  Le(() => {
    if (y(m)) {
      const $ = e.container.children[0].shadowRoot;
      W(v, $.querySelector('[data-resize="right"]'), !0), W(p, $.querySelector('[data-resize="left"]'), !0), y(p) && y(v) && (y(p).setAttribute("role", "button"), y(v).setAttribute("role", "button"), y(p) === null || y(p) === void 0 || y(p).setAttribute("aria-label", "Drag to adjust start time"), y(v) === null || y(v) === void 0 || y(v).setAttribute("aria-label", "Drag to adjust end time"), y(p) === null || y(p) === void 0 || y(p).setAttribute("tabindex", "0"), y(v) === null || y(v) === void 0 || y(v).setAttribute("tabindex", "0"), y(p).addEventListener("focus", () => {
        y(g) && W(b, "left");
      }), y(v).addEventListener("focus", () => {
        y(g) && W(b, "right");
      }));
    }
  });
  const A = () => {
    if (e.waveform && y(g) && y(m)) {
      const $ = y(m).start, se = y(m).end;
      e.handle_trim_audio($, se), s(""), W(m, null);
    }
  }, S = () => {
    y(g) === null || y(g) === void 0 || y(g).getRegions().forEach(($) => {
      $.remove();
    }), y(g) === null || y(g) === void 0 || y(g).clearRegions();
  }, w = () => {
    S(), s() ? s("") : (s("edit"), E(), T());
  }, C = () => {
    c(!c());
  }, L = ($, se) => {
    let we, He;
    y(m) && ($ === "left" ? se === "ArrowLeft" ? (we = y(m).start - 0.05, He = y(m).end) : (we = y(m).start + 0.05, He = y(m).end) : se === "ArrowLeft" ? (we = y(m).start, He = y(m).end - 0.05) : (we = y(m).start, He = y(m).end + 0.05), y(m).setOptions({ start: we, end: He }), u(y(m).end - y(m).start));
  };
  Le(() => {
    if (y(g)) {
      const $ = (se) => {
        se.key === "ArrowLeft" ? L(y(b), "ArrowLeft") : se.key === "ArrowRight" && L(y(b), "ArrowRight");
      };
      return window.addEventListener("keydown", $), () => {
        window.removeEventListener("keydown", $);
      };
    }
  });
  var I = Yh(), K = j(I), F = j(K);
  let D;
  var U = j(F);
  Bh(U, {
    get currentVolume() {
      return y(_);
    }
  });
  var G = z(F, 2);
  {
    var ee = ($) => {
      Gh($, {
        get waveform() {
          return e.waveform;
        },
        get currentVolume() {
          return y(_);
        },
        set currentVolume(se) {
          W(_, se, !0);
        },
        get show_volume_slider() {
          return o();
        },
        set show_volume_slider(se) {
          o(se);
        }
      });
    };
    X(G, ($) => {
      o() && $(ee);
    });
  }
  var oe = z(G, 2);
  let H;
  var B = j(oe), O = j(B), Y = z(K, 2), q = j(Y), le = j(q);
  fu(le);
  var te = z(q, 2), ge = j(te);
  {
    var Q = ($) => {
      Zo($);
    }, ie = ($) => {
      Cu($);
    };
    X(ge, ($) => {
      e.playing ? $(Q) : $(ie, -1);
    });
  }
  var ce = z(te, 2), Z = j(ce);
  _u(Z);
  var _e = z(Y, 2), Ie = j(_e);
  {
    var De = ($) => {
      var se = Hh(), we = j(se);
      pu(we), re(() => tt(se, `color: ${c() ? "var(--color-accent)" : "var(--neutral-400)"}`)), Oe("click", se, C), M($, se);
    };
    X(Ie, ($) => {
      d() && $(De);
    });
  }
  var de = z(Ie, 2);
  {
    var ne = ($) => {
      var se = jh(), we = ve(se);
      {
        var He = (Ae) => {
          var Ce = Vh(), ue = j(Ce);
          Jo(ue), Oe("click", Ce, () => {
            e.handle_reset_value(), S(), s("");
          }), M(Ae, Ce);
        };
        X(we, (Ae) => {
          t() && !s() && Ae(He);
        });
      }
      var ye = z(we, 2);
      {
        var be = (Ae) => {
          var Ce = Kh(), ue = j(Ce);
          ku(ue), Oe("click", Ce, w), M(Ae, Ce);
        }, Ve = (Ae) => {
          var Ce = Wh(), ue = ve(Ce), Se = z(ue, 2);
          Oe("click", ue, A), Oe("click", Se, w), M(Ae, Ce);
        };
        X(ye, (Ae) => {
          s() ? Ae(Ve, -1) : Ae(be);
        });
      }
      M($, se);
    };
    X(de, ($) => {
      l() && i() && $(ne);
    });
  }
  re(
    ($, se, we, He) => {
      D = tt(F, "", D, {
        color: o() ? "var(--color-accent)" : "var(--neutral-400)"
      }), H = Ge(oe, 1, "playback icon svelte-1n8o0j8", null, H, { hidden: o() }), $e(oe, "aria-label", $), Ee(O, `${y(f) ?? ""}x`), $e(q, "aria-label", se), $e(te, "aria-label", we), $e(ce, "aria-label", `Skip forward by ${He ?? ""} seconds`);
    },
    [
      () => `Adjust playback speed to ${h[(h.indexOf(y(f)) + 1) % h.length]}x`,
      () => `Skip backwards by ${os(e.audio_duration, r().skip_length)} seconds`,
      () => e.playing ? e.i18n("audio.pause") : e.i18n("audio.play"),
      () => os(e.audio_duration, r().skip_length)
    ]
  ), Oe("click", F, () => o(!o())), Oe("click", oe, () => {
    W(f, h[(h.indexOf(y(f)) + 1) % h.length], !0), e.waveform?.setPlaybackRate(y(f));
  }), Oe("click", q, () => e.waveform?.skip(os(e.audio_duration, r().skip_length) * -1)), Oe("click", te, () => e.waveform?.playPause()), Oe("click", ce, () => e.waveform?.skip(os(e.audio_duration, r().skip_length))), M(n, I), je();
}
Et(["click"]);
const ci = [
  "#3b82f6",
  // blue
  "#ef4444",
  // red
  "#22c55e",
  // green
  "#f59e0b",
  // amber
  "#a855f7",
  // purple
  "#06b6d4",
  // cyan
  "#ec4899",
  // pink
  "#84cc16",
  // lime
  "#f97316",
  // orange
  "#14b8a6"
  // teal
];
function zh(n) {
  const e = /* @__PURE__ */ new Map();
  let t = 0;
  for (const i of n)
    i.color ? e.set(i.key, i.color) : (e.set(i.key, ci[t % ci.length]), t++);
  return e;
}
function qh(n, e) {
  const t = zh(n);
  return n.map((i) => {
    const s = {
      key: i.key,
      label: i.label || i.key,
      color: t.get(i.key),
      points: [],
      ranges: []
    };
    for (const r of e)
      r.category === i.key && (r.kind === "point" && r.time !== void 0 ? s.points.push({ time: r.time, label: r.label }) : r.kind === "range" && r.start !== void 0 && r.end !== void 0 && s.ranges.push({
        start: r.start,
        end: r.end,
        label: r.label
      }));
    return s;
  });
}
function Xh(n) {
  const e = [];
  for (const s of n)
    s.speaker && !e.includes(s.speaker) && e.push(s.speaker);
  if (e.length === 0) return null;
  const t = /* @__PURE__ */ new Map();
  e.forEach((s, r) => {
    t.set(s, ci[r % ci.length]);
  });
  const i = {
    key: "__speaker__",
    label: "Speaker",
    color: ci[0],
    points: [],
    ranges: []
  };
  for (const s of n)
    s.speaker && i.ranges.push({
      start: s.start,
      end: s.end,
      label: s.speaker,
      color: t.get(s.speaker)
    });
  return i;
}
function cl(n) {
  const e = /* @__PURE__ */ new Map();
  let t = 0;
  for (const i of n)
    i.speaker && !e.has(i.speaker) && (e.set(i.speaker, ci[t % ci.length]), t++);
  return e;
}
function Qh(n, e) {
  for (let t = 0; t < n.length; t++)
    if (e >= n[t].start && e < n[t].end)
      return t;
  return -1;
}
var la = /* @__PURE__ */ J('<span class="chip svelte-1qpb0nx"></span>'), Zh = /* @__PURE__ */ J('<span class="chip-group svelte-1qpb0nx"></span>'), ca = /* @__PURE__ */ J('<span class="tooltip svelte-1qpb0nx"> </span>'), Jh = /* @__PURE__ */ J('<div class="annotation-range svelte-1qpb0nx" role="button" tabindex="0"><!></div>'), $h = /* @__PURE__ */ J('<div class="annotation-point svelte-1qpb0nx" role="button" tabindex="0"><!></div>'), ef = /* @__PURE__ */ J('<div class="lane-row svelte-1qpb0nx"><button type="button" class="lane-label svelte-1qpb0nx"><!> <span> </span></button> <div><!> <!> <div class="playhead svelte-1qpb0nx"></div></div></div>'), tf = /* @__PURE__ */ J('<div class="lanes svelte-1qpb0nx"></div>');
function sf(n, e) {
  We(e, !0);
  let t = R(e, "categories", 3, null), i = R(e, "annotations", 3, null), s = R(e, "transcript", 3, null), r = R(e, "duration", 3, 0), a = R(e, "current_time", 3, 0), o = fe(yt(/* @__PURE__ */ new Set()));
  function l(v) {
    const b = new Set(y(o));
    b.has(v) ? b.delete(v) : b.add(v), W(o, b, !0);
  }
  let c = he(() => s() && s().length > 0 ? Xh(s()) : null), d = he(() => s() && s().length > 0 ? cl(s()) : /* @__PURE__ */ new Map()), u = he(() => t() && t().length > 0 ? qh(t(), i() || []) : []), h = he(() => [
    ...y(c) ? [y(c)] : [],
    ...y(u)
  ]);
  function f(v) {
    return !r() || r() <= 0 ? 0 : Math.min(100, Math.max(0, v / r() * 100));
  }
  var g = Ne(), m = ve(g);
  {
    var p = (v) => {
      var b = tf();
      Ft(b, 21, () => y(h), (_) => _.key, (_, E) => {
        var T = ef(), A = j(T), S = j(A);
        {
          var w = (H) => {
            var B = Zh();
            Ft(B, 21, () => [...y(d).entries()], ([, O]) => O, (O, Y) => {
              var q = he(() => Po(y(Y), 2));
              let le = () => y(q)[1];
              var te = la();
              let ge;
              re(() => ge = tt(te, "", ge, { background: le() })), M(O, te);
            }), M(H, B);
          }, C = (H) => {
            var B = la();
            let O;
            re(() => O = tt(B, "", O, { background: y(E).color })), M(H, B);
          };
          X(S, (H) => {
            y(E).key === "__speaker__" ? H(w) : H(C, -1);
          });
        }
        var L = z(S, 2);
        let I;
        var K = j(L), F = z(A, 2);
        let D;
        var U = j(F);
        Ft(U, 17, () => y(E).ranges, ei, (H, B) => {
          var O = Jh();
          let Y;
          var q = j(O);
          {
            var le = (te) => {
              var ge = ca(), Q = j(ge);
              re(() => Ee(Q, y(B).label)), M(te, ge);
            };
            X(q, (te) => {
              y(B).label && te(le);
            });
          }
          re((te) => Y = tt(O, "", Y, te), [
            () => ({
              left: `${f(y(B).start) ?? ""}%`,
              width: `${Math.max(f(y(B).end) - f(y(B).start), 0.3)}%`,
              background: (y(B).color || y(E).color) + "55",
              "border-left-color": y(B).color || y(E).color
            })
          ]), Oe("click", O, () => e.onseek(y(B).start)), Oe("keydown", O, (te) => te.key === "Enter" && e.onseek(y(B).start)), M(H, O);
        });
        var G = z(U, 2);
        Ft(G, 17, () => y(E).points, ei, (H, B) => {
          var O = $h();
          let Y;
          var q = j(O);
          {
            var le = (te) => {
              var ge = ca(), Q = j(ge);
              re(() => Ee(Q, y(B).label)), M(te, ge);
            };
            X(q, (te) => {
              y(B).label && te(le);
            });
          }
          re((te) => Y = tt(O, "", Y, te), [
            () => ({
              left: `${f(y(B).time) ?? ""}%`,
              background: y(B).color || y(E).color
            })
          ]), Oe("click", O, () => e.onseek(y(B).time)), Oe("keydown", O, (te) => te.key === "Enter" && e.onseek(y(B).time)), M(H, O);
        });
        var ee = z(G, 2);
        let oe;
        re(
          (H, B, O, Y) => {
            $e(A, "title", H), I = Ge(L, 1, "svelte-1qpb0nx", null, I, B), Ee(K, y(E).label), D = Ge(F, 1, "lane-track svelte-1qpb0nx", null, D, O), oe = tt(ee, "", oe, Y);
          },
          [
            () => y(o).has(y(E).key) ? "Show lane" : "Hide lane",
            () => ({ dimmed: y(o).has(y(E).key) }),
            () => ({ "lane-hidden": y(o).has(y(E).key) }),
            () => ({ left: `${f(a()) ?? ""}%` })
          ]
        ), Oe("click", A, () => l(y(E).key)), M(_, T);
      }), M(v, b);
    };
    X(m, (v) => {
      y(h).length > 0 && v(p);
    });
  }
  M(n, g), je();
}
Et(["click", "keydown"]);
var rf = /* @__PURE__ */ J('<span class="transcript-speaker svelte-qshwt1"> </span>'), nf = /* @__PURE__ */ J('<button type="button"><time class="transcript-time svelte-qshwt1"> </time> <!> <span class="transcript-text svelte-qshwt1"> </span></button>'), af = /* @__PURE__ */ J('<div class="transcript-panel svelte-qshwt1" data-testid="transcript-panel"></div>');
function of(n, e) {
  We(e, !0);
  let t = R(e, "transcript", 3, null), i = R(e, "current_time", 3, 0), s = he(() => t() ? cl(t()) : /* @__PURE__ */ new Map()), r = he(() => t() ? Qh(t(), i()) : -1), a = yt([]);
  Le(() => {
    var d;
    y(r) >= 0 && a[y(r)] && ((d = a[y(r)]) === null || d === void 0 || d.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  });
  var o = Ne(), l = ve(o);
  {
    var c = (d) => {
      var u = af();
      Ft(u, 21, t, ei, (h, f, g) => {
        var m = nf();
        let p;
        var v = j(m), b = j(v), _ = z(v, 2);
        {
          var E = (S) => {
            var w = rf();
            let C;
            var L = j(w);
            re(
              (I) => {
                C = tt(w, "", C, I), Ee(L, y(f).speaker);
              },
              [
                () => ({
                  color: y(s).get(y(f).speaker),
                  "border-color": y(s).get(y(f).speaker)
                })
              ]
            ), M(S, w);
          };
          X(_, (S) => {
            y(f).speaker && S(E);
          });
        }
        var T = z(_, 2), A = j(T);
        et(m, (S, w) => a[w] = S, (S) => a?.[S], () => [g]), re(
          (S) => {
            p = Ge(m, 1, "transcript-row svelte-qshwt1", null, p, { active: g === y(r) }), Ee(b, S), Ee(A, y(f).text);
          },
          [() => Lt(y(f).start)]
        ), Oe("click", m, () => e.onseek(y(f).start)), M(h, m);
      }), M(d, u);
    };
    X(l, (d) => {
      t() && t().length > 0 && d(c);
    });
  }
  M(n, o), je();
}
Et(["click"]);
function lf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var dl = { exports: {} };
(function(n, e) {
  (function(t) {
    var i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, s = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
      // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
      // E.g
      // With opts.alwaysNormalize = false (default, spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
      // With opts.alwaysNormalize = true (not spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
      buildAbsoluteURL: function(l, c, d) {
        if (d = d || {}, l = l.trim(), c = c.trim(), !c) {
          if (!d.alwaysNormalize)
            return l;
          var u = o.parseURL(l);
          if (!u)
            throw new Error("Error trying to parse base URL.");
          return u.path = o.normalizePath(
            u.path
          ), o.buildURLFromParts(u);
        }
        var h = o.parseURL(c);
        if (!h)
          throw new Error("Error trying to parse relative URL.");
        if (h.scheme)
          return d.alwaysNormalize ? (h.path = o.normalizePath(h.path), o.buildURLFromParts(h)) : c;
        var f = o.parseURL(l);
        if (!f)
          throw new Error("Error trying to parse base URL.");
        if (!f.netLoc && f.path && f.path[0] !== "/") {
          var g = s.exec(f.path);
          f.netLoc = g[1], f.path = g[2];
        }
        f.netLoc && !f.path && (f.path = "/");
        var m = {
          // 2c) Otherwise, the embedded URL inherits the scheme of
          // the base URL.
          scheme: f.scheme,
          netLoc: h.netLoc,
          path: null,
          params: h.params,
          query: h.query,
          fragment: h.fragment
        };
        if (!h.netLoc && (m.netLoc = f.netLoc, h.path[0] !== "/"))
          if (!h.path)
            m.path = f.path, h.params || (m.params = f.params, h.query || (m.query = f.query));
          else {
            var p = f.path, v = p.substring(0, p.lastIndexOf("/") + 1) + h.path;
            m.path = o.normalizePath(v);
          }
        return m.path === null && (m.path = d.alwaysNormalize ? o.normalizePath(h.path) : h.path), o.buildURLFromParts(m);
      },
      parseURL: function(l) {
        var c = i.exec(l);
        return c ? {
          scheme: c[1] || "",
          netLoc: c[2] || "",
          path: c[3] || "",
          params: c[4] || "",
          query: c[5] || "",
          fragment: c[6] || ""
        } : null;
      },
      normalizePath: function(l) {
        for (l = l.split("").reverse().join("").replace(r, ""); l.length !== (l = l.replace(a, "")).length; )
          ;
        return l.split("").reverse().join("");
      },
      buildURLFromParts: function(l) {
        return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment;
      }
    };
    n.exports = o;
  })();
})(dl);
var pn = dl.exports;
function da(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ot(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? da(Object(t), !0).forEach(function(i) {
      uf(n, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : da(Object(t)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return n;
}
function cf(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function df(n) {
  var e = cf(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
function uf(n, e, t) {
  return e = df(e), e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function it() {
  return it = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, it.apply(this, arguments);
}
const ae = Number.isFinite || function(n) {
  return typeof n == "number" && isFinite(n);
}, hf = Number.isSafeInteger || function(n) {
  return typeof n == "number" && Math.abs(n) <= ff;
}, ff = Number.MAX_SAFE_INTEGER || 9007199254740991;
let x = /* @__PURE__ */ (function(n) {
  return n.MEDIA_ATTACHING = "hlsMediaAttaching", n.MEDIA_ATTACHED = "hlsMediaAttached", n.MEDIA_DETACHING = "hlsMediaDetaching", n.MEDIA_DETACHED = "hlsMediaDetached", n.BUFFER_RESET = "hlsBufferReset", n.BUFFER_CODECS = "hlsBufferCodecs", n.BUFFER_CREATED = "hlsBufferCreated", n.BUFFER_APPENDING = "hlsBufferAppending", n.BUFFER_APPENDED = "hlsBufferAppended", n.BUFFER_EOS = "hlsBufferEos", n.BUFFER_FLUSHING = "hlsBufferFlushing", n.BUFFER_FLUSHED = "hlsBufferFlushed", n.MANIFEST_LOADING = "hlsManifestLoading", n.MANIFEST_LOADED = "hlsManifestLoaded", n.MANIFEST_PARSED = "hlsManifestParsed", n.LEVEL_SWITCHING = "hlsLevelSwitching", n.LEVEL_SWITCHED = "hlsLevelSwitched", n.LEVEL_LOADING = "hlsLevelLoading", n.LEVEL_LOADED = "hlsLevelLoaded", n.LEVEL_UPDATED = "hlsLevelUpdated", n.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", n.LEVELS_UPDATED = "hlsLevelsUpdated", n.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", n.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", n.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", n.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", n.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", n.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", n.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", n.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", n.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", n.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", n.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", n.CUES_PARSED = "hlsCuesParsed", n.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", n.INIT_PTS_FOUND = "hlsInitPtsFound", n.FRAG_LOADING = "hlsFragLoading", n.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", n.FRAG_LOADED = "hlsFragLoaded", n.FRAG_DECRYPTED = "hlsFragDecrypted", n.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", n.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", n.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", n.FRAG_PARSED = "hlsFragParsed", n.FRAG_BUFFERED = "hlsFragBuffered", n.FRAG_CHANGED = "hlsFragChanged", n.FPS_DROP = "hlsFpsDrop", n.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", n.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", n.ERROR = "hlsError", n.DESTROYING = "hlsDestroying", n.KEY_LOADING = "hlsKeyLoading", n.KEY_LOADED = "hlsKeyLoaded", n.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", n.BACK_BUFFER_REACHED = "hlsBackBufferReached", n.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", n;
})({}), xe = /* @__PURE__ */ (function(n) {
  return n.NETWORK_ERROR = "networkError", n.MEDIA_ERROR = "mediaError", n.KEY_SYSTEM_ERROR = "keySystemError", n.MUX_ERROR = "muxError", n.OTHER_ERROR = "otherError", n;
})({}), N = /* @__PURE__ */ (function(n) {
  return n.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", n.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", n.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", n.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", n.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", n.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", n.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", n.MANIFEST_LOAD_ERROR = "manifestLoadError", n.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", n.MANIFEST_PARSING_ERROR = "manifestParsingError", n.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", n.LEVEL_EMPTY_ERROR = "levelEmptyError", n.LEVEL_LOAD_ERROR = "levelLoadError", n.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", n.LEVEL_PARSING_ERROR = "levelParsingError", n.LEVEL_SWITCH_ERROR = "levelSwitchError", n.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", n.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", n.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", n.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", n.FRAG_LOAD_ERROR = "fragLoadError", n.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", n.FRAG_DECRYPT_ERROR = "fragDecryptError", n.FRAG_PARSING_ERROR = "fragParsingError", n.FRAG_GAP = "fragGap", n.REMUX_ALLOC_ERROR = "remuxAllocError", n.KEY_LOAD_ERROR = "keyLoadError", n.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", n.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", n.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", n.BUFFER_APPEND_ERROR = "bufferAppendError", n.BUFFER_APPENDING_ERROR = "bufferAppendingError", n.BUFFER_STALLED_ERROR = "bufferStalledError", n.BUFFER_FULL_ERROR = "bufferFullError", n.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", n.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", n.INTERNAL_EXCEPTION = "internalException", n.INTERNAL_ABORTED = "aborted", n.UNKNOWN = "unknown", n;
})({});
const ri = function() {
}, Yr = {
  trace: ri,
  debug: ri,
  log: ri,
  warn: ri,
  info: ri,
  error: ri
};
let ji = Yr;
function gf(n) {
  const e = self.console[n];
  return e ? e.bind(self.console, `[${n}] >`) : ri;
}
function mf(n, ...e) {
  e.forEach(function(t) {
    ji[t] = n[t] ? n[t].bind(n) : gf(t);
  });
}
function pf(n, e) {
  if (typeof console == "object" && n === !0 || typeof n == "object") {
    mf(
      n,
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    );
    try {
      ji.log(`Debug logs enabled for "${e}" in hls.js version 1.5.13`);
    } catch {
      ji = Yr;
    }
  } else
    ji = Yr;
}
const k = ji, vf = /^(\d+)x(\d+)$/, ua = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class Ze {
  constructor(e) {
    typeof e == "string" && (e = Ze.parseAttrList(e)), it(this, e);
  }
  get clientAttrs() {
    return Object.keys(this).filter((e) => e.substring(0, 2) === "X-");
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const i = new Uint8Array(t.length / 2);
      for (let s = 0; s < t.length / 2; s++)
        i[s] = parseInt(t.slice(s * 2, s * 2 + 2), 16);
      return i;
    } else
      return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const i = this[e];
    return i ? parseFloat(i) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = vf.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e) {
    let t;
    const i = {};
    for (ua.lastIndex = 0; (t = ua.exec(e)) !== null; ) {
      let r = t[2];
      r.indexOf('"') === 0 && r.lastIndexOf('"') === r.length - 1 && (r = r.slice(1, -1));
      const a = t[1].trim();
      i[a] = r;
    }
    return i;
  }
}
function yf(n) {
  return n !== "ID" && n !== "CLASS" && n !== "START-DATE" && n !== "DURATION" && n !== "END-DATE" && n !== "END-ON-NEXT";
}
function xf(n) {
  return n === "SCTE35-OUT" || n === "SCTE35-IN";
}
class ul {
  constructor(e, t) {
    if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, t) {
      const i = t.attr;
      for (const s in i)
        if (Object.prototype.hasOwnProperty.call(e, s) && e[s] !== i[s]) {
          k.warn(`DATERANGE tag attribute: "${s}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = s;
          break;
        }
      e = it(new Ze({}), i, e);
    }
    if (this.attr = e, this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const i = new Date(this.attr["END-DATE"]);
      ae(i.getTime()) && (this._endDate = i);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    if (this._endDate)
      return this._endDate;
    const e = this.duration;
    return e !== null ? new Date(this._startDate.getTime() + e * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if (ae(e))
        return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && ae(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class);
  }
}
class $s {
  constructor() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var Be = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class hl {
  constructor(e) {
    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
      [Be.AUDIO]: null,
      [Be.VIDEO]: null,
      [Be.AUDIOVIDEO]: null
    }, this.baseurl = e;
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const i = e.split("@", 2);
    let s;
    i.length === 1 ? s = t?.byteRangeEndOffset || 0 : s = parseInt(i[1]), this._byteRange = [s, parseInt(i[0]) + s];
  }
  get byteRange() {
    return this._byteRange ? this._byteRange : [];
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = pn.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
}
class fr extends hl {
  constructor(e, t) {
    super(t), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new $s(), this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e;
  }
  get decryptdata() {
    const {
      levelkeys: e
    } = this;
    if (!e && !this._decryptdata)
      return null;
    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
      const t = this.levelkeys.identity;
      if (t)
        this._decryptdata = t.getDecryptData(this.sn);
      else {
        const i = Object.keys(this.levelkeys);
        if (i.length === 1)
          return this._decryptdata = this.levelkeys[i[0]].getDecryptData(this.sn);
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null || !ae(this.programDateTime))
      return null;
    const e = ae(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted)
      return !0;
    if (this.levelkeys) {
      const t = Object.keys(this.levelkeys), i = t.length;
      if (i > 1 || i === 1 && this.levelkeys[t[0]].encrypted)
        return !0;
    }
    return !1;
  }
  setKeyFormat(e) {
    if (this.levelkeys) {
      const t = this.levelkeys[e];
      t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, i, s, r, a = !1) {
    const {
      elementaryStreams: o
    } = this, l = o[e];
    if (!l) {
      o[e] = {
        startPTS: t,
        endPTS: i,
        startDTS: s,
        endDTS: r,
        partial: a
      };
      return;
    }
    l.startPTS = Math.min(l.startPTS, t), l.endPTS = Math.max(l.endPTS, i), l.startDTS = Math.min(l.startDTS, s), l.endDTS = Math.max(l.endDTS, r);
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[Be.AUDIO] = null, e[Be.VIDEO] = null, e[Be.AUDIOVIDEO] = null;
  }
}
class Ef extends hl {
  constructor(e, t, i, s, r) {
    super(i), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new $s(), this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = s;
    const a = e.enumeratedString("BYTERANGE");
    a && this.setByteRange(a, r), r && (this.fragOffset = r.fragOffset + r.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: e
    } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
const Tf = 10;
class bf {
  constructor(e) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, i = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!i || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && i > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1, this.availabilityDelay = e.availabilityDelay;
  }
  get hasProgramDateTime() {
    return this.fragments.length ? ae(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || Tf;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    var e;
    return (e = this.fragments) != null && e.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
}
function vn(n) {
  return Uint8Array.from(atob(n), (e) => e.charCodeAt(0));
}
function _f(n) {
  const e = zr(n).subarray(0, 16), t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function Sf(n) {
  const e = function(i, s, r) {
    const a = i[s];
    i[s] = i[r], i[r] = a;
  };
  e(n, 0, 3), e(n, 1, 2), e(n, 4, 5), e(n, 6, 7);
}
function Af(n) {
  const e = n.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const i = e[1].split(";"), s = i[i.length - 1].split(",");
    if (s.length === 2) {
      const r = s[0] === "base64", a = s[1];
      r ? (i.splice(-1, 1), t = vn(a)) : t = _f(a);
    }
  }
  return t;
}
function zr(n) {
  return Uint8Array.from(unescape(encodeURIComponent(n)), (e) => e.charCodeAt(0));
}
const ki = typeof self < "u" ? self : void 0;
var Xe = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, gt = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function ha(n) {
  switch (n) {
    case gt.FAIRPLAY:
      return Xe.FAIRPLAY;
    case gt.PLAYREADY:
      return Xe.PLAYREADY;
    case gt.WIDEVINE:
      return Xe.WIDEVINE;
    case gt.CLEARKEY:
      return Xe.CLEARKEY;
  }
}
var fl = {
  WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
};
function Lf(n) {
  if (n === fl.WIDEVINE)
    return Xe.WIDEVINE;
}
function fa(n) {
  switch (n) {
    case Xe.FAIRPLAY:
      return gt.FAIRPLAY;
    case Xe.PLAYREADY:
      return gt.PLAYREADY;
    case Xe.WIDEVINE:
      return gt.WIDEVINE;
    case Xe.CLEARKEY:
      return gt.CLEARKEY;
  }
}
function gr(n) {
  const {
    drmSystems: e,
    widevineLicenseUrl: t
  } = n, i = e ? [Xe.FAIRPLAY, Xe.WIDEVINE, Xe.PLAYREADY, Xe.CLEARKEY].filter((s) => !!e[s]) : [];
  return !i[Xe.WIDEVINE] && t && i.push(Xe.WIDEVINE), i;
}
const gl = (function(n) {
  return ki != null && (n = ki.navigator) != null && n.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
})();
function wf(n, e, t, i) {
  let s;
  switch (n) {
    case Xe.FAIRPLAY:
      s = ["cenc", "sinf"];
      break;
    case Xe.WIDEVINE:
    case Xe.PLAYREADY:
      s = ["cenc"];
      break;
    case Xe.CLEARKEY:
      s = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${n}`);
  }
  return Rf(s, e, t, i);
}
function Rf(n, e, t, i) {
  return [{
    initDataTypes: n,
    persistentState: i.persistentState || "optional",
    distinctiveIdentifier: i.distinctiveIdentifier || "optional",
    sessionTypes: i.sessionTypes || [i.sessionType || "temporary"],
    audioCapabilities: e.map((r) => ({
      contentType: `audio/mp4; codecs="${r}"`,
      robustness: i.audioRobustness || "",
      encryptionScheme: i.audioEncryptionScheme || null
    })),
    videoCapabilities: t.map((r) => ({
      contentType: `video/mp4; codecs="${r}"`,
      robustness: i.videoRobustness || "",
      encryptionScheme: i.videoEncryptionScheme || null
    }))
  }];
}
function di(n, e, t) {
  return Uint8Array.prototype.slice ? n.slice(e, t) : new Uint8Array(Array.prototype.slice.call(n, e, t));
}
const yn = (n, e) => e + 10 <= n.length && n[e] === 73 && n[e + 1] === 68 && n[e + 2] === 51 && n[e + 3] < 255 && n[e + 4] < 255 && n[e + 6] < 128 && n[e + 7] < 128 && n[e + 8] < 128 && n[e + 9] < 128, ml = (n, e) => e + 10 <= n.length && n[e] === 51 && n[e + 1] === 68 && n[e + 2] === 73 && n[e + 3] < 255 && n[e + 4] < 255 && n[e + 6] < 128 && n[e + 7] < 128 && n[e + 8] < 128 && n[e + 9] < 128, zi = (n, e) => {
  const t = e;
  let i = 0;
  for (; yn(n, e); ) {
    i += 10;
    const s = er(n, e + 6);
    i += s, ml(n, e + 10) && (i += 10), e += i;
  }
  if (i > 0)
    return n.subarray(t, t + i);
}, er = (n, e) => {
  let t = 0;
  return t = (n[e] & 127) << 21, t |= (n[e + 1] & 127) << 14, t |= (n[e + 2] & 127) << 7, t |= n[e + 3] & 127, t;
}, If = (n, e) => yn(n, e) && er(n, e + 6) + 10 <= n.length - e, xn = (n) => {
  const e = vl(n);
  for (let t = 0; t < e.length; t++) {
    const i = e[t];
    if (pl(i))
      return Mf(i);
  }
}, pl = (n) => n && n.key === "PRIV" && n.info === "com.apple.streaming.transportStreamTimestamp", Cf = (n) => {
  const e = String.fromCharCode(n[0], n[1], n[2], n[3]), t = er(n, 4), i = 10;
  return {
    type: e,
    size: t,
    data: n.subarray(i, i + t)
  };
}, vl = (n) => {
  let e = 0;
  const t = [];
  for (; yn(n, e); ) {
    const i = er(n, e + 6);
    e += 10;
    const s = e + i;
    for (; e + 8 < s; ) {
      const r = Cf(n.subarray(e)), a = Df(r);
      a && t.push(a), e += r.size + 10;
    }
    ml(n, e) && (e += 10);
  }
  return t;
}, Df = (n) => n.type === "PRIV" ? kf(n) : n.type[0] === "W" ? Of(n) : Pf(n), kf = (n) => {
  if (n.size < 2)
    return;
  const e = Ut(n.data, !0), t = new Uint8Array(n.data.subarray(e.length + 1));
  return {
    key: n.type,
    info: e,
    data: t.buffer
  };
}, Pf = (n) => {
  if (n.size < 2)
    return;
  if (n.type === "TXXX") {
    let t = 1;
    const i = Ut(n.data.subarray(t), !0);
    t += i.length + 1;
    const s = Ut(n.data.subarray(t));
    return {
      key: n.type,
      info: i,
      data: s
    };
  }
  const e = Ut(n.data.subarray(1));
  return {
    key: n.type,
    data: e
  };
}, Of = (n) => {
  if (n.type === "WXXX") {
    if (n.size < 2)
      return;
    let t = 1;
    const i = Ut(n.data.subarray(t), !0);
    t += i.length + 1;
    const s = Ut(n.data.subarray(t));
    return {
      key: n.type,
      info: i,
      data: s
    };
  }
  const e = Ut(n.data);
  return {
    key: n.type,
    data: e
  };
}, Mf = (n) => {
  if (n.data.byteLength === 8) {
    const e = new Uint8Array(n.data), t = e[3] & 1;
    let i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return i /= 45, t && (i += 4772185884e-2), Math.round(i);
  }
}, Ut = (n, e = !1) => {
  const t = Ff();
  if (t) {
    const c = t.decode(n);
    if (e) {
      const d = c.indexOf("\0");
      return d !== -1 ? c.substring(0, d) : c;
    }
    return c.replace(/\0/g, "");
  }
  const i = n.length;
  let s, r, a, o = "", l = 0;
  for (; l < i; ) {
    if (s = n[l++], s === 0 && e)
      return o;
    if (s === 0 || s === 3)
      continue;
    switch (s >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        o += String.fromCharCode(s);
        break;
      case 12:
      case 13:
        r = n[l++], o += String.fromCharCode((s & 31) << 6 | r & 63);
        break;
      case 14:
        r = n[l++], a = n[l++], o += String.fromCharCode((s & 15) << 12 | (r & 63) << 6 | (a & 63) << 0);
        break;
    }
  }
  return o;
};
let mr;
function Ff() {
  if (!navigator.userAgent.includes("PlayStation 4"))
    return !mr && typeof self.TextDecoder < "u" && (mr = new self.TextDecoder("utf-8")), mr;
}
const Pt = {
  hexDump: function(n) {
    let e = "";
    for (let t = 0; t < n.length; t++) {
      let i = n[t].toString(16);
      i.length < 2 && (i = "0" + i), e += i;
    }
    return e;
  }
}, Ms = Math.pow(2, 32) - 1, Nf = [].push, yl = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function rt(n) {
  return String.fromCharCode.apply(null, n);
}
function xl(n, e) {
  const t = n[e] << 8 | n[e + 1];
  return t < 0 ? 65536 + t : t;
}
function me(n, e) {
  const t = El(n, e);
  return t < 0 ? 4294967296 + t : t;
}
function ga(n, e) {
  let t = me(n, e);
  return t *= Math.pow(2, 32), t += me(n, e + 4), t;
}
function El(n, e) {
  return n[e] << 24 | n[e + 1] << 16 | n[e + 2] << 8 | n[e + 3];
}
function pr(n, e, t) {
  n[e] = t >> 24, n[e + 1] = t >> 16 & 255, n[e + 2] = t >> 8 & 255, n[e + 3] = t & 255;
}
function Bf(n) {
  const e = n.byteLength;
  for (let t = 0; t < e; ) {
    const i = me(n, t);
    if (i > 8 && n[t + 4] === 109 && n[t + 5] === 111 && n[t + 6] === 111 && n[t + 7] === 102)
      return !0;
    t = i > 1 ? t + i : e;
  }
  return !1;
}
function Te(n, e) {
  const t = [];
  if (!e.length)
    return t;
  const i = n.byteLength;
  for (let s = 0; s < i; ) {
    const r = me(n, s), a = rt(n.subarray(s + 4, s + 8)), o = r > 1 ? s + r : i;
    if (a === e[0])
      if (e.length === 1)
        t.push(n.subarray(s + 8, o));
      else {
        const l = Te(n.subarray(s + 8, o), e.slice(1));
        l.length && Nf.apply(t, l);
      }
    s = o;
  }
  return t;
}
function Uf(n) {
  const e = [], t = n[0];
  let i = 8;
  const s = me(n, i);
  i += 4;
  let r = 0, a = 0;
  t === 0 ? (r = me(n, i), a = me(n, i + 4), i += 8) : (r = ga(n, i), a = ga(n, i + 8), i += 16), i += 2;
  let o = n.length + a;
  const l = xl(n, i);
  i += 2;
  for (let c = 0; c < l; c++) {
    let d = i;
    const u = me(n, d);
    d += 4;
    const h = u & 2147483647;
    if ((u & 2147483648) >>> 31 === 1)
      return k.warn("SIDX has hierarchical references (not supported)"), null;
    const g = me(n, d);
    d += 4, e.push({
      referenceSize: h,
      subsegmentDuration: g,
      // unscaled
      info: {
        duration: g / s,
        start: o,
        end: o + h - 1
      }
    }), o += h, d += 4, i = d;
  }
  return {
    earliestPresentationTime: r,
    timescale: s,
    version: t,
    referencesCount: l,
    references: e
  };
}
function Tl(n) {
  const e = [], t = Te(n, ["moov", "trak"]);
  for (let s = 0; s < t.length; s++) {
    const r = t[s], a = Te(r, ["tkhd"])[0];
    if (a) {
      let o = a[0];
      const l = me(a, o === 0 ? 12 : 20), c = Te(r, ["mdia", "mdhd"])[0];
      if (c) {
        o = c[0];
        const d = me(c, o === 0 ? 12 : 20), u = Te(r, ["mdia", "hdlr"])[0];
        if (u) {
          const h = rt(u.subarray(8, 12)), f = {
            soun: Be.AUDIO,
            vide: Be.VIDEO
          }[h];
          if (f) {
            const g = Te(r, ["mdia", "minf", "stbl", "stsd"])[0], m = Gf(g);
            e[l] = {
              timescale: d,
              type: f
            }, e[f] = ot({
              timescale: d,
              id: l
            }, m);
          }
        }
      }
    }
  }
  return Te(n, ["moov", "mvex", "trex"]).forEach((s) => {
    const r = me(s, 4), a = e[r];
    a && (a.default = {
      duration: me(s, 12),
      flags: me(s, 20)
    });
  }), e;
}
function Gf(n) {
  const e = n.subarray(8), t = e.subarray(86), i = rt(e.subarray(4, 8));
  let s = i;
  const r = i === "enca" || i === "encv";
  if (r) {
    const o = Te(e, [i])[0].subarray(i === "enca" ? 28 : 78);
    Te(o, ["sinf"]).forEach((c) => {
      const d = Te(c, ["schm"])[0];
      if (d) {
        const u = rt(d.subarray(4, 8));
        if (u === "cbcs" || u === "cenc") {
          const h = Te(c, ["frma"])[0];
          h && (s = rt(h));
        }
      }
    });
  }
  switch (s) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const a = Te(t, ["avcC"])[0];
      s += "." + ls(a[1]) + ls(a[2]) + ls(a[3]);
      break;
    }
    case "mp4a": {
      const a = Te(e, [i])[0], o = Te(a.subarray(28), ["esds"])[0];
      if (o && o.length > 12) {
        let l = 4;
        if (o[l++] !== 3)
          break;
        l = vr(o, l), l += 2;
        const c = o[l++];
        if (c & 128 && (l += 2), c & 64 && (l += o[l++]), o[l++] !== 4)
          break;
        l = vr(o, l);
        const d = o[l++];
        if (d === 64)
          s += "." + ls(d);
        else
          break;
        if (l += 12, o[l++] !== 5)
          break;
        l = vr(o, l);
        const u = o[l++];
        let h = (u & 248) >> 3;
        h === 31 && (h += 1 + ((u & 7) << 3) + ((o[l] & 224) >> 5)), s += "." + h;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const a = Te(t, ["hvcC"])[0], o = a[1], l = ["", "A", "B", "C"][o >> 6], c = o & 31, d = me(a, 2), u = (o & 32) >> 5 ? "H" : "L", h = a[12], f = a.subarray(6, 12);
      s += "." + l + c, s += "." + d.toString(16).toUpperCase(), s += "." + u + h;
      let g = "";
      for (let m = f.length; m--; ) {
        const p = f[m];
        (p || g) && (g = "." + p.toString(16).toUpperCase() + g);
      }
      s += g;
      break;
    }
    case "dvh1":
    case "dvhe": {
      const a = Te(t, ["dvcC"])[0], o = a[2] >> 1 & 127, l = a[2] << 5 & 32 | a[3] >> 3 & 31;
      s += "." + kt(o) + "." + kt(l);
      break;
    }
    case "vp09": {
      const a = Te(t, ["vpcC"])[0], o = a[4], l = a[5], c = a[6] >> 4 & 15;
      s += "." + kt(o) + "." + kt(l) + "." + kt(c);
      break;
    }
    case "av01": {
      const a = Te(t, ["av1C"])[0], o = a[1] >>> 5, l = a[1] & 31, c = a[2] >>> 7 ? "H" : "M", d = (a[2] & 64) >> 6, u = (a[2] & 32) >> 5, h = o === 2 && d ? u ? 12 : 10 : d ? 10 : 8, f = (a[2] & 16) >> 4, g = (a[2] & 8) >> 3, m = (a[2] & 4) >> 2, p = a[2] & 3;
      s += "." + o + "." + kt(l) + c + "." + kt(h) + "." + f + "." + g + m + p + "." + kt(1) + "." + kt(1) + "." + kt(1) + "." + 0;
      break;
    }
  }
  return {
    codec: s,
    encrypted: r
  };
}
function vr(n, e) {
  const t = e + 5;
  for (; n[e++] & 128 && e < t; )
    ;
  return e;
}
function ls(n) {
  return ("0" + n.toString(16).toUpperCase()).slice(-2);
}
function kt(n) {
  return (n < 10 ? "0" : "") + n;
}
function Hf(n, e) {
  if (!n || !e)
    return n;
  const t = e.keyId;
  return t && e.isCommonEncryption && Te(n, ["moov", "trak"]).forEach((s) => {
    const a = Te(s, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
    let o = Te(a, ["enca"]);
    const l = o.length > 0;
    l || (o = Te(a, ["encv"])), o.forEach((c) => {
      const d = l ? c.subarray(28) : c.subarray(78);
      Te(d, ["sinf"]).forEach((h) => {
        const f = bl(h);
        if (f) {
          const g = f.subarray(8, 24);
          g.some((m) => m !== 0) || (k.log(`[eme] Patching keyId in 'enc${l ? "a" : "v"}>sinf>>tenc' box: ${Pt.hexDump(g)} -> ${Pt.hexDump(t)}`), f.set(t, 8));
        }
      });
    });
  }), n;
}
function bl(n) {
  const e = Te(n, ["schm"])[0];
  if (e) {
    const t = rt(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc")
      return Te(n, ["schi", "tenc"])[0];
  }
  return k.error("[eme] missing 'schm' box"), null;
}
function Vf(n, e) {
  return Te(e, ["moof", "traf"]).reduce((t, i) => {
    const s = Te(i, ["tfdt"])[0], r = s[0], a = Te(i, ["tfhd"]).reduce((o, l) => {
      const c = me(l, 4), d = n[c];
      if (d) {
        let u = me(s, 4);
        if (r === 1) {
          if (u === Ms)
            return k.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), o;
          u *= Ms + 1, u += me(s, 8);
        }
        const h = d.timescale || 9e4, f = u / h;
        if (ae(f) && (o === null || f < o))
          return f;
      }
      return o;
    }, null);
    return a !== null && ae(a) && (t === null || a < t) ? a : t;
  }, null);
}
function Kf(n, e) {
  let t = 0, i = 0, s = 0;
  const r = Te(n, ["moof", "traf"]);
  for (let a = 0; a < r.length; a++) {
    const o = r[a], l = Te(o, ["tfhd"])[0], c = me(l, 4), d = e[c];
    if (!d)
      continue;
    const u = d.default, h = me(l, 0) | u?.flags;
    let f = u?.duration;
    h & 8 && (h & 2 ? f = me(l, 12) : f = me(l, 8));
    const g = d.timescale || 9e4, m = Te(o, ["trun"]);
    for (let p = 0; p < m.length; p++) {
      if (t = Wf(m[p]), !t && f) {
        const v = me(m[p], 4);
        t = f * v;
      }
      d.type === Be.VIDEO ? i += t / g : d.type === Be.AUDIO && (s += t / g);
    }
  }
  if (i === 0 && s === 0) {
    let a = 1 / 0, o = 0, l = 0;
    const c = Te(n, ["sidx"]);
    for (let d = 0; d < c.length; d++) {
      const u = Uf(c[d]);
      if (u != null && u.references) {
        a = Math.min(a, u.earliestPresentationTime / u.timescale);
        const h = u.references.reduce((f, g) => f + g.info.duration || 0, 0);
        o = Math.max(o, h + u.earliestPresentationTime / u.timescale), l = o - a;
      }
    }
    if (l && ae(l))
      return l;
  }
  return i || s;
}
function Wf(n) {
  const e = me(n, 0);
  let t = 8;
  e & 1 && (t += 4), e & 4 && (t += 4);
  let i = 0;
  const s = me(n, 4);
  for (let r = 0; r < s; r++) {
    if (e & 256) {
      const a = me(n, t);
      i += a, t += 4;
    }
    e & 512 && (t += 4), e & 1024 && (t += 4), e & 2048 && (t += 4);
  }
  return i;
}
function jf(n, e, t) {
  Te(e, ["moof", "traf"]).forEach((i) => {
    Te(i, ["tfhd"]).forEach((s) => {
      const r = me(s, 4), a = n[r];
      if (!a)
        return;
      const o = a.timescale || 9e4;
      Te(i, ["tfdt"]).forEach((l) => {
        const c = l[0], d = t * o;
        if (d) {
          let u = me(l, 4);
          if (c === 0)
            u -= d, u = Math.max(u, 0), pr(l, 4, u);
          else {
            u *= Math.pow(2, 32), u += me(l, 8), u -= d, u = Math.max(u, 0);
            const h = Math.floor(u / (Ms + 1)), f = Math.floor(u % (Ms + 1));
            pr(l, 4, h), pr(l, 8, f);
          }
        }
      });
    });
  });
}
function Yf(n) {
  const e = {
    valid: null,
    remainder: null
  }, t = Te(n, ["moof"]);
  if (t.length < 2)
    return e.remainder = n, e;
  const i = t[t.length - 1];
  return e.valid = di(n, 0, i.byteOffset - 8), e.remainder = di(n, i.byteOffset - 8), e;
}
function xt(n, e) {
  const t = new Uint8Array(n.length + e.length);
  return t.set(n), t.set(e, n.length), t;
}
function ma(n, e) {
  const t = [], i = e.samples, s = e.timescale, r = e.id;
  let a = !1;
  return Te(i, ["moof"]).map((l) => {
    const c = l.byteOffset - 8;
    Te(l, ["traf"]).map((u) => {
      const h = Te(u, ["tfdt"]).map((f) => {
        const g = f[0];
        let m = me(f, 4);
        return g === 1 && (m *= Math.pow(2, 32), m += me(f, 8)), m / s;
      })[0];
      return h !== void 0 && (n = h), Te(u, ["tfhd"]).map((f) => {
        const g = me(f, 4), m = me(f, 0) & 16777215, p = (m & 1) !== 0, v = (m & 2) !== 0, b = (m & 8) !== 0;
        let _ = 0;
        const E = (m & 16) !== 0;
        let T = 0;
        const A = (m & 32) !== 0;
        let S = 8;
        g === r && (p && (S += 8), v && (S += 4), b && (_ = me(f, S), S += 4), E && (T = me(f, S), S += 4), A && (S += 4), e.type === "video" && (a = zf(e.codec)), Te(u, ["trun"]).map((w) => {
          const C = w[0], L = me(w, 0) & 16777215, I = (L & 1) !== 0;
          let K = 0;
          const F = (L & 4) !== 0, D = (L & 256) !== 0;
          let U = 0;
          const G = (L & 512) !== 0;
          let ee = 0;
          const oe = (L & 1024) !== 0, H = (L & 2048) !== 0;
          let B = 0;
          const O = me(w, 4);
          let Y = 8;
          I && (K = me(w, Y), Y += 4), F && (Y += 4);
          let q = K + c;
          for (let le = 0; le < O; le++) {
            if (D ? (U = me(w, Y), Y += 4) : U = _, G ? (ee = me(w, Y), Y += 4) : ee = T, oe && (Y += 4), H && (C === 0 ? B = me(w, Y) : B = El(w, Y), Y += 4), e.type === Be.VIDEO) {
              let te = 0;
              for (; te < ee; ) {
                const ge = me(i, q);
                if (q += 4, qf(a, i[q])) {
                  const Q = i.subarray(q, q + ge);
                  _l(Q, a ? 2 : 1, n + B / s, t);
                }
                q += ge, te += ge + 4;
              }
            }
            n += U / s;
          }
        }));
      });
    });
  }), t;
}
function zf(n) {
  if (!n)
    return !1;
  const e = n.indexOf("."), t = e < 0 ? n : n.substring(0, e);
  return t === "hvc1" || t === "hev1" || // Dolby Vision
  t === "dvh1" || t === "dvhe";
}
function qf(n, e) {
  if (n) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function _l(n, e, t, i) {
  const s = Sl(n);
  let r = 0;
  r += e;
  let a = 0, o = 0, l = 0;
  for (; r < s.length; ) {
    a = 0;
    do {
      if (r >= s.length)
        break;
      l = s[r++], a += l;
    } while (l === 255);
    o = 0;
    do {
      if (r >= s.length)
        break;
      l = s[r++], o += l;
    } while (l === 255);
    const c = s.length - r;
    let d = r;
    if (o < c)
      r += o;
    else if (o > c) {
      k.error(`Malformed SEI payload. ${o} is too small, only ${c} bytes left to parse.`);
      break;
    }
    if (a === 4) {
      if (s[d++] === 181) {
        const h = xl(s, d);
        if (d += 2, h === 49) {
          const f = me(s, d);
          if (d += 4, f === 1195456820) {
            const g = s[d++];
            if (g === 3) {
              const m = s[d++], p = 31 & m, v = 64 & m, b = v ? 2 + p * 3 : 0, _ = new Uint8Array(b);
              if (v) {
                _[0] = m;
                for (let E = 1; E < b; E++)
                  _[E] = s[d++];
              }
              i.push({
                type: g,
                payloadType: a,
                pts: t,
                bytes: _
              });
            }
          }
        }
      }
    } else if (a === 5 && o > 16) {
      const u = [];
      for (let g = 0; g < 16; g++) {
        const m = s[d++].toString(16);
        u.push(m.length == 1 ? "0" + m : m), (g === 3 || g === 5 || g === 7 || g === 9) && u.push("-");
      }
      const h = o - 16, f = new Uint8Array(h);
      for (let g = 0; g < h; g++)
        f[g] = s[d++];
      i.push({
        payloadType: a,
        pts: t,
        uuid: u.join(""),
        userData: Ut(f),
        userDataBytes: f
      });
    }
  }
}
function Sl(n) {
  const e = n.byteLength, t = [];
  let i = 1;
  for (; i < e - 2; )
    n[i] === 0 && n[i + 1] === 0 && n[i + 2] === 3 ? (t.push(i + 2), i += 2) : i++;
  if (t.length === 0)
    return n;
  const s = e - t.length, r = new Uint8Array(s);
  let a = 0;
  for (i = 0; i < s; a++, i++)
    a === t[0] && (a++, t.shift()), r[i] = n[a];
  return r;
}
function Xf(n) {
  const e = n[0];
  let t = "", i = "", s = 0, r = 0, a = 0, o = 0, l = 0, c = 0;
  if (e === 0) {
    for (; rt(n.subarray(c, c + 1)) !== "\0"; )
      t += rt(n.subarray(c, c + 1)), c += 1;
    for (t += rt(n.subarray(c, c + 1)), c += 1; rt(n.subarray(c, c + 1)) !== "\0"; )
      i += rt(n.subarray(c, c + 1)), c += 1;
    i += rt(n.subarray(c, c + 1)), c += 1, s = me(n, 12), r = me(n, 16), o = me(n, 20), l = me(n, 24), c = 28;
  } else if (e === 1) {
    c += 4, s = me(n, c), c += 4;
    const u = me(n, c);
    c += 4;
    const h = me(n, c);
    for (c += 4, a = 2 ** 32 * u + h, hf(a) || (a = Number.MAX_SAFE_INTEGER, k.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = me(n, c), c += 4, l = me(n, c), c += 4; rt(n.subarray(c, c + 1)) !== "\0"; )
      t += rt(n.subarray(c, c + 1)), c += 1;
    for (t += rt(n.subarray(c, c + 1)), c += 1; rt(n.subarray(c, c + 1)) !== "\0"; )
      i += rt(n.subarray(c, c + 1)), c += 1;
    i += rt(n.subarray(c, c + 1)), c += 1;
  }
  const d = n.subarray(c, n.byteLength);
  return {
    schemeIdUri: t,
    value: i,
    timeScale: s,
    presentationTime: a,
    presentationTimeDelta: r,
    eventDuration: o,
    id: l,
    payload: d
  };
}
function Qf(n, ...e) {
  const t = e.length;
  let i = 8, s = t;
  for (; s--; )
    i += e[s].byteLength;
  const r = new Uint8Array(i);
  for (r[0] = i >> 24 & 255, r[1] = i >> 16 & 255, r[2] = i >> 8 & 255, r[3] = i & 255, r.set(n, 4), s = 0, i = 8; s < t; s++)
    r.set(e[s], i), i += e[s].byteLength;
  return r;
}
function Zf(n, e, t) {
  if (n.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let i, s;
  i = 0, s = new Uint8Array();
  let r;
  i > 0 ? (r = new Uint8Array(4), e.length > 0 && new DataView(r.buffer).setUint32(0, e.length, !1)) : r = new Uint8Array();
  const a = new Uint8Array(4);
  return t && t.byteLength > 0 && new DataView(a.buffer).setUint32(0, t.byteLength, !1), Qf(
    [112, 115, 115, 104],
    new Uint8Array([
      i,
      0,
      0,
      0
      // Flags
    ]),
    n,
    // 16 bytes
    r,
    s,
    a,
    t || new Uint8Array()
  );
}
function Jf(n) {
  if (!(n instanceof ArrayBuffer) || n.byteLength < 32)
    return null;
  const e = {
    version: 0,
    systemId: "",
    kids: null,
    data: null
  }, t = new DataView(n), i = t.getUint32(0);
  if (n.byteLength !== i && i > 44 || t.getUint32(4) !== 1886614376 || (e.version = t.getUint32(8) >>> 24, e.version > 1))
    return null;
  e.systemId = Pt.hexDump(new Uint8Array(n, 12, 16));
  const r = t.getUint32(28);
  if (e.version === 0) {
    if (i - 32 < r)
      return null;
    e.data = new Uint8Array(n, 32, r);
  } else if (e.version === 1) {
    e.kids = [];
    for (let a = 0; a < r; a++)
      e.kids.push(new Uint8Array(n, 32 + a * 16, 16));
  }
  return e;
}
let cs = {};
class qi {
  static clearKeyUriToKeyIdMap() {
    cs = {};
  }
  constructor(e, t, i, s = [1], r = null) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = i, this.keyFormatVersions = s, this.iv = r, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && e !== "AES-128";
  }
  isSupported() {
    if (this.method) {
      if (this.method === "AES-128" || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case gt.FAIRPLAY:
        case gt.WIDEVINE:
        case gt.PLAYREADY:
        case gt.CLEARKEY:
          return ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(e) {
    if (!this.encrypted || !this.uri)
      return null;
    if (this.method === "AES-128" && this.uri && !this.iv) {
      typeof e != "number" && (this.method === "AES-128" && !this.iv && k.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
      const i = $f(e);
      return new qi(this.method, this.uri, "identity", this.keyFormatVersions, i);
    }
    const t = Af(this.uri);
    if (t)
      switch (this.keyFormat) {
        case gt.WIDEVINE:
          this.pssh = t, t.length >= 22 && (this.keyId = t.subarray(t.length - 22, t.length - 6));
          break;
        case gt.PLAYREADY: {
          const i = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = Zf(i, null, t);
          const s = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2), r = String.fromCharCode.apply(null, Array.from(s)), a = r.substring(r.indexOf("<"), r.length), c = new DOMParser().parseFromString(a, "text/xml").getElementsByTagName("KID")[0];
          if (c) {
            const d = c.childNodes[0] ? c.childNodes[0].nodeValue : c.getAttribute("VALUE");
            if (d) {
              const u = vn(d).subarray(0, 16);
              Sf(u), this.keyId = u;
            }
          }
          break;
        }
        default: {
          let i = t.subarray(0, 16);
          if (i.length !== 16) {
            const s = new Uint8Array(16);
            s.set(i, 16 - i.length), i = s;
          }
          this.keyId = i;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let i = cs[this.uri];
      if (!i) {
        const s = Object.keys(cs).length % Number.MAX_SAFE_INTEGER;
        i = new Uint8Array(16), new DataView(i.buffer, 12, 4).setUint32(0, s), cs[this.uri] = i;
      }
      this.keyId = i;
    }
    return this;
  }
}
function $f(n) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = n >> 8 * (15 - t) & 255;
  return e;
}
const Al = /\{\$([a-zA-Z0-9-_]+)\}/g;
function pa(n) {
  return Al.test(n);
}
function ft(n, e, t) {
  if (n.variableList !== null || n.hasVariableRefs)
    for (let i = t.length; i--; ) {
      const s = t[i], r = e[s];
      r && (e[s] = qr(n, r));
    }
}
function qr(n, e) {
  if (n.variableList !== null || n.hasVariableRefs) {
    const t = n.variableList;
    return e.replace(Al, (i) => {
      const s = i.substring(2, i.length - 1), r = t?.[s];
      return r === void 0 ? (n.playlistParsingError || (n.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${s}"`)), i) : r;
    });
  }
  return e;
}
function va(n, e, t) {
  let i = n.variableList;
  i || (n.variableList = i = {});
  let s, r;
  if ("QUERYPARAM" in e) {
    s = e.QUERYPARAM;
    try {
      const a = new self.URL(t).searchParams;
      if (a.has(s))
        r = a.get(s);
      else
        throw new Error(`"${s}" does not match any query parameter in URI: "${t}"`);
    } catch (a) {
      n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`));
    }
  } else
    s = e.NAME, r = e.VALUE;
  s in i ? n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${s}"`)) : i[s] = r || "";
}
function e0(n, e, t) {
  const i = e.IMPORT;
  if (t && i in t) {
    let s = n.variableList;
    s || (n.variableList = s = {}), s[i] = t[i];
  } else
    n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${i}"`));
}
function hi(n = !0) {
  return typeof self > "u" ? void 0 : (n || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function t0(n) {
  return typeof self < "u" && n === self.ManagedMediaSource;
}
const Fs = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function i0(n, e) {
  const t = Fs[e];
  return !!t && !!t[n.slice(0, 4)];
}
function yr(n, e, t = !0) {
  return !n.split(",").some((i) => !Ll(i, e, t));
}
function Ll(n, e, t = !0) {
  var i;
  const s = hi(t);
  return (i = s?.isTypeSupported(Xi(n, e))) != null ? i : !1;
}
function Xi(n, e) {
  return `${e}/mp4;codecs="${n}"`;
}
function ya(n) {
  if (n) {
    const e = n.substring(0, 4);
    return Fs.video[e];
  }
  return 2;
}
function Ns(n) {
  return n.split(",").reduce((e, t) => {
    const i = Fs.video[t];
    return i ? (i * 2 + e) / (e ? 3 : 2) : (Fs.audio[t] + e) / (e ? 2 : 1);
  }, 0);
}
const xr = {};
function s0(n, e = !0) {
  if (xr[n])
    return xr[n];
  const t = {
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"]
  }[n];
  for (let i = 0; i < t.length; i++)
    if (Ll(t[i], "audio", e))
      return xr[n] = t[i], t[i];
  return n;
}
const r0 = /flac|opus/i;
function Bs(n, e = !0) {
  return n.replace(r0, (t) => s0(t.toLowerCase(), e));
}
function xa(n, e) {
  return n && n !== "mp4a" ? n : e && e.split(",")[0];
}
function n0(n) {
  const e = n.split(",");
  for (let t = 0; t < e.length; t++) {
    const i = e[t].split(".");
    if (i.length > 2) {
      let s = i.shift() + ".";
      s += parseInt(i.shift()).toString(16), s += ("000" + parseInt(i.shift()).toString(16)).slice(-4), e[t] = s;
    }
  }
  return e.join(",");
}
const Ea = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, Ta = /#EXT-X-MEDIA:(.*)/g, a0 = /^#EXT(?:INF|-X-TARGETDURATION):/m, ba = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#EXT-X-BYTERANGE:*(.+)/.source,
  // next segment's byterange, group 4 => range spec (x@y)
  /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
  // next segment's program date/time group 5 => the datetime spec
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), o0 = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class Nt {
  static findGroup(e, t) {
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      if (s.id === t)
        return s;
    }
  }
  static resolve(e, t) {
    return pn.buildAbsoluteURL(t, e, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(e) {
    return a0.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const i = pa(e), s = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: i
    }, r = [];
    Ea.lastIndex = 0;
    let a;
    for (; (a = Ea.exec(e)) != null; )
      if (a[1]) {
        var o;
        const c = new Ze(a[1]);
        ft(s, c, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
        const d = qr(s, a[2]), u = {
          attrs: c,
          bitrate: c.decimalInteger("BANDWIDTH") || c.decimalInteger("AVERAGE-BANDWIDTH"),
          name: c.NAME,
          url: Nt.resolve(d, t)
        }, h = c.decimalResolution("RESOLUTION");
        h && (u.width = h.width, u.height = h.height), l0(c.CODECS, u), (o = u.unknownCodecs) != null && o.length || r.push(u), s.levels.push(u);
      } else if (a[3]) {
        const c = a[3], d = a[4];
        switch (c) {
          case "SESSION-DATA": {
            const u = new Ze(d);
            ft(s, u, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
            const h = u["DATA-ID"];
            h && (s.sessionData === null && (s.sessionData = {}), s.sessionData[h] = u);
            break;
          }
          case "SESSION-KEY": {
            const u = _a(d, t, s);
            u.encrypted && u.isSupported() ? (s.sessionKeys === null && (s.sessionKeys = []), s.sessionKeys.push(u)) : k.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${d}"`);
            break;
          }
          case "DEFINE": {
            {
              const u = new Ze(d);
              ft(s, u, ["NAME", "VALUE", "QUERYPARAM"]), va(s, u, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const u = new Ze(d);
            ft(s, u, ["SERVER-URI", "PATHWAY-ID"]), s.contentSteering = {
              uri: Nt.resolve(u["SERVER-URI"], t),
              pathwayId: u["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            s.startTimeOffset = Sa(d);
            break;
          }
        }
      }
    const l = r.length > 0 && r.length < s.levels.length;
    return s.levels = l ? r : s.levels, s.levels.length === 0 && (s.playlistParsingError = new Error("no levels found in manifest")), s;
  }
  static parseMasterPlaylistMedia(e, t, i) {
    let s;
    const r = {}, a = i.levels, o = {
      AUDIO: a.map((c) => ({
        id: c.attrs.AUDIO,
        audioCodec: c.audioCodec
      })),
      SUBTITLES: a.map((c) => ({
        id: c.attrs.SUBTITLES,
        textCodec: c.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let l = 0;
    for (Ta.lastIndex = 0; (s = Ta.exec(e)) !== null; ) {
      const c = new Ze(s[1]), d = c.TYPE;
      if (d) {
        const u = o[d], h = r[d] || [];
        r[d] = h, ft(i, c, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
        const f = c.LANGUAGE, g = c["ASSOC-LANGUAGE"], m = c.CHANNELS, p = c.CHARACTERISTICS, v = c["INSTREAM-ID"], b = {
          attrs: c,
          bitrate: 0,
          id: l++,
          groupId: c["GROUP-ID"] || "",
          name: c.NAME || f || "",
          type: d,
          default: c.bool("DEFAULT"),
          autoselect: c.bool("AUTOSELECT"),
          forced: c.bool("FORCED"),
          lang: f,
          url: c.URI ? Nt.resolve(c.URI, t) : ""
        };
        if (g && (b.assocLang = g), m && (b.channels = m), p && (b.characteristics = p), v && (b.instreamId = v), u != null && u.length) {
          const _ = Nt.findGroup(u, b.groupId) || u[0];
          Aa(b, _, "audioCodec"), Aa(b, _, "textCodec");
        }
        h.push(b);
      }
    }
    return r;
  }
  static parseLevelPlaylist(e, t, i, s, r, a) {
    const o = new bf(t), l = o.fragments;
    let c = null, d = 0, u = 0, h = 0, f = 0, g = null, m = new fr(s, t), p, v, b, _ = -1, E = !1, T = null;
    for (ba.lastIndex = 0, o.m3u8 = e, o.hasVariableRefs = pa(e); (p = ba.exec(e)) !== null; ) {
      E && (E = !1, m = new fr(s, t), m.start = h, m.sn = d, m.cc = f, m.level = i, c && (m.initSegment = c, m.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null, T && (m.setByteRange(T), T = null)));
      const C = p[1];
      if (C) {
        m.duration = parseFloat(C);
        const L = (" " + p[2]).slice(1);
        m.title = L || null, m.tagList.push(L ? ["INF", C, L] : ["INF", C]);
      } else if (p[3]) {
        if (ae(m.duration)) {
          m.start = h, b && Ra(m, b, o), m.sn = d, m.level = i, m.cc = f, l.push(m);
          const L = (" " + p[3]).slice(1);
          m.relurl = qr(o, L), La(m, g), g = m, h += m.duration, d++, u = 0, E = !0;
        }
      } else if (p[4]) {
        const L = (" " + p[4]).slice(1);
        g ? m.setByteRange(L, g) : m.setByteRange(L);
      } else if (p[5])
        m.rawProgramDateTime = (" " + p[5]).slice(1), m.tagList.push(["PROGRAM-DATE-TIME", m.rawProgramDateTime]), _ === -1 && (_ = l.length);
      else {
        if (p = p[0].match(o0), !p) {
          k.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (v = 1; v < p.length && !(typeof p[v] < "u"); v++)
          ;
        const L = (" " + p[v]).slice(1), I = (" " + p[v + 1]).slice(1), K = p[v + 2] ? (" " + p[v + 2]).slice(1) : "";
        switch (L) {
          case "PLAYLIST-TYPE":
            o.type = I.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            d = o.startSN = parseInt(I);
            break;
          case "SKIP": {
            const F = new Ze(I);
            ft(o, F, ["RECENTLY-REMOVED-DATERANGES"]);
            const D = F.decimalInteger("SKIPPED-SEGMENTS");
            if (ae(D)) {
              o.skippedSegments = D;
              for (let G = D; G--; )
                l.unshift(null);
              d += D;
            }
            const U = F.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            U && (o.recentlyRemovedDateranges = U.split("	"));
            break;
          }
          case "TARGETDURATION":
            o.targetduration = Math.max(parseInt(I), 1);
            break;
          case "VERSION":
            o.version = parseInt(I);
            break;
          case "INDEPENDENT-SEGMENTS":
          case "EXTM3U":
            break;
          case "ENDLIST":
            o.live = !1;
            break;
          case "#":
            (I || K) && m.tagList.push(K ? [I, K] : [I]);
            break;
          case "DISCONTINUITY":
            f++, m.tagList.push(["DIS"]);
            break;
          case "GAP":
            m.gap = !0, m.tagList.push([L]);
            break;
          case "BITRATE":
            m.tagList.push([L, I]);
            break;
          case "DATERANGE": {
            const F = new Ze(I);
            ft(o, F, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), ft(o, F, F.clientAttrs);
            const D = new ul(F, o.dateRanges[F.ID]);
            D.isValid || o.skippedSegments ? o.dateRanges[D.id] = D : k.warn(`Ignoring invalid DATERANGE tag: "${I}"`), m.tagList.push(["EXT-X-DATERANGE", I]);
            break;
          }
          case "DEFINE": {
            {
              const F = new Ze(I);
              ft(o, F, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in F ? e0(o, F, a) : va(o, F, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            f = parseInt(I);
            break;
          case "KEY": {
            const F = _a(I, t, o);
            if (F.isSupported()) {
              if (F.method === "NONE") {
                b = void 0;
                break;
              }
              b || (b = {}), b[F.keyFormat] && (b = it({}, b)), b[F.keyFormat] = F;
            } else
              k.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${I}"`);
            break;
          }
          case "START":
            o.startTimeOffset = Sa(I);
            break;
          case "MAP": {
            const F = new Ze(I);
            if (ft(o, F, ["BYTERANGE", "URI"]), m.duration) {
              const D = new fr(s, t);
              wa(D, F, i, b), c = D, m.initSegment = c, c.rawProgramDateTime && !m.rawProgramDateTime && (m.rawProgramDateTime = c.rawProgramDateTime);
            } else {
              const D = m.byteRangeEndOffset;
              if (D) {
                const U = m.byteRangeStartOffset;
                T = `${D - U}@${U}`;
              } else
                T = null;
              wa(m, F, i, b), c = m, E = !0;
            }
            break;
          }
          case "SERVER-CONTROL": {
            const F = new Ze(I);
            o.canBlockReload = F.bool("CAN-BLOCK-RELOAD"), o.canSkipUntil = F.optionalFloat("CAN-SKIP-UNTIL", 0), o.canSkipDateRanges = o.canSkipUntil > 0 && F.bool("CAN-SKIP-DATERANGES"), o.partHoldBack = F.optionalFloat("PART-HOLD-BACK", 0), o.holdBack = F.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            const F = new Ze(I);
            o.partTarget = F.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let F = o.partList;
            F || (F = o.partList = []);
            const D = u > 0 ? F[F.length - 1] : void 0, U = u++, G = new Ze(I);
            ft(o, G, ["BYTERANGE", "URI"]);
            const ee = new Ef(G, m, t, U, D);
            F.push(ee), m.duration += ee.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const F = new Ze(I);
            ft(o, F, ["URI"]), o.preloadHint = F;
            break;
          }
          case "RENDITION-REPORT": {
            const F = new Ze(I);
            ft(o, F, ["URI"]), o.renditionReports = o.renditionReports || [], o.renditionReports.push(F);
            break;
          }
          default:
            k.warn(`line parsed but not handled: ${p}`);
            break;
        }
      }
    }
    g && !g.relurl ? (l.pop(), h -= g.duration, o.partList && (o.fragmentHint = g)) : o.partList && (La(m, g), m.cc = f, o.fragmentHint = m, b && Ra(m, b, o));
    const A = l.length, S = l[0], w = l[A - 1];
    if (h += o.skippedSegments * o.targetduration, h > 0 && A && w) {
      o.averagetargetduration = h / A;
      const C = w.sn;
      o.endSN = C !== "initSegment" ? C : 0, o.live || (w.endList = !0), S && (o.startCC = S.cc);
    } else
      o.endSN = 0, o.startCC = 0;
    return o.fragmentHint && (h += o.fragmentHint.duration), o.totalduration = h, o.endCC = f, _ > 0 && c0(l, _), o;
  }
}
function _a(n, e, t) {
  var i, s;
  const r = new Ze(n);
  ft(t, r, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
  const a = (i = r.METHOD) != null ? i : "", o = r.URI, l = r.hexadecimalInteger("IV"), c = r.KEYFORMATVERSIONS, d = (s = r.KEYFORMAT) != null ? s : "identity";
  o && r.IV && !l && k.error(`Invalid IV: ${r.IV}`);
  const u = o ? Nt.resolve(o, e) : "", h = (c || "1").split("/").map(Number).filter(Number.isFinite);
  return new qi(a, u, d, h, l);
}
function Sa(n) {
  const t = new Ze(n).decimalFloatingPoint("TIME-OFFSET");
  return ae(t) ? t : null;
}
function l0(n, e) {
  let t = (n || "").split(/[ ,]+/).filter((i) => i);
  ["video", "audio", "text"].forEach((i) => {
    const s = t.filter((r) => i0(r, i));
    s.length && (e[`${i}Codec`] = s.join(","), t = t.filter((r) => s.indexOf(r) === -1));
  }), e.unknownCodecs = t;
}
function Aa(n, e, t) {
  const i = e[t];
  i && (n[t] = i);
}
function c0(n, e) {
  let t = n[e];
  for (let i = e; i--; ) {
    const s = n[i];
    if (!s)
      return;
    s.programDateTime = t.programDateTime - s.duration * 1e3, t = s;
  }
}
function La(n, e) {
  n.rawProgramDateTime ? n.programDateTime = Date.parse(n.rawProgramDateTime) : e != null && e.programDateTime && (n.programDateTime = e.endProgramDateTime), ae(n.programDateTime) || (n.programDateTime = null, n.rawProgramDateTime = null);
}
function wa(n, e, t, i) {
  n.relurl = e.URI, e.BYTERANGE && n.setByteRange(e.BYTERANGE), n.level = t, n.sn = "initSegment", i && (n.levelkeys = i), n.initSegment = null;
}
function Ra(n, e, t) {
  n.levelkeys = e;
  const {
    encryptedFragments: i
  } = t;
  (!i.length || i[i.length - 1].levelkeys !== e) && Object.keys(e).some((s) => e[s].isCommonEncryption) && i.push(n);
}
var Me = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, pe = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
function Ia(n) {
  const {
    type: e
  } = n;
  switch (e) {
    case Me.AUDIO_TRACK:
      return pe.AUDIO;
    case Me.SUBTITLE_TRACK:
      return pe.SUBTITLE;
    default:
      return pe.MAIN;
  }
}
function Er(n, e) {
  let t = n.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class d0 {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = e, this.registerListeners();
  }
  startLoad(e) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.LEVEL_LOADING, this.onLevelLoading, this), e.on(x.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(x.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.LEVEL_LOADING, this.onLevelLoading, this), e.off(x.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(x.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(e) {
    const t = this.hls.config, i = t.pLoader, s = t.loader, r = i || s, a = new r(t);
    return this.loaders[e.type] = a, a;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const {
      url: i
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: Me.MANIFEST,
      url: i,
      deliveryDirectives: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: i,
      level: s,
      pathwayId: r,
      url: a,
      deliveryDirectives: o
    } = t;
    this.load({
      id: i,
      level: s,
      pathwayId: r,
      responseType: "text",
      type: Me.LEVEL,
      url: a,
      deliveryDirectives: o
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: i,
      groupId: s,
      url: r,
      deliveryDirectives: a
    } = t;
    this.load({
      id: i,
      groupId: s,
      level: null,
      responseType: "text",
      type: Me.AUDIO_TRACK,
      url: r,
      deliveryDirectives: a
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: i,
      groupId: s,
      url: r,
      deliveryDirectives: a
    } = t;
    this.load({
      id: i,
      groupId: s,
      level: null,
      responseType: "text",
      type: Me.SUBTITLE_TRACK,
      url: r,
      deliveryDirectives: a
    });
  }
  load(e) {
    var t;
    const i = this.hls.config;
    let s = this.getInternalLoader(e);
    if (s) {
      const c = s.context;
      if (c && c.url === e.url && c.level === e.level) {
        k.trace("[playlist-loader]: playlist request ongoing");
        return;
      }
      k.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), s.abort();
    }
    let r;
    if (e.type === Me.MANIFEST ? r = i.manifestLoadPolicy.default : r = it({}, i.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), s = this.createInternalLoader(e), ae((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
      let c;
      if (e.type === Me.LEVEL && e.level !== null ? c = this.hls.levels[e.level].details : e.type === Me.AUDIO_TRACK && e.id !== null ? c = this.hls.audioTracks[e.id].details : e.type === Me.SUBTITLE_TRACK && e.id !== null && (c = this.hls.subtitleTracks[e.id].details), c) {
        const d = c.partTarget, u = c.targetduration;
        if (d && u) {
          const h = Math.max(d * 3, u * 0.8) * 1e3;
          r = it({}, r, {
            maxTimeToFirstByteMs: Math.min(h, r.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(h, r.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const a = r.errorRetry || r.timeoutRetry || {}, o = {
      loadPolicy: r,
      timeout: r.maxLoadTimeMs,
      maxRetry: a.maxNumRetry || 0,
      retryDelay: a.retryDelayMs || 0,
      maxRetryDelay: a.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (c, d, u, h) => {
        const f = this.getInternalLoader(u);
        this.resetInternalLoader(u.type);
        const g = c.data;
        if (g.indexOf("#EXTM3U") !== 0) {
          this.handleManifestParsingError(c, u, new Error("no EXTM3U delimiter"), h || null, d);
          return;
        }
        d.parsing.start = performance.now(), Nt.isMediaPlaylist(g) ? this.handleTrackOrLevelPlaylist(c, d, u, h || null, f) : this.handleMasterPlaylist(c, d, u, h);
      },
      onError: (c, d, u, h) => {
        this.handleNetworkError(d, u, !1, c, h);
      },
      onTimeout: (c, d, u) => {
        this.handleNetworkError(d, u, !0, void 0, c);
      }
    };
    s.load(e, o, l);
  }
  handleMasterPlaylist(e, t, i, s) {
    const r = this.hls, a = e.data, o = Er(e, i), l = Nt.parseMasterPlaylist(a, o);
    if (l.playlistParsingError) {
      this.handleManifestParsingError(e, i, l.playlistParsingError, s, t);
      return;
    }
    const {
      contentSteering: c,
      levels: d,
      sessionData: u,
      sessionKeys: h,
      startTimeOffset: f,
      variableList: g
    } = l;
    this.variableList = g;
    const {
      AUDIO: m = [],
      SUBTITLES: p,
      "CLOSED-CAPTIONS": v
    } = Nt.parseMasterPlaylistMedia(a, o, l);
    m.length && !m.some((_) => !_.url) && d[0].audioCodec && !d[0].attrs.AUDIO && (k.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new Ze({}),
      bitrate: 0,
      url: ""
    })), r.trigger(x.MANIFEST_LOADED, {
      levels: d,
      audioTracks: m,
      subtitles: p,
      captions: v,
      contentSteering: c,
      url: o,
      stats: t,
      networkDetails: s,
      sessionData: u,
      sessionKeys: h,
      startTimeOffset: f,
      variableList: g
    });
  }
  handleTrackOrLevelPlaylist(e, t, i, s, r) {
    const a = this.hls, {
      id: o,
      level: l,
      type: c
    } = i, d = Er(e, i), u = 0, h = ae(l) ? l : ae(o) ? o : 0, f = Ia(i), g = Nt.parseLevelPlaylist(e.data, d, h, f, u, this.variableList);
    if (c === Me.MANIFEST) {
      const m = {
        attrs: new Ze({}),
        bitrate: 0,
        details: g,
        name: "",
        url: d
      };
      a.trigger(x.MANIFEST_LOADED, {
        levels: [m],
        audioTracks: [],
        url: d,
        stats: t,
        networkDetails: s,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), i.levelDetails = g, this.handlePlaylistLoaded(g, e, t, i, s, r);
  }
  handleManifestParsingError(e, t, i, s, r) {
    this.hls.trigger(x.ERROR, {
      type: xe.NETWORK_ERROR,
      details: N.MANIFEST_PARSING_ERROR,
      fatal: t.type === Me.MANIFEST,
      url: e.url,
      err: i,
      error: i,
      reason: i.message,
      response: e,
      context: t,
      networkDetails: s,
      stats: r
    });
  }
  handleNetworkError(e, t, i = !1, s, r) {
    let a = `A network ${i ? "timeout" : "error" + (s ? " (status " + s.code + ")" : "")} occurred while loading ${e.type}`;
    e.type === Me.LEVEL ? a += `: ${e.level} id: ${e.id}` : (e.type === Me.AUDIO_TRACK || e.type === Me.SUBTITLE_TRACK) && (a += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(a);
    k.warn(`[playlist-loader]: ${a}`);
    let l = N.UNKNOWN, c = !1;
    const d = this.getInternalLoader(e);
    switch (e.type) {
      case Me.MANIFEST:
        l = i ? N.MANIFEST_LOAD_TIMEOUT : N.MANIFEST_LOAD_ERROR, c = !0;
        break;
      case Me.LEVEL:
        l = i ? N.LEVEL_LOAD_TIMEOUT : N.LEVEL_LOAD_ERROR, c = !1;
        break;
      case Me.AUDIO_TRACK:
        l = i ? N.AUDIO_TRACK_LOAD_TIMEOUT : N.AUDIO_TRACK_LOAD_ERROR, c = !1;
        break;
      case Me.SUBTITLE_TRACK:
        l = i ? N.SUBTITLE_TRACK_LOAD_TIMEOUT : N.SUBTITLE_LOAD_ERROR, c = !1;
        break;
    }
    d && this.resetInternalLoader(e.type);
    const u = {
      type: xe.NETWORK_ERROR,
      details: l,
      fatal: c,
      url: e.url,
      loader: d,
      context: e,
      error: o,
      networkDetails: t,
      stats: r
    };
    if (s) {
      const h = t?.url || e.url;
      u.response = ot({
        url: h,
        data: void 0
      }, s);
    }
    this.hls.trigger(x.ERROR, u);
  }
  handlePlaylistLoaded(e, t, i, s, r, a) {
    const o = this.hls, {
      type: l,
      level: c,
      id: d,
      groupId: u,
      deliveryDirectives: h
    } = s, f = Er(t, s), g = Ia(s), m = typeof s.level == "number" && g === pe.MAIN ? c : void 0;
    if (!e.fragments.length) {
      const v = new Error("No Segments found in Playlist");
      o.trigger(x.ERROR, {
        type: xe.NETWORK_ERROR,
        details: N.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: f,
        error: v,
        reason: v.message,
        response: t,
        context: s,
        level: m,
        parent: g,
        networkDetails: r,
        stats: i
      });
      return;
    }
    e.targetduration || (e.playlistParsingError = new Error("Missing Target Duration"));
    const p = e.playlistParsingError;
    if (p) {
      o.trigger(x.ERROR, {
        type: xe.NETWORK_ERROR,
        details: N.LEVEL_PARSING_ERROR,
        fatal: !1,
        url: f,
        error: p,
        reason: p.message,
        response: t,
        context: s,
        level: m,
        parent: g,
        networkDetails: r,
        stats: i
      });
      return;
    }
    switch (e.live && a && (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), l) {
      case Me.MANIFEST:
      case Me.LEVEL:
        o.trigger(x.LEVEL_LOADED, {
          details: e,
          level: m || 0,
          id: d || 0,
          stats: i,
          networkDetails: r,
          deliveryDirectives: h
        });
        break;
      case Me.AUDIO_TRACK:
        o.trigger(x.AUDIO_TRACK_LOADED, {
          details: e,
          id: d || 0,
          groupId: u || "",
          stats: i,
          networkDetails: r,
          deliveryDirectives: h
        });
        break;
      case Me.SUBTITLE_TRACK:
        o.trigger(x.SUBTITLE_TRACK_LOADED, {
          details: e,
          id: d || 0,
          groupId: u || "",
          stats: i,
          networkDetails: r,
          deliveryDirectives: h
        });
        break;
    }
  }
}
function wl(n, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
  }
  t.track = n, e.dispatchEvent(t);
}
function Rl(n, e) {
  const t = n.mode;
  if (t === "disabled" && (n.mode = "hidden"), n.cues && !n.cues.getCueById(e.id))
    try {
      if (n.addCue(e), !n.cues.getCueById(e.id))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (i) {
      k.debug(`[texttrack-utils]: ${i}`);
      try {
        const s = new self.TextTrackCue(e.startTime, e.endTime, e.text);
        s.id = e.id, n.addCue(s);
      } catch (s) {
        k.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${s}`);
      }
    }
  t === "disabled" && (n.mode = t);
}
function Si(n) {
  const e = n.mode;
  if (e === "disabled" && (n.mode = "hidden"), n.cues)
    for (let t = n.cues.length; t--; )
      n.removeCue(n.cues[t]);
  e === "disabled" && (n.mode = e);
}
function Xr(n, e, t, i) {
  const s = n.mode;
  if (s === "disabled" && (n.mode = "hidden"), n.cues && n.cues.length > 0) {
    const r = h0(n.cues, e, t);
    for (let a = 0; a < r.length; a++)
      (!i || i(r[a])) && n.removeCue(r[a]);
  }
  s === "disabled" && (n.mode = s);
}
function u0(n, e) {
  if (e < n[0].startTime)
    return 0;
  const t = n.length - 1;
  if (e > n[t].endTime)
    return -1;
  let i = 0, s = t;
  for (; i <= s; ) {
    const r = Math.floor((s + i) / 2);
    if (e < n[r].startTime)
      s = r - 1;
    else if (e > n[r].startTime && i < t)
      i = r + 1;
    else
      return r;
  }
  return n[i].startTime - e < e - n[s].startTime ? i : s;
}
function h0(n, e, t) {
  const i = [], s = u0(n, e);
  if (s > -1)
    for (let r = s, a = n.length; r < a; r++) {
      const o = n[r];
      if (o.startTime >= e && o.endTime <= t)
        i.push(o);
      else if (o.startTime > t)
        return i;
    }
  return i;
}
function bs(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const i = n[t];
    (i.kind === "subtitles" || i.kind === "captions") && i.label && e.push(n[t]);
  }
  return e;
}
var _t = {
  audioId3: "org.id3",
  dateRange: "com.apple.quicktime.HLS",
  emsg: "https://aomedia.org/emsg/ID3"
};
const f0 = 0.25;
function Qr() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function Ca(n, e, t, i, s) {
  let r = new n(e, t, "");
  try {
    r.value = i, s && (r.type = s);
  } catch {
    r = new n(e, t, JSON.stringify(s ? ot({
      type: s
    }, i) : i));
  }
  return r;
}
const ds = (() => {
  const n = Qr();
  try {
    n && new n(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
function Tr(n, e) {
  return n.getTime() / 1e3 - e;
}
function g0(n) {
  return Uint8Array.from(n.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
class m0 {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(x.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(x.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  // Add ID3 metatadata text track.
  onMediaAttached(e, t) {
    this.media = t.media;
  }
  onMediaDetaching() {
    this.id3Track && (Si(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t;
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        const i = e[t];
        if (i.kind === "metadata" && i.label === "id3")
          return wl(i, this.media), i;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media)
      return;
    const {
      hls: {
        config: {
          enableEmsgMetadataCues: i,
          enableID3MetadataCues: s
        }
      }
    } = this;
    if (!i && !s)
      return;
    const {
      samples: r
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const a = Qr();
    if (a)
      for (let o = 0; o < r.length; o++) {
        const l = r[o].type;
        if (l === _t.emsg && !i || !s)
          continue;
        const c = vl(r[o].data);
        if (c) {
          const d = r[o].pts;
          let u = d + r[o].duration;
          u > ds && (u = ds), u - d <= 0 && (u = d + f0);
          for (let f = 0; f < c.length; f++) {
            const g = c[f];
            if (!pl(g)) {
              this.updateId3CueEnds(d, l);
              const m = Ca(a, d, u, g, l);
              m && this.id3Track.addCue(m);
            }
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var i;
    const s = (i = this.id3Track) == null ? void 0 : i.cues;
    if (s)
      for (let r = s.length; r--; ) {
        const a = s[r];
        a.type === t && a.startTime < e && a.endTime === ds && (a.endTime = e);
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: i,
    type: s
  }) {
    const {
      id3Track: r,
      hls: a
    } = this;
    if (!a)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: l
      }
    } = a;
    if (r && (o || l)) {
      let c;
      s === "audio" ? c = (d) => d.type === _t.audioId3 && l : s === "video" ? c = (d) => d.type === _t.emsg && o : c = (d) => d.type === _t.audioId3 && l || d.type === _t.emsg && o, Xr(r, t, i, c);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    if (!this.media || !t.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues)
      return;
    const {
      dateRangeCuesAppended: i,
      id3Track: s
    } = this, {
      dateRanges: r
    } = t, a = Object.keys(r);
    if (s) {
      const d = Object.keys(i).filter((u) => !a.includes(u));
      for (let u = d.length; u--; ) {
        const h = d[u];
        Object.keys(i[h].cues).forEach((f) => {
          s.removeCue(i[h].cues[f]);
        }), delete i[h];
      }
    }
    const o = t.fragments[t.fragments.length - 1];
    if (a.length === 0 || !ae(o?.programDateTime))
      return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const l = o.programDateTime / 1e3 - o.start, c = Qr();
    for (let d = 0; d < a.length; d++) {
      const u = a[d], h = r[u], f = Tr(h.startDate, l), g = i[u], m = g?.cues || {};
      let p = g?.durationKnown || !1, v = ds;
      const b = h.endDate;
      if (b)
        v = Tr(b, l), p = !0;
      else if (h.endOnNext && !p) {
        const E = a.reduce((T, A) => {
          if (A !== h.id) {
            const S = r[A];
            if (S.class === h.class && S.startDate > h.startDate && (!T || h.startDate < T.startDate))
              return S;
          }
          return T;
        }, null);
        E && (v = Tr(E.startDate, l), p = !0);
      }
      const _ = Object.keys(h.attr);
      for (let E = 0; E < _.length; E++) {
        const T = _[E];
        if (!yf(T))
          continue;
        const A = m[T];
        if (A)
          p && !g.durationKnown && (A.endTime = v);
        else if (c) {
          let S = h.attr[T];
          xf(T) && (S = g0(S));
          const w = Ca(c, f, v, {
            key: T,
            data: S
          }, _t.dateRange);
          w && (w.id = u, this.id3Track.addCue(w), m[T] = w);
        }
      }
      i[u] = {
        cues: m,
        dateRange: h,
        durationKnown: p
      };
    }
  }
}
class p0 {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = e, this.config = e.config, this.registerListeners();
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e,
      levelDetails: t
    } = this;
    return e.liveMaxLatencyDuration !== void 0 ? e.liveMaxLatencyDuration : t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: i,
      targetduration: s
    } = e, {
      liveSyncDuration: r,
      liveSyncDurationCount: a,
      lowLatencyMode: o
    } = this.config, l = this.hls.userConfig;
    let c = o && i || t;
    (l.liveSyncDuration || l.liveSyncDurationCount || c === 0) && (c = r !== void 0 ? r : a * s);
    const d = s;
    return c + Math.min(this.stallCount * 1, d);
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency, i = this.levelDetails;
    if (e === null || t === null || i === null)
      return null;
    const s = i.edge, r = e - t - this.edgeStalled, a = s - i.totalduration, o = s - (this.config.lowLatencyMode && i.partTarget || i.targetduration);
    return Math.min(Math.max(a, r), o);
  }
  get drift() {
    const {
      levelDetails: e
    } = this;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return 0;
    const i = e.buffered.length;
    return (i ? e.buffered.end(i - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
  }
  registerListeners() {
    this.hls.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(x.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(x.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(x.ERROR, this.onError, this);
  }
  unregisterListeners() {
    this.hls.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(x.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(x.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(x.ERROR, this.onError, this);
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
  }
  onManifestLoading() {
    this.levelDetails = null, this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.levelDetails = t, t.advanced && this.timeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
  }
  onError(e, t) {
    var i;
    t.details === N.BUFFER_STALLED_ERROR && (this.stallCount++, (i = this.levelDetails) != null && i.live && k.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
  }
  timeupdate() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return;
    this.currentTime = e.currentTime;
    const i = this.computeLatency();
    if (i === null)
      return;
    this._latency = i;
    const {
      lowLatencyMode: s,
      maxLiveSyncPlaybackRate: r
    } = this.config;
    if (!s || r === 1 || !t.live)
      return;
    const a = this.targetLatency;
    if (a === null)
      return;
    const o = i - a, l = Math.min(this.maxLatency, a + t.targetduration);
    if (o < l && o > 0.05 && this.forwardBufferLength > 1) {
      const d = Math.min(2, Math.max(1, r)), u = Math.round(2 / (1 + Math.exp(-0.75 * o - this.edgeStalled)) * 20) / 20;
      e.playbackRate = Math.min(d, Math.max(1, u));
    } else e.playbackRate !== 1 && e.playbackRate !== 0 && (e.playbackRate = 1);
  }
  estimateLiveEdge() {
    const {
      levelDetails: e
    } = this;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
const Zr = ["NONE", "TYPE-0", "TYPE-1", null];
function v0(n) {
  return Zr.indexOf(n) > -1;
}
const Us = ["SDR", "PQ", "HLG"];
function y0(n) {
  return !!n && Us.indexOf(n) > -1;
}
var _s = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function Da(n) {
  const {
    canSkipUntil: e,
    canSkipDateRanges: t,
    age: i
  } = n, s = i < e / 2;
  return e && s ? t ? _s.v2 : _s.Yes : _s.No;
}
class ka {
  constructor(e, t, i) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = i;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class Pi {
  constructor(e) {
    this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter((t) => !!t).map((t) => t.substring(0, 4)).join(","), this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(e) {
    return Pa(this._audioGroups, e);
  }
  hasSubtitleGroup(e) {
    return Pa(this._subtitleGroups, e);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(e, t) {
    if (t) {
      if (e === "audio") {
        let i = this._audioGroups;
        i || (i = this._audioGroups = []), i.indexOf(t) === -1 && i.push(t);
      } else if (e === "text") {
        let i = this._subtitleGroups;
        i || (i = this._subtitleGroups = []), i.indexOf(t) === -1 && i.push(t);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(e) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroups) == null ? void 0 : e[0];
  }
  get textGroupId() {
    var e;
    return (e = this.subtitleGroups) == null ? void 0 : e[0];
  }
  addFallback() {
  }
}
function Pa(n, e) {
  return !e || !n ? !1 : n.indexOf(e) !== -1;
}
function br(n, e) {
  const t = e.startPTS;
  if (ae(t)) {
    let i = 0, s;
    e.sn > n.sn ? (i = t - n.start, s = n) : (i = n.start - t, s = e), s.duration !== i && (s.duration = i);
  } else e.sn > n.sn ? n.cc === e.cc && n.minEndPTS ? e.start = n.start + (n.minEndPTS - n.start) : e.start = n.start + n.duration : e.start = Math.max(n.start - e.duration, 0);
}
function Il(n, e, t, i, s, r) {
  i - t <= 0 && (k.warn("Fragment should have a positive duration", e), i = t + e.duration, r = s + e.duration);
  let o = t, l = i;
  const c = e.startPTS, d = e.endPTS;
  if (ae(c)) {
    const p = Math.abs(c - t);
    ae(e.deltaPTS) ? e.deltaPTS = Math.max(p, e.deltaPTS) : e.deltaPTS = p, o = Math.max(t, c), t = Math.min(t, c), s = Math.min(s, e.startDTS), l = Math.min(i, d), i = Math.max(i, d), r = Math.max(r, e.endDTS);
  }
  const u = t - e.start;
  e.start !== 0 && (e.start = t), e.duration = i - e.start, e.startPTS = t, e.maxStartPTS = o, e.startDTS = s, e.endPTS = i, e.minEndPTS = l, e.endDTS = r;
  const h = e.sn;
  if (!n || h < n.startSN || h > n.endSN)
    return 0;
  let f;
  const g = h - n.startSN, m = n.fragments;
  for (m[g] = e, f = g; f > 0; f--)
    br(m[f], m[f - 1]);
  for (f = g; f < m.length - 1; f++)
    br(m[f], m[f + 1]);
  return n.fragmentHint && br(m[m.length - 1], n.fragmentHint), n.PTSKnown = n.alignedSliding = !0, u;
}
function x0(n, e) {
  let t = null;
  const i = n.fragments;
  for (let l = i.length - 1; l >= 0; l--) {
    const c = i[l].initSegment;
    if (c) {
      t = c;
      break;
    }
  }
  n.fragmentHint && delete n.fragmentHint.endPTS;
  let s = 0, r;
  if (b0(n, e, (l, c) => {
    l.relurl && (s = l.cc - c.cc), ae(l.startPTS) && ae(l.endPTS) && (c.start = c.startPTS = l.startPTS, c.startDTS = l.startDTS, c.maxStartPTS = l.maxStartPTS, c.endPTS = l.endPTS, c.endDTS = l.endDTS, c.minEndPTS = l.minEndPTS, c.duration = l.endPTS - l.startPTS, c.duration && (r = c), e.PTSKnown = e.alignedSliding = !0), c.elementaryStreams = l.elementaryStreams, c.loader = l.loader, c.stats = l.stats, l.initSegment && (c.initSegment = l.initSegment, t = l.initSegment);
  }), t && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((c) => {
    var d;
    c && (!c.initSegment || c.initSegment.relurl === ((d = t) == null ? void 0 : d.relurl)) && (c.initSegment = t);
  }), e.skippedSegments)
    if (e.deltaUpdateFailed = e.fragments.some((l) => !l), e.deltaUpdateFailed) {
      k.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let l = e.skippedSegments; l--; )
        e.fragments.shift();
      e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc;
    } else e.canSkipDateRanges && (e.dateRanges = E0(n.dateRanges, e.dateRanges, e.recentlyRemovedDateranges));
  const a = e.fragments;
  if (s) {
    k.warn("discontinuity sliding from playlist, take drift into account");
    for (let l = 0; l < a.length; l++)
      a[l].cc += s;
  }
  e.skippedSegments && (e.startCC = e.fragments[0].cc), T0(n.partList, e.partList, (l, c) => {
    c.elementaryStreams = l.elementaryStreams, c.stats = l.stats;
  }), r ? Il(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : Cl(n, e), a.length && (e.totalduration = e.edge - a[0].start), e.driftStartTime = n.driftStartTime, e.driftStart = n.driftStart;
  const o = e.advancedDateTime;
  if (e.advanced && o) {
    const l = e.edge;
    e.driftStart || (e.driftStartTime = o, e.driftStart = l), e.driftEndTime = o, e.driftEnd = l;
  } else
    e.driftEndTime = n.driftEndTime, e.driftEnd = n.driftEnd, e.advancedDateTime = n.advancedDateTime;
}
function E0(n, e, t) {
  const i = it({}, n);
  return t && t.forEach((s) => {
    delete i[s];
  }), Object.keys(e).forEach((s) => {
    const r = new ul(e[s].attr, i[s]);
    r.isValid ? i[s] = r : k.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[s].attr)}"`);
  }), i;
}
function T0(n, e, t) {
  if (n && e) {
    let i = 0;
    for (let s = 0, r = n.length; s <= r; s++) {
      const a = n[s], o = e[s + i];
      a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? t(a, o) : i--;
    }
  }
}
function b0(n, e, t) {
  const i = e.skippedSegments, s = Math.max(n.startSN, e.startSN) - e.startSN, r = (n.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(n.endSN, e.endSN)) - e.startSN, a = e.startSN - n.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = n.fragmentHint ? n.fragments.concat(n.fragmentHint) : n.fragments;
  for (let c = s; c <= r; c++) {
    const d = l[a + c];
    let u = o[c];
    i && !u && c < i && (u = e.fragments[c] = d), d && u && t(d, u);
  }
}
function Cl(n, e) {
  const t = e.startSN + e.skippedSegments - n.startSN, i = n.fragments;
  t < 0 || t >= i.length || Jr(e, i[t].start);
}
function Jr(n, e) {
  if (e) {
    const t = n.fragments;
    for (let i = n.skippedSegments; i < t.length; i++)
      t[i].start += e;
    n.fragmentHint && (n.fragmentHint.start += e);
  }
}
function _0(n, e = 1 / 0) {
  let t = 1e3 * n.targetduration;
  if (n.updated) {
    const i = n.fragments;
    if (i.length && t * 4 > e) {
      const r = i[i.length - 1].duration * 1e3;
      r < t && (t = r);
    }
  } else
    t /= 2;
  return Math.round(t);
}
function S0(n, e, t) {
  if (!(n != null && n.details))
    return null;
  const i = n.details;
  let s = i.fragments[e - i.startSN];
  return s || (s = i.fragmentHint, s && s.sn === e) ? s : e < i.startSN && t && t.sn === e ? t : null;
}
function Oa(n, e, t) {
  var i;
  return n != null && n.details ? Dl((i = n.details) == null ? void 0 : i.partList, e, t) : null;
}
function Dl(n, e, t) {
  if (n)
    for (let i = n.length; i--; ) {
      const s = n[i];
      if (s.index === t && s.fragment.sn === e)
        return s;
    }
  return null;
}
function kl(n) {
  n.forEach((e, t) => {
    const {
      details: i
    } = e;
    i != null && i.fragments && i.fragments.forEach((s) => {
      s.level = t;
    });
  });
}
function Gs(n) {
  switch (n.details) {
    case N.FRAG_LOAD_TIMEOUT:
    case N.KEY_LOAD_TIMEOUT:
    case N.LEVEL_LOAD_TIMEOUT:
    case N.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function Ma(n, e) {
  const t = Gs(e);
  return n.default[`${t ? "timeout" : "error"}Retry`];
}
function En(n, e) {
  const t = n.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * n.retryDelayMs, n.maxRetryDelayMs);
}
function Fa(n) {
  return ot(ot({}, n), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function Hs(n, e, t, i) {
  if (!n)
    return !1;
  const s = i?.code, r = e < n.maxNumRetry && (A0(s) || !!t);
  return n.shouldRetry ? n.shouldRetry(n, e, t, i, r) : r;
}
function A0(n) {
  return n === 0 && navigator.onLine === !1 || !!n && (n < 400 || n > 499);
}
const Pl = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(n, e) {
    let t = 0, i = n.length - 1, s = null, r = null;
    for (; t <= i; ) {
      s = (t + i) / 2 | 0, r = n[s];
      const a = e(r);
      if (a > 0)
        t = s + 1;
      else if (a < 0)
        i = s - 1;
      else
        return r;
    }
    return null;
  }
};
function L0(n, e, t) {
  if (e === null || !Array.isArray(n) || !n.length || !ae(e))
    return null;
  const i = n[0].programDateTime;
  if (e < (i || 0))
    return null;
  const s = n[n.length - 1].endProgramDateTime;
  if (e >= (s || 0))
    return null;
  t = t || 0;
  for (let r = 0; r < n.length; ++r) {
    const a = n[r];
    if (R0(e, t, a))
      return a;
  }
  return null;
}
function Vs(n, e, t = 0, i = 0, s = 5e-3) {
  let r = null;
  if (n) {
    r = e[n.sn - e[0].sn + 1] || null;
    const o = n.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7);
  } else t === 0 && e[0].start === 0 && (r = e[0]);
  if (r && ((!n || n.level === r.level) && $r(t, i, r) === 0 || w0(r, n, Math.min(s, i))))
    return r;
  const a = Pl.search(e, $r.bind(null, t, i));
  return a && (a !== n || !r) ? a : r;
}
function w0(n, e, t) {
  if (e && e.start === 0 && e.level < n.level && (e.endPTS || 0) > 0) {
    const i = e.tagList.reduce((s, r) => (r[0] === "INF" && (s += parseFloat(r[1])), s), t);
    return n.start <= i;
  }
  return !1;
}
function $r(n = 0, e = 0, t) {
  if (t.start <= n && t.start + t.duration > n)
    return 0;
  const i = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - i <= n ? 1 : t.start - i > n && t.start ? -1 : 0;
}
function R0(n, e, t) {
  const i = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - i > n;
}
function I0(n, e) {
  return Pl.search(n, (t) => t.cc < e ? 1 : t.cc > e ? -1 : 0);
}
var lt = {
  DoNothing: 0,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  RetryRequest: 5
}, Tt = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2
};
class C0 {
  constructor(e) {
    this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = e, this.log = k.log.bind(k, "[info]:"), this.warn = k.warn.bind(k, "[warning]:"), this.error = k.error.bind(k, "[error]:"), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(x.ERROR, this.onError, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(x.ERROR, this.onError, this), e.off(x.ERROR, this.onErrorOut, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
  }
  startLoad(e) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(e) {
    return e?.type === pe.MAIN ? e.level : this.hls.loadLevel;
  }
  onManifestLoading() {
    this.playlistError = 0, this.penalizedRenditions = {};
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var i, s;
    if (t.fatal)
      return;
    const r = this.hls, a = t.context;
    switch (t.details) {
      case N.FRAG_LOAD_ERROR:
      case N.FRAG_LOAD_TIMEOUT:
      case N.KEY_LOAD_ERROR:
      case N.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case N.FRAG_PARSING_ERROR:
        if ((i = t.frag) != null && i.gap) {
          t.errorAction = {
            action: lt.DoNothing,
            flags: Tt.None
          };
          return;
        }
      // falls through
      case N.FRAG_GAP:
      case N.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = lt.SendAlternateToPenaltyBox;
        return;
      }
      case N.LEVEL_EMPTY_ERROR:
      case N.LEVEL_PARSING_ERROR:
        {
          var o, l;
          const c = t.parent === pe.MAIN ? t.level : r.loadLevel;
          t.details === N.LEVEL_EMPTY_ERROR && ((o = t.context) != null && (l = o.levelDetails) != null && l.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, c) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, c));
        }
        return;
      case N.LEVEL_LOAD_ERROR:
      case N.LEVEL_LOAD_TIMEOUT:
        typeof a?.level == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, a.level));
        return;
      case N.AUDIO_TRACK_LOAD_ERROR:
      case N.AUDIO_TRACK_LOAD_TIMEOUT:
      case N.SUBTITLE_LOAD_ERROR:
      case N.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (a) {
          const c = r.levels[r.loadLevel];
          if (c && (a.type === Me.AUDIO_TRACK && c.hasAudioGroup(a.groupId) || a.type === Me.SUBTITLE_TRACK && c.hasSubtitleGroup(a.groupId))) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.loadLevel), t.errorAction.action = lt.SendAlternateToPenaltyBox, t.errorAction.flags = Tt.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case N.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        {
          const c = r.levels[r.loadLevel], d = c?.attrs["HDCP-LEVEL"];
          d ? t.errorAction = {
            action: lt.SendAlternateToPenaltyBox,
            flags: Tt.MoveAllAlternatesMatchingHDCP,
            hdcpLevel: d
          } : this.keySystemError(t);
        }
        return;
      case N.BUFFER_ADD_CODEC_ERROR:
      case N.REMUX_ALLOC_ERROR:
      case N.BUFFER_APPEND_ERROR:
        t.errorAction = this.getLevelSwitchAction(t, (s = t.level) != null ? s : r.loadLevel);
        return;
      case N.INTERNAL_EXCEPTION:
      case N.BUFFER_APPENDING_ERROR:
      case N.BUFFER_FULL_ERROR:
      case N.LEVEL_SWITCH_ERROR:
      case N.BUFFER_STALLED_ERROR:
      case N.BUFFER_SEEK_OVER_HOLE:
      case N.BUFFER_NUDGE_ON_STALL:
        t.errorAction = {
          action: lt.DoNothing,
          flags: Tt.None
        };
        return;
    }
    t.type === xe.KEY_SYSTEM_ERROR && this.keySystemError(t);
  }
  keySystemError(e) {
    const t = this.getVariantLevelIndex(e.frag);
    e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, t);
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    const i = this.hls, s = Ma(i.config.playlistLoadPolicy, e), r = this.playlistError++;
    if (Hs(s, r, Gs(e), e.response))
      return {
        action: lt.RetryRequest,
        flags: Tt.None,
        retryConfig: s,
        retryCount: r
      };
    const o = this.getLevelSwitchAction(e, t);
    return s && (o.retryConfig = s, o.retryCount = r), o;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, i = this.getVariantLevelIndex(e.frag), s = t.levels[i], {
      fragLoadPolicy: r,
      keyLoadPolicy: a
    } = t.config, o = Ma(e.details.startsWith("key") ? a : r, e), l = t.levels.reduce((d, u) => d + u.fragmentError, 0);
    if (s && (e.details !== N.FRAG_GAP && s.fragmentError++, Hs(o, l, Gs(e), e.response)))
      return {
        action: lt.RetryRequest,
        flags: Tt.None,
        retryConfig: o,
        retryCount: l
      };
    const c = this.getLevelSwitchAction(e, i);
    return o && (c.retryConfig = o, c.retryCount = l), c;
  }
  getLevelSwitchAction(e, t) {
    const i = this.hls;
    t == null && (t = i.loadLevel);
    const s = this.hls.levels[t];
    if (s) {
      var r, a;
      const c = e.details;
      s.loadError++, c === N.BUFFER_APPEND_ERROR && s.fragmentError++;
      let d = -1;
      const {
        levels: u,
        loadLevel: h,
        minAutoLevel: f,
        maxAutoLevel: g
      } = i;
      i.autoLevelEnabled || (i.loadLevel = -1);
      const m = (r = e.frag) == null ? void 0 : r.type, v = (m === pe.AUDIO && c === N.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (c === N.BUFFER_ADD_CODEC_ERROR || c === N.BUFFER_APPEND_ERROR)) && u.some(({
        audioCodec: A
      }) => s.audioCodec !== A), _ = e.sourceBufferName === "video" && (c === N.BUFFER_ADD_CODEC_ERROR || c === N.BUFFER_APPEND_ERROR) && u.some(({
        codecSet: A,
        audioCodec: S
      }) => s.codecSet !== A && s.audioCodec === S), {
        type: E,
        groupId: T
      } = (a = e.context) != null ? a : {};
      for (let A = u.length; A--; ) {
        const S = (A + h) % u.length;
        if (S !== h && S >= f && S <= g && u[S].loadError === 0) {
          var o, l;
          const w = u[S];
          if (c === N.FRAG_GAP && m === pe.MAIN && e.frag) {
            const C = u[S].details;
            if (C) {
              const L = Vs(e.frag, C.fragments, e.frag.start);
              if (L != null && L.gap)
                continue;
            }
          } else {
            if (E === Me.AUDIO_TRACK && w.hasAudioGroup(T) || E === Me.SUBTITLE_TRACK && w.hasSubtitleGroup(T))
              continue;
            if (m === pe.AUDIO && (o = s.audioGroups) != null && o.some((C) => w.hasAudioGroup(C)) || m === pe.SUBTITLE && (l = s.subtitleGroups) != null && l.some((C) => w.hasSubtitleGroup(C)) || v && s.audioCodec === w.audioCodec || !v && s.audioCodec !== w.audioCodec || _ && s.codecSet === w.codecSet)
              continue;
          }
          d = S;
          break;
        }
      }
      if (d > -1 && i.loadLevel !== d)
        return e.levelRetry = !0, this.playlistError = 0, {
          action: lt.SendAlternateToPenaltyBox,
          flags: Tt.None,
          nextAutoLevel: d
        };
    }
    return {
      action: lt.SendAlternateToPenaltyBox,
      flags: Tt.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var i;
    switch ((i = t.errorAction) == null ? void 0 : i.action) {
      case lt.DoNothing:
        break;
      case lt.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== N.FRAG_GAP ? t.fatal = !0 : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls, i = e.errorAction;
    if (!i)
      return;
    const {
      flags: s,
      hdcpLevel: r,
      nextAutoLevel: a
    } = i;
    switch (s) {
      case Tt.None:
        this.switchLevel(e, a);
        break;
      case Tt.MoveAllAlternatesMatchingHDCP:
        r && (t.maxHdcpLevel = Zr[Zr.indexOf(r) - 1], i.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
        break;
    }
    i.resolved || this.switchLevel(e, a);
  }
  switchLevel(e, t) {
    t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
  }
}
class Tn {
  constructor(e, t) {
    this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = k.log.bind(k, `${t}:`), this.warn = k.warn.bind(k, `${t}:`), this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(e, t, i) {
    const s = t?.renditionReports;
    if (s) {
      let r = -1;
      for (let a = 0; a < s.length; a++) {
        const o = s[a];
        let l;
        try {
          l = new self.URL(o.URI, t.url).href;
        } catch (c) {
          k.warn(`Could not construct new URL for Rendition Report: ${c}`), l = o.URI || "";
        }
        if (l === e) {
          r = a;
          break;
        } else l === e.substring(0, l.length) && (r = a);
      }
      if (r !== -1) {
        const a = s[r], o = parseInt(a["LAST-MSN"]) || t?.lastPartSn;
        let l = parseInt(a["LAST-PART"]) || t?.lastPartIndex;
        if (this.hls.config.lowLatencyMode) {
          const d = Math.min(t.age - t.partTarget, t.targetduration);
          l >= 0 && d > t.partTarget && (l += 1);
        }
        const c = i && Da(i);
        return new ka(o, l >= 0 ? l : void 0, c);
      }
    }
  }
  loadPlaylist(e) {
    this.requestScheduled === -1 && (this.requestScheduled = self.performance.now());
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  shouldReloadPlaylist(e) {
    return this.timer === -1 && this.requestScheduled === -1 && this.shouldLoadPlaylist(e);
  }
  playlistLoaded(e, t, i) {
    const {
      details: s,
      stats: r
    } = t, a = self.performance.now(), o = r.loading.first ? Math.max(0, a - r.loading.first) : 0;
    if (s.advancedDateTime = Date.now() - o, s.live || i != null && i.live) {
      if (s.reloaded(i), i && this.log(`live playlist ${e} ${s.advanced ? "REFRESHED " + s.lastPartSn + "-" + s.lastPartIndex : s.updated ? "UPDATED" : "MISSED"}`), i && s.fragments.length > 0 && x0(i, s), !this.canLoad || !s.live)
        return;
      let l, c, d;
      if (s.canBlockReload && s.endSN && s.advanced) {
        const p = this.hls.config.lowLatencyMode, v = s.lastPartSn, b = s.endSN, _ = s.lastPartIndex, E = _ !== -1, T = v === b, A = p ? 0 : _;
        E ? (c = T ? b + 1 : v, d = T ? A : _ + 1) : c = b + 1;
        const S = s.age, w = S + s.ageHeader;
        let C = Math.min(w - s.partTarget, s.targetduration * 1.5);
        if (C > 0) {
          if (i && C > i.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${i.tuneInGoal} to: ${C} with playlist age: ${s.age}`), C = 0;
          else {
            const L = Math.floor(C / s.targetduration);
            if (c += L, d !== void 0) {
              const I = Math.round(C % s.targetduration / s.partTarget);
              d += I;
            }
            this.log(`CDN Tune-in age: ${s.ageHeader}s last advanced ${S.toFixed(2)}s goal: ${C} skip sn ${L} to part ${d}`);
          }
          s.tuneInGoal = C;
        }
        if (l = this.getDeliveryDirectives(s, t.deliveryDirectives, c, d), p || !T) {
          this.loadPlaylist(l);
          return;
        }
      } else (s.canBlockReload || s.canSkipUntil) && (l = this.getDeliveryDirectives(s, t.deliveryDirectives, c, d));
      const u = this.hls.mainForwardBufferInfo, h = u ? u.end - u.len : 0, f = (s.edge - h) * 1e3, g = _0(s, f);
      s.updated && a > this.requestScheduled + g && (this.requestScheduled = r.loading.start), c !== void 0 && s.canBlockReload ? this.requestScheduled = r.loading.first + g - (s.partTarget * 1e3 || 1e3) : this.requestScheduled === -1 || this.requestScheduled + g < a ? this.requestScheduled = a : this.requestScheduled - a <= 0 && (this.requestScheduled += g);
      let m = this.requestScheduled - a;
      m = Math.max(0, m), this.log(`reload live playlist ${e} in ${Math.round(m)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(l), m);
    } else
      this.clearTimer();
  }
  getDeliveryDirectives(e, t, i, s) {
    let r = Da(e);
    return t != null && t.skip && e.deltaUpdateFailed && (i = t.msn, s = t.part, r = _s.No), new ka(i, s, r);
  }
  checkRetry(e) {
    const t = e.details, i = Gs(e), s = e.errorAction, {
      action: r,
      retryCount: a = 0,
      retryConfig: o
    } = s || {}, l = !!s && !!o && (r === lt.RetryRequest || !s.resolved && r === lt.SendAlternateToPenaltyBox);
    if (l) {
      var c;
      if (this.requestScheduled = -1, a >= o.maxNumRetry)
        return !1;
      if (i && (c = e.context) != null && c.deliveryDirectives)
        this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const d = En(o, a);
        this.timer = self.setTimeout(() => this.loadPlaylist(), d), this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" in ${d}ms`);
      }
      e.levelRetry = !0, s.resolved = !0;
    }
    return l;
  }
}
class yi {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(e, t = 0, i = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = i;
  }
  sample(e, t) {
    const i = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - i) + i * this.estimate_, this.totalWeight_ += e;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e)
        return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class D0 {
  constructor(e, t, i, s = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = i, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new yi(e), this.fast_ = new yi(t), this.defaultTTFB_ = s, this.ttfb_ = new yi(e);
  }
  update(e, t) {
    const {
      slow_: i,
      fast_: s,
      ttfb_: r
    } = this;
    i.halfLife !== e && (this.slow_ = new yi(e, i.getEstimate(), i.getTotalWeight())), s.halfLife !== t && (this.fast_ = new yi(t, s.getEstimate(), s.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new yi(e, r.getEstimate(), r.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const i = 8 * t, s = e / 1e3, r = i / s;
    this.fast_.sample(s, r), this.slow_.sample(s, r);
  }
  sampleTTFB(e) {
    const t = e / 1e3, i = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(i, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  destroy() {
  }
}
const Ol = {
  supported: !0,
  configurations: [],
  decodingInfoResults: [{
    supported: !0,
    powerEfficient: !0,
    smooth: !0
  }]
}, Na = {};
function k0(n, e, t, i, s, r) {
  const a = n.audioCodec ? n.audioGroups : null, o = r?.audioCodec, l = r?.channels, c = l ? parseInt(l) : o ? 1 / 0 : 2;
  let d = null;
  if (a != null && a.length)
    try {
      a.length === 1 && a[0] ? d = e.groups[a[0]].channels : d = a.reduce((u, h) => {
        if (h) {
          const f = e.groups[h];
          if (!f)
            throw new Error(`Audio track group ${h} not found`);
          Object.keys(f.channels).forEach((g) => {
            u[g] = (u[g] || 0) + f.channels[g];
          });
        }
        return u;
      }, {
        2: 0
      });
    } catch {
      return !0;
    }
  return n.videoCodec !== void 0 && (n.width > 1920 && n.height > 1088 || n.height > 1920 && n.width > 1088 || n.frameRate > Math.max(i, 30) || n.videoRange !== "SDR" && n.videoRange !== t || n.bitrate > Math.max(s, 8e6)) || !!d && ae(c) && Object.keys(d).some((u) => parseInt(u) > c);
}
function P0(n, e, t) {
  const i = n.videoCodec, s = n.audioCodec;
  if (!i || !s || !t)
    return Promise.resolve(Ol);
  const r = {
    width: n.width,
    height: n.height,
    bitrate: Math.ceil(Math.max(n.bitrate * 0.9, n.averageBitrate)),
    // Assume a framerate of 30fps since MediaCapabilities will not accept Level default of 0.
    framerate: n.frameRate || 30
  }, a = n.videoRange;
  a !== "SDR" && (r.transferFunction = a.toLowerCase());
  const o = i.split(",").map((l) => ({
    type: "media-source",
    video: ot(ot({}, r), {}, {
      contentType: Xi(l, "video")
    })
  }));
  return s && n.audioGroups && n.audioGroups.forEach((l) => {
    var c;
    l && ((c = e.groups[l]) == null || c.tracks.forEach((d) => {
      if (d.groupId === l) {
        const u = d.channels || "", h = parseFloat(u);
        ae(h) && h > 2 && o.push.apply(o, s.split(",").map((f) => ({
          type: "media-source",
          audio: {
            contentType: Xi(f, "audio"),
            channels: "" + h
            // spatialRendering:
            //   audioCodec === 'ec-3' && channels.indexOf('JOC'),
          }
        })));
      }
    }));
  }), Promise.all(o.map((l) => {
    const c = O0(l);
    return Na[c] || (Na[c] = t.decodingInfo(l));
  })).then((l) => ({
    supported: !l.some((c) => !c.supported),
    configurations: o,
    decodingInfoResults: l
  })).catch((l) => ({
    supported: !1,
    configurations: o,
    decodingInfoResults: [],
    error: l
  }));
}
function O0(n) {
  const {
    audio: e,
    video: t
  } = n, i = t || e;
  if (i) {
    const s = i.contentType.split('"')[1];
    if (t)
      return `r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction || "sd"}_${s}_${Math.ceil(t.bitrate / 1e5)}`;
    if (e)
      return `c${e.channels}${e.spatialRendering ? "s" : "n"}_${s}`;
  }
  return "";
}
function M0() {
  if (typeof matchMedia == "function") {
    const n = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (n.media !== e.media)
      return n.matches === !0;
  }
  return !1;
}
function F0(n, e) {
  let t = !1, i = [];
  return n && (t = n !== "SDR", i = [n]), e && (i = e.allowedVideoRanges || Us.slice(0), t = e.preferHDR !== void 0 ? e.preferHDR : M0(), t ? i = i.filter((s) => s !== "SDR") : i = ["SDR"]), {
    preferHDR: t,
    allowedVideoRanges: i
  };
}
function N0(n, e, t, i, s) {
  const r = Object.keys(n), a = i?.channels, o = i?.audioCodec, l = a && parseInt(a) === 2;
  let c = !0, d = !1, u = 1 / 0, h = 1 / 0, f = 1 / 0, g = 0, m = [];
  const {
    preferHDR: p,
    allowedVideoRanges: v
  } = F0(e, s);
  for (let T = r.length; T--; ) {
    const A = n[r[T]];
    c = A.channels[2] > 0, u = Math.min(u, A.minHeight), h = Math.min(h, A.minFramerate), f = Math.min(f, A.minBitrate);
    const S = v.filter((w) => A.videoRanges[w] > 0);
    S.length > 0 && (d = !0, m = S);
  }
  u = ae(u) ? u : 0, h = ae(h) ? h : 0;
  const b = Math.max(1080, u), _ = Math.max(30, h);
  return f = ae(f) ? f : t, t = Math.max(f, t), d || (e = void 0, m = []), {
    codecSet: r.reduce((T, A) => {
      const S = n[A];
      if (A === T)
        return T;
      if (S.minBitrate > t)
        return Kt(A, `min bitrate of ${S.minBitrate} > current estimate of ${t}`), T;
      if (!S.hasDefaultAudio)
        return Kt(A, "no renditions with default or auto-select sound found"), T;
      if (o && A.indexOf(o.substring(0, 4)) % 5 !== 0)
        return Kt(A, `audio codec preference "${o}" not found`), T;
      if (a && !l) {
        if (!S.channels[a])
          return Kt(A, `no renditions with ${a} channel sound found (channels options: ${Object.keys(S.channels)})`), T;
      } else if ((!o || l) && c && S.channels[2] === 0)
        return Kt(A, "no renditions with stereo sound found"), T;
      return S.minHeight > b ? (Kt(A, `min resolution of ${S.minHeight} > maximum of ${b}`), T) : S.minFramerate > _ ? (Kt(A, `min framerate of ${S.minFramerate} > maximum of ${_}`), T) : m.some((w) => S.videoRanges[w] > 0) ? S.maxScore < g ? (Kt(A, `max score of ${S.maxScore} < selected max of ${g}`), T) : T && (Ns(A) >= Ns(T) || S.fragmentError > n[T].fragmentError) ? T : (g = S.maxScore, A) : (Kt(A, `no variants with VIDEO-RANGE of ${JSON.stringify(m)} found`), T);
    }, void 0),
    videoRanges: m,
    preferHDR: p,
    minFramerate: h,
    minBitrate: f
  };
}
function Kt(n, e) {
  k.log(`[abr] start candidates with "${n}" ignored because ${e}`);
}
function B0(n) {
  return n.reduce((e, t) => {
    let i = e.groups[t.groupId];
    i || (i = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: !1,
      hasAutoSelect: !1
    }), i.tracks.push(t);
    const s = t.channels || "2";
    return i.channels[s] = (i.channels[s] || 0) + 1, i.hasDefault = i.hasDefault || t.default, i.hasAutoSelect = i.hasAutoSelect || t.autoselect, i.hasDefault && (e.hasDefaultAudio = !0), i.hasAutoSelect && (e.hasAutoSelectAudio = !0), e;
  }, {
    hasDefaultAudio: !1,
    hasAutoSelectAudio: !1,
    groups: {}
  });
}
function U0(n, e, t, i) {
  return n.slice(t, i + 1).reduce((s, r) => {
    if (!r.codecSet)
      return s;
    const a = r.audioGroups;
    let o = s[r.codecSet];
    o || (s[r.codecSet] = o = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !a,
      fragmentError: 0
    }), o.minBitrate = Math.min(o.minBitrate, r.bitrate);
    const l = Math.min(r.height, r.width);
    return o.minHeight = Math.min(o.minHeight, l), o.minFramerate = Math.min(o.minFramerate, r.frameRate), o.maxScore = Math.max(o.maxScore, r.score), o.fragmentError += r.fragmentError, o.videoRanges[r.videoRange] = (o.videoRanges[r.videoRange] || 0) + 1, a && a.forEach((c) => {
      if (!c)
        return;
      const d = e.groups[c];
      d && (o.hasDefaultAudio = o.hasDefaultAudio || e.hasDefaultAudio ? d.hasDefault : d.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(d.channels).forEach((u) => {
        o.channels[u] = (o.channels[u] || 0) + d.channels[u];
      }));
    }), s;
  }, {});
}
function Bt(n, e, t) {
  if ("attrs" in n) {
    const i = e.indexOf(n);
    if (i !== -1)
      return i;
  }
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (wi(n, s, t))
      return i;
  }
  return -1;
}
function wi(n, e, t) {
  const {
    groupId: i,
    name: s,
    lang: r,
    assocLang: a,
    characteristics: o,
    default: l
  } = n, c = n.forced;
  return (i === void 0 || e.groupId === i) && (s === void 0 || e.name === s) && (r === void 0 || e.lang === r) && (r === void 0 || e.assocLang === a) && (l === void 0 || e.default === l) && (c === void 0 || e.forced === c) && (o === void 0 || G0(o, e.characteristics)) && (t === void 0 || t(n, e));
}
function G0(n, e = "") {
  const t = n.split(","), i = e.split(",");
  return t.length === i.length && !t.some((s) => i.indexOf(s) === -1);
}
function xi(n, e) {
  const {
    audioCodec: t,
    channels: i
  } = n;
  return (t === void 0 || (e.audioCodec || "").substring(0, 4) === t.substring(0, 4)) && (i === void 0 || i === (e.channels || "2"));
}
function H0(n, e, t, i, s) {
  const r = e[i], o = e.reduce((h, f, g) => {
    const m = f.uri;
    return (h[m] || (h[m] = [])).push(g), h;
  }, {})[r.uri];
  o.length > 1 && (i = Math.max.apply(Math, o));
  const l = r.videoRange, c = r.frameRate, d = r.codecSet.substring(0, 4), u = Ba(e, i, (h) => {
    if (h.videoRange !== l || h.frameRate !== c || h.codecSet.substring(0, 4) !== d)
      return !1;
    const f = h.audioGroups, g = t.filter((m) => !f || f.indexOf(m.groupId) !== -1);
    return Bt(n, g, s) > -1;
  });
  return u > -1 ? u : Ba(e, i, (h) => {
    const f = h.audioGroups, g = t.filter((m) => !f || f.indexOf(m.groupId) !== -1);
    return Bt(n, g, s) > -1;
  });
}
function Ba(n, e, t) {
  for (let i = e; i; i--)
    if (t(n[i]))
      return i;
  for (let i = e + 1; i < n.length; i++)
    if (t(n[i]))
      return i;
  return -1;
}
class V0 {
  constructor(e) {
    this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = () => {
      const {
        fragCurrent: t,
        partCurrent: i,
        hls: s
      } = this, {
        autoLevelEnabled: r,
        media: a
      } = s;
      if (!t || !a)
        return;
      const o = performance.now(), l = i ? i.stats : t.stats, c = i ? i.duration : t.duration, d = o - l.loading.start, u = s.minAutoLevel;
      if (l.aborted || l.loaded && l.loaded === l.total || t.level <= u) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!r || a.paused || !a.playbackRate || !a.readyState)
        return;
      const h = s.mainForwardBufferInfo;
      if (h === null)
        return;
      const f = this.bwEstimator.getEstimateTTFB(), g = Math.abs(a.playbackRate);
      if (d <= Math.max(f, 1e3 * (c / (g * 2))))
        return;
      const m = h.len / g, p = l.loading.first ? l.loading.first - l.loading.start : -1, v = l.loaded && p > -1, b = this.getBwEstimate(), _ = s.levels, E = _[t.level], T = l.total || Math.max(l.loaded, Math.round(c * E.averageBitrate / 8));
      let A = v ? d - p : d;
      A < 1 && v && (A = Math.min(d, l.loaded * 8 / b));
      const S = v ? l.loaded * 1e3 / A : 0, w = S ? (T - l.loaded) / S : T * 8 / b + f / 1e3;
      if (w <= m)
        return;
      const C = S ? S * 8 : b;
      let L = Number.POSITIVE_INFINITY, I;
      for (I = t.level - 1; I > u; I--) {
        const F = _[I].maxBitrate;
        if (L = this.getTimeToLoadFrag(f / 1e3, C, c * F, !_[I].details), L < m)
          break;
      }
      if (L >= w || L > c * 10)
        return;
      s.nextLoadLevel = s.nextAutoLevel = I, v ? this.bwEstimator.sample(d - Math.min(f, p), l.loaded) : this.bwEstimator.sampleTTFB(d);
      const K = _[I].maxBitrate;
      this.getBwEstimate() * this.hls.config.abrBandWidthUpFactor > K && this.resetEstimator(K), this.clearTimer(), k.warn(`[abr] Fragment ${t.sn}${i ? " part " + i.index : ""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${m.toFixed(3)} s
      Estimated load time for current fragment: ${w.toFixed(3)} s
      Estimated load time for down switch fragment: ${L.toFixed(3)} s
      TTFB estimate: ${p | 0} ms
      Current BW estimate: ${ae(b) ? b | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${I} @ ${K | 0} bps`), s.trigger(x.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: t,
        part: i,
        stats: l
      });
    }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(e) {
    e && (k.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const e = this.hls.config;
    return new D0(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.FRAG_LOADING, this.onFragLoading, this), e.on(x.FRAG_LOADED, this.onFragLoaded, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this), e.on(x.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(x.LEVEL_LOADED, this.onLevelLoaded, this), e.on(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(x.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(x.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.FRAG_LOADING, this.onFragLoading, this), e.off(x.FRAG_LOADED, this.onFragLoaded, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this), e.off(x.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(x.LEVEL_LOADED, this.onLevelLoaded, this), e.off(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(x.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(x.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(e, t) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(e, t) {
    const i = t.frag;
    if (!this.ignoreFragment(i)) {
      if (!i.bitrateTest) {
        var s;
        this.fragCurrent = i, this.partCurrent = (s = t.part) != null ? s : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  onError(e, t) {
    if (!t.fatal)
      switch (t.details) {
        case N.BUFFER_ADD_CODEC_ERROR:
        case N.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case N.FRAG_LOAD_TIMEOUT: {
          const i = t.frag, {
            fragCurrent: s,
            partCurrent: r
          } = this;
          if (i && s && i.sn === s.sn && i.level === s.level) {
            const a = performance.now(), o = r ? r.stats : i.stats, l = a - o.loading.start, c = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && c > -1) {
              const u = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(l - Math.min(u, c), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(l);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(e, t, i, s) {
    const r = e + i / t, a = s ? this.lastLevelLoadSec : 0;
    return r + a;
  }
  onLevelLoaded(e, t) {
    const i = this.hls.config, {
      loading: s
    } = t.stats, r = s.end - s.start;
    ae(r) && (this.lastLevelLoadSec = r / 1e3), t.details.live ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive) : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD);
  }
  onFragLoaded(e, {
    frag: t,
    part: i
  }) {
    const s = i ? i.stats : t.stats;
    if (t.type === pe.MAIN && this.bwEstimator.sampleTTFB(s.loading.first - s.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const r = i ? i.duration : t.duration, a = this.hls.levels[t.level], o = (a.loaded ? a.loaded.bytes : 0) + s.loaded, l = (a.loaded ? a.loaded.duration : 0) + r;
        a.loaded = {
          bytes: o,
          duration: l
        }, a.realBitrate = Math.round(8 * o / l);
      }
      if (t.bitrateTest) {
        const r = {
          stats: s,
          frag: t,
          part: i,
          id: t.type
        };
        this.onFragBuffered(x.FRAG_BUFFERED, r), t.bitrateTest = !1;
      } else
        this.lastLoadedFragLevel = t.level;
    }
  }
  onFragBuffered(e, t) {
    const {
      frag: i,
      part: s
    } = t, r = s != null && s.stats.loaded ? s.stats : i.stats;
    if (r.aborted || this.ignoreFragment(i))
      return;
    const a = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(a, r.loaded), r.bwEstimate = this.getBwEstimate(), i.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== pe.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: e,
      minAutoLevel: t
    } = this.hls, i = this.getBwEstimate(), s = this.hls.config.maxStarvationDelay, r = this.findBestLevel(i, t, e, 0, s, 1, 1);
    if (r > -1)
      return r;
    const a = this.hls.firstLevel, o = Math.min(Math.max(a, t), e);
    return k.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this.forcedAutoLevel, i = this.bwEstimator.canEstimate(), s = this.lastLoadedFragLevel > -1;
    if (e !== -1 && (!i || !s || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return e;
    const r = i && s ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (e !== -1) {
      const a = this.hls.levels;
      if (a.length > Math.max(e, r) && a[e].loadError <= a[r].loadError)
        return e;
    }
    return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: i
    } = this, {
      maxAutoLevel: s,
      config: r,
      minAutoLevel: a
    } = i, o = t ? t.duration : e ? e.duration : 0, l = this.getBwEstimate(), c = this.getStarvationDelay();
    let d = r.abrBandWidthFactor, u = r.abrBandWidthUpFactor;
    if (c) {
      const p = this.findBestLevel(l, a, s, c, 0, d, u);
      if (p >= 0)
        return p;
    }
    let h = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay;
    if (!c) {
      const p = this.bitrateTestDelay;
      p && (h = (o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay) - p, k.info(`[abr] bitrate test took ${Math.round(1e3 * p)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * h)} ms`), d = u = 1);
    }
    const f = this.findBestLevel(l, a, s, c, h, d, u);
    if (k.info(`[abr] ${c ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${f}`), f > -1)
      return f;
    const g = i.levels[a], m = i.levels[i.loadLevel];
    return g?.bitrate < m?.bitrate ? a : i.loadLevel;
  }
  getStarvationDelay() {
    const e = this.hls, t = e.media;
    if (!t)
      return 1 / 0;
    const i = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, s = e.mainForwardBufferInfo;
    return (s ? s.len : 0) / i;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(e, t, i, s, r, a, o) {
    var l;
    const c = s + r, d = this.lastLoadedFragLevel, u = d === -1 ? this.hls.firstLevel : d, {
      fragCurrent: h,
      partCurrent: f
    } = this, {
      levels: g,
      allAudioTracks: m,
      loadLevel: p,
      config: v
    } = this.hls;
    if (g.length === 1)
      return 0;
    const b = g[u], _ = !!(b != null && (l = b.details) != null && l.live), E = p === -1 || d === -1;
    let T, A = "SDR", S = b?.frameRate || 0;
    const {
      audioPreference: w,
      videoPreference: C
    } = v, L = this.audioTracksByGroup || (this.audioTracksByGroup = B0(m));
    if (E) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const U = this.codecTiers || (this.codecTiers = U0(g, L, t, i)), G = N0(U, A, e, w, C), {
        codecSet: ee,
        videoRanges: oe,
        minFramerate: H,
        minBitrate: B,
        preferHDR: O
      } = G;
      T = ee, A = O ? oe[oe.length - 1] : oe[0], S = H, e = Math.max(e, B), k.log(`[abr] picked start tier ${JSON.stringify(G)}`);
    } else
      T = b?.codecSet, A = b?.videoRange;
    const I = f ? f.duration : h ? h.duration : 0, K = this.bwEstimator.getEstimateTTFB() / 1e3, F = [];
    for (let U = i; U >= t; U--) {
      var D;
      const G = g[U], ee = U > u;
      if (!G)
        continue;
      if (v.useMediaCapabilities && !G.supportedResult && !G.supportedPromise) {
        const le = navigator.mediaCapabilities;
        typeof le?.decodingInfo == "function" && k0(G, L, A, S, e, w) ? (G.supportedPromise = P0(G, L, le), G.supportedPromise.then((te) => {
          if (!this.hls)
            return;
          G.supportedResult = te;
          const ge = this.hls.levels, Q = ge.indexOf(G);
          te.error ? k.warn(`[abr] MediaCapabilities decodingInfo error: "${te.error}" for level ${Q} ${JSON.stringify(te)}`) : te.supported || (k.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${Q} ${JSON.stringify(te)}`), Q > -1 && ge.length > 1 && (k.log(`[abr] Removing unsupported level ${Q}`), this.hls.removeLevel(Q)));
        })) : G.supportedResult = Ol;
      }
      if (T && G.codecSet !== T || A && G.videoRange !== A || ee && S > G.frameRate || !ee && S > 0 && S < G.frameRate || G.supportedResult && !((D = G.supportedResult.decodingInfoResults) != null && D[0].smooth)) {
        F.push(U);
        continue;
      }
      const oe = G.details, H = (f ? oe?.partTarget : oe?.averagetargetduration) || I;
      let B;
      ee ? B = o * e : B = a * e;
      const O = I && s >= I * 2 && r === 0 ? g[U].averageBitrate : g[U].maxBitrate, Y = this.getTimeToLoadFrag(K, B, O * H, oe === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        B >= O && // no level change, or new level has no error history
        (U === d || G.loadError === 0 && G.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (Y <= K || !ae(Y) || _ && !this.bitrateTestDelay || Y < c)
      ) {
        const le = this.forcedAutoLevel;
        return U !== p && (le === -1 || le !== p) && (F.length && k.trace(`[abr] Skipped level(s) ${F.join(",")} of ${i} max with CODECS and VIDEO-RANGE:"${g[F[0]].codecs}" ${g[F[0]].videoRange}; not compatible with "${b.codecs}" ${A}`), k.info(`[abr] switch candidate:${u}->${U} adjustedbw(${Math.round(B)})-bitrate=${Math.round(B - O)} ttfb:${K.toFixed(1)} avgDuration:${H.toFixed(1)} maxFetchDuration:${c.toFixed(1)} fetchDuration:${Y.toFixed(1)} firstSelection:${E} codecSet:${T} videoRange:${A} hls.loadLevel:${p}`)), E && (this.firstSelection = U), U;
      }
    }
    return -1;
  }
  set nextAutoLevel(e) {
    const {
      maxAutoLevel: t,
      minAutoLevel: i
    } = this.hls, s = Math.min(Math.max(e, i), t);
    this._nextAutoLevel !== s && (this.nextAutoLevelKey = "", this._nextAutoLevel = s);
  }
}
class K0 {
  constructor() {
    this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(e) {
    return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
var at = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class W0 {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.BUFFER_APPENDED, this.onBufferAppended, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this), e.on(x.FRAG_LOADED, this.onFragLoaded, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.BUFFER_APPENDED, this.onBufferAppended, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this), e.off(x.FRAG_LOADED, this.onFragLoaded, this);
  }
  destroy() {
    this._unregisterListeners(), this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(e, t) {
    const i = this.activePartLists[t];
    if (i)
      for (let s = i.length; s--; ) {
        const r = i[s];
        if (!r)
          break;
        const a = r.end;
        if (r.start <= e && a !== null && e <= a)
          return r;
      }
    return this.getBufferedFrag(e, t);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(e, t) {
    const {
      fragments: i
    } = this, s = Object.keys(i);
    for (let r = s.length; r--; ) {
      const a = i[s[r]];
      if (a?.body.type === t && a.buffered) {
        const o = a.body;
        if (o.start <= e && e <= o.end)
          return o;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, i, s) {
    this.timeRanges && (this.timeRanges[e] = t);
    const r = s?.fragment.sn || -1;
    Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o || r >= o.body.sn)
        return;
      if (!o.buffered && !o.loaded) {
        o.body.type === i && this.removeFragment(o.body);
        return;
      }
      const l = o.range[e];
      l && l.time.some((c) => {
        const d = !this.isTimeBuffered(c.startPTS, c.endPTS, t);
        return d && this.removeFragment(o.body), d;
      });
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges, {
      frag: i,
      part: s
    } = e;
    if (!t || i.sn === "initSegment")
      return;
    const r = Ei(i), a = this.fragments[r];
    if (!a || a.buffered && i.gap)
      return;
    const o = !i.relurl;
    Object.keys(t).forEach((l) => {
      const c = i.elementaryStreams[l];
      if (!c)
        return;
      const d = t[l], u = o || c.partial === !0;
      a.range[l] = this.getBufferedTimes(i, s, u, d);
    }), a.loaded = null, Object.keys(a.range).length ? (a.buffered = !0, (a.body.endList = i.endList || a.body.endList) && (this.endListFragments[a.body.type] = a), us(a) || this.removeParts(i.sn - 1, i.type)) : this.removeFragment(a.body);
  }
  removeParts(e, t) {
    const i = this.activePartLists[t];
    i && (this.activePartLists[t] = i.filter((s) => s.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const i = Ei(e);
    let s = this.fragments[i];
    !s && t && (s = this.fragments[i] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    }, e.gap && (this.hasGaps = !0)), s && (s.loaded = null, s.buffered = !0);
  }
  getBufferedTimes(e, t, i, s) {
    const r = {
      time: [],
      partial: i
    }, a = e.start, o = e.end, l = e.minEndPTS || o, c = e.maxStartPTS || a;
    for (let d = 0; d < s.length; d++) {
      const u = s.start(d) - this.bufferPadding, h = s.end(d) + this.bufferPadding;
      if (c >= u && l <= h) {
        r.time.push({
          startPTS: Math.max(a, s.start(d)),
          endPTS: Math.min(o, s.end(d))
        });
        break;
      } else if (a < h && o > u) {
        const f = Math.max(a, s.start(d)), g = Math.min(o, s.end(d));
        g > f && (r.partial = !0, r.time.push({
          startPTS: f,
          endPTS: g
        }));
      } else if (o <= u)
        break;
    }
    return r;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(e) {
    let t = null, i, s, r, a = 0;
    const {
      bufferPadding: o,
      fragments: l
    } = this;
    return Object.keys(l).forEach((c) => {
      const d = l[c];
      d && us(d) && (s = d.body.start - o, r = d.body.end + o, e >= s && e <= r && (i = Math.min(e - s, r - e), a <= i && (t = d.body, a = i)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || us(t));
  }
  getState(e) {
    const t = Ei(e), i = this.fragments[t];
    return i ? i.buffered ? us(i) ? at.PARTIAL : at.OK : at.APPENDING : at.NOT_LOADED;
  }
  isTimeBuffered(e, t, i) {
    let s, r;
    for (let a = 0; a < i.length; a++) {
      if (s = i.start(a) - this.bufferPadding, r = i.end(a) + this.bufferPadding, e >= s && t <= r)
        return !0;
      if (t <= s)
        return !1;
    }
    return !1;
  }
  onFragLoaded(e, t) {
    const {
      frag: i,
      part: s
    } = t;
    if (i.sn === "initSegment" || i.bitrateTest)
      return;
    const r = s ? null : t, a = Ei(i);
    this.fragments[a] = {
      body: i,
      appendedPTS: null,
      loaded: r,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: i,
      part: s,
      timeRanges: r
    } = t;
    if (i.sn === "initSegment")
      return;
    const a = i.type;
    if (s) {
      let o = this.activePartLists[a];
      o || (this.activePartLists[a] = o = []), o.push(s);
    }
    this.timeRanges = r, Object.keys(r).forEach((o) => {
      const l = r[o];
      this.detectEvictedFragments(o, l, a, s);
    });
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = Ei(e);
    return !!this.fragments[t];
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, i, s, r) {
    s && !this.hasGaps || Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o)
        return;
      const l = o.body;
      l.type !== i || s && !l.gap || l.start < t && l.end > e && (o.buffered || r) && this.removeFragment(l);
    });
  }
  removeFragment(e) {
    const t = Ei(e);
    e.stats.loaded = 0, e.clearElementaryStreamInfo();
    const i = this.activePartLists[e.type];
    if (i) {
      const s = e.sn;
      this.activePartLists[e.type] = i.filter((r) => r.fragment.sn !== s);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
  }
}
function us(n) {
  var e, t, i;
  return n.buffered && (n.body.gap || ((e = n.range.video) == null ? void 0 : e.partial) || ((t = n.range.audio) == null ? void 0 : t.partial) || ((i = n.range.audiovideo) == null ? void 0 : i.partial));
}
function Ei(n) {
  return `${n.type}_${n.level}_${n.sn}`;
}
const j0 = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class Ke {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    try {
      if (e) {
        const i = Ke.getBuffered(e);
        for (let s = 0; s < i.length; s++)
          if (t >= i.start(s) && t <= i.end(s))
            return !0;
      }
    } catch {
    }
    return !1;
  }
  static bufferInfo(e, t, i) {
    try {
      if (e) {
        const s = Ke.getBuffered(e), r = [];
        let a;
        for (a = 0; a < s.length; a++)
          r.push({
            start: s.start(a),
            end: s.end(a)
          });
        return this.bufferedInfo(r, t, i);
      }
    } catch {
    }
    return {
      len: 0,
      start: t,
      end: t,
      nextStart: void 0
    };
  }
  static bufferedInfo(e, t, i) {
    t = Math.max(0, t), e.sort(function(c, d) {
      const u = c.start - d.start;
      return u || d.end - c.end;
    });
    let s = [];
    if (i)
      for (let c = 0; c < e.length; c++) {
        const d = s.length;
        if (d) {
          const u = s[d - 1].end;
          e[c].start - u < i ? e[c].end > u && (s[d - 1].end = e[c].end) : s.push(e[c]);
        } else
          s.push(e[c]);
      }
    else
      s = e;
    let r = 0, a, o = t, l = t;
    for (let c = 0; c < s.length; c++) {
      const d = s[c].start, u = s[c].end;
      if (t + i >= d && t < u)
        o = d, l = u, r = l - t;
      else if (t + i < d) {
        a = d;
        break;
      }
    }
    return {
      len: r,
      start: o || 0,
      end: l || 0,
      nextStart: a
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered;
    } catch (t) {
      return k.log("failed to get media.buffered", t), j0;
    }
  }
}
class bn {
  constructor(e, t, i, s = 0, r = -1, a = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = hs(), this.buffering = {
      audio: hs(),
      video: hs(),
      audiovideo: hs()
    }, this.level = e, this.sn = t, this.id = i, this.size = s, this.part = r, this.partial = a;
  }
}
function hs() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
function Ss(n, e) {
  for (let i = 0, s = n.length; i < s; i++) {
    var t;
    if (((t = n[i]) == null ? void 0 : t.cc) === e)
      return n[i];
  }
  return null;
}
function Y0(n, e, t) {
  return !!(e && (t.endCC > t.startCC || n && n.cc < t.startCC));
}
function z0(n, e) {
  const t = n.fragments, i = e.fragments;
  if (!i.length || !t.length) {
    k.log("No fragments to align");
    return;
  }
  const s = Ss(t, i[0].cc);
  if (!s || s && !s.startPTS) {
    k.log("No frag in previous level to align on");
    return;
  }
  return s;
}
function Ua(n, e) {
  if (n) {
    const t = n.start + e;
    n.start = n.startPTS = t, n.endPTS = t + n.duration;
  }
}
function Ml(n, e) {
  const t = e.fragments;
  for (let i = 0, s = t.length; i < s; i++)
    Ua(t[i], n);
  e.fragmentHint && Ua(e.fragmentHint, n), e.alignedSliding = !0;
}
function q0(n, e, t) {
  e && (X0(n, t, e), !t.alignedSliding && e && Ks(t, e), !t.alignedSliding && e && !t.skippedSegments && Cl(e, t));
}
function X0(n, e, t) {
  if (Y0(n, t, e)) {
    const i = z0(t, e);
    i && ae(i.start) && (k.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`), Ml(i.start, e));
  }
}
function Ks(n, e) {
  if (!n.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = n.fragments, i = e.fragments;
  if (!t.length || !i.length)
    return;
  let s, r;
  const a = Math.min(e.endCC, n.endCC);
  e.startCC < a && n.startCC < a && (s = Ss(i, a), r = Ss(t, a)), (!s || !r) && (s = i[Math.floor(i.length / 2)], r = Ss(t, s.cc) || t[Math.floor(t.length / 2)]);
  const o = s.programDateTime, l = r.programDateTime;
  if (!o || !l)
    return;
  const c = (l - o) / 1e3 - (r.start - s.start);
  Ml(c, n);
}
const Ga = Math.pow(2, 17);
class Q0 {
  constructor(e) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const i = e.url;
    if (!i)
      return Promise.reject(new jt({
        type: xe.NETWORK_ERROR,
        details: N.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: e,
        error: new Error(`Fragment does not have a ${i ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const s = this.config, r = s.fLoader, a = s.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((f) => f[0] === "GAP")) {
          l(Va(e));
          return;
        } else
          e.gap = !1;
      const c = this.loader = e.loader = r ? new r(s) : new a(s), d = Ha(e), u = Fa(s.fragLoadPolicy.default), h = {
        loadPolicy: u,
        timeout: u.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : Ga
      };
      e.stats = c.stats, c.load(d, h, {
        onSuccess: (f, g, m, p) => {
          this.resetLoader(e, c);
          let v = f.data;
          m.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(v.slice(0, 16)), v = v.slice(16)), o({
            frag: e,
            part: null,
            payload: v,
            networkDetails: p
          });
        },
        onError: (f, g, m, p) => {
          this.resetLoader(e, c), l(new jt({
            type: xe.NETWORK_ERROR,
            details: N.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            response: ot({
              url: i,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: m,
            stats: p
          }));
        },
        onAbort: (f, g, m) => {
          this.resetLoader(e, c), l(new jt({
            type: xe.NETWORK_ERROR,
            details: N.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: f
          }));
        },
        onTimeout: (f, g, m) => {
          this.resetLoader(e, c), l(new jt({
            type: xe.NETWORK_ERROR,
            details: N.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            error: new Error(`Timeout after ${h.timeout}ms`),
            networkDetails: m,
            stats: f
          }));
        },
        onProgress: (f, g, m, p) => {
          t && t({
            frag: e,
            part: null,
            payload: m,
            networkDetails: p
          });
        }
      });
    });
  }
  loadPart(e, t, i) {
    this.abort();
    const s = this.config, r = s.fLoader, a = s.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        l(Va(e, t));
        return;
      }
      const c = this.loader = e.loader = r ? new r(s) : new a(s), d = Ha(e, t), u = Fa(s.fragLoadPolicy.default), h = {
        loadPolicy: u,
        timeout: u.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: Ga
      };
      t.stats = c.stats, c.load(d, h, {
        onSuccess: (f, g, m, p) => {
          this.resetLoader(e, c), this.updateStatsFromPart(e, t);
          const v = {
            frag: e,
            part: t,
            payload: f.data,
            networkDetails: p
          };
          i(v), o(v);
        },
        onError: (f, g, m, p) => {
          this.resetLoader(e, c), l(new jt({
            type: xe.NETWORK_ERROR,
            details: N.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            part: t,
            response: ot({
              url: d.url,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: m,
            stats: p
          }));
        },
        onAbort: (f, g, m) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, c), l(new jt({
            type: xe.NETWORK_ERROR,
            details: N.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: f
          }));
        },
        onTimeout: (f, g, m) => {
          this.resetLoader(e, c), l(new jt({
            type: xe.NETWORK_ERROR,
            details: N.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${h.timeout}ms`),
            networkDetails: m,
            stats: f
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const i = e.stats, s = t.stats, r = s.total;
    if (i.loaded += s.loaded, r) {
      const l = Math.round(e.duration / t.duration), c = Math.min(Math.round(i.loaded / r), l), u = (l - c) * Math.round(i.loaded / c);
      i.total = i.loaded + u;
    } else
      i.total = Math.max(i.loaded, i.total);
    const a = i.loading, o = s.loading;
    a.start ? a.first += o.first - o.start : (a.start = o.start, a.first = o.first), a.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function Ha(n, e = null) {
  const t = e || n, i = {
    frag: n,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, s = t.byteRangeStartOffset, r = t.byteRangeEndOffset;
  if (ae(s) && ae(r)) {
    var a;
    let o = s, l = r;
    if (n.sn === "initSegment" && ((a = n.decryptdata) == null ? void 0 : a.method) === "AES-128") {
      const c = r - s;
      c % 16 && (l = r + (16 - c % 16)), s !== 0 && (i.resetIV = !0, o = s - 16);
    }
    i.rangeStart = o, i.rangeEnd = l;
  }
  return i;
}
function Va(n, e) {
  const t = new Error(`GAP ${n.gap ? "tag" : "attribute"} found`), i = {
    type: xe.MEDIA_ERROR,
    details: N.FRAG_GAP,
    fatal: !1,
    frag: n,
    error: t,
    networkDetails: null
  };
  return e && (i.part = e), (e || n).stats.aborted = !0, new jt(i);
}
class jt extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class Z0 {
  constructor(e, t) {
    this.subtle = void 0, this.aesIV = void 0, this.subtle = e, this.aesIV = t;
  }
  decrypt(e, t) {
    return this.subtle.decrypt({
      name: "AES-CBC",
      iv: this.aesIV
    }, t, e);
  }
}
class J0 {
  constructor(e, t) {
    this.subtle = void 0, this.key = void 0, this.subtle = e, this.key = t;
  }
  expandKey() {
    return this.subtle.importKey("raw", this.key, {
      name: "AES-CBC"
    }, !1, ["encrypt", "decrypt"]);
  }
}
function $0(n) {
  const e = n.byteLength, t = e && new DataView(n.buffer).getUint8(e - 1);
  return t ? di(n, 0, e - t) : n;
}
class eg {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e), i = new Uint32Array(4);
    for (let s = 0; s < 4; s++)
      i[s] = t.getUint32(s * 4);
    return i;
  }
  initTable() {
    const e = this.sBox, t = this.invSBox, i = this.subMix, s = i[0], r = i[1], a = i[2], o = i[3], l = this.invSubMix, c = l[0], d = l[1], u = l[2], h = l[3], f = new Uint32Array(256);
    let g = 0, m = 0, p = 0;
    for (p = 0; p < 256; p++)
      p < 128 ? f[p] = p << 1 : f[p] = p << 1 ^ 283;
    for (p = 0; p < 256; p++) {
      let v = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
      v = v >>> 8 ^ v & 255 ^ 99, e[g] = v, t[v] = g;
      const b = f[g], _ = f[b], E = f[_];
      let T = f[v] * 257 ^ v * 16843008;
      s[g] = T << 24 | T >>> 8, r[g] = T << 16 | T >>> 16, a[g] = T << 8 | T >>> 24, o[g] = T, T = E * 16843009 ^ _ * 65537 ^ b * 257 ^ g * 16843008, c[v] = T << 24 | T >>> 8, d[v] = T << 16 | T >>> 16, u[v] = T << 8 | T >>> 24, h[v] = T, g ? (g = b ^ f[f[f[E ^ b]]], m ^= f[f[m]]) : g = m = 1;
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let i = !0, s = 0;
    for (; s < t.length && i; )
      i = t[s] === this.key[s], s++;
    if (i)
      return;
    this.key = t;
    const r = this.keySize = t.length;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("Invalid aes key size=" + r);
    const a = this.ksRows = (r + 6 + 1) * 4;
    let o, l;
    const c = this.keySchedule = new Uint32Array(a), d = this.invKeySchedule = new Uint32Array(a), u = this.sBox, h = this.rcon, f = this.invSubMix, g = f[0], m = f[1], p = f[2], v = f[3];
    let b, _;
    for (o = 0; o < a; o++) {
      if (o < r) {
        b = c[o] = t[o];
        continue;
      }
      _ = b, o % r === 0 ? (_ = _ << 8 | _ >>> 24, _ = u[_ >>> 24] << 24 | u[_ >>> 16 & 255] << 16 | u[_ >>> 8 & 255] << 8 | u[_ & 255], _ ^= h[o / r | 0] << 24) : r > 6 && o % r === 4 && (_ = u[_ >>> 24] << 24 | u[_ >>> 16 & 255] << 16 | u[_ >>> 8 & 255] << 8 | u[_ & 255]), c[o] = b = (c[o - r] ^ _) >>> 0;
    }
    for (l = 0; l < a; l++)
      o = a - l, l & 3 ? _ = c[o] : _ = c[o - 4], l < 4 || o <= 4 ? d[l] = _ : d[l] = g[u[_ >>> 24]] ^ m[u[_ >>> 16 & 255]] ^ p[u[_ >>> 8 & 255]] ^ v[u[_ & 255]], d[l] = d[l] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, i) {
    const s = this.keySize + 6, r = this.invKeySchedule, a = this.invSBox, o = this.invSubMix, l = o[0], c = o[1], d = o[2], u = o[3], h = this.uint8ArrayToUint32Array_(i);
    let f = h[0], g = h[1], m = h[2], p = h[3];
    const v = new Int32Array(e), b = new Int32Array(v.length);
    let _, E, T, A, S, w, C, L, I, K, F, D, U, G;
    const ee = this.networkToHostOrderSwap;
    for (; t < v.length; ) {
      for (I = ee(v[t]), K = ee(v[t + 1]), F = ee(v[t + 2]), D = ee(v[t + 3]), S = I ^ r[0], w = D ^ r[1], C = F ^ r[2], L = K ^ r[3], U = 4, G = 1; G < s; G++)
        _ = l[S >>> 24] ^ c[w >> 16 & 255] ^ d[C >> 8 & 255] ^ u[L & 255] ^ r[U], E = l[w >>> 24] ^ c[C >> 16 & 255] ^ d[L >> 8 & 255] ^ u[S & 255] ^ r[U + 1], T = l[C >>> 24] ^ c[L >> 16 & 255] ^ d[S >> 8 & 255] ^ u[w & 255] ^ r[U + 2], A = l[L >>> 24] ^ c[S >> 16 & 255] ^ d[w >> 8 & 255] ^ u[C & 255] ^ r[U + 3], S = _, w = E, C = T, L = A, U = U + 4;
      _ = a[S >>> 24] << 24 ^ a[w >> 16 & 255] << 16 ^ a[C >> 8 & 255] << 8 ^ a[L & 255] ^ r[U], E = a[w >>> 24] << 24 ^ a[C >> 16 & 255] << 16 ^ a[L >> 8 & 255] << 8 ^ a[S & 255] ^ r[U + 1], T = a[C >>> 24] << 24 ^ a[L >> 16 & 255] << 16 ^ a[S >> 8 & 255] << 8 ^ a[w & 255] ^ r[U + 2], A = a[L >>> 24] << 24 ^ a[S >> 16 & 255] << 16 ^ a[w >> 8 & 255] << 8 ^ a[C & 255] ^ r[U + 3], b[t] = ee(_ ^ f), b[t + 1] = ee(A ^ g), b[t + 2] = ee(T ^ m), b[t + 3] = ee(E ^ p), f = I, g = K, m = F, p = D, t = t + 4;
    }
    return b.buffer;
  }
}
const tg = 16;
class _n {
  constructor(e, {
    removePKCS7Padding: t = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const i = self.crypto;
        i && (this.subtle = i.subtle || i.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: e,
      remainderData: t
    } = this;
    if (!e || t)
      return this.reset(), null;
    const i = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? $0(i) : i;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, i) {
    return this.useSoftware ? new Promise((s, r) => {
      this.softwareDecrypt(new Uint8Array(e), t, i);
      const a = this.flush();
      a ? s(a.buffer) : r(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, i);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, i) {
    const {
      currentIV: s,
      currentResult: r,
      remainderData: a
    } = this;
    this.logOnce("JS AES decrypt"), a && (e = xt(a, e), this.remainderData = null);
    const o = this.getValidChunk(e);
    if (!o.length)
      return null;
    s && (i = s);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new eg()), l.expandKey(t);
    const c = r;
    return this.currentResult = l.decrypt(o.buffer, 0, i), this.currentIV = di(o, -16).buffer, c || null;
  }
  webCryptoDecrypt(e, t, i) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(e, t, i));
      this.key = t, this.fastAesKey = new J0(this.subtle, t);
    }
    return this.fastAesKey.expandKey().then((s) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new Z0(this.subtle, new Uint8Array(i)).decrypt(e.buffer, s)) : Promise.reject(new Error("web crypto not initialized"))).catch((s) => (k.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`), this.onWebCryptoError(e, t, i)));
  }
  onWebCryptoError(e, t, i) {
    this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, i);
    const s = this.flush();
    if (s)
      return s.buffer;
    throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const i = e.length - e.length % tg;
    return i !== e.length && (t = di(e, 0, i), this.remainderData = di(e, i)), t;
  }
  logOnce(e) {
    this.logEnabled && (k.log(`[decrypter]: ${e}`), this.logEnabled = !1);
  }
}
const ig = {
  toString: function(n) {
    let e = "";
    const t = n.length;
    for (let i = 0; i < t; i++)
      e += `[${n.start(i).toFixed(3)}-${n.end(i).toFixed(3)}]`;
    return e;
  }
}, V = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK: "WAITING_TRACK",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_INIT_PTS: "WAITING_INIT_PTS",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class Sn extends K0 {
  constructor(e, t, i, s, r) {
    super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = V.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.onvseeking = null, this.onvended = null, this.logPrefix = "", this.log = void 0, this.warn = void 0, this.playlistType = r, this.logPrefix = s, this.log = k.log.bind(k, `${s}:`), this.warn = k.warn.bind(k, `${s}:`), this.hls = e, this.fragmentLoader = new Q0(e.config), this.keyLoader = i, this.fragmentTracker = t, this.config = e.config, this.decrypter = new _n(e.config), e.on(x.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startLoad(e) {
  }
  stopLoad() {
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = V.STOPPED;
  }
  _streamEnded(e, t) {
    if (t.live || e.nextStart || !e.end || !this.media)
      return !1;
    const i = t.partList;
    if (i != null && i.length) {
      const r = i[i.length - 1];
      return Ke.isBuffered(this.media, r.start + r.duration / 2);
    }
    const s = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(s);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null) {
      var e;
      return (e = this.levelLastLoaded) == null ? void 0 : e.details;
    }
  }
  onMediaAttached(e, t) {
    const i = this.media = this.mediaBuffer = t.media;
    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), i.addEventListener("seeking", this.onvseeking), i.addEventListener("ended", this.onvended);
    const s = this.config;
    this.levels && s.autoStartLoad && this.state === V.STOPPED && this.startLoad(s.startPosition);
  }
  onMediaDetaching() {
    const e = this.media;
    e != null && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && this.onvseeking && this.onvended && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
  }
  onMediaSeeking() {
    const {
      config: e,
      fragCurrent: t,
      media: i,
      mediaBuffer: s,
      state: r
    } = this, a = i ? i.currentTime : 0, o = Ke.bufferInfo(s || i, a, e.maxBufferHole);
    if (this.log(`media seeking to ${ae(a) ? a.toFixed(3) : a}, state: ${r}`), this.state === V.ENDED)
      this.resetLoadingState();
    else if (t) {
      const l = e.maxFragLookUpTolerance, c = t.start - l, d = t.start + t.duration + l;
      if (!o.len || d < o.start || c > o.end) {
        const u = a > d;
        (a < c || u) && (u && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
      }
    }
    i && (this.fragmentTracker.removeFragmentsInRange(a, 1 / 0, this.playlistType, !0), this.lastCurrentTime = a), !this.loadedmetadata && !o.len && (this.nextLoadPosition = this.startPosition = a), this.tickImmediate();
  }
  onMediaEnded() {
    this.startPosition = this.lastCurrentTime = 0;
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset, this.initPTS = [];
  }
  onHandlerDestroying() {
    this.hls.off(x.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), super.onHandlerDestroying(), this.hls = null;
  }
  onHandlerDestroyed() {
    this.state = V.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, i) {
    this._loadFragForPlayback(e, t, i);
  }
  _loadFragForPlayback(e, t, i) {
    const s = (r) => {
      if (this.fragContextChanged(e)) {
        this.warn(`Fragment ${e.sn}${r.part ? " p: " + r.part.index : ""} of level ${e.level} was dropped during download.`), this.fragmentTracker.removeFragment(e);
        return;
      }
      e.stats.chunkCount++, this._handleFragmentLoadProgress(r);
    };
    this._doFragLoad(e, t, i, s).then((r) => {
      if (!r)
        return;
      const a = this.state;
      if (this.fragContextChanged(e)) {
        (a === V.FRAG_LOADING || !this.fragCurrent && a === V.PARSING) && (this.fragmentTracker.removeFragment(e), this.state = V.IDLE);
        return;
      }
      "payload" in r && (this.log(`Loaded fragment ${e.sn} of level ${e.level}`), this.hls.trigger(x.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r);
    }).catch((r) => {
      this.state === V.STOPPED || this.state === V.ERROR || (this.warn(`Frag error: ${r?.message || r}`), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: i
    } = this;
    if (i.getState(e) === at.APPENDING) {
      const r = e.type, a = this.getFwdBufferInfo(this.mediaBuffer, r), o = Math.max(e.duration, a ? a.len : this.config.maxBufferLength), l = this.backtrackFragment;
      ((l ? e.sn - l.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && i.removeFragment(e);
    } else ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? i.removeAllFragments() : i.hasParts(e.type) && (i.detectPartialFragments({
      frag: e,
      part: null,
      stats: e.stats,
      id: e.type
    }), i.getState(e) === at.PARTIAL && i.removeFragment(e));
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      const t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      });
    }
    e.fragments[0] || (e.deltaUpdateFailed = !0);
  }
  flushMainBuffer(e, t, i = null) {
    if (!(e - t))
      return;
    const s = {
      startOffset: e,
      endOffset: t,
      type: i
    };
    this.hls.trigger(x.BUFFER_FLUSHING, s);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then((i) => {
      if (!i || this.fragContextChanged(e) || !this.levels)
        throw new Error("init load aborted");
      return i;
    }).then((i) => {
      const {
        hls: s
      } = this, {
        payload: r
      } = i, a = e.decryptdata;
      if (r && r.byteLength > 0 && a != null && a.key && a.iv && a.method === "AES-128") {
        const o = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(r), a.key.buffer, a.iv.buffer).catch((l) => {
          throw s.trigger(x.ERROR, {
            type: xe.MEDIA_ERROR,
            details: N.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: e
          }), l;
        }).then((l) => {
          const c = self.performance.now();
          return s.trigger(x.FRAG_DECRYPTED, {
            frag: e,
            payload: l,
            stats: {
              tstart: o,
              tdecrypt: c
            }
          }), i.payload = l, this.completeInitSegmentLoad(i);
        });
      }
      return this.completeInitSegmentLoad(i);
    }).catch((i) => {
      this.state === V.STOPPED || this.state === V.ERROR || (this.warn(i), this.resetFragmentLoading(e));
    });
  }
  completeInitSegmentLoad(e) {
    const {
      levels: t
    } = this;
    if (!t)
      throw new Error("init load aborted, missing levels");
    const i = e.frag.stats;
    this.state = V.IDLE, e.frag.data = new Uint8Array(e.payload), i.parsing.start = i.buffering.start = self.performance.now(), i.parsing.end = i.buffering.end = self.performance.now(), this.tick();
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level;
  }
  fragBufferedComplete(e, t) {
    var i, s, r, a;
    const o = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.playlistType === pe.MAIN ? "level" : "track"} ${e.level} (frag:[${((i = e.startPTS) != null ? i : NaN).toFixed(3)}-${((s = e.endPTS) != null ? s : NaN).toFixed(3)}] > buffer:${o ? ig.toString(Ke.getBuffered(o)) : "(detached)"})`), e.sn !== "initSegment") {
      var l;
      if (e.type !== pe.SUBTITLE) {
        const d = e.elementaryStreams;
        if (!Object.keys(d).some((u) => !!d[u])) {
          this.state = V.IDLE;
          return;
        }
      }
      const c = (l = this.levels) == null ? void 0 : l[e.level];
      c != null && c.fragmentError && (this.log(`Resetting level fragment error count of ${c.fragmentError} on frag buffered`), c.fragmentError = 0);
    }
    this.state = V.IDLE, o && (!this.loadedmetadata && e.type == pe.MAIN && o.buffered.length && ((r = this.fragCurrent) == null ? void 0 : r.sn) === ((a = this.fragPrevious) == null ? void 0 : a.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick());
  }
  seekToStartPos() {
  }
  _handleFragmentLoadComplete(e) {
    const {
      transmuxer: t
    } = this;
    if (!t)
      return;
    const {
      frag: i,
      part: s,
      partsLoaded: r
    } = e, a = !r || r.length === 0 || r.some((l) => !l), o = new bn(i.level, i.sn, i.stats.chunkCount + 1, 0, s ? s.index : -1, !a);
    t.flush(o);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, i = null, s) {
    var r;
    const a = t?.details;
    if (!this.levels || !a)
      throw new Error(`frag load aborted, missing level${a ? "" : " detail"}s`);
    let o = null;
    if (e.encrypted && !((r = e.decryptdata) != null && r.key) ? (this.log(`Loading key for ${e.sn} of [${a.startSN}-${a.endSN}], ${this.logPrefix === "[stream-controller]" ? "level" : "track"} ${e.level}`), this.state = V.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((d) => {
      if (!this.fragContextChanged(d.frag))
        return this.hls.trigger(x.KEY_LOADED, d), this.state === V.KEY_LOADING && (this.state = V.IDLE), d;
    }), this.hls.trigger(x.KEY_LOADING, {
      frag: e
    }), this.fragCurrent === null && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))) : !e.encrypted && a.encryptedFragments.length && this.keyLoader.loadClear(e, a.encryptedFragments), i = Math.max(e.start, i || 0), this.config.lowLatencyMode && e.sn !== "initSegment") {
      const d = a.partList;
      if (d && s) {
        i > e.end && a.fragmentHint && (e = a.fragmentHint);
        const u = this.getNextPart(d, e, i);
        if (u > -1) {
          const h = d[u];
          this.log(`Loading part sn: ${e.sn} p: ${h.index} cc: ${e.cc} of playlist [${a.startSN}-${a.endSN}] parts [0-${u}-${d.length - 1}] ${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${e.level}, target: ${parseFloat(i.toFixed(3))}`), this.nextLoadPosition = h.start + h.duration, this.state = V.FRAG_LOADING;
          let f;
          return o ? f = o.then((g) => !g || this.fragContextChanged(g.frag) ? null : this.doFragPartsLoad(e, h, t, s)).catch((g) => this.handleFragLoadError(g)) : f = this.doFragPartsLoad(e, h, t, s).catch((g) => this.handleFragLoadError(g)), this.hls.trigger(x.FRAG_LOADING, {
            frag: e,
            part: h,
            targetBufferTime: i
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : f;
        } else if (!e.url || this.loadedEndOfParts(d, i))
          return Promise.resolve(null);
      }
    }
    this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${a ? "of [" + a.startSN + "-" + a.endSN + "] " : ""}${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${e.level}, target: ${parseFloat(i.toFixed(3))}`), ae(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = V.FRAG_LOADING;
    const l = this.config.progressive;
    let c;
    return l && o ? c = o.then((d) => !d || this.fragContextChanged(d?.frag) ? null : this.fragmentLoader.load(e, s)).catch((d) => this.handleFragLoadError(d)) : c = Promise.all([this.fragmentLoader.load(e, l ? s : void 0), o]).then(([d]) => (!l && d && s && s(d), d)).catch((d) => this.handleFragLoadError(d)), this.hls.trigger(x.FRAG_LOADING, {
      frag: e,
      targetBufferTime: i
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : c;
  }
  doFragPartsLoad(e, t, i, s) {
    return new Promise((r, a) => {
      var o;
      const l = [], c = (o = i.details) == null ? void 0 : o.partList, d = (u) => {
        this.fragmentLoader.loadPart(e, u, s).then((h) => {
          l[u.index] = h;
          const f = h.part;
          this.hls.trigger(x.FRAG_LOADED, h);
          const g = Oa(i, e.sn, u.index + 1) || Dl(c, e.sn, u.index + 1);
          if (g)
            d(g);
          else
            return r({
              frag: e,
              part: f,
              partsLoaded: l
            });
        }).catch(a);
      };
      d(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      e.data && t.details === N.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(x.ERROR, t);
    } else
      this.hls.trigger(x.ERROR, {
        type: xe.OTHER_ERROR,
        details: N.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== V.PARSING) {
      !this.fragCurrent && this.state !== V.STOPPED && this.state !== V.ERROR && (this.state = V.IDLE);
      return;
    }
    const {
      frag: i,
      part: s,
      level: r
    } = t, a = self.performance.now();
    i.stats.parsing.end = a, s && (s.stats.parsing.end = a), this.updateLevelTiming(i, s, r, e.partial);
  }
  getCurrentContext(e) {
    const {
      levels: t,
      fragCurrent: i
    } = this, {
      level: s,
      sn: r,
      part: a
    } = e;
    if (!(t != null && t[s]))
      return this.warn(`Levels object was unset while buffering fragment ${r} of level ${s}. The current chunk will not be buffered.`), null;
    const o = t[s], l = a > -1 ? Oa(o, r, a) : null, c = l ? l.fragment : S0(o, r, i);
    return c ? (i && i !== c && (c.stats = i.stats), {
      frag: c,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, i, s, r) {
    var a;
    if (!e || this.state !== V.PARSING)
      return;
    const {
      data1: o,
      data2: l
    } = e;
    let c = o;
    if (o && l && (c = xt(o, l)), !((a = c) != null && a.length))
      return;
    const d = {
      type: e.type,
      frag: t,
      part: i,
      chunkMeta: s,
      parent: t.type,
      data: c
    };
    if (this.hls.trigger(x.BUFFER_APPENDING, d), e.dropped && e.independent && !i) {
      if (r)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!Ke.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const i = t.currentTime, s = Ke.bufferInfo(t, i, 0), r = e.duration, a = Math.min(this.config.maxFragLookUpTolerance * 2, r * 0.25), o = Math.max(Math.min(e.start - a, s.end - a), i + a);
    e.start - o > a && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    const i = this.getLoadPosition();
    return ae(i) ? this.getFwdBufferInfoAtPos(e, i, t) : null;
  }
  getFwdBufferInfoAtPos(e, t, i) {
    const {
      config: {
        maxBufferHole: s
      }
    } = this, r = Ke.bufferInfo(e, t, s);
    if (r.len === 0 && r.nextStart !== void 0) {
      const a = this.fragmentTracker.getBufferedFrag(t, i);
      if (a && r.nextStart < a.end)
        return Ke.bufferInfo(e, t, Math.max(r.nextStart, s));
    }
    return r;
  }
  getMaxBufferLength(e) {
    const {
      config: t
    } = this;
    let i;
    return e ? i = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : i = t.maxBufferLength, Math.min(i, t.maxMaxBufferLength);
  }
  reduceMaxBufferLength(e, t) {
    const i = this.config, s = Math.max(Math.min(e - t, i.maxBufferLength), t), r = Math.max(e - t * 3, i.maxMaxBufferLength / 2, s);
    return r >= s ? (i.maxMaxBufferLength = r, this.warn(`Reduce max buffer length to ${r}s`), !0) : !1;
  }
  getAppendedFrag(e, t = pe.MAIN) {
    const i = this.fragmentTracker.getAppendedFrag(e, pe.MAIN);
    return i && "fragment" in i ? i.fragment : i;
  }
  getNextFragment(e, t) {
    const i = t.fragments, s = i.length;
    if (!s)
      return null;
    const {
      config: r
    } = this, a = i[0].start;
    let o;
    if (t.live) {
      const l = r.initialLiveManifestSize;
      if (s < l)
        return this.warn(`Not enough fragments to start playback (have: ${s}, need: ${l})`), null;
      (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < a) && (o = this.getInitialLiveFragment(t, i), this.startPosition = this.nextLoadPosition = o ? this.hls.liveSyncPosition || o.start : e);
    } else e <= a && (o = i[0]);
    if (!o) {
      const l = r.lowLatencyMode ? t.partEnd : t.fragmentEnd;
      o = this.getFragmentAtPosition(e, l, t);
    }
    return this.mapToInitFragWhenRequired(o);
  }
  isLoopLoading(e, t) {
    const i = this.fragmentTracker.getState(e);
    return (i === at.OK || i === at.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, i, s, r) {
    const a = e.gap, o = this.getNextFragment(this.nextLoadPosition, t);
    if (o === null)
      return o;
    if (e = o, a && e && !e.gap && i.nextStart) {
      const l = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, i.nextStart, s);
      if (l !== null && i.len + l.len >= r)
        return this.log(`buffer full after gaps in "${s}" playlist starting at sn: ${e.sn}`), null;
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !(e != null && e.initSegment.data) && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, i) {
    let s = -1, r = !1, a = !0;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o];
      if (a = a && !c.independent, s > -1 && i < c.start)
        break;
      const d = c.loaded;
      d ? s = -1 : (r || c.independent || a) && c.fragment === t && (s = o), r = d;
    }
    return s;
  }
  loadedEndOfParts(e, t) {
    const i = e[e.length - 1];
    return i && t > i.start && i.loaded;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(e, t) {
    const i = this.fragPrevious;
    let s = null;
    if (i) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${i.programDateTime}`), s = L0(t, i.endProgramDateTime, this.config.maxFragLookUpTolerance)), !s) {
        const r = i.sn + 1;
        if (r >= e.startSN && r <= e.endSN) {
          const a = t[r - e.startSN];
          i.cc === a.cc && (s = a, this.log(`Live playlist, switching playlist, load frag with next SN: ${s.sn}`));
        }
        s || (s = I0(t, i.cc), s && this.log(`Live playlist, switching playlist, load frag with same CC: ${s.sn}`));
      }
    } else {
      const r = this.hls.liveSyncPosition;
      r !== null && (s = this.getFragmentAtPosition(r, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    }
    return s;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(e, t, i) {
    const {
      config: s
    } = this;
    let {
      fragPrevious: r
    } = this, {
      fragments: a,
      endSN: o
    } = i;
    const {
      fragmentHint: l
    } = i, {
      maxFragLookUpTolerance: c
    } = s, d = i.partList, u = !!(s.lowLatencyMode && d != null && d.length && l);
    u && l && !this.bitrateTest && (a = a.concat(l), o = l.sn);
    let h;
    if (e < t) {
      const f = e > t - c ? 0 : c;
      h = Vs(r, a, e, f);
    } else
      h = a[a.length - 1];
    if (h) {
      const f = h.sn - i.startSN, g = this.fragmentTracker.getState(h);
      if ((g === at.OK || g === at.PARTIAL && h.gap) && (r = h), r && h.sn === r.sn && (!u || d[0].fragment.sn > h.sn) && r && h.level === r.level) {
        const p = a[f + 1];
        h.sn < o && this.fragmentTracker.getState(p) !== at.OK ? h = p : h = null;
      }
    }
    return h;
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: i
    } = this;
    if (!i)
      return;
    const s = this.hls.liveSyncPosition, r = i.currentTime, a = e.fragments[0].start, o = e.edge, l = r >= a - t.maxFragLookUpTolerance && r <= o;
    if (s !== null && i.duration > s && (r < s || !l)) {
      const c = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      (!l && i.readyState < 4 || r < o - c) && (this.loadedmetadata || (this.nextLoadPosition = s), i.readyState && (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${s.toFixed(3)}`), i.currentTime = s));
    }
  }
  alignPlaylists(e, t, i) {
    const s = e.fragments.length;
    if (!s)
      return this.warn("No fragments in live playlist"), 0;
    const r = e.fragments[0].start, a = !t, o = e.alignedSliding && ae(r);
    if (a || !o && !r) {
      const {
        fragPrevious: l
      } = this;
      q0(l, i, e);
      const c = e.fragments[0].start;
      return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} prev-sn: ${l ? l.sn : "na"} fragments: ${s}`), c;
    }
    return r;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let i = this.startPosition;
    if (i < t && (i = -1), i === -1 || this.lastCurrentTime === -1) {
      const s = this.startTimeOffset !== null, r = s ? this.startTimeOffset : e.startTimeOffset;
      r !== null && ae(r) ? (i = t + r, r < 0 && (i += e.totalduration), i = Math.min(Math.max(t, i), t + e.totalduration), this.log(`Start time offset ${r} found in ${s ? "multivariant" : "media"} playlist, adjust startPosition to ${i}`), this.startPosition = i) : e.live ? i = this.hls.liveSyncPosition || t : this.startPosition = i = 0, this.lastCurrentTime = i;
    }
    this.nextLoadPosition = i;
  }
  getLoadPosition() {
    const {
      media: e
    } = this;
    let t = 0;
    return this.loadedmetadata && e ? t = e.currentTime : this.nextLoadPosition && (t = this.nextLoadPosition), t;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.sn !== "initSegment" && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== V.FRAG_LOADING_WAITING_RETRY) && (this.state = V.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    if (t.chunkMeta && !t.frag) {
      const d = this.getCurrentContext(t.chunkMeta);
      d && (t.frag = d.frag);
    }
    const i = t.frag;
    if (!i || i.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(i)) {
      var s;
      this.warn(`Frag load error must match current frag to retry ${i.url} > ${(s = this.fragCurrent) == null ? void 0 : s.url}`);
      return;
    }
    const r = t.details === N.FRAG_GAP;
    r && this.fragmentTracker.fragBuffered(i, !0);
    const a = t.errorAction, {
      action: o,
      retryCount: l = 0,
      retryConfig: c
    } = a || {};
    if (a && o === lt.RetryRequest && c) {
      this.resetStartWhenNotLoaded(this.levelLastLoaded);
      const d = En(c, l);
      this.warn(`Fragment ${i.sn} of ${e} ${i.level} errored with ${t.details}, retrying loading ${l + 1}/${c.maxNumRetry} in ${d}ms`), a.resolved = !0, this.retryDate = self.performance.now() + d, this.state = V.FRAG_LOADING_WAITING_RETRY;
    } else if (c && a)
      if (this.resetFragmentErrors(e), l < c.maxNumRetry)
        !r && o !== lt.RemoveAlternatePermanently && (a.resolved = !0);
      else {
        k.warn(`${t.details} reached or exceeded max retry (${l})`);
        return;
      }
    else a?.action === lt.SendAlternateToPenaltyBox ? this.state = V.WAITING_LEVEL : this.state = V.ERROR;
    this.tickImmediate();
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === V.PARSING || this.state === V.PARSED) {
      const t = e.frag, i = e.parent, s = this.getFwdBufferInfo(this.mediaBuffer, i), r = s && s.len > 0.5;
      r && this.reduceMaxBufferLength(s.len, t?.duration || 10);
      const a = !r;
      return a && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${i} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), a;
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === pe.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== V.STOPPED && (this.state = V.IDLE);
  }
  afterBufferFlushed(e, t, i) {
    if (!e)
      return;
    const s = Ke.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, s, i), this.state === V.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = V.IDLE;
  }
  resetStartWhenNotLoaded(e) {
    if (!this.loadedmetadata) {
      this.startFragRequested = !1;
      const t = e ? e.details : null;
      t != null && t.live ? (this.startPosition = -1, this.setStartPosition(t, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(e, t, i, s) {
    var r;
    const a = i.details;
    if (!a) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(e.elementaryStreams).reduce((l, c) => {
      const d = e.elementaryStreams[c];
      if (d) {
        const u = d.endPTS - d.startPTS;
        if (u <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${u})`), l || !1;
        const h = s ? 0 : Il(a, e, d.startPTS, d.endPTS, d.startDTS, d.endDTS);
        return this.hls.trigger(x.LEVEL_PTS_UPDATED, {
          details: a,
          level: i,
          drift: h,
          type: c,
          frag: e,
          start: d.startPTS,
          end: d.endPTS
        }), !0;
      }
      return l;
    }, !1) && ((r = this.transmuxer) == null ? void 0 : r.error) === null) {
      const l = new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);
      if (i.fragmentError === 0 && (i.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0)), this.warn(l.message), this.hls.trigger(x.ERROR, {
        type: xe.MEDIA_ERROR,
        details: N.FRAG_PARSING_ERROR,
        fatal: !1,
        error: l,
        frag: e,
        reason: `Found no media in msn ${e.sn} of level "${i.url}"`
      }), !this.hls)
        return;
      this.resetTransmuxer();
    }
    this.state = V.PARSED, this.hls.trigger(x.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  resetTransmuxer() {
    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
class Fl {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length;
  }
  flush() {
    const {
      chunks: e,
      dataLength: t
    } = this;
    let i;
    if (e.length)
      e.length === 1 ? i = e[0] : i = sg(e, t);
    else return new Uint8Array(0);
    return this.reset(), i;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function sg(n, e) {
  const t = new Uint8Array(e);
  let i = 0;
  for (let s = 0; s < n.length; s++) {
    const r = n[s];
    t.set(r, i), i += r.length;
  }
  return t;
}
function rg() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function ng() {
  const n = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), e = self.URL.createObjectURL(n);
  return {
    worker: new self.Worker(e),
    objectURL: e
  };
}
function ag(n) {
  const e = new self.URL(n, self.location.href).href;
  return {
    worker: new self.Worker(e),
    scriptURL: e
  };
}
function Ot(n = "", e = 9e4) {
  return {
    type: n,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
class An {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(e, t, i, s) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(e, t) {
    return !1;
  }
  appendFrame(e, t, i) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(e, t) {
    this.cachedData && (e = xt(this.cachedData, e), this.cachedData = null);
    let i = zi(e, 0), s = i ? i.length : 0, r;
    const a = this._audioTrack, o = this._id3Track, l = i ? xn(i) : void 0, c = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && ae(l)) && (this.basePTS = og(l, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), i && i.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: i,
      type: _t.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); s < c; ) {
      if (this.canParse(e, s)) {
        const d = this.appendFrame(a, e, s);
        d ? (this.frameIndex++, this.lastPTS = d.sample.pts, s += d.length, r = s) : s = c;
      } else If(e, s) ? (i = zi(e, s), o.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: i,
        type: _t.audioId3,
        duration: Number.POSITIVE_INFINITY
      }), s += i.length, r = s) : s++;
      if (s === c && r !== c) {
        const d = di(e, r);
        this.cachedData ? this.cachedData = xt(this.cachedData, d) : this.cachedData = d;
      }
    }
    return {
      audioTrack: a,
      videoTrack: Ot(),
      id3Track: o,
      textTrack: Ot()
    };
  }
  demuxSampleAes(e, t, i) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: Ot(),
      id3Track: this._id3Track,
      textTrack: Ot()
    };
  }
  destroy() {
  }
}
const og = (n, e, t) => {
  if (ae(n))
    return n * 90;
  const i = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + i;
};
function lg(n, e, t, i) {
  let s, r, a, o;
  const l = navigator.userAgent.toLowerCase(), c = i, d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  s = ((e[t + 2] & 192) >>> 6) + 1;
  const u = (e[t + 2] & 60) >>> 2;
  if (u > d.length - 1) {
    const h = new Error(`invalid ADTS sampling index:${u}`);
    n.emit(x.ERROR, x.ERROR, {
      type: xe.MEDIA_ERROR,
      details: N.FRAG_PARSING_ERROR,
      fatal: !0,
      error: h,
      reason: h.message
    });
    return;
  }
  return a = (e[t + 2] & 1) << 2, a |= (e[t + 3] & 192) >>> 6, k.log(`manifest codec:${i}, ADTS type:${s}, samplingIndex:${u}`), /firefox/i.test(l) ? u >= 6 ? (s = 5, o = new Array(4), r = u - 3) : (s = 2, o = new Array(2), r = u) : l.indexOf("android") !== -1 ? (s = 2, o = new Array(2), r = u) : (s = 5, o = new Array(4), i && (i.indexOf("mp4a.40.29") !== -1 || i.indexOf("mp4a.40.5") !== -1) || !i && u >= 6 ? r = u - 3 : ((i && i.indexOf("mp4a.40.2") !== -1 && (u >= 6 && a === 1 || /vivaldi/i.test(l)) || !i && a === 1) && (s = 2, o = new Array(2)), r = u)), o[0] = s << 3, o[0] |= (u & 14) >> 1, o[1] |= (u & 1) << 7, o[1] |= a << 3, s === 5 && (o[1] |= (r & 14) >> 1, o[2] = (r & 1) << 7, o[2] |= 8, o[3] = 0), {
    config: o,
    samplerate: d[u],
    channelCount: a,
    codec: "mp4a.40." + s,
    manifestCodec: c
  };
}
function Nl(n, e) {
  return n[e] === 255 && (n[e + 1] & 246) === 240;
}
function Bl(n, e) {
  return n[e + 1] & 1 ? 7 : 9;
}
function Ln(n, e) {
  return (n[e + 3] & 3) << 11 | n[e + 4] << 3 | (n[e + 5] & 224) >>> 5;
}
function cg(n, e) {
  return e + 5 < n.length;
}
function Ws(n, e) {
  return e + 1 < n.length && Nl(n, e);
}
function dg(n, e) {
  return cg(n, e) && Nl(n, e) && Ln(n, e) <= n.length - e;
}
function ug(n, e) {
  if (Ws(n, e)) {
    const t = Bl(n, e);
    if (e + t >= n.length)
      return !1;
    const i = Ln(n, e);
    if (i <= t)
      return !1;
    const s = e + i;
    return s === n.length || Ws(n, s);
  }
  return !1;
}
function Ul(n, e, t, i, s) {
  if (!n.samplerate) {
    const r = lg(e, t, i, s);
    if (!r)
      return;
    n.config = r.config, n.samplerate = r.samplerate, n.channelCount = r.channelCount, n.codec = r.codec, n.manifestCodec = r.manifestCodec, k.log(`parsed codec:${n.codec}, rate:${r.samplerate}, channels:${r.channelCount}`);
  }
}
function Gl(n) {
  return 1024 * 9e4 / n;
}
function hg(n, e) {
  const t = Bl(n, e);
  if (e + t <= n.length) {
    const i = Ln(n, e) - t;
    if (i > 0)
      return {
        headerLength: t,
        frameLength: i
      };
  }
}
function Hl(n, e, t, i, s) {
  const r = Gl(n.samplerate), a = i + s * r, o = hg(e, t);
  let l;
  if (o) {
    const {
      frameLength: u,
      headerLength: h
    } = o, f = h + u, g = Math.max(0, t + f - e.length);
    g ? (l = new Uint8Array(f - h), l.set(e.subarray(t + h, e.length), 0)) : l = e.subarray(t + h, t + f);
    const m = {
      unit: l,
      pts: a
    };
    return g || n.samples.push(m), {
      sample: m,
      length: f,
      missing: g
    };
  }
  const c = e.length - t;
  return l = new Uint8Array(c), l.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: l,
      pts: a
    },
    length: c,
    missing: -1
  };
}
let fs = null;
const fg = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], gg = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], mg = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], pg = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function Vl(n, e, t, i, s) {
  if (t + 24 > e.length)
    return;
  const r = Kl(e, t);
  if (r && t + r.frameLength <= e.length) {
    const a = r.samplesPerFrame * 9e4 / r.sampleRate, o = i + s * a, l = {
      unit: e.subarray(t, t + r.frameLength),
      pts: o,
      dts: o
    };
    return n.config = [], n.channelCount = r.channelCount, n.samplerate = r.sampleRate, n.samples.push(l), {
      sample: l,
      length: r.frameLength,
      missing: 0
    };
  }
}
function Kl(n, e) {
  const t = n[e + 1] >> 3 & 3, i = n[e + 1] >> 1 & 3, s = n[e + 2] >> 4 & 15, r = n[e + 2] >> 2 & 3;
  if (t !== 1 && s !== 0 && s !== 15 && r !== 3) {
    const a = n[e + 2] >> 1 & 1, o = n[e + 3] >> 6, l = t === 3 ? 3 - i : i === 3 ? 3 : 4, c = fg[l * 14 + s - 1] * 1e3, u = gg[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + r], h = o === 3 ? 1 : 2, f = mg[t][i], g = pg[i], m = f * 8 * g, p = Math.floor(f * c / u + a) * g;
    if (fs === null) {
      const _ = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      fs = _ ? parseInt(_[1]) : 0;
    }
    return fs && fs <= 87 && i === 2 && c >= 224e3 && o === 0 && (n[e + 3] = n[e + 3] | 128), {
      sampleRate: u,
      channelCount: h,
      frameLength: p,
      samplesPerFrame: m
    };
  }
}
function wn(n, e) {
  return n[e] === 255 && (n[e + 1] & 224) === 224 && (n[e + 1] & 6) !== 0;
}
function Wl(n, e) {
  return e + 1 < n.length && wn(n, e);
}
function vg(n, e) {
  return wn(n, e) && 4 <= n.length - e;
}
function jl(n, e) {
  if (e + 1 < n.length && wn(n, e)) {
    const i = Kl(n, e);
    let s = 4;
    i != null && i.frameLength && (s = i.frameLength);
    const r = e + s;
    return r === n.length || Wl(n, r);
  }
  return !1;
}
class yg extends An {
  constructor(e, t) {
    super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t;
  }
  resetInitSegment(e, t, i, s) {
    super.resetInitSegment(e, t, i, s), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: t,
      duration: s,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(e) {
    if (!e)
      return !1;
    const t = zi(e, 0);
    let i = t?.length || 0;
    if (jl(e, i))
      return !1;
    for (let s = e.length; i < s; i++)
      if (ug(e, i))
        return k.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return dg(e, t);
  }
  appendFrame(e, t, i) {
    Ul(e, this.observer, t, i, e.manifestCodec);
    const s = Hl(e, t, i, this.basePTS, this.frameIndex);
    if (s && s.missing === 0)
      return s;
  }
}
const xg = /\/emsg[-/]ID3/i;
class Eg {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, i, s) {
    const r = this.videoTrack = Ot("video", 1), a = this.audioTrack = Ot("audio", 1), o = this.txtTrack = Ot("text", 1);
    if (this.id3Track = Ot("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const l = Tl(e);
    if (l.video) {
      const {
        id: c,
        timescale: d,
        codec: u
      } = l.video;
      r.id = c, r.timescale = o.timescale = d, r.codec = u;
    }
    if (l.audio) {
      const {
        id: c,
        timescale: d,
        codec: u
      } = l.audio;
      a.id = c, a.timescale = d, a.codec = u;
    }
    o.id = yl.text, r.sampleDuration = 0, r.duration = a.duration = s;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return Bf(e);
  }
  demux(e, t) {
    this.timeOffset = t;
    let i = e;
    const s = this.videoTrack, r = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (i = xt(this.remainderData, e));
      const o = Yf(i);
      this.remainderData = o.remainder, s.samples = o.valid || new Uint8Array();
    } else
      s.samples = i;
    const a = this.extractID3Track(s, t);
    return r.samples = ma(t, s), {
      videoTrack: s,
      audioTrack: this.audioTrack,
      id3Track: a,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const e = this.timeOffset, t = this.videoTrack, i = this.txtTrack;
    t.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const s = this.extractID3Track(t, this.timeOffset);
    return i.samples = ma(e, t), {
      videoTrack: t,
      audioTrack: Ot(),
      id3Track: s,
      textTrack: Ot()
    };
  }
  extractID3Track(e, t) {
    const i = this.id3Track;
    if (e.samples.length) {
      const s = Te(e.samples, ["emsg"]);
      s && s.forEach((r) => {
        const a = Xf(r);
        if (xg.test(a.schemeIdUri)) {
          const o = ae(a.presentationTime) ? a.presentationTime / a.timeScale : t + a.presentationTimeDelta / a.timeScale;
          let l = a.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : a.eventDuration / a.timeScale;
          l <= 1e-3 && (l = Number.POSITIVE_INFINITY);
          const c = a.payload;
          i.samples.push({
            data: c,
            len: c.byteLength,
            dts: o,
            pts: o,
            type: _t.emsg,
            duration: l
          });
        }
      });
    }
    return i;
  }
  demuxSampleAes(e, t, i) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
  }
}
const Yl = (n, e) => {
  let t = 0, i = 5;
  e += i;
  const s = new Uint32Array(1), r = new Uint32Array(1), a = new Uint8Array(1);
  for (; i > 0; ) {
    a[0] = n[e];
    const o = Math.min(i, 8), l = 8 - o;
    r[0] = 4278190080 >>> 24 + l << l, s[0] = (a[0] & r[0]) >> l, t = t ? t << o | s[0] : s[0], e += 1, i -= o;
  }
  return t;
};
class Tg extends An {
  constructor(e) {
    super(), this.observer = void 0, this.observer = e;
  }
  resetInitSegment(e, t, i, s) {
    super.resetInitSegment(e, t, i, s), this._audioTrack = {
      container: "audio/ac-3",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "ac3",
      samples: [],
      manifestCodec: t,
      duration: s,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  canParse(e, t) {
    return t + 64 < e.length;
  }
  appendFrame(e, t, i) {
    const s = zl(e, t, i, this.basePTS, this.frameIndex);
    if (s !== -1)
      return {
        sample: e.samples[e.samples.length - 1],
        length: s,
        missing: 0
      };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = zi(e, 0);
    if (!t)
      return !1;
    const i = t.length;
    return e[i] === 11 && e[i + 1] === 119 && xn(t) !== void 0 && // check the bsid to confirm ac-3
    Yl(e, i) < 16;
  }
}
function zl(n, e, t, i, s) {
  if (t + 8 > e.length || e[t] !== 11 || e[t + 1] !== 119)
    return -1;
  const r = e[t + 4] >> 6;
  if (r >= 3)
    return -1;
  const o = [48e3, 44100, 32e3][r], l = e[t + 4] & 63, d = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][l * 3 + r] * 2;
  if (t + d > e.length)
    return -1;
  const u = e[t + 6] >> 5;
  let h = 0;
  u === 2 ? h += 2 : (u & 1 && u !== 1 && (h += 2), u & 4 && (h += 2));
  const f = (e[t + 6] << 8 | e[t + 7]) >> 12 - h & 1, m = [2, 1, 2, 3, 3, 4, 4, 5][u] + f, p = e[t + 5] >> 3, v = e[t + 5] & 7, b = new Uint8Array([r << 6 | p << 1 | v >> 2, (v & 3) << 6 | u << 3 | f << 2 | l >> 4, l << 4 & 224]), _ = 1536 / o * 9e4, E = i + s * _, T = e.subarray(t, t + d);
  return n.config = b, n.channelCount = m, n.samplerate = o, n.samples.push({
    unit: T,
    pts: E
  }), d;
}
class bg {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(e, t, i, s) {
    return {
      key: e,
      frame: !1,
      pts: t,
      dts: i,
      units: [],
      debug: s,
      length: 0
    };
  }
  getLastNalUnit(e) {
    var t;
    let i = this.VideoSample, s;
    if ((!i || i.units.length === 0) && (i = e[e.length - 1]), (t = i) != null && t.units) {
      const r = i.units;
      s = r[r.length - 1];
    }
    return s;
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (e.pts === void 0) {
        const i = t.samples, s = i.length;
        if (s) {
          const r = i[s - 1];
          e.pts = r.pts, e.dts = r.dts;
        } else {
          t.dropped++;
          return;
        }
      }
      t.samples.push(e);
    }
    e.debug.length && k.log(e.pts + "/" + e.dts + ":" + e.debug);
  }
}
class Ka {
  constructor(e) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const e = this.data, t = this.bytesAvailable, i = e.byteLength - t, s = new Uint8Array(4), r = Math.min(4, t);
    if (r === 0)
      throw new Error("no bytes available");
    s.set(e.subarray(i, i + r)), this.word = new DataView(s.buffer).getUint32(0), this.bitsAvailable = r * 8, this.bytesAvailable -= r;
  }
  // (count:int):void
  skipBits(e) {
    let t;
    e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
  }
  // (size:int):uint
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const i = this.word >>> 32 - t;
    if (e > 32 && k.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
      this.word <<= t;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return t = e - t, t > 0 && this.bitsAvailable ? i << t | this.readBits(t) : i;
  }
  // ():uint
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if ((this.word & 2147483648 >>> e) !== 0)
        return this.word <<= e, this.bitsAvailable -= e, e;
    return this.loadWord(), e + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  // ():int
  readEG() {
    const e = this.readUEG();
    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
  /**
   * Advance the ExpGolomb decoder past a scaling list. The scaling
   * list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e) {
    let t = 8, i = 8, s;
    for (let r = 0; r < e; r++)
      i !== 0 && (s = this.readEG(), i = (t + s + 256) % 256), t = i === 0 ? t : i;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS() {
    let e = 0, t = 0, i = 0, s = 0, r, a, o;
    const l = this.readUByte.bind(this), c = this.readBits.bind(this), d = this.readUEG.bind(this), u = this.readBoolean.bind(this), h = this.skipBits.bind(this), f = this.skipEG.bind(this), g = this.skipUEG.bind(this), m = this.skipScalingList.bind(this);
    l();
    const p = l();
    if (c(5), h(3), l(), g(), p === 100 || p === 110 || p === 122 || p === 244 || p === 44 || p === 83 || p === 86 || p === 118 || p === 128) {
      const A = d();
      if (A === 3 && h(1), g(), g(), h(1), u())
        for (a = A !== 3 ? 8 : 12, o = 0; o < a; o++)
          u() && (o < 6 ? m(16) : m(64));
    }
    g();
    const v = d();
    if (v === 0)
      d();
    else if (v === 1)
      for (h(1), f(), f(), r = d(), o = 0; o < r; o++)
        f();
    g(), h(1);
    const b = d(), _ = d(), E = c(1);
    E === 0 && h(1), h(1), u() && (e = d(), t = d(), i = d(), s = d());
    let T = [1, 1];
    if (u() && u())
      switch (l()) {
        case 1:
          T = [1, 1];
          break;
        case 2:
          T = [12, 11];
          break;
        case 3:
          T = [10, 11];
          break;
        case 4:
          T = [16, 11];
          break;
        case 5:
          T = [40, 33];
          break;
        case 6:
          T = [24, 11];
          break;
        case 7:
          T = [20, 11];
          break;
        case 8:
          T = [32, 11];
          break;
        case 9:
          T = [80, 33];
          break;
        case 10:
          T = [18, 11];
          break;
        case 11:
          T = [15, 11];
          break;
        case 12:
          T = [64, 33];
          break;
        case 13:
          T = [160, 99];
          break;
        case 14:
          T = [4, 3];
          break;
        case 15:
          T = [3, 2];
          break;
        case 16:
          T = [2, 1];
          break;
        case 255: {
          T = [l() << 8 | l(), l() << 8 | l()];
          break;
        }
      }
    return {
      width: Math.ceil((b + 1) * 16 - e * 2 - t * 2),
      height: (2 - E) * (_ + 1) * 16 - (E ? 2 : 4) * (i + s),
      pixelRatio: T
    };
  }
  readSliceType() {
    return this.readUByte(), this.readUEG(), this.readUEG();
  }
}
class _g extends bg {
  parseAVCPES(e, t, i, s, r) {
    const a = this.parseAVCNALu(e, i.data);
    let o = this.VideoSample, l, c = !1;
    i.data = null, o && a.length && !e.audFound && (this.pushAccessUnit(o, e), o = this.VideoSample = this.createVideoSample(!1, i.pts, i.dts, "")), a.forEach((d) => {
      var u;
      switch (d.type) {
        // NDR
        case 1: {
          let m = !1;
          l = !0;
          const p = d.data;
          if (c && p.length > 4) {
            const v = new Ka(p).readSliceType();
            (v === 2 || v === 4 || v === 7 || v === 9) && (m = !0);
          }
          if (m) {
            var h;
            (h = o) != null && h.frame && !o.key && (this.pushAccessUnit(o, e), o = this.VideoSample = null);
          }
          o || (o = this.VideoSample = this.createVideoSample(!0, i.pts, i.dts, "")), o.frame = !0, o.key = m;
          break;
        }
        case 5:
          l = !0, (u = o) != null && u.frame && !o.key && (this.pushAccessUnit(o, e), o = this.VideoSample = null), o || (o = this.VideoSample = this.createVideoSample(!0, i.pts, i.dts, "")), o.key = !0, o.frame = !0;
          break;
        // SEI
        case 6: {
          l = !0, _l(d.data, 1, i.pts, t.samples);
          break;
        }
        case 7: {
          var f, g;
          l = !0, c = !0;
          const m = d.data, v = new Ka(m).readSPS();
          if (!e.sps || e.width !== v.width || e.height !== v.height || ((f = e.pixelRatio) == null ? void 0 : f[0]) !== v.pixelRatio[0] || ((g = e.pixelRatio) == null ? void 0 : g[1]) !== v.pixelRatio[1]) {
            e.width = v.width, e.height = v.height, e.pixelRatio = v.pixelRatio, e.sps = [m], e.duration = r;
            const b = m.subarray(1, 4);
            let _ = "avc1.";
            for (let E = 0; E < 3; E++) {
              let T = b[E].toString(16);
              T.length < 2 && (T = "0" + T), _ += T;
            }
            e.codec = _;
          }
          break;
        }
        // PPS
        case 8:
          l = !0, e.pps = [d.data];
          break;
        // AUD
        case 9:
          l = !0, e.audFound = !0, o && this.pushAccessUnit(o, e), o = this.VideoSample = this.createVideoSample(!1, i.pts, i.dts, "");
          break;
        // Filler Data
        case 12:
          l = !0;
          break;
        default:
          l = !1, o && (o.debug += "unknown NAL " + d.type + " ");
          break;
      }
      o && l && o.units.push(d);
    }), s && o && (this.pushAccessUnit(o, e), this.VideoSample = null);
  }
  parseAVCNALu(e, t) {
    const i = t.byteLength;
    let s = e.naluState || 0;
    const r = s, a = [];
    let o = 0, l, c, d, u = -1, h = 0;
    for (s === -1 && (u = 0, h = t[0] & 31, s = 0, o = 1); o < i; ) {
      if (l = t[o++], !s) {
        s = l ? 0 : 1;
        continue;
      }
      if (s === 1) {
        s = l ? 0 : 2;
        continue;
      }
      if (!l)
        s = 3;
      else if (l === 1) {
        if (c = o - s - 1, u >= 0) {
          const f = {
            data: t.subarray(u, c),
            type: h
          };
          a.push(f);
        } else {
          const f = this.getLastNalUnit(e.samples);
          f && (r && o <= 4 - r && f.state && (f.data = f.data.subarray(0, f.data.byteLength - r)), c > 0 && (f.data = xt(f.data, t.subarray(0, c)), f.state = 0));
        }
        o < i ? (d = t[o] & 31, u = o, h = d, s = 0) : s = -1;
      } else
        s = 0;
    }
    if (u >= 0 && s >= 0) {
      const f = {
        data: t.subarray(u, i),
        type: h,
        state: s
      };
      a.push(f);
    }
    if (a.length === 0) {
      const f = this.getLastNalUnit(e.samples);
      f && (f.data = xt(f.data, t));
    }
    return e.naluState = s, a;
  }
}
class Sg {
  constructor(e, t, i) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = i, this.decrypter = new _n(t, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, i) {
    const s = e[t].unit;
    if (s.length <= 16)
      return;
    const r = s.subarray(16, s.length - s.length % 16), a = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
    this.decryptBuffer(a).then((o) => {
      const l = new Uint8Array(o);
      s.set(l, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, i);
    });
  }
  decryptAacSamples(e, t, i) {
    for (; ; t++) {
      if (t >= e.length) {
        i();
        return;
      }
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, i), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16, i = new Int8Array(t);
    let s = 0;
    for (let r = 32; r < e.length - 16; r += 160, s += 16)
      i.set(e.subarray(r, r + 16), s);
    return i;
  }
  getAvcDecryptedUnit(e, t) {
    const i = new Uint8Array(t);
    let s = 0;
    for (let r = 32; r < e.length - 16; r += 160, s += 16)
      e.set(i.subarray(s, s + 16), r);
    return e;
  }
  decryptAvcSample(e, t, i, s, r) {
    const a = Sl(r.data), o = this.getAvcEncryptedData(a);
    this.decryptBuffer(o.buffer).then((l) => {
      r.data = this.getAvcDecryptedUnit(a, l), this.decrypter.isSync() || this.decryptAvcSamples(e, t, i + 1, s);
    });
  }
  decryptAvcSamples(e, t, i, s) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, i = 0) {
      if (t >= e.length) {
        s();
        return;
      }
      const r = e[t].units;
      for (; !(i >= r.length); i++) {
        const a = r[i];
        if (!(a.data.length <= 48 || a.type !== 1 && a.type !== 5) && (this.decryptAvcSample(e, t, i, s, a), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
const nt = 188;
class Zt {
  constructor(e, t, i) {
    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = i, this.videoParser = new _g();
  }
  static probe(e) {
    const t = Zt.syncOffset(e);
    return t > 0 && k.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`), t !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let i = Math.min(nt * 5, t - nt) + 1, s = 0;
    for (; s < i; ) {
      let r = !1, a = -1, o = 0;
      for (let l = s; l < t; l += nt)
        if (e[l] === 71 && (t - l === nt || e[l + nt] === 71)) {
          if (o++, a === -1 && (a = l, a !== 0 && (i = Math.min(a + nt * 99, e.length - nt) + 1)), r || (r = en(e, l) === 0), r && o > 1 && (a === 0 && o > 2 || l + nt > i))
            return a;
        } else {
          if (o)
            return -1;
          break;
        }
      s++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: yl[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(e, t, i, s) {
    this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = Zt.createTrack("video"), this._audioTrack = Zt.createTrack("audio", s), this._id3Track = Zt.createTrack("id3"), this._txtTrack = Zt.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = i, this._duration = s;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: i
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), i && (i.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(e, t, i = !1, s = !1) {
    i || (this.sampleAes = null);
    let r;
    const a = this._videoTrack, o = this._audioTrack, l = this._id3Track, c = this._txtTrack;
    let d = a.pid, u = a.pesData, h = o.pid, f = l.pid, g = o.pesData, m = l.pesData, p = null, v = this.pmtParsed, b = this._pmtId, _ = e.length;
    if (this.remainderData && (e = xt(this.remainderData, e), _ = e.length, this.remainderData = null), _ < nt && !s)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: a,
        id3Track: l,
        textTrack: c
      };
    const E = Math.max(0, Zt.syncOffset(e));
    _ -= (_ - E) % nt, _ < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer, _, e.buffer.byteLength - _));
    let T = 0;
    for (let S = E; S < _; S += nt)
      if (e[S] === 71) {
        const w = !!(e[S + 1] & 64), C = en(e, S), L = (e[S + 3] & 48) >> 4;
        let I;
        if (L > 1) {
          if (I = S + 5 + e[S + 4], I === S + nt)
            continue;
        } else
          I = S + 4;
        switch (C) {
          case d:
            w && (u && (r = Ti(u)) && this.videoParser.parseAVCPES(a, c, r, !1, this._duration), u = {
              data: [],
              size: 0
            }), u && (u.data.push(e.subarray(I, S + nt)), u.size += S + nt - I);
            break;
          case h:
            if (w) {
              if (g && (r = Ti(g)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, r);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, r);
                    break;
                  case "ac3":
                    this.parseAC3PES(o, r);
                    break;
                }
              g = {
                data: [],
                size: 0
              };
            }
            g && (g.data.push(e.subarray(I, S + nt)), g.size += S + nt - I);
            break;
          case f:
            w && (m && (r = Ti(m)) && this.parseID3PES(l, r), m = {
              data: [],
              size: 0
            }), m && (m.data.push(e.subarray(I, S + nt)), m.size += S + nt - I);
            break;
          case 0:
            w && (I += e[I] + 1), b = this._pmtId = Ag(e, I);
            break;
          case b: {
            w && (I += e[I] + 1);
            const K = Lg(e, I, this.typeSupported, i, this.observer);
            d = K.videoPid, d > 0 && (a.pid = d, a.segmentCodec = K.segmentVideoCodec), h = K.audioPid, h > 0 && (o.pid = h, o.segmentCodec = K.segmentAudioCodec), f = K.id3Pid, f > 0 && (l.pid = f), p !== null && !v && (k.warn(`MPEG-TS PMT found at ${S} after unknown PID '${p}'. Backtracking to sync byte @${E} to parse all TS packets.`), p = null, S = E - 188), v = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            p = C;
            break;
        }
      } else
        T++;
    T > 0 && js(this.observer, new Error(`Found ${T} TS packet/s that do not start with 0x47`)), a.pesData = u, o.pesData = g, l.pesData = m;
    const A = {
      audioTrack: o,
      videoTrack: a,
      id3Track: l,
      textTrack: c
    };
    return s && this.extractRemainingSamples(A), A;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, !1, !0) : t = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
  }
  extractRemainingSamples(e) {
    const {
      audioTrack: t,
      videoTrack: i,
      id3Track: s,
      textTrack: r
    } = e, a = i.pesData, o = t.pesData, l = s.pesData;
    let c;
    if (a && (c = Ti(a)) ? (this.videoParser.parseAVCPES(i, r, c, !0, this._duration), i.pesData = null) : i.pesData = a, o && (c = Ti(o))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, c);
          break;
        case "mp3":
          this.parseMPEGPES(t, c);
          break;
        case "ac3":
          this.parseAC3PES(t, c);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && k.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    l && (c = Ti(l)) ? (this.parseID3PES(s, c), s.pesData = null) : s.pesData = l;
  }
  demuxSampleAes(e, t, i) {
    const s = this.demux(e, i, !0, !this.config.progressive), r = this.sampleAes = new Sg(this.observer, this.config, t);
    return this.decrypt(s, r);
  }
  decrypt(e, t) {
    return new Promise((i) => {
      const {
        audioTrack: s,
        videoTrack: r
      } = e;
      s.samples && s.segmentCodec === "aac" ? t.decryptAacSamples(s.samples, 0, () => {
        r.samples ? t.decryptAvcSamples(r.samples, 0, 0, () => {
          i(e);
        }) : i(e);
      }) : r.samples && t.decryptAvcSamples(r.samples, 0, 0, () => {
        i(e);
      });
    });
  }
  destroy() {
    this._duration = 0;
  }
  parseAACPES(e, t) {
    let i = 0;
    const s = this.aacOverFlow;
    let r = t.data;
    if (s) {
      this.aacOverFlow = null;
      const u = s.missing, h = s.sample.unit.byteLength;
      if (u === -1)
        r = xt(s.sample.unit, r);
      else {
        const f = h - u;
        s.sample.unit.set(r.subarray(0, u), f), e.samples.push(s.sample), i = s.missing;
      }
    }
    let a, o;
    for (a = i, o = r.length; a < o - 1 && !Ws(r, a); a++)
      ;
    if (a !== i) {
      let u;
      const h = a < o - 1;
      if (h ? u = `AAC PES did not start with ADTS header,offset:${a}` : u = "No ADTS header found in AAC PES", js(this.observer, new Error(u), h), !h)
        return;
    }
    Ul(e, this.observer, r, a, this.audioCodec);
    let l;
    if (t.pts !== void 0)
      l = t.pts;
    else if (s) {
      const u = Gl(e.samplerate);
      l = s.sample.pts + u;
    } else {
      k.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let c = 0, d;
    for (; a < o; )
      if (d = Hl(e, r, a, l, c), a += d.length, d.missing) {
        this.aacOverFlow = d;
        break;
      } else
        for (c++; a < o - 1 && !Ws(r, a); a++)
          ;
  }
  parseMPEGPES(e, t) {
    const i = t.data, s = i.length;
    let r = 0, a = 0;
    const o = t.pts;
    if (o === void 0) {
      k.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; a < s; )
      if (Wl(i, a)) {
        const l = Vl(e, i, a, o, r);
        if (l)
          a += l.length, r++;
        else
          break;
      } else
        a++;
  }
  parseAC3PES(e, t) {
    {
      const i = t.data, s = t.pts;
      if (s === void 0) {
        k.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return;
      }
      const r = i.length;
      let a = 0, o = 0, l;
      for (; o < r && (l = zl(e, i, o, s, a++)) > 0; )
        o += l;
    }
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      k.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const i = it({}, t, {
      type: this._videoTrack ? _t.emsg : _t.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(i);
  }
}
function en(n, e) {
  return ((n[e + 1] & 31) << 8) + n[e + 2];
}
function Ag(n, e) {
  return (n[e + 10] & 31) << 8 | n[e + 11];
}
function Lg(n, e, t, i, s) {
  const r = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, a = (n[e + 1] & 15) << 8 | n[e + 2], o = e + 3 + a - 4, l = (n[e + 10] & 15) << 8 | n[e + 11];
  for (e += 12 + l; e < o; ) {
    const c = en(n, e), d = (n[e + 3] & 15) << 8 | n[e + 4];
    switch (n[e]) {
      case 207:
        if (!i) {
          _r("ADTS AAC");
          break;
        }
      /* falls through */
      case 15:
        r.audioPid === -1 && (r.audioPid = c);
        break;
      // Packetized metadata (ID3)
      case 21:
        r.id3Pid === -1 && (r.id3Pid = c);
        break;
      case 219:
        if (!i) {
          _r("H.264");
          break;
        }
      /* falls through */
      case 27:
        r.videoPid === -1 && (r.videoPid = c, r.segmentVideoCodec = "avc");
        break;
      // ISO/IEC 11172-3 (MPEG-1 audio)
      // or ISO/IEC 13818-3 (MPEG-2 halved sample rate audio)
      case 3:
      case 4:
        !t.mpeg && !t.mp3 ? k.log("MPEG audio found, not supported in this browser") : r.audioPid === -1 && (r.audioPid = c, r.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!i) {
          _r("AC-3");
          break;
        }
      /* falls through */
      case 129:
        t.ac3 ? r.audioPid === -1 && (r.audioPid = c, r.segmentAudioCodec = "ac3") : k.log("AC-3 audio found, not supported in this browser");
        break;
      case 6:
        if (r.audioPid === -1 && d > 0) {
          let u = e + 5, h = d;
          for (; h > 2; ) {
            n[u] === 106 && (t.ac3 !== !0 ? k.log("AC-3 audio found, not supported in this browser for now") : (r.audioPid = c, r.segmentAudioCodec = "ac3"));
            const g = n[u + 1] + 2;
            u += g, h -= g;
          }
        }
        break;
      case 194:
      // SAMPLE-AES EC3
      /* falls through */
      case 135:
        return js(s, new Error("Unsupported EC-3 in M2TS found")), r;
      case 36:
        return js(s, new Error("Unsupported HEVC in M2TS found")), r;
    }
    e += d + 5;
  }
  return r;
}
function js(n, e, t) {
  k.warn(`parsing error: ${e.message}`), n.emit(x.ERROR, x.ERROR, {
    type: xe.MEDIA_ERROR,
    details: N.FRAG_PARSING_ERROR,
    fatal: !1,
    levelRetry: t,
    error: e,
    reason: e.message
  });
}
function _r(n) {
  k.log(`${n} with AES-128-CBC encryption found in unencrypted stream`);
}
function Ti(n) {
  let e = 0, t, i, s, r, a;
  const o = n.data;
  if (!n || n.size === 0)
    return null;
  for (; o[0].length < 19 && o.length > 1; )
    o[0] = xt(o[0], o[1]), o.splice(1, 1);
  if (t = o[0], (t[0] << 16) + (t[1] << 8) + t[2] === 1) {
    if (i = (t[4] << 8) + t[5], i && i > n.size - 6)
      return null;
    const c = t[7];
    c & 192 && (r = (t[9] & 14) * 536870912 + // 1 << 29
    (t[10] & 255) * 4194304 + // 1 << 22
    (t[11] & 254) * 16384 + // 1 << 14
    (t[12] & 255) * 128 + // 1 << 7
    (t[13] & 254) / 2, c & 64 ? (a = (t[14] & 14) * 536870912 + // 1 << 29
    (t[15] & 255) * 4194304 + // 1 << 22
    (t[16] & 254) * 16384 + // 1 << 14
    (t[17] & 255) * 128 + // 1 << 7
    (t[18] & 254) / 2, r - a > 60 * 9e4 && (k.warn(`${Math.round((r - a) / 9e4)}s delta between PTS and DTS, align them`), r = a)) : a = r), s = t[8];
    let d = s + 9;
    if (n.size <= d)
      return null;
    n.size -= d;
    const u = new Uint8Array(n.size);
    for (let h = 0, f = o.length; h < f; h++) {
      t = o[h];
      let g = t.byteLength;
      if (d)
        if (d > g) {
          d -= g;
          continue;
        } else
          t = t.subarray(d), g -= d, d = 0;
      u.set(t, e), e += g;
    }
    return i && (i -= s + 3), {
      data: u,
      pts: r,
      dts: a,
      len: i
    };
  }
  return null;
}
class wg extends An {
  resetInitSegment(e, t, i, s) {
    super.resetInitSegment(e, t, i, s), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: t,
      duration: s,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = zi(e, 0);
    let i = t?.length || 0;
    if (t && e[i] === 11 && e[i + 1] === 119 && xn(t) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    Yl(e, i) <= 16)
      return !1;
    for (let s = e.length; i < s; i++)
      if (jl(e, i))
        return k.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return vg(e, t);
  }
  appendFrame(e, t, i) {
    if (this.basePTS !== null)
      return Vl(e, t, i, this.basePTS, this.frameIndex);
  }
}
class Wa {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (t === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (t === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (t === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      // handle HE-AAC below (mp4a.40.5 / mp4a.40.29)
      default:
        if (t === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const Qt = Math.pow(2, 32) - 1;
class P {
  static init() {
    P.types = {
      avc1: [],
      // codingname
      avcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let e;
    for (e in P.types)
      P.types.hasOwnProperty(e) && (P.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), i = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    P.HDLR_TYPES = {
      video: t,
      audio: i
    };
    const s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), r = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    P.STTS = P.STSC = P.STCO = r, P.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), P.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), P.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), P.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const a = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
    P.FTYP = P.box(P.types.ftyp, a, l, a, o), P.DINF = P.box(P.types.dinf, P.box(P.types.dref, s));
  }
  static box(e, ...t) {
    let i = 8, s = t.length;
    const r = s;
    for (; s--; )
      i += t[s].byteLength;
    const a = new Uint8Array(i);
    for (a[0] = i >> 24 & 255, a[1] = i >> 16 & 255, a[2] = i >> 8 & 255, a[3] = i & 255, a.set(e, 4), s = 0, i = 8; s < r; s++)
      a.set(t[s], i), i += t[s].byteLength;
    return a;
  }
  static hdlr(e) {
    return P.box(P.types.hdlr, P.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return P.box(P.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const i = Math.floor(t / (Qt + 1)), s = Math.floor(t % (Qt + 1));
    return P.box(P.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(e) {
    return P.box(P.types.mdia, P.mdhd(e.timescale, e.duration), P.hdlr(e.type), P.minf(e));
  }
  static mfhd(e) {
    return P.box(P.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
      // sequence_number
    ]));
  }
  static minf(e) {
    return e.type === "audio" ? P.box(P.types.minf, P.box(P.types.smhd, P.SMHD), P.DINF, P.stbl(e)) : P.box(P.types.minf, P.box(P.types.vmhd, P.VMHD), P.DINF, P.stbl(e));
  }
  static moof(e, t, i) {
    return P.box(P.types.moof, P.mfhd(e), P.traf(i, t));
  }
  static moov(e) {
    let t = e.length;
    const i = [];
    for (; t--; )
      i[t] = P.trak(e[t]);
    return P.box.apply(null, [P.types.moov, P.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(P.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const i = [];
    for (; t--; )
      i[t] = P.trex(e[t]);
    return P.box.apply(null, [P.types.mvex, ...i]);
  }
  static mvhd(e, t) {
    t *= e;
    const i = Math.floor(t / (Qt + 1)), s = Math.floor(t % (Qt + 1)), r = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return P.box(P.types.mvhd, r);
  }
  static sdtp(e) {
    const t = e.samples || [], i = new Uint8Array(4 + t.length);
    let s, r;
    for (s = 0; s < t.length; s++)
      r = t[s].flags, i[s + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
    return P.box(P.types.sdtp, i);
  }
  static stbl(e) {
    return P.box(P.types.stbl, P.stsd(e), P.box(P.types.stts, P.STTS), P.box(P.types.stsc, P.STSC), P.box(P.types.stsz, P.STSZ), P.box(P.types.stco, P.STCO));
  }
  static avc1(e) {
    let t = [], i = [], s, r, a;
    for (s = 0; s < e.sps.length; s++)
      r = e.sps[s], a = r.byteLength, t.push(a >>> 8 & 255), t.push(a & 255), t = t.concat(Array.prototype.slice.call(r));
    for (s = 0; s < e.pps.length; s++)
      r = e.pps[s], a = r.byteLength, i.push(a >>> 8 & 255), i.push(a & 255), i = i.concat(Array.prototype.slice.call(r));
    const o = P.box(P.types.avcC, new Uint8Array([
      1,
      // version
      t[3],
      // profile
      t[4],
      // profile compat
      t[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | e.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(t).concat([
      e.pps.length
      // numOfPictureParameterSets
    ]).concat(i))), l = e.width, c = e.height, d = e.pixelRatio[0], u = e.pixelRatio[1];
    return P.box(
      P.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        l >> 8 & 255,
        l & 255,
        // width
        c >> 8 & 255,
        c & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      P.box(P.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      P.box(P.types.pasp, new Uint8Array([
        d >> 24,
        // hSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255,
        u >> 24,
        // vSpacing
        u >> 16 & 255,
        u >> 8 & 255,
        u & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config.length;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      23 + t,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      15 + t,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5
      // descriptor_type
    ].concat([t]).concat(e.config).concat([6, 1, 2]));
  }
  static audioStsd(e) {
    const t = e.samplerate;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      e.channelCount,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      t >> 8 & 255,
      t & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(e) {
    return P.box(P.types.mp4a, P.audioStsd(e), P.box(P.types.esds, P.esds(e)));
  }
  static mp3(e) {
    return P.box(P.types[".mp3"], P.audioStsd(e));
  }
  static ac3(e) {
    return P.box(P.types["ac-3"], P.audioStsd(e), P.box(P.types.dac3, e.config));
  }
  static stsd(e) {
    return e.type === "audio" ? e.segmentCodec === "mp3" && e.codec === "mp3" ? P.box(P.types.stsd, P.STSD, P.mp3(e)) : e.segmentCodec === "ac3" ? P.box(P.types.stsd, P.STSD, P.ac3(e)) : P.box(P.types.stsd, P.STSD, P.mp4a(e)) : P.box(P.types.stsd, P.STSD, P.avc1(e));
  }
  static tkhd(e) {
    const t = e.id, i = e.duration * e.timescale, s = e.width, r = e.height, a = Math.floor(i / (Qt + 1)), o = Math.floor(i % (Qt + 1));
    return P.box(P.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      a >> 24,
      a >> 16 & 255,
      a >> 8 & 255,
      a & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      s >> 8 & 255,
      s & 255,
      0,
      0,
      // width
      r >> 8 & 255,
      r & 255,
      0,
      0
      // height
    ]));
  }
  static traf(e, t) {
    const i = P.sdtp(e), s = e.id, r = Math.floor(t / (Qt + 1)), a = Math.floor(t % (Qt + 1));
    return P.box(
      P.types.traf,
      P.box(P.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        s >> 24,
        s >> 16 & 255,
        s >> 8 & 255,
        s & 255
        // track_ID
      ])),
      P.box(P.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        r >> 24,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255,
        a >> 24,
        a >> 16 & 255,
        a >> 8 & 255,
        a & 255
      ])),
      P.trun(e, i.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      i
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(e) {
    return e.duration = e.duration || 4294967295, P.box(P.types.trak, P.tkhd(e), P.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return P.box(P.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(e, t) {
    const i = e.samples || [], s = i.length, r = 12 + 16 * s, a = new Uint8Array(r);
    let o, l, c, d, u, h;
    for (t += 8 + r, a.set([
      e.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      s >>> 24 & 255,
      s >>> 16 & 255,
      s >>> 8 & 255,
      s & 255,
      // sample_count
      t >>> 24 & 255,
      t >>> 16 & 255,
      t >>> 8 & 255,
      t & 255
      // data_offset
    ], 0), o = 0; o < s; o++)
      l = i[o], c = l.duration, d = l.size, u = l.flags, h = l.cts, a.set([
        c >>> 24 & 255,
        c >>> 16 & 255,
        c >>> 8 & 255,
        c & 255,
        // sample_duration
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255,
        // sample_size
        u.isLeading << 2 | u.dependsOn,
        u.isDependedOn << 6 | u.hasRedundancy << 4 | u.paddingValue << 1 | u.isNonSync,
        u.degradPrio & 61440,
        u.degradPrio & 15,
        // sample_flags
        h >>> 24 & 255,
        h >>> 16 & 255,
        h >>> 8 & 255,
        h & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return P.box(P.types.trun, a);
  }
  static initSegment(e) {
    P.types || P.init();
    const t = P.moov(e);
    return xt(P.FTYP, t);
  }
}
P.types = void 0;
P.HDLR_TYPES = void 0;
P.STTS = void 0;
P.STSC = void 0;
P.STCO = void 0;
P.STSZ = void 0;
P.VMHD = void 0;
P.SMHD = void 0;
P.STSD = void 0;
P.FTYP = void 0;
P.DINF = void 0;
const ql = 9e4;
function Rn(n, e, t = 1, i = !1) {
  const s = n * e * t;
  return i ? Math.round(s) : s;
}
function Rg(n, e, t = 1, i = !1) {
  return Rn(n, e, 1 / t, i);
}
function Vi(n, e = !1) {
  return Rn(n, 1e3, 1 / ql, e);
}
function Ig(n, e = 1) {
  return Rn(n, ql, 1 / e);
}
const Cg = 10 * 1e3, ja = 1024, Dg = 1152, kg = 1536;
let bi = null, Sr = null;
class As {
  constructor(e, t, i, s = "") {
    if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = i, this.ISGenerated = !1, bi === null) {
      const a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      bi = a ? parseInt(a[1]) : 0;
    }
    if (Sr === null) {
      const r = navigator.userAgent.match(/Safari\/(\d+)/i);
      Sr = r ? parseInt(r[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(e) {
    k.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    k.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    k.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(e) {
    let t = !1;
    const i = e.reduce((s, r) => {
      const a = r.pts - s;
      return a < -4294967296 ? (t = !0, pt(s, r.pts)) : a > 0 ? s : r.pts;
    }, e[0].pts);
    return t && k.debug("PTS rollover detected"), i;
  }
  remux(e, t, i, s, r, a, o, l) {
    let c, d, u, h, f, g, m = r, p = r;
    const v = e.pid > -1, b = t.pid > -1, _ = t.samples.length, E = e.samples.length > 0, T = o && _ > 0 || _ > 1;
    if ((!v || E) && (!b || T) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var S, w, C, L;
        const D = this.videoTrackConfig;
        D && (t.width !== D.width || t.height !== D.height || ((S = t.pixelRatio) == null ? void 0 : S[0]) !== ((w = D.pixelRatio) == null ? void 0 : w[0]) || ((C = t.pixelRatio) == null ? void 0 : C[1]) !== ((L = D.pixelRatio) == null ? void 0 : L[1])) && this.resetInitSegment();
      } else
        u = this.generateIS(e, t, r, a);
      const I = this.isVideoContiguous;
      let K = -1, F;
      if (T && (K = Pg(t.samples), !I && this.config.forceKeyFrameOnDiscontinuity))
        if (g = !0, K > 0) {
          k.warn(`[mp4-remuxer]: Dropped ${K} out of ${_} video samples due to a missing keyframe`);
          const D = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(K), t.dropped += K, p += (t.samples[0].pts - D) / t.inputTimeScale, F = p;
        } else K === -1 && (k.warn(`[mp4-remuxer]: No keyframe found out of ${_} video samples`), g = !1);
      if (this.ISGenerated) {
        if (E && T) {
          const D = this.getVideoStartPts(t.samples), G = (pt(e.samples[0].pts, D) - D) / t.inputTimeScale;
          m += Math.max(0, G), p += Math.max(0, -G);
        }
        if (E) {
          if (e.samplerate || (k.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), u = this.generateIS(e, t, r, a)), d = this.remuxAudio(e, m, this.isAudioContiguous, a, b || T || l === pe.AUDIO ? p : void 0), T) {
            const D = d ? d.endPTS - d.startPTS : 0;
            t.inputTimeScale || (k.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), u = this.generateIS(e, t, r, a)), c = this.remuxVideo(t, p, I, D);
          }
        } else T && (c = this.remuxVideo(t, p, I, 0));
        c && (c.firstKeyFrame = K, c.independent = K !== -1, c.firstKeyFramePTS = F);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (i.samples.length && (f = Xl(i, r, this._initPTS, this._initDTS)), s.samples.length && (h = Ql(s, r, this._initPTS))), {
      audio: d,
      video: c,
      initSegment: u,
      independent: g,
      text: h,
      id3: f
    };
  }
  generateIS(e, t, i, s) {
    const r = e.samples, a = t.samples, o = this.typeSupported, l = {}, c = this._initPTS;
    let d = !c || s, u = "audio/mp4", h, f, g;
    if (d && (h = f = 1 / 0), e.config && r.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (u = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3";
          break;
      }
      l.audio = {
        id: "audio",
        container: u,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : P.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, d && (g = e.inputTimeScale, !c || g !== c.timescale ? h = f = r[0].pts - Math.round(g * i) : d = !1);
    }
    if (t.sps && t.pps && a.length) {
      if (t.timescale = t.inputTimeScale, l.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: P.initSegment([t]),
        metadata: {
          width: t.width,
          height: t.height
        }
      }, d)
        if (g = t.inputTimeScale, !c || g !== c.timescale) {
          const m = this.getVideoStartPts(a), p = Math.round(g * i);
          f = Math.min(f, pt(a[0].dts, m) - p), h = Math.min(h, m - p);
        } else
          d = !1;
      this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      };
    }
    if (Object.keys(l).length)
      return this.ISGenerated = !0, d ? (this._initPTS = {
        baseTime: h,
        timescale: g
      }, this._initDTS = {
        baseTime: f,
        timescale: g
      }) : h = g = void 0, {
        tracks: l,
        initPTS: h,
        timescale: g
      };
  }
  remuxVideo(e, t, i, s) {
    const r = e.inputTimeScale, a = e.samples, o = [], l = a.length, c = this._initPTS;
    let d = this.nextAvcDts, u = 8, h = this.videoSampleDuration, f, g, m = Number.POSITIVE_INFINITY, p = Number.NEGATIVE_INFINITY, v = !1;
    if (!i || d === null) {
      const H = t * r, B = a[0].pts - pt(a[0].dts, a[0].pts);
      bi && d !== null && Math.abs(H - B - d) < 15e3 ? i = !0 : d = H - B;
    }
    const b = c.baseTime * r / c.timescale;
    for (let H = 0; H < l; H++) {
      const B = a[H];
      B.pts = pt(B.pts - b, d), B.dts = pt(B.dts - b, d), B.dts < a[H > 0 ? H - 1 : H].dts && (v = !0);
    }
    v && a.sort(function(H, B) {
      const O = H.dts - B.dts, Y = H.pts - B.pts;
      return O || Y;
    }), f = a[0].dts, g = a[a.length - 1].dts;
    const _ = g - f, E = _ ? Math.round(_ / (l - 1)) : h || e.inputTimeScale / 30;
    if (i) {
      const H = f - d, B = H > E, O = H < -1;
      if ((B || O) && (B ? k.warn(`AVC: ${Vi(H, !0)} ms (${H}dts) hole between fragments detected at ${t.toFixed(3)}`) : k.warn(`AVC: ${Vi(-H, !0)} ms (${H}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !O || d >= a[0].pts || bi)) {
        f = d;
        const Y = a[0].pts - H;
        if (B)
          a[0].dts = f, a[0].pts = Y;
        else
          for (let q = 0; q < a.length && !(a[q].dts > Y); q++)
            a[q].dts -= H, a[q].pts -= H;
        k.log(`Video: Initial PTS/DTS adjusted: ${Vi(Y, !0)}/${Vi(f, !0)}, delta: ${Vi(H, !0)} ms`);
      }
    }
    f = Math.max(0, f);
    let T = 0, A = 0, S = f;
    for (let H = 0; H < l; H++) {
      const B = a[H], O = B.units, Y = O.length;
      let q = 0;
      for (let le = 0; le < Y; le++)
        q += O[le].data.length;
      A += q, T += Y, B.length = q, B.dts < S ? (B.dts = S, S += E / 4 | 0 || 1) : S = B.dts, m = Math.min(B.pts, m), p = Math.max(B.pts, p);
    }
    g = a[l - 1].dts;
    const w = A + 4 * T + 8;
    let C;
    try {
      C = new Uint8Array(w);
    } catch (H) {
      this.observer.emit(x.ERROR, x.ERROR, {
        type: xe.MUX_ERROR,
        details: N.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: H,
        bytes: w,
        reason: `fail allocating video mdat ${w}`
      });
      return;
    }
    const L = new DataView(C.buffer);
    L.setUint32(0, w), C.set(P.types.mdat, 4);
    let I = !1, K = Number.POSITIVE_INFINITY, F = Number.POSITIVE_INFINITY, D = Number.NEGATIVE_INFINITY, U = Number.NEGATIVE_INFINITY;
    for (let H = 0; H < l; H++) {
      const B = a[H], O = B.units;
      let Y = 0;
      for (let te = 0, ge = O.length; te < ge; te++) {
        const Q = O[te], ie = Q.data, ce = Q.data.byteLength;
        L.setUint32(u, ce), u += 4, C.set(ie, u), u += ce, Y += 4 + ce;
      }
      let q;
      if (H < l - 1)
        h = a[H + 1].dts - B.dts, q = a[H + 1].pts - B.pts;
      else {
        const te = this.config, ge = H > 0 ? B.dts - a[H - 1].dts : E;
        if (q = H > 0 ? B.pts - a[H - 1].pts : E, te.stretchShortVideoTrack && this.nextAudioPts !== null) {
          const Q = Math.floor(te.maxBufferHole * r), ie = (s ? m + s * r : this.nextAudioPts) - B.pts;
          ie > Q ? (h = ie - ge, h < 0 ? h = ge : I = !0, k.log(`[mp4-remuxer]: It is approximately ${ie / 90} ms to the next segment; using duration ${h / 90} ms for the last video frame.`)) : h = ge;
        } else
          h = ge;
      }
      const le = Math.round(B.pts - B.dts);
      K = Math.min(K, h), D = Math.max(D, h), F = Math.min(F, q), U = Math.max(U, q), o.push(new Ya(B.key, h, Y, le));
    }
    if (o.length) {
      if (bi) {
        if (bi < 70) {
          const H = o[0].flags;
          H.dependsOn = 2, H.isNonSync = 0;
        }
      } else if (Sr && U - F < D - K && E / D < 0.025 && o[0].cts === 0) {
        k.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let H = f;
        for (let B = 0, O = o.length; B < O; B++) {
          const Y = H + o[B].duration, q = H + o[B].cts;
          if (B < O - 1) {
            const le = Y + o[B + 1].cts;
            o[B].duration = le - q;
          } else
            o[B].duration = B ? o[B - 1].duration : E;
          o[B].cts = 0, H = Y;
        }
      }
    }
    h = I || !h ? E : h, this.nextAvcDts = d = g + h, this.videoSampleDuration = h, this.isVideoContiguous = !0;
    const oe = {
      data1: P.moof(e.sequenceNumber++, f, it({}, e, {
        samples: o
      })),
      data2: C,
      startPTS: m / r,
      endPTS: (p + h) / r,
      startDTS: f / r,
      endDTS: d / r,
      type: "video",
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, oe;
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return Dg;
      case "ac3":
        return kg;
      default:
        return ja;
    }
  }
  remuxAudio(e, t, i, s, r) {
    const a = e.inputTimeScale, o = e.samplerate ? e.samplerate : a, l = a / o, c = this.getSamplesPerFrame(e), d = c * l, u = this._initPTS, h = e.segmentCodec === "mp3" && this.typeSupported.mpeg, f = [], g = r !== void 0;
    let m = e.samples, p = h ? 0 : 8, v = this.nextAudioPts || -1;
    const b = t * a, _ = u.baseTime * a / u.timescale;
    if (this.isAudioContiguous = i = i || m.length && v > 0 && (s && Math.abs(b - v) < 9e3 || Math.abs(pt(m[0].pts - _, b) - v) < 20 * d), m.forEach(function(G) {
      G.pts = pt(G.pts - _, b);
    }), !i || v < 0) {
      if (m = m.filter((G) => G.pts >= 0), !m.length)
        return;
      r === 0 ? v = 0 : s && !g ? v = Math.max(0, b) : v = m[0].pts;
    }
    if (e.segmentCodec === "aac") {
      const G = this.config.maxAudioFramesDrift;
      for (let ee = 0, oe = v; ee < m.length; ee++) {
        const H = m[ee], B = H.pts, O = B - oe, Y = Math.abs(1e3 * O / a);
        if (O <= -G * d && g)
          ee === 0 && (k.warn(`Audio frame @ ${(B / a).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3 * O / a)} ms.`), this.nextAudioPts = v = oe = B);
        else if (O >= G * d && Y < Cg && g) {
          let q = Math.round(O / d);
          oe = B - q * d, oe < 0 && (q--, oe += d), ee === 0 && (this.nextAudioPts = v = oe), k.warn(`[mp4-remuxer]: Injecting ${q} audio frame @ ${(oe / a).toFixed(3)}s due to ${Math.round(1e3 * O / a)} ms gap.`);
          for (let le = 0; le < q; le++) {
            const te = Math.max(oe, 0);
            let ge = Wa.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
            ge || (k.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), ge = H.unit.subarray()), m.splice(ee, 0, {
              unit: ge,
              pts: te
            }), oe += d, ee++;
          }
        }
        H.pts = oe, oe += d;
      }
    }
    let E = null, T = null, A, S = 0, w = m.length;
    for (; w--; )
      S += m[w].unit.byteLength;
    for (let G = 0, ee = m.length; G < ee; G++) {
      const oe = m[G], H = oe.unit;
      let B = oe.pts;
      if (T !== null) {
        const Y = f[G - 1];
        Y.duration = Math.round((B - T) / l);
      } else if (i && e.segmentCodec === "aac" && (B = v), E = B, S > 0) {
        S += p;
        try {
          A = new Uint8Array(S);
        } catch (Y) {
          this.observer.emit(x.ERROR, x.ERROR, {
            type: xe.MUX_ERROR,
            details: N.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: Y,
            bytes: S,
            reason: `fail allocating audio mdat ${S}`
          });
          return;
        }
        h || (new DataView(A.buffer).setUint32(0, S), A.set(P.types.mdat, 4));
      } else
        return;
      A.set(H, p);
      const O = H.byteLength;
      p += O, f.push(new Ya(!0, c, O, 0)), T = B;
    }
    const C = f.length;
    if (!C)
      return;
    const L = f[f.length - 1];
    this.nextAudioPts = v = T + l * L.duration;
    const I = h ? new Uint8Array(0) : P.moof(e.sequenceNumber++, E / l, it({}, e, {
      samples: f
    }));
    e.samples = [];
    const K = E / a, F = v / a, U = {
      data1: I,
      data2: A,
      startPTS: K,
      endPTS: F,
      startDTS: K,
      endDTS: F,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: C
    };
    return this.isAudioContiguous = !0, U;
  }
  remuxEmptyAudio(e, t, i, s) {
    const r = e.inputTimeScale, a = e.samplerate ? e.samplerate : r, o = r / a, l = this.nextAudioPts, c = this._initDTS, d = c.baseTime * 9e4 / c.timescale, u = (l !== null ? l : s.startDTS * r) + d, h = s.endDTS * r + d, f = o * ja, g = Math.ceil((h - u) / f), m = Wa.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
    if (k.warn("[mp4-remuxer]: remux empty Audio"), !m) {
      k.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
      return;
    }
    const p = [];
    for (let v = 0; v < g; v++) {
      const b = u + v * f;
      p.push({
        unit: m,
        pts: b,
        dts: b
      });
    }
    return e.samples = p, this.remuxAudio(e, t, i, !1);
  }
}
function pt(n, e) {
  let t;
  if (e === null)
    return n;
  for (e < n ? t = -8589934592 : t = 8589934592; Math.abs(n - e) > 4294967296; )
    n += t;
  return n;
}
function Pg(n) {
  for (let e = 0; e < n.length; e++)
    if (n[e].key)
      return e;
  return -1;
}
function Xl(n, e, t, i) {
  const s = n.samples.length;
  if (!s)
    return;
  const r = n.inputTimeScale;
  for (let o = 0; o < s; o++) {
    const l = n.samples[o];
    l.pts = pt(l.pts - t.baseTime * r / t.timescale, e * r) / r, l.dts = pt(l.dts - i.baseTime * r / i.timescale, e * r) / r;
  }
  const a = n.samples;
  return n.samples = [], {
    samples: a
  };
}
function Ql(n, e, t) {
  const i = n.samples.length;
  if (!i)
    return;
  const s = n.inputTimeScale;
  for (let a = 0; a < i; a++) {
    const o = n.samples[a];
    o.pts = pt(o.pts - t.baseTime * s / t.timescale, e * s) / s;
  }
  n.samples.sort((a, o) => a.pts - o.pts);
  const r = n.samples;
  return n.samples = [], {
    samples: r
  };
}
class Ya {
  constructor(e, t, i, s) {
    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t, this.size = i, this.cts = s, this.flags = {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: e ? 2 : 1,
      isNonSync: e ? 0 : 1
    };
  }
}
class Og {
  constructor() {
    this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
  }
  destroy() {
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.lastEndTime = null;
  }
  resetNextTimestamp() {
    this.lastEndTime = null;
  }
  resetInitSegment(e, t, i, s) {
    this.audioCodec = t, this.videoCodec = i, this.generateInitSegment(Hf(e, s)), this.emitInitSegment = !0;
  }
  generateInitSegment(e) {
    let {
      audioCodec: t,
      videoCodec: i
    } = this;
    if (!(e != null && e.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const s = this.initData = Tl(e);
    s.audio && (t = za(s.audio, Be.AUDIO)), s.video && (i = za(s.video, Be.VIDEO));
    const r = {};
    s.audio && s.video ? r.audiovideo = {
      container: "video/mp4",
      codec: t + "," + i,
      initSegment: e,
      id: "main"
    } : s.audio ? r.audio = {
      container: "audio/mp4",
      codec: t,
      initSegment: e,
      id: "audio"
    } : s.video ? r.video = {
      container: "video/mp4",
      codec: i,
      initSegment: e,
      id: "main"
    } : k.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = r;
  }
  remux(e, t, i, s, r, a) {
    var o, l;
    let {
      initPTS: c,
      lastEndTime: d
    } = this;
    const u = {
      audio: void 0,
      video: void 0,
      text: s,
      id3: i,
      initSegment: void 0
    };
    ae(d) || (d = this.lastEndTime = r || 0);
    const h = t.samples;
    if (!(h != null && h.length))
      return u;
    const f = {
      initPTS: void 0,
      timescale: 1
    };
    let g = this.initData;
    if ((o = g) != null && o.length || (this.generateInitSegment(h), g = this.initData), !((l = g) != null && l.length))
      return k.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
    this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1);
    const m = Kf(h, g), p = Vf(g, h), v = p === null ? r : p;
    (Mg(c, v, r, m) || f.timescale !== c.timescale && a) && (f.initPTS = v - r, c && c.timescale === 1 && k.warn(`Adjusting initPTS by ${f.initPTS - c.baseTime}`), this.initPTS = c = {
      baseTime: f.initPTS,
      timescale: 1
    });
    const b = e ? v - c.baseTime / c.timescale : d, _ = b + m;
    jf(g, h, c.baseTime / c.timescale), m > 0 ? this.lastEndTime = _ : (k.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const E = !!g.audio, T = !!g.video;
    let A = "";
    E && (A += "audio"), T && (A += "video");
    const S = {
      data1: h,
      startPTS: b,
      startDTS: b,
      endPTS: _,
      endDTS: _,
      type: A,
      hasAudio: E,
      hasVideo: T,
      nb: 1,
      dropped: 0
    };
    return u.audio = S.type === "audio" ? S : void 0, u.video = S.type !== "audio" ? S : void 0, u.initSegment = f, u.id3 = Xl(i, r, c, c), s.samples.length && (u.text = Ql(s, r, c)), u;
  }
}
function Mg(n, e, t, i) {
  if (n === null)
    return !0;
  const s = Math.max(i, 1), r = e - n.baseTime / n.timescale;
  return Math.abs(r - t) > s;
}
function za(n, e) {
  const t = n?.codec;
  if (t && t.length > 4)
    return t;
  if (e === Be.AUDIO) {
    if (t === "ec-3" || t === "ac-3" || t === "alac")
      return t;
    if (t === "fLaC" || t === "Opus")
      return Bs(t, !1);
    const i = "mp4a.40.5";
    return k.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${i}"`), i;
  }
  return k.warn(`Unhandled video codec "${t}"`), t === "hvc1" || t === "hev1" ? "hvc1.1.6.L120.90" : t === "av01" ? "av01.0.04M.08" : "avc1.42e01e";
}
let Yt;
try {
  Yt = self.performance.now.bind(self.performance);
} catch {
  k.debug("Unable to use Performance API on this environment"), Yt = ki?.Date.now;
}
const Ls = [{
  demux: Eg,
  remux: Og
}, {
  demux: Zt,
  remux: As
}, {
  demux: yg,
  remux: As
}, {
  demux: wg,
  remux: As
}];
Ls.splice(2, 0, {
  demux: Tg,
  remux: As
});
class qa {
  constructor(e, t, i, s, r) {
    this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = i, this.vendor = s, this.id = r;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, i, s) {
    const r = i.transmuxing;
    r.executeStart = Yt();
    let a = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: l
    } = this;
    s && (this.currentTransmuxState = s);
    const {
      contiguous: c,
      discontinuity: d,
      trackSwitch: u,
      accurateTimeOffset: h,
      timeOffset: f,
      initSegmentChange: g
    } = s || o, {
      audioCodec: m,
      videoCodec: p,
      defaultInitPts: v,
      duration: b,
      initSegmentData: _
    } = l, E = Fg(a, t);
    if (E && E.method === "AES-128") {
      const w = this.getDecrypter();
      if (w.isSync()) {
        let C = w.softwareDecrypt(a, E.key.buffer, E.iv.buffer);
        if (i.part > -1 && (C = w.flush()), !C)
          return r.executeEnd = Yt(), Ar(i);
        a = new Uint8Array(C);
      } else
        return this.decryptionPromise = w.webCryptoDecrypt(a, E.key.buffer, E.iv.buffer).then((C) => {
          const L = this.push(C, null, i);
          return this.decryptionPromise = null, L;
        }), this.decryptionPromise;
    }
    const T = this.needsProbing(d, u);
    if (T) {
      const w = this.configureTransmuxer(a);
      if (w)
        return k.warn(`[transmuxer] ${w.message}`), this.observer.emit(x.ERROR, x.ERROR, {
          type: xe.MEDIA_ERROR,
          details: N.FRAG_PARSING_ERROR,
          fatal: !1,
          error: w,
          reason: w.message
        }), r.executeEnd = Yt(), Ar(i);
    }
    (d || u || g || T) && this.resetInitSegment(_, m, p, b, t), (d || g || T) && this.resetInitialTimestamp(v), c || this.resetContiguity();
    const A = this.transmux(a, E, f, h, i), S = this.currentTransmuxState;
    return S.contiguous = !0, S.discontinuity = !1, S.trackSwitch = !1, r.executeEnd = Yt(), A;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = Yt();
    const {
      decrypter: i,
      currentTransmuxState: s,
      decryptionPromise: r
    } = this;
    if (r)
      return r.then(() => this.flush(e));
    const a = [], {
      timeOffset: o
    } = s;
    if (i) {
      const u = i.flush();
      u && a.push(this.push(u, null, e));
    }
    const {
      demuxer: l,
      remuxer: c
    } = this;
    if (!l || !c)
      return t.executeEnd = Yt(), [Ar(e)];
    const d = l.flush(o);
    return ws(d) ? d.then((u) => (this.flushRemux(a, u, e), a)) : (this.flushRemux(a, d, e), a);
  }
  flushRemux(e, t, i) {
    const {
      audioTrack: s,
      videoTrack: r,
      id3Track: a,
      textTrack: o
    } = t, {
      accurateTimeOffset: l,
      timeOffset: c
    } = this.currentTransmuxState;
    k.log(`[transmuxer.ts]: Flushed fragment ${i.sn}${i.part > -1 ? " p: " + i.part : ""} of level ${i.level}`);
    const d = this.remuxer.remux(s, r, a, o, c, l, !0, this.id);
    e.push({
      remuxResult: d,
      chunkMeta: i
    }), i.transmuxing.executeEnd = Yt();
  }
  resetInitialTimestamp(e) {
    const {
      demuxer: t,
      remuxer: i
    } = this;
    !t || !i || (t.resetTimeStamp(e), i.resetTimeStamp(e));
  }
  resetContiguity() {
    const {
      demuxer: e,
      remuxer: t
    } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, i, s, r) {
    const {
      demuxer: a,
      remuxer: o
    } = this;
    !a || !o || (a.resetInitSegment(e, t, i, s), o.resetInitSegment(e, t, i, r));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(e, t, i, s, r) {
    let a;
    return t && t.method === "SAMPLE-AES" ? a = this.transmuxSampleAes(e, t, i, s, r) : a = this.transmuxUnencrypted(e, i, s, r), a;
  }
  transmuxUnencrypted(e, t, i, s) {
    const {
      audioTrack: r,
      videoTrack: a,
      id3Track: o,
      textTrack: l
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(r, a, o, l, t, i, !1, this.id),
      chunkMeta: s
    };
  }
  transmuxSampleAes(e, t, i, s, r) {
    return this.demuxer.demuxSampleAes(e, t, i).then((a) => ({
      remuxResult: this.remuxer.remux(a.audioTrack, a.videoTrack, a.id3Track, a.textTrack, i, s, !1, this.id),
      chunkMeta: r
    }));
  }
  configureTransmuxer(e) {
    const {
      config: t,
      observer: i,
      typeSupported: s,
      vendor: r
    } = this;
    let a;
    for (let h = 0, f = Ls.length; h < f; h++) {
      var o;
      if ((o = Ls[h].demux) != null && o.probe(e)) {
        a = Ls[h];
        break;
      }
    }
    if (!a)
      return new Error("Failed to find demuxer by probing fragment data");
    const l = this.demuxer, c = this.remuxer, d = a.remux, u = a.demux;
    (!c || !(c instanceof d)) && (this.remuxer = new d(i, t, s, r)), (!l || !(l instanceof u)) && (this.demuxer = new u(i, t, s), this.probe = u.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new _n(this.config)), e;
  }
}
function Fg(n, e) {
  let t = null;
  return n.byteLength > 0 && e?.key != null && e.iv !== null && e.method != null && (t = e), t;
}
const Ar = (n) => ({
  remuxResult: {},
  chunkMeta: n
});
function ws(n) {
  return "then" in n && n.then instanceof Function;
}
class Ng {
  constructor(e, t, i, s, r) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = i, this.duration = s, this.defaultInitPts = r || null;
  }
}
class Bg {
  constructor(e, t, i, s, r, a) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = i, this.trackSwitch = s, this.timeOffset = r, this.initSegmentChange = a;
  }
}
var Zl = { exports: {} };
(function(n) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function i() {
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (t = !1));
  function s(l, c, d) {
    this.fn = l, this.context = c, this.once = d || !1;
  }
  function r(l, c, d, u, h) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var f = new s(d, u || l, h), g = t ? t + c : c;
    return l._events[g] ? l._events[g].fn ? l._events[g] = [l._events[g], f] : l._events[g].push(f) : (l._events[g] = f, l._eventsCount++), l;
  }
  function a(l, c) {
    --l._eventsCount === 0 ? l._events = new i() : delete l._events[c];
  }
  function o() {
    this._events = new i(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var c = [], d, u;
    if (this._eventsCount === 0) return c;
    for (u in d = this._events)
      e.call(d, u) && c.push(t ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(d)) : c;
  }, o.prototype.listeners = function(c) {
    var d = t ? t + c : c, u = this._events[d];
    if (!u) return [];
    if (u.fn) return [u.fn];
    for (var h = 0, f = u.length, g = new Array(f); h < f; h++)
      g[h] = u[h].fn;
    return g;
  }, o.prototype.listenerCount = function(c) {
    var d = t ? t + c : c, u = this._events[d];
    return u ? u.fn ? 1 : u.length : 0;
  }, o.prototype.emit = function(c, d, u, h, f, g) {
    var m = t ? t + c : c;
    if (!this._events[m]) return !1;
    var p = this._events[m], v = arguments.length, b, _;
    if (p.fn) {
      switch (p.once && this.removeListener(c, p.fn, void 0, !0), v) {
        case 1:
          return p.fn.call(p.context), !0;
        case 2:
          return p.fn.call(p.context, d), !0;
        case 3:
          return p.fn.call(p.context, d, u), !0;
        case 4:
          return p.fn.call(p.context, d, u, h), !0;
        case 5:
          return p.fn.call(p.context, d, u, h, f), !0;
        case 6:
          return p.fn.call(p.context, d, u, h, f, g), !0;
      }
      for (_ = 1, b = new Array(v - 1); _ < v; _++)
        b[_ - 1] = arguments[_];
      p.fn.apply(p.context, b);
    } else {
      var E = p.length, T;
      for (_ = 0; _ < E; _++)
        switch (p[_].once && this.removeListener(c, p[_].fn, void 0, !0), v) {
          case 1:
            p[_].fn.call(p[_].context);
            break;
          case 2:
            p[_].fn.call(p[_].context, d);
            break;
          case 3:
            p[_].fn.call(p[_].context, d, u);
            break;
          case 4:
            p[_].fn.call(p[_].context, d, u, h);
            break;
          default:
            if (!b) for (T = 1, b = new Array(v - 1); T < v; T++)
              b[T - 1] = arguments[T];
            p[_].fn.apply(p[_].context, b);
        }
    }
    return !0;
  }, o.prototype.on = function(c, d, u) {
    return r(this, c, d, u, !1);
  }, o.prototype.once = function(c, d, u) {
    return r(this, c, d, u, !0);
  }, o.prototype.removeListener = function(c, d, u, h) {
    var f = t ? t + c : c;
    if (!this._events[f]) return this;
    if (!d)
      return a(this, f), this;
    var g = this._events[f];
    if (g.fn)
      g.fn === d && (!h || g.once) && (!u || g.context === u) && a(this, f);
    else {
      for (var m = 0, p = [], v = g.length; m < v; m++)
        (g[m].fn !== d || h && !g[m].once || u && g[m].context !== u) && p.push(g[m]);
      p.length ? this._events[f] = p.length === 1 ? p[0] : p : a(this, f);
    }
    return this;
  }, o.prototype.removeAllListeners = function(c) {
    var d;
    return c ? (d = t ? t + c : c, this._events[d] && a(this, d)) : (this._events = new i(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, n.exports = o;
})(Zl);
var Ug = Zl.exports, In = /* @__PURE__ */ lf(Ug);
class Jl {
  constructor(e, t, i, s) {
    this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
    const r = e.config;
    this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = i, this.onFlush = s;
    const a = (c, d) => {
      d = d || {}, d.frag = this.frag, d.id = this.id, c === x.ERROR && (this.error = d.error), this.hls.trigger(c, d);
    };
    this.observer = new In(), this.observer.on(x.FRAG_DECRYPTED, a), this.observer.on(x.ERROR, a);
    const o = hi(r.preferManagedMediaSource) || {
      isTypeSupported: () => !1
    }, l = {
      mpeg: o.isTypeSupported("audio/mpeg"),
      mp3: o.isTypeSupported('audio/mp4; codecs="mp3"'),
      ac3: o.isTypeSupported('audio/mp4; codecs="ac-3"')
    };
    if (this.useWorker && typeof Worker < "u" && (r.workerPath || rg())) {
      try {
        r.workerPath ? (k.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = ag(r.workerPath)) : (k.log(`injecting Web Worker for "${t}"`), this.workerContext = ng()), this.onwmsg = (u) => this.onWorkerMessage(u);
        const {
          worker: d
        } = this.workerContext;
        d.addEventListener("message", this.onwmsg), d.onerror = (u) => {
          const h = new Error(`${u.message}  (${u.filename}:${u.lineno})`);
          r.enableWorker = !1, k.warn(`Error in "${t}" Web Worker, fallback to inline`), this.hls.trigger(x.ERROR, {
            type: xe.OTHER_ERROR,
            details: N.INTERNAL_EXCEPTION,
            fatal: !1,
            event: "demuxerWorker",
            error: h
          });
        }, d.postMessage({
          cmd: "init",
          typeSupported: l,
          vendor: "",
          id: t,
          config: JSON.stringify(r)
        });
      } catch (d) {
        k.warn(`Error setting up "${t}" Web Worker, fallback to inline`, d), this.resetWorker(), this.error = null, this.transmuxer = new qa(this.observer, l, r, "", t);
      }
      return;
    }
    this.transmuxer = new qa(this.observer, l, r, "", t);
  }
  resetWorker() {
    if (this.workerContext) {
      const {
        worker: e,
        objectURL: t
      } = this.workerContext;
      t && self.URL.revokeObjectURL(t), e.removeEventListener("message", this.onwmsg), e.onerror = null, e.terminate(), this.workerContext = null;
    }
  }
  destroy() {
    if (this.workerContext)
      this.resetWorker(), this.onwmsg = void 0;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
  }
  push(e, t, i, s, r, a, o, l, c, d) {
    var u, h;
    c.transmuxing.start = self.performance.now();
    const {
      transmuxer: f
    } = this, g = a ? a.start : r.start, m = r.decryptdata, p = this.frag, v = !(p && r.cc === p.cc), b = !(p && c.level === p.level), _ = p ? c.sn - p.sn : -1, E = this.part ? c.part - this.part.index : -1, T = _ === 0 && c.id > 1 && c.id === p?.stats.chunkCount, A = !b && (_ === 1 || _ === 0 && (E === 1 || T && E <= 0)), S = self.performance.now();
    (b || _ || r.stats.parsing.start === 0) && (r.stats.parsing.start = S), a && (E || !A) && (a.stats.parsing.start = S);
    const w = !(p && ((u = r.initSegment) == null ? void 0 : u.url) === ((h = p.initSegment) == null ? void 0 : h.url)), C = new Bg(v, A, l, b, g, w);
    if (!A || v || w) {
      k.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
        discontinuity: ${v}
        trackSwitch: ${b}
        contiguous: ${A}
        accurateTimeOffset: ${l}
        timeOffset: ${g}
        initSegmentChange: ${w}`);
      const L = new Ng(i, s, t, o, d);
      this.configureTransmuxer(L);
    }
    if (this.frag = r, this.part = a, this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "demux",
        data: e,
        decryptdata: m,
        chunkMeta: c,
        state: C
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (f) {
      const L = f.push(e, m, c, C);
      ws(L) ? (f.async = !0, L.then((I) => {
        this.handleTransmuxComplete(I);
      }).catch((I) => {
        this.transmuxerError(I, c, "transmuxer-interface push error");
      })) : (f.async = !1, this.handleTransmuxComplete(L));
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      transmuxer: t
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "flush",
        chunkMeta: e
      });
    else if (t) {
      let i = t.flush(e);
      ws(i) || t.async ? (ws(i) || (i = Promise.resolve(i)), i.then((r) => {
        this.handleFlushResult(r, e);
      }).catch((r) => {
        this.transmuxerError(r, e, "transmuxer-interface flush error");
      })) : this.handleFlushResult(i, e);
    }
  }
  transmuxerError(e, t, i) {
    this.hls && (this.error = e, this.hls.trigger(x.ERROR, {
      type: xe.MEDIA_ERROR,
      details: N.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || void 0,
      fatal: !1,
      error: e,
      err: e,
      reason: i
    }));
  }
  handleFlushResult(e, t) {
    e.forEach((i) => {
      this.handleTransmuxComplete(i);
    }), this.onFlush(t);
  }
  onWorkerMessage(e) {
    const t = e.data;
    if (!(t != null && t.event)) {
      k.warn(`worker message received with no ${t ? "event name" : "data"}`);
      return;
    }
    const i = this.hls;
    if (this.hls)
      switch (t.event) {
        case "init": {
          var s;
          const r = (s = this.workerContext) == null ? void 0 : s.objectURL;
          r && self.URL.revokeObjectURL(r);
          break;
        }
        case "transmuxComplete": {
          this.handleTransmuxComplete(t.data);
          break;
        }
        case "flush": {
          this.onFlush(t.data);
          break;
        }
        // pass logs from the worker thread to the main logger
        case "workerLog":
          k[t.data.logType] && k[t.data.logType](t.data.message);
          break;
        default: {
          t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, i.trigger(t.event, t.data);
          break;
        }
      }
  }
  configureTransmuxer(e) {
    const {
      transmuxer: t
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      cmd: "configure",
      config: e
    }) : t && t.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
function $l(n, e) {
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!Oi(n[t].attrs, e[t].attrs))
      return !1;
  return !0;
}
function Oi(n, e, t) {
  const i = n["STABLE-RENDITION-ID"];
  return i && !t ? i === e["STABLE-RENDITION-ID"] : !(t || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((s) => n[s] !== e[s]);
}
function tn(n, e) {
  return e.label.toLowerCase() === n.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (n.lang || "").toLowerCase());
}
const Xa = 100;
class Gg extends Sn {
  constructor(e, t, i) {
    super(e, t, i, "[audio-stream-controller]", pe.AUDIO), this.videoBuffer = null, this.videoTrackCC = -1, this.waitingVideoCC = -1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.LEVEL_LOADED, this.onLevelLoaded, this), e.on(x.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(x.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(x.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(x.ERROR, this.onError, this), e.on(x.BUFFER_RESET, this.onBufferReset, this), e.on(x.BUFFER_CREATED, this.onBufferCreated, this), e.on(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(x.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(x.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.LEVEL_LOADED, this.onLevelLoaded, this), e.off(x.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(x.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(x.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(x.ERROR, this.onError, this), e.off(x.BUFFER_RESET, this.onBufferReset, this), e.off(x.BUFFER_CREATED, this.onBufferCreated, this), e.off(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(x.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(x.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(e, {
    frag: t,
    id: i,
    initPTS: s,
    timescale: r
  }) {
    if (i === "main") {
      const a = t.cc;
      this.initPTS[t.cc] = {
        baseTime: s,
        timescale: r
      }, this.log(`InitPTS for cc: ${a} found from main: ${s}`), this.videoTrackCC = a, this.state === V.WAITING_INIT_PTS && this.tick();
    }
  }
  startLoad(e) {
    if (!this.levels) {
      this.startPosition = e, this.state = V.STOPPED;
      return;
    }
    const t = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(Xa), t > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t, this.state = V.IDLE) : (this.loadedmetadata = !1, this.state = V.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
  }
  doTick() {
    switch (this.state) {
      case V.IDLE:
        this.doTickIdle();
        break;
      case V.WAITING_TRACK: {
        var e;
        const {
          levels: i,
          trackId: s
        } = this, r = i == null || (e = i[s]) == null ? void 0 : e.details;
        if (r) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = V.WAITING_INIT_PTS;
        }
        break;
      }
      case V.FRAG_LOADING_WAITING_RETRY: {
        var t;
        const i = performance.now(), s = this.retryDate;
        if (!s || i >= s || (t = this.media) != null && t.seeking) {
          const {
            levels: r,
            trackId: a
          } = this;
          this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(r?.[a] || null), this.state = V.IDLE;
        }
        break;
      }
      case V.WAITING_INIT_PTS: {
        const i = this.waitingData;
        if (i) {
          const {
            frag: s,
            part: r,
            cache: a,
            complete: o
          } = i;
          if (this.initPTS[s.cc] !== void 0) {
            this.waitingData = null, this.waitingVideoCC = -1, this.state = V.FRAG_LOADING;
            const l = a.flush(), c = {
              frag: s,
              part: r,
              payload: l,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(c), o && super._handleFragmentLoadComplete(c);
          } else if (this.videoTrackCC !== this.waitingVideoCC)
            this.log(`Waiting fragment cc (${s.cc}) cancelled because video is at cc ${this.videoTrackCC}`), this.clearWaitingFragment();
          else {
            const l = this.getLoadPosition(), c = Ke.bufferInfo(this.mediaBuffer, l, this.config.maxBufferHole);
            $r(c.end, this.config.maxFragLookUpTolerance, s) < 0 && (this.log(`Waiting fragment cc (${s.cc}) @ ${s.start} cancelled because another fragment at ${c.end} is needed`), this.clearWaitingFragment());
          }
        } else
          this.state = V.IDLE;
      }
    }
    this.onTickEnd();
  }
  clearWaitingFragment() {
    const e = this.waitingData;
    e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = V.IDLE);
  }
  resetLoadingState() {
    this.clearWaitingFragment(), super.resetLoadingState();
  }
  onTickEnd() {
    const {
      media: e
    } = this;
    e != null && e.readyState && (this.lastCurrentTime = e.currentTime);
  }
  doTickIdle() {
    const {
      hls: e,
      levels: t,
      media: i,
      trackId: s
    } = this, r = e.config;
    if (!i && (this.startFragRequested || !r.startFragPrefetch) || !(t != null && t[s]))
      return;
    const a = t[s], o = a.details;
    if (!o || o.live && this.levelLastLoaded !== a || this.waitForCdnTuneIn(o)) {
      this.state = V.WAITING_TRACK;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, Be.AUDIO, pe.AUDIO));
    const c = this.getFwdBufferInfo(l, pe.AUDIO);
    if (c === null)
      return;
    const {
      bufferedTrack: d,
      switchingTrack: u
    } = this;
    if (!u && this._streamEnded(c, o)) {
      e.trigger(x.BUFFER_EOS, {
        type: "audio"
      }), this.state = V.ENDED;
      return;
    }
    const h = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, pe.MAIN), f = c.len, g = this.getMaxBufferLength(h?.len), m = o.fragments, p = m[0].start;
    let v = this.flushing ? this.getLoadPosition() : c.end;
    if (u && i) {
      const T = this.getLoadPosition();
      d && !Oi(u.attrs, d.attrs) && (v = T), o.PTSKnown && T < p && (c.end > p || c.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), i.currentTime = p + 0.05);
    }
    if (f >= g && !u && v < m[m.length - 1].start)
      return;
    let b = this.getNextFragment(v, o), _ = !1;
    if (b && this.isLoopLoading(b, v) && (_ = !!b.gap, b = this.getNextFragmentLoopLoading(b, o, c, pe.MAIN, g)), !b) {
      this.bufferFlushed = !0;
      return;
    }
    const E = h && b.start > h.end + o.targetduration;
    if (E || // Or wait for main buffer after buffing some audio
    !(h != null && h.len) && c.len) {
      const T = this.getAppendedFrag(b.start, pe.MAIN);
      if (T === null || (_ || (_ = !!T.gap || !!E && h.len === 0), E && !_ || _ && c.nextStart && c.nextStart < T.end))
        return;
    }
    this.loadFragment(b, a, v);
  }
  getMaxBufferLength(e) {
    const t = super.getMaxBufferLength();
    return e ? Math.min(Math.max(t, e), this.config.maxMaxBufferLength) : t;
  }
  onMediaDetaching() {
    this.videoBuffer = null, this.bufferFlushed = this.flushing = !1, super.onMediaDetaching();
  }
  onAudioTracksUpdated(e, {
    audioTracks: t
  }) {
    this.resetTransmuxer(), this.levels = t.map((i) => new Pi(i));
  }
  onAudioTrackSwitching(e, t) {
    const i = !!t.url;
    this.trackId = t.id;
    const {
      fragCurrent: s
    } = this;
    s && (s.abortRequests(), this.removeUnbufferedFrags(s.start)), this.resetLoadingState(), i ? this.setInterval(Xa) : this.resetTransmuxer(), i ? (this.switchingTrack = t, this.state = V.IDLE, this.flushAudioIfNeeded(t)) : (this.switchingTrack = null, this.bufferedTrack = t, this.state = V.STOPPED), this.tick();
  }
  onManifestLoading() {
    this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = this.flushing = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1;
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details, this.cachedTrackLoadedData !== null && (this.hls.trigger(x.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null);
  }
  onAudioTrackLoaded(e, t) {
    var i;
    if (this.mainDetails == null) {
      this.cachedTrackLoadedData = t;
      return;
    }
    const {
      levels: s
    } = this, {
      details: r,
      id: a
    } = t;
    if (!s) {
      this.warn(`Audio tracks were reset while loading level ${a}`);
      return;
    }
    this.log(`Audio track ${a} loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""},duration:${r.totalduration}`);
    const o = s[a];
    let l = 0;
    if (r.live || (i = o.details) != null && i.live) {
      this.checkLiveUpdate(r);
      const d = this.mainDetails;
      if (r.deltaUpdateFailed || !d)
        return;
      if (!o.details && r.hasProgramDateTime && d.hasProgramDateTime)
        Ks(r, d), l = r.fragments[0].start;
      else {
        var c;
        l = this.alignPlaylists(r, o.details, (c = this.levelLastLoaded) == null ? void 0 : c.details);
      }
    }
    o.details = r, this.levelLastLoaded = o, !this.startFragRequested && (this.mainDetails || !r.live) && this.setStartPosition(this.mainDetails || r, l), this.state === V.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = V.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const {
      frag: i,
      part: s,
      payload: r
    } = e, {
      config: a,
      trackId: o,
      levels: l
    } = this;
    if (!l) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`);
      return;
    }
    const c = l[o];
    if (!c) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const d = c.details;
    if (!d) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(i.start);
      return;
    }
    const u = a.defaultAudioCodec || c.audioCodec || "mp4a.40.2";
    let h = this.transmuxer;
    h || (h = this.transmuxer = new Jl(this.hls, pe.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const f = this.initPTS[i.cc], g = (t = i.initSegment) == null ? void 0 : t.data;
    if (f !== void 0) {
      const p = s ? s.index : -1, v = p !== -1, b = new bn(i.level, i.sn, i.stats.chunkCount, r.byteLength, p, v);
      h.push(r, g, u, "", i, s, d.totalduration, !1, b, f);
    } else {
      this.log(`Unknown video PTS for cc ${i.cc}, waiting for video PTS before demuxing audio frag ${i.sn} of [${d.startSN} ,${d.endSN}],track ${o}`);
      const {
        cache: m
      } = this.waitingData = this.waitingData || {
        frag: i,
        part: s,
        cache: new Fl(),
        complete: !1
      };
      m.push(new Uint8Array(r)), this.waitingVideoCC = this.videoTrackCC, this.state = V.WAITING_INIT_PTS;
    }
  }
  _handleFragmentLoadComplete(e) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(e);
  }
  onBufferReset() {
    this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1;
  }
  onBufferCreated(e, t) {
    const i = t.tracks.audio;
    i && (this.mediaBuffer = i.buffer || null), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer || null);
  }
  onFragBuffered(e, t) {
    const {
      frag: i,
      part: s
    } = t;
    if (i.type !== pe.AUDIO) {
      if (!this.loadedmetadata && i.type === pe.MAIN) {
        const r = this.videoBuffer || this.media;
        r && Ke.getBuffered(r).length && (this.loadedmetadata = !0);
      }
      return;
    }
    if (this.fragContextChanged(i)) {
      this.warn(`Fragment ${i.sn}${s ? " p: " + s.index : ""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (i.sn !== "initSegment") {
      this.fragPrevious = i;
      const r = this.switchingTrack;
      r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(x.AUDIO_TRACK_SWITCHED, ot({}, r)));
    }
    this.fragBufferedComplete(i, s);
  }
  onError(e, t) {
    var i;
    if (t.fatal) {
      this.state = V.ERROR;
      return;
    }
    switch (t.details) {
      case N.FRAG_GAP:
      case N.FRAG_PARSING_ERROR:
      case N.FRAG_DECRYPT_ERROR:
      case N.FRAG_LOAD_ERROR:
      case N.FRAG_LOAD_TIMEOUT:
      case N.KEY_LOAD_ERROR:
      case N.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(pe.AUDIO, t);
        break;
      case N.AUDIO_TRACK_LOAD_ERROR:
      case N.AUDIO_TRACK_LOAD_TIMEOUT:
      case N.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === V.WAITING_TRACK && ((i = t.context) == null ? void 0 : i.type) === Me.AUDIO_TRACK && (this.state = V.IDLE);
        break;
      case N.BUFFER_APPEND_ERROR:
      case N.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "audio")
          return;
        if (t.details === N.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case N.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushing(e, {
    type: t
  }) {
    t !== Be.VIDEO && (this.flushing = !0);
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== Be.VIDEO) {
      this.flushing = !1, this.bufferFlushed = !0, this.state === V.ENDED && (this.state = V.IDLE);
      const i = this.mediaBuffer || this.media;
      i && (this.afterBufferFlushed(i, t, pe.AUDIO), this.tick());
    }
  }
  _handleTransmuxComplete(e) {
    var t;
    const i = "audio", {
      hls: s
    } = this, {
      remuxResult: r,
      chunkMeta: a
    } = e, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: l,
      part: c,
      level: d
    } = o, {
      details: u
    } = d, {
      audio: h,
      text: f,
      id3: g,
      initSegment: m
    } = r;
    if (this.fragContextChanged(l) || !u) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = V.PARSING, this.switchingTrack && h && this.completeAudioSwitch(this.switchingTrack), m != null && m.tracks) {
      const p = l.initSegment || l;
      this._bufferInitSegment(d, m.tracks, p, a), s.trigger(x.FRAG_PARSING_INIT_SEGMENT, {
        frag: p,
        id: i,
        tracks: m.tracks
      });
    }
    if (h) {
      const {
        startPTS: p,
        endPTS: v,
        startDTS: b,
        endDTS: _
      } = h;
      c && (c.elementaryStreams[Be.AUDIO] = {
        startPTS: p,
        endPTS: v,
        startDTS: b,
        endDTS: _
      }), l.setElementaryStreamInfo(Be.AUDIO, p, v, b, _), this.bufferFragmentData(h, l, c, a);
    }
    if (g != null && (t = g.samples) != null && t.length) {
      const p = it({
        id: i,
        frag: l,
        details: u
      }, g);
      s.trigger(x.FRAG_PARSING_METADATA, p);
    }
    if (f) {
      const p = it({
        id: i,
        frag: l,
        details: u
      }, f);
      s.trigger(x.FRAG_PARSING_USERDATA, p);
    }
  }
  _bufferInitSegment(e, t, i, s) {
    if (this.state !== V.PARSING)
      return;
    t.video && delete t.video;
    const r = t.audio;
    if (!r)
      return;
    r.id = "audio";
    const a = e.audioCodec;
    this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${a}/${r.codec}]`), a && a.split(",").length === 1 && (r.levelCodec = a), this.hls.trigger(x.BUFFER_CODECS, t);
    const o = r.initSegment;
    if (o != null && o.byteLength) {
      const l = {
        type: "audio",
        frag: i,
        part: null,
        chunkMeta: s,
        parent: i.type,
        data: o
      };
      this.hls.trigger(x.BUFFER_APPENDING, l);
    }
    this.tickImmediate();
  }
  loadFragment(e, t, i) {
    const s = this.fragmentTracker.getState(e);
    if (this.fragCurrent = e, this.switchingTrack || s === at.NOT_LOADED || s === at.PARTIAL) {
      var r;
      if (e.sn === "initSegment")
        this._loadInitSegment(e, t);
      else if ((r = t.details) != null && r.live && !this.initPTS[e.cc]) {
        this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = V.WAITING_INIT_PTS;
        const a = this.mainDetails;
        a && a.fragments[0].start !== t.details.fragments[0].start && Ks(t.details, a);
      } else
        this.startFragRequested = !0, super.loadFragment(e, t, i);
    } else
      this.clearTrackerIfNeeded(e);
  }
  flushAudioIfNeeded(e) {
    const {
      media: t,
      bufferedTrack: i
    } = this, s = i?.attrs, r = e.attrs;
    t && s && (s.CHANNELS !== r.CHANNELS || i.name !== e.name || i.lang !== e.lang) && (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null);
  }
  completeAudioSwitch(e) {
    const {
      hls: t
    } = this;
    this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(x.AUDIO_TRACK_SWITCHED, ot({}, e));
  }
}
class Hg extends Tn {
  constructor(e) {
    super(e, "[audio-track-controller]"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.LEVEL_LOADING, this.onLevelLoading, this), e.on(x.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(x.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(x.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.LEVEL_LOADING, this.onLevelLoading, this), e.off(x.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(x.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(x.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
  }
  onManifestLoading() {
    this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0;
  }
  onManifestParsed(e, t) {
    this.tracks = t.audioTracks || [];
  }
  onAudioTrackLoaded(e, t) {
    const {
      id: i,
      groupId: s,
      details: r
    } = t, a = this.tracksInGroup[i];
    if (!a || a.groupId !== s) {
      this.warn(`Audio track with id:${i} and group:${s} not found in active group ${a?.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Audio track ${i} "${a.name}" lang:${a.lang} group:${s} loaded [${r.startSN}-${r.endSN}]`), i === this.trackId && this.playlistLoaded(i, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const i = t.audioGroups || null, s = this.groupIds;
    let r = this.currentTrack;
    if (!i || s?.length !== i?.length || i != null && i.some((o) => s?.indexOf(o) === -1)) {
      this.groupIds = i, this.trackId = -1, this.currentTrack = null;
      const o = this.tracks.filter((h) => !i || i.indexOf(h.groupId) !== -1);
      if (o.length)
        this.selectDefaultTrack && !o.some((h) => h.default) && (this.selectDefaultTrack = !1), o.forEach((h, f) => {
          h.id = f;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = o;
      const l = this.hls.config.audioPreference;
      if (!r && l) {
        const h = Bt(l, o, xi);
        if (h > -1)
          r = o[h];
        else {
          const f = Bt(l, this.tracks);
          r = this.tracks[f];
        }
      }
      let c = this.findTrackId(r);
      c === -1 && r && (c = this.findTrackId(null));
      const d = {
        audioTracks: o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${i?.join(",")}`), this.hls.trigger(x.AUDIO_TRACKS_UPDATED, d);
      const u = this.trackId;
      if (c !== -1 && u === -1)
        this.setAudioTrack(c);
      else if (o.length && u === -1) {
        var a;
        const h = new Error(`No audio track selected for current audio group-ID(s): ${(a = this.groupIds) == null ? void 0 : a.join(",")} track count: ${o.length}`);
        this.warn(h.message), this.hls.trigger(x.ERROR, {
          type: xe.MEDIA_ERROR,
          details: N.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: h
        });
      }
    } else this.shouldReloadPlaylist(r) && this.setAudioTrack(this.trackId);
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Me.AUDIO_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && (this.requestScheduled = -1, this.checkRetry(t));
  }
  get allAudioTracks() {
    return this.tracks;
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(e) {
    this.selectDefaultTrack = !1, this.setAudioTrack(e);
  }
  setAudioOption(e) {
    const t = this.hls;
    if (t.config.audioPreference = e, e) {
      const i = this.allAudioTracks;
      if (this.selectDefaultTrack = !1, i.length) {
        const s = this.currentTrack;
        if (s && wi(e, s, xi))
          return s;
        const r = Bt(e, this.tracksInGroup, xi);
        if (r > -1) {
          const a = this.tracksInGroup[r];
          return this.setAudioTrack(r), a;
        } else if (s) {
          let a = t.loadLevel;
          a === -1 && (a = t.firstAutoLevel);
          const o = H0(e, t.levels, i, a, xi);
          if (o === -1)
            return null;
          t.nextLoadLevel = o;
        }
        if (e.channels || e.audioCodec) {
          const a = Bt(e, i);
          if (a > -1)
            return i[a];
        }
      }
    }
    return null;
  }
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn(`Invalid audio track id: ${e}`);
      return;
    }
    this.clearTimer(), this.selectDefaultTrack = !1;
    const i = this.currentTrack, s = t[e], r = s.details && !s.details.live;
    if (e === this.trackId && s === i && r || (this.log(`Switching to audio-track ${e} "${s.name}" lang:${s.lang} group:${s.groupId} channels:${s.channels}`), this.trackId = e, this.currentTrack = s, this.hls.trigger(x.AUDIO_TRACK_SWITCHING, ot({}, s)), r))
      return;
    const a = this.switchParams(s.url, i?.details, s.details);
    this.loadPlaylist(a);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      if (!(this.selectDefaultTrack && !s.default) && (!e || wi(e, s, xi)))
        return i;
    }
    if (e) {
      const {
        name: i,
        lang: s,
        assocLang: r,
        characteristics: a,
        audioCodec: o,
        channels: l
      } = e;
      for (let c = 0; c < t.length; c++) {
        const d = t[c];
        if (wi({
          name: i,
          lang: s,
          assocLang: r,
          characteristics: a,
          audioCodec: o,
          channels: l
        }, d, xi))
          return c;
      }
      for (let c = 0; c < t.length; c++) {
        const d = t[c];
        if (Oi(e.attrs, d.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return c;
      }
      for (let c = 0; c < t.length; c++) {
        const d = t[c];
        if (Oi(e.attrs, d.attrs, ["LANGUAGE"]))
          return c;
      }
    }
    return -1;
  }
  loadPlaylist(e) {
    const t = this.currentTrack;
    if (this.shouldLoadPlaylist(t) && t) {
      super.loadPlaylist();
      const i = t.id, s = t.groupId;
      let r = t.url;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      this.log(`loading audio-track playlist ${i} "${t.name}" lang:${t.lang} group:${s}`), this.clearTimer(), this.hls.trigger(x.AUDIO_TRACK_LOADING, {
        url: r,
        id: i,
        groupId: s,
        deliveryDirectives: e || null
      });
    }
  }
}
const Qa = 500;
class Vg extends Sn {
  constructor(e, t, i) {
    super(e, t, i, "[subtitle-stream-controller]", pe.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.LEVEL_LOADED, this.onLevelLoaded, this), e.on(x.ERROR, this.onError, this), e.on(x.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(x.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(x.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(x.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.LEVEL_LOADED, this.onLevelLoaded, this), e.off(x.ERROR, this.onError, this), e.off(x.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(x.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(x.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(x.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  startLoad(e) {
    this.stopLoad(), this.state = V.IDLE, this.setInterval(Qa), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
  }
  onManifestLoading() {
    this.mainDetails = null, this.fragmentTracker.removeAllFragments();
  }
  onMediaDetaching() {
    this.tracksBuffered = [], super.onMediaDetaching();
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const {
      frag: i,
      success: s
    } = t;
    if (this.fragPrevious = i, this.state = V.IDLE, !s)
      return;
    const r = this.tracksBuffered[this.currentTrackId];
    if (!r)
      return;
    let a;
    const o = i.start;
    for (let c = 0; c < r.length; c++)
      if (o >= r[c].start && o <= r[c].end) {
        a = r[c];
        break;
      }
    const l = i.start + i.duration;
    a ? a.end = l : (a = {
      start: o,
      end: l
    }, r.push(a)), this.fragmentTracker.fragBuffered(i), this.fragBufferedComplete(i, null);
  }
  onBufferFlushing(e, t) {
    const {
      startOffset: i,
      endOffset: s
    } = t;
    if (i === 0 && s !== Number.POSITIVE_INFINITY) {
      const r = s - 1;
      if (r <= 0)
        return;
      t.endOffsetSubtitles = Math.max(0, r), this.tracksBuffered.forEach((a) => {
        for (let o = 0; o < a.length; ) {
          if (a[o].end <= r) {
            a.shift();
            continue;
          } else if (a[o].start < r)
            a[o].start = r;
          else
            break;
          o++;
        }
      }), this.fragmentTracker.removeFragmentsInRange(i, r, pe.SUBTITLE);
    }
  }
  onFragBuffered(e, t) {
    if (!this.loadedmetadata && t.frag.type === pe.MAIN) {
      var i;
      (i = this.media) != null && i.buffered.length && (this.loadedmetadata = !0);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(e, t) {
    const i = t.frag;
    i?.type === pe.SUBTITLE && (t.details === N.FRAG_GAP && this.fragmentTracker.fragBuffered(i, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== V.STOPPED && (this.state = V.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(e, {
    subtitleTracks: t
  }) {
    if (this.levels && $l(this.levels, t)) {
      this.levels = t.map((i) => new Pi(i));
      return;
    }
    this.tracksBuffered = [], this.levels = t.map((i) => {
      const s = new Pi(i);
      return this.tracksBuffered[s.id] = [], s;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, pe.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(e, t) {
    var i;
    if (this.currentTrackId = t.id, !((i = this.levels) != null && i.length) || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const s = this.levels[this.currentTrackId];
    s != null && s.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, s && this.setInterval(Qa);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(e, t) {
    var i;
    const {
      currentTrackId: s,
      levels: r
    } = this, {
      details: a,
      id: o
    } = t;
    if (!r) {
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return;
    }
    const l = r[o];
    if (o >= r.length || !l)
      return;
    this.log(`Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
    let c = 0;
    if (a.live || (i = l.details) != null && i.live) {
      const u = this.mainDetails;
      if (a.deltaUpdateFailed || !u)
        return;
      const h = u.fragments[0];
      if (!l.details)
        a.hasProgramDateTime && u.hasProgramDateTime ? (Ks(a, u), c = a.fragments[0].start) : h && (c = h.start, Jr(a, c));
      else {
        var d;
        c = this.alignPlaylists(a, l.details, (d = this.levelLastLoaded) == null ? void 0 : d.details), c === 0 && h && (c = h.start, Jr(a, c));
      }
    }
    l.details = a, this.levelLastLoaded = l, o === s && (!this.startFragRequested && (this.mainDetails || !a.live) && this.setStartPosition(this.mainDetails || a, c), this.tick(), a.live && !this.fragCurrent && this.media && this.state === V.IDLE && (Vs(null, a.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0)));
  }
  _handleFragmentLoadComplete(e) {
    const {
      frag: t,
      payload: i
    } = e, s = t.decryptdata, r = this.hls;
    if (!this.fragContextChanged(t) && i && i.byteLength > 0 && s != null && s.key && s.iv && s.method === "AES-128") {
      const a = performance.now();
      this.decrypter.decrypt(new Uint8Array(i), s.key.buffer, s.iv.buffer).catch((o) => {
        throw r.trigger(x.ERROR, {
          type: xe.MEDIA_ERROR,
          details: N.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: t
        }), o;
      }).then((o) => {
        const l = performance.now();
        r.trigger(x.FRAG_DECRYPTED, {
          frag: t,
          payload: o,
          stats: {
            tstart: a,
            tdecrypt: l
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = V.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = V.IDLE;
      return;
    }
    if (this.state === V.IDLE) {
      const {
        currentTrackId: e,
        levels: t
      } = this, i = t?.[e];
      if (!i || !t.length || !i.details)
        return;
      const {
        config: s
      } = this, r = this.getLoadPosition(), a = Ke.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, s.maxBufferHole), {
        end: o,
        len: l
      } = a, c = this.getFwdBufferInfo(this.media, pe.MAIN), d = i.details, u = this.getMaxBufferLength(c?.len) + d.levelTargetDuration;
      if (l > u)
        return;
      const h = d.fragments, f = h.length, g = d.edge;
      let m = null;
      const p = this.fragPrevious;
      if (o < g) {
        const v = s.maxFragLookUpTolerance, b = o > g - v ? 0 : v;
        m = Vs(p, h, Math.max(h[0].start, o), b), !m && p && p.start < h[0].start && (m = h[0]);
      } else
        m = h[f - 1];
      if (!m)
        return;
      if (m = this.mapToInitFragWhenRequired(m), m.sn !== "initSegment") {
        const v = m.sn - d.startSN, b = h[v - 1];
        b && b.cc === m.cc && this.fragmentTracker.getState(b) === at.NOT_LOADED && (m = b);
      }
      this.fragmentTracker.getState(m) === at.NOT_LOADED && this.loadFragment(m, i, o);
    }
  }
  getMaxBufferLength(e) {
    const t = super.getMaxBufferLength();
    return e ? Math.max(t, e) : t;
  }
  loadFragment(e, t, i) {
    this.fragCurrent = e, e.sn === "initSegment" ? this._loadInitSegment(e, t) : (this.startFragRequested = !0, super.loadFragment(e, t, i));
  }
  get mediaBufferTimeRanges() {
    return new Kg(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class Kg {
  constructor(e) {
    this.buffered = void 0;
    const t = (i, s, r) => {
      if (s = s >>> 0, s > r - 1)
        throw new DOMException(`Failed to execute '${i}' on 'TimeRanges': The index provided (${s}) is greater than the maximum bound (${r})`);
      return e[s][i];
    };
    this.buffered = {
      get length() {
        return e.length;
      },
      end(i) {
        return t("end", i, e.length);
      },
      start(i) {
        return t("start", i, e.length);
      }
    };
  }
}
class Wg extends Tn {
  constructor(e) {
    super(e, "[subtitle-track-controller]"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.onTextTracksChanged = () => {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return;
      let t = null;
      const i = bs(this.media.textTracks);
      for (let r = 0; r < i.length; r++)
        if (i[r].mode === "hidden")
          t = i[r];
        else if (i[r].mode === "showing") {
          t = i[r];
          break;
        }
      const s = this.findTrackForTextTrack(t);
      this.subtitleTrack !== s && this.setSubtitleTrack(s);
    }, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.LEVEL_LOADING, this.onLevelLoading, this), e.on(x.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(x.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(x.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.LEVEL_LOADING, this.onLevelLoading, this), e.off(x.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(x.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(x.ERROR, this.onError, this);
  }
  // Listen for subtitle track change, then extract the current track ID.
  onMediaAttached(e, t) {
    this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
  }
  pollTrackChange(e) {
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e);
  }
  onMediaDetaching() {
    if (!this.media)
      return;
    self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), bs(this.media.textTracks).forEach((t) => {
      Si(t);
    }), this.subtitleTrack = -1, this.media = null;
  }
  onManifestLoading() {
    this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const {
      id: i,
      groupId: s,
      details: r
    } = t, a = this.tracksInGroup[i];
    if (!a || a.groupId !== s) {
      this.warn(`Subtitle track with id:${i} and group:${s} not found in active group ${a?.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Subtitle track ${i} "${a.name}" lang:${a.lang} group:${s} loaded [${r.startSN}-${r.endSN}]`), i === this.trackId && this.playlistLoaded(i, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const i = t.subtitleGroups || null, s = this.groupIds;
    let r = this.currentTrack;
    if (!i || s?.length !== i?.length || i != null && i.some((a) => s?.indexOf(a) === -1)) {
      this.groupIds = i, this.trackId = -1, this.currentTrack = null;
      const a = this.tracks.filter((d) => !i || i.indexOf(d.groupId) !== -1);
      if (a.length)
        this.selectDefaultTrack && !a.some((d) => d.default) && (this.selectDefaultTrack = !1), a.forEach((d, u) => {
          d.id = u;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = a;
      const o = this.hls.config.subtitlePreference;
      if (!r && o) {
        this.selectDefaultTrack = !1;
        const d = Bt(o, a);
        if (d > -1)
          r = a[d];
        else {
          const u = Bt(o, this.tracks);
          r = this.tracks[u];
        }
      }
      let l = this.findTrackId(r);
      l === -1 && r && (l = this.findTrackId(null));
      const c = {
        subtitleTracks: a
      };
      this.log(`Updating subtitle tracks, ${a.length} track(s) found in "${i?.join(",")}" group-id`), this.hls.trigger(x.SUBTITLE_TRACKS_UPDATED, c), l !== -1 && this.trackId === -1 && this.setSubtitleTrack(l);
    } else this.shouldReloadPlaylist(r) && this.setSubtitleTrack(this.trackId);
  }
  findTrackId(e) {
    const t = this.tracksInGroup, i = this.selectDefaultTrack;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      if (!(i && !r.default || !i && !e) && (!e || wi(r, e)))
        return s;
    }
    if (e) {
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        if (Oi(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return s;
      }
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        if (Oi(e.attrs, r.attrs, ["LANGUAGE"]))
          return s;
      }
    }
    return -1;
  }
  findTrackForTextTrack(e) {
    if (e) {
      const t = this.tracksInGroup;
      for (let i = 0; i < t.length; i++) {
        const s = t[i];
        if (tn(s, e))
          return i;
      }
    }
    return -1;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Me.SUBTITLE_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allSubtitleTracks() {
    return this.tracks;
  }
  /** get alternate subtitle tracks list from playlist **/
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(e) {
    this.selectDefaultTrack = !1, this.setSubtitleTrack(e);
  }
  setSubtitleOption(e) {
    if (this.hls.config.subtitlePreference = e, e) {
      const t = this.allSubtitleTracks;
      if (this.selectDefaultTrack = !1, t.length) {
        const i = this.currentTrack;
        if (i && wi(e, i))
          return i;
        const s = Bt(e, this.tracksInGroup);
        if (s > -1) {
          const r = this.tracksInGroup[s];
          return this.setSubtitleTrack(s), r;
        } else {
          if (i)
            return null;
          {
            const r = Bt(e, t);
            if (r > -1)
              return t[r];
          }
        }
      }
    }
    return null;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentTrack;
    if (this.shouldLoadPlaylist(t) && t) {
      const i = t.id, s = t.groupId;
      let r = t.url;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      this.log(`Loading subtitle playlist for id ${i}`), this.hls.trigger(x.SUBTITLE_TRACK_LOADING, {
        url: r,
        id: i,
        groupId: s,
        deliveryDirectives: e || null
      });
    }
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = bs(e.textTracks), i = this.currentTrack;
    let s;
    if (i && (s = t.filter((r) => tn(i, r))[0], s || this.warn(`Unable to find subtitle TextTrack with name "${i.name}" and language "${i.lang}"`)), [].slice.call(t).forEach((r) => {
      r.mode !== "disabled" && r !== s && (r.mode = "disabled");
    }), s) {
      const r = this.subtitleDisplay ? "showing" : "hidden";
      s.mode !== r && (s.mode = r);
    }
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(e) {
    const t = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (e < -1 || e >= t.length || !ae(e)) {
      this.warn(`Invalid subtitle track id: ${e}`);
      return;
    }
    this.clearTimer(), this.selectDefaultTrack = !1;
    const i = this.currentTrack, s = t[e] || null;
    if (this.trackId = e, this.currentTrack = s, this.toggleTrackModes(), !s) {
      this.hls.trigger(x.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
      return;
    }
    const r = !!s.details && !s.details.live;
    if (e === this.trackId && s === i && r)
      return;
    this.log(`Switching to subtitle-track ${e}` + (s ? ` "${s.name}" lang:${s.lang} group:${s.groupId}` : ""));
    const {
      id: a,
      groupId: o = "",
      name: l,
      type: c,
      url: d
    } = s;
    this.hls.trigger(x.SUBTITLE_TRACK_SWITCH, {
      id: a,
      groupId: o,
      name: l,
      type: c,
      url: d
    });
    const u = this.switchParams(s.url, i?.details, s.details);
    this.loadPlaylist(u);
  }
}
class jg {
  constructor(e) {
    this.buffers = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.buffers = e;
  }
  append(e, t, i) {
    const s = this.queues[t];
    s.push(e), s.length === 1 && !i && this.executeNext(t);
  }
  insertAbort(e, t) {
    this.queues[t].unshift(e), this.executeNext(t);
  }
  appendBlocker(e) {
    let t;
    const i = new Promise((r) => {
      t = r;
    }), s = {
      execute: t,
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: () => {
      }
    };
    return this.append(s, e), i;
  }
  executeNext(e) {
    const t = this.queues[e];
    if (t.length) {
      const i = t[0];
      try {
        i.execute();
      } catch (s) {
        k.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${s}`), i.onError(s);
        const r = this.buffers[e];
        r != null && r.updating || this.shiftAndExecuteNext(e);
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues[e].shift(), this.executeNext(e);
  }
  current(e) {
    return this.queues[e][0];
  }
}
const Za = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;
class Yg {
  constructor(e) {
    this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = (i) => {
      this.hls && this.hls.pauseBuffering();
    }, this._onStartStreaming = (i) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = () => {
      const {
        media: i,
        mediaSource: s
      } = this;
      this.log("Media source opened"), i && (i.removeEventListener("emptied", this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(x.MEDIA_ATTACHED, {
        media: i,
        mediaSource: s
      })), s && s.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks();
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: i,
        _objectUrl: s
      } = this;
      i !== s && k.error(`Media element src was set while attaching MediaSource (${s} > ${i})`);
    }, this.hls = e;
    const t = "[buffer-controller]";
    this.appendSource = t0(hi(e.config.preferManagedMediaSource)), this.log = k.log.bind(k, t), this.warn = k.warn.bind(k, t), this.error = k.error.bind(k, t), this._initSourceBuffer(), this.registerListeners();
  }
  hasSourceTypes() {
    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.BUFFER_RESET, this.onBufferReset, this), e.on(x.BUFFER_APPENDING, this.onBufferAppending, this), e.on(x.BUFFER_CODECS, this.onBufferCodecs, this), e.on(x.BUFFER_EOS, this.onBufferEos, this), e.on(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(x.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(x.FRAG_PARSED, this.onFragParsed, this), e.on(x.FRAG_CHANGED, this.onFragChanged, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.BUFFER_RESET, this.onBufferReset, this), e.off(x.BUFFER_APPENDING, this.onBufferAppending, this), e.off(x.BUFFER_CODECS, this.onBufferCodecs, this), e.off(x.BUFFER_EOS, this.onBufferEos, this), e.off(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(x.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(x.FRAG_PARSED, this.onFragParsed, this), e.off(x.FRAG_CHANGED, this.onFragChanged, this);
  }
  _initSourceBuffer() {
    this.sourceBuffer = {}, this.operationQueue = new jg(this.sourceBuffer), this.listeners = {
      audio: [],
      video: [],
      audiovideo: []
    }, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.lastMpegAudioChunk = null;
  }
  onManifestLoading() {
    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    let i = 2;
    (t.audio && !t.video || !t.altAudio) && (i = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = i, this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`);
  }
  onMediaAttaching(e, t) {
    const i = this.media = t.media, s = hi(this.appendSource);
    if (i && s) {
      var r;
      const a = this.mediaSource = new s();
      this.log(`created media source: ${(r = a.constructor) == null ? void 0 : r.name}`), a.addEventListener("sourceopen", this._onMediaSourceOpen), a.addEventListener("sourceended", this._onMediaSourceEnded), a.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (a.addEventListener("startstreaming", this._onStartStreaming), a.addEventListener("endstreaming", this._onEndStreaming));
      const o = this._objectUrl = self.URL.createObjectURL(a);
      if (this.appendSource)
        try {
          i.removeAttribute("src");
          const l = self.ManagedMediaSource;
          i.disableRemotePlayback = i.disableRemotePlayback || l && a instanceof l, Ja(i), zg(i, o), i.load();
        } catch {
          i.src = o;
        }
      else
        i.src = o;
      i.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  onMediaDetaching() {
    const {
      media: e,
      mediaSource: t,
      _objectUrl: i
    } = this;
    if (t) {
      if (this.log("media source detaching"), t.readyState === "open")
        try {
          t.endOfStream();
        } catch (s) {
          this.warn(`onMediaDetaching: ${s.message} while calling endOfStream`);
        }
      this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (t.removeEventListener("startstreaming", this._onStartStreaming), t.removeEventListener("endstreaming", this._onEndStreaming)), e && (e.removeEventListener("emptied", this._onMediaEmptied), i && self.URL.revokeObjectURL(i), this.mediaSrc === i ? (e.removeAttribute("src"), this.appendSource && Ja(e), e.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
    }
    this.hls.trigger(x.MEDIA_DETACHED, void 0);
  }
  onBufferReset() {
    this.getSourceBufferTypes().forEach((e) => {
      this.resetBuffer(e);
    }), this._initSourceBuffer();
  }
  resetBuffer(e) {
    const t = this.sourceBuffer[e];
    try {
      if (t) {
        var i;
        this.removeBufferListeners(e), this.sourceBuffer[e] = void 0, (i = this.mediaSource) != null && i.sourceBuffers.length && this.mediaSource.removeSourceBuffer(t);
      }
    } catch (s) {
      this.warn(`onBufferReset ${e}`, s);
    }
  }
  onBufferCodecs(e, t) {
    const i = this.getSourceBufferTypes().length, s = Object.keys(t);
    if (s.forEach((a) => {
      if (i) {
        const l = this.tracks[a];
        if (l && typeof l.buffer.changeType == "function") {
          var o;
          const {
            id: c,
            codec: d,
            levelCodec: u,
            container: h,
            metadata: f
          } = t[a], g = xa(l.codec, l.levelCodec), m = g?.replace(Za, "$1");
          let p = xa(d, u);
          const v = (o = p) == null ? void 0 : o.replace(Za, "$1");
          if (p && m !== v) {
            a.slice(0, 5) === "audio" && (p = Bs(p, this.appendSource));
            const b = `${h};codecs=${p}`;
            this.appendChangeType(a, b), this.log(`switching codec ${g} to ${p}`), this.tracks[a] = {
              buffer: l.buffer,
              codec: d,
              container: h,
              levelCodec: u,
              metadata: f,
              id: c
            };
          }
        }
      } else
        this.pendingTracks[a] = t[a];
    }), i)
      return;
    const r = Math.max(this.bufferCodecEventsExpected - 1, 0);
    this.bufferCodecEventsExpected !== r && (this.log(`${r} bufferCodec event(s) expected ${s.join(",")}`), this.bufferCodecEventsExpected = r), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks();
  }
  appendChangeType(e, t) {
    const {
      operationQueue: i
    } = this, s = {
      execute: () => {
        const r = this.sourceBuffer[e];
        r && (this.log(`changing ${e} sourceBuffer type to ${t}`), r.changeType(t)), i.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (r) => {
        this.warn(`Failed to change ${e} SourceBuffer type`, r);
      }
    };
    i.append(s, e, !!this.pendingTracks[e]);
  }
  onBufferAppending(e, t) {
    const {
      hls: i,
      operationQueue: s,
      tracks: r
    } = this, {
      data: a,
      type: o,
      frag: l,
      part: c,
      chunkMeta: d
    } = t, u = d.buffering[o], h = self.performance.now();
    u.start = h;
    const f = l.stats.buffering, g = c ? c.stats.buffering : null;
    f.start === 0 && (f.start = h), g && g.start === 0 && (g.start = h);
    const m = r.audio;
    let p = !1;
    o === "audio" && m?.container === "audio/mpeg" && (p = !this.lastMpegAudioChunk || d.id === 1 || this.lastMpegAudioChunk.sn !== d.sn, this.lastMpegAudioChunk = d);
    const v = l.start, b = {
      execute: () => {
        if (u.executeStart = self.performance.now(), p) {
          const _ = this.sourceBuffer[o];
          if (_) {
            const E = v - _.timestampOffset;
            Math.abs(E) >= 0.1 && (this.log(`Updating audio SourceBuffer timestampOffset to ${v} (delta: ${E}) sn: ${l.sn})`), _.timestampOffset = v);
          }
        }
        this.appendExecutor(a, o);
      },
      onStart: () => {
      },
      onComplete: () => {
        const _ = self.performance.now();
        u.executeEnd = u.end = _, f.first === 0 && (f.first = _), g && g.first === 0 && (g.first = _);
        const {
          sourceBuffer: E
        } = this, T = {};
        for (const A in E)
          T[A] = Ke.getBuffered(E[A]);
        this.appendErrors[o] = 0, o === "audio" || o === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(x.BUFFER_APPENDED, {
          type: o,
          frag: l,
          part: c,
          chunkMeta: d,
          parent: l.type,
          timeRanges: T
        });
      },
      onError: (_) => {
        const E = {
          type: xe.MEDIA_ERROR,
          parent: l.type,
          details: N.BUFFER_APPEND_ERROR,
          sourceBufferName: o,
          frag: l,
          part: c,
          chunkMeta: d,
          error: _,
          err: _,
          fatal: !1
        };
        if (_.code === DOMException.QUOTA_EXCEEDED_ERR)
          E.details = N.BUFFER_FULL_ERROR;
        else {
          const T = ++this.appendErrors[o];
          E.details = N.BUFFER_APPEND_ERROR, this.warn(`Failed ${T}/${i.config.appendErrorMaxRetry} times to append segment in "${o}" sourceBuffer`), T >= i.config.appendErrorMaxRetry && (E.fatal = !0);
        }
        i.trigger(x.ERROR, E);
      }
    };
    s.append(b, o, !!this.pendingTracks[o]);
  }
  onBufferFlushing(e, t) {
    const {
      operationQueue: i
    } = this, s = (r) => ({
      execute: this.removeExecutor.bind(this, r, t.startOffset, t.endOffset),
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(x.BUFFER_FLUSHED, {
          type: r
        });
      },
      onError: (a) => {
        this.warn(`Failed to remove from ${r} SourceBuffer`, a);
      }
    });
    t.type ? i.append(s(t.type), t.type) : this.getSourceBufferTypes().forEach((r) => {
      i.append(s(r), r);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: i,
      part: s
    } = t, r = [], a = s ? s.elementaryStreams : i.elementaryStreams;
    a[Be.AUDIOVIDEO] ? r.push("audiovideo") : (a[Be.AUDIO] && r.push("audio"), a[Be.VIDEO] && r.push("video"));
    const o = () => {
      const l = self.performance.now();
      i.stats.buffering.end = l, s && (s.stats.buffering.end = l);
      const c = s ? s.stats : i.stats;
      this.hls.trigger(x.FRAG_BUFFERED, {
        frag: i,
        part: s,
        stats: c,
        id: i.type
      });
    };
    r.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${i.type} level: ${i.level} sn: ${i.sn}`), this.blockBuffers(o, r);
  }
  onFragChanged(e, t) {
    this.trimBuffers();
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as ended and trigger checkEos()
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    this.getSourceBufferTypes().reduce((s, r) => {
      const a = this.sourceBuffer[r];
      return a && (!t.type || t.type === r) && (a.ending = !0, a.ended || (a.ended = !0, this.log(`${r} sourceBuffer now EOS`))), s && !!(!a || a.ended);
    }, !0) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
      this.getSourceBufferTypes().forEach((r) => {
        const a = this.sourceBuffer[r];
        a && (a.ending = !1);
      });
      const {
        mediaSource: s
      } = this;
      if (!s || s.readyState !== "open") {
        s && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${s.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), s.endOfStream();
    }));
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.fragments.length && (this.details = t, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
  }
  trimBuffers() {
    const {
      hls: e,
      details: t,
      media: i
    } = this;
    if (!i || t === null || !this.getSourceBufferTypes().length)
      return;
    const r = e.config, a = i.currentTime, o = t.levelTargetDuration, l = t.live && r.liveBackBufferLength !== null ? r.liveBackBufferLength : r.backBufferLength;
    if (ae(l) && l > 0) {
      const c = Math.max(l, o), d = Math.floor(a / o) * o - c;
      this.flushBackBuffer(a, o, d);
    }
    if (ae(r.frontBufferFlushThreshold) && r.frontBufferFlushThreshold > 0) {
      const c = Math.max(r.maxBufferLength, r.frontBufferFlushThreshold), d = Math.max(c, o), u = Math.floor(a / o) * o + d;
      this.flushFrontBuffer(a, o, u);
    }
  }
  flushBackBuffer(e, t, i) {
    const {
      details: s,
      sourceBuffer: r
    } = this;
    this.getSourceBufferTypes().forEach((o) => {
      const l = r[o];
      if (l) {
        const c = Ke.getBuffered(l);
        if (c.length > 0 && i > c.start(0)) {
          if (this.hls.trigger(x.BACK_BUFFER_REACHED, {
            bufferEnd: i
          }), s != null && s.live)
            this.hls.trigger(x.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: i
            });
          else if (l.ended && c.end(c.length - 1) - e < t * 2) {
            this.log(`Cannot flush ${o} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(x.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: i,
            type: o
          });
        }
      }
    });
  }
  flushFrontBuffer(e, t, i) {
    const {
      sourceBuffer: s
    } = this;
    this.getSourceBufferTypes().forEach((a) => {
      const o = s[a];
      if (o) {
        const l = Ke.getBuffered(o), c = l.length;
        if (c < 2)
          return;
        const d = l.start(c - 1), u = l.end(c - 1);
        if (i > d || e >= d && e <= u)
          return;
        if (o.ended && e - u < 2 * t) {
          this.log(`Cannot flush ${a} front buffer while SourceBuffer is in ended state`);
          return;
        }
        this.hls.trigger(x.BUFFER_FLUSHING, {
          startOffset: d,
          endOffset: 1 / 0,
          type: a
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  updateMediaElementDuration() {
    if (!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")
      return;
    const {
      details: e,
      hls: t,
      media: i,
      mediaSource: s
    } = this, r = e.fragments[0].start + e.totalduration, a = i.duration, o = ae(s.duration) ? s.duration : 0;
    e.live && t.config.liveDurationInfinity ? (s.duration = 1 / 0, this.updateSeekableRange(e)) : (r > o && r > a || !ae(a)) && (this.log(`Updating Media Source duration to ${r.toFixed(3)}`), s.duration = r);
  }
  updateSeekableRange(e) {
    const t = this.mediaSource, i = e.fragments;
    if (i.length && e.live && t != null && t.setLiveSeekableRange) {
      const r = Math.max(0, i[0].start), a = Math.max(r, r + e.totalduration);
      this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${r}-${a}.`), t.setLiveSeekableRange(r, a);
    }
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsExpected: e,
      operationQueue: t,
      pendingTracks: i
    } = this, s = Object.keys(i).length;
    if (s && (!e || s === 2 || "audiovideo" in i)) {
      this.createSourceBuffers(i), this.pendingTracks = {};
      const r = this.getSourceBufferTypes();
      if (r.length)
        this.hls.trigger(x.BUFFER_CREATED, {
          tracks: this.tracks
        }), r.forEach((a) => {
          t.executeNext(a);
        });
      else {
        const a = new Error("could not create source buffer for media codec(s)");
        this.hls.trigger(x.ERROR, {
          type: xe.MEDIA_ERROR,
          details: N.BUFFER_INCOMPATIBLE_CODECS_ERROR,
          fatal: !0,
          error: a,
          reason: a.message
        });
      }
    }
  }
  createSourceBuffers(e) {
    const {
      sourceBuffer: t,
      mediaSource: i
    } = this;
    if (!i)
      throw Error("createSourceBuffers called when mediaSource was null");
    for (const r in e)
      if (!t[r]) {
        var s;
        const a = e[r];
        if (!a)
          throw Error(`source buffer exists for track ${r}, however track does not`);
        let o = ((s = a.levelCodec) == null ? void 0 : s.indexOf(",")) === -1 ? a.levelCodec : a.codec;
        o && r.slice(0, 5) === "audio" && (o = Bs(o, this.appendSource));
        const l = `${a.container};codecs=${o}`;
        this.log(`creating sourceBuffer(${l})`);
        try {
          const c = t[r] = i.addSourceBuffer(l), d = r;
          this.addBufferListener(d, "updatestart", this._onSBUpdateStart), this.addBufferListener(d, "updateend", this._onSBUpdateEnd), this.addBufferListener(d, "error", this._onSBUpdateError), this.appendSource && this.addBufferListener(d, "bufferedchange", (u, h) => {
            const f = h.removedRanges;
            f != null && f.length && this.hls.trigger(x.BUFFER_FLUSHED, {
              type: r
            });
          }), this.tracks[r] = {
            buffer: c,
            codec: o,
            container: a.container,
            levelCodec: a.levelCodec,
            metadata: a.metadata,
            id: a.id
          };
        } catch (c) {
          this.error(`error while trying to add sourceBuffer: ${c.message}`), this.hls.trigger(x.ERROR, {
            type: xe.MEDIA_ERROR,
            details: N.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: c,
            sourceBufferName: r,
            mimeType: l
          });
        }
      }
  }
  get mediaSrc() {
    var e;
    const t = ((e = this.media) == null ? void 0 : e.firstChild) || this.media;
    return t?.src;
  }
  _onSBUpdateStart(e) {
    const {
      operationQueue: t
    } = this;
    t.current(e).onStart();
  }
  _onSBUpdateEnd(e) {
    var t;
    if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
      this.resetBuffer(e);
      return;
    }
    const {
      operationQueue: i
    } = this;
    i.current(e).onComplete(), i.shiftAndExecuteNext(e);
  }
  _onSBUpdateError(e, t) {
    var i;
    const s = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(i = this.mediaSource) == null ? void 0 : i.readyState}`);
    this.error(`${s}`, t), this.hls.trigger(x.ERROR, {
      type: xe.MEDIA_ERROR,
      details: N.BUFFER_APPENDING_ERROR,
      sourceBufferName: e,
      error: s,
      fatal: !1
    });
    const r = this.operationQueue.current(e);
    r && r.onError(s);
  }
  // This method must result in an updateend event; if remove is not called, _onSBUpdateEnd must be called manually
  removeExecutor(e, t, i) {
    const {
      media: s,
      mediaSource: r,
      operationQueue: a,
      sourceBuffer: o
    } = this, l = o[e];
    if (!s || !r || !l) {
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), a.shiftAndExecuteNext(e);
      return;
    }
    const c = ae(s.duration) ? s.duration : 1 / 0, d = ae(r.duration) ? r.duration : 1 / 0, u = Math.max(0, t), h = Math.min(i, c, d);
    h > u && (!l.ending || l.ended) ? (l.ended = !1, this.log(`Removing [${u},${h}] from the ${e} SourceBuffer`), l.remove(u, h)) : a.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, _onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const i = this.sourceBuffer[t];
    if (!i) {
      if (!this.pendingTracks[t])
        throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
      return;
    }
    i.ended = !1, i.appendBuffer(e);
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.getSourceBufferTypes()) {
    if (!t.length) {
      this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
      return;
    }
    const {
      operationQueue: i
    } = this, s = t.map((r) => i.appendBlocker(r));
    Promise.all(s).then(() => {
      e(), t.forEach((r) => {
        const a = this.sourceBuffer[r];
        a != null && a.updating || i.shiftAndExecuteNext(r);
      });
    });
  }
  getSourceBufferTypes() {
    return Object.keys(this.sourceBuffer);
  }
  addBufferListener(e, t, i) {
    const s = this.sourceBuffer[e];
    if (!s)
      return;
    const r = i.bind(this, e);
    this.listeners[e].push({
      event: t,
      listener: r
    }), s.addEventListener(t, r);
  }
  removeBufferListeners(e) {
    const t = this.sourceBuffer[e];
    t && this.listeners[e].forEach((i) => {
      t.removeEventListener(i.event, i.listener);
    });
  }
}
function Ja(n) {
  const e = n.querySelectorAll("source");
  [].slice.call(e).forEach((t) => {
    n.removeChild(t);
  });
}
function zg(n, e) {
  const t = self.document.createElement("source");
  t.type = "video/mp4", t.src = e, n.appendChild(t);
}
const qg = {
  42: 225,
  // lowercase a, acute accent
  92: 233,
  // lowercase e, acute accent
  94: 237,
  // lowercase i, acute accent
  95: 243,
  // lowercase o, acute accent
  96: 250,
  // lowercase u, acute accent
  123: 231,
  // lowercase c with cedilla
  124: 247,
  // division symbol
  125: 209,
  // uppercase N tilde
  126: 241,
  // lowercase n tilde
  127: 9608,
  // Full block
  // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
  // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
  128: 174,
  // Registered symbol (R)
  129: 176,
  // degree sign
  130: 189,
  // 1/2 symbol
  131: 191,
  // Inverted (open) question mark
  132: 8482,
  // Trademark symbol (TM)
  133: 162,
  // Cents symbol
  134: 163,
  // Pounds sterling
  135: 9834,
  // Music 8'th note
  136: 224,
  // lowercase a, grave accent
  137: 32,
  // transparent space (regular)
  138: 232,
  // lowercase e, grave accent
  139: 226,
  // lowercase a, circumflex accent
  140: 234,
  // lowercase e, circumflex accent
  141: 238,
  // lowercase i, circumflex accent
  142: 244,
  // lowercase o, circumflex accent
  143: 251,
  // lowercase u, circumflex accent
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
  144: 193,
  // capital letter A with acute
  145: 201,
  // capital letter E with acute
  146: 211,
  // capital letter O with acute
  147: 218,
  // capital letter U with acute
  148: 220,
  // capital letter U with diaresis
  149: 252,
  // lowercase letter U with diaeresis
  150: 8216,
  // opening single quote
  151: 161,
  // inverted exclamation mark
  152: 42,
  // asterisk
  153: 8217,
  // closing single quote
  154: 9473,
  // box drawings heavy horizontal
  155: 169,
  // copyright sign
  156: 8480,
  // Service mark
  157: 8226,
  // (round) bullet
  158: 8220,
  // Left double quotation mark
  159: 8221,
  // Right double quotation mark
  160: 192,
  // uppercase A, grave accent
  161: 194,
  // uppercase A, circumflex
  162: 199,
  // uppercase C with cedilla
  163: 200,
  // uppercase E, grave accent
  164: 202,
  // uppercase E, circumflex
  165: 203,
  // capital letter E with diaresis
  166: 235,
  // lowercase letter e with diaresis
  167: 206,
  // uppercase I, circumflex
  168: 207,
  // uppercase I, with diaresis
  169: 239,
  // lowercase i, with diaresis
  170: 212,
  // uppercase O, circumflex
  171: 217,
  // uppercase U, grave accent
  172: 249,
  // lowercase u, grave accent
  173: 219,
  // uppercase U, circumflex
  174: 171,
  // left-pointing double angle quotation mark
  175: 187,
  // right-pointing double angle quotation mark
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
  176: 195,
  // Uppercase A, tilde
  177: 227,
  // Lowercase a, tilde
  178: 205,
  // Uppercase I, acute accent
  179: 204,
  // Uppercase I, grave accent
  180: 236,
  // Lowercase i, grave accent
  181: 210,
  // Uppercase O, grave accent
  182: 242,
  // Lowercase o, grave accent
  183: 213,
  // Uppercase O, tilde
  184: 245,
  // Lowercase o, tilde
  185: 123,
  // Open curly brace
  186: 125,
  // Closing curly brace
  187: 92,
  // Backslash
  188: 94,
  // Caret
  189: 95,
  // Underscore
  190: 124,
  // Pipe (vertical line)
  191: 8764,
  // Tilde operator
  192: 196,
  // Uppercase A, umlaut
  193: 228,
  // Lowercase A, umlaut
  194: 214,
  // Uppercase O, umlaut
  195: 246,
  // Lowercase o, umlaut
  196: 223,
  // Esszett (sharp S)
  197: 165,
  // Yen symbol
  198: 164,
  // Generic currency sign
  199: 9475,
  // Box drawings heavy vertical
  200: 197,
  // Uppercase A, ring
  201: 229,
  // Lowercase A, ring
  202: 216,
  // Uppercase O, stroke
  203: 248,
  // Lowercase o, strok
  204: 9487,
  // Box drawings heavy down and right
  205: 9491,
  // Box drawings heavy down and left
  206: 9495,
  // Box drawings heavy up and right
  207: 9499
  // Box drawings heavy up and left
}, ec = (n) => String.fromCharCode(qg[n] || n), bt = 15, Wt = 100, Xg = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, Qg = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, Zg = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, Jg = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, $g = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class em {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const i = typeof t == "function" ? t() : t;
      k.log(`${this.time} [${e}] ${i}`);
    }
  }
}
const si = function(e) {
  const t = [];
  for (let i = 0; i < e.length; i++)
    t.push(e[i].toString(16));
  return t;
};
class tc {
  constructor() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  reset() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  setStyles(e) {
    const t = ["foreground", "underline", "italics", "background", "flash"];
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      e.hasOwnProperty(s) && (this[s] = e[s]);
    }
  }
  isDefault() {
    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
  }
  equals(e) {
    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash;
  }
  copy(e) {
    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash;
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
  }
}
class tm {
  constructor() {
    this.uchar = " ", this.penState = new tc();
  }
  reset() {
    this.uchar = " ", this.penState.reset();
  }
  setChar(e, t) {
    this.uchar = e, this.penState.copy(t);
  }
  setPenState(e) {
    this.penState.copy(e);
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState);
  }
  copy(e) {
    this.uchar = e.uchar, this.penState.copy(e.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class im {
  constructor(e) {
    this.chars = [], this.pos = 0, this.currPenState = new tc(), this.cueStartTime = null, this.logger = void 0;
    for (let t = 0; t < Wt; t++)
      this.chars.push(new tm());
    this.logger = e;
  }
  equals(e) {
    for (let t = 0; t < Wt; t++)
      if (!this.chars[t].equals(e.chars[t]))
        return !1;
    return !0;
  }
  copy(e) {
    for (let t = 0; t < Wt; t++)
      this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Wt; t++)
      if (!this.chars[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  /**
   *  Set the cursor to a valid column.
   */
  setCursor(e) {
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Wt && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Wt);
  }
  /**
   * Move the cursor relative to current position.
   */
  moveCursor(e) {
    const t = this.pos + e;
    if (e > 1)
      for (let i = this.pos + 1; i < t + 1; i++)
        this.chars[i].setPenState(this.currPenState);
    this.setCursor(t);
  }
  /**
   * Backspace, move one step back and clear character.
   */
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    const t = ec(e);
    if (this.pos >= Wt) {
      this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < Wt; t++)
      this.chars[t].reset();
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const e = [];
    let t = !0;
    for (let i = 0; i < Wt; i++) {
      const s = this.chars[i].uchar;
      s !== " " && (t = !1), e.push(s);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class Lr {
  constructor(e) {
    this.rows = [], this.currRow = bt - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
    for (let t = 0; t < bt; t++)
      this.rows.push(new im(e));
    this.logger = e;
  }
  reset() {
    for (let e = 0; e < bt; e++)
      this.rows[e].clear();
    this.currRow = bt - 1;
  }
  equals(e) {
    let t = !0;
    for (let i = 0; i < bt; i++)
      if (!this.rows[i].equals(e.rows[i])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < bt; t++)
      this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < bt; t++)
      if (!this.rows[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  /**
   * Insert a character (without styling) in the current row.
   */
  insertChar(e) {
    this.rows[this.currRow].insertChar(e);
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e);
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e);
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + JSON.stringify(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let o = 0; o < bt; o++)
        this.rows[o].clear();
      const r = this.currRow + 1 - this.nrRollUpRows, a = this.lastOutputScreen;
      if (a) {
        const o = a.rows[r].cueStartTime, l = this.logger.time;
        if (o !== null && l !== null && o < l)
          for (let c = 0; c < this.nrRollUpRows; c++)
            this.rows[t - this.nrRollUpRows + c + 1].copy(a.rows[r + c]);
      }
    }
    this.currRow = t;
    const i = this.rows[this.currRow];
    if (e.indent !== null) {
      const r = e.indent, a = Math.max(r - 1, 0);
      i.setCursor(e.indent), e.color = i.chars[a].penState.foreground;
    }
    const s = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: !1
    };
    this.setPen(s);
  }
  /**
   * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
   */
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0];
    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up");
  }
  /**
   * Get all non-empty rows with as unicode text.
   */
  getDisplayText(e) {
    e = e || !1;
    const t = [];
    let i = "", s = -1;
    for (let r = 0; r < bt; r++) {
      const a = this.rows[r].getTextString();
      a && (s = r + 1, e ? t.push("Row " + s + ": '" + a + "'") : t.push(a.trim()));
    }
    return t.length > 0 && (e ? i = "[" + t.join(" | ") + "]" : i = t.join(`
`)), i;
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class $a {
  constructor(e, t, i) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new Lr(i), this.nonDisplayedMemory = new Lr(i), this.lastOutputScreen = new Lr(i), this.currRollUpRow = this.displayedMemory.rows[bt - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = i;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[bt - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(e) {
    this.outputFilter = e;
  }
  setPAC(e) {
    this.writeScreen.setPAC(e);
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e);
  }
  setMode(e) {
    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e);
  }
  insertChars(e) {
    for (let i = 0; i < e.length; i++)
      this.writeScreen.insertChar(e[i]);
    const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {
  }
  ccAON() {
  }
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: !0
    });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
      const e = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    }
    this.outputDataUpdate(!0);
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
  }
  ccMIDROW(e) {
    const t = {
      flash: !1
    };
    if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)
      t.foreground = "white";
    else {
      const i = Math.floor(e / 2) - 16, s = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground = s[i];
    }
    this.logger.log(2, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));
  }
}
class eo {
  constructor(e, t, i) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = rm(), this.logger = void 0;
    const s = this.logger = new em();
    this.channels = [null, new $a(e, t, s), new $a(e + 1, i, s)];
  }
  getHandler(e) {
    return this.channels[e].getHandler();
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t);
  }
  /**
   * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
   */
  addData(e, t) {
    this.logger.time = e;
    for (let i = 0; i < t.length; i += 2) {
      const s = t[i] & 127, r = t[i + 1] & 127;
      let a = !1, o = null;
      if (s === 0 && r === 0)
        continue;
      this.logger.log(3, () => "[" + si([t[i], t[i + 1]]) + "] -> (" + si([s, r]) + ")");
      const l = this.cmdHistory;
      if (s >= 16 && s <= 31) {
        if (sm(s, r, l)) {
          gs(null, null, l), this.logger.log(3, () => "Repeated command (" + si([s, r]) + ") is dropped");
          continue;
        }
        gs(s, r, this.cmdHistory), a = this.parseCmd(s, r), a || (a = this.parseMidrow(s, r)), a || (a = this.parsePAC(s, r)), a || (a = this.parseBackgroundAttributes(s, r));
      } else
        gs(null, null, l);
      if (!a && (o = this.parseChars(s, r), o)) {
        const d = this.currentChannel;
        d && d > 0 ? this.channels[d].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
      }
      !a && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + si([s, r]) + " orig: " + si([t[i], t[i + 1]]));
    }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(e, t) {
    const i = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, s = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(i || s))
      return !1;
    const r = e === 20 || e === 21 || e === 23 ? 1 : 2, a = this.channels[r];
    return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? a.ccRCL() : t === 33 ? a.ccBS() : t === 34 ? a.ccAOF() : t === 35 ? a.ccAON() : t === 36 ? a.ccDER() : t === 37 ? a.ccRU(2) : t === 38 ? a.ccRU(3) : t === 39 ? a.ccRU(4) : t === 40 ? a.ccFON() : t === 41 ? a.ccRDC() : t === 42 ? a.ccTR() : t === 43 ? a.ccRTD() : t === 44 ? a.ccEDM() : t === 45 ? a.ccCR() : t === 46 ? a.ccENM() : t === 47 && a.ccEOC() : a.ccTO(t - 32), this.currentChannel = r, !0;
  }
  /**
   * Parse midrow styling command
   */
  parseMidrow(e, t) {
    let i = 0;
    if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
      if (e === 17 ? i = 1 : i = 2, i !== this.currentChannel)
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const s = this.channels[i];
      return s ? (s.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + si([e, t]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(e, t) {
    let i;
    const s = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, r = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(s || r))
      return !1;
    const a = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95 ? i = a === 1 ? Xg[e] : Zg[e] : i = a === 1 ? Qg[e] : Jg[e];
    const o = this.channels[a];
    return o ? (o.setPAC(this.interpretPAC(i, t)), this.currentChannel = a, !0) : !1;
  }
  /**
   * Interpret the second byte of the pac, and return the information.
   * @returns pacData with style parameters
   */
  interpretPAC(e, t) {
    let i;
    const s = {
      color: null,
      italics: !1,
      indent: null,
      underline: !1,
      row: e
    };
    return t > 95 ? i = t - 96 : i = t - 64, s.underline = (i & 1) === 1, i <= 13 ? s.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (s.italics = !0, s.color = "white") : s.indent = Math.floor((i - 16) / 2) * 4, s;
  }
  /**
   * Parse characters.
   * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
   */
  parseChars(e, t) {
    let i, s = null, r = null;
    if (e >= 25 ? (i = 2, r = e - 8) : (i = 1, r = e), r >= 17 && r <= 19) {
      let a;
      r === 17 ? a = t + 80 : r === 18 ? a = t + 112 : a = t + 144, this.logger.log(2, () => "Special char '" + ec(a) + "' in channel " + i), s = [a];
    } else e >= 32 && e <= 127 && (s = t === 0 ? [e] : [e, t]);
    return s && this.logger.log(3, () => "Char codes =  " + si(s).join(",")), s;
  }
  /**
   * Parse extended background attributes as well as new foreground color black.
   * @returns True if background attributes are found
   */
  parseBackgroundAttributes(e, t) {
    const i = (e === 16 || e === 24) && t >= 32 && t <= 47, s = (e === 23 || e === 31) && t >= 45 && t <= 47;
    if (!(i || s))
      return !1;
    let r;
    const a = {};
    e === 16 || e === 24 ? (r = Math.floor((t - 32) / 2), a.background = $g[r], t % 2 === 1 && (a.background = a.background + "_semi")) : t === 45 ? a.background = "transparent" : (a.foreground = "black", t === 47 && (a.underline = !0));
    const o = e <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(a), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    gs(null, null, this.cmdHistory);
  }
  /**
   * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
   */
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      const i = this.channels[t];
      i && i.cueSplitAtTime(e);
    }
  }
}
function gs(n, e, t) {
  t.a = n, t.b = e;
}
function sm(n, e, t) {
  return t.a === n && t.b === e;
}
function rm() {
  return {
    a: null,
    b: null
  };
}
class ms {
  constructor(e, t) {
    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t;
  }
  dispatchCue() {
    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
  }
  newCue(e, t, i) {
    (this.startTime === null || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = i, this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    this.cueRanges = [], this.startTime = null;
  }
}
var Cn = (function() {
  if (ki != null && ki.VTTCue)
    return self.VTTCue;
  const n = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];
  function t(o, l) {
    if (typeof l != "string" || !Array.isArray(o))
      return !1;
    const c = l.toLowerCase();
    return ~o.indexOf(c) ? c : !1;
  }
  function i(o) {
    return t(n, o);
  }
  function s(o) {
    return t(e, o);
  }
  function r(o, ...l) {
    let c = 1;
    for (; c < arguments.length; c++) {
      const d = arguments[c];
      for (const u in d)
        o[u] = d[u];
    }
    return o;
  }
  function a(o, l, c) {
    const d = this, u = {
      enumerable: !0
    };
    d.hasBeenReset = !1;
    let h = "", f = !1, g = o, m = l, p = c, v = null, b = "", _ = !0, E = "auto", T = "start", A = 50, S = "middle", w = 50, C = "middle";
    Object.defineProperty(d, "id", r({}, u, {
      get: function() {
        return h;
      },
      set: function(L) {
        h = "" + L;
      }
    })), Object.defineProperty(d, "pauseOnExit", r({}, u, {
      get: function() {
        return f;
      },
      set: function(L) {
        f = !!L;
      }
    })), Object.defineProperty(d, "startTime", r({}, u, {
      get: function() {
        return g;
      },
      set: function(L) {
        if (typeof L != "number")
          throw new TypeError("Start time must be set to a number.");
        g = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "endTime", r({}, u, {
      get: function() {
        return m;
      },
      set: function(L) {
        if (typeof L != "number")
          throw new TypeError("End time must be set to a number.");
        m = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "text", r({}, u, {
      get: function() {
        return p;
      },
      set: function(L) {
        p = "" + L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "region", r({}, u, {
      get: function() {
        return v;
      },
      set: function(L) {
        v = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "vertical", r({}, u, {
      get: function() {
        return b;
      },
      set: function(L) {
        const I = i(L);
        if (I === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        b = I, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "snapToLines", r({}, u, {
      get: function() {
        return _;
      },
      set: function(L) {
        _ = !!L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "line", r({}, u, {
      get: function() {
        return E;
      },
      set: function(L) {
        if (typeof L != "number" && L !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        E = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "lineAlign", r({}, u, {
      get: function() {
        return T;
      },
      set: function(L) {
        const I = s(L);
        if (!I)
          throw new SyntaxError("An invalid or illegal string was specified.");
        T = I, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "position", r({}, u, {
      get: function() {
        return A;
      },
      set: function(L) {
        if (L < 0 || L > 100)
          throw new Error("Position must be between 0 and 100.");
        A = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "positionAlign", r({}, u, {
      get: function() {
        return S;
      },
      set: function(L) {
        const I = s(L);
        if (!I)
          throw new SyntaxError("An invalid or illegal string was specified.");
        S = I, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "size", r({}, u, {
      get: function() {
        return w;
      },
      set: function(L) {
        if (L < 0 || L > 100)
          throw new Error("Size must be between 0 and 100.");
        w = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "align", r({}, u, {
      get: function() {
        return C;
      },
      set: function(L) {
        const I = s(L);
        if (!I)
          throw new SyntaxError("An invalid or illegal string was specified.");
        C = I, this.hasBeenReset = !0;
      }
    })), d.displayState = void 0;
  }
  return a.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, a;
})();
class nm {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decode(e, t) {
    if (!e)
      return "";
    if (typeof e != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function ic(n) {
  function e(i, s, r, a) {
    return (i | 0) * 3600 + (s | 0) * 60 + (r | 0) + parseFloat(a || 0);
  }
  const t = n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null;
}
class am {
  constructor() {
    this.values = /* @__PURE__ */ Object.create(null);
  }
  // Only accept the first assignment to any key.
  set(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  }
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get(e, t, i) {
    return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t;
  }
  // Check whether we have a value for a key.
  has(e) {
    return e in this.values;
  }
  // Accept a setting if its one of the given alternatives.
  alt(e, t, i) {
    for (let s = 0; s < i.length; ++s)
      if (t === i[s]) {
        this.set(e, t);
        break;
      }
  }
  // Accept a setting if its a valid (signed) integer.
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  }
  // Accept a setting if its a valid percentage.
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      const i = parseFloat(t);
      if (i >= 0 && i <= 100)
        return this.set(e, i), !0;
    }
    return !1;
  }
}
function sc(n, e, t, i) {
  const s = i ? n.split(i) : [n];
  for (const r in s) {
    if (typeof s[r] != "string")
      continue;
    const a = s[r].split(t);
    if (a.length !== 2)
      continue;
    const o = a[0], l = a[1];
    e(o, l);
  }
}
const sn = new Cn(0, 0, ""), ps = sn.align === "middle" ? "middle" : "center";
function om(n, e, t) {
  const i = n;
  function s() {
    const o = ic(n);
    if (o === null)
      throw new Error("Malformed timestamp: " + i);
    return n = n.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function r(o, l) {
    const c = new am();
    sc(o, function(h, f) {
      let g;
      switch (h) {
        case "region":
          for (let m = t.length - 1; m >= 0; m--)
            if (t[m].id === f) {
              c.set(h, t[m].region);
              break;
            }
          break;
        case "vertical":
          c.alt(h, f, ["rl", "lr"]);
          break;
        case "line":
          g = f.split(","), c.integer(h, g[0]), c.percent(h, g[0]) && c.set("snapToLines", !1), c.alt(h, g[0], ["auto"]), g.length === 2 && c.alt("lineAlign", g[1], ["start", ps, "end"]);
          break;
        case "position":
          g = f.split(","), c.percent(h, g[0]), g.length === 2 && c.alt("positionAlign", g[1], ["start", ps, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          c.percent(h, f);
          break;
        case "align":
          c.alt(h, f, ["start", ps, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), l.region = c.get("region", null), l.vertical = c.get("vertical", "");
    let d = c.get("line", "auto");
    d === "auto" && sn.line === -1 && (d = -1), l.line = d, l.lineAlign = c.get("lineAlign", "start"), l.snapToLines = c.get("snapToLines", !0), l.size = c.get("size", 100), l.align = c.get("align", ps);
    let u = c.get("position", "auto");
    u === "auto" && sn.position === 50 && (u = l.align === "start" || l.align === "left" ? 0 : l.align === "end" || l.align === "right" ? 100 : 50), l.position = u;
  }
  function a() {
    n = n.replace(/^\s+/, "");
  }
  if (a(), e.startTime = s(), a(), n.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + i);
  n = n.slice(3), a(), e.endTime = s(), a(), r(n, e);
}
function rc(n) {
  return n.replace(/<br(?: \/)?>/gi, `
`);
}
class lm {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new nm(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, {
      stream: !0
    }));
    function i() {
      let r = t.buffer, a = 0;
      for (r = rc(r); a < r.length && r[a] !== "\r" && r[a] !== `
`; )
        ++a;
      const o = r.slice(0, a);
      return r[a] === "\r" && ++a, r[a] === `
` && ++a, t.buffer = r.slice(a), o;
    }
    function s(r) {
      sc(r, function(a, o) {
      }, /:/);
    }
    try {
      let r = "";
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        r = i();
        const o = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(o != null && o[0]))
          throw new Error("Malformed WebVTT signature.");
        t.state = "HEADER";
      }
      let a = !1;
      for (; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        switch (a ? a = !1 : r = i(), t.state) {
          case "HEADER":
            /:/.test(r) ? s(r) : r || (t.state = "ID");
            continue;
          case "NOTE":
            r || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(r)) {
              t.state = "NOTE";
              break;
            }
            if (!r)
              continue;
            if (t.cue = new Cn(0, 0, ""), t.state = "CUE", r.indexOf("-->") === -1) {
              t.cue.id = r;
              continue;
            }
          // Process line as start of a cue.
          /* falls through */
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              om(r, t.cue, t.regionList);
            } catch {
              t.cue = null, t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const o = r.indexOf("-->") !== -1;
              if (!r || o && (a = !0)) {
                t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                continue;
              }
              if (t.cue === null)
                continue;
              t.cue.text && (t.cue.text += `
`), t.cue.text += r;
            }
            continue;
          case "BADCUE":
            r || (t.state = "ID");
        }
      }
    } catch {
      t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }
  flush() {
    const e = this;
    try {
      if ((e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL" || e.state === "BADWEBVTT")
        throw new Error("Malformed WebVTT signature.");
    } catch (t) {
      e.onparsingerror && e.onparsingerror(t);
    }
    return e.onflush && e.onflush(), this;
  }
}
const cm = /\r\n|\n\r|\n|\r/g, wr = function(e, t, i = 0) {
  return e.slice(i, i + t.length) === t;
}, dm = function(e) {
  let t = parseInt(e.slice(-3));
  const i = parseInt(e.slice(-6, -4)), s = parseInt(e.slice(-9, -7)), r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
  if (!ae(t) || !ae(i) || !ae(s) || !ae(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t += 1e3 * i, t += 60 * 1e3 * s, t += 3600 * 1e3 * r, t;
}, Rr = function(e) {
  let t = 5381, i = e.length;
  for (; i; )
    t = t * 33 ^ e.charCodeAt(--i);
  return (t >>> 0).toString();
};
function Dn(n, e, t) {
  return Rr(n.toString()) + Rr(e.toString()) + Rr(t);
}
const um = function(e, t, i) {
  let s = e[t], r = e[s.prevCC];
  if (!r || !r.new && s.new) {
    e.ccOffset = e.presentationOffset = s.start, s.new = !1;
    return;
  }
  for (; (a = r) != null && a.new; ) {
    var a;
    e.ccOffset += s.start - r.start, s.new = !1, s = r, r = e[s.prevCC];
  }
  e.presentationOffset = i;
};
function hm(n, e, t, i, s, r, a) {
  const o = new lm(), l = Ut(new Uint8Array(n)).trim().replace(cm, `
`).split(`
`), c = [], d = e ? Ig(e.baseTime, e.timescale) : 0;
  let u = "00:00.000", h = 0, f = 0, g, m = !0;
  o.oncue = function(p) {
    const v = t[i];
    let b = t.ccOffset;
    const _ = (h - d) / 9e4;
    if (v != null && v.new && (f !== void 0 ? b = t.ccOffset = v.start : um(t, i, _)), _) {
      if (!e) {
        g = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      b = _ - t.presentationOffset;
    }
    const E = p.endTime - p.startTime, T = pt((p.startTime + b - f) * 9e4, s * 9e4) / 9e4;
    p.startTime = Math.max(T, 0), p.endTime = Math.max(T + E, 0);
    const A = p.text.trim();
    p.text = decodeURIComponent(encodeURIComponent(A)), p.id || (p.id = Dn(p.startTime, p.endTime, A)), p.endTime > 0 && c.push(p);
  }, o.onparsingerror = function(p) {
    g = p;
  }, o.onflush = function() {
    if (g) {
      a(g);
      return;
    }
    r(c);
  }, l.forEach((p) => {
    if (m)
      if (wr(p, "X-TIMESTAMP-MAP=")) {
        m = !1, p.slice(16).split(",").forEach((v) => {
          wr(v, "LOCAL:") ? u = v.slice(6) : wr(v, "MPEGTS:") && (h = parseInt(v.slice(7)));
        });
        try {
          f = dm(u) / 1e3;
        } catch (v) {
          g = v;
        }
        return;
      } else p === "" && (m = !1);
    o.parse(p + `
`);
  }), o.flush();
}
const Ir = "stpp.ttml.im1t", nc = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, ac = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, fm = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function to(n, e, t, i) {
  const s = Te(new Uint8Array(n), ["mdat"]);
  if (s.length === 0) {
    i(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const r = s.map((o) => Ut(o)), a = Rg(e.baseTime, 1, e.timescale);
  try {
    r.forEach((o) => t(gm(o, a)));
  } catch (o) {
    i(o);
  }
}
function gm(n, e) {
  const s = new DOMParser().parseFromString(n, "text/xml").getElementsByTagName("tt")[0];
  if (!s)
    throw new Error("Invalid ttml");
  const r = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, a = Object.keys(r).reduce((u, h) => (u[h] = s.getAttribute(`ttp:${h}`) || r[h], u), {}), o = s.getAttribute("xml:space") !== "preserve", l = io(Cr(s, "styling", "style")), c = io(Cr(s, "layout", "region")), d = Cr(s, "body", "[begin]");
  return [].map.call(d, (u) => {
    const h = oc(u, o);
    if (!h || !u.hasAttribute("begin"))
      return null;
    const f = kr(u.getAttribute("begin"), a), g = kr(u.getAttribute("dur"), a);
    let m = kr(u.getAttribute("end"), a);
    if (f === null)
      throw so(u);
    if (m === null) {
      if (g === null)
        throw so(u);
      m = f + g;
    }
    const p = new Cn(f - e, m - e, h);
    p.id = Dn(p.startTime, p.endTime, p.text);
    const v = c[u.getAttribute("region")], b = l[u.getAttribute("style")], _ = mm(v, b, l), {
      textAlign: E
    } = _;
    if (E) {
      const T = fm[E];
      T && (p.lineAlign = T), p.align = E;
    }
    return it(p, _), p;
  }).filter((u) => u !== null);
}
function Cr(n, e, t) {
  const i = n.getElementsByTagName(e)[0];
  return i ? [].slice.call(i.querySelectorAll(t)) : [];
}
function io(n) {
  return n.reduce((e, t) => {
    const i = t.getAttribute("xml:id");
    return i && (e[i] = t), e;
  }, {});
}
function oc(n, e) {
  return [].slice.call(n.childNodes).reduce((t, i, s) => {
    var r;
    return i.nodeName === "br" && s ? t + `
` : (r = i.childNodes) != null && r.length ? oc(i, e) : e ? t + i.textContent.trim().replace(/\s+/g, " ") : t + i.textContent;
  }, "");
}
function mm(n, e, t) {
  const i = "http://www.w3.org/ns/ttml#styling";
  let s = null;
  const r = [
    "displayAlign",
    "textAlign",
    "color",
    "backgroundColor",
    "fontSize",
    "fontFamily"
    // 'fontWeight',
    // 'lineHeight',
    // 'wrapOption',
    // 'fontStyle',
    // 'direction',
    // 'writingMode'
  ], a = n != null && n.hasAttribute("style") ? n.getAttribute("style") : null;
  return a && t.hasOwnProperty(a) && (s = t[a]), r.reduce((o, l) => {
    const c = Dr(e, i, l) || Dr(n, i, l) || Dr(s, i, l);
    return c && (o[l] = c), o;
  }, {});
}
function Dr(n, e, t) {
  return n && n.hasAttributeNS(e, t) ? n.getAttributeNS(e, t) : null;
}
function so(n) {
  return new Error(`Could not parse ttml timestamp ${n}`);
}
function kr(n, e) {
  if (!n)
    return null;
  let t = ic(n);
  return t === null && (nc.test(n) ? t = pm(n, e) : ac.test(n) && (t = vm(n, e))), t;
}
function pm(n, e) {
  const t = nc.exec(n), i = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + i / e.frameRate;
}
function vm(n, e) {
  const t = ac.exec(n), i = Number(t[1]);
  switch (t[2]) {
    case "h":
      return i * 3600;
    case "m":
      return i * 60;
    case "ms":
      return i * 1e3;
    case "f":
      return i / e.frameRate;
    case "t":
      return i / e.tickRate;
  }
  return i;
}
class ym {
  constructor(e) {
    this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = no(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
      textTrack1: {
        label: this.config.captionsTextTrack1Label,
        languageCode: this.config.captionsTextTrack1LanguageCode
      },
      textTrack2: {
        label: this.config.captionsTextTrack2Label,
        languageCode: this.config.captionsTextTrack2LanguageCode
      },
      textTrack3: {
        label: this.config.captionsTextTrack3Label,
        languageCode: this.config.captionsTextTrack3LanguageCode
      },
      textTrack4: {
        label: this.config.captionsTextTrack4Label,
        languageCode: this.config.captionsTextTrack4LanguageCode
      }
    }, e.on(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(x.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(x.FRAG_LOADING, this.onFragLoading, this), e.on(x.FRAG_LOADED, this.onFragLoaded, this), e.on(x.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(x.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(x.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(x.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(x.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(x.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(x.FRAG_LOADING, this.onFragLoading, this), e.off(x.FRAG_LOADED, this.onFragLoaded, this), e.off(x.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(x.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(x.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(x.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(x.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
  }
  initCea608Parsers() {
    if (this.config.enableCEA708Captions && (!this.cea608Parser1 || !this.cea608Parser2)) {
      const e = new ms(this, "textTrack1"), t = new ms(this, "textTrack2"), i = new ms(this, "textTrack3"), s = new ms(this, "textTrack4");
      this.cea608Parser1 = new eo(1, e, t), this.cea608Parser2 = new eo(3, i, s);
    }
  }
  addCues(e, t, i, s, r) {
    let a = !1;
    for (let o = r.length; o--; ) {
      const l = r[o], c = xm(l[0], l[1], t, i);
      if (c >= 0 && (l[0] = Math.min(l[0], t), l[1] = Math.max(l[1], i), a = !0, c / (i - t) > 0.5))
        return;
    }
    if (a || r.push([t, i]), this.config.renderTextTracksNatively) {
      const o = this.captionsTracks[e];
      this.Cues.newCue(o, t, i, s);
    } else {
      const o = this.Cues.newCue(null, t, i, s);
      this.hls.trigger(x.CUES_PARSED, {
        type: "captions",
        cues: o,
        track: e
      });
    }
  }
  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.
  onInitPtsFound(e, {
    frag: t,
    id: i,
    initPTS: s,
    timescale: r
  }) {
    const {
      unparsedVttFrags: a
    } = this;
    i === "main" && (this.initPTS[t.cc] = {
      baseTime: s,
      timescale: r
    }), a.length && (this.unparsedVttFrags = [], a.forEach((o) => {
      this.onFragLoaded(x.FRAG_LOADED, o);
    }));
  }
  getExistingTrack(e, t) {
    const {
      media: i
    } = this;
    if (i)
      for (let s = 0; s < i.textTracks.length; s++) {
        const r = i.textTracks[s];
        if (ro(r, {
          name: e,
          lang: t
        }))
          return r;
      }
    return null;
  }
  createCaptionsTrack(e) {
    this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
  }
  createNativeTrack(e) {
    if (this.captionsTracks[e])
      return;
    const {
      captionsProperties: t,
      captionsTracks: i,
      media: s
    } = this, {
      label: r,
      languageCode: a
    } = t[e], o = this.getExistingTrack(r, a);
    if (o)
      i[e] = o, Si(i[e]), wl(i[e], s);
    else {
      const l = this.createTextTrack("captions", r, a);
      l && (l[e] = !0, i[e] = l);
    }
  }
  createNonNativeTrack(e) {
    if (this.nonNativeCaptionsTracks[e])
      return;
    const t = this.captionsProperties[e];
    if (!t)
      return;
    const i = t.label, s = {
      _id: e,
      label: i,
      kind: "captions",
      default: t.media ? !!t.media.default : !1,
      closedCaptions: t.media
    };
    this.nonNativeCaptionsTracks[e] = s, this.hls.trigger(x.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks: [s]
    });
  }
  createTextTrack(e, t, i) {
    const s = this.media;
    if (s)
      return s.addTextTrack(e, t, i);
  }
  onMediaAttaching(e, t) {
    this.media = t.media, this._cleanTracks();
  }
  onMediaDetaching() {
    const {
      captionsTracks: e
    } = this;
    Object.keys(e).forEach((t) => {
      Si(e[t]), delete e[t];
    }), this.nonNativeCaptionsTracks = {};
  }
  onManifestLoading() {
    this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = no(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.textTracks;
    if (t)
      for (let i = 0; i < t.length; i++)
        Si(t[i]);
  }
  onSubtitleTracksUpdated(e, t) {
    const i = t.subtitleTracks || [], s = i.some((r) => r.textCodec === Ir);
    if (this.config.enableWebVTT || s && this.config.enableIMSC1) {
      if ($l(this.tracks, i)) {
        this.tracks = i;
        return;
      }
      if (this.textTracks = [], this.tracks = i, this.config.renderTextTracksNatively) {
        const a = this.media, o = a ? bs(a.textTracks) : null;
        if (this.tracks.forEach((l, c) => {
          let d;
          if (o) {
            let u = null;
            for (let h = 0; h < o.length; h++)
              if (o[h] && ro(o[h], l)) {
                u = o[h], o[h] = null;
                break;
              }
            u && (d = u);
          }
          if (d)
            Si(d);
          else {
            const u = lc(l);
            d = this.createTextTrack(u, l.name, l.lang), d && (d.mode = "disabled");
          }
          d && this.textTracks.push(d);
        }), o != null && o.length) {
          const l = o.filter((c) => c !== null).map((c) => c.label);
          l.length && k.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
        }
      } else if (this.tracks.length) {
        const a = this.tracks.map((o) => ({
          label: o.name,
          kind: o.type.toLowerCase(),
          default: o.default,
          subtitleTrack: o
        }));
        this.hls.trigger(x.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks: a
        });
      }
    }
  }
  onManifestLoaded(e, t) {
    this.config.enableCEA708Captions && t.captions && t.captions.forEach((i) => {
      const s = /(?:CC|SERVICE)([1-4])/.exec(i.instreamId);
      if (!s)
        return;
      const r = `textTrack${s[1]}`, a = this.captionsProperties[r];
      a && (a.label = i.name, i.lang && (a.languageCode = i.lang), a.media = i);
    });
  }
  closedCaptionsForLevel(e) {
    const t = this.hls.levels[e.level];
    return t?.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(e, t) {
    if (this.enabled && t.frag.type === pe.MAIN) {
      var i, s;
      const {
        cea608Parser1: r,
        cea608Parser2: a,
        lastSn: o
      } = this, {
        cc: l,
        sn: c
      } = t.frag, d = (i = (s = t.part) == null ? void 0 : s.index) != null ? i : -1;
      r && a && (c !== o + 1 || c === o && d !== this.lastPartIndex + 1 || l !== this.lastCc) && (r.reset(), a.reset()), this.lastCc = l, this.lastSn = c, this.lastPartIndex = d;
    }
  }
  onFragLoaded(e, t) {
    const {
      frag: i,
      payload: s
    } = t;
    if (i.type === pe.SUBTITLE)
      if (s.byteLength) {
        const r = i.decryptdata, a = "stats" in t;
        if (r == null || !r.encrypted || a) {
          const o = this.tracks[i.level], l = this.vttCCs;
          l[i.cc] || (l[i.cc] = {
            start: i.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = i.cc), o && o.textCodec === Ir ? this._parseIMSC1(i, s) : this._parseVTTs(t);
        }
      } else
        this.hls.trigger(x.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: i,
          error: new Error("Empty subtitle payload")
        });
  }
  _parseIMSC1(e, t) {
    const i = this.hls;
    to(t, this.initPTS[e.cc], (s) => {
      this._appendCues(s, e.level), i.trigger(x.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: e
      });
    }, (s) => {
      k.log(`Failed to parse IMSC1: ${s}`), i.trigger(x.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: e,
        error: s
      });
    });
  }
  _parseVTTs(e) {
    var t;
    const {
      frag: i,
      payload: s
    } = e, {
      initPTS: r,
      unparsedVttFrags: a
    } = this, o = r.length - 1;
    if (!r[i.cc] && o === -1) {
      a.push(e);
      return;
    }
    const l = this.hls, c = (t = i.initSegment) != null && t.data ? xt(i.initSegment.data, new Uint8Array(s)) : s;
    hm(c, this.initPTS[i.cc], this.vttCCs, i.cc, i.start, (d) => {
      this._appendCues(d, i.level), l.trigger(x.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: i
      });
    }, (d) => {
      const u = d.message === "Missing initPTS for VTT MPEGTS";
      u ? a.push(e) : this._fallbackToIMSC1(i, s), k.log(`Failed to parse VTT cue: ${d}`), !(u && o > i.cc) && l.trigger(x.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: i,
        error: d
      });
    });
  }
  _fallbackToIMSC1(e, t) {
    const i = this.tracks[e.level];
    i.textCodec || to(t, this.initPTS[e.cc], () => {
      i.textCodec = Ir, this._parseIMSC1(e, t);
    }, () => {
      i.textCodec = "wvtt";
    });
  }
  _appendCues(e, t) {
    const i = this.hls;
    if (this.config.renderTextTracksNatively) {
      const s = this.textTracks[t];
      if (!s || s.mode === "disabled")
        return;
      e.forEach((r) => Rl(s, r));
    } else {
      const s = this.tracks[t];
      if (!s)
        return;
      const r = s.default ? "default" : "subtitles" + t;
      i.trigger(x.CUES_PARSED, {
        type: "subtitles",
        cues: e,
        track: r
      });
    }
  }
  onFragDecrypted(e, t) {
    const {
      frag: i
    } = t;
    i.type === pe.SUBTITLE && this.onFragLoaded(x.FRAG_LOADED, t);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(e, t) {
    this.initCea608Parsers();
    const {
      cea608Parser1: i,
      cea608Parser2: s
    } = this;
    if (!this.enabled || !i || !s)
      return;
    const {
      frag: r,
      samples: a
    } = t;
    if (!(r.type === pe.MAIN && this.closedCaptionsForLevel(r) === "NONE"))
      for (let o = 0; o < a.length; o++) {
        const l = a[o].bytes;
        if (l) {
          const c = this.extractCea608Data(l);
          i.addData(a[o].pts, c[0]), s.addData(a[o].pts, c[1]);
        }
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: i,
    endOffsetSubtitles: s,
    type: r
  }) {
    const {
      media: a
    } = this;
    if (!(!a || a.currentTime < i)) {
      if (!r || r === "video") {
        const {
          captionsTracks: o
        } = this;
        Object.keys(o).forEach((l) => Xr(o[l], t, i));
      }
      if (this.config.renderTextTracksNatively && t === 0 && s !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((l) => Xr(o[l], t, s));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []], i = e[0] & 31;
    let s = 2;
    for (let r = 0; r < i; r++) {
      const a = e[s++], o = 127 & e[s++], l = 127 & e[s++];
      if (o === 0 && l === 0)
        continue;
      if ((4 & a) !== 0) {
        const d = 3 & a;
        (d === 0 || d === 1) && (t[d].push(o), t[d].push(l));
      }
    }
    return t;
  }
}
function lc(n) {
  return n.characteristics && /transcribes-spoken-dialog/gi.test(n.characteristics) && /describes-music-and-sound/gi.test(n.characteristics) ? "captions" : "subtitles";
}
function ro(n, e) {
  return !!n && n.kind === lc(e) && tn(e, n);
}
function xm(n, e, t, i) {
  return Math.min(e, i) - Math.max(n, t);
}
function no() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: -1,
      new: !0
    }
  };
}
class kn {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(x.BUFFER_CODECS, this.onBufferCodecs, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(x.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(x.BUFFER_CODECS, this.onBufferCodecs, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const i = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(i) && this.restrictedLevels.push({
      bitrate: i.bitrate,
      height: i.height,
      width: i.width
    });
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(e, t) {
    const i = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, i.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onLevelsUpdated(e, t) {
    this.timer && ae(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping();
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls, i = this.getMaxLevel(e.length - 1);
        i !== this.autoLevelCapping && k.log(`Setting autoLevelCapping to ${i}: ${e[i].height}p@${e[i].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = i, t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length)
      return -1;
    const i = t.filter((s, r) => this.isLevelAllowed(s) && r <= e);
    return this.clientRect = null, kn.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const e = this.media, t = {
      width: 0,
      height: 0
    };
    if (e) {
      const i = e.getBoundingClientRect();
      t.width = i.width, t.height = i.height, !t.width && !t.height && (t.width = i.right - i.left || e.width || 0, t.height = i.bottom - i.top || e.height || 0);
    }
    return this.clientRect = t, t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {
      }
    return e;
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((i) => e.bitrate === i.bitrate && e.width === i.width && e.height === i.height);
  }
  static getMaxLevelByMediaSize(e, t, i) {
    if (!(e != null && e.length))
      return -1;
    const s = (o, l) => l ? o.width !== l.width || o.height !== l.height : !0;
    let r = e.length - 1;
    const a = Math.max(t, i);
    for (let o = 0; o < e.length; o += 1) {
      const l = e[o];
      if ((l.width >= a || l.height >= a) && s(l, e[o + 1])) {
        r = o;
        break;
      }
    }
    return r;
  }
}
class Em {
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(x.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  unregisterListeners() {
    this.hls.off(x.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
  }
  onMediaAttaching(e, t) {
    const i = this.hls.config;
    if (i.capLevelOnFPSDrop) {
      const s = t.media instanceof self.HTMLVideoElement ? t.media : null;
      this.media = s, s && typeof s.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), i.fpsDroppedMonitoringPeriod);
    }
  }
  checkFPS(e, t, i) {
    const s = performance.now();
    if (t) {
      if (this.lastTime) {
        const r = s - this.lastTime, a = i - this.lastDroppedFrames, o = t - this.lastDecodedFrames, l = 1e3 * a / r, c = this.hls;
        if (c.trigger(x.FPS_DROP, {
          currentDropped: a,
          currentDecoded: o,
          totalDroppedFrames: i
        }), l > 0 && a > c.config.fpsDroppedMonitoringThreshold * o) {
          let d = c.currentLevel;
          k.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (c.autoLevelCapping === -1 || c.autoLevelCapping >= d) && (d = d - 1, c.trigger(x.FPS_DROP_LEVEL_CAPPING, {
            level: d,
            droppedLevel: c.currentLevel
          }), c.autoLevelCapping = d, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = s, this.lastDroppedFrames = i, this.lastDecodedFrames = t;
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
const vs = "[eme]";
class Ri {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = Ri.CDMCleanupPromise ? [Ri.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = k.debug.bind(k, vs), this.log = k.log.bind(k, vs), this.warn = k.warn.bind(k, vs), this.error = k.error.bind(k, vs), this.hls = e, this.config = e.config, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached();
    const e = this.config;
    e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null;
  }
  registerListeners() {
    this.hls.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(x.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(x.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(x.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  unregisterListeners() {
    this.hls.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(x.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(x.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(x.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  getLicenseServerUrl(e) {
    const {
      drmSystems: t,
      widevineLicenseUrl: i
    } = this.config, s = t[e];
    if (s)
      return s.licenseUrl;
    if (e === Xe.WIDEVINE && i)
      return i;
    throw new Error(`no license server URL configured for key-system "${e}"`);
  }
  getServerCertificateUrl(e) {
    const {
      drmSystems: t
    } = this.config, i = t[e];
    if (i)
      return i.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`);
  }
  attemptKeySystemAccess(e) {
    const t = this.hls.levels, i = (a, o, l) => !!a && l.indexOf(a) === o, s = t.map((a) => a.audioCodec).filter(i), r = t.map((a) => a.videoCodec).filter(i);
    return s.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((a, o) => {
      const l = (c) => {
        const d = c.shift();
        this.getMediaKeysPromise(d, s, r).then((u) => a({
          keySystem: d,
          mediaKeys: u
        })).catch((u) => {
          c.length ? l(c) : u instanceof mt ? o(u) : o(new mt({
            type: xe.KEY_SYSTEM_ERROR,
            details: N.KEY_SYSTEM_NO_ACCESS,
            error: u,
            fatal: !0
          }, u.message));
        });
      };
      l(e);
    });
  }
  requestMediaKeySystemAccess(e, t) {
    const {
      requestMediaKeySystemAccessFunc: i
    } = this.config;
    if (typeof i != "function") {
      let s = `Configured requestMediaKeySystemAccess is not a function ${i}`;
      return gl === null && self.location.protocol === "http:" && (s = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(s));
    }
    return i(e, t);
  }
  getMediaKeysPromise(e, t, i) {
    const s = wf(e, t, i, this.config.drmSystemOptions), r = this.keySystemAccessPromises[e];
    let a = r?.keySystemAccess;
    if (!a) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(s)}`), a = this.requestMediaKeySystemAccess(e, s);
      const o = this.keySystemAccessPromises[e] = {
        keySystemAccess: a
      };
      return a.catch((l) => {
        this.log(`Failed to obtain access to key-system "${e}": ${l}`);
      }), a.then((l) => {
        this.log(`Access for key-system "${l.keySystem}" obtained`);
        const c = this.fetchServerCertificate(e);
        return this.log(`Create media-keys for "${e}"`), o.mediaKeys = l.createMediaKeys().then((d) => (this.log(`Media-keys created for "${e}"`), c.then((u) => u ? this.setMediaKeysServerCertificate(d, e, u) : d))), o.mediaKeys.catch((d) => {
          this.error(`Failed to create media-keys for "${e}"}: ${d}`);
        }), o.mediaKeys;
      });
    }
    return a.then(() => r.mediaKeys);
  }
  createMediaKeySessionContext({
    decryptdata: e,
    keySystem: t,
    mediaKeys: i
  }) {
    this.log(`Creating key-system session "${t}" keyId: ${Pt.hexDump(e.keyId || [])}`);
    const s = i.createSession(), r = {
      decryptdata: e,
      keySystem: t,
      mediaKeys: i,
      mediaKeysSession: s,
      keyStatus: "status-pending"
    };
    return this.mediaKeySessions.push(r), r;
  }
  renewKeySession(e) {
    const t = e.decryptdata;
    if (t.pssh) {
      const i = this.createMediaKeySessionContext(e), s = this.getKeyIdString(t), r = "cenc";
      this.keyIdToKeySessionPromise[s] = this.generateRequestWithPreferredKeySession(i, r, t.pssh, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  getKeyIdString(e) {
    if (!e)
      throw new Error("Could not read keyId of undefined decryptdata");
    if (e.keyId === null)
      throw new Error("keyId is null");
    return Pt.hexDump(e.keyId);
  }
  updateKeySession(e, t) {
    var i;
    const s = e.mediaKeysSession;
    return this.log(`Updating key-session "${s.sessionId}" for keyID ${Pt.hexDump(((i = e.decryptdata) == null ? void 0 : i.keyId) || [])}
      } (data length: ${t && t.byteLength})`), s.update(t);
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise;
  }
  getKeyFormatPromise(e) {
    return new Promise((t, i) => {
      const s = gr(this.config), r = e.map(ha).filter((a) => !!a && s.indexOf(a) !== -1);
      return this.getKeySystemSelectionPromise(r).then(({
        keySystem: a
      }) => {
        const o = fa(a);
        o ? t(o) : i(new Error(`Unable to find format for key-system "${a}"`));
      }).catch(i);
    });
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata, i = this.getKeyIdString(t), s = `(keyId: ${i} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${s}`);
    let r = this.keyIdToKeySessionPromise[i];
    return r || (r = this.keyIdToKeySessionPromise[i] = this.getKeySystemForKeyPromise(t).then(({
      keySystem: a,
      mediaKeys: o
    }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${s}`), this.attemptSetMediaKeys(a, o).then(() => {
      this.throwIfDestroyed();
      const l = this.createMediaKeySessionContext({
        keySystem: a,
        mediaKeys: o,
        decryptdata: t
      });
      return this.generateRequestWithPreferredKeySession(l, "cenc", t.pssh, "playlist-key");
    }))), r.catch((a) => this.handleError(a))), r;
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(e) {
    this.hls && (this.error(e.message), e instanceof mt ? this.hls.trigger(x.ERROR, e.data) : this.hls.trigger(x.ERROR, {
      type: xe.KEY_SYSTEM_ERROR,
      details: N.KEY_SYSTEM_NO_KEYS,
      error: e,
      fatal: !0
    }));
  }
  getKeySystemForKeyPromise(e) {
    const t = this.getKeyIdString(e), i = this.keyIdToKeySessionPromise[t];
    if (!i) {
      const s = ha(e.keyFormat), r = s ? [s] : gr(this.config);
      return this.attemptKeySystemAccess(r);
    }
    return i;
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = gr(this.config)), e.length === 0)
      throw new mt({
        type: xe.KEY_SYSTEM_ERROR,
        details: N.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${JSON.stringify({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(e);
  }
  _onMediaEncrypted(e) {
    const {
      initDataType: t,
      initData: i
    } = e;
    if (this.debug(`"${e.type}" event: init data type: "${t}"`), i === null)
      return;
    let s, r;
    if (t === "sinf" && this.config.drmSystems[Xe.FAIRPLAY]) {
      const d = rt(new Uint8Array(i));
      try {
        const u = vn(JSON.parse(d).sinf), h = bl(new Uint8Array(u));
        if (!h)
          return;
        s = h.subarray(8, 24), r = Xe.FAIRPLAY;
      } catch {
        this.warn('Failed to parse sinf "encrypted" event message initData');
        return;
      }
    } else {
      const d = Jf(i);
      if (d === null)
        return;
      d.version === 0 && d.systemId === fl.WIDEVINE && d.data && (s = d.data.subarray(8, 24)), r = Lf(d.systemId);
    }
    if (!r || !s)
      return;
    const a = Pt.hexDump(s), {
      keyIdToKeySessionPromise: o,
      mediaKeySessions: l
    } = this;
    let c = o[a];
    for (let d = 0; d < l.length; d++) {
      const u = l[d], h = u.decryptdata;
      if (h.pssh || !h.keyId)
        continue;
      const f = Pt.hexDump(h.keyId);
      if (a === f || h.uri.replace(/-/g, "").indexOf(a) !== -1) {
        c = o[f], delete o[f], h.pssh = new Uint8Array(i), h.keyId = s, c = o[a] = c.then(() => this.generateRequestWithPreferredKeySession(u, t, i, "encrypted-event-key-match"));
        break;
      }
    }
    c || (c = o[a] = this.getKeySystemSelectionPromise([r]).then(({
      keySystem: d,
      mediaKeys: u
    }) => {
      var h;
      this.throwIfDestroyed();
      const f = new qi("ISO-23001-7", a, (h = fa(d)) != null ? h : "");
      return f.pssh = new Uint8Array(i), f.keyId = s, this.attemptSetMediaKeys(d, u).then(() => {
        this.throwIfDestroyed();
        const g = this.createMediaKeySessionContext({
          decryptdata: f,
          keySystem: d,
          mediaKeys: u
        });
        return this.generateRequestWithPreferredKeySession(g, t, i, "encrypted-event-no-match");
      });
    })), c.catch((d) => this.handleError(d));
  }
  _onWaitingForKey(e) {
    this.log(`"${e.type}" event`);
  }
  attemptSetMediaKeys(e, t) {
    const i = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const s = Promise.all(i).then(() => {
      if (!this.media)
        throw new Error("Attempted to set mediaKeys without media element attached");
      return this.media.setMediaKeys(t);
    });
    return this.setMediaKeysQueue.push(s), s.then(() => {
      this.log(`Media-keys set for "${e}"`), i.push(s), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((r) => i.indexOf(r) === -1);
    });
  }
  generateRequestWithPreferredKeySession(e, t, i, s) {
    var r, a;
    const o = (r = this.config.drmSystems) == null || (a = r[e.keySystem]) == null ? void 0 : a.generateRequest;
    if (o)
      try {
        const g = o.call(this.hls, t, i, e);
        if (!g)
          throw new Error("Invalid response from configured generateRequest filter");
        t = g.initDataType, i = e.decryptdata.pssh = g.initData ? new Uint8Array(g.initData) : null;
      } catch (g) {
        var l;
        if (this.warn(g.message), (l = this.hls) != null && l.config.debug)
          throw g;
      }
    if (i === null)
      return this.log(`Skipping key-session request for "${s}" (no initData)`), Promise.resolve(e);
    const c = this.getKeyIdString(e.decryptdata);
    this.log(`Generating key-session request for "${s}": ${c} (init data type: ${t} length: ${i ? i.byteLength : null})`);
    const d = new In(), u = e._onmessage = (g) => {
      const m = e.mediaKeysSession;
      if (!m) {
        d.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: p,
        message: v
      } = g;
      this.log(`"${p}" message event for session "${m.sessionId}" message size: ${v.byteLength}`), p === "license-request" || p === "license-renewal" ? this.renewLicense(e, v).catch((b) => {
        this.handleError(b), d.emit("error", b);
      }) : p === "license-release" ? e.keySystem === Xe.FAIRPLAY && (this.updateKeySession(e, zr("acknowledged")), this.removeSession(e)) : this.warn(`unhandled media key message type "${p}"`);
    }, h = e._onkeystatuseschange = (g) => {
      if (!e.mediaKeysSession) {
        d.emit("error", new Error("invalid state"));
        return;
      }
      this.onKeyStatusChange(e);
      const p = e.keyStatus;
      d.emit("keyStatus", p), p === "expired" && (this.warn(`${e.keySystem} expired for key ${c}`), this.renewKeySession(e));
    };
    e.mediaKeysSession.addEventListener("message", u), e.mediaKeysSession.addEventListener("keystatuseschange", h);
    const f = new Promise((g, m) => {
      d.on("error", m), d.on("keyStatus", (p) => {
        p.startsWith("usable") ? g() : p === "output-restricted" ? m(new mt({
          type: xe.KEY_SYSTEM_ERROR,
          details: N.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
          fatal: !1
        }, "HDCP level output restricted")) : p === "internal-error" ? m(new mt({
          type: xe.KEY_SYSTEM_ERROR,
          details: N.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
          fatal: !0
        }, `key status changed to "${p}"`)) : p === "expired" ? m(new Error("key expired while generating request")) : this.warn(`unhandled key status change "${p}"`);
      });
    });
    return e.mediaKeysSession.generateRequest(t, i).then(() => {
      var g;
      this.log(`Request generated for key-session "${(g = e.mediaKeysSession) == null ? void 0 : g.sessionId}" keyId: ${c}`);
    }).catch((g) => {
      throw new mt({
        type: xe.KEY_SYSTEM_ERROR,
        details: N.KEY_SYSTEM_NO_SESSION,
        error: g,
        fatal: !1
      }, `Error generating key-session request: ${g}`);
    }).then(() => f).catch((g) => {
      throw d.removeAllListeners(), this.removeSession(e), g;
    }).then(() => (d.removeAllListeners(), e));
  }
  onKeyStatusChange(e) {
    e.mediaKeysSession.keyStatuses.forEach((t, i) => {
      this.log(`key status change "${t}" for keyStatuses keyId: ${Pt.hexDump("buffer" in i ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : new Uint8Array(i))} session keyId: ${Pt.hexDump(new Uint8Array(e.decryptdata.keyId || []))} uri: ${e.decryptdata.uri}`), e.keyStatus = t;
    });
  }
  fetchServerCertificate(e) {
    const t = this.config, i = t.loader, s = new i(t), r = this.getServerCertificateUrl(e);
    return r ? (this.log(`Fetching server certificate for "${e}"`), new Promise((a, o) => {
      const l = {
        responseType: "arraybuffer",
        url: r
      }, c = t.certLoadPolicy.default, d = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, u = {
        onSuccess: (h, f, g, m) => {
          a(h.data);
        },
        onError: (h, f, g, m) => {
          o(new mt({
            type: xe.KEY_SYSTEM_ERROR,
            details: N.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: ot({
              url: l.url,
              data: void 0
            }, h)
          }, `"${e}" certificate request failed (${r}). Status: ${h.code} (${h.text})`));
        },
        onTimeout: (h, f, g) => {
          o(new mt({
            type: xe.KEY_SYSTEM_ERROR,
            details: N.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: {
              url: l.url,
              data: void 0
            }
          }, `"${e}" certificate request timed out (${r})`));
        },
        onAbort: (h, f, g) => {
          o(new Error("aborted"));
        }
      };
      s.load(l, d, u);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, i) {
    return new Promise((s, r) => {
      e.setServerCertificate(i).then((a) => {
        this.log(`setServerCertificate ${a ? "success" : "not supported by CDM"} (${i?.byteLength}) on "${t}"`), s(e);
      }).catch((a) => {
        r(new mt({
          type: xe.KEY_SYSTEM_ERROR,
          details: N.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: a,
          fatal: !0
        }, a.message));
      });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((i) => this.updateKeySession(e, new Uint8Array(i)).catch((s) => {
      throw new mt({
        type: xe.KEY_SYSTEM_ERROR,
        details: N.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        error: s,
        fatal: !0
      }, s.message);
    }));
  }
  unpackPlayReadyKeyMessage(e, t) {
    const i = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if (!i.includes("PlayReadyKeyMessage"))
      return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    const s = new DOMParser().parseFromString(i, "application/xml"), r = s.querySelectorAll("HttpHeader");
    if (r.length > 0) {
      let d;
      for (let u = 0, h = r.length; u < h; u++) {
        var a, o;
        d = r[u];
        const f = (a = d.querySelector("name")) == null ? void 0 : a.textContent, g = (o = d.querySelector("value")) == null ? void 0 : o.textContent;
        f && g && e.setRequestHeader(f, g);
      }
    }
    const l = s.querySelector("Challenge"), c = l?.textContent;
    if (!c)
      throw new Error("Cannot find <Challenge> in key message");
    return zr(atob(c));
  }
  setupLicenseXHR(e, t, i, s) {
    const r = this.config.licenseXhrSetup;
    return r ? Promise.resolve().then(() => {
      if (!i.decryptdata)
        throw new Error("Key removed");
      return r.call(this.hls, e, t, i, s);
    }).catch((a) => {
      if (!i.decryptdata)
        throw a;
      return e.open("POST", t, !0), r.call(this.hls, e, t, i, s);
    }).then((a) => (e.readyState || e.open("POST", t, !0), {
      xhr: e,
      licenseChallenge: a || s
    })) : (e.open("POST", t, !0), Promise.resolve({
      xhr: e,
      licenseChallenge: s
    }));
  }
  requestLicense(e, t) {
    const i = this.config.keyLoadPolicy.default;
    return new Promise((s, r) => {
      const a = this.getLicenseServerUrl(e.keySystem);
      this.log(`Sending license request to URL: ${a}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession)
          return r(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let l = o.response;
            this.log(`License received ${l instanceof ArrayBuffer ? l.byteLength : l}`);
            const c = this.config.licenseResponseCallback;
            if (c)
              try {
                l = c.call(this.hls, o, a, e);
              } catch (d) {
                this.error(d);
              }
            s(l);
          } else {
            const l = i.errorRetry, c = l ? l.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > c || o.status >= 400 && o.status < 500)
              r(new mt({
                type: xe.KEY_SYSTEM_ERROR,
                details: N.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                fatal: !0,
                networkDetails: o,
                response: {
                  url: a,
                  data: void 0,
                  code: o.status,
                  text: o.statusText
                }
              }, `License Request XHR failed (${a}). Status: ${o.status} (${o.statusText})`));
            else {
              const d = c - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${d} attempts left`), this.requestLicense(e, t).then(s, r);
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, a, e, t).then(({
        xhr: l,
        licenseChallenge: c
      }) => {
        e.keySystem == Xe.PLAYREADY && (c = this.unpackPlayReadyKeyMessage(l, c)), l.send(c);
      });
    });
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled)
      return;
    const i = t.media;
    this.media = i, i.addEventListener("encrypted", this.onMediaEncrypted), i.addEventListener("waitingforkey", this.onWaitingForKey);
  }
  onMediaDetached() {
    const e = this.media, t = this.mediaKeySessions;
    e && (e.removeEventListener("encrypted", this.onMediaEncrypted), e.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, qi.clearKeyUriToKeyIdMap();
    const i = t.length;
    Ri.CDMCleanupPromise = Promise.all(t.map((s) => this.removeSession(s)).concat(e?.setMediaKeys(null).catch((s) => {
      this.log(`Could not clear media keys: ${s}`);
    }))).then(() => {
      i && (this.log("finished closing key sessions and clearing media keys"), t.length = 0);
    }).catch((s) => {
      this.log(`Could not close sessions and clear media keys: ${s}`);
    });
  }
  onManifestLoading() {
    this.keyFormatPromise = null;
  }
  onManifestLoaded(e, {
    sessionKeys: t
  }) {
    if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const i = t.reduce((s, r) => (s.indexOf(r.keyFormat) === -1 && s.push(r.keyFormat), s), []);
      this.log(`Selecting key-system from session-keys ${i.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(i);
    }
  }
  removeSession(e) {
    const {
      mediaKeysSession: t,
      licenseXhr: i
    } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session ${t.sessionId}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = void 0), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = void 0), i && i.readyState !== XMLHttpRequest.DONE && i.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
      const s = this.mediaKeySessions.indexOf(e);
      return s > -1 && this.mediaKeySessions.splice(s, 1), t.remove().catch((r) => {
        this.log(`Could not remove session: ${r}`);
      }).then(() => t.close()).catch((r) => {
        this.log(`Could not close session: ${r}`);
      });
    }
  }
}
Ri.CDMCleanupPromise = void 0;
class mt extends Error {
  constructor(e, t) {
    super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error;
  }
}
var dt;
(function(n) {
  n.MANIFEST = "m", n.AUDIO = "a", n.VIDEO = "v", n.MUXED = "av", n.INIT = "i", n.CAPTION = "c", n.TIMED_TEXT = "tt", n.KEY = "k", n.OTHER = "o";
})(dt || (dt = {}));
var rn;
(function(n) {
  n.DASH = "d", n.HLS = "h", n.SMOOTH = "s", n.OTHER = "o";
})(rn || (rn = {}));
var ai;
(function(n) {
  n.OBJECT = "CMCD-Object", n.REQUEST = "CMCD-Request", n.SESSION = "CMCD-Session", n.STATUS = "CMCD-Status";
})(ai || (ai = {}));
const Tm = {
  [ai.OBJECT]: ["br", "d", "ot", "tb"],
  [ai.REQUEST]: ["bl", "dl", "mtp", "nor", "nrr", "su"],
  [ai.SESSION]: ["cid", "pr", "sf", "sid", "st", "v"],
  [ai.STATUS]: ["bs", "rtp"]
};
class Mi {
  constructor(e, t) {
    this.value = void 0, this.params = void 0, Array.isArray(e) && (e = e.map((i) => i instanceof Mi ? i : new Mi(i))), this.value = e, this.params = t;
  }
}
class cc {
  constructor(e) {
    this.description = void 0, this.description = e;
  }
}
const bm = "Dict";
function _m(n) {
  return Array.isArray(n) ? JSON.stringify(n) : n instanceof Map ? "Map{}" : n instanceof Set ? "Set{}" : typeof n == "object" ? JSON.stringify(n) : String(n);
}
function Sm(n, e, t, i) {
  return new Error(`failed to ${n} "${_m(e)}" as ${t}`, {
    cause: i
  });
}
const ao = "Bare Item", Am = "Boolean", Lm = "Byte Sequence", wm = "Decimal", Rm = "Integer";
function Im(n) {
  return n < -999999999999999 || 999999999999999 < n;
}
const Cm = /[\x00-\x1f\x7f]+/, Dm = "Token", km = "Key";
function Gt(n, e, t) {
  return Sm("serialize", n, e, t);
}
function Pm(n) {
  if (typeof n != "boolean")
    throw Gt(n, Am);
  return n ? "?1" : "?0";
}
function Om(n) {
  return btoa(String.fromCharCode(...n));
}
function Mm(n) {
  if (ArrayBuffer.isView(n) === !1)
    throw Gt(n, Lm);
  return `:${Om(n)}:`;
}
function dc(n) {
  if (Im(n))
    throw Gt(n, Rm);
  return n.toString();
}
function Fm(n) {
  return `@${dc(n.getTime() / 1e3)}`;
}
function uc(n, e) {
  if (n < 0)
    return -uc(-n, e);
  const t = Math.pow(10, e);
  if (Math.abs(n * t % 1 - 0.5) < Number.EPSILON) {
    const s = Math.floor(n * t);
    return (s % 2 === 0 ? s : s + 1) / t;
  } else
    return Math.round(n * t) / t;
}
function Nm(n) {
  const e = uc(n, 3);
  if (Math.floor(Math.abs(e)).toString().length > 12)
    throw Gt(n, wm);
  const t = e.toString();
  return t.includes(".") ? t : `${t}.0`;
}
const Bm = "String";
function Um(n) {
  if (Cm.test(n))
    throw Gt(n, Bm);
  return `"${n.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function Gm(n) {
  return n.description || n.toString().slice(7, -1);
}
function oo(n) {
  const e = Gm(n);
  if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e) === !1)
    throw Gt(e, Dm);
  return e;
}
function nn(n) {
  switch (typeof n) {
    case "number":
      if (!ae(n))
        throw Gt(n, ao);
      return Number.isInteger(n) ? dc(n) : Nm(n);
    case "string":
      return Um(n);
    case "symbol":
      return oo(n);
    case "boolean":
      return Pm(n);
    case "object":
      if (n instanceof Date)
        return Fm(n);
      if (n instanceof Uint8Array)
        return Mm(n);
      if (n instanceof cc)
        return oo(n);
    default:
      throw Gt(n, ao);
  }
}
function an(n) {
  if (/^[a-z*][a-z0-9\-_.*]*$/.test(n) === !1)
    throw Gt(n, km);
  return n;
}
function Pn(n) {
  return n == null ? "" : Object.entries(n).map(([e, t]) => t === !0 ? `;${an(e)}` : `;${an(e)}=${nn(t)}`).join("");
}
function hc(n) {
  return n instanceof Mi ? `${nn(n.value)}${Pn(n.params)}` : nn(n);
}
function Hm(n) {
  return `(${n.value.map(hc).join(" ")})${Pn(n.params)}`;
}
function Vm(n, e = {
  whitespace: !0
}) {
  if (typeof n != "object")
    throw Gt(n, bm);
  const t = n instanceof Map ? n.entries() : Object.entries(n), i = e != null && e.whitespace ? " " : "";
  return Array.from(t).map(([s, r]) => {
    r instanceof Mi || (r = new Mi(r));
    let a = an(s);
    return r.value === !0 ? a += Pn(r.params) : (a += "=", Array.isArray(r.value) ? a += Hm(r) : a += hc(r)), a;
  }).join(`,${i}`);
}
function Km(n, e) {
  return Vm(n, e);
}
const Wm = (n) => n === "ot" || n === "sf" || n === "st", jm = (n) => typeof n == "number" ? ae(n) : n != null && n !== "" && n !== !1;
function Ym(n, e) {
  const t = new URL(n), i = new URL(e);
  if (t.origin !== i.origin)
    return n;
  const s = t.pathname.split("/").slice(1), r = i.pathname.split("/").slice(1, -1);
  for (; s[0] === r[0]; )
    s.shift(), r.shift();
  for (; r.length; )
    r.shift(), s.unshift("..");
  return s.join("/");
}
function zm() {
  try {
    return crypto.randomUUID();
  } catch {
    try {
      const e = URL.createObjectURL(new Blob()), t = e.toString();
      return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
    } catch {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s) => {
        const r = (t + Math.random() * 16) % 16 | 0;
        return t = Math.floor(t / 16), (s == "x" ? r : r & 3 | 8).toString(16);
      });
    }
  }
}
const Rs = (n) => Math.round(n), qm = (n, e) => (e != null && e.baseUrl && (n = Ym(n, e.baseUrl)), encodeURIComponent(n)), ys = (n) => Rs(n / 100) * 100, Xm = {
  /**
   * Bitrate (kbps) rounded integer
   */
  br: Rs,
  /**
   * Duration (milliseconds) rounded integer
   */
  d: Rs,
  /**
   * Buffer Length (milliseconds) rounded nearest 100ms
   */
  bl: ys,
  /**
   * Deadline (milliseconds) rounded nearest 100ms
   */
  dl: ys,
  /**
   * Measured Throughput (kbps) rounded nearest 100kbps
   */
  mtp: ys,
  /**
   * Next Object Request URL encoded
   */
  nor: qm,
  /**
   * Requested maximum throughput (kbps) rounded nearest 100kbps
   */
  rtp: ys,
  /**
   * Top Bitrate (kbps) rounded integer
   */
  tb: Rs
};
function Qm(n, e) {
  const t = {};
  if (n == null || typeof n != "object")
    return t;
  const i = Object.keys(n).sort(), s = it({}, Xm, e?.formatters), r = e?.filter;
  return i.forEach((a) => {
    if (r != null && r(a))
      return;
    let o = n[a];
    const l = s[a];
    l && (o = l(o, e)), !(a === "v" && o === 1) && (a == "pr" && o === 1 || jm(o) && (Wm(a) && typeof o == "string" && (o = new cc(o)), t[a] = o));
  }), t;
}
function fc(n, e = {}) {
  return n ? Km(Qm(n, e), it({
    whitespace: !1
  }, e)) : "";
}
function Zm(n, e = {}) {
  if (!n)
    return {};
  const t = Object.entries(n), i = Object.entries(Tm).concat(Object.entries(e?.customHeaderMap || {})), s = t.reduce((r, a) => {
    var o, l;
    const [c, d] = a, u = ((o = i.find((h) => h[1].includes(c))) == null ? void 0 : o[0]) || ai.REQUEST;
    return (l = r[u]) != null || (r[u] = {}), r[u][c] = d, r;
  }, {});
  return Object.entries(s).reduce((r, [a, o]) => (r[a] = fc(o, e), r), {});
}
function Jm(n, e, t) {
  return it(n, Zm(e, t));
}
const $m = "CMCD";
function ep(n, e = {}) {
  if (!n)
    return "";
  const t = fc(n, e);
  return `${$m}=${encodeURIComponent(t)}`;
}
const lo = /CMCD=[^&#]+/;
function tp(n, e, t) {
  const i = ep(e, t);
  if (!i)
    return n;
  if (lo.test(n))
    return n.replace(lo, i);
  const s = n.includes("?") ? "&" : "?";
  return `${n}${s}${i}`;
}
class ip {
  // eslint-disable-line no-restricted-globals
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (s) => {
      try {
        this.apply(s, {
          ot: dt.MANIFEST,
          su: !this.initialized
        });
      } catch (r) {
        k.warn("Could not generate manifest CMCD data.", r);
      }
    }, this.applyFragmentData = (s) => {
      try {
        const r = s.frag, a = this.hls.levels[r.level], o = this.getObjectType(r), l = {
          d: r.duration * 1e3,
          ot: o
        };
        (o === dt.VIDEO || o === dt.AUDIO || o == dt.MUXED) && (l.br = a.bitrate / 1e3, l.tb = this.getTopBandwidth(o) / 1e3, l.bl = this.getBufferLength(o)), this.apply(s, l);
      } catch (r) {
        k.warn("Could not generate segment CMCD data.", r);
      }
    }, this.hls = e;
    const t = this.config = e.config, {
      cmcd: i
    } = t;
    i != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = i.sessionId || zm(), this.cid = i.contentId, this.useHeaders = i.useHeaders === !0, this.includeKeys = i.includeKeys, this.registerListeners());
  }
  registerListeners() {
    const e = this.hls;
    e.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(x.MEDIA_DETACHED, this.onMediaDetached, this), e.on(x.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(x.MEDIA_DETACHED, this.onMediaDetached, this), e.off(x.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = null;
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
  }
  onBufferCreated(e, t) {
    var i, s;
    this.audioBuffer = (i = t.tracks.audio) == null ? void 0 : i.buffer, this.videoBuffer = (s = t.tracks.video) == null ? void 0 : s.buffer;
  }
  /**
   * Create baseline CMCD data
   */
  createData() {
    var e;
    return {
      v: 1,
      sf: rn.HLS,
      sid: this.sid,
      cid: this.cid,
      pr: (e = this.media) == null ? void 0 : e.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3
    };
  }
  /**
   * Apply CMCD data to a request.
   */
  apply(e, t = {}) {
    it(t, this.createData());
    const i = t.ot === dt.INIT || t.ot === dt.VIDEO || t.ot === dt.MUXED;
    this.starved && i && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering);
    const {
      includeKeys: s
    } = this;
    s && (t = Object.keys(t).reduce((r, a) => (s.includes(a) && (r[a] = t[a]), r), {})), this.useHeaders ? (e.headers || (e.headers = {}), Jm(e.headers, t)) : e.url = tp(e.url, t);
  }
  /**
   * The CMCD object type.
   */
  getObjectType(e) {
    const {
      type: t
    } = e;
    if (t === "subtitle")
      return dt.TIMED_TEXT;
    if (e.sn === "initSegment")
      return dt.INIT;
    if (t === "audio")
      return dt.AUDIO;
    if (t === "main")
      return this.hls.audioTracks.length ? dt.VIDEO : dt.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(e) {
    let t = 0, i;
    const s = this.hls;
    if (e === dt.AUDIO)
      i = s.audioTracks;
    else {
      const r = s.maxAutoLevel, a = r > -1 ? r + 1 : s.levels.length;
      i = s.levels.slice(0, a);
    }
    for (const r of i)
      r.bitrate > t && (t = r.bitrate);
    return t > 0 ? t : NaN;
  }
  /**
   * Get the buffer length for a media type in milliseconds
   */
  getBufferLength(e) {
    const t = this.hls.media, i = e === dt.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !i || !t ? NaN : Ke.bufferInfo(i, t.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  /**
   * Create a playlist loader
   */
  createPlaylistLoader() {
    const {
      pLoader: e
    } = this.config, t = this.applyPlaylistData, i = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new i(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, a, o) {
        t(r), this.loader.load(r, a, o);
      }
    };
  }
  /**
   * Create a playlist loader
   */
  createFragmentLoader() {
    const {
      fLoader: e
    } = this.config, t = this.applyFragmentData, i = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new i(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, a, o) {
        t(r), this.loader.load(r, a, o);
      }
    };
  }
}
const sp = 3e5;
class rp {
  constructor(e) {
    this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.log = k.log.bind(k, "[content-steering]:"), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.ERROR, this.onError, this));
  }
  startLoad() {
    if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (e > 0) {
          this.scheduleRefresh(this.uri, e);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((i) => i !== e));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(e, t) {
    const {
      contentSteering: i
    } = t;
    i !== null && (this.pathwayId = i.pathwayId, this.uri = i.uri, this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks;
  }
  onError(e, t) {
    const {
      errorAction: i
    } = t;
    if (i?.action === lt.SendAlternateToPenaltyBox && i.flags === Tt.MoveAllAlternatesMatchingHost) {
      const s = this.levels;
      let r = this.pathwayPriority, a = this.pathwayId;
      if (t.context) {
        const {
          groupId: o,
          pathwayId: l,
          type: c
        } = t.context;
        o && s ? a = this.getPathwayForGroupId(o, c, a) : l && (a = l);
      }
      a in this.penalizedPathways || (this.penalizedPathways[a] = performance.now()), !r && s && (r = s.reduce((o, l) => (o.indexOf(l.pathwayId) === -1 && o.push(l.pathwayId), o), [])), r && r.length > 1 && (this.updatePathwayPriority(r), i.resolved = this.pathwayId !== a), i.resolved || k.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${a} levels: ${s && s.length} priorities: ${JSON.stringify(r)} penalized: ${JSON.stringify(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const i = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${i}"`), t = this.getLevelsForPathway(i), this.pathwayId = i;
    }
    return t.length !== e.length ? (this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t) : e;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this.pathwayPriority = e;
    let t;
    const i = this.penalizedPathways, s = performance.now();
    Object.keys(i).forEach((r) => {
      s - i[r] > sp && delete i[r];
    });
    for (let r = 0; r < e.length; r++) {
      const a = e[r];
      if (a in i)
        continue;
      if (a === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, l = this.hls.levels[o];
      if (t = this.getLevelsForPathway(a), t.length > 0) {
        this.log(`Setting Pathway to "${a}"`), this.pathwayId = a, kl(t), this.hls.trigger(x.LEVELS_UPDATED, {
          levels: t
        });
        const c = this.hls.levels[o];
        l && c && this.levels && (c.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] && c.bitrate !== l.bitrate && this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(e, t, i) {
    const s = this.getLevelsForPathway(i).concat(this.levels || []);
    for (let r = 0; r < s.length; r++)
      if (t === Me.AUDIO_TRACK && s[r].hasAudioGroup(e) || t === Me.SUBTITLE_TRACK && s[r].hasSubtitleGroup(e))
        return s[r].pathwayId;
    return i;
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t)
      return;
    const i = {}, s = {};
    e.forEach((r) => {
      const {
        ID: a,
        "BASE-ID": o,
        "URI-REPLACEMENT": l
      } = r;
      if (t.some((d) => d.pathwayId === a))
        return;
      const c = this.getLevelsForPathway(o).map((d) => {
        const u = new Ze(d.attrs);
        u["PATHWAY-ID"] = a;
        const h = u.AUDIO && `${u.AUDIO}_clone_${a}`, f = u.SUBTITLES && `${u.SUBTITLES}_clone_${a}`;
        h && (i[u.AUDIO] = h, u.AUDIO = h), f && (s[u.SUBTITLES] = f, u.SUBTITLES = f);
        const g = gc(d.uri, u["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l), m = new Pi({
          attrs: u,
          audioCodec: d.audioCodec,
          bitrate: d.bitrate,
          height: d.height,
          name: d.name,
          url: g,
          videoCodec: d.videoCodec,
          width: d.width
        });
        if (d.audioGroups)
          for (let p = 1; p < d.audioGroups.length; p++)
            m.addGroupId("audio", `${d.audioGroups[p]}_clone_${a}`);
        if (d.subtitleGroups)
          for (let p = 1; p < d.subtitleGroups.length; p++)
            m.addGroupId("text", `${d.subtitleGroups[p]}_clone_${a}`);
        return m;
      });
      t.push(...c), co(this.audioTracks, i, l, a), co(this.subtitleTracks, s, l, a);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config, i = t.loader;
    this.loader && this.loader.destroy(), this.loader = new i(t);
    let s;
    try {
      s = new self.URL(e);
    } catch {
      this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (s.protocol !== "data:") {
      const d = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      s.searchParams.set("_HLS_pathway", this.pathwayId), s.searchParams.set("_HLS_throughput", "" + d);
    }
    const r = {
      responseType: "json",
      url: s.href
    }, a = t.steeringManifestLoadPolicy.default, o = a.errorRetry || a.timeoutRetry || {}, l = {
      loadPolicy: a,
      timeout: a.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, c = {
      onSuccess: (d, u, h, f) => {
        this.log(`Loaded steering manifest: "${s}"`);
        const g = d.data;
        if (g.VERSION !== 1) {
          this.log(`Steering VERSION ${g.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = g.TTL;
        const {
          "RELOAD-URI": m,
          "PATHWAY-CLONES": p,
          "PATHWAY-PRIORITY": v
        } = g;
        if (m)
          try {
            this.uri = new self.URL(m, s).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${m}`);
            return;
          }
        this.scheduleRefresh(this.uri || h.url), p && this.clonePathways(p);
        const b = {
          steeringManifest: g,
          url: s.toString()
        };
        this.hls.trigger(x.STEERING_MANIFEST_LOADED, b), v && this.updatePathwayPriority(v);
      },
      onError: (d, u, h, f) => {
        if (this.log(`Error loading steering manifest: ${d.code} ${d.text} (${u.url})`), this.stopLoad(), d.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${u.url} no longer available`);
          return;
        }
        let g = this.timeToLoad * 1e3;
        if (d.code === 429) {
          const m = this.loader;
          if (typeof m?.getResponseHeader == "function") {
            const p = m.getResponseHeader("Retry-After");
            p && (g = parseFloat(p) * 1e3);
          }
          this.log(`Steering manifest ${u.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || u.url, g);
      },
      onTimeout: (d, u, h) => {
        this.log(`Timeout loading steering manifest (${u.url})`), this.scheduleRefresh(this.uri || u.url);
      }
    };
    this.log(`Requesting steering manifest: ${s}`), this.loader.load(r, l, c);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var i;
      const s = (i = this.hls) == null ? void 0 : i.media;
      if (s && !s.ended) {
        this.loadSteeringManifest(e);
        return;
      }
      this.scheduleRefresh(e, this.timeToLoad * 1e3);
    }, t);
  }
}
function co(n, e, t, i) {
  n && Object.keys(e).forEach((s) => {
    const r = n.filter((a) => a.groupId === s).map((a) => {
      const o = it({}, a);
      return o.details = void 0, o.attrs = new Ze(o.attrs), o.url = o.attrs.URI = gc(a.url, a.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[s], o.attrs["PATHWAY-ID"] = i, o;
    });
    n.push(...r);
  });
}
function gc(n, e, t, i) {
  const {
    HOST: s,
    PARAMS: r,
    [t]: a
  } = i;
  let o;
  e && (o = a?.[e], o && (n = o));
  const l = new self.URL(n);
  return s && !o && (l.host = s), r && Object.keys(r).sort().forEach((c) => {
    c && l.searchParams.set(c, r[c]);
  }), l.href;
}
const np = /^age:\s*[\d.]+\s*$/im;
class mc {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new $s(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = !0, e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, i) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = i, this.loadInternal();
  }
  loadInternal() {
    const {
      config: e,
      context: t
    } = this;
    if (!e || !t)
      return;
    const i = this.loader = new self.XMLHttpRequest(), s = this.stats;
    s.loading.first = 0, s.loaded = 0, s.aborted = !1;
    const r = this.xhrSetup;
    r ? Promise.resolve().then(() => {
      if (!(this.loader !== i || this.stats.aborted))
        return r(i, t.url);
    }).catch((a) => {
      if (!(this.loader !== i || this.stats.aborted))
        return i.open("GET", t.url, !0), r(i, t.url);
    }).then(() => {
      this.loader !== i || this.stats.aborted || this.openAndSendXhr(i, t, e);
    }).catch((a) => {
      this.callbacks.onError({
        code: i.status,
        text: a.message
      }, t, i, s);
    }) : this.openAndSendXhr(i, t, e);
  }
  openAndSendXhr(e, t, i) {
    e.readyState || e.open("GET", t.url, !0);
    const s = t.headers, {
      maxTimeToFirstByteMs: r,
      maxLoadTimeMs: a
    } = i.loadPolicy;
    if (s)
      for (const o in s)
        e.setRequestHeader(o, s[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), i.timeout = r && ae(r) ? r : a, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), i.timeout), e.send();
  }
  readystatechange() {
    const {
      context: e,
      loader: t,
      stats: i
    } = this;
    if (!e || !t)
      return;
    const s = t.readyState, r = this.config;
    if (!i.aborted && s >= 2 && (i.loading.first === 0 && (i.loading.first = Math.max(self.performance.now(), i.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (i.loading.first - i.loading.start)))), s === 4)) {
      self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
      const a = t.status, o = t.responseType !== "text";
      if (a >= 200 && a < 300 && (o && t.response || t.responseText !== null)) {
        i.loading.end = Math.max(self.performance.now(), i.loading.first);
        const l = o ? t.response : t.responseText, c = t.responseType === "arraybuffer" ? l.byteLength : l.length;
        if (i.loaded = i.total = c, i.bwEstimate = i.total * 8e3 / (i.loading.end - i.loading.first), !this.callbacks)
          return;
        const d = this.callbacks.onProgress;
        if (d && d(i, e, l, t), !this.callbacks)
          return;
        const u = {
          url: t.responseURL,
          data: l,
          code: a
        };
        this.callbacks.onSuccess(u, i, e, t);
      } else {
        const l = r.loadPolicy.errorRetry, c = i.retry, d = {
          url: e.url,
          data: void 0,
          code: a
        };
        Hs(l, c, !1, d) ? this.retry(l) : (k.error(`${a} while loading ${e.url}`), this.callbacks.onError({
          code: a,
          text: t.statusText
        }, e, t, i));
      }
    }
  }
  loadtimeout() {
    if (!this.config) return;
    const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry;
    if (Hs(e, t, !0))
      this.retry(e);
    else {
      var i;
      k.warn(`timeout while loading ${(i = this.context) == null ? void 0 : i.url}`);
      const s = this.callbacks;
      s && (this.abortInternal(), s.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: i
    } = this;
    this.retryDelay = En(e, i.retry), i.retry++, k.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t?.url}, retrying ${i.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && np.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
function ap() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return !1;
}
const op = /(\d+)-(\d+)\/(\d+)/;
class uo {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || up, this.controller = new self.AbortController(), this.stats = new $s();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, i) {
    const s = this.stats;
    if (s.loading.start)
      throw new Error("Loader can only be used once.");
    s.loading.start = self.performance.now();
    const r = lp(e, this.controller.signal), a = i.onProgress, o = e.responseType === "arraybuffer", l = o ? "byteLength" : "length", {
      maxTimeToFirstByteMs: c,
      maxLoadTimeMs: d
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = i, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = c && ae(c) ? c : d, this.requestTimeout = self.setTimeout(() => {
      this.abortInternal(), i.onTimeout(s, e, this.response);
    }, t.timeout), self.fetch(this.request).then((u) => {
      this.response = this.loader = u;
      const h = Math.max(self.performance.now(), s.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = d, this.requestTimeout = self.setTimeout(() => {
        this.abortInternal(), i.onTimeout(s, e, this.response);
      }, d - (h - s.loading.start)), !u.ok) {
        const {
          status: f,
          statusText: g
        } = u;
        throw new hp(g || "fetch, bad network response", f, u);
      }
      return s.loading.first = h, s.total = dp(u.headers) || s.total, a && ae(t.highWaterMark) ? this.loadProgressively(u, s, e, t.highWaterMark, a) : o ? u.arrayBuffer() : e.responseType === "json" ? u.json() : u.text();
    }).then((u) => {
      const h = this.response;
      if (!h)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), s.loading.end = Math.max(self.performance.now(), s.loading.first);
      const f = u[l];
      f && (s.loaded = s.total = f);
      const g = {
        url: h.url,
        data: u,
        code: h.status
      };
      a && !ae(t.highWaterMark) && a(s, e, u, h), i.onSuccess(g, s, e, h);
    }).catch((u) => {
      if (self.clearTimeout(this.requestTimeout), s.aborted)
        return;
      const h = u && u.code || 0, f = u ? u.message : null;
      i.onError({
        code: h,
        text: f
      }, e, u ? u.details : null, s);
    });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, i, s = 0, r) {
    const a = new Fl(), o = e.body.getReader(), l = () => o.read().then((c) => {
      if (c.done)
        return a.dataLength && r(t, i, a.flush(), e), Promise.resolve(new ArrayBuffer(0));
      const d = c.value, u = d.length;
      return t.loaded += u, u < s || a.dataLength ? (a.push(d), a.dataLength >= s && r(t, i, a.flush(), e)) : r(t, i, d, e), l();
    }).catch(() => Promise.reject());
    return l();
  }
}
function lp(n, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(it({}, n.headers))
  };
  return n.rangeEnd && t.headers.set("Range", "bytes=" + n.rangeStart + "-" + String(n.rangeEnd - 1)), t;
}
function cp(n) {
  const e = op.exec(n);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function dp(n) {
  const e = n.get("Content-Range");
  if (e) {
    const i = cp(e);
    if (ae(i))
      return i;
  }
  const t = n.get("Content-Length");
  if (t)
    return parseInt(t);
}
function up(n, e) {
  return new self.Request(n.url, e);
}
class hp extends Error {
  constructor(e, t, i) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = i;
  }
}
const fp = /\s/, gp = {
  newCue(n, e, t, i) {
    const s = [];
    let r, a, o, l, c;
    const d = self.VTTCue || self.TextTrackCue;
    for (let h = 0; h < i.rows.length; h++)
      if (r = i.rows[h], o = !0, l = 0, c = "", !r.isEmpty()) {
        var u;
        for (let m = 0; m < r.chars.length; m++)
          fp.test(r.chars[m].uchar) && o ? l++ : (c += r.chars[m].uchar, o = !1);
        r.cueStartTime = e, e === t && (t += 1e-4), l >= 16 ? l-- : l++;
        const f = rc(c.trim()), g = Dn(e, t, f);
        n != null && (u = n.cues) != null && u.getCueById(g) || (a = new d(e, t, f), a.id = g, a.line = h + 1, a.align = "left", a.position = 10 + Math.min(80, Math.floor(l * 8 / 32) * 10), s.push(a));
      }
    return n && s.length && (s.sort((h, f) => h.line === "auto" || f.line === "auto" ? 0 : h.line > 8 && f.line > 8 ? f.line - h.line : h.line - f.line), s.forEach((h) => Rl(n, h))), s;
  }
}, mp = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, pc = ot(ot({
  autoStartLoad: !0,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: !1,
  // used by logger
  capLevelOnFPSDrop: !1,
  // used by fps-controller
  capLevelToPlayerSize: !1,
  // used by cap-level-controller
  ignoreDevicePixelRatio: !1,
  // used by cap-level-controller
  preferManagedMediaSource: !0,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller
  highBufferWatchdogPeriod: 2,
  // used by stream-controller
  nudgeOffset: 0.1,
  // used by stream-controller
  nudgeMaxRetry: 3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: !1,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: !0,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: !0,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: !1,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  loader: mc,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: V0,
  bufferController: Yg,
  capLevelController: kn,
  errorController: C0,
  fpsController: Em,
  stretchShortVideoTrack: !1,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: !0,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: !1,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: !1,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: gl,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableID3MetadataCues: !0,
  useMediaCapabilities: !0,
  certLoadPolicy: {
    default: mp
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, pp()), {}, {
  subtitleStreamController: Vg,
  subtitleTrackController: Wg,
  timelineController: ym,
  audioStreamController: Gg,
  audioTrackController: Hg,
  emeController: Ri,
  cmcdController: ip,
  contentSteeringController: rp
});
function pp() {
  return {
    cueHandler: gp,
    // used by timeline-controller
    enableWebVTT: !0,
    // used by timeline-controller
    enableIMSC1: !0,
    // used by timeline-controller
    enableCEA708Captions: !0,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: !0
  };
}
function vp(n, e) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const t = on(n), i = ["manifest", "level", "frag"], s = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return i.forEach((r) => {
    const a = `${r === "level" ? "playlist" : r}LoadPolicy`, o = e[a] === void 0, l = [];
    s.forEach((c) => {
      const d = `${r}Loading${c}`, u = e[d];
      if (u !== void 0 && o) {
        l.push(d);
        const h = t[a].default;
        switch (e[a] = {
          default: h
        }, c) {
          case "TimeOut":
            h.maxLoadTimeMs = u, h.maxTimeToFirstByteMs = u;
            break;
          case "MaxRetry":
            h.errorRetry.maxNumRetry = u, h.timeoutRetry.maxNumRetry = u;
            break;
          case "RetryDelay":
            h.errorRetry.retryDelayMs = u, h.timeoutRetry.retryDelayMs = u;
            break;
          case "MaxRetryTimeout":
            h.errorRetry.maxRetryDelayMs = u, h.timeoutRetry.maxRetryDelayMs = u;
            break;
        }
      }
    }), l.length && k.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${a}": ${JSON.stringify(e[a])}`);
  }), ot(ot({}, t), e);
}
function on(n) {
  return n && typeof n == "object" ? Array.isArray(n) ? n.map(on) : Object.keys(n).reduce((e, t) => (e[t] = on(n[t]), e), {}) : n;
}
function yp(n) {
  const e = n.loader;
  e !== uo && e !== mc ? (k.log("[config]: Custom loader detected, cannot enable progressive streaming"), n.progressive = !1) : ap() && (n.loader = uo, n.progressive = !0, n.enableSoftwareAES = !0, k.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
let Pr;
class xp extends Tn {
  constructor(e, t) {
    super(e, "[level-controller]"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(x.LEVEL_LOADED, this.onLevelLoaded, this), e.on(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this), e.on(x.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(x.LEVEL_LOADED, this.onLevelLoaded, this), e.off(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this), e.off(x.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const i = this.hls.config.preferManagedMediaSource, s = [], r = {}, a = {};
    let o = !1, l = !1, c = !1;
    t.levels.forEach((d) => {
      var u, h;
      const f = d.attrs;
      let {
        audioCodec: g,
        videoCodec: m
      } = d;
      ((u = g) == null ? void 0 : u.indexOf("mp4a.40.34")) !== -1 && (Pr || (Pr = /chrome|firefox/i.test(navigator.userAgent)), Pr && (d.audioCodec = g = void 0)), g && (d.audioCodec = g = Bs(g, i)), ((h = m) == null ? void 0 : h.indexOf("avc1")) === 0 && (m = d.videoCodec = n0(m));
      const {
        width: p,
        height: v,
        unknownCodecs: b
      } = d;
      if (o || (o = !!(p && v)), l || (l = !!m), c || (c = !!g), b != null && b.length || g && !yr(g, "audio", i) || m && !yr(m, "video", i))
        return;
      const {
        CODECS: _,
        "FRAME-RATE": E,
        "HDCP-LEVEL": T,
        "PATHWAY-ID": A,
        RESOLUTION: S,
        "VIDEO-RANGE": w
      } = f, L = `${`${A || "."}-`}${d.bitrate}-${S}-${E}-${_}-${w}-${T}`;
      if (r[L])
        if (r[L].uri !== d.url && !d.attrs["PATHWAY-ID"]) {
          const I = a[L] += 1;
          d.attrs["PATHWAY-ID"] = new Array(I + 1).join(".");
          const K = new Pi(d);
          r[L] = K, s.push(K);
        } else
          r[L].addGroupId("audio", f.AUDIO), r[L].addGroupId("text", f.SUBTITLES);
      else {
        const I = new Pi(d);
        r[L] = I, a[L] = 1, s.push(I);
      }
    }), this.filterAndSortMediaOptions(s, t, o, l, c);
  }
  filterAndSortMediaOptions(e, t, i, s, r) {
    let a = [], o = [], l = e;
    if ((i || s) && r && (l = l.filter(({
      videoCodec: g,
      videoRange: m,
      width: p,
      height: v
    }) => (!!g || !!(p && v)) && y0(m))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          t.levels.length && this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);
          const g = new Error("no level with compatible codecs found in manifest");
          this.hls.trigger(x.ERROR, {
            type: xe.MEDIA_ERROR,
            details: N.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: g,
            reason: g.message
          });
        }
      });
      return;
    }
    if (t.audioTracks) {
      const {
        preferManagedMediaSource: g
      } = this.hls.config;
      a = t.audioTracks.filter((m) => !m.audioCodec || yr(m.audioCodec, "audio", g)), ho(a);
    }
    t.subtitles && (o = t.subtitles, ho(o));
    const c = l.slice(0);
    l.sort((g, m) => {
      if (g.attrs["HDCP-LEVEL"] !== m.attrs["HDCP-LEVEL"])
        return (g.attrs["HDCP-LEVEL"] || "") > (m.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (i && g.height !== m.height)
        return g.height - m.height;
      if (g.frameRate !== m.frameRate)
        return g.frameRate - m.frameRate;
      if (g.videoRange !== m.videoRange)
        return Us.indexOf(g.videoRange) - Us.indexOf(m.videoRange);
      if (g.videoCodec !== m.videoCodec) {
        const p = ya(g.videoCodec), v = ya(m.videoCodec);
        if (p !== v)
          return v - p;
      }
      if (g.uri === m.uri && g.codecSet !== m.codecSet) {
        const p = Ns(g.codecSet), v = Ns(m.codecSet);
        if (p !== v)
          return v - p;
      }
      return g.averageBitrate !== m.averageBitrate ? g.averageBitrate - m.averageBitrate : 0;
    });
    let d = c[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== c.length)) {
      for (let g = 0; g < c.length; g++)
        if (c[g].pathwayId === l[0].pathwayId) {
          d = c[g];
          break;
        }
    }
    this._levels = l;
    for (let g = 0; g < l.length; g++)
      if (l[g] === d) {
        var u;
        this._firstLevel = g;
        const m = d.bitrate, p = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${m}`), ((u = this.hls.userConfig) == null ? void 0 : u.abrEwmaDefaultEstimate) === void 0) {
          const v = Math.min(m, this.hls.config.abrEwmaDefaultEstimateMax);
          v > p && p === pc.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = v);
        }
        break;
      }
    const h = r && !s, f = {
      levels: l,
      audioTracks: a,
      subtitleTracks: o,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: r,
      video: s,
      altAudio: !h && a.some((g) => !!g.url)
    };
    this.hls.trigger(x.MANIFEST_PARSED, f), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const d = new Error("invalid level idx"), u = e < 0;
      if (this.hls.trigger(x.ERROR, {
        type: xe.OTHER_ERROR,
        details: N.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: u,
        error: d,
        reason: d.message
      }), u)
        return;
      e = Math.min(e, t.length - 1);
    }
    const i = this.currentLevelIndex, s = this.currentLevel, r = s ? s.attrs["PATHWAY-ID"] : void 0, a = t[e], o = a.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = a, i === e && a.details && s && r === o)
      return;
    this.log(`Switching to level ${e} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${o ? " with Pathway " + o : ""} from level ${i}${r ? " with Pathway " + r : ""}`);
    const l = {
      level: e,
      attrs: a.attrs,
      details: a.details,
      bitrate: a.bitrate,
      averageBitrate: a.averageBitrate,
      maxBitrate: a.maxBitrate,
      realBitrate: a.realBitrate,
      width: a.width,
      height: a.height,
      codecSet: a.codecSet,
      audioCodec: a.audioCodec,
      videoCodec: a.videoCodec,
      audioGroups: a.audioGroups,
      subtitleGroups: a.subtitleGroups,
      loaded: a.loaded,
      loadError: a.loadError,
      fragmentError: a.fragmentError,
      name: a.name,
      id: a.id,
      uri: a.uri,
      url: a.url,
      urlId: 0,
      audioGroupIds: a.audioGroupIds,
      textGroupIds: a.textGroupIds
    };
    this.hls.trigger(x.LEVEL_SWITCHING, l);
    const c = a.details;
    if (!c || c.live) {
      const d = this.switchParams(a.uri, s?.details, c);
      this.loadPlaylist(d);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Me.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === pe.MAIN) {
      const i = t.elementaryStreams;
      if (!Object.keys(i).some((r) => !!i[r]))
        return;
      const s = this._levels[t.level];
      s != null && s.loadError && (this.log(`Resetting level error count of ${s.loadError} on frag buffered`), s.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var i;
    const {
      level: s,
      details: r
    } = t, a = this._levels[s];
    if (!a) {
      var o;
      this.warn(`Invalid level index ${s}`), (o = t.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
      return;
    }
    s === this.currentLevelIndex ? (a.fragmentError === 0 && (a.loadError = 0), this.playlistLoaded(s, t, a.details)) : (i = t.deliveryDirectives) != null && i.skip && (r.deltaUpdateFailed = !0);
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentLevelIndex, i = this.currentLevel;
    if (i && this.shouldLoadPlaylist(i)) {
      let s = i.uri;
      if (e)
        try {
          s = e.addDirectives(s);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      const r = i.attrs["PATHWAY-ID"];
      this.log(`Loading level index ${t}${e?.msn !== void 0 ? " at sn " + e.msn + " part " + e.part : ""} with${r ? " Pathway " + r : ""} ${s}`), this.clearTimer(), this.hls.trigger(x.LEVEL_LOADING, {
        url: s,
        level: t,
        pathwayId: i.attrs["PATHWAY-ID"],
        id: 0,
        // Deprecated Level urlId
        deliveryDirectives: e || null
      });
    }
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e) {
    var t;
    const i = this._levels.filter((s, r) => r !== e ? !0 : (this.steering && this.steering.removeLevel(s), s === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, s.details && s.details.fragments.forEach((a) => a.level = -1)), !1));
    kl(i), this._levels = i, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(x.LEVELS_UPDATED, {
      levels: i
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: i
    } = this.hls;
    this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(x.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: e,
      levels: this.levels,
      maxAutoLevel: t,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: i
    }));
  }
}
function ho(n) {
  const e = {};
  n.forEach((t) => {
    const i = t.groupId || "";
    t.id = e[i] = e[i] || 0, e[i]++;
  });
}
class Ep {
  constructor(e) {
    this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const i in this.keyUriToKeyInfo) {
      const s = this.keyUriToKeyInfo[i].loader;
      if (s) {
        var t;
        if (e && e !== ((t = s.context) == null ? void 0 : t.frag.type))
          return;
        s.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyUriToKeyInfo = {};
  }
  createKeyLoadError(e, t = N.KEY_LOAD_ERROR, i, s, r) {
    return new jt({
      type: xe.NETWORK_ERROR,
      details: t,
      fatal: !1,
      frag: e,
      response: r,
      error: i,
      networkDetails: s
    });
  }
  loadClear(e, t) {
    if (this.emeController && this.config.emeEnabled) {
      const {
        sn: i,
        cc: s
      } = e;
      for (let r = 0; r < t.length; r++) {
        const a = t[r];
        if (s <= a.cc && (i === "initSegment" || a.sn === "initSegment" || i < a.sn)) {
          this.emeController.selectKeySystemFormat(a).then((o) => {
            a.setKeyFormat(o);
          });
          break;
        }
      }
    }
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var i, s;
    t && e.setKeyFormat(t);
    const r = e.decryptdata;
    if (!r) {
      const c = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
      return Promise.reject(this.createKeyLoadError(e, N.KEY_LOAD_ERROR, c));
    }
    const a = r.uri;
    if (!a)
      return Promise.reject(this.createKeyLoadError(e, N.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${a}"`)));
    let o = this.keyUriToKeyInfo[a];
    if ((i = o) != null && i.decryptdata.key)
      return r.key = o.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: o
      });
    if ((s = o) != null && s.keyLoadPromise) {
      var l;
      switch ((l = o.mediaKeySessionContext) == null ? void 0 : l.keyStatus) {
        case void 0:
        case "status-pending":
        case "usable":
        case "usable-in-future":
          return o.keyLoadPromise.then((c) => (r.key = c.keyInfo.decryptdata.key, {
            frag: e,
            keyInfo: o
          }));
      }
    }
    switch (o = this.keyUriToKeyInfo[a] = {
      decryptdata: r,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, r.method) {
      case "ISO-23001-7":
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return r.keyFormat === "identity" ? this.loadKeyHTTP(o, e) : this.loadKeyEME(o, e);
      case "AES-128":
        return this.loadKeyHTTP(o, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, N.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)));
    }
  }
  loadKeyEME(e, t) {
    const i = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      const s = this.emeController.loadKey(i);
      if (s)
        return (e.keyLoadPromise = s.then((r) => (e.mediaKeySessionContext = r, i))).catch((r) => {
          throw e.keyLoadPromise = null, r;
        });
    }
    return Promise.resolve(i);
  }
  loadKeyHTTP(e, t) {
    const i = this.config, s = i.loader, r = new s(i);
    return t.keyLoader = e.loader = r, e.keyLoadPromise = new Promise((a, o) => {
      const l = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, c = i.keyLoadPolicy.default, d = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, u = {
        onSuccess: (h, f, g, m) => {
          const {
            frag: p,
            keyInfo: v,
            url: b
          } = g;
          if (!p.decryptdata || v !== this.keyUriToKeyInfo[b])
            return o(this.createKeyLoadError(p, N.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), m));
          v.decryptdata.key = p.decryptdata.key = new Uint8Array(h.data), p.keyLoader = null, v.loader = null, a({
            frag: p,
            keyInfo: v
          });
        },
        onError: (h, f, g, m) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, N.KEY_LOAD_ERROR, new Error(`HTTP Error ${h.code} loading key ${h.text}`), g, ot({
            url: l.url,
            data: void 0
          }, h)));
        },
        onTimeout: (h, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, N.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), g));
        },
        onAbort: (h, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, N.INTERNAL_ABORTED, new Error("key loading aborted"), g));
        }
      };
      r.load(l, d, u);
    });
  }
  resetLoader(e) {
    const {
      frag: t,
      keyInfo: i,
      url: s
    } = e, r = i.loader;
    t.keyLoader === r && (t.keyLoader = null, i.loader = null), delete this.keyUriToKeyInfo[s], r && r.destroy();
  }
}
function vc() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function yc() {
  if (!hi())
    return !1;
  const e = vc();
  return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
}
function Tp() {
  if (!yc())
    return !1;
  const n = hi();
  return typeof n?.isTypeSupported == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((e) => n.isTypeSupported(Xi(e, "video"))) || ["mp4a.40.2", "fLaC"].some((e) => n.isTypeSupported(Xi(e, "audio"))));
}
function bp() {
  var n;
  const e = vc();
  return typeof (e == null || (n = e.prototype) == null ? void 0 : n.changeType) == "function";
}
const _p = 250, Is = 2, Sp = 0.1, Ap = 0.05;
class Lp {
  constructor(e, t, i, s) {
    this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = e, this.media = t, this.fragmentTracker = i, this.hls = s;
  }
  destroy() {
    this.media = null, this.hls = this.fragmentTracker = null;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t) {
    const {
      config: i,
      media: s,
      stalled: r
    } = this;
    if (s === null)
      return;
    const {
      currentTime: a,
      seeking: o
    } = s, l = this.seeking && !o, c = !this.seeking && o;
    if (this.seeking = o, a !== e) {
      if (this.moved = !0, o || (this.nudgeRetry = 0), r !== null) {
        if (this.stallReported) {
          const p = self.performance.now() - r;
          k.warn(`playback not stuck anymore @${a}, after ${Math.round(p)}ms`), this.stallReported = !1;
        }
        this.stalled = null;
      }
      return;
    }
    if (c || l) {
      this.stalled = null;
      return;
    }
    if (s.paused && !o || s.ended || s.playbackRate === 0 || !Ke.getBuffered(s).length) {
      this.nudgeRetry = 0;
      return;
    }
    const d = Ke.bufferInfo(s, a, 0), u = d.nextStart || 0;
    if (o) {
      const p = d.len > Is, v = !u || t && t.start <= a || u - a > Is && !this.fragmentTracker.getPartialFragment(a);
      if (p || v)
        return;
      this.moved = !1;
    }
    if (!this.moved && this.stalled !== null) {
      var h;
      if (!(d.len > 0) && !u)
        return;
      const v = Math.max(u, d.start || 0) - a, b = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, E = (b == null || (h = b.details) == null ? void 0 : h.live) ? b.details.targetduration * 2 : Is, T = this.fragmentTracker.getPartialFragment(a);
      if (v > 0 && (v <= E || T)) {
        s.paused || this._trySkipBufferHole(T);
        return;
      }
    }
    const f = self.performance.now();
    if (r === null) {
      this.stalled = f;
      return;
    }
    const g = f - r;
    if (!o && g >= _p && (this._reportStall(d), !this.media))
      return;
    const m = Ke.bufferInfo(s, a, i.maxBufferHole);
    this._tryFixBufferStall(m, g);
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t) {
    const {
      config: i,
      fragmentTracker: s,
      media: r
    } = this;
    if (r === null)
      return;
    const a = r.currentTime, o = s.getPartialFragment(a);
    o && (this._trySkipBufferHole(o) || !this.media) || (e.len > i.maxBufferHole || e.nextStart && e.nextStart - a < i.maxBufferHole) && t > i.highBufferWatchdogPeriod * 1e3 && (k.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(e) {
    const {
      hls: t,
      media: i,
      stallReported: s
    } = this;
    if (!s && i) {
      this.stallReported = !0;
      const r = new Error(`Playback stalling at @${i.currentTime} due to low buffer (${JSON.stringify(e)})`);
      k.warn(r.message), t.trigger(x.ERROR, {
        type: xe.MEDIA_ERROR,
        details: N.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: r,
        buffer: e.len
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param partial - The partial fragment found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    const {
      config: t,
      hls: i,
      media: s
    } = this;
    if (s === null)
      return 0;
    const r = s.currentTime, a = Ke.bufferInfo(s, r, 0), o = r < a.start ? a.start : a.nextStart;
    if (o) {
      const l = a.len <= t.maxBufferHole, c = a.len > 0 && a.len < 1 && s.readyState < 3, d = o - r;
      if (d > 0 && (l || c)) {
        if (d > t.maxBufferHole) {
          const {
            fragmentTracker: h
          } = this;
          let f = !1;
          if (r === 0) {
            const g = h.getAppendedFrag(0, pe.MAIN);
            g && o < g.end && (f = !0);
          }
          if (!f) {
            const g = e || h.getAppendedFrag(r, pe.MAIN);
            if (g) {
              let m = !1, p = g.end;
              for (; p < o; ) {
                const v = h.getPartialFragment(p);
                if (v)
                  p += v.duration;
                else {
                  m = !0;
                  break;
                }
              }
              if (m)
                return 0;
            }
          }
        }
        const u = Math.max(o + Ap, r + Sp);
        if (k.warn(`skipping hole, adjusting currentTime from ${r} to ${u}`), this.moved = !0, this.stalled = null, s.currentTime = u, e && !e.gap) {
          const h = new Error(`fragment loaded with buffer holes, seeking from ${r} to ${u}`);
          i.trigger(x.ERROR, {
            type: xe.MEDIA_ERROR,
            details: N.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: h,
            reason: h.message,
            frag: e
          });
        }
        return u;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer() {
    const {
      config: e,
      hls: t,
      media: i,
      nudgeRetry: s
    } = this;
    if (i === null)
      return;
    const r = i.currentTime;
    if (this.nudgeRetry++, s < e.nudgeMaxRetry) {
      const a = r + (s + 1) * e.nudgeOffset, o = new Error(`Nudging 'currentTime' from ${r} to ${a}`);
      k.warn(o.message), i.currentTime = a, t.trigger(x.ERROR, {
        type: xe.MEDIA_ERROR,
        details: N.BUFFER_NUDGE_ON_STALL,
        error: o,
        fatal: !1
      });
    } else {
      const a = new Error(`Playhead still not moving while enough data buffered @${r} after ${e.nudgeMaxRetry} nudges`);
      k.error(a.message), t.trigger(x.ERROR, {
        type: xe.MEDIA_ERROR,
        details: N.BUFFER_STALLED_ERROR,
        error: a,
        fatal: !0
      });
    }
  }
}
const wp = 100;
class Rp extends Sn {
  constructor(e, t, i) {
    super(e, t, i, "[stream-controller]", pe.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.LEVEL_LOADING, this.onLevelLoading, this), e.on(x.LEVEL_LOADED, this.onLevelLoaded, this), e.on(x.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(x.ERROR, this.onError, this), e.on(x.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(x.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(x.BUFFER_CREATED, this.onBufferCreated, this), e.on(x.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.LEVEL_LOADED, this.onLevelLoaded, this), e.off(x.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(x.ERROR, this.onError, this), e.off(x.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(x.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(x.BUFFER_CREATED, this.onBufferCreated, this), e.off(x.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(e) {
    if (this.levels) {
      const {
        lastCurrentTime: t,
        hls: i
      } = this;
      if (this.stopLoad(), this.setInterval(wp), this.level = -1, !this.startFragRequested) {
        let s = i.startLevel;
        s === -1 && (i.config.testBandwidth && this.levels.length > 1 ? (s = 0, this.bitrateTest = !0) : s = i.firstAutoLevel), i.nextLoadLevel = s, this.level = i.loadLevel, this.loadedmetadata = !1;
      }
      t > 0 && e === -1 && (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t), this.state = V.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
    } else
      this._forceStartLoad = !0, this.state = V.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case V.WAITING_LEVEL: {
        const {
          levels: t,
          level: i
        } = this, s = t?.[i], r = s?.details;
        if (r && (!r.live || this.levelLastLoaded === s)) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = V.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = V.IDLE;
          break;
        }
        break;
      }
      case V.FRAG_LOADING_WAITING_RETRY:
        {
          var e;
          const t = self.performance.now(), i = this.retryDate;
          if (!i || t >= i || (e = this.media) != null && e.seeking) {
            const {
              levels: s,
              level: r
            } = this, a = s?.[r];
            this.resetStartWhenNotLoaded(a || null), this.state = V.IDLE;
          }
        }
        break;
    }
    this.state === V.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: e,
      levelLastLoaded: t,
      levels: i,
      media: s
    } = this;
    if (t === null || !s && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const r = e.nextLoadLevel;
    if (!(i != null && i[r]))
      return;
    const a = i[r], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const l = this.getLevelDetails();
    if (l && this._streamEnded(o, l)) {
      const m = {};
      this.altAudio && (m.type = "video"), this.hls.trigger(x.BUFFER_EOS, m), this.state = V.ENDED;
      return;
    }
    e.loadLevel !== r && e.manualLevel === -1 && this.log(`Adapting to level ${r} from level ${this.level}`), this.level = e.nextLoadLevel = r;
    const c = a.details;
    if (!c || this.state === V.WAITING_LEVEL || c.live && this.levelLastLoaded !== a) {
      this.level = r, this.state = V.WAITING_LEVEL;
      return;
    }
    const d = o.len, u = this.getMaxBufferLength(a.maxBitrate);
    if (d >= u)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const h = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let f = this.getNextFragment(h, c);
    if (this.couldBacktrack && !this.fragPrevious && f && f.sn !== "initSegment" && this.fragmentTracker.getState(f) !== at.OK) {
      var g;
      const p = ((g = this.backtrackFragment) != null ? g : f).sn - c.startSN, v = c.fragments[p - 1];
      v && f.cc === v.cc && (f = v, this.fragmentTracker.removeFragment(v));
    } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (f && this.isLoopLoading(f, h)) {
      if (!f.gap) {
        const p = this.audioOnly && !this.altAudio ? Be.AUDIO : Be.VIDEO, v = (p === Be.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        v && this.afterBufferFlushed(v, p, pe.MAIN);
      }
      f = this.getNextFragmentLoopLoading(f, c, o, pe.MAIN, u);
    }
    f && (f.initSegment && !f.initSegment.data && !this.bitrateTest && (f = f.initSegment), this.loadFragment(f, a, h));
  }
  loadFragment(e, t, i) {
    const s = this.fragmentTracker.getState(e);
    this.fragCurrent = e, s === at.NOT_LOADED || s === at.PARTIAL ? e.sn === "initSegment" ? this._loadInitSegment(e, t) : this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : (this.startFragRequested = !0, super.loadFragment(e, t, i)) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, pe.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: e,
      media: t
    } = this;
    if (t != null && t.readyState) {
      let i;
      const s = this.getAppendedFrag(t.currentTime);
      s && s.start > 1 && this.flushMainBuffer(0, s.start - 1);
      const r = this.getLevelDetails();
      if (r != null && r.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < r.targetduration * 2)
          return;
      }
      if (!t.paused && e) {
        const o = this.hls.nextLoadLevel, l = e[o], c = this.fragLastKbps;
        c && this.fragCurrent ? i = this.fragCurrent.duration * l.maxBitrate / (1e3 * c) + 1 : i = 0;
      } else
        i = 0;
      const a = this.getBufferedFrag(t.currentTime + i);
      if (a) {
        const o = this.followingBufferedFrag(a);
        if (o) {
          this.abortCurrentFrag();
          const l = o.maxStartPTS ? o.maxStartPTS : o.start, c = o.duration, d = Math.max(a.end, l + Math.min(Math.max(c - this.config.maxFragLookUpTolerance, c * (this.couldBacktrack ? 0.5 : 0.125)), c * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(d, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case V.KEY_LOADING:
      case V.FRAG_LOADING:
      case V.FRAG_LOADING_WAITING_RETRY:
      case V.PARSING:
      case V.PARSED:
        this.state = V.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const i = t.media;
    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new Lp(this.config, i, this.fragmentTracker, this.hls);
  }
  onMediaDetaching() {
    const {
      media: e
    } = this;
    e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching();
  }
  onMediaPlaying() {
    this.tick();
  }
  onMediaSeeked() {
    const e = this.media, t = e ? e.currentTime : null;
    ae(t) && this.log(`Media seeked to ${t.toFixed(3)}`);
    const i = this.getMainFwdBufferInfo();
    if (i === null || i.len === 0) {
      this.warn(`Main forward buffer length on "seeked" event ${i ? i.len : "empty"})`);
      return;
    }
    this.tick();
  }
  onManifestLoading() {
    this.log("Trigger BUFFER_RESET"), this.hls.trigger(x.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = !1;
  }
  onManifestParsed(e, t) {
    let i = !1, s = !1;
    t.levels.forEach((r) => {
      const a = r.audioCodec;
      a && (i = i || a.indexOf("mp4a.40.2") !== -1, s = s || a.indexOf("mp4a.40.5") !== -1);
    }), this.audioCodecSwitch = i && s && !bp(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
  }
  onLevelLoading(e, t) {
    const {
      levels: i
    } = this;
    if (!i || this.state !== V.IDLE)
      return;
    const s = i[t.level];
    (!s.details || s.details.live && this.levelLastLoaded !== s || this.waitForCdnTuneIn(s.details)) && (this.state = V.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var i;
    const {
      levels: s
    } = this, r = t.level, a = t.details, o = a.totalduration;
    if (!s) {
      this.warn(`Levels were reset while loading level ${r}`);
      return;
    }
    this.log(`Level ${r} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""}, cc [${a.startCC}, ${a.endCC}] duration:${o}`);
    const l = s[r], c = this.fragCurrent;
    c && (this.state === V.FRAG_LOADING || this.state === V.FRAG_LOADING_WAITING_RETRY) && c.level !== t.level && c.loader && this.abortCurrentFrag();
    let d = 0;
    if (a.live || (i = l.details) != null && i.live) {
      var u;
      if (this.checkLiveUpdate(a), a.deltaUpdateFailed)
        return;
      d = this.alignPlaylists(a, l.details, (u = this.levelLastLoaded) == null ? void 0 : u.details);
    }
    if (l.details = a, this.levelLastLoaded = l, this.hls.trigger(x.LEVEL_UPDATED, {
      details: a,
      level: r
    }), this.state === V.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(a))
        return;
      this.state = V.IDLE;
    }
    this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, d), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const {
      frag: i,
      part: s,
      payload: r
    } = e, {
      levels: a
    } = this;
    if (!a) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`);
      return;
    }
    const o = a[i.level], l = o.details;
    if (!l) {
      this.warn(`Dropping fragment ${i.sn} of level ${i.level} after level details were reset`), this.fragmentTracker.removeFragment(i);
      return;
    }
    const c = o.videoCodec, d = l.PTSKnown || !l.live, u = (t = i.initSegment) == null ? void 0 : t.data, h = this._getAudioCodec(o), f = this.transmuxer = this.transmuxer || new Jl(this.hls, pe.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), g = s ? s.index : -1, m = g !== -1, p = new bn(i.level, i.sn, i.stats.chunkCount, r.byteLength, g, m), v = this.initPTS[i.cc];
    f.push(r, u, h, c, i, s, l.totalduration, d, p, v);
  }
  onAudioTrackSwitching(e, t) {
    const i = this.altAudio;
    if (!!!t.url) {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const a = this.fragCurrent;
        a && (this.log("Switching to main audio track, cancel main fragment load"), a.abortRequests(), this.fragmentTracker.removeFragment(a)), this.resetTransmuxer(), this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      const r = this.hls;
      i && (r.trigger(x.BUFFER_FLUSHING, {
        startOffset: 0,
        endOffset: Number.POSITIVE_INFINITY,
        type: null
      }), this.fragmentTracker.removeAllFragments()), r.trigger(x.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const i = t.id, s = !!this.hls.audioTracks[i].url;
    if (s) {
      const r = this.videoBuffer;
      r && this.mediaBuffer !== r && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = r);
    }
    this.altAudio = s, this.tick();
  }
  onBufferCreated(e, t) {
    const i = t.tracks;
    let s, r, a = !1;
    for (const o in i) {
      const l = i[o];
      if (l.id === "main") {
        if (r = o, s = l, o === "video") {
          const c = i[o];
          c && (this.videoBuffer = c.buffer);
        }
      } else
        a = !0;
    }
    a && s ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = s.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(e, t) {
    const {
      frag: i,
      part: s
    } = t;
    if (i && i.type !== pe.MAIN)
      return;
    if (this.fragContextChanged(i)) {
      this.warn(`Fragment ${i.sn}${s ? " p: " + s.index : ""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}`), this.state === V.PARSED && (this.state = V.IDLE);
      return;
    }
    const r = s ? s.stats : i.stats;
    this.fragLastKbps = Math.round(8 * r.total / (r.buffering.end - r.loading.first)), i.sn !== "initSegment" && (this.fragPrevious = i), this.fragBufferedComplete(i, s);
  }
  onError(e, t) {
    var i;
    if (t.fatal) {
      this.state = V.ERROR;
      return;
    }
    switch (t.details) {
      case N.FRAG_GAP:
      case N.FRAG_PARSING_ERROR:
      case N.FRAG_DECRYPT_ERROR:
      case N.FRAG_LOAD_ERROR:
      case N.FRAG_LOAD_TIMEOUT:
      case N.KEY_LOAD_ERROR:
      case N.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(pe.MAIN, t);
        break;
      case N.LEVEL_LOAD_ERROR:
      case N.LEVEL_LOAD_TIMEOUT:
      case N.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === V.WAITING_LEVEL && ((i = t.context) == null ? void 0 : i.type) === Me.LEVEL && (this.state = V.IDLE);
        break;
      case N.BUFFER_APPEND_ERROR:
      case N.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "main")
          return;
        if (t.details === N.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        break;
      case N.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  // Checks the health of the buffer and attempts to resolve playback stalls.
  checkBuffer() {
    const {
      media: e,
      gapController: t
    } = this;
    if (!(!e || !t || !e.readyState)) {
      if (this.loadedmetadata || !Ke.getBuffered(e).length) {
        const i = this.state !== V.IDLE ? this.fragCurrent : null;
        t.poll(this.lastCurrentTime, i);
      }
      this.lastCurrentTime = e.currentTime;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = V.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== Be.AUDIO || this.audioOnly && !this.altAudio) {
      const i = (t === Be.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      this.afterBufferFlushed(i, t, pe.MAIN), this.tick();
    }
  }
  onLevelsUpdated(e, t) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.currentTime;
    let i = this.startPosition;
    if (i >= 0 && t < i) {
      if (e.seeking) {
        this.log(`could not seek to ${i}, already seeking at ${t}`);
        return;
      }
      const s = Ke.getBuffered(e), a = (s.length ? s.start(0) : 0) - i;
      a > 0 && (a < this.config.maxBufferHole || a < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${a} to match buffer start`), i += a, this.startPosition = i), this.log(`seek to target start position ${i} from current time ${t}`), e.currentTime = i;
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t;
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = !0, this._doFragLoad(e, t).then((i) => {
      const {
        hls: s
      } = this;
      if (!i || this.fragContextChanged(e))
        return;
      t.fragmentError = 0, this.state = V.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const r = e.stats;
      r.parsing.start = r.parsing.end = r.buffering.start = r.buffering.end = self.performance.now(), s.trigger(x.FRAG_LOADED, i), e.bitrateTest = !1;
    });
  }
  _handleTransmuxComplete(e) {
    var t;
    const i = "main", {
      hls: s
    } = this, {
      remuxResult: r,
      chunkMeta: a
    } = e, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: l,
      part: c,
      level: d
    } = o, {
      video: u,
      text: h,
      id3: f,
      initSegment: g
    } = r, {
      details: m
    } = d, p = this.altAudio ? void 0 : r.audio;
    if (this.fragContextChanged(l)) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = V.PARSING, g) {
      if (g != null && g.tracks) {
        const _ = l.initSegment || l;
        this._bufferInitSegment(d, g.tracks, _, a), s.trigger(x.FRAG_PARSING_INIT_SEGMENT, {
          frag: _,
          id: i,
          tracks: g.tracks
        });
      }
      const v = g.initPTS, b = g.timescale;
      ae(v) && (this.initPTS[l.cc] = {
        baseTime: v,
        timescale: b
      }, s.trigger(x.INIT_PTS_FOUND, {
        frag: l,
        id: i,
        initPTS: v,
        timescale: b
      }));
    }
    if (u && m && l.sn !== "initSegment") {
      const v = m.fragments[l.sn - 1 - m.startSN], b = l.sn === m.startSN, _ = !v || l.cc > v.cc;
      if (r.independent !== !1) {
        const {
          startPTS: E,
          endPTS: T,
          startDTS: A,
          endDTS: S
        } = u;
        if (c)
          c.elementaryStreams[u.type] = {
            startPTS: E,
            endPTS: T,
            startDTS: A,
            endDTS: S
          };
        else if (u.firstKeyFrame && u.independent && a.id === 1 && !_ && (this.couldBacktrack = !0), u.dropped && u.independent) {
          const w = this.getMainFwdBufferInfo(), C = (w ? w.end : this.getLoadPosition()) + this.config.maxBufferHole, L = u.firstKeyFramePTS ? u.firstKeyFramePTS : E;
          if (!b && C < L - this.config.maxBufferHole && !_) {
            this.backtrack(l);
            return;
          } else _ && (l.gap = !0);
          l.setElementaryStreamInfo(u.type, l.start, T, l.start, S, !0);
        } else b && E > Is && (l.gap = !0);
        l.setElementaryStreamInfo(u.type, E, T, A, S), this.backtrackFragment && (this.backtrackFragment = l), this.bufferFragmentData(u, l, c, a, b || _);
      } else if (b || _)
        l.gap = !0;
      else {
        this.backtrack(l);
        return;
      }
    }
    if (p) {
      const {
        startPTS: v,
        endPTS: b,
        startDTS: _,
        endDTS: E
      } = p;
      c && (c.elementaryStreams[Be.AUDIO] = {
        startPTS: v,
        endPTS: b,
        startDTS: _,
        endDTS: E
      }), l.setElementaryStreamInfo(Be.AUDIO, v, b, _, E), this.bufferFragmentData(p, l, c, a);
    }
    if (m && f != null && (t = f.samples) != null && t.length) {
      const v = {
        id: i,
        frag: l,
        details: m,
        samples: f.samples
      };
      s.trigger(x.FRAG_PARSING_METADATA, v);
    }
    if (m && h) {
      const v = {
        id: i,
        frag: l,
        details: m,
        samples: h.samples
      };
      s.trigger(x.FRAG_PARSING_USERDATA, v);
    }
  }
  _bufferInitSegment(e, t, i, s) {
    if (this.state !== V.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
    const {
      audio: r,
      video: a,
      audiovideo: o
    } = t;
    if (r) {
      let l = e.audioCodec;
      const c = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        l && (l.indexOf("mp4a.40.5") !== -1 ? l = "mp4a.40.2" : l = "mp4a.40.5");
        const d = r.metadata;
        d && "channelCount" in d && (d.channelCount || 1) !== 1 && c.indexOf("firefox") === -1 && (l = "mp4a.40.5");
      }
      l && l.indexOf("mp4a.40.5") !== -1 && c.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (l = "mp4a.40.2", this.log(`Android: force audio codec to ${l}`)), e.audioCodec && e.audioCodec !== l && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`), r.levelCodec = l, r.id = "main", this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${l || ""}/${e.audioCodec || ""}/${r.codec}]`);
    }
    a && (a.levelCodec = e.videoCodec, a.id = "main", this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${a.codec}]`)), o && this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), this.hls.trigger(x.BUFFER_CODECS, t), Object.keys(t).forEach((l) => {
      const d = t[l].initSegment;
      d != null && d.byteLength && this.hls.trigger(x.BUFFER_APPENDING, {
        type: l,
        data: d,
        frag: i,
        part: null,
        chunkMeta: s,
        parent: i.type
      });
    }), this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, pe.MAIN);
  }
  backtrack(e) {
    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = V.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const i = e.currentTime;
      if (Ke.isBuffered(e, i) ? t = this.getAppendedFrag(i) : Ke.isBuffered(e, i + 0.1) && (t = this.getAppendedFrag(i + 0.1)), t) {
        this.backtrackFragment = null;
        const s = this.fragPlaying, r = t.level;
        (!s || t.sn !== s.sn || s.level !== r) && (this.fragPlaying = t, this.hls.trigger(x.FRAG_CHANGED, {
          frag: t
        }), (!s || s.level !== r) && this.hls.trigger(x.LEVEL_SWITCHED, {
          level: r
        }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    const e = this.media;
    return e ? this.fragPlaying || this.getAppendedFrag(e.currentTime) : null;
  }
  get currentProgramDateTime() {
    const e = this.media;
    if (e) {
      const t = e.currentTime, i = this.currentFrag;
      if (i && ae(t) && ae(i.programDateTime)) {
        const s = i.programDateTime + (t - i.start) * 1e3;
        return new Date(s);
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class vt {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return "1.5.13";
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return yc();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return Tp();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return hi();
  }
  static get Events() {
    return x;
  }
  static get ErrorTypes() {
    return xe;
  }
  static get ErrorDetails() {
    return N;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return vt.defaultConfig ? vt.defaultConfig : pc;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    vt.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = !1, this._emitter = new In(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, pf(e.debug || !1, "Hls instance");
    const t = this.config = vp(vt.DefaultConfig, e);
    this.userConfig = e, t.progressive && yp(t);
    const {
      abrController: i,
      bufferController: s,
      capLevelController: r,
      errorController: a,
      fpsController: o
    } = t, l = new a(this), c = this.abrController = new i(this), d = this.bufferController = new s(this), u = this.capLevelController = new r(this), h = new o(this), f = new d0(this), g = new m0(this), m = t.contentSteeringController, p = m ? new m(this) : null, v = this.levelController = new xp(this, p), b = new W0(this), _ = new Ep(this.config), E = this.streamController = new Rp(this, b, _);
    u.setStreamController(E), h.setStreamController(E);
    const T = [f, v, E];
    p && T.splice(1, 0, p), this.networkControllers = T;
    const A = [c, d, u, h, g, b];
    this.audioTrackController = this.createController(t.audioTrackController, T);
    const S = t.audioStreamController;
    S && T.push(new S(this, b, _)), this.subtitleTrackController = this.createController(t.subtitleTrackController, T);
    const w = t.subtitleStreamController;
    w && T.push(new w(this, b, _)), this.createController(t.timelineController, A), _.emeController = this.emeController = this.createController(t.emeController, A), this.cmcdController = this.createController(t.cmcdController, A), this.latencyController = this.createController(p0, A), this.coreComponents = A, T.push(l);
    const C = l.onErrorOut;
    typeof C == "function" && this.on(x.ERROR, C, l);
  }
  createController(e, t) {
    if (e) {
      const i = new e(this);
      return t && t.push(i), i;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(e, t, i = this) {
    this._emitter.on(e, t, i);
  }
  once(e, t, i = this) {
    this._emitter.once(e, t, i);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, i = this, s) {
    this._emitter.off(e, t, i, s);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, i) {
    return this._emitter.emit(e, t, i);
  }
  trigger(e, t) {
    if (this.config.debug)
      return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (i) {
      if (k.error("An internal error happened while handling event " + e + '. Error message: "' + i.message + '". Here is a stacktrace:', i), !this.triggeringException) {
        this.triggeringException = !0;
        const s = e === x.ERROR;
        this.trigger(x.ERROR, {
          type: xe.OTHER_ERROR,
          details: N.INTERNAL_EXCEPTION,
          fatal: s,
          event: e,
          error: i
        }), this.triggeringException = !1;
      }
    }
    return !1;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    k.log("destroy"), this.trigger(x.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    k.log("attachMedia"), this._media = e, this.trigger(x.MEDIA_ATTACHING, {
      media: e
    });
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    k.log("detachMedia"), this.trigger(x.MEDIA_DETACHING, void 0), this._media = null;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, i = this.url, s = this.url = pn.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: !0
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, k.log(`loadSource:${s}`), t && i && (i !== s || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(x.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1) {
    k.log(`startLoad(${e})`), this.started = !0, this.networkControllers.forEach((t) => {
      t.startLoad(e);
    });
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    k.log("stopLoad"), this.started = !1, this.networkControllers.forEach((e) => {
      e.stopLoad();
    });
  }
  /**
   * Resumes stream controller segment loading if previously started.
   */
  resumeBuffering() {
    this.started && this.networkControllers.forEach((e) => {
      "fragmentLoader" in e && e.startLoad(-1);
    });
  }
  /**
   * Stops stream controller segment loading without changing 'started' state like stopLoad().
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    this.networkControllers.forEach((e) => {
      "fragmentLoader" in e && e.stopLoad();
    });
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    k.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    k.log("recoverMediaError");
    const e = this._media;
    this.detachMedia(), e && this.attachMedia(e);
  }
  removeLevel(e) {
    this.levelController.removeLevel(e);
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(e) {
    k.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(e) {
    k.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(e) {
    k.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(e) {
    k.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const e = this.levelController.startLevel;
    return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    k.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e);
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (k.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    v0(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!e) return 0;
    const i = e.length;
    for (let s = 0; s < i; s++)
      if (e[s].maxBitrate >= t)
        return s;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: e,
      autoLevelCapping: t,
      maxHdcpLevel: i
    } = this;
    let s;
    if (t === -1 && e != null && e.length ? s = e.length - 1 : s = t, i)
      for (let r = s; r--; ) {
        const a = e[r].attrs["HDCP-LEVEL"];
        if (a && a <= i)
          return r;
      }
    return s;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(e) {
    var t;
    return (t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e);
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(e) {
    var t;
    return (t = this.subtitleTrackController) == null || t.setSubtitleOption(e), null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const e = this.audioTrackController;
    return e ? e.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : !1;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
}
vt.defaultConfig = void 0;
var Ip = /* @__PURE__ */ J('<time id="trim-duration" class="svelte-k5hijc"> </time>'), Cp = /* @__PURE__ */ J('<div class="component-wrapper svelte-k5hijc"><div class="waveform-container svelte-k5hijc"><div id="waveform" class="svelte-k5hijc"></div></div> <!> <div class="timestamps svelte-k5hijc"><time id="time" class="svelte-k5hijc">0:00</time> <div><!> <time id="duration" class="svelte-k5hijc">0:00</time></div></div> <div class="subtitle-display svelte-k5hijc" data-testid="subtitle-display"></div> <!> <!></div>'), Dp = /* @__PURE__ */ J('<audio controls="" preload="metadata"></audio> <!>', 1);
function xc(n, e) {
  We(e, !0);
  var t = this && this.__awaiter || function(de, ne, $, se) {
    function we(He) {
      return He instanceof $ ? He : new $(function(ye) {
        ye(He);
      });
    }
    return new ($ || ($ = Promise))(function(He, ye) {
      function be(Ce) {
        try {
          Ae(se.next(Ce));
        } catch (ue) {
          ye(ue);
        }
      }
      function Ve(Ce) {
        try {
          Ae(se.throw(Ce));
        } catch (ue) {
          ye(ue);
        }
      }
      function Ae(Ce) {
        Ce.done ? He(Ce.value) : we(Ce.value).then(be, Ve);
      }
      Ae((se = se.apply(de, ne || [])).next());
    });
  };
  let i = R(e, "value", 3, null), s = R(e, "subtitles", 3, null), r = R(e, "categories", 3, null), a = R(e, "annotations", 3, null), o = R(e, "transcript", 3, null), l = R(e, "dispatch_blob", 3, () => Promise.resolve()), c = R(e, "interactive", 3, !1), d = R(e, "editable", 3, !0), u = R(e, "trim_region_settings", 19, () => ({})), h = R(e, "mode", 15), f = R(e, "handle_reset_value", 3, () => {
  }), g = R(e, "playback_position", 15), m = fe(0);
  function p(de) {
    E && E.play(de);
  }
  let v = he(() => i() === null || i() === void 0 ? void 0 : i().url), b = fe(0), _, E, T = fe(!1), A, S = fe(!1), w, C, L, I = fe(0), K = fe(0), F = fe(!1), D, U = !1, G = fe(!0), ee = [], oe = he(() => e.waveform_options.show_recording_waveform && !(!(i() === null || i() === void 0) && i().is_stream));
  Le(() => {
    y(T) && g() !== void 0 && y(b) !== g() && y(I) && (E?.seekTo(g() / y(I)), W(b, g(), !0));
  });
  const H = () => {
    E = zt.create(Object.assign({ container: _ }, e.waveform_settings)), s() && E && (y(G) ? q(E, s()) : le()), E?.on("init", () => {
      W(T, !0);
    }), E?.on("decode", (ne) => {
      W(I, ne, !0), L && (L.textContent = Lt(ne));
    });
    let de = !0;
    E?.on("timeupdate", (ne) => {
      if (C && (C.textContent = Lt(ne)), W(m, ne, !0), de) {
        de = !1;
        return;
      }
      g(ne), W(b, ne, !0);
    }), E?.on("interaction", () => {
      const ne = E?.getCurrentTime() || 0;
      C && (C.textContent = Lt(ne)), W(m, ne, !0), g(ne), W(b, ne, !0);
    }), E?.on("ready", () => {
      e.waveform_settings.autoplay ? E?.play() : E?.stop();
    }), E?.on("finish", () => {
      e.loop ? E?.play() : (W(S, !1), e.onstop === null || e.onstop === void 0 || e.onstop());
    }), E?.on("pause", () => {
      W(S, !1), e.onpause === null || e.onpause === void 0 || e.onpause();
    }), E?.on("play", () => {
      W(S, !0), e.onplay === null || e.onplay === void 0 || e.onplay();
    }), E?.on("load", () => {
      e.onload === null || e.onload === void 0 || e.onload();
    });
  };
  Le(() => {
    y(v) && y(T) && Ue(() => {
      !(i() === null || i() === void 0) && i().url && E && E.load(i().url).catch((de) => {
        de.name !== "AbortError" && console.error("Waveform load error:", de);
      });
    });
  });
  const B = (de, ne) => t(void 0, void 0, void 0, function* () {
    h("");
    const $ = E?.getDecodedData();
    if ($) {
      const se = yield jr($, de, ne, e.waveform_settings.sampleRate);
      yield l()([se], "change");
    }
    e.onedit === null || e.onedit === void 0 || e.onedit();
  });
  function O(de) {
    return t(this, void 0, void 0, function* () {
      U = !1, e.waveform_options.show_recording_waveform ? E?.load(de) : D && (D.src = de);
    });
  }
  Le(() => {
    s() && E && (y(G) ? q(E, s()) : le());
  });
  function Y(de) {
    if (!(!de || !de.is_stream || !de.url))
      if (vt.isSupported() && !U) {
        const ne = new vt({
          maxBufferLength: 1,
          maxMaxBufferLength: 1,
          lowLatencyMode: !0
        });
        ne.loadSource(de.url), ne.attachMedia(D), ne.on(vt.Events.MANIFEST_PARSED, function() {
          e.waveform_settings.autoplay && D.play();
        }), ne.on(vt.Events.ERROR, function($, se) {
          if (console.error("HLS error:", $, se), se.fatal)
            switch (se.type) {
              case vt.ErrorTypes.NETWORK_ERROR:
                console.error("Fatal network error encountered, trying to recover"), ne.startLoad();
                break;
              case vt.ErrorTypes.MEDIA_ERROR:
                console.error("Fatal media error encountered, trying to recover"), ne.recoverMediaError();
                break;
              default:
                console.error("Fatal error, cannot recover"), ne.destroy();
                break;
            }
        }), U = !0;
      } else U || (D.src = de.url, e.waveform_settings.autoplay && D.play(), U = !0);
  }
  Le(() => {
    D && y(v) && y(T) && y(v) && O(y(v));
  }), Le(() => {
    D && (!(i() === null || i() === void 0) && i().is_stream) && Y(i());
  }), wt(() => {
    H();
    const de = (ne) => {
      !E || y(F) || !(A && A.contains(document.activeElement)) || (ne.key === "ArrowRight" && h() !== "edit" ? Os(E, 0.1) : ne.key === "ArrowLeft" && h() !== "edit" && Os(E, -0.1));
    };
    return window.addEventListener("keydown", de), () => {
      E?.destroy(), window.removeEventListener("keydown", de);
    };
  });
  function q(de, ne) {
    return t(this, void 0, void 0, function* () {
      te();
      try {
        let $;
        if (Array.isArray(ne))
          $ = ne;
        else {
          const we = yield (yield fetch(ne)).text();
          $ = ge(we);
        }
        if ($.length > 0) {
          let se = "";
          if (w) {
            w.style.display = "";
            const we = (He) => {
              const ye = $.find((be) => He >= be.start && He <= be.end);
              ye && ye.text !== se ? (se = ye.text, w.textContent = se) : !ye && se !== "" && (se = "", w.textContent = "");
            };
            de.on("audioprocess", we), ee.push(() => {
              de.un("audioprocess", we);
            });
          }
        }
      } catch {
      }
    });
  }
  function le() {
    w && (w.style.display = "none");
  }
  function te() {
    w && (w.textContent = ""), ee.forEach((de) => de()), ee = [];
  }
  function ge(de) {
    const ne = de.split(`
`), $ = [];
    for (let se = 0; se < ne.length; se++) {
      const we = ne[se].trim();
      if (we.includes(" --> ")) {
        const [He, ye] = we.split(" --> "), be = Q(He), Ve = Q(ye);
        let Ae = "";
        for (let Ce = se + 1; Ce < ne.length && ne[Ce].trim() !== ""; Ce++)
          Ae && (Ae += " "), Ae += ne[Ce].trim();
        Ae && $.push({ start: be, end: Ve, text: Ae });
      }
    }
    return $;
  }
  function Q(de) {
    const ne = de.split(":");
    if (ne.length === 3) {
      const $ = parseInt(ne[0]), se = parseInt(ne[1]), we = parseFloat(ne[2]);
      return $ * 3600 + se * 60 + we;
    }
    return 0;
  }
  var ie = Dp(), ce = ve(ie);
  let Z;
  et(ce, (de) => D = de, () => D);
  var _e = z(ce, 2);
  {
    var Ie = (de) => {
      qo(de, {
        size: "small",
        children: (ne, $) => {
          Ps(ne);
        },
        $$slots: { default: !0 }
      });
    }, De = (de) => {
      var ne = Cp(), $ = j(ne), se = j($);
      let we;
      et(se, (Re) => _ = Re, () => _);
      var He = z($, 2);
      sf(He, {
        get categories() {
          return r();
        },
        get annotations() {
          return a();
        },
        get transcript() {
          return o();
        },
        get duration() {
          return y(I);
        },
        get current_time() {
          return y(m);
        },
        onseek: p
      });
      var ye = z(He, 2), be = j(ye);
      et(be, (Re) => C = Re, () => C);
      var Ve = z(be, 2), Ae = j(Ve);
      {
        var Ce = (Re) => {
          var Pe = Ip(), qe = j(Pe);
          re((st) => Ee(qe, st), [() => Lt(y(K))]), M(Re, Pe);
        };
        X(Ae, (Re) => {
          h() === "edit" && y(K) > 0 && Re(Ce);
        });
      }
      var ue = z(Ae, 2);
      et(ue, (Re) => L = Re, () => L);
      var Se = z(ye, 2);
      et(Se, (Re) => w = Re, () => w);
      var ke = z(Se, 2);
      {
        let Re = he(() => s() !== null);
        ll(ke, {
          get container() {
            return _;
          },
          get waveform() {
            return E;
          },
          get playing() {
            return y(S);
          },
          get audio_duration() {
            return y(I);
          },
          get i18n() {
            return e.i18n;
          },
          get interactive() {
            return c();
          },
          handle_trim_audio: B,
          get show_redo() {
            return c();
          },
          get handle_reset_value() {
            return f();
          },
          get waveform_options() {
            return e.waveform_options;
          },
          get trim_region_settings() {
            return u();
          },
          get editable() {
            return d();
          },
          get show_subtitles() {
            return y(Re);
          },
          get mode() {
            return h();
          },
          set mode(Pe) {
            h(Pe);
          },
          get trimDuration() {
            return y(K);
          },
          set trimDuration(Pe) {
            W(K, Pe, !0);
          },
          get show_volume_slider() {
            return y(F);
          },
          set show_volume_slider(Pe) {
            W(F, Pe, !0);
          },
          get subtitles_toggle() {
            return y(G);
          },
          set subtitles_toggle(Pe) {
            W(G, Pe, !0);
          }
        });
      }
      var ze = z(ke, 2);
      of(ze, {
        get transcript() {
          return o();
        },
        get current_time() {
          return y(m);
        },
        onseek: p
      }), et(ne, (Re) => A = Re, () => A), re(() => {
        $e(ne, "data-testid", e.label ? "waveform-" + e.label : "unlabelled-audio"), we = tt(se, "", we, { height: _ ? null : "58px" });
      }), M(de, ne);
    };
    X(_e, (de) => {
      i() === null ? de(Ie) : y(oe) && de(De, 1);
    });
  }
  re(() => {
    Z = Ge(ce, 1, "standard-player svelte-k5hijc", null, Z, { hidden: y(oe) }), ce.autoplay = e.waveform_settings.autoplay;
  }), Li("load", ce, function(...de) {
    e.onload?.apply(this, de);
  }), Li("ended", ce, () => e.onstop?.()), Li("play", ce, () => e.onplay?.()), M(n, ie), je();
}
var kp = /* @__PURE__ */ Qe('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qk1bhb"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"></rect><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"></rect></svg>'), Pp = /* @__PURE__ */ Qe('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qk1bhb"><path d="M8 5.74537C8 5.06444 8.77346 4.64713 9.35139 5.02248L18.0227 10.2771C18.5518 10.6219 18.5518 11.3781 18.0227 11.7229L9.35139 16.9775C8.77346 17.3529 8 16.9356 8 16.2546V5.74537Z" fill="currentColor"></path></svg>'), Op = /* @__PURE__ */ J('<div class="minimal-audio-player svelte-qk1bhb"><button class="play-btn svelte-qk1bhb"><!></button> <div class="waveform-wrapper svelte-qk1bhb"></div> <div class="timestamp svelte-qk1bhb"> </div></div>');
function Mp(n, e) {
  We(e, !0);
  var t = this && this.__awaiter || function(T, A, S, w) {
    function C(L) {
      return L instanceof S ? L : new S(function(I) {
        I(L);
      });
    }
    return new (S || (S = Promise))(function(L, I) {
      function K(U) {
        try {
          D(w.next(U));
        } catch (G) {
          I(G);
        }
      }
      function F(U) {
        try {
          D(w.throw(U));
        } catch (G) {
          I(G);
        }
      }
      function D(U) {
        U.done ? L(U.value) : C(U.value).then(K, F);
      }
      D((w = w.apply(T, A || [])).next());
    });
  };
  let i = R(e, "loop", 3, !1), s, r, a = fe(!1), o = fe(0), l = fe(0), c = fe(!1), d = he(() => e.value.url);
  const u = () => t(void 0, void 0, void 0, function* () {
    if (!s || !y(d) || y(c)) return;
    r && r.destroy();
    const T = getComputedStyle(document.documentElement).getPropertyValue("--color-accent") || "#ff7c00";
    r = zt.create({
      container: s,
      height: 32,
      waveColor: "rgba(128, 128, 128, 0.5)",
      progressColor: T,
      cursorColor: "transparent",
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      normalize: !0,
      interact: !0,
      dragToSeek: !0,
      hideScrollbar: !0
    }), r.on("play", () => W(a, !0)), r.on("pause", () => W(a, !1)), r.on("ready", () => {
      W(o, r?.getDuration() || 0, !0), W(c, !0);
    }), r.on("audioprocess", () => {
      W(l, r?.getCurrentTime() || 0, !0);
    }), r.on("interaction", () => {
      W(l, r?.getCurrentTime() || 0, !0);
    }), r.on("finish", () => {
      W(a, !1), i() && r?.play();
    }), yield r.load(y(d));
  });
  wt(() => t(void 0, void 0, void 0, function* () {
    yield u();
  })), Zs(() => {
    r && r.destroy();
  });
  const h = () => {
    r && r.playPause();
  };
  var f = Op(), g = j(f), m = j(g);
  {
    var p = (T) => {
      var A = kp();
      M(T, A);
    }, v = (T) => {
      var A = Pp();
      M(T, A);
    };
    X(m, (T) => {
      y(a) ? T(p) : T(v, -1);
    });
  }
  var b = z(g, 2);
  et(b, (T) => s = T, () => s);
  var _ = z(b, 2), E = j(_);
  re(
    (T, A) => {
      $e(f, "aria-label", e.label || "Audio"), $e(f, "data-testid", T), $e(g, "aria-label", y(a) ? "Pause" : "Play"), Ee(E, A);
    },
    [
      () => e.label && typeof e.label == "string" && e.label.trim() ? "waveform-" + e.label : "unlabelled-audio",
      () => Lt(y(a) ? y(l) : y(o))
    ]
  ), Oe("click", g, h), M(n, f), je();
}
Et(["click"]);
var Or = /* @__PURE__ */ J("<!> <!>", 1);
function Fp(n, e) {
  We(e, !0);
  let t = R(e, "value", 3, null), i = R(e, "subtitles", 3, null), s = R(e, "categories", 3, null), r = R(e, "annotations", 3, null), a = R(e, "transcript", 3, null), o = R(e, "show_label", 3, !0), l = R(e, "buttons", 19, () => []), c = R(e, "on_custom_button_click", 3, null), d = R(e, "waveform_settings", 19, () => ({})), u = R(e, "waveform_options", 19, () => ({ show_recording_waveform: !0 })), h = R(e, "editable", 3, !0), f = R(e, "display_icon_button_wrapper_top_corner", 3, !1), g = R(e, "minimal", 3, !1), m = R(e, "playback_position", 15);
  Le(() => {
    t() && (e.onchange === null || e.onchange === void 0 || e.onchange(t()));
  });
  var p = Or(), v = ve(p);
  {
    let T = he(() => e.label || e.i18n("audio.audio"));
    Yo(v, {
      get show_label() {
        return o();
      },
      get Icon() {
        return Ps;
      },
      float: !1,
      get label() {
        return y(T);
      }
    });
  }
  var b = z(v, 2);
  {
    var _ = (T) => {
      var A = Ne(), S = ve(A);
      {
        var w = (L) => {
          {
            let I = he(() => e.label || e.i18n("audio.audio"));
            Mp(L, {
              get value() {
                return t();
              },
              get label() {
                return y(I);
              },
              get loop() {
                return e.loop;
              }
            });
          }
        }, C = (L) => {
          var I = Or(), K = ve(I);
          il(K, {
            get display_top_corner() {
              return f();
            },
            get buttons() {
              return l();
            },
            get on_custom_button_click() {
              return c();
            },
            children: (D, U) => {
              var G = Or(), ee = ve(G);
              {
                var oe = (q) => {
                  {
                    let le = he(() => t().is_stream ? t().url?.replace("playlist.m3u8", "playlist-file") : t().url), te = he(() => t().orig_name || t().path);
                    zo(q, {
                      get href() {
                        return y(le);
                      },
                      get download() {
                        return y(te);
                      },
                      children: (ge, Q) => {
                        {
                          let ie = he(() => e.i18n("common.download"));
                          Jt(ge, {
                            get Icon() {
                              return Xo;
                            },
                            get label() {
                              return y(ie);
                            }
                          });
                        }
                      },
                      $$slots: { default: !0 }
                    });
                  }
                }, H = he(() => l().some((q) => typeof q == "string" && q === "download"));
                X(ee, (q) => {
                  y(H) && q(oe);
                });
              }
              var B = z(ee, 2);
              {
                var O = (q) => {
                  el(q, {
                    get i18n() {
                      return e.i18n;
                    },
                    get onerror() {
                      return e.onerror;
                    },
                    get onshare() {
                      return e.onshare;
                    },
                    formatter: async (le) => !le || !le.url ? "" : `<audio controls src="${await jo(le.url)}"></audio>`,
                    get value() {
                      return t();
                    }
                  });
                }, Y = he(() => l().some((q) => typeof q == "string" && q === "share"));
                X(B, (q) => {
                  y(Y) && q(O);
                });
              }
              M(D, G);
            },
            $$slots: { default: !0 }
          });
          var F = z(K, 2);
          {
            let D = he(() => Array.isArray(i()) ? i() : i()?.url);
            xc(F, {
              get value() {
                return t();
              },
              get subtitles() {
                return y(D);
              },
              get categories() {
                return s();
              },
              get annotations() {
                return r();
              },
              get transcript() {
                return a();
              },
              get label() {
                return e.label;
              },
              get i18n() {
                return e.i18n;
              },
              get waveform_settings() {
                return d();
              },
              get waveform_options() {
                return u();
              },
              get editable() {
                return h();
              },
              get loop() {
                return e.loop;
              },
              get onpause() {
                return e.onpause;
              },
              get onplay() {
                return e.onplay;
              },
              get onstop() {
                return e.onstop;
              },
              onload: () => {
              },
              get playback_position() {
                return m();
              },
              set playback_position(U) {
                m(U);
              }
            });
          }
          M(L, I);
        };
        X(S, (L) => {
          g() ? L(w) : L(C, -1);
        });
      }
      M(T, A);
    }, E = (T) => {
      qo(T, {
        size: "small",
        children: (A, S) => {
          Ps(A);
        },
        $$slots: { default: !0 }
      });
    };
    X(b, (T) => {
      t() !== null ? T(_) : T(E, -1);
    });
  }
  M(n, p), je();
}
async function Ec(n, e) {
  return n.map(
    (t) => new Np({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Np {
  path;
  url;
  orig_name;
  size;
  blob;
  is_stream;
  mime_type;
  alt_text;
  b64;
  meta = { _type: "gradio.FileData" };
  constructor({
    path: e,
    url: t,
    orig_name: i,
    size: s,
    blob: r,
    is_stream: a,
    mime_type: o,
    alt_text: l,
    b64: c
  }) {
    this.path = e, this.url = t, this.orig_name = i, this.size = s, this.blob = t ? void 0 : r, this.is_stream = a, this.mime_type = o, this.alt_text = l, this.b64 = c;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class Sv extends TransformStream {
  #e = "";
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, i) => {
        for (t = this.#e + t; ; ) {
          const s = t.indexOf(`
`), r = e.allowCR ? t.indexOf("\r") : -1;
          if (r !== -1 && r !== t.length - 1 && (s === -1 || s - 1 > r)) {
            i.enqueue(t.slice(0, r)), t = t.slice(r + 1);
            continue;
          }
          if (s === -1)
            break;
          const a = t[s - 1] === "\r" ? s - 1 : s;
          i.enqueue(t.slice(0, a)), t = t.slice(s + 1);
        }
        this.#e = t;
      },
      flush: (t) => {
        if (this.#e === "")
          return;
        const i = e.allowCR && this.#e.endsWith("\r") ? this.#e.slice(0, -1) : this.#e;
        t.enqueue(i);
      }
    });
  }
}
var Bp = /* @__PURE__ */ J('<div class="file svelte-12marlv"><span><div class="progress-bar svelte-12marlv"><progress style="visibility:hidden;height:0;width:0;" max="100" class="svelte-12marlv"> </progress></div></span> <span class="file-name svelte-12marlv"> </span></div>'), Up = /* @__PURE__ */ J('<div><span class="uploading svelte-12marlv"> </span> <!></div>');
function Gp(n, e) {
  We(e, !0);
  var t = this && this.__awaiter || function(v, b, _, E) {
    function T(A) {
      return A instanceof _ ? A : new _(function(S) {
        S(A);
      });
    }
    return new (_ || (_ = Promise))(function(A, S) {
      function w(I) {
        try {
          L(E.next(I));
        } catch (K) {
          S(K);
        }
      }
      function C(I) {
        try {
          L(E.throw(I));
        } catch (K) {
          S(K);
        }
      }
      function L(I) {
        I.done ? A(I.value) : T(I.value).then(w, C);
      }
      L((E = E.apply(v, b || [])).next());
    });
  };
  let i, s = fe(!1), r = fe(void 0), a = fe(yt(e.files.map((v) => Object.assign(Object.assign({}, v), { progress: 0 })))), o = he(() => y(r) || y(a)[0]);
  function l(v, b) {
    W(
      a,
      y(a).map((_) => (_.orig_name === v && (_.progress += b), _)),
      !0
    );
  }
  function c(v) {
    return v.progress * 100 / (v.size || 0) || 0;
  }
  wt(() => t(void 0, void 0, void 0, function* () {
    if (i = yield e.stream_handler(new URL(`${e.root}/gradio_api/upload_progress?upload_id=${e.upload_id}`)), i == null)
      throw new Error("Event source is not defined");
    i.onmessage = function(v) {
      return t(this, void 0, void 0, function* () {
        const b = JSON.parse(v.data);
        y(s) || W(s, !0), b.msg === "done" ? (i?.close(), e.ondone === null || e.ondone === void 0 || e.ondone()) : (W(r, b, !0), l(b.orig_name, b.chunk_size));
      });
    };
  })), Zs(() => {
    (i != null || i != null) && i.close();
  });
  function d(v) {
    let b = 0;
    return v.forEach((_) => {
      b += c(_);
    }), document.documentElement.style.setProperty("--upload-progress-width", (b / v.length).toFixed(2) + "%"), b / v.length;
  }
  Le(() => {
    d(y(a));
  });
  var u = Up();
  let h;
  var f = j(u), g = j(f), m = z(f, 2);
  {
    var p = (v) => {
      var b = Bp(), _ = j(b), E = j(_), T = j(E), A = j(T), S = z(_, 2), w = j(S);
      re(
        (C, L) => {
          Vo(T, C), Ee(A, L), Ee(w, y(o).orig_name);
        },
        [
          () => c(y(o)),
          () => c(y(o))
        ]
      ), M(v, b);
    };
    X(m, (v) => {
      y(o) && v(p);
    });
  }
  re(() => {
    h = Ge(u, 1, "wrap svelte-12marlv", null, h, { progress: y(s) }), Ee(g, `Uploading ${y(a).length ?? ""}
		${y(a).length > 1 ? "files" : "file"}...`);
  }), M(n, u), je();
}
function Hp(n, e, t) {
  if (!n || n === "*" || n === "file/*" || Array.isArray(n) && n.some((s) => s === "*" || s === "file/*"))
    return !0;
  let i;
  if (typeof n == "string")
    i = n.split(",").map((s) => s.trim());
  else if (Array.isArray(n))
    i = n;
  else
    return !1;
  return i.includes(e) || i.some((s) => {
    const [r] = s.split("/").map((a) => a.trim());
    return s.endsWith("/*") && t.startsWith(r + "/");
  });
}
function Vp() {
  let n, e;
  return {
    drag(t, i = {}) {
      e = i;
      function s() {
        n = document.createElement("input"), n.type = "file", n.style.display = "none", n.setAttribute("aria-label", "File upload"), n.setAttribute("data-testid", "file-upload");
        const u = Array.isArray(e.accepted_types) ? e.accepted_types.join(",") : e.accepted_types || void 0;
        u && (n.accept = u), n.multiple = e.mode === "multiple" || !1, e.mode === "directory" && (n.webkitdirectory = !0, n.setAttribute("directory", ""), n.setAttribute("mozdirectory", "")), t.appendChild(n);
      }
      s();
      function r(u) {
        u.preventDefault(), u.stopPropagation();
      }
      function a(u) {
        u.preventDefault(), u.stopPropagation(), e.on_drag_change?.(!0);
      }
      function o(u) {
        u.preventDefault(), u.stopPropagation(), e.on_drag_change?.(!1);
      }
      function l(u) {
        if (u.preventDefault(), u.stopPropagation(), e.on_drag_change?.(!1), !u.dataTransfer?.files)
          return;
        const h = Array.from(u.dataTransfer.files);
        h.length > 0 && e.on_files?.(h);
      }
      function c(u) {
        const h = u.target, f = e.ignore_click_selector;
        e.disable_click || f && h instanceof Element && h.closest(f) !== null || (n.value = "", n.click());
      }
      function d() {
        if (n.files) {
          const u = Array.from(n.files);
          u.length > 0 && e.on_files?.(u);
        }
      }
      return t.addEventListener("drag", r), t.addEventListener("dragstart", r), t.addEventListener("dragend", r), t.addEventListener("dragover", r), t.addEventListener("dragenter", a), t.addEventListener("dragleave", o), t.addEventListener("drop", l), t.addEventListener("click", c), n.addEventListener("change", d), {
        update(u) {
          e = u, n.remove(), s(), n.addEventListener("change", d);
        },
        destroy() {
          t.removeEventListener("drag", r), t.removeEventListener("dragstart", r), t.removeEventListener("dragend", r), t.removeEventListener("dragover", r), t.removeEventListener("dragenter", a), t.removeEventListener("dragleave", o), t.removeEventListener("drop", l), t.removeEventListener("click", c), n.removeEventListener("change", d), n.remove();
        }
      };
    },
    open_file_upload() {
      n && (n.value = "", n.click());
    }
  };
}
var Kp = /* @__PURE__ */ J("<button><!></button>"), Wp = /* @__PURE__ */ J('<button aria-dropeffect="copy"><!></button>');
function jp(n, e) {
  We(e, !0);
  var t = this && this.__awaiter || function(Q, ie, ce, Z) {
    function _e(Ie) {
      return Ie instanceof ce ? Ie : new ce(function(De) {
        De(Ie);
      });
    }
    return new (ce || (ce = Promise))(function(Ie, De) {
      function de(se) {
        try {
          $(Z.next(se));
        } catch (we) {
          De(we);
        }
      }
      function ne(se) {
        try {
          $(Z.throw(se));
        } catch (we) {
          De(we);
        }
      }
      function $(se) {
        se.done ? Ie(se.value) : _e(se.value).then(de, ne);
      }
      $((Z = Z.apply(Q, ie || [])).next());
    });
  };
  const { drag: i, open_file_upload: s } = Vp();
  let r = R(e, "filetype", 3, null), a = R(e, "dragging", 15, !1), o = R(e, "boundedheight", 3, !0), l = R(e, "center", 3, !0), c = R(e, "flex", 3, !0), d = R(e, "file_count", 3, "single"), u = R(e, "disable_click", 3, !1), h = R(e, "hidden", 3, !1), f = R(e, "format", 3, "file"), g = R(e, "uploading", 15, !1), m = R(e, "show_progress", 3, !0), p = R(e, "max_file_size", 3, null), v = R(e, "icon_upload", 3, !1), b = R(e, "height", 3, void 0), _ = R(e, "aria_label", 3, void 0), E = R(e, "upload_promise", 15);
  function T() {
    s();
  }
  let A = "", S, w = fe(null), C = null, I = (() => {
    if (typeof navigator < "u") {
      const Q = navigator.userAgent.toLowerCase();
      return Q.indexOf("iphone") > -1 || Q.indexOf("ipad") > -1;
    }
    return !1;
  })();
  const K = ["image", "video", "audio", "text", "file"], F = (Q) => I && Q.startsWith(".") ? (C = !0, Q) : I && Q.includes("file/*") ? "*" : Q.startsWith(".") || Q.endsWith("/*") ? Q : K.includes(Q) ? Q + "/*" : "." + Q;
  Le(() => {
    if (r() == null)
      W(w, null);
    else if (typeof r() == "string")
      W(w, F(r()), !0);
    else if (I && r().includes("file/*"))
      W(w, "*");
    else {
      const Q = r().map(F);
      W(w, Q.join(", "), !0);
    }
  });
  function D() {
    navigator.clipboard.read().then((Q) => t(this, void 0, void 0, function* () {
      for (let ie = 0; ie < Q.length; ie++) {
        const ce = Q[ie].types.find((Z) => Z.startsWith("image/"));
        if (ce) {
          Q[ie].getType(ce).then((Z) => t(this, void 0, void 0, function* () {
            const _e = new File([Z], `clipboard.${ce.replace("image/", "")}`);
            yield ee([_e]);
          }));
          break;
        }
      }
    }));
  }
  function U() {
    s();
  }
  function G(Q, ie) {
    return t(this, void 0, void 0, function* () {
      return ie ? A = ie : A = Math.random().toString(36).substring(2, 15), yield fn(), g(!0), E(new Promise((ce) => t(this, void 0, void 0, function* () {
        try {
          const Z = (yield e.upload(Q, e.root, A, p() !== null && p() !== void 0 ? p() : 1 / 0)) || [];
          d() === "single" ? Z[0] !== void 0 && (e.onload === null || e.onload === void 0 || e.onload(Z[0])) : e.onload === null || e.onload === void 0 || e.onload(Z), ce(Z), g(!1);
        } catch (Z) {
          e.onerror === null || e.onerror === void 0 || e.onerror(Z.message), g(!1), ce([]);
        }
      }))), E();
    });
  }
  function ee(Q, ie) {
    return t(this, void 0, void 0, function* () {
      if (!Q.length)
        return;
      let ce = Q.map((Z) => new File([Z], Z instanceof File ? Z.name : "file", { type: Z.type }));
      return I && C && (ce = ce.filter((Z) => oe(Z) ? !0 : (e.onerror === null || e.onerror === void 0 || e.onerror(`Invalid file type: ${Z.name}. Only ${r()} allowed.`), !1)), ce.length === 0) ? [] : (S = yield Ec(ce), yield G(S, ie));
    });
  }
  function oe(Q) {
    return r() ? (Array.isArray(r()) ? r() : [r()]).some((ce) => {
      const Z = F(ce);
      if (Z.startsWith("."))
        return Q.name.toLowerCase().endsWith(Z.toLowerCase());
      if (Z === "*")
        return !0;
      if (Z.endsWith("/*")) {
        const [_e] = Z.split("/");
        return Q.type.startsWith(_e + "/");
      }
      return Q.type === Z;
    }) : !0;
  }
  function H(Q) {
    return t(this, void 0, void 0, function* () {
      const ie = Q.filter((ce) => {
        const Z = "." + ce.name.toLowerCase().split(".").pop();
        return Z && Hp(y(w), Z, ce.type) || (Z && Array.isArray(r()) ? r().includes(Z) : Z === r()) ? !0 : (e.onerror === null || e.onerror === void 0 || e.onerror(`Invalid file type only ${r()} allowed.`), !1);
      });
      if (f() != "blob")
        yield ee(ie);
      else {
        if (d() === "single") {
          e.onload === null || e.onload === void 0 || e.onload(ie[0]);
          return;
        }
        e.onload === null || e.onload === void 0 || e.onload(ie);
      }
    });
  }
  function B(Q) {
    return t(this, void 0, void 0, function* () {
      var ie;
      if (a(!1), !(!((ie = Q.dataTransfer) === null || ie === void 0) && ie.files)) return;
      const ce = Array.from(Q.dataTransfer.files).filter(oe);
      if (f() != "blob")
        yield ee(ce);
      else {
        if (d() === "single") {
          e.onload === null || e.onload === void 0 || e.onload(ce[0]);
          return;
        }
        e.onload === null || e.onload === void 0 || e.onload(ce);
      }
    });
  }
  var O = {
    open_upload: T,
    paste_clipboard: D,
    open_file_upload: U,
    load_files: ee,
    load_files_from_drop: B
  }, Y = Ne(), q = ve(Y);
  {
    var le = (Q) => {
      var ie = Kp();
      let ce, Z;
      var _e = j(ie);
      {
        var Ie = (De) => {
          var de = Ne(), ne = ve(de);
          Ci(ne, () => e.children), M(De, de);
        };
        X(_e, (De) => {
          e.children && De(Ie);
        });
      }
      re(() => {
        $e(ie, "tabindex", h() ? -1 : 0), $e(ie, "aria-label", _() || "Paste from clipboard"), ce = Ge(ie, 1, "svelte-tgi0k0", null, ce, {
          hidden: h(),
          center: l(),
          boundedheight: o(),
          flex: c(),
          "icon-mode": v()
        }), Z = tt(ie, "", Z, {
          height: v() ? "" : b() ? typeof b() == "number" ? b() + "px" : b() : "100%"
        });
      }), Oe("click", ie, D), M(Q, ie);
    }, te = (Q) => {
      var ie = Ne(), ce = ve(ie);
      {
        var Z = (_e) => {
          Gp(_e, {
            get root() {
              return e.root;
            },
            get upload_id() {
              return A;
            },
            get files() {
              return S;
            },
            get stream_handler() {
              return e.stream_handler;
            }
          });
        };
        X(ce, (_e) => {
          h() || _e(Z);
        });
      }
      M(Q, ie);
    }, ge = (Q) => {
      var ie = Wp();
      let ce, Z;
      var _e = j(ie);
      {
        var Ie = (De) => {
          var de = Ne(), ne = ve(de);
          Ci(ne, () => e.children), M(De, de);
        };
        X(_e, (De) => {
          e.children && De(Ie);
        });
      }
      Od(ie, (De, de) => i?.(De, de), () => ({
        on_drag_change: (De) => a(De),
        on_files: (De) => H(De),
        accepted_types: y(w),
        mode: d(),
        disable_click: u()
      })), re(() => {
        $e(ie, "tabindex", h() ? -1 : 0), $e(ie, "aria-label", _() || "Click to upload or drop files"), ce = Ge(ie, 1, "svelte-tgi0k0", null, ce, {
          hidden: h(),
          center: l(),
          boundedheight: o(),
          flex: c(),
          disable_click: u(),
          "icon-mode": v()
        }), Z = tt(ie, "", Z, {
          height: v() ? "" : b() ? typeof b() == "number" ? b() + "px" : b() : "100%"
        });
      }), M(Q, ie);
    };
    X(q, (Q) => {
      r() === "clipboard" ? Q(le) : g() && m() ? Q(te, 1) : Q(ge, -1);
    });
  }
  return M(n, Y), je(O);
}
Et(["click"]);
var Yp = /* @__PURE__ */ J("<!> <!> <!> <!> <!>", 1);
function fo(n, e) {
  We(e, !0);
  let t = R(e, "editable", 3, !1), i = R(e, "undoable", 3, !1), s = R(e, "download", 3, null);
  il(n, {
    children: (r, a) => {
      var o = Yp(), l = ve(o);
      {
        var c = (v) => {
          {
            let b = he(() => e.i18n("common.edit"));
            Jt(v, {
              get Icon() {
                return Tu;
              },
              get label() {
                return y(b);
              },
              onclick: () => e.onedit?.()
            });
          }
        };
        X(l, (v) => {
          t() && v(c);
        });
      }
      var d = z(l, 2);
      {
        var u = (v) => {
          {
            let b = he(() => e.i18n("common.undo"));
            Jt(v, {
              get Icon() {
                return Jo;
              },
              get label() {
                return y(b);
              },
              onclick: () => e.onundo?.()
            });
          }
        };
        X(d, (v) => {
          i() && v(u);
        });
      }
      var h = z(d, 2);
      {
        var f = (v) => {
          zo(v, {
            get href() {
              return s();
            },
            download: !0,
            children: (b, _) => {
              {
                let E = he(() => e.i18n("common.download"));
                Jt(b, {
                  get Icon() {
                    return Xo;
                  },
                  get label() {
                    return y(E);
                  }
                });
              }
            },
            $$slots: { default: !0 }
          });
        };
        X(h, (v) => {
          s() && v(f);
        });
      }
      var g = z(h, 2);
      {
        var m = (v) => {
          var b = Ne(), _ = ve(b);
          Ci(_, () => e.children), M(v, b);
        };
        X(g, (v) => {
          e.children && v(m);
        });
      }
      var p = z(g, 2);
      {
        let v = he(() => e.i18n("common.clear"));
        Jt(p, {
          get Icon() {
            return Wr;
          },
          get label() {
            return y(v);
          },
          onclick: (b) => {
            e.onclear?.(), b.stopPropagation();
          }
        });
      }
      M(r, o);
    },
    $$slots: { default: !0 }
  }), je();
}
function Mr(n, e, t, i) {
  return new (t || (t = Promise))((function(s, r) {
    function a(c) {
      try {
        l(i.next(c));
      } catch (d) {
        r(d);
      }
    }
    function o(c) {
      try {
        l(i.throw(c));
      } catch (d) {
        r(d);
      }
    }
    function l(c) {
      var d;
      c.done ? s(c.value) : (d = c.value, d instanceof t ? d : new t((function(u) {
        u(d);
      }))).then(a, o);
    }
    l((i = i.apply(n, [])).next());
  }));
}
class Tc {
  constructor() {
    this.listeners = {};
  }
  on(e, t, i) {
    if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), i?.once) {
      const s = (...r) => {
        this.un(e, s), t(...r);
      };
      return this.listeners[e].add(s), () => this.un(e, s);
    }
    return this.listeners[e].add(t), () => this.un(e, t);
  }
  un(e, t) {
    var i;
    (i = this.listeners[e]) === null || i === void 0 || i.delete(t);
  }
  once(e, t) {
    return this.on(e, t, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(e, ...t) {
    this.listeners[e] && this.listeners[e].forEach(((i) => i(...t)));
  }
}
class zp extends Tc {
  constructor(e) {
    super(), this.subscriptions = [], this.isDestroyed = !1, this.options = e;
  }
  onInit() {
  }
  _init(e) {
    this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = e, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach(((e) => e())), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
  }
}
class qp extends Tc {
  constructor() {
    super(...arguments), this.animationFrameId = null, this.isRunning = !1;
  }
  start() {
    if (this.isRunning) return;
    this.isRunning = !0;
    const e = () => {
      this.isRunning && (this.emit("tick"), this.animationFrameId = requestAnimationFrame(e));
    };
    e();
  }
  stop() {
    this.isRunning = !1, this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
  }
  destroy() {
    this.stop();
  }
}
const Xp = ["audio/webm", "audio/wav", "audio/mpeg", "audio/mp4", "audio/mp3"];
class Ji extends zp {
  constructor(e) {
    var t, i, s, r, a, o;
    super(Object.assign(Object.assign({}, e), { audioBitsPerSecond: (t = e.audioBitsPerSecond) !== null && t !== void 0 ? t : 128e3, scrollingWaveform: (i = e.scrollingWaveform) !== null && i !== void 0 && i, scrollingWaveformWindow: (s = e.scrollingWaveformWindow) !== null && s !== void 0 ? s : 5, continuousWaveform: (r = e.continuousWaveform) !== null && r !== void 0 && r, renderRecordedAudio: (a = e.renderRecordedAudio) === null || a === void 0 || a, mediaRecorderTimeslice: (o = e.mediaRecorderTimeslice) !== null && o !== void 0 ? o : void 0 })), this.stream = null, this.mediaRecorder = null, this.dataWindow = null, this.isWaveformPaused = !1, this.lastStartTime = 0, this.lastDuration = 0, this.duration = 0, this.micStream = null, this.recordedBlobUrl = null, this.timer = new qp(), this.subscriptions.push(this.timer.on("tick", (() => {
      const l = performance.now() - this.lastStartTime;
      this.duration = this.isPaused() ? this.duration : this.lastDuration + l, this.emit("record-progress", this.duration);
    })));
  }
  static create(e) {
    return new Ji(e || {});
  }
  renderMicStream(e) {
    var t;
    const i = new AudioContext(), s = i.createMediaStreamSource(e), r = i.createAnalyser();
    s.connect(r), this.options.continuousWaveform && (r.fftSize = 32);
    const a = r.frequencyBinCount, o = new Float32Array(a);
    let l = 0;
    this.wavesurfer && ((t = this.originalOptions) !== null && t !== void 0 || (this.originalOptions = Object.assign({}, this.wavesurfer.options)), this.wavesurfer.options.interact = !1, this.options.scrollingWaveform && (this.wavesurfer.options.cursorWidth = 0));
    const c = setInterval((() => {
      var d, u, h, f;
      if (!this.isWaveformPaused) {
        if (r.getFloatTimeDomainData(o), this.options.scrollingWaveform) {
          const g = Math.floor((this.options.scrollingWaveformWindow || 0) * i.sampleRate), m = Math.min(g, this.dataWindow ? this.dataWindow.length + a : a), p = new Float32Array(g);
          if (this.dataWindow) {
            const v = Math.max(0, g - this.dataWindow.length);
            p.set(this.dataWindow.slice(-m + a), v);
          }
          p.set(o, g - a), this.dataWindow = p;
        } else if (this.options.continuousWaveform) {
          if (!this.dataWindow) {
            const m = this.options.continuousWaveformDuration ? Math.round(100 * this.options.continuousWaveformDuration) : ((u = (d = this.wavesurfer) === null || d === void 0 ? void 0 : d.getWidth()) !== null && u !== void 0 ? u : 0) * window.devicePixelRatio;
            this.dataWindow = new Float32Array(m);
          }
          let g = 0;
          for (let m = 0; m < a; m++) {
            const p = Math.abs(o[m]);
            p > g && (g = p);
          }
          if (l + 1 > this.dataWindow.length) {
            const m = new Float32Array(2 * this.dataWindow.length);
            m.set(this.dataWindow, 0), this.dataWindow = m;
          }
          this.dataWindow[l] = g, l++;
        } else this.dataWindow = o;
        if (this.wavesurfer) {
          const g = ((f = (h = this.dataWindow) === null || h === void 0 ? void 0 : h.length) !== null && f !== void 0 ? f : 0) / 100;
          this.wavesurfer.load("", [this.dataWindow], this.options.scrollingWaveform ? this.options.scrollingWaveformWindow : g).then((() => {
            this.wavesurfer && this.options.continuousWaveform && (this.wavesurfer.setTime(this.getDuration() / 1e3), this.wavesurfer.options.minPxPerSec || this.wavesurfer.setOptions({ minPxPerSec: this.wavesurfer.getWidth() / this.wavesurfer.getDuration() }));
          })).catch(((m) => {
            console.error("Error rendering real-time recording data:", m);
          }));
        }
      }
    }), 10);
    return { onDestroy: () => {
      clearInterval(c), s?.disconnect(), i?.close();
    }, onEnd: () => {
      this.isWaveformPaused = !0, this.stopMic();
    } };
  }
  startMic(e) {
    return Mr(this, void 0, void 0, (function* () {
      let t;
      this.micStream && this.stopMic();
      try {
        t = yield navigator.mediaDevices.getUserMedia({ audio: e == null || e });
      } catch (s) {
        throw new Error("Error accessing the microphone: " + s.message);
      }
      const i = this.renderMicStream(t);
      return this.micStream = i, this.unsubscribeDestroy = this.once("destroy", i.onDestroy), this.unsubscribeRecordEnd = this.once("record-end", i.onEnd), this.stream = t, t;
    }));
  }
  stopMic() {
    var e, t, i;
    (e = this.micStream) === null || e === void 0 || e.onDestroy(), (t = this.unsubscribeDestroy) === null || t === void 0 || t.call(this), (i = this.unsubscribeRecordEnd) === null || i === void 0 || i.call(this), this.micStream = null, this.unsubscribeDestroy = void 0, this.unsubscribeRecordEnd = void 0, this.stream && (this.stream.getTracks().forEach(((s) => s.stop())), this.stream = null, this.mediaRecorder = null);
  }
  startRecording(e) {
    return Mr(this, void 0, void 0, (function* () {
      const t = this.stream || (yield this.startMic(e));
      this.dataWindow = null;
      const i = this.mediaRecorder || new MediaRecorder(t, { mimeType: this.options.mimeType || Xp.find(((a) => MediaRecorder.isTypeSupported(a))), audioBitsPerSecond: this.options.audioBitsPerSecond });
      this.mediaRecorder = i, this.stopRecording();
      const s = [];
      i.ondataavailable = (a) => {
        a.data.size > 0 && s.push(a.data), this.emit("record-data-available", a.data);
      };
      const r = (a) => {
        var o;
        const l = new Blob(s, { type: i.mimeType });
        this.emit(a, l), this.options.renderRecordedAudio && (this.applyOriginalOptionsIfNeeded(), this.recordedBlobUrl && URL.revokeObjectURL(this.recordedBlobUrl), this.recordedBlobUrl = URL.createObjectURL(l), (o = this.wavesurfer) === null || o === void 0 || o.load(this.recordedBlobUrl));
      };
      i.onpause = () => r("record-pause"), i.onstop = () => r("record-end"), i.start(this.options.mediaRecorderTimeslice), this.lastStartTime = performance.now(), this.lastDuration = 0, this.duration = 0, this.isWaveformPaused = !1, this.timer.start(), this.emit("record-start");
    }));
  }
  getDuration() {
    return this.duration;
  }
  isRecording() {
    var e;
    return ((e = this.mediaRecorder) === null || e === void 0 ? void 0 : e.state) === "recording";
  }
  isPaused() {
    var e;
    return ((e = this.mediaRecorder) === null || e === void 0 ? void 0 : e.state) === "paused";
  }
  isActive() {
    var e;
    return ((e = this.mediaRecorder) === null || e === void 0 ? void 0 : e.state) !== "inactive";
  }
  stopRecording() {
    var e;
    this.isActive() && ((e = this.mediaRecorder) === null || e === void 0 || e.stop(), this.timer.stop());
  }
  pauseRecording() {
    var e, t;
    this.isRecording() && (this.isWaveformPaused = !0, (e = this.mediaRecorder) === null || e === void 0 || e.requestData(), (t = this.mediaRecorder) === null || t === void 0 || t.pause(), this.timer.stop(), this.lastDuration = this.duration);
  }
  resumeRecording() {
    var e;
    this.isPaused() && (this.isWaveformPaused = !1, (e = this.mediaRecorder) === null || e === void 0 || e.resume(), this.timer.start(), this.lastStartTime = performance.now(), this.emit("record-resume"));
  }
  static getAvailableAudioDevices() {
    return Mr(this, void 0, void 0, (function* () {
      return navigator.mediaDevices.enumerateDevices().then(((e) => e.filter(((t) => t.kind === "audioinput"))));
    }));
  }
  destroy() {
    this.applyOriginalOptionsIfNeeded(), super.destroy(), this.stopRecording(), this.stopMic(), this.recordedBlobUrl && (URL.revokeObjectURL(this.recordedBlobUrl), this.recordedBlobUrl = null);
  }
  applyOriginalOptionsIfNeeded() {
    this.wavesurfer && this.originalOptions && (this.wavesurfer.setOptions(this.originalOptions), delete this.originalOptions);
  }
}
var go = /* @__PURE__ */ J("<option> </option>"), Qp = /* @__PURE__ */ J('<select class="mic-select svelte-1atncfv" aria-label="Select input device"><!></select>');
function bc(n, e) {
  We(e, !0);
  let t = R(e, "micDevices", 15);
  wt(() => {
    if (typeof window < "u" && navigator.mediaDevices) {
      let o = [];
      Ji.getAvailableAudioDevices().then((l) => {
        t(l), l.forEach((c) => {
          c.deviceId && o.push(c);
        }), t(o);
      }).catch((l) => {
        l instanceof DOMException && l.name == "NotAllowedError" && (e.onerror === null || e.onerror === void 0 || e.onerror(e.i18n("audio.allow_recording_access")));
      });
    }
  });
  var i = Qp(), s = j(i);
  {
    var r = (o) => {
      var l = go(), c = j(l);
      l.value = l.__value = "", re((d) => Ee(c, d), [() => e.i18n("audio.no_microphone")]), M(o, l);
    }, a = (o) => {
      var l = Ne(), c = ve(l);
      Ft(c, 17, t, ei, (d, u) => {
        var h = go(), f = j(h), g = {};
        re(() => {
          Ee(f, y(u).label), g !== (g = y(u).deviceId) && (h.value = (h.__value = y(u).deviceId) ?? "");
        }), M(d, h);
      }), M(o, l);
    };
    X(s, (o) => {
      !t() || t().length === 0 ? o(r) : o(a, -1);
    });
  }
  re(() => i.disabled = !t() || t().length === 0), M(n, i), je();
}
var Zp = /* @__PURE__ */ J('<time class="duration-button duration svelte-1j5np9x"> </time>'), Jp = /* @__PURE__ */ J('<div class="controls svelte-1j5np9x"><div class="wrapper svelte-1j5np9x"><button class="record record-button svelte-1j5np9x"> </button> <button> </button> <button id="stop-paused" class="stop-button-paused svelte-1j5np9x"> </button> <button aria-label="pause" class="pause-button svelte-1j5np9x"><!></button> <button class="resume-button svelte-1j5np9x"> </button> <!></div> <!></div>');
function $p(n, e) {
  We(e, !0);
  let t = R(e, "recording", 3, !1), i = R(e, "timing", 3, !1), s = fe(yt([])), r, a, o, l, c, d = fe(!1);
  const u = () => {
    r.style.display = "none", l.style.display = "flex", a.style.display = "block";
  }, h = () => {
    e.record.isPaused() && (e.record.resumeRecording(), e.record.stopRecording()), e.record.stopMic(), r.style.display = "flex", l.style.display = "none", a.style.display = "none", r.disabled = !1;
  }, f = () => {
    a.style.display = "none", o.style.display = "block", l.style.display = "none", c.style.display = "flex";
  }, g = () => {
    a.style.display = "block", o.style.display = "none", r.style.display = "none", l.style.display = "flex", c.style.display = "none";
  };
  wt(() => {
    e.record.on("record-start", u), e.record.on("record-end", h), e.record.on("record-pause", f), e.record.on("record-resume", g);
  }), Zs(() => {
    e.record.un("record-start", u), e.record.un("record-end", h), e.record.un("record-pause", f), e.record.un("record-resume", g);
  }), Le(() => {
    t() && !y(d) ? e.record.startMic().then(() => {
      e.record.startRecording(), W(d, !0);
    }) : !t() && y(d) && (e.record.isPaused() && e.record.resumeRecording(), e.record.stopRecording(), W(d, !1));
  });
  var m = Jp(), p = j(m), v = j(p), b = j(v);
  et(v, (D) => r = D, () => r);
  var _ = z(v, 2), E = j(_);
  et(_, (D) => l = D, () => l);
  var T = z(_, 2), A = j(T);
  et(T, (D) => c = D, () => c);
  var S = z(T, 2), w = j(S);
  Zo(w), et(S, (D) => a = D, () => a);
  var C = z(S, 2), L = j(C);
  et(C, (D) => o = D, () => o);
  var I = z(C, 2);
  {
    var K = (D) => {
      var U = Zp(), G = j(U);
      re(() => Ee(G, e.record_time)), M(D, U);
    };
    X(I, (D) => {
      i() && !e.show_recording_waveform && D(K);
    });
  }
  var F = z(p, 2);
  bc(F, {
    get i18n() {
      return e.i18n;
    },
    get micDevices() {
      return y(s);
    },
    set micDevices(D) {
      W(s, D, !0);
    }
  }), re(
    (D, U, G, ee, oe) => {
      Ee(b, D), Ge(_, 1, `stop-button ${U ?? ""}`, "svelte-1j5np9x"), Ee(E, G), Ee(A, ee), Ee(L, oe);
    },
    [
      () => e.i18n("audio.record"),
      () => e.record.isPaused() ? "stop-button-paused" : "",
      () => e.i18n("audio.stop"),
      () => e.i18n("audio.stop"),
      () => e.i18n("audio.resume")
    ]
  ), Oe("click", v, () => e.record.startRecording()), Oe("click", _, () => {
    e.record.isPaused() && (e.record.resumeRecording(), e.record.stopRecording()), e.record.stopRecording();
  }), Oe("click", T, () => {
    e.record.isPaused() && (e.record.resumeRecording(), e.record.stopRecording()), e.record.stopRecording();
  }), Oe("click", S, () => e.record.pauseRecording()), Oe("click", C, () => e.record.resumeRecording()), M(n, m), je();
}
Et(["click"]);
var ev = /* @__PURE__ */ J('<time class="trim-duration svelte-3m60v8"> </time>'), tv = /* @__PURE__ */ J('<time class="duration svelte-3m60v8"> </time>'), iv = /* @__PURE__ */ J('<time class="duration svelte-3m60v8">0:00</time>'), sv = /* @__PURE__ */ J('<div class="timestamps svelte-3m60v8"><time class="time svelte-3m60v8">0:00</time> <div><!> <!></div></div>'), rv = /* @__PURE__ */ J('<div class="component-wrapper svelte-3m60v8"><div class="microphone svelte-3m60v8" data-testid="microphone-waveform"></div> <div data-testid="recording-waveform"></div> <!> <!> <!></div>');
function nv(n, e) {
  We(e, !0);
  var t = this && this.__awaiter || function(O, Y, q, le) {
    function te(ge) {
      return ge instanceof q ? ge : new q(function(Q) {
        Q(ge);
      });
    }
    return new (q || (q = Promise))(function(ge, Q) {
      function ie(_e) {
        try {
          Z(le.next(_e));
        } catch (Ie) {
          Q(Ie);
        }
      }
      function ce(_e) {
        try {
          Z(le.throw(_e));
        } catch (Ie) {
          Q(Ie);
        }
      }
      function Z(_e) {
        _e.done ? ge(_e.value) : te(_e.value).then(ie, ce);
      }
      Z((le = le.apply(O, Y || [])).next());
    });
  };
  let i = R(e, "mode", 15), s = R(e, "waveform_options", 19, () => ({ show_recording_waveform: !0 })), r = R(e, "editable", 3, !0), a = R(e, "recording", 3, !1), o, l = fe(void 0), c = fe(!1), d, u, h = fe(void 0), f = fe(null), g, m, p = fe(0), v = fe(0), b, _ = fe(!1), E = fe(0), T = fe(!1);
  const A = () => {
    clearInterval(b), b = setInterval(
      () => {
        Ur(v);
      },
      1e3
    );
  };
  function S() {
    if (A(), W(_, !0), e.onstartrecording === null || e.onstartrecording === void 0 || e.onstartrecording(), s().show_recording_waveform) {
      let O = u;
      O && (O.style.display = "block");
    }
  }
  function w(O) {
    return t(this, void 0, void 0, function* () {
      W(v, 0), W(_, !1), clearInterval(b);
      try {
        const Y = yield O.arrayBuffer(), le = yield new AudioContext({ sampleRate: e.waveform_settings.sampleRate }).decodeAudioData(Y);
        le && (yield jr(le).then((te) => t(this, void 0, void 0, function* () {
          yield e.dispatch_blob([te], "change"), yield e.dispatch_blob([te], "stop_recording");
        })));
      } catch (Y) {
        console.error(Y);
      }
    });
  }
  Le(() => {
    y(h) === null || y(h) === void 0 || y(h).on("record-resume", () => {
      A();
    });
  }), Le(() => {
    y(l) === null || y(l) === void 0 || y(l).on("decode", (O) => {
      W(p, O, !0), m && (m.textContent = Lt(O));
    });
  }), Le(() => {
    y(l) === null || y(l) === void 0 || y(l).on("timeupdate", (O) => g && (g.textContent = Lt(O)));
  }), Le(() => {
    y(l) === null || y(l) === void 0 || y(l).on("pause", () => {
      e.onpause === null || e.onpause === void 0 || e.onpause(), W(c, !1);
    });
  }), Le(() => {
    y(l) === null || y(l) === void 0 || y(l).on("play", () => {
      e.onplay === null || e.onplay === void 0 || e.onplay(), W(c, !0);
    });
  }), Le(() => {
    y(l) === null || y(l) === void 0 || y(l).on("finish", () => {
      e.onstop === null || e.onstop === void 0 || e.onstop(), W(c, !1);
    });
  });
  const C = () => {
    u && (u.innerHTML = ""), o !== void 0 && o.destroy(), u && (o = zt.create(Object.assign(Object.assign({}, e.waveform_settings), { normalize: !1, container: u })), W(h, o.registerPlugin(Ji.create()), !0), y(h) === null || y(h) === void 0 || y(h).on("record-end", w), y(h) === null || y(h) === void 0 || y(h).on("record-start", S), y(h) === null || y(h) === void 0 || y(h).on("record-pause", () => {
      e.onpauserecording === null || e.onpauserecording === void 0 || e.onpauserecording(), clearInterval(b);
    }), y(h) === null || y(h) === void 0 || y(h).on("record-end", (O) => {
      W(f, URL.createObjectURL(O), !0);
      const Y = u, q = d;
      Y && (Y.style.display = "none"), q && y(f) && (q.innerHTML = "", L());
    }), W(T, !0));
  }, L = () => {
    let O = d;
    !y(f) || !O || W(l, zt.create(Object.assign({ container: O, url: y(f) }, e.waveform_settings)), !0);
  }, I = (O, Y) => t(void 0, void 0, void 0, function* () {
    i("edit");
    const q = y(l) === null || y(l) === void 0 ? void 0 : y(l).getDecodedData();
    q && (yield jr(q, O, Y).then((le) => t(void 0, void 0, void 0, function* () {
      yield e.dispatch_blob([le], "change"), yield e.dispatch_blob([le], "stop_recording"), y(l) === null || y(l) === void 0 || y(l).destroy(), L();
    }))), e.onedit === null || e.onedit === void 0 || e.onedit();
  });
  wt(() => {
    C(), window.addEventListener("keydown", (O) => {
      if (!(d && d.contains(document.activeElement))) return;
      const q = y(l);
      q && (O.key === "ArrowRight" ? Os(q, 0.1) : O.key === "ArrowLeft" && Os(q, -0.1));
    });
  });
  var K = rv(), F = j(K);
  et(F, (O) => u = O, () => u);
  var D = z(F, 2);
  et(D, (O) => d = O, () => d);
  var U = z(D, 2);
  {
    var G = (O) => {
      var Y = sv(), q = j(Y);
      et(q, (Z) => g = Z, () => g);
      var le = z(q, 2), te = j(le);
      {
        var ge = (Z) => {
          var _e = ev(), Ie = j(_e);
          re((De) => Ee(Ie, De), [() => Lt(y(E))]), M(Z, _e);
        };
        X(te, (Z) => {
          i() === "edit" && y(E) > 0 && Z(ge);
        });
      }
      var Q = z(te, 2);
      {
        var ie = (Z) => {
          var _e = tv(), Ie = j(_e);
          re((De) => Ee(Ie, De), [() => Lt(y(v))]), M(Z, _e);
        }, ce = (Z) => {
          var _e = iv();
          et(_e, (Ie) => m = Ie, () => m), M(Z, _e);
        };
        X(Q, (Z) => {
          y(_) ? Z(ie) : Z(ce, -1);
        });
      }
      M(O, Y);
    };
    X(U, (O) => {
      (y(_) || y(f)) && s().show_recording_waveform && O(G);
    });
  }
  var ee = z(U, 2);
  {
    var oe = (O) => {
      {
        let Y = he(() => Lt(y(v)));
        $p(O, {
          get record() {
            return y(h);
          },
          get i18n() {
            return e.i18n;
          },
          get timing() {
            return y(_);
          },
          get recording() {
            return a();
          },
          get show_recording_waveform() {
            return s().show_recording_waveform;
          },
          get record_time() {
            return y(Y);
          }
        });
      }
    };
    X(ee, (O) => {
      y(T) && !y(f) && O(oe);
    });
  }
  var H = z(ee, 2);
  {
    var B = (O) => {
      ll(O, {
        get waveform() {
          return y(l);
        },
        get container() {
          return d;
        },
        get playing() {
          return y(c);
        },
        get audio_duration() {
          return y(p);
        },
        get i18n() {
          return e.i18n;
        },
        get editable() {
          return r();
        },
        interactive: !0,
        handle_trim_audio: I,
        show_redo: !0,
        get handle_reset_value() {
          return e.handle_reset_value;
        },
        get waveform_options() {
          return s();
        },
        get trimDuration() {
          return y(E);
        },
        set trimDuration(Y) {
          W(E, Y, !0);
        },
        get mode() {
          return i();
        },
        set mode(Y) {
          i(Y);
        }
      });
    };
    X(H, (O) => {
      y(l) && y(f) && O(B);
    });
  }
  M(n, K), je();
}
var av = /* @__PURE__ */ J('<div class="svelte-1vyleia"></div>'), ov = /* @__PURE__ */ J('<button><span class="record-icon svelte-1vyleia"><span class="pinger svelte-1vyleia"></span> <span class="dot svelte-1vyleia"></span></span> </button>'), lv = /* @__PURE__ */ J('<button class="spinner-button svelte-1vyleia"><div class="icon svelte-1vyleia"><!></div> </button>'), cv = /* @__PURE__ */ J('<button class="record-button svelte-1vyleia"><span class="record-icon svelte-1vyleia"><span class="dot svelte-1vyleia"></span></span> </button>'), dv = /* @__PURE__ */ J('<div class="mic-wrap svelte-1vyleia"><!> <div class="controls svelte-1vyleia"><!> <!></div></div>');
function uv(n, e) {
  We(e, !0);
  let t = R(e, "recording", 3, !1), i = R(e, "paused_recording", 3, !1), s = R(e, "waveform_options", 19, () => ({ show_recording_waveform: !0 })), r = R(e, "waiting", 3, !1), a, o, l, c = fe(yt([]));
  wt(() => {
    d();
  });
  const d = () => {
    a !== void 0 && a.destroy(), l && (a = zt.create(Object.assign(Object.assign({}, e.waveform_settings), { normalize: !1, container: l })), o = a.registerPlugin(Ji.create()));
  };
  var u = dv(), h = j(u);
  {
    var f = (E) => {
      var T = av();
      let A;
      et(T, (S) => l = S, () => l), re(() => A = tt(T, "", A, { display: t() ? "block" : "none" })), M(E, T);
    };
    X(h, (E) => {
      s().show_recording_waveform && E(f);
    });
  }
  var g = z(h, 2), m = j(g);
  {
    var p = (E) => {
      var T = ov(), A = z(j(T));
      re(
        (S) => {
          Ge(T, 1, Uo(i() ? "stop-button-paused" : "stop-button"), "svelte-1vyleia"), Ee(A, ` ${S ?? ""}`);
        },
        [
          () => i() ? e.i18n("audio.pause") : e.i18n("audio.stop")
        ]
      ), Oe("click", T, () => {
        o?.stopMic(), e.stop();
      }), M(E, T);
    }, v = (E) => {
      var T = lv(), A = j(T), S = j(A);
      Yu(S);
      var w = z(A);
      re((C) => Ee(w, ` ${C ?? ""}`), [() => e.i18n("audio.waiting")]), Oe("click", T, () => {
        e.stop();
      }), M(E, T);
    }, b = (E) => {
      var T = cv(), A = z(j(T));
      re((S) => Ee(A, ` ${S ?? ""}`), [() => e.i18n("audio.record")]), Oe("click", T, () => {
        o?.startMic(), e.record();
      }), M(E, T);
    };
    X(m, (E) => {
      t() && !r() ? E(p) : t() && r() ? E(v, 1) : E(b, -1);
    });
  }
  var _ = z(m, 2);
  bc(_, {
    get i18n() {
      return e.i18n;
    },
    get micDevices() {
      return y(c);
    },
    set micDevices(E) {
      W(c, E, !0);
    }
  }), M(n, u), je();
}
Et(["click"]);
let mo;
async function hv() {
  const { MediaRecorder: n, register: e } = await import("./module-C3TaTLGe.js"), { connect: t } = await import("./module-By4MT9tU.js");
  return e(await t()), mo = n, mo;
}
var po = /* @__PURE__ */ J("<!> <!>", 1), fv = /* @__PURE__ */ J("<!> <div><!> <!> <!></div>", 1);
function gv(n, e) {
  We(e, !0);
  var t = this && this.__awaiter || function(ye, be, Ve, Ae) {
    function Ce(ue) {
      return ue instanceof Ve ? ue : new Ve(function(Se) {
        Se(ue);
      });
    }
    return new (Ve || (Ve = Promise))(function(ue, Se) {
      function ke(Pe) {
        try {
          Re(Ae.next(Pe));
        } catch (qe) {
          Se(qe);
        }
      }
      function ze(Pe) {
        try {
          Re(Ae.throw(Pe));
        } catch (qe) {
          Se(qe);
        }
      }
      function Re(Pe) {
        Pe.done ? ue(Pe.value) : Ce(Pe.value).then(ke, ze);
      }
      Re((Ae = Ae.apply(ye, be || [])).next());
    });
  };
  let i = R(e, "value", 15, null), s = R(e, "subtitles", 3, null), r = R(e, "categories", 3, null), a = R(e, "annotations", 3, null), o = R(e, "transcript", 3, null), l = R(e, "show_label", 3, !0), c = R(e, "buttons", 19, () => ["download", "share"]), d = R(e, "on_custom_button_click", 3, null), u = R(e, "sources", 19, () => ["microphone", "upload"]), h = R(e, "pending", 3, !1), f = R(e, "streaming", 3, !1), g = R(e, "trim_region_settings", 19, () => ({})), m = R(e, "waveform_options", 19, () => ({})), p = R(e, "dragging", 15, !1), v = R(e, "active_source", 15, "microphone"), b = R(e, "handle_reset_value", 3, () => {
  }), _ = R(e, "editable", 3, !0), E = R(e, "max_file_size", 3, null), T = R(e, "stream_every", 3, 0.1), A = R(e, "uploading", 15, !1), S = R(e, "recording", 15, !1), w = R(e, "class_name", 3, ""), C = R(e, "upload_promise", 15), L = R(e, "initial_value", 15), I = R(e, "playback_position", 15), K = R(e, "time_limit", 3, null), F = R(e, "stream_state", 3, "closed");
  Le(() => {
    e.ondrag === null || e.ondrag === void 0 || e.ondrag(p());
  });
  let D, U = fe(""), G, ee = [], oe = !1, H = !1, B;
  const O = 44;
  let Y = [];
  typeof window < "u" && f() && hv().then((ye) => {
    B = ye;
  });
  const le = (ye) => ye.map((be) => be instanceof Blob ? be : be.slice()), te = (ye, be) => t(void 0, void 0, void 0, function* () {
    var Ve;
    let Ae = new File(le(ye), "audio.wav", { type: "audio/wav" });
    if (Ae.size === 0)
      return;
    const Ce = yield Ec([Ae], be === "stream");
    L(i()), i(((Ve = yield e.upload(Ce, e.root, void 0, E() || void 0)) === null || Ve === void 0 ? void 0 : Ve.filter(Boolean))[0]), be === "stream" ? e.onstream === null || e.onstream === void 0 || e.onstream(i()) : be === "change" ? e.onchange === null || e.onchange === void 0 || e.onchange(i()) : be === "stop_recording" && (e.onstop_recording === null || e.onstop_recording === void 0 || e.onstop_recording());
  });
  Zs(() => {
    f() && D && D.state !== "inactive" && D.stop();
  });
  function ge() {
    return t(this, void 0, void 0, function* () {
      let ye;
      try {
        ye = yield navigator.mediaDevices.getUserMedia({ audio: !0 });
      } catch (be) {
        if (!navigator.mediaDevices) {
          e.onerror === null || e.onerror === void 0 || e.onerror(e.i18n("audio.no_device_support"));
          return;
        }
        if (be instanceof DOMException && be.name == "NotAllowedError") {
          e.onerror === null || e.onerror === void 0 || e.onerror(e.i18n("audio.allow_recording_access"));
          return;
        }
        throw be;
      }
      ye != null && (f() ? (D = new B(ye, { mimeType: "audio/wav" }), D.addEventListener("dataavailable", Q)) : (D = new MediaRecorder(ye), D.addEventListener("dataavailable", (be) => {
        Y.push(be.data);
      })), D.addEventListener("stop", () => t(this, void 0, void 0, function* () {
        S(!1), D.stop(), yield te(Y, "change"), yield te(Y, "stop_recording"), Y = [];
      })), H = !0);
    });
  }
  function Q(ye) {
    return t(this, void 0, void 0, function* () {
      let be = yield ye.data.arrayBuffer(), Ve = new Uint8Array(be);
      if (G || (G = new Uint8Array(be.slice(0, O)), Ve = new Uint8Array(be.slice(O))), h())
        ee.push(Ve);
      else {
        let Ae = [G].concat(ee, [Ve]);
        if (!S() || F() === "waiting") return;
        te(Ae, "stream"), ee = [];
      }
    });
  }
  Le(() => {
    if (oe && h() === !1 && (oe = !1, G && ee)) {
      let ye = [G].concat(ee);
      ee = [], te(ye, "stream");
    }
  });
  function ie() {
    return t(this, void 0, void 0, function* () {
      S(!0), e.onstart_recording === null || e.onstart_recording === void 0 || e.onstart_recording(), H || (yield ge()), G = void 0, f() && D.state != "recording" && D.start(T() * 1e3);
    });
  }
  function ce() {
    e.onchange === null || e.onchange === void 0 || e.onchange(null), e.onclear === null || e.onclear === void 0 || e.onclear(), W(U, ""), i(null);
  }
  function Z(ye) {
    i(ye), e.onchange === null || e.onchange === void 0 || e.onchange(ye), e.onupload === null || e.onupload === void 0 || e.onupload(ye);
  }
  function _e() {
    return t(this, void 0, void 0, function* () {
      S(!1), f() && (e.onclose_stream === null || e.onclose_stream === void 0 || e.onclose_stream(), e.onstop_recording === null || e.onstop_recording === void 0 || e.onstop_recording(), D.stop(), h() && (oe = !0), yield te(Y, "stop_recording"), e.onclear === null || e.onclear === void 0 || e.onclear(), W(U, ""));
    });
  }
  Le(() => {
    !S() && D && y(U) !== "" && _e();
  }), Le(() => {
    S() && D && ie();
  });
  var Ie = fv(), De = ve(Ie);
  {
    let ye = he(() => v() === "upload" && i() === null), be = he(() => e.label || e.i18n("audio.audio"));
    Yo(De, {
      get show_label() {
        return l();
      },
      get Icon() {
        return Ps;
      },
      get float() {
        return y(ye);
      },
      get label() {
        return y(be);
      }
    });
  }
  var de = z(De, 2), ne = j(de);
  Ih(ne, {
    get time_limit() {
      return K();
    }
  });
  var $ = z(ne, 2);
  {
    var se = (ye) => {
      var be = Ne(), Ve = ve(be);
      {
        var Ae = (ue) => {
          var Se = po(), ke = ve(Se);
          fo(ke, {
            get i18n() {
              return e.i18n;
            },
            onclear: ce
          });
          var ze = z(ke, 2);
          {
            var Re = (qe) => {
              {
                let st = he(() => F() === "waiting");
                uv(qe, {
                  record: ie,
                  get recording() {
                    return S();
                  },
                  stop: _e,
                  get i18n() {
                    return e.i18n;
                  },
                  get waveform_settings() {
                    return e.waveform_settings;
                  },
                  get waveform_options() {
                    return m();
                  },
                  get waiting() {
                    return y(st);
                  }
                });
              }
            }, Pe = (qe) => {
              nv(qe, {
                get i18n() {
                  return e.i18n;
                },
                get editable() {
                  return _();
                },
                get recording() {
                  return S();
                },
                dispatch_blob: te,
                get waveform_settings() {
                  return e.waveform_settings;
                },
                get waveform_options() {
                  return m();
                },
                get handle_reset_value() {
                  return b();
                },
                onstartrecording: () => e.onstart_recording?.(),
                onpauserecording: () => e.onpause_recording?.(),
                onstoprecording: () => e.onstop_recording?.(),
                get mode() {
                  return y(U);
                },
                set mode(st) {
                  W(U, st, !0);
                }
              });
            };
            X(ze, (qe) => {
              f() ? qe(Re) : qe(Pe, -1);
            });
          }
          M(ue, Se);
        }, Ce = (ue) => {
          {
            let Se = he(() => e.i18n("audio.drop_to_upload"));
            jp(ue, {
              filetype: "audio/aac,audio/midi,audio/mpeg,audio/ogg,audio/wav,audio/x-wav,audio/opus,audio/webm,audio/flac,audio/vnd.rn-realaudio,audio/x-ms-wma,audio/x-aiff,audio/amr,audio/*",
              onload: Z,
              onerror: (ke) => e.onerror?.(ke),
              get root() {
                return e.root;
              },
              get max_file_size() {
                return E();
              },
              get upload() {
                return e.upload;
              },
              get stream_handler() {
                return e.stream_handler;
              },
              get aria_label() {
                return y(Se);
              },
              get upload_promise() {
                return C();
              },
              set upload_promise(ke) {
                C(ke);
              },
              get dragging() {
                return p();
              },
              set dragging(ke) {
                p(ke);
              },
              get uploading() {
                return A();
              },
              set uploading(ke) {
                A(ke);
              },
              children: (ke, ze) => {
                var Re = Ne(), Pe = ve(Re);
                {
                  var qe = (st) => {
                    var Rt = Ne(), It = ve(Rt);
                    Ci(It, () => e.children), M(st, Rt);
                  };
                  X(Pe, (st) => {
                    e.children && st(qe);
                  });
                }
                M(ke, Re);
              },
              $$slots: { default: !0 }
            });
          }
        };
        X(Ve, (ue) => {
          v() === "microphone" ? ue(Ae) : v() === "upload" && ue(Ce, 1);
        });
      }
      M(ye, be);
    }, we = (ye) => {
      var be = po(), Ve = ve(be);
      {
        let Ce = he(() => c() === null || c().some((ue) => typeof ue == "string" && ue === "download") ? i().url : null);
        fo(Ve, {
          get i18n() {
            return e.i18n;
          },
          onclear: ce,
          onedit: () => {
            W(U, "edit"), e.onedit?.();
          },
          get download() {
            return y(Ce);
          },
          children: (ue, Se) => {
            var ke = Ne(), ze = ve(ke);
            {
              var Re = (Pe) => {
                var qe = Ne(), st = ve(qe);
                Ft(st, 17, c, ei, (Rt, It) => {
                  var $i = Ne(), tr = ve($i);
                  {
                    var es = (qt) => {
                      var fi = Ne(), sr = ve(fi);
                      {
                        var Fe = (Ye) => {
                          el(Ye, {
                            get i18n() {
                              return e.i18n;
                            },
                            get onerror() {
                              return e.onerror;
                            },
                            onshare: () => {
                            },
                            formatter: async (ht) => !ht || !ht.url ? "" : `<audio controls src="${await jo(ht.url)}"></audio>`,
                            get value() {
                              return i();
                            }
                          });
                        };
                        X(sr, (Ye) => {
                          y(It) === "share" && Ye(Fe);
                        });
                      }
                      M(qt, fi);
                    }, ir = (qt) => {
                      tl(qt, {
                        get button() {
                          return y(It);
                        },
                        on_click: (fi) => {
                          d() && d()(fi);
                        }
                      });
                    };
                    X(tr, (qt) => {
                      typeof y(It) == "string" ? qt(es) : qt(ir, -1);
                    });
                  }
                  M(Rt, $i);
                }), M(Pe, qe);
              };
              X(ze, (Pe) => {
                i() !== null && c() && Pe(Re);
              });
            }
            M(ue, ke);
          },
          $$slots: { default: !0 }
        });
      }
      var Ae = z(Ve, 2);
      {
        let Ce = he(() => Array.isArray(s()) ? s() : s()?.url);
        xc(Ae, {
          get value() {
            return i();
          },
          get subtitles() {
            return y(Ce);
          },
          get categories() {
            return r();
          },
          get annotations() {
            return a();
          },
          get transcript() {
            return o();
          },
          get label() {
            return e.label;
          },
          get i18n() {
            return e.i18n;
          },
          dispatch_blob: te,
          get waveform_settings() {
            return e.waveform_settings;
          },
          get waveform_options() {
            return m();
          },
          get trim_region_settings() {
            return g();
          },
          get handle_reset_value() {
            return b();
          },
          get editable() {
            return _();
          },
          get loop() {
            return e.loop;
          },
          interactive: !0,
          get onstop() {
            return e.onstop;
          },
          get onplay() {
            return e.onplay;
          },
          get onpause() {
            return e.onpause;
          },
          get onedit() {
            return e.onedit;
          },
          get mode() {
            return y(U);
          },
          set mode(ue) {
            W(U, ue, !0);
          },
          get playback_position() {
            return I();
          },
          set playback_position(ue) {
            I(ue);
          }
        });
      }
      M(ye, be);
    };
    X($, (ye) => {
      i() == null || f() ? ye(se) : ye(we, -1);
    });
  }
  var He = z($, 2);
  oh(He, {
    get sources() {
      return u();
    },
    handle_clear: ce,
    get active_source() {
      return v();
    },
    set active_source(ye) {
      v(ye);
    }
  }), re(() => {
    Ge(de, 1, `audio-container ${w() ?? ""}`, "svelte-11yq2j6"), $e(de, "data-testid", e.label ? "waveform-" + e.label : "unlabelled-audio");
  }), M(n, Ie), je();
}
var mv = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy"]), vo = /* @__PURE__ */ J("<!> <!>", 1);
function Av(n, e) {
  We(e, !0);
  var t = this && this.__awaiter || function(I, K, F, D) {
    function U(G) {
      return G instanceof F ? G : new F(function(ee) {
        ee(G);
      });
    }
    return new (F || (F = Promise))(function(G, ee) {
      function oe(O) {
        try {
          B(D.next(O));
        } catch (Y) {
          ee(Y);
        }
      }
      function H(O) {
        try {
          B(D.throw(O));
        } catch (Y) {
          ee(Y);
        }
      }
      function B(O) {
        O.done ? G(O.value) : U(O.value).then(oe, H);
      }
      B((D = D.apply(I, K || [])).next());
    });
  }, i, s, r, a;
  let o = /* @__PURE__ */ zd(e, mv), l = fe(void 0);
  e.props.stream_every = 0.1;
  class c extends iu {
    get_data() {
      const K = Object.create(null, { get_data: { get: () => super.get_data } });
      return t(this, void 0, void 0, function* () {
        return y(l) && (yield y(l), yield fn()), yield K.get_data.call(this);
      });
    }
  }
  const d = new c(o);
  let u = he(() => d.shared.label || d.i18n("audio.audio")), h = he(() => (s = (i = o.minimal) !== null && i !== void 0 ? i : d.props.minimal) !== null && s !== void 0 ? s : !1), f = he(() => d.props.sources ? d.props.sources[0] : null), g = fe(yt(d.props.value));
  const m = () => {
    y(g) === null || d.props.value === y(g) || (d.props.value = y(g));
  };
  let p = fe(!1), v = fe(yt((r = d.props.recording) !== null && r !== void 0 ? r : !1));
  Le(() => {
    d.props.recording = y(v);
  });
  let b = "darkorange", _ = yt({
    height: 50,
    barWidth: 2,
    barGap: 3,
    cursorWidth: 2,
    cursorColor: "#ddd5e9",
    autoplay: d.props.autoplay,
    barRadius: 10,
    dragToSeek: !0,
    normalize: !0,
    minPxPerSec: 20,
    waveColor: d.props.waveform_options.waveform_color || "#9ca3af",
    progressColor: d.props.waveform_options.waveform_progress_color || b,
    mediaControls: (a = d.props.waveform_options.show_controls) !== null && a !== void 0 ? a : !1,
    sampleRate: d.props.waveform_options.sample_rate || 44100
  });
  const E = {
    color: d.props.waveform_options.trim_region_color,
    drag: !0,
    resize: !0
  };
  function T() {
    document.documentElement.style.setProperty("--trim-region-color", E.color || b);
  }
  function A(I) {
    const [K, F] = I.includes("Invalid file type") ? ["warning", "complete"] : ["error", "error"];
    d.shared.loading_status && (d.shared.loading_status.status = F, d.shared.loading_status.message = I), d.dispatch(K, I);
  }
  d.watch_for_change(), wt(() => {
    T();
  });
  var S = Ne(), w = ve(S);
  {
    var C = (I) => {
      {
        let K = he(() => y(p) ? "focus" : "base");
        ia(I, {
          variant: "solid",
          get border_mode() {
            return y(K);
          },
          padding: !1,
          allow_overflow: !1,
          get elem_id() {
            return d.shared.elem_id;
          },
          get elem_classes() {
            return d.shared.elem_classes;
          },
          get visible() {
            return d.shared.visible;
          },
          get container() {
            return d.shared.container;
          },
          get scale() {
            return d.shared.scale;
          },
          get min_width() {
            return d.shared.min_width;
          },
          children: (F, D) => {
            var U = vo(), G = ve(U);
            na(G, Zn(
              {
                get autoscroll() {
                  return d.shared.autoscroll;
                },
                get i18n() {
                  return d.i18n;
                }
              },
              () => d.shared.loading_status,
              {
                on_clear_status: () => d.dispatch("clear_status", d.shared.loading_status)
              }
            ));
            var ee = z(G, 2);
            {
              let oe = he(() => d.props.buttons ?? ["download", "share"]);
              Fp(ee, {
                get i18n() {
                  return d.i18n;
                },
                get show_label() {
                  return d.shared.show_label;
                },
                get buttons() {
                  return y(oe);
                },
                get value() {
                  return d.props.value;
                },
                get subtitles() {
                  return d.props.subtitles;
                },
                get categories() {
                  return d.props.categories;
                },
                get annotations() {
                  return d.props.annotations;
                },
                get transcript() {
                  return d.props.transcript;
                },
                get label() {
                  return y(u);
                },
                get loop() {
                  return d.props.loop;
                },
                get waveform_settings() {
                  return _;
                },
                get waveform_options() {
                  return d.props.waveform_options;
                },
                get editable() {
                  return d.props.editable;
                },
                get minimal() {
                  return y(h);
                },
                on_custom_button_click: (H) => {
                  d.dispatch("custom_button_click", { id: H });
                },
                onshare: (H) => d.dispatch("share", H),
                onerror: (H) => d.dispatch("error", H.detail),
                onplay: () => d.dispatch("play"),
                onpause: () => d.dispatch("pause"),
                onstop: () => d.dispatch("stop"),
                get playback_position() {
                  return d.props.playback_position;
                },
                set playback_position(H) {
                  d.props.playback_position = H;
                }
              });
            }
            M(F, U);
          },
          $$slots: { default: !0 }
        });
      }
    }, L = (I) => {
      {
        let K = he(() => d.props.value === null && y(f) === "upload" ? "dashed" : "solid"), F = he(() => y(p) ? "focus" : "base");
        ia(I, {
          get variant() {
            return y(K);
          },
          get border_mode() {
            return y(F);
          },
          padding: !1,
          allow_overflow: !1,
          get elem_id() {
            return d.shared.elem_id;
          },
          get elem_classes() {
            return d.shared.elem_classes;
          },
          get visible() {
            return d.shared.visible;
          },
          get container() {
            return d.shared.container;
          },
          get scale() {
            return d.shared.scale;
          },
          get min_width() {
            return d.shared.min_width;
          },
          children: (D, U) => {
            var G = vo(), ee = ve(G);
            na(ee, Zn(
              {
                get autoscroll() {
                  return d.shared.autoscroll;
                },
                get i18n() {
                  return d.i18n;
                }
              },
              () => d.shared.loading_status,
              {
                on_clear_status: () => d.dispatch("clear_status", d.shared.loading_status)
              }
            ));
            var oe = z(ee, 2);
            {
              let H = he(() => d.props.buttons ?? []), B = he(() => y(f) || void 0);
              gv(oe, {
                get label() {
                  return y(u);
                },
                get show_label() {
                  return d.shared.show_label;
                },
                get buttons() {
                  return y(H);
                },
                on_custom_button_click: (O) => {
                  d.dispatch("custom_button_click", { id: O });
                },
                get value() {
                  return d.props.value;
                },
                get subtitles() {
                  return d.props.subtitles;
                },
                get categories() {
                  return d.props.categories;
                },
                get annotations() {
                  return d.props.annotations;
                },
                get transcript() {
                  return d.props.transcript;
                },
                onchange: (O) => d.props.value = O,
                onstream: (O) => {
                  d.props.value = O, d.dispatch("stream", d.props.value);
                },
                ondrag: (O) => W(p, O, !0),
                get root() {
                  return d.shared.root;
                },
                get sources() {
                  return d.props.sources;
                },
                get active_source() {
                  return y(B);
                },
                get pending() {
                  return d.shared.loading_status.pending;
                },
                get streaming() {
                  return d.props.streaming;
                },
                get loop() {
                  return d.props.loop;
                },
                get max_file_size() {
                  return d.shared.max_file_size;
                },
                handle_reset_value: m,
                get editable() {
                  return d.props.editable;
                },
                onedit: () => d.dispatch("edit"),
                onplay: () => d.dispatch("play"),
                onpause: () => d.dispatch("pause"),
                onstop: () => d.dispatch("stop"),
                onstart_recording: () => d.dispatch("start_recording"),
                onpause_recording: () => d.dispatch("pause_recording"),
                onstop_recording: () => {
                  d.dispatch("stop_recording"), d.dispatch("input");
                },
                onupload: () => {
                  d.dispatch("upload"), d.dispatch("input");
                },
                onclear: () => {
                  d.dispatch("clear"), d.dispatch("input");
                },
                onerror: A,
                onclose_stream: () => d.dispatch("close_stream", "stream"),
                get i18n() {
                  return d.i18n;
                },
                get waveform_settings() {
                  return _;
                },
                get waveform_options() {
                  return d.props.waveform_options;
                },
                get trim_region_settings() {
                  return E;
                },
                get stream_every() {
                  return d.props.stream_every;
                },
                get stream_state() {
                  return d.shared.loading_status.stream_state;
                },
                upload: (...O) => d.shared.client.upload(...O),
                stream_handler: (...O) => d.shared.client.stream(...O),
                get time_limit() {
                  return d.shared.loading_status.time_limit;
                },
                get upload_promise() {
                  return y(l);
                },
                set upload_promise(O) {
                  W(l, O, !0);
                },
                get initial_value() {
                  return y(g);
                },
                set initial_value(O) {
                  W(g, O, !0);
                },
                get recording() {
                  return y(v);
                },
                set recording(O) {
                  W(v, O, !0);
                },
                get dragging() {
                  return y(p);
                },
                set dragging(O) {
                  W(p, O, !0);
                },
                get playback_position() {
                  return d.props.playback_position;
                },
                set playback_position(O) {
                  d.props.playback_position = O;
                },
                children: (O, Y) => {
                  eh(O, {
                    get i18n() {
                      return d.i18n;
                    },
                    type: "audio"
                  });
                },
                $$slots: { default: !0 }
              });
            }
            M(D, G);
          },
          $$slots: { default: !0 }
        });
      }
    };
    X(w, (I) => {
      d.shared.interactive ? I(L, -1) : I(C);
    });
  }
  M(n, S), je();
}
var pv = /* @__PURE__ */ J("<div> </div>");
function Lv(n, e) {
  let t = R(e, "selected", 3, !1);
  var i = pv();
  let s;
  var r = j(i);
  re(() => {
    s = Ge(i, 1, "svelte-s3apn9", null, s, {
      table: e.type === "table",
      gallery: e.type === "gallery",
      selected: t()
    }), Ee(r, e.value ? e.value : "");
  }), M(n, i);
}
export {
  Lv as BaseExample,
  gv as BaseInteractiveAudio,
  xc as BasePlayer,
  Fp as BaseStaticAudio,
  Av as default
};
