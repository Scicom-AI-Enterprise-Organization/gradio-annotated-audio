const ur = 1, or = 2, cr = 4, hr = 8, _r = 16, dr = 1, vr = 2, pr = 4, yr = 8, gr = 16, wr = 1, Er = 2, S = /* @__PURE__ */ Symbol("uninitialized"), en = "http://www.w3.org/1999/xhtml", mr = "http://www.w3.org/2000/svg", br = "@attach", yt = !1;
var tn = Array.isArray, nn = Array.prototype.indexOf, Ne = Array.prototype.includes, rn = Array.from, sn = Object.defineProperty, we = Object.getOwnPropertyDescriptor, ln = Object.getOwnPropertyDescriptors, an = Object.prototype, fn = Array.prototype, gt = Object.getPrototypeOf, ft = Object.isExtensible;
function Sr(e) {
  return typeof e == "function";
}
const un = () => {
};
function Tr(e) {
  return e();
}
function on(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function wt() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ar(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const T = 2, ce = 4, Te = 8, Je = 1 << 24, N = 16, L = 32, G = 64, Ye = 128, C = 512, m = 1024, b = 2048, R = 4096, O = 8192, F = 16384, _e = 32768, ut = 1 << 25, be = 65536, Me = 1 << 17, cn = 1 << 18, de = 1 << 19, Et = 1 << 20, kr = 1 << 25, ie = 65536, De = 1 << 21, oe = 1 << 22, X = 1 << 23, ne = /* @__PURE__ */ Symbol("$state"), xr = /* @__PURE__ */ Symbol("legacy props"), Cr = /* @__PURE__ */ Symbol(""), hn = /* @__PURE__ */ Symbol("attributes"), _n = /* @__PURE__ */ Symbol("class"), dn = /* @__PURE__ */ Symbol("style"), Ge = /* @__PURE__ */ Symbol("text"), Ae = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Or = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function vn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pr(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function pn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function yn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function wn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ir(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function En() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function mn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function bn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Sn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Tn() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Nr() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function An() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function mt(e) {
  return e === this.v;
}
function kn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function bt(e) {
  return !kn(e, this.v);
}
let Be = !1, xn = !1;
function Mr() {
  Be = !0;
}
let E = null;
function he(e) {
  E = e;
}
function Cn(e, t = !1, n) {
  E = {
    p: E,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      p
    ),
    l: Be && !t ? { s: null, u: null, $: [] } : null
  };
}
function Rn(e) {
  var t = (
    /** @type {ComponentContext} */
    E
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Vt(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, E = t.p, e ?? /** @type {T} */
  {};
}
function ke() {
  return !Be || E !== null && E.l === null;
}
let ee = [];
function St() {
  var e = ee;
  ee = [], on(e);
}
function K(e) {
  if (ee.length === 0 && !Ee) {
    var t = ee;
    queueMicrotask(() => {
      t === ee && St();
    });
  }
  ee.push(e);
}
function On() {
  for (; ee.length > 0; )
    St();
}
function Tt(e) {
  var t = p;
  if (t === null)
    return v.f |= X, e;
  if ((t.f & _e) === 0 && (t.f & ce) === 0)
    throw e;
  W(e, t);
}
function W(e, t) {
  if (!(t !== null && (t.f & F) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Ye) !== 0) {
        if ((t.f & _e) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
const Pn = -7169;
function w(e, t) {
  e.f = e.f & Pn | t;
}
function Qe(e) {
  (e.f & C) !== 0 || e.deps === null ? w(e, m) : w(e, R);
}
function At(e) {
  if (e !== null)
    for (const t of e)
      (t.f & T) === 0 || (t.f & ie) === 0 || (t.f ^= ie, At(
        /** @type {Derived} */
        t.deps
      ));
}
function kt(e, t, n) {
  (e.f & b) !== 0 ? t.add(e) : (e.f & R) !== 0 && n.add(e), At(e.deps), w(e, m);
}
function xe(e) {
  var t = v, n = p;
  P(null), I(null);
  try {
    return e();
  } finally {
    P(t), I(n);
  }
}
function In(e) {
  let t = 0, n = Ce(0), r;
  return () => {
    st() && (Y(n), it(() => (t === 0 && (r = at(() => e(() => me(n)))), t += 1, () => {
      K(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, me(n));
      });
    })));
  };
}
var Nn = be | de;
function Mn(e, t, n, r) {
  new Dn(e, t, n, r);
}
class Dn {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #i;
  /** @type {TemplateNode | null} */
  #v = null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #c;
  /** @type {Effect} */
  #n;
  /** @type {Effect | null} */
  #l = null;
  /** @type {Effect | null} */
  #e = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #t = null;
  #d = 0;
  #a = 0;
  #f = !1;
  /** @type {Set<Effect>} */
  #o = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #p = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #u = null;
  #g = In(() => (this.#u = Ce(this.#d), () => {
    this.#u = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    this.#i = t, this.#r = n, this.#c = (i) => {
      var f = (
        /** @type {Effect} */
        p
      );
      f.b = this, f.f |= Ye, r(i);
    }, this.parent = /** @type {Effect} */
    p.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#n = Zn(() => {
      this.#h();
    }, Nn);
  }
  #y() {
    try {
      this.#l = Q(() => this.#c(this.#i));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #m(t) {
    const n = this.#r.failed, { reset: r, invoke_onerror: s } = this.#w(t);
    K(s), n && (this.#s = Q(() => {
      n(
        this.#i,
        () => t,
        () => r
      );
    }));
  }
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  #w(t) {
    var n = !1, r = !1;
    const s = () => {
      if (n) {
        An();
        return;
      }
      n = !0, r && Sn(), this.#s !== null && Pe(this.#s, () => {
        this.#s = null;
      }), this.#_(() => {
        this.#h();
      });
    };
    return { reset: s, invoke_onerror: () => {
      try {
        r = !0, this.#r.onerror?.(t, s), r = !1;
      } catch (f) {
        W(f, this.#n && this.#n.parent);
      }
    } };
  }
  #b() {
    const t = this.#r.pending;
    t && (this.is_pending = !0, this.#e = Q(() => t(this.#i)), K(() => {
      var n = this.#t = document.createDocumentFragment(), r = Lt();
      n.append(r), this.#l = this.#_(() => Q(() => this.#c(r))), this.#a === 0 && (this.#i.before(n), this.#t = null, Pe(
        /** @type {Effect} */
        this.#e,
        () => {
          this.#e = null;
        }
      ), this.#E(
        /** @type {Batch} */
        y
      ));
    }));
  }
  #h() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#a = 0, this.#d = 0, this.#l = Q(() => {
        this.#c(this.#i);
      }), this.#a > 0) {
        var t = this.#t = document.createDocumentFragment();
        er(this.#l, t);
        const n = (
          /** @type {(anchor: Node) => void} */
          this.#r.pending
        );
        this.#e = Q(() => n(this.#i));
      } else
        this.#E(
          /** @type {Batch} */
          y
        );
    } catch (n) {
      this.error(n);
    }
  }
  /**
   * @param {Batch} batch
   */
  #E(t) {
    this.is_pending = !1, t.transfer_effects(this.#o, this.#p);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    kt(t, this.#o, this.#p);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #_(t) {
    var n = p, r = v, s = E;
    I(this.#n), P(this.#n), he(this.#n.ctx);
    try {
      return Z.ensure(), t();
    } catch (i) {
      return Tt(i), null;
    } finally {
      I(n), P(r), he(s);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #S(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#S(t, n);
      return;
    }
    this.#a += t, this.#a === 0 && (this.#E(n), this.#e && Pe(this.#e, () => {
      this.#e = null;
    }), this.#t && (this.#i.before(this.#t), this.#t = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    this.#S(t, n), this.#d += t, !(!this.#u || this.#f) && (this.#f = !0, K(() => {
      this.#f = !1, this.#u && je(this.#u, this.#d);
    }));
  }
  get_effect_pending() {
    return this.#g(), Y(
      /** @type {Source<number>} */
      this.#u
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!this.#r.onerror && !this.#r.failed)
      throw t;
    y?.is_fork ? (this.#l && y.skip_effect(this.#l), this.#e && y.skip_effect(this.#e), this.#s && y.skip_effect(this.#s), y.oncommit(() => {
      this.#T(t);
    })) : this.#T(t);
  }
  /**
   * @param {unknown} error
   */
  #T(t) {
    this.#l && (B(this.#l), this.#l = null), this.#e && (B(this.#e), this.#e = null), this.#s && (B(this.#s), this.#s = null);
    let n = this.#r.failed;
    const r = (s) => {
      const { reset: i, invoke_onerror: f } = this.#w(s);
      f(), n && (this.#s = this.#_(() => {
        try {
          return Q(() => {
            var a = (
              /** @type {Effect} */
              p
            );
            a.b = this, a.f |= Ye, n(
              this.#i,
              () => s,
              () => i
            );
          });
        } catch (a) {
          return W(
            a,
            /** @type {Effect} */
            this.#n.parent
          ), null;
        }
      }));
    };
    K(() => {
      var s;
      try {
        s = this.transform_error(t);
      } catch (i) {
        W(i, this.#n && this.#n.parent);
        return;
      }
      s !== null && typeof s == "object" && typeof /** @type {any} */
      s.then == "function" ? s.then(
        r,
        /** @param {unknown} e */
        (i) => W(i, this.#n && this.#n.parent)
      ) : r(s);
    });
  }
}
function Fn(e, t, n, r) {
  const s = ke() ? et : Bn;
  var i = e.filter((h) => !h.settled), f = t.map(s);
  if (n.length === 0 && i.length === 0) {
    r(f);
    return;
  }
  var a = (
    /** @type {Effect} */
    p
  ), l = Ln(), u = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function _(h) {
    if ((a.f & F) === 0) {
      l();
      try {
        r([...f, ...h]);
      } catch (d) {
        W(d, a);
      }
      Fe();
    }
  }
  var o = xt();
  if (n.length === 0) {
    u.then(() => _([])).finally(o);
    return;
  }
  function c() {
    Promise.all(n.map((h) => /* @__PURE__ */ jn(h))).then(_).catch((h) => W(h, a)).finally(o);
  }
  u ? u.then(() => {
    l(), c(), Fe();
  }) : c();
}
function Ln() {
  var e = (
    /** @type {Effect} */
    p
  ), t = v, n = E, r = (
    /** @type {Batch} */
    y
  );
  return function(i = !0) {
    I(e), P(t), he(n), i && (e.f & F) === 0 && (r?.activate(), r?.apply());
  };
}
function Fe(e = !0) {
  I(null), P(null), he(null), e && y?.deactivate();
}
function xt() {
  var e = (
    /** @type {Effect} */
    p
  ), t = e.b, n = (
    /** @type {Batch} */
    y
  ), r = !!t?.is_rendered();
  return t?.update_pending_count(1, n), n.increment(r, e), () => {
    t?.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  var t = T | b;
  return p !== null && (p.f |= de), {
    ctx: E,
    deps: null,
    effects: null,
    equals: mt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      S
    ),
    wv: 0,
    parent: p,
    ac: null
  };
}
const pe = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function jn(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    p
  );
  r === null && vn();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Ce(
    /** @type {V} */
    S
  ), f = !v, a = /* @__PURE__ */ new Set();
  return Xn(() => {
    var l = (
      /** @type {Effect} */
      p
    ), u = wt();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (h) => {
        h !== Ae && u.reject(h);
      }).finally(Fe);
    } catch (h) {
      u.reject(h), Fe();
    }
    var _ = (
      /** @type {Batch} */
      y
    );
    if (f) {
      if ((l.f & _e) !== 0)
        var o = xt();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        r.b?.is_rendered()
      )
        _.async_deriveds.get(l)?.reject(pe);
      else
        for (const h of a.values())
          h.reject(pe);
      a.add(u), _.async_deriveds.set(l, u);
    }
    const c = (h, d = void 0) => {
      o?.(), a.delete(u), d !== pe && (_.activate(), d ? (i.f |= X, je(i, d)) : ((i.f & X) !== 0 && (i.f ^= X), je(i, h)), _.deactivate());
    };
    u.promise.then(c, (h) => c(null, h || "unknown"));
  }), Ht(() => {
    for (const l of a)
      l.reject(pe);
  }), new Promise((l) => {
    function u(_) {
      function o() {
        _ === s ? l(i) : u(s);
      }
      _.then(o, o);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Dr(e) {
  const t = /* @__PURE__ */ et(e);
  return $t(t), t;
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  const t = /* @__PURE__ */ et(e);
  return t.equals = bt, t;
}
function Hn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      B(
        /** @type {Effect} */
        t[n]
      );
  }
}
function tt(e) {
  var t, n = p, r = e.parent;
  if (!J && r !== null && e.v !== S && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (r.f & (F | O)) !== 0)
    return Tn(), e.v;
  I(r);
  try {
    e.f &= ~ie, Hn(e), t = Xt(e);
  } finally {
    I(n);
  }
  return t;
}
function Ct(e) {
  var t = tt(e);
  if (!e.equals(t) && (e.wv = Kt(), (!y?.is_fork || e.deps === null) && (y !== null ? (y.capture(e, t, !0), $e?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    w(e, m);
    return;
  }
  J || (M !== null ? (st() || y?.is_fork) && M.set(e, t) : Qe(e));
}
function Vn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && xe(() => {
        t.ac.abort(Ae), t.ac = null;
      }), t.fn !== null && (t.teardown = un), Se(t, 0), lt(t));
}
function Rt(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && le(t);
}
let qe = null, fe = null, y = null, $e = null, M = null, ze = null, Ee = !1, Ue = !1, ue = null, Oe = null;
var ot = 0;
let qn = 1;
class Z {
  id = qn++;
  /** True as soon as `#process` was called */
  #i = !1;
  linked = !0;
  /** @type {Batch | null} */
  #v = null;
  /** @type {Batch | null} */
  #r = null;
  /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
  async_deriveds = /* @__PURE__ */ new Map();
  /**
   * The current values of any signals that are updated in this batch.
   * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Value, [any, boolean]>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Value, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #c = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #l = 0;
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #s = null;
  /**
   * The root effects that need to be flushed
   * @type {Effect[]}
   */
  #t = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #d = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #a = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #f = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #o = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #p = /* @__PURE__ */ new Set();
  is_fork = !1;
  #u = !1;
  constructor() {
    fe === null ? qe = fe = this : (fe.#r = this, this.#v = fe), fe = this;
  }
  #g() {
    if (this.is_fork) return !0;
    for (const r of this.#e.keys()) {
      for (var t = r, n = !1; t.parent !== null; ) {
        if (this.#o.has(t)) {
          n = !0;
          break;
        }
        t = t.parent;
      }
      if (!n)
        return !0;
    }
    return !1;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    this.#o.has(t) || this.#o.set(t, { d: [], m: [] }), this.#p.delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = this.#o.get(t);
    if (r) {
      this.#o.delete(t);
      for (var s of r.d)
        w(s, b), n(s);
      for (s of r.m)
        w(s, R), n(s);
    }
    this.#p.add(t);
  }
  #y() {
    this.#i = !0, ot++ > 1e3 && (this.#_(), Yn());
    for (const l of this.#a)
      this.#f.delete(l), w(l, b), this.schedule(l);
    for (const l of this.#f)
      w(l, R), this.schedule(l);
    const t = this.#t;
    this.#t = [], this.apply();
    var n = ue = [], r = [], s = Oe = [];
    for (const l of t)
      try {
        this.#m(l, n, r);
      } catch (u) {
        throw It(l), this.#g() || this.discard(), u;
      }
    if (y = null, s.length > 0) {
      var i = Z.ensure();
      for (const l of s)
        i.schedule(l);
    }
    if (ue = null, Oe = null, this.#g()) {
      this.#h(r), this.#h(n);
      for (const [l, u] of this.#o)
        Pt(l, u);
      s.length > 0 && /** @type {unknown} */
      y.#y();
      return;
    }
    const f = this.#w();
    if (f) {
      this.#h(r), this.#h(n), f.#b(this);
      return;
    }
    this.#a.clear(), this.#f.clear();
    for (const l of this.#c) l(this);
    this.#c.clear(), $e = this, ct(r), ct(n), $e = null, this.#s?.resolve();
    var a = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      y
    );
    if (this.#l === 0 && (this.#t.length === 0 || a !== null) && this.#_(), this.#t.length > 0)
      if (a !== null) {
        const l = a;
        l.#t.push(...this.#t.filter((u) => !l.#t.includes(u)));
      } else
        a = this;
    a !== null && a.#y();
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #m(t, n, r) {
    t.f ^= m;
    for (var s = t.first; s !== null; ) {
      var i = s.f, f = (i & (L | G)) !== 0, a = f && (i & m) !== 0, l = a || (i & O) !== 0 || this.#o.has(s);
      if (!l && s.fn !== null) {
        f ? s.f ^= m : (i & ce) !== 0 ? n.push(s) : ve(s) && ((i & N) !== 0 && this.#f.add(s), le(s));
        var u = s.first;
        if (u !== null) {
          s = u;
          continue;
        }
      }
      for (; s !== null; ) {
        var _ = s.next;
        if (_ !== null) {
          s = _;
          break;
        }
        s = s.parent;
      }
    }
  }
  #w() {
    for (var t = this.#v; t !== null; ) {
      if (!t.is_fork) {
        for (const [n, [, r]] of this.current)
          if (t.current.has(n) && !r)
            return t;
      }
      t = t.#v;
    }
    return null;
  }
  /**
   * @param {Batch} batch
   */
  #b(t) {
    for (const [r, s] of t.current)
      !this.previous.has(r) && t.previous.has(r) && this.previous.set(r, t.previous.get(r)), this.current.set(r, s);
    for (const [r, s] of t.async_deriveds) {
      const i = this.async_deriveds.get(r);
      i && s.promise.then(i.resolve).catch(i.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#a, t.#f);
    const n = (r) => {
      var s = r.reactions;
      if (s !== null && !((r.f & T) !== 0 && (r.f & (b | R)) === 0))
        for (const a of s) {
          var i = a.f;
          if ((i & T) !== 0)
            n(
              /** @type {Derived} */
              a
            );
          else {
            var f = (
              /** @type {Effect} */
              a
            );
            i & (oe | N) && !this.async_deriveds.has(f) && (this.#f.delete(f), w(f, b), this.schedule(f));
          }
        }
    };
    for (const r of this.current.keys())
      n(r);
    this.oncommit(() => t.discard()), t.#_(), y = this, this.#y();
  }
  /**
   * @param {Effect[]} effects
   */
  #h(t) {
    for (var n = 0; n < t.length; n += 1)
      kt(t[n], this.#a, this.#f);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== S && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & X) === 0 && (this.current.set(t, [n, r]), M?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, M = null;
  }
  flush() {
    try {
      Ue = !0, y = this, this.#y();
    } finally {
      ot = 0, ze = null, ue = null, Oe = null, Ue = !1, y = null, M = null, re.clear();
    }
  }
  discard() {
    for (const t of this.#n) t(this);
    this.#n.clear();
    for (const t of this.async_deriveds.values())
      t.reject(pe);
    this.#_(), this.#s?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    this.#d.push(t);
  }
  #E() {
    for (let o = qe; o !== null; o = o.#r) {
      var t = o.id < this.id, n = [];
      for (const [c, [h, d]] of this.current) {
        if (o.current.has(c)) {
          var r = (
            /** @type {[any, boolean]} */
            o.current.get(c)[0]
          );
          if (t && h !== r)
            o.current.set(c, [h, d]);
          else
            continue;
        }
        n.push(c);
      }
      if (t)
        for (const [c, h] of this.async_deriveds) {
          const d = o.async_deriveds.get(c);
          d && h.promise.then(d.resolve).catch(d.reject);
        }
      var s = [...o.current.keys()].filter(
        (c) => !/** @type {[any, boolean]} */
        o.current.get(c)[1]
      );
      if (!(!o.#i || s.length === 0)) {
        var i = s.filter((c) => !this.current.has(c));
        if (i.length === 0)
          t && o.discard();
        else if (n.length > 0) {
          if (t)
            for (const c of this.#p)
              o.unskip_effect(c, (h) => {
                (h.f & (N | oe)) !== 0 ? o.schedule(h) : o.#h([h]);
              });
          o.activate();
          var f = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
          for (var l of n)
            Ot(l, i, f, a);
          a = /* @__PURE__ */ new Map();
          var u = [...o.current].filter(([c, h]) => {
            const d = this.current.get(c);
            return d ? d[0] !== h[0] || d[1] !== h[1] : !0;
          }).map(([c]) => c);
          if (u.length > 0)
            for (const c of this.#d)
              (c.f & (F | O | Me)) === 0 && nt(c, u, a) && ((c.f & (oe | N)) !== 0 ? (w(c, b), o.schedule(c)) : o.#a.add(c));
          if (o.#t.length > 0 && !o.#u) {
            o.apply();
            for (var _ of o.#t)
              o.#m(_, [], []);
            o.#t = [];
          }
          o.deactivate();
        }
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (this.#l += 1, t) {
      let r = this.#e.get(n) ?? 0;
      this.#e.set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (this.#l -= 1, t) {
      let r = this.#e.get(n) ?? 0;
      r === 1 ? this.#e.delete(n) : this.#e.set(n, r - 1);
    }
    this.#u || (this.#u = !0, K(() => {
      this.#u = !1, this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      this.#a.add(r);
    for (const r of n)
      this.#f.add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    this.#c.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#n.add(t);
  }
  settled() {
    return (this.#s ??= wt()).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new Z();
      !Ue && !Ee && K(() => {
        t.#i || t.flush();
      });
    }
    return y;
  }
  apply() {
    {
      M = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (ze = t, t.b?.is_pending && (t.f & (ce | Te | Je)) !== 0 && (t.f & _e) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (ue !== null && n === p && (v === null || (v.f & T) === 0))
        return;
      if ((r & (G | L)) !== 0) {
        if ((r & m) === 0)
          return;
        n.f ^= m;
      }
    }
    this.#t.push(n);
  }
  #_() {
    if (this.linked) {
      var t = this.#v, n = this.#r;
      t === null ? qe = n : t.#r = n, n === null ? fe = t : n.#v = t, this.linked = !1;
    }
  }
}
function Un(e) {
  var t = Ee;
  Ee = !0;
  try {
    for (var n; ; ) {
      if (On(), y === null)
        return (
          /** @type {T} */
          n
        );
      y.flush();
    }
  } finally {
    Ee = t;
  }
}
function Yn() {
  try {
    wn();
  } catch (e) {
    W(e, ze);
  }
}
let q = null;
function ct(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (F | O)) === 0 && ve(r) && (q = /* @__PURE__ */ new Set(), le(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ut(r), q?.size > 0)) {
        re.clear();
        for (const s of q) {
          if ((s.f & (F | O)) !== 0) continue;
          const i = [s];
          let f = s.parent;
          for (; f !== null; )
            q.has(f) && (q.delete(f), i.push(f)), f = f.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (F | O)) === 0 && le(l);
          }
        }
        q.clear();
      }
    }
    q = null;
  }
}
function Ot(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & T) !== 0 ? Ot(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (i & (oe | N)) !== 0 && (i & b) === 0 && nt(s, t, r) && (w(s, b), rt(
        /** @type {Effect} */
        s
      ));
    }
}
function nt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ne.call(t, s))
        return !0;
      if ((s.f & T) !== 0 && nt(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function rt(e) {
  y.schedule(e);
}
function Pt(e, t) {
  if (!((e.f & L) !== 0 && (e.f & m) !== 0)) {
    (e.f & b) !== 0 ? t.d.push(e) : (e.f & R) !== 0 && t.m.push(e), w(e, m);
    for (var n = e.first; n !== null; )
      Pt(n, t), n = n.next;
  }
}
function It(e) {
  w(e, m);
  for (var t = e.first; t !== null; )
    It(t), t = t.next;
}
let Le = /* @__PURE__ */ new Set();
const re = /* @__PURE__ */ new Map();
let Nt = !1;
function Ce(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mt,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  const n = Ce(e);
  return $t(n), n;
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t = !1, n = !0) {
  const r = Ce(e);
  return t || (r.equals = bt), Be && n && E !== null && E.l !== null && (E.l.s ??= []).push(r), r;
}
function Lr(e, t) {
  return U(
    e,
    at(() => Y(e))
  ), t;
}
function U(e, t, n = !1) {
  v !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!D || (v.f & Me) !== 0) && ke() && (v.f & (T | N | oe | Me)) !== 0 && (H === null || !H.has(e)) && bn();
  let r = n ? ye(t) : t;
  return je(e, r, Oe);
}
function je(e, t, n = null) {
  if (!e.equals(t)) {
    re.set(e, J ? t : e.v);
    var r = Z.ensure();
    if (r.capture(e, t), (e.f & T) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & b) !== 0 && tt(s), M === null && Qe(s);
    }
    e.wv = Kt(), Mt(e, b, n), ke() && p !== null && (p.f & m) !== 0 && (p.f & (L | G)) === 0 && (x === null ? tr([e]) : x.push(e)), !r.is_fork && Le.size > 0 && !Nt && Gn();
  }
  return t;
}
function Gn() {
  Nt = !1;
  for (const e of Le) {
    (e.f & m) !== 0 && w(e, R);
    let t;
    try {
      t = ve(e);
    } catch {
      t = !0;
    }
    t && le(e);
  }
  Le.clear();
}
function jr(e, t = 1) {
  var n = Y(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function me(e) {
  U(e, e.v + 1);
}
function Mt(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = ke(), i = r.length, f = 0; f < i; f++) {
      var a = r[f], l = a.f;
      if (!(!s && a === p)) {
        var u = (l & b) === 0;
        if (u && w(a, t), (l & Me) !== 0)
          Le.add(
            /** @type {Effect} */
            a
          );
        else if ((l & T) !== 0) {
          var _ = (
            /** @type {Derived} */
            a
          );
          M?.delete(_), (l & ie) === 0 && (l & C && (p === null || (p.f & De) === 0) && (a.f |= ie), Mt(_, R, n));
        } else if (u) {
          var o = (
            /** @type {Effect} */
            a
          );
          (l & N) !== 0 && q !== null && q.add(o), n !== null ? n.push(o) : rt(o);
        }
      }
    }
}
function ye(e) {
  if (typeof e != "object" || e === null || ne in e)
    return e;
  const t = gt(e);
  if (t !== an && t !== fn)
    return e;
  var n = /* @__PURE__ */ new Map(), r = tn(e), s = /* @__PURE__ */ z(0), i = se, f = (a) => {
    if (se === i)
      return a();
    var l = v, u = se;
    P(null), vt(i);
    var _ = a();
    return P(l), vt(u), _;
  };
  return r && n.set("length", /* @__PURE__ */ z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && En();
        var _ = n.get(l);
        return _ === void 0 ? f(() => {
          var o = /* @__PURE__ */ z(u.value);
          return n.set(l, o), o;
        }) : U(_, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const _ = f(() => /* @__PURE__ */ z(S));
            n.set(l, _), me(s);
          }
        } else
          U(u, S), me(s);
        return !0;
      },
      get(a, l, u) {
        if (l === ne)
          return e;
        var _ = n.get(l), o = l in a;
        if (_ === void 0 && (!o || we(a, l)?.writable) && (_ = f(() => {
          var h = ye(o ? a[l] : S), d = /* @__PURE__ */ z(h);
          return d;
        }), n.set(l, _)), _ !== void 0) {
          var c = Y(_);
          return c === S ? void 0 : c;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var _ = n.get(l);
          _ && (u.value = Y(_));
        } else if (u === void 0) {
          var o = n.get(l), c = o?.v;
          if (o !== void 0 && c !== S)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === ne)
          return !0;
        var u = n.get(l), _ = u !== void 0 && u.v !== S || Reflect.has(a, l);
        if (u !== void 0 || p !== null && (!_ || we(a, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var c = _ ? ye(a[l]) : S, h = /* @__PURE__ */ z(c);
            return h;
          }), n.set(l, u));
          var o = Y(u);
          if (o === S)
            return !1;
        }
        return _;
      },
      set(a, l, u, _) {
        var o = n.get(l), c = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          o.v; h += 1) {
            var d = n.get(h + "");
            d !== void 0 ? U(d, S) : h in a && (d = f(() => /* @__PURE__ */ z(S)), n.set(h + "", d));
          }
        if (o === void 0)
          (!c || we(a, l)?.writable) && (o = f(() => /* @__PURE__ */ z(void 0)), U(o, ye(u)), n.set(l, o));
        else {
          c = o.v !== S;
          var g = f(() => ye(u));
          U(o, g);
        }
        var $ = Reflect.getOwnPropertyDescriptor(a, l);
        if ($?.set && $.set.call(_, u), !c) {
          if (r && typeof l == "string") {
            var V = (
              /** @type {Source<number>} */
              n.get("length")
            ), ae = Number(l);
            Number.isInteger(ae) && ae >= V.v && U(V, ae + 1);
          }
          me(s);
        }
        return !0;
      },
      ownKeys(a) {
        Y(s);
        var l = Reflect.ownKeys(a).filter((o) => {
          var c = n.get(o);
          return c === void 0 || c.v !== S;
        });
        for (var [u, _] of n)
          _.v !== S && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        mn();
      }
    }
  );
}
function ht(e) {
  try {
    if (e !== null && typeof e == "object" && ne in e)
      return e[ne];
  } catch {
  }
  return e;
}
function Br(e, t) {
  return Object.is(ht(e), ht(t));
}
var _t, $n, Dt, Ft;
function zn() {
  if (_t === void 0) {
    _t = window, $n = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Dt = we(t, "firstChild").get, Ft = we(t, "nextSibling").get, ft(e) && (e[_n] = void 0, e[hn] = null, e[dn] = void 0, e.__e = void 0), ft(n) && (n[Ge] = void 0);
  }
}
function Lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return (
    /** @type {TemplateNode | null} */
    Dt.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return (
    /** @type {TemplateNode | null} */
    Ft.call(e)
  );
}
function Hr(e, t) {
  return /* @__PURE__ */ jt(e);
}
function Vr(e, t = !1) {
  {
    var n = /* @__PURE__ */ jt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ He(n) : n;
  }
}
function qr(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ He(r);
  return r;
}
function Ur(e) {
  e.textContent = "";
}
function Yr() {
  return !1;
}
function Gr(e, t, n) {
  return t == null || t === en ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e)
  );
}
function Bt(e) {
  p === null && (v === null && gn(), yn()), J && pn();
}
function Kn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function j(e, t) {
  var n = p;
  n !== null && (n.f & O) !== 0 && (e |= O);
  var r = {
    ctx: E,
    deps: null,
    nodes: null,
    f: e | b | C,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  y?.register_created_effect(r);
  var s = r;
  if ((e & ce) !== 0)
    ue !== null ? ue.push(r) : Z.ensure().schedule(r);
  else if (t !== null) {
    try {
      le(r);
    } catch (f) {
      throw B(r), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & de) === 0 && (s = s.first, (e & N) !== 0 && (e & be) !== 0 && s !== null && (s.f |= be));
  }
  if (s !== null && (s.parent = n, n !== null && Kn(s, n), v !== null && (v.f & T) !== 0 && (e & G) === 0)) {
    var i = (
      /** @type {Derived} */
      v
    );
    (i.effects ??= []).push(s);
  }
  return r;
}
function st() {
  return v !== null && !D;
}
function Ht(e) {
  const t = j(Te, null);
  return w(t, m), t.teardown = e, t;
}
function $r(e) {
  Bt();
  var t = (
    /** @type {Effect} */
    p.f
  ), n = !v && (t & L) !== 0 && E !== null && !E.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      E
    );
    (r.e ??= []).push(e);
  } else
    return Vt(e);
}
function Vt(e) {
  return j(ce | Et, e);
}
function zr(e) {
  return Bt(), j(Te | Et, e);
}
function Wn(e) {
  Z.ensure();
  const t = j(G | de, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Pe(t, () => {
      B(t), r(void 0);
    }) : (B(t), r(void 0));
  });
}
function Kr(e) {
  return j(ce, e);
}
function Wr(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    E
  ), r = { effect: null, ran: !1, deps: e };
  n.l.$.push(r), r.effect = it(() => {
    if (e(), !r.ran) {
      r.ran = !0;
      var s = (
        /** @type {Effect} */
        p
      );
      try {
        I(s.parent), at(t);
      } finally {
        I(s);
      }
    }
  });
}
function Xr() {
  var e = (
    /** @type {ComponentContextLegacy} */
    E
  );
  it(() => {
    for (var t of e.l.$) {
      t.deps();
      var n = t.effect;
      (n.f & m) !== 0 && n.deps !== null && w(n, R), ve(n) && le(n), t.ran = !1;
    }
  });
}
function Xn(e) {
  return j(oe | de, e);
}
function it(e, t = 0) {
  return j(Te | t, e);
}
function Zr(e, t = [], n = [], r = []) {
  Fn(r, t, n, (s) => {
    j(Te, () => {
      e(...s.map(Y));
    });
  });
}
function Zn(e, t = 0) {
  var n = j(N | t, e);
  return n;
}
function Jr(e, t = 0) {
  var n = j(Je | t, e);
  return n;
}
function Q(e) {
  return j(L | de, e);
}
function qt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = J, r = v;
    dt(!0), P(null);
    try {
      t.call(null);
    } finally {
      dt(n), P(r);
    }
  }
}
function lt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && xe(() => {
      s.abort(Ae);
    });
    var r = n.next;
    (n.f & G) !== 0 ? n.parent = null : B(n, t), n = r;
  }
}
function Jn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & L) === 0 && B(t), t = n;
  }
}
function B(e, t = !0) {
  var n = !1;
  (t || (e.f & cn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Qn(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= ut, lt(e, t && !n), Se(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  qt(e), e.f ^= ut, e.f |= F;
  var s = e.parent;
  s !== null && s.first !== null && Ut(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Qn(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ He(e);
    e.remove(), e = n;
  }
}
function Ut(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Pe(e, t, n = !0) {
  var r = [];
  Yt(e, r, !0);
  var s = () => {
    n && B(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var f = () => --i || s();
    for (var a of r)
      a.out(f);
  } else
    s();
}
function Yt(e, t, n) {
  if ((e.f & O) === 0) {
    e.f ^= O;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & G) === 0) {
        var f = (s.f & be) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & L) !== 0 && (e.f & N) !== 0;
        Yt(s, t, f ? n : !1);
      }
      s = i;
    }
  }
}
function Qr(e) {
  Gt(e, !0);
}
function Gt(e, t) {
  if ((e.f & O) !== 0) {
    e.f ^= O, (e.f & m) === 0 && (w(e, b), Z.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & be) !== 0 || (n.f & L) !== 0;
      Gt(n, s ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const f of i)
        (f.is_global || t) && f.in();
  }
}
function er(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ He(n);
      t.append(n), n = s;
    }
}
let Ie = !1, J = !1;
function dt(e) {
  J = e;
}
let v = null, D = !1;
function P(e) {
  v = e;
}
let p = null;
function I(e) {
  p = e;
}
let H = null;
function $t(e) {
  v !== null && (H ??= /* @__PURE__ */ new Set()).add(e);
}
let A = null, k = 0, x = null;
function tr(e) {
  x = e;
}
let zt = 1, te = 0, se = te;
function vt(e) {
  se = e;
}
function Kt() {
  return ++zt;
}
function ve(e) {
  var t = e.f;
  if ((t & b) !== 0)
    return !0;
  if (t & T && (e.f &= ~ie), (t & R) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (ve(
        /** @type {Derived} */
        i
      ) && Ct(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & C) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    M === null && w(e, m);
  }
  return !1;
}
function Wt(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(H !== null && H.has(e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & T) !== 0 ? Wt(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? w(i, b) : (i.f & m) !== 0 && w(i, R), rt(
        /** @type {Effect} */
        i
      ));
    }
}
function Xt(e) {
  var t = A, n = k, r = x, s = v, i = H, f = E, a = D, l = se, u = e.f;
  A = /** @type {null | Value[]} */
  null, k = 0, x = null, v = (u & (L | G)) === 0 ? e : null, H = null, he(e.ctx), D = !1, se = ++te, e.ac !== null && (xe(() => {
    e.ac.abort(Ae);
  }), e.ac = null);
  try {
    e.f |= De;
    var _ = (
      /** @type {Function} */
      e.fn
    ), o = _();
    e.f |= _e;
    var c = e.deps, h = y?.is_fork;
    if (A !== null) {
      var d;
      if (h || Se(e, k), c !== null && k > 0)
        for (c.length = k + A.length, d = 0; d < A.length; d++)
          c[k + d] = A[d];
      else
        e.deps = c = A;
      if (st() && (e.f & C) !== 0)
        for (d = k; d < c.length; d++)
          (c[d].reactions ??= []).push(e);
    } else !h && c !== null && k < c.length && (Se(e, k), c.length = k);
    if (ke() && x !== null && !D && c !== null && (e.f & (T | R | b)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      x.length; d++)
        Wt(
          x[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (te++, s.deps !== null)
        for (let g = 0; g < n; g += 1)
          s.deps[g].rv = te;
      if (t !== null)
        for (const g of t)
          g.rv = te;
      x !== null && (r === null ? r = x : r.push(.../** @type {Source[]} */
      x));
    }
    return (e.f & X) !== 0 && (e.f ^= X), o;
  } catch (g) {
    return Tt(g);
  } finally {
    e.f ^= De, A = t, k = n, x = r, v = s, H = i, he(f), D = a, se = l;
  }
}
function nr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = nn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & T) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (A === null || !Ne.call(A, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & C) !== 0 && (i.f ^= C, i.f &= ~ie), i.v !== S && Qe(i), i.ac !== null && xe(() => {
      i.ac.abort(Ae), i.ac = null, w(i, b);
    }), Vn(i), Se(i, 0);
  }
}
function Se(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      nr(e, n[r]);
}
function le(e) {
  var t = e.f;
  if ((t & F) === 0) {
    w(e, m);
    var n = p, r = Ie;
    p = e, Ie = (t & (L | G)) === 0;
    try {
      (t & (N | Je)) !== 0 ? Jn(e) : lt(e), qt(e);
      var s = Xt(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = zt;
      var i;
      yt && xn && (e.f & b) !== 0 && e.deps;
    } finally {
      Ie = r, p = n;
    }
  }
}
async function es() {
  await Promise.resolve(), Un();
}
function Y(e) {
  var t = e.f, n = (t & T) !== 0;
  if (v !== null && !D) {
    var r = p !== null && (p.f & F) !== 0;
    if (!r && (H === null || !H.has(e))) {
      var s = v.deps;
      if ((v.f & De) !== 0)
        e.rv < te && (e.rv = te, A === null && s !== null && s[k] === e ? k++ : A === null ? A = [e] : A.push(e));
      else {
        v.deps ??= [], Ne.call(v.deps, e) || v.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [v] : Ne.call(i, v) || i.push(v);
      }
    }
  }
  if (J && re.has(e))
    return re.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (J) {
      var a = f.v;
      return ((f.f & m) === 0 && f.reactions !== null || Jt(f)) && (a = tt(f)), re.set(f, a), a;
    }
    var l = (f.f & C) === 0 && !D && v !== null && (Ie || (v.f & C) !== 0), u = (f.f & _e) === 0;
    ve(f) && (l && (f.f |= C), Ct(f)), l && !u && (Rt(f), Zt(f));
  }
  if (M?.has(e))
    return M.get(e);
  if ((e.f & X) !== 0)
    throw e.v;
  return e.v;
}
function Zt(e) {
  if (e.f |= C, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & T) !== 0 && (t.f & C) === 0 && (Rt(
        /** @type {Derived} */
        t
      ), Zt(
        /** @type {Derived} */
        t
      ));
}
function Jt(e) {
  if (e.v === S) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (re.has(t) || (t.f & T) !== 0 && Jt(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function at(e) {
  var t = D;
  try {
    return D = !0, e();
  } finally {
    D = t;
  }
}
function ts(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ne in e)
      Ke(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ne in n && Ke(n);
      }
  }
}
function Ke(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ke(e[r], t);
      } catch {
      }
    const n = gt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ln(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
const ge = /* @__PURE__ */ Symbol("events"), Qt = /* @__PURE__ */ new Set(), We = /* @__PURE__ */ new Set();
function rr(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Xe.call(t, i), !i.cancelBubble)
      return xe(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? K(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function ns(e, t, n, r, s) {
  var i = { capture: r, passive: s }, f = rr(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Ht(() => {
    t.removeEventListener(e, f, i);
  });
}
function rs(e, t, n) {
  (t[ge] ??= {})[e] = n;
}
function ss(e) {
  for (var t = 0; t < e.length; t++)
    Qt.add(e[t]);
  for (var n of We)
    n(e);
}
let pt = null;
function Xe(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  pt = e;
  var f = 0, a = pt === e && e[ge];
  if (a) {
    var l = s.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ge] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (i = /** @type {Element} */
  s[f] || e.target, i !== t) {
    sn(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var _ = v, o = p;
    P(null), I(null);
    try {
      for (var c, h = []; i !== null && i !== t; ) {
        try {
          var d = i[ge]?.[r];
          d != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && d.call(i, e);
        } catch (g) {
          c ? h.push(g) : c = g;
        }
        if (e.cancelBubble) break;
        f++, i = f < s.length ? (
          /** @type {Element} */
          s[f]
        ) : null;
      }
      if (c) {
        for (let g of h)
          queueMicrotask(() => {
            throw g;
          });
        throw c;
      }
    } finally {
      e[ge] = t, delete e.currentTarget, P(_), I(o);
    }
  }
}
function is(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const sr = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function ls(e) {
  return sr.includes(e);
}
const ir = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function as(e) {
  return e = e.toLowerCase(), ir[e] ?? e;
}
const lr = ["touchstart", "touchmove"];
function ar(e) {
  return lr.includes(e);
}
function fs(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[Ge] ??= e.nodeValue) && (e[Ge] = n, e.nodeValue = `${n}`);
}
function us(e, t) {
  return fr(e, t);
}
const Re = /* @__PURE__ */ new Map();
function fr(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: f = !0, transformError: a }) {
  zn();
  var l = void 0, u = Wn(() => {
    var _ = n ?? t.appendChild(Lt());
    Mn(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (h) => {
        Cn({});
        var d = (
          /** @type {ComponentContext} */
          E
        );
        i && (d.c = i), s && (r.$$events = s), l = e(h, r) || {}, Rn();
      },
      a
    );
    var o = /* @__PURE__ */ new Set(), c = (h) => {
      for (var d = 0; d < h.length; d++) {
        var g = h[d];
        if (!o.has(g)) {
          o.add(g);
          var $ = ar(g);
          for (const Ve of [t, document]) {
            var V = Re.get(Ve);
            V === void 0 && (V = /* @__PURE__ */ new Map(), Re.set(Ve, V));
            var ae = V.get(g);
            ae === void 0 ? (Ve.addEventListener(g, Xe, { passive: $ }), V.set(g, 1)) : V.set(g, ae + 1);
          }
        }
      }
    };
    return c(rn(Qt)), We.add(c), () => {
      for (var h of o)
        for (const $ of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            Re.get($)
          ), g = (
            /** @type {number} */
            d.get(h)
          );
          --g == 0 ? ($.removeEventListener(h, Xe), d.delete(h), d.size === 0 && Re.delete($)) : d.set(h, g);
        }
      We.delete(c), _ !== n && _.parentNode?.removeChild(_);
    };
  });
  return Ze.set(l, u), l;
}
let Ze = /* @__PURE__ */ new WeakMap();
function os(e, t) {
  const n = Ze.get(e);
  return n ? (Ze.delete(e), n(t)) : Promise.resolve();
}
export {
  dn as $,
  E as A,
  Be as B,
  $r as C,
  je as D,
  be as E,
  Pr as F,
  Bn as G,
  rn as H,
  or as I,
  Ce as J,
  ur as K,
  _r as L,
  kr as M,
  cr as N,
  F as O,
  O as P,
  L as Q,
  hr as R,
  Ur as S,
  wr as T,
  He as U,
  mr as V,
  Kr as W,
  it as X,
  ts as Y,
  Jr as Z,
  _n as _,
  U as a,
  Nr as a0,
  Br as a1,
  hn as a2,
  en as a3,
  Cr as a4,
  ln as a5,
  Or as a6,
  Fn as a7,
  br as a8,
  is as a9,
  In as aA,
  z as aB,
  Cn as aC,
  qr as aD,
  Zr as aE,
  Rn as aF,
  Hr as aG,
  Mr as aH,
  Wr as aI,
  Xr as aJ,
  Vr as aK,
  ns as aL,
  Lr as aM,
  fs as aN,
  Dr as aO,
  Ar as aP,
  es as aQ,
  us as aR,
  os as aS,
  rs as aa,
  ss as ab,
  rr as ac,
  as as ad,
  S as ae,
  ls as af,
  ut as ag,
  ne as ah,
  zr as ai,
  Tr as aj,
  on as ak,
  et as al,
  we as am,
  Ir as an,
  pr as ao,
  ye as ap,
  yr as aq,
  vr as ar,
  dr as as,
  gr as at,
  J as au,
  xr as av,
  jr as aw,
  I as ax,
  Sr as ay,
  st as az,
  Y as b,
  Gr as c,
  sn as d,
  Lt as e,
  jt as f,
  gt as g,
  $n as h,
  tn as i,
  p as j,
  Er as k,
  B as l,
  Fr as m,
  un as n,
  an as o,
  Pe as p,
  K as q,
  Qr as r,
  kn as s,
  Ht as t,
  at as u,
  Q as v,
  y as w,
  er as x,
  Yr as y,
  Zn as z
};
